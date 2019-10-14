export class Reminder {
    id: string;
    name: string;
    description: string;
    type:string;    
    createdBy:string;
    creationDate:Date
    constructor() {
      this.id = '';
      this.name = '';
      this.description='';
      this.createdBy='';
      this.creationDate= new Date();   
    }
  }
  