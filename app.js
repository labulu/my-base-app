// app.js
import { sdk } from '@farcaster/miniapp-sdk';

// When the app is ready to display
async function initApp() {
    await sdk.actions.ready();
    console.log("My Base App is ready!");
}

initApp();
