import { LightningElement } from 'lwc';

export default class App extends LightningElement {
	// TODO - change handler.
	squaresClicked = [];

	onSquareClick(event) {
		let counter = 1000;
		const id = event.detail.id;

		this.squaresClicked.push(id);

		// Have all squares been clicked?
		if(this.squaresClicked.length === 7) {
			this.squaresClicked.reverse().forEach(id => {
				let squareToAnimate = this.template.querySelector(`my-square.square${id}`);
				setTimeout(() => {
					// TODO improve - do not query DOM.
					squareToAnimate.animateSquare();
				}, counter += 1000);
			});
			this.squaresClicked = [];
		}
	}
}
