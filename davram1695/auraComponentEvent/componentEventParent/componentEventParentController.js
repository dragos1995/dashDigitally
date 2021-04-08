/**
 * Created by Dragos on 03/12/21.
 */

({
   handleEventOnParent : function(component, event, helper) {
   console.log('Event catched on parent');
   alert('Event catched on parent');
   var insertedValue = event.getParam('numberAdded');
   component.set('v.valueFromChild',insertedValue);

    }
});