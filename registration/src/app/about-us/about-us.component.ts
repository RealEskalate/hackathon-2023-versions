import { Component } from '@angular/core';

export interface AboutUsContent {
  title: string;
  description: string;
  image: string;
  footer?: string;



}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  contents: AboutUsContent[] = [
    { title: 'About Us', description: 'A2SV upskills high-potential university students, connects them with opportunities at top tech companies around the world, and creates digital solutions to urgent problems in their home countries. The program is free for students, making the opportunity available for youth who have talent but lack the means to use it.', image: 'assets/group_photo1.jpg', footer: 'https://www.a2sv.org' },
    { title: 'Our Belief', description: 'The world is yet to see that talent is everywhere, but opportunity is not. That is why we want to provide quality education in underdeveloped areas.', image: 'assets/group_photo2.jpg' },
    { title: 'Our Vision', description: 'At A2SV, our vision is to foster a transformative and inclusive ecosystem that empowers high-potential university students from all corners of Africa. We believe in unlocking the untapped potential of talented youth across the continent and harnessing their creativity to address urgent challenges in their home countries.', image: 'assets/group_photo3.jpg' },
  ];

}
