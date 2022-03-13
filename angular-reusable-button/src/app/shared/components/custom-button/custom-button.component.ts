import { Component, Input } from '@angular/core';
import { CustomButtonTheme } from 'src/app/core/enum';

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {

    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() theme: CustomButtonTheme = CustomButtonTheme.prime;

}
