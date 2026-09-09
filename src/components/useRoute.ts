import { useEffect, useState } from "react";

/** Hash routing: "#/confidentialite" is a page, "#section" an in-page anchor. */
export function useRoute() {
  const read = () => {
    if (typeof window === "undefined") return "";
    const h = window.location.hash;
    return h.startsWith("#/") ? h.slice(2) : "";
  };

  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onHash = () => setRoute(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}
