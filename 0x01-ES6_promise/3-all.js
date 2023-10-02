import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;

  return uploadPhoto()
    .then((value) => {
      body = value.body;
    })
    .then(() => createUser())
    .then((value) => {
      console.log(`${body} ${value.firstName} ${value.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
