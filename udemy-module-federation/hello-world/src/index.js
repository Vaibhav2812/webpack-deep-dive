import HelloWorldButton from "./components/hello-world/hello-world-button";
import Heading from "./components/heading/heading";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render('hello World');
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}

// helloWorldButton.methodDoesNotExist(); // This will throw an error because the method does not exist