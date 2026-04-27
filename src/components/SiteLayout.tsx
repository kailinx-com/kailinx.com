import { Outlet } from "react-router-dom";
import { ResumeNav } from "./ResumeNav";

export function SiteLayout() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-[min(9in,100%)] px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8">
        <header className="flex justify-end">
          <ResumeNav />
        </header>
        <div className="mt-4 sm:mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
