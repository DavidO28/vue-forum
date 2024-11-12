import axios from 'axios'

export const getUsers = async (limit, skip) => {
  const users = await axios.get(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  )
  return users.data.users
}
