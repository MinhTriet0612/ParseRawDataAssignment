import { HotelStoreContext } from "../context/HotelStoreContext";
import { SupplierOperationFactory } from "../factory/SupplierFactory";
import { Hotel } from "../model/Hotel";
import { Pipeline } from "../pipeline/Pipeline";

export class SupplierController {

  private context: HotelStoreContext;
  private pipeline: Pipeline<HotelStoreContext>;

  public constructor() {
    this.context = {
      hotelStore: new Map<string, Hotel>()
    }

    this.pipeline = new Pipeline<HotelStoreContext>();
  }

  public addUrlQuery(url: string): this {
    this.pipeline.addOperation(SupplierOperationFactory.getOperationFactory(url));
    return this;
  }

  public async execute(): Promise<void> {
    await this.pipeline.execute(this.context);
  }

  public getContext(): HotelStoreContext {
    return this.context;
  }

  public filterByHotelIdsAndDestionationIds(hotel_ids: string[], destination_ids: number[]): Hotel[] | [] {
    if (hotel_ids.length === 0) {
      if (destination_ids.length !== 0) {
        return [];
      }
      else {
        return Array.from(this.context.hotelStore.values());
      }
    }

    return Array.from(this.context.hotelStore.values())
      .filter((hotel) => hotel_ids.includes(hotel.id))
      .filter((hotel) => destination_ids.includes(hotel.destination_id));
  }
}