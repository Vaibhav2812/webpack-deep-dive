import KiwiImage from "../kiwi/kiwi-image";
import Heading from "../heading/heading";

class KiwiPage {
    render() {
        const kiwiImage = new KiwiImage();
        const heading = new Heading();
        heading.render('Kiwi ');
        kiwiImage.render();
    }
}

export default KiwiPage;
