import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    @Input() hero: Hero;

    ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) =>
            this.heroService.getHero(+params.get('id'))).subscribe(hero => {
                this.hero = hero;
            });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.updated(this.hero).then(() => this.goBack());
    }
}
