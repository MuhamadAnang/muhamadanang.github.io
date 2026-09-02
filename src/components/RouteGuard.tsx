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

    if (pathname in routes) {
      return routes[pathname as keyof typeof routes];
    }

    const dynamicRoutes = ["/blog", "/work"] as const;
    for (const route of dynamicRoutes) {
      if (pathname?.startsWith(route) && routes[route]) {
        return true;
      }
    }

    return false;
  };

  if (!isRouteEnabled()) {
    return <NotFound />;
  }

  return <>{children}</>;
};

export { RouteGuard };
