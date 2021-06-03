import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import { IUser } from '../types/IUser'

interface IDBData {
  users: IUser[]
}
const adapter = new JSONFile<IDBData>('db.json')
const db = new Low<IDBData>(adapter)

class InitialDB implements IDBData {
  users = []
}

export const initDB = async(filePath) => {
  await db.read();
  db.data ||= new InitialDB();
  console.log('db.data: ', db.data);
} 

export default db;