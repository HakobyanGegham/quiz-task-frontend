import Deserializable from './shared/deserializable';

export class User implements Deserializable {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  role: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
