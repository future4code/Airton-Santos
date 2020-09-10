import {Client} from './Client'

export class ClientManager {
    private clients: Client[] = [];
  
    public getClientsQuantity(): number {
      return this.clients.length;
    }
    
    public registerClient(client: Client): void {
        this.clients.push(client)
    }
    public calculateBillOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })
        if(foundClient){
            return foundClient.calculateBill()
    }
    
    return 0;

    }

    public calculateTotalIncome(): number {
        let totalIncome = 0;
        this.clients.forEach((client) => {
            totalIncome += client.calculateBill() 
        })
        return totalIncome
    }

    public deleteUser(registrationNumber: number): void {
        const clientsArray: Client[] = this.clients.filter((reg) => {
            return reg.registrationNumber !== registrationNumber
        })
        this.clients = clientsArray;
        console.log(this.clients)
    }
    
  }