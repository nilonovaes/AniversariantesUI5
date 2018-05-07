sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, ODataModel) {
    "use strict";
    return UIComponent.extend("treinamento.ui5.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            var oData = new ODataModel("http://services.odata.org/v2/northwind/northwind.svc/");
            // var oData = new ODataModel("http://10.0.1.70:8000/sap/opu/odata/SAP/Z_PARKINGUI5_SRV_01/");

            this.setModel(oData);

            this.getRouter().initialize();

        }
    });
});