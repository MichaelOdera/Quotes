import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  //function to calculate the number of days since posting
  transform(value:any):number {
    
    let today:Date = new Date();
    console.log(today)
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDay())
    console.log(todayWithNoTime)
    var dateDifference = Math.abs(todayWithNoTime-value);//returns value in seconds 
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter:number = dateDifferenceSeconds/secondsInDay;
    console.log(dateCounter)
    

    if(dateCounter > 1 && todayWithNoTime > value){
      return dateCounter; 
      }else{
      return 0;
    }
  }

}
