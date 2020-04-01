import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quotes: Quote[]=[
    new Quote(1, "Shakesphere", "Dreams are valid.", "Barack Obama", new Date(2015, 10, 29),0,0),
    new Quote(2, "Shakesphere", "There are opportunities even in the most difficult moments.", "Wangari Maathai", new Date(2011, 11, 13),0,0),
  ]
 addNewQuote(quote){
   let quoteLength=this.quotes.length;
   quote.id=quoteLength +1;
   this.quotes.push(quote)
 }
 toggleDetails(index) {
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
quoteDelete(isComplete, index) {
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

    if (toDelete) {
      this.quotes.splice(index, 1)
    }
  }
}
 numberOfLikes:number=0;
 numberOfDislike=0;

 likeButtonClick(i){
   this.quotes[i].numberOfLikes++;
 }

 dislikeButtonClick(i){
   this.quotes[i].numberOfDislikes++;
 }

 preNum:number
 lastNum:number
 counter:number

 highestUpvote(){
   this.preNum=0
   this.lastNum=0

   for(this.counter=0; this.counter < this.quotes.length; this.counter++){
     this.lastNum=this.quotes[this.counter].numberOfLikes;
     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
   }
   return this.preNum
 }
  constructor() { }

  ngOnInit(): void {
  }

}
