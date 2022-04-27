import { updateDisplay } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, sampleTimem, auditTime, throttleTime  } from 'rxjs/operators'; 
//simpleTime comprueba el valor cada el valor cada sierto intervalo

export default () => {
    /** start coding */
    
    const progressBar = document.getElementById('progress-bar');
    const docElement = document.documentElement;

    //function to update progress bar width on view
    const updateProgressBar = (percentage) => {
        progressBar.style.width = `${percentage}%`;
    }

    //observable that returns scroll (from top) on scroll events
    const scroll$ = fromEvent(document, 'scroll').pipe(
        tap(event => console.log('[scroll event]')),
        //sampleTime(50),//cada 50 ms
        //auditTime(50),
        throttleTime(50),
        map(() => docElement.scrollTop),
        tap(evt => console.log("[scroll]: ", evt))
    );

    //observable that returns the amount of page scroll progress
    const scrollProgress$ = scroll$.pipe(
        map(evt => {
            const docHeight = docElement.scrollHeight - docElement.clientHeight;
            return (evt / docHeight) * 100;
        })
    )

    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgress$.subscribe(updateProgressBar);


    /** end coding */
}