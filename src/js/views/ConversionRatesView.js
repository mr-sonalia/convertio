import { View } from "./View.js";
import { amountRatioMultiplier } from "../helpers.js";

class ConversionratesView extends View {
	formElement = document.querySelector(".form");
	result = {
		amount: null,
		tableData: "",
	};
	renderInputForm() {
		// this.renderStatic();
		const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-3 input-field-container">
				<label for="base-currency" class="label mar-b-1">Select base currency</label>
				<input class="form-control input-field" list="base-currencies" name="base-currency" id="base-currency" placeholder="Select any one" required/>
				<datalist id="base-currencies">
				${this.renderSupportedCounties()}
				</datalist>
			</div>
			<div class="mar-b-6 input-field-container">
				<label for="amount" class="label mar-b-1">Enter amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">AMT</span>
				</div>
				<input type="number" min="0" class="form-control input-field numeric" id="amount" aria-describedby="null" placeholder="500.50" required />
			</div>
			<div class="mar-b-3 input-field-container">
				<div class="button-group">
					<button type="submit" id="conversionRates" href="#" class="button button-primary button-lg return-results-button">Show Conversion Rates</button>
				</div>
			</div>
		</form>
		`;
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}

	renderResults(baseCode, amount, tableData) {
		this.render();
		this.result = { amount, tableData };
		this.tableContent = tableData
			.map((item) => {
				// prettier-ignore
				if(baseCode == item.baseCode) return ''
				return `<tr class="tr">
                        <td class="td clr-green-200">${item.baseCode}</td>
                        <td class="td">${item.ratio}</td>
                        <td class="td text-align-right">${new Intl.NumberFormat("en-IN").format(item.finalAmount)}</td>
                    </tr>`;
			})
			.join("");

		const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-4 input-field-container">
				<label for="amount" class="label mar-b-1">Current amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">${baseCode}</span>
				</div>
				<input
					type="number"
					min="0"
					class="form-control input-field numeric"
					id="amount"
					aria-describedby="null"
					placeholder="500.50"
				/>
			</div>
		</form>

		<div class="table-container pad-l-2 pad-r-2">
			<table id="currency-rates-table" class="table table-borderless">
				<thead>
					<tr class="tr">
						<th style="width: 25%" class="th label" scope="col">Base</th>
						<th style="width: 25%" class="th label" scope="col">Ratio</th>
						<th style="width: 50%" class="th label text-align-right" scope="col">Amount</th>
					</tr>
				</thead>
				<tbody>${this.tableContent}</tbody>
			</table>
		</div>
		`;

		this.mainElement.insertAdjacentHTML("beforeend", markup);
		document.getElementById("amount").value = amount;
	}

	getQuery() {
		return document.querySelector("#base-currency").value;
	}
	getAmount() {
		return document.getElementById("amount").value;
	}
	addSearchHandler(handler) {
		document.querySelector(".form").addEventListener("submit", (e) => {
			e.preventDefault();
			handler();
		});
	}
}

export default new ConversionratesView();

let formatter = Intl.NumberFormat("en-US");
