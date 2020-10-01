import { Character, validateCharacter } from "../src/exercicio1";
import { performAttack } from "../src/exercicio3";

describe('testes do exercício 5', () => {
    
    //A)

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
        return true;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    //B)

    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
        return false;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
        };
    
        try {
        performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
        }
    });

    //6)

    test("Should perform attack with negative strength value", () => {
        const validatorMock = jest.fn(() => {
        return true;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: -600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1500);
    });

    test("Should perform attack with negative life value", () => {
        const validatorMock = jest.fn(() => {
        return true;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: -1500,
        defense: 200,
        strength: 600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
    });

    test("Should perform attack with negative defense value", () => {
        const validatorMock = jest.fn(() => {
        return true;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: -200,
        strength: 600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: 400,
        strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
    });

    test("Should perform attack with negative defense value for defender", () => {
        const validatorMock = jest.fn(() => {
        return true;
        });
    
        const attacker: Character = {
        name: "Scorpion",
        life: 1500,
        defense: 200,
        strength: 600,
        };
    
        const defender: Character = {
        name: "Kitana",
        life: 1500,
        defense: -400,
        strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(500);
    });
});