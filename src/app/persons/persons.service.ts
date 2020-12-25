import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PersonsService {
    personChanged = new Subject<string[]>();
    persons: string[] = ['arham', 'rahim', 'testing'];

    constructor(private http:HttpClient){}
    fetchPersons(){
        // this.http.get<any>('https://swapi.co/api/people')
        // .subscribe(res=>{
        //     console.log(res);
            
        // })
        this.personChanged.next(this.persons)
    }
    addPerson(name: string) {
        this.persons.push(name)
        this.personChanged.next(this.persons)
    }
    removePerson(name: string) {
        this.persons = this.persons.filter(person => person !== name)
        this.personChanged.next(this.persons)
    }
}