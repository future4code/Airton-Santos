import {IdGenerator} from './services/idGenerator';

const idGenerator = new IdGenerator();
const id = idGenerator.generate();

console.log(id);