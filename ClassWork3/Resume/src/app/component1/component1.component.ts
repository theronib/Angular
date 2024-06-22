import { Component } from '@angular/core';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  isUnderline = true;
  
  public pib: string = "Баранівський Ярослав Дмитрович"
  public phoneNumber: string = "+380634543321";
  public email: string = "baranivskyy_yaroslav2017@gmail.com";
  public city: string = "Київ"
  public birthDate: Date = new Date("2004-06-17");
}
