import firebase from './firebaseConfig'

const postsDb = {
    create(data) {
        return firebase.firestore().collection('posts').add(data);
    },
    getAll() {
        return firebase.firestore().collection('posts').get();
    },
    get(id) {
        return firebase.firestore().collection('posts').doc(id).get();
    },
    put(id, data) {
        return firebase.firestore().collection('posts').doc(id).update(data)
    },
    delete(id) {
        return firebase.firestore().collection('posts').doc(id).delete();
    }
}

export default postsDb