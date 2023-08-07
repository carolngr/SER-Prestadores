import { api } from "../api"

interface IUser{
  id: number
  name: string
  username: string
  email: string;
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
}

interface IErrorResponse{
  id: number
  name: string
}

interface IGetUsersRequest{
  name?: string;
}

export const getUsers = (params : IGetUsersRequest) => {
  return api.get<IUser[]>('/users',{
    params,
  });
};
