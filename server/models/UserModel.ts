import { IModel } from '../types/IModel';
import { IUser } from './../types/IUser';
import db from './DB'

export default class UserModel implements IUser, IModel<IUser>
{
  id: number = null
  username: string = ''
  password: string = ''

  constructor() {
    this.id = Date.now()
  }

  static get(userId: number): IUser {
    return db.data.users.find(user => user.id === userId) || null;
  }

  static find(attr: string, value: any) {
    return db.data.users.find(user => user[attr] === value) || null;
  }

  static delete(userId: number): void {
    
  }

  save(user: IUser): IUser {
    const userOld = UserModel.get(user.id);

    return userOld;
  }


  
}