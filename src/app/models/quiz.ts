import Deserializable from './shared/deserializable';

export class Quiz implements Deserializable {
  id: number;
  score: number;
  userName: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}