import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../../../assets/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  id: string | null | undefined;
  projectName: string | null | undefined;
  projectPosition: string | null | undefined;
  projectDuration: string | null | undefined;
  projectDescription: string | null | undefined;
  projectLogo: string | null | undefined;
  projectBgColor: string | null | undefined;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getData(this.id);
  }

  getData(id: any) {
    projects.forEach(element => {
      
      if (element.id === parseInt(id)) {
          this.projectName = element.projectName;
          this.projectPosition = element.projectPosition;
          this.projectDuration = element.projectDuration;
          this.projectDescription = element.projectDescription;
          this.projectLogo = '../../../assets/' + element.projectLogo;
          this.projectBgColor = element.projectBgColor;
        }
    });
    
  }
}
