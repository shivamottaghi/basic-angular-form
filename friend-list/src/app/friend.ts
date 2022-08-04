export class Friend {
  firstName :string;
  lastName :string;
  email :string;
  phoneNumber :number;
  message :string;
  favLang :string;
  constructor(firstName:string , lastName:string , email:string , phoneNumber:number , message:string , favLang:string ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.message = message;
      this.favLang = favLang;
  }
}
