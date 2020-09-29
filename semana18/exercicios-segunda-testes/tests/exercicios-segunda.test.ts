import { createPost } from '../src/controller/createPost';
import {Casino, LOCATION, NACIONALITY, performPurchase, User, UserClient, verifyAge} from '../src/index'

describe('testes para a função de conta do usuário', () => {
        test('teste com um usuário com o saldo maior do que o valor de compra', () => {
        const user: UserClient = {
            name: "Airton",
            balance: 600
        }

        const result = performPurchase(user, 500)
        
        expect(result).toEqual({
            ...user,
            balance: 100
        })
    });

    test("teste com um usuário com o saldo igual ao valor de compra", () => {
        const user: UserClient = {
            name: "Airton",
            balance: 600
        }
    
        const result = performPurchase(user, 600)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    });

    test("teste com um usuário com o saldo menor do que o valor de compra", () => {
        const user: UserClient = {
            name: "Airton",
            balance: 600
        }
    
        const result = performPurchase(user, 700)
        
        expect(result).toEqual(undefined)
    });

});

describe('testes da função do exercício 3', () => {
    test("1 brazilian allowed", () => {
        const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
    });

    test("1 american allowed", () => {
        const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Astrodev"]);
    });

    test("No one allowed", () => {
        const brazilian: User = {
        name: "Astrodev BR",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
        name: "Astrodev EUA",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
        "Astrodev EUA",
        "Astrodev EUA",
        ]);
    });

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
        name: "Astrodev BR",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
        name: "Astrodev EUA",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
    });

    test("1 brazilian allowed", () => {
        const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    });

    test("1 american allowed", () => {
        const brazilian: User = {
        name: "Astrodev",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
    });

    test("No one allowed", () => {
        const brazilian: User = {
        name: "Astrodev BR",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
        name: "Astrodev EUA",
        age: 19,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Astrodev BR");
        expect(result.americans.unallowed).toContain("Astrodev EUA");
    });

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
        name: "Astrodev BR",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
        name: "Astrodev EUA",
        age: 21,
        nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
        name: "Balada Estelar",
        location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
        brazilian,
        brazilian,
        american,
        american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });
});

describe('testes das funções assíncronas', () => {
    test("Create Post", async () => {
        const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
        };
    
        await createPost(post);
        const postFromDb = await getPostById(post.id);
    
        expect(postFromDb).not.toBe(undefined);
        expect(postFromDb).toEqual({
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
        });
    });

    // afterAll(async () => {
    //     await deletePostById("id do post");
    //     await destroyConnection();
    // });
});