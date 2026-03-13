import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Breadcrumb = { 
    label: string,
    href: string,
}

export type Topic = { 
    topic: string; 
    description: string; 
    bg: string; 
    image: StaticImport; 
    slug: string; 
    invert?: boolean;
}
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};