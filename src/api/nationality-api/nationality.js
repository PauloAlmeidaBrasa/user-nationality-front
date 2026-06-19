import http from './http'

export async function findNationalityByPerson(name) {
  const response = await http.get(
    `/v1/nationality/findNacionalityByPerson/${encodeURIComponent(name)}`
  )

  return response.data
}
 