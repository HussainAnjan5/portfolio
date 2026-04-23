// src/pages/api/github-contributions.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const sources = [
    "https://ghchart.rshah.org/0066ff/HussainAnjan5",
    "https://ghchart.rshah.org/HussainAnjan5",
  ];

  try {
    for (const source of sources) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      try {
        const res = await fetch(source, {
          headers: { "User-Agent": "AstroApp" },
          signal: controller.signal,
        });

        if (!res.ok) {
          continue;
        }

        const svg = await res.text();
        if (!svg.includes("<svg")) {
          continue;
        }

        return new Response(svg, {
          headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "s-maxage=86400, stale-while-revalidate", // cache 1 day
          },
        });
      } finally {
        clearTimeout(timeout);
      }
    }

    return new Response("Failed to fetch chart", { status: 502 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
