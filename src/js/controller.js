"use strict";

// * IMPORTS
import * as model from "./model.js";
import ConversionRatesView from "./views/ConversionRatesView.js";
import StaticView from "./views/StaticView.js";

// * VARIABLES

// * FUNCTIONS
const controlDataflow = () => {
	// StaticView.renderStatic();
	ConversionRatesView.renderNavbar();
	ConversionRatesView.renderInputForm();
	// ConversionRatesView.renderConversionRates();
	// ConversionRatesView.renderResults(model.simulatedAmount, model.simulatedResponse);
	// ConversionRatesView.renderConversionRates();
};

// * INIT
const init = function () {
	controlDataflow();
};
init();

// * EVENT LISTENERS
window.addEventListener("DOMContentLoaded", (event) => {
	const renderA = document.getElementById("renderA");

	// ** View change event
	renderA.addEventListener("click", async function (event) {
		ConversionRatesView.renderResults(model.simulatedAmount, model.simulatedResponse);
	});
});
