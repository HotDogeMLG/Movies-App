export default class apiService {
  _apiBase = 'https://api.themoviedb.org/3/search/movie'

  async getToken() {
    const tokenOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
      },
    }

    const tokenResponse = await fetch('https://api.themoviedb.org/3/authentication/token/new', tokenOptions)
    const tokenObj = await tokenResponse.json()
    const requestToken = tokenObj.request_token
    console.log(requestToken)
  }

  async createSession() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
      },
    }

    const response = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', options)
    const responseObj = await response.json()
    console.log(responseObj)
  }

  async getTopMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
      },
    }

    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    return await response.json()
  }
}
