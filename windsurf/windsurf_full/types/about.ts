export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    link?: string;
}

export interface Talk {
    id: string;
    title: string;
    excerpt: string;
    thumbnailUrl?: string;
    link: string;
}
