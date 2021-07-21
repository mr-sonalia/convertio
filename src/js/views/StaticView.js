import { View } from "./View.js";
class StaticView extends View {
	tabsMarkup = `
	<div class="button-group pad-l-2 pad-r-2 mar-t-3 mar-b-1 ">
		<button id="conversion-rates" href="#" class="button button-primary button-md tab-button active">Conversion Rates</button>
		<button id="pair-conversion" href="#" class="button button-primary button-md tab-button">Pair Conversion</button>
	</div>
	`;

	renderStatic() {
		this.clearRender();
		this.mainElement.insertAdjacentHTML("beforebegin", this.tabsMarkup);
	}

	homePageEventHandler(handlerA, handlerB) {
		this.loadOptions.addEventListener("click", (Event) => {
			Event.preventDefault();
			Event.stopPropagation();
			this.mainElement.classList.toggle("grid-enabled");
			this.renderStatic();
			this.initEvents(handlerA, handlerB);
		});
	}
}

export default new StaticView();
