export interface Nationality {
  id: number,
  name:string,
  flag:string,
  code:string
}
export interface Province {
  id: number,
  name:string,
  flag:string,
  nationality:Nationality
}
export interface City {
  id: number,
  name:string,
  flag:string,
  province:Province
}
