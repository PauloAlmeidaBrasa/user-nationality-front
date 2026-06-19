import http from './http'

export async function login(email, password) {

  const response = await http.post(
    '/v1/login',
    {
      email,
      password
    }
  )

  return response.data
}