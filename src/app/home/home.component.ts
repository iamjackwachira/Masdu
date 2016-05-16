import {Component, ElementRef} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { LoginComponent } from '../auth/login/login.component';
import { SignUpComponent } from '../auth/signup/signup.component';
import { Router } from 'angular2/router';

@Component({
    selector: 'home-page',
    providers: [],
    directives: [LoginComponent],
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['assets/css/landing.css']
})

export class HomeComponent {
    openPage: string;

    constructor(private _router: Router) {
        this.openPage = "login"
    }


    openLogin() {
        this.openPage = "login"
        console.log("login")
        let link = ['LoginComponent'];
        this._router.navigate(link);
    }
    openSignUp() {
        this.openPage = "signup"
        console.log("signup")
    }
}
