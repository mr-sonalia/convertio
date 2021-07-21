import { View } from "./View.js";
class PairConversionView extends View {
	formElement = document.querySelector(".form");
	markup = `
		<form class="form pad-l-2 pad-r-2 mar-t-4" method="get">
			<div class="row mar-b-3 input-field-container">
				<div class="col-6">
					<label for="base-currency" class="label mar-b-1">Current base</label>
					<input class="form-control input-field" list="base-currencies" name="base-currency" id="base-currency" placeholder="USD" required />
					<datalist id="base-currencies"> 
					${this.renderSupportedCounties()}
					</datalist>
				</div>
				<div class="col-6">
					<label for="base-currency" class="label mar-b-1">Converted base</label>
					<input class="form-control input-field" list="base-currencies" name="base-currency" id="base-currency" placeholder="INR" required />
					<datalist id="base-currencies"> 
					${this.renderSupportedCounties()}
					</datalist>
				</div>
			</div>
			<div class="mar-b-6 input-field-container">
				<label for="amount" class="label mar-b-1">Enter amount</label>
				<div class="base-currency-holder holder-type-b">
					<span class="base-currency small">AMOUNT</span>
				</div>
				<input type="number" min="0" class="form-control input-field numeric" id="amount" aria-describedby="null" placeholder="500.50" step="any" required/>
			</div>
			<div class="mar-b-3 input-field-container">
				<div class="button-group">
					<button type="submit" href="#" class="button button-primary button-lg">Convert Amount</button>
				</div>
				<h6 class="h6 pad-t-2 pad-l-1">Note: ROCs are updated daily</h6>
			</div>
	</form>
		`;

	renderResults(result) {
		this.clearRender();
		console.log(result);
		const markup = `
		<form class="form pad-l-2 pad-r-2 mar-t-3" method="get">
			<div class="mar-b-3 input-field-container">
				<label for="ratio" class="label mar-b-1">Ratio</label>
				<input type="text" class="form-control input-field" id="ratio" aria-describedby="null" placeholder="500.50" value="${result.ratio}" disabled />
			</div>
			<div class="mar-b-3 input-field-container">
				<label for="amount" class="label mar-b-1">Base amount</label>
				<div class="base-currency-holder holder-type-a">
					<span class="base-currency">${result.baseCode}</span>
				</div>
				<input type="text" min="0" class="form-control input-field numeric" id="base-amount" aria-describedby="null" placeholder="500.50" value="${result.currAmount}"  step="any" disabled />
			</div>
			<div class="mar-b-3 input-field-container">
				<label for="amount" class="label mar-b-1">Target amount</label>
				<div class="base-currency-holder holder-type-a">
					<span class="base-currency">${result.targetCode}</span>
				</div>
				<input type="text" min="0" class="form-control input-field numeric" id="target-amount" aria-describedby="null" placeholder="500.50" value="${result.finalAmount}" step="any" disabled />
			</div>
		</form>
		`;

		this.mainElement.insertAdjacentHTML("beforeend", markup);
		this.toggleLoader();
	}

	getQuery() {
		let baseCodes = [];
		// prettier-ignore
		document.querySelectorAll("#base-currency")
        .forEach((field, index) => 
		(baseCodes[index] = `${field.value}`.slice(0,3).toUpperCase()));

		return baseCodes;
	}

	getAmount() {
		return document.getElementById("amount").value;
	}
}

export default new PairConversionView();
