// For creating a user, we'll need 'name', 'email' and 'password'

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  // ?: <-- optional value (may be present or not inside the object)
  email: string;
  password: string;
  // techs: Array<string | TechObject>   <-- when the values inside the array vary
  techs: string[];
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}