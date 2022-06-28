export interface User {
  id:number,
  login:string,
  password:string,
  firstName:string,
  lastName:string,
  email:string,
  activated:boolean,
  langKey:string,
  imageUrl:string,
  activationKey:string,
  resetKey:string,
  resetDate:string,
  tempPassword:string,
  authorities:Authority
}
export interface Authority {
  name:string;
}
