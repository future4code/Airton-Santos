import fs from 'fs'
import {readDatabase, writeToDatabase} from './index'
import moment from 'moment'
moment.locale("pt-br")

let allAccounts = readDatabase()
const today = moment()

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

const newAccounts: account[] = [...allAccounts, newAccount]

writeToDatabase(newAccounts)