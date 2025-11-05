import client from "@/lib/cms/client"; // your sanity client

export const GET = async () => {
  const baseUrl = "https://www.eloquentshelf.com";

  // Fetch the book summaries from Sanity
  const dataQuery = `*[_type == "summary"]{ slug, _updatedAt, categories }`;

  const allBooks = await client.fetch(dataQuery);

  const allCategories = Array.from(
    new Set(allBooks.flatMap((book) => book.categories))
  );

  // Build XML structure
  const bookUrls = allBooks
    .map((book) => {
      return `
        <url>
          <loc>${baseUrl}/summaries/${book.slug}</loc>
          <lastmod>${new Date(book._updatedAt).toISOString()}</lastmod>
          <changefreq>yearly</changefreq>
          <priority>0.8</priority>
        </url>`;
    })
    .join("");

  const categoryUrls = allCategories
    .map((cat) => {
      const allBookDates = allBooks
        .filter((book) => book.categories.includes(cat))
        .map((book) => new Date(book._updatedAt));
      const lastModDate = new Date(Math.max.apply(null, allBookDates));

      return `
        <url>
          <loc>${baseUrl}/topics/${cat.toLowerCase().replace(/\s+/g, "-")}</loc>
          <lastmod>${lastModDate.toISOString()}</lastmod>
          <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
          `;
    })
    .join("");

  const legalEndpoints = [
    "affiliate-disclosure",
    "cookie-policy",
    "dcma",
    "newsletter-policy",
    "privacy-policy",
    "terms-of-use",
  ];

  const legalUrls = legalEndpoints
    .map((endpoint) => {
      return `
        <url>
          <loc>${baseUrl}/legal/${endpoint}</loc>
          <lastmod>${new Date("2025-11-05").toISOString()}</lastmod>
          <changefreq>yearly</changefreq>
          <priority>0.2</priority>
        </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>${baseUrl}/about</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>${baseUrl}/discover</loc>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
        </url>
        <url>
          <loc>${baseUrl}/search</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>${baseUrl}/topics</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>${baseUrl}/contact</loc>
          <changefreq>yearly</changefreq>
          <priority>0.6</priority>
        </url>
        <url>
          <loc>${baseUrl}/legal</loc>
          <changefreq>monthly</changefreq>
          <priority>0.2</priority>
        </url>
        ${bookUrls}
        ${categoryUrls}
        ${legalUrls}
      </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
