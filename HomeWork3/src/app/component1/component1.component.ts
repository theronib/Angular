import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements AfterViewInit {
  @ViewChild(Component2Component, { static: false }) component2!: Component2Component;

  ngAfterViewInit() {
    if (this.component2) {
      console.log('Component2 loaded:', this.component2);
    } else {
      console.log('Component2 not loaded');
    }
  }

  callOpenHobbie1() {
    this.component2.openHobbie1();
  }

  callOpenHobbie2() {
    this.component2.openHobbie2();
  }

  callOpenHobbie3() {
    this.component2.openHobbie3();
  }

  callOpenHobbie4() {
    this.component2.openHobbie4();
  }

  callOpenHobbie5() {
    this.component2.openHobbie5();
  }

  callOpenHobbie6() {
    this.component2.openHobbie6();
  }

  callOpenHobbie7() {
    this.component2.openHobbie7();
  }

  callOpenHobbie8() {
    this.component2.openHobbie8();
  }
}
