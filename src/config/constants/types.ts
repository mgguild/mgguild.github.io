export interface PageMeta {
    title: string
    description?: string
    image?: string
}

export interface RoadmapConfig {
    [key: string]: Quarter
}

export interface Quarter {
    [key: string]: {txt: string, check: boolean}[]
}