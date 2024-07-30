import { useState, useEffect } from 'react'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

import { app } from '@/core/firebase/config.ts'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    // Limpieza al desmontar
    return () => unsubscribe()
  }, [])

  const signInWithEmail = async (email: string, password: string) => {
    const auth = getAuth(app)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      setUser(userCredential.user)
    } catch (error) {
      console.error('Error signing in with email and password', error)
      throw error
    }
  }

  const signInWithGoogle = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      setUser(result.user)
    } catch (error) {
      console.error('Error signing in with Google', error)
      throw error
    }
  }

  const signOut = async () => {
    const auth = getAuth(app)
    try {
      await firebaseSignOut(auth)
      setUser(null)
    } catch (error) {
      console.error('Error signing out', error)
      throw error
    }
  }

  return {
    user,
    loading,
    signInWithEmail,
    signInWithGoogle,
    signOut,
  }
}
