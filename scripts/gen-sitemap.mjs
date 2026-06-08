import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { SitemapStream } from "sitemap";
import { routes } from "../src/routes.js";

const hostname = "https://tucalmapsicologia.com";
const sitemapPath = "dist/sitemap.xml";

await mkdir("dist", { recursive: true });

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream(sitemapPath);

sitemap.pipe(writeStream);

routes
  .filter((route) => route.path && route.path !== "*")
  .forEach((route) => {
    sitemap.write({
      url: route.path,
      changefreq: route.path === "/" ? "weekly" : "monthly",
      priority: route.path === "/" ? 1 : 0.8,
    });
  });

sitemap.end();

await new Promise((resolve, reject) => {
  writeStream.on("finish", resolve);
  writeStream.on("error", reject);
});
