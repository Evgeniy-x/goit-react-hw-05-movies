"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{764:function(e,t,n){n.r(t);var c=n(439),o=n(791),i=n(87),r=n(689),u=n(545),a=n(184),f=new u.Z;t.default=function(){var e,t=(0,i.lr)(),n=(0,c.Z)(t,2),u=n[0],h=n[1],s=(0,o.useState)([]),l=(0,c.Z)(s,2),v=l[0],j=l[1],d=null!==(e=u.get("query"))&&void 0!==e?e:"",m=(0,r.TH)();(0,o.useEffect)((function(){u&&f.fetchMovie(u).then((function(e){j(e.results)})).catch((function(e){return console.log(e)}))}),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f.fetchMovie(u).then((function(e){j(e.results)})).catch((function(e){return console.log(e)}))},children:[(0,a.jsx)("input",{type:"text",value:d,onChange:function(e){if(""===e.target.value)return h({});h({query:e.target.value})}}),(0,a.jsx)("button",{type:"Submit",children:"Search"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:v.map((function(e){var t=e.title,n=e.id;return(0,a.jsx)("li",{children:(0,a.jsx)(i.rU,{to:"".concat(n),state:{from:m},children:t})},n)}))})})]})}},545:function(e,t,n){n.d(t,{Z:function(){return u}});var c=n(671),o=n(144),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2M0OTkzNGQ4ZDM3ZTliZjNmZmQ3Zjg0YjlkMDY4ZSIsInN1YiI6IjY0OGQ3YzUwMjYzNDYyMDBhZTFiODE4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vRJ_6rq3L_MOfNvPFqWJP76Cn7YU09oWq_LdiL4_f2c"}},r="https://api.themoviedb.org/3/",u=function(){function e(){(0,c.Z)(this,e)}return(0,o.Z)(e,[{key:"fetchTopList",value:function(){return fetch("".concat(r,"movie/popular"),i).then((function(e){return e.json()}))}},{key:"fetchMovie",value:function(e){return fetch("".concat(r,"search/movie?").concat(e),i).then((function(e){return e.json()}))}},{key:"fetchMovieDetails",value:function(e){return fetch("".concat(r,"movie/").concat(e),i).then((function(e){return e.json()}))}},{key:"fetchMovieCast",value:function(e){return fetch("".concat(r,"movie/").concat(e,"/credits"),i).then((function(e){return e.json()}))}},{key:"fetchMovieReviews",value:function(e){return fetch("".concat(r,"movie/").concat(e,"/reviews"),i).then((function(e){return e.json()}))}}]),e}()}}]);
//# sourceMappingURL=764.fb43668f.chunk.js.map