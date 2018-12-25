({
	// Fetch the accounts from the Apex controller
    getCaseDetails: function(component,workItemId) {
        var action = component.get('c.getCaseDetails');
        action.setParam("caseId", workItemId);
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
        	component.set('v.case', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
