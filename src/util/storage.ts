import { STORAGE_ACTION } from "./types";

const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

export const setStorage = (action: STORAGE_ACTION, data: any) => {
  if (action === STORAGE_ACTION.GHOST_TOKEN) {
    sessionStorage.setItem(action, data);
  } else {
    localStorage.setItem(action, data);
  }
};

export const getStorage = (action: STORAGE_ACTION) => {
  if (action === STORAGE_ACTION.GHOST_TOKEN) {
    sessionStorage.getItem(action);
  } else {
    localStorage.getItem(action);
  }
};
