import { View } from "./View.js";
class StaticView extends View {
	// returnResults() {
	// 	["load"].forEach((Event) => {
	// 		window.addEventListener(Event);
	// 	});
	// }

	renderStatic() {
		this.clear();
		this.renderNavbar();
		this.render();
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
}

export default new StaticView();
