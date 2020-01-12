export class Quote {
    showAuthor:boolean;
    constructor(public name:string, public content:string, public author:string, public postedDate: Date, public upvote:number, public downvote:number){
        this.showAuthor = false;
    }
}
