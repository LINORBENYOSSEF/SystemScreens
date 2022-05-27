import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tag } from "../interfaces/tag";

@Injectable({providedIn: 'root'})
export class DataService {

    apiBaseUrl = 'https://localhost:44345/';
    apiValues = 'api/values';

    getData(): Observable<Tag[]> {
        return this.http.get<Tag[]>(this.apiBaseUrl + this.apiValues);
    }

    constructor(private http: HttpClient) {}
}