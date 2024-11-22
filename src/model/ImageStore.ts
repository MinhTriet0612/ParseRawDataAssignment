
export interface ImageStore {
  rooms: Image[];
  site: Image[];
  amenities: Image[];
}

export interface Image {
  link: String;
  description: String;
}
