import { AbstractControl } from "@angular/forms";

export function trimValidator(control: AbstractControl) {
    const controlValue = control.value;
    if (controlValue.trim().length === 0) {
       return { 
        trimValidator: true,
       }
    }

    return null;

}