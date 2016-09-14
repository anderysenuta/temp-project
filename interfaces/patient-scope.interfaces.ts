/// <reference path='../_all.ts' />

module app {
    export interface PatientInterface extends ng.IScope {
        fullname: string,
        birthday: string,
        policy: number,
        patients: PatientModels[],
        name: string,
        vm: PatientController
    }
}
