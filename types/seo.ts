export type Metadata = {
    title: string,
    description?: string,
    openGraph?: {
      images: [
        {
          url: string,
          width: number,
          height: number,
          alt: string,
        },
      ],
    },
    metadataBase?: URL,
    alternates?: {
      canonical: string,
    },
    keywords?: string[],
}