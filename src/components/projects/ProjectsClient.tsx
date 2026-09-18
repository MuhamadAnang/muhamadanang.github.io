"use client";

import { ReactNode, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Card, Column, Flex, SegmentedControl, SmartImage, Tag, Text } from "@/once-ui/components";

type Category = { id: string; label: string };

export type Project = {
  title: string;
  categories: string[];
  timeframe?: string;
  description: ReactNode;
  tools: string[];
  image: string;
  link?: string;
  linkLabel?: string;
};

type ProjectsClientProps = {
  items: Project[];
  categories: Category[];
};

const ALL = "all";

export default function ProjectsClient({ items, categories }: ProjectsClientProps) {
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const initialCategory =
    requestedCategory && categories.some((category) => category.id === requestedCategory)
      ? requestedCategory
      : ALL;

  const [selected, setSelected] = useState(initialCategory);

  const categoryLabel = (id: string) => categories.find((category) => category.id === id)?.label ?? id;

  const filteredItems = useMemo(
    () => (selected === ALL ? items : items.filter((item) => item.categories.includes(selected))),
    [items, selected],
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
      {filteredItems.length > 0 ? (
        <Flex fillWidth wrap gap="16">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              direction="column"
              radius="l"
              overflow="hidden"
              style={{ flex: "1 1 320px", maxWidth: "400px" }}
            >
              <SmartImage aspectRatio="16 / 10" sizes="(max-width: 960px) 100vw, 400px" alt={item.title} src={item.image} />
              <Column fillWidth gap="8" padding="20">
                <Flex gap="8" vertical="center" wrap>
                  {item.categories.map((category) => (
                    <Tag key={category} size="s" variant="brand">
                      {categoryLabel(category)}
                    </Tag>
                  ))}
                  {item.timeframe && (
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {item.timeframe}
                    </Text>
                  )}
                </Flex>
                <Text variant="heading-strong-s">{item.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.description}
                </Text>
                {item.tools.length > 0 && (
                  <Flex wrap gap="8" paddingTop="4">
                    {item.tools.map((tool) => (
                      <Tag key={tool} size="s" variant="neutral">
                        {tool}
                      </Tag>
                    ))}
                  </Flex>
                )}
                {item.link && (
                  <Flex paddingTop="8">
                    <Button href={item.link} target="_blank" rel="noopener noreferrer" variant="secondary" size="s" arrowIcon>
                      {item.linkLabel ?? "View project"}
                    </Button>
                  </Flex>
                )}
              </Column>
            </Card>
          ))}
        </Flex>
      ) : (
        <Text onBackground="neutral-weak" variant="body-default-m">
          Nothing in this category yet — check back soon.
        </Text>
      )}
    </Column>
  );
}
