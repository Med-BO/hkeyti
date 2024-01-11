import { Membre } from "./membre.model";
import { Publication } from "./publication.model";

export class ReactionPublication {
    id!: number;
    type!: string;
    auteur!: Membre;
    publication!: number;
  
    deserialize(input: any): this {
        this.auteur = new Membre().deserialize(input.membre);
        return Object.assign(this, input);
    }
  }
  