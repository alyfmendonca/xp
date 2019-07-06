import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  ngOnInit(){
    setTimeout(()=>{ this.chamaoutra(); }, 2000);
    
  }

  chamaoutra(){
    this.router.navigate(['/ranking']);
  }
}
