/// <reference path='../_all.ts' />

module app {
    'use strict';

    export class PatientStore implements PatientServiceInterface {
        private tempData = [
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

        search(str): PatientModels[] {
            const value = !parseFloat(str) ? str : parseFloat(str);
            const filtered: PatientModels[] = this.tempData
                .filter(element => {
                    if(typeof value === 'number') {
                        return element.policy.toString().indexOf(str) ? false : true
                    }else {
                        return element.fullname.indexOf(value) ? false : true
                    }
                }) as PatientModels[];



            return filtered
        }

    }
}