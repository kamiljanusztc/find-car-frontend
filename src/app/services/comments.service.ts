import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../model/comments";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(
      private http: HttpClient
  ) { }

  getComments(): Observable<Comments[]>{
    return this.http.get<Comments[]>(this.commentsUrl)
  }
}
