import Deserializable from './shared/deserializable';

export class UserAnswer implements Deserializable {
  questionId: number;
  answerId: number;
  quizId: number;
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
