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
  Tag,
  Text,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import {
  home,
  about,
  person,
  social,
  socialCreative,
  socialHobby,
} from "@/app/resources/content";
import styles from "./home.module.scss";

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
    <Column maxWidth="m" gap="l" horizontal="center">
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

      <Flex className={styles.hero} fillWidth paddingY="l" gap="xl" vertical="center">
        <Column className={styles.heroCopy} maxWidth="s" gap="m">
          <RevealFx translateY="4" fillWidth horizontal="start">
            <Tag size="l" prefixIcon="check" variant="brand">
              {person.role}
            </Tag>
          </RevealFx>
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="start">
            <Heading wrap="balance" variant="display-strong-m">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
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

        <Column className={styles.heroPortrait} as="figure" fillWidth>
          <SmartImage
            src={person.avatar}
            alt="Anang working as a creative technologist"
            aspectRatio="4 / 5"
            sizes="(max-width: 720px) 100vw, 360px"
          />
        </Column>
      </Flex>

      <RevealFx translateY="16" delay={0.4} fillWidth>
        <Flex className={styles.skillsSection} fillWidth gap="xl" vertical="center">
          <Column className={styles.skillsPortrait} as="figure" fillWidth>
            <SmartImage
              src="/images/gue.webp"
              alt="Anang at a creative event"
              aspectRatio="4 / 5"
              sizes="(max-width: 720px) 100vw, 320px"
            />
          </Column>
          <Column className={styles.skillsCopy} fillWidth gap="m">
            <Column as="ul" gap="12">
              {home.highlights.map((item, index) => (
                <Flex as="li" key={index} gap="12" vertical="center">
                  <Icon name="check" onBackground="brand-weak" />
                  <Text variant="body-default-m">{item}</Text>
                </Flex>
              ))}
            </Column>
            <Flex gap="12" wrap horizontal="start">
              <Button href={home.cta.primaryHref} variant="primary" size="m" arrowIcon>
                {home.cta.primaryLabel}
              </Button>
              <Button
                href={home.cta.driveHref}
                variant="secondary"
                size="m"
                prefixIcon="openLink"
              >
                {home.cta.driveLabel}
              </Button>
              <Button
                href={home.cta.cvHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="m"
                prefixIcon="clipboard"
              >
                {home.cta.cvLabel}
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="tertiary"
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
            </Flex>
          </Column>
        </Flex>
      </RevealFx>

      <RevealFx translateY="16" delay={0.55}>
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            What I do
          </Heading>
          <Flex fillWidth wrap gap="l">
            {home.skillGroups.map((group) => (
              <Column key={group.category} gap="8" style={{ flex: "1 1 220px" }}>
                <Flex gap="8" vertical="center">
                  <Icon name={group.icon} onBackground="brand-weak" size="s" />
                  <Text variant="label-strong-s" onBackground="neutral-weak">
                    {group.category}
                  </Text>
                </Flex>
                <Flex wrap gap="8">
                  {group.items.map((item) => (
                    <Tag key={item} size="m" variant="neutral">
                      {item}
                    </Tag>
                  ))}
                </Flex>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.6}>
        <Column id="work" fillWidth gap="m">
          <Column gap="4">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              {home.showcase.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {home.showcase.subtitle}
            </Text>
          </Column>
          <Flex fillWidth wrap gap="8">
            {home.showcase.images.map((image, index) => (
              <Column
                key={index}
                border="neutral-medium"
                radius="m"
                overflow="hidden"
                gap="0"
                style={{
                  flex: image.orientation === "vertical" ? "1 1 220px" : "1 1 320px",
                }}
              >
                <SmartImage
                  enlarge
                  aspectRatio={image.orientation === "vertical" ? "3 / 4" : "16 / 10"}
                  sizes="(max-width: 960px) 100vw, 400px"
                  alt={image.alt}
                  src={image.src}
                />
                <Column fillWidth gap="4" padding="12">
                  <Tag size="s" variant="brand">
                    {image.category}
                  </Tag>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {image.title}
                  </Text>
                </Column>
              </Column>
            ))}
          </Flex>
          <Flex horizontal="start">
            <Button href="/gallery" variant="tertiary" size="s" arrowIcon>
              See more in the gallery
            </Button>
          </Flex>
        </Column>
      </RevealFx>

      <RevealFx translateY="16" delay={0.65}>
        <Column fillWidth gap="m">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Connect & more of my work
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Not everything I make is published on this site — these are the places to see it.
          </Text>

          <Flex fillWidth wrap gap="8">
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    variant="secondary"
                    size="m"
                  >
                    {item.name}
                  </Button>
                ),
            )}
          </Flex>

          <Column gap="8" paddingTop="8">
            <Text variant="label-strong-s" onBackground="neutral-weak">
              Creative & business brands
            </Text>
            <Flex fillWidth wrap gap="8">
              {socialCreative.map(
                (item) =>
                  item.link && (
                    <Button
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefixIcon={item.icon}
                      variant="secondary"
                      size="s"
                    >
                      {item.name}
                    </Button>
                  ),
              )}
            </Flex>
          </Column>

          {socialHobby.length > 0 && (
            <Flex gap="8" vertical="center" paddingTop="4">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Also on the side:
              </Text>
              {socialHobby.map(
                (item) =>
                  item.link && (
                    <Text key={item.name} variant="body-default-s">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "underline" }}
                      >
                        {item.name}
                      </a>
                    </Text>
                  ),
              )}
            </Flex>
          )}
        </Column>
      </RevealFx>
    </Column>
  );
}
