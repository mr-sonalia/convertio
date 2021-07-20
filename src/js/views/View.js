import { SUPPORTED_COUNTRY_CODES } from "../config.js";

export class View {
	mainElement = document.getElementById("main");
	tabButtons = null;
	clearRender() {
		this.mainElement.innerHTML = "";
	}

	renderNavbar() {
		const markup = `
        <nav class="navbar">
            <div class="container-fluid">
                <div class="nav-brand pad-l-2">Convertio</div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="" class="nav-link">Github</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;

		document.body.insertAdjacentHTML("afterbegin", markup);
	}

	renderInputForm(markup) {
		this.clearRender();
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}

	addSearchHandler(handler) {
		this.renderInputForm(this.markup);
		document.querySelector(".form").addEventListener("submit", (Event) => {
			Event.preventDefault();
			handler();
		});
	}

	tabbedButtonStateEvent(handlerA, handlerB) {
		console.log(handlerA);
		handlerA();
		this.tabButtons = document.querySelectorAll(".tab-button");
		this.tabButtons.forEach((button) => {
			button.addEventListener("click", (Event) => {
				this.tabButtons.forEach((tBtn) => tBtn.classList.remove("active"));
				button.classList.toggle("active");
				if (button.id === "conversion-rates") handlerA();
				else handlerB();
			});
		});
	}

	renderSupportedCounties() {
		return SUPPORTED_COUNTRY_CODES.map((code) => `<option>${code.toUpperCase()}</option>`).join("");
	}

	renderError(error) {
		//  todo: Create error handling
		console.error(error);
	}
}
