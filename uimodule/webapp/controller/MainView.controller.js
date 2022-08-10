sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.myUI5App.controller.MainView", {
            onInit: function () {},

            actionButton: function () {
                $.ajax({
                    url: "/test",
                    method: "GET",
                    timeout: 0,
                }).done(function (response) {
                    console.log(response);
                });
            },
        });
    }
);
