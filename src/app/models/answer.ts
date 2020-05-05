import Deserializable from './shared/deserializable';

export class Answer implements Deserializable {
  id: number;
  questionId: number;
  content: string;
  isCorrect: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
