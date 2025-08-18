import Heading from "./components/heading/heading";
import KiwiImage from "./components/kiwi/kiwi-image";

const kiwiImage = new KiwiImage();
const heading = new Heading();
heading.render('Kiwi ');
kiwiImage.render();

import('HelloWorldApp/HelloWorldButton').then((HelloWorldButtonModule) => {
  const HelloWorldButton = HelloWorldButtonModule.default;
  const helloWorldButton = new HelloWorldButton();
  helloWorldButton.render();
}).catch((err) => {
  console.log('Error loading HelloWorldButton:', err);
})

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}

// helloWorldButton.methodDoesNotExist(); // This will throw an error because the method does not exist