import { Component } from '@angular/core';

export interface Judge {
  name: string,
  title: string,
  image: string,

}
@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.css']
})
export class JudgesComponent {


  judges = [
    {name: 'Ricardo Baeza Yates', title: 'Ricardo is a seasoned Research Director at the Institute for Experiential AI at Northeastern University, is known for his extensive contributions to the field. His past experiences include serving as the Chief Technology Officer for NTENT. Additionally, he has made significant academic contributions throughout his career as a professor.', image: 'assets/Recardo.png'},
    {name: 'Alper Güçer', title:'Alper is a digital marketing expert, Managing Partner at Poligon Interactive, with more than 25 years of expertise in digital marketing. His extensive roles also include serving as a consultant, Client Engagement Director, as well as acting as a strategic influencer and mentor.', image:'assets/Alper Gucer.jpg'},
    {name: 'Emre Varol', title: 'Emre, the distinguished CEO of A2SV, has a rich background including tenures at industry giants like Palantir and Google. He fervently strives to make a difference by bridging the gap between high-potential African students and transformative opportunities. His focus lies in fostering the next generation of African tech leaders.', image:'assets/emre.png'},
    // {name: 'Roger Kirwin', title: 'Roger, an accomplished tech executive, board member, and angel investor, is currently contributing his expertise at Square. His impressive career history includes roles at Zendesk, Salesforce, and Sprint. He is driven by a passion to instigate positive change and empower budding entrepreneurs.', image: 'assets/Roger.jpg'},
    // {name: 'Tugrul Tekbulut', title:'Tugrul is a seasoned Chairman and Founder of Timus Networks and also holds the Chairman position at LOGO Yazılım, Southeast Europe\'s largest ISV. His previous roles include serving as the Chairman at TUBISAD. He has notable expertise in Business Planning, Enterprise Software, E-commerce, Entrepreneurship, and CRM.', image: 'assets/turgul.png'},
    // {name: 'Valeria Vulpe', title: 'Valeria is an accomplished data scientist with a notable career spanning over 8 years, including a remarkable tenure at Google. She has also showcased her analytical prowess in the financial sector, serving as a Business Analyst at Deutsche Bank. She brings a wealth of experience in leveraging data to drive strategic business decisions.', image: 'assets/Valeria Vulpe.jpg'},
  ]
}
