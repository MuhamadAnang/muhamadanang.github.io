import { Column, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, experience } from "@/app/resources/content";

export async function generateMetadata() {
  const title = experience.title;
  const description = experience.description;
  const ogImage = `https://${baseURL}/images/cover.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/experience/`,
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

export default function Experience() {
  return (
    <Column maxWidth="m" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: experience.title,
            description: experience.description,
            url: `https://${baseURL}/experience`,
            mainEntity: {
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              hasOccupation: experience.positions.map((position) => ({
                "@type": "Occupation",
                name: position.role,
                occupationLocation: {
                  "@type": "Organization",
                  name: position.company,
                  url: position.link || undefined,
                },
              })),
            },
          }),
        }}
      />

      <Column maxWidth="s" gap="8">
        <Heading variant="display-strong-l">{experience.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          {experience.description}
        </Text>
      </Column>

      <Column fillWidth gap="xl">
        {experience.positions.map((position, index) => (
          <Column key={`${position.company}-${index}`} fillWidth gap="8">
            <Flex fillWidth horizontal="space-between" vertical="end" gap="12" wrap>
              <Text variant="heading-strong-l">{position.company}</Text>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                {position.timeframe}
              </Text>
            </Flex>

            <Flex gap="8" vertical="center" wrap>
              <Text variant="body-default-s" onBackground="brand-weak">
                {position.role}
              </Text>
              {position.location && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  · {position.location}
                </Text>
              )}
            </Flex>

            {position.link && (
              <SmartLink
                href={position.link}
                suffixIcon="arrowUpRightFromSquare"
                style={{ width: "fit-content" }}
              >
                <Text variant="body-default-s">{position.linkLabel || position.link}</Text>
              </SmartLink>
            )}

            {position.achievements?.length > 0 && (
              <Column as="ul" gap="12" paddingTop="4">
                {position.achievements.map((achievement, i) => (
                  <Text as="li" variant="body-default-m" key={`${position.company}-${i}`}>
                    {achievement}
                  </Text>
                ))}
              </Column>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  );
}
