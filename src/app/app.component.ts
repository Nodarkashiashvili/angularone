import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Home1Component } from "./home1/home1.component";
import { count } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent, Home1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
colorTitle = {
  'color' : 'green',
'font-style':'italic'

}
  clickCount = 1
  imgUrl2 = 'https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png'
  imgUrl1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6a3JwynKKhblkrjpWw7HlHo18AooKWZELw&s'
  imgUrl = 'https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png'
  isActive = false
  title = 'angularone';

  // show(){
  //   this.clickCount++
  //   if(this.clickCount%2==0){
  // this.imgUrl=this.imgUrl1
  //   }
  //   else{
  //     this.imgUrl=this.imgUrl2
  //   }


  // }

  show() {
this.imgWith == 300 ? this.imgWith = 500 : this.imgWith=300
    // this.toggle()
    this.imgUrl == 'https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png'
      ? this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6a3JwynKKhblkrjpWw7HlHo18AooKWZELw&s'
      : this.imgUrl = 'https://miro.medium.com/v2/resize:fit:512/1*FKD2Uy_Q6r6AviZA2VD4RQ.png'
  }


  ////თოგლის მაგალითი
// z = 1
// toggle(){
//   this.z == 1 ? this.z = 0 : this.z = 1
//   console.log(this.z)
// }


change(){
 this.title='ანგულარi'
 this.colorTitle ['color']='yellow'
 this.colorTitle['font-style']=''
}




imgWith= 500
}
