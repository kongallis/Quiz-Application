import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-info',
  templateUrl: './api-info.component.html',
  styleUrls: ['./api-info.component.css']
})
export class ApiInfoComponent implements OnInit {
apiUrl: string = "https://opentdb.com/api_config.php";
  constructor() { }

  ngOnInit(): void {
  }

}
