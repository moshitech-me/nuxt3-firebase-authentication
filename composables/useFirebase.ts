// source https://firebase.google.com/docs/auth/web/start

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const createUser = async (email, password) => {
    // sign up new users
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    return credentials
}

export const signInUser =async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials
}

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser()
    firebaseUser.value = auth.currentUser

    const userCookie = useCookie('userCookie')
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('Auth Changed:',user)
        // ...
      } else {
        // User is signed out
        console.log('Auth Changed:',user)
        // ...
      }
      firebaseUser.value = user
      userCookie.value = user;

      $fetch('/api/auth',{
        method:"POST",
        body:{
          user
        }
      })
    });
}

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut()
    console.log('Sign out',result);
    return result

}



// sign up existing users
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


  //Set an authentication state observer and get user data

