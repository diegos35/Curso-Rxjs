import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { mapTo, map, filter } from 'rxjs/operators';
/* crear un observable a partir de los eventos click del grid */
export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    //Observable que me devuelve los eventos
   /*  const click$ = fromEvent(grid, 'click').pipe(// pipe para modificar observable
        mapTo('CLICK')
    ) */

   /*  const click$ = fromEvent(grid, 'click').pipe(
        map(val => [val.offsetX, val.offsetY]),
    ) */

    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [
            Math.floor(val.offsetX/50),
            Math.floor(val.offsetY/50)
        ]),
        filter(val => (val[0] + val[1]) % 2 !=0),
    );


    const subscription = click$.subscribe(res => {
        displayLog(res)
        //console.log(res);
    })
    /** end coding */
}