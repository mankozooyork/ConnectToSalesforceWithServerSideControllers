({
    createItem: function(component, newCampingItem) {
        let action = component.get("c.saveItem");
        action.setParams({
            "campingItem": newCampingItem
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let existedItems = component.get("v.items");
                existedItems.push(response.getReturnValue());
                component.set("v.items", existedItems);
            }
        });
        $A.enqueueAction(action);
    },
})