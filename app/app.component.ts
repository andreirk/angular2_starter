import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`

    <header>
        <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a href="" class="navbar-brand">My angular 2 app!</a>
        </div>
        </nav>
    </header>

    <div class="jumbotron">
        <h1>Welcom to our App</h1>
        <p>{{message}}</p>
    </div>

    <footer class='text-center'>
        Copyritht &copy; 2016  
    </footer>
    `,
    styles:[`
    .jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2)}
    `]
})

export class AppComponent {
    message = 'Hello';
}