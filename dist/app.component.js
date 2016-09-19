"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello';
        this.users = [
            { id: 25, name: 'Andrey', username: 'Sokolov' },
            { id: 25, name: 'Nick', username: 'nickweeks' },
            { id: 55, name: 'Holly', username: 'hollyway' },
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n            <a href=\"\" class=\"navbar-brand\">My angular 2 app!</a>\n        </div>\n        </nav>\n    </header>\n\n    <main>\n        <div class=\"row\">\n        \n            <div class=\"col-sm-4\">\n                <div *ngIf='users'>\n                    <ul class='list-group users-list'>\n                        <li class='list-group-item'  \n                            *ngFor='let user of users'\n                            (click)=\"selectUser(user)\">\n                            The user is {{user.name}} ({{user.username}})</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"col-sm-8\">\n                <div class=\"jumbotron\">\n                    <h1>Welcom to our App</h1>\n                    <p>{{message}}</p>\n                </div>\n            </div>\n\n        </div>\n            \n        \n    </main>\n    \n\n    <footer class='text-center'>\n        Copyritht &copy; 2016  \n    </footer>\n    ",
            styles: ["\n    .jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2)}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map