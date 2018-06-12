exports.ids = [0], exports.modules = {
  '0/1z': function (e, t) { e.exports = { 'movie-rating': 'styles-bcebd', movieRating: 'styles-bcebd' }; },
  DFzx(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = c(a('cDcd')),
      n = a('oncg'),
      r = c(a('6/Ym')),
      u = c(a('KOCx')); function c(e) { return e && e.__esModule ? e : { default: e }; } const s = (0, n.withRouter)((e) => { const t = e.history; return l.default.createElement(r.default, { className: `btn btn-text btn-sm ${u.default.backToSearch}`, onClick: t.goBack }, 'search'); }); t.default = s;
  },
  H1GH(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('cDcd')),
      n = u(a('rf6O')),
      r = u(a('alHq')); function u(e) { return e && e.__esModule ? e : { default: e }; } const c = function (e) { const t = e.title; return l.default.createElement('span', { className: r.default.movieTitle }, t); }; c.propTypes = { title: n.default.string }, t.default = c;
  },
  KOCx(e, t) { e.exports = { 'back-to-search': 'styles-6ade8', backToSearch: 'styles-6ade8' }; },
  PIFK(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = m(a('cDcd')),
      n = m(a('VaMr')),
      r = m(a('eNIv')),
      u = m(a('V3dS')),
      c = m(a('TSWH')),
      s = m(a('J7IK')),
      d = m(a('DFzx')),
      i = m(a('cQEb')),
      f = m(a('cN1q')),
      o = m(a('jo1G')); function m(e) { return e && e.__esModule ? e : { default: e }; }t.default = function () { return l.default.createElement(n.default, null, l.default.createElement(r.default, null, l.default.createElement('div', { className: 'row no-gutters justify-content-between' }, l.default.createElement(s.default, null), l.default.createElement(d.default, null)), l.default.createElement(i.default, { className: o.default.movieDetails })), l.default.createElement(c.default, null, l.default.createElement(f.default, null)), l.default.createElement(u.default, null, l.default.createElement(s.default, null))); };
  },
  T7w2(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('cDcd')),
      n = u(a('rf6O')),
      r = u(a('cq9n')); function u(e) { return e && e.__esModule ? e : { default: e }; } const c = function (e) { const t = e.description; return l.default.createElement('div', { className: r.default.moviesDescription }, l.default.createElement('p', null, t)); }; c.propTypes = { description: n.default.string }, t.default = c;
  },
  U7ql(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('cDcd')),
      n = r(a('rf6O')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.duration; return l.default.createElement('span', { className: 'movie-duration' }, t, ' min'); }; u.propTypes = { duration: n.default.number }, t.default = u;
  },
  alHq(e, t) { e.exports = { 'movie-title': 'styles-d5e72', movieTitle: 'styles-d5e72' }; },
  cN1q(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = f(a('cDcd')),
      n = a('h74D'),
      r = a('oncg'),
      u = f(a('rf6O')),
      c = f(a('LVde')),
      s = f(a('TSWH')),
      d = f(a('EjRR')),
      i = f(a('eA4x')); function f(e) { return e && e.__esModule ? e : { default: e }; } let o = function (e) {
      let t = e.movies,
        a = e.match,
        n = t.find(e => e.id.toString() === a.params.id),
        r = t.filter(e => e.genres[0] === n.genres[0]); return l.default.createElement(s.default, null, l.default.createElement(d.default, { className: 'navbar-expand-lg navbar-light bg-light justify-content-between' }, l.default.createElement(i.default, { genre: n.genres[0] })), l.default.createElement(s.default, null, l.default.createElement(c.default, { movies: r })));
    }; o.propTypes = { movies: u.default.array, match: u.default.object }, o = (0, r.withRouter)((0, n.connect)(e => ({ movies: e.movies.data.data }))(o)), t.default = o;
  },
  cQEb(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = v(a('cDcd')),
      n = a('h74D'),
      r = a('oncg'),
      u = v(a('rf6O')),
      c = v(a('H1GH')),
      s = v(a('tQn8')),
      d = v(a('oXTp')),
      i = v(a('kAEh')),
      f = v(a('q4kH')),
      o = v(a('U7ql')),
      m = v(a('T7w2')); function v(e) { return e && e.__esModule ? e : { default: e }; } let p = function (e) {
      let t = e.movies,
        a = e.match,
        n = e.className,
        r = t.find(e => e.id.toString() === a.params.id); return l.default.createElement('div', { className: `movie-details ${n}` }, l.default.createElement('div', { className: 'd-flex align-items-stretch justify-content-start m-2' }, l.default.createElement('div', { className: 'd-flex align-items-center justify-content-center p-3 w-25' }, l.default.createElement(s.default, { src: r.poster_path, alt: r.title })), l.default.createElement('div', { className: 'd-flex align-items-center p2 w-75' }, l.default.createElement('div', { className: 'pl-3' }, l.default.createElement('div', { className: 'd-flex justify-content-start' }, l.default.createElement('div', { className: 'mr-3' }, l.default.createElement(c.default, { title: r.title })), l.default.createElement(d.default, { rating: r.vote_average })), l.default.createElement('div', null, l.default.createElement(i.default, { tagline: r.tagline })), l.default.createElement('div', { className: 'd-flex justify-content-start' }, l.default.createElement('div', { className: 'mr-5' }, l.default.createElement(f.default, { year: new Date(r.release_date).getFullYear() })), l.default.createElement(o.default, { duration: r.runtime })), l.default.createElement('div', null, l.default.createElement(m.default, { description: r.overview }))))));
    }; p.propTypes = { movies: u.default.array, match: u.default.object, className: u.default.string }, p = (0, r.withRouter)((0, n.connect)(e => ({ movies: e.movies.data.data }))(p)), t.default = p;
  },
  cYvq(e, t) { e.exports = { 'movie-tagline': 'styles-63394', movieTagline: 'styles-63394' }; },
  cq9n(e, t) { e.exports = { 'movies-description': 'styles-f27ce', moviesDescription: 'styles-f27ce' }; },
  eA4x(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('cDcd')),
      n = r(a('rf6O')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.genre; return l.default.createElement('span', { className: 'results-genre-info' }, `Films by ${t.toLowerCase()} genre`); }; u.propTypes = { genre: n.default.string }, t.default = u;
  },
  jo1G(e, t) { e.exports = { 'movie-details': 'styles-e6ab3', movieDetails: 'styles-e6ab3' }; },
  kAEh(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('cDcd')),
      n = u(a('rf6O')),
      r = u(a('cYvq')); function u(e) { return e && e.__esModule ? e : { default: e }; } const c = function (e) { const t = e.tagline; return l.default.createElement('span', { className: r.default.movieTagline }, t); }; c.propTypes = { tagline: n.default.string.isRequired }, t.default = c;
  },
  oXTp(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = u(a('cDcd')),
      n = u(a('rf6O')),
      r = u(a('0/1z')); function u(e) { return e && e.__esModule ? e : { default: e }; } const c = function (e) { const t = e.rating; return l.default.createElement('span', { className: r.default.movieRating }, t || 0); }; c.propTypes = { rating: n.default.number }, t.default = c;
  },
  q4kH(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = r(a('cDcd')),
      n = r(a('rf6O')); function r(e) { return e && e.__esModule ? e : { default: e }; } const u = function (e) { const t = e.year; return l.default.createElement('span', { className: 'movie-year' }, t); }; u.propTypes = { year: n.default.number }, t.default = u;
  },
  tQn8(e, t, a) {
    Object.defineProperty(t, '__esModule', { value: !0 }); let l = Object.assign || function (e) { for (let t = 1; t < arguments.length; t++) { const a = arguments[t]; for (const l in a)Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]); } return e; },
      n = s(a('cDcd')),
      r = s(a('rf6O')),
      u = s(a('zcIz')),
      c = s(a('wrn2')); function s(e) { return e && e.__esModule ? e : { default: e }; } const d = function (e) { return n.default.createElement(u.default, l({}, e, { className: c.default.movieCover })); }; d.propTypes = { src: r.default.string, alt: r.default.string }, t.default = d;
  },
  wrn2(e, t) { e.exports = { 'movie-cover': 'styles-16293', movieCover: 'styles-16293' }; },
};
