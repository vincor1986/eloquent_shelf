const fetchExtraData = async (isbn) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.totalItems > 0) {
      const bookInfo = data.items[0].volumeInfo;
      const cover_image = bookInfo.imageLinks?.thumbnail || null;
      const rating = bookInfo.averageRating || 2.5;
      const ratings_count = bookInfo.ratingsCount || 0;
      const page_count = bookInfo.pageCount || "Unknown";
      return { cover_image, rating, ratings_count, page_count };
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
