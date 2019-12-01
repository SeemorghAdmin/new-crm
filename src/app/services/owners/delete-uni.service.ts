import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsService } from '../constants/constants.service';

@Injectable()
export class DeleteUniService {
    constructor(private fb: FormBuilder, private http: HttpClient, private constants: ConstantsService) { }
    readonly BaseURI = this.constants.baseApiUrlNc;

    DeleteUni(id)
    {
        return this.http.post(this.BaseURI + '/Univercity?id='+id, id);
    }
}