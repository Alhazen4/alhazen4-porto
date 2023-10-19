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
  projectCompany: string | null | undefined;
  projectPosition: string | null | undefined;
  projectDuration: string | null | undefined;
  projectDescription: string | null | undefined;
  projectLogo: string | null | undefined;
  projectBgColor: string | null | undefined;

  projectTechLogo1: string | null | undefined;
  projectTechLogo2: string | null | undefined;
  projectTechLogo3: string | null | undefined;
  projectTechLogo4: string | null | undefined;
  
  projectResult1: string | null | undefined;
  projectResult2: string | null | undefined;
  projectResult3: string | null | undefined;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getData(this.id);
  }

  getData(id: any) {
    projects.forEach(element => {
      
      if (element.id === parseInt(id)) {
          this.projectCompany = element.projectCompany;
          this.projectName = element.projectName;
          this.projectPosition = element.projectPosition;
          this.projectDuration = element.projectDuration;
          this.projectDescription = element.projectDescription;
          this.projectLogo = '../../../assets/' + element.projectLogo;
          this.projectBgColor = element.projectBgColor;

          this.projectTechLogo1 = '../../../assets/logo/' + element!.projectTechLogo![0];
          this.projectTechLogo2 = '../../../assets/logo/' + element!.projectTechLogo![1];
          this.projectTechLogo3 = '../../../assets/logo/' + element!.projectTechLogo![2];
          this.projectTechLogo4 = '../../../assets/logo/' + element!.projectTechLogo![3];

          this.projectResult1 = '../../../assets/' + element!.projectResult![0];
          this.projectResult2 = '../../../assets/' + element!.projectResult![1];
          this.projectResult3 = '../../../assets/' + element!.projectResult![2];
        }
    });
    
  }
}
