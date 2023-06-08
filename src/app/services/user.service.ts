import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from 'firebase/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFireDatabase) {}

  getAll(): Observable<User[]> {
    return this.db
      .list<User>('/todos')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            userId: y.payload.key,
            ...(y.payload.val() as User),
          }))
        )
      );
  }
}
