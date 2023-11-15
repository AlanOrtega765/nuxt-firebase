import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

interface User {
  email: string;
  password: string;
}

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const register = async (_user: User) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        $auth,
        _user.email,
        _user.password
      );

      const user = userCredentials.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (_user: User) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        $auth,
        _user.email,
        _user.password
      );

      const user = userCredentials.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut($auth);
    await navigateTo('/login');
  };

  return { register, login, logout };
};
