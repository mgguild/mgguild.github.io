export interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

export interface RoadmapConfig {
  [key: string]: Quarter;
}

export interface Quarter {
  [key: string]: { txt: string; check: boolean }[];
}

interface DetailsConfig {
  name: string;
  description: string;
  image: string
}

export interface IEcosystems extends DetailsConfig{
  subtitle: string;
  status?: string;
  image: string;
}

export interface IFigures {
  amount: string;
  subtitle: string;
}

export interface RevenueModelConfig extends DetailsConfig {}
