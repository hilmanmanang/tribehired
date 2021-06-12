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
	loading: boolean = false;

	ngOnInit(): void {
		this.loading = true;
		this.apiService.getPosts().subscribe(res => {
			if (res) {
				this.postData = res;
				this.loading = false;
			}
		}, error => {
			console.log(error)
		})
	}

	getPost(id: any, userId: any) {
		this.router.navigate([`/post/${id}`]);
	}
}
