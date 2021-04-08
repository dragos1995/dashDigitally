/**
 * Created by Dragos on 02/27/21.
 */

import { LightningElement, track, api } from 'lwc';

export default class BubbleComposedEvtChildOne extends LightningElement {
@track _valueFromEvent;
@api valueFromChild='just for test';

@api get valueFromEvent(){
    return this._valueFromEvent
}
set selected(value){
    this._valueFromEvent = value
}
handleBubbleComposedEvent(event){
alert('event handeled in component  call');
console.log('event handeled in component  call');

}
handleBubbleComposedEvent1(event){
alert('event catched in component child 1 div 1');
console.log('event handeled in component child 1 div 1');

}

handleBubbleComposedEvent2(event){
alert('event catched in component child 1 div 2');
console.log('event handeled in component child 1 div 2');

}
handleBubbleComposedEvent3(event){
alert('event catched in component child 1 div 3');
console.log('event handeled in component child 1 div 3' );

}
@api callAlertFromParent(){
    alert('alert called from parent with a method from child');
}

}