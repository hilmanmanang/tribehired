import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	constructor(private apiService: ApiService, private router: Router) { }

	postData: any = [];

	ngOnInit(): void {
		this.apiService.getPosts().subscribe(res => {
			this.postData = res;
			console.log(res)
		}, error => {
			console.log(error)
		})
	}

	getPost(id: any, userId: any) {
		this.router.navigate([`/post/${id}`]);
	}
}
