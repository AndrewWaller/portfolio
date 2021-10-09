import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  scroii() {
    let px = document.documentElement.clientHeight * .9;
    let push = px;
    try { 
        window.scrollTo({top: push, behavior: 'smooth' });
    } catch (e) {
        window.scrollTo({top: push});
    }
  }

}
