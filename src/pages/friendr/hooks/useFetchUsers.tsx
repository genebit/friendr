import { useState, useEffect } from "react"
import axios from "axios"
import IUser from "@type/interfaces/user"

const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(true)
  const [listSize, setListSize] = useState(5)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://randomuser.me/api/?results=${listSize}`)
      setUsers(response.data.results)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
    }
  }

  const dismissUser = (index: number) => {
    // Create a new array excluding the user at the specified index
    const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)]
    setUsers(updatedUsers)
  }

  const setFetchSize = (size: number) => {
    setListSize(size)
  }

  useEffect(() => {
    // Fetch users whenever listSize changes
    fetchUsers()
  }, [listSize])

  return { users, loading, refetchUsers: fetchUsers, dismissUser, setFetchSize }
}

export default useFetchUsers
