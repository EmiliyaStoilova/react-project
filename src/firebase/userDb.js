import firebase from './firebaseConfig'

const userDb = {
    register(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    },
    login(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    logout() {
        return firebase.auth().signOut()
    },
    setCookie() {
        return firebase.auth().currentUser.getIdToken(true).then(function (token) {
            // set the __session cookie
            document.cookie = 'auth-user=' + token + ';max-age=3600';
        })
    }
}

export default userDb