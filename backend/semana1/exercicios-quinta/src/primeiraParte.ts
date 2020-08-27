import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

axios.put(`${baseUrl}/news`, {
    title: 'A turing saiu do frontend',
    content: 'Para a alegria de muitos, e tristeza de alguns, a turma turing está no backend ahhhhhhhhhhhh',
    date: 1598227200000
    })
    .then((res) => {
            axios.get(`${baseUrl}/subscribers/all`)
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err.response.data)
                })
    })
    .catch((e) => {
        console.log(e.response.data)
    });