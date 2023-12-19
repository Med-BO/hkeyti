import { Membre } from "./membre.model";
import { Publication } from "./publication.model";

export class ReactionPublication {
    id: number;
    type: string;
    auteur: Membre;
    publication: Publication;
  
    deserialize(input: any): this {
        this.auteur = new Membre().deserialize(input.membre);
        this.publication = new Publication().deserialize(input.publication);
        return Object.assign(this, input);
    }
  }
  