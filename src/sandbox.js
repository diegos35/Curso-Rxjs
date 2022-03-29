import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, distinct, distinctUntilChanged } from 'rxjs/operators'; 
// distinct, distinctUntilChanged: solo dejan pasar valor que son distintos a las anteriores
//evitar eventos repetidos de forma consecutiva
export default () => {
    /** start coding */
    /* const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ //convertimos en cordenadas
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ), //se ejecuta hasta tocar la col 0
        tap(val => console.log(`cell: [${val}]`)), 
        map(([col, row]) => col+row), 
        tap(val => console.log('sum of col + row is:', val)),
        distinct()//bloquea el evento antes de que llegue a emitirse */

    //example 2
 /*    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ //convertimos en cordenadas
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ), //se ejecuta hasta tocar la col 0
        tap(val => console.log('sum of col + row is:', val)),
        distinct( ([col, row]) => `${col} - ${row}`)//bloquea el evento antes de que llegue a emitirse
    ); */
    
    
    //example 3 distinctUntilChanged
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ //convertimos en cordenadas
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ), //se ejecuta hasta tocar la col 0
        tap(val => console.log('sum of col + row is:', val)),
        distinctUntilChanged( 
            (cell1, cell2) =>
            (cell1[0] == cell2[0]) &&
            (cell1[1] == cell2[1])
        )
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}