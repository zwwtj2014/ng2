import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
        <button (click)="onClickMe()">Click me!</button>
        {{clickMessage}}
    `
})
export class ClickMeComponent{
    clickMessage: string = '';

    onClickMe(){
        this.clickMessage = 'You are SB';
    }
}