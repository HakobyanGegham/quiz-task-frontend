import Deserializable from './shared/deserializable';

export class QuizResult implements Deserializable {
  id: number;
  score: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
