import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

export interface Step{
  number: string,
  title: string,
  description: string | null,
  date: string,
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(public sanitizer: DomSanitizer){
  }

  steps = [
    {number : '5',title : "Grand Finale",description : "The top 8 teams were flown to Ethiopia for an all-expense-paid 2-day in-person event. They competed for a total prize pool of $30,000, presenting their projects to a distinguished jury.",date: '11-13, November 2023', final: false},
    {number: '4', title: "Semifinals",description: "Continued guidance from advisors helped refine and optimize the projects of the remaining teams. This phase was marked by iterative feedback and project refinement.",  date: 'September 19 - October 30, 2023 20:59 (EAT)', final: false},
    {number: '3', title: "Quarterfinals",description: "Participants undertook a 50-hour virtual hackathon, competing for a place among the top 30 projects and receiving expert mentorship along the way.",  date: '1-3 September, 2023 - 11:00 AM (EAT)', final: false},
    {number: '2', title: 'Workshops',description: "Our initial workshops provided participants with an in-depth understanding of generative AI, hackathon dynamics, and idea generation.",  date: '19-20 August, 2023 and 26-27 August, 2023', final: false},
    {number: '1', title: "Registration",description: "Registration Completed and closed.",  date: "1-31 August, 2023", final: false},
    
    
    
  ]
  calendarLink = "https://calendar.google.com/calendar/u/0?cid=Y18wYjU0ZmZlYjIxZWFjYmNiNTZiM2RhNzkwNzMyYmY5MTg4OTdkNWJjODQzMTJlMWI3YmUzOTlmYjFhN2QzYTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"

  workshops = [
    {title: "Generative AI", description: "Learn about the basics of generative AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Hackathon Dynamics", description: "Learn about the basics of generative AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Idea Generation", description: "Learn about the basics of generative AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
  ]

}
