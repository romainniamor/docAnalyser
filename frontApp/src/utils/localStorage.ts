// Définition des types

type Serializable =
  | string
  | number
  | boolean
  | null
  | Serializable[]
  | { [key: string]: Serializable };

const serialize = (value: Serializable): string => {
  return JSON.stringify(value);
};

const deserialize = (value: string): Serializable => {
  return JSON.parse(value);
};

// Fonctions pour manipuler le local storage

export const setLocalStorage = (key: string, value: Serializable) => {
  const valueSerialized = serialize(value);
  localStorage.setItem(key, valueSerialized);
};

export const getLocalStorage = (key: string) => {
  return deserialize(localStorage.getItem(key));
};
