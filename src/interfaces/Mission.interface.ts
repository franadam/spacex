interface ILink {
  patch: {
    small: string;
    large: string;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface IMission {
  id: string;
  image: string;
  name: string;
  details: string;
  date_utc: string;
  success: boolean;
  links: ILink;
}

export type { IMission };
