import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAS6mukhTKc-YEio0IRcWolYRAlG-vcw_c",
  authDomain: "buzzycite-ab3af.firebaseapp.com",
  databaseURL: "https://buzzycite-ab3af.firebaseio.com",
  projectId: "buzzycite-ab3af",
  storageBucket: "buzzycite-ab3af.appspot.com",
  messagingSenderId: "1062035939966"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }














//Child Removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

//Child Changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

//Child Added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(expenses)
//   })








// database.ref('expenses').push({
//   description: 'rent',
//   amount: 50,
//   note: 'need to be paid',
//   createdAt: 25
// })

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// })

// database.ref('notes/-LSP8SNsJCbGlik3AbDU').remove()

// database.ref('notes').set(notes)

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching')
// })
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetchingd data', e)
//   })

// database.ref().set({
//   name: 'Nick Buzzy',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   isSingle: false,
//   location: {
//     city: 'Cleveland',
//     country: 'United States'
//   },
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('this failed.', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data was removed')
//   }).catch((e) => {
//     console.log('data was not removed')
//   })