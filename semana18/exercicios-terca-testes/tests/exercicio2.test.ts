import { validateCharacter } from "../src/exercicio1";

describe('testes do exercício 2', () => {
    
    //A)
    test("Should return false for empty name", () => {
        const result = validateCharacter({
        name: "",
        life: 1500,
        strength: 300,
        defense: 500,
        });
    
        expect(result).toBe(false);
    });
    
    //B)
    test("Should return false for empty life", () => {
        const result = validateCharacter({
        name: "Subzero",
        life: 0,
        strength: 300,
        defense: 500,
        });
    
        expect(result).toBe(false);
    });
    
    //C)
    test("Should return false for empty strength", () => {
        const result = validateCharacter({
        name: "Subzero",
        life: 1500,
        strength: 0,
        defense: 500,
        });
    
        expect(result).toBe(false);
    });
    
    //D)
    test("Should return false for negative valor", () => {
        const result = validateCharacter({
        name: "Subzero",
        life: 1500,
        strength: 300,
        defense: -100,
        });
    
        expect(result).toBe(false);
    });

    //F)
    test("Should return true for all valid informations", () => {
        const result = validateCharacter({
        name: "Scorpion",
        life: 1500,
        strength: 300,
        defense: 500,
        });
    
        expect(result).toBe(true);
    });
});