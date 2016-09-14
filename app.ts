/// <reference path='_all.ts' />

module app {
    'use strict';
    angular.module('app', [])
        .controller('PatientController', PatientController)
        .service('patientStore', PatientStore);
}
