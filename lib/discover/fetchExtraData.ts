import stringSimilarity from "string-similarity-js";

type DataOutput = {
  cover_image: string | null,
  rating: number,
  ratings_count: number,
  page_count: number | "Unknown",
  isbn?: string | null,
  authorCheckScore?: number,
}

type GoogleBooksResponse = {
  totalItems: number,
  items: {
    id: string,
    volumeInfo: {
      title: string,
      authors?: string[],
      imageLinks?: {
        thumbnail: string,
      },
      averageRating?: number,
      ratingsCount?: number,
      pageCount?: number,
      industryIdentifiers?: {
        type: string,
        identifier: string,
      }[],
    },
  }[],
}

const fetchExtraData = async (title: string, author: string): Promise<DataOutput> => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}+author:${author}`;

  try {
    const res = await fetch(url);
    const data: GoogleBooksResponse = await res.json();

    if (data.totalItems > 0) {
      const cleansedAuthor = author.replaceAll(" and ", ", ");

      const bestMatch = data.items.sort(
        (a, b) =>
          stringSimilarity(
            b.volumeInfo.authors?.join(", ") || "",
            cleansedAuthor
          ) -
          stringSimilarity(
            a.volumeInfo.authors?.join(", ") || "",
            cleansedAuthor
          )
      )[0];

      const authorCheckScore = stringSimilarity(
        cleansedAuthor,
        bestMatch.volumeInfo.authors?.join(", ") || ""
      );

      const bookInfo = bestMatch.volumeInfo;

      const cover_image = bookInfo.imageLinks?.thumbnail || null;
      const rating = bookInfo.averageRating || 2.5;
      const ratings_count = bookInfo.ratingsCount || 0;
      const page_count = bookInfo.pageCount || "Unknown";

      const isbn =
        bookInfo.industryIdentifiers?.find((id) => id.type === "ISBN_13")
          ?.identifier || null;

      return {
        cover_image,
        rating,
        ratings_count,
        page_count,
        isbn,
        authorCheckScore,
      };
    } else {
      return {
        cover_image: null,
        rating: 2.5,
        ratings_count: 0,
        page_count: "Unknown",
      };
    }
  } catch (error) {
    console.error("Error fetching extra data from Google Books API:", error);
    return {
      cover_image: null,
      rating: 2.5,
      ratings_count: 0,
      page_count: "Unknown",
    };
  }
};

export default fetchExtraData;
