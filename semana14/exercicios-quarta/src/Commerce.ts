import {Place} from './Place'
import { Client } from './Client';

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getFloorsQuantity(): number {
        return this.floorsQuantity;
      }
  }