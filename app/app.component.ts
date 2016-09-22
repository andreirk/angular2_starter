import { Component } from '@angular/core';

import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message: string = 'Hello';
    users: User[] = [
        {id: 25,name: 'Andrey',username: 'Sokolov'},
        {id: 25,name: 'Nick',username: 'nickweeks'},
        {id: 55,name: 'Holly',username: 'hollyway'},
    ];
    activeUser: User;
    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}


