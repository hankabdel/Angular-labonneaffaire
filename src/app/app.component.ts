import { Component, Input, OnInit } from '@angular/core';
import { ArticleComponent } from "./article/article.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule,ArticleComponent]
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
liste=[
  {
    titreArticle:"Vélo",
    prixArticle: 80,
    description: "Vélo de course",
    urlImg:"/assets/img/velo.jpg",
    textAltImg: "un vélo",
    dispo: true,
  },
  {
    titreArticle:"TV",
    prixArticle: 230,
    description: "Trés belle TV",
    urlImg:"/assets/img/tv.jpg",
    textAltImg: "une tvlévision",
    dispo: true,
  },  {
    titreArticle:"Jouet",
    prixArticle: 30,
    description: "Jouet pour enfant",
    urlImg:"/assets/img/jouet.jpg",
    textAltImg: "un Jouet",
    dispo: true,
  }
]

  constructor() {}
  ngOnInit(): void {
    console.log(" Ici ngOnInit");
  }
}
