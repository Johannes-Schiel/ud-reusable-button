import { Component } from '@angular/core';
import { CustomButtonTheme } from './core/enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public CustomButtonTheme = CustomButtonTheme;

    public doSomething($event: MouseEvent): void {
        console.log($event);
    }

}
