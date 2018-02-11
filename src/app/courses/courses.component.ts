import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title = "List of courses";
  courses;
  authors;
  isActive = false;
  email = "me@example.com"

  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  constructor(service: CoursesService){
    this.courses = service.getCourses();
    this.authors = service.getAuthors();
  }

  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked!", event);
  }  

  onDivClicked(){
    console.log("Div was clicked!");
  }

  onKeyUp(){
    console.log(this.email);
  }
}
