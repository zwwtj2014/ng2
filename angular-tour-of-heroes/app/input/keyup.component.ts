import { Component } from '@angular/core';

@Component({
    selector: 'click-me',
    template: `
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
        `
})
export class KeyUpComponent_v1 {
    values = '';

    // onKey(event: KeyboardEvent) { // without type info
    //     this.values += (<HTMLInputElement>event.target).value + ' | ';
    // }

    onKey(value: string) { // without type info
        this.values += value + ' | ';
    }
}