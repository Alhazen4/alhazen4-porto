import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private elementRef: ElementRef) {}

  navTextColor: string = 'white';

  ngOnInit(): void {
    this.observeDivsInView();
  }
  
  observeDivsInView() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetDiv = entry.target as HTMLElement;
          console.log(targetDiv);
          console.log(targetDiv.id === 'content');
          targetDiv.id === 'content' ? this.navTextColor = 'black' : this.navTextColor = 'white';
          console.log('navcolor ', this.navTextColor);
        }
      });
    });

    const divElements = this.elementRef.nativeElement.querySelectorAll('.div');
    divElements.forEach((div: Element) => {
      observer.observe(div);
    });
  }
}