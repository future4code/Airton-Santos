import moment from 'moment'
import fs from 'fs'
moment.locale("pt-br")

type evento = {
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment
}

const todosEventos: evento[] = [
    {
        nome: `Comprar pão`,
        descricao: `Ir ao mercado comprar pão`,
        inicio: moment("27/09/2020 17:00", "DD/MM/YYYY HH:mm"),
        fim: moment("27/09/2020 17:30", "DD/MM/YYYY HH:mm")
    },
    {
        nome: `Lavar o carro`,
        descricao: `Lavar o carro, porque ta sujin demais`,
        inicio: moment("29/09/2020 13:00", "DD/MM/YYYY HH:mm"),
        fim: moment("29/09/2020 16:00", "DD/MM/YYYY HH:mm")
    }
]

const imprimeTodosEventos = (eventos: evento[]): void => {
    eventos.forEach((item: evento) => {
        const duracao = item.fim.diff(item.inicio, 'minutes');

        const hoje = moment();
        //Aqui para alterar o fuso horário para Inglaterra teria que colocar:
        //const hojeInglaterra = hoje.utcOffset('-0300')
        const diasAteEvento = item.inicio.diff(hoje, 'days');

        console.log(`
            Nome: ${item.nome},
            Horário de início: ${item.inicio.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')},
            Horário de fim: ${item.fim.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')},
            Descrição: ${item.descricao},
            Duração: ${duracao} minutos,
            Dias até o evento: ${diasAteEvento}
        `);
    });
};

const criarEvento = (
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    fim: moment.Moment
): void => {
    if (!nome || !descricao || !inicio || !fim) {
        console.log('Entrada inválida');
        return;
    }

    const diferencaInicio = inicio.diff(moment(), 'seconds');
    const diferencaFim = fim.diff(moment(), 'seconds');

    if (diferencaInicio < 0 && diferencaFim < 0) {
        console.log('A data não pode ser anterior à data atual');
        return;
    }

    todosEventos.push({
        nome,
        descricao,
        inicio,
        fim
    });
};

const inicioEvento: moment.Moment = moment("27/09/2020 17:00", "DD/MM/YYYY HH:mm")
const fimEvento: moment.Moment = moment("27/09/2020 17:30", "DD/MM/YYYY HH:mm")

criarEvento('Comprar arroz', 'Comprar arroz no mercado', inicioEvento, fimEvento)

imprimeTodosEventos(todosEventos)