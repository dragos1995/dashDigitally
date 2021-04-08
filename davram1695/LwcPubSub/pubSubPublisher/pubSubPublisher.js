/**
 * Created by Dragos on 02/09/21.
 */

import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubSubPublisher extends LightningElement {

handleClick(){
    window.console.log('Event Firing....');
    let message={
        "message" : 'Hello PubSub',
        "type" : 'welcome'
    }
    pubsub.fire('simpleEvt',message);
    window.console.log('Event fired');
}
}