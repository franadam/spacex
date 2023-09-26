interface IRocket {
  id: string;
  flickr_images: string[];
  name: string;
  description: string;
  first_flight: string;
  country: string;
  success_rate_pct: number;
  cost_per_launch: number;
  active: boolean;
}

export type { IRocket };
