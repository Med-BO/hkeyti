export class Etiquette {
    id: number;
    titre: string;
    description: string;
  
    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  