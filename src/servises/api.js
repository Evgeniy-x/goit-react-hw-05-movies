// import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2M0OTkzNGQ4ZDM3ZTliZjNmZmQ3Zjg0YjlkMDY4ZSIsInN1YiI6IjY0OGQ3YzUwMjYzNDYyMDBhZTFiODE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vRJ_6rq3L_MOfNvPFqWJP76Cn7YU09oWq_LdiL4_f2c',
  },
};

const base_URL = 'https://api.themoviedb.org/3/';

export default class moviesAPI {
  fetchTopList() {
    return fetch(`${base_URL}movie/popular`, options).then(res => res.json());
  }

  fetchMovie(param) {
    return fetch(`${base_URL}search/movie?${param}`, options).then(res =>
      res.json()
    );
  }

  fetchMovieDetails(id) {
    return fetch(`${base_URL}movie/${id}`, options).then(res => res.json());
  }
  fetchMovieCast(id) {
    return fetch(`${base_URL}movie/${id}/credits`, options).then(res =>
      res.json()
    );
  }

  fetchMovieReviews(id) {
    return fetch(`${base_URL}movie/${id}/reviews`, options).then(res =>
      res.json()
    );
  }
}
