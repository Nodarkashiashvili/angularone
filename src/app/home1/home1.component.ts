import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home1',
  imports: [RouterModule],
  templateUrl: './home1.component.html',
  styleUrl: './home1.component.scss'
})
export class Home1Component {
name = 'saxeli'

fun(){
  console.log('hi')


}







}
