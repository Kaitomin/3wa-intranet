export const fetchAllUsers = async () => {
  const res = await fetch('../data/users.json')
  const data = await res.json()
  return data
}