import { Component } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.scss']
})
export class Component7Component {
  isVerdana = true;
  isSegoe = true;

  visibility = false;

  toggle() {
    this.visibility = !this.visibility;
  }
}

