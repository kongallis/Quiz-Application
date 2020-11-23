import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Category[] = [
    {name: "Mythology",
    url: "https://www.greeka.com/photos/unique/greece/greece-mythology/hero/greece-mythology-1-1024.webp"},
    {name:"Sports",
    url: "https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg"},
  
  ];


    // "Geography",
    // "History",
    // "Politics",
    // "Art",
    // "Celebrities",
    // "Animals",
    // "Vehicles"]
  constructor() { }

  ngOnInit(): void {
  }

}
