(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  '0/1z': function (e, t, a) { e.exports = { 'movie-rating': 'styles-bcebd', movieRating: 'styles-bcebd' }; },
  DFzx(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = s(a('q1tI')),
      n = a('eO8H'),
      r = s(a('6/Ym')),
      u = s(a('KOCx')); function s(e) { return e && e.__esModule ? e : { default: e }; } const i = (0, n.withRouter)((e) => { const t = e.history; return l.default.createElement(r.default, { className: `btn btn-text btn-sm ${u.default.backToSearch}`, onClick: t.goBack }, 'search'); }); t.default = i;
  },
  H1GH(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('q1tI')),
      n = u(a('17x9')),
      r = u(a('alHq')); function u(e) { return e && e.__esModule ? e : { default: e }; } const s = function (e) { const t = e.title; return l.default.createElement('span', { className: r.default.movieTitle }, t); }; s.propTypes = { title: n.default.string }, t.default = s;
  },
  KOCx(e, t, a) { e.exports = { 'back-to-search': 'styles-6ade8', backToSearch: 'styles-6ade8' }; },
  PIFK(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = m(a('q1tI')),
      n = m(a('VaMr')),
      r = m(a('eNIv')),
      u = m(a('V3dS')),
      s = m(a('TSWH')),
      i = m(a('J7IK')),
      d = m(a('DFzx')),
      c = m(a('cQEb')),
      f = m(a('cN1q')),
      o = m(a('jo1G')); function m(e) { return e && e.__esModule ? e : { default: e }; }t.default = function () { return l.default.createElement(n.default, null, l.default.createElement(r.default, null, l.default.createElement('div', { className: 'row no-gutters justify-content-between' }, l.default.createElement(i.default, null), l.default.createElement(d.default, null)), l.default.createElement(c.default, { className: o.default.movieDetails })), l.default.createElement(s.default, null, l.default.createElement(f.default, null)), l.default.createElement(u.default, null, l.default.createElement(i.default, null))); };
  },
  T7w2(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('q1tI')),
      n = u(a('17x9')),
      r = u(a('cq9n')); function u(e) { return e && e.__esModule ? e : { default: e }; } const s = function (e) { const t = e.description; return l.default.createElement('div', { className: r.default.moviesDescription }, l.default.createElement('p', null, t)); }; s.propTypes = { description: n.default.string }, t.default = s;
  },
  U7ql(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('q1tI')),
      n = r(a('17x9')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.duration; return l.default.createElement('span', { className: 'movie-duration' }, t, ' min'); }; u.propTypes = { duration: n.default.number }, t.default = u;
  },
  alHq(e, t, a) { e.exports = { 'movie-title': 'styles-d5e72', movieTitle: 'styles-d5e72' }; },
  cN1q(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = f(a('q1tI')),
      n = a('/MKj'),
      r = a('eO8H'),
      u = f(a('17x9')),
      s = f(a('LVde')),
      i = f(a('TSWH')),
      d = f(a('EjRR')),
      c = f(a('eA4x')); function f(e) { return e && e.__esModule ? e : { default: e }; } let o = function (e) {
      let t = e.movies,
        a = e.match,
        n = t.find(e => e.id.toString() === a.params.id),
        r = t.filter(e => e.genres[0] === n.genres[0]); return l.default.createElement(i.default, null, l.default.createElement(d.default, { className: 'navbar-expand-lg navbar-light bg-light justify-content-between' }, l.default.createElement(c.default, { genre: n.genres[0] })), l.default.createElement(i.default, null, l.default.createElement(s.default, { movies: r })));
    }; o.propTypes = { movies: u.default.array, match: u.default.object }, o = (0, r.withRouter)((0, n.connect)(e => ({ movies: e.movies.data.data }))(o)), t.default = o;
  },
  cQEb(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = v(a('q1tI')),
      n = a('/MKj'),
      r = a('eO8H'),
      u = v(a('17x9')),
      s = v(a('H1GH')),
      i = v(a('tQn8')),
      d = v(a('oXTp')),
      c = v(a('kAEh')),
      f = v(a('q4kH')),
      o = v(a('U7ql')),
      m = v(a('T7w2')); function v(e) { return e && e.__esModule ? e : { default: e }; } let p = function (e) {
      let t = e.movies,
        a = e.match,
        n = e.className,
        r = t.find(e => e.id.toString() === a.params.id); return l.default.createElement('div', { className: `movie-details ${n}` }, l.default.createElement('div', { className: 'd-flex align-items-stretch justify-content-start m-2' }, l.default.createElement('div', { className: 'd-flex align-items-center justify-content-center p-3 w-25' }, l.default.createElement(i.default, { src: r.poster_path, alt: r.title })), l.default.createElement('div', { className: 'd-flex align-items-center p2 w-75' }, l.default.createElement('div', { className: 'pl-3' }, l.default.createElement('div', { className: 'd-flex justify-content-start' }, l.default.createElement('div', { className: 'mr-3' }, l.default.createElement(s.default, { title: r.title })), l.default.createElement(d.default, { rating: r.vote_average })), l.default.createElement('div', null, l.default.createElement(c.default, { tagline: r.tagline })), l.default.createElement('div', { className: 'd-flex justify-content-start' }, l.default.createElement('div', { className: 'mr-5' }, l.default.createElement(f.default, { year: new Date(r.release_date).getFullYear() })), l.default.createElement(o.default, { duration: r.runtime })), l.default.createElement('div', null, l.default.createElement(m.default, { description: r.overview }))))));
    }; p.propTypes = { movies: u.default.array, match: u.default.object, className: u.default.string }, p = (0, r.withRouter)((0, n.connect)(e => ({ movies: e.movies.data.data }))(p)), t.default = p;
  },
  cYvq(e, t, a) { e.exports = { 'movie-tagline': 'styles-63394', movieTagline: 'styles-63394' }; },
  cq9n(e, t, a) { e.exports = { 'movies-description': 'styles-f27ce', moviesDescription: 'styles-f27ce' }; },
  eA4x(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('q1tI')),
      n = r(a('17x9')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.genre; return l.default.createElement('span', { className: 'results-genre-info' }, `Films by ${t.toLowerCase()} genre`); }; u.propTypes = { genre: n.default.string }, t.default = u;
  },
  jo1G(e, t, a) { e.exports = { 'movie-details': 'styles-e6ab3', movieDetails: 'styles-e6ab3' }; },
  kAEh(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('q1tI')),
      n = u(a('17x9')),
      r = u(a('cYvq')); function u(e) { return e && e.__esModule ? e : { default: e }; } const s = function (e) { const t = e.tagline; return l.default.createElement('span', { className: r.default.movieTagline }, t); }; s.propTypes = { tagline: n.default.string.isRequired }, t.default = s;
  },
  oXTp(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('q1tI')),
      n = u(a('17x9')),
      r = u(a('0/1z')); function u(e) { return e && e.__esModule ? e : { default: e }; } const s = function (e) { const t = e.rating; return l.default.createElement('span', { className: r.default.movieRating }, t || 0); }; s.propTypes = { rating: n.default.number }, t.default = s;
  },
  q4kH(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('q1tI')),
      n = r(a('17x9')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.year; return l.default.createElement('span', { className: 'movie-year' }, t); }; u.propTypes = { year: n.default.number }, t.default = u;
  },
  tQn8(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const a = arguments[t]; for (const l in a)Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]); } return e; },
      n = i(a('q1tI')),
      r = i(a('17x9')),
      u = i(a('zcIz')),
      s = i(a('wrn2')); function i(e) { return e && e.__esModule ? e : { default: e }; } const d = function (e) { return n.default.createElement(u.default, l({}, e, { className: s.default.movieCover })); }; d.propTypes = { src: r.default.string, alt: r.default.string }, t.default = d;
  },
  wrn2(e, t, a) { e.exports = { 'movie-cover': 'styles-16293', movieCover: 'styles-16293' }; },
}]);
