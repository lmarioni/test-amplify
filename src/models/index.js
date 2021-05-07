// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Perros, Todo } = initSchema(schema);

export {
  Perros,
  Todo
};