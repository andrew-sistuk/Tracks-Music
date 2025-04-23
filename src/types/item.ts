//відповідно до схеми беку
export type Item = {
  id?: string;
  title?: string;
  artist?: string;
  album?: string;
  genres?: string[];
  slug?: string;
  coverImage?: string;
  audioFile?: string;
  createdAt?: Date;
  updatedAt?: Date;
}