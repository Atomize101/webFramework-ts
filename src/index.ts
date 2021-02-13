import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {});

console.log(user);

/* 
console log returns
User {data: {…}, events: {…}}
data:
age: 20
name: "myname"
__proto__: Object
events:
change: [ƒ]
__proto__: Object
__proto__: Object
*/
