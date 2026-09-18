"use client";

import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";

export type GalleryImage = {
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
  category?: string;
};

type MasonryGridProps = {
  images: GalleryImage[];
};

export default function MasonryGrid({ images }: MasonryGridProps) {
  return (
    <div className={styles.masonryGrid}>
      {images.map((image, index) => (
        <div key={index} className={styles.masonryGridItem}>
          <SmartImage
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}
