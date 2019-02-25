"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, rote, location) {
        this.heroService = heroService;
        this.rote = rote;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rote.params
            .switchMap(function (params) { return _this.heroService.getHeroes(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    __decorate([
        core_1.Input()
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: './hero-detail.component.html',
            styleUrls: ['./hero-detail.component.css']
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
