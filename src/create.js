import { displayLog } from './utils';
import { from } from "rxjs";

export default () => {
    /** start coding */
    

    const myArray = [1,2,3,4,4];
    const myString = "Hello World"
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('hello World');
    },2000))
    /* const observable = from(myArray);
    const observable = from(myString); */
    const observable = from(myPromise);
    const subscription = observable.subscribe(val => displayLog(val));

    /** end coding */
}