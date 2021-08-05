import { TIMEOUT_SEC } from "./config";

export const amountRatioMultiplier = (amount, ratio, fraction) => numberFormatter(+amount * +ratio, fraction);

// numberFormatter(item.finalAmount)
export const timeout = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${sec} second`));
		}, sec * 1000);
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
export const numberFormatter = (value, fraction = 4) => {
	let [integer, decimal] = value.toString().split(".")
	
	if(integer === null || integer === NaN || integer === "") integer = "0"
	if(decimal === null || decimal === NaN || decimal === "") decimal = "0000"
	 
	return[
		new Intl.NumberFormat('en-IN').format(integer), 
		decimal.slice(0, fraction).padEnd(fraction, "0")
	].join('.')
 }
