import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

  constructor(private url, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.hadleError);
        
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.hadleError);
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource.id))
        .map(response => response.json())
        .catch(this.hadleError);
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        .catch(this.hadleError);
  }

  private hadleError(error: Response){
    if(error.status === 400 )

      return Observable.throw(new BadRequestError(error.json()));
    if(error.status === 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error.json()));
  }
}
