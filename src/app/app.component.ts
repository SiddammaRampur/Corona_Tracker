import { Component,ElementRef,Input,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'myNewApp';
  countryName:string="";
info:any='';
inside:any='';
cardPop=false;
instant:any='';
dropDown: any='';
modifiedText:any='';

  constructor(private service: ApiServiceService){}

  ngOnInit(){
    this.service.sendData()
    .subscribe(data=>{
      this.instant=data;
      console.log(this.instant);
      
    });
    
  }
 
  // onSearch(productName: any){
    
  //   console.log(productName);
    
  //     this.service.getData(productName)
  //     .subscribe(data=>{
        
  //       this.info=data;
  //       this.inside=data.countryInfo;
        
  //       console.log(this.info);
  //       console.log(this.inside);
        
  //     });
  // }

  onSelectCountry(value: any){
    this.cardPop=true;
    this.dropDown=value
    
    
}

onDonate(){
  // window.location.href = "https://donate.covid19responsefund.org/"
  window.open("https://donate.covid19responsefund.org/", "_blank");
}


onBook(){
  window.open("https://www.cowin.gov.in/", "_blank");
}

// onSelect(val: any){
//     this.onSearch(val);
// }


onSubmit(form :NgForm){
  console.log(form);
  this.countryName=form.value.country;
  console.log(this.countryName);


  this.service.getData(this.countryName)
      .subscribe(data=>{
        
        this.info=data;
        this.inside=data.countryInfo;
      });
      }
      
}
