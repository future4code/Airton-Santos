//A-
const minhaString: string = `8`;
//Ele mostra que a variavel que eu criei, tem um erro, pois eu declarei como string e atribui valor numerico.

//B-
const meuNumero: any = `8`;
//Podemos fazer com que a variavel aceite outros tipos colocando any como tipo.

//C e D-
type TipoPessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: TipoPessoa = {
    nome: `Airton`,
    idade: 33,
    corFavorita: `azul`
}

const pessoa2: TipoPessoa = {
    nome: `Mateus`,
    idade: 30,
    corFavorita: `laranja`
}

const pessoa3: TipoPessoa = {
    nome: `Amanda`,
    idade: 23,
    corFavorita: `vermelho`
}

//E-
enum CORES_DO_ARCO_IRIS {
    VERMELHO = "vermelho",
    LARANJA = "laranja ",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
    }

    type TypePerson = {
        nome: string,
        idade: number,
        corFavorita: CORES_DO_ARCO_IRIS
    }
    
    const person1: TypePerson = {
        nome: `Airton`,
        idade: 33,
        corFavorita: CORES_DO_ARCO_IRIS.AZUL
    }
    
    const person2: TypePerson = {
        nome: `Mateus`,
        idade: 30,
        corFavorita: CORES_DO_ARCO_IRIS.LARANJA
    }
    
    const person3: TypePerson = {
        nome: `Amanda`,
        idade: 23,
        corFavorita: CORES_DO_ARCO_IRIS.VERMELHO
    }