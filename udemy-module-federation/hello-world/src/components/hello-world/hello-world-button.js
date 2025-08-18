import './hello-world-button.css';
class HelloWorldButton {
    render() {
        const btn = document.createElement('button');
        btn.textContent = 'Hello World';
        btn.classList.add('hello-world-button');
        const body = document.querySelector('body');
        btn.addEventListener('click', () => {
            const p = document.createElement('p');
            p.textContent = 'Hello World!';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        })
        body.appendChild(btn);

    }
}
export default HelloWorldButton;