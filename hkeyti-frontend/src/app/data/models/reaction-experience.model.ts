import { Experience } from "./experience.model";
import { Membre } from "./membre.model";

export class ReactionExperience {
    id: number;
    type: string;
    auteur: Membre;
    experience: Experience;
  
    deserialize(input: any): this {
        this.auteur = new Membre().deserialize(input.membre);
        this.experience = new Experience().deserialize(input.publication);
        return Object.assign(this, input);
    }
  }
  