import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimization server.
  images: {
    unoptimized: true,
  },
  // Emit every route as `route/index.html` so GitHub Pages serves it without a server.
  trailingSlash: true,
  // This project lints with Biome, not ESLint.
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
