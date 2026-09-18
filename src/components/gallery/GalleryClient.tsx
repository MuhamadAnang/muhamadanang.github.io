"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Column, SegmentedControl, Text } from "@/once-ui/components";
import MasonryGrid, { GalleryImage } from "./MasonryGrid";

type Category = { id: string; label: string };

type GalleryClientProps = {
  images: GalleryImage[];
  categories: Category[];
};

const ALL = "all";

export default function GalleryClient({ images, categories }: GalleryClientProps) {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory =
    requestedCategory && categories.some((category) => category.id === requestedCategory)
      ? requestedCategory
      : ALL;

  const [selected, setSelected] = useState(initialCategory);

  const filteredImages = useMemo(
    () => (selected === ALL ? images : images.filter((image) => image.category === selected)),
    [images, selected],
  );

  return (
    <Column fillWidth gap="24">
      <SegmentedControl
        fillWidth={false}
        buttons={[
          { value: ALL, label: "All" },
          ...categories.map((category) => ({ value: category.id, label: category.label })),
        ]}
        selected={selected}
        onToggle={setSelected}
      />
      {filteredImages.length > 0 ? (
        <MasonryGrid images={filteredImages} />
      ) : (
        <Text onBackground="neutral-weak" variant="body-default-m">
          Nothing in this category yet — check back soon.
        </Text>
      )}
    </Column>
  );
}
