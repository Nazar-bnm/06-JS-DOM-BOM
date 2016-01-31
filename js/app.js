(function() {
    'use strict';

    function createForm() {
        var body = document.getElementsByTagName('body')[0];
        var script = document.getElementsByTagName('script')[0];
        var form = document.createElement('form');
        body.insertBefore(form, script);
        form.name = 'myForm';
        form.action = 'http://google.com';
        var fieldset = [{
            type: 'text',
            name: 'age',
            label: 'Age'
        }, {
            type: 'text',
            name: 'username',
            label: 'Username'
        }, {
            type: 'text',
            name: 'date',
            label: 'Date'
        }, {
            type: 'submit',
            value: 'Validate Me'
        }];
        fieldset.forEach(function(item) {
            var conteiner = document.createElement('div');
            var label = document.createElement('label');
            var input = document.createElement('input');
            form.appendChild(conteiner);
            if (item.label) {
                conteiner.appendChild(label);
                label.textContent = item.label;
                label.style.display = "block";
            }
            conteiner.appendChild(input);
            input.type = item.type;
            if (item.name) {
                input.name = item.name;
            }
            if (item.value) {
                input.value = item.value;
            }
        });
        form.onsubmit = validate;
    }

    function validate() {
        var inputAge = document.getElementsByName('age')[0];
        var inputUserName = document.getElementsByName('username')[0];
        var age = inputAge.value;
        var userName = inputUserName.value;
        var ageRegExp = /[0-9]/;
        var nameRegExp = /^user_/;
        var checkAge;
        var checkUserName;
        if (!ageRegExp.test(age) || age <= 0 || age > 120) {
            checkAge = true;
        }
        if (!nameRegExp.test(userName)) {
            checkUserName = true;
        }
        if (checkUserName || checkAge) {
            alert('Your data is invalid');
            return false;
        }
    }

    function setDefaultDate() {
        var dateObject = new Date();
        var day = dateObject.getDate() < 10 ? '0' + dateObject.getDate() : dateObject.getDate();
        var month = (dateObject.getMonth() + 1) < 10 ? '0' + (dateObject.getMonth() + 1) : (dateObject.getMonth() + 1);
        var date = day + '/' + month + '/' + dateObject.getFullYear();
        var dateInput = document.getElementsByName('date')[0];
        dateInput.value = date;
    }
    createForm();
    setDefaultDate();
})();