/// <reference path='../_all.ts' />

module app {
    'use strict';

    export class PatientModels {
        constructor(
            public fullname: string,
            public birthday: string,
            public policy: number
        ) { }
    }
}
