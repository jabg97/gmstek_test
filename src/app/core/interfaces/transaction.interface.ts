import { IImage } from "./core.interface";


export interface ITransaction {
  _id: number,
    date: string,
    merch_invoice: number,
    merchant: string,
    location: string,
    icao_iata: string,
    dodaac: string,
    tail: string,
    item: string,
    total: string,
    card: string,
    status: string,
    images?:  IImage[],
}


export interface IDetail {
  _id: number,
    merchant_description: string,
    product_code: number,
    quantity: string,
    retail_price: string,
    gov_price: string,
    amount: string,
    transaction_id: number,
}

export interface IHistory {
  _id: number,
    event: string,
    date_time: string,
    transaction_id: number,
}
