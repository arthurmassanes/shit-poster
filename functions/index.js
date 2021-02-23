const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.onItemCreation = functions.firestore.document('posts/{postId}')
    .onUpdate(async (snapshot, context) => {
        const item = snapshot.after.data();
        return (admin.firestore().collection('mail').add({
            to: [item.email],
            message: {
                subject: 'New comment on your shit-post',
                html: `<div style="border: 2px solid #efd5ff; border-radius: 20px; margin: 10%">
                <h1 style="color: #515ada">Hello ${item.author}, someone commented on your shit-post!</h1>
                <p>View all ${item.comments.length} comments at <a href="https://shit-poster.web.app">https://shit-poster.web.app</a></p>
                <i>From the Shit-Poster team <3</i>
                </div>`
            }
        })).then(() => console.log('EMAIL WAS QUEUED'))
    })

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
