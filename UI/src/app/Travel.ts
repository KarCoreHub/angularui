export class Travel {  
  
  travelid: number;  
  cusid:string;  
  fromloc:string;  
  toloc:string;  
  contactno:string; 
  tdate:Date;  
  addeddate:Date;  
  vehicleid:string;    
  status:string;  
  active:boolean;  

    constructor() {
    this.cusid = '';
    this.fromloc = '';
    this.toloc = '';
    this.contactno = '';
    this.vehicleid = '';
    this.status ='';
    this.tdate = new Date();
    this.addeddate = new Date();
    this.active= true;
    
  }
}
