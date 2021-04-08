/**
 * Created by Dragos on 03/13/21.
 */

({
        handleApplicationEvent : function(component,event,helper){
        var myEvent = event.getParam("numberParameter");
        component.set("v.valueFromComponent", myEvent);
        console.log('Event catch on container component');
        alert('Event catch on container component');
        }
});