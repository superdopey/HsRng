import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'rotateStylePipe' })
export class RotateStylePipe implements PipeTransform {
    transform(value: any, count: number, index: number): string {

        let range =   40;
        let startDeg = -(range / 2);
        let step = range / (count-1);

        let rotate = (step * (index + 0)) + startDeg;

        // let translateY = rotate < 0 ? rotate * -1: rotate;
        // if(count >= 5) translateY = translateY*2;

        let x = (index + 1)
        let h = count / 2;
        let translateY =  1.2* Math.pow(x - h,2)

        return "rotate(" + rotate + "deg) translateY("+translateY+"px)";

       
       

       // return "rotate(" + rotate + "deg) ";
    }
}


@Pipe({ name: 'marginStylePipe' })
export class MarginStylePipe implements PipeTransform {
    transform(value: any, count: number, index: number): string {   
       let width = 700;
       let marginLeft = count > 4 ? -( 40 + (count*3)) :-40;

       if(index == 0)marginLeft = 0;

        return  marginLeft + "px";
    }
}
