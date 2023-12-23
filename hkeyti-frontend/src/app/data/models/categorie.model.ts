export class Categorie {
    id!: number;
    titre!: string;
    description!: string;
    image: string = "";

    deserialize(input: any): this {
      return Object.assign(this, input);
    }
  }
  