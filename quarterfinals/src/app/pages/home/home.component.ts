import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showModal: boolean = false;
  showChat = false;
  showMentorsModal = false;
  showAdvisorsModal = false;
  mentorsRegistrationLink = "https://form.typeform.com/to/UvayCDEJ"
  advisorsRegistrationLink = "https://form.typeform.com/to/mMzeQ63l"
  showGetInvolvedModal = true;
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  currentSection: string = 'home';
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59);
  registrationButtonVisible = true;
  countDownVisible = true;
  countDownDate = new Date(2023, 8, 3, 17, 0, 0);


  onShowModal() {
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden', 'z-0')
  }
  updateCountDownVisibility() {
    const now = new Date();
    this.countDownVisible = now < this.countDownDate;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
    setInterval(() => {
      this.updateCountDownVisibility();
    }, 1000);
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showTeamRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
    document.getElementById('workshops')?.classList.add('hidden')
  }

  onRegisterIndividual() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
    document.getElementById('workshops')?.classList.add('hidden')
  }

  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onShowAdvisorsModal(){
    this.toggleChatEvent.emit(false)
    this.showAdvisorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showRegistrationModal = true;
    this.showMentorsModal = false;
    this.showAdvisorsModal = false;
    this.showTeamRegistrationModal = false;
    this.showIndividualRegistrationModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0' )
    document.getElementById('prizes')?.classList.remove('z-0')
    document.getElementById('prizes')?.classList.add('z-40')
    document.getElementById('partners')?.classList.remove('hidden')
    document.getElementById('info')?.classList.remove('hidden')
    document.getElementById('judges')?.classList.remove('hidden')
    document.getElementById('eligibility')?.classList.remove('hidden')
    document.getElementById('about-us')?.classList.remove('hidden')
    document.getElementById('footer')?.classList.remove('hidden')
    document.getElementById('workshops')?.classList.remove('hidden')
  }

  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('prizes');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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