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
  bestSubmitter:string;
  downVote:number;

  //Initialise the variables for the upvotes and the downvotes
  upvote = 0;
  downvote = 0;



  quotes:Quote[]=[
    new Quote("Fredrick Thomson", "I am happy about the current economy, It always lies at the center of power", "Mildred kins", new Date(2019, 1, 1),0,0,),
    // new Quote("Scientific", "Science Changes the world", "Potiphar Clarks",new Date(2019, 4, 6),0,0,),
    // new Quote("Scientific", "Science Changes the world", "Potiphar Clarks",new Date(2019, 3, 5),0,0,),
  ];

  toggleAuthor(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }


  //function to show the best quote

  showBestQuote(){
    this.mostLikes=0;
    for(let i=0; i<this.quotes.length; i++){
      if(this.quotes[i].upvote>this.mostLikes){
        this.bestSubmitter = this.quotes[i].name;
        this.bestQuote = this.quotes[i].content;
        this.mostLikes = this.quotes[i].upvote;
        this.bestAuthor = this.quotes[i].author;
        this.downVote = this.quotes[i].downvote;

      }
    }
  }

  //function to add a new quote
  addNewQuote(quote){
    quote.postedDate= new Date(quote.postedDate);
    quote = new Quote(quote.name, quote.content, quote.author, quote.postedDate, quote.upvote, quote.downvote);
    this.quotes.push(quote); 
  }

  //function to delete a quote
  quoteDelete(isViewed, index){
    if(isViewed){
      let toDelete =confirm(`Are you sure you want to delete this quote by ${this.quotes[index].name}?`);
      if(toDelete){
        this.quotes.splice(index, 1);
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
