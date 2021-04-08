/**
 * Created by Dragos on 03/12/21.
 */

({
    doInit : function(component, event, helper) {

    },

    handleRegisterEvent : function(component, event, helper){

    },

    handleFireEvent : function(component,event, helper){
    var valueFromInput = component.get('v.valueFromInput');
    console.log('valueFromInput + ' + valueFromInput);
    var testEvent = component.getEvent('numberInputEvent');

    testEvent.setParams({
        numberAdded: valueFromInput
    });
    testEvent.fire();
    console.log('event fired from child component 1');
    alert('event fired from child component 1');
    }
});