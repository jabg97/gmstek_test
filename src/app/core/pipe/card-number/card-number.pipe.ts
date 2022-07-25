import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let arr = value.split("®", 2);
    if(arr.length>0){
      return " "+arr[0]+"® ************ "+arr[1];
    }
    return value;
  }

}
