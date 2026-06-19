import { defineStore } from 'pinia'

function normalizeToken(token) {
  if (!token || token === 'null' || token === 'undefined') {
    return null
  }
  return token
}

function decodeJwtPayload(token) {
  if (!token) return null

  const parts = token.split('.')
  if (parts.length !== 3) return null

  try {
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const json = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    )
    return JSON.parse(json)
  } catch {
    return null
  }
}

function getUserFromToken(token) {
  const payload = decodeJwtPayload(token)
  if (!payload) return null

  return {
    email: payload.sub || payload.email || null,
    name: payload.name || payload.username || payload.sub || payload.email || null
  }
}

export const useAuthStore = defineStore(
  'auth',
  {
    state: () => {
      const token = normalizeToken(localStorage.getItem('token'))
      return {
        token,
        user: getUserFromToken(token)
      }
    },

    getters: {
      isAuthenticated: (state) => Boolean(state.token),
      userName: (state) => state.user?.name || state.user?.email || 'User'
    },

    actions: {

      saveToken(token) {
        const normalized = normalizeToken(token)
        this.token = normalized
        this.user = getUserFromToken(normalized)

        if (normalized) {
          localStorage.setItem('token', normalized)
        } else {
          localStorage.removeItem('token')
        }
      },

      logout() {
        this.token = null
        this.user = null
        localStorage.removeItem('token')
      }
    }
  }
)