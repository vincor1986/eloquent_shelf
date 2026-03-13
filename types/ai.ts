export type DiscoverFormData = {
  forMe: boolean,
  forName: string,
  forAge: string,
  forInterests: string[],
  categories: ("Classics" | "Modern" | "Lesser Known" | "Must Reads")[],
}

export type BookData = {
    title: string;
    author: string;
    reading_difficulty: "beginner" | "intermediate" | "advanced";
    cover_image?: string | null;
    rating?: number;
    ratings_count?: number;
    page_count?: number | "Unknown";
    isbn?: string | null;
    blurb?: string | false | void;
    read_time_minutes?: number | "Unknown";
}

export type InitialBookResults = {
    success: boolean,
    books?: BookData[],
}

    