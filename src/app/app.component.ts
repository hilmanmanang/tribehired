import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router) { }

    parentData: any

    openLink(acc: any) {
        switch (acc) {
            case 'li': window.open('https://www.linkedin.com/in/muhammad-hilman-bin-ahmad-a16011185/');
                break;
            case 'gt': window.open('https://github.com/hilmanmanang');
                break;
            case 'fb': window.open('https://www.facebook.com/hilmanahmd/');
                break;
            case 'ig': window.open('https://www.instagram.com/hilmanmanang/');
                break;
            case 'tr': window.open('https://twitter.com/hilmanmanang');
                break;
        }
    }

    home() {
		this.router.navigate(['']);
    }
}
