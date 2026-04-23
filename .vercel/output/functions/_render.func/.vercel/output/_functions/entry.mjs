import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Box1efbZ.mjs';
import { manifest } from './manifest_D4biK-e7.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/github-contributions.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/legal/_---slug_.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/search.astro.mjs');
const _page11 = () => import('./pages/services/_slug_.astro.mjs');
const _page12 = () => import('./pages/services.astro.mjs');
const _page13 = () => import('./pages/work.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/github-contributions.ts", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/contact/index.astro", _page4],
    ["src/pages/legal/[...slug].astro", _page5],
    ["src/pages/projects/index.astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/search/index.astro", _page10],
    ["src/pages/services/[slug].astro", _page11],
    ["src/pages/services/index.astro", _page12],
    ["src/pages/work/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "473937f2-434c-4731-b82e-590c4b445c12",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
