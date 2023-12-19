export class Activite {
    id: number;
    type: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  