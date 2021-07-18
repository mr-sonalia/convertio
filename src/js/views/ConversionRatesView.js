import { View } from "./View.js";

import { amountRatioMultiplier } from "../helpers.js";

class ConversionratesView extends View {
	renderInputForm() {
		this.renderStatic();

		const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-3 input-field-container">
				<label for="base-currency" class="label mar-b-1">Select base currency</label>
				<input class="form-control input-field" list="base-currencies" name="base-currency" id="base-currency" placeholder="Select any one" />
				<datalist id="base-currencies">
					<option value="USD"></option>
					<option value="INR"></option>
					<option value="AUD"></option>
					<option value="CNY"></option>
					<option value="SCD"></option>
				</datalist>
			</div>
			<div class="mar-b-6 input-field-container">
				<label for="amount" class="label mar-b-1">Enter amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">USD</span>
				</div>
				<input type="number" min="0" class="form-control input-field numeric" id="amount" aria-describedby="null" placeholder="500.50" />
			</div>
			<div class="mar-b-3 input-field-container">
				<div class="button-group">
					<a id="renderA" href="#" class="button button-primary button-lg">Show Conversion Rates</a>
				</div>
			</div>
		</form>
		`;

		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}

	renderResults(amount, tableData) {
		this.renderStatic();

		this.tableContent = tableData
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

		const markup = `
		<form class="form pad-l-2 pad-r-2" method="get">
			<div class="mar-b-4 input-field-container">
				<label for="amount" class="label mar-b-1">Current amount</label>
				<div class="base-currency-holder">
					<span class="base-currency">USD</span>
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

	renderConversionRates() {
		window.addEventListener("DOMContentLoaded", (event) => {
			const renderA = document.getElementById("renderA");

			// ** View change event
			renderA.addEventListener("click", async function (event) {
				ConversionRatesView.renderResults(model.simulatedAmount, model.simulatedResponse);
			});
		});
	}
}

export default new ConversionratesView();
