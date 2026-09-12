import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";

const galleryDirectory = path.join(process.cwd(), "public/images/gallery");
const supportedImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

async function getGalleryImages() {
  const filenames = fs
    .readdirSync(galleryDirectory)
    .filter((filename) => supportedImageExtensions.has(path.extname(filename).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  return Promise.all(
    filenames.map(async (filename) => {
      const metadata = await sharp(path.join(galleryDirectory, filename)).metadata();
      const name = path.basename(filename, path.extname(filename)).replace(/[-_]+/g, " ");

      return {
        src: `/images/gallery/${encodeURIComponent(filename)}`,
        alt: name,
        orientation:
          (metadata.width ?? 0) >= (metadata.height ?? 0) ? ("horizontal" as const) : ("vertical" as const),
      };
    }),
  );
}

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `https://${baseURL}/images/cover.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/gallery`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Gallery() {
  const images = await getGalleryImages();

  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            image: images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={images} />
    </Flex>
  );
}
