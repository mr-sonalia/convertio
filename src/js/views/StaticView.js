import { View } from "./View.js";
class StaticView extends View {
	renderStatic() {
		this.clear();
		this.renderNavbar();
		this.renderTabbedButtons();
	}
	renderNavbar() {
		const markup = `
        <nav class="navbar">
            <div class="container-fluid">
                <div class="nav-brand"></div>
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
	renderTabbedButtons() {
		const markup = `
        <div class="button-group pad-l-2 pad-r-2 mar-t-3 mar-b-5">
            <a id="conversionRates" href="#" class="button button-primary button-md tab-button active">Conversion Rates</a>
            <a id="aToBConversion" href="#" class="button button-primary button-md tab-button">A to B Conversion</a>
        </div>
        `;
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}
}

export default new StaticView();
