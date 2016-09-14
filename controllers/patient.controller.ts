/// <reference path='../_all.ts' />

module app {
    'use strict';

    export class PatientController {

        private patients: PatientModels[];

        public static $inject = [
            '$scope',
            'patientStore'
        ];

        constructor(
            private $scope: PatientInterface,
            private patientStore: PatientServiceInterface
        ) {
            $scope.vm = this;
        }

        search(e) {
            if(e.target.value.length < 3) return this.$scope.patients = [];
            this.$scope.patients = this.patientStore.search(e.target.value);
        }
    }
}
