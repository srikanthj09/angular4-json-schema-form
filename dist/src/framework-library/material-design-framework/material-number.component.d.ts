import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from '../../json-schema-form.service';
export declare class MaterialNumberComponent implements OnInit {
    private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: any;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    allowNegative: boolean;
    allowDecimal: boolean;
    allowExponents: boolean;
    lastValidNumber: string;
    formID: number;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
    validateInput(event: any): boolean;
    validateNumber(event: any): void;
}