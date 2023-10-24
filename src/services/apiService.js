// class apiService {
//   _apiBase = 'https://api.themoviedb.org/3/search/movie';

//   async getMovies(input) {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
//       },
//     };

//     let url = new URL(this._apiBase);
//     url.searchParams.set('q', input);
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(
//         `Could not fetch ${this._apiBase}${url}, recieved ${res.status}`
//       );
//     }
//     const body = await res.json();
//     return body;
//   }
// }

// const api = new apiService();
// api.getMovies('The Way Back');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmI3NTc1MzkxN2U2YjRiZWViYTVmMmI3YjQyNTVkMiIsInN1YiI6IjY1Mzc3NDU1N2ZjYWIzMDBhZDdlMjdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNGHORH0JNqYrbpNukrgiV5jLuAu1OktkhOdCOI0cPM',
  },
};

fetch(
  'https://api.themoviedb.org/3/trending/all/day?api_key=1fb75753917e6b4beeba5f2b7b4255d2',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
