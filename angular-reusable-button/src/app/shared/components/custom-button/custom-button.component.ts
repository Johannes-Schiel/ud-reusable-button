import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomButtonTheme } from 'src/app/core/enum';

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {

    /**
     * Bei diesem Label handelt es sich um den Text in dem Button.
     */
    @Input() label: string = '';
    @Input() disabled: boolean = false;
    @Input() theme: CustomButtonTheme = CustomButtonTheme.prime;

    @Output() customClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    constructor() { }

    public clickTrigger($event: MouseEvent): void {
        this.customClick.emit($event);
    }

}
