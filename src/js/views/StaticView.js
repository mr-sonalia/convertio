import { View } from "./View.js";
class StaticView extends View {
	renderStatic() {
		this.renderNavbar();
		this.clearRender();
	}
}

export default new StaticView();
