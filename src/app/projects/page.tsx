import { Suspense } from "react";
import { Column, Heading, Text } from "@/once-ui/components";
import ProjectsClient from "@/components/projects/ProjectsClient";
import { baseURL } from "@/app/resources";
import { projects, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = projects.title;
  const description = projects.description;
  const ogImage = `https://${baseURL}/images/cover.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects`,
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

export default function Projects() {
  return (
    <Column fillWidth gap="24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: projects.title,
            description: projects.description,
            url: `https://${baseURL}/projects`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column gap="4">
        <Heading as="h1" variant="display-strong-xs" wrap="balance">
          {projects.title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {projects.description}
        </Text>
      </Column>
      <Suspense>
        <ProjectsClient items={projects.items} categories={projects.categories} />
      </Suspense>
    </Column>
  );
}
