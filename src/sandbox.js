import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, last, tap, takeLast, skip } from 'rxjs/operators';

export default () => {
    /** start coding */
  /*   const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col > 3 ),
        tap(val => console.log(`valid in takewhile: [${val}]`)),
        //last()
        takeLast(3) */
        
        //operator skip
        const grid = document.getElementById('grid');
        const click$ = fromEvent(grid, 'click').pipe(
            map(val => [ 
                Math.floor(val.offsetX/50), 
                Math.floor(val.offsetY/50)
            ]),

            tap(val => console.log(`cell: [${val}]`)),
            skip(5)

    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}