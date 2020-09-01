import {Employee} from './Employee'

export class Sellers extends Employee {
    private salesQuantity: number = 0

    public getSalesQuantity(): number {
      return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void{
      this.salesQuantity = quantity;
    }
  }