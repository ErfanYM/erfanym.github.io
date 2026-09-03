import { useSyncExternalStore } from "react";

/**
 * The rail renders two ThemeToggle instances at once (desktop aside + mobile
 * bar), one always hidden by CSS depending on viewport. Module-level state
 * with a subscriber list keeps both instances in sync — a per-instance
 * useState would let the hidden one drift stale and stomp the theme back on
 * its next click after a viewport change.
 */
function getInitialDark(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
  } catch {
    // localStorage unavailable (e.g. Safari private mode) — fall through
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

let darkState = getInitialDark();
const listeners = new Set<(dark: boolean) => void>();

function applyDark(dark: boolean) {
  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", dark);
  }
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // localStorage unavailable — theme just won't persist
  }
}

function setDarkState(dark: boolean) {
  darkState = dark;
  applyDark(dark);
  listeners.forEach((listener) => listener(dark));
}

function subscribe(callback: () => void) {
  const listener = () => callback();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, () => darkState, () => false);

  return (
    <button
      type="button"
      onClick={() => setDarkState(!darkState)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="meta -m-2 p-2 text-muted transition-colors duration-150 hover:text-ink"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
