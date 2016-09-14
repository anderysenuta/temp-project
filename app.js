/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';
    var PatientModels = (function () {
        function PatientModels(fullname, birthday, policy) {
            this.fullname = fullname;
            this.birthday = birthday;
            this.policy = policy;
        }
        return PatientModels;
    }());
    app.PatientModels = PatientModels;
})(app || (app = {}));
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';
    var PatientStore = (function () {
        function PatientStore() {
            this.tempData = [
                {
                    "fullname": "Иванов Иван Иванович",
                    "birthday": "11.11.2011",
                    "policy": 1111111111111111
                },
                {
                    "fullname": "Алексеев Алексей Алексеевич",
                    "birthday": "22.12.1922",
                    "policy": 2222222222222222
                },
                {
                    "fullname": "Петров Петр Петрович",
                    "birthday": "01.01.1990",
                    "policy": 3333333333333333
                },
                {
                    "fullname": "Сергеев Сергей Сергеевич",
                    "birthday": "02.02.2002",
                    "policy": 4444444444444444
                },
                {
                    "fullname": "Васильев Василий Васильевич",
                    "birthday": "09.09.1949",
                    "policy": 5555555555555555
                }
            ];
        }
        PatientStore.prototype.search = function (str) {
            var value = !parseFloat(str) ? str : parseFloat(str);
            var filtered = this.tempData
                .filter(function (element) {
                if (typeof value === 'number') {
                    return element.policy.toString().indexOf(str) ? false : true;
                }
                else {
                    return element.fullname.indexOf(value) ? false : true;
                }
            });
            return filtered;
        };
        return PatientStore;
    }());
    app.PatientStore = PatientStore;
})(app || (app = {}));
/// <reference path='../_all.ts' />
var app;
(function (app) {
    'use strict';
    var PatientController = (function () {
        function PatientController($scope, patientStore) {
            this.$scope = $scope;
            this.patientStore = patientStore;
            $scope.vm = this;
        }
        PatientController.prototype.search = function (e) {
            if (e.target.value.length < 3)
                return this.$scope.patients = [];
            this.$scope.patients = this.patientStore.search(e.target.value);
        };
        PatientController.$inject = [
            '$scope',
            'patientStore'
        ];
        return PatientController;
    }());
    app.PatientController = PatientController;
})(app || (app = {}));
/// <reference path='_all.ts' />
var app;
(function (app) {
    'use strict';
    angular.module('app', [])
        .controller('PatientController', app.PatientController)
        .service('patientStore', app.PatientStore);
})(app || (app = {}));
/// <reference path='typings/jquery/jquery.d.ts' />
/// <reference path='typings/angularjs/angular.d.ts' />
/// <reference path='models/patient.models.ts' />
/// <reference path='interfaces/patient-service.interfaces.ts' />
/// <reference path='interfaces/patient-scope.interfaces.ts' />
/// <reference path='services/patient.service.ts' />
/// <reference path='controllers/patient.controller.ts' />
/// <reference path='app.ts' /> 
//# sourceMappingURL=app.js.map