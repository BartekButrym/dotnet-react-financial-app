import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '@utils/localStorage';

export const useAuth = () => {
  const token = getFromLocalStorage('accessToken');

  const isAuthenticated = !!token;

  const login = (userToken: string) => {
    addToLocalStorage({ key: 'accessToken', value: userToken });
  };

  const logout = () => {
    removeFromLocalStorage('accessToken');
  };

  return { isAuthenticated, login, logout };
};
