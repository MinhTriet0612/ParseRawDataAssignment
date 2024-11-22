import { Amentity } from "./Amentity";
import { ImageStore } from "./ImageStore";
import { Location } from "./Location";

export class Hotel {
  id: String;
  destination_id: number;
  name: String;
  location: Location;
  description: String;
  amenities: Amentity;
  images: ImageStore;
  booking_conditions: String[];

  constructor() { }

  setLocation(locationTmp: Location): void {
    const location: Location = this?.location;
    if (!location)
      this.location = locationTmp
    if (!location?.address && locationTmp?.address)
      location.address = locationTmp.address;
    if (!location?.city && locationTmp?.city)
      location.city = locationTmp.city;
    if (!location?.country && locationTmp?.country)
      location.country = locationTmp.country;
    if (!location?.lat && locationTmp.lat)
      location.lat = locationTmp.lat;
    if (!location?.lng && locationTmp.lng)
      location.lng = locationTmp.lng;
  }

  setDescription(description: String): void {
    if (!this?.description && description)
      this.description = description;
  }

  setName(name: String): void {
    if (!this?.name && name)
      this.name = name;
  }

  setAmenities(amenities: Amentity): void {
    if (!this?.amenities && amenities)
      this.amenities = amenities;

    if ((!this?.amenities?.general || this.amenities?.general.length === 0) && amenities.general)
      this.amenities.general = amenities.general;

    if ((!this?.amenities?.room || this.amenities?.room.length === 0) && amenities.room)
      this.amenities.room = amenities.room;
  }

  setImages(images: ImageStore): void {
    if (!this?.images && images)
      this.images = images;

    if ((!this?.images?.site && this?.images?.site.length === 0) && images?.site)
      this.images.site = images.site;

    if ((!this?.images?.rooms || this?.images?.rooms.length === 0) && images?.rooms)
      this.images.rooms = images.rooms;


    if ((!this?.images?.amenities || this?.images?.amenities.length === 0) && images?.amenities) {
      this.images.amenities = images.amenities;
    }

  }

  setBookingConditions(booking_conditions: String[]): void {
    if ((!this?.booking_conditions || this?.booking_conditions.length === 0) && booking_conditions)
      this.booking_conditions = booking_conditions
  }

  public updateHotelData(hotelTmp: Hotel): void {
    this.setLocation(hotelTmp.location);
    this.setDescription(hotelTmp.description);
    this.setName(hotelTmp.name);
    this.setImages(hotelTmp.images);
    this.setAmenities(hotelTmp.amenities);
    this.setBookingConditions(hotelTmp.booking_conditions);
  }
}

