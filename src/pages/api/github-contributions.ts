import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const res = await fetch("https://ghchart.rshah.org/0066ff/HussainAnjan5", {
    headers: { "User-Agent": "AstroApp" },
  });

  const svg = await res.text();

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate", // cache 1 day
    },
  });
};
