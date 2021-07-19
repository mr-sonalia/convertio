import { API_URL, API_KEY } from "./config.js";
import { AJAX } from "./helpers.js";
export const state = {
	search: {
		query: ``,
		amount: null,
		rates: [],
	},
	result: [],
};

const createConversionRateObject = (data) => {
	const { result } = data;
	return {
		baseCode: result.base_code,
		conversionRates: result.conversion_rates,
	};
};

export const loadConversionRates = async (query, amount) => {
	state.search.query = query;
	state.search.amount = amount;
	try {
		const data = await AJAX(`${API_URL}/${API_KEY}/latest/${query}`);

		// state.search.baseCode = data.base_code;
		state.search.rates = Object.entries(data.conversion_rates);

		state.result = state.search.rates.map((rate) => {
			return {
				baseCode: rate[0],
				ratio: rate[1],
				finalAmount: +(rate[1] * amount).toFixed(3),
			};
		});
		console.table(state.result);
	} catch (e) {
		throw e;
	}
};
