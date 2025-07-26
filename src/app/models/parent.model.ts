export interface Parent {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  enfants?: Enfant[]; // facultatif
}