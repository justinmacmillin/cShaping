import { LightningElement, api } from "lwc";

export default class Square extends LightningElement {
	@api id;

	@api squareclick;

	isEnabled = false;

	// Square has been clicked.
	handleButtonClick() {
		const button = this.template.querySelector("button");

		if(!button.classList.contains("clicked")) {
			button.classList.add("clicked");
		}

		if(!this.isEnabled) {
			this.dispatchEvent(new CustomEvent(
				"squareclick",
				{
					detail: {
						id: this.id
					}
				}
			));
		}
		this.isEnabled = true;
	}

	// Make square white again.
	@api
	animateSquare() {
		const button = this.template.querySelector("button");
		this.isEnabled = false;

		if(button.classList.contains("clicked")) {
			button.classList.remove("clicked");
		}
	}
}