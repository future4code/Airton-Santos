import {performPurchase, User} from '../src/index'

describe('testes para a função de conta do usuário', () => {
        test('teste com um usuário com o saldo maior do que o valor de compra', () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }

        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    });

    test("teste com um usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    });

    test("teste com um usuário com o saldo menor do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual(undefined)
    });

});