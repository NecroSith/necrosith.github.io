/**
 * Created by NecroSith on 04.12.2017.
 */

(function getLoser() {

    console.log('JS is running');

    this.applicants = [];

    this.init = function() {
        this.addApplicants();
        this.getRandomUser();
        this.runAgain();
        this.startAgain();
    };

    this.showList = function() {
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';

        for(var i = 0; i < applicants.length; i++) {
            template += '<span class="name-tag" data-id="'+ i +'">' + applicants[i] + '</span>';
        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteApplicant();
    };

    this.addApplicants = function() {

        function generateList(input) {
            var value = input.value;

            console.log(applicants);
            if (this.isValid(value.toLowerCase())) {
                applicants.push(value.toLowerCase());
                input.value = '';
                this.showList();
            }
            else {
                alert('That name is already used!');
            }
        }

        var addBtn = document.querySelector('#add_applicant');

        addBtn.addEventListener('click', function() {
            var input = document.querySelector('#applicant_value');
            generateList(input);
        });
    };

    this.deleteApplicant = function() {

        var delApp = document.querySelectorAll('.name-tag');

        function removeIt(element) {

            var attr = parseInt(element.getAttribute('data-id'));
            applicants.splice(attr, 1);
            this.showList();
        }

        for (var i = 0; i < delApp.length; i++) {
            delApp[i].addEventListener('click', function(e) {
                removeIt(this);
            });
        }

        };


    this.isValid = function (input) {
                if (applicants.indexOf(input) < 0 && input !== '') {
                    return true;
                }
                else {
                    return false;
                }
        };

    this.getRandomUser = function() {

        function showLoser() {
            var resultCtn = document.querySelector('.results_container');
            var applicantsCtn = document.querySelector('.applicant_container');

            applicantsCtn.className += ' hidden';
            resultCtn.className = 'results_container';

            showRandomUser();
        }


        var resultBtn = document.querySelector('#show_results');

        resultBtn.addEventListener('click', function(e) {
            if(applicants.length > 1) {
                showLoser();
            }
            else {
                alert('Too few participants!');
            }
        });
    };

    this.showRandomUser = function() {

        var result = document.querySelector('.result');
        var rand = applicants[Math.floor(Math.random() * applicants.length)];

        result.innerHTML = '';
        result.insertAdjacentHTML('afterbegin', '<h3>' + rand + '<h3>');

    };

    this.runAgain = function() {

        var runAg = document.querySelector('.run_again');

        runAg.addEventListener('click', function(e) {
            showRandomUser();
        });

    };

    this.startAgain = function() {

        var startAg = document.querySelector('.start_again');

        startAg.addEventListener('click', function(e) {

            var resultsCtn = document.querySelector('.results_container');
            var applicantsCtn = document.querySelector('.applicant_container');
            var applicantsListWrp = document.querySelector('.applicant_list_wrapper');

            resultsCtn.className += ' hidden';
            applicantsCtn.className = 'applicant_container';
            applicantsListWrp.innerHTML = '';


            applicants.length = 0;

        });

    };

    this.init();
    }
)();