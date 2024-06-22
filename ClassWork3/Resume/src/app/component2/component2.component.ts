import { Component } from '@angular/core';
import { SKILLS } from '../mock-component1';
import { Skills } from '../Skills';
import { Certificates } from '../Certificates';
import { CERTIFICATES } from '../mock-component2';
import { LINKS } from '../mock-component2-2';
import { Links } from '../Links';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {

  public skills: Skills[] = SKILLS;
  public certificates: Certificates[] = CERTIFICATES;
  public links: Links[] = LINKS;
  public isSkillsVisible = false;
  public isCertifivateVisible = false;
  public isLinkVisible = false;

  openSkillList(){
    this.isSkillsVisible = !this.isSkillsVisible;
  }

  openCertificateList(){
    this.isCertifivateVisible = !this.isCertifivateVisible;
  }

  openLinkList(){
    this.isLinkVisible = !this.isLinkVisible;
  }
}
