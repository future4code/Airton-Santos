import fs from 'fs'
import {readDatabase, writeToDatabase} from './index'
import moment from 'moment'
moment.locale("pt-br")

let allAccounts = readDatabase()

type account = {
    name: string,
    cpf: string,
    birth: moment.Moment,
    balance: number,
    payments: []
  }

const newAccount: account = {
    name: process.argv[2],
    cpf: process.argv[3],
    birth: moment(process.argv[4], 'DD/MM/YYYY'),
    balance: 0,
    payments: []
}

const today = moment()

const diffBirth = today.diff(newAccount.birth, 'years')

const addAccount = (newAccounts: account) => {
    if (diffBirth >= 18) {
        console.log('Conta criada com sucesso!')
        return [...allAccounts, newAccounts]
    } else {
        console.log('Criação de conta negada: Apenas usuários acima de 18 anos podem criar uma conta!')
        return allAccounts
    }
}

writeToDatabase(addAccount(newAccount))