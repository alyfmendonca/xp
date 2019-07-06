import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle-profile',
  templateUrl: './battle-profile.page.html',
  styleUrls: ['./battle-profile.page.scss'],
})
export class BattleProfilePage implements OnInit {

  constructor(public router: Router) { }

  tamanho1 = '80%';
  tamanho2 = '20%';
  ngOnInit() {
    
  }

  getAposta(){
    document.getElementsByClassName('button-hid')[0].setAttribute("style", "display:none");
    document.getElementsByClassName('button-hid')[1].setAttribute("style", "display:none");
    document.getElementsByClassName('back-bar')[0].setAttribute("style", "display:block");
    document.getElementsByClassName('back-bar')[1].setAttribute("style", "display:block");
    document.getElementsByClassName('front1-bar')[0].setAttribute("style", `width: ${this.tamanho1}`);
    document.getElementsByClassName('front2-bar')[0].setAttribute("style", `width: ${this.tamanho2}`);
  }

}
