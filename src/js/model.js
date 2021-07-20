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

		state.search.rates = Object.entries(data.conversion_rates);
		state.result = state.search.rates.map((rate) => {
			return {
				baseCode: rate[0],
				ratio: rate[1],
				finalAmount: +(rate[1] * amount).toFixed(3),
			};
		});
		// console.table(state.result);
	} catch (error) {
		throw error;
	}
};

export const loadPairConversionRates = async (queries, amount) => {
	state.search.query = queries;
	state.search.amount = amount;

	try {
		const data = await AJAX(`${API_URL}/${API_KEY}/pair/${queries}`);

		state.search.rates = Object.values([data.base_code, data.target_code, data.conversion_rate]);

		const [baseCode, targetCode, ratio] = state.search.rates;
		state.result = [
			{
				baseCode,
				targetCode,
				ratio,
				amount,
				finalAmount: +(amount * ratio).toFixed(3),
			},
		];

		console.table(state.result);
	} catch (error) {
		throw error;
	}
};
// loadConversionRates("USD", 1000);
// loadPairConversionRates(`INR/USD`, 1000);
