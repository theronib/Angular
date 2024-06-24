import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  public isHobbie1Visible = false;
  public isHobbie2Visible = false;
  public isHobbie3Visible = false;
  public isHobbie4Visible = false;
  public isHobbie5Visible = false;
  public isHobbie6Visible = false;
  public isHobbie7Visible = false;
  public isHobbie8Visible = false;

  public openHobbie1(): void {
    this.isHobbie1Visible = !this.isHobbie1Visible;
  }

  public openHobbie2(): void {
    this.isHobbie2Visible = !this.isHobbie2Visible;
  }

  public openHobbie3(): void {
    this.isHobbie3Visible = !this.isHobbie3Visible;
  }

  public openHobbie4(): void {
    this.isHobbie4Visible = !this.isHobbie4Visible;
  }

  public openHobbie5(): void{
    this.isHobbie5Visible = !this.isHobbie5Visible;
  }

  public openHobbie6(): void{
    this.isHobbie6Visible = !this.isHobbie6Visible;
  }

  public openHobbie7(): void{
    this.isHobbie7Visible = !this.isHobbie7Visible;
  }

  public openHobbie8(): void{
    this.isHobbie8Visible = !this.isHobbie8Visible;
  }
}
