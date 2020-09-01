import {Employee} from './Employee'

export class Sellers extends Employee {
    private salesQuantity: number = 0;
    static SELLING_COMMISSION: number = 5;

    public getSalesQuantity(): number {
      return this.salesQuantity
    }

    public setSalesQuantity(quantity: number): void{
      this.salesQuantity = quantity;
    }

    public calculateTotalSalary(): number {
      return this.baseSalary + Employee.BENEFITS_VALUE + Sellers.SELLING_COMMISSION * this.salesQuantity
    }
  }