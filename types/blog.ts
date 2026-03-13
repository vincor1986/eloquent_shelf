export type Blog = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _system: { base: any };
    _type: string;
    author: string;
    content: any[];
    main_image: any;
    meta_description: string;
    published_at: Date;
    updated_at: Date;
    read_time_minutes: number;
    slug: string;
    subtitle: string;
    tags: string[]; 
    title: string;
    related_summaries?: any[];
}