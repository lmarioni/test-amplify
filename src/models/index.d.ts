import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Perros {
  readonly id: string;
  readonly name?: string;
  constructor(init: ModelInit<Perros>);
  static copyOf(source: Perros, mutator: (draft: MutableModel<Perros>) => MutableModel<Perros> | void): Perros;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}