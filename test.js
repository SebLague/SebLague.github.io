
function setup() {
	createCanvas(1280, 720);

}

function draw() {
	background(80,30,30);

	fill(255)
	ellipse(mouseX,mouseY,50,50)

	let display = touches.length + ' touches';
  	text(display, 5, 10);
}