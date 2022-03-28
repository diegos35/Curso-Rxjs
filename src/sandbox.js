import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        //first(val =>  val[0] >3) //trae el primer valor del stream y filtra
        //take(4) //numero de eventos
        //takeWhile(val =>  val[0] >3)
        takeWhile(([col, row]) =>  col > 3)// destruturing ECMA6, cancelar el stream al momento de cumplir la condicion
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}