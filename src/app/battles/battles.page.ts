import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.page.html',
  styleUrls: ['./battles.page.scss'],
})
export class BattlesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
