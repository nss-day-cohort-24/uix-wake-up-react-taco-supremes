import { rebase }  from '../config/constants'

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function saveUser(user) {
  return rebase.initializedApp.database().ref().child(`wakeupappusers/${user.uid}/deets`)
    .update({
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
      name: user.displayName,
      zip: null
    })
    .then(() => {
      return user;
    })
}