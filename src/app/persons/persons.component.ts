import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList: string[];
    isFetching = false;
    private personListSubscribe: Subscription;
    constructor(private personSerive: PersonsService) { }

    ngOnInit() {
        this.personListSubscribe = this.personSerive.personChanged
            .subscribe(persons => {
                this.personList = persons
                this.isFetching = false
            });
        this.isFetching = true
        this.personSerive.fetchPersons()
    }
    ngOnDestroy() {
        this.personListSubscribe.unsubscribe()
    }
    onRemovePerson(name: string) {
        this.personSerive.removePerson(name)
    }
}