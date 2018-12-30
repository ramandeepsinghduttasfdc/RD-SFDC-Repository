({
	clickCreate : function(component, event, helper) {
        var action = component.get('c.createOpportunity');
        action.setParam("oppParameters", component.get("v.oppParameters"));
        action.setParam("oppCloseDate", component.get("v.oppCloseDate"));
        action.setParam("sObjCampaign", component.get("v.selectedLookUpRecord"));
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
        	component.set('v.result', actionResult.getReturnValue());
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "message": actionResult.getReturnValue()
            });
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    }
})
