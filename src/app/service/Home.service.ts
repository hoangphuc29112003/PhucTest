import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { Tutorial,Users } from '../models/tutorial.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private dbPath = '/test';
  private dbPath2 = '/Users';

  tutorialsRef!: AngularFireList<Tutorial>;
  tutorialsRef2!: AngularFireList<Users>;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
    this.tutorialsRef2 = db.list(this.dbPath2);
   }


  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }

  create(tutorial:Tutorial): any {
    return this.tutorialsRef.push(tutorial);
  }

  createusers(user:Users): any {
    return this.tutorialsRef2.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }

}
