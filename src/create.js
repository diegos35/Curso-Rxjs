import { displayLog } from './utils';
import { of, range } from 'rxjs'; //of: secuencia variable de objecto
export default () => {
    /** start coding */

    /* First Example */
    const source = of(1,2,3,4,5,6);
    const subscription = source.subscribe(data => displayLog(data));

    /* Second Example */
    const source2 = of(
        [1,2,3],
        "Hello world",
        {foo: "bar"},
        function sayHello(){
            return "hi";
        }
    )
    const subscription2 = source2.subscribe(data => displayLog(data));
    
    /* Third Example */
    const source3 = range(3, 10);
    const subscription3 = source3.subscribe(data => displayLog(data));

    /** end coding */
}