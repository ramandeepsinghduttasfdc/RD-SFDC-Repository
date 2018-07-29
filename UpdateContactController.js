({
    handleContactUpdate: function(component, event, helper) {
        component.find("recordHandler").saveRecord($A.getCallback(function(saveResult) {
			// Callback code goes here..
        }));
    }
})
