import Deserializable from './shared/deserializable';

export class Option implements Deserializable {
  // tslint:disable-next-line:variable-name
  _id: string;
  questionId: number;
  content: string;
  isCorrect: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
