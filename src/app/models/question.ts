import Deserializable from './shared/deserializable';
import {Answer} from './answer';

export class Question implements Deserializable {
  id: number;
  content: string;
  score: number;
  answers: Answer[];

  deserialize(input: any): this {
    Object.assign(this, input);
    input.answers.forEach((program, key) => {
      this.answers[key] = new Answer().deserialize(program);
    });
    return this;
  }
}
