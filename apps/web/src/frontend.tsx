import { StrictMode, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function FaviconLinks() {
  useLayoutEffect(() => {
    if (document.querySelector("link[rel=icon][data-kailin-favicon]")) return;
    const iconSvg = document.createElement("link");
    iconSvg.rel = "icon";
    iconSvg.type = "image/svg+xml";
    iconSvg.href = "/kailin-avatar-favicon.svg";
    iconSvg.setAttribute("data-kailin-favicon", "1");
    document.head.appendChild(iconSvg);
    const iconPng = document.createElement("link");
    iconPng.rel = "icon";
    iconPng.type = "image/png";
    iconPng.href = "/kailin-avatar-notion-transparent.png";
    iconPng.setAttribute("sizes", "512x512");
    document.head.appendChild(iconPng);
  }, []);
  return null;
}

function AppRoot() {
  return (
    <>
      <FaviconLinks />
      <RouterProvider router={router} />
    </>
  );
}

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <AppRoot />
  </StrictMode>
);

createRoot(elem).render(app);
