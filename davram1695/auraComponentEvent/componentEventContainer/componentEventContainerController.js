/**
 * Created by Dragos on 03/12/21.
 */

({
    handleEventFromChild : function(component, event, helper){
        console.log('Event catched on container');
        alert('Event catched on container');
        var cmpEvent = event.getParam('numberAdded');
        component.set('v.valueFromChild',cmpEvent);

    }
});