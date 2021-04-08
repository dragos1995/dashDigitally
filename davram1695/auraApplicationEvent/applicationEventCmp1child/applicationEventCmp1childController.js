/**
 * Created by Dragos on 03/12/21.
 */

({
    handleApplicationEvent : function(component,event,helper){
    var myEvent = event.getParam("numberParameter");
    component.set("v.valueFromComponent", myEvent);
    console.log('Event catch on component child 1 ');
    alert('Event catch on component child 1 ');
    }
});