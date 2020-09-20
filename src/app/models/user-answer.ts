import Deserializable from './shared/deserializable';

export class UserAnswer implements Deserializable {
  questionId: string;
  answerId: string;
  quizId: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
