import { updateDisplay } from './utils';
import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';

/*Subject tipo de Observable, actua como distribuidor
/emite a todos sus observadores cualquier evento que emite como observer **/

/* BehaviorSubject: siempre tiene un valor un estado o valor inicial */

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
        map(() => docElement.scrollTop),
        tap(evt => console.log("[scroll]: ", evt))
    );

    //observable that returns the amount of page scroll progress
    const scrollProgress$ = scroll$.pipe(
        map(evt => {
            const docHeight = docElement.scrollHeight - docElement.clientHeight;
            return (evt / docHeight) * 100;
        }),
        //share()//utiliza la clase Subject internamente
    )


    //Example BehaviorSubject
    const scrollProgressHot$ = new BehaviorSubject(0);
    //--------------------------------------------------
    
    //Example Subject
    //const scrollProgressHot$ = new Subject(); //Observer
    scrollProgress$.subscribe(scrollProgressHot$)


    //subscribe to scroll progress to paint a progress bar
    const subscription = scrollProgressHot$.subscribe(updateProgressBar);

    //subscribe to display scroll progress percentage
    const subscription2 = scrollProgressHot$.subscribe(
        val => updateDisplay(`${ Math.floor(val) } %`)
    );
    
    console.log("scroll initial state:", scrollProgressHot$.value);
    //scrollProgressHot$.next(0); //con BehaviorSubject me evito esto

    /** end coding */
}