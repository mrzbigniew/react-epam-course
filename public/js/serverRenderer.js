module.exports=function(e){var t={},r={1:0};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.e=function(t){if(0!==r[t]){var n=require("./js/"+t+".serverRenderer.js"),a=n.modules,u=n.ids;for(var o in a)e[o]=a[o];for(var l=0;l<u.length;l++)r[u[l]]=0}return Promise.all([])},n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n(n.s=0)}({"+aUy":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("h74D"),u=r("8tvR"),o=r("pgd9"),l=(n=o)&&n.__esModule?n:{default:n};var s=(0,a.connect)(function(e,t){return{active:e.search.filter===t.filter}},function(e,t){return{onClick:function(){e((0,u.setSearchFilter)(t.filter))}}})(l.default);t.default=s},"+ehm":function(e,t){},0:function(e,t,r){r("8Vax"),e.exports=r("MRYV")},"19aK":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var n=r("rKB8"),a=(r("RmXt"),r("mkX8")),u=c(r("cQbR")),o=c(r("KemF")),l=c(r("zE+R")),s=c(r("va7r"));function c(e){return e&&e.__esModule?e:{default:e}}var i=t.reducer=(0,n.combineReducers)({movie:u.default,movies:a.movies,spinner:o.default,search:l.default,results:s.default});t.default=i},"1fKG":function(e,t){e.exports=require("redux-saga")},"2f6q":function(e,t){e.exports={"result-item":"styles-5fc46",resultItem:"styles-5fc46","result-item-image":"styles-68fc7",resultItemImage:"styles-68fc7",image:"styles-0f01f"}},"3ACk":function(e,t){},"4asc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("rf6O")),u=o(r("WcWA"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.moviesCount;return n.default.createElement("span",{className:u.default.resultsCount},t||"No"," movies found")};l.propTypes={moviesCount:a.default.number},t.default=l},"6/Ym":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("rf6O"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.onClick,r=e.className,a=e.children;return n.default.createElement("button",{className:"btn "+r,onClick:function(e){return t()}},a)};o.propTypes={className:a.default.string,onClick:a.default.func,children:a.default.node},t.default=o},"6QI/":function(e,t){e.exports={"image-cover":"styles-fdfb5",imageCover:"styles-fdfb5"}},"6Z+c":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("yINw"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",{className:a.default.notFound},n.default.createElement("span",null,"404 Not found"))}},"7ITC":function(e,t){e.exports=require("react-dom/server")},"8Vax":function(e,t){e.exports=require("babel-polyfill")},"8tvR":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.searchMovies=t.setSearchFilter=t.setSearchText=t.SET_SEARCH_TEXT=t.SET_SEARCH_FILTER=t.SEARCH_BY_GENRE=t.SEARCH_BY_TITLE=void 0;var n=r("rT1e"),a=(t.SEARCH_BY_TITLE="title",t.SEARCH_BY_GENRE="genre",t.SET_SEARCH_FILTER="SET_SEARCH_BY"),u=t.SET_SEARCH_TEXT="SET_SEARCH_TEXT";t.setSearchText=function(e){return{type:u,value:e}},t.setSearchFilter=function(e){return{type:a,value:e}},t.searchMovies=function(e,t){return{type:n.SET_SEARCH_RESULTS_CRITERIA,filter:e,text:t}}},"9CwE":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("rf6O"),u=(n=a)&&n.__esModule?n:{default:n};var o={id:u.default.number,title:u.default.string,tagline:u.default.string,vote_average:u.default.number,vote_count:u.default.number,release_date:u.default.string,poster_path:u.default.string,overview:u.default.string,budget:u.default.number,revenue:u.default.number,runtime:u.default.number,genres:u.default.arrayOf(u.default.string)};t.default=o},"9bMJ":function(e,t){e.exports={"movie-image":"styles-18c6f",movieImage:"styles-18c6f"}},BIg0:function(e,t){e.exports={logo:"styles-abaab"}},BaZy:function(e,t){e.exports=require("react-loadable")},Clg2:function(e,t){e.exports={cover:"styles-97647"}},DnS6:function(e,t){e.exports={"results-body":"styles-3e3be",resultsBody:"styles-3e3be","movie-image":"styles-402ca",movieImage:"styles-402ca","image-cover":"styles-492b6",imageCover:"styles-492b6"}},EjRR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("rf6O"));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.children,r=e.className;return n.default.createElement("div",{className:"navbar "+(r||"")},t)};o.propTypes={children:a.default.node,className:a.default.string},t.default=o},GigH:function(e,t){e.exports={header:"styles-0e73d"}},HAhy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r("cDcd")),a=s(r("rf6O")),u=r("h74D"),o=s(r("6/Ym")),l=r("rT1e");function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.dispatch,r=e.children,a=e.value;return e.active?n.default.createElement("span",{className:"btn btn-sm btn-success"},r):n.default.createElement(o.default,{className:"btn btn-sm btn-link",onClick:function(){return t((0,l.setSearchResultsSortOrder)(a))}},r)};c.propTypes={dispatch:a.default.func,children:a.default.node,value:a.default.string,active:a.default.bool},c=(0,u.connect)(function(e,t){return{active:e.results.sort===t.value}})(c),t.default=c},HLoj:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r("cDcd")),a=r("h74D"),u=s(r("rf6O")),o=s(r("UosJ")),l=s(r("Clg2"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.visible;return n.default.createElement("div",{className:l.default.cover,style:{display:t?"flex":"none"}},n.default.createElement(o.default,null))};c.propTypes={visible:u.default.bool},t.default=(0,a.connect)(function(e){return{visible:e.spinner}})(c)},J7IK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("BIg0"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("span",{className:a.default.logo},"netflixroulette")}},JPPj:function(e,t){e.exports=require("redux-persist/integration/react")},JxQy:function(e,t){e.exports={footer:"styles-5b1e3"}},KemF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("snxn");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case n.SET_SPINNER_STATE:return t.value;default:return e}}},LVde:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r("cDcd")),a=i(r("rf6O")),u=r("oncg"),o=i(r("NVeO")),l=i(r("trOH")),s=i(r("f3m3")),c=i(r("DnS6"));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=e.movies;return n.default.createElement("div",{className:c.default.resultsBody},t&&t.length?t.map(function(e){return n.default.createElement(u.Link,{key:e.id,to:"/film/"+e.id},n.default.createElement(l.default,{poster_path:e.poster_path,title:e.title,genre:e.genres[0],release_year:e.release_date.split("-")[0]}))}):n.default.createElement(o.default,null))};f.propTypes={movies:a.default.arrayOf(a.default.shape(s.default))},t.default=f},Lu6K:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(r("cDcd")),a=f(r("rf6O")),u=r("h74D"),o=r("oncg"),l=f(r("WPRJ")),s=f(r("wQgj")),c=f(r("+aUy"));r("3ACk");var i=r("8tvR");r("rT1e");function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=e.history,r=e.setText,a=e.filter,u=e.text,o=e.className,f=function(){t.push("/search/"+a+" "+u)};return n.default.createElement("form",{className:"search-form "+o,onSubmit:function(e){e.preventDefault(),f()}},n.default.createElement("div",{className:"row no-gutters"},n.default.createElement("div",{className:"col-12"},n.default.createElement(l.default,{onChange:r}))),n.default.createElement("div",{className:"row no-gutters"},n.default.createElement("div",{className:"col-6"},n.default.createElement(c.default,{filter:i.SEARCH_BY_TITLE},"title"),n.default.createElement(c.default,{filter:i.SEARCH_BY_GENRE},"genre")),n.default.createElement("div",{className:"col-6"},n.default.createElement("div",{className:"row no-gutters justify-content-end"},n.default.createElement(s.default,{onClick:function(){return f()}},"search")))))};d.propTypes={movies:a.default.array,history:a.default.object,doSearch:a.default.func,setText:a.default.func,filter:a.default.string,text:a.default.string,className:a.default.string},d=(0,o.withRouter)((0,u.connect)(function(e){return{filter:e.search.filter,text:e.search.text}},function(e){return{setText:function(t){e((0,i.setSearchText)(t))}}})(d)),t.default=d},MRYV:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,u=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(){return function(e,t){if("/favicon.ico"===e.url)return t.writeHead(204),void t.end();var r=(0,s.default)(),i=r.store,f=r.persistor;if(-1!==e.url.indexOf("%20")){var d=e.url.split("/").pop().split("%20"),p=n(d,2),v=p[0],_=p[1];i.dispatch((0,c.setSearchFilter)(v)),i.dispatch((0,c.setSearchText)(_))}var m={},E=a.default.createElement(l.default,{context:m,location:e.url.replace("%20"," "),router:o.StaticRouter,store:i,persistor:f});i.runSaga().done.then(function(){var e=(0,u.renderToString)(E);if(m.url)return t.writeHead(302,{Location:m.url}),void t.end();var r=i.getState();t.send(function(e,t){return"\n      <!doctype html>\n      <html>\n        <head>\n          <meta charset=utf-8>\n          <title>React Server Side Rendering</title>\n          <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\">\n          <style>\n            html, body {\n              width: 100%;\n              height: 100%;\n              display: block;\n            }\n            body {\n              margin: 0;\n              padding: 0;\n              outline: none;\n              border: none;\n              width: 100%;\n              height: 100%;\n              font-family: 'Open Sans', sans-serif;\n              font-size: 1.2rem;\n              font-weight: normal;\n            }\n\n            h1,\n            h2,\n            h3,\n            h4,\n            h5,\n            h6 {\n                font-family: 'Montserrat', sans-serif;\n            }\n\n            * {\n                box-sizing: border-box;\n            }\n\n            .font-open-sans {\n                font-family: 'Open Sans', sans-serif;\n            }\n\n            .font-montserrat {\n                font-family: 'Montserrat', sans-serif;\n            }\n          </style>\n          "+'<link href="/css/main.css" rel="stylesheet" type="text/css">\n        </head>\n        <body>\n          <div id="root">'+e+"</div>\n          <script>\n            window.PRELOADED_STATE = "+JSON.stringify(t).replace(/</g,"\\u003c")+'\n          <\/script>\n          <script src="/js/main.js"><\/script>\n        </body>\n      </html>\n  '}(e,r))}),i.close()}},r("W+0S");var a=i(r("cDcd")),u=r("7ITC"),o=r("oncg"),l=i(r("S2bg")),s=i(r("Pw53")),c=r("8tvR");function i(e){return e&&e.__esModule?e:{default:e}}},NVeO:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("cENn"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",{className:a.default.noResultsFound},n.default.createElement("span",null,"No films found"))}},Pw53:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("rKB8"),a=(r("ZSx1"),r("VNb8")),u=i(r("T8f9")),o=r("1fKG"),l=i(o),s=r("19aK"),c=r("nnGl");function i(e){return e&&e.__esModule?e:{default:e}}var f=(0,l.default)(),d={key:"movies",storage:u.default,whitelist:["movies"]},p=(0,a.persistReducer)(d,s.reducer);t.default=function(e){var t=(0,n.createStore)(p,e,(0,n.applyMiddleware)(f));e||(f.run(c.rootSaga),t.runSaga=function(){return f.run(c.rootSaga)},t.close=function(){return t.dispatch(o.END)});var r=(0,a.persistStore)(t);return{store:t,persistor:r}}},RXV8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("rf6O")),u=o(r("6QI/"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.visible,r=e.children;return n.default.createElement("div",{className:u.default.imageCover,style:{display:t?"flex":"none"}},r)};l.propTypes={visible:a.default.bool,children:a.default.node},t.default=l},RmXt:function(e,t){e.exports=require("redux-saga/effects")},S2bg:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r("cDcd")),a=s(r("rf6O")),u=r("h74D"),o=(r("JPPj"),r("oncg")),l=s(r("Xkyh"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.store,r=(e.persistor,e.router),a=e.location;e.context;return n.default.createElement(u.Provider,{store:t},n.default.createElement(l.default,{router:r,location:a}))};c.propTypes={store:a.default.object.isRequired,persistor:a.default.object.isRequired,router:a.default.func,location:a.default.string,context:a.default.object},l.default.defaultProps={location:null,context:{},router:o.BrowserRouter,persistor:null},t.default=c},T8f9:function(e,t){e.exports=require("redux-persist/lib/storage")},TSWH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("rf6O"));function u(e){return e&&e.__esModule?e:{default:e}}r("+ehm");var o=function(e){var t=e.children;return n.default.createElement("div",{className:"content-expand"},t)};o.propTypes={children:a.default.node,className:a.default.string},t.default=o},UosJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("oMXt"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement("div",{className:a.default.spinner},n.default.createElement("div",{className:a.default.blinker1}),n.default.createElement("div",{className:a.default.blinker2}))}},V3dS:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("rf6O")),u=o(r("JxQy"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.children;return n.default.createElement("div",{className:u.default.footer},t)};l.propTypes={children:a.default.node},t.default=l},VNb8:function(e,t){e.exports=require("redux-persist")},VaMr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("rf6O"));function u(e){return e&&e.__esModule?e:{default:e}}r("yT4B");var o=function(e){var t=e.children;return n.default.createElement("div",{className:"container-fluid p-0"},t)};o.propTypes={children:a.default.node},t.default=o},"W+0S":function(e,t){e.exports=require("isomorphic-fetch")},WPRJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("rf6O")),u=o(r("gVf4"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.onChange;return n.default.createElement("div",{className:u.default.searchField},n.default.createElement("div",{className:"form-group "+u.default.formGroup},n.default.createElement("label",{htmlFor:"searchInput",className:"control-label font-montserrat "+u.default.textUppercase+" "+u.default.controlLabel},"Search for movie"),n.default.createElement("div",null,n.default.createElement("input",{id:"searchInput",className:"form-control "+u.default.formControl,onChange:function(e){return t(e.target.value)},placeholder:"type to search",autoComplete:"off"}))))};l.propTypes={onChange:a.default.func},t.default=l},WcWA:function(e,t){e.exports={"results-count":"styles-1494b",resultsCount:"styles-1494b"}},Xkyh:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=v(r("cDcd")),o=r("oncg"),l=v(r("rf6O")),s=(r("nnGl"),r("h74D")),c=v(r("BaZy")),i=v(r("rmrf")),f=v(r("m6kk")),d=v(r("6Z+c")),p=v(r("HLoj"));function v(e){return e&&e.__esModule?e:{default:e}}var _=(0,c.default)({loader:function(){return new Promise(function(e){r.e(0).then(function(t){e(r("PIFK"))}.bind(null,r)).catch(r.oe)})},loading:p.default}),m=(0,s.connect)(function(e){return{movies:e.movies.data}})(n=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),a(t,[{key:"render",value:function(){var e=this.props.router;return u.default.createElement(i.default,null,u.default.createElement(e,{location:this.props.location,context:this.props.context},u.default.createElement(o.Switch,null,u.default.createElement(o.Route,{exact:!0,path:"/",component:f.default}),u.default.createElement(o.Route,{path:"/search/:filter :text",component:f.default}),u.default.createElement(o.Route,{path:"/film/:id",component:_}),u.default.createElement(o.Route,{path:"*",component:d.default}))))}}]),t}())||n;t.default=m,m.propTypes={movies:l.default.arrayOf(l.default.object),router:l.default.func,location:l.default.string,context:l.default.object},m.defaultProps={location:"/",context:{},router:o.Router}},ZSx1:function(e,t){e.exports=require("redux-thunk")},aH3O:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMovie=t.fetchMovies=t.fetchData=void 0;var n,a,u=(n=["","","",""],a=["","","",""],Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}})));r("RmXt");function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,u){try{var o=t[a](u),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}var l,s,c,i=function(e){return(arguments.length<=3?void 0:arguments[3])?""+(arguments.length<=1?void 0:arguments[1])+(arguments.length<=2?void 0:arguments[2])+"?"+(arguments.length<=3?void 0:arguments[3]):""+(arguments.length<=1?void 0:arguments[1])+(arguments.length<=2?void 0:arguments[2])},f=function(e){return e?Object.keys(e).filter(function(t){return e[t]}).map(function(t){return[t,e[t].toString().trim()].join("=")}).join("&"):""},d=t.fetchData=(l=o(regeneratorRuntime.mark(function e(t){var r,n=t.path,a=t.params;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i(u,"http://react-cdp-api.herokuapp.com/",n,f(a)),{method:"GET",mode:"cros"});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,void 0)})),function(e){return l.apply(this,arguments)});t.fetchMovies=(s=o(regeneratorRuntime.mark(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{offset:0,limit:1e4};return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({path:"movies",params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)})),function(){return s.apply(this,arguments)}),t.fetchMovie=(c=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({path:"movies/"+t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)})),function(e){return c.apply(this,arguments)})},cDcd:function(e,t){e.exports=require("react")},cENn:function(e,t){e.exports={"no-results-found":"styles-c0fdd",noResultsFound:"styles-c0fdd"}},cQbR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MOVIE_DATA_CLEAR=t.MOVIE_DATA_SET=t.MOVIE_DATA_GET=t.MOVIE_LOADING_ERROR=t.MOVIE_LOADING_SUCCESS=t.MOVIE_LOADING_START=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r("rKB8"),u=t.MOVIE_LOADING_START="MOVIE_LOADING_START",o=t.MOVIE_LOADING_SUCCESS="MOVIE_LOADING_SUCCESS",l=t.MOVIE_LOADING_ERROR="MOVIE_LOADING_ERROR",s=t.MOVIE_DATA_GET="MOVIE_DATA_GET",c=t.MOVIE_DATA_SET="MOVIE_DATA_SET",i=t.MOVIE_DATA_CLEAR="MOVIE_DATA_CLEAR",f=(0,a.combineReducers)({loadStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,error:null},t=arguments[1];switch(t.type){case u:return n({},e,{isLoading:!0});case o:return n({},e,{isLoading:!1,error:null});case l:return n({},e,{isLoading:!1,error:t.error});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case c:return n({},t.data);case i:return null;default:return e}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case s:return t.id;default:return e}}});t.default=f},eNIv:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r("cDcd")),a=o(r("rf6O")),u=o(r("GigH"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.children;return n.default.createElement("div",{className:u.default.header},t)};l.propTypes={children:a.default.node},t.default=l},f3m3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("9CwE");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},fZu8:function(e,t){e.exports={"search-form":"styles-6f641",searchForm:"styles-6f641"}},gVf4:function(e,t){e.exports={"search-field":"styles-44608",searchField:"styles-44608","text-uppercase":"styles-431fb",textUppercase:"styles-431fb","control-label":"styles-b4c49",controlLabel:"styles-b4c49","form-group":"styles-2c7ae",formGroup:"styles-2c7ae","form-control":"styles-46d2c",formControl:"styles-46d2c"}},h74D:function(e,t){e.exports=require("react-redux")},m6kk:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(r("cDcd")),a=d(r("VaMr")),u=d(r("eNIv")),o=d(r("V3dS")),l=d(r("TSWH")),s=d(r("J7IK")),c=d(r("Lu6K")),i=d(r("qrDJ")),f=d(r("fZu8"));function d(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(a.default,null,n.default.createElement(u.default,null,n.default.createElement(s.default,null),n.default.createElement(c.default,{className:f.default.searchForm})),n.default.createElement(l.default,null,n.default.createElement(i.default,null)),n.default.createElement(o.default,null,n.default.createElement(s.default,null)))}},mkX8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.movies=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r("rKB8"),u=r("nnGl"),o=t.movies=(0,a.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],total:0},t=arguments[1];switch(t.type){case u.MOVIES_DATA_SET:return{data:t.data,total:t.total};case u.MOVIES_DATA_CLEAN:return{data:[],total:0};default:return e}},loadStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,error:null},t=arguments[1];switch(t.type){case u.MOVIES_DATA_LOADING_START:return n({},e,{isLoading:!0});case u.MOVIES_DATA_LOADING_SUCCESS:return{isLoading:!1,error:null};case u.MOVIES_DATA_LOADING_ERROR:return{isLoading:!1,error:t.error};default:return e}}});t.default=o},nnGl:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadMovies=t.moviesDataClean=t.moviesDataSet=t.moviesLoadingError=t.moviesLoadingSuccess=t.moviesLoadingStart=t.MOVIES_DATA_SET=t.MOVIES_DATA_CLEAN=t.MOVIES_DATA_LOADING_ERROR=t.MOVIES_DATA_LOADING_SUCCESS=t.MOVIES_DATA_LOADING_START=void 0,t.getMovies=y,t.moviesSaga=h,t.rootSaga=b;var n=r("RmXt"),a=r("aH3O"),u=r("snxn"),o=regeneratorRuntime.mark(y),l=regeneratorRuntime.mark(h),s=regeneratorRuntime.mark(b);var c=t.MOVIES_DATA_LOADING_START="MOVIES_DATA_LOADING_START",i=t.MOVIES_DATA_LOADING_SUCCESS="MOVIES_DATA_LOADING_SUCCESS",f=t.MOVIES_DATA_LOADING_ERROR="MOVIES_DATA_LOADING_ERROR",d=t.MOVIES_DATA_CLEAN="MOVIES_DATA_CLEAN",p=t.MOVIES_DATA_SET="MOVIES_DATA_SET",v=t.moviesLoadingStart=function(){return{type:c}},_=t.moviesLoadingSuccess=function(){return{type:i}},m=t.moviesLoadingError=function(e){return{type:f,error:e}},E=t.moviesDataSet=function(e){return{type:p,data:e.data,total:e.total}};t.moviesDataClean=function(){return{type:d}},t.loadMovies=function(){return e=regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(v()),t((0,u.showSpinner)()),e.next=5,(0,a.fetchMovies)();case 5:return r=e.sent,t(_()),t((0,u.hideSpinner)()),e.abrupt("return",t(E(r)));case 11:e.prev=11,e.t0=e.catch(0),t(m(e.t0)),t((0,u.hideSpinner)());case 15:case"end":return e.stop()}},e,void 0,[[0,11]])}),t=function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(a,u){try{var o=t[a](u),l=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})},function(e){return t.apply(this,arguments)};var e,t};function y(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.fetchMovies)();case 2:return e=t.sent,t.next=5,(0,n.put)(E(e));case 5:case"end":return t.stop()}},o,this)}function h(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.all)([y()]);case 2:case"end":return e.stop()}},l,this)}function b(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.all)([h()]);case 2:case"end":return e.stop()}},s,this)}},oMXt:function(e,t){e.exports={spinner:"styles-8d10f",blinker1:"styles-c1c5c",blinker2:"styles-fe65c",blikn:"styles-4fbe0",blink:"styles-d31b7"}},oncg:function(e,t){e.exports=require("react-router-dom")},pgd9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(r("cDcd")),a=u(r("rf6O"));function u(e){return e&&e.__esModule?e:{default:e}}r("uqut");var o=function(e){var t=e.onClick,r=e.active,a=e.children;return r?n.default.createElement("span",{className:"btn btn-sm btn-success"},a):n.default.createElement("span",{className:"btn btn-sm btn-text",onClick:function(e){e.preventDefault(),t()}},a)};o.propTypes={onClick:a.default.func,active:a.default.bool,children:a.default.node},t.default=o},qrDJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(r("cDcd")),a=r("oncg"),u=p(r("rf6O")),o=r("h74D"),l=p(r("4asc")),s=p(r("HAhy")),c=p(r("LVde")),i=p(r("TSWH")),f=p(r("EjRR")),d=(p(r("cQbR")),r("rT1e"));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e){var t=e.movies,r=e.sort,a=e.match,u=a.params.text,o=a.params.filter,p=(0,d.sortResults)((0,d.getFiltered)(t,o,u),r);return n.default.createElement(i.default,null,n.default.createElement(f.default,{className:"navbar-expand-lg navbar-light bg-light justify-content-between"},n.default.createElement(l.default,{moviesCount:p.length}),n.default.createElement("div",null,n.default.createElement(s.default,{value:d.SORT_BY_RATING},"rating"),n.default.createElement(s.default,{value:d.SORT_BY_RELEASE_DATE},"release date"))),n.default.createElement(i.default,null,n.default.createElement(c.default,{movies:p})))};v.propTypes={movies:u.default.arrayOf(u.default.object),match:u.default.object,sort:u.default.string},v=(0,a.withRouter)((0,o.connect)(function(e){return{movies:e.movies.data.data,sort:e.results.sort}})(v)),t.default=v},rKB8:function(e,t){e.exports=require("redux")},rT1e:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setSearchResultsSortOrder=t.sortResults=t.getFiltered=t.SORT_BY_RATING=t.SORT_BY_RELEASE_DATE=t.SET_SEARCH_RESULTS_CRITERIA=t.SET_SEARCH_RESULTS_SORT_ORDER=t.SET_SEARCH_RESULTS_DATA=void 0;var n=r("8tvR"),a=(t.SET_SEARCH_RESULTS_DATA="SET_SEARCH_RESULTS_DATA",t.SET_SEARCH_RESULTS_SORT_ORDER="SET_SEARCH_RESULTS_SORT_ORDER"),u=(t.SET_SEARCH_RESULTS_CRITERIA="SET_SEARCH_RESULTS_CRITERIA",t.SORT_BY_RELEASE_DATE="SORT_BY_RELEASE_DATE",t.SORT_BY_RATING="SORT_BY_RATING");t.getFiltered=function(e,t,r){return t&&r?e.filter(function(e){return t===n.SEARCH_BY_TITLE?-1!==e.title.toLowerCase().trim().indexOf(r.toLowerCase().trim()):e.genres.some(function(e){return-1!==e.toLowerCase().trim().indexOf(r.toLowerCase().trim())})}):[]},t.sortResults=function(e,t){return e.sort(function(e,r){var n=(t===u?e.vote_average:e.release_date).toString().toLowerCase(),a=(t===u?r.vote_average:r.release_date).toString().toLowerCase();return n===a?0:n>a?1:-1})},t.setSearchResultsSortOrder=function(e){return{type:a,value:e}}},rZNV:function(e,t){e.exports={"search-button":"styles-8b990",searchButton:"styles-8b990","btn-sm":"styles-8c819",btnSm:"styles-8c819"}},rf6O:function(e,t){e.exports=require("prop-types")},rmrf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=o(r("cDcd")),u=o(r("rf6O"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={error:null,errorInfo:null},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?a.default.createElement("div",{className:"row"},a.default.createElement("div",{className:"col"},a.default.createElement("h2",null,"Error!"),a.default.createElement("div",null,a.default.createElement("strong",null,this.state.error.toString())),a.default.createElement("div",null,this.state.errorInfo.componentStack))):this.props.children}}]),t}();t.default=l,l.propTypes={children:u.default.node}},snxn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.SET_SPINNER_STATE="SET_SPINNER_STATE";t.showSpinner=function(){return{type:n,value:!0}},t.hideSpinner=function(){return{type:n,value:!1}}},trOH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r("cDcd")),a=l(r("rf6O")),u=l(r("zcIz")),o=l(r("2f6q"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.poster_path,r=e.title,a=e.release_year,l=e.genre,s=e.onClick;return n.default.createElement("div",{className:o.default.resultItem,onClick:s},n.default.createElement("div",{className:o.default.resultItemImage},n.default.createElement(u.default,{width:"200",src:t,alt:r,className:o.default.image})),n.default.createElement("div",{className:"w-100 d-flex justify-content-between"},n.default.createElement("span",null,r),n.default.createElement("span",null,a)),n.default.createElement("div",{className:"w-100 d-flex justify-content-start align-items-start"},l))};s.propTypes={poster_path:a.default.string,title:a.default.string,release_year:a.default.string,genre:a.default.string,onClick:a.default.func},t.default=s},uqut:function(e,t){e.exports={"btn-text":"styles-22417",btnText:"styles-22417"}},va7r:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r("rKB8");var n=r("rT1e");r("8tvR");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sort:n.SORT_BY_RELEASE_DATE},t=arguments[1];switch(t.type){case n.SET_SEARCH_RESULTS_SORT_ORDER:return{sort:t.value};default:return e}}},wQgj:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r("cDcd")),a=l(r("rf6O")),u=l(r("6/Ym")),o=(r("h74D"),l(r("rZNV")));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.onClick;return n.default.createElement("div",{className:o.default.searchButton},n.default.createElement(u.default,{className:"brn btn-primary btn-sm "+o.default.btnSm,label:"search",onClick:t},"search"))};s.propTypes={onClick:a.default.func},t.default=s},yINw:function(e,t){e.exports={"not-found":"styles-b10e2",notFound:"styles-b10e2"}},yT4B:function(e,t){},"zE+R":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("rKB8"),a=r("8tvR"),u=(0,n.combineReducers)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.SEARCH_BY_TITLE,t=arguments[1];switch(t.type){case a.SET_SEARCH_FILTER:return t.value;default:return e}},text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];switch(t.type){case a.SET_SEARCH_TEXT:return t.value;default:return e}}});t.default=u},zcIz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r("cDcd")),u=s(r("rf6O")),o=s(r("RXV8")),l=s(r("9bMJ"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,u=Array(a),o=0;o<a;o++)u[o]=arguments[o];return r=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={loaded:!0,error:!1},c(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.src,n=t.alt,u=t.className;return a.default.createElement("div",{className:l.default.movieImage,style:{position:"relative"}},this.state.loaded?"":a.default.createElement(o.default,{visible:!this.state.loaded},a.default.createElement("img",{className:"loading",src:"http://www.mywebtimes.com/images/2017/loading.gif"})),this.state.error?a.default.createElement(o.default,{visible:!0},a.default.createElement("img",{className:"no-image",style:{maxWidth:"150px",maxHeight:"150px"},src:"https://www.artengo.co.uk/sites/artengo/files/styles/460x460/public/default_images/no-picture.png?itok=V-Gj1OhE"})):a.default.createElement("img",{onLoad:function(){return e.setState({loaded:!0,error:!1})},onError:function(){return e.setState({loaded:!0,error:!0})},src:r,alt:n,className:u}))}}]),t}();i.propTypes={src:u.default.string,alt:u.default.string,className:u.default.string},t.default=i}});