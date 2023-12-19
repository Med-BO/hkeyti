import { Membre } from './membre.model';
import { Categorie } from './categorie.model';

export class Experience {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  estAnonyme: boolean;
  date_creation: string;
  auteur: Membre;
  categorie: Categorie;

  deserialize(input: any): this {
    this.auteur = new Membre().deserialize(input.auteur);
    this.categorie = new Categorie().deserialize(input.categorie);

    return Object.assign(this, input);
  }
}
