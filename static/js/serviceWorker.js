// Extracted from https://github.com/GoogleChromeLabs/sw-precache/blob/master/demo/app/js/service-worker-registration.js#L27

if ('serviceWorker' in navigator) {

    window.addEventListener('load', function () {

        navigator.serviceWorker.register('sw.js').then((reg) => {

            reg.onupdatefound = () => {
                var installingWorker = reg.installing;

                installingWorker.onstatechange = () => {
                    switch (installingWorker.state) {
                        case 'installed':
                            if (navigator.serviceWorker.controller) {
                                console.log('New or updated content is available.');
                            } else {
                                console.log('Content is now available offline!');
                            }
                            break;
                        case 'redundant':
                            console.error('The installing service worker became redundant.');
                            break;
                    }
                };
            };
        }).catch((e) => {
            console.error('Error during service worker registration:', e);
        });
    });
}