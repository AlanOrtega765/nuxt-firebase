import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

interface User {
  email: string;
  password: string;
}

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const register = async (_user: User) => {
    try {
      await createUserWithEmailAndPassword($auth, _user.email, _user.password);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (_user: User) => {
    try {
      await signInWithEmailAndPassword($auth, _user.email, _user.password);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut($auth);
    await navigateTo('/login');
  };

  const currentUserPromise = () =>
    new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged($auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });

  const currentUser = () => $auth.currentUser;

  return { register, login, logout, currentUserPromise, currentUser };
};
