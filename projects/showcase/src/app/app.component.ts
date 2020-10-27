import { Component } from '@angular/core';

@Component({
    selector: 'dag-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public date: number = null;
    public placeholder: string = "label";
    public isDisabled: boolean;

    onChange($event){
        console.log($event)
    }
}
