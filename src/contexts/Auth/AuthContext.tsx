import { createContext } from 'react'
import { User } from '../../types/User'

export type AuthContextType = {
  user: User | null

  signin: (email: String, password: String) => Promise<Boolean>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)

