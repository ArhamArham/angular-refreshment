import { Component, EventEmitter, Output } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
    selector: 'app-persons-input',
    templateUrl: './persons.input-component.html',
    styleUrls: ['./persons.input-component.css']
})
export class PersonsInputComponent {
    constructor(private personSerive: PersonsService) { }
    personName: string = '';
    onCreatePerson() {
        this.personSerive.addPerson(this.personName)
        this.personName = ''
    }
}