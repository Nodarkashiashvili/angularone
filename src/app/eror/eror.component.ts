import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-eror',
  imports: [RouterModule],
  templateUrl: './eror.component.html',
  styleUrl: './eror.component.scss'
})
export class ErorComponent {
constructor(private routerx : Router){}


backtohome(){
this.routerx.navigateByUrl('home')
}
}
