// Welcome to Framer template
// Keep this line to define the device frame
import device from './device';

// This is just demo code. Feel free to delete it all.
const imageLayer = new Layer({
	x: Align.center,
	y: Align.center,
	width: 128,
	height: 128,
	image: "images/Icon.png"
})

// Define a set of states with names (the original state is 'default')
imageLayer.states = {
	second: { y: 100, scale: 0.6, rotationZ: 100 },
	third: { y: 300, scale: 1.3 },
	fourth: { y: 200, scale: 0.9, rotationZ: 200 }
}

// Set the default animation options
imageLayer.animationOptions = {
	curve: "spring(500,12,0)"
}

// On a click, go to the next state
imageLayer.on(Events.Click, function () {
	imageLayer.stateCycle()
})