
import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'counters-db',
  version: 1,
  objectStoresMeta: [
    {
      store: 'counters',
      storeConfig: { keyPath: 'id', autoIncrement: false },
      storeSchema: [
        { name: 'id', keypath: 'id', options: { unique: true } },
        { name: 'current', keypath: 'current', options: { unique: false } },
        { name: 'by', keypath: 'by', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ]
    }
  ]
}
