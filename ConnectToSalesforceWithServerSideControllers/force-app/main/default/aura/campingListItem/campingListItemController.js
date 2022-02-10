({
	packItem : function(component, event, helper) {
        let item = component.get("v.item");
        console.log(item);
        item.Packed__c = true;
        component.set("v.item", item);
        event.getSource().set("v.disabled", true);
	}
})