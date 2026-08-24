import * as simpleIcons from "simple-icons";

interface SkillIconBadgeProps {
  slug: string;
  name: string;
}

function getIcon(slug: string) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
  return simpleIcons[key] as { path: string; hex: string } | undefined;
}

export default function SkillIconBadge({ slug, name }: SkillIconBadgeProps) {
  const icon = getIcon(slug);
  if (!icon) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-line">
      <svg
        role="img"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill={`#${icon.hex}`}
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
      <span className="text-sm font-medium text-ink">{name}</span>
    </div>
  );
}
