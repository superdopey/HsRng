import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'rotateStylePipe' })
export class RotateStylePipe implements PipeTransform {
    transform(value: object, count: number, index: number): string {

        let range = 40;
        let startDeg = -(range / 2);
        let step = range / (count-1);

        let rotate = (step * (index + 0)) + startDeg;
        return "rotate(" + rotate + "deg)";
    }
}


@Pipe({ name: 'heightStylePipe' })
export class HeightStylePipe implements PipeTransform {
    transform(value: object, count: number, index: number): string {

   //     let range = 50;
     //   let start = -(range / 2);
        let step = (index + 1)
        let h = count / 2;

        let marginTop = 1.2* Math.pow(step - h,2);
      
        
       

        return marginTop.toString()+"px";
    }
}
