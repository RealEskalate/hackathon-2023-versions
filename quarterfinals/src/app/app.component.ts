import {Component, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';
import {LocalStorageService} from "./shared/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2SV-Hackathon';
  showChat = false;
  modalOpen = false;
  isButtonAtBottom = false;
  isStickRegisterButtonVisible = false;
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showModal: boolean = false;
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59);
  registrationButtonVisible = true;
  countDownVisible = true;
  countDownDate = new Date(2023, 8, 3, 17, 0, 0);


  ngOnInit(): void {
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
  }

  updateCountDownVisibility() {
    const now = new Date();
    this.countDownVisible = now < this.countDownDate;
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  decreaseZIndex(){
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('home')?.classList.add('z-0')
    document.getElementById('home')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('z-0')
    document.getElementById('partners')?.classList.remove('z-40')
    document.getElementById('judges')?.classList.add('z-0')
    document.getElementById('judges')?.classList.remove('z-40')
    document.getElementById('info')?.classList.add('z-0')
    document.getElementById('info')?.classList.remove('z-40')
    document.getElementById('eligibility')?.classList.add('z-0')
    document.getElementById('eligibility')?.classList.remove('z-40')
    document.getElementById('about-us')?.classList.add('z-0')
    document.getElementById('about-us')?.classList.remove('z-40')
    document.getElementById('workshops')?.classList.add('z-0')
    document.getElementById('workshops')?.classList.remove('z-40')
  }
  onShowModal() {
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden')
  }

  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    document.body.classList.remove('overflow-hidden')
  }

  openChat(){
    this.showChat = true;
  }

  toggleChatBtn(){
    this.showChat = !this.showChat;
  }

  changeChatState(state: boolean){
    this.modalOpen = !state;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkIfAtBottom();
    this.isStickRegisterButtonVisible = window.scrollY > 600;
  }

  checkIfAtBottom(): void {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    this.isButtonAtBottom = scrollPosition + windowHeight + 5 >= fullHeight;
  }


  private spiedTags = ['DIV'];

  @Output() public sectionChange = new EventEmitter<string>();
  public currentSection: string = 'home';

  constructor(private _el: ElementRef, private localStorage: LocalStorageService) {
    this.localStorage.resetWaitingStatus();
  }

  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: any) {
    let currentSection = '';
    const children = this._el.nativeElement.children;
    const top = event.target.scrollTop;
    const parentRect = event.target.getBoundingClientRect(); // Get the container's position relative to the viewport

    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      const elementRect = element.getBoundingClientRect(); // Get the child element's position relative to the viewport
      if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
        if (elementRect.top - parentRect.top <= top) { // Compare element's top position with container's top position
          currentSection = element.id;
        }
      }
    }

    if (currentSection !== this.currentSection) {
      if( currentSection !== '')
        this.currentSection = currentSection;
    }
  }

}
