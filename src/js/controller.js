"use strict";
import * as model from "./model.js";
// import { amountRatioMultiplier } from "./helpers.js";
import ConversionRatesView from "./views/ConversionRatesView.js";
import "core-js/stable";
const controlDataflow = () => {
	ConversionRatesView.renderTableData(model.simulatedAmount, model.simulatedResponse);
};

const init = function () {
	controlDataflow();
};
init();
