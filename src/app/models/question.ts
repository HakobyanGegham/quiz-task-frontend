import Deserializable from './shared/deserializable';
import {Option} from './option';

export class Question implements Deserializable {
  // tslint:disable-next-line:variable-name
  _id: string;
  content: string;
  score: number;
  options: Option[];

  deserialize(input: any): this {
    Object.assign(this, input);
    input.options.forEach((program, key) => {
      this.options[key] = new Option().deserialize(program);
    });
    return this;
  }
}
