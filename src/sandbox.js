import { updateDisplay, displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

//operador temporal debounceTime es parecido a auditTime 
//se inicia una espera en la que se escuchan valores
//reinicia la espera 
export default () => {
    /** start coding */
    
    const inputBox = document.getElementById('input-box');
    const inputSrc$ = fromEvent(inputBox, 'input').pipe(
        debounceTime(3000), //se emite el evento hasta que deja de escribir en 3000ms
        map(event => console.log(event.target.value))
    );

    inputSrc$.subscribe (displayLog);
    /** end coding */
}