export interface Localidad {
  id:           number;
  localidad:    string;
  provincia_id: number;
  lat?:          string;
  lon?:          string;
  fav?:          number;
  created_at?:   null;
  updated_at?:   null;
}
