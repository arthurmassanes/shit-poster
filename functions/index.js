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
                html: `Hello ${item.author}, someone commented on your shit-post. (${item.comments.length} comments)`
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
