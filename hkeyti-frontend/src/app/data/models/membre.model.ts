export class Membre {
    id!: number;
    nom!: string;
    prenom!: string;
    email!: string;
    image!: string;
    date_naissance!: string;
    genre!: string;
    mot_de_passe!: string;
    statut!: string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    // add a constructor that initializes the fields
    constructor(
        id: number = 0,
        nom: string = "",
        prenom: string = "",
        email: string = "",
        image: string = "",
        date_naissance: string = "",
        genre: string = "",
        mot_de_passe: string = "",
        statut: string = ""
    ) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.image = image;
        this.date_naissance = date_naissance;
        this.genre = genre;
        this.mot_de_passe = mot_de_passe;
        this.statut = statut;
    }
  }