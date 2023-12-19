import { Publication } from "./publication.model";
import { Membre } from "./membre.model";

export class Notification {
    id: number;
    titre: string;
    contenu: string;
    type: string;
    objet: string;
    membre: string;
    genre: string;
    mot_de_passe: string;
    statut: string;

    deserialize(input: any): this {
        this.membre = new Membre().deserialize(input.membre);
        this.objet = new Publication().deserialize(input.objet);
        return Object.assign(this, input);
    }
  }