import { defineStore } from 'pinia'

function normalizeToken(token) {
  if (!token || token === 'null' || token === 'undefined') {
    return null
  }
  return token
}

export const useAuthStore = defineStore(
  'auth',
  {
    state: () => ({
      token: normalizeToken(localStorage.getItem('token'))
    }),

    getters: {
      isAuthenticated: (state) => Boolean(state.token)
    },

    actions: {

      saveToken(token) {

        const normalized = normalizeToken(token)
        this.token = normalized

        if (normalized) {
          localStorage.setItem('token', normalized)
        } else {
          localStorage.removeItem('token')
        }
      },

      logout() {

        this.token = null

        localStorage.removeItem(
          'token'
        )
      }
    }
  }
)