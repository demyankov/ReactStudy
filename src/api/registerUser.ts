const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/`;

export interface RegisterUserResponseType {
  username: string;
  email: string;
  id: number;
}

export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserErrors {
  username?: string[];
  email?: string[];
  password?: string[];
  global?: string[];
}

export async function RegisterUser({
  ...querryBody
}: RegisterUserType): Promise<RegisterUserResponseType> {
  const headers = new Headers();
  headers.append("content-Type", "application/json");
  const response = await fetch(apiPath, {
    method: "POST",
    headers,
    body: JSON.stringify(querryBody),
  });

  if (response.ok) {
    return await response.json();
  }

  if (response.status === 400) {
    const errors = await response.json();
    return Promise.reject({ status: response.status, errors });
  }

  return Promise.reject({
    status: response.status,
    errors: [{ global: response.statusText }],
  });
}
