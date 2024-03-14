import { Component } from '@angular/core';

export interface Step{
  number: string,
  title: string,
  description: string | null,
  date: string
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  steps = [
    {number: '1', title: "Registration",description: "",  date: "1-30 August, 2023", final: false},
    {number: '2', title: 'Workshops',description: "Our initial workshops provide participants with an in-depth understanding of generative AI, hackathon dynamics, and idea generation.",  date: '19-20 August, 2023', final: false},
    {number: '3', title: "Quarter-Finals",description: "Participants undertake a 50-hour virtual hackathon, competing for a place among the top 30 projects and receiving expert mentorship along the way.",  date: '1-3 August, 2023', final: false},
    {number: '4', title: "Semi-Finals",description: "Continued guidance from advisors help refine and optimize the projects of the remaining teams. This phase is marked by iterative feedback and project refinement.",  date: 'September 11 - October 28, 2023', final: false},
  ]
  calendarLink = "https://calendar.google.com/calendar/u/0?cid=Y18wYjU0ZmZlYjIxZWFjYmNiNTZiM2RhNzkwNzMyYmY5MTg4OTdkNWJjODQzMTJlMWI3YmUzOTlmYjFhN2QzYTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
}
