/**
 * Created by Dragos on 02/27/21.
 */

import { LightningElement, track, api } from 'lwc';

export default class BubbleComposedEvtContainer extends LightningElement {
@track valueFromEvent;

connectedCallback(){

}

handleBubbleComposedEvent(event){
alert('event catched in component container  div 1');
console.log('event catched in component container  div 1');

}
handleBubbleComposedEvent2(event){
alert('event catched in component container  div 2');
console.log('event catched in component container  div 2');

}
handleBubbleComposedEvent1(event){
alert('event catched in component container  direct call');
console.log('event catched in component container  direct call');

}

displayFieldFromChild(){
  this.template.querySelector('c-bubble-composed-evt-child-one').callAlertFromParent();
   
}
}