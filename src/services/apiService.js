export default class apiService {
  _apiBase = 'https://api.themoviedb.org/3/search/movie'

  async getToken() {
    const tokenOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
    const apiKey = '1fb75753917e6b4beeba5f2b7b4255d2'
    const tokenResponse = await fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
      tokenOptions
    )
    const tokenObj = await tokenResponse.json()
    const requestToken = tokenObj.request_token
    return requestToken
  }

  async createSession() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
    const apiKey = '1fb75753917e6b4beeba5f2b7b4255d2'
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${apiKey}`,
      options
    )
    const responseObj = await response.json()
    return responseObj.guest_session_id
  }

  async getTopMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
    const apiKey = '1fb75753917e6b4beeba5f2b7b4255d2'
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`,
      options
    )
    if (!response.ok) throw new Error('Something went wrong')
    else return await response.json()
  }

  async searchMovies(searchVal) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
      },
    }

    let url = new URL('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1')
    if (searchVal) url.searchParams.set('query', searchVal)

    const response = await fetch(url, options)
    const jsonResponse = await response.json()
    return jsonResponse
  }

  async getRatedMovies(id) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }

    const apiKey = '1fb75753917e6b4beeba5f2b7b4255d2'
    const response = await fetch(
      `https://api.themoviedb.org/3/guest_session/${id}/rated/movies?api_key=${apiKey}&language=en-US&page=1&sort_by=created_at.asc`,
      options
    )
    const responseObj = await response.json()
    return responseObj
  }

  async addRating(sessionID, movieID, rating) {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: `{"value":${rating}}`,
    }

    const apiKey = '1fb75753917e6b4beeba5f2b7b4255d2'
    await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/rating?api_key=${apiKey}&guest_session_id=${sessionID}`,
      options
    )
  }

  async getGenres() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
      },
    }

    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const responseObj = await response.json()
    return responseObj
  }
}
