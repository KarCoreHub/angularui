export class Vehicle {    
     
    Number:string;  
    Name:string;  
    Model:string;  
    City:string;  
    EmpId:string; 
    RegDate:Date;  
    AddedDate:Date;    
   
  
    constructor() {
      this.Number = '';
      this.Name = '';
      this.City = '';
      this.EmpId = '';     
      this.Model ='';
      this.RegDate = new Date();
      this.AddedDate = new Date();     
    }
  }
  