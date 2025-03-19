import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from "./article/article.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ArticleComponent]
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  constructor() {}
  ngOnInit(): void {
    console.log(" Ici ngOnInit");
  }
}
