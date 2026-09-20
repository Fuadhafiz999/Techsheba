import type { Metadata } from "next";

import { siteConfig } from "@/data/mockData";

export const siteUrl = `https://${siteConfig.domain}`;

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} - Full-service digital agency in Dhaka, Bangladesh`,
};

type ConstructMetadataProps = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  images?: { url: string; width?: number; height?: number; alt?: string }[];
  publishedTime?: string;
  authors?: string[];
};

/**
 * Builds a complete Metadata object for a route: canonical URL, Open Graph
 * and Twitter card tags. Keeps every page consistent and avoids thin or
 * duplicated meta tags.
 */
export function constructMetadata({
  title,
  description,
  path = "/",
  type = "website",
  images,
  publishedTime,
  authors,
}: ConstructMetadataProps): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;

  // The root /opengraph-image file convention already attaches an og:image to
  // the home route. Every other route gets the shared image (or its own) here.
  const ogImages =
    images && images.length > 0
      ? images
      : path === "/"
        ? undefined
        : [defaultOgImage];

  const twitter: Metadata["twitter"] = {
    card: "summary_large_image",
    title,
    description,
  };

  if (ogImages) {
    twitter.images = ogImages.map((img) => img.url);
  }

  const ogBase = {
    url,
    title,
    description,
    siteName: siteConfig.name,
    locale: "en_US",
  };

  const openGraph: Metadata["openGraph"] = ogImages
    ? type === "article"
      ? {
          ...ogBase,
          type: "article",
          images: ogImages,
          ...(publishedTime ? { publishedTime } : {}),
          ...(authors?.length ? { authors } : {}),
        }
      : {
          ...ogBase,
          type: "website",
          images: ogImages,
        }
    : type === "article"
      ? {
          ...ogBase,
          type: "article",
          ...(publishedTime ? { publishedTime } : {}),
          ...(authors?.length ? { authors } : {}),
        }
      : {
          ...ogBase,
          type: "website",
        };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter,
  };
}