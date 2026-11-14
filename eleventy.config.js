const path = require("node:path");
const Image = require("@11ty/eleventy-img");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// One set of image options, shared by the HTML transform and the hero shortcodes,
// so the hero preload link points at exactly the files the page uses.
const IMAGE_OPTIONS = {
  widths: [400, 800, 1200],
  formats: ["webp", "jpeg"],
  urlPath: "/img/",
  outputDir: "./_site/img/",
  sharpWebpOptions: { quality: 72 },
  sharpJpegOptions: { quality: 76, progressive: true },
  sharpPngOptions: { compressionLevel: 9 },
};

const HERO_WIDTHS = [640, 960, 1440, 1920];

function heroOptions() {
  return { ...IMAGE_OPTIONS, widths: HERO_WIDTHS, formats: ["webp", "jpeg"] };
}

function srcPath(file) {
  return path.join(__dirname, "src/images", file);
}

module.exports = function (eleventyConfig) {
  // Every <img src="/images/..."> in the output becomes a responsive <picture>
  // (WebP + JPEG, width/height, lazy loading unless the tag says otherwise).
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    ...IMAGE_OPTIONS,
    htmlOptions: {
      imgAttributes: { loading: "lazy", decoding: "async" },
    },
  });

  // Banner photo: eager, high priority, art-directed with object-position.
  eleventyConfig.addAsyncShortcode("heroImage", async (file, alt, pos = "50% 50%") => {
    const meta = await Image(srcPath(file), heroOptions());
    return Image.generateHTML(meta, {
      alt,
      sizes: "100vw",
      loading: "eager",
      decoding: "async",
      fetchpriority: "high",
      class: "hero__img",
      style: `object-position:${pos}`,
      "eleventy:ignore": "",
    });
  });

  // Matching <link rel="preload"> for the banner photo (goes in <head>).
  eleventyConfig.addAsyncShortcode("heroPreload", async (file) => {
    if (!file) return "";
    const meta = await Image(srcPath(file), heroOptions());
    const srcset = meta.webp.map((i) => i.srcset).join(", ");
    return `<link rel="preload" as="image" type="image/webp" imagesrcset="${srcset}" imagesizes="100vw" fetchpriority="high">`;
  });

  // Drop the marker attribute that keeps the image transform off the banner photo.
  eleventyConfig.addTransform("strip-ignore-attr", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) return content.replace(/ eleventy:ignore(="")?/g, "");
    return content;
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/og-image.jpg");
  eleventyConfig.addWatchTarget("src/assets/css/");

  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  // True for values still waiting on the client, e.g. "[FROM VALLYPRO]".
  eleventyConfig.addFilter("isPlaceholder", (v) => !v || /^\[.*\]$/.test(String(v).trim()));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "txt"],
  };
};
