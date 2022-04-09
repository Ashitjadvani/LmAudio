export class productItemSchema {
    Id: String;
    proName: String;
    proDetails: String;
    proDescription: String;
    placing: String;
    imageUrl: String;
    qty: Number;
    rate: Number;
    total: Number;
}

export class Quot {
    _id: string;
    id:string;
    quotNumber: String;
    cstId: String;
    cstName: String;
    cstContact: String;
    cstEmail: String;
    cstAddress: String;
    refName: String;
    refContact: String;
    productItem: [productItemSchema];
    totalAmount: Number;
    totalQty: Number;
    date: Date
}
