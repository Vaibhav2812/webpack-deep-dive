import HelloWorldButton from "../hello-world/hello-world-button";
import Heading from "../heading/heading";

class HelloWorldPage {
    render() {
        const helloWorldButton = new HelloWorldButton();
        const heading = new Heading();
        heading.render('hello World');
        helloWorldButton.render()
    }
};
export default HelloWorldPage;
