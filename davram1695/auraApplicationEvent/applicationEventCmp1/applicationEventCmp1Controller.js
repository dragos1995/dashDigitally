/**
 * Created by Dragos on 03/12/21.
 */

({
    handleFireEvent : function(component,event){
        var valueFromInput = component.get("v.valueFromInput");
        var appEvent = $A.get("e.c:applicationEventExample");
        appEvent.setParams(
            {
                "numberParameter" : valueFromInput
            }
        );
        appEvent.fire();
        console.log('Event fired from component 1');
        alert('Event fired from component 1');
    }
});