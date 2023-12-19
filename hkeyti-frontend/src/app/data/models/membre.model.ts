export class Membre {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    image: string;
    date_naissance: string;
    genre: string;
    mot_de_passe: string;
    statut: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
  }