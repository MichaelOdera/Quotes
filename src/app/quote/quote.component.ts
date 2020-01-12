import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  //Initialise the bindings for the best Quote Content
  mostLikes= 0;
  bestQuote:string;
  bestAuthor:string;
  bestType:string;
  downVote:number;

  //Initialise the variables for the upvotes and the downvotes
  upvote = 0;
  downvote = 0;



  quotes:Quote[]=[
    new Quote("Inspirational", "I am happy about the current economy", "Mildred kins",0,0,),
    new Quote("Scientific", "Science Changes the world", "Potiphar Clarks",0,0,),
    new Quote("Scientific", "Science Changes the world", "Potiphar Clarks",0,0,),
  ];


  showBestQuote(){
    this.mostLikes=0;
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].upvote>this.mostLikes){
        this.bestType = this.quotes[i].type;
        this.bestQuote = this.quotes[i].content;
        this.mostLikes = this.quotes[i].upvote;
        this.bestAuthor = this.quotes[i].author;
        this.downVote = this.quotes[i].downvote;

      }
    }
  }



  //the downvote and upvote function section
  thumbsUp(quote){
    quote.upvote = quote.upvote + 1;
  }

  thumbsDown(quote){
    quote.downvote = quote.downvote + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
