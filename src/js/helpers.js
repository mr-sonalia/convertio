import { TIMEOUT_SEC } from "./config";

export const amountRatioMultiplier = (amount, ratio, fraction = 3) => numberFormatter(amount * ratio, fraction);

// numberFormatter(item.finalAmount)
const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

export const AJAX = async (url) => {
	try {
		const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

		const data = await response.json();

		if (!response.ok) throw new Error("Could not find what you were looking for 🙁");

		return data;
	} catch (error) {
		throw error;
	}
};

// prettier-ignore
export const numberFormatter = (value, fraction = 4) =>
	new Intl.NumberFormat("en-IN", 
	{ 
		minimumFractionDigits: fraction, 
		minimumIntegerDigits: 1 
	}).format(+value);
