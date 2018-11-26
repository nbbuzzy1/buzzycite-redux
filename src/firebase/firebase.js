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

database.ref().set({
  name: 'Nick Buzzy',
  age: 26,
  isSingle: false,
  location: {
    city: 'Cleveland',
    country: 'United States'
  },
})

// database.ref().set('This is my data')

database.ref('age').set(27);
database.ref('location/city').set('Chicago');
database.ref('attributes').set({
  height: 73,
  weight: 180
});

// const database = firebase.database();

// export { firebase, as default };
