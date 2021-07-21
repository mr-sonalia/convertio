"use strict";

// * IMPORTS
import * as model from "./model.js";
import ConversionRatesView from "./views/ConversionRatesView.js";
import PairConversionView from "./views/PairConversionView.js";
import StaticView from "./views/StaticView.js";
import { SUPPORTED_COUNTRY_CODES } from "./config.js";

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
			query,
			amount, 
			model.state.result);
		//
	} catch (error) {
		ConversionRatesView.renderError(error);
	}
};
const controlPairConverion = async () => {
	try {
		const [queryA, queryB] = PairConversionView.getQuery();
		const amount = PairConversionView.getAmount();
		if (!queryA || !queryB) return;

		await model.loadPairConversionRates(`${queryA}/${queryB}`, amount);

		PairConversionView.renderResults(...model.state.result);
		//
	} catch (error) {
		PairConversionView.renderError(error);
	}
};
// * INIT
const init = function () {
	StaticView.autoRemoveLoader();

	StaticView.homePageEventHandler(
		() => ConversionRatesView.addSearchHandler(controlConversionRates),
		() => PairConversionView.addSearchHandler(controlPairConverion)
	);
};
init();
