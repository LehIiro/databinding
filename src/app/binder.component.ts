import {Component} from '@angular/core';
import { $ } from 'protractor';

@Component({
    selector:"binder",
    templateUrl:"binder.component.html"
})

export class Binder {
    welcomeText="Hello Angular";
    clickMessage="";
    helloMessage="";
    select_all:"";
    

    youClicked() {
        this.clickMessage="You Called?";
    }

    onClickMe(value) {
        this.helloMessage="Hello, "+value;
    }

 
    
}