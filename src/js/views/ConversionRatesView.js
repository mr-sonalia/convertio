import { amountRatioMultiplier } from "../helpers.js";

class ConversionratesView {
	#parentElement = document.querySelector("#currency-rates-table tbody");
	#tableContent;
	render() {
		this.clear();
	}
	clear() {
		this.#parentElement.innerHTML = "";
	}
	renderTableData(amount, tableData) {
		this.clear();
		this.#tableContent = tableData
			.map((item) => {
				// prettier-ignore
				return (
                    `<tr class="tr">
                        <td class="td clr-green-200">${item.baseValue}</td>
                        <td class="td">${item.ratio}</td>
                        <td class="td text-align-right">${amountRatioMultiplier(amount, item.ratio)}</td>
                    </tr>`
                    );
			})
			.join("");

		this.#parentElement.insertAdjacentHTML("afterbegin", this.#tableContent);
	}
}

export default new ConversionratesView();
