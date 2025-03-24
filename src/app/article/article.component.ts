import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ajout de l'import


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  imports: [FormsModule],

})
export class ArticleComponent implements OnInit {

totalNbrLike: number = 0;
comment: string = "Ceci est un commentaire";

@Input() titreArticle!: string;
@Input() prixArticle!: number;
@Input() description!: string;
@Input() urlImg!: string;
@Input() textAltImg!: string;
@Input() dispo!: boolean;


  constructor() {
    
  }
  ngOnInit(): void {
  }

onLike() {
this.totalNbrLike++; 
}
}
