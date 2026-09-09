import { useEffect, useState } from "react";

export type Route = { path: string; query: URLSearchParams };

/** Hash routing: "#/contact?sujet=support" is a page, "#section" an anchor. */
export function useRoute(): Route {
  const read = (): Route => {
    if (typeof window === "undefined") {
      return { path: "", query: new URLSearchParams() };
    }
    const h = window.location.hash;
    if (!h.startsWith("#/")) return { path: "", query: new URLSearchParams() };

    const [path, qs = ""] = h.slice(2).split("?");
    return { path, query: new URLSearchParams(qs) };
  };

  const [route, setRoute] = useState<Route>(read);

  useEffect(() => {
    const onHash = () => setRoute(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}
