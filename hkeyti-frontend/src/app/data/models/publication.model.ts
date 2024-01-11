import { Membre } from './membre.model';
import { Categorie } from './categorie.model';
import { ReactionPublication } from './reaction-publication.model';

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
  commentaires!: Publication[];
  reactions!: ReactionPublication[];
  treatedReactions!: any;

  deserialize(input: any): this {
    this.auteur = new Membre().deserialize(input.auteur);
    this.categorie = new Categorie().deserialize(input.categorie);
    if (input.commentaires) {
      this.commentaires = input.commentaires.map((commentaire: any) => new Publication().deserialize(commentaire));
    }

    return Object.assign(this, input);
  }
}
