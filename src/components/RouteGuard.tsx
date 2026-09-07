"use client";

import { usePathname } from "next/navigation";
import { routes } from "@/app/resources";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();

  const isRouteEnabled = (): boolean => {
    if (!pathname) return false;

    // `trailingSlash: true` (needed for GitHub Pages) makes usePathname() return
    // e.g. "/about/", so strip the trailing slash before matching route keys.
    const normalized = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;

    if (normalized in routes) {
      return routes[normalized as keyof typeof routes];
    }

    return false;
  };

  if (!isRouteEnabled()) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
