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

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.apiService.getPost(params.id).subscribe(res => {
				this.postData = res;
			}, error => {
				console.log(error)
			})
		}, error => {
			console.log(error)
		})
	}

}
