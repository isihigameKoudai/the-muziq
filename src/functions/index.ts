import * as functions from 'firebase-functions';
import next from 'next';

const dev: boolean = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((req, res) => {
 res.send("Hello from Firebase!!!!");
//  return app.prepare().then(() => handle(req, res))
});
