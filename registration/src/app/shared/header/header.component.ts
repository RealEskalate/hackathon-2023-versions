import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: boolean = false;
  @Input() currentSection: string = 'home';
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
