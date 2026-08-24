import {
  siPython,
  siOpenjdk,
  siJavascript,
  siTypescript,
  siReact,
  siSpringboot,
  siPostgresql,
  siMysql,
  siDocker,
  siApachespark,
  type SimpleIcon,
} from "simple-icons";

interface SkillIconBadgeProps {
  slug: string;
  name: string;
}

const iconMap: Record<string, SimpleIcon> = {
  python: siPython,
  openjdk: siOpenjdk,
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  springboot: siSpringboot,
  postgresql: siPostgresql,
  mysql: siMysql,
  docker: siDocker,
  apachespark: siApachespark,
};

function getIcon(slug: string) {
  return iconMap[slug];
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
