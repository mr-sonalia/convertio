import { SUPPORTED_COUNTRY_CODES } from "../config.js";

export class View {
	mainElement = document.getElementById("main");

	clear() {
		this.mainElement.innerHTML = "";
	}
	render() {
		this.clear();
		this.renderTabbedButtons();
		this.addTabbedButtonEvent();
	}
	renderError() {
		console.log("Error");
	}
	renderTabbedButtons() {
		const markup = `
        <div class="button-group pad-l-2 pad-r-2 mar-t-3 mar-b-5">
            <button id="conversion-rates" href="#" class="button button-primary button-md tab-button active">Conversion Rates</button>
            <button id="a-to-b-conversion" href="#" class="button button-primary button-md tab-button">A to B Conversion</button>
        </div>
        `;
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}
	addTabbedButtonEvent() {
		const tabButton = document.querySelectorAll(".tab-button");
		tabButton.forEach((tButton) =>
			tButton.addEventListener("click", async function (e) {
				tabButton.forEach((tBtn) => tBtn.classList.remove("active"));
				this.classList.toggle("active");
			})
		);
	}
	renderSupportedCounties() {
		return SUPPORTED_COUNTRY_CODES.map((code) => `<option>${code}</option>`).join("");
	}
}
