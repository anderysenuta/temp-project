/// <reference path='../_all.ts' />

module app {
    export interface PatientServiceInterface {
        search (str: string): PatientModels[];
    }
}
