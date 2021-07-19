"use strict";

// * IMPORTS
import * as model from "./model.js";
import ConversionRatesView from "./views/ConversionRatesView.js";
import StaticView from "./views/StaticView.js";

// * VARIABLES

// * FUNCTIONS
const controlConversionRates = async () => {
	try {
		const query = ConversionRatesView.getQuery();
		const amount = ConversionRatesView.getAmount();
		if (!query) return;
		await model.loadConversionRates(query, amount);

		// prettier-ignore
		ConversionRatesView.renderResults(
			model.state.search.query,
			model.state.search.amount, 
			model.state.result);
	} catch (error) {}
};
const controlAtoBConverion = async () => {};
// * INIT
const init = function () {
	StaticView.renderStatic();
	ConversionRatesView.renderInputForm();
	ConversionRatesView.addSearchHandler(controlConversionRates);

	// ConversionRatesView.getQuery();

	// ConversionRatesView.addSearchHandler(controlConversionRates);
};
init();
