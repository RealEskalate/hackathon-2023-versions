import { Component, Input,HostListener,ElementRef, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = 'home';

  constructor(private elRef: ElementRef) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  openModal() {
    // Set the modal state for the clicked project to open
    this.isModalOpenArray = true;
    document.body.addEventListener('click', this.handleOutsideClick);
  }

  closeModal() {
    // Set the modal state for the clicked project to close
    this.isModalOpenArray = false;
    document.body.removeEventListener('click', this.handleOutsideClick);
  
  }

  @HostListener('document:click', ['$event'])
  private handleOutsideClick(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeModal();
    }
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   // Check if the click is outside the modal and app bar
  //   // if (!this.isClickWithinModalOrAppBar(event)) {
  //     this.closeModal();
  //   // }
  // }

  // // Check if the click is within the modal or app bar
  // private isClickWithinModalOrAppBar(event: MouseEvent): boolean {
  //   const modalElement = document.querySelector('.modal-container');
  //   // const appbarElement = document.querySelector('.appbar');
  
  //   if (modalElement) {
  //     return (
  //       modalElement.contains(event.target as Node) 
  //       // appbarElement.contains(event.target as Node)
  //     );
  //   }
  
  //   return true; // Return false if either element is null or undefined
  // }

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
