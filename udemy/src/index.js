import HelloWorldButton from "./components/hello-world-button";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode');
}

// helloWorldButton.methodDoesNotExist(); // This will throw an error because the method does not exist