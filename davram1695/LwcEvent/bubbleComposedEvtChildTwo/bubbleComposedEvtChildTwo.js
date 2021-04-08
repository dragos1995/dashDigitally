/**
 * Created by Dragos on 02/27/21.
 */

import { LightningElement, track, api } from 'lwc';

export default class BubbleComposedEvtChildTwo extends LightningElement {
@track message = "message send from children two component";

onFireEvent(){

 this.template.querySelector('.buttonDiv').dispatchEvent(CustomEvent('bubblecomposed',{detail:{messageFromChild:this.message},
                                                                                     bubbles:true,
                                                                                     composed: true}));
alert('event fired from component child 2');
}

handleBubbleComposedEvent(event){
alert('event handeled child two in the div that wrap the event button that dispathing');
console.log('event handeled child two in the div that wrap the event dispathing');
}
handleBubbleComposedEvent2(event){
alert('event catched in  cmp child two div1');
console.log('event catched in  cmp child two div1');

}

handleBubbleComposedEvent3(event){
alert('event catched in  cmp child two  div2');
console.log('event catched in  cmp child two  div2');

}

}