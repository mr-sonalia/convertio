import { SUPPORTED_COUNTRY_CODES } from "../config.js";

export class View {
	loaderElement = document.getElementById("loader");
	loadOptions = document.getElementById("loadOptions");
	mainElement = document.getElementById("main");
	navbrandElement = document.getElementById("nav-brand");
	tabButtons = null;

	autoRemoveLoader() {
		window.addEventListener("load", (E) => {
			document.querySelector(".loader").classList.toggle("remove");
		});
	}

	toggleLoader() {
		document.querySelector(".loader").classList.toggle("remove");
	}

	clearRender() {
		this.mainElement.innerHTML = "";
	}

	renderInputForm(markup) {
		this.clearRender();
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}

	addSearchHandler(handler) {
		this.renderInputForm(this.markup);
		document.querySelector(".form").addEventListener("submit", (Event) => {
			this.toggleLoader();
			Event.preventDefault();
			handler();
		});
	}

	initEvents(handlerA, handlerB) {
		handlerA();
		this.tabButtons = document.querySelectorAll(".tab-button");
		this.tabButtons.forEach((button) => {
			button.addEventListener("click", () => {
				this.tabButtons.forEach((tBtn) => tBtn.classList.remove("active"));
				button.classList.toggle("active");
				if (button.id === "conversion-rates") handlerA();
				else handlerB();
			});
		});
	}

	renderSupportedCounties() {
		return SUPPORTED_COUNTRY_CODES.map((obj) => `<option>${obj.code.toUpperCase()} (${obj.fullName})</option>`).join("");
	}

	renderError(error) {
		//  todo: Create error handling
		console.error(error);
	}
}
