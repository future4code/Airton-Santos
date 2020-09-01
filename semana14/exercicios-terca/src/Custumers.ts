import {User} from './User'

export class Custumers extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string,
      purchaseTotal: number
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = this.purchaseTotal;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

    // public purchase(value: number): number {
    //   return this.purchaseTotal += value
    // }
  }