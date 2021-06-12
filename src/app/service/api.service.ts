import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

  	posts: string = 'https://jsonplaceholder.typicode.com/posts';
	comments: string = 'https://jsonplaceholder.typicode.com/comments';

	getPosts() {
		return this.http.get(this.posts)
	}

	getPost(id: any) {
		return this.http.get(`${this.posts}?id=${id}`)
	}

	getComment(postId: any) {
		return this.http.get(`${this.comments}?postId=${postId}`)
	}
}
