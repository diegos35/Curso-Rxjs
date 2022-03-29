import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, reduce, scan } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        takeWhile( ([col, row]) => col != 0 ),
        tap(val => console.log(`cell: [${val}]`)),
        //reduce((accumulated, current) => { //acumulator event stream, single event complete stream
        scan((accumulated, current) => { //acumulator event stream 
            return {
                clicks: accumulated.clicks +1,
                cells: [...accumulated.cells, current]
            }
        },{clicks: 0, cells:[]} //semilla
        )
    );

    const subscription = click$.subscribe(data => displayLog(`${data.clicks} clicks: ${JSON.stringify(data.cells)}`));

    /** end coding */
}