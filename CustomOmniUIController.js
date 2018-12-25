({
	handleToggleChanged : function(component, event, helper) {
        var checked = component.get("v.checked");
        console.log("checked is now = " + checked);
        var omniAPI = component.find("omniToolkit");
        if(checked){
            omniAPI.setServicePresenceStatus({statusId: "0N5900000008OON"}).then(function(result) {
                console.log('Current status is: ' + result.statusName);
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            omniAPI.logout();
        }
    },
    
    onWorkAssigned : function(component, event, helper) {
        console.log("Work assigned.");
        var workItemId = event.getParam('workItemId');
        var workId = event.getParam('workId');
        console.log(workItemId);
        console.log(workId);
        helper.getCaseDetails(component,workItemId);
        component.set("v.hasWork", true);
    },
    
    onWorkAccepted : function(component, event, helper) {
        component.set("v.hasWork", false);
        console.log("Work accepted.");
    },
    
    onWorkDeclined : function(component, event, helper) {
        component.set("v.hasWork", false);
        console.log("Work declined.");
    },
    
    onLogout : function(component, event, helper) {
        component.set("v.hasWork", false);
        console.log("Logout success.");
    },
    
    acceptWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.acceptAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Accepted work successfully");
                } else {
                    console.log("Accept work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });        
    },
    
    declineWork: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getAgentWorks().then(function(result) {
            var works = JSON.parse(result.works);
            var work = works[0];
            omniAPI.declineAgentWork({workId: work.workId}).then(function(res) {
                if (res) {
                    console.log("Declined work successfully");
                } else {
                    console.log("Decline work failed");
                }
            }).catch(function(error) {
                console.log(error);
            });
        });        
    }
})
