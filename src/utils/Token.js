export default {
  setToken: (token) => {
    localStorage.setItem("fitboxToken", token)
  },
  getToken: () => {
    return localStorage.getItem("fitboxToken")
  },
  delToken: () => {
    localStorage.removeItem("fitboxToken")
  }
}