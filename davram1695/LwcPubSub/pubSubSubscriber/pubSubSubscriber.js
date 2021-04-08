/**
 * Created by Dragos on 02/09/21.
 */

import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubSubSubscriber extends LightningElement {
message;

connectedCallback(){
this.registerEvent();
}

registerEvent(){
    window.console.log('event registred');
    pubsub.register('simpleEvt',this.handleMessage.bind(this));

}
handleMessage(messageformEvt){
    window.console.log('event handled' + messageformEvt);
    this.message=messageformEvt ? JSON.stringify(messageformEvt,null,null): 'no message payload';
}

}