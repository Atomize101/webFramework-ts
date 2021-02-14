import { User } from './models/User';

const user = new User({ name: 'New Record', age: 999 });

user.save();
