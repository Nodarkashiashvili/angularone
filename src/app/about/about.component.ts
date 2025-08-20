import { Component } from '@angular/core';
import { NgGSCommonFunctionService } from '../services/ng-g-s-common-function.service';
import { HttpService } from '../services/http.service';
import { Category, Prodacts } from '../Models/products';
import { Categoryprod } from '../Models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
constructor(private common : NgGSCommonFunctionService, 
  private http : HttpService
){

}



ngOnInit(){

  this.http.getData('https://restaurant.stepprojects.ge/api/Categories/GetAll')
  .subscribe((resp : any) =>{ console.log(resp)
  this.categoryArr = resp
  console.log(this.categoryArr)
})
}


printhi(){
//   this.common.print()
//   this.http.getData('https://restaurant.stepprojects.ge/api/Categories/GetAll')
//   .subscribe((resp : any) =>{ console.log(resp)
//   this.categoryArr = resp
//   console.log(this.categoryArr)
// })

}




categoryArr : Categoryprod [] =[]

}
