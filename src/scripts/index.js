import '../scss/index.scss';
<<<<<<< HEAD
import {User} from './user.js';
import {ModelUser} from './model-user.js';
import '../../node_modules/bootstrap/scss/bootstrap.scss';

let user =new User("paul","bna",new Date(),"paul@gmail.com","azerty");
let model=new ModelUser();

model.addUser(user);
console.log(localStorage);
console.log(model.getUserByLogin(user.email,user.password));
model.deleteUser(user.email);
console.log(model.getUserByLogin(user.email,user.password));
let user1 =new User("jean","paul",new Date("12/13/2010"),user.email,"azerty");
model.addUser(user1);
console.log(model.updateUser(user1.name,user1.surname,user1.email,user1.birthdate,user1.password));
=======
import { User } from "./user";
import { UserModel } from "./user-model";
//Pour tester notre modèle :
//on crée une instance de User
let mrToto = new User("toto", "tata", new Date(), "toto@gmail.com", "pass");
//On crée une intance de UserModel
let model = new UserModel();

console.log(localStorage);
//On ajoute le user via la méthode addUser du UserModel
model.addUser(mrToto);

console.log(localStorage);
// On récupère notre user fraichement créé.
console.log(model.getUserByLogin(mrToto.email,mrToto.password));

// Lorsqu'on n'a pas d'user correspondant à l'email et au mot de passe, on reçoit undefined.
console.log(model.getUserByLogin("no@boby.com", "securepassword"));

model.deleteUser(mrToto.email);
console.log(model.getUserByLogin(mrToto.email,mrToto.password));
>>>>>>> 653d2ea495c3319baed1f1fb51fe3d71584b033b

