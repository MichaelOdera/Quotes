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

  //Initialise the variables for the upvotes and the downvotes
  upvote = 0;
  downvote = 0;



  quotes:Quote[]=[
    new Quote("Inspirational", "I am happy about the current economy", "Mildred kins",0,0,),
    new Quote("Scientific", "Science Changes the world", "Potiphar Clarks",0,0,),
  ];


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
