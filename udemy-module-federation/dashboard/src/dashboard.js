import NavigationBar from './components/navigation-bar/navigation-bar';
console.log('Dashboard module loaded');

const url =  window.location.pathname;

const navigationItems = [
    { label: 'Hello World Page', path: '/hello-world-page' },
    { label: 'Kiwi Page', path: '/kiwi-page' }
]

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

if (url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule) => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    })
} else if (url === '/kiwi-page') {
    import('KiwiApp/KiwiPage').then((KiwiPagePageModule) => {
        const KiwiPage = KiwiPagePageModule.default;
        const kiwiPage = new KiwiPage();
        kiwiPage.render();
    })
}
