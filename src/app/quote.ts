export class Quote {
    showAuthor:boolean;
    constructor(public type:string, public content:string, public author:string, public upvote:number, public downvote:number){
        this.showAuthor = false;
    }
}
