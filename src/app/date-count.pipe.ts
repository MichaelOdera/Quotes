import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  //function to calculate the number of days since posting
  transform(value:any):number {
    
    let todayWithNoTime:any = new Date();
    var dateDifference = Math.abs(todayWithNoTime-value);//returns value in seconds 
    console.log(value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter:number = dateDifferenceSeconds/secondsInDay;
    console.log(dateCounter)
    

    if(dateCounter > 1 ){
      return Math.round(dateCounter); 
      }else{
      return 0;
    }
  }

}
