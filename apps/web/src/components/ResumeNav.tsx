import { NavLink } from "react-router-dom";

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    "text-xs text-zinc-400 transition-colors",
    isActive ? "text-zinc-600" : "hover:text-zinc-500",
  ].join(" ");
}

export function ResumeNav() {
  return (
    <nav className="flex items-center justify-end gap-4 sm:gap-5" aria-label="Main">
      <NavLink to="/" end className={linkClass}>
        Resume
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
    </nav>
  );
}
