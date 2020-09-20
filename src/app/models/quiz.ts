import Deserializable from './shared/deserializable';

export class Quiz implements Deserializable {
  // tslint:disable-next-line:variable-name
  _id: string;
  score: number;
  userName: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
