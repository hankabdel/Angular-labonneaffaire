import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ajout de l'import


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
  imports: [FormsModule],

})
export class ArticleComponent implements OnInit {
titreArticle: string = "Titre de l'article";
prixArticle: number = 12;
textAltImg: string = "Titre alternative de l'image";
totalNbrLike: number = 0;
comment: string = "Ceci est un commentaire";

  constructor() {}
  ngOnInit(): void {
  }

onLike() {
this.totalNbrLike++; 
}
}
