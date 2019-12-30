let adminemail = 'admin@gmail.com';
let useremail = 'user@gmail.com';
let UserPassword = 'UserPass';
let AdminPassword = 'AdminPass';
const x = 5;
const y = 6;


let validation = prompt('Your email please', '');


if (validation === '' || validation === null) {
    alert('Canceled');
} else if (validation.length < x) {
    alert('I dont know any emails having name length less than 5 symbols')
} else if (validation === useremail || validation === adminemail) {
    let validation1 = prompt('password');
    if (validation1 === UserPassword || AdminPassword) {
        let passwordchange = confirm('Do you want to change your password?');
        if (passwordchange === false) {
            alert('You have failed to change')
        } else if (passwordchange === true) {
            let validation3 = prompt('Please write the old password', '')


            if (validation3 === '' || validation3 === null) {
                alert('Canceled')
            } else if (validation3 === UserPassword || validation3 === AdminPassword) {
                let validation4 = prompt('Please write the new password', '')
                if (validation4 === '' || validation4 === false) {
                    alert('Canceled')
                } else if (validation4 < y) {
                    alert('Its too short password. Sorry')
                } else {
                    let validation5 = prompt('Please enter the new password again', '')
                    if (validation4 === validation5) {
                        alert('You have successfully changed your password')
                    } else {
                        alert('You wrote the wrong password')
                    }
                }

            } else {
                alert('I don’t know you')
            }

        }
    }
} else if (validation !== useremail || validation !== adminemail) {
    alert('I don’t know you');
}
	


	


