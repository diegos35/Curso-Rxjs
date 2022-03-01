import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    const hello = Observable.create(function(observer) {
        observer.next('Hello');
        setTimeout(()=>{
            observer.next('World');
            observer.complete(); //indicar al observador que ya termnino
        }, 2000);
    });

    //El observer tiene la siguiente struvture
    const observer = {
        next: event => displayLog(event),
        error: err => console.log('[ERR]-',err),
        complete: () => displayLog("[DONE]")
    }

    
    //const subscribe = hello.subscribe(evt => displayLog(evt));
    const subscribe = hello.subscribe(observer);    
    const subscribe2 = hello.subscribe(observer);    
    hello.unsubscribe();  
    
    
    /** end coding */
}