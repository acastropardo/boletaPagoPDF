/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 periodosCollection in the list
// * All 3 periodosCollection have at least one ToPeriodo

sap.ui.require([
	"sap/ui/test/Opa5",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/App",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/Browser",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/Master",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/Detail",
	"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "pdf.ZHR_TEST_BOLETA_PAGO.view."
	});

	sap.ui.require([
		"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/MasterJourney",
		"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/NavigationJourney",
		"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/NotFoundJourney",
		"pdf/ZHR_TEST_BOLETA_PAGO/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});