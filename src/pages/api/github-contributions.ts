// src/pages/api/github-contributions.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const res = await fetch("https://ghchart.rshah.org/0066ff/HussainAnjan5", {
      headers: { "User-Agent": "AstroApp" },
    });

    if (!res.ok) {
      return new Response("Failed to fetch chart", { status: res.status });
    }

    const svg = await res.text();

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "s-maxage=86400, stale-while-revalidate", // cache 1 day
      },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
