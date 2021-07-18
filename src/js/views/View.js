export class View {
	mainElement = document.getElementById("main");
	hrefIDs = ["conversion-rates", "a-to-b-conversion"];
	clear() {
		this.mainElement.innerHTML = "";
	}
	renderStatic() {
		this.clear();
		this.renderTabbedButtons();
		this.tabbedButtonEvent();
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
            <a id="conversion-rates" href="#" class="button button-primary button-md tab-button active">Conversion Rates</a>
            <a id="a-to-b-conversion" href="#" class="button button-primary button-md tab-button">A to B Conversion</a>
        </div>
        `;
		this.mainElement.insertAdjacentHTML("beforeend", markup);
	}
	tabbedButtonEvent() {
		const tabButton = document.querySelectorAll(".tab-button");
		tabButton.forEach((tButton) =>
			tButton.addEventListener("click", async function (e) {
				tabButton.forEach((tBtn) => tBtn.classList.remove("active"));
				this.classList.toggle("active");
			})
		);
	}
}
