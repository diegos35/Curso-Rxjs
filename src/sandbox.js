import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, startWith, endWith } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ),//cierra el stream al dar clik en la primera columna
        tap(val => console.log(`cell: [${val}]`)),
        startWith("grid dimensions: ", "10x10"), //firs event at stream
        endWith("game finished: ", "bye")// last event
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}