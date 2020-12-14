import { Request, Response } from 'express';
import createUser from './services/CreateUser'

// string, number, boolean, object, array
// interface = type of data set (conjunto de dados): mainly in javascript objects
// when we want to define an object format: create an 'interface'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'andre@peixotodev.com',
    password: '123456',
    techs: [
      'Node,js',
      'ReactJS',
      'React Native',
    ],
  });

  console.log(user.email)

  return response.json({ message: 'Hello World, again'});
}