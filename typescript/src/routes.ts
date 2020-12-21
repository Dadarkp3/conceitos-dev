import { Request, response, Response } from "express";
import createUser from "./services/CreateUser";

export default function helloWorld(request: Request, reponse: Response) {
  const user = createUser({
    email: "Daiane@teste.com",
    password: "123456",
    techs: [
      "Teste1",
      "Teste2",
      123434,
      { title: "Javascript", experience: 100 },
    ],
  });
  return response.json({ message: "Hello World" });
}
