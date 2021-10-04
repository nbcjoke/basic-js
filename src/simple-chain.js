import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  let chain = [];
const chainMaker = {

  getLength() {
     return chain.length;
   },
   addLink(value) {
     if(value === undefined) {
       chain.push(' ');
       return chainMaker;
     }
     value = '' + value;
     chain.push(value);
     return chainMaker;
   },
   removeLink(position) {
     if(isNaN(position) || position >= chain.length || position <= 0) {
        chain = [];
        throw Error();
     }
     
     chain.splice(position-1, 1);
     return chainMaker;
   },
   reverseChain() {
     chain.reverse();
     return chainMaker;
   },
   finishChain() {
     for(let i = 0; i < chain.length; i++) {
       chain[i] = '( ' + chain[i] + ' )';
       if(i !==chain.length-1) {
         chain[i] = chain[i] + '~~';
       }
     }
     let returnedValue = chain.join('');
    chain = [];
		return returnedValue;
   }
 };




