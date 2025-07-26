import { Certificat } from './certificat.model';

export interface Enfant {
  id: number;
  nom: string;
  prenom: string;
  niveauEtude: string;
  certificats: Certificat[];
}
