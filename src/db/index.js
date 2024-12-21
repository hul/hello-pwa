// src/db.js
import Dexie from 'dexie';

export const db = new Dexie('moja-aplikacja-db');
db.version(1).stores({
  produkty: '++id, nazwa, cena'
});
