sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, ResourceModel, Filter, FO) {
    "use strict";
    return Controller.extend("treinamento.ui5.controller.Page1", {

        onPress: function (evt) {
            var oColumnListItem = evt.getSource();
            this.getOwnerComponent().getRouter().navTo("Page2", {
                value: oColumnListItem.getCells()[0].getBinding("title")._getValue()
            });
        },

        onSearch: function(evt) {
            var aFilters = [];
            var query = evt.getParameter("query");
            var filter = new Filter("ProductName", FO.Contains, query);
            // var filter2 = new Filter("Quantity", FO.EQ, query);
            aFilters.push(filter)
            // aFilters.push(filter2);
            this.byId("table").getBinding("items").filter(aFilters);
            

        }

    });

});