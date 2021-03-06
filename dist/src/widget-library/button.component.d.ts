import { OnInit, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from '../json-schema-form.service';
export declare class ButtonComponent implements OnInit {
    private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: any;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    formID: number;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    onButtonClick: EventEmitter<any>;
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
}
