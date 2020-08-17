


export class Product{
    
    public _id: string;
    public name: string;
    public quantity: string;
    public costPrice: string;
    public sellingPrice: string;



    constructor(id:string,name:string,quantity:string,costPrice:string,sellingPrice:string){
         this._id = id;
         this.name = name;
         this.quantity = quantity;
         this.costPrice = costPrice;
         this.sellingPrice = sellingPrice;
    }

}