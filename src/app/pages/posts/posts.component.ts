import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

	constructor(private apiService: ApiService) { }

	postData: any = [];

	ngOnInit(): void {
		this.getPostsData();
	}

	getPostsData() {
		this.apiService.getPosts().subscribe(res => {
			this.postData = res;
			console.log(res)
		}, error => {
			console.log(error)
		})
	}

}
