import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService,) { }

	postData: any;
	commentsData: any;
	loading: boolean = false;
	searchName: any;
	searchEmail: any;
	searchBody: any;

	ngOnInit(): void {
		this.loading = true;
		this.route.params.subscribe(params => {

			if (params.id) {
				this.apiService.getPost(params.id).subscribe(res => {
					if (res) {
						this.postData = res;
						this.loading = false
					}
				}, error => {
					console.log(error)
				})

				this.apiService.getComment(params.id).subscribe(res => {
					if (res) {
						this.commentsData = res;
						this.loading = false
					}
				}, error => {
					console.log(error)
				})
			}
		}, error => {
			console.log(error)
		})
	}

}
