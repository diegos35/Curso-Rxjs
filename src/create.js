import { displayLog } from './utils';
import { fromEvent } from  'rxjs';
export default () => {
    /** start coding */
    
    const actionBtn = document.getElementById('action-btn');
    const source = fromEvent(actionBtn, 'click'); //observable a un object

    source.subscribe(evt => {
         displayLog(`click event at post (${evt.x}, ${evt.y})`);
    })

    //esto es un observable
    fromEvent(document, 'mousemove').subscribe(evt => {
        console.log(evt)  
    })
    /** end coding */
}