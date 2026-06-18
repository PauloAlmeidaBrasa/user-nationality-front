import http from './http'

export async function login(email, password) {

  const response = await http.post(
    '/authenticate/login',
    {
      email,
      password
    }
  )

  return response.data
}