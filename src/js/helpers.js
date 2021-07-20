import { TIMEOUT_SEC } from "./config";

export const amountRatioMultiplier = (amount, ratio) => amount * ratio;

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

export const numberFormatter = (value) => {
	return new Intl.NumberFormat("en-IN").format(value);
	// console.log(value);
};
