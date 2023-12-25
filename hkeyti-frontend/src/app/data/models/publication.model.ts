import { Membre } from './membre.model';
import { Categorie } from './categorie.model';

export class Publication {
  id!: number;
  titre!: string;
  contenu!: string;
  image!: string;
  estAnonyme!: boolean;
  parent!: number; // L'id de la publication parente 
  date_creation!: string;
  commentairesActive!: boolean;
  auteur!: Membre;
  categorie!: Categorie;

  deserialize(input: any): this {
    this.auteur = new Membre().deserialize(input.auteur);
    this.categorie = new Categorie().deserialize(input.categorie);

    return Object.assign(this, input);
  }
}
