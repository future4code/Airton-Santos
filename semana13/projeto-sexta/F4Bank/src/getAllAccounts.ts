import {readDatabase, writeToDatabase} from './index'

const allAccounts = readDatabase()

console.log(allAccounts)