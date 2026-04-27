export function SkillPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center px-1.5 py-0.5 rounded-sm text-[10px] font-mono",
        "border transition-all duration-150 cursor-pointer select-none leading-none",
        active
          ? "bg-black text-white border-black"
          : "bg-transparent text-zinc-700 border-zinc-400 hover:border-black hover:text-black",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
