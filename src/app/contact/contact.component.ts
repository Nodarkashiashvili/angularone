import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../Models/user';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  userName = ''
  showUserName=''
  userOject= new User
  userArr : User[]=[]

  




  save(){
    console.log(this.userName);
    this.showUserName = this.userName
  }
  liveSearch(){
    console.log(this.userName)
  }

  saveObject(){
    this.userOject.gender=Gender.male
this.userArr.push(this.userOject)
this.userOject=new User
console.log(this.userArr)
  }
}
