import Deserializable from './shared/deserializable';
import {Question} from './question';

export class AnswerInfo implements Deserializable {
  message: string;
  question?: Question;
  isComplete: boolean;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
