import { User } from './user.js';
export class ModelUser {
    constructor() {

    }
    getUserByLogin(email, password) {
        let userList = JSON.parse(localStorage.getItem('users'));
        for (let index = 0; index < userList.length; index++) {
            if (userList[index].email === email && userList[index].password === password) {
                return userList[index];
            }

        }

    }
    addUser(user) {

        let userList = localStorage.getItem('users');
        if (userList) {
            userList = JSON.parse(userList);
        } else {
            userList = [];
        }
        userList.push(user);
        localStorage.setItem('users', JSON.stringify(userList));


    }
    updateUser(name, surname, email, birthDate, password) {
        let userList = JSON.parse(localStorage.getItem('users'));
        for (let index = 0; index < userList.length; index++) {
            if (userList[index].email === email) {
                userList[index].name = name;
                userList[index].surname = surname;
                userList[index].birthDate = birthDate;
                userList[index].password = password;
            }
        }
        localStorage.setItem('users',JSON.stringify(userList));

    }
    deleteUser(email) {
        let userList = JSON.parse(localStorage.getItem('users'));
        for (let index = 0; index < userList.length; index++) {
            if (userList[index].email === email) {
                userList.splice(index, 1);
                break;
            }
        }
        localStorage.setItem('users',JSON.stringify(userList));
    }
}