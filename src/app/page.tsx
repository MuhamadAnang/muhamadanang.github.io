import React from "react";

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  RevealFx,
  SmartImage,
  Text,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/images/cover.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
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

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: home.description,
            url: `https://${baseURL}`,
            image: `https://${baseURL}${person.avatar}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: person.locationLabel,
            },
          }),
        }}
      />

      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s" gap="m">
          <RevealFx translateY="4" fillWidth horizontal="start">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.3} fillWidth horizontal="start">
            <Flex gap="8" vertical="center" onBackground="neutral-weak">
              <Icon name="globe" onBackground="accent-weak" />
              <Text variant="body-default-s">{person.locationLabel}</Text>
            </Flex>
          </RevealFx>
        </Column>

        <RevealFx translateY="16" delay={0.4}>
          <Column as="ul" gap="12" paddingTop="8">
            {home.highlights.map((item, index) => (
              <Flex as="li" key={index} gap="12" vertical="center">
                <Icon name="check" onBackground="brand-weak" />
                <Text variant="body-default-m">{item}</Text>
              </Flex>
            ))}
          </Column>
        </RevealFx>

        <RevealFx translateY="16" delay={0.5} horizontal="start">
          <Button
            id="about"
            data-border="rounded"
            href="/about"
            variant="secondary"
            size="m"
            arrowIcon
          >
            <Flex gap="8" vertical="center">
              {about.avatar.display && (
                <Avatar
                  style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                  src={person.avatar}
                  size="m"
                />
              )}
              Get to know me
            </Flex>
          </Button>
        </RevealFx>
      </Column>

      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.showcase.title}
          </Heading>
          <Flex fillWidth wrap gap="8">
            {home.showcase.images.map((image, index) => (
              <Flex
                key={index}
                border="neutral-medium"
                radius="m"
                overflow="hidden"
                style={{
                  flex: image.orientation === "vertical" ? "1 1 220px" : "1 1 320px",
                }}
              >
                <SmartImage
                  enlarge
                  radius="m"
                  aspectRatio={image.orientation === "vertical" ? "3 / 4" : "16 / 10"}
                  sizes="(max-width: 960px) 100vw, 400px"
                  alt={image.alt}
                  src={image.src}
                />
              </Flex>
            ))}
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
