(function(e) {
  function t(t) {
    for (var r, o, s = t[0], c = t[1], l = t[2], u = 0, p = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]), n[o] = 0;
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    d && d(t);
    while (p.length) p.shift()();
    return i.push.apply(i, l || []), a();
  }

  function a() {
    for (var e, t = 0; t < i.length; t++) {
      for (var a = i[t], r = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== n[c] && (r = !1);
      }
      r && (i.splice(t--, 1), e = s(s.s = a[0]));
    }
    return e;
  }

  var r = {}, n = { app: 0 }, i = [];

  function o(e) {
    return s.p + "js/" + ({ about: "about" }[e] || e) + "." + { about: "8508b23e" }[e] + ".js";
  }

  function s(t) {
    if (r[t]) return r[t].exports;
    var a = r[t] = { i: t, l: !1, exports: {} };
    return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
  }

  s.e = function(e) {
    var t = [], a = n[e];
    if (0 !== a) if (a) t.push(a[2]); else {
      var r = new Promise((function(t, r) {
        a = n[e] = [t, r];
      }));
      t.push(a[2] = r);
      var i, c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = o(e);
      var l = new Error;
      i = function(t) {
        c.onerror = c.onload = null, clearTimeout(u);
        var a = n[e];
        if (0 !== a) {
          if (a) {
            var r = t && ("load" === t.type ? "missing" : t.type), i = t && t.target && t.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")", l.name = "ChunkLoadError", l.type = r, l.request = i, a[1](l);
          }
          n[e] = void 0;
        }
      };
      var u = setTimeout((function() {
        i({ type: "timeout", target: c });
      }), 12e4);
      c.onerror = c.onload = i, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, s.m = e, s.c = r, s.d = function(e, t, a) {
    s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
  }, s.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, s.t = function(e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (s.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e,
    }), 2 & t && "string" != typeof e) for (var r in e) s.d(a, r, function(t) {
      return e[t];
    }.bind(null, r));
    return a;
  }, s.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e["default"];
    } : function() {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function(e) {
    throw console.error(e), e;
  };
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [], l = c.push.bind(c);
  c.push = t, c = c.slice();
  for (var u = 0; u < c.length; u++) t(c[u]);
  var d = l;
  i.push([0, "chunk-vendors"]), a();
})({
  0: function(e, t, a) {
    e.exports = a("cd49");
  }, "0658": function(e, t, a) {
    "use strict";
    a("ae05");
  }, "0862": function(e, t, a) {
    "use strict";
    a("d9c8");
  }, "086a": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, "0ad7": function(e, t, a) {
    var r = a("2930");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1a312d2f", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "0ba8": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#NotInstalledArtemis{min-width:100%;min-height:100%;position:absolute;top:0;right:0;border-radius:10px;background-color:rgba(0,0,0,.7)}#NotInstalledArtemis #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, "0cce": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".normalCard{background-color:#fff}.normalCard,.selectedCard{transition:all .8s ease-out}.selectedCard{background-color:#264653!important}", ""]), e.exports = t;
  }, "0e5e": function(e, t, a) {
    "use strict";
    a("40ad");
  }, "0fad": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".v-tab-active{background-color:#425b66!important}", ""]), e.exports = t;
  }, "154f": function(e, t, a) {
    "use strict";
    a("9f37");
  }, "17cf": function(e, t, a) {
    "use strict";
    a("2ba6");
  }, 1951: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".statistic-tile{height:250px;width:250px}", ""]), e.exports = t;
  }, "20ad": function(e, t, a) {
    "use strict";
    a("eb5e");
  }, "252f": function(e, t, a) {
    "use strict";
    a("6e39");
  }, 2930: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#app[data-v-0afcca53]{padding:0;margin:0;position:relative}#text-span[data-v-0afcca53]{font-family:Roboto,sans-serif;color:#fff;display:flex;flex-direction:column;justify-content:center;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#main-container[data-v-0afcca53]{background-color:#425b66;min-width:100vw!important;max-width:100vw!important;width:100vw;height:100vh}", ""]), e.exports = t;
  }, "2aa6": function(e, t, a) {
    "use strict";
    a("b95c");
  }, "2ba6": function(e, t, a) {
    var r = a("0fad");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("48e8b3a3", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "2e17": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#color-background{height:100%;position:relative;background:#00242f;background:linear-gradient(28deg,#00242f,#0f4f63);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00242f\",endColorstr=\"#0f4f63\",GradientType=1)}#background-logo{z-index:1;background-size:contain;position:absolute;margin-top:auto;margin-right:auto;color:#fff;opacity:.2;fill:#0e4b5f}.login-container{display:block;width:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.103);min-width:100vw;min-height:100vh}", ""]), e.exports = t;
  }, 3155: function(e, t, a) {
    var r = a("57b8");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("c7e284e4", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "40ad": function(e, t, a) {
    var r = a("8fc2");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("4306f8e0", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "42b6": function(e, t, a) {
    e.exports = a.p + "img/artemis_icon.f1f0e570.png";
  }, "4eb7": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, "4ec8": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".statistic-tile-linear{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}", ""]), e.exports = t;
  }, "507b": function(e, t, a) {
    var r = a("4eb7");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("0aa905fa", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "51d2": function(e, t, a) {
    var r = a("d50d");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("4f6f8d58", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "57b8": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".v-tab-active{background-color:#425b66!important}#notInstalledArtemis{position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.7)}#notInstalledArtemis #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, "5aa3": function(e, t, a) {
    var r = a("0cce");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("0d3ad0ec", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "5f10": function(e, t, a) {
    "use strict";
    a("3155");
  }, 6133: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".frameworkListItem{cursor:pointer}.frameworkListItem .v-card__subtitle{padding-bottom:4px!important}#frameworkEditorZone{position:relative}#frameworkEditorZone #selectMessage{position:absolute;top:45%;left:50%;transform:translateX(-50%)}", ""]), e.exports = t;
  }, 6381: function(e, t, a) {
    "use strict";
    a("dc4f");
  }, "66bc": function(e, t, a) {
    "use strict";
    a("0ad7");
  }, "68aa": function(e, t, a) {
    "use strict";
    a("5aa3");
  }, "6a0e": function(e, t, a) {
    "use strict";
    a("c00d");
  }, "6e39": function(e, t, a) {
    var r = a("da41");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("f9148ed4", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, 7153: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, "738d": function(e, t, a) {
    "use strict";
    a("507b");
  }, 7501: function(e, t, a) {
    var r = a("7153");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("088a746a", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, 7551: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#notInstalledDemter{min-width:100%;min-height:100%;position:absolute;top:0;right:0;border-radius:10px;background-color:rgba(0,0,0,.7)}#notInstalledDemter #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, "7b29": function(e, t, a) {
    var r = a("24fb"), n = a("3fe9");
    t = r(!1), t.i(n), t.push([e.i, "", ""]), e.exports = t;
  }, "7e9e": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".modernization-stepper{width:100%}.v-tab--active{background-color:rgba(90,114,124,.6509803921568628)}.v-tabs-slider-wrapper{border-bottom:6px solid #2a9d8f}", ""]), e.exports = t;
  }, "81d4": function(e, t, a) {
    e.exports = a.p + "img/demeter_icon.60d0665e.png";
  }, "88e2": function(e, t, a) {
    "use strict";
    a("d0a0");
  }, "8fc2": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".login-container{display:block;width:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.103);min-width:100vw;min-height:100vh}", ""]), e.exports = t;
  }, "934b": function(e, t, a) {
    "use strict";
    a("51d2");
  }, 9840: function(e, t, a) {
    "use strict";
    a("f24e");
  }, "9b89": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".color-ruler{display:flex;flex-direction:row;justify-content:space-between;border-radius:29px;border:2px solid #545454;border-right:1px solid #545454;border-left:1px #545454;height:30px;width:300px;background:#e76f51;background:linear-gradient(90deg,#e76f51,#f4a261 33%,#e9c46a 66%,#2a9d8f)}.color-ruler .round{content:\"\";display:table-cell;transform:translateY(-2px);line-height:28px;font-size:12px;border-radius:20px;text-align:center;vertical-align:middle;height:29px;width:29px;background-color:#fff}", ""]), e.exports = t;
  }, "9c85": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".v-tab--active{background-color:#425b66}.v-tabs-slider-wrapper{border-bottom:6px solid #2a9d8f}", ""]), e.exports = t;
  }, "9f37": function(e, t, a) {
    var r = a("9b89");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("51fde836", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, a4da: function(e, t, a) {
    var r = a("086a");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1f512677", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, ab6c: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".screen-title[data-v-186c5c75]{font-size:40px;margin-top:6px;font-weight:400}.fade-enter-active[data-v-186c5c75],.fade-leave-active[data-v-186c5c75]{transition:opacity .5s}.fade-enter[data-v-186c5c75],.fade-leave-to[data-v-186c5c75]{opacity:0}.side-bar[data-v-186c5c75]{min-width:64px}.custom-container[data-v-186c5c75]{margin-top:10px;min-width:100%!important;padding:0!important;padding-left:75px!important;max-width:100%!important}.main-application[data-v-186c5c75]{position:relative}.top-toolbar[data-v-186c5c75]{min-height:64px}.activeNavigationElement[data-v-186c5c75]{border-left:3px solid #fff}", ""]), e.exports = t;
  }, abd1: function(e, t, a) {
    e.exports = a.p + "img/Globe_icon.93b6c512.svg";
  }, ae05: function(e, t, a) {
    var r = a("dc16");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("a8f7401c", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b112: function(e, t, a) {
    "use strict";
    a("d4a6");
  }, b12b: function(e, t, a) {
    var r = a("4ec8");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("40425ac4", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b2de: function(e, t, a) {
    var r = a("ab6c");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("87d97340", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b7bb: function(e, t, a) {
    var r = a("d755");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("4ff8efeb", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b95c: function(e, t, a) {
    var r = a("7e9e");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("a1c03d08", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b9cc: function(e, t, a) {
    "use strict";
    a("7501");
  }, b9f4: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".screen-title[data-v-07435878]{font-size:40px;margin-top:6px;font-weight:400}.slide-fade-enter-active[data-v-07435878]{transition:all .3s ease}.slide-fade-leave-active[data-v-07435878]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-07435878],.slide-fade-leave-to[data-v-07435878]{transform:translateX(10px);opacity:0}.side-bar[data-v-07435878]{min-width:64px}.custom-container[data-v-07435878]{margin-top:10px;min-width:100%!important;padding:0!important;padding-left:75px!important;max-width:100%!important}.main-application[data-v-07435878]{position:relative}.top-toolbar[data-v-07435878]{min-height:64px}.activeNavigationElement[data-v-07435878]{border-left:3px solid #fff}", ""]), e.exports = t;
  }, bccb: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, c00d: function(e, t, a) {
    var r = a("bccb");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1b3df0aa", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, c631: function(e, t, a) {
    "use strict";
    a("fb8a");
  }, c773: function(e, t, a) {
    var r = a("1951");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("26e5aa3c", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, ca8a: function(e, t, a) {
    "use strict";
    a("a4da");
  }, cb43: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#notInstalledDemter{min-width:100%;min-height:100%;position:absolute;top:0;right:0;border-radius:10px;background-color:rgba(0,0,0,.7)}#notInstalledDemter #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, cd49: function(e, t, a) {
    "use strict";
    a.r(t);
    a("d3b7"), a("ac1f"), a("5319"), a("96cf");
    var r = a("1da1"), n = (a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("a026")), i = a("2f62"), o = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", { attrs: { id: "app" } }, [a("router-view")], 1);
      }, s = [], c = { name: "Default" }, l = c, u = a("2877"), d = Object(u["a"])(l, o, s, !1, null, "6ccdcc53", null),
      p = d.exports, h = function() {
        var e = this, t = e.$createElement, r = e._self._c || t;
        return r("v-app", { staticClass: "main-application" }, [r("v-container", {
          staticClass: "pa-0",
          attrs: { fluid: "", "fill-height": "" },
        }, [r("v-row", { staticStyle: { height: "100%" } }, [r("v-col", {
          attrs: {
            md: "6",
            id: "color-background",
          },
        }, [r("v-container", {
          attrs: {
            bg: "",
            "fill-height": "",
            "grid-list-md": "",
            "text-xs-center": "",
          },
        }, [r("img", { attrs: { src: a("abd1"), id: "background-logo" } }), r("v-layout", {
          attrs: {
            row: "",
            wrap: "",
            "align-center": "",
            "justify-center": "",
          },
        }, [r("v-flex", {
          staticStyle: {
            "margin-left": "20%",
            "z-index": "10",
          },
        }, [r("h2", { staticClass: "white--text text-h1" }, [e._v("Atlas")]), r("h2", { staticClass: "white--text text-h3" }, [e._v("NASD Toolkit 2021")]), r("h2", { staticClass: "white--text text-subtitle-1" }, [r("i", [e._v("Version 2.5.0")])])])], 1)], 1)], 1), r("v-col", { attrs: { md: "6" } }, [r("v-container", {
          attrs: {
            bg: "",
            "fill-height": "",
            "grid-list-md": "",
            "text-xs-center": "",
          },
        }, [r("v-layout", {
          attrs: {
            row: "",
            wrap: "",
            "align-center": "",
            "justify-center": "",
          },
        }, [e.onlineDatabase ? r("v-card", {
          ref: "form",
          staticClass: "mx-auto",
          attrs: { "min-width": "500px" },
        }, [r("v-card-text", [r("v-text-field", {
          ref: "neo4jUser",
          attrs: { label: "Username", placeholder: "Neo4j user", required: "" },
          model: {
            value: e.credentials.user, callback: function(t) {
              e.$set(e.credentials, "user", t);
            }, expression: "credentials.user",
          },
        }), r("v-text-field", {
          attrs: {
            "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off",
            type: e.show1 ? "text" : "password",
            label: "Password",
            name: "input-10-1",
          }, on: {
            "click:append": function(t) {
              e.show1 = !e.show1;
            },
          }, model: {
            value: e.credentials.password, callback: function(t) {
              e.$set(e.credentials, "password", t);
            }, expression: "credentials.password",
          },
        }), r("p", [e._v("Database bolt URI : " + e._s(e.uri))]), e.failedLogin ? r("div", {
          staticClass: "red darken-2 text-center pa-2",
          attrs: { width: "100%" },
        }, [r("span", { staticClass: "white--text" }, [e._v("Wrong credentials / URI. Contact your CAST Imaging administrator for more information.")])]) : e._e(), r("v-divider")], 1), r("v-card-actions", [r("v-spacer"), r("v-btn", {
          attrs: {
            color: "primary",
            text: "",
          }, on: { click: e.save },
        }, [e._v(" Login ")])], 1)], 1) : e._e(), e.onlineDatabase ? e._e() : r("v-card", {
          staticClass: "mx-auto",
          attrs: { "min-width": "500px", "min-height": "250px" },
        }, [r("v-card-text", {
          staticClass: "d-flex flex-column",
          staticStyle: { "margin-top": "20px" },
        }, [r("v-icon", {
          staticClass: "my-4",
          attrs: { size: "80", color: "red" },
        }, [e._v("mdi-database-remove")]), r("span", [e._v(" Oops, it seems that the database at "), r("i", { attrs: { color: "#052C38" } }, [e._v(e._s(e.uri))]), e._v(" is unreachable."), r("br"), e._v(" Retry in few seconds or check your neo4j service. ")]), r("v-btn", {
          staticClass: "my-4",
          attrs: { text: "" },
          on: { click: e.simpleHealthCheck },
        }, [r("v-icon", {
          attrs: {
            "x-large": "",
            color: "#042732",
          },
        }, [e._v("mdi-refresh")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
      }, v = [], m = a("60a3"), f = a("bee2"), g = a("d4ec"), b = a("2b27"), x = a.n(b);
    n["a"].use(x.a), n["a"].$cookies.config("30d", "/");
    var w, k = "olympus", y = function e() {
      Object(g["a"])(this, e), this.refreshRate = 500, this.configurationName = "Configuration_1", this.neo4jUri = "neo4j://localhost:7687", this.token = {};
    }, _ = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "setAuthToken", value: function(e) {
          w.token = e, console.log("Token was set");
        },
      }, {
        key: "getAuthToken", value: function() {
          return w.token;
        },
      }, {
        key: "getProperties", value: function() {
          var e = sessionStorage.getItem(k);
          return null != e ? JSON.parse(e) : new y;
        },
      }, {
        key: "saveProperties", value: function(e) {
          sessionStorage.setItem(k, JSON.stringify(e));
        },
      }, {
        key: "deleteProperties", value: function() {
          sessionStorage.clear();
        },
      }]), e;
    }(), C = a("4398"), A = a.n(C), R = function() {
      function e() {
        Object(g["a"])(this, e);
        var t = _.getProperties();
        this.uri = t.neo4jUri;
        var a = t.token;
        try {
          this.driver = A.a.driver(this.uri, a);
        } catch (r) {
          throw new Error("Cannot connect to the remote Neo4j database o ".concat(this.uri));
        }
      }

      return Object(f["a"])(e, [{
        key: "execute", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = this.driver.session(), e.prev = 1, e.next = 4, a.run(t);
                case 4:
                  return r = e.sent, e.abrupt("return", r);
                case 6:
                  return e.prev = 6, a.close(), e.finish(6);
                case 9:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, , 6, 9]]);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "executeWithParameters", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = this.driver.session(), e.prev = 1, e.next = 4, r.run(t, a);
                case 4:
                  return n = e.sent, e.abrupt("return", n);
                case 6:
                  return e.prev = 6, r.close(), e.finish(6);
                case 9:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, , 6, 9]]);
          })));

          function t(t, a) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "testConnection", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", this.driver.verifyConnectivity());
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }], [{
        key: "getInstance", value: function() {
          return null == e.INSTANCE && (e.INSTANCE = new e), e.INSTANCE;
        },
      }, {
        key: "connect", value: function() {
          try {
            var t = _.getProperties();
            if (void 0 == t.token) throw console.log("You must log with credentials"), new Error("No credentials were provided for the connection. Aborting...");
            return e.INSTANCE = new e, !0;
          } catch (a) {
            return !1;
          }
        },
      }, {
        key: "connectWithCredentials", value: function(t) {
          try {
            var a = _.getProperties(), r = A.a.auth.basic(t.user, t.password);
            return a.token = r, _.saveProperties(a), e.INSTANCE = new e, !0;
          } catch (n) {
            return !1;
          }
        },
      }]), e;
    }(), S = a("bc3a"), I = a.n(S), T = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getUrl", value: function() {
          return "http://localhost:3000";
        },
      }]), e;
    }();

    function E(e) {
      return 200 == e || 304 == e;
    }

    var L = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getPythiaURL", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", String(n.data));
                case 10:
                  throw new Error("Failed to retrieve the URI of Pythia. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setPythiaURL", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, I.a.post(r, { url: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", String(i.data));
                case 10:
                  throw new Error("Failed to set the URL of Pythia. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setPythiaToken", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, I.a.post(r, { token: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to set the Token of Pythia. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getPythiaTokenPresence", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/pythia/token", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Boolean(n.data));
                case 10:
                  throw new Error("Failed to retrieve the Token presence of Pythia. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getArtemisWorkspace", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/artemis/workspace", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", String(n.data));
                case 10:
                  throw new Error("Failed to retrieve the workspace of Artemis. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setArtemisWorkspace", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/artemis/workspace", t.prev = 1, t.next = 4, I.a.post(r, { workspace: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", String(i.data));
                case 10:
                  throw new Error("Failed to set the workspace of Artemis. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDemeterWorkspace", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/demeter/workspace", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", String(n.data));
                case 10:
                  throw new Error("Failed to retrieve the workspace of Demeter. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setInternalMode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/artemis/internalMode", t.prev = 1, t.next = 4, I.a.post(r, { value: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to set the internalMode of Artemis. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getInternalMode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/artemis/internalMode", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Boolean(n.data));
                case 10:
                  throw new Error("Failed to retrieve the internalMode of Artemis. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setDemeterWorkspace", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/demeter/workspace", t.prev = 1, t.next = 4, I.a.post(r, { workspace: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", String(i.data));
                case 10:
                  throw new Error("Failed to set the workspace of Demeter. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    L.API_BASE_URL = T.getUrl();
    var V = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "healthCheck", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/utils/healthCheck", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Boolean(n.data));
                case 10:
                  return t.abrupt("return", !1);
                case 11:
                  t.next = 16;
                  break;
                case 13:
                  return t.prev = 13, t.t0 = t["catch"](1), t.abrupt("return", !1);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    V.neo4jal = R.getInstance(), V.API_BASE_URL = T.getUrl();
    var F = m["a"].extend({
        name: "Login", data: function() {
          return {
            failedLogin: !1,
            showLogin: !0,
            show1: !1,
            uri: _.getProperties().neo4jUri,
            credentials: {},
            onlineDatabase: !0,
            healthcheckGoingon: !1,
            switchInternalUse: !1,
          };
        }, mounted: function() {
          this.getInternalMode(), this.simpleHealthCheck();
        }, methods: {
          save: function() {
            var e = this, t = _.getProperties();
            t.neo4jUri = this.uri, _.saveProperties(t), R.connectWithCredentials(this.credentials);
            var a = R.getInstance();
            a.testConnection().then((function(t) {
              e.$router.replace("/atlas/"), window.location.reload();
            })).catch((function(t) {
              console.error("Cannot connect to Neo4j", t), e.failedLogin = !0, e.simpleHealthCheck();
            }));
          }, setInternalMode: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, L.setInternalMode(!e.switchInternalUse).then((function(e) {
                    })).catch((function(e) {
                      console.error("Failed to set internal mode to ", e);
                    }));
                  case 2:
                  case"end":
                    return t.stop();
                }
              }), t);
            })))();
          }, getInternalMode: function() {
            var e = this;
            L.getInternalMode().then((function(t) {
              e.switchInternalUse = t;
            })).catch((function(t) {
              console.log("Failed to change the value of internal mode.", t), e.switchInternalUse = !1;
            }));
          }, simpleHealthCheck: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, !e.healthcheckGoingon) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    return e.healthcheckGoingon = !0, t.next = 6, V.healthCheck();
                  case 6:
                    e.onlineDatabase = t.sent, e.healthcheckGoingon = !1, t.next = 14;
                    break;
                  case 10:
                    t.prev = 10, t.t0 = t["catch"](0), e.onlineDatabase = !1, setTimeout(e.simpleHealthCheck, 3e3);
                  case 14:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[0, 10]]);
            })))();
          },
        },
      }), O = F, j = (a("d6db"), a("6544")), M = a.n(j), D = a("7496"), P = a("8336"), N = a("b0af"), B = a("99d9"),
      U = a("62ad"), G = a("a523"), $ = a("ce7e"), q = a("0e8f"), H = a("132d"), W = a("a722"), Q = a("0fd9"),
      z = a("2fa4"), Y = a("8654"), J = Object(u["a"])(O, h, v, !1, null, null, null), X = J.exports;
    M()(J, {
      VApp: D["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VFlex: q["a"],
      VIcon: H["a"],
      VLayout: W["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var Z, K = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-app", { staticClass: "main-application" }, [a("v-container", {
        staticClass: "login-container mx-auto",
        attrs: { "fill-height": "" },
      }, [a("v-card", {
        ref: "form",
        staticClass: "mx-auto",
        attrs: { "min-width": "500px" },
      }, [a("v-card-title", { staticClass: "mt-3 mb-8 d-flex flex-column justify-center text-center" }, [a("h2", [a("v-icon", {
        staticClass: "pr-2",
        attrs: { large: "" },
      }, [e._v("mdi-file-key-outline")]), e._v("Enter a license ")], 1), a("p", { staticClass: "subtitle-2" }, [e._v("Ping HJO in case you don't have a license")])]), a("v-card-text", [a("v-container", [a("v-row", [a("p", [a("i", [e._v("Enter a license of the type ATLAS_LICENSE$1234567:SIGNATURE ")])])]), a("v-row", [a("v-textarea", {
        attrs: {
          outlined: "",
          name: "input-7-4",
          label: "License",
        }, model: {
          value: e.license, callback: function(t) {
            e.license = t;
          }, expression: "license",
        },
      })], 1), e.errorMessage ? a("v-row", { staticClass: "red--text" }, [e._v(" " + e._s(e.errorMessage) + " ")]) : e._e()], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "primary",
          text: "",
          loading: e.loadingLicense,
        }, on: { click: e.save },
      }, [e._v(" Apply new license ")])], 1)], 1)], 1)], 1);
    }, ee = [];
    (function(e) {
      e[e["VALID"] = 0] = "VALID", e[e["NOT_VALID"] = 1] = "NOT_VALID";
    })(Z || (Z = {}));
    var te = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getLicense", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/login/license/status", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", { license: String(n.data), status: Z.VALID });
                case 10:
                  return console.warn("Failed to retrieve the license. Status (".concat(r.status, ")")), t.abrupt("return", {
                    license: String(r.data),
                    status: Z.NOT_VALID,
                  });
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  return t.prev = 14, t.t0 = t["catch"](1), console.warn("Failed to retrieve the license.", t.t0), t.abrupt("return", {
                    license: "NO LICENSE",
                    status: Z.NOT_VALID,
                  });
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "applyLicense", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/login/license", t.prev = 1, n = {}, n.license = a, t.next = 6, I.a.post(r, n);
                case 6:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  return i.data, t.abrupt("return", { license: String(a), status: Z.VALID });
                case 12:
                  return console.warn("Failed to apply a new license. Status (".concat(i.status, ")")), t.abrupt("return", {
                    license: String(i.data),
                    status: Z.NOT_VALID,
                  });
                case 14:
                  t.next = 20;
                  break;
                case 16:
                  return t.prev = 16, t.t0 = t["catch"](1), console.warn("Failed to apply a new  license.", t.t0), t.abrupt("return", {
                    license: String(a),
                    status: Z.NOT_VALID,
                  });
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    te.API_BASE_URL = T.getUrl();
    var ae = m["a"].extend({
      name: "License", data: function() {
        return { license: "", loadingLicense: !1, errorMessage: "" };
      }, methods: {
        save: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingLicense = !0, t.next = 4, te.applyLicense(e.license);
                case 4:
                  if (a = t.sent, a.status != Z.NOT_VALID) {
                    t.next = 9;
                    break;
                  }
                  e.errorMessage = "The license entered is not valid.", t.next = 12;
                  break;
                case 9:
                  return t.next = 11, e.$router.replace("/atlas/");
                case 11:
                  window.location.reload();
                case 12:
                  t.next = 17;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](0), e.errorMessage = t.t0;
                case 17:
                  return t.prev = 17, e.loadingLicense = !1, t.finish(17);
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 14, 17, 20]]);
          })))();
        },
      },
    }), re = ae, ne = (a("0e5e"), a("a844")), ie = Object(u["a"])(re, K, ee, !1, null, null, null), oe = ie.exports;
    M()(ie, {
      VApp: D["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextarea: ne["a"],
    });
    var se = a("8c4f"), ce = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("div", { staticClass: "main-application" }, [a("v-app", [a("v-navigation-drawer", {
        staticClass: "side-bar",
        attrs: { color: "deepblue", dark: "", "expand-on-hover": "", fixed: "", permanent: "", shaped: "" },
        scopedSlots: e._u([{
          key: "append", fn: function() {
            return [a("div", { staticClass: "pa-2" }, [a("v-list", [a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [a("v-list-item", e._g(e._b({
                    attrs: { link: "" }, on: {
                      click: function(t) {
                        return e.simpleHealthCheck();
                      },
                    },
                  }, "v-list-item", n, !1), r && !e.onlineDatabase), [a("v-list-item-icon", [e.onlineDatabase ? a("v-icon", { attrs: { color: "green" } }, [e._v("mdi-database-check ")]) : e._e(), e.onlineDatabase ? e._e() : a("v-icon", { attrs: { color: "red" } }, [e._v("mdi-database-remove ")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Database " + e._s(e.onlineDatabase ? "online" : "offline") + " ")])], 1)], 1)];
                },
              }]),
            }, [a("span", [e._v("Lost connection to the database")])])], 1)], 1)];
          }, proxy: !0,
        }]),
      }, [a("v-list", [a("v-list-item", {
        staticClass: "ml-1",
        attrs: { link: "" },
      }, [a("v-list-item-content", { staticClass: "mx-auto" }, [a("v-list-item-title", { staticClass: "title" }, [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "#438FDA" },
      }, [e._v("mdi-globe-model")]), e._v(" Atlas ")], 1), a("v-list-item-subtitle", [e._v("Intelligence for CAST Imaging ")])], 1)], 1)], 1), a("v-divider"), a("v-list", {
        attrs: {
          dense: "",
          nav: "",
        },
      }, [a("v-list-item-group", {
        attrs: { "active-class": "activeNavigationElement", mandatory: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t, r) {
        return a("v-list-item", {
          key: r,
          attrs: { link: "" },
        }, [a("v-list-item-icon", [a("v-icon", {
          staticClass: "pl-1",
          attrs: { color: "#ffffff" },
        }, [e._v(e._s(t.icon) + " ")])], 1), a("v-list-item-title", {
          staticClass: "text-uppercase",
          attrs: { color: "#ffffff" },
        }, [e._v(e._s(t.name) + " ")])], 1);
      })), 1)], 1)], 1), a("v-row", { staticStyle: { "max-height": "80px" } }, [a("v-toolbar", {
        staticClass: "ml-15 text--white top-toolbar",
        attrs: { color: "charcoal", dark: "", height: "80px", "min-width": "50px" },
      }, [a("v-toolbar-title", { staticClass: "ml-8 screen-title" }), a("v-toolbar-title", { staticClass: "mt-2" }, [e._v("Application selection :")]), a("v-autocomplete", {
        staticClass: "mx-4 mt-2",
        attrs: {
          items: e.applicationList,
          loading: e.loadingApplication,
          "cache-items": "",
          flat: "",
          "hide-details": "",
          "hide-no-data": "",
          label: "Pick an application",
          "solo-inverted": "",
        },
        model: {
          value: e.applicationName, callback: function(t) {
            e.applicationName = t;
          }, expression: "applicationName",
        },
      }), a("v-spacer"), a("span", { staticClass: "mt-2 d-flex flex-row" }, [a("v-btn", {
        attrs: { text: "" },
        on: {
          click: function(t) {
            return e.goTo("administration", !0);
          },
        },
      }, [a("p", { staticClass: "lighten-3 mr-2 pt-4" }, [e._v("Administration")]), a("v-icon", [e._v("mdi-text")])], 1), a("v-divider", {
        staticClass: "mx-2",
        attrs: { dark: "", vertical: "" },
      }), a("v-btn", {
        attrs: { text: "" }, on: {
          click: function(t) {
            return e.logout();
          },
        },
      }, [a("p", { staticClass: "lighten-3 mr-2 pt-4" }, [e._v("Logout")]), a("v-icon", [e._v("mdi-exit-to-app")])], 1)], 1)], 1)], 1), a("v-row", { attrs: { "no-gutters": "" } }, [a("router-view", {
        staticStyle: { "margin-left": "50px" },
        scopedSlots: e._u([{
          key: "default", fn: function(e) {
            var t = e.Component;
            return [a("transition", { attrs: { name: "slide-fade" } }, [a(t, { tag: "component" })], 1)];
          },
        }]),
      })], 1), a("FlashMessage")], 1)], 1);
    }, le = [], ue = (a("1276"), a("99af"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getListApplications", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/imaging/applications/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve application list. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve application list."), t.t0);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getApplicationInsights", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/applications/insights/" + a, t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to retrieve insights for application with name ".concat(a, "."));
                case 11:
                  t.next = 16;
                  break;
                case 13:
                  t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve the insights."), t.t0);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getTechnologies", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/applications/technologies/" + a, t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error("Failed to retrieve technologies in application with name ".concat(a, "."));
                case 12:
                  t.next = 17;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve the technologies."), t.t0);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getLevelsByDepth", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/applications/levels/".concat(a, "/").concat(r, "/name"), t.prev = 1, t.next = 4, I.a.get(n);
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error("Failed to retrieve levels".concat(r, " in application with name ").concat(a, "."));
                case 12:
                  t.next = 17;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve levels").concat(r, " in application with name ").concat(a, "."), t.t0);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    ue.API_BASE_URL = T.getUrl(), ue.neo4jal = R.getInstance();
    var de, pe = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { staticClass: "bottom-right" }, [a("v-row", { staticClass: "w-100 d-flex flex-column align-end pa-8" }, e._l(e.displayedNotification, (function(t, r) {
        return a("v-card", {
          key: r,
          staticClass: "ma-1",
          attrs: { loading: "", width: "20vw", color: e.getFlashColor(t.type), dark: "" },
        }, [a("template", { slot: "progress" }, [a("v-progress-linear", {
          staticClass: "progress-card",
          attrs: { color: "white", height: "5", value: t.length },
        })], 1), a("v-card-title", { staticClass: "pa-2" }, [e._v(e._s(t.title) + " "), a("v-spacer"), a("v-btn", {
          attrs: {
            text: "",
            dark: "",
            "x-small": "",
          }, on: {
            click: function(t) {
              return e.close(r);
            },
          },
        }, [a("v-icon", [e._v("mdi-close-thick")])], 1)], 1), a("v-card-text", {}, [e._v(e._s(t.body))])], 2);
      })), 1)], 1);
    }, he = [];
    a("a434");
    n["a"].use(i["a"]), function(e) {
      e[e["INFO"] = 0] = "INFO", e[e["SUCCESS"] = 1] = "SUCCESS", e[e["ERROR"] = 2] = "ERROR", e[e["NEUTRAL"] = 3] = "NEUTRAL";
    }(de || (de = {}));
    var ve = new i["a"].Store({
      state: { notifications: [] }, getters: {
        pop: function(e) {
          return e.notifications.pop();
        },
      }, mutations: {
        add: function(e, t) {
          e.notifications.push(t);
        },
      },
    }), me = ve;
    a("25f0");

    function fe() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0, a = "x" == e ? t : 3 & t | 8;
        return a.toString(16);
      }));
    }

    var ge = n["a"].extend({
        name: "FlashMessage", computed: {
          count: function() {
            return me.state.notifications.length;
          },
        }, methods: {
          removeByUUID: function(e) {
            for (var t = 0; t < this.displayedNotification.length; t++) if (this.displayedNotification[t].id == e) {
              this.displayedNotification.splice(t, 1);
              break;
            }
          }, getFlashColor: function(e) {
            switch (e) {
              case de.INFO:
                return "blue";
              case de.SUCCESS:
                return "green";
              case de.ERROR:
                return "red";
              case de.NEUTRAL:
                return "black";
              default:
                return "black";
            }
          }, close: function(e) {
            this.displayedNotification.splice(e, 1);
          },
        }, data: function() {
          return { displayedNotification: [] };
        }, watch: {
          count: function(e, t) {
            var a, r = this, n = me.getters.pop;
            n.id = fe(), n.length = 0, n.createdOn = Date.now(), n.duration || (n.duration = 5e3), n.createdOn && n.duration && (a = setInterval((function() {
              var e = n.createdOn, t = e + n.duration;
              n.length = (Date.now() - e) / (t - e) * 100, n.length >= 100 && (r.removeByUUID(n.id), clearInterval(a));
            }), 500)), this.displayedNotification.push(n);
          },
        },
      }), be = ge, xe = (a("934b"), a("8e36")), we = Object(u["a"])(be, pe, he, !1, null, "3738dea4", null),
      ke = we.exports;
    M()(we, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var ye = n["a"].extend({
        name: "Application", components: { FlashMessage: ke }, mounted: function() {
          this.getApplicationList(), this.healthcheck();
        }, computed: {
          getCurrentView: function() {
            return this.$store.state.currentView;
          },
        }, data: function() {
          return {
            tab: 0,
            currentScreen: "Reporting",
            items: [{ name: "Home", screen: "", icon: "mdi-home" }, {
              name: "Reporting",
              screen: "reports",
              icon: "mdi-file",
            }, { name: "Frameworks & Breakdown", screen: "analysis", icon: "mdi-magnify" }, {
              name: "Tags",
              screen: "tags",
              icon: "mdi-hexagon-multiple",
            }, { name: "Imaging tuning", screen: "tuning", icon: "mdi-graphql" }, {
              name: "Highlight Injection",
              screen: "highlight",
              icon: "mdi-fire",
            }, { name: "AIP Injection", screen: "aip", icon: "mdi-chart-areaspline" }],
            loadingApplication: !0,
            applicationName: "",
            applicationList: [],
            onlineDatabase: !1,
          };
        }, methods: {
          changeApplication: function(e) {
            this.applicationName = e, this.$store.state.applicationName = e;
          }, getApplicationList: function() {
            var e = this;
            this.loadingApplication = !0, ue.getListApplications().then((function(t) {
              e.applicationList = t, 0 != t.length ? e.changeApplication(t[0]) : e.applicationName = "No Application found", e.loadingApplication = !1;
            }));
          }, simpleHealthCheck: function() {
            var e = this;
            V.healthCheck().then((function(t) {
              e.onlineDatabase = t;
            })).catch((function(t) {
              e.onlineDatabase = !1;
            }));
          }, healthcheck: function() {
            var e = this;
            V.healthCheck().then((function(t) {
              e.onlineDatabase = t;
            })).catch((function(t) {
              e.onlineDatabase = !1;
            })).finally((function() {
              setTimeout(function() {
                this.healthcheck();
              }.bind(e), 1e4);
            }));
          }, goTo: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t ? this.$router.replace("/" + e) : this.$router.replace("/atlas/" + e);
          }, changeView: function(e) {
            this.$store.state.currentView = e, this.currentScreen = e;
          }, updateViewTab: function(e) {
            for (var t = 0; t < this.items.length; t++) this.items[t].screen === e && (this.tab = t);
          }, logout: function() {
            _.deleteProperties(), document.location.reload();
          },
        }, watch: {
          $route: function(e, t) {
            var a = e.path.split("/"), r = a[a.length - 1];
            this.updateViewTab(r);
            var n = e.path.split("/").length, i = t.path.split("/").length;
            this.transitionName = n < i ? "slide-right" : "slide-left";
          }, applicationName: function() {
            this.changeApplication(this.applicationName);
          }, tab: function() {
            this.$router.replace("/atlas/" + this.items[this.tab].screen);
          }, getCurrentView: function(e) {
            for (var t = 0; t < this.items.length; t++) this.items[t].screen === e && (this.tab = t);
            console.log("Not found ".concat(e));
          },
        },
      }), _e = ye, Ce = (a("9840"), a("88e2"), a("c6a6")), Ae = a("8860"), Re = a("da13"), Se = a("5d23"), Ie = a("1baa"),
      Te = a("34c3"), Ee = a("f774"), Le = a("71d9"), Ve = a("2a7f"), Fe = a("3a2f"),
      Oe = Object(u["a"])(_e, ce, le, !1, null, "07435878", null), je = Oe.exports;
    M()(Oe, {
      VApp: D["a"],
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VList: Ae["a"],
      VListItem: Re["a"],
      VListItemContent: Se["a"],
      VListItemGroup: Ie["a"],
      VListItemIcon: Te["a"],
      VListItemSubtitle: Se["b"],
      VListItemTitle: Se["c"],
      VNavigationDrawer: Ee["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
      VTooltip: Fe["a"],
    });
    var Me = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", {
        staticClass: "pa-10",
        attrs: { fluid: "" },
      }, [a("v-row", [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h1", { staticClass: "text-h4 mb-4" }, [e._v(" Welcome back Consultant #" + e._s(e.consultantId) + ", start to work on " + e._s(e.application) + " ")])]), a("v-card-subtitle"), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-col", { attrs: { md: "4" } }, [a("v-row", { staticStyle: { width: "100%" } }, [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Quick application overview : ")])]), a("v-row", {
        staticClass: "mx-4 w-100",
        staticStyle: { width: "100%" },
      }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [e._v("Number of levels: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("strong", [e._v(e._s(e.insights && null != e.insights.levels5 ? e.insights.levels5.length : 0))])])], 1), a("v-row", {
        staticClass: "mx-4",
        staticStyle: { width: "100%" },
      }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [e._v("Number of modules: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("strong", [e._v(e._s(e.insights && null != e.insights.modules ? e.insights.modules.length : 0))])])], 1), a("v-row", {
        staticClass: "mx-4",
        staticStyle: { width: "100%" },
      }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [e._v("Number of architectures: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("strong", [e._v(e._s(e.insights && null != e.insights.architectures ? e.insights.architectures.length : 0))])])], 1)], 1), a("v-col", { attrs: { md: "4" } }, [a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Technological Stack: ")])]), a("v-row", [a("v-chip-group", {
        attrs: {
          "active-class": "primary--text",
          column: "",
        },
      }, e._l(e.technologies, (function(t) {
        return a("v-chip", { key: t }, [e._v(" " + e._s(t) + " ")]);
      })), 1)], 1)], 1), a("v-col", { attrs: { md: "4" } }, [a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Statistics: ")]), a("v-spacer"), a("StatisticsHelper")], 1), a("v-row", [a("StatisticsColumn")], 1)], 1)], 1)], 1)], 1), a("v-card-actions")], 1)], 1), a("v-row", { staticClass: "mt-10" }, [a("ActionsTile")], 1), a("v-row", { staticClass: "mt-10" }, [a("CategoriesHelper")], 1)], 1);
    }, De = [], Pe = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "display-1 text--primary" }, [e._v(" Actions on the application "), a("v-spacer"), a("v-btn", {
        staticClass: "pb-5",
        attrs: { icon: "", color: "green", "x-large": "" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-text", [a("v-icon", {
        staticClass: "mr-3",
        attrs: { color: "red", large: "" },
      }, [e._v("mdi-information-outline")]), a("i", { staticClass: "text-h5 mt-3" }, [e._v("Make sure the Level Agent is up and running.")]), a("br"), a("a", {
        staticClass: "text-subtitle-1 ml-10",
        attrs: { href: "/administration/automation" },
      }, [e._v("Go to Agent Section")])], 1), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", e._l(e.actionList, (function(t) {
        return a("v-card", {
          key: t.id,
          staticClass: "ma-2",
          attrs: { color: t.color, width: "330" },
        }, [a("v-card-subtitle", [a("p", { staticStyle: { color: "#ededed" } }, [e._v(e._s(t.categories))])]), a("v-card-text", { staticClass: "d-flex flex-row justify-space-between" }, [a("div", { staticClass: "d-flex flex-column white--text" }, [a("h3", { attrs: { claslevels5s: "text-h5" } }, [e._v(e._s(t.title))]), a("p", [e._v(e._s(t.description))])]), a("div", {
          staticClass: "white--text mt-3",
          staticStyle: { height: "100%" },
        }, [a("v-btn", {
          staticClass: "mx-4 my-auto",
          attrs: { fab: "", dark: "", small: "", loading: e.getLoading(t.id) },
          on: {
            click: function(a) {
              return e.executeAction(t);
            },
          },
        }, [a("v-icon", { staticClass: "text--white" }, [e._v(" mdi-send ")])], 1)], 1)])], 1);
      })), 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1);
    }, Ne = [], Be = (a("4ec9"), a("3ca3"), a("ddb0"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getActionList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/actions/find/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 13;
                  break;
                case 11:
                  throw console.warn("Failed to retrieve the list of Actions. Status (".concat(r.status, ")")), new Error(r.data.error);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to retrieve the list of actions.", t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "executeAction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/atlas/actions/execute", t.prev = 1, i = {
                    id: a,
                    application: r,
                  }, t.next = 5, I.a.post(n, i, { responseType: "arraybuffer" });
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  throw console.warn("Failed to retrieve the execute the action. Status (".concat(o.status, ")")), new Error(o.data.error);
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to execute the action.", t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    Be.API_BASE_URL = T.getUrl();
    var Ue = n["a"].extend({
      name: "ActionsTile", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      }, data: function() {
        return {
          loadActions: !1,
          actionList: [],
          application: "",
          snackbarInfo: !1,
          textSnackBar: "",
          loadingActions: new Map,
        };
      }, methods: {
        getActions: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadActions = !0, t.prev = 1, t.next = 4, Be.getActionList();
                case 4:
                  e.actionList = t.sent, t.next = 10;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](1), console.error("Failed to retrieve the list of actions.", t.t0);
                case 10:
                  return t.prev = 10, e.loadActions = !1, t.finish(10);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 7, 10, 13]]);
          })))();
        }, executeAction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  if ("" != t.application) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt("return");
                case 2:
                  if (!t.loadingActions.has(e.id)) {
                    a.next = 4;
                    break;
                  }
                  return a.abrupt("return");
                case 4:
                  return t.loadingActions.set(e.id, !0), a.prev = 5, a.next = 8, Be.executeAction(e.id, t.application);
                case 8:
                  t.textSnackBar = "".concat(e.title, ": Done."), t.snackbarInfo = !0, a.next = 17;
                  break;
                case 12:
                  a.prev = 12, a.t0 = a["catch"](5), console.error("Failed to execute the action.", a.t0), t.textSnackBar = "Failed to execute action. ".concat(a.t0), t.snackbarInfo = !0;
                case 17:
                  return a.prev = 17, t.loadingActions.delete(e.id), a.finish(17);
                case 20:
                case"end":
                  return a.stop();
              }
            }), a, null, [[5, 12, 17, 20]]);
          })))();
        }, getLoading: function(e) {
          return this.loadingActions.has(e);
        }, refresh: function() {
          this.getActions();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), Ge = Ue, $e = a("2db4"), qe = Object(u["a"])(Ge, Pe, Ne, !1, null, null, null), He = qe.exports;
    M()(qe, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
    });
    var We = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { width: "500" }, scopedSlots: e._u([{
          key: "activator", fn: function(t) {
            var r = t.on, n = t.attrs;
            return [a("v-btn", e._g(e._b({
              staticClass: "d-flex flex-row",
              attrs: { text: "", color: "red lighten-2", dark: "" },
            }, "v-btn", n, !1), r), [a("v-icon", { attrs: { color: "persianGrey" } }, [e._v(" mdi-help-circle ")]), a("i", { staticClass: "mt-1" }, [e._v(" Help ")])], 1)];
          },
        }]), model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "text-h5 white--text charcoal lighten-2" }, [e._v(" Help on statistics ")]), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticClass: "mx-2 mt-2 d-flex flex-column" }, [a("h5", { staticClass: "text-h5 black--text" }, [e._v("Statistics on the application")]), a("p", [e._v(" Quickly discover if the configuration of the application's analysis is correct with some statistics on it ")]), a("h3", [e._v("Color Schema :")]), a("p", [e._v(" The statistical tiles below change color according to the score they measure. A green tile is a sign that the statistics have a \"high percentage\" of compliance."), a("br"), e._v(" They they follow the following color schema : ")]), a("div", { staticClass: "color-ruler mb-6" }, [a("div", { staticClass: "round" }, [e._v("0")]), a("div", { staticClass: "round" }, [e._v("33")]), a("div", { staticClass: "round" }, [e._v("66")]), a("div", { staticClass: "round" }, [e._v("100")])]), a("p", [a("i", [e._v("Disclaimer: It can happen that even with a perfect configuration, the statistics show bad scores. Further investigation is needed to understand where these results come from."), a("br"), e._v(" This can be done with the action tiles, below this section, to investigate directly in CAST Imaging.")])])])], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "green",
          text: "",
        }, on: {
          click: function(t) {
            e.dialog = !1;
          },
        },
      }, [e._v(" Close ")])], 1)], 1)], 1);
    }, Qe = [], ze = n["a"].extend({
      name: "StatisticsHelper", data: function() {
        return { dialog: !1 };
      },
    }), Ye = ze, Je = a("169a"), Xe = Object(u["a"])(Ye, We, Qe, !1, null, "77cc5242", null), Ze = Xe.exports;
    M()(Xe, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var Ke = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-container", { attrs: { fluid: "" } }, e._l(e.statistics, (function(e) {
        return a("v-row", { key: e.id }, [a("LinearStatisticTile", {
          attrs: {
            title: e.title,
            description: e.description,
            percentage: e.percentage,
            inverted: e.inverseResults,
          },
        })], 1);
      })), 1)], 1), a("v-snackbar", {
        attrs: { timeout: 1e4 }, scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = "";
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]), model: {
          value: e.snackbarInfoDisplay, callback: function(t) {
            e.snackbarInfoDisplay = t;
          }, expression: "snackbarInfoDisplay",
        },
      }, [e._v(" " + e._s(e.snackbarInfo) + " ")])], 1);
    }, et = [], tt = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getStatisticsList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/atlas/statistics/find/all", t.prev = 1, i = { application: a }, r && (i.category = r), t.next = 6, I.a.post(n, i);
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 13;
                    break;
                  }
                  if (s = o.data, !Array.isArray(s.data)) {
                    t.next = 11;
                    break;
                  }
                  return t.abrupt("return", s.data);
                case 11:
                  t.next = 15;
                  break;
                case 13:
                  throw console.warn("Failed to retrieve the list of statistics. Status (".concat(o.status, ")")), new Error(o.data.error);
                case 15:
                  t.next = 21;
                  break;
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), console.error("Failed to retrieve the list of statistics.", t.t0), t.t0;
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getCategories", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/statistics/categories", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 13;
                  break;
                case 11:
                  throw console.warn("Failed to retrieve the execute the action. Status (".concat(r.status, ")")), new Error(r.data.error);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to execute the action.", t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    tt.API_BASE_URL = T.getUrl();
    var at = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-tooltip", {
        attrs: { bottom: "" }, scopedSlots: e._u([{
          key: "activator", fn: function(t) {
            var r = t.on, n = t.attrs;
            return [a("v-card", e._g(e._b({
              staticClass: "my-3 statistic-tile-linear",
              attrs: { color: e.indicatorColor, dark: "" },
            }, "v-card", n, !1), r), [a("v-card-text", { staticClass: "fill-height" }, [a("p", { staticClass: "subtitle-2" }, [e._v(e._s(e.title))]), a("v-progress-linear", {
              attrs: {
                color: "white",
                height: "25",
                value: 100 * e.percentage,
              },
            }, [[a("strong", { staticStyle: { color: "#264653" } }, [e._v(e._s(Math.ceil(100 * e.percentage)) + "%")])]], 2)], 1)], 1)];
          },
        }]),
      }, [a("span", [e._v(e._s(e.description))])]);
    }, rt = [], nt = (a("a9e3"), n["a"].extend({
      name: "LinearStatisticTile",
      props: { title: String, description: String, percentage: Number, inverted: Boolean },
      mounted: function() {
        this.inverted ? this.displayedPercentage = 1 - this.percentage : this.displayedPercentage = this.percentage, this.displayedPercentage <= .25 ? this.indicatorColor = "#e76f51" : this.displayedPercentage > .25 && this.displayedPercentage <= .5 || this.displayedPercentage > .5 && this.displayedPercentage <= .75 ? this.indicatorColor = "#f4a261" : this.indicatorColor = "#2a9d8f";
      },
      data: function() {
        return { indicatorColor: "persianGrey", displayedPercentage: 0 };
      },
    })), it = nt, ot = (a("f6ff"), Object(u["a"])(it, at, rt, !1, null, null, null)), st = ot.exports;
    M()(ot, { VCard: N["a"], VCardText: B["c"], VProgressLinear: xe["a"], VTooltip: Fe["a"] });
    var ct = n["a"].extend({
      name: "StatisticsColumn", components: { LinearStatisticTile: st }, data: function() {
        return {
          application: "",
          loadingStatistics: !1,
          statistics: [],
          loadingCategories: !1,
          categories: [],
          category: "",
          snackbarInfoDisplay: !1,
          snackbarInfo: "",
        };
      }, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.loadStatistics();
      }, methods: {
        loadStatistics: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (e.loadingStatistics = !0, t.prev = 3, "" == e.category) {
                    t.next = 10;
                    break;
                  }
                  return t.next = 7, tt.getStatisticsList(e.application);
                case 7:
                  e.statistics = t.sent, t.next = 13;
                  break;
                case 10:
                  return t.next = 12, tt.getStatisticsList(e.application, e.category);
                case 12:
                  e.statistics = t.sent;
                case 13:
                  t.next = 20;
                  break;
                case 15:
                  t.prev = 15, t.t0 = t["catch"](3), console.error("Failed to load the statistics.", t.t0), e.snackbarInfo = "Failed to load the statistics", e.snackbarInfoDisplay = !1;
                case 20:
                  return t.prev = 20, e.loadingStatistics = !1, t.finish(20);
                case 23:
                case"end":
                  return t.stop();
              }
            }), t, null, [[3, 15, 20, 23]]);
          })))();
        }, getCategories: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingCategories = !0, t.prev = 1, t.next = 4, tt.getCategories();
                case 4:
                  e.statistics = t.sent, t.next = 12;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](1), console.error("Failed to load the statistics categories.", t.t0), e.snackbarInfo = "Failed to load the statistics' categories.", e.snackbarInfoDisplay = !1;
                case 12:
                  return t.prev = 12, e.loadingCategories = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 7, 12, 15]]);
          })))();
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getCategories();
                case 2:
                  return t.next = 4, e.loadStatistics();
                case 4:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        },
      },
    }), lt = ct, ut = Object(u["a"])(lt, Ke, et, !1, null, "360eb8d4", null), dt = ut.exports;
    M()(ut, { VBtn: P["a"], VContainer: G["a"], VRow: Q["a"], VSnackbar: $e["a"] });
    var pt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h1", { staticClass: "text-h4" }, [e._v(" Start to explore the application ")])]), a("v-card-subtitle"), a("v-card-text", [a("v-container", {
        staticClass: "d-flex flex-row justify-space-around",
        attrs: { fluid: "" },
      }, [a("v-row", [a("v-hover", {
        scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-file-excel")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Reports ")])], 1), a("p", [e._v("Extract .xlsx reports from the Neo4j Database")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("reports");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      }), a("v-hover", {
        attrs: { "open-delay": "200" }, scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-file-cad")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Analysis ")])], 1), a("p", [e._v(" Check the analysis and break nodes to extract undiscovered technologies or POI. ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("analysis");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      }), a("v-hover", {
        attrs: { "open-delay": "200" }, scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-graphql")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Imaging Tuning ")])], 1), a("p", [e._v(" Explore the different transactions in the application, rename levels, etc... ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("tuning");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      }), a("v-hover", {
        scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-hexagon-multiple")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Enrichment ")])], 1), a("p", [e._v(" Run automatics agents looking for tags in the application and find interesting areas in the application ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("reports");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      })], 1)], 1)], 1), a("v-card-actions")], 1);
    }, ht = [], vt = n["a"].extend({
      name: "CategoriesHelper", methods: {
        goTo: function(e) {
          this.$router.replace("/atlas/" + e);
        },
      },
    }), mt = vt, ft = a("ce87"), gt = Object(u["a"])(mt, pt, ht, !1, null, "b0498052", null), bt = gt.exports;
    M()(gt, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VHover: ft["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var xt = m["a"].extend({
      name: "Home",
      components: { ActionsTile: He, StatisticsHelper: Ze, StatisticsColumn: dt, CategoriesHelper: bt },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      data: function() {
        return {
          switchInternalUse: !1,
          loadingCandidate: !1,
          insights: {},
          technologies: [],
          application: "",
          consultantId: Math.floor(1e3 * Math.random()),
        };
      },
      mounted: function() {
        this.application = this.$store.state.applicationName, this.getApplicationInsights(), this.getApplicationTechnologies();
      },
      methods: {
        getApplicationTechnologies: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.next = 4, ue.getTechnologies(e.application);
                case 4:
                  e.technologies = t.sent;
                case 5:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, goTo: function(e) {
          this.$router.replace("/atlas/" + e);
        }, getApplicationInsights: function() {
          var e = this;
          "" != this.application && (this.loadingCandidate = !0, ue.getApplicationInsights(this.application).then((function(t) {
            e.insights = t;
          })).catch((function(e) {
            console.error("Failed to get the insights of the application", e);
          })).finally((function() {
            e.loadingCandidate = !1;
          })));
        },
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e, this.getApplicationInsights(), this.getApplicationTechnologies();
        },
      },
    }), wt = xt, kt = a("cc20"), yt = a("ef9a"), _t = Object(u["a"])(wt, Me, De, !1, null, null, null), Ct = _t.exports;
    M()(_t, {
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var At = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", {
        staticClass: "pa-10",
        attrs: { fluid: "" },
      }, [a("v-row", [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "text-h4" }, [e._v("Administration of the server")])]), a("v-card-subtitle"), a("v-card-text")], 1)], 1), a("v-row", { staticClass: "mt-10" }, [a("ServerCategoriesHelper")], 1)], 1);
    }, Rt = [], St = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h1", { staticClass: "text-h4" }, [e._v(" Administration section ")])]), a("v-card-subtitle"), a("v-card-text", [a("v-container", {
        staticClass: "d-flex flex-row justify-space-around",
        attrs: { fluid: "" },
      }, [a("v-row", [a("v-hover", {
        scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { width: "344", dark: r, color: r ? "persianGrey" : "white" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-file-excel")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Frameworks ")])], 1), a("p", [e._v(" Extract Frameworks automatically using web & repository ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("frameworks");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      }), a("v-hover", {
        attrs: { "open-delay": "200" }, scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-file-excel")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Automation ")])], 1), a("p", [e._v(" Enable or disable the agent performing automatic actions on your appplication ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("automation");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      }), a("v-hover", {
        scopedSlots: e._u([{
          key: "default", fn: function(t) {
            var r = t.hover;
            return [a("v-card", {
              staticClass: "ma-2",
              attrs: { dark: r, color: r ? "persianGrey" : "white", width: "344" },
            }, [a("v-card-text", [a("span", { staticClass: "text-h4 text--primary d-flex flex-row" }, [a("v-icon", { attrs: { "x-large": "" } }, [e._v("mdi-cog")]), a("p", {
              staticClass: "ml-4 mt-4",
              class: r ? "white--text" : "black--text",
            }, [e._v(" Parameters ")])], 1), a("p", [e._v(" Adjust the parameters of the server, and configure the extensions ")])]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: { text: "" },
              on: {
                click: function(t) {
                  return e.goTo("parameters");
                },
              },
            }, [e._v(" Go to section ")])], 1)], 1)];
          },
        }]),
      })], 1)], 1)], 1), a("v-card-actions")], 1);
    }, It = [], Tt = n["a"].extend({
      name: "ServerCategoriesHelper", methods: {
        goTo: function(e) {
          this.$router.replace("/administration/" + e);
        },
      },
    }), Et = Tt, Lt = Object(u["a"])(Et, St, It, !1, null, "15d9534e", null), Vt = Lt.exports;
    M()(Lt, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VHover: ft["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var Ft = n["a"].extend({ name: "ServerHome", components: { ServerCategoriesHelper: Vt } }), Ot = Ft,
      jt = Object(u["a"])(Ot, At, Rt, !1, null, "738c8507", null), Mt = jt.exports;
    M()(jt, {
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VRow: Q["a"],
    });
    var Dt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-container", { staticClass: " d-flex flex-column" }, [a("v-container", { staticClass: "ma-3 px-10" }, [a("v-card", { staticClass: "mx-auto mt-2" }, [a("v-card-title", [a("h2", { staticClass: "text-h4 mb-3 " }, [e._v(" Generate reports for application " + e._s(e.application) + " ")]), a("v-spacer"), a("v-text-field", {
        staticClass: "pt-1",
        attrs: { label: "Search Reports", placeholder: "Search in reports", filled: "", rounded: "", dense: "" },
      }), a("v-btn", {
        staticClass: "pb-5",
        attrs: { icon: "", color: "green", "x-large": "" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [e.loadingReports ? a("v-row", {
        staticClass: "d-flex justify-center",
        attrs: { md: "12" },
      }, [a("v-progress-circular", {
        staticClass: "ma-10",
        attrs: { size: 50, color: "primary", indeterminate: "" },
      })], 1) : e._e(), e.errorReports ? a("v-row", {
        staticClass: "d-flex flex-column justify-center",
        attrs: { md: "12" },
      }, [a("h3", [e._v("Failed to retrieve the reports")]), a("p", { staticClass: "subtitle-2 red--text" }, [e._v(e._s(e.errorReports))]), a("v-btn", {
        attrs: {
          depressed: "",
          color: "primary",
        }, on: { click: e.loadReports },
      }, [e._v(" Retry ")])], 1) : e._e(), a("v-row", { staticClass: "my-5" }, e._l(e.reportList, (function(t) {
        return a("v-card", {
          key: t.id,
          staticClass: "mx-auto ma-2",
          class: e.focusReport.id === t.id ? "selectedCard" : "normalCard",
          attrs: { "max-width": "450", outlined: "" },
        }, [a("v-container", [a("v-row", [a("v-list-item", { attrs: { "three-line": "" } }, [a("v-list-item-content", [a("div", {
          staticClass: "text-overline mb-4 d-flex flex-row",
          class: e.focusReport.id === t.id ? "white--text" : "black--text",
        }, [e._v(" " + e._s(t.categories) + " "), a("v-spacer"), e.loadingReport === t.id ? a("v-progress-circular", {
          attrs: {
            indeterminate: "",
            color: "primary",
          },
        }) : e._e()], 1), a("v-list-item-title", {
          staticClass: "text-h5 mb-1",
          class: e.focusReport.id === t.id ? "white--text" : "black--text",
        }, [e._v(" " + e._s(t.name) + " ")]), a("v-list-item-subtitle", { class: e.focusReport.id === t.id ? "white--text" : "black--text" }, [e._v(e._s(t.description))])], 1)], 1)], 1), a("v-row", [a("v-expand-transition", [a("v-card", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.focusReport.id === t.id && t.parameters && t.parameters.length > 0,
            expression: "\n                          focusReport.id === report.id &&\n                            report.parameters &&\n                            report.parameters.length > 0\n                        ",
          }],
          staticClass: "my-4",
          staticStyle: { background: "white", color: "black !important" },
          attrs: { width: "100%", color: "#E0E0E0" },
        }, [a("v-card-subtitle", [e._v(" Query Options ")]), a("v-container", e._l(t.parameters, (function(t, r) {
          return a("v-row", {
            key: r,
            staticClass: "pa-2",
          }, [a("v-container", [a("v-row", [a("p", [a("i", [e._v(e._s(t.description))])])]), null !== t.values && "undefined" !== typeof t.values ? a("v-row", [a("v-select", {
            attrs: {
              items: t.values,
              label: t.name,
              outlined: "",
            }, model: {
              value: e.focusReportParameters[t.name], callback: function(a) {
                e.$set(e.focusReportParameters, t.name, a);
              }, expression: "focusReportParameters[p.name]",
            },
          })], 1) : a("v-row", [a("v-text-field", {
            attrs: { label: t.name, clearable: "", outlined: "" },
            model: {
              value: e.focusReportParameters[t.name], callback: function(a) {
                e.$set(e.focusReportParameters, t.name, a);
              }, expression: "focusReportParameters[p.name]",
            },
          })], 1)], 1)], 1);
        })), 1)], 1)], 1)], 1)], 1), a("v-card-actions", { staticClass: "mt-4" }, [e.focusReport.id !== t.id ? a("v-btn", {
          attrs: {
            loading: e.loadingReport === t.id,
            outlined: "",
            rounded: "",
            text: "",
          }, on: {
            click: function(a) {
              e.focusReport = t;
            },
          },
        }, [e._v(" Customize ")]) : e._e(), e.focusReport.id === t.id ? a("v-btn", {
          staticClass: "white--text",
          attrs: { loading: e.loadingReport === t.id, outlined: "", rounded: "", text: "" },
          on: { click: e.generateReports },
        }, [e._v(" Generate ")]) : e._e(), e.focusReport.id === t.id ? a("v-btn", {
          staticClass: "white--text",
          attrs: { outlined: "", rounded: "", text: "" },
          on: {
            click: function(t) {
              e.focusReport = { id: -1 };
            },
          },
        }, [e._v(" Cancel ")]) : e._e()], 1)], 1);
      })), 1)], 1)], 1)], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 1e4 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = "";
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfoDisplay, callback: function(t) {
            e.snackbarInfoDisplay = t;
          }, expression: "snackbarInfoDisplay",
        },
      }, [e._v(" " + e._s(e.snackbarInfo) + " ")])], 1);
    }, Pt = [], Nt = (a("b0c0"), a("2b3d"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getReportList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/reports/find/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 13;
                  break;
                case 11:
                  throw console.warn("Failed to retrieve the list of Reports. Status (".concat(r.status, ")")), new Error(r.data.error);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to retrieve the list of report.", t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "saveFile", value: function(e, t) {
          if (window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(e, t); else {
            var a = document.createElement("a");
            document.body.appendChild(a);
            var r = window.URL.createObjectURL(e);
            a.href = r, a.download = t, a.click(), setTimeout((function() {
              window.URL.revokeObjectURL(r), document.body.removeChild(a);
            }), 0);
          }
        },
      }, {
        key: "generateReport", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i) {
            var o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/atlas/reports/generate", t.prev = 1, s = {
                    id: a,
                    application: n,
                    parameters: i,
                  }, t.next = 5, I.a.post(o, s, { responseType: "arraybuffer" });
                case 5:
                  if (c = t.sent, 200 != c.status) {
                    t.next = 12;
                    break;
                  }
                  document.createElement("a"), l = new Blob([c.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," }), this.saveFile(l, "".concat(r, "_in_").concat(n, ".xlsx")), t.next = 14;
                  break;
                case 12:
                  throw console.warn("Failed to retrieve the generate the report. Status (".concat(c.status, ")")), new Error(c.data.error);
                case 14:
                  t.next = 20;
                  break;
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to retrieve the generate the report.", t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, this, [[1, 16]]);
          })));

          function a(e, a, r, n) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    Nt.API_BASE_URL = T.getUrl();
    var Bt = n["a"].extend({
        name: "Reporting", components: {}, computed: {
          getApplicationName: function() {
            return this.$store.state.applicationName;
          },
        }, mounted: function() {
          this.application = this.$store.state.applicationName, this.loadReports();
        }, data: function() {
          return {
            application: "",
            errorReports: "",
            loadingReports: !1,
            reportList: [],
            focusReport: {},
            focusReportParameters: {},
            loadingReport: -1,
            snackbarInfo: "",
            snackbarInfoDisplay: !1,
          };
        }, methods: {
          loadReports: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, e.errorReports = "", e.loadingReports = !0, t.next = 5, Nt.getReportList();
                  case 5:
                    e.reportList = t.sent, t.next = 11;
                    break;
                  case 8:
                    t.prev = 8, t.t0 = t["catch"](0), e.errorReports = t.t0;
                  case 11:
                    return t.prev = 11, e.loadingReports = !1, t.finish(11);
                  case 14:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[0, 8, 11, 14]]);
            })))();
          }, generateReports: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (-1 === e.loadingReport) {
                      t.next = 5;
                      break;
                    }
                    e.snackbarInfoDisplay = !0, e.snackbarInfo = "A Report is being processed. Please wait.", t.next = 21;
                    break;
                  case 5:
                    return e.snackbarInfoDisplay = !0, e.snackbarInfo = "Generating report: ".concat(e.focusReport.name), t.prev = 7, e.loadingReport = e.focusReport.id, t.next = 11, Nt.generateReport(e.focusReport.id, e.focusReport.nickname, e.application, e.focusReportParameters);
                  case 11:
                    e.snackbarInfo = "The report has been successfully generated.", t.next = 17;
                    break;
                  case 14:
                    t.prev = 14, t.t0 = t["catch"](7), e.snackbarInfo = "Error, failed to process the report. ".concat(t.t0);
                  case 17:
                    return t.prev = 17, e.snackbarInfoDisplay = !0, e.loadingReport = -1, t.finish(17);
                  case 21:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[7, 14, 17, 21]]);
            })))();
          }, refresh: function() {
            this.reportGenerated = !1, this.reportLoading = !1, this.groupResultLoading = !1, this.groupResult = [], this.loadReports();
          },
        }, watch: {
          getApplicationName: function(e) {
            this.application = e, this.reportGenerated = !1;
          }, focusReportId: function() {
            this.focusReportParameters = {};
          },
        },
      }), Ut = Bt, Gt = (a("68aa"), a("0789")), $t = a("490a"), qt = a("b974"),
      Ht = Object(u["a"])(Ut, Dt, Pt, !1, null, null, null), Wt = Ht.exports;
    M()(Ht, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VExpandTransition: Gt["a"],
      VIcon: H["a"],
      VListItem: Re["a"],
      VListItemContent: Se["a"],
      VListItemSubtitle: Se["b"],
      VListItemTitle: Se["c"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var Qt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, zt = [], Yt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4 mb-2" }, [e._v(" Review the configuration of the " + e._s(e.application) + " application ")])]), a("v-card-text", [a("v-row", { staticClass: "mx-2 mt-2 d-flex flex-column" }, [a("h5", { staticClass: "text-h5 black--text" }, [e._v("Statistics on the application")]), a("p", [e._v(" Quickly discover if the configuration of the application's analysis is correct with some statistiscs on it ")]), a("h3", [e._v("Color Schema :")]), a("p", [e._v(" The statistical tiles below change color according to the score they measure. A green tile is a sign that the statistics have a \"high percentage\" of compliance."), a("br"), e._v(" They they follow the following color schema : ")]), a("div", { staticClass: "color-ruler mb-6" }, [a("div", { staticClass: "round" }, [e._v("0")]), a("div", { staticClass: "round" }, [e._v("33")]), a("div", { staticClass: "round" }, [e._v("66")]), a("div", { staticClass: "round" }, [e._v("100")])]), a("p", [a("i", [e._v("Disclaimer : It can happens that even with the perfect configuration, the statistics display bad scores. Further investigation is necessary to understand where these scores come from."), a("br"), e._v(" That can done with the action tiles, below this section, to investigate direclty in CAST Imaging.")])])]), a("v-divider"), a("v-row", {
        staticClass: "my-5",
        staticStyle: { "min-height": "300px" },
      }, [e.loadingStatistics ? a("v-progress-circular", {
        staticClass: "ma-auto",
        attrs: { size: 60, width: 7, color: "persianGrey", indeterminate: "" },
      }) : e._e(), e._l(e.statistics, (function(e, t) {
        return a("PercentageTile", {
          key: t,
          attrs: { title: e.title, description: e.description, percentage: e.percentage, inverted: e.inverseResult },
        });
      }))], 2)], 1)], 1), a("v-divider"), a("v-card", { staticClass: "mx-3" }, [a("v-row", { staticClass: "mt-5" }, [a("ActionTileViewer")], 1), a("v-row", { staticClass: "mb-5" })], 1)], 1);
    }, Jt = [], Xt = (a("a4d3"), a("e01a"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getStatisticResults", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, i, o, s, c, l, u;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.statistics.getAsList('".concat(t, "', '").concat(a, "')"), e.next = 3, this.neo4jal.execute(r);
                case 3:
                  for (n = e.sent, i = [], o = 0; o < n.records.length; o++) s = n.records[o], c = s.get("title"), l = s.get("description"), u = s.get("result"), u = u.replace(" - ", "").replaceAll(" - ", "<br \\><br \\>"), i.push({
                    title: c,
                    description: l,
                    result: u,
                  });
                  return e.abrupt("return", i);
                case 7:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t, a) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getConfigurationStatistics", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n, i, o, s;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (t && 0 != t.length) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  a = [{
                    title: "Internality ",
                    description: "Percentage of internal objects in the application",
                    request: "MATCH (o:Object:".concat(t, ") WITH COUNT(o) as totObj MATCH (obj:Object:").concat(t, ") WHERE obj.External=false\n        WITH  COUNT(obj) as internal, totObj RETURN toFloat(internal) / totObj as percentage;"),
                    inverseResult: !1,
                  }, {
                    title: "In Transaction",
                    description: "Percentage of objects in transactions",
                    request: "MATCH (o:Object:".concat(t, ") WITH COUNT(o) as totObj\n        MATCH (obj:Object:").concat(t, ") WHERE NOT (:Transaction:").concat(t, ")-[:Contains]->(obj) WITH  COUNT(DISTINCT obj) as notInTransaction, totObj \n        RETURN toFloat(notInTransaction) / totObj as percentage;"),
                    inverseResult: !1,
                  }, {
                    title: "Isolated Levels",
                    description: "Percentage of levels with no links in the application",
                    request: "MATCH (l:Level5:".concat(t, ") WITH COUNT(l) as totLevels\n        MATCH (obj:Level5:").concat(t, ") WHERE NOT (obj)-[]-(:Level5) WITH  COUNT(obj) as isolated, totLevels \n        RETURN toFloat(isolated) / totLevels as percentage;"),
                    inverseResult: !0,
                  }], r = [], n = 0;
                case 5:
                  if (!(n < a.length)) {
                    e.next = 17;
                    break;
                  }
                  return e.next = 8, this.neo4jal.execute(a[n].request);
                case 8:
                  if (i = e.sent, 0 != i.records.length) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("continue", 14);
                case 11:
                  o = i.records[0], s = o.get("percentage"), r.push({
                    title: a[n].title,
                    description: a[n].description,
                    percentage: s,
                    inverseResult: a[n].inverseResult,
                  });
                case 14:
                  n++, e.next = 5;
                  break;
                case 17:
                  return e.abrupt("return", r);
                case 18:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }());
    Xt.neo4jal = R.getInstance();
    var Zt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "ma-5 statistic-tile",
        attrs: { color: e.indicatorColor, dark: "" },
      }, [a("v-card-title", [e._v(" " + e._s(e.title) + " ")]), a("v-card-text", { staticClass: "fill-height mt-5" }, [a("p", { staticStyle: { height: "50px" } }, [e._v(e._s(e.description))]), a("v-progress-linear", {
        attrs: {
          color: "white",
          height: "25",
          value: 100 * e.percentage,
        },
      }, [[a("strong", { staticStyle: { color: "#264653" } }, [e._v(e._s(Math.ceil(100 * e.percentage)) + "%")])]], 2)], 1)], 1);
    }, Kt = [], ea = n["a"].extend({
      name: "PercentageTile",
      props: { title: String, description: String, percentage: Number, inverted: Boolean },
      mounted: function() {
        this.inverted ? this.displayedPercentage = 1 - this.percentage : this.displayedPercentage = this.percentage, this.displayedPercentage <= .25 ? this.indicatorColor = "#e76f51" : this.displayedPercentage > .25 && this.displayedPercentage <= .5 || this.displayedPercentage > .5 && this.displayedPercentage <= .75 ? this.indicatorColor = "#f4a261" : this.indicatorColor = "#2a9d8f";
      },
      data: function() {
        return { indicatorColor: "persianGrey", displayedPercentage: 0 };
      },
    }), ta = ea, aa = (a("fc47"), Object(u["a"])(ta, Zt, Kt, !1, null, null, null)), ra = aa.exports;
    M()(aa, { VCard: N["a"], VCardText: B["c"], VCardTitle: B["d"], VProgressLinear: xe["a"] });
    var na = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-text", [a("v-row", { staticClass: "mx-4  mt-2 d-flex flex-column" }, [a("h5", { staticClass: "text-h5 black--text" }, [e._v("Grouping actions on configuration")]), a("p", { staticClass: "text-body-1 my-4" }, [e._v(" The grouping section is here to help you visualizing interst points in your application. It matches some predefined patterns, to give you quick ideas of what can be investigated in the application."), a("br"), e._v(" You can enrich this configuration manually, and create custom generics tags in the "), a("i", [e._v("Tag creator studio")]), e._v(". "), a("br")])]), a("v-divider"), a("v-row", { staticClass: "px-4 my-5" }, [a("v-toolbar", {
        attrs: {
          dark: "",
          color: "#1D5D6B",
        },
      }, [a("v-toolbar-title", [e._v("Grouping operations: Check the configuration")]), a("v-spacer"), a("v-autocomplete", {
        staticClass: "mx-4",
        attrs: {
          "search-input": e.searchActions,
          "cache-items": "",
          flat: "",
          "hide-no-data": "",
          "hide-details": "",
          label: "Lookup for specific operations",
          "solo-inverted": "",
        },
        on: {
          "update:searchInput": function(t) {
            e.searchActions = t;
          }, "update:search-input": function(t) {
            e.searchActions = t;
          },
        },
      })], 1)], 1), a("v-row", [a("v-slide-group", {
        staticClass: "pa-4",
        attrs: { "active-class": "success", "show-arrows": "" },
      }, e._l(e.filteredPopularOperations, (function(e, t) {
        return a("v-slide-item", { key: t }, [a("GroupOperationsTile", { attrs: { groupAction: e } })], 1);
      })), 1)], 1)], 1)], 1);
    }, ia = [], oa = (a("4de4"), a("caad"), a("2532"), function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "mx-5",
        attrs: { color: "persianGrey", dark: "", "max-width": "400" },
      }, [a("v-card-title", [a("v-icon", {
        attrs: {
          large: "",
          left: "",
        },
      }, [e._v(" mdi-cog ")]), a("span", { staticClass: "title font-weight-light" }, [e._v(e._s(e.groupAction.title))])], 1), a("v-card-subtitle", {
        staticClass: "text-body-1 mt-2",
        staticStyle: { height: "100px" },
        domProps: { textContent: e._s(e.groupAction.description) },
      }), a("v-card-actions", [a("v-list-item", {
        staticClass: "grow d-flex flex-row-reverse",
        attrs: { width: "100%" },
      }, [a("v-btn", {
        staticClass: "float-right",
        attrs: { loading: e.loading, rounded: "", color: "charcoal" },
        on: {
          click: function(t) {
            return e.execute();
          },
        },
      }, [e._v(" Launch grouping "), a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-play ")])], 1)], 1)], 1)], 1);
    }), sa = [], ca = (a("d81d"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getTag", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/tags/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  return n = t.sent, 200 == n.status ? (o = n.data, i = String(o.data)) : console.warn("Failed to retrieve version. Status (".concat(n.status, ")")), t.abrupt("return", i);
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve tag ").concat(a, "."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getFrameworkTag", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", this.getTag("framework"));
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getLevelTag", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", this.getTag("level"));
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getModuleTag", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.abrupt("return", this.getTag("module"));
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }());
    ca.API_BASE_URL = T.getUrl();
    var la = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getConfigurationActions", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n = this;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, ca.getLevelTag();
                case 2:
                  return a = e.sent, r = [{
                    title: "Merge group",
                    category: "Configuration",
                    description: "Merge to a new level 5 the objects prefixed by '${levelPrefix}' in CAST Imaging",
                    request: "CALL demeter.group.levels('%%CONTEXT_LABEL%%');",
                    tag: "",
                  }, {
                    title: "Split external objects",
                    category: "Configuration",
                    description: "Split all the external objects in the application and regroup them under they own Level5 nodes",
                    request: "MATCH (l:Level5:%%CONTEXT_LABEL%%)-[:Aggregates]->(obj:Object:%%CONTEXT_LABEL%%) WHERE obj.External=true SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['".concat(a, "External '+l.Name] ELSE obj.Tags + '").concat(a, "External '+l.Name END"),
                    tag: "",
                  }, {
                    title: "Group in external / internal objects",
                    category: "Configuration",
                    description: "Regroup ALL the object in your application in 2 categories : externals and internal. (Configuration checker)",
                    request: "MATCH (l:Level5:%%CONTEXT_LABEL%%)-[:Aggregates]->(obj:Object:%%CONTEXT_LABEL%%) WHERE obj.External=true SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['".concat(a, "External '+l.Name] ELSE obj.Tags + '").concat(a, "External '+l.Name END"),
                    tag: "",
                  }, {
                    title: "Split not in transaction objects",
                    category: "Configuration",
                    description: "Split all the objects not in transactions and regroup them under they own Level5 nodes",
                    request: "MATCH (n:ObjectProperty) \n          WITH MAX(n.Id)+1 as maxId \n          MERGE (oc:ObjectProperty { Description: \"Prefix_List of transactions going through the object:\", Id: maxId }) \n          WITH oc \n          MATCH (o:Object:%%CONTEXT_LABEL%%)<-[:Contains]-(tx:Transaction) \n          WITH oc, o, COLLECT(DISTINCT tx.Name) as transactionList \n          WITH oc, o, REDUCE(s = \"\", n IN transactionList | s + ', ' + n) as stringTransactions \n          MERGE (o)-[:Property { value: RIGHT(stringTransactions,SIZE(stringTransactions)-2) }]->(oc)",
                    tag: "",
                  }], e.abrupt("return", r.map((function(e) {
                    return e.request = e.request.replaceAll(n.contextAnchor, t), e;
                  })));
                case 5:
                case"end":
                  return e.stop();
              }
            }), e);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getModernizationActions", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n = this;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, ca.getLevelTag();
                case 2:
                  return a = e.sent, r = [{
                    title: "Spring Dao Objects",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes, all the Spring Dao Objects",
                    request: "MATCH (op:ObjectProperty)-[r:Property]-(n:Object:`".concat(t, "`) WHERE op.Description='Annotation:' AND r.value CONTAINS '@Entity' %%SET_TAG(n)%%"),
                    tag: a + "Spring Servlets",
                    returnVal: "n",
                  }, {
                    title: "Spring Controllers",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes,  Spring Controllers",
                    request: "MATCH (op:ObjectProperty)-[r:Property]-(n:Object:`".concat(t, "`) WHERE op.Description='Annotation:' AND r.value CONTAINS '@Stateless' OPTIONAL MATCH (n)-[]->(o:Object) WHERE NOT (o:Object)-[]->(:Object) WITH DISTINCT (COLLECT(n) + COLLECT(o)) as serviceObj UNWIND serviceObj as obj %%SET_TAG(obj)%%"),
                    tag: a + "Spring Controllers",
                    returnVal: "obj",
                  }, {
                    title: "Spring Dao Objects",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes,  Spring Dao Objects",
                    request: "MATCH (op:ObjectProperty)-[r:Property]-(n:Object:`".concat(t, "`) WHERE op.Description='Annotation:' AND r.value CONTAINS '@Entity' %%SET_TAG(n)%%"),
                    tag: a + "Spring DAO",
                    returnVal: "n",
                  }, {
                    title: "Spring Dao Class",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes,  all the objects with type JAVA CLASS DAO",
                    request: "MATCH (o:Object:`".concat(t, "`) WHERE o.Type='Java Class DAO' %%SET_TAG(o)%% "),
                    tag: a + "Spring DAO",
                    returnVal: "o",
                  }, {
                    title: "Static Objects : Utilities",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes, all the objects only having static methods",
                    request: "MATCH p=(o:Object:`".concat(t, "`)-[:BELONGTO]-(so:SubObject)-[r:Property]-(sp:ObjectProperty) WHERE o.Name CONTAINS 'Util' AND so.Type CONTAINS 'Method' AND sp.Description='Extended Type' WITH o as obj, COLLECT(DISTINCT r) as links WHERE all(x in links WHERE x.value CONTAINS 'static') %%SET_TAG(obj)%%"),
                    tag: a + "Utils",
                    returnVal: "obj",
                  }, {
                    title: "Spring Java Persistence",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes,  All the objects part of the Java persistence Framework",
                    request: "MATCH (n:Object:`".concat(t, "`) WHERE n.Type CONTAINS 'JPA' OR n.FullName CONTAINS 'javax.persistence' %%SET_TAG(n)%%"),
                    tag: a + "JAVA Persistence",
                    returnVal: "n",
                  }, {
                    title: "Links to DAO",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes, all the logic linked to the DAO objects",
                    request: "MATCH (op:ObjectProperty)-[r:Property]-(n:Object:`".concat(t, "`) WHERE op.Description='Annotation:' AND r.value CONTAINS '@Entity' WITH n as DAOobjects MATCH (o:Object:`").concat(t, "`)-[r]->(DAOobjects) WHERE o.Type='Java Class' WITH DAOobjects,  COLLECT(TYPE(r)) as numRel, o WHERE all(x in numRel WHERE x='MENTION') %%SET_TAG(o)%% "),
                    tag: a + "Spring DAO",
                    returnVal: "o",
                  }, {
                    title: "Presentation Layer ",
                    category: "Spring MVC",
                    description: "Group, under a new level 5 nodes,  all the objects displaying web information to the user, as JSP and HTML pages",
                    request: "MATCH (op:Object:`".concat(t, "`) WHERE op.Type IN ['JSP Pages', 'eFile'] %%SET_TAG(op)%%"),
                    tag: a + "View Layer",
                    returnVal: "op",
                  }], e.abrupt("return", r.map((function(e) {
                    e.request = e.request.replaceAll(n.contextAnchor, t);
                    var a = "SET @.Tags = CASE WHEN @.Tags IS NULL THEN ['".concat(e.tag, "'] ELSE @.Tags + '").concat(e.tag, "' END");
                    return a = a.replaceAll("@", e.returnVal), e.request = e.request.replace(/%%SET_TAG\(([A-Za-z]*)\)%%/, a), e;
                  })));
                case 5:
                case"end":
                  return e.stop();
              }
            }), e);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "executeAction", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.neo4jal.execute(t.request);
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "replicateModuleView", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = "\n    MATCH (m:Module:".concat(t, ")-[]->(obj:Object)\n    SET obj.Module =\"\"\n    DETACH DELETE m;"), r = "\n    MATCH(l:Level5:`".concat(t, "`)-[]->(obj:Object)\n    WITH l.Name as levelName, COLLECT(obj) as objectList, COUNT(obj) as numObj\n    MERGE (m:`").concat(t, "`:Module{ AipId:\"-1\", Color:'rgb(34, 199, 214)', Type:'module', Name:levelName, Count: numObj})\n    WITH m as module, objectList\n    UNWIND objectList as obj \n    MERGE (module)-[:Contains]->(obj)\n    SET obj.Module=module.Name;"), n = "\n    MATCH (n:Module:".concat(t, ")-[:Contains]->(:Object)--\x3e(:Object)<-[:Contains]-(l:Module) WHERE n.Name<>l.Name \n    MERGE (n)-[:References]->(l);"), e.next = 5, this.neo4jal.execute(a);
                case 5:
                  return e.next = 7, this.neo4jal.execute(r);
                case 7:
                  return e.next = 9, this.neo4jal.execute(n);
                case 9:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }();
    la.neo4jal = R.getInstance(), la.contextAnchor = "%%CONTEXT_LABEL%%";
    var ua = {
      name: "GroupOperationsTile", props: { groupAction: Object }, data: function() {
        return { loading: !1 };
      }, methods: {
        execute: function() {
          var e = this;
          this.loading = !0, la.executeAction(this.groupAction).catch((function(e) {
            console.error("The query failed to execute.", e);
          })).finally((function() {
            e.loading = !1;
          }));
        },
      },
    }, da = ua, pa = Object(u["a"])(da, oa, sa, !1, null, null, null), ha = pa.exports;
    M()(pa, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardTitle: B["d"],
      VIcon: H["a"],
      VListItem: Re["a"],
    });
    var va = n["a"].extend({
      name: "ActionTileViewer", components: { GroupOperationsTile: ha }, data: function() {
        return {
          loadingActions: !1,
          searchActions: "",
          searchLevels: "",
          application: "",
          popularOperations: [],
          filteredPopularOperations: [],
        };
      }, methods: {
        getActionList: function() {
          var e = this;
          la.getConfigurationActions(this.application).then((function(t) {
            e.popularOperations = t, e.filteredPopularOperations = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the grouping actions", e);
          }));
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.getActionList();
      }, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.getActionList();
        }, searchActions: function(e) {
          e && 0 != e.length ? (e = e.toLowerCase(), this.filteredPopularOperations = this.popularOperations.filter((function(t) {
            return t.title.toLowerCase().includes(e) || t.description.toLowerCase().includes(e);
          }))) : this.filteredPopularOperations = this.popularOperations;
        },
      },
    }), ma = va, fa = a("7efd"), ga = a("9dbe"), ba = Object(u["a"])(ma, na, ia, !1, null, null, null), xa = ba.exports;
    M()(ba, {
      VAutocomplete: Ce["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VDivider: $["a"],
      VRow: Q["a"],
      VSlideGroup: fa["b"],
      VSlideItem: ga["a"],
      VSpacer: z["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
    });
    var wa = n["a"].extend({
      name: "ConfigurationStep",
      components: { PercentageTile: ra, ActionTileViewer: xa },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName, this.getConfigurationStatistics();
      },
      data: function() {
        return { application: "", statistics: [], loadingStatistics: !1 };
      },
      methods: {
        getConfigurationStatistics: function() {
          var e = this;
          this.loadingStatistics = !0, this.statistics = [], Xt.getConfigurationStatistics(this.application).then((function(t) {
            e.statistics = t;
          })).catch((function(e) {
            console.error("An error occured while retrieving configuration statistics...", e);
          })).finally((function() {
            e.loadingStatistics = !1;
          }));
        },
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e, this.getConfigurationStatistics();
        },
      },
    }), ka = wa, ya = (a("154f"), Object(u["a"])(ka, Yt, Jt, !1, null, null, null)), _a = ya.exports;
    M()(ya, {
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VDivider: $["a"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
    });
    var Ca = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("ActionTileViewer"), a("v-divider")], 1);
    }, Aa = [], Ra = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "px-5 mb-5 pt-4",
        attrs: { disabled: e.disabledTile },
      }, [a("v-card-text", [a("v-row", [a("h5", { staticClass: "text-h4 mb-3 black--text" }, [e._v(" Automatic framework discovery on " + e._s(e.application) + " application ")])]), a("v-row", { staticClass: "my-5" }, [a("p", [e._v(" The "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" your application and finds objects belonging to open-source components. It analyzes the most popular online repositories and Google, and thanks to its built-in automatic learning algorithm, it finds the best matches. "), a("br"), e._v(" You can choose to activate or not these options. If no option is activated, the "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" will rely on it's own database to discover frameworks. ")])]), a("v-row", { staticClass: "mt-5" }, [a("h3", [e._v("Actions:")])]), a("v-row", { staticClass: "d-flex flex-column" }, [a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Online search : The framewok detection will parse Google, to discover frameworks. The frameworks detected are added to the configuration for future usages.",
          color: "persianGrey",
          loading: e.loadingConfiguration || e.loadingOnlineMode,
          disabled: e.loadingOnlineMode,
          "hide-details": "",
        },
        on: {
          click: function(t) {
            return e.setOnlineMode();
          },
        },
        model: {
          value: e.onlineMode, callback: function(t) {
            e.onlineMode = t;
          }, expression: "onlineMode",
        },
      }), a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Repository search : Parse most populars repositories as Github, Maven, etc.. ",
          color: "persianGrey",
          loading: e.loadingConfiguration || e.loadingRepositoryMode,
          disabled: e.loadingRepositoryMode,
          "hide-details": "",
        },
        on: {
          click: function(t) {
            return e.setRepositoryMode();
          },
        },
        model: {
          value: e.repositoryMode, callback: function(t) {
            e.repositoryMode = t;
          }, expression: "repositoryMode",
        },
      }), a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Interaction detection : Discover your own internals frameworks by detecting the pieces of code used by multiple applications. (Coming soon)",
          color: "persianGrey",
          "hide-details": "",
          disabled: "",
        },
      }), a("v-checkbox", {
        staticClass: "mx-5",
        attrs: {
          label: "Send the results of this detection by mail. (Configure mails addresses in the admistration panel) (Coming soon)",
          disabled: "",
        },
      }), a("v-row", { attrs: { align: "center" } }, [a("v-col", { attrs: { cols: "2" } }, [a("v-subheader", [a("h3", [e._v("Pick a language for discovery :")])])], 1), a("v-col", { attrs: { cols: "2" } }, [a("v-select", {
        attrs: {
          items: e.availableLanguages,
          label: "Language",
          "persistent-hint": "",
          "return-object": "",
          "single-line": "",
        }, model: {
          value: e.selectedLanguage, callback: function(t) {
            e.selectedLanguage = t;
          }, expression: "selectedLanguage",
        },
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-3" }, [a("p", { staticClass: "ml-5" }, [a("b", [a("i", [a("v-icon", { attrs: { color: "persianGrey" } }, [e._v("mdi-information")]), e._v(" The current workspace of the framework detector is located under : ")], 1)]), e._v(e._s(e.workspacePath) + " "), a("br"), e._v(" You can change the workspace in the Administration section ")])]), a("v-row", { staticClass: "mt-3" }, [a("p", { staticClass: "ml-5" }, [a("b", [a("i", [a("v-icon", { attrs: { color: "persianGrey" } }, [e._v("mdi-information")]), e._v(" The current version of Artemis is : ")], 1)]), e._v(e._s(e.version) + " ")])]), a("v-row", { staticClass: "my-5" }, [a("v-btn", {
        staticClass: "ma-2 white--text",
        attrs: { loading: e.runningArtemis, color: "charcoal", disabled: "" != e.ongoingDetection },
        on: {
          click: function(t) {
            return e.launchDetection();
          },
        },
      }, [e._v(" Launch detection "), a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-play ")])], 1), a("v-btn", {
        staticClass: "ma-2 white--text",
        attrs: { disabled: !e.runningArtemis, color: "brown" },
        on: {
          click: function(t) {
            return e.stopDetection();
          },
        },
      }, [e._v(" Stop detection "), a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-stop ")])], 1), a("v-spacer"), a("v-btn", {
        staticClass: "ma-2 white--text",
        attrs: { color: "brown" },
        on: {
          click: function(t) {
            return e.checkStatus();
          },
        },
      }, [e._v(" Reload status "), a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-reload ")])], 1)], 1), a("v-row", [e.ongoingDetection && "" != e.ongoingDetection ? a("v-alert", {
        staticClass: "ma-2",
        attrs: { width: "100%", border: "left", dense: "", type: "info" },
      }, [a("p", [e._v(" " + e._s(e.ongoingDetection) + " "), a("strong", { staticClass: "mx-2" }, [e._v("Time Elapsed")]), e._v(e._s(e.toDisplay) + " ")])]) : e._e(), e.errorDetection && "" !== e.errorDetection ? a("v-alert", {
        staticClass: "ma-2",
        attrs: { width: "100%", border: "left", dense: "", type: "error" },
      }, [e._v(" " + e._s(e.errorDetection) + " ")]) : e._e(), e.message && "" !== e.message ? a("v-alert", {
        staticClass: "ma-2",
        attrs: { width: "100%", border: "left", dense: "", type: "success" },
      }, [e._v(" " + e._s(e.message) + " ")]) : e._e()], 1), a("v-divider"), a("v-card", { staticClass: "my-6" }, [a("v-card-title", [e._v(" Result of the detection: "), a("v-spacer"), a("v-text-field", {
        attrs: {
          "append-icon": "mdi-magnify",
          label: "Search",
          "single-line": "",
          "hide-details": "",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      })], 1), a("v-card-subtitle", { staticClass: "d-flex justify-end" }, [a("v-checkbox", {
        attrs: { label: "Show only detected as Frameworks" },
        model: {
          value: e.showOnlyFrameworks, callback: function(t) {
            e.showOnlyFrameworks = t;
          }, expression: "showOnlyFrameworks",
        },
      })], 1), a("v-data-table", {
        staticClass: "elevation-3",
        staticStyle: { width: "100%" },
        attrs: {
          loading: e.runningArtemis,
          headers: e.headers,
          items: e.filteredFrameworks,
          "items-per-page": 20,
          search: e.search,
          "item-key": "nema",
        },
      })], 1)], 1), e.diplayNotInstalled ? a("div", { attrs: { id: "NotInstalledArtemis" } }, [a("h2", {
        staticClass: "ma-auto text--h2",
        attrs: { id: "Message" },
      }, [e._v(" The Artemis extension is not installed on this instance."), a("br"), e._v(" Please install the extension from "), a("a", { attrs: { href: "https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0" } }, [e._v(" CAST Extend ")])])]) : e._e()], 1);
    }, Sa = [], Ia = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getSupportedLanguages", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/languages", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve languages. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve pending operations."), t.t0);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "setOnlineMode", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, a = "CALL artemis.set.onlineMode(".concat(t, ");"), e.next = 4, this.neo4jal.execute(a);
                case 4:
                  return r = e.sent, n = r.records[0].get(0), e.abrupt("return", Boolean(n));
                case 9:
                  throw e.prev = 9, e.t0 = e["catch"](0), console.error("Something went wrong trying to change the online mode parameter.", e.t0), e.t0;
                case 13:
                case"end":
                  return e.stop();
              }
            }), e, this, [[0, 9]]);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getOnlineMode", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = "CALL artemis.get.onlineMode();", e.next = 3, this.neo4jal.execute(t);
                case 3:
                  return a = e.sent, r = a.records[0].get(0), e.abrupt("return", Boolean(r));
                case 6:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "setRepositoryMode", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, a = "CALL artemis.set.repositoryMode(".concat(t, ");"), e.next = 4, this.neo4jal.execute(a);
                case 4:
                  return r = e.sent, n = r.records[0].get(0), e.abrupt("return", Boolean(n));
                case 9:
                  throw e.prev = 9, e.t0 = e["catch"](0), console.error("Something went wrong trying to change the Repository mode parameter.", e.t0), e.t0;
                case 13:
                case"end":
                  return e.stop();
              }
            }), e, this, [[0, 9]]);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getRepositoryMode", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = "CALL artemis.get.repositoryMode();", e.next = 3, this.neo4jal.execute(t);
                case 3:
                  return a = e.sent, r = a.records[0].get(0), e.abrupt("return", Boolean(r));
                case 6:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "setMailsRecipients", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.prev = 0, a = "CALL artemis.set.mailsRecipients(".concat(t, ");"), e.next = 4, this.neo4jal.execute(a);
                case 4:
                  return r = e.sent, n = r.records[0].get(0), e.abrupt("return", Boolean(n));
                case 9:
                  throw e.prev = 9, e.t0 = e["catch"](0), console.error("Something went wrong trying to change the Mail recipients list.", e.t0), e.t0;
                case 13:
                case"end":
                  return e.stop();
              }
            }), e, this, [[0, 9]]);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getMailsRecipients", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = "CALL artemis.get.mailsRecipients();", e.next = 3, this.neo4jal.execute(t);
                case 3:
                  return a = e.sent, r = a.records[0].get(0), e.abrupt("return", r.split(","));
                case 6:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "launchExportAll", value: function() {
          var t = e.API_BASE_URL + "/api/artemis/utils/export/all", a = window.open(t);
          window.setTimeout((function() {
            a.close();
          }), 1e3);
        },
      }, {
        key: "triggerImport", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/utils/import/frameworks", t.prev = 1, n = new FormData, n.append("file", a), t.next = 6, I.a.post(r, n, { headers: { "Content-Type": "multipart/form-data" } });
                case 6:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  return o = i.data, t.abrupt("return", String(o.data));
                case 12:
                  throw new Error("Failed to perform the extraction of selected artifacts. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to extract the Artifact list."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Ia.API_BASE_URL = T.getUrl(), Ia.neo4jal = R.getInstance();
    var Ta = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getDemeterVersion", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/extensions/demeter/version", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, 200 == r.status ? (i = r.data, n = String(i.data)) : console.warn("Failed to retrieve version. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve Artemis version."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getArtemisVersion", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/extensions/artemis/version", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, 200 == r.status ? (i = r.data, n = String(i.data)) : console.warn("Failed to retrieve version. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve Artemis version."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Ta.API_BASE_URL = T.getUrl();
    var Ea, La = function() {
      function e() {
        Object(g["a"])(this, e), this.timestampFinish = 0, this.data = [];
      }

      return Object(f["a"])(e, null, [{
        key: "fromRecord", value: function(t) {
          if (null == t) return null;
          var a = new e;
          return a.id = String(t["id"] || ""), a.application = String(t["application"]) || "No Application", a.timestampStart = Number(t["timestampStart"]) || 0, a.timestampFinish = Number(t["timestampFinish"]) || 0, a.language = String(t["language"]) || "No language", a.status = t["status"], a.data = t["data"] || [], a;
        },
      }]), e;
    }(), Va = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "launchDetection", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/detection/launch", i = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Boolean(s.data));
                case 11:
                  return console.warn("Failed to launch the detection. Status (".concat(o.status, ")")), t.abrupt("return", !1);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve the status of the application."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "cancelDetection", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/detection/stop", i = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Boolean(s.data));
                case 11:
                  return console.warn("Failed to stop the detection. Status (".concat(o.status, ")")), t.abrupt("return", !1);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(n, ". The detection was not stopped."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getPendingDetections", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/pending", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve pending operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve pending operations."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getSuccessfulDetections", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/successes", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve successful operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve successful operations."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDetectionResults", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/results", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve successful operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve successful operations."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getFailedDetections", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/failed", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve failed operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve failed operations."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getApplicationStatus", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (n = e.API_BASE_URL + "/api/artemis/detection/status/".concat(a, "?language=").concat(r), null != a && null != r) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return", null);
                case 3:
                  return t.prev = 3, t.next = 6, I.a.get(n);
                case 6:
                  if (i = t.sent, console.log("REs Detection", i), 200 != i.status) {
                    t.next = 15;
                    break;
                  }
                  if (o = i.data, null != o) {
                    t.next = 12;
                    break;
                  }
                  return t.abrupt("return", null);
                case 12:
                  return t.abrupt("return", La.fromRecord(o.data));
                case 15:
                  throw console.warn("Failed to retrieve the status of the application. Status (".concat(i.status, ")")), new Error(i.data);
                case 17:
                  t.next = 23;
                  break;
                case 19:
                  throw t.prev = 19, t.t0 = t["catch"](3), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve pending operations."), t.t0), t.t0;
                case 23:
                case"end":
                  return t.stop();
              }
            }), t, null, [[3, 19]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDetectionQueue", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/get", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve the queue of detection. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the queue of detection.."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getCurrent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/current", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 12;
                    break;
                  }
                  if (n = r.data, null != r.data) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", null);
                case 9:
                  return t.abrupt("return", n.data);
                case 12:
                  console.warn("Failed to retrieve the current detection. Status (".concat(r.status, ")"));
                case 13:
                  return t.abrupt("return", null);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the current detection."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "flushDetectionQueue", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/flush", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Boolean(n.data));
                case 10:
                  return console.warn("Failed to retrieve the queue of detection. Status (".concat(r.status, ")")), t.abrupt("return", !1);
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the queue of detection.."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addCandidatesToDetection", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/detection/queue/add", t.prev = 1, n = { candidates: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  return o = i.data, t.abrupt("return", Number(o.data));
                case 11:
                  console.warn("Failed to add the list of candidates to the detection queue. Status (".concat(i.status, ")"));
                case 12:
                  return t.abrupt("return", 0);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add the list of candidates to the detection queue."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDetectionCandidates", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/candidates", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to get the list of candidates. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to get the list of candidates ."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Va.API_BASE_URL = T.getUrl(), function(e) {
      e[e["NotStarted"] = 0] = "NotStarted", e[e["Pending"] = 1] = "Pending", e[e["Success"] = 2] = "Success", e[e["Failure"] = 3] = "Failure", e[e["Unknown"] = 4] = "Unknown";
    }(Ea || (Ea = {}));
    var Fa = n["a"].extend({
        name: "ActionTileViewer", computed: {
          filteredFrameworks: function() {
            return this.showOnlyFrameworks ? this.resultDetection.filter((function(e) {
              return "Framework" == e.type;
            })) : this.resultDetection;
          }, getApplicationName: function() {
            return this.$store.state.applicationName;
          },
        }, data: function() {
          return {
            headers: [{ text: "Framework", align: "start", sortable: !0, value: "name" }, {
              text: "Description",
              value: "description",
            }, { text: "Category", value: "category" }, { text: "Detected as ", value: "type" }],
            showOnlyFrameworks: !0,
            disabledTile: !1,
            version: "Unknown",
            diplayNotInstalled: !1,
            loadingConfiguration: !1,
            loadingOnlineMode: !1,
            loadingRepositoryMode: !1,
            runningArtemis: !1,
            errorOnlineMode: !1,
            errorRepositoryMode: !1,
            errorDetection: "",
            message: "",
            filterValidFramework: !0,
            search: "",
            ongoingDetection: "",
            resultDetection: [],
            selectedLanguage: "",
            availableLanguages: [],
            checkingStatus: !1,
            toDisplay: "",
            detection: null,
            application: "",
            onlineMode: !0,
            repositoryMode: !0,
            workspacePath: "",
            flaggedAsToDestroy: !1,
          };
        }, methods: {
          getConfiguration: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return e.loadingConfiguration = !0, t.next = 3, Ia.getOnlineMode();
                  case 3:
                    return e.onlineMode = t.sent, t.next = 6, Ia.getRepositoryMode();
                  case 6:
                    return e.repositoryMode = t.sent, t.next = 9, L.getArtemisWorkspace();
                  case 9:
                    return e.workspacePath = t.sent, t.next = 12, Ia.getSupportedLanguages().then((function(t) {
                      e.availableLanguages = t, e.selectedLanguage = t[0];
                    })).catch((function(e) {
                      console.error("Failed to retrieve languages.", e);
                    }));
                  case 12:
                    e.loadingConfiguration = !1;
                  case 13:
                  case"end":
                    return t.stop();
                }
              }), t);
            })))();
          }, setOnlineMode: function() {
            var e = this;
            this.loadingOnlineMode = !0, Ia.setOnlineMode(this.onlineMode).then((function(t) {
              e.onlineMode = t;
            })).catch((function(t) {
              e.errorOnlineMode = !0, console.error("Failed to change online mode of Artemis Framework detector.", t);
            })).then((function() {
              e.loadingOnlineMode = !1;
            }));
          }, setRepositoryMode: function() {
            var e = this;
            this.loadingOnlineMode = !0, Ia.setRepositoryMode(this.repositoryMode).then((function(t) {
              e.repositoryMode = t;
            })).catch((function(t) {
              console.error("Failed to change the repository setting of Artemis.", t), e.errorRepositoryMode = !0;
            })).then((function() {
              e.loadingOnlineMode = !1;
            }));
          }, milisecondsToDhms: function(e) {
            var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
              n = Math.floor(t % 3600 / 60), i = Math.floor(t % 60), o = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
              s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
              c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
              l = i > 0 ? i + (1 == i ? " second" : " seconds") : "";
            return o + s + c + l;
          }, countDownTimer: function() {
            this.toDisplay = this.milisecondsToDhms(Date.now() - this.detection.timestampStart), setTimeout(this.countDownTimer, 1e3);
          }, checkStatus: function() {
            var e = this;
            this.checkingStatus || null == this.selectedLanguage || "" != this.application && (this.checkingStatus = !0, Va.getApplicationStatus(this.application, this.selectedLanguage).then((function(t) {
              if (null == t) return e.message = "No detection was launched for ".concat(e.application), e.ongoingDetection = "", e.errorDetection = "", !0;
              switch (e.detection = t, t.status) {
                case Ea.Pending:
                  e.ongoingDetection = "On-going detection for the ".concat(e.application, " application."), e.runningArtemis = !0, e.errorDetection = "", e.countDownTimer();
                  break;
                case Ea.Success:
                  e.resultDetection = t.data, e.runningArtemis = !1, e.errorDetection = "", e.ongoingDetection = "";
                  break;
                case Ea.Failure:
                  e.errorDetection = "An error occurred during the detection. Please check the logs", e.ongoingDetection = "", e.runningArtemis = !1;
                  break;
                default:
                  break;
              }
            })).catch((function(t) {
              return console.error("Failed to retrieve the status of the application ".concat(e.application, "."), t), e.errorDetection = "Failed to retrieve the status of the application ".concat(e.application, "."), !0;
            })).finally((function() {
              e.checkingStatus = !1;
            })));
          }, launchDetection: function() {
            var e = this;
            this.displayErrorDetection = !1, Va.launchDetection(this.application, this.selectedLanguage).then((function(t) {
              if (!t) throw new Error("The server refused to launch the detection. Check the logs.");
              e.runningArtemis = !0;
            })).catch((function(t) {
              console.error("The analysis of the application ".concat(e.application, " failed to launch."), t), e.errorDetection = t;
            }));
          }, stopDetection: function() {
            var e = this;
            this.displayErrorDetection = !1, Va.cancelDetection(this.application, this.selectedLanguage).then((function(t) {
              if (!t) throw new Error("The server refused to stopped the detection. Check the logs.");
              e.runningArtemis = !1;
            })).catch((function(t) {
              console.error("Failed to stop the on-going analysis.", t), e.errorDetection = "Failed to stop the on-going analysis. Error : ".concat(t);
            }));
          }, constantStatusCheck: function() {
            if (!this.diplayNotInstalled) {
              var e = this.checkStatus();
              e || this.flaggedAsToDestroy || setTimeout(this.constantStatusCheck, 5e3);
            }
          }, cancelDetection: function() {
          },
        }, mounted: function() {
          var e = this;
          this.disabledTile = !0, this.resultDetection = [], Ta.getArtemisVersion().then(function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return e.version = a, e.disabledTile = !1, e.application = e.$store.state.applicationName, t.next = 5, e.getConfiguration();
                  case 5:
                  case"end":
                    return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }()).catch((function(t) {
            console.error("The Artemis extension wasn't detected. The  function will be limited. Please install the Artemis extension", t), e.diplayNotInstalled = !0;
          })), this.constantStatusCheck();
        }, beforeDestroy: function() {
          this.flaggedAsToDestroy = !0;
        }, watch: {
          getApplicationName: function(e) {
            this.application = e, this.resultDetection = [], this.runningArtemis = !1, this.checkStatus();
          },
        },
      }), Oa = Fa, ja = (a("0658"), a("0798")), Ma = a("ac7c"), Da = a("8fea"), Pa = a("e0c7"), Na = a("b73d"),
      Ba = Object(u["a"])(Oa, Ra, Sa, !1, null, null, null), Ua = Ba.exports;
    M()(Ba, {
      VAlert: ja["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VCol: U["a"],
      VDataTable: Da["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSpacer: z["a"],
      VSubheader: Pa["a"],
      VSwitch: Na["a"],
      VTextField: Y["a"],
    });
    var Ga = n["a"].extend({
      name: "ExplorationStep",
      components: { ActionTileViewer: Ua },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName;
      },
      data: function() {
        return { application: "" };
      },
      methods: {},
      watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), $a = Ga, qa = (a("252f"), Object(u["a"])($a, Ca, Aa, !1, null, null, null)), Ha = qa.exports;
    M()(qa, { VContainer: G["a"], VDivider: $["a"] });
    var Wa = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", [a("BreakdownApplication")], 1)], 1);
    }, Qa = [], za = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "ma-2",
        attrs: { width: "100%" },
      }, [a("v-card-title", [a("h3", { staticClass: "text-h4 mb-4" }, [e._v(" Review the breakdown of the " + e._s(e.application) + " application ")]), a("br"), a("v-spacer"), a("v-btn", {
        staticClass: "px-4",
        attrs: { icon: "", large: "", color: "green" },
        on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", [a("v-icon", { attrs: { color: "red" } }, [e._v("mdi-message-alert-outline")]), e._v(" Make sure the agent are running if you planned to extract the artifacts from the breakdown. ")], 1), a("v-card-text", [a("v-container", [a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Quick application overview : ")])]), a("v-row", { staticClass: "mx-4" }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [e._v("Number of levels: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "8",
        },
      }, [a("strong", [e._v(e._s(e.insights.levels5.length || 0))])])], 1), a("v-row", { staticClass: "mx-4" }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [e._v("Number of modules: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "8",
        },
      }, [a("strong", [e._v(e._s(e.insights.modules.length || 0))])])], 1), a("v-row", { staticClass: "mx-4" }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [e._v("Number of architectures: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "8",
        },
      }, [a("strong", [e._v(e._s(e.insights.architectures.length || 0))])])], 1), a("v-row", { staticClass: "mx-4" }, [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [e._v("Supported technologies for the breakdown: ")]), a("v-col", {
        attrs: {
          cols: "12",
          md: "8",
        },
      }, [a("strong", [e._v(e._s(e.insights.technologies || "None"))])])], 1), a("v-row", { staticClass: "mt-6" }, [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Select the type of modification (Selected: " + e._s(e.selectedTarget) + "): ")])]), a("v-row", { staticClass: "mx-4 mb-6" }, e._l(e.targetList, (function(t) {
        return a("v-btn", {
          key: t.value,
          staticClass: "mx-2",
          attrs: { color: e.selectedTarget !== t.value ? "grey" : "persianGrey", dark: "" },
          on: {
            click: function(a) {
              e.selectedTarget = t.value;
            },
          },
        }, [e._v(" " + e._s(t.text) + " ")]);
      })), 1), a("v-row", { staticClass: "mx-4 mb-3" }, [a("p", [e._v(" Select the type of modification you want to apply on the application. The level and the modules creation usually takes between few seconds and 1 minutes for very large number of nodes. The creation of Architectures views implying more resources, the operation can take up to few minutes to be completed on large set of nodes."), a("br"), a("b", [e._v("It's not recommended to relaunch directly an architecture grouping")]), e._v(" if you're not seeing the results in CAST Imaging."), a("br"), e._v(" Do not forget to refresh your views to see the changes. ")])]), a("v-row", [a("h3", { staticClass: "mx-4 mb-2" }, [e._v(" Select the externality: " + e._s(e.classExternality) + " ")])]), a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-switch", {
        attrs: {
          label: e.classExternality ? "External class" : "Internal classes",
          loading: e.loadingArtifacts,
          disabled: e.loadingArtifacts,
          color: "primary",
        }, model: {
          value: e.classExternality, callback: function(t) {
            e.classExternality = t;
          }, expression: "classExternality",
        },
      })], 1), a("v-row", [a("h3", { staticClass: "mx-4 mb-2 mt-3" }, [e._v("Select the language:")])]), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-row", { staticClass: "pa-4" }, [a("v-select", {
        staticClass: "mx-2",
        attrs: {
          items: e.languageItems,
          loading: e.loadingArtifacts,
          disabled: e.loadingArtifacts,
          label: "Language",
          outlined: "",
        },
        on: {
          change: function(t) {
            return e.getArtifactTree();
          },
        },
        model: {
          value: e.defaultLanguage, callback: function(t) {
            e.defaultLanguage = t;
          }, expression: "defaultLanguage",
        },
      })], 1), a("v-row", [a("h3", { staticClass: "mx-4 mb-2" }, [e._v("Select the rules to export:")])]), a("v-row", { staticClass: "mb-4" }, [e.loadingArtifacts ? a("v-progress-circular", {
        staticClass: "ma-12",
        attrs: { size: 50, width: 7, color: "persianGrey", indeterminate: "" },
      }) : e._e(), e.loadingArtifacts ? e._e() : a("v-treeview", {
        attrs: { selectable: "", items: e.artifactItems, "selection-type": "independent", "return-object": "" },
        scopedSlots: e._u([{
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", [a("v-row", [a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("p", e._g(e._b({
                    staticClass: "my-2",
                    staticStyle: { "word-break": "break-word" },
                  }, "p", i, !1), n), [a("strong", [e._v(e._s(r.customName || r.name) + " ")]), a("i", { staticClass: "text--persianGrey" }, [e._v("( items count : " + e._s(r.count) + ")")]), a("br")])];
                },
              }], null, !0),
            }, [a("span", [e._v("Full name: " + e._s(r.fullName))])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [e.isDisplayedProperty("level") ? a("v-icon", e._g(e._b({
                    staticClass: "mx-1",
                    attrs: { color: "blue", dark: "" },
                  }, "v-icon", n, !1), r), [e._v(" mdi-alpha-l-circle ")]) : e._e()];
                },
              }], null, !0),
            }, [a("span", [e._v("In levels : " + e._s(r.levels))])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [e.isDisplayedProperty("module") ? a("v-icon", e._g(e._b({
                    staticClass: "mx-1",
                    attrs: { color: "red", dark: "" },
                  }, "v-icon", n, !1), r), [e._v(" mdi-alpha-m-circle ")]) : e._e()];
                },
              }], null, !0),
            }, [a("span", [e._v("In modules : " + e._s(r.modules))])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [e.isDisplayedProperty("architecture") ? a("v-icon", e._g(e._b({
                    staticClass: "mx-1",
                    attrs: { color: "persianGrey", dark: "" },
                  }, "v-icon", n, !1), r), [e._v(" mdi-alpha-s-circle ")]) : e._e()];
                },
              }], null, !0),
            }, [a("span", [e._v("In subsets : " + e._s(r.subsets))])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [a("v-icon", e._g(e._b({
                    staticClass: "mx-1",
                    attrs: { color: "orange", dark: "" },
                  }, "v-icon", n, !1), r), [e._v(" mdi-alpha-i-circle ")])];
                },
              }], null, !0),
            }, [a("span", [e._v("Object types : " + e._s(r.objectTypes))])]), r === e.editItem ? a("v-text-field", {
              staticClass: "mx-1",
              attrs: { dense: "", label: "Custom Name" },
              model: {
                value: r.customName, callback: function(t) {
                  e.$set(r, "customName", t);
                }, expression: "item.customName",
              },
            }) : e._e(), r !== e.editItem ? a("v-icon", {
              staticClass: "ma-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.editArtifact(r);
                },
              },
            }, [e._v("mdi-pencil")]) : e._e(), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-icon", e._g(e._b({
                    staticClass: "ma-2", on: {
                      click: function(t) {
                        return e.selectFramework(r);
                      },
                    },
                  }, "v-icon", i, !1), n), [e._v("mdi-keyboard-caps")])];
                },
              }], null, !0),
            }, [a("span", [e._v("Extract as a Framework")])]), r === e.editItem ? a("v-icon", {
              staticClass: "ma-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  e.editItem = null;
                },
              },
            }, [e._v("mdi-close")]) : e._e()], 1), a("v-row", [a("p", { staticClass: "text-wrap" }, [e._v(e._s(e.toDisplayProperty(r)))])])], 1)];
          },
        }], null, !1, 2629934964),
        model: {
          value: e.artifactTree, callback: function(t) {
            e.artifactTree = t;
          }, expression: "artifactTree",
        },
      }), 0 === e.artifactItems.length ? a("p", { staticClass: "pa-4" }, [a("i", [e._v("No object found for this language in the application.")])]) : e._e()], 1), a("v-row", { staticClass: "mx-4 mb-6" }, [a("h3", [e._v(" Do you want the selection in the same group or separated ? ")]), a("p", [e._v(" The same group option will group the selected nodes under the same entity. For levels, they will be grouped under a single level 5. For creating modules and architectures, the group option will group them under the same module/architecture. By choosing the \"Separated\" option for modules and architectures, multiple modules/architectures will be created. ")])]), a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-select", {
        staticClass: "mx-2",
        attrs: { items: e.locationList, "item-text": "text", "item-value": "value", label: "Target", outlined: "" },
        model: {
          value: e.selectedLocation, callback: function(t) {
            e.selectedLocation = t;
          }, expression: "selectedLocation",
        },
      })], 1), "architecture" === e.selectedTarget || "module" === e.selectedTarget || "level" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Enter the name of the " + e._s(e.selectedTarget) + ": ")])]) : e._e(), "architecture" === e.selectedTarget || "module" === e.selectedTarget || "level" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-text-field", {
        staticClass: "mx-2",
        attrs: { label: e.selectedTarget, outlined: "", clearable: "" },
        model: {
          value: e.primaryGroupName, callback: function(t) {
            e.primaryGroupName = t;
          }, expression: "primaryGroupName",
        },
      })], 1) : e._e(), "architecture" === e.selectedTarget && "together" !== e.selectedLocation ? a("v-row", [a("p", { staticClass: "mx-4 mb-6" }, [e._v(" If you choose to extract the nodes separately, one subset will be created by item selected. ")])]) : e._e(), "architecture" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Enter the name of the subset: ")])]) : e._e(), "architecture" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-text-field", {
        staticClass: "mx-2",
        attrs: { label: "subset", outlined: "", clearable: "" },
        model: {
          value: e.secondaryGroupName, callback: function(t) {
            e.secondaryGroupName = t;
          }, expression: "secondaryGroupName",
        },
      })], 1) : e._e(), a("v-row", [a("v-col", { attrs: { cols: "6", md: "6" } }, [a("v-btn", {
        attrs: {
          large: "",
          width: "100%",
        }, on: {
          click: function(t) {
            return e.createQuerySet();
          },
        },
      }, [e._v(" Generate the queries ")])], 1), a("v-col", {
        attrs: {
          cols: "6",
          md: "6",
        },
      }, [a("v-btn", {
        attrs: { color: "persianGrey", width: "100%", dark: "", large: "" }, on: {
          click: function(t) {
            return e.extractArtifacts();
          },
        },
      }, [e._v(" Extract selected nodes ")])], 1)], 1)], 1)], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")]), a("FrameworkDispatch", {
        attrs: {
          model: e.showFrameworkModal,
          artifact: e.selectedArtifact,
        }, on: {
          close: function(t) {
            e.showFrameworkModal = !1;
          },
        },
      })], 1);
    }, Ya = [], Ja = (a("c975"), a("a15b"), a("7db0"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getArtifactList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/artemis/artifacts/all?external=".concat(n), o = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 12;
                    break;
                  }
                  if (c = s.data, !Array.isArray(c.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", c.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to launch the breakdown of the application. Status (".concat(s.status, "). Message: ").concat(s.data, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(i, ". The breakdown failed."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 15]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getArtifactAsTree", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/artemis/artifacts/tree?external=".concat(n), o = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 12;
                    break;
                  }
                  if (c = s.data, !Array.isArray(c.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", c.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to get the Artifact tree of the application. Status (".concat(s.status, "). Message: ").concat(s.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(i, ". Failed to get the Artifact tree."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 15]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "buildQuery", value: function(e, t, a) {
          var r = "$l_" + t;
          return "MATCH (obj:Object:`" + e + "`) WHERE any( x IN ['" + a + "'] WHERE obj.FullName=~x ) SET obj.Tags = CASE WHEN obj.Tags IS NULL THEN ['" + r + "'] ELSE [ x IN obj.Tags WHERE NOT x CONTAINS '$l_' ] + '" + r + "' END  RETURN COUNT(DISTINCT obj) as count;";
        },
      }, {
        key: "getFullNameRec", value: function(e, t) {
          var a = e.name + e.delimiter, r = e.parentId;
          while (r > 0) {
            var n = t.find((function(e) {
              return e.id == r;
            }));
            if (!n) break;
            a = n.name + n.delimiter + a, r = n.parentId;
          }
          return a;
        },
      }, {
        key: "buildQuerySet", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i) {
            var o, s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.getArtifactList(r, n, i);
                case 2:
                  for (s in o = t.sent, a) c = e.getFullNameRec(a[s], o), a[s].name = c;
                  for (u in l = "", a) a[u], l += "<span style='color: #66B245'>// Application : ".concat(r, "  :   ").concat(a[u].customName || a[u].name, " </span><br />"), l += this.buildQuery(r, a[u].customName || a[u].name, a[u].name + "*"), l += "<br /><br />";
                  return t.abrupt("return", l);
                case 7:
                case"end":
                  return t.stop();
              }
            }), t, this);
          })));

          function a(e, a, r, n) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "launchQuerySet", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i, o, s) {
            var c, l, u, d;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return c = e.API_BASE_URL + "/api/artemis/artifacts/extract", l = {
                    application: a,
                    artifactList: r,
                    extractionType: n,
                    groupType: i,
                    primaryGroupName: o,
                    secondaryGroupName: s,
                  }, t.prev = 2, t.next = 5, I.a.post(c, l);
                case 5:
                  if (u = t.sent, 200 != u.status) {
                    t.next = 11;
                    break;
                  }
                  return d = u.data, t.abrupt("return", d.data);
                case 11:
                  throw new Error("Failed to perform the extraction of selected artifacts. Status (".concat(u.status, "). Message: ").concat(u.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(c, ". Failed to extract the Artifact list."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 14]]);
          })));

          function a(e, a, r, n, i, o) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    Ja.API_BASE_URL = T.getUrl();
    var Xa = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "addRegexNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/add", t.prev = 1, t.next = 4, I.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to add a Regex Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add a Regex Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateRegexNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/update", t.prev = 1, t.next = 4, I.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to update a Regex Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to update a Regex Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/regexes/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, n = [], 200 != r.status) {
                    t.next = 12;
                    break;
                  }
                  return i = r.data, Array.isArray(i.data) && (n = i.data), t.abrupt("return", n);
                case 12:
                  throw new Error("Failed to retrieve the list of Regex Nodes. Status (".concat(r.status, ") : Error : ").concat(r.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the list of Regex Nodes.."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "testRegex", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a, "/test"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to test the Regex Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to test the Regex Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getRegexRequest", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a, "/request"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", String(i.data));
                case 10:
                  throw new Error("Failed to get the request the Regex Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to get the request the Regex Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteRegexNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a), t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to delete the Regex Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete the Regex Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllNodesAsTree", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getAllNode();
                case 2:
                  for (a = t.sent, r = a.filter((function(e) {
                    return -1 == e.parentId;
                  })), n = a.filter((function(e) {
                    return -1 == e.parentId;
                  })), i = [], o = 0; o < n.length; o++) {
                    for (c in s = n[o], a) s.id == a[c].parentId && (s.children || (s.children = []), s.children.push(a[c]), n.push(a[c]));
                    i.push(s), n.splice(o, 1);
                  }
                  return t.abrupt("return", r);
                case 8:
                case"end":
                  return t.stop();
              }
            }), t);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Xa.API_BASE_URL = T.getUrl();
    var Za = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getStatus", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/status"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, i = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  o = n.data, i = Boolean(o.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", i);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Something went wrong trying to change the status of agent ".concat(a, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getPrefix", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/prefix"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", String(i.data));
                case 10:
                  throw new Error("Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Something went wrong trying to get the prefix of agent ".concat(a, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "stopAgent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/stop"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, i = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  o = n.data, i = Boolean(o.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", i);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Something went wrong trying to change the status of agent ".concat(a, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "startAgent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/start"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, i = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  o = n.data, i = Boolean(o.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", i);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Something went wrong trying to change the status of agent ".concat(a, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "forceAgent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/force"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, i = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  o = n.data, i = Boolean(o.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", i);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Something went wrong trying to force the action of the agent ".concat(a, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Za.API_BASE_URL = T.getUrl();
    var Ka = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { persistent: "", "max-width": "600px" },
        model: {
          value: e.model, callback: function(t) {
            e.model = t;
          }, expression: "model",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v("Flag as a framework")])]), a("v-card-subtitle", { staticClass: "my-2" }, [e._v(" You're about to extract a framework. Please choose between a extraction to a custom framework rule for this application / client or if you want to flag it as a framework for all the future discovery. ")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "justify-space-around" }, [a("v-btn", {
        class: { "button-glow": e.blink },
        attrs: { "x-large": "", tile: "", color: "custom" !== e.choice ? "grey" : "persianGrey", dark: "" },
        on: {
          click: function(t) {
            e.choice = "custom";
          },
        },
      }, [e._v(" Create a Custom rule ")]), a("v-btn", {
        class: { "button-glow": e.blink },
        attrs: { "x-large": "", tile: "", color: "framework" !== e.choice ? "grey" : "persianGrey", dark: "" },
        on: {
          click: function(t) {
            e.choice = "framework";
          },
        },
      }, [e._v(" Flag as a Framework ")])], 1), a("v-row", { staticClass: "mt-8" }, ["custom" === e.choice ? a("v-text-field", {
        attrs: {
          rules: [function(e) {
            return !!e || "A name is required";
          }], label: "Name *", required: "",
        }, model: {
          value: e.frameworkArtifact.fullName, callback: function(t) {
            e.$set(e.frameworkArtifact, "fullName", t);
          }, expression: "frameworkArtifact.fullName",
        },
      }) : e._e(), "framework" === e.choice ? a("v-text-field", {
        attrs: {
          rules: [function(e) {
            return !!e || "A name is required";
          }], label: "Name *", required: "",
        }, model: {
          value: e.frameworkArtifact.name, callback: function(t) {
            e.$set(e.frameworkArtifact, "name", t);
          }, expression: "frameworkArtifact.name",
        },
      }) : e._e()], 1), a("v-row", { staticClass: "mt-4" }, [a("v-text-field", {
        attrs: {
          rules: [function(e) {
            return !!e || "A pattern is required";
          }], label: "Pattern used *", required: "",
        }, model: {
          value: e.frameworkArtifact.pattern, callback: function(t) {
            e.$set(e.frameworkArtifact, "pattern", t);
          }, expression: "frameworkArtifact.pattern",
        },
      })], 1), a("v-row", { staticClass: "mt-4" }, [a("v-checkbox", {
        attrs: {
          label: "Set pattern as regex",
          required: "",
        }, model: {
          value: e.frameworkArtifact.isRegex, callback: function(t) {
            e.$set(e.frameworkArtifact, "isRegex", t);
          }, expression: "frameworkArtifact.isRegex",
        },
      }), a("span", { staticClass: "subtitle-2" }, [a("p", [e._v(" If not selected, Artemis will search objects with their names equals to the pattern. ")])])], 1), a("v-row", { staticClass: "mt-5" }, [a("v-select", {
        attrs: {
          items: e.authorizedType,
          chips: "",
          label: "Select the object types *",
          multiple: "",
          outlined: "",
        }, model: {
          value: e.frameworkArtifact.objectTypes, callback: function(t) {
            e.$set(e.frameworkArtifact, "objectTypes", t);
          }, expression: "frameworkArtifact.objectTypes",
        },
      })], 1), a("v-row", ["framework" === e.choice ? a("v-autocomplete", {
        attrs: {
          label: "Select a category",
          loading: e.categoriesLoading,
          items: e.categoriesFramework,
          "item-value": "id",
          "item-text": "name",
          "search-input": e.searchCategories,
          outlined: "",
          "auto-select-first": "",
        }, on: {
          "update:searchInput": function(t) {
            e.searchCategories = t;
          }, "update:search-input": function(t) {
            e.searchCategories = t;
          },
        }, model: {
          value: e.category, callback: function(t) {
            e.category = t;
          }, expression: "category",
        },
      }) : e._e()], 1), a("v-row", { staticClass: "mt-5" }, [a("v-textarea", {
        attrs: {
          clearable: "",
          "clear-icon": "mdi-close-circle",
          label: "Description of the framework",
        }, model: {
          value: e.description, callback: function(t) {
            e.description = t;
          }, expression: "description",
        },
      })], 1), 0 !== e.error.length ? a("v-row", { staticClass: "red--text mt-3" }, [a("v-icon", {
        staticClass: "button-glow",
        attrs: { color: "red" },
      }, [e._v("mdi-message-alert-outline")]), e._v(" " + e._s(e.error) + " ")], 1) : e._e()], 1), a("small", [e._v("*indicates required field")])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "red darken-1",
          text: "",
        }, on: {
          click: function(t) {
            return e.$emit("close");
          },
        },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "" }, on: {
          click: function(t) {
            return e.validate();
          },
        },
      }, [e._v(" Save ")])], 1)], 1)], 1);
    }, er = [], tr = (a("04d3"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "addNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category", t.prev = 1, t.next = 4, I.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to add a Category Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add a Category Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category", t.prev = 1, t.next = 4, I.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to update a Category Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to update a Category Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category/".concat(a.id), t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to delete a Category Node. Status (".concat(n.status, ") : Error : ").concat(n.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete a Category Node.."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/category/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, n = [], 200 != r.status) {
                    t.next = 12;
                    break;
                  }
                  return i = r.data, Array.isArray(i.data) && (n = i.data), t.abrupt("return", n);
                case 12:
                  throw new Error("Failed to retrieve the list of Category Nodes. Status (".concat(r.status, ") : Error : ").concat(r.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the list of Category Nodes.."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    tr.API_BASE_URL = T.getUrl();
    var ar = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "findFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/frameworks/find/", t.prev = 1, i = a.replace(" ", "+"), n += i, r && "" != r && (o = r.replace(" ", "+"), n += "?internalType=" + o), t.next = 7, I.a.get(n);
                case 7:
                  return s = t.sent, c = [], 200 == s.status ? (l = s.data, Array.isArray(l.data) && (c = l.data)) : console.warn("Failed to retrieve frameworks by its name. Status (".concat(s.status, ")")), t.abrupt("return", c);
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve frameworks by its name."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getTotalFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/total", t.prev = 1, a && "" != a && (n = a.replace(" ", "+"), r += "?internalType=" + n), t.next = 5, I.a.get(r);
                case 5:
                  return i = t.sent, 200 == i.status ? (s = i.data, o = Number(s.data)) : console.warn("Failed to retrieve number of frameworks by internalType. Status (".concat(i.status, ")")), t.abrupt("return", o);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve frameworks by internalType."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "searchFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/search/", t.prev = 1, t.next = 4, I.a.get(r + a);
                case 4:
                  return n = t.sent, i = [], 200 == n.status ? (o = n.data, Array.isArray(o.data) && (i = o.data)) : console.warn("Failed to search the frameworks. Status (".concat(n.status, ")")), t.abrupt("return", i);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to search the frameworks."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getInternalTypes", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/internalTypes", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve list of internal type. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve list of internal type."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getToValidateFrameworks", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/toValidate", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error(" Bad status. Status (".concat(r.status, "). Query-Content : ").concat(r.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve a the list of frameworks to validate."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDuplicatesFrameworks", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/duplicates", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error(" Bad status. Status (".concat(r.status, "). Query-Content : ").concat(r.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve a the list of duplicates frameworks."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "launchAutoCleaning", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/autoClean", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status && 304 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Number(n.data));
                case 10:
                  throw new Error(" Bad status. Status (".concat(r.status, "). Query-Content : ").concat(r.data));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve execute the auto cleaning on the server."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getFrameworkBatch", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/artemis/frameworks/batch", t.prev = 1, i += "?start=" + a, i += "&stop=" + r, n && "" != n && (o = n.replace(" ", "+"), i += "&internalType=" + o), t.next = 7, I.a.get(i);
                case 7:
                  return s = t.sent, c = [], 200 == s.status ? (l = s.data, Array.isArray(l.data) && (c = l.data, console.log(c))) : console.warn("Failed to retrieve a batch of frameworks by internalType. Status (".concat(s.status, ")")), t.abrupt("return", c);
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to retrieve a batch frameworks by internalType."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateFrameworks", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/artemis/frameworks/update", t.prev = 1, o = {}, o.oldName = a, o.oldInternalType = r, o.framework = n, t.next = 8, I.a.post(i, o);
                case 8:
                  return s = t.sent, c = !1, 200 == s.status ? (l = s.data, c = Boolean(l.data)) : console.warn("Failed to retrieve a batch of frameworks by internalType. Status (".concat(s.status, ")")), t.abrupt("return", c);
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to retrieve a batch frameworks by internalType."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateFrameworksById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/updateByID", t.prev = 1, n = {}, n.framework = a, t.next = 6, I.a.post(r, n);
                case 6:
                  return i = t.sent, o = !1, 200 == i.status ? (s = i.data, o = Boolean(s.data)) : console.warn("Failed to update a framework by its Id. Status (".concat(i.status, ")")), t.abrupt("return", o);
                case 12:
                  throw t.prev = 12, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to update a framework by its Id."), t.t0), t.t0;
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 12]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/add", t.prev = 1, n = {}, n.framework = a, t.next = 6, I.a.post(r, n);
                case 6:
                  return i = t.sent, o = !1, 200 == i.status ? (s = i.data, o = Boolean(s.data)) : console.warn("Failed to add a framework by its Id. Status (".concat(i.status, ")")), t.abrupt("return", o);
                case 12:
                  throw t.prev = 12, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add a framework."), t.t0), t.t0;
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 12]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/delete", t.prev = 1, n = { id: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  return i = t.sent, o = !1, 200 == i.status ? (s = i.data, o = Boolean(s.data)) : console.warn("Failed to delete a framework by its Id. Status (".concat(i.status, ")")), t.abrupt("return", o);
                case 11:
                  throw t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete a framework."), t.t0), t.t0;
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "toggleFramework", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/toggle/validation", t.prev = 1, n = { id: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  return i = t.sent, o = !1, 200 == i.status ? (s = i.data, o = Boolean(s.data)) : console.warn("Failed to toggle the type of a framework by its Id. Status (".concat(i.status, ")")), t.abrupt("return", o);
                case 11:
                  throw t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to toggle the type of the API : ".concat(r, ". Failed to toggle a framework."), t.t0), t.t0;
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    ar.API_BASE_URL = T.getUrl();
    var rr = n["a"].extend({
      name: "FrameworkDispatch", props: { model: Boolean, artifact: Object }, watch: {
        artifact: function() {
          this.frameworkArtifact = this.artifact, this.frameworkArtifact.children && this.frameworkArtifact.children > 0 && (this.frameworkArtifact.fullName += this.frameworkArtifact.delimiter + "*"), this.authorizedType = this.frameworkArtifact.objectTypes, this.frameworkArtifact.pattern = this.frameworkArtifact.fullName + ".*", this.frameworkArtifact.isRegex = !0;
        }, choice: function() {
          this.error = "", this.blink = !1, this.getCategories();
        },
      }, data: function() {
        return {
          blink: !1,
          error: "",
          choice: "",
          frameworkArtifact: {},
          authorizedType: [],
          category: null,
          description: "",
          searchCategories: null,
          categoriesFramework: [],
          categoriesLoading: !1,
        };
      }, methods: {
        validate: function() {
          "" == this.choice && (this.error = "You must select a type of extraction for the framework.", this.blink = !0), "framework" == this.choice && this.sendToFramework(), "custom" == this.choice && this.sendToCustom();
        }, getCategories: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("framework" != e.choice) {
                    t.next = 6;
                    break;
                  }
                  return e.categoriesLoading = !0, t.next = 4, tr.getAllNode();
                case 4:
                  e.categoriesFramework = t.sent, e.categoriesLoading = !1;
                case 6:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, sendToFramework: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = {
                    name: e.frameworkArtifact.name,
                    description: e.description,
                    type: "Framework",
                    category: e.category,
                    pattern: e.frameworkArtifact.pattern,
                    isRegex: e.frameworkArtifact.isRegex,
                    internalType: e.frameworkArtifact.objectTypes,
                    location: "Custom",
                  }, t.prev = 1, t.next = 4, ar.addFramework(a);
                case 4:
                  e.$emit("close"), t.next = 11;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](1), console.error("Failed to add a Framework.", t.t0), e.error = "Failed to add the framework. Reason : " + t.t0;
                case 11:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 7]]);
          })))();
        }, sendToCustom: function() {
          return Object(r["a"])(regeneratorRuntime.mark((function e() {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  console.log("Send to custom");
                case 1:
                case"end":
                  return e.stop();
              }
            }), e);
          })))();
        },
      },
    }), nr = rr, ir = (a("b112"), Object(u["a"])(nr, Ka, er, !1, null, null, null)), or = ir.exports;
    M()(ir, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTextarea: ne["a"],
    });
    var sr = n["a"].extend({
      name: "BreakdownApplication", components: { FrameworkDispatch: or }, watch: {
        classExternality: function() {
          this.getArtifactTree();
        }, textSnackBar: function() {
          this.snackbarInfo = !0;
        }, getApplicationName: function(e) {
          this.applicationName = e, this.refresh();
        },
      }, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, data: function() {
        return {
          applicationName: "",
          applicationInformation: null,
          insights: {},
          primaryGroupName: "",
          secondaryGroupName: "",
          snackbarInfo: !1,
          textSnackBar: "",
          showFrameworkModal: !1,
          selectedArtifact: null,
          loadingArtifacts: !1,
          artifactItems: [],
          artifactTree: [],
          applicationItems: [],
          languageItems: [],
          defaultApplication: "",
          defaultLanguage: "",
          classExternality: !0,
          locationList: [{ value: "separated", text: "I want them separated" }, {
            value: "together",
            text: "I want them grouped together",
          }],
          selectedLocation: null,
          tree: [],
          treeExport: [],
          fullExportRequest: "",
          fullQuerySet: "",
          targetList: [{ value: "level", text: "Level creation" }, {
            value: "architecture",
            text: "Architecture creation",
          }, { value: "module", text: "Module creation" }],
          selectedTarget: "level",
          editItem: null,
          parentIdList: [],
          items: [],
        };
      }, methods: {
        isDisplayedProperty: function(e) {
          return e !== this.selectedTarget;
        }, toDisplayProperty: function(e) {
          var t;
          switch (this.selectedTarget) {
            case"level":
              t = e.levels;
              break;
            case"module":
              t = e.modules;
              break;
            case"architecture":
              t = e.subsets;
              break;
            default:
              return "";
          }
          if (t.length > 1) {
            var a = t.join(", ");
            return "(Mixed) In ".concat(this.selectedTarget, "s : ").concat(a);
          }
          return 0 == t.length ? "In no ".concat(this.selectedTarget, "s") : "In ".concat(this.selectedTarget, "s : ").concat(t);
        }, selectFramework: function(e) {
          this.showFrameworkModal = !0, this.selectedArtifact = e;
        }, createQuerySet: function() {
          var e = this;
          Ja.buildQuerySet(this.artifactTree, this.defaultApplication, this.defaultLanguage, this.classExternality).then((function(t) {
            e.fullQuerySet = t;
          })).catch((function(t) {
            e.fullQuerySet = t;
          }));
        }, getNodeList: function() {
          var e = this;
          Xa.getAllNode().then((function(t) {
            e.parentIdList = [];
            for (var a = 0; a < t.length; a++) {
              var r = { id: t[a].id, name: t[a].name };
              -1 === e.parentIdList.indexOf(r) && e.parentIdList.push(r);
            }
            e.parentIdList.push({ id: -1, name: "No parent" });
          })).catch((function(e) {
            console.error(e);
          }));
        }, getApplicationAndLanguages: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ue.getListApplications();
                case 3:
                  e.applicationItems = t.sent, e.defaultApplication = e.applicationItems[0], t.next = 10;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](0), console.error("Failed to get the list of the application", t.t0);
                case 10:
                  return t.prev = 10, t.next = 13, Ia.getSupportedLanguages();
                case 13:
                  e.languageItems = t.sent, e.defaultLanguage = e.languageItems[0], t.next = 20;
                  break;
                case 17:
                  t.prev = 17, t.t1 = t["catch"](10), console.error("Failed to retrieve languages.", t.t1);
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 7], [10, 17]]);
          })))();
        }, getArtifactTree: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingArtifacts = !0, t.prev = 1, t.next = 4, Ja.getArtifactAsTree(e.applicationName, e.defaultLanguage, e.classExternality);
                case 4:
                  e.artifactItems = t.sent, t.next = 10;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](1), console.error("Error trying to retrieve the breakdown of ".concat(e.defaultApplication), t.t0);
                case 10:
                  return t.prev = 10, e.loadingArtifacts = !1, t.finish(10);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 7, 10, 13]]);
          })))();
        }, getPrefix: function() {
          var e = this;
          Za.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getApplicationInsights: function() {
          var e = this;
          this.loadingCandidates = !0, ue.getApplicationInsights(this.applicationName).then((function(t) {
            e.insights = t;
          })).catch((function(e) {
            console.error("Failed to get the insights of the application", e);
          })).finally((function() {
            e.loadingCandidates = !1;
          }));
        }, getRequests: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            var r, n;
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  if (0 != e.length) {
                    a.next = 2;
                    break;
                  }
                  return a.abrupt("return");
                case 2:
                  r = "", a.prev = 3, a.t0 = regeneratorRuntime.keys(e);
                case 5:
                  if ((a.t1 = a.t0()).done) {
                    a.next = 20;
                    break;
                  }
                  return n = a.t1.value, r += "<span style='color: #66B245'>// " + e[n].name + "</span><br />", a.t2 = r, a.next = 11, Xa.getRegexRequest(e[n].id);
                case 11:
                  if (a.t3 = a.sent, r = a.t2 += a.t3 + ";<br /><br />", !e[n].children) {
                    a.next = 18;
                    break;
                  }
                  return a.t4 = r, a.next = 17, t.getRequests(e[n].id);
                case 17:
                  r = a.t4 += a.sent;
                case 18:
                  a.next = 5;
                  break;
                case 20:
                  a.next = 25;
                  break;
                case 22:
                  a.prev = 22, a.t5 = a["catch"](3), console.error("Failed to get the request", a.t5);
                case 25:
                  return a.abrupt("return", r);
                case 26:
                case"end":
                  return a.stop();
              }
            }), a, null, [[3, 22]]);
          })))();
        }, buildRequestTree: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getRequests(e.treeExport);
                case 2:
                  e.fullExportRequest = t.sent;
                case 3:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, extractArtifacts: function() {
          var e = this, t = this.selectedTarget;
          Ja.launchQuerySet(this.applicationName, this.artifactTree, this.selectedLocation, this.selectedTarget, this.primaryGroupName, this.secondaryGroupName).then((function(a) {
            e.textSnackBar = "Tags for ".concat(t, " extraction were applied. Make sure the ").concat(t, " agent is running."), e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to perform the extraction. Error : " + t, console.error("Failed to perform the extraction", t);
          }));
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.getApplicationInsights(), t.next = 3, e.getApplicationAndLanguages();
                case 3:
                  e.getArtifactTree();
                case 4:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        },
      }, mounted: function() {
        this.applicationName = this.$store.state.applicationName, this.refresh();
      },
    }), cr = sr, lr = a("eb2a"), ur = Object(u["a"])(cr, za, Ya, !1, null, "67bf104f", null), dr = ur.exports;
    M()(ur, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VSwitch: Na["a"],
      VTextField: Y["a"],
      VTooltip: Fe["a"],
      VTreeview: lr["a"],
    });
    var pr = n["a"].extend({
      name: "BreakdownStep", components: { BreakdownApplication: dr }, data: function() {
        return {};
      },
    }), hr = pr, vr = Object(u["a"])(hr, Wa, Qa, !1, null, null, null), mr = vr.exports;
    M()(vr, { VContainer: G["a"], VRow: Q["a"] });
    var fr = n["a"].extend({
        name: "AnalysisChecker",
        components: { BreakdownStep: mr, ConfigurationStep: _a, ExplorationStep: Ha },
        computed: {
          getApplicationName: function() {
            return this.$store.state.applicationName;
          },
        },
        mounted: function() {
          this.application = this.$store.state.applicationName;
        },
        data: function() {
          return {
            application: "",
            step: 1,
            tab: 0,
            items: [{
              view: "ConfigurationStep",
              name: "Configuration",
              title: "Review the configuration of the ",
              icon: "mdi-folder-cog",
            }, {
              view: "ExplorationStep",
              name: "Frameworks",
              title: "Explore the ",
              icon: "mdi-apple-safari",
            }, { view: "BreakdownStep", name: "Breakdown", title: "Review the breakdown of the ", icon: "mdi-pickaxe" }],
          };
        },
        watch: {
          getApplicationName: function(e) {
            this.application = e;
          },
        },
      }), gr = fr, br = (a("2aa6"), a("71a3")), xr = a("fe57"), wr = Object(u["a"])(gr, Qt, zt, !1, null, null, null),
      kr = wr.exports;
    M()(wr, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var yr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1), e.diplayNotInstalled ? a("div", { attrs: { id: "notInstalledDemter" } }, [a("h2", {
        staticClass: "ma-auto text--h2",
        attrs: { id: "Message" },
      }, [e._v(" The Demeter extension is not installed on this server."), a("br"), e._v(" You must install the Demeter extension to continue on this section."), a("br"), e._v(" Please install the extension from "), a("a", { attrs: { href: "https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0" } }, [e._v(" CAST Extend ")])])]) : e._e()], 1);
    }, _r = [], Cr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { staticClass: "pa-2" }, [a("v-row", { staticClass: "my-6 d-flex flex-column" }, [a("h3", { staticClass: "text-h4 ml-8" }, [e._v("Discover and apply tags on " + e._s(e.application))]), a("p", { staticClass: "ml-8 py-6 pr-10 text-body-1" }, [e._v(" The discovery section is here to help you putting tags on interst points in your application. It matches some predefined patterns, to give you quick ideas of what can be done in the application."), a("br"), e._v(" You can enrich this configuration manually, and create custom generics tags in the "), a("i", [e._v("Tag creator studio")]), e._v(". "), a("br"), e._v(" For more informations on tags and documents, please refer to the official "), a("a", { attrs: { href: "#" } }, [e._v("CAST Imaging documentation")]), e._v(". "), a("br"), a("br"), e._v(" To excecute a tag, you can navigate to the \"use case tree\" on the left column, expand the different use cases, and select the items you wan to execute. The selected items, that will be exeucted, appear on the right panel. "), a("br"), e._v(" If you want more information about a recommendation, you can click on it, to display more details and see the description associated with the tag."), a("br"), a("br"), e._v(" NB: A recommendation displayed in blue means this recommendation will have a good effect on the application you currently selected. ")])]), a("v-card", {
        staticClass: "mx-4",
        attrs: { "min-width": "90%", fluid: "" },
      }, [a("v-toolbar", {
        attrs: {
          color: "charcoal",
          dark: "",
          flat: "",
        },
      }, [a("v-toolbar-title", [e._v("Applicable tags")])], 1), a("v-sheet", { staticClass: "pa-4 persianGrey" }, [a("v-text-field", {
        attrs: {
          label: "Search for Recommendations",
          dark: "",
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          clearable: "",
          "clear-icon": "mdi-close-circle-outline",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      })], 1), a("v-row", { attrs: { "no-gutters": "" } }, [a("v-col", { attrs: { "max-width": "400px" } }, [e.items && 0 != e.items.length ? e._e() : a("v-card-text", { staticClass: "d-flex justify-center" }, [a("v-progress-circular", {
        staticClass: "mx-auto my-8",
        attrs: { size: 50, color: "primary", indeterminate: "" },
      })], 1), e.application && 0 != e.application.length ? e._e() : a("v-card-text", { staticClass: "d-flex justify-center" }, [a("v-btn", {
        attrs: { color: "info" },
        on: {
          click: function(t) {
            return e.refreshtree();
          },
        },
      }, [e._v("Load tags")])], 1), e.items && 0 != e.items.length ? a("v-card-text", [a("v-treeview", {
        attrs: {
          items: e.items,
          search: e.search,
          "selected-color": "indigo",
          "open-on-click": "",
          selectable: "",
          "return-object": "",
          "expand-icon": "mdi-chevron-down",
          "on-icon": "mdi-bookmark",
          "off-icon": "mdi-bookmark-outline",
          "indeterminate-icon": "mdi-bookmark-minus",
        }, scopedSlots: e._u([{
          key: "label", fn: function(t) {
            var r = t.item;
            return [r.isUseCase ? a("div", [a("p", { staticClass: "pt-4" }, [e._v(e._s(r.title))]), r.groups ? a("span", { staticClass: "red--green" }, [a("i", [e._v("- " + e._s(r.groups.length) + " tags")])]) : e._e()]) : a("div", {
              on: {
                click: function(t) {
                  return e.focusGroup(r);
                },
              },
            }, [a("p", { staticClass: "pt-4" }, [e._v("Tag : " + e._s(r.name))])])];
          },
        }], null, !1, 414057114), model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1) : e._e()], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", [null == e.focusedGroup ? a("h6", { staticClass: "text-subtitle-1" }, [e._v(" No tag selected ")]) : e._e(), a("v-scroll-x-transition", { attrs: { "hide-on-leave": "" } }, [a("v-card-text", [null != e.focusedGroup ? a("div", [a("h5", { staticClass: "text-h5 mb-5" }, [e._v("Focused tag")]), a("strong", { staticClass: "text-subtitle-1 text-decoration-underline" }, [e._v("Name:")]), a("h6", { staticClass: "text-body-1 mb-3" }, [e._v(e._s(e.focusedGroup.name))]), a("strong", { staticClass: "text-subtitle-1 text-decoration-underline" }, [e._v(" Description: ")]), a("h6", { staticClass: "text-body-1 mb-3" }, [e._v(e._s(e.focusedGroup.description))]), a("strong", { staticClass: "text-subtitle-1 text-decoration-underline" }, [e._v(" Number of objects concerned: ")]), a("h6", { staticClass: "text-body-1 mb-3" }, [e._v(e._s(e.focusedGroup.numMatch))]), a("strong", { staticClass: "text-subtitle-1 text-decoration-underline" }, [e._v(" Categories: ")]), a("v-row", e._l(e.focusedGroup.categories, (function(t) {
        return a("v-chip", { key: t, staticClass: "ma-2", attrs: { color: "primary" } }, [e._v(e._s(t))]);
      })), 1)], 1) : e._e()])], 1)], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", [a("v-card-text", [0 === e.tree.length ? a("div", {
        key: "title",
        staticClass: "title font-weight-light grey--text pa-4 text-center",
      }, [e._v(" Select the tags you want to apply ")]) : e._e(), a("v-scroll-x-transition", {
        attrs: {
          group: "",
          "hide-on-leave": "",
        },
      }, e._l(e.tree, (function(t, r) {
        return a("v-chip", {
          key: r,
          staticClass: "ma-1",
          attrs: { color: "grey", dark: "", small: "" },
        }, [a("v-icon", {
          attrs: {
            left: "",
            small: "",
          },
        }, [e._v(" mdi-label ")]), e._v(" " + e._s(t.name || "Cat. " + t.title) + " ")], 1);
      })), 1)], 1)], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-btn", {
        attrs: { text: "" },
        on: {
          click: function(t) {
            e.tree = [];
          },
        },
      }, [e._v(" Reset ")]), a("v-spacer"), e.onGoingQueries.length > 0 ? a("i", { staticClass: "px-4" }, [e._v(" Executing " + e._s(e.onGoingQueries.length) + " " + e._s(1 == e.onGoingQueries.length ? "query" : "queries"))]) : e._e(), a("v-btn", {
        staticClass: "white--text",
        attrs: { color: "green darken-1", loading: e.loadingQueries, depressed: "" },
        on: {
          click: function(t) {
            return e.executeSelectedTags();
          },
        },
      }, [e._v(" Execute " + e._s(e.getToExecuteSize()) + " tags "), a("v-icon", { attrs: { right: "" } }, [e._v(" mdi-animation-play ")])], 1)], 1)], 1), a("v-row", { staticClass: "mt-5 mx-4" }, [a("v-container", [a("v-row", { staticClass: "my-5" }, [a("h4", { staticClass: "text-h5" }, [e._v("Export / Import options")])]), a("v-row", { staticClass: "my-5" }, [a("h4", [e._v("Export a zip file containing tags.")])]), a("v-row", { staticClass: "my-5" }, [a("v-btn", {
        staticClass: "ml-7",
        attrs: { large: "", color: "persianGrey", dark: "" },
        on: { click: e.generateZip },
      }, [e._v(" Generate the export ")])], 1), a("v-row", { staticClass: "my-5" }, [a("h4", [e._v("Import a zip file containing tags.")])]), a("v-row", { staticClass: "my-5" }, [a("v-file-input", {
        attrs: {
          color: "persianGrey",
          counter: "",
          multiple: "",
          placeholder: "Select the Zip containing Paris extensions data",
          "prepend-icon": "mdi-paperclip",
          outlined: "",
          "show-size": 1e3,
        }, scopedSlots: e._u([{
          key: "selection", fn: function(t) {
            var r = t.index, n = t.text;
            return [r < 2 ? a("v-chip", {
              attrs: {
                color: "deep-purple accent-4",
                dark: "",
                label: "",
                small: "",
              },
            }, [e._v(" " + e._s(n) + " ")]) : 2 === r ? a("span", { staticClass: "overline grey--text text--darken-3 mx-2" }, [e._v(" +" + e._s(e.files.length - 2) + " File(s) ")]) : e._e()];
          },
        }]), model: {
          value: e.files, callback: function(t) {
            e.files = t;
          }, expression: "files",
        },
      })], 1)], 1)], 1), a("v-row"), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1);
    }, Ar = [], Rr = (a("4160"), a("159b"), a("2909")), Sr = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getAllUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/useCases/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve the list of use cases. Status (".concat(r.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the list of use cases."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getRootUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/useCases/roots", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve the list of use cases. Status (".concat(r.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the list of use cases."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAttachedUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/attached/" + a + "/useCases", t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve the list of use cases. Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve the list of use cases."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAttachedGroups", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/attached/" + a + "/groups", t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve the list of use cases. Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve the list of use cases."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/add", t.prev = 1, t.next = 4, I.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  console.warn("Failed to add a use cases. Status (".concat(n.status, ")"));
                case 11:
                  return t.abrupt("return", null);
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add a use cases."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/delete/" + a.id, t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 9:
                  throw new Error("Failed to delete the Use Case with Id:".concat(a.id));
                case 10:
                  t.next = 16;
                  break;
                case 12:
                  throw t.prev = 12, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete a use cases."), t.t0), t.t0;
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 12]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addUseCaseWithParent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/addWithParent", t.prev = 1, i = a, i.idParent = r, t.next = 6, I.a.post(n, i);
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to add a use cases. Status (".concat(o.status, ")"));
                case 13:
                  return t.abrupt("return", null);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to add a use cases."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "checkValidity", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/check/validity", t.prev = 1, i = {}, i.request = a, i.awaitedResult = r, t.next = 7, I.a.post(n, i);
                case 7:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 13;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Boolean(s.data));
                case 13:
                  console.warn("Failed to verify the validity of the request. Status (".concat(o.status, ")"));
                case 14:
                  return t.abrupt("return", !1);
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to verify the validity of the request."), t.t0), t.t0;
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "editUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/update", t.prev = 1, i = a, i.parentId = r, t.next = 6, I.a.put(n, i);
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to update a use cases. Status (".concat(o.status, ")"));
                case 13:
                  return t.abrupt("return", null);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to update a use cases."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Sr.API_BASE_URL = T.getUrl();
    var Ir = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getTagResults", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, i, o, s, c, l, u, d, p, h;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.tag.getAsList('".concat(t, "', '").concat(a, "')"), e.next = 3, this.neo4jal.execute(r);
                case 3:
                  for (n = e.sent, i = [], o = 0; o < n.records.length; o++) s = n.records[o], c = Object(C["int"])(s.get("id")).toNumber(), l = s.get("tag"), u = s.get("description") || "No description", d = Object(C["int"])(s.get("numMatch")).toInt(), p = s.get("categories") || "No category", h = s.get("useCase"), i.push({
                    type: "tag",
                    id: c,
                    name: l,
                    description: u,
                    numMatch: d,
                    categories: p,
                    useCase: h,
                  });
                  return e.abrupt("return", i);
                case 7:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t, a) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "executeTag", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, i, o, s, c, l, u, d;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.tag.execute( ".concat(a, ", \"").concat(t, "\");"), e.next = 3, this.neo4jal.execute(r);
                case 3:
                  return n = e.sent, i = n.records[0], o = Object(C["int"])(i.get("id")).toNumber(), s = i.get("tag"), c = i.get("description") || "No description", l = Object(C["int"])(i.get("numMatch")).toInt(), u = i.get("categories") || "No category", d = i.get("useCase"), e.abrupt("return", {
                    type: "tag",
                    id: o,
                    name: s,
                    description: c,
                    numMatch: l,
                    categories: u,
                    useCase: d,
                  });
                case 12:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t, a) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "checkValidity", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = "CALL demeter.tag.validateQuery(\"".concat(t, "\");"), e.next = 3, this.neo4jal.execute(a);
                case 3:
                  if (r = e.sent, 0 != r.records.length) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 6:
                  return e.abrupt("return", "True" == r.records[0].get(0));
                case 7:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "createTag", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = "CALL demeter.tag.add($tag, $request, $activation, $description, $categories, $parentId);", r = {
                    tag: t.tagName,
                    request: t.associatedRequest,
                    activation: t.activation,
                    description: t.description,
                    categories: t.categories,
                    parentId: t.parentUseCasId,
                  }, e.next = 4, this.neo4jal.executeWithParameters(a, r);
                case 4:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }();
    Ir.neo4jal = R.getInstance();
    var Tr = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getAllGroups", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/groups/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  if (n = r.data, !Array.isArray(n.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", n.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve the list of groups. Status (".concat(r.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve the list of groups."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addGroup", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/addWithUseCase", t.prev = 1, a.creationDate = Date.now(), a.categories = [], a.typesAsList = [], a.active = !1, a.selected = !1, t.next = 9, I.a.post(r, a);
                case 9:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 15;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 15:
                  console.warn("Failed to add a groups. Status (".concat(n.status, ")"));
                case 16:
                  return t.abrupt("return", null);
                case 19:
                  throw t.prev = 19, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to add a groups."), t.t0), t.t0;
                case 23:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 19]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteGroup", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return console.log("Tags", a), r = e.API_BASE_URL + "/api/paris/groups/delete/" + a.id, t.prev = 2, t.next = 5, I.a.delete(r);
                case 5:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  throw new Error("Failed to delete the group  with Id:".concat(a.id));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(r, ". Failed to delete a group with id:").concat(a.id, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "addGroupWithUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/groups/addWithUseCase", t.prev = 1, i = a, i.idUseCase = r, t.next = 6, I.a.post(n, i);
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to add a group. Status (".concat(o.status, ")"));
                case 13:
                  return t.abrupt("return", null);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to add a group."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "editUseCase", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/update", t.prev = 1, t.next = 4, I.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  console.warn("Failed to update a group. Status (".concat(n.status, ")"));
                case 11:
                  return t.abrupt("return", null);
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to update a group."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "executeListGroupAsTag", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/groups/execute", t.prev = 1, i = {
                    application: a,
                    idList: r,
                    executionType: "Tag",
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to execute the list of group with Ids : ".concat(r.join(", "), "."));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to execute the list of group with Ids : ").concat(r.join(", "), ".."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "forecastAllGroups", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/forecast", t.prev = 1, n = { application: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed with status ".concat(status, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to execute the forecast.", t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Tr.API_BASE_URL = T.getUrl();
    var Er = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getDownloadUrl", value: function() {
          return e.API_BASE_URL + "/api/paris/export/all";
        },
      }]), e;
    }();
    Er.API_BASE_URL = T.getUrl();
    var Lr = n["a"].extend({
      name: "TagViewer", components: {}, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, data: function() {
        return {
          application: "",
          snackbarInfo: !1,
          textSnackBar: "",
          tree: [],
          items: [],
          singleSelect: !1,
          selected: [],
          onGoingQueries: [],
          applicationName: "No application selected",
          numberOfApplication: 0,
          applicationList: [],
          tagResultList: [],
          errorState: null,
          search: "",
          focusedGroup: null,
          loadingApplication: !0,
          loading: !0,
          loadingQueries: !1,
        };
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.application && 0 != this.application.length && this.getRootUseCase();
      }, methods: {
        getChildren: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            var r, n, i;
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, Sr.getAttachedUseCase(e.id);
                case 2:
                  e.children = a.sent, a.t0 = regeneratorRuntime.keys(e.children);
                case 4:
                  if ((a.t1 = a.t0()).done) {
                    a.next = 11;
                    break;
                  }
                  return n = a.t1.value, a.next = 8, t.getChildren(e.children[n]);
                case 8:
                  e.children[n] = a.sent, a.next = 4;
                  break;
                case 11:
                  return a.next = 13, Sr.getAttachedGroups(e.id);
                case 13:
                  return i = a.sent, (r = e.children).push.apply(r, Object(Rr["a"])(i)), e.isUseCase = !0, a.abrupt("return", e);
                case 17:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, focusGroup: function(e) {
          this.focusedGroup = e;
        }, generateZip: function() {
          window.open(Er.getDownloadUrl());
        }, getRootUseCase: function() {
          var e = this;
          Sr.getRootUseCase().then(function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
              var r;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (!a) {
                      t.next = 12;
                      break;
                    }
                    e.items = [], t.t0 = regeneratorRuntime.keys(a);
                  case 3:
                    if ((t.t1 = t.t0()).done) {
                      t.next = 12;
                      break;
                    }
                    return r = t.t1.value, t.t2 = e.items, t.next = 8, e.getChildren(a[r]);
                  case 8:
                    t.t3 = t.sent, t.t2.push.call(t.t2, t.t3), t.next = 3;
                    break;
                  case 12:
                    console.log("Tree", e.items);
                  case 13:
                  case"end":
                    return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }()).catch((function(e) {
            console.error("Failed to retrieve the root use cases", e);
          }));
        }, getTagResults: function() {
          var e = this;
          this.loading = !0, Ir.getTagResults("Configuration_1", this.application).then((function(t) {
            e.tagResultList = t.sort(e.sortByNumMAtch), e.loading = !1, console.log(t), console.log("".concat(t.length, " tags were loaded for application ").concat(e.application));
          })).catch((function(e) {
            console.error("An error occurred while retrieving tags.", e);
          }));
        }, refreshtree: function() {
          this.getRootUseCase();
        }, checkOnGoing: function(e) {
          return -1 != this.onGoingQueries.indexOf(e);
        }, executeSelectedTags: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.loadingQueries = !0, a = e.tree.filter((function(e) {
                    return e && void 0 !== e && !e.isUseCase;
                  })), console.log("ToExecute", a), console.log("About to execute ".concat(a.length, " tags on the application.")), r = e.tree.map((function(e) {
                    return e.id;
                  })), Tr.executeListGroupAsTag(e.application, r).then((function(t) {
                    e.snackbarInfo = !0, e.textSnackBar = "".concat(t, " objects were tags during the process.");
                  })).catch((function(t) {
                    e.snackbarInfo = !0, e.textSnackBar = "Failed to flags objects. Error :".concat(t);
                  })).finally((function() {
                    e.loadingQueries = !1;
                  }));
                case 6:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, getToExecuteSize: function() {
          var e = this.tree.filter((function(e) {
            return e && void 0 !== e && !e.isUseCase;
          }));
          return e.length;
        }, convertBadgeToHTML: function(e) {
          var t = "";
          return e.split(":").forEach((function(e) {
            t += "<v-chip class=\"ma-2\" color=\"primary\">".concat(e, "</v-chip>");
          })), t;
        }, sortByNumMAtch: function(e, t) {
          return t.numMatch - e.numMatch;
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.application && 0 != this.application.length && this.getTreeview();
        },
      },
    }), Vr = Lr, Fr = a("23a7"), Or = a("8dd9"), jr = Object(u["a"])(Vr, Cr, Ar, !1, null, null, null), Mr = jr.exports;
    M()(jr, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VChip: kt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VFileInput: Fr["a"],
      VIcon: H["a"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
      VScrollXTransition: Gt["f"],
      VSheet: Or["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
      VTreeview: lr["a"],
    });
    var Dr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "text-h4 my-3" }, [e._v(" Use Cases Manager ")]), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-row", {
        staticClass: "pa-4",
        attrs: { justify: "space-between" },
      }, [a("v-col", { attrs: { cols: "7" } }, [a("v-row", [a("v-treeview", {
        attrs: { items: e.items, activatable: "", "open-on-click": "", transition: "" },
        scopedSlots: e._u([{
          key: "prepend", fn: function(t) {
            return [a("v-icon", [e._v(" mdi-folder-open-outline ")])];
          },
        }, {
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", [a("v-row", [a("p", { staticClass: "mt-4" }, [e._v(" " + e._s(r.title) + " "), r.active ? e._e() : a("span", { staticClass: "red--text" }, [e._v(" ( Deactivated ) ")])]), a("v-spacer"), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "ma-2",
                    attrs: { text: "", small: "", icon: "", color: "blue lighten-2" },
                    on: {
                      click: function(t) {
                        return e.editItem(r);
                      },
                    },
                  }, "v-btn", i, !1), n), [a("v-icon", [e._v("mdi-pencil")])], 1)];
                },
              }], null, !0),
            }, [a("span", [e._v("Edit")])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "ma-2",
                    attrs: { text: "", small: "", icon: "", color: "red lighten-2" },
                    on: {
                      click: function(t) {
                        return e.deleteItem(r);
                      },
                    },
                  }, "v-btn", i, !1), n), [a("v-icon", [e._v("mdi-timeline-remove-outline")])], 1)];
                },
              }], null, !0),
            }, [a("span", [e._v("Remove the use case")])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "ma-2",
                    attrs: { text: "", small: "", icon: "", color: "green lighten-2" },
                    on: {
                      click: function(t) {
                        return e.createItemUnderParent(r);
                      },
                    },
                  }, "v-btn", i, !1), n), [a("v-icon", [e._v("mdi-folder-plus")])], 1)];
                },
              }], null, !0),
            }, [a("span", [e._v("Add a new use case under it")])])], 1)], 1)];
          },
        }]),
      })], 1), a("v-row", { staticClass: "pa-4" }, [a("v-col", { attrs: { cols: "1" } }, [a("v-tooltip", {
        attrs: { bottom: "" },
        scopedSlots: e._u([{
          key: "activator", fn: function(t) {
            var r = t.on, n = t.attrs;
            return [a("v-btn", e._g(e._b({
              staticClass: "mx-2",
              attrs: { small: "", fab: "", dark: "", color: "indigo" },
              on: { click: e.createItem },
            }, "v-btn", n, !1), r), [a("v-icon", { attrs: { dark: "" } }, [e._v(" mdi-plus ")])], 1)];
          },
        }]),
      }, [a("span", [e._v("Add a new use case")])])], 1), a("v-col", { attrs: { cols: "3" } }, [a("p", { staticClass: "mt-3" }, [e._v("Add a new use case")])])], 1)], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", { staticClass: "d-flex text-center" }, [a("v-scroll-y-transition", { attrs: { mode: "out-in" } }, [e.selected ? a("v-card", {
        key: e.selected.id,
        staticClass: "pt-6 mx-auto",
        attrs: { flat: "", "max-width": "400" },
      }, [a("v-card-text", [e._v(" " + e._s(e.selected) + " ")]), a("v-divider")], 1) : a("div", {
        staticClass: "title grey--text text--lighten-1 font-weight-light",
        staticStyle: { "align-self": "center" },
      }, [e._v(" Select a use case ")])], 1)], 1)], 1), a("v-dialog", {
        attrs: { persistent: "", "max-width": "600px" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v(e._s(e.titleEditBox))])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Title*",
          hint: "Title of the use case ( displayed in the tree )",
          "persistent-hint": "",
          required: "",
        }, model: {
          value: e.editedItem.title, callback: function(t) {
            e.$set(e.editedItem, "title", t);
          }, expression: "editedItem.title",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Description*",
          hint: "Brief description of the use case",
          "persistent-hint": "",
          required: "",
        }, model: {
          value: e.editedItem.description, callback: function(t) {
            e.$set(e.editedItem, "description", t);
          }, expression: "editedItem.description",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-autocomplete", {
        attrs: {
          items: ["Cloud", "Pilot", "SQL"],
          outlined: "",
          dense: "",
          chips: "",
          label: "Categories*",
          hint: "Apply a categories used for search",
          "small-chips": "",
          required: "",
          multiple: "",
        }, model: {
          value: e.editedItem.categories, callback: function(t) {
            e.$set(e.editedItem, "categories", t);
          }, expression: "editedItem.categories",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("p", [e._v("Select a parent use case:")]), a("v-radio-group", {
        model: {
          value: e.editParentUseCaseId,
          callback: function(t) {
            e.editParentUseCaseId = t;
          },
          expression: "editParentUseCaseId",
        },
      }, [a("v-radio", {
        key: -1,
        attrs: { label: "No parent (Root use case)", value: -1 },
      }), a("v-treeview", {
        attrs: { "return-object": "", "selection-type": "independent", items: e.items },
        scopedSlots: e._u([{
          key: "label", fn: function(e) {
            var t = e.item;
            return [a("v-container", [a("v-row", [a("v-radio", {
              key: t.id,
              attrs: { label: t.title, value: t.id },
            })], 1)], 1)];
          },
        }]),
      })], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-row", { staticClass: "mr-6" }, [a("v-checkbox", {
        staticClass: "mr-2",
        attrs: { label: "Active" },
        model: {
          value: e.editedItem.active, callback: function(t) {
            e.$set(e.editedItem, "active", t);
          }, expression: "editedItem.active",
        },
      }), a("v-checkbox", {
        attrs: { label: "Selected" }, model: {
          value: e.editedItem.selected, callback: function(t) {
            e.$set(e.editedItem, "selected", t);
          }, expression: "editedItem.selected",
        },
      })], 1)], 1)], 1)], 1), a("small", [e._v("*indicates required field")])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
        }, on: { click: e.close },
      }, [e._v(" Close ")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "" },
        on: { click: e.save },
      }, [e._v(" Save ")])], 1)], 1)], 1), a("v-dialog", {
        attrs: { persistent: "", "max-width": "600px" },
        model: {
          value: e.dialogDelete, callback: function(t) {
            e.dialogDelete = t;
          }, expression: "dialogDelete",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v("Delete a use case")])]), a("v-card-text", [a("v-container", [a("p", { domProps: { innerHTML: e._s(e.contentDeleteBox) } })])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
          loading: e.loadingDelete,
        }, on: { click: e.closeDelete },
      }, [e._v(" Close ")]), a("v-btn", {
        attrs: { color: "red darken-1", text: "" },
        on: { click: e.confirmDelete },
      }, [e._v(" Delete ")])], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1)], 1);
    }, Pr = [], Nr = n["a"].extend({
      name: "UseCases", data: function() {
        return {
          active: null,
          items: [],
          open: null,
          selected: null,
          files: [],
          editedItem: { id: null, title: "", description: "", categories: [], active: !1, selected: !1 },
          defaultItem: { title: "", description: "", categories: [], active: !1, selected: !1 },
          titleEditBox: "",
          contentDeleteBox: "",
          editParentUseCaseId: -1,
          parentUseCaseId: -1,
          editedIndex: 0,
          dialog: !1,
          dialogDelete: !1,
          loadingDelete: !1,
          snackbarInfo: !1,
          textSnackBar: "",
        };
      }, methods: {
        getChildren: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, Sr.getAttachedUseCase(e.id).then(function() {
                    var a = Object(r["a"])(regeneratorRuntime.mark((function a(r) {
                      var n;
                      return regeneratorRuntime.wrap((function(a) {
                        while (1) switch (a.prev = a.next) {
                          case 0:
                            e.children = r, a.t0 = regeneratorRuntime.keys(e.children);
                          case 2:
                            if ((a.t1 = a.t0()).done) {
                              a.next = 10;
                              break;
                            }
                            return n = a.t1.value, e.children[n].parentId = e.id, a.next = 7, t.getChildren(e.children[n]);
                          case 7:
                            e.children[n] = a.sent, a.next = 2;
                            break;
                          case 10:
                            return a.abrupt("return", e);
                          case 11:
                          case"end":
                            return a.stop();
                        }
                      }), a);
                    })));
                    return function(e) {
                      return a.apply(this, arguments);
                    };
                  }()).catch((function(t) {
                    return console.error("Failed to fetch the children for use case with id : ".concat(e.id), t), e;
                  }));
                case 2:
                  return a.abrupt("return", a.sent);
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, getRootUseCase: function() {
          var e = this;
          Sr.getRootUseCase().then(function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
              var r;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (!a) {
                      t.next = 13;
                      break;
                    }
                    e.items = [], t.t0 = regeneratorRuntime.keys(a);
                  case 3:
                    if ((t.t1 = t.t0()).done) {
                      t.next = 13;
                      break;
                    }
                    return r = t.t1.value, a[r].parentId = -1, t.t2 = e.items, t.next = 9, e.getChildren(a[r]);
                  case 9:
                    t.t3 = t.sent, t.t2.push.call(t.t2, t.t3), t.next = 3;
                    break;
                  case 13:
                  case"end":
                    return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }()).catch((function(e) {
            console.error("Failed to retrieve the root use cases", e);
          }));
        }, selectItem: function(e) {
          this.selected = e;
        }, createItem: function() {
          this.titleEditBox = "Create new Use case", this.editedIndex = -1, this.parentUseCaseId = -1, this.editedItem = Object.assign({}, this.defaultItem), this.dialog = !0;
        }, createItemUnderParent: function(e) {
          this.titleEditBox = "Create new Use case under ".concat(e.title), this.editedIndex = -1, this.parentUseCaseId = e.parentId || -1, this.editedItem = Object.assign({}, this.defaultItem), this.dialog = !0;
        }, editItem: function(e) {
          this.titleEditBox = "Edit the use case : ".concat(e.title), this.editedIndex = this.items.indexOf(e), this.parentUseCaseId = -1, this.editParentUseCaseId = e.parentId || -1, this.editedItem = Object.assign({}, e), this.dialog = !0;
        }, deleteItem: function(e) {
          this.contentDeleteBox = "You're about to delete the use case with name <strong>".concat(e.title, "</strong>. Are you sure that you want to delete it ?  "), this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0;
        }, confirmDelete: function() {
          var e = this;
          this.loadingDelete = !0, Sr.deleteUseCase(this.editedItem).then((function(t) {
            e.textSnackBar = t ? "Successfully deleted the use case." : "Failed to delete the use case.", e.snackbarInfo = !0, e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to deleted the use case. Error: ".concat(t), e.snackbarInfo = !0;
          })).finally((function() {
            e.loadingDelete = !1, e.closeDelete();
          }));
        }, close: function() {
          var e = this;
          this.dialog = !1, this.parentUseCaseId = -1, this.$nextTick((function() {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
          }));
        }, closeDelete: function() {
          var e = this;
          this.dialogDelete = !1, this.$nextTick((function() {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
          }));
        }, save: function() {
          var e = this;
          this.editedItem.id && this.editedItem.id > 0 ? Sr.editUseCase(this.editedItem, this.editParentUseCaseId).then((function(t) {
            e.textSnackBar = "Successfully updated the use case.", e.snackbarInfo = !0, e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to update the use case. Error: ".concat(t), e.snackbarInfo = !0;
          })) : -1 != this.parentUseCaseId && this.editedIndex <= -1 ? Sr.addUseCaseWithParent(this.editedItem, this.parentUseCaseId).then((function(t) {
            e.textSnackBar = "Successfully attached a new use case.", e.snackbarInfo = !0, e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to attach the new use case. Error: ".concat(t), e.snackbarInfo = !0;
          })) : Sr.addUseCaseWithParent(this.editedItem, this.editParentUseCaseId).then((function(t) {
            e.textSnackBar = "Successfully added the use case.", e.snackbarInfo = !0, e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to add the use case. Error: ".concat(t), e.snackbarInfo = !0;
          })), this.close();
        }, refresh: function() {
          this.getRootUseCase();
        },
      }, mounted: function() {
        this.refresh();
      },
    }), Br = Nr, Ur = a("67b6"), Gr = a("43a6"), $r = Object(u["a"])(Br, Dr, Pr, !1, null, null, null), qr = $r.exports;
    M()($r, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRadio: Ur["a"],
      VRadioGroup: Gr["a"],
      VRow: Q["a"],
      VScrollYTransition: Gt["g"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTooltip: Fe["a"],
      VTreeview: lr["a"],
    });
    var Hr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { staticClass: "ml-5" }, [a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4 my-3" }, [e._v(" Tag creator studio ")])]), a("v-card-subtitle", { staticClass: "ml-3" }, [e._v("In this creator studio you'll be able to create your own Demeter recommendations ,in order to enrich your configuration, and display more information on CAST Imaging System."), a("br"), e._v(" For more information on tags and documents, please refer to the official "), a("a", { attrs: { href: "#" } }, [e._v("CAST Imaging documentation")]), e._v(".")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-expand-x-transition", [a("v-col", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.editMode,
          expression: "!editMode",
        }], attrs: { cols: e.editMode ? 0 : 6, transition: "scale-transition" },
      }, [a("v-treeview", {
        attrs: {
          items: e.useCasesTree,
          "selected-color": "indigo",
          "open-on-click": "",
          "return-object": "",
          "expand-icon": "mdi-chevron-down",
        }, scopedSlots: e._u([{
          key: "prepend", fn: function(t) {
            var r = t.item;
            return [r.isUseCase ? e._e() : a("v-icon", [e._v(" mdi-label-variant ")])];
          },
        }, {
          key: "label", fn: function(t) {
            var r = t.item;
            return [r.isUseCase ? a("p", { staticClass: "pt-4" }, [e._v(e._s(r.title))]) : a("div", [a("v-row", { staticClass: "px-8" }, [a("div", { staticClass: "pt-4" }, [a("p", [e._v("Tag " + e._s(r.name))])]), a("v-spacer"), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "ma-2",
                    attrs: { text: "", small: "", icon: "", color: "blue lighten-2" },
                    on: {
                      click: function(t) {
                        return e.editItem(r);
                      },
                    },
                  }, "v-btn", i, !1), n), [a("v-icon", [e._v("mdi-pencil")])], 1)];
                },
              }], null, !0),
            }, [a("span", [e._v("Edit")])]), a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var n = t.on, i = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "ma-2",
                    attrs: { text: "", small: "", icon: "", color: "red lighten-2" },
                    on: {
                      click: function(t) {
                        return e.removeItem(r);
                      },
                    },
                  }, "v-btn", i, !1), n), [a("v-icon", [e._v("mdi-timeline-remove-outline")])], 1)];
                },
              }], null, !0),
            }, [a("span", [e._v("Remove the use case")])])], 1)], 1)];
          },
        }]), model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1)], 1), a("v-expand-x-transition", [a("v-col", {
        attrs: {
          cols: e.editMode ? 12 : 6,
          transition: "scale-transition",
        },
      }, [a("v-row", [a("v-col", [a("v-card", { staticClass: "mx-auto pa-3" }, [a("v-card-text", [a("v-row", [a("p", { staticClass: "display-1 text--primary" }, [e._v(" Recommendation creation ")]), a("v-spacer"), a("v-btn", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.editMode,
          expression: "editMode",
        }], staticClass: "ma-2 mr-5", attrs: { small: "", dark: "" }, on: { click: e.close },
      }, [a("v-icon", {
        attrs: {
          dark: "",
          left: "",
        },
      }, [e._v(" mdi-minus-circle ")]), e._v("Close ")], 1)], 1), a("div", { staticClass: "text--primary" }, [e._v(" Select the type of the recommendation to create ")]), a("v-expand-x-transition", [a("v-form", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.editMode,
          expression: "editMode",
        }], ref: "form", staticClass: "pa-4", attrs: { "lazy-validation": "" },
      }, [a("v-text-field", {
        attrs: {
          outlined: "", rules: [function(e) {
            return !!e || "Name is required";
          }], label: "Name of the rule", required: "",
        }, model: {
          value: e.group.name, callback: function(t) {
            e.$set(e.group, "name", t);
          }, expression: "group.name",
        },
      }), a("v-textarea", {
        attrs: {
          outlined: "",
          name: "associatedDescription",
          label: "Associated description",
          placeholder: "Type here the descirption assoicated to your tag...",
        }, model: {
          value: e.group.description, callback: function(t) {
            e.$set(e.group, "description", t);
          }, expression: "group.description",
        },
      }), a("v-text-field", {
        attrs: {
          outlined: "", rules: [function(e) {
            return !!e || "Group is required";
          }], label: "Name of the group that will be created", required: "",
        }, model: {
          value: e.group.groupName, callback: function(t) {
            e.$set(e.group, "groupName", t);
          }, expression: "group.groupName",
        },
      }), a("v-textarea", {
        attrs: {
          outlined: "",
          name: "cypherRequest",
          label: "Associated Request",
          rules: [function(e) {
            return !!e || "Associated request is required";
          }],
          placeholder: "Type here your neo4j Cypher request...",
        }, on: {
          change: function(t) {
            e.validRequest = !1;
          },
        }, model: {
          value: e.group.cypherRequest, callback: function(t) {
            e.$set(e.group, "cypherRequest", t);
          }, expression: "group.cypherRequest",
        },
      }), a("v-text-field", {
        attrs: {
          outlined: "", rules: [function(e) {
            return !!e || "Return value is required";
          }], label: "Name of the returned value", required: "",
        }, on: {
          change: function(t) {
            e.validRequest = !1;
          },
        }, model: {
          value: e.group.cypherRequestReturn, callback: function(t) {
            e.$set(e.group, "cypherRequestReturn", t);
          }, expression: "group.cypherRequestReturn",
        },
      }), a("v-select", {
        attrs: {
          items: e.usecases,
          "item-text": "title",
          "item-value": "id",
          label: "Select the parent use case",
          rules: [function(e) {
            return !!e || "You must select a parent use case";
          }],
          "persistent-hint": "",
          "single-line": "",
        }, model: {
          value: e.selectedUseCaseId, callback: function(t) {
            e.selectedUseCaseId = t;
          }, expression: "selectedUseCaseId",
        },
      }), a("v-checkbox", {
        staticClass: "pl-5",
        attrs: { label: "Set recommendation as active" },
        model: {
          value: e.group.active, callback: function(t) {
            e.$set(e.group, "active", t);
          }, expression: "group.active",
        },
      }), a("v-checkbox", {
        staticClass: "pl-5",
        attrs: { label: "Set recommendation as selected" },
        model: {
          value: e.group.selected, callback: function(t) {
            e.$set(e.group, "selected", t);
          }, expression: "group.selected",
        },
      }), a("v-btn", {
        staticClass: "ma-2 float", attrs: { color: "info" }, on: {
          click: function(t) {
            e.showAssistant = !e.showAssistant;
          },
        },
      }, [e._v(" Open assitant ")])], 1)], 1), a("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: !e.editMode,
          expression: "!editMode",
        }],
      }, [a("h3", { staticClass: "ma-auto" }, [e._v(" Please select a tag or "), a("v-btn", {
        staticClass: "ml-3",
        attrs: { small: "", color: "primary", dark: "" },
        on: { click: e.createItem },
      }, [e._v(" Create a new recommendation ")])], 1)]), e.validityError && 0 != e.validityError.length ? a("v-row", { staticClass: "pa-5" }, [a("p", { staticClass: "red--text" }, [e._v(" " + e._s(e.validityError) + " ")])]) : e._e(), e.creationError && 0 != e.creationError.length ? a("v-row", { staticClass: "pa-5" }, [a("v-alert", {
        attrs: {
          value: 0 != e.creationError.length,
          color: "pink",
          dark: "",
          border: "top",
          type: "error",
          transition: "scale-transition",
        },
      }, [e._v(" " + e._s(e.creationError) + " ")])], 1) : e._e()], 1), a("v-card-actions", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.editMode,
          expression: "editMode",
        }],
      }, [a("v-btn", {
        staticClass: "ma-2",
        attrs: { loading: e.loadingValidity, disabled: e.loadingValidity, color: "success" },
        on: {
          click: function(t) {
            return e.checkValidity();
          },
        },
        scopedSlots: e._u([{
          key: "loader", fn: function() {
            return [a("span", [e._v("Loading...")])];
          }, proxy: !0,
        }]),
      }, [e._v(" Test validity ")]), a("v-btn", {
        staticClass: "ma-2",
        attrs: { loading: e.loadingCreation, disabled: e.loadingCreation || !e.validRequest, color: "info" },
        on: { click: e.save },
        scopedSlots: e._u([{
          key: "loader", fn: function() {
            return [a("span", { staticClass: "custom-loader" }, [a("v-icon", { attrs: { light: "" } }, [e._v("mdi-cached")])], 1)];
          }, proxy: !0,
        }]),
      }, [e._v(" Create recommendation ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), e.showAssistant ? a("v-row", { attrs: { transition: "scroll-y-transition" } }, [a("v-card", {
        staticClass: "mt-5 mx-3",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Tag creator assistant "), a("v-spacer"), a("v-btn", {
        staticClass: "ma-2 mr-5",
        attrs: { small: "", dark: "" },
        on: {
          click: function(t) {
            e.showAssistant = !1;
          },
        },
      }, [a("v-icon", {
        attrs: {
          dark: "",
          left: "",
        },
      }, [e._v(" mdi-minus-circle ")]), e._v("Close ")], 1)], 1), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "3" } }, [a("v-list", { attrs: { dense: "" } }, [a("v-subheader", [e._v("Models")]), a("v-list-item-group", {
        attrs: { color: "primary" },
        model: {
          value: e.selectedTagAssist, callback: function(t) {
            e.selectedTagAssist = t;
          }, expression: "selectedTagAssist",
        },
      }, e._l(e.tagAssistsItems, (function(t, r) {
        return a("v-list-item", { key: r }, [a("v-list-item-content", [a("v-list-item-title", { domProps: { textContent: e._s(t.title) } })], 1)], 1);
      })), 1)], 1)], 1), a("v-col", { attrs: { cols: "9" } }, [a("v-textarea", {
        staticClass: "pa-2",
        attrs: {
          height: "200px",
          label: "Template",
          value: e.tagAssistsItems[e.selectedTagAssist].template,
          outlined: "",
        },
      }), e.tagAssistsItems[e.selectedTagAssist].explanation ? a("v-row", { staticClass: "px-4" }, [a("p", [e._v("How this request works :")]), a("i", [e._v(e._s(e.tagAssistsItems[e.selectedTagAssist].explanation) + " ")])]) : e._e()], 1)], 1)], 1)], 1)], 1)], 1) : e._e()], 1)], 1)], 1), a("v-dialog", {
        attrs: { "max-width": "500px" },
        model: {
          value: e.dialogDelete, callback: function(t) {
            e.dialogDelete = t;
          }, expression: "dialogDelete",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "headline" }, [e._v("Are you sure you want to delete this item?")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
        }, on: { click: e.closeDelete },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "" },
        on: { click: e.deleteItemConfirm },
      }, [e._v("OK")]), a("v-spacer")], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1);
    }, Wr = [], Qr = m["a"].extend({
      name: "TagStudio", created: function() {
        this.initialize();
      }, data: function() {
        return {
          usecases: [],
          useCasesTree: [],
          tree: [],
          activeItems: [],
          snackbarInfo: !1,
          textSnackBar: "",
          dialogDelete: !1,
          showAssistant: !1,
          selectedTagAssist: 0,
          tagAssistsItems: [{
            title: "Group by Type",
            template: "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.Type CONTAINS 'JPA' RETURN n as node",
            explanation: "The request will match all the objects where the type contains the string 'JPA'. ",
          }, {
            title: "Group by Name",
            template: "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.FullName CONTAINS 'javax.persistence' RETURN n as node",
            explanation: "",
          }, {
            title: "Group by Relationship and Type ",
            template: "MATCH (n:Object:%%APPLICATION_NAME%%) WHERE n.InternalType='SQLScriptProcedure' AND NOT (n)-[:USE]->(:Object { InternalType : 'SQLScriptTable'}) AND NOT (n)-[:CALL]->(:Object { InternalType : 'SQLScriptProcedure'}) RETURN n as node",
            explanation: "",
          }],
          loadingValidity: !1,
          loadingCreation: !1,
          selectedUseCaseId: -1,
          testPassed: !1,
          items: ["Tag", "Document"],
          recoType: "Tag",
          editMode: !1,
          editedIndex: -1,
          group: {},
          recoForm: {},
          validRequest: !1,
          validityError: "",
          creationError: "",
        };
      }, methods: {
        initialize: function() {
          this.loadUseCase(), this.getRootUseCase();
        }, close: function() {
          var e = this;
          this.editMode = !1, this.$nextTick((function() {
            e.group = Object.assign({}, {}), e.editedIndex = -1;
          }));
        }, closeDelete: function() {
          var e = this;
          this.dialogDelete = !1, this.editMode = !1, this.$nextTick((function() {
            e.group = Object.assign({}, {}), e.editedIndex = -1;
          }));
        }, removeItem: function(e) {
          this.dialogDelete = !0, this.validRequest = !1, this.editedIndex = this.items.indexOf(e), this.group = Object.assign({}, e);
        }, deleteItemConfirm: function() {
          var e = this;
          Tr.deleteGroup(this.group).then((function(t) {
            e.textSnackBar = "Successfully deleted the group.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to delete the Group. Error: ".concat(t), e.snackbarInfo = !0;
          })), this.closeDelete();
        }, editItem: function(e) {
          this.validRequest = !1, this.editMode = !0, this.editedIndex = e.id, this.group = Object.assign({}, e), this.dialog = !0;
        }, createItem: function() {
          this.validRequest = !1, this.editMode = !0, this.editedIndex = -1, this.group = {}, this.dialog = !0;
        }, save: function() {
          var e = this;
          this.loadingCreation = !0, this.group.idUseCase = this.selectedUseCaseId, this.editedIndex > -1 ? Tr.editUseCase(this.group).then((function(t) {
            e.textSnackBar = "Successfully updated the group.", e.snackbarInfo = !0, e.initialize(), e.close();
          })).catch((function(t) {
            e.textSnackBar = "Failed to udpdate the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })).finally((function() {
            e.loadingCreation = !1;
          })) : Tr.addGroup(this.group).then((function(t) {
            e.textSnackBar = "Successfully added the group.", e.snackbarInfo = !0, e.initialize(), e.close();
          })).catch((function(t) {
            e.textSnackBar = "Failed to add the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })).finally((function() {
            e.loadingCreation = !1;
          }));
        }, getChildren: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            var r, n, i;
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, Sr.getAttachedUseCase(e.id);
                case 2:
                  e.children = a.sent, a.t0 = regeneratorRuntime.keys(e.children);
                case 4:
                  if ((a.t1 = a.t0()).done) {
                    a.next = 11;
                    break;
                  }
                  return n = a.t1.value, a.next = 8, t.getChildren(e.children[n]);
                case 8:
                  e.children[n] = a.sent, a.next = 4;
                  break;
                case 11:
                  return a.next = 13, Sr.getAttachedGroups(e.id);
                case 13:
                  return i = a.sent, (r = e.children).push.apply(r, Object(Rr["a"])(i)), e.isUseCase = !0, a.abrupt("return", e);
                case 17:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, getRootUseCase: function() {
          var e = this;
          Sr.getRootUseCase().then(function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
              var r;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (!a) {
                      t.next = 12;
                      break;
                    }
                    e.useCasesTree = [], t.t0 = regeneratorRuntime.keys(a);
                  case 3:
                    if ((t.t1 = t.t0()).done) {
                      t.next = 12;
                      break;
                    }
                    return r = t.t1.value, t.t2 = e.useCasesTree, t.next = 8, e.getChildren(a[r]);
                  case 8:
                    t.t3 = t.sent, t.t2.push.call(t.t2, t.t3), t.next = 3;
                    break;
                  case 12:
                  case"end":
                    return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }()).catch((function(e) {
            console.error("Failed to retrieve the root use cases", e);
          }));
        }, loadUseCase: function() {
          var e = this;
          Sr.getAllUseCase().then((function(t) {
            e.usecases = t;
          })).catch((function(e) {
            console.error("Error trying to retrieve use cases tree:", e);
          }));
        }, updateSelectedItem: function(e) {
          this.selectedUseCaseId = e;
        }, createRecommendation: function() {
          this.loadingCreation = !0;
        }, checkValidity: function() {
          var e = this;
          this.loadingValidity = !0, Sr.checkValidity(this.group.cypherRequest, this.group.cypherRequestReturn).then((function(t) {
            e.validRequest = t, t || (e.validityError = "Failed to verify the cypher query above, please follow the Cypher Guidelines.");
          })).catch((function(e) {
            console.error("Failed to add the request.");
          })).finally((function() {
            e.loadingValidity = !1;
          }));
        }, launchAlert: function(e) {
          var t = this;
          this.creationError = e, setTimeout((function() {
            t.creationError = "";
          }), 5e3);
        },
      },
    }), zr = Qr, Yr = a("4bd4"), Jr = Object(u["a"])(zr, Hr, Wr, !1, null, null, null), Xr = Jr.exports;
    M()(Jr, {
      VAlert: ja["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VExpandXTransition: Gt["b"],
      VForm: Yr["a"],
      VIcon: H["a"],
      VList: Ae["a"],
      VListItem: Re["a"],
      VListItemContent: Se["a"],
      VListItemGroup: Ie["a"],
      VListItemTitle: Se["c"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VSubheader: Pa["a"],
      VTextField: Y["a"],
      VTextarea: ne["a"],
      VTooltip: Fe["a"],
      VTreeview: lr["a"],
    });
    var Zr = n["a"].extend({
      name: "Enrichment",
      components: { TagStudio: Xr, UseCases: qr, TagViewer: Mr },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      data: function() {
        return {
          loading: !0,
          groupRecord: void 0,
          applicationName: "",
          diplayNotInstalled: !1,
          tab: 0,
          items: [{ view: "TagViewer", name: "Tags", icon: "mdi-tag-multiple" }, {
            view: "UseCases",
            name: "Use cases",
            icon: "mdi-folder",
          }, { view: "TagStudio", name: "Tag studio", icon: "mdi-android-studio" }],
        };
      },
      mounted: function() {
        var e = this;
        this.applicationName = this.$store.state.applicationName, Ta.getDemeterVersion().then(function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.version = a;
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })));
          return function(e) {
            return t.apply(this, arguments);
          };
        }()).catch((function(t) {
          console.error("The Demeter extension wasn't detected. The functionnalities will be limited. Please install the Artemis extension", t), e.diplayNotInstalled = !0;
        }));
      },
      methods: {},
      watch: {
        getApplicationName: function(e) {
          this.applicationName = e;
        },
      },
    }), Kr = Zr, en = (a("20ad"), Object(u["a"])(Kr, yr, _r, !1, null, null, null)), tn = en.exports;
    M()(en, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var an = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1), e.diplayNotInstalled ? a("div", { attrs: { id: "notInstalledArtemis" } }, [a("h2", {
        staticClass: "ma-auto text--h2",
        attrs: { id: "Message" },
      }, [e._v(" The Artemis extension is not installed on this instance."), a("br"), e._v(" You must install the Artemis extension to continue on this section."), a("br"), e._v(" Please install the extension from "), a("a", { attrs: { href: "https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0" } }, [e._v(" CAST Extend ")])])]) : e._e()], 1);
    }, rn = [], nn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "px-5 mb-5 pt-4",
        attrs: { disabled: e.disabledTile },
      }, [a("v-card-text", [a("v-row", [a("h5", { staticClass: "text-h4 black--text" }, [e._v(" Automatic framework discovery ")])]), a("v-row", { staticClass: "my-5" }, [a("p", [e._v(" The "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" your application and finds objects belonging to open-source components. It analyzes the most popular online repositories and Google, and thanks to its built-in automatic learning algorithm, it finds the best matches. "), a("br"), e._v(" You can choose to activate or not these options. If no option is activated, the "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" will rely on it's own database to discover frameworks. ")])]), a("v-row", { staticClass: "mt-9" }, [a("h3", [e._v("Configuration:")])]), a("v-row", { staticClass: "d-flex flex-column" }, [a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Online search : The framewok detection will parse Google, to discover frameworks. The frameworks detected are added to the configuration for future usages.",
          color: "persianGrey",
          loading: e.loadingConfiguration || e.loadingOnlineMode,
          disabled: e.loadingOnlineMode,
          "hide-details": "",
        },
        on: {
          click: function(t) {
            return e.setOnlineMode();
          },
        },
        model: {
          value: e.onlineMode, callback: function(t) {
            e.onlineMode = t;
          }, expression: "onlineMode",
        },
      }), a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Repository search : Parse most populars repositories as Github, Maven, etc.. ",
          color: "persianGrey",
          loading: e.loadingConfiguration || e.loadingRepositoryMode,
          disabled: e.loadingRepositoryMode,
          "hide-details": "",
        },
        on: {
          click: function(t) {
            return e.setRepositoryMode();
          },
        },
        model: {
          value: e.repositoryMode, callback: function(t) {
            e.repositoryMode = t;
          }, expression: "repositoryMode",
        },
      }), a("v-switch", {
        staticClass: "mx-5",
        attrs: {
          label: "Interaction detection : Discover your own internals frameworks by detecting the pieces of code used by multiple applications. (Coming soon)",
          color: "persianGrey",
          "hide-details": "",
          disabled: "",
        },
      }), a("v-checkbox", {
        staticClass: "mx-5",
        attrs: {
          label: "Send the results of this detection by mail. (Configure mails addresses in the admistration panel) (Coming soon)",
          disabled: "",
        },
      })], 1), a("v-row", { staticClass: "mt-3" }, [a("p", { staticClass: "ml-5" }, [a("b", [a("i", [a("v-icon", { attrs: { color: "persianGrey" } }, [e._v("mdi-information")]), e._v(" The current version of Artemis is : ")], 1)]), e._v(e._s(e.version) + " ")])]), a("v-row", { staticClass: "mt-3" }, [a("p", { staticClass: "ml-5" }, [a("b", [a("i", [a("v-icon", { attrs: { color: "persianGrey" } }, [e._v("mdi-information")]), e._v(" The current workspace of the framework detector is located under : ")], 1)]), e._v(e._s(e.workspacePath) + " "), a("br"), e._v(" You can change the workspace in the Administration section ")])]), a("v-row", { staticClass: "my-5" }, [a("h3", [e._v("Candidate applications:")])]), a("v-row", { staticClass: "mt-5" }, [a("v-card", {
        staticStyle: { "overflow-y": "scroll" },
        attrs: { width: "100%", "max-height": "500px", loading: e.loadingCandidates },
      }, [a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "4" } }, [e._v(" Name of the application ")]), a("v-col", { attrs: { cols: "4" } }, [e._v(" Select the language of the detection ")])], 1), e._l(e.candidates, (function(t, r) {
        return a("span", { key: r }, [a("v-row", [a("v-col", {
          staticClass: "pt-8",
          attrs: { cols: "4" },
        }, [a("strong", [e._v(e._s(t.application))])]), e._l(t.languages, (function(n, i) {
          return a("v-col", { key: i, staticClass: "mb-2", attrs: { cols: "2" } }, [a("v-checkbox", {
            attrs: {
              label: n,
              color: "indigo",
              value: "indigo",
              "hide-details": "",
            }, on: {
              click: function(a) {
                return e.toPreQueue(t.application, n, e.selected["option-" + r + "-" + i]);
              },
            }, model: {
              value: e.selected["option-" + r + "-" + i], callback: function(t) {
                e.$set(e.selected, "option-" + r + "-" + i, t);
              }, expression: "selected[`option-${i}-${y}`]",
            },
          })], 1);
        }))], 2), a("v-divider")], 1);
      }))], 2)], 1)], 1)], 1), a("v-row", { staticClass: "mt-10 mb-5" }, [a("h3", [e._v("Send to queue :")])]), a("v-row", { staticClass: "mt-5" }, [a("v-card", { attrs: { width: "100%" } }, [a("v-card-text", [a("v-chip-group", {
        attrs: {
          "active-class": "primary--text",
          column: "",
        },
      }, e._l(e.preQueue, (function(t, r) {
        return a("v-chip", { key: r }, [e._v(" " + e._s(t.application + " ( on " + e.listToString(t.languages) + ")") + " ")]);
      })), 1), a("v-spacer"), a("v-btn", {
        attrs: { depressed: "", color: "primary" },
        on: { click: e.sendtoQueue },
      }, [e._v(" Send " + e._s(e.preQueue.length) + " applications to the queue ")])], 1)], 1)], 1), a("v-row", [a("v-col", {
        attrs: {
          cols: "2",
          md: "2",
        },
      }, [a("v-row", { staticClass: "mt-10 mb-5" }, [a("h3", [e._v("Current detection:")])]), a("v-row", { staticClass: "mt-5 mb-8" }, [a("v-card", {
        attrs: {
          "min-height": "80px",
          width: "100%",
          loading: e.loadingOngoingQueue,
        },
      }, [a("v-card-text", [a("v-chip-group", {
        attrs: {
          "active-class": "primary--text",
          column: "",
        },
      }, [e.currentDetection && "undefined" !== e.currentDetection ? a("v-chip", [e._v(" " + e._s(e.currentDetection.application + " ( on " + e.currentDetection.languages + ")") + " ")]) : e._e()], 1)], 1)], 1)], 1)], 1), a("v-col", {
        staticClass: "pl-5",
        attrs: { cols: "10", md: "8" },
      }, [a("v-row", { staticClass: "mt-10 mb-5" }, [a("h3", [e._v("On-going queue:")])]), a("v-row", { staticClass: "mt-5 mb-8" }, [a("v-card", {
        attrs: {
          "min-height": "80px",
          width: "100%",
          loading: e.loadingOngoingQueue,
        },
      }, [a("v-card-text", [a("v-chip-group", {
        attrs: {
          "active-class": "primary--text",
          column: "",
        },
      }, e._l(e.ongoingQueue, (function(t, r) {
        return a("v-chip", { key: r }, [e._v(" " + e._s(t.application + " ( on " + e.listToString(t.languages) + ")") + " ")]);
      })), 1)], 1)], 1)], 1)], 1), a("v-col", {
        staticClass: "pl-5",
        attrs: { cols: "2", md: "2" },
      }, [a("v-row", { staticClass: "mt-10 mb-5" }, [a("h3", [e._v("Actions:")])]), a("v-row", { staticClass: "mt-5 mb-8" }, [a("v-card", {
        attrs: {
          "min-height": "80px",
          width: "100%",
          loading: e.loadingOngoingQueue,
        },
      }, [a("v-card-text", [a("v-btn", {
        attrs: { small: "", tile: "", color: "error" },
        on: { click: e.flushQueue },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eraser-variant ")]), e._v(" Flush Queue ")], 1)], 1)], 1)], 1)], 1)], 1), a("v-divider")], 1), e.diplayNotInstalled ? a("div", { attrs: { id: "NotInstalledArtemis" } }, [a("h2", {
        staticClass: "ma-auto text--h2",
        attrs: { id: "Message" },
      }, [e._v(" The Artemis extension is not installed on this instance."), a("br"), e._v(" Please install the extension from "), a("a", { attrs: { href: "https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0" } }, [e._v(" CAST Extend ")])])]) : e._e()], 1);
    }, on = [], sn = n["a"].extend({
      name: "ArtemisConsole", computed: {
        filteredFrameworks: function() {
          return this.showOnlyFrameworks ? this.resultDetection.filter((function(e) {
            return "Framework" == e.type;
          })) : this.resultDetection;
        }, getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, data: function() {
        return {
          headers: [{ text: "Framework", align: "start", sortable: !0, value: "name" }, {
            text: "Description",
            value: "description",
          }, { text: "Category", value: "category" }, { text: "Detected as ", value: "type" }],
          showOnlyFrameworks: !0,
          disabledTile: !1,
          version: "Unknown",
          diplayNotInstalled: !1,
          loadingConfiguration: !1,
          loadingOnlineMode: !1,
          loadingRepositoryMode: !1,
          runningArtemis: !1,
          errorOnlineMode: !1,
          errorRepositoryMode: !1,
          errorDetection: "",
          filterValidFramework: !0,
          search: "",
          ongoingDetection: "",
          resultDetection: [],
          selectedLanguage: "",
          availableLanguages: [],
          checkingStatus: !1,
          toDisplay: "",
          detection: null,
          application: "",
          onlineMode: !0,
          repositoryMode: !0,
          workspacePath: "",
          loadingCandidates: !1,
          candidates: [],
          selected: [],
          loadingPrequeueUpload: !1,
          preQueue: [],
          loadingOngoingQueue: !1,
          ongoingQueue: [],
          currentDetection: null,
          loadingFlush: !1,
          flaggedAsToDestroy: !1,
        };
      }, methods: {
        listToString: function(e) {
          return e.toString();
        }, getCandidates: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, Va.getDetectionCandidates();
                case 3:
                  e.candidates = t.sent, t.next = 9;
                  break;
                case 6:
                  t.prev = 6, t.t0 = t["catch"](0), console.error("Failed to get the list of candidates", t.t0);
                case 9:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 6]]);
          })))();
        }, toPreQueue: function(e, t, a) {
          if (a) {
            for (var r in this.preQueue) if (this.preQueue[r].application == e && -1 == this.preQueue[r].languages.indexOf(t)) return void this.preQueue[r].languages.push(t);
            this.preQueue.push({ application: e, languages: [t] });
          } else for (var n in this.preQueue) if (this.preQueue[n].application == e && -1 != this.preQueue[n].languages.indexOf(t)) {
            var i = this.preQueue[n].languages.indexOf(t);
            return this.preQueue[n].languages.splice(i, 1), void (0 == this.preQueue[n].languages.length && this.preQueue.splice(n, 1));
          }
        }, getConfiguration: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingConfiguration = !0, t.next = 3, Ia.getOnlineMode();
                case 3:
                  return e.onlineMode = t.sent, t.next = 6, Ia.getRepositoryMode();
                case 6:
                  return e.repositoryMode = t.sent, t.next = 9, L.getArtemisWorkspace();
                case 9:
                  return e.workspacePath = t.sent, t.next = 12, Ia.getSupportedLanguages().then((function(t) {
                    e.availableLanguages = t, e.selectedLanguage = t[0];
                  })).catch((function(e) {
                    console.error("Failed to retrieve languages.", e);
                  }));
                case 12:
                  e.loadingConfiguration = !1;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, setOnlineMode: function() {
          var e = this;
          this.loadingOnlineMode = !0, Ia.setOnlineMode(this.onlineMode).then((function(t) {
            e.onlineMode = t;
          })).catch((function(t) {
            e.errorOnlineMode = !0, console.error("Failed to change online mode of Artemis Framework detector.", t);
          })).then((function() {
            e.loadingOnlineMode = !1;
          }));
        }, setRepositoryMode: function() {
          var e = this;
          this.loadingOnlineMode = !0, Ia.setRepositoryMode(this.repositoryMode).then((function(t) {
            e.repositoryMode = t;
          })).catch((function(t) {
            console.error("Failed to change the repository setting of Artemis.", t), e.errorRepositoryMode = !0;
          })).then((function() {
            e.loadingOnlineMode = !1;
          }));
        }, milisecondsToDhms: function(e) {
          var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
            n = Math.floor(t % 3600 / 60), i = Math.floor(t % 60), o = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
            s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
            c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
            l = i > 0 ? i + (1 == i ? " second" : " seconds") : "";
          return o + s + c + l;
        }, countDownTimer: function() {
          this.toDisplay = this.milisecondsToDhms(Date.now() - this.detection.timestampStart), setTimeout(this.countDownTimer, 1e3);
        }, checkStatus: function() {
          var e = this;
          this.checkingStatus || (this.checkingStatus = !0, Va.getApplicationStatus(this.application, this.selectedLanguage).then((function(t) {
            if (null == t) return e.ongoingDetection = "", void (e.errorDetection = "");
            switch (e.detection = t, t.status) {
              case Ea.Pending:
                e.ongoingDetection = "On-going detection for the ".concat(e.application, " application."), e.runningArtemis = !0, e.errorDetection = "", e.countDownTimer();
                break;
              case Ea.Success:
                e.resultDetection = t.data, e.runningArtemis = !1, e.errorDetection = "", e.ongoingDetection = "";
                break;
              case Ea.Failure:
                e.errorDetection = "An error occured during the detection. Please check the logs", e.ongoingDetection = "", e.runningArtemis = !1;
                break;
              default:
                break;
            }
          })).catch((function(t) {
            console.error("Failed to retrieve the status of the application ".concat(e.application, "."), t), e.errorDetection = "Failed to retrieve the status of the application ".concat(e.application, ".");
          })).finally((function() {
            e.checkingStatus = !1;
          })));
        }, getApplicationInsights: function() {
          var e = this;
          this.loadingCandidates = !0, ue.getApplicationInsights(this.application).then((function(e) {
            console.log("Insights :", e);
          })).catch((function(e) {
            console.error("Failed to get the insights of the application", e);
          })).finally((function() {
            e.loadingCandidates = !1;
          }));
        }, loadQueue: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingOngoingQueue = !0, t.next = 3, Va.getDetectionQueue().then((function(t) {
                    e.ongoingQueue = t;
                  })).catch((function(e) {
                    console.error("Failed to retrieve the detection queue.", e);
                  })).finally((function() {
                    e.loadingOngoingQueue = !1;
                  }));
                case 3:
                  return t.next = 5, Va.getCurrent().then((function(t) {
                    e.currentDetection = t;
                  })).catch((function(e) {
                    console.error("Failed to retrieve the currrent detection.", e);
                  })).finally((function() {
                    e.loadingOngoingQueue = !1;
                  }));
                case 5:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, sendtoQueue: function() {
          var e = this;
          0 != this.preQueue.length && (this.loadingPrequeueUpload = !0, Va.addCandidatesToDetection(this.preQueue).then((function(t) {
            e.preQueue = [];
          })).catch((function(e) {
            console.error("Failed to add the Frameworks to the database", e);
          })).finally((function() {
            e.loadingPrequeueUpload = !1;
          })));
        }, flushQueue: function() {
          var e = this;
          this.loadingFlush = !0, Va.flushDetectionQueue().then((function(t) {
            e.ongoingQueue = [];
          })).catch((function(e) {
            console.error("Failed to add the Frameworks to the database", e);
          })).finally((function() {
            e.loadingFlush = !1;
          }));
        }, launchDetection: function() {
          var e = this;
          this.displayErrorDetection = !1, Va.launchDetection(this.application, this.selectedLanguage).then((function(t) {
            if (!t) throw new Error("The server refused to launch the detection. Check the logs.");
            e.runningArtemis = !0;
          })).catch((function(t) {
            console.error("The analysis of the application ".concat(e.application, " failed to launch."), t), e.errorDetection = t;
          }));
        }, stopDetection: function() {
          var e = this;
          this.displayErrorDetection = !1, Va.cancelDetection(this.application, this.selectedLanguage).then((function(t) {
            if (!t) throw new Error("The server refused to stopped the detection. Check the logs.");
            e.runningArtemis = !1;
          })).catch((function(t) {
            console.error("Failed to stop the on-going analysis.", t), e.errorDetection = "Failed to stop the on-going analysis. Error : ".concat(t);
          }));
        }, constantStatusCheck: function() {
          this.diplayNotInstalled || (this.loadQueue(), this.flaggedAsToDestroy || setTimeout(this.constantStatusCheck, 5e3));
        }, cancelDetection: function() {
        },
      }, mounted: function() {
        var e = this;
        this.disabledTile = !0, this.resultDetection = [], Ta.getArtemisVersion().then(function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.version = a, e.disabledTile = !1, e.application = e.$store.state.applicationName, t.next = 5, e.getConfiguration();
                case 5:
                  return t.next = 7, e.checkStatus();
                case 7:
                case"end":
                  return t.stop();
              }
            }), t);
          })));
          return function(e) {
            return t.apply(this, arguments);
          };
        }()).catch((function(t) {
          console.error("The Artemis extension wasn't detected. The  function will be limited. Please install the Artemis extension", t), e.diplayNotInstalled = !0;
        })), this.getCandidates(), this.constantStatusCheck(), this.getApplicationInsights(), this.loadQueue();
      }, beforeDestroy: function() {
        this.flaggedAsToDestroy = !0;
      },
    }), cn = sn, ln = (a("ec8c"), Object(u["a"])(cn, nn, on, !1, null, null, null)), un = ln.exports;
    M()(ln, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCheckbox: Ma["a"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VSwitch: Na["a"],
    });
    var dn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticClass: "text-center pa-5" }, [a("h3", { staticClass: "text-h4" }, [e._v(" Review the different detection operations previously launched ")]), a("v-spacer"), a("v-btn", {
        staticClass: "ma-2 white--text",
        attrs: { text: "", rounded: "", color: "green", dark: "" },
        on: {
          click: function(t) {
            return e.reload();
          },
        },
      }, [a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-reload ")])], 1)], 1), a("v-row", { staticClass: "mx-3 my-7" }, [a("v-card", {
        staticClass: "pa-3",
        staticStyle: { width: "100%" },
      }, [a("v-container", [a("v-row", ["" != e.getOperationErrors ? a("v-alert", {
        attrs: {
          dense: "",
          border: "left",
          type: "error",
          width: "100%",
        },
      }, [e._v(" " + e._s(e.getOperationErrors) + " ")]) : e._e()], 1), a("v-row", [a("div", { staticClass: "d-flex flex-column mx-1 my-3" }, [a("h5", { staticClass: "text-h5" }, [e._v("Pending operations")]), 0 == e.pendingOperations.length ? a("p", [e._v(" No pending operation detected. ")]) : e._e()]), a("v-expansion-panels", {
        staticClass: "mb-6",
        staticStyle: { width: "100%" },
      }, e._l(e.pendingOperations, (function(t, r) {
        return a("v-expansion-panel", { key: r }, [a("v-expansion-panel-header", { attrs: { "expand-icon": "mdi-menu-down" } }, [a("h3", [e._v(e._s(t.application))]), a("v-spacer"), a("span", {
          staticClass: "text-body-1",
          staticStyle: { "max-width": "100px" },
        }, [e._v("Status : "), a("v-progress-circular", {
          attrs: {
            indeterminate: "",
            width: 3,
            size: 20,
            color: "teal",
          },
        })], 1)], 1), a("v-expansion-panel-content", [a("div", { staticClass: "d-flex flex-column" }, [a("DetectionViewer", { attrs: { detection: t } }), a("div", { staticClass: "d-flex flex-row" }, [a("v-btn", {
          staticClass: "float-right ma-3",
          staticStyle: { width: "150px" },
          attrs: { color: "charcoal", dark: "" },
        }, [e._v(" Go to results ")]), a("v-btn", {
          staticClass: "float-right my-3",
          staticStyle: { width: "150px" },
          attrs: { color: "orange" },
          on: {
            click: function(a) {
              return e.stopDetection(t);
            },
          },
        }, [e._v(" Stop detection ")])], 1)], 1)])], 1);
      })), 1)], 1), a("v-row", [a("div", { staticClass: "d-flex flex-column mx-1 my-3" }, [a("h5", { staticClass: "text-h5 " }, [e._v("Previous operations")]), 0 === e.previousOperations.length ? a("p", [e._v(" No operation detected ")]) : e._e(), "" !== e.errorPrevious ? a("p", { attrs: { color: "red" } }, [e._v(" " + e._s(e.errorPrevious) + " ")]) : e._e()]), a("v-expansion-panels", {
        staticClass: "mb-6",
        staticStyle: { width: "100%" },
      }, e._l(e.previousOperations, (function(t, r) {
        return a("v-expansion-panel", { key: r }, [a("v-expansion-panel-header", { attrs: { "expand-icon": "mdi-menu-down" } }, [a("h3", [e._v(e._s(t.application))]), a("v-spacer"), a("span", {
          staticClass: "text-body-1",
          staticStyle: { "max-width": "100px" },
        }, [e._v("Status : "), a("v-icon", {
          staticClass: "mx-1",
          attrs: { color: "teal" },
        }, [e._v(" mdi-check ")])], 1)], 1), a("v-expansion-panel-content", [a("div", { staticClass: "d-flex flex-column" }, [a("DetectionViewer", { attrs: { detection: t } }), a("div", { staticClass: "d-flex flex-row" }, [a("v-btn", {
          staticClass: "float-right my-3",
          staticStyle: { width: "150px" },
          attrs: { color: "charcoal", dark: "" },
          on: {
            click: function(a) {
              return e.openResultModal(t);
            },
          },
        }, [e._v(" Display results ")])], 1)], 1)])], 1);
      })), 1)], 1)], 1)], 1)], 1), a("ModalDetectionResults", {
        attrs: {
          detection: e.selectedDetection,
          status: e.modalDetection,
        }, on: {
          close: function(t) {
            e.modalDetection = !1;
          },
        },
      })], 1);
    }, pn = [], hn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticStyle: { width: "100%" } }, [a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Application")]), a("br"), e._v(e._s(e.detectionObj.application) + " ")])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Language")]), a("br"), e._v(e._s(e.detectionObj.language) + " ")])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Time Elapsed")]), a("br"), e._v(e._s(e.toDisplay))])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Results")]), a("br"), e._v(e._s(e.numResults))])])], 1)], 1);
    }, vn = [], mn = n["a"].component("DetectionViewer", {
      props: ["detection"], data: function() {
        return { detectionObj: {}, toDisplay: "", numResults: "" };
      }, methods: {
        milisecondsToDhms: function(e) {
          var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
            n = Math.floor(t % 3600 / 60), i = Math.floor(t % 60), o = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
            s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
            c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
            l = i > 0 ? i + (1 == i ? " second" : " seconds") : "";
          return o + s + c + l;
        }, countDownTimer: function() {
          this.toDisplay = this.milisecondsToDhms(Date.now() - this.detectionObj.timestampStart), setTimeout(this.countDownTimer, 1e3);
        },
      }, mounted: function() {
        if (null != this.detection) {
          if (this.detectionObj = this.detection, console.log("Detection", this.detectionObj), this.detectionObj.status == Ea.Pending) this.numResults = "Pending detection", this.countDownTimer(); else {
            var e = this.detectionObj.timestampFinish - this.detectionObj.timestampStart;
            this.toDisplay = e > 0 ? this.milisecondsToDhms(e) : "No information";
          }
          this.numResults = this.detectionObj.data.length > 0 ? this.detectionObj.data.filter((function(e) {
            return "Framework" === e.type;
          })).length + " framework detected." : "No framework detected";
        }
      },
    }), fn = mn, gn = Object(u["a"])(fn, hn, vn, !1, null, null, null), bn = gn.exports;
    M()(gn, { VCol: U["a"], VContainer: G["a"], VRow: Q["a"] });
    var xn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { width: "900", scrollable: "" }, model: {
          value: e.status, callback: function(t) {
            e.status = t;
          }, expression: "status",
        },
      }, [a("v-container", { attrs: { fluid: "" } }, [a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4" }, [e._v(" Results of "), a("b", [e._v(e._s(e.detection.application))])])]), a("v-card-text", [a("v-container", [a("v-row", [a("DetectionViewer", { attrs: { detection: e.detection } })], 1), a("v-row", { staticClass: "my-2" }, [a("v-card", {
        staticClass: "my-6",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Result of the detection: "), a("v-spacer"), a("v-text-field", {
        attrs: {
          "append-icon": "mdi-magnify",
          label: "Search",
          "single-line": "",
          "hide-details": "",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      })], 1), a("v-card-subtitle", { staticClass: "d-flex justify-end" }, [a("v-checkbox", {
        attrs: { label: "Show only detected as Frameworks" },
        model: {
          value: e.showOnlyFrameworks, callback: function(t) {
            e.showOnlyFrameworks = t;
          }, expression: "showOnlyFrameworks",
        },
      })], 1), a("v-data-table", {
        staticClass: "elevation-3",
        staticStyle: { width: "100%" },
        attrs: {
          headers: e.headers,
          items: e.filteredFrameworks,
          "items-per-page": 20,
          search: e.search,
          "item-key": "name",
        },
      })], 1)], 1)], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          text: "",
          color: "green",
        }, on: { click: e.closeModal },
      }, [e._v(" Close ")])], 1)], 1)], 1)], 1);
    }, wn = [], kn = n["a"].extend({
      props: { detection: Object, status: Boolean },
      components: { DetectionViewer: bn },
      name: "ModalDetectionResults",
      data: function() {
        return {
          headers: [{ text: "Framework", align: "start", sortable: !0, value: "name" }, {
            text: "Description",
            value: "description",
          }, { text: "Category", value: "category" }, { text: "Detected as ", value: "type" }],
          showOnlyFrameworks: !0,
          filterValidFramework: !0,
          search: "",
          dialog: !1,
          detectionObj: {},
        };
      },
      computed: {
        filteredFrameworks: function() {
          return this.detection ? this.showOnlyFrameworks ? this.detection.data.filter((function(e) {
            return "Framework" == e.type;
          })) : this.detection.data : [];
        },
      },
      methods: {
        closeModal: function() {
          this.status = !1, this.$emit("close", !1);
        },
      },
      mounted: function() {
        this.detectionObj = this.detection;
      },
    }), yn = kn, _n = Object(u["a"])(yn, xn, wn, !1, null, "0530710a", null), Cn = _n.exports;
    M()(_n, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var An = n["a"].extend({
        name: "DetectionExplorer", components: { DetectionViewer: bn, ModalDetectionResults: Cn }, data: function() {
          return {
            pendingOperations: [],
            previousOperations: [],
            getOperationErrors: "",
            loadingPending: !1,
            loadPrevious: !1,
            errorPrevious: "",
            selectedDetection: {},
            modalDetection: !1,
          };
        }, methods: {
          getPendingOperations: function() {
            var e = this;
            Va.getPendingDetections().then((function(t) {
              e.pendingOperations = t;
            })).catch((function(t) {
              console.error("Failed to retrieve pending operations.", t), e.getOperationErrors = "Failed to retrieve pending operations : ".concat(t);
            })).finally((function() {
              e.loadingPending = !1;
            }));
          }, getPreviousOperation: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, e.loadPrevious = !0, t.next = 4, Va.getDetectionResults();
                  case 4:
                    e.previousOperations = t.sent, e.errorPrevious = "", t.next = 12;
                    break;
                  case 8:
                    t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to load previous operations.", t.t0), e.errorPrevious = "Error: ".concat(t.t0);
                  case 12:
                    return t.prev = 12, e.loadPrevious = !0, t.finish(12);
                  case 15:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[0, 8, 12, 15]]);
            })))();
          }, openResultModal: function(e) {
            this.selectedDetection = Object.assign({}, e), this.modalDetection = !0;
          }, stopDetection: function(e) {
            var t = this;
            this.displayErrorDetection = !1, Va.cancelDetection(e.application, e.language).then((function(e) {
              if (!e) throw new Error("The server refused to stopped the detection. Check the logs.");
              t.runningArtemis = !1;
            })).catch((function(e) {
              console.error("Failed to stop the on-going analysis.", e), t.errorDetection = "Failed to stop the on-going analysis. Error : ".concat(e);
            }));
          }, reload: function() {
            this.getOperationErrors = "", this.getPendingOperations(), this.getPreviousOperation();
          },
        }, mounted: function() {
          this.reload();
        },
      }), Rn = An, Sn = a("cd55"), In = a("49e2"), Tn = a("c865a"), En = a("0393"),
      Ln = Object(u["a"])(Rn, dn, pn, !1, null, null, null), Vn = Ln.exports;
    M()(Ln, {
      VAlert: ja["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VContainer: G["a"],
      VExpansionPanel: Sn["a"],
      VExpansionPanelContent: In["a"],
      VExpansionPanelHeader: Tn["a"],
      VExpansionPanels: En["a"],
      VIcon: H["a"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var Fn = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("v-container", [a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4 black--text mb-4 my-3" }, [e._v(" Review the frameworks discovered ")]), a("v-spacer"), a("v-btn", {
          staticClass: "px-4",
          attrs: { icon: "", large: "", color: "green" },
          on: {
            click: function(t) {
              return e.refresh();
            },
          },
        }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-text", [a("v-row", { staticClass: "d-flex flex-column px-2 ml-4" }, [a("p", { staticClass: " text-body-1" }, [e._v(" Review the different frameworks detected. ")]), a("h4", { staticClass: "mb-2" }, [e._v("Legend :")]), a("p", [a("span", { staticClass: "px-3" }, [a("v-icon", { attrs: { color: "green" } }, [e._v(" mdi-check-circle ")]), e._v(" Detected as a Framework ")], 1), a("span", { staticClass: "px-3" }, [a("v-icon", { attrs: { color: "orange" } }, [e._v(" mdi-check-circle ")]), e._v(" Detected as a Framework but needs a validation ")], 1), a("span", { staticClass: "px-3" }, [a("v-icon", { attrs: { color: "red" } }, [e._v(" mdi-checkbox-blank-circle ")]), e._v(" Detected as not a Framework ")], 1)]), a("p", [e._v("Filters :")]), a("p", { staticClass: "d-flex flex-row " }, [a("v-checkbox", {
          attrs: {
            value: "ToValidate",
            label: "Filter frameworks to validate",
            type: "checkbox",
            required: "",
          }, on: {
            change: function(t) {
              return e.refresh();
            },
          }, model: {
            value: e.showOnly, callback: function(t) {
              e.showOnly = t;
            }, expression: "showOnly",
          },
        }), a("v-checkbox", {
          staticClass: "ml-5",
          attrs: { value: "Duplicates", label: "Filter duplicates frameworks", type: "checkbox", required: "" },
          on: {
            change: function(t) {
              return e.refresh();
            },
          },
          model: {
            value: e.showOnly, callback: function(t) {
              e.showOnly = t;
            }, expression: "showOnly",
          },
        })], 1)]), a("v-row", [a("v-data-table", {
          staticClass: "elevation-1",
          staticStyle: { "min-height": "300px", "min-width": "100%" },
          attrs: {
            headers: e.headers,
            items: e.items,
            "items-per-page": e.itemsPerPage,
            page: e.page,
            search: e.search,
            "single-expand": !0,
            "show-expand": "",
            "sort-by": e.sortBy.toLowerCase(),
            "sort-desc": e.sortDesc,
            loading: e.loadingTable,
            "hide-default-footer": "",
          },
          on: {
            "update:itemsPerPage": function(t) {
              e.itemsPerPage = t;
            }, "update:items-per-page": function(t) {
              e.itemsPerPage = t;
            }, "update:page": function(t) {
              e.page = t;
            },
          },
          scopedSlots: e._u([{
            key: "top", fn: function() {
              return [a("v-toolbar", { attrs: { flat: "" } }, [a("v-toolbar-title", [e._v("Detected Framework")]), a("v-divider", {
                staticClass: "mx-4",
                attrs: { inset: "", vertical: "" },
              }), a("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Search",
                  "single-line": "",
                  "hide-details": "",
                }, on: { change: e.searchFrameworks }, model: {
                  value: e.toSearch, callback: function(t) {
                    e.toSearch = t;
                  }, expression: "toSearch",
                },
              }), a("v-spacer"), a("v-dialog", {
                attrs: { "max-width": "750px" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var r = t.on, n = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "mb-2",
                      attrs: { color: "primary", dark: "" },
                    }, "v-btn", n, !1), r), [e._v(" New Item ")])];
                  },
                }]),
                model: {
                  value: e.dialog, callback: function(t) {
                    e.dialog = t;
                  }, expression: "dialog",
                },
              }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v(e._s(e.formTitle) + " " + e._s(e.editedItem.name))])]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "py-1 pb-5" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Name: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Name of the framework ( will be used during the detection )",
                  label: "Name",
                }, model: {
                  value: e.editedItem.name, callback: function(t) {
                    e.$set(e.editedItem, "name", t);
                  }, expression: "editedItem.name",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1 pb-2" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Pattern : ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Name of the framework ( will be used during the detection )",
                  label: "Name",
                }, model: {
                  value: e.editedItem.pattern, callback: function(t) {
                    e.$set(e.editedItem, "pattern", t);
                  }, expression: "editedItem.pattern",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1 pb-5" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Pattern regex Mode: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-checkbox", {
                attrs: { label: e.editedItem.isRegex ? "Regex mode enabled" : "Regex mode disabled" },
                model: {
                  value: e.editedItem.isRegex, callback: function(t) {
                    e.$set(e.editedItem, "isRegex", t);
                  }, expression: "editedItem.isRegex",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Framework type: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-select", {
                attrs: {
                  items: e.frameworkTypes,
                  "item-text": "name",
                  "item-value": "value",
                  label: "Select type",
                  hint: "Type of the object ( Framework or not Framework )",
                  "persistent-hint": "",
                  "single-line": "",
                }, model: {
                  value: e.editedItem.type, callback: function(t) {
                    e.$set(e.editedItem, "type", t);
                  }, expression: "editedItem.type",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Category: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-combobox", {
                attrs: {
                  items: e.frameworkCategories,
                  "item-text": "name",
                  "item-value": "name",
                  label: "Select a category",
                  "return-object": !1,
                }, model: {
                  value: e.editedItem.category, callback: function(t) {
                    e.$set(e.editedItem, "category", t);
                  }, expression: "editedItem.category",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Internal Types: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-autocomplete", {
                attrs: {
                  items: e.internalTypes,
                  label: "Select the internal types",
                  outlined: "",
                  chips: "",
                  "small-chips": "",
                  multiple: "",
                }, model: {
                  value: e.editedItem.internalType, callback: function(t) {
                    e.$set(e.editedItem, "internalType", t);
                  }, expression: "editedItem.internalType",
                },
              })], 1)], 1), a("v-row", { staticClass: "py-1 pb-5" }, [a("v-col", { attrs: { cols: "4" } }, [a("v-subheader", { staticClass: "subtitle-1" }, [e._v(" Location: ")])], 1), a("v-col", { attrs: { cols: "8" } }, [a("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Location of the framework ( website, repository ...)",
                  label: "Location",
                }, model: {
                  value: e.editedItem.location, callback: function(t) {
                    e.$set(e.editedItem, "location", t);
                  }, expression: "editedItem.location",
                },
              })], 1)], 1), a("v-row", { staticClass: "px-3" }, [a("v-textarea", {
                attrs: {
                  outlined: "",
                  clearable: "",
                  "clear-icon": "mdi-close-circle",
                  label: "Description of the framework",
                  value: e.editedItem.description,
                }, model: {
                  value: e.editedItem.description, callback: function(t) {
                    e.$set(e.editedItem, "description", t);
                  }, expression: "editedItem.description",
                },
              })], 1), e.editItemError && "" != e.editItemError ? a("v-row", { staticClass: "red--darken--text" }, [e._v(e._s(e.editItemError))]) : e._e()], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                  color: "blue darken-1",
                  text: "",
                }, on: { click: e.close },
              }, [e._v(" Cancel ")]), a("v-btn", {
                staticClass: "ma-1",
                attrs: {
                  color: "green",
                  plain: "",
                  disabled: e.editedItem == e.focusedFramework,
                  loading: e.editItemLoading,
                },
                on: { click: e.save },
              }, [e._v(" Save the Framework ")])], 1)], 1)], 1), a("v-dialog", {
                attrs: { "max-width": "500px" },
                model: {
                  value: e.dialogDelete, callback: function(t) {
                    e.dialogDelete = t;
                  }, expression: "dialogDelete",
                },
              }, [a("v-card", [a("v-card-title", { staticClass: "headline" }, [a("v-container", [a("v-row", [e._v("Are you sure you want to delete this "), a("strong", [e._v(e._s(e.editedItem.name))]), e._v(" item?")]), e.editItemError && "" != e.editItemError ? a("v-row", { staticClass: "red--darken--text" }, [e._v(e._s(e.editItemError))]) : e._e()], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
                attrs: {
                  color: "blue darken-1",
                  text: "",
                }, on: { click: e.closeDelete },
              }, [e._v("Cancel")]), null != e.editedItem ? a("v-btn", {
                staticClass: "ma-1",
                attrs: { color: "error", plain: "" },
                on: {
                  click: function(t) {
                    return e.deleteFramework();
                  },
                },
              }, [e._v(" Delete ")]) : e._e(), a("v-spacer")], 1)], 1)], 1)], 1)];
            }, proxy: !0,
          }, {
            key: "item.validation", fn: function(t) {
              var r = t.item;
              return ["Framework" == r.type && "" != r.description ? a("v-icon", { attrs: { color: "green" } }, [e._v(" mdi-check-circle ")]) : e._e(), "Framework" == r.type && "" == r.description ? a("v-icon", { attrs: { color: "orange" } }, [e._v(" mdi-check-circle ")]) : e._e(), "Framework" != r.type ? a("v-icon", { attrs: { color: "red" } }, [e._v(" mdi-checkbox-blank-circle ")]) : e._e()];
            },
          }, {
            key: "item.actions", fn: function(t) {
              var r = t.item;
              return [a("v-icon", {
                staticClass: "mr-2", attrs: { small: "" }, on: {
                  click: function(t) {
                    return e.editItem(r);
                  },
                },
              }, [e._v(" mdi-pencil ")]), a("v-icon", {
                staticClass: "mr-2",
                attrs: { small: "" },
                on: {
                  click: function(t) {
                    return e.deleteItem(r);
                  },
                },
              }, [e._v(" mdi-delete ")]), a("v-tooltip", {
                attrs: { bottom: "" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var n = t.on, i = t.attrs;
                    return [a("v-icon", e._g(e._b({
                      attrs: { small: "" }, on: {
                        click: function(t) {
                          return e.toggleFramework(r);
                        },
                      },
                    }, "v-icon", i, !1), n), [e._v(" mdi-check-underline-circle-outline ")])];
                  },
                }], null, !0),
              }, [a("span", [e._v("Quickly toggle the validation")])])];
            },
          }, {
            key: "expanded-item", fn: function(t) {
              t.headers;
              var r = t.item;
              return [a("td", { attrs: { colspan: "100%" } }, [a("v-container", [a("v-row", { staticClass: "my-4" }, [e._v("More info about " + e._s(r.name))]), a("v-row", { staticClass: "mb-4" }, [e._v("Pattern: "), a("strong", { staticClass: "ml-3" }, [e._v(e._s(r.pattern) + " ")])]), a("v-row", { staticClass: "mb-4" }, [e._v("Regex Mode: "), a("strong", { staticClass: "ml-3" }, [e._v(e._s(r.isRegex) + " ")])]), a("v-row", { staticClass: "mb-4" }, [e._v("Category: "), a("strong", { staticClass: "ml-3" }, [e._v(e._s(r.category) + " ")])]), a("v-row", { staticClass: "mb-4" }, [e._v("Found on: "), a("strong", { staticClass: "ml-3" }, [e._v(e._s(r.location) + " ")])]), a("v-row", { staticClass: "mb-4" }, [e._v("Description: "), a("strong", { staticClass: "ml-3" }, [e._v(e._s(r.description) + " ")])]), a("v-row", { staticClass: "mb-4" }, [e._v("This rules currently match the following obejct types: "), a("v-chip-group", { attrs: { column: "" } }, e._l(r.internalType, (function(t) {
                return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
              })), 1)], 1)], 1)], 1)];
            },
          }, {
            key: "footer", fn: function() {
              return [a("v-row", {
                staticClass: "mt-2 pa-4",
                attrs: { align: "center", justify: "center" },
              }, [a("span", { staticClass: "grey--text" }, [e._v("Items per page")]), a("v-menu", {
                attrs: { "offset-y": "" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var r = t.on, n = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ml-2",
                      attrs: { dark: "", text: "", color: "primary" },
                    }, "v-btn", n, !1), r), [e._v(" " + e._s(e.itemsPerPage) + " "), a("v-icon", [e._v("mdi-chevron-down")])], 1)];
                  },
                }]),
              }, [a("v-list", e._l(e.itemsPerPageArray, (function(t, r) {
                return a("v-list-item", {
                  key: r, on: {
                    click: function(a) {
                      return e.updateItemsPerPage(t);
                    },
                  },
                }, [a("v-list-item-title", [e._v(e._s(t))])], 1);
              })), 1)], 1), a("v-spacer"), a("span", { staticClass: "mr-4\n          grey--text" }, [e._v(" Page " + e._s(e.page) + " of " + e._s(e.numberOfPages()) + " ")]), a("v-btn", {
                staticClass: "mr-1",
                attrs: { fab: "", dark: "", color: "persianGrey" },
                on: {
                  click: function(t) {
                    return e.formerPage();
                  },
                },
              }, [a("v-icon", [e._v("mdi-chevron-left")])], 1), a("v-btn", {
                staticClass: "ml-1",
                attrs: { fab: "", dark: "", color: "persianGrey" },
                on: {
                  click: function(t) {
                    return e.nextPage();
                  },
                },
              }, [a("v-icon", [e._v("mdi-chevron-right")])], 1)], 1)];
            }, proxy: !0,
          }, {
            key: "no-data", fn: function() {
              return [a("v-btn", { attrs: { color: "primary" }, on: { click: e.refresh } }, [e._v(" Reset ")])];
            }, proxy: !0,
          }]),
        })], 1)], 1)], 1), a("v-card", [a("v-card-title", [a("v-icon", {
          staticClass: "mr-2",
          attrs: { color: "teal" },
        }, [e._v(" mdi-cogs ")]), e._v(" Action on the configuration")], 1), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mb-4" }, [a("v-col", {
          staticClass: "mt-1",
          attrs: { cols: "6" },
        }, [e._v(" Automatically clean the configuration from duplicates nodes"), a("br"), e._v("The duplicates framework properties will be merged. "), a("br"), e._v(" " + e._s(e.autoCleanInfo) + " ")]), a("v-col", { attrs: { cols: "6" } }, [a("v-btn", {
          staticClass: "ma-2",
          attrs: { loading: e.loadingAutoClean, disabled: e.loadingAutoClean, color: "teal", dark: "" },
          on: { click: e.launchAutoClean },
        }, [e._v(" Auto cleaning ")])], 1)], 1), a("v-row", { staticClass: "mb-4" }, [a("v-col", {
          staticClass: "mt-1",
          attrs: { cols: "6" },
        }, [e._v(" Export the frameworks to a zip file "), a("br")]), a("v-col", { attrs: { cols: "6" } }, [a("v-btn", {
          staticClass: "ma-2",
          attrs: { loading: e.generatingDownload, disabled: e.generatingDownload, color: "teal", dark: "" },
          on: { click: e.launchExport },
        }, [e._v(" Download ")])], 1)], 1), a("v-divider")], 1)], 1)], 1), a("v-snackbar", {
          attrs: { timeout: 2e3 },
          scopedSlots: e._u([{
            key: "action", fn: function(t) {
              var r = t.attrs;
              return [a("v-btn", e._b({
                attrs: { color: "blue", text: "" }, on: {
                  click: function(t) {
                    e.snackbar = !1;
                  },
                },
              }, "v-btn", r, !1), [e._v(" Close ")])];
            },
          }]),
          model: {
            value: e.displayUpdateSuccess, callback: function(t) {
              e.displayUpdateSuccess = t;
            }, expression: "displayUpdateSuccess",
          },
        }, [e._v(" Framework " + e._s(e.frameworkUpdateSnackBar) + " was updated successfully ")]), a("v-snackbar", {
          attrs: { timeout: 2e3 },
          scopedSlots: e._u([{
            key: "action", fn: function(t) {
              var r = t.attrs;
              return [a("v-btn", e._b({
                attrs: { color: "blue", text: "" }, on: {
                  click: function(t) {
                    e.snackbar = !1;
                  },
                },
              }, "v-btn", r, !1), [e._v(" Close ")])];
            },
          }]),
          model: {
            value: e.displayUpdateFailure, callback: function(t) {
              e.displayUpdateFailure = t;
            }, expression: "displayUpdateFailure",
          },
        }, [e._v(" Something wrong happened during the update of " + e._s(e.frameworkUpdateSnackBar) + ". ")])], 1);
      }, On = [], jn = n["a"].component("FrameworkReviewer", {
        data: function() {
          return {
            itemsPerPageArray: [8, 12, 50],
            search: "",
            filter: {},
            sortDesc: !1,
            page: 0,
            itemsPerPage: 14,
            sortBy: "name",
            headers: [{ text: "Name", align: "start", sortable: !1, value: "name" }, {
              text: "Description",
              value: "description",
            }, { text: "Category", value: "category" }, {
              text: "Type discovered",
              value: "type",
            }, { text: "Discovery date", value: "discoveryDate" }, {
              text: "Validation",
              value: "validation",
              sortable: !1,
            }, { text: "Actions", value: "actions", sortable: !1 }, { text: "", value: "data-table-expand" }],
            toSearch: "",
            items: [],
            numberItems: 0,
            showOnly: "",
            currentIndex: 0,
            focusedFramework: null,
            frameworkTypes: [{ name: "Framework", value: "Framework" }, {
              name: "Not a Framework",
              value: "NotFramework",
            }],
            dialog: !1,
            dialogDelete: !1,
            editedIndex: -1,
            editedItem: {
              name: "",
              description: "",
              type: "NotFramework",
              category: "External",
              internalType: [""],
              location: "",
            },
            defaultItem: {
              name: "",
              description: "",
              type: "NotFramework",
              category: "External",
              internalType: [""],
              location: "",
            },
            editItemError: "",
            editItemLoading: !1,
            frameworkCategories: [],
            internalTypes: [],
            loadingTable: !1,
            updatingFramework: !1,
            displayUpdateSuccess: !1,
            displayUpdateFailure: !1,
            frameworkUpdateSnackBar: "",
            loadingSearch: !1,
            loadingAutoClean: !1,
            autoCleanInfo: "",
            generatingDownload: !1,
          };
        }, computed: {
          filteredKeys: function() {
            return this.headers.filter((function(e) {
              return "Name" !== e;
            }));
          }, formTitle: function() {
            return -1 === this.editedIndex ? "New Item" : "Edit Item";
          },
        }, methods: {
          getListCategories: function() {
            var e = this;
            tr.getAllNode().then((function(t) {
              e.frameworkCategories = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of categories", e);
            }));
          }, setFrameworkFocus: function(e, t) {
            this.currentIndex = t, this.focusedFramework = this.items[this.currentIndex], this.editedItem = Object.assign({}, e);
          }, getFocusedFramework: function() {
            return this.items[this.currentIndex];
          }, undoModification: function() {
            this.editedItem = this.focusedFramework;
          }, deleteFramework: function() {
            var e = this;
            this.editItemLoading = !0, ar.deleteFramework(this.items[this.editedIndex].id).then((function(t) {
              t && (e.refreshFramework(), e.closeDelete()), e.editItemError = "Failed to delete the framework";
            })).catch((function(t) {
              e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            }));
          }, toggleFramework: function(e) {
            var t = this;
            this.editItemLoading = !0, ar.toggleFramework(e.id).then((function(e) {
              e && t.refreshFramework();
            })).catch((function(e) {
              console.error("Toggle framework failed", e), t.editItemError = e;
            }));
          }, getNumberFrameworks: function() {
            var e = this;
            ar.getTotalFramework().then((function(t) {
              e.numberItems = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            }));
          }, getInternalTypes: function() {
            var e = this;
            ar.getInternalTypes().then((function(t) {
              e.internalTypes = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of internal types", e);
            }));
          }, updateFramework: function(e) {
            var t = this, a = this.focusedFramework.name, r = this.focusedFramework.internalType;
            this.frameworkUpdateSnackBar = a, this.updatingFramework = !0, ar.updateFrameworks(a, r, e).then((function(e) {
              t.displayUpdateSuccess = !0, t.refreshFramework();
            })).catch((function(e) {
              console.error("Failed to update the framework.", e), t.displayUpdateFailure = !0;
            })).finally((function() {
              t.updatingFramework = !1;
            }));
          }, editItem: function(e) {
            this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0;
          }, deleteItem: function(e) {
            this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0;
          }, deleteItemConfirm: function() {
            this.closeDelete();
          }, close: function() {
            var e = this;
            this.dialog = !1, this.editItemError = "", this.editItemLoading = !1, this.$nextTick((function() {
              e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
            }));
          }, closeDelete: function() {
            var e = this;
            this.dialogDelete = !1, this.$nextTick((function() {
              e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
            }));
          }, save: function() {
            var e = this;
            this.editedIndex > -1 ? (this.editItemLoading = !0, ar.updateFrameworksById(this.editedItem).then((function(t) {
              t && e.close(), e.editItemError = "Failed to update the framework";
            })).catch((function(t) {
              console.error("Failed to update the framework", t), e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            })), Object.assign(this.items[this.editedIndex], this.editedItem)) : (ar.addFramework(this.editedItem).then((function(t) {
              t && e.close(), e.editItemError = "Failed to add the framework";
            })).catch((function(t) {
              console.error("Failed to add the framework", t), e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            })), this.items.push(this.editedItem));
          }, getBatchFramework: function() {
            var e = this, t = this.page * this.itemsPerPage, a = t + this.itemsPerPage;
            this.getNumberFrameworks(), this.loadingTable = !0, ar.getFrameworkBatch(t, a).then((function(t) {
              e.items = t, e.currentIndex && e.setFrameworkFocus(e.currentIndex);
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1;
            }));
          }, getToValidateFramework: function() {
            var e = this;
            this.loadingTable = !0, ar.getToValidateFrameworks().then((function(t) {
              e.items = t, e.currentIndex = 0, e.numberItems = t.length;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1;
            }));
          }, getDuplicatesFramework: function() {
            var e = this;
            this.loadingTable = !0, ar.getDuplicatesFrameworks().then((function(t) {
              e.items = t, e.currentIndex = 0, e.numberItems = t.length;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1;
            }));
          }, refreshFramework: function() {
            "ToValidate" == this.showOnly ? this.getToValidateFramework() : "Duplicates" == this.showOnly ? (this.showOnlyToValidate = !1, this.getDuplicatesFramework()) : this.getBatchFramework();
          }, launchAutoClean: function() {
            var e = this;
            this.loadingAutoClean = !0, ar.launchAutoCleaning().then((function(t) {
              e.autoCleanInfo = "".concat(t, " groups were cleaned during the operation.");
            })).catch((function(e) {
              console.error("Failed to search for frameworks.", e);
            })).finally((function() {
              e.loadingAutoClean = !1;
            }));
          }, searchFrameworks: function() {
            var e = this;
            this.toSearch && 0 != this.toSearch.length ? (this.loadintTable = !0, this.loadingSearch = !0, ar.searchFramework(this.toSearch).then((function(t) {
              e.items = t, e.numberItems = t.length, e.currentIndex = 0;
            })).catch((function(e) {
              console.error("Failed to search for frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1, e.loadingSearch = !1;
            }))) : this.refreshFramework();
          }, launchExport: function() {
            Ia.launchExportAll();
          }, nextPage: function() {
            this.currentIndex = 0, this.page + 1 <= this.numberOfPages() && (this.page += 1), this.refreshFramework();
          }, formerPage: function() {
            this.currentIndex = 0, this.page - 1 >= 0 && (this.page -= 1), this.refreshFramework();
          }, updateItemsPerPage: function(e) {
            this.itemsPerPage = e;
          }, numberOfPages: function() {
            return Math.ceil(this.numberItems / this.itemsPerPage);
          }, refresh: function() {
            this.page = 0, this.getInternalTypes(), this.getNumberFrameworks(), this.refreshFramework();
          },
        }, mounted: function() {
          this.refresh(), this.getInternalTypes(), this.getListCategories();
        },
      }), Mn = jn, Dn = (a("0862"), a("2b5d")), Pn = a("e449"), Nn = Object(u["a"])(Mn, Fn, On, !1, null, null, null),
      Bn = Nn.exports;
    M()(Nn, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VCombobox: Dn["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VList: Ae["a"],
      VListItem: Re["a"],
      VListItemTitle: Se["c"],
      VMenu: Pn["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VSubheader: Pa["a"],
      VTextField: Y["a"],
      VTextarea: ne["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
      VTooltip: Fe["a"],
    });
    var Un = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h4" }, [e._v(" Custom categories manager "), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.initialize();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", { staticClass: "text-subtitle-1 ml-2 mt-2" }, [e._v("Create Framework categories where your frameworks will be regrouped in Imaging, you can also from here add the Icon directlty in imaging. "), a("br"), e._v(" You can get more informations on how to manage your category here : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.atlas" } }, [e._v(" https://github.com/CAST-Extend/com.castsoftware.uc.atlas ")])]), a("v-card-text", [a("v-container", [a("v-data-table", {
        staticClass: "elevation-1", attrs: { headers: e.headers, items: e.items }, scopedSlots: e._u([{
          key: "top", fn: function() {
            return [a("v-toolbar", { attrs: { flat: "" } }, [a("v-toolbar-title", [e._v("Category manager")]), a("v-divider", {
              staticClass: "mx-4",
              attrs: { inset: "", vertical: "" },
            }), a("v-spacer"), a("v-dialog", {
              attrs: { "max-width": "600px" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [a("v-btn", e._g(e._b({
                    staticClass: "mb-2",
                    attrs: { color: "primary", dark: "" },
                  }, "v-btn", n, !1), r), [e._v(" New Category ")])];
                },
              }]),
              model: {
                value: e.dialog, callback: function(t) {
                  e.dialog = t;
                }, expression: "dialog",
              },
            }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v(e._s(e.formTitle))])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "6" } }, [a("v-subheader", [e._v("Name of the category:")])], 1), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
              model: {
                value: e.editedItem.name,
                callback: function(t) {
                  e.$set(e.editedItem, "name", t);
                },
                expression: "editedItem.name",
              },
            })], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "6" } }, [a("v-subheader", [e._v("Icon URL:")])], 1), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
              model: {
                value: e.editedItem.iconUrl,
                callback: function(t) {
                  e.$set(e.editedItem, "iconUrl", t);
                },
                expression: "editedItem.iconUrl",
              },
            })], 1)], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: {
                color: "blue darken-1",
                text: "",
              }, on: { click: e.close },
            }, [e._v(" Cancel ")]), a("v-btn", {
              attrs: { color: "blue darken-1", text: "" },
              on: { click: e.save },
            }, [e._v(" Save ")])], 1)], 1)], 1), a("v-dialog", {
              attrs: { "max-width": "500px" },
              model: {
                value: e.dialogDelete, callback: function(t) {
                  e.dialogDelete = t;
                }, expression: "dialogDelete",
              },
            }, [a("v-card", [a("v-card-title", { staticClass: "headline" }, [e._v("Are you sure you want to delete this item?")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
              attrs: {
                color: "blue darken-1",
                text: "",
              }, on: { click: e.closeDelete },
            }, [e._v("Cancel")]), a("v-btn", {
              attrs: { color: "blue darken-1", text: "" },
              on: { click: e.deleteItemConfirm },
            }, [e._v("OK")]), a("v-spacer")], 1)], 1)], 1)], 1)];
          }, proxy: !0,
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.editItem(r);
                },
              },
            }, [e._v(" mdi-pencil ")]), a("v-icon", {
              attrs: { small: "" }, on: {
                click: function(t) {
                  return e.deleteItem(r);
                },
              },
            }, [e._v(" mdi-delete ")])];
          },
        }, {
          key: "no-data", fn: function() {
            return [a("v-btn", { attrs: { color: "primary" }, on: { click: e.initialize } }, [e._v(" Reset ")])];
          }, proxy: !0,
        }]),
      })], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 }, scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]), model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1);
    }, Gn = [], $n = n["a"].extend({
      name: "CategoriesCreator", data: function() {
        return {
          dialog: !1,
          dialogDelete: !1,
          snackbarInfo: !1,
          textSnackBar: "",
          headers: [{ text: "Name of the category", align: "start", sortable: !0, value: "name" }, {
            text: "Icon URL",
            value: "iconURL",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          items: [],
          editedIndex: -1,
          editedItem: { name: "", iconUrl: "" },
          defaultItem: { name: "", iconUrl: "" },
        };
      }, computed: {
        formTitle: function() {
          return -1 === this.editedIndex ? "New Item" : "Edit Item";
        },
      }, watch: {
        dialog: function(e) {
          e || this.close();
        }, dialogDelete: function(e) {
          e || this.closeDelete();
        },
      }, mounted: function() {
        this.initialize();
      }, methods: {
        initialize: function() {
          var e = this;
          tr.getAllNode().then((function(t) {
            e.items = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of Category", e);
          }));
        }, editItem: function(e) {
          this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0;
        }, deleteItem: function(e) {
          this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0;
        }, deleteItemConfirm: function() {
          var e = this;
          tr.deleteNode(this.editedItem).then((function(t) {
            e.textSnackBar = "Successfully deleted the category.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to delete the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })), this.closeDelete();
        }, close: function() {
          var e = this;
          this.dialog = !1, this.$nextTick((function() {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
          }));
        }, closeDelete: function() {
          var e = this;
          this.dialogDelete = !1, this.$nextTick((function() {
            e.editedItem = Object.assign({}, e.defaultItem), e.editedIndex = -1;
          }));
        }, save: function() {
          var e = this;
          this.editedIndex > -1 ? tr.updateNode(this.editedItem).then((function(t) {
            e.textSnackBar = "Successfully updated the category.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to udpdate the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })) : tr.addNode(this.editedItem).then((function(t) {
            e.textSnackBar = "Successfully added the category.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to add the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })), this.close();
        },
      },
    }), qn = $n, Hn = Object(u["a"])(qn, Un, Gn, !1, null, null, null), Wn = Hn.exports;
    M()(Hn, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VSubheader: Pa["a"],
      VTextField: Y["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
    });
    var Qn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h4" }, [e._v(" Custom Rules Creator "), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", { staticClass: "text-subtitle-1 ml-2 mt-2" }, [e._v("Create in this section custom categories. The categories will match and regroup objects in your level wiews to make the investigation easier. "), a("br"), e._v(" You can configure the groups with different Regexes, and frameworks names and category. "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.atlas" } }, [e._v(" https://github.com/CAST-Extend/com.castsoftware.uc.atlas ")])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-2",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Custom Regex rules creator ")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-container", [a("v-row", { staticClass: "mb-6" }, [a("v-btn", {
        attrs: {
          width: "100%",
          color: "primary",
          dark: "",
          large: "",
        }, on: {
          click: function(t) {
            return e.addRegexTemplate();
          },
        },
      }, [e._v(" Append a new Regex rule "), a("v-icon", {
        attrs: {
          dark: "",
          right: "",
        },
      }, [e._v(" mdi-plus-box ")])], 1)], 1), 0 == e.items.length ? a("v-row", [a("h4", { staticClass: "text-h5" }, [e._v(" No regex rules detected, start adding new rules ")])]) : e._e(), a("v-row", [a("v-treeview", {
        staticStyle: { width: "100%" },
        attrs: { items: e.items, activatable: "", "return-object": "", "open-on-click": "", "item-key": "id" },
        scopedSlots: e._u([{
          key: "prepend", fn: function(t) {
            var r = t.item, n = t.open;
            return [r.file ? a("v-icon", { attrs: { large: "" } }, [e._v(" " + e._s(e.files[r.file]) + " ")]) : a("v-icon", { attrs: { large: "" } }, [e._v(" " + e._s(n ? "mdi-folder-open" : "mdi-folder") + " ")])];
          },
        }, {
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "8" } }, [a("h4", { staticClass: "text-h5 mx-2" }, [e._v(" " + e._s(r.name) + " ")])]), a("v-col", {
              staticClass: "mt-3",
              attrs: { cols: "4" },
            }, [a("v-icon", {
              staticClass: "mr-3", attrs: { color: "primary", dark: "" }, on: {
                click: function(t) {
                  return e.focusItem(r);
                },
              },
            }, [e._v(" mdi-eye ")]), a("v-icon", {
              attrs: { color: "red", dark: "" }, on: {
                click: function(t) {
                  return e.askForDeletion(r);
                },
              },
            }, [e._v(" mdi-trash-can-outline ")])], 1)], 1), a("v-row", { staticClass: "pl-6 mb-1" }, [a("em", [e._v(e._s(r.regexes))])]), a("v-row", { staticClass: "pl-5" }, [a("v-chip-group", { attrs: { column: "" } }, e._l(r.internalTypes, (function(t) {
              return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
            })), 1)], 1)], 1)];
          },
        }]),
        model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1)], 1)], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-card", { attrs: { "min-height": "400px" } }, [a("v-card-title", { staticClass: "text-h4" }, [e.addMode ? e._e() : a("span", [e._v("Review the Regex Rules")]), e.addMode ? a("span", [e._v("Add a Regex Rules")]) : e._e(), e.editMode ? e._e() : a("span", { staticClass: "pl-2 text-h6 text--red" }, [e._v("(Read Only)")]), e.editMode ? a("span", { staticClass: "pl-2 text-h6" }, [e._v("(Edit mode)")]) : e._e(), a("v-spacer"), a("v-btn", {
        attrs: {
          outlined: "",
          color: e.editMode ? "red" : "green",
        }, on: {
          click: function(t) {
            e.editMode = !e.editMode;
          },
        },
      }, [e._v(" Edit "), a("v-icon", { staticClass: "ml-2" }, [e._v("mdi-lead-pencil")])], 1)], 1), e.isFocused() ? e._e() : a("v-card-text", [e._v("Select a Regex node to start")]), e.isFocused() ? a("v-card-text", [a("v-container", { staticClass: "pl-2" }, [a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v("Name of the Rule")])]), a("v-row", { staticClass: "mx-1" }, [a("v-text-field", {
        attrs: {
          label: "Name",
          solo: "",
          readonly: !e.editMode,
        }, model: {
          value: e.focusedRegexNode.name, callback: function(t) {
            e.$set(e.focusedRegexNode, "name", t);
          }, expression: "focusedRegexNode.name",
        },
      })], 1), a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v(" Name of the framework ")])]), a("v-row", { staticClass: "mx-1" }, [a("v-text-field", {
        attrs: {
          label: "Framework",
          solo: "",
          readonly: !e.editMode,
        }, model: {
          value: e.focusedRegexNode.framework, callback: function(t) {
            e.$set(e.focusedRegexNode, "framework", t);
          }, expression: "focusedRegexNode.framework",
        },
      })], 1), a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v("List of Regexes")])]), a("v-row", { staticClass: "mb-1 ml-2" }, [a("h4", [e._v("Add a new regex rule")])]), a("v-row", [a("v-col", { attrs: { cols: "10" } }, [a("v-text-field", {
        attrs: {
          solo: "",
          label: "Append outer",
          disabled: !e.editMode,
        }, model: {
          value: e.currentRegexInput, callback: function(t) {
            e.currentRegexInput = t;
          }, expression: "currentRegexInput",
        },
      })], 1), a("v-col", {
        staticClass: "d-flex flex-row",
        attrs: { cols: "2" },
      }, [a("v-btn", {
        attrs: { width: "100%", color: "primary", dark: "", large: "" }, on: {
          click: function(t) {
            return e.appendToRegexList(e.focusedRegexNode);
          },
        },
      }, [e._v(" ADD "), a("v-icon", {
        attrs: {
          dark: "",
          right: "",
        },
      }, [e._v(" mdi-plus-box ")])], 1)], 1)], 1), e.isFocused() ? a("v-row", { staticClass: "pl-3 d-flex flex-column " }, e._l(e.focusedRegexNode.regexes, (function(t, r) {
        return a("v-text-field", {
          key: r,
          attrs: {
            value: t,
            solo: "",
            label: "Append",
            readonly: "",
            disabled: !e.editMode,
            "append-outer-icon": "mdi-close",
          },
          on: {
            "click:append-outer": function(a) {
              return e.removeFromList(e.focusedRegexNode, t);
            },
          },
        });
      })), 1) : e._e(), a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v(" List of Internal types ")])]), a("v-row", { staticClass: "mx-1" }, [a("v-autocomplete", {
        attrs: {
          items: e.internalTypes,
          label: "Internal types",
          readonly: !e.editMode,
          multiple: "",
          chips: "",
        }, model: {
          value: e.focusedRegexNode.internalTypes, callback: function(t) {
            e.$set(e.focusedRegexNode, "internalTypes", t);
          }, expression: "focusedRegexNode.internalTypes",
        },
      })], 1), a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v("Category")])]), a("v-row", { staticClass: "mx-1" }, [a("v-autocomplete", {
        attrs: {
          items: e.categories,
          "item-text": "name",
          "item-value": "name",
          readonly: !e.editMode,
          label: "Category",
          chips: "",
        }, model: {
          value: e.focusedRegexNode.category, callback: function(t) {
            e.$set(e.focusedRegexNode, "category", t);
          }, expression: "focusedRegexNode.category",
        },
      })], 1), a("v-divider", { staticClass: "my-5" }), a("v-row", { staticClass: "mx-1 mb-5" }, [a("h4", { staticClass: "text-h6" }, [e._v("Parent category")])]), a("v-row", { staticClass: "mx-1" }, [a("v-select", {
        attrs: {
          items: e.parentIdList,
          readonly: !e.editMode,
          "item-text": "name",
          "item-value": "id",
          label: "Parent ID",
        }, model: {
          value: e.focusedRegexNode.parentId, callback: function(t) {
            e.$set(e.focusedRegexNode, "parentId", t);
          }, expression: "focusedRegexNode.parentId",
        },
      })], 1), a("v-divider", { staticClass: "my-5" }), a("v-row", [a("v-spacer"), a("v-btn", {
        staticClass: "mx-3",
        attrs: { color: "primary", disabled: e.addMode },
        on: {
          click: function(t) {
            return e.testRegexNode(e.focusedRegexNode);
          },
        },
      }, [e._v(" Test the Regex Rule ")]), e.addMode ? a("v-btn", {
        attrs: { color: "primary" },
        on: {
          click: function(t) {
            return e.addRegex(e.focusedRegexNode);
          },
        },
      }, [e._v(" Add the Regex Rule ")]) : e._e(), e.addMode ? e._e() : a("v-btn", {
        attrs: {
          color: "primary",
          disabled: !e.editMode,
        }, on: {
          click: function(t) {
            return e.updateRegex(e.focusedRegexNode);
          },
        },
      }, [e._v(" Update the Regex Rule ")])], 1)], 1)], 1) : e._e()], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", { staticClass: "my-4" }, [a("v-card", {
        staticClass: "mx-2",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Advanced options: "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-2",
        attrs: { color: "primary" },
        on: {
          click: function(t) {
            e.expandOptions = "export" != e.expandOptions ? "export" : "";
          },
        },
      }, [e._v(" Export options ")]), a("v-btn", {
        attrs: { color: "primary" }, on: {
          click: function(t) {
            e.expandOptions = "generate" != e.expandOptions ? "generate" : "";
          },
        },
      }, [e._v(" Generate ")])], 1), a("v-expand-transition", [a("v-card-text", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "export" == e.expandOptions,
          expression: "expandOptions == 'export'",
        }], staticClass: "mx-auto secondary white--text",
      }, [a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-row", [a("h3", { staticClass: "text-h5 mt-3" }, [e._v(" Export the rules to a cypher file ")])]), a("v-row", [a("h3", { staticClass: "my-3" }, [e._v("Select the rules to export:")]), a("v-treeview", {
        staticClass: "white--text",
        attrs: { color: "white", selectable: "", items: e.items, "selection-type": "all", "return-object": "" },
        model: {
          value: e.treeExport, callback: function(t) {
            e.treeExport = t;
          }, expression: "treeExport",
        },
      })], 1), a("v-row", [a("v-spacer"), a("v-btn", {
        on: {
          click: function(t) {
            return e.getArtifactTree();
          },
        },
      }, [e._v(" Get artifacts ")])], 1)], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-card", {
        staticClass: "ma-3 pa-4",
        staticStyle: { "background-color": "#606060", "min-height": "100%", color: "#ffdc16" },
      }, [a("p", { domProps: { innerHTML: e._s(e.fullExportRequest) } })])], 1)], 1)], 1)], 1)], 1), a("v-expand-transition", [a("v-card-text", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: "generate" == e.expandOptions,
          expression: "expandOptions == 'generate'",
        }], staticClass: "mx-auto secondary white--text",
      }, [a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-row", [a("h3", { staticClass: "text-h5 mt-3" }, [e._v(" Generate rules from the breakdown of the application ")])]), a("v-row", { staticClass: "mt-2 mb-4" }, [a("h3", { staticClass: "my-3" }, [e._v("Select the rules to export:")]), a("v-treeview", {
        staticClass: "white--text",
        attrs: {
          color: "white",
          selectable: "",
          items: e.artifactItems,
          "selection-type": "independent",
          "return-object": "",
        },
        model: {
          value: e.artifactTree, callback: function(t) {
            e.artifactTree = t;
          }, expression: "artifactTree",
        },
      })], 1), a("v-row", [a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-select", {
        staticClass: "mx-2",
        attrs: { items: e.applicationItems, label: "Applications", outlined: "", dark: "" },
        on: {
          change: function(t) {
            return e.getArtifactTree();
          },
        },
        model: {
          value: e.defaultApplication, callback: function(t) {
            e.defaultApplication = t;
          }, expression: "defaultApplication",
        },
      })], 1), a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-select", {
        staticClass: "mx-2",
        attrs: { items: e.languageItems, label: "Language", outlined: "", dark: "" },
        on: {
          change: function(t) {
            return e.getArtifactTree();
          },
        },
        model: {
          value: e.defaultLanguage, callback: function(t) {
            e.defaultLanguage = t;
          }, expression: "defaultLanguage",
        },
      })], 1), a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-btn", {
        attrs: { large: "" },
        on: {
          click: function(t) {
            return e.createQuerySet();
          },
        },
      }, [e._v(" Generate the queries ")])], 1)], 1)], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "6",
        },
      }, [a("v-card", {
        staticClass: "ma-3 pa-4",
        staticStyle: { "background-color": "#606060", "min-height": "100%", color: "#ffdc16" },
      }, [a("p", { domProps: { innerHTML: e._s(e.fullQuerySet) } })])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 1e4 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarTestResults = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarTestResults, callback: function(t) {
            e.snackbarTestResults = t;
          }, expression: "snackbarTestResults",
        },
      }, [e._v(" " + e._s(e.testRegexResults) + " ")]), a("v-dialog", {
        attrs: { persistent: "", "max-width": "290" },
        model: {
          value: e.dialogDeleteNode, callback: function(t) {
            e.dialogDeleteNode = t;
          }, expression: "dialogDeleteNode",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "headline" }, [e._v(" Are you sure to delete this rule ? ")]), a("v-card-text", [e._v(" You're about to delete the rule " + e._s(e.toDelete.name) + ". "), a("br"), e._v(" The rule currenlty affect : " + e._s(e.dialogDeleteNodeNumAffected) + " objects ")]), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "green darken-1",
          text: "",
        }, on: {
          click: function(t) {
            e.dialogDeleteNode = !1;
          },
        },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "red darken-1", text: "", loading: e.deletingNode },
        on: {
          click: function(t) {
            return e.removeRegexNode(e.toDelete.id);
          },
        },
      }, [e._v(" Delete ")])], 1)], 1)], 1)], 1);
    }, zn = [], Yn = (a("b64b"), n["a"].extend({
      name: "CustomsCreator", components: {}, data: function() {
        return {
          initiallyOpen: [],
          focusedRegexNode: {},
          defaultRegexNode: { name: "", regexes: [], internalTypes: [], framework: "", category: "", parentId: -1 },
          currentRegexInput: "",
          editMode: !1,
          addMode: !1,
          expandOptions: "",
          testRegexResults: "",
          snackbarTestResults: !1,
          snackbarInfo: !1,
          textSnackBar: "",
          internalTypes: [],
          categories: [],
          tree: [],
          treeExport: [],
          fullExportRequest: "",
          fullQuerySet: "",
          artifactItems: [],
          artifactTree: [],
          applicationItems: [],
          languageItems: [],
          defaultApplication: "",
          defaultLanguage: "",
          classExternality: !1,
          editItem: null,
          parentIdList: [],
          items: [],
          dialogDeleteNode: !1,
          dialogDeleteNodeNumAffected: "",
          toDelete: {},
          deletingNode: !1,
        };
      }, methods: {
        editArtifact: function(e) {
          this.editItem = e;
        }, focusItem: function(e) {
          this.testRegexResults = "", this.addMode = !1, this.focusedRegexNode = Object.assign({}, e);
        }, initFocusView: function() {
          this.focusedRegexNode = {};
        }, isFocused: function() {
          return !(0 == Object.keys(this.focusedRegexNode).length && this.focusedRegexNode.constructor === Object);
        }, addRegexTemplate: function() {
          this.focusedRegexNode = Object.assign({}, this.defaultRegexNode), this.addMode = !0, this.editMode = !0;
        }, addRegex: function(e) {
          var t = this;
          Xa.addRegexNode(e).then((function(e) {
            t.focusedRegexNode = Object.assign({}, t.defaultRegexNode), t.addMode = !1, t.editMode = !1, t.displayInfoSnackbar("Successfully added the rule."), t.refresh();
          })).catch((function(e) {
            console.error("Failed to add the rule", e), t.displayInfoSnackbar("Failed to add the rule. Error: ".concat(e));
          }));
        }, displayInfoSnackbar: function(e) {
          this.textSnackBar = e, this.snackbarInfo = !0;
        }, updateRegex: function(e) {
          var t = this;
          Xa.updateRegexNode(e).then((function(e) {
            t.addMode = !1, t.editMode = !1, t.displayInfoSnackbar("Successfully updated the rule."), t.refresh();
          })).catch((function(e) {
            console.error("Failed to update the rule"), t.displayInfoSnackbar("Failed to update the rule. Error: ".concat(e));
          }));
        }, appendToRegexList: function(e) {
          "" != this.currentRegexInput && e.regexes.push(this.currentRegexInput), this.currentRegexInput = "", this.focusedRegexNode = e;
        }, removeRegexNode: function(e) {
          var t = this;
          this.deletingNode = !0, Xa.deleteRegexNode(this.toDelete.id).then((function(a) {
            a ? (t.displayInfoSnackbar("Successfully deleted the rule."), t.refresh()) : (console.error("Failed to delete the node.", e), t.displayInfoSnackbar("Failed to update the rule. Bad Request."));
          })).catch((function(a) {
            console.error("Failed to delete the node.", e), t.displayInfoSnackbar("Failed to delete the rule. Error: ".concat(a));
          })).finally((function() {
            t.dialogDeleteNode = !1, t.deletingNode = !1;
          }));
        }, askForDeletion: function(e) {
          var t = this;
          this.dialogDeleteNode = !0, this.toDelete = e, Xa.testRegex(this.toDelete.id).then((function(e) {
            t.dialogDeleteNodeNumAffected = e;
          })).catch((function(e) {
            t.dialogDeleteNodeNumAffected = e;
          }));
        }, testRegexNode: function(e) {
          var t = this;
          Xa.testRegex(e.id).then((function(e) {
            t.testRegexResults = "".concat(e, " objects matched this rule"), t.snackbarTestResults = !0;
          })).catch((function(e) {
            t.testRegexResults = e;
          }));
        }, removeFromList: function(e, t) {
          var a = e.regexes.indexOf(t);
          -1 != a && e.regexes.splice(a, 1), this.focusedRegexNode = e;
        }, getInternalTypes: function() {
          var e = this;
          ar.getInternalTypes().then((function(t) {
            e.internalTypes = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of internal types", e);
          }));
        }, getCategories: function() {
          var e = this;
          tr.getAllNode().then((function(t) {
            e.categories = t;
          })).catch((function(e) {
            console.log("Failed to retrieve the list of categories");
          }));
        }, getAllNodesAsTree: function() {
          var e = this;
          Xa.getAllNodesAsTree().then((function(t) {
            0 == t[0].name.length ? e.items = t[0].children : e.items = t;
          })).catch((function(e) {
            console.error(e);
          }));
        }, refresh: function() {
          this.getInternalTypes(), this.getCategories(), this.initFocusView();
        },
      }, mounted: function() {
        this.refresh();
      },
    })), Jn = Yn, Xn = Object(u["a"])(Jn, Qn, zn, !1, null, null, null), Zn = Xn.exports;
    M()(Xn, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VExpandTransition: Gt["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTreeview: lr["a"],
    });
    var Kn = n["a"].extend({
      name: "Frameworks",
      components: {
        ArtemisConsole: un,
        DetectionExplorer: Vn,
        FrameworkReviewer: Bn,
        CustomsCreator: Zn,
        CategoriesCreator: Wn,
      },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      data: function() {
        return {
          loading: !0,
          groupRecord: void 0,
          applicationName: "",
          diplayNotInstalled: !1,
          version: "",
          tab: 0,
          items: [{ view: "ArtemisConsole", name: "Discover", icon: "mdi-assistant" }, {
            view: "FrameworkReviewer",
            name: "Review",
            icon: "mdi-magnify",
          }, { view: "CategoriesCreator", name: "Categories", icon: "mdi-tag-multiple" }, {
            view: "CustomsCreator",
            name: "Customs",
            icon: "mdi-fountain-pen-tip",
          }, { view: "DetectionExplorer", name: "Operations", icon: "mdi-assistant" }],
        };
      },
      mounted: function() {
        var e = this;
        this.applicationName = this.$store.state.applicationName, console.log("Checking if the Artemis extension is installed.."), Ta.getArtemisVersion().then(function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.version = a;
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })));
          return function(e) {
            return t.apply(this, arguments);
          };
        }()).catch((function(t) {
          console.error("The Artemis extension wasn't detected. The  function will be limited. Please install the Artemis extension", t), e.diplayNotInstalled = !0;
        }));
      },
      watch: {
        getApplicationName: function(e) {
          this.applicationName = e;
        },
      },
    }), ei = Kn, ti = (a("5f10"), Object(u["a"])(ei, an, rn, !1, null, null, null)), ai = ti.exports;
    M()(ti, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var ri = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticClass: "mb-10" }, [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto " }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, ni = [], ii = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4" }, [e._v(" Inject "), a("strong", [e._v("Cloud blockers")]), e._v(" into " + e._s(e.application) + " application. ")]), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", [e._v(" Upload here the Tags coming from Cast Highlight ")]), a("v-card-text", [a("v-stepper", {
        model: {
          value: e.e1,
          callback: function(t) {
            e.e1 = t;
          },
          expression: "e1",
        },
      }, [a("v-stepper-header", [a("v-stepper-step", {
        attrs: {
          complete: e.e1 > 1,
          step: "1",
        },
      }, [e._v(" Upload ")]), a("v-divider"), a("v-stepper-step", {
        attrs: {
          complete: e.e1 > 2,
          step: "2",
        },
      }, [e._v(" Review ")]), a("v-divider"), a("v-stepper-step", { attrs: { step: "3" } }, [e._v(" Confirm ")])], 1), a("v-stepper-items", [a("v-stepper-content", { attrs: { step: "1" } }, [a("v-card", {
        staticClass: "mb-12  elevation-3",
        attrs: { height: "200px" },
      }, [a("v-container", [a("v-row", [a("h4", [e._v("Import the Cast Highlight Excel File")])]), a("v-row", { staticClass: "mt-8" }, [a("v-file-input", {
        attrs: {
          label: "File input",
          outlined: "",
          dense: "",
        }, model: {
          value: e.file, callback: function(t) {
            e.file = t;
          }, expression: "file",
        },
      })], 1)], 1)], 1), a("v-btn", {
        attrs: { color: "primary", disabled: !this.file },
        on: { click: e.sendFileToApi },
      }, [e._v(" Send the file ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1), a("v-stepper-content", { attrs: { step: "2" } }, [a("v-container", [e.blockerList && 0 !== e.blockerList.length ? a("v-row", { staticClass: "mx-1" }, [a("p", [e._v("Found " + e._s(e.blockerList.length) + " blockers in the Export")])]) : a("v-row", { staticClass: "mx-1" }, [a("p", [e._v(" No blocker was found. Make sure the file contains cloud results ")])]), a("v-row", [a("v-card", {
        staticClass: "my-4 mx-1 elevation-3",
        attrs: { width: "100%" },
      }, [a("v-card-title", { attrs: { "primary-title": "" } }, [e._v(" Action panel ")]), a("v-card-text", [a("v-container", [a("v-row"), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Modify file path:")])])]), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
        attrs: {
          label: "Regex to be removed",
          multiple: "",
          chips: "",
        }, model: {
          value: e.defaultReplacement, callback: function(t) {
            e.defaultReplacement = t;
          }, expression: "defaultReplacement",
        },
      })], 1), a("v-col", { attrs: { cols: "3" } }, [a("v-btn", {
        attrs: { color: "success" },
        on: { click: e.removeBeginning },
      }, [e._v("Remove beginnning")])], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Modify file path:")])])]), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
        attrs: {
          label: "Regular expression to modify file fields",
          multiple: "",
          chips: "",
        }, model: {
          value: e.defaultRegex, callback: function(t) {
            e.defaultRegex = t;
          }, expression: "defaultRegex",
        },
      })], 1), a("v-col", { attrs: { cols: "3" } }, [a("v-btn", {
        attrs: { color: "success" },
        on: { click: e.processTags },
      }, [e._v("Apply regex")])], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Filter")])])]), a("v-col", { attrs: { cols: "5" } }, [a("v-autocomplete", {
        attrs: {
          items: e.itemsTechnologies,
          outlined: "",
          chips: "",
          "small-chips": "",
          label: "Filter Technologies",
          multiple: "",
        }, on: { change: e.filterItems }, model: {
          value: e.valuesTechnologies, callback: function(t) {
            e.valuesTechnologies = t;
          }, expression: "valuesTechnologies",
        },
      })], 1), a("v-col", { attrs: { cols: "5" } }, [a("v-autocomplete", {
        attrs: {
          items: e.itemsRecommendations,
          outlined: "",
          chips: "",
          "small-chips": "",
          label: "Filter Recommendations",
          multiple: "",
        }, on: { change: e.filterItems }, model: {
          value: e.valuesRecommendations, callback: function(t) {
            e.valuesRecommendations = t;
          }, expression: "valuesRecommendations",
        },
      })], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "mb-12 mt-5 mx-1 elevation-3",
        attrs: { width: "100%" },
      }, [a("v-card-title", [a("v-text-field", {
        attrs: {
          "append-icon": "mdi-magnify",
          label: "Search Blockers",
          filled: "",
          rounded: "",
          "single-line": "",
          "hide-details": "",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      }), a("v-btn", {
        attrs: {
          text: "",
          color: "warning",
          disabled: !e.selected || e.selected && 0 === e.selected.length,
        }, on: { click: e.deleteSelectedItems },
      }, [a("v-icon", [e._v("mdi-delete")]), e._v(" Delete selected")], 1)], 1), a("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: e.headers,
          items: e.blockerDisplayedList,
          "items-per-page": 20,
          search: e.search,
          "show-select": "",
        },
        scopedSlots: e._u([{
          key: "item.file", fn: function(t) {
            return [a("v-edit-dialog", {
              attrs: { "return-value": t.item.file, large: "", persistent: "" },
              on: {
                "update:returnValue": function(a) {
                  return e.$set(t.item, "file", a);
                }, "update:return-value": function(a) {
                  return e.$set(t.item, "file", a);
                }, save: e.save, cancel: e.cancel, open: e.open, close: e.close,
              },
              scopedSlots: e._u([{
                key: "input", fn: function() {
                  return [a("div", { staticClass: "mt-4 text-h6" }, [e._v(" Update File ")]), a("v-text-field", {
                    attrs: {
                      label: "Edit",
                      "single-line": "",
                      counter: "",
                      autofocus: "",
                    }, model: {
                      value: t.item.file, callback: function(a) {
                        e.$set(t.item, "file", a);
                      }, expression: "props.item.file",
                    },
                  })];
                }, proxy: !0,
              }], null, !0),
            }, [a("div", [e._v(e._s(t.item.file))])])];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              attrs: { small: "" }, on: {
                click: function(t) {
                  return e.deleteItem(r);
                },
              },
            }, [e._v(" mdi-delete ")])];
          },
        }]),
        model: {
          value: e.selected, callback: function(t) {
            e.selected = t;
          }, expression: "selected",
        },
      })], 1)], 1), a("v-row")], 1), a("v-btn", {
        attrs: { color: "primary" },
        on: { click: e.applyTags },
      }, [e._v(" Apply Tags ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1), a("v-stepper-content", { attrs: { step: "3" } }, [a("v-card", { staticClass: "mb-12 elevation-3" }, [a("v-card-text"), a("v-card-text", [a("v-container", [e.loadingApply ? a("v-row", { staticClass: "d-flex flex-column" }, [a("p", { staticClass: "text-h3" }, [e._v("Applying tags on " + e._s(e.application) + "...")]), a("v-progress-linear", {
        staticClass: "mt-4",
        attrs: { value: e.percentageTagsApplied },
      }), a("p", { staticClass: "text-h5" }, [e._v(" " + e._s(e.sizeSent) + " tags applied on " + e._s(e.sizeToSend) + " ")]), a("p", { staticClass: "text-h5" }, [e._v(e._s(e.blockerNotApplied.length) + " Errors")])], 1) : e._e(), e.loadingApply || "" !== e.errorApplying ? e._e() : a("v-row", [a("v-container", [a("v-row", [a("p", { staticClass: "text-h3" }, [e._v(" " + e._s(e.sizeSent - e.blockerNotApplied.length) + " Tags were applied ")])]), a("v-row", [a("p", { staticClass: "text-h5" }, [e._v(" " + e._s(e.blockerNotApplied.length) + " produced an error. ")])])], 1)], 1), e.loadingApply || "" === e.errorApplying ? e._e() : a("v-row")], 1)], 1)], 1), a("v-btn", {
        attrs: { color: "primary" },
        on: {
          click: function(t) {
            e.e1 = 1;
          },
        },
      }, [e._v(" Continue ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1)], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 3e3, color: e.snackColor },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { text: "" }, on: {
                click: function(t) {
                  e.snack = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snack, callback: function(t) {
            e.snack = t;
          }, expression: "snack",
        },
      }, [e._v(" " + e._s(e.snackText) + " ")])], 1);
    }, oi = [], si = (a("fb6a"), a("4d63"), a("466d"), function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "uploadFile", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/highlight/recommendations/cloud/file/upload/blockers/".concat(r), t.prev = 1, i = new FormData, i.append("file", a), i.append("application", r), t.next = 7, I.a.post(n, i, { headers: { "Content-Type": "multipart/form-data" } });
                case 7:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 14;
                    break;
                  }
                  if (s = o.data, !Array.isArray(s.data)) {
                    t.next = 12;
                    break;
                  }
                  return t.abrupt("return", s.data);
                case 12:
                  t.next = 15;
                  break;
                case 14:
                  throw new Error("Failed to send the list of recommendation. Status (".concat(o.status, "). Message: ").concat(o.data));
                case 15:
                  t.next = 21;
                  break;
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to send the list of recommendation ."), t.t0), t.t0;
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "applyBlockers", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/highlight/recommendations/cloud/apply/blockers", t.prev = 1, n = { blockers: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to apply the list of recommendation. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to apply the list of recommendation ."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "testBlocker", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/highlight/recommendations/cloud/test/blockers", t.prev = 1, n = { blocker: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to test the recommendations. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to test the recommendations."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    si.API_BASE_URL = T.getUrl();
    var ci = n["a"].extend({
        name: "CloudBockersUpload", computed: {
          getApplicationName: function() {
            return this.$store.state.applicationName;
          },
        }, data: function() {
          return {
            application: "",
            e1: 1,
            file: null,
            search: "",
            valuesTechnologies: [],
            itemsTechnologies: [],
            valuesRecommendations: [],
            itemsRecommendations: [],
            selected: [],
            snack: !1,
            snackColor: "",
            snackText: "",
            pagination: {},
            defaultRegex: "(\\w+\\.\\w+)",
            defaultReplacement: "",
            loadingApply: !1,
            percentageTagsApplied: 0,
            headers: [{ text: "Application", align: "start", sortable: !1, value: "application" }, {
              text: "Requirement",
              value: "requirement",
            }, { text: "Block", value: "blocker" }, { text: "Technology", value: "technology" }, {
              text: "File",
              value: "file",
            }, { text: "Actions", value: "actions", sortable: !1 }],
            blockerList: [],
            blockerUndoTable: [],
            blockerDisplayedList: [],
            appliedBlockers: 0,
            errorApplying: "",
            blockerNotApplied: [],
            sizeToSend: 0,
            sizeSent: 0,
          };
        }, methods: {
          applyTags: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              var a, r, n, i, o;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    e.e1 = 3, e.loadingApply = !0, e.blockerNotApplied = [], e.errorApplying = "", t.prev = 4, e.sizeToSend = e.blockerDisplayedList.length, a = 10, r = 0;
                  case 8:
                    if (!(r < e.blockerDisplayedList.length)) {
                      t.next = 20;
                      break;
                    }
                    return n = r + a > e.blockerDisplayedList.length ? e.blockerDisplayedList.length - 1 : r + a, i = e.blockerDisplayedList.slice(r, n), t.next = 13, si.applyBlockers(i);
                  case 13:
                    o = t.sent, e.blockerNotApplied = e.blockerNotApplied.concat(o), e.sizeSent = n, e.percentageTagsApplied = 100 * r / e.sizeToSend;
                  case 17:
                    r += a, t.next = 8;
                    break;
                  case 20:
                    e.appliedBlockers = a - e.blockerNotApplied.length, t.next = 30;
                    break;
                  case 23:
                    t.prev = 23, t.t0 = t["catch"](4), console.error("Failed to apply the tags", t.t0), e.snack = !0, e.snackColor = "error", e.snackText = "Failed to apply the tags. ".concat(t.t0, "."), e.errorApplying = t.t0;
                  case 30:
                    return t.prev = 30, e.loadingApply = !1, t.finish(30);
                  case 33:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[4, 23, 30, 33]]);
            })))();
          }, filterItems: function() {
            var e = this;
            this.blockerDisplayedList = this.blockerList.filter((function(t) {
              return e.valuesTechnologies.indexOf(t.technology) >= 0 && e.valuesRecommendations.indexOf(t.requirement) >= 0;
            })), this.processTags();
          }, refresh: function() {
          }, deleteItem: function(e) {
            var t = this.blockerList.indexOf(e);
            this.blockerList.splice(t, 1), this.filterItems();
          }, deleteSelectedItems: function() {
            var e = this;
            this.selected.forEach((function(t) {
              var a = e.blockerList.indexOf(t);
              e.blockerList.splice(a, 1);
            })), this.selected = [], this.filterItems();
          }, sendFileToApi: function() {
            var e = this;
            return Object(r["a"])(regeneratorRuntime.mark((function t() {
              var a, r;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    if (t.prev = 0, null != e.file) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return");
                  case 3:
                    if (null != e.application) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return");
                  case 5:
                    return t.next = 7, si.uploadFile(e.file, e.application);
                  case 7:
                    e.blockerList = t.sent, e.blockerDisplayedList = Object(Rr["a"])(e.blockerList), a = e.blockerList.map((function(e) {
                      return e.technology;
                    })).filter((function(e, t, a) {
                      return a.indexOf(e) === t;
                    })), r = e.blockerList.map((function(e) {
                      return e.requirement;
                    })).filter((function(e, t, a) {
                      return a.indexOf(e) === t;
                    })), e.valuesTechnologies = Object(Rr["a"])(a), e.itemsTechnologies = Object(Rr["a"])(a), e.valuesRecommendations = Object(Rr["a"])(r), e.itemsRecommendations = Object(Rr["a"])(r), e.e1 = 2, t.next = 21;
                    break;
                  case 18:
                    t.prev = 18, t.t0 = t["catch"](0), console.error("Failed to process the file.", t.t0);
                  case 21:
                  case"end":
                    return t.stop();
                }
              }), t, null, [[0, 18]]);
            })))();
          }, reset: function() {
            this.e1 = 1;
          }, save: function() {
            this.snack = !0, this.snackColor = "success", this.snackText = "Data saved";
          }, cancel: function() {
            this.snack = !0, this.snackColor = "error", this.snackText = "Canceled";
          }, open: function() {
            this.snack = !0, this.snackColor = "info", this.snackText = "Editing data";
          }, close: function() {
            console.log("Closed.");
          }, resetTable: function() {
            this.blockerDisplayedList = Object(Rr["a"])(this.blockerList);
          }, undo: function() {
            this.blockerUndoTable = Object(Rr["a"])(this.blockerDisplayedList);
          }, processTags: function() {
            var e = this;
            this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList), this.blockerDisplayedList.forEach((function(t) {
              var a = t.file.match(e.defaultRegex);
              a && a.length > 0 && (t.file = a[1]);
            }));
          }, removeBeginning: function() {
            var e = new RegExp("", "gi");
            this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList), this.blockerDisplayedList.forEach((function(t) {
              var a = t.file.replace(e, "");
              a && a.length > 0 && (t.file = a[1]);
            }));
          },
        }, mounted: function() {
          this.application = this.$store.state.applicationName;
        }, watch: {
          getApplicationName: function(e) {
            this.application = e;
          },
        },
      }), li = ci, ui = a("7679"), di = a("7e85"), pi = a("e516"), hi = a("9c54"), vi = a("56a4"),
      mi = Object(u["a"])(li, ii, oi, !1, null, null, null), fi = mi.exports;
    M()(mi, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDivider: $["a"],
      VEditDialog: ui["a"],
      VFileInput: Fr["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRow: Q["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VStepper: di["a"],
      VStepperContent: pi["a"],
      VStepperHeader: hi["a"],
      VStepperItems: hi["b"],
      VStepperStep: vi["a"],
      VTextField: Y["a"],
    });
    var gi = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [a("h3", { staticClass: "text-h4" }, [e._v(" Inject "), a("strong", [e._v("Open Source Safety")]), e._v(" into " + e._s(e.application) + " application. ")]), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", [e._v(" Upload here the "), a("strong", [e._v("Open-source BOM (Bill of material)")]), e._v(" coming from CAST Highlight ")]), a("v-card-text", [a("v-stepper", {
        model: {
          value: e.e1,
          callback: function(t) {
            e.e1 = t;
          },
          expression: "e1",
        },
      }, [a("v-stepper-header", [a("v-stepper-step", {
        attrs: {
          complete: e.e1 > 1,
          step: "1",
        },
      }, [e._v(" Upload ")]), a("v-divider"), a("v-stepper-step", {
        attrs: {
          complete: e.e1 > 2,
          step: "2",
        },
      }, [e._v(" Review ")]), a("v-divider"), a("v-stepper-step", { attrs: { step: "3" } }, [e._v(" Confirm ")])], 1), a("v-stepper-items", [a("v-stepper-content", { attrs: { step: "1" } }, [a("v-card", {
        staticClass: "mb-12  elevation-3",
        attrs: { height: "200px" },
      }, [a("v-container", [a("v-row", [a("h4", [e._v("Import the Cast Highlight Excel File")])]), a("v-row", { staticClass: "mt-8" }, [a("v-file-input", {
        attrs: {
          label: "File input",
          outlined: "",
          dense: "",
        }, model: {
          value: e.file, callback: function(t) {
            e.file = t;
          }, expression: "file",
        },
      })], 1)], 1)], 1), a("v-btn", {
        attrs: { color: "primary", disabled: !this.file },
        on: { click: e.sendFileToApi },
      }, [e._v(" Send the file ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1), a("v-stepper-content", { attrs: { step: "2" } }, [a("v-container", [e.blockerList && 0 !== e.blockerList.length ? a("v-row", { staticClass: "mx-1" }, [a("p", [e._v("Found " + e._s(e.blockerList.length) + " blockers in the Export")])]) : a("v-row", { staticClass: "mx-1" }, [a("p", [e._v(" No blocker was found. Make sure the file contains cloud results ")])]), a("v-row", [a("v-card", {
        staticClass: "my-4 mx-1 elevation-3",
        attrs: { width: "100%" },
      }, [a("v-card-title", { attrs: { "primary-title": "" } }, [e._v(" Action panel ")]), a("v-card-text", [a("v-container", [a("v-row"), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Modify file path:")])])]), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
        attrs: {
          label: "Regex to be removed",
          multiple: "",
          chips: "",
        }, model: {
          value: e.defaultReplacement, callback: function(t) {
            e.defaultReplacement = t;
          }, expression: "defaultReplacement",
        },
      })], 1), a("v-col", { attrs: { cols: "3" } }, [a("v-btn", {
        attrs: { color: "success" },
        on: { click: e.removeBeginning },
      }, [e._v("Remove beginnning")])], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Modify file path:")])])]), a("v-col", { attrs: { cols: "6" } }, [a("v-text-field", {
        attrs: {
          label: "Regular expression to modify file fields",
          multiple: "",
          chips: "",
        }, model: {
          value: e.defaultRegex, callback: function(t) {
            e.defaultRegex = t;
          }, expression: "defaultRegex",
        },
      })], 1), a("v-col", { attrs: { cols: "3" } }, [a("v-btn", {
        attrs: { color: "success" },
        on: { click: e.processTags },
      }, [e._v("Apply regex")])], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "2" } }, [a("p", [a("span", { staticClass: "subtitle-1" }, [e._v("Filter")])])]), a("v-col", { attrs: { cols: "5" } }, [a("v-autocomplete", {
        attrs: {
          items: e.itemsTechnologies,
          outlined: "",
          chips: "",
          "small-chips": "",
          label: "Filter Technologies",
          multiple: "",
        }, on: { change: e.filterItems }, model: {
          value: e.valuesTechnologies, callback: function(t) {
            e.valuesTechnologies = t;
          }, expression: "valuesTechnologies",
        },
      })], 1)], 1), a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "2",
        },
      }, [a("v-subheader", [e._v("Filter by violations (only clause):")])], 1), a("v-col", {
        staticClass: "d-flex flex-row",
        attrs: { cols: "12", md: "10" },
      }, [a("v-checkbox", {
        staticClass: "mr-2",
        attrs: { label: "Critical criticality", color: "black", "hide-details": "" },
        on: { change: e.filterItems },
        model: {
          value: e.violationFilter.critical, callback: function(t) {
            e.$set(e.violationFilter, "critical", t);
          }, expression: "violationFilter.critical",
        },
      }), a("v-checkbox", {
        staticClass: "mr-2",
        attrs: { label: "Critical criticality", color: "red", "hide-details": "" },
        on: { change: e.filterItems },
        model: {
          value: e.violationFilter.high, callback: function(t) {
            e.$set(e.violationFilter, "high", t);
          }, expression: "violationFilter.high",
        },
      }), a("v-checkbox", {
        staticClass: "mr-2",
        attrs: { label: "Medium criticality", color: "orange", "hide-details": "" },
        on: { change: e.filterItems },
        model: {
          value: e.violationFilter.medium, callback: function(t) {
            e.$set(e.violationFilter, "medium", t);
          }, expression: "violationFilter.medium",
        },
      }), a("v-checkbox", {
        staticClass: "mr-2",
        attrs: { label: "Low criticality", color: "grey", "hide-details": "" },
        on: { change: e.filterItems },
        model: {
          value: e.violationFilter.low, callback: function(t) {
            e.$set(e.violationFilter, "low", t);
          }, expression: "violationFilter.low",
        },
      })], 1)], 1), a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "2",
        },
      }, [a("v-subheader", [e._v("Choose the type of tagging")])], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "10",
        },
      }, [a("v-radio-group", {
        model: {
          value: e.taggingType, callback: function(t) {
            e.taggingType = t;
          }, expression: "taggingType",
        },
      }, [a("v-radio", { attrs: { label: "Regular Tag", value: "tag" } }), a("v-radio", {
        attrs: {
          label: "Document",
          value: "document",
        },
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "mb-12 mt-5 mx-1 elevation-3",
        attrs: { width: "100%" },
      }, [a("v-card-title", [a("v-text-field", {
        attrs: {
          "append-icon": "mdi-magnify",
          label: "Search Blockers",
          filled: "",
          rounded: "",
          "single-line": "",
          "hide-details": "",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      }), a("v-btn", {
        attrs: {
          text: "",
          color: "warning",
          disabled: !e.selected || e.selected && 0 === e.selected.length,
        }, on: { click: e.deleteSelectedItems },
      }, [a("v-icon", [e._v("mdi-delete")]), e._v(" Delete selected")], 1)], 1), a("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: e.headers,
          items: e.blockerDisplayedList,
          "items-per-page": 20,
          search: e.search,
          "show-select": "",
        },
        scopedSlots: e._u([{
          key: "item.file", fn: function(t) {
            return [a("v-edit-dialog", {
              attrs: { "return-value": t.item.file, large: "", persistent: "" },
              on: {
                "update:returnValue": function(a) {
                  return e.$set(t.item, "file", a);
                }, "update:return-value": function(a) {
                  return e.$set(t.item, "file", a);
                }, save: e.save, cancel: e.cancel, open: e.open, close: e.close,
              },
              scopedSlots: e._u([{
                key: "input", fn: function() {
                  return [a("div", { staticClass: "mt-4 text-h6" }, [e._v(" Update File ")]), a("v-text-field", {
                    attrs: {
                      label: "Edit",
                      "single-line": "",
                      counter: "",
                      autofocus: "",
                    }, model: {
                      value: t.item.file, callback: function(a) {
                        e.$set(t.item, "file", a);
                      }, expression: "props.item.file",
                    },
                  })];
                }, proxy: !0,
              }], null, !0),
            }, [a("div", [e._v(e._s(t.item.file))])])];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              attrs: { small: "" }, on: {
                click: function(t) {
                  return e.deleteItem(r);
                },
              },
            }, [e._v(" mdi-delete ")])];
          },
        }]),
        model: {
          value: e.selected, callback: function(t) {
            e.selected = t;
          }, expression: "selected",
        },
      })], 1)], 1), a("v-row")], 1), a("v-btn", {
        attrs: { color: "primary" },
        on: { click: e.applyTags },
      }, [e._v(" Apply Tags ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1), a("v-stepper-content", { attrs: { step: "3" } }, [a("v-card", { staticClass: "mb-12 elevation-3" }, [a("v-card-text"), a("v-card-text", [a("v-container", [e.loadingApply ? a("v-row", { staticClass: "d-flex flex-column" }, [a("p", { staticClass: "text-h3" }, [e._v("Applying tags on " + e._s(e.application) + "...")]), a("v-progress-linear", {
        staticClass: "mt-4",
        attrs: { value: e.percentageTagsApplied },
      }), a("p", { staticClass: "text-h5" }, [e._v(" " + e._s(e.sizeSent) + " tags applied on " + e._s(e.sizeToSend) + " ")]), a("p", { staticClass: "text-h5" }, [e._v(e._s(e.blockerNotApplied.length) + " Errors")])], 1) : e._e(), e.loadingApply || "" !== e.errorApplying ? e._e() : a("v-row", [a("v-container", [a("v-row", [a("p", { staticClass: "text-h3" }, [e._v(" " + e._s(e.sizeSent - e.blockerNotApplied.length) + " Tags were applied ")])]), a("v-row", [a("p", { staticClass: "text-h5" }, [e._v(" " + e._s(e.blockerNotApplied.length) + " produced an error. ")])])], 1)], 1), e.loadingApply || "" === e.errorApplying ? e._e() : a("v-row")], 1)], 1)], 1), a("v-btn", {
        attrs: { color: "primary" },
        on: {
          click: function(t) {
            e.e1 = 1;
          },
        },
      }, [e._v(" Continue ")]), a("v-btn", {
        attrs: { text: "" },
        on: { click: e.reset },
      }, [e._v(" Cancel ")])], 1)], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 3e3, color: e.snackColor },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { text: "" }, on: {
                click: function(t) {
                  e.snack = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snack, callback: function(t) {
            e.snack = t;
          }, expression: "snack",
        },
      }, [e._v(" " + e._s(e.snackText) + " ")])], 1);
    }, bi = [], xi = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "uploadFile", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/highlight/recommendations/oss/file/upload/blockers/".concat(r), t.prev = 1, i = new FormData, i.append("file", a), i.append("application", r), t.next = 7, I.a.post(n, i, { headers: { "Content-Type": "multipart/form-data" } });
                case 7:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 14;
                    break;
                  }
                  if (s = o.data, !Array.isArray(s.data)) {
                    t.next = 12;
                    break;
                  }
                  return t.abrupt("return", s.data);
                case 12:
                  t.next = 15;
                  break;
                case 14:
                  throw new Error("Failed to send the list of recommendation. Status (".concat(o.status, "). Message: ").concat(o.data));
                case 15:
                  t.next = 22;
                  break;
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), me.commit("add", {
                    type: de.ERROR,
                    title: "Failed to send the list of recommendation.",
                    body: t.t0,
                  }), console.error("Failed to reach the API : ".concat(n, ". Failed to send the list of recommendation ."), t.t0), t.t0;
                case 22:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "applyBlockers", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/highlight/recommendations/oss/apply/blockers", t.prev = 1, i = {
                    blockers: a,
                    taggingType: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  if (s = o.data, !Array.isArray(s.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", s.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to apply the list of recommendation. Status (".concat(o.status, "). Message: ").concat(o.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to apply the list of recommendation ."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "testBlocker", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/highlight/recommendations/oss/test/blockers", t.prev = 1, n = { blocker: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to test the recommendations. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to test the recommendations."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    xi.API_BASE_URL = T.getUrl();
    var wi = n["a"].extend({
      name: "OSSUpload", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, data: function() {
        return {
          application: "",
          e1: 1,
          file: null,
          search: "",
          valuesTechnologies: [],
          itemsTechnologies: [],
          valuesRecommendations: [],
          itemsRecommendations: [],
          violationFilter: { critical: !1, high: !1, medium: !1, low: !1 },
          selected: [],
          snack: !1,
          snackColor: "",
          snackText: "",
          pagination: {},
          defaultRegex: "(\\w+\\.\\w+)",
          defaultReplacement: "",
          taggingType: "tag",
          loadingApply: !1,
          percentageTagsApplied: 0,
          headers: [{ text: "Application", align: "start", sortable: !1, value: "application" }, {
            text: "Component",
            value: "component",
          }, { text: "Origin", value: "origin" }, { text: "Description", value: "description" }, {
            text: "Version",
            value: "version",
          }, { text: "Technology", value: "technology" }, {
            text: "Critical vulnerabilities",
            value: "vulnerabilityCritical",
          }, { text: "High vulnerabilities", value: "vulnerabilityHigh" }, {
            text: "Medium vulnerabilities",
            value: "vulnerabilityMedium",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          blockerList: [],
          blockerUndoTable: [],
          blockerDisplayedList: [],
          appliedBlockers: 0,
          errorApplying: "",
          blockerNotApplied: [],
          sizeToSend: 0,
          sizeSent: 0,
        };
      }, methods: {
        applyTags: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.e1 = 3, e.loadingApply = !0, e.blockerNotApplied = [], e.errorApplying = "", t.prev = 4, e.sizeToSend = e.blockerDisplayedList.length, a = 10, r = 0;
                case 8:
                  if (!(r < e.blockerDisplayedList.length)) {
                    t.next = 20;
                    break;
                  }
                  return n = r + a > e.blockerDisplayedList.length ? e.blockerDisplayedList.length - 1 : r + a, i = e.blockerDisplayedList.slice(r, n), t.next = 13, xi.applyBlockers(i, e.taggingType);
                case 13:
                  o = t.sent, e.blockerNotApplied = e.blockerNotApplied.concat(o), e.sizeSent = n, e.percentageTagsApplied = 100 * r / e.sizeToSend;
                case 17:
                  r += a, t.next = 8;
                  break;
                case 20:
                  e.appliedBlockers = a - e.blockerNotApplied.length, t.next = 30;
                  break;
                case 23:
                  t.prev = 23, t.t0 = t["catch"](4), console.error("Failed to apply the tags", t.t0), e.snack = !0, e.snackColor = "error", e.snackText = "Failed to apply the tags. ".concat(t.t0, "."), e.errorApplying = t.t0;
                case 30:
                  return t.prev = 30, e.loadingApply = !1, t.finish(30);
                case 33:
                case"end":
                  return t.stop();
              }
            }), t, null, [[4, 23, 30, 33]]);
          })))();
        }, filterItems: function() {
          var e = this;
          this.blockerDisplayedList = this.blockerList.filter((function(t) {
            return "ini" == t.component && console.log("x test ", t), e.valuesTechnologies.indexOf(t.technology) >= 0 && (e.violationFilter.critical && t.vulnerabilityCritical.length > 0 || e.violationFilter.medium && t.vulnerabilityMedium.length > 0 || e.violationFilter.high && t.vulnerabilityHigh.length > 0 || e.violationFilter.low && t.vulnerabilityLow.length > 0 || !e.violationFilter.critical && !e.violationFilter.high && !e.violationFilter.medium && !e.violationFilter.low);
          })), this.processTags();
        }, refresh: function() {
        }, deleteItem: function(e) {
          var t = this.blockerList.indexOf(e);
          this.blockerList.splice(t, 1), this.filterItems();
        }, deleteSelectedItems: function() {
          var e = this;
          this.selected.forEach((function(t) {
            var a = e.blockerList.indexOf(t);
            e.blockerList.splice(a, 1);
          })), this.selected = [], this.filterItems();
        }, sendFileToApi: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, null != e.file) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return");
                case 3:
                  if (null != e.application) {
                    t.next = 5;
                    break;
                  }
                  return t.abrupt("return");
                case 5:
                  return t.next = 7, xi.uploadFile(e.file, e.application);
                case 7:
                  e.blockerList = t.sent, e.blockerDisplayedList = Object(Rr["a"])(e.blockerList), a = e.blockerList.map((function(e) {
                    return e.technology;
                  })).filter((function(e, t, a) {
                    return a.indexOf(e) === t;
                  })), r = e.blockerList.map((function(e) {
                    return e.component;
                  })).filter((function(e, t, a) {
                    return a.indexOf(e) === t;
                  })), e.valuesTechnologies = Object(Rr["a"])(a), e.itemsTechnologies = Object(Rr["a"])(a), e.valuesRecommendations = Object(Rr["a"])(r), e.itemsRecommendations = Object(Rr["a"])(r), e.e1 = 2, t.next = 21;
                  break;
                case 18:
                  t.prev = 18, t.t0 = t["catch"](0), console.error("Failed to process the file.", t.t0);
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 18]]);
          })))();
        }, reset: function() {
          this.e1 = 1;
        }, save: function() {
          this.snack = !0, this.snackColor = "success", this.snackText = "Data saved";
        }, cancel: function() {
          this.snack = !0, this.snackColor = "error", this.snackText = "Canceled";
        }, open: function() {
          this.snack = !0, this.snackColor = "info", this.snackText = "Editing data";
        }, close: function() {
          console.log("Closed.");
        }, resetTable: function() {
          this.blockerDisplayedList = Object(Rr["a"])(this.blockerList);
        }, undo: function() {
          this.blockerUndoTable = Object(Rr["a"])(this.blockerDisplayedList);
        }, processTags: function() {
          var e = this;
          this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList), this.blockerDisplayedList.forEach((function(t) {
            var a = t.component.match(e.defaultRegex);
            a && a.length > 0 && (t.component = a[1]);
          }));
        }, removeBeginning: function() {
          var e = new RegExp("", "gi");
          this.blockerUndoTable = Object.assign({}, this.blockerDisplayedList), this.blockerDisplayedList.forEach((function(t) {
            var a = t.component.replace(e, "");
            a && a.length > 0 && (t.component = a[1]);
          }));
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName;
      }, watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), ki = wi, yi = Object(u["a"])(ki, gi, bi, !1, null, null, null), _i = yi.exports;
    M()(yi, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCheckbox: Ma["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDivider: $["a"],
      VEditDialog: ui["a"],
      VFileInput: Fr["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRadio: Ur["a"],
      VRadioGroup: Gr["a"],
      VRow: Q["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VStepper: di["a"],
      VStepperContent: pi["a"],
      VStepperHeader: hi["a"],
      VStepperItems: hi["b"],
      VStepperStep: vi["a"],
      VSubheader: Pa["a"],
      VTextField: Y["a"],
    });
    var Ci = n["a"].extend({
      name: "Highlight",
      components: { CloudBockersUpload: fi, OSSUpload: _i },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName;
      },
      data: function() {
        return {
          application: "",
          step: 1,
          tab: 0,
          items: [{ view: "CloudBockersUpload", name: "Cloud Blockers", icon: "mdi-folder-cog" }, {
            view: "OSSUpload",
            name: "OSS Injection",
            icon: "mdi-open-source-initiative",
          }],
        };
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), Ai = Ci, Ri = Object(u["a"])(Ai, ri, ni, !1, null, null, null), Si = Ri.exports;
    M()(Ri, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var Ii = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticClass: "mb-10" }, [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto " }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, Ti = [], Ei = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "py-3 pb-5 text-h4" }, [e._v("Level Management")])]), a("v-card-subtitle", [a("p", { staticClass: "subtitle-1 ml-1" }, [e._v(" Manage the levels created by Imaging. Rename them, hide them, and create new children. The levels 1, 2 and 3 cannot be modified for the moment. ")])]), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticStyle: { width: "100%" } }, [a("v-card", {
        staticClass: "pb-8 px-auto",
        attrs: { "min-width": "100%", loading: e.loadingRoots },
      }, [a("v-card-title", { staticClass: "charcoal white--text headline" }, [a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-col", {
        staticClass: "mt-2",
        attrs: { md: "2" },
      }, [a("p", [e._v("Levels viewer")])]), a("v-col", { attrs: { md: "3" } }, [a("v-select", {
        staticClass: "mt-1",
        attrs: {
          dark: "",
          items: e.levelItems,
          "item-text": "text",
          "item-value": "value",
          label: "Outlined style",
          dense: "",
          outlined: "",
        },
        model: {
          value: e.selectedLevel, callback: function(t) {
            e.selectedLevel = t;
          }, expression: "selectedLevel",
        },
      })], 1), a("v-col", {
        staticClass: "d-flex flex-row align-content-end",
        attrs: { md: "6" },
      }, [a("v-text-field", {
        attrs: {
          label: "Search a level by name",
          dark: "",
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          clearable: "",
          "clear-icon": "mdi-close-circle-outline",
        }, model: {
          value: e.searchLevel, callback: function(t) {
            e.searchLevel = t;
          }, expression: "searchLevel",
        },
      }), a("v-btn", {
        staticClass: "mx-3", attrs: { icon: "", color: "green" }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1)], 1)], 1)], 1), a("v-row", {
        staticClass: "pa-4",
        attrs: { justify: "space-between" },
      }, [a("template", { slot: "progress" }, [a("v-progress-linear", {
        attrs: {
          color: "persianGrey",
          height: "5",
          indeterminate: "",
        },
      })], 1), a("v-col", { attrs: { cols: "5" } }, [a("v-treeview", {
        attrs: {
          active: e.active,
          items: e.levels,
          open: e.open,
          color: "warning",
          transition: "",
        }, on: {
          "update:active": function(t) {
            e.active = t;
          }, "update:open": function(t) {
            e.open = t;
          },
        }, scopedSlots: e._u([{
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", {
              staticStyle: { cursor: "pointer" }, on: {
                click: function(t) {
                  return e.focusLevel(r);
                },
              },
            }, [a("v-row", [a("p", { staticClass: "pt-4" }, [e._v(e._s(r.name))]), a("v-chip", {
              class: "mt-4 ml-3 " + e.getLevelColor(r),
              attrs: { small: "", "text-color": "white" },
            }, [a("v-avatar", {
              staticClass: "d-flex flex-row",
              class: e.getLevelColor(r) + " darken-4",
              attrs: { left: "" },
            }, [e._v(" " + e._s(r.level) + " ")]), a("p", { staticClass: "mt-4 mr-3" }, [e._v("Level")]), r.hidden ? a("v-icon", {
              attrs: {
                "x-small": "",
                color: "red px-2",
              },
            }, [e._v("mdi-eye-off")]) : e._e()], 1)], 1)], 1)];
          },
        }]), model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", { staticClass: "d-flex text-center" }, [a("v-scroll-y-transition", { attrs: { mode: "out-in" } }, [e.selected ? a("v-card", {
        key: e.selected._id,
        staticClass: "pt-6 mx-auto",
        attrs: { flat: "", "max-width": "600" },
      }, [a("v-row", { staticClass: "justify-center mb-4" }, [a("p", { staticClass: "text-h5 mr-2" }, [e._v(e._s(e.selected.name))]), a("v-chip", {
        class: e.getLevelColor(e.selected),
        attrs: { "text-color": "white" },
      }, [a("v-avatar", {
        class: e.getLevelColor(e.selected) + " darken-4",
        attrs: { left: "" },
      }, [e._v(" " + e._s(e.selected.level) + " ")]), e._v(" Level ")], 1)], 1), a("v-divider"), a("v-row", {
        staticClass: "mt-3",
        attrs: { tag: "v-card-text" },
      }, [a("b", [e._v("Name:")]), e._v(" " + e._s(e.selected.name) + " ")]), a("v-row", { attrs: { tag: "v-card-text" } }, [a("b", [e._v("FullName:")]), e._v(" " + e._s(e.selected.fullName) + " ")]), a("v-row", { attrs: { tag: "v-card-text" } }, [a("b", [e._v("Count:")]), e._v(" " + e._s(e.selected.count) + " ")]), e.selected.level < 3 ? a("v-row", [a("i", [e._v("Unfortunately. The modification of level above the level 3 is not possible for the moment.")])]) : e._e(), e.selected.level >= 3 ? a("v-row", { staticClass: "mt-6 justify-center" }, [a("div", { staticClass: "text-center" }, [a("v-btn", {
        attrs: {
          small: "",
          rounded: "",
          color: "success",
          dark: "",
          disabled: e.selected.level < 2,
        }, on: {
          click: function(t) {
            return e.createLevel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-plus ")]), e._v(" Add a child ")], 1), a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "", disabled: e.selected.level < 3 },
        on: {
          click: function(t) {
            return e.editLevel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-pencil ")]), e._v(" Modify level ")], 1), a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            return e.openMergeModal();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-merge ")]), e._v(" Merge level ")], 1), e.selected.hidden ? e._e() : a("v-btn", {
        staticClass: "mx-3",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.selected.level < 3,
          loading: e.hidingLevel,
        },
        on: {
          click: function(t) {
            return e.hideLevel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye-off ")]), e._v(" Hide level ")], 1), e.selected.hidden ? a("v-btn", {
        staticClass: "ma-2",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.selected.level < 3,
          loading: e.hidingLevel,
        },
        on: {
          click: function(t) {
            return e.unhideLevel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye ")]), e._v(" Display level ")], 1) : e._e(), a("v-btn", {
        attrs: {
          rounded: "",
          small: "",
          color: "warning",
          disabled: e.selected.count > 0,
        },
      }, [e._v(" Delete level ")])], 1)]) : e._e()], 1) : a("div", {
        staticClass: "title grey--text text--lighten-1 font-weight-light",
        staticStyle: { "align-self": "center" },
      }, [e._v(" Select a Level ")])], 1)], 1)], 2), a("v-dialog", {
        attrs: { persistent: "", "max-width": "600px" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "headline" }, [e._v(e._s(e.editionType) + " a level")])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Name*",
          required: "",
        }, model: {
          value: e.editItem.name, callback: function(t) {
            e.$set(e.editItem, "name", t);
          }, expression: "editItem.name",
        },
      })], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Current level ( Auto computed )",
          disabled: "",
        }, model: {
          value: e.editItem.level, callback: function(t) {
            e.$set(e.editItem, "level", t);
          }, expression: "editItem.level",
        },
      })], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-textarea", {
        attrs: {
          rows: "2",
          label: "FullName ( Auto generated )",
          disabled: "",
          value: (e.parentItem ? e.parentItem.fullName + "##" : "") + e.editItem.name,
        },
      })], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("p", [e._v("Pick a color :")]), a("v-color-picker", {
        staticClass: "ma-2",
        attrs: { "hide-canvas": "" },
        on: {
          "update:color": function(t) {
            e.editItem.color = e.colorPicker && e.colorPicker.rgba ? "rgb(" + e.colorPicker.rgba.r + "," + e.colorPicker.rgba.g + "," + e.colorPicker.rgba.b + ")" : "rgb(0,0,0)";
          },
        },
        model: {
          value: e.colorPicker, callback: function(t) {
            e.colorPicker = t;
          }, expression: "colorPicker",
        },
      }), a("p", [e._v("Color: " + e._s(e.editItem.color))])], 1)], 1), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-textarea", {
        attrs: {
          rows: "2",
          label: "Full Shade ( Auto computed )",
          disabled: "",
          value: (e.parentItem ? e.parentItem.shade + "##" : "") + e.editItem.color,
        },
      })], 1)], 1)], 1), a("small", [e._v("*indicates required field")])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
        }, on: {
          click: function(t) {
            return e.closeEditDialog();
          },
        },
      }, [e._v(" Close ")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "" }, on: {
          click: function(t) {
            return e.saveLevel();
          },
        },
      }, [e._v(" Save ")])], 1)], 1)], 1), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1)], 1), a("v-row", [a("DemeterTile")], 1)], 1)], 1), a("LevelMergeModal", {
        attrs: {
          application: e.application,
          level: e.selected,
          dialog: e.mergeDialog,
        }, on: {
          close: function(t) {
            e.mergeDialog = !1;
          },
        },
      })], 1);
    }, Li = [], Vi = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getRootLevels", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/levels/roots/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve root levels. Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve root levels."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "findLevelByDepth", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/byDepth/".concat(a, "/").concat(r), t.prev = 1, t.next = 4, I.a.get(n);
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve levels by depth. Status (".concat(i.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve dy depth levels."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "mergeLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/levels/merge/".concat(a), t.prev = 1, t.next = 4, I.a.post(i, {
                    sourceId: r,
                    destinationId: n,
                  });
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 10:
                  throw new Error("Failed to merge level. Status (".concat(o.status, "). Error: ").concat(o.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to merge levels."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "findLevelByName", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/find/".concat(a, "/name"), t.prev = 1, i = { name: r }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  if (s = o.data, !Array.isArray(s.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", s.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  console.warn("Failed to retrieve root levels. Status (".concat(o.status, ")"));
                case 13:
                  return t.abrupt("return", []);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve root levels."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 16]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "fetchChildren", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/attached/".concat(a, "/").concat(r._id), t.prev = 1, t.next = 4, I.a.get(n);
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve attached levels. Status (".concat(i.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve attached levels."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "fetchParent", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/parent/".concat(a, "/").concat(r._id), t.prev = 1, t.next = 4, I.a.get(n);
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to fetch the parent levels");
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve attached levels."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "createLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/levels/create/".concat(a), t.prev = 1, o = n, o.parentId = r, t.next = 6, I.a.post(i, o);
                case 6:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 12;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 12:
                  throw new Error("Failed to create new levels");
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to create new levels."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/update/".concat(a, "/").concat(r._id), t.prev = 1, i = r, t.next = 5, I.a.put(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 11:
                  throw new Error("Failed to create new levels");
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to create new levels."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getHiddenLevelByDepth", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/hidden/byDepth/".concat(a, "/").concat(r), t.prev = 1, t.next = 4, I.a.get(n);
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve root levels. Status (".concat(i.status, ")"));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to retrieve root levels."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unhideLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/unhide/".concat(a), t.prev = 1, i = { levelId: r._id }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 11:
                  throw new Error("The API returned status : ".concat(o.status, ". ").concat(o.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to unhide a level."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "hideLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/hide/".concat(a), t.prev = 1, i = { levelId: r._id }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 11:
                  throw new Error("The API returned status : ".concat(o.status, ". ").concat(o.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to hide a level."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Vi.API_BASE_URL = T.getUrl();
    var Fi = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "mt-10",
        attrs: { width: "100%" },
      }, [a("v-card-title", [a("h3", { staticClass: "text-h5" }, [e._v("Demeter power actions")]), a("v-spacer"), a("v-btn", {
        staticClass: "mx-3",
        attrs: { icon: "", color: "green" },
        on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", [e._v(" Explore and undo levels created with demeter. ")]), a("v-card-text", [a("v-container", [e.loadingLevels ? a("v-row", [a("p", { staticClass: "subtitle-1 mt-2 mr-4" }, [e._v("Loading demeter levels")]), a("v-progress-circular", {
        attrs: {
          indeterminate: "",
          color: "persianGrey",
        },
      })], 1) : a("v-row", [a("v-container", [0 === e.levelList.length ? a("v-row", [a("i", [e._v("No demeter levels were detected in the application")])]) : a("v-row", [a("i", [e._v("Undo the demeter levels by clicking on the \"close\" icon for each chips")])]), a("v-row", { staticClass: "my-2" }, [a("v-chip-group", {
        attrs: {
          "active-class": "primary--text",
          column: "",
        },
      }, e._l(e.levelList, (function(t, r) {
        return a("v-chip", { key: r }, [a("p", { staticClass: "mt-4 mr-3" }, [e._v(e._s(t.name))]), a("v-icon", {
          on: {
            click: function(a) {
              return e.openConfirmationModal(t.name);
            },
          },
        }, [e._v("mdi-close-circle")])], 1);
      })), 1)], 1), a("v-row", { staticClass: "mt-5" })], 1)], 1), a("v-row", { staticClass: "my-4" }, [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "persianGrey",
          dark: "",
        }, on: {
          click: function(t) {
            e.dialogAll = !0;
          },
        },
      }, [e._v(" Delete ALL Demeter Levels ")])], 1), e.errorMessage && !e.loadingLevels ? a("v-row", [e.errorMessage ? a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorMessage))]) : e._e()]) : e._e()], 1)], 1), a("v-dialog", {
        attrs: { width: "500" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "text-h5 white--text charcoal lighten-2" }, [e._v(" Confirmation ")]), a("v-card-text", { staticClass: "mt-4" }, [e._v(" You're about to undo level "), a("b", [e._v(e._s(e.toDeleteLevel))]), e._v(". This action is not reversible."), a("br"), e._v(" Do you want to continue ? ")]), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "green",
          loading: e.loadingDelete,
          text: "",
        }, on: { click: e.cancelDelete },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "red", text: "", disabled: e.loadingDelete },
        on: { click: e.confirmDelete },
      }, [e._v(" Undo level ")])], 1)], 1)], 1), a("v-dialog", {
        attrs: { width: "500" },
        model: {
          value: e.dialogAll, callback: function(t) {
            e.dialogAll = t;
          }, expression: "dialogAll",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "text-h5 white--text charcoal lighten-2" }, [e._v(" Confirmation ")]), a("v-card-text", { staticClass: "mt-4" }, [e._v(" You're about to undo level ALL the level in "), a("i", [e._v(e._s(e.application) + ".")]), a("br"), e._v("This action is not reversible."), a("br"), e._v(" Do you want to continue ? ")]), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "green",
          loading: e.loadingDeleteAll,
          text: "",
        }, on: {
          click: function(t) {
            e.dialogAll = !1;
          },
        },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "red", text: "", disabled: e.loadingDeleteAll },
        on: { click: e.confirmDeleteAll },
      }, [e._v(" Undo All ")])], 1)], 1)], 1)], 1);
    }, Oi = [], ji = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "executeGrouping", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/group"), t.prev = 1, t.next = 4, I.a.post(r);
                case 4:
                  if (n = t.sent, !E(n.status)) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to group nodes. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to group nodes."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getCandidates", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/candidates"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, !E(n.status)) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error("Failed to retrieve level. Status (".concat(n.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve levels ."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllLevels", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/all"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, !E(n.status)) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error("Failed to retrieve level. Status (".concat(n.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve levels ."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDemeterLevels", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != a) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/grouped"), t.prev = 3, t.next = 6, I.a.get(r);
                case 6:
                  if (n = t.sent, !E(n.status)) {
                    t.next = 13;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 11;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 11:
                  t.next = 14;
                  break;
                case 13:
                  throw new Error("Failed to retrieve grouped level. Status (".concat(n.status, ")"));
                case 14:
                  t.next = 20;
                  break;
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](3), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve grouped levels."), t.t0), t.t0;
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[3, 16]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "undoGroupedLevel5", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/undo"), t.prev = 1, t.next = 4, I.a.post(n, { level: r });
                case 4:
                  if (i = t.sent, !E(i.status)) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", Boolean(o.data));
                case 10:
                  throw new Error("Failed to undo a grouped level. Status (".concat(i.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to undo a grouped level."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "undoAllGroupedLevel5", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/undo/all"), t.prev = 1, t.next = 4, I.a.post(r);
                case 4:
                  if (n = t.sent, !E(n.status)) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to undo all grouped levels. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to undo akk grouped levels."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "renameLevel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/rename"), t.prev = 1, t.next = 4, I.a.post(i, {
                    level: r,
                    newLevel: n,
                  });
                case 4:
                  if (o = t.sent, !E(o.status)) {
                    t.next = 10;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Boolean(s.data));
                case 10:
                  throw new Error("Failed to rename a grouped level. Status (".concat(o.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to rename a grouped level."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    ji.API_BASE_URL = T.getUrl();
    var Mi = n["a"].extend({
      name: "DemeterTile", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, data: function() {
        return {
          levelList: [],
          application: "",
          errorMessage: "",
          loadingLevels: !1,
          dialog: !1,
          toDeleteLevel: "",
          loadingDelete: !1,
          loadingDeleteAll: !1,
          dialogAll: !1,
        };
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.getDemeterLevel();
      }, methods: {
        openConfirmationModal: function(e) {
          this.dialog = !0, this.toDeleteLevel = e;
        }, cancelDelete: function() {
          this.toDeleteLevel = "", this.dialog = !1;
        }, confirmDelete: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, "" !== e.toDeleteLevel) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return");
                case 3:
                  return e.loadingDelete = !0, t.next = 6, ji.undoGroupedLevel5(e.application, e.toDeleteLevel);
                case 6:
                  e.toDeleteLevel = "", e.errorMessage = "", t.next = 14;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t["catch"](0), console.error("Failed to delete the level with name ".concat(e.toDeleteLevel, " in application ").concat(e.application), t.t0), e.errorMessage = "Failed to delete the level with name ".concat(e.toDeleteLevel, " in application ").concat(e.application, ". Error: ").concat(t.t0);
                case 14:
                  return t.prev = 14, e.loadingDelete = !1, e.dialog = !1, e.refresh(), t.finish(14);
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 10, 14, 19]]);
          })))();
        }, confirmDeleteAll: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, "" !== e.application) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return");
                case 3:
                  return e.loadingDeleteAll = !0, t.next = 6, ji.undoAllGroupedLevel5(e.application);
                case 6:
                  e.errorMessage = "", t.next = 13;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to delete all the levels in application ".concat(e.application, ".")), e.errorMessage = "Failed to delete all the levels in application ".concat(e.application, ". Error: ").concat(t.t0, ".");
                case 13:
                  return t.prev = 13, e.loadingDeleteAll = !1, e.dialogAll = !1, e.refresh(), t.finish(13);
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 13, 18]]);
          })))();
        }, getDemeterLevel: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingLevels = !0, t.next = 4, ji.getDemeterLevels(e.application);
                case 4:
                  e.levelList = t.sent, e.errorMessage = "", t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), e.errorMessage = "Failed to retrieve demeter levels ".concat(t.t0, ".");
                case 11:
                  return t.prev = 11, e.loadingLevels = !1, t.finish(11);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8, 11, 14]]);
          })))();
        }, refresh: function() {
          this.getDemeterLevel();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        },
      },
    }), Di = Mi, Pi = Object(u["a"])(Di, Fi, Oi, !1, null, "28b8bf0a", null), Ni = Pi.exports;
    M()(Pi, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VProgressCircular: $t["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
    });
    var Bi = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Merging level '" + e._s(e.level && e.level.name ? e.level.name : "NO LEVEL SELECTED") + "' into another Level")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-4 mx-2" }, [a("p", [e._v(" In application : " + e._s(e.application ? e.application : "NO APPLICATION SELECTED") + " "), a("br"), e._v(" Select a destination level 5 to merge all objects in " + e._s(e.level && e.level.name ? e.level.name : "NO LEVEL SELECTED") + ". ")])]), a("v-row", [a("v-autocomplete", {
        staticClass: "mx-4",
        attrs: {
          loading: e.loadingDestinationLevels,
          items: e.item,
          "search-input": e.search,
          "item-text": "name",
          "cache-items": "",
          "return-object": "",
          flat: "",
          "hide-no-data": "",
          "hide-details": "",
          label: "Select a Level 5",
        },
        on: {
          "update:searchInput": function(t) {
            e.search = t;
          }, "update:search-input": function(t) {
            e.search = t;
          },
        },
        model: {
          value: e.select, callback: function(t) {
            e.select = t;
          }, expression: "select",
        },
      })], 1), null != e.select ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", [e._v(" You're about to merge all the object from "), a("b", [e._v(e._s(e.level && e.level.name ? e.level.name : "NO LEVEL SELECTED"))]), e._v(" into "), a("b", [e._v(e._s(e.select.name))])])]) : e._e(), "" !== e.errorDestinationLevels ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorDestinationLevels))])]) : e._e(), "" !== e.errorMerge ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorMerge))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: {
          color: "green",
          text: "",
          loading: e.loadingMerge,
          disabled: null == e.select,
        }, on: { click: e.mergeLevel },
      }, [e._v("Merge")])], 1)], 1)]], 2);
    }, Ui = [], Gi = n["a"].extend({
      name: "LevelMergeModal", props: { application: String, level: Object, dialog: Boolean }, mounted: function() {
        this.refresh();
      }, data: function() {
        return {
          sourceLevel: {},
          destinationLevels: [],
          search: null,
          select: null,
          item: [],
          loadingMerge: !1,
          errorMerge: "",
          errorDestinationLevels: "",
          loadingDestinationLevels: !1,
        };
      }, methods: {
        refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.errorMerge = "", e.errorDestinationLevels = "", t.next = 4, e.getDestinationLevel5();
                case 4:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, getDestinationLevel5: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.prev = 2, e.loadingDestinationLevels = !0, t.next = 6, Vi.findLevelByDepth(e.application, 5);
                case 6:
                  e.destinationLevels = t.sent, e.errorDestinationLevels = "", e.item = e.destinationLevels, t.next = 14;
                  break;
                case 11:
                  t.prev = 11, t.t0 = t["catch"](2), e.errorDestinationLevels = t.t0;
                case 14:
                  return t.prev = 14, e.loadingDestinationLevels = !1, t.finish(14);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 11, 14, 17]]);
          })))();
        }, querySelections: function(e) {
          this.items = this.destinationLevels.filter((function(t) {
            return (t.name || "").toLowerCase().indexOf((e || "").toLowerCase()) > -1;
          }));
        }, mergeLevel: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (null != e.select) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return");
                case 4:
                  if (null != e.level) {
                    t.next = 6;
                    break;
                  }
                  return t.abrupt("return");
                case 6:
                  return t.prev = 6, e.loadingMerge = !0, t.next = 10, Vi.mergeLevel(e.application, e.level._id, e.select._id);
                case 10:
                  e.errorMerge = "", e.$emit("close"), t.next = 18;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](6), console.error("Failed to merge the level", t.t0), e.errorMerge = t.t0;
                case 18:
                  return t.prev = 18, e.loadingMerge = !1, t.finish(18);
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[6, 14, 18, 21]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      }, watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, level: function(e) {
          this.refresh();
        },
      },
    }), $i = Gi, qi = Object(u["a"])($i, Bi, Ui, !1, null, "ca8ba7e0", null), Hi = qi.exports;
    M()(qi, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VToolbar: Le["a"],
    });
    var Wi = n["a"].extend({
      name: "LevelExplorer", components: { DemeterTile: Ni, LevelMergeModal: Hi }, data: function() {
        return {
          application: "",
          tree: [],
          active: [],
          open: [],
          levels: [],
          selected: {},
          loadingRoots: !1,
          mergeDialog: !1,
          searchLevel: "",
          levelItems: [{ text: "Level 1", value: 1 }, { text: "Level 2", value: 2 }, {
            text: "Level 3",
            value: 3,
          }, { text: "Level 4", value: 4 }, { text: "Level 5", value: 5 }],
          selectedLevel: 5,
          hiddenLevels: [],
          snackbarInfo: !1,
          textSnackBar: "",
          colorPicker: {},
          editionType: "",
          dialog: !1,
          parentItem: null,
          editItem: {},
          hidingLevel: !1,
        };
      }, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      }, methods: {
        openMergeModal: function() {
          "" != this.application && (this.mergeDialog = !0);
        }, onCloseMergeDialog: function(e) {
          e && (this.snackbarInfo = !0, this.textSnackBar = "Level merged successfully. Refresh Imaging in few seconds (Make sure the level agent is running)"), this.mergeDialog = !1;
        }, editLevel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, Vi.fetchParent(t.application, e);
                case 2:
                  t.parentItem = a.sent, t.editionType = "Edit ", t.editItem = Object.assign({}, e), t.dialog = !0;
                case 6:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, createLevel: function(e) {
          this.editionType = "Create ", this.parentItem = e, this.editItem = {}, this.editItem._id = -1, this.editItem.level = e.level + 1, this.dialog = !0;
        }, saveLevel: function() {
          var e = this;
          this.editItem.fullName = (this.parentItem ? this.parentItem.fullName + "##" : "") + this.editItem.name, this.editItem.shade = (this.parentItem ? this.parentItem.shade + "##" : "") + this.editItem.color, -1 != this.editItem._id ? Vi.updateLevel(this.application, this.editItem).then((function(t) {
            e.snackbarInfo = !0, e.textSnackBar = "Successfully updated level.";
          })).catch((function(t) {
            console.error("Failed to update the level : ", t), e.snackbarInfo = !0, e.textSnackBar = "Failed to update the level : " + t;
          })).finally((function() {
            e.editItem = {}, e.parentItem = {}, e.dialog = !1, e.refresh();
          })) : Vi.createLevel(this.application, this.parentItem._id, this.editItem).then((function(t) {
            e.snackbarInfo = !0, e.textSnackBar = "Creation of level is a success.";
          })).catch((function(t) {
            console.error("Failed to create the level : ", t), e.snackbarInfo = !0, e.textSnackBar = "Failed to create the level : " + t;
          })).finally((function() {
            e.editItem = {}, e.parentItem = {}, e.dialog = !1, e.refresh();
          }));
        }, hideLevel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return t.hidingLevel = !0, a.prev = 1, a.next = 4, Vi.hideLevel(t.application, e);
                case 4:
                  t.textSnackBar = "Level has been hidden successfully", t.refresh(), a.next = 11;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](1), t.textSnackBar = a.t0;
                case 11:
                  return a.prev = 11, t.snackbarInfo = !0, t.hidingLevel = !1, a.finish(11);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[1, 8, 11, 15]]);
          })))();
        }, unhideLevel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return t.hidingLevel = !0, a.prev = 1, a.next = 4, Vi.unhideLevel(t.application, e);
                case 4:
                  t.textSnackBar = "Level has been recovered successfully", t.refresh(), a.next = 11;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](1), t.textSnackBar = a.t0;
                case 11:
                  return a.prev = 11, t.snackbarInfo = !0, t.hidingLevel = !1, a.finish(11);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[1, 8, 11, 15]]);
          })))();
        }, closeEditDialog: function() {
          this.editItem = {}, this.dialog = !1;
        }, focusLevel: function(e) {
          this.selected = e;
        }, getLevelColor: function(e) {
          if (e.hidden) return "grey";
          var t = e.level;
          switch (t) {
            case 1:
              return "red";
            case 2:
              return "orange";
            case 3:
              return "yellow";
            case 4:
              return "green";
            case 5:
              return "blue";
            default:
              return "black";
          }
        }, getLevels: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.prev = 2, e.loadingRoots = !0, t.next = 6, Vi.findLevelByDepth(e.application, e.selectedLevel);
                case 6:
                  e.levels = t.sent, t.next = 14;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](2), console.error("Failed to retrieve levels of the application.", t.t0), e.snackbarInfo = !0, e.textSnackBar = t.t0;
                case 14:
                  return t.prev = 14, e.loadingRoots = !1, t.finish(14);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 9, 14, 17]]);
          })))();
        }, refresh: function() {
          this.selected = null, this.getLevels();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        }, selectedLevel: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  this.getLevels();
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), searchLevel: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  if (!(t && t.length > 0)) {
                    e.next = 6;
                    break;
                  }
                  return e.next = 3, Vi.findLevelByName(this.application, t);
                case 3:
                  this.levels = e.sent, e.next = 7;
                  break;
                case 6:
                  this.getLevels();
                case 7:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      },
    }), Qi = Wi, zi = a("8212"), Yi = a("03a4"), Ji = Object(u["a"])(Qi, Ei, Li, !1, null, null, null), Xi = Ji.exports;
    M()(Ji, {
      VAvatar: zi["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VCol: U["a"],
      VColorPicker: Yi["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRow: Q["a"],
      VScrollYTransition: Gt["g"],
      VSelect: qt["a"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTextarea: ne["a"],
      VTreeview: lr["a"],
    });
    var Zi = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "py-3 pb-5 text-h4" }, [e._v("Module Management")])]), a("v-card-subtitle", [a("p", { staticClass: "subtitle-1 ml-1" }, [e._v(" Manage the modules created in Imaging. Rename them, hide them, and create new children. ")])]), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticStyle: { width: "100%" } }, [a("v-card", {
        staticClass: "pb-8 px-auto",
        attrs: { "min-width": "100%", loading: e.loadingRoots },
      }, [a("v-card-title", { staticClass: "charcoal white--text headline" }, [a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-col", {
        staticClass: "mt-2",
        attrs: { md: "3" },
      }, [a("p", [e._v("Modules viewer")])]), a("v-spacer"), a("v-col", {
        staticClass: "d-flex flex-row align-content-end",
        attrs: { md: "6" },
      }, [a("v-text-field", {
        attrs: {
          label: "Search a module by name",
          dark: "",
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          clearable: "",
          "clear-icon": "mdi-close-circle-outline",
        }, model: {
          value: e.searchModule, callback: function(t) {
            e.searchModule = t;
          }, expression: "searchModule",
        },
      }), a("v-btn", {
        staticClass: "mx-3", attrs: { icon: "", color: "green" }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1)], 1)], 1)], 1), a("v-row", {
        staticClass: "pa-4",
        attrs: { justify: "space-between" },
      }, [a("template", { slot: "progress" }, [a("v-progress-linear", {
        attrs: {
          color: "persianGrey",
          height: "5",
          indeterminate: "",
        },
      })], 1), a("v-col", { attrs: { cols: "5" } }, [a("v-treeview", {
        attrs: {
          active: e.active,
          items: e.modules,
          open: e.open,
          color: "warning",
          transition: "",
        }, on: {
          "update:active": function(t) {
            e.active = t;
          }, "update:open": function(t) {
            e.open = t;
          },
        }, scopedSlots: e._u([{
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", {
              staticStyle: { cursor: "pointer" }, on: {
                click: function(t) {
                  return e.focusModule(r);
                },
              },
            }, [a("v-row", [a("p", { staticClass: "pt-4" }, [e._v(e._s(r.name))]), a("v-chip", {
              class: "mt-4 ml-3 " + (r.hidden ? "black" : "blue"),
              attrs: { small: "", "text-color": "white" },
            }, [a("p", { staticClass: "mt-4 mr-3" }, [e._v("Module")]), r.hidden ? a("v-icon", {
              attrs: {
                "x-small": "",
                color: "red px-2",
              },
            }, [e._v("mdi-eye-off")]) : e._e()], 1)], 1)], 1)];
          },
        }]), model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", { staticClass: "d-flex text-center" }, [a("v-scroll-y-transition", { attrs: { mode: "out-in" } }, [e.selected ? a("v-card", {
        key: e.selected._id,
        staticClass: "pt-6 mx-auto",
        attrs: { flat: "", "max-width": "600" },
      }, [a("v-row", { staticClass: "justify-center mb-4" }, [a("p", { staticClass: "text-h5 mr-2" }, [e._v(e._s(e.selected.name))]), a("v-chip", {
        class: e.selected.hidden ? "black" : "blue",
        attrs: { "text-color": "white" },
      }, [e._v(" Module ")])], 1), a("v-divider"), a("v-row", {
        staticClass: "mt-3",
        attrs: { tag: "v-card-text" },
      }, [a("b", { staticClass: "mr-2" }, [e._v("Name:")]), e._v(" " + e._s(e.selected.name) + " ")]), a("v-row", { attrs: { tag: "v-card-text" } }, [a("b", { staticClass: "mr-2" }, [e._v("Count:")]), e._v(" " + e._s(e.selected.count) + " ")]), a("v-row", { staticClass: "mt-6 justify-center" }, [a("div", { staticClass: "text-center" }, [a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            return e.editModule();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-pencil ")]), e._v(" Modify module ")], 1), a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            return e.openMergeModal();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-merge ")]), e._v(" Merge module ")], 1), e.selected.hidden ? e._e() : a("v-btn", {
        staticClass: "mx-3",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.hidingModule,
          loading: e.hidingModule,
        },
        on: {
          click: function(t) {
            return e.hideModule(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye-off ")]), e._v(" Hide Module ")], 1), e.selected.hidden ? a("v-btn", {
        staticClass: "mx-3",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.hidingModule,
          loading: e.hidingModule,
        },
        on: {
          click: function(t) {
            return e.unhideModule(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye ")]), e._v(" Show Module ")], 1) : e._e(), a("v-btn", {
        staticClass: "mx-3",
        attrs: { rounded: "", small: "", color: "warning" },
        on: {
          click: function(t) {
            e.deleteModal = !0;
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-delete ")]), e._v(" Delete Module ")], 1)], 1)])], 1) : a("div", {
        staticClass: "title grey--text text--lighten-1 font-weight-light",
        staticStyle: { "align-self": "center" },
      }, [e._v(" Select a Module ")])], 1)], 1)], 2), a("ModuleMergeModal", {
        attrs: {
          application: e.application,
          module: e.selected,
          dialog: e.mergeDialog,
        }, on: {
          close: function(t) {
            e.mergeDialog = !1;
          },
        },
      }), a("DeleteModuleModal", {
        attrs: { module: e.selected, dialog: e.deleteModal }, on: {
          close: function(t) {
            e.deleteModal = !1;
          },
        },
      }), a("ModifyModuleModal", {
        attrs: { application: e.application, module: e.selected, dialog: e.editModal },
        on: {
          close: function(t) {
            e.editModal = !1;
          },
        },
      }), a("v-snackbar", {
        attrs: { timeout: 5e3 }, scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]), model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1)], 1)], 1)], 1)], 1);
    }, Ki = [], eo = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getModules", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/modules/all/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve module. Status (".concat(n.status, "). Message: ").concat(n.data));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve modules."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getHiddenModules", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/modules/all/".concat(a, "/hidden"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve hidden modules. Status (".concat(n.status, "). Message: ").concat(n.data));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve modules."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "hideById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/modules/hide", t.prev = 1, n = { id: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to hide module ".concat(a, ". Status (").concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to hide the module."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unHideById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/modules/unhide", t.prev = 1, n = { id: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to unhide module ".concat(a, ". Status (").concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to unhide the module."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/modules/delete", t.prev = 1, n = { id: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  if (o = i.data, !Array.isArray(o.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to delete module ".concat(a, ". Status (").concat(i.status, "). Message: ").concat(i.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete the module."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/modules/update", t.prev = 1, i = r, i.id = a, t.next = 6, I.a.put(n, i);
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  return s = o.data, t.abrupt("return", s.data);
                case 12:
                  throw new Error("Failed to update module ".concat(a, ". Status (").concat(o.status, "). Message: ").concat(o.data));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to update the module."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "mergeModules", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/modules/merge", t.prev = 1, o = {
                    application: a,
                    idSource: r,
                    idDest: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to merge the two modules. Status (".concat(s.status, "). Message: ").concat(s.data));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to merge the module."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    eo.API_BASE_URL = T.getUrl();
    var to = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Merging Module '" + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + "' into another Module")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-4 mx-2" }, [a("p", [e._v(" In application : " + e._s(e.application ? e.application : "NO APPLICATION SELECTED") + " "), a("br"), e._v(" Select a destination module to merge all objects in " + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + ". ")])]), a("v-row", [a("v-autocomplete", {
        staticClass: "mx-4",
        attrs: {
          loading: e.loadingdestinationModules,
          items: e.item,
          "search-input": e.search,
          "item-text": "name",
          "cache-items": "",
          "return-object": "",
          flat: "",
          "hide-no-data": "",
          "hide-details": "",
          label: "Select a Module",
        },
        on: {
          "update:searchInput": function(t) {
            e.search = t;
          }, "update:search-input": function(t) {
            e.search = t;
          },
        },
        model: {
          value: e.select, callback: function(t) {
            e.select = t;
          }, expression: "select",
        },
      })], 1), null != e.select ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", [e._v(" You're about to merge all the object from "), a("b", [e._v(e._s(e.module && e.module.name ? e.module.name : "NO LEVEL SELECTED"))]), e._v(" into "), a("b", [e._v(e._s(e.select.name))])])]) : e._e(), null != e.select && null != e.module && e.module._id == e.select._id ? a("v-row", { staticClass: "mt-6 mx-2" }, [e._v(" It is possible, but are you sure you want to merge a module with itself ? ")]) : e._e(), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorMerge ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorMerge))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: {
          color: "green",
          text: "",
          loading: e.loadingMerge,
          disabled: e.loadingMerge,
        }, on: { click: e.mergeModule },
      }, [e._v("Merge")])], 1)], 1)]], 2);
    }, ao = [], ro = n["a"].extend({
      name: "ModuleMergeModal", props: { application: String, module: Object, dialog: Boolean }, mounted: function() {
        this.refresh();
      }, data: function() {
        return {
          sourceModule: {},
          destinationModules: [],
          search: null,
          select: null,
          item: [],
          loadingMerge: !1,
          errorMerge: "",
          errordestinationModules: "",
          loadingdestinationModules: !1,
        };
      }, methods: {
        refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.errorMerge = "", e.errordestinationModules = "", t.next = 4, e.getDestinationModules();
                case 4:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, getDestinationModules: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.prev = 2, e.loadingdestinationModules = !0, t.next = 6, eo.getModules(e.application);
                case 6:
                  e.destinationModules = t.sent, e.errordestinationModules = "", e.item = e.destinationModules, t.next = 14;
                  break;
                case 11:
                  t.prev = 11, t.t0 = t["catch"](2), e.errordestinationModules = t.t0;
                case 14:
                  return t.prev = 14, e.loadingdestinationModules = !1, t.finish(14);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 11, 14, 17]]);
          })))();
        }, querySelections: function(e) {
          this.items = this.destinationModules.filter((function(t) {
            return (t.name || "").toLowerCase().indexOf((e || "").toLowerCase()) > -1;
          }));
        }, mergeModule: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (null != e.select) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return");
                case 4:
                  if (null != e.module) {
                    t.next = 6;
                    break;
                  }
                  return t.abrupt("return");
                case 6:
                  return t.prev = 6, e.loadingMerge = !0, t.next = 10, eo.mergeModules(e.application, e.module._id, e.module._id);
                case 10:
                  e.errorMerge = "", e.$emit("close"), t.next = 18;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](6), console.error("Failed to merge the module", t.t0), e.errorMerge = t.t0;
                case 18:
                  return t.prev = 18, e.loadingMerge = !1, t.finish(18);
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[6, 14, 18, 21]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      }, watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, module: function(e) {
          this.refresh();
        },
      },
    }), no = ro, io = Object(u["a"])(no, to, ao, !1, null, "533ea5b0", null), oo = io.exports;
    M()(io, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VToolbar: Le["a"],
    });
    var so = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Deleting Module '" + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-4" }, [a("p", [e._v(" In application : " + e._s(e.application ? e.application : "NO APPLICATION SELECTED") + " "), a("br")])]), a("v-row", { staticClass: "pb-5" }, [a("h3", [e._v(" You're about to delete the module '" + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + "'. This action is not reversible. "), a("br"), e._v(" Are your sure that you want to delete the module ? ")])]), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "green",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "red", text: "", loading: e.loadingModify },
        on: { click: e.deleteModule },
      }, [e._v("Delete")])], 1)], 1)]], 2);
    }, co = [], lo = n["a"].extend({
      name: "DeleteModuleModal", props: { module: Object, dialog: Boolean }, mounted: function() {
        this.refresh();
      }, data: function() {
        return { loadingModify: !1, errorModify: "", errordestinationModules: "", loadingdestinationModules: !1 };
      }, methods: {
        refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errordestinationModules = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, querySelections: function(e) {
          this.items = this.destinationModules.filter((function(t) {
            return (t.name || "").toLowerCase().indexOf((e || "").toLowerCase()) > -1;
          }));
        }, deleteModule: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.module) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.prev = 2, e.loadingModify = !0, t.next = 6, eo.deleteById(e.module._id);
                case 6:
                  e.errorModify = "", e.$emit("close"), t.next = 14;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t["catch"](2), console.error("Failed to delete the module", t.t0), e.errorModify = "Failed to delete the module. ".concat(t.t0);
                case 14:
                  return t.prev = 14, e.loadingModify = !1, t.finish(14);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 10, 14, 17]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      },
    }), uo = lo, po = Object(u["a"])(uo, so, co, !1, null, "e4fc9494", null), ho = po.exports;
    M()(po, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VToolbar: Le["a"],
    });
    var vo = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Editing Module '" + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-4" }, [a("p", [e._v(" In application : " + e._s(e.application ? e.application : "NO APPLICATION SELECTED") + " "), a("br"), e._v(" Select a destination module to merge all objects in " + e._s(e.module && e.module.name ? e.module.name : "NO MODULE SELECTED") + ". ")])]), a("v-row", { staticClass: "pb-5" }, [a("h3", [e._v("Name of the module:")])]), a("v-row", [a("v-text-field", {
        attrs: {
          label: "Outlined",
          name: "",
          clearable: "",
        }, model: {
          value: e.editModule.name, callback: function(t) {
            e.$set(e.editModule, "name", t);
          }, expression: "editModule.name",
        },
      })], 1), a("v-row", [a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("h3", [e._v("Change the color :")]), a("v-color-picker", {
        staticClass: "ma-2",
        attrs: { "hide-canvas": "" },
        on: {
          "update:color": function(t) {
            e.editModule.color = e.colorPicker && e.colorPicker.rgba ? "rgb(" + e.colorPicker.rgba.r + "," + e.colorPicker.rgba.g + "," + e.colorPicker.rgba.b + ")" : "rgb(0,0,0)";
          },
        },
        model: {
          value: e.colorPicker, callback: function(t) {
            e.colorPicker = t;
          }, expression: "colorPicker",
        },
      }), a("p", [e._v("New Color: " + e._s(e.editModule.color))])], 1)], 1)], 1), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "green", text: "", loading: e.loadingModify },
        on: { click: e.modifyModule },
      }, [e._v("Modify")])], 1)], 1)]], 2);
    }, mo = [], fo = n["a"].extend({
      name: "ModifyModuleModal", props: { application: String, module: Object, dialog: Boolean }, mounted: function() {
        this.editModule = Object.assign({}, this.module), this.refresh();
      }, data: function() {
        return {
          editModule: {},
          destinationModules: [],
          search: null,
          select: null,
          item: [],
          colorPicker: {},
          loadingModify: !1,
          errorModify: "",
          errordestinationModules: "",
          loadingdestinationModules: !1,
        };
      }, methods: {
        refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errordestinationModules = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, querySelections: function(e) {
          this.items = this.destinationModules.filter((function(t) {
            return (t.name || "").toLowerCase().indexOf((e || "").toLowerCase()) > -1;
          }));
        }, modifyModule: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("" != e.application) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (null != e.module) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return");
                case 4:
                  if (null != e.editModule) {
                    t.next = 6;
                    break;
                  }
                  return t.abrupt("return");
                case 6:
                  return t.prev = 6, e.loadingModify = !0, t.next = 10, eo.updateById(e.module._id, e.editModule);
                case 10:
                  e.errorModify = "", e.$emit("close"), t.next = 18;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](6), console.error("Failed to modify the module", t.t0), e.errorModify = t.t0;
                case 18:
                  return t.prev = 18, e.loadingModify = !1, t.finish(18);
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[6, 14, 18, 21]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      }, watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, module: function(e) {
          this.editModule = Object.assign({}, this.module), this.refresh();
        },
      },
    }), go = fo, bo = Object(u["a"])(go, vo, mo, !1, null, "78c0dc98", null), xo = bo.exports;
    M()(bo, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCol: U["a"],
      VColorPicker: Yi["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VTextField: Y["a"],
      VToolbar: Le["a"],
    });
    var wo = n["a"].extend({
      name: "ModuleExplorer",
      components: { ModuleMergeModal: oo, ModifyModuleModal: xo, DeleteModuleModal: ho },
      data: function() {
        return {
          application: "",
          loadedModules: [],
          tree: [],
          modules: [],
          active: [],
          open: [],
          selected: {},
          loadingRoots: !1,
          mergeDialog: !1,
          editModal: !1,
          deleteModal: !1,
          searchModule: "",
          hiddenModule: [],
          snackbarInfo: !1,
          textSnackBar: "",
          colorPicker: {},
          editionType: "",
          dialog: !1,
          parentItem: null,
          editItem: {},
          hidingModule: !1,
        };
      },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      },
      methods: {
        getModules: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingRoots = !0, t.next = 4, eo.getModules(e.application);
                case 4:
                  return e.loadedModules = t.sent, t.next = 7, eo.getHiddenModules(e.application);
                case 7:
                  a = t.sent, e.loadedModules = e.loadedModules.concat(a), e.modules = e.loadedModules, t.next = 15;
                  break;
                case 12:
                  t.prev = 12, t.t0 = t["catch"](0), console.error("Failed to retrieve modules in the application.", t.t0);
                case 15:
                  return t.prev = 15, e.loadingRoots = !1, t.finish(15);
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 12, 15, 18]]);
          })))();
        }, openMergeModal: function() {
          "" != this.application && (this.mergeDialog = !0);
        }, onCloseMergeDialog: function(e) {
          e && (this.snackbarInfo = !0, this.textSnackBar = "Module merged successfully. Refresh Imaging in few seconds (Make sure the module agent is running)"), this.mergeDialog = !1;
        }, editLevel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  t.editionType = "Edit ", t.editItem = Object.assign({}, e), t.dialog = !0;
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, editModule: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.editModal = !0;
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, hideModule: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.hidingModule = !0, a.next = 4, eo.hideById(e._id);
                case 4:
                  t.displaySnackBar("Module is now hidden"), t.refresh(), a.next = 12;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](0), console.error("Failed to hide the module"), t.displaySnackBar("Failed to hide the module. ".concat(a.t0));
                case 12:
                  return a.prev = 12, t.hidingModule = !1, a.finish(12);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 8, 12, 15]]);
          })))();
        }, unhideModule: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.hidingModule = !0, a.next = 4, eo.unHideById(e._id);
                case 4:
                  t.displaySnackBar("Module is now displayed."), t.refresh(), a.next = 12;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](0), console.error("Failed to unhide the module"), t.displaySnackBar("Failed to display the module. ".concat(a.t0));
                case 12:
                  return a.prev = 12, t.hidingModule = !1, a.finish(12);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 8, 12, 15]]);
          })))();
        }, displaySnackBar: function(e) {
          this.snackbarInfo = !0, this.textSnackBar = e;
        }, focusModule: function(e) {
          this.selected = e;
        }, refresh: function() {
          this.selected = null, this.getModules();
        },
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        }, selectedLevel: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getModules();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), editModal: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getModules();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), mergeDialog: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getModules();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), deleteModal: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getModules();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), searchModule: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  t && t.length > 0 ? this.modules = this.loadedModules.filter((function(e) {
                    return e.name.toLowerCase().indexOf(t.toLowerCase()) >= 0;
                  })) : this.modules = this.loadedModules;
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      },
    }), ko = wo, yo = Object(u["a"])(ko, Zi, Ki, !1, null, null, null), _o = yo.exports;
    M()(yo, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRow: Q["a"],
      VScrollYTransition: Gt["g"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTreeview: lr["a"],
    });
    var Co = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "py-3 pb-5 text-h4" }, [e._v("Architecture Management")])]), a("v-card-subtitle", [a("p", { staticClass: "subtitle-1 ml-1" }, [e._v(" Manage the architectures created in Imaging. Rename, hide and delete them. ")])]), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticStyle: { width: "100%" } }, [a("v-card", {
        staticClass: "pb-8 px-auto",
        attrs: { "min-width": "100%", loading: e.loadingRoots },
      }, [a("v-card-title", { staticClass: "charcoal white--text headline" }, [a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-col", {
        staticClass: "mt-2",
        attrs: { md: "3" },
      }, [a("p", [e._v("Architecture viewer")])]), a("v-spacer"), a("v-col", {
        staticClass: "d-flex flex-row align-content-end",
        attrs: { md: "6" },
      }, [a("v-text-field", {
        attrs: {
          label: "Search an architecture by name",
          dark: "",
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          clearable: "",
          "clear-icon": "mdi-close-circle-outline",
        }, model: {
          value: e.searchArchitecture, callback: function(t) {
            e.searchArchitecture = t;
          }, expression: "searchArchitecture",
        },
      }), a("v-btn", {
        staticClass: "mx-3", attrs: { icon: "", color: "green" }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1)], 1)], 1)], 1), a("v-row", {
        staticClass: "pa-4",
        attrs: { justify: "space-between" },
      }, [a("template", { slot: "progress" }, [a("v-progress-linear", {
        attrs: {
          color: "persianGrey",
          height: "5",
          indeterminate: "",
        },
      })], 1), a("v-col", { attrs: { cols: "5" } }, [a("v-treeview", {
        attrs: {
          active: e.active,
          items: e.architectures,
          "item-children": "subsets",
          open: e.open,
          color: "warning",
          transition: "",
        }, on: {
          "update:active": function(t) {
            e.active = t;
          }, "update:open": function(t) {
            e.open = t;
          },
        }, scopedSlots: e._u([{
          key: "label", fn: function(t) {
            var r = t.item;
            return [a("v-container", {
              staticStyle: { cursor: "pointer" }, on: {
                click: function(t) {
                  return e.focusArchitecture(r);
                },
              },
            }, [a("v-row", [a("p", { staticClass: "pt-4" }, [e._v(e._s(r.name))]), a("v-chip", {
              class: "mt-4 ml-3 " + e.getColor(r),
              attrs: { small: "", "text-color": "white" },
            }, [a("p", { staticClass: "mt-4 mr-3" }, [e._v(" " + e._s("archimodel" == r.type ? "Architecture" : "Subset") + " ")]), r.hidden ? a("v-icon", {
              attrs: {
                "x-small": "",
                color: "red px-2",
              },
            }, [e._v("mdi-eye-off")]) : e._e()], 1)], 1)], 1)];
          },
        }]), model: {
          value: e.tree, callback: function(t) {
            e.tree = t;
          }, expression: "tree",
        },
      })], 1), a("v-divider", { attrs: { vertical: "" } }), a("v-col", { staticClass: "d-flex text-center" }, [a("v-scroll-y-transition", { attrs: { mode: "out-in" } }, [e.selected ? a("v-card", {
        key: e.selected._id,
        staticClass: "pt-6 mx-auto",
        attrs: { flat: "", "max-width": "600" },
      }, [a("v-row", { staticClass: "justify-center mb-4" }, [a("p", { staticClass: "text-h5 mr-2" }, [e._v(e._s(e.selected.name))]), a("v-chip", {
        class: e.getColor(e.selected),
        attrs: { "text-color": "white" },
      }, [e._v(" " + e._s(e.getSelectedName(e.selected)) + " ")])], 1), a("v-divider"), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mt-3 text-subtitle-1" }, [a("b", { staticClass: " mr-2" }, [e._v("Name:")]), e._v(" " + e._s(e.selected.name) + " ")]), a("v-row", { staticClass: "mt-2 text-subtitle-1" }, [a("b", { staticClass: "mr-2" }, [e._v("Count:")]), e._v(" " + e._s(e.selected.count) + " ")])], 1)], 1), a("v-row", { staticClass: "mt-6 justify-center" }, [a("div", { staticClass: "text-center" }, [a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            e.editModal = !0;
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-pencil ")]), e._v(" Modify " + e._s(e.getSelectedName(e.selected)) + " ")], 1), "archimodel" == e.selected.type ? a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            e.duplicateModal = !0;
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-content-copy ")]), e._v(" Duplicate " + e._s(e.getSelectedName(e.selected)) + " ")], 1) : e._e(), "archimodel" == e.selected.type ? a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", loading: e.loadingModuleDefinition, dark: "" },
        on: {
          click: function(t) {
            return e.downloadModuleDefinition(e.selected._id);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-content-copy ")]), e._v(" To modules " + e._s(e.getSelectedName(e.selected)) + " ")], 1) : e._e(), "archimodel" == e.selected.type ? a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "primary", dark: "" },
        on: {
          click: function(t) {
            e.unassignedModal = !0;
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-group ")]), e._v(" Create Unassigned Layer ")], 1) : e._e(), e.selected.hidden ? e._e() : a("v-btn", {
        staticClass: "ma-2",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.hidingElement,
          loading: e.hidingElement,
        },
        on: {
          click: function(t) {
            return e.hideElement(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye-off ")]), e._v(" Hide " + e._s(e.getSelectedName(e.selected)) + " ")], 1), e.selected.hidden ? a("v-btn", {
        staticClass: "ma-2",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.hidingElement,
          loading: e.hidingElement,
        },
        on: {
          click: function(t) {
            return e.unhideElement(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye ")]), e._v(" Show " + e._s(e.getSelectedName(e.selected)) + " ")], 1) : e._e(), e.selected.hidden && "Architecture" == e.getSelectedName(e.selected) ? a("v-btn", {
        staticClass: "ma-2",
        attrs: {
          rounded: "",
          small: "",
          color: "primary",
          dark: "",
          disabled: e.hidingElement,
          loading: e.hidingElement,
        },
        on: {
          click: function(t) {
            return e.displayCompleteArchiModel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-eye ")]), e._v(" Show " + e._s(e.getSelectedName(e.selected)) + " and all the children ")], 1) : e._e(), a("v-btn", {
        staticClass: "ma-2",
        attrs: { rounded: "", small: "", color: "warning" },
        on: {
          click: function(t) {
            e.deleteModal = !0;
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-delete ")]), e._v(" Delete " + e._s(e.getSelectedName(e.selected)) + " ")], 1)], 1)])], 1) : a("div", {
        staticClass: "title grey--text text--lighten-1 font-weight-light",
        staticStyle: { "align-self": "center" },
      }, [e._v(" Select an Architecture or a subset ")])], 1)], 1)], 2), a("v-snackbar", {
        attrs: { timeout: 5e3 },
        scopedSlots: e._u([{
          key: "action", fn: function(t) {
            var r = t.attrs;
            return [a("v-btn", e._b({
              attrs: { color: "blue", text: "" }, on: {
                click: function(t) {
                  e.snackbarInfo = !1;
                },
              },
            }, "v-btn", r, !1), [e._v(" Close ")])];
          },
        }]),
        model: {
          value: e.snackbarInfo, callback: function(t) {
            e.snackbarInfo = t;
          }, expression: "snackbarInfo",
        },
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "mt-10",
        attrs: { width: "100%" },
      }, [a("v-card-title", [a("h3", { staticClass: "py-3 pb-5 text-h5" }, [e._v("Power Actions")])]), a("v-card-subtitle", [a("p", { staticClass: "subtitle-1 ml-1" }, [e._v(" Launch global actions on the Architecture view ")])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "4" } }, [a("p", { staticClass: "subtitle-1" }, [e._v(" Duplicate CAST Level 5 Taxonomy to a new Architecture "), a("span", { staticClass: "subtitle-2" }, [e._v(" Create a new Architecture copying the Level 5. You need to provide a name to this Architecture. Make sure the Architecture agent is running. ")])])]), a("v-col", { attrs: { cols: "5" } }, [a("v-text-field", {
        staticClass: "pt-0",
        attrs: { label: "Architecture Name", disabled: e.taxonomyArchitectureLoading },
        model: {
          value: e.taxonomyArchitecture, callback: function(t) {
            e.taxonomyArchitecture = t;
          }, expression: "taxonomyArchitecture",
        },
      }), "" !== e.taxonomyArchitectureError ? a("v-row", { staticClass: "mx-1" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.taxonomyArchitectureError))])]) : e._e(), "" !== e.taxonomyArchitectureError ? a("v-row", { staticClass: "mx-1" }, [a("p", { staticClass: "green--text" }, [e._v(" " + e._s(e.taxonomyArchitectureSuccess) + " ")])]) : e._e()], 1), a("v-col", { attrs: { cols: "3" } }, [a("v-btn", {
        attrs: {
          round: "",
          color: "primary",
          dark: "",
          loading: e.taxonomyArchitectureLoading,
        }, on: { click: e.replicateTaxonomy },
      }, [e._v("Replicate Architecture")])], 1)], 1), a("v-row"), a("v-row")], 1)], 1)], 1)], 1)], 1)], 1), a("DeleteArchitectureModal", {
        attrs: {
          application: e.application,
          element: e.selected,
          dialog: e.deleteModal,
        }, on: {
          close: function(t) {
            e.deleteModal = !1;
          },
        },
      }), a("ModifyArchitectureModal", {
        attrs: {
          application: e.application,
          element: e.selected,
          dialog: e.editModal,
        }, on: {
          close: function(t) {
            e.editModal = !1;
          },
        },
      }), a("DuplicateArchitectureModal", {
        attrs: {
          application: e.application,
          element: e.selected,
          dialog: e.duplicateModal,
        }, on: {
          close: function(t) {
            e.duplicateModal = !1;
          },
        },
      }), a("CreateUnassignedModal", {
        attrs: {
          application: e.application,
          element: e.selected,
          dialog: e.unassignedModal,
        }, on: {
          close: function(t) {
            e.unassignedModal = !1;
          },
        },
      })], 1);
    }, Ao = [], Ro = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getArchitectures", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/architectures/all/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = n.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve architecture elements. Status (".concat(n.status, "). Message: ").concat(n.data));
                case 12:
                  return t.abrupt("return", []);
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve architecture elements."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "hideArchitectureElement", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/".concat(r, "/hide"), t.prev = 1, t.next = 4, I.a.post(n, { id: a });
                case 4:
                  i = t.sent, 200 != i.status && console.warn("Failed to hide architecture element. Status (".concat(i.status, "). Message: ").concat(i.data)), t.next = 12;
                  break;
                case 8:
                  throw t.prev = 8, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to hide architecture element."), t.t0), t.t0;
                case 12:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 8]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteArchitectureElement", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/architectures/".concat(n, "/delete"), t.prev = 1, t.next = 4, I.a.post(i, {
                    id: r,
                    application: a,
                  });
                case 4:
                  if (o = t.sent, 200 == o.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to delete architecture element. Status (".concat(o.status, "). Message: ").concat(o.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to delete architecture element."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "generateModulesFromArchitecture", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/archimodel/generate/modules", t.prev = 1, t.next = 4, I.a.post(n, { id: r });
                case 4:
                  if (i = t.sent, 200 == i.status) {
                    t.next = 9;
                    break;
                  }
                  throw new Error("Failed to generate module from architecture views. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 9:
                  o = i.data, s = o.data, c = document.createElement("a"), c.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(s.join("\n"))), c.setAttribute("download", "Module_definition_".concat(a, ".txt")), document.createEvent ? (l = document.createEvent("MouseEvents"), l.initEvent("click", !0, !0), c.dispatchEvent(l)) : c.click();
                case 15:
                  t.next = 21;
                  break;
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to generate module from architecture views."), t.t0), t.t0;
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "displayArchitectureElement", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/".concat(r, "/display"), t.prev = 1, t.next = 4, I.a.post(n, { id: a });
                case 4:
                  if (i = t.sent, 200 == i.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to display architecture element. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to display architecture element."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "updateArchitectureElement", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/architectures/".concat(r, "/update"), t.prev = 1, o = n, o.id = a, t.next = 6, I.a.post(i, o);
                case 6:
                  if (s = t.sent, 200 == s.status) {
                    t.next = 9;
                    break;
                  }
                  throw new Error("Failed to update architecture element. Status (".concat(s.status, "). Message: ").concat(s.data));
                case 9:
                  t.next = 15;
                  break;
                case 11:
                  throw t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, ". Failed to update architecture element."), t.t0), t.t0;
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "displayCompleteArchimodelElement", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/architectures/archimodel/display/complete", t.prev = 1, t.next = 4, I.a.post(r, { id: a });
                case 4:
                  if (n = t.sent, 200 == n.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to display architectures. Status (".concat(n.status, "). Message: ").concat(n.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to display architectures."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "duplicateArchiModel", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/archimodel/duplicate/byId", t.prev = 1, t.next = 4, I.a.post(n, {
                    id: a,
                    name: r,
                  });
                case 4:
                  if (i = t.sent, 200 == i.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to duplicate architecture element. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to duplicate architecture element."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "groupUnassigned", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/archimodel/group/unassigned", t.prev = 1, t.next = 4, I.a.post(n, {
                    id: a,
                    application: r,
                  });
                case 4:
                  if (i = t.sent, 200 == i.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to duplicate architecture element. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to duplicate architecture element."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "duplicateTaxonomy", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/architectures/archimodel/duplicate/taxonomy", t.prev = 1, t.next = 4, I.a.post(n, {
                    name: a,
                    application: r,
                  });
                case 4:
                  if (i = t.sent, 200 == i.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to duplicate CAST Taxonomy. Status (".concat(i.status, "). Message: ").concat(i.data));
                case 7:
                  t.next = 13;
                  break;
                case 9:
                  throw t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to duplicate CAST Taxonomy."), t.t0), t.t0;
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Ro.API_BASE_URL = T.getUrl();
    var So = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Deleting " + e._s(e.getSelectedName(e.element)) + " '" + e._s(e.element && e.element.name ? e.element.name : "NO ELEMENT SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mt-4 pb-5" }, [a("h3", [e._v(" You're about to delete the " + e._s(e.getSelectedName(e.element)) + " '" + e._s(e.element && e.element.name ? e.element.name : "NO ELEMENT SELECTED") + "'. This action is not reversible. "), a("br"), e._v(" Are your sure that you want to delete the " + e._s(e.getSelectedName(e.element)) + " ? ")])]), "" !== e.errorElementDelete ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorElementDelete))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "green",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "red", text: "", loading: e.loadingModify },
        on: { click: e.deleteElement },
      }, [e._v("Delete")])], 1)], 1)]], 2);
    }, Io = [], To = n["a"].extend({
      name: "DeleteArchitectureModal",
      props: { application: String, element: Object, dialog: Boolean },
      mounted: function() {
        this.refresh();
      },
      data: function() {
        return { loadingModify: !1, errorModify: "", errorElementDelete: "", loadingdestinationModules: !1 };
      },
      methods: {
        refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errorElementDelete = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, querySelections: function(e) {
          this.items = this.destinationModules.filter((function(t) {
            return (t.name || "").toLowerCase().indexOf((e || "").toLowerCase()) > -1;
          }));
        }, getSelectedName: function(e) {
          return "archimodel" == e.type ? "Architecture" : "Subset";
        }, deleteElement: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.element) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return t.prev = 2, e.loadingModify = !0, t.next = 6, Ro.deleteArchitectureElement(e.application, e.element._id, e.element.type);
                case 6:
                  e.errorModify = "", e.$emit("close"), t.next = 14;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t["catch"](2), console.error("Failed to delete the element", t.t0), e.errorModify = "Failed to delete the element. ".concat(t.t0);
                case 14:
                  return t.prev = 14, e.loadingModify = !1, t.finish(14);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 10, 14, 17]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      },
    }), Eo = To, Lo = Object(u["a"])(Eo, So, Io, !1, null, "3621a92c", null), Vo = Lo.exports;
    M()(Lo, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VToolbar: Le["a"],
    });
    var Fo = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Editing " + e._s(e.getName()) + " '" + e._s(e.element && e.element.name ? e.element.name : "NO MODULE SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mt-6 pb-5" }, [a("h3", [e._v("Name of the " + e._s(e.getName()) + ":")])]), a("v-row", [a("v-text-field", {
        attrs: {
          label: "Name",
          name: "",
          clearable: "",
        }, model: {
          value: e.editElement.name, callback: function(t) {
            e.$set(e.editElement, "name", t);
          }, expression: "editElement.name",
        },
      })], 1), a("v-row", [a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("h3", [e._v("Change the color :")]), a("v-color-picker", {
        staticClass: "ma-2",
        attrs: { "hide-canvas": "" },
        on: {
          "update:color": function(t) {
            e.editElement.color = e.colorPicker && e.colorPicker.rgba ? "rgb(" + e.colorPicker.rgba.r + "," + e.colorPicker.rgba.g + "," + e.colorPicker.rgba.b + ")" : "rgb(0,0,0)";
          },
        },
        model: {
          value: e.colorPicker, callback: function(t) {
            e.colorPicker = t;
          }, expression: "colorPicker",
        },
      }), a("p", [e._v("New Color: " + e._s(e.editElement.color))])], 1)], 1)], 1), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "green", text: "", loading: e.loadingModify },
        on: { click: e.modifyElement },
      }, [e._v("Modify")])], 1)], 1)]], 2);
    }, Oo = [], jo = n["a"].extend({
      name: "ModifyArchitectureModal",
      props: { application: String, element: Object, dialog: Boolean },
      mounted: function() {
        this.editElement = Object.assign({}, this.element), this.refresh();
      },
      data: function() {
        return {
          editElement: {},
          search: null,
          select: null,
          item: [],
          colorPicker: {},
          loadingModify: !1,
          errorModify: "",
          errordestinationModules: "",
          loadingdestinationModules: !1,
        };
      },
      methods: {
        getName: function() {
          return "archimodel" == this.element.type ? "Architecture" : "Subset";
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errordestinationModules = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, modifyElement: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.element) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if (null != e.editElement) {
                    t.next = 4;
                    break;
                  }
                  return t.abrupt("return");
                case 4:
                  return t.prev = 4, e.loadingModify = !0, t.next = 8, Ro.updateArchitectureElement(e.element._id, e.element.type, e.editElement);
                case 8:
                  e.errorModify = "", e.$emit("close"), t.next = 16;
                  break;
                case 12:
                  t.prev = 12, t.t0 = t["catch"](4), console.error("Failed to modify the Architecture element.", t.t0), e.errorModify = t.t0;
                case 16:
                  return t.prev = 16, e.loadingModify = !1, t.finish(16);
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[4, 12, 16, 19]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      },
      watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, element: function(e) {
          this.editElement = Object.assign({}, this.element), this.refresh();
        },
      },
    }), Mo = jo, Do = Object(u["a"])(Mo, Fo, Oo, !1, null, "55d22449", null), Po = Do.exports;
    M()(Do, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCol: U["a"],
      VColorPicker: Yi["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VTextField: Y["a"],
      VToolbar: Le["a"],
    });
    var No = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Duplicate " + e._s(e.getName()) + " '" + e._s(e.element && e.element.name ? e.element.name : "NO ARCHITECTURE SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mt-6 pb-5" }, [a("h3", [e._v("Name of the Duplicate:")])]), a("v-row", [a("v-text-field", {
        attrs: {
          label: "Name new Architecture",
          name: "",
          clearable: "",
        }, model: {
          value: e.nameDuplicate, callback: function(t) {
            e.nameDuplicate = t;
          }, expression: "nameDuplicate",
        },
      })], 1), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "green", text: "", loading: e.loadingModify },
        on: { click: e.duplicateElement },
      }, [e._v("Modify")])], 1)], 1)]], 2);
    }, Bo = [], Uo = n["a"].extend({
      name: "DuplicateArchitectureModal",
      props: { application: String, element: Object, dialog: Boolean },
      mounted: function() {
        this.refresh();
      },
      data: function() {
        return {
          nameDuplicate: "",
          search: null,
          select: null,
          item: [],
          colorPicker: {},
          loadingModify: !1,
          errorModify: "",
          errordestinationModules: "",
          loadingdestinationModules: !1,
        };
      },
      methods: {
        getName: function() {
          return "archimodel" == this.element.type ? "Architecture" : "Subset";
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errordestinationModules = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, duplicateElement: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.element) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if ("" != e.nameDuplicate) {
                    t.next = 5;
                    break;
                  }
                  return e.errorModify = "Name cannot be empty", t.abrupt("return");
                case 5:
                  return t.prev = 5, e.loadingModify = !0, t.next = 9, Ro.duplicateArchiModel(e.element._id, e.nameDuplicate);
                case 9:
                  e.errorModify = "", e.$emit("close"), t.next = 17;
                  break;
                case 13:
                  t.prev = 13, t.t0 = t["catch"](5), console.error("Failed to duplicate the Architecture element.", t.t0), e.errorModify = t.t0;
                case 17:
                  return t.prev = 17, e.loadingModify = !1, t.finish(17);
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[5, 13, 17, 20]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      },
      watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, element: function(e) {
          this.editElement = Object.assign({}, this.element), this.refresh();
        },
      },
    }), Go = Uo, $o = Object(u["a"])(Go, No, Bo, !1, null, "44a376e0", null), qo = $o.exports;
    M()($o, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VTextField: Y["a"],
      VToolbar: Le["a"],
    });
    var Ho = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-dialog", {
        attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
        model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [[a("v-card", [a("v-toolbar", {
        attrs: {
          color: "charcoal lighten-2",
          dark: "",
        },
      }, [e._v("Create an unassigned layer in the " + e._s(e.getName()) + " '" + e._s(e.element && e.element.name ? e.element.name : "NO ARCHITECTURE SELECTED") + "'")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mt-6 pb-5" }, [a("p", [e._v(" All nodes that are not assigned to a subset will be grouped under a layer named 'Unassigned'. You can rename and delete this subset later. Are you sure you want to create this 'Unassigned' layer? "), a("br"), a("br"), a("strong", [e._v("This operation may take some time if the application is huge.")]), a("br"), a("v-icon", [e._v("mdi-information-outline")]), a("i", { staticClass: "mt-1 mx-1" }, [e._v("Make sure the architecture agent is running.")])], 1)]), "" !== e.errordestinationModules ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errordestinationModules))])]) : e._e(), "" !== e.errorModify ? a("v-row", { staticClass: "mt-6 mx-2" }, [a("p", { staticClass: "red--text" }, [e._v(e._s(e.errorModify))])]) : e._e()], 1)], 1), a("v-divider"), a("v-card-actions", { staticClass: "justify-end" }, [a("v-btn", {
        attrs: {
          color: "red",
          text: "",
        }, on: { click: e.closeModal },
      }, [e._v("Cancel")]), a("v-btn", {
        attrs: { color: "green", text: "", loading: e.loadingModify },
        on: { click: e.groupUnassigned },
      }, [e._v("Create Layer")])], 1)], 1)]], 2);
    }, Wo = [], Qo = n["a"].extend({
      name: "CreateUnassignedModal",
      props: { application: String, element: Object, dialog: Boolean },
      mounted: function() {
        this.refresh();
      },
      data: function() {
        return {
          nameDuplicate: "",
          search: null,
          select: null,
          item: [],
          colorPicker: {},
          loadingModify: !1,
          errorModify: "",
          errordestinationModules: "",
          loadingdestinationModules: !1,
          dialogAddServer: !1,
        };
      },
      methods: {
        getName: function() {
          return "archimodel" == this.element.type ? "Architecture" : "Subset";
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.errorModify = "", e.errordestinationModules = "";
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, groupUnassigned: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.element) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  if ("" != e.application) {
                    t.next = 5;
                    break;
                  }
                  return e.errorModify = "Application name cannot be empty", t.abrupt("return");
                case 5:
                  return t.prev = 5, e.loadingModify = !0, t.next = 9, Ro.groupUnassigned(e.element._id, e.application);
                case 9:
                  e.errorModify = "", e.$emit("close"), t.next = 17;
                  break;
                case 13:
                  t.prev = 13, t.t0 = t["catch"](5), console.error("Failed to create an unassigned layer.", t.t0), e.errorModify = t.t0;
                case 17:
                  return t.prev = 17, e.loadingModify = !1, t.finish(17);
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[5, 13, 17, 20]]);
          })))();
        }, closeModal: function() {
          this.$emit("close");
        },
      },
      watch: {
        search: function(e) {
          e && e !== this.select && this.querySelections(e);
        }, application: function(e) {
          this.refresh();
        }, element: function(e) {
          this.editElement = Object.assign({}, this.element), this.refresh();
        },
      },
    }), zo = Qo, Yo = Object(u["a"])(zo, Ho, Wo, !1, null, "6548c8fb", null), Jo = Yo.exports;
    M()(Yo, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VToolbar: Le["a"],
    });
    var Xo = n["a"].extend({
      name: "ArchitectureExplorer",
      components: {
        DeleteArchitectureModal: Vo,
        ModifyArchitectureModal: Po,
        DuplicateArchitectureModal: qo,
        CreateUnassignedModal: Jo,
      },
      data: function() {
        return {
          application: "",
          loadedArchitectures: [],
          tree: [],
          architectures: [],
          active: [],
          open: [],
          selected: {},
          loadingRoots: !1,
          mergeDialog: !1,
          editModal: !1,
          deleteModal: !1,
          duplicateModal: !1,
          unassignedModal: !1,
          searchArchitecture: "",
          snackbarInfo: !1,
          textSnackBar: "",
          taxonomyArchitecture: "",
          taxonomyArchitectureLoading: !1,
          taxonomyArchitectureError: "",
          taxonomyArchitectureSuccess: "",
          colorPicker: {},
          editionType: "",
          dialog: !1,
          parentItem: null,
          editItem: {},
          hidingElement: !1,
          loadingModuleDefinition: !1,
        };
      },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      },
      methods: {
        getColor: function(e) {
          return e.hidden ? "black" : "archimodel" == e.type ? "blue" : "green";
        }, getSelectedName: function(e) {
          return "archimodel" == e.type ? "Architecture" : "Subset";
        }, replicateTaxonomy: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, e.taxonomyArchitectureError = "", "" != e.taxonomyArchitecture) {
                    t.next = 5;
                    break;
                  }
                  return e.taxonomyArchitectureError = "Name cannot be empty", t.abrupt("return");
                case 5:
                  return e.taxonomyArchitectureLoading = !0, t.next = 8, Ro.duplicateTaxonomy(e.taxonomyArchitecture, e.application);
                case 8:
                  return t.next = 10, e.refresh();
                case 10:
                  e.taxonomyArchitectureSuccess = "Duplication of the Levvel 5 is complete. A new Architecture with name '".concat(e.taxonomyArchitecture, " should appear in few seconds. \n        This operation being complex it can take some time on large applications.'"), e.taxonomyArchitecture = "", t.next = 17;
                  break;
                case 14:
                  t.prev = 14, t.t0 = t["catch"](0), e.taxonomyArchitectureError = t.t0;
                case 17:
                  return t.prev = 17, e.taxonomyArchitectureLoading = !1, t.finish(17);
                case 20:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 14, 17, 20]]);
          })))();
        }, getArchitectures: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingRoots = !0, t.next = 4, Ro.getArchitectures(e.application);
                case 4:
                  e.loadedArchitectures = t.sent, e.architectures = e.loadedArchitectures, t.next = 12;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to retrieve architecture in the application.", t.t0), e.displaySnackBar("Failed to retrieve architecture in the application. ".concat(t.t0));
                case 12:
                  return t.prev = 12, e.loadingRoots = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8, 12, 15]]);
          })))();
        }, editLevel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  t.editionType = "Edit ", t.editItem = Object.assign({}, e), t.dialog = !0;
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, editArchitecture: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.editModal = !0;
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, hideElement: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.hidingElement = !0, a.next = 4, Ro.hideArchitectureElement(e._id, e.type);
                case 4:
                  t.displaySnackBar("Element is now hidden"), t.refresh(), a.next = 12;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](0), console.error("Failed to hide the Architecture Element", a.t0), t.displaySnackBar("Failed to hide the Architecture Element. ".concat(a.t0));
                case 12:
                  return a.prev = 12, t.hidingElement = !1, a.finish(12);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 8, 12, 15]]);
          })))();
        }, displayCompleteArchiModel: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.hidingElement = !0, a.next = 4, Ro.displayCompleteArchimodelElement(e._id);
                case 4:
                  t.displaySnackBar("Architecture is now displayed"), t.refresh(), a.next = 12;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](0), console.error("Failed to display the complete Architecture", a.t0), t.displaySnackBar("Failed to display the complete Architecture. ".concat(a.t0));
                case 12:
                  return a.prev = 12, t.hidingElement = !1, a.finish(12);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 8, 12, 15]]);
          })))();
        }, downloadModuleDefinition: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.loadingModuleDefinition = !0, t.displaySnackBar("Generating the module definition.."), a.next = 5, Ro.generateModulesFromArchitecture(t.application, e);
                case 5:
                  a.next = 11;
                  break;
                case 7:
                  a.prev = 7, a.t0 = a["catch"](0), console.error("Failed to generate the module definition.", a.t0), t.displaySnackBar("Module generation failed. Error: ".concat(a.t0));
                case 11:
                  return a.prev = 11, t.loadingModuleDefinition = !1, a.finish(11);
                case 14:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 7, 11, 14]]);
          })))();
        }, unhideElement: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.prev = 0, t.hidingElement = !0, a.next = 4, Ro.displayArchitectureElement(e._id, e.type);
                case 4:
                  t.displaySnackBar("Element is now displayed."), t.refresh(), a.next = 12;
                  break;
                case 8:
                  a.prev = 8, a.t0 = a["catch"](0), console.error("Failed to unhide the Element", a.t0), t.displaySnackBar("Failed to display the Element. ".concat(a.t0));
                case 12:
                  return a.prev = 12, t.hidingElement = !1, a.finish(12);
                case 15:
                case"end":
                  return a.stop();
              }
            }), a, null, [[0, 8, 12, 15]]);
          })))();
        }, displaySnackBar: function(e) {
          this.snackbarInfo = !0, this.textSnackBar = e;
        }, focusArchitecture: function(e) {
          this.selected = e;
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.selected = null, t.next = 3, e.getArchitectures();
                case 3:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        },
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e, this.architectures = [], this.loadedArchitectures = [], this.refresh();
        }, selectedLevel: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getArchitectures();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), editModal: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getArchitectures();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), mergeDialog: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getArchitectures();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), deleteModal: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.getArchitectures();
                case 2:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(), searchArchitecture: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  t && t.length > 0 ? this.architectures = this.loadedArchitectures.filter((function(e) {
                    return e.name.toLowerCase().indexOf(t.toLowerCase()) >= 0;
                  })) : this.architectures = this.loadedArchitectures;
                case 1:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      },
    }), Zo = Xo, Ko = Object(u["a"])(Zo, Co, Ao, !1, null, null, null), es = Ko.exports;
    M()(Ko, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VProgressLinear: xe["a"],
      VRow: Q["a"],
      VScrollYTransition: Gt["g"],
      VSnackbar: $e["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
      VTreeview: lr["a"],
    });
    var ts = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [e._v(" Review the transactions in the " + e._s(e.application) + " application. "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v("Options")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
        staticClass: "d-flex flex-column",
        attrs: { md: "3" },
      }, [a("p", [e._v(" Specify the prefix used to pin the transactions."), a("br"), a("b", [e._v("This parameter is not stored and will be reset if you refresh this page.")])]), a("v-text-field", {
        attrs: { label: "Pin Prefix" },
        model: {
          value: e.pinPrefix, callback: function(t) {
            e.pinPrefix = t;
          }, expression: "pinPrefix",
        },
      })], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Power actions ")]), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of objects")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the transactions with a number of objects inferior to a limit ( Recommended 10) "), a("v-text-field", {
        attrs: {
          type: "number",
          label: "Number of objects",
        }, model: {
          value: e.maskActionLimit, callback: function(t) {
            e.maskActionLimit = t;
          }, expression: "maskActionLimit",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByCount },
      }, [a("p", [e._v("Mask the transactions .")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of Technology")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the transactions containing a number of technology inferior or equal to the input "), a("v-text-field", {
        attrs: {
          type: "number",
          label: "Number of objects",
        }, model: {
          value: e.maskActionTechnology, callback: function(t) {
            e.maskActionTechnology = t;
          }, expression: "maskActionTechnology",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByTechnology },
      }, [a("p", [e._v("Mask the transactions .")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of objects")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the transactions containing certain terms in their names "), a("v-combobox", {
        attrs: {
          label: "List of terms",
          multiple: "",
          chips: "",
        }, model: {
          value: e.maskActionTermsList, callback: function(t) {
            e.maskActionTermsList = t;
          }, expression: "maskActionTermsList",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByTerms },
      }, [a("p", [e._v("Mask the transactions")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Reset transactions")]), a("div", { staticClass: "text--primary" }, [e._v(" Unmask all the transactions ( Reset ) ")])]), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.unmaskAllActionLoading,
        }, on: { click: e.unmaskAll },
      }, [e._v(" Unmask all ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", { staticClass: "ma-3" }, [e._v(" Filter transactions ")]), a("v-card-subtitle"), a("v-card-text", [a("v-row", [a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Filter by number of Object/SubObject")])]), a("v-row", { staticClass: "ma-3" }, [e._v(" Min Object : "), a("strong", { staticClass: "mr-3" }, [e._v(e._s(e.transactionInsights.minObject))]), e._v(" Max Object : "), a("strong", [e._v(e._s(e.transactionInsights.maxObject))])]), a("v-row", { staticClass: "mx-3" }, [a("v-range-slider", {
        staticClass: "align-center",
        attrs: {
          max: e.transactionInsights.maxObject,
          min: e.transactionInsights.minObject,
          "hide-details": "",
          "persistent-hint": "",
          hint: "Number of object",
        },
        scopedSlots: e._u([{
          key: "prepend", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeObject[0], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeObject, 0, t);
                },
              },
            })];
          }, proxy: !0,
        }, {
          key: "append", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeObject[1], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeObject, 1, t);
                },
              },
            })];
          }, proxy: !0,
        }]),
        model: {
          value: e.rangeObject, callback: function(t) {
            e.rangeObject = t;
          }, expression: "rangeObject",
        },
      })], 1)], 1), a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Filter by number of Technologies")])]), a("v-row", { staticClass: "ma-3" }, [e._v(" Min Technologies : "), a("strong", { staticClass: "mr-3" }, [e._v(e._s(e.transactionInsights.minTechnology))]), e._v(" Max Technologies : "), a("strong", [e._v(e._s(e.transactionInsights.maxTechnology))])]), a("v-row", { staticClass: "mx-3" }, [a("v-range-slider", {
        staticClass: "align-center",
        attrs: {
          max: e.transactionInsights.maxTechnology,
          min: e.transactionInsights.minTechnology,
          "hide-details": "",
          "persistent-hint": "",
          hint: "Number of object",
        },
        scopedSlots: e._u([{
          key: "prepend", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeTechnology[0], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeTechnology, 0, t);
                },
              },
            })];
          }, proxy: !0,
        }, {
          key: "append", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeTechnology[1], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeTechnology, 1, t);
                },
              },
            })];
          }, proxy: !0,
        }]),
        model: {
          value: e.rangeTechnology, callback: function(t) {
            e.rangeTechnology = t;
          }, expression: "rangeTechnology",
        },
      })], 1)], 1), a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Search by technology (AND clause)")])]), a("v-row", { staticClass: "mx-3" }, [a("v-autocomplete", {
        attrs: {
          items: e.technologiesList,
          loading: e.loadingTechList,
          filled: "",
          rounded: "",
          chips: "",
          label: "Chips",
          multiple: "",
        }, model: {
          value: e.technologySearch, callback: function(t) {
            e.technologySearch = t;
          }, expression: "technologySearch",
        },
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-6 mb-1" }, [a("v-spacer"), a("v-btn", {
        staticClass: "mr-3",
        attrs: { depressed: "", color: "grey", dark: "" },
        on: { click: e.transactionApiCall },
      }, [e._v(" Apply filter ")]), a("v-btn", {
        attrs: { depressed: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.transactionApiCall();
          },
        },
      }, [e._v(" Remove all non-compliant ")])], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Transactions in the application "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: {
          click: function(t) {
            return e.transactionApiCall();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-data-table", {
        staticClass: "elevation-1 pt-3",
        attrs: {
          headers: e.headers,
          items: e.displayedTransaction,
          options: e.optionsTransaction,
          "server-items-length": e.numTransaction,
          loading: e.loadingTransaction,
          "fixed-header": "",
        },
        on: {
          "update:options": function(t) {
            e.optionsTransaction = t;
          },
        },
        scopedSlots: e._u([{
          key: "top", fn: function() {
            return [a("v-text-field", {
              staticClass: "mx-4",
              attrs: { filled: "", rounded: "", clearable: "", label: "Search Transaction by Name" },
              on: {
                change: function(t) {
                  return e.transactionApiCall();
                },
              },
              model: {
                value: e.searchName, callback: function(t) {
                  e.searchName = t;
                }, expression: "searchName",
              },
            })];
          }, proxy: !0,
        }, {
          key: "item.technologies", fn: function(t) {
            var r = t.item;
            return [a("v-chip-group", {
              attrs: {
                "active-class": "primary--text",
                column: "",
              },
            }, e._l(r.technologies, (function(t) {
              return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
            })), 1)];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.maskTransaction(r);
                },
              },
            }, [e._v(" mdi-eye-off ")]), e.containsPrefix(r) ? e._e() : a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.pinTransaction(r);
                },
              },
            }, [e._v(" mdi-pin ")]), e.containsPrefix(r) ? a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.unpinTransaction(r);
                },
              },
            }, [e._v(" mdi-pin-off ")]) : e._e(), a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.openRenameModal(r);
                },
              },
            }, [e._v(" mdi-grease-pencil ")])];
          },
        }]),
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-5" }), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Masked transactions in the application "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.maskedTransactionApiCall },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: e.headersMasked,
          items: e.displayedMaskedTransaction,
          options: e.optionsMaskedTransaction,
          "server-items-length": e.numMaskedTransaction,
          loading: e.loadingMaskedTransaction,
        },
        on: {
          "update:options": function(t) {
            e.optionsMaskedTransaction = t;
          },
        },
        scopedSlots: e._u([{
          key: "item.technologies", fn: function(t) {
            var r = t.item;
            return [a("v-chip-group", {
              attrs: {
                "active-class": "primary--text",
                column: "",
              },
            }, e._l(r.technologies, (function(t) {
              return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
            })), 1)];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.unMaskTransaction(r);
                },
              },
            }, [e._v(" mdi-eye ")])];
          },
        }]),
      })], 1)], 1)], 1)], 1)], 1), a("v-dialog", {
        attrs: { width: "500" },
        model: {
          value: e.modalRename, callback: function(t) {
            e.modalRename = t;
          }, expression: "modalRename",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "text-h5 white--text charcoal lighten-2" }, [e._v(" Renaming a transaction ")]), a("v-card-text", { staticClass: "mt-4" }, [a("v-container", [a("v-row", { staticClass: "my-4" }, [e._v(" Enter the new Name of the transaction n°" + e._s(e.toEditTransaction._id) + ": ")]), a("v-row", [a("v-text-field", {
        attrs: {
          label: "Outlined",
          "single-line": "",
          outlined: "",
        }, model: {
          value: e.toEditTransaction.name, callback: function(t) {
            e.$set(e.toEditTransaction, "name", t);
          }, expression: "toEditTransaction.name",
        },
      })], 1)], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "red",
          loading: e.loadingRename,
          text: "",
        }, on: { click: e.closeRenameModal },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "green", text: "", disabled: e.loadingRename },
        on: { click: e.confirmRename },
      }, [e._v(" Rename ")])], 1)], 1)], 1)], 1);
    }, as = [], rs = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "unMaskAllTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/unmask/all", t.prev = 1, t.next = 4, I.a.post(r, { application: a });
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to unmask all transactions. Status (".concat(n.status, "). Error: ").concat(n.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getNumberTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/number/unmasked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to number of transactions. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getInsightsUnmaskedTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/insights/unmasked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to get transactions insights. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to get transactions insights : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getNumberMaskedTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/number/masked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to number of masked transactions. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getBatchMaskedTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i, o) {
            var s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return s = e.API_BASE_URL + "/api/imaging/transactions/batch/masked/".concat(a), t.prev = 1, c = {
                    start: r,
                    end: n,
                    sort: i,
                    sortDesc: o,
                  }, t.next = 5, I.a.post(s, c);
                case 5:
                  if (l = t.sent, 200 != l.status) {
                    t.next = 12;
                    break;
                  }
                  if (u = l.data, !Array.isArray(u.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", u.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to a batch of masked transactions. Status (".concat(l.status, "). Error: ").concat(l.data.message, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(s, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a, r, n, i) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getBatchTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i, o, s) {
            var c, l, u, d;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return c = e.API_BASE_URL + "/api/imaging/transactions/batch/unmasked/".concat(a), t.prev = 1, l = {
                    start: r,
                    end: n,
                    sort: i,
                    sortDesc: o,
                    filter: s,
                  }, t.next = 5, I.a.post(c, l);
                case 5:
                  if (u = t.sent, 200 != u.status) {
                    t.next = 12;
                    break;
                  }
                  if (d = u.data, !Array.isArray(d.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", d.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to a batch of transactions. Status (".concat(u.status, "). Error: ").concat(u.data.message, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(c, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a, r, n, i, o) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/single", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    transactionID: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to get a batch of masked transactions. Status (".concat(i.status, "). Error: ").concat(i.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "pinTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/transactions/pin/single", t.prev = 1, o = {
                    application: a,
                    transactionID: r,
                    prefix: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to pin a transaction. Status (".concat(s.status, "). Error: ").concat(s.data.message));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unpinTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/transactions/unpin/single", t.prev = 1, o = {
                    application: a,
                    transactionID: r,
                    prefix: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to unpin a transaction. Status (".concat(s.status, "). Error: ").concat(s.data.message, "."));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "renameTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/transactions/rename/single", t.prev = 1, o = {
                    application: a,
                    transactionID: r,
                    transactionName: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to rename a transaction. Status (".concat(s.status, "). Error: ").concat(s.data.message));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskTransactionWithFilter", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/filter", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    filter: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to mask transactions with filter. Status (".concat(i.status, "). Error: ").concat(i.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unmaskTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/unmask/single", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    transactionID: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to a batch of masked transactions. Status (".concat(i.status, "). Error: ").concat(i.data.message, "."));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unmaskAllTransaction", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/unmask/all", t.prev = 1, t.next = 4, I.a.post(r, { application: a });
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to un-mask all transactions. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByCount", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/byCount", t.prev = 1, i = {
                    application: a,
                    limit: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask transactions by Number of objects. Status (".concat(o.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByTechnology", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/byTechnologies", t.prev = 1, i = {
                    application: a,
                    limit: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask transactions by Number of Technology. Status (".concat(o.status, "). Error: ").concat(o.data.message, "."));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByTerms", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/byTerms", t.prev = 1, i = {
                    application: a,
                    terms: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask transactions by terms. Status (".concat(o.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    rs.API_BASE_URL = T.getUrl();
    var ns = n["a"].extend({
      name: "TransactionExplorer", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      }, data: function() {
        return {
          application: "",
          pinPrefix: "_",
          headers: [{ text: "Name", align: "start", value: "name" }, {
            text: "Object Count",
            value: "count",
          }, { text: "Technologies", value: "technologies" }, {
            text: "Number of technologies",
            value: "numTechnologies",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          headersMasked: [{ text: "Name", align: "start", value: "name" }, {
            text: "Object Count",
            value: "count",
          }, { text: "Technologies", value: "technologies" }, {
            text: "Number of technologies",
            value: "numTechnologies",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          loadingTransaction: !0,
          loadingMaskedTransaction: !0,
          optionsTransaction: {},
          optionsMaskedTransaction: {},
          numTransaction: 0,
          numMaskedTransaction: 0,
          displayedTransaction: [],
          displayedMaskedTransaction: [],
          startIndexTransaction: 0,
          endIndexTransaction: 0,
          pageTransaction: 0,
          startIndexMaskedTransaction: 0,
          endIndexMaskedTransaction: 0,
          pageMaskedTransaction: 0,
          searchName: "",
          maskActionLimit: 0,
          maskActionTechnology: 0,
          maskActionLoading: !1,
          maskActionTermsList: [],
          unmaskAllActionLoading: !1,
          transactionInsights: {},
          rangeObject: [0, 20],
          rangeTechnology: [0, 20],
          technologySearch: [],
          technologiesList: [],
          loadingTechList: !1,
          modalRename: !1,
          loadingRename: !1,
          toEditTransaction: {},
        };
      }, methods: {
        openRenameModal: function(e) {
          this.toEditTransaction = Object.assign({}, e), this.modalRename = !0;
        }, confirmRename: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingRename = !0, t.next = 4, rs.renameTransaction(e.application, e.toEditTransaction._id, e.toEditTransaction.name);
                case 4:
                  e.closeRenameModal(), e.refresh(), t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to rename the transaction.", t.t0);
                case 11:
                  return t.prev = 11, e.loadingRename = !1, t.finish(11);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8, 11, 14]]);
          })))();
        }, closeRenameModal: function() {
          this.modalRename = !1, this.toEditTransaction = {};
        }, containsPrefix: function(e) {
          try {
            return 0 == e.name.indexOf(this.pinPrefix);
          } catch (t) {
            return !1;
          }
        }, unmaskAll: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.unmaskAllActionLoading = !0, t.next = 4, rs.unMaskAllTransaction(e.application);
                case 4:
                  return e.numTransaction = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to un-mask all the transactions", t.t0);
                case 12:
                  return t.prev = 12, e.unmaskAllActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, getTechnologies: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, "" != e.application) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return");
                case 3:
                  return e.loadingTechList = !0, t.next = 6, ue.getLevelsByDepth(e.application, 5);
                case 6:
                  e.technologiesList = t.sent, e.technologiesList = e.technologiesList.sort(), t.next = 13;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t["catch"](0), console.error("Failed to retrieve technologies in the application ".concat(e.application, "."), t.t0);
                case 13:
                  return t.prev = 13, e.loadingTechList = !1, t.finish(13);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 10, 13, 16]]);
          })))();
        }, maskByCount: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, rs.maskByCount(e.application, e.maskActionLimit);
                case 4:
                  return e.numTransaction = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by count.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, maskByTechnology: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, rs.maskByTechnology(e.application, e.maskActionTechnology);
                case 4:
                  return e.numTransaction = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by technology.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, maskByTerms: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, rs.maskByTerms(e.application, e.maskActionTermsList);
                case 4:
                  return e.numTransaction = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by terms.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, getInsights: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, rs.getInsightsUnmaskedTransaction(e.application);
                case 3:
                  e.transactionInsights = t.sent, e.rangeTechnology = [e.transactionInsights.minTechnology, e.transactionInsights.maxTechnology], e.rangeObject = [e.transactionInsights.minObject, e.transactionInsights.maxObject], t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to get the insights of transactions", t.t0);
                case 11:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8]]);
          })))();
        }, getNumberTransaction: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, rs.getNumberTransaction(e.application);
                case 3:
                  return e.numTransaction = t.sent, t.abrupt("return", e.numTransaction);
                case 7:
                  t.prev = 7, t.t0 = t["catch"](0), console.error("Failed to get the number of transaction", t.t0);
                case 10:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 7]]);
          })))();
        }, getNumberMaskedTransaction: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, rs.getNumberMaskedTransaction(e.application);
                case 3:
                  e.numMaskedTransaction = t.sent, t.next = 9;
                  break;
                case 6:
                  t.prev = 6, t.t0 = t["catch"](0), console.error("Failed to get the number of transaction", t.t0);
                case 9:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 6]]);
          })))();
        }, transactionApiCall: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o, s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingTransaction = !0, t.next = 3, e.getNumberTransaction();
                case 3:
                  return a = {
                    minTechnologies: e.rangeTechnology[0],
                    maxTechnologies: e.rangeTechnology[1],
                    minObject: e.rangeObject[0],
                    maxObject: e.rangeObject[1],
                    techContained: e.technologySearch,
                  }, "" != e.searchName && (a.name = e.searchName), r = e.optionsTransaction, n = r.sortBy, i = r.sortDesc, o = r.page, s = r.itemsPerPage, -1 === s && (s = e.numTransaction), c = null, l = null, Array.isArray(n) && 1 === n.length && (c = n[0]), Array.isArray(i) && 1 === i.length && (l = i[0]), t.next = 13, rs.getBatchTransaction(e.application, (o - 1) * s, o * s, c, l, a);
                case 13:
                  return u = t.sent, e.loadingTransaction = !1, e.displayedTransaction = u, t.abrupt("return", u);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskedTransactionApiCall: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingMaskedTransaction = !0, t.next = 3, e.getNumberMaskedTransaction();
                case 3:
                  return a = e.optionsMaskedTransaction, r = a.sortBy, n = a.sortDesc, i = a.page, o = e.optionsMaskedTransaction.itemsPerPage, -1 === o && (o = e.numMaskedTransaction), s = null, c = null, Array.isArray(r) && 1 === r.length && (s = r[0]), Array.isArray(n) && 1 === n.length && (c = n[0]), t.next = 12, rs.getBatchMaskedTransaction(e.application, (i - 1) * o, i * o, s, c);
                case 12:
                  return l = t.sent, e.loadingMaskedTransaction = !1, e.displayedMaskedTransaction = l, t.abrupt("return", l);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskTransaction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, rs.maskTransaction(t.application, e._id);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, pinTransaction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, rs.pinTransaction(t.application, e._id, t.pinPrefix);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, unpinTransaction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, rs.unpinTransaction(t.application, e._id, t.pinPrefix);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, renameTransaction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, rs.renameTransaction(t.application, e._id, e.name);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, unMaskTransaction: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, rs.unmaskTransaction(t.application, e._id);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getInsights();
                case 2:
                  return t.next = 4, e.getTechnologies();
                case 4:
                  return t.next = 6, e.transactionApiCall();
                case 6:
                  return t.next = 8, e.maskedTransactionApiCall();
                case 8:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        }, optionsTransaction: {
          handler: function() {
            this.transactionApiCall();
          }, deep: !0,
        }, optionsMaskedTransaction: {
          handler: function() {
            this.maskedTransactionApiCall();
          }, deep: !0,
        },
      },
    }), is = ns, os = a("5963"), ss = Object(u["a"])(is, ts, as, !1, null, null, null), cs = ss.exports;
    M()(ss, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VCombobox: Dn["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRangeSlider: os["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var ls = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [e._v(" Review the Data Call Graphs in the " + e._s(e.application) + " application. "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v("Options")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
        staticClass: "d-flex flex-column",
        attrs: { md: "3" },
      }, [a("p", [e._v(" Specify the prefix used to pin the Data Call Graph."), a("br"), a("b", [e._v("This parameter is not stored and will be reset if you refresh this page.")])]), a("v-text-field", {
        attrs: { label: "Pin Prefix" },
        model: {
          value: e.pinPrefix, callback: function(t) {
            e.pinPrefix = t;
          }, expression: "pinPrefix",
        },
      })], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Power actions ")]), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of objects")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the Data Call Graph with a number of objects inferior to a limit ( Recommended 10) "), a("v-text-field", {
        attrs: {
          type: "number",
          label: "Number of objects",
        }, model: {
          value: e.maskActionLimit, callback: function(t) {
            e.maskActionLimit = t;
          }, expression: "maskActionLimit",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByCount },
      }, [a("p", [e._v("Mask the Data Call Graph .")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of Technology")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the Data Call Graph containing a number of technology inferior or equal to the input "), a("v-text-field", {
        attrs: {
          type: "number",
          label: "Number of objects",
        }, model: {
          value: e.maskActionTechnology, callback: function(t) {
            e.maskActionTechnology = t;
          }, expression: "maskActionTechnology",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByTechnology },
      }, [a("p", [e._v("Mask the Data Call Graph .")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Clean by number of objects")]), a("div", { staticClass: "text--primary" }, [e._v(" Mask all the Data Call Graph containing certain terms in their names "), a("v-combobox", {
        attrs: {
          label: "List of terms",
          multiple: "",
          chips: "",
        }, model: {
          value: e.maskActionTermsList, callback: function(t) {
            e.maskActionTermsList = t;
          }, expression: "maskActionTermsList",
        },
      })], 1)]), a("v-spacer"), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.maskActionLoading,
        }, on: { click: e.maskByTerms },
      }, [a("p", [e._v("Mask the Data Call Graph")])])], 1)], 1), a("v-card", {
        staticClass: "ma-1",
        attrs: { "max-width": "344" },
      }, [a("v-card-text", [a("div", [e._v("Reset Data Call Graph")]), a("div", { staticClass: "text--primary" }, [e._v(" Unmask all the dataCallGraphs ( Reset ) ")])]), a("v-card-actions", [a("v-btn", {
        attrs: {
          text: "",
          color: "persianGrey",
          loading: e.unmaskAllActionLoading,
        }, on: { click: e.unmaskAll },
      }, [e._v(" Unmask all ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", { staticClass: "ma-3" }, [e._v(" Filter Data Call Graph ")]), a("v-card-subtitle"), a("v-card-text", [a("v-row", [a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Filter by number of Object/SubObject")])]), a("v-row", { staticClass: "ma-3" }, [e._v(" Min Object : "), a("strong", { staticClass: "mr-3" }, [e._v(e._s(e.dataCallGraphInsights.minObject))]), e._v(" Max Object : "), a("strong", [e._v(e._s(e.dataCallGraphInsights.maxObject))])]), a("v-row", { staticClass: "mx-3" }, [a("v-range-slider", {
        staticClass: "align-center",
        attrs: {
          max: e.dataCallGraphInsights.maxObject,
          min: e.dataCallGraphInsights.minObject,
          "hide-details": "",
          "persistent-hint": "",
          hint: "Number of object",
        },
        scopedSlots: e._u([{
          key: "prepend", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeObject[0], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeObject, 0, t);
                },
              },
            })];
          }, proxy: !0,
        }, {
          key: "append", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeObject[1], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeObject, 1, t);
                },
              },
            })];
          }, proxy: !0,
        }]),
        model: {
          value: e.rangeObject, callback: function(t) {
            e.rangeObject = t;
          }, expression: "rangeObject",
        },
      })], 1)], 1), a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Filter by number of Technologies")])]), a("v-row", { staticClass: "ma-3" }, [e._v(" Min Technologies : "), a("strong", { staticClass: "mr-3" }, [e._v(e._s(e.dataCallGraphInsights.minTechnology))]), e._v(" Max Technologies : "), a("strong", [e._v(e._s(e.dataCallGraphInsights.maxTechnology))])]), a("v-row", { staticClass: "mx-3" }, [a("v-range-slider", {
        staticClass: "align-center",
        attrs: {
          max: e.dataCallGraphInsights.maxTechnology,
          min: e.dataCallGraphInsights.minTechnology,
          "hide-details": "",
          "persistent-hint": "",
          hint: "Number of object",
        },
        scopedSlots: e._u([{
          key: "prepend", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeTechnology[0], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeTechnology, 0, t);
                },
              },
            })];
          }, proxy: !0,
        }, {
          key: "append", fn: function() {
            return [a("v-text-field", {
              staticClass: "mt-0 pt-0",
              staticStyle: { width: "60px" },
              attrs: { value: e.rangeTechnology[1], "hide-details": "", "single-line": "", type: "number" },
              on: {
                change: function(t) {
                  return e.$set(e.rangeTechnology, 1, t);
                },
              },
            })];
          }, proxy: !0,
        }]),
        model: {
          value: e.rangeTechnology, callback: function(t) {
            e.rangeTechnology = t;
          }, expression: "rangeTechnology",
        },
      })], 1)], 1), a("v-col", {
        staticClass: "px-4",
        attrs: { cols: "4" },
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Search by technology (AND clause)")])]), a("v-row", { staticClass: "mx-3" }, [a("v-autocomplete", {
        attrs: {
          items: e.technologiesList,
          loading: e.loadingTechList,
          filled: "",
          rounded: "",
          chips: "",
          label: "Chips",
          multiple: "",
        }, model: {
          value: e.technologySearch, callback: function(t) {
            e.technologySearch = t;
          }, expression: "technologySearch",
        },
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-6 mb-1" }, [a("v-spacer"), a("v-btn", {
        staticClass: "mr-3",
        attrs: { depressed: "", color: "grey", dark: "" },
        on: { click: e.dataCallGraphApiCall },
      }, [e._v(" Apply filter ")]), a("v-btn", {
        attrs: { depressed: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.dataCallGraphApiCall();
          },
        },
      }, [e._v(" Remove all non-compliant ")])], 1)], 1)], 1)], 1), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Data Call Graph in the application "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: {
          click: function(t) {
            return e.dataCallGraphApiCall();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-data-table", {
        staticClass: "elevation-1 pt-3",
        attrs: {
          headers: e.headers,
          items: e.displayedDataCallGraph,
          options: e.optionsDataCallGraph,
          "server-items-length": e.numDataCallGraph,
          loading: e.loadingDataCallGraph,
          "fixed-header": "",
        },
        on: {
          "update:options": function(t) {
            e.optionsDataCallGraph = t;
          },
        },
        scopedSlots: e._u([{
          key: "top", fn: function() {
            return [a("v-text-field", {
              staticClass: "mx-4",
              attrs: { filled: "", rounded: "", clearable: "", label: "Search DataCallGraph by Name" },
              on: { change: e.dataCallGraphApiCall },
              model: {
                value: e.searchName, callback: function(t) {
                  e.searchName = t;
                }, expression: "searchName",
              },
            })];
          }, proxy: !0,
        }, {
          key: "item.technologies", fn: function(t) {
            var r = t.item;
            return [a("v-chip-group", {
              attrs: {
                "active-class": "primary--text",
                column: "",
              },
            }, e._l(r.technologies, (function(t) {
              return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
            })), 1)];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.maskDataCallGraph(r);
                },
              },
            }, [e._v(" mdi-eye-off ")]), e.containsPrefix(r) ? e._e() : a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.pinDataCallGraph(r);
                },
              },
            }, [e._v(" mdi-pin ")]), e.containsPrefix(r) ? a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.unpinDataCallGraph(r);
                },
              },
            }, [e._v(" mdi-pin-off ")]) : e._e(), a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "" },
              on: {
                click: function(t) {
                  return e.openRenameModal(r);
                },
              },
            }, [e._v(" mdi-grease-pencil ")])];
          },
        }]),
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-5" }), a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Masked Data Call Graphs in the application "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.maskedDataCallGraphApiCall },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: e.headersMasked,
          items: e.displayedMaskedDataCallGraph,
          options: e.optionsMaskedDataCallGraph,
          "server-items-length": e.numMaskedDataCallGraph,
          loading: e.loadingMaskedDataCallGraph,
        },
        on: {
          "update:options": function(t) {
            e.optionsMaskedDataCallGraph = t;
          },
        },
        scopedSlots: e._u([{
          key: "item.technologies", fn: function(t) {
            var r = t.item;
            return [a("v-chip-group", {
              attrs: {
                "active-class": "primary--text",
                column: "",
              },
            }, e._l(r.technologies, (function(t) {
              return a("v-chip", { key: t, attrs: { small: "" } }, [e._v(" " + e._s(t) + " ")]);
            })), 1)];
          },
        }, {
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.unMaskDataCallGraph(r);
                },
              },
            }, [e._v(" mdi-eye ")])];
          },
        }]),
      })], 1)], 1)], 1)], 1)], 1), a("v-dialog", {
        attrs: { width: "500" },
        model: {
          value: e.modalRename, callback: function(t) {
            e.modalRename = t;
          }, expression: "modalRename",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "text-h5 white--text charcoal lighten-2" }, [e._v(" Renaming a Data Call Graph ")]), a("v-card-text", { staticClass: "mt-4" }, [a("v-container", [a("v-row", { staticClass: "my-4" }, [e._v(" Enter the new Name of the Data Call Graph n°" + e._s(e.toEditDataCallGraph._id) + ": ")]), a("v-row", [a("v-text-field", {
        attrs: {
          label: "Outlined",
          "single-line": "",
          outlined: "",
        }, model: {
          value: e.toEditDataCallGraph.name, callback: function(t) {
            e.$set(e.toEditDataCallGraph, "name", t);
          }, expression: "toEditDataCallGraph.name",
        },
      })], 1)], 1)], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "red",
          loading: e.loadingRename,
          text: "",
        }, on: { click: e.closeRenameModal },
      }, [e._v(" Cancel ")]), a("v-btn", {
        attrs: { color: "green", text: "", disabled: e.loadingRename },
        on: { click: e.confirmRename },
      }, [e._v(" Rename ")])], 1)], 1)], 1)], 1);
    }, us = [], ds = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "unMaskAllDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/dataCallGraph/unmask/all", t.prev = 1, t.next = 4, I.a.post(r, { application: a });
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to unmask all dataCallGraph. Status (".concat(n.status, "). Error: ").concat(n.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getNumberDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/dataCallGraph/number/unmasked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to number of dataCallGraph. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getInsightsUnmaskedDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/dataCallGraph/insights/unmasked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to get dataCallGraph insights. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to get dataCallGraph insights : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getNumberMaskedDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/dataCallGraph/number/masked/".concat(a), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to number of masked dataCallGraph. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getBatchMaskedDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i, o) {
            var s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return s = e.API_BASE_URL + "/api/imaging/dataCallGraph/batch/masked/".concat(a), t.prev = 1, c = {
                    start: r,
                    end: n,
                    sort: i,
                    sortDesc: o,
                  }, t.next = 5, I.a.post(s, c);
                case 5:
                  if (l = t.sent, 200 != l.status) {
                    t.next = 12;
                    break;
                  }
                  if (u = l.data, !Array.isArray(u.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", u.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to a batch of masked dataCallGraph. Status (".concat(l.status, "). Error: ").concat(l.data.message, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(s, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a, r, n, i) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getBatchDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n, i, o, s) {
            var c, l, u, d;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return c = e.API_BASE_URL + "/api/imaging/dataCallGraph/batch/unmasked/".concat(a), t.prev = 1, l = {
                    start: r,
                    end: n,
                    sort: i,
                    sortDesc: o,
                    filter: s,
                  }, t.next = 5, I.a.post(c, l);
                case 5:
                  if (u = t.sent, 200 != u.status) {
                    t.next = 12;
                    break;
                  }
                  if (d = u.data, !Array.isArray(d.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", d.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to a batch of dataCallGraph. Status (".concat(u.status, "). Error: ").concat(u.data.message, "."));
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(c, "."), t.t0), t.t0;
                case 19:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 15]]);
          })));

          function a(e, a, r, n, i, o) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/mask/single", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    dataCallGraphID: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to get a batch of masked dataCallGraph. Status (".concat(i.status, "). Error: ").concat(i.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "pinDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/dataCallGraph/pin/single", t.prev = 1, o = {
                    application: a,
                    dataCallGraphID: r,
                    prefix: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to pin a dataCallGraph. Status (".concat(s.status, "). Error: ").concat(s.data.message));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unpinDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/dataCallGraph/unpin/single", t.prev = 1, o = {
                    application: a,
                    dataCallGraphID: r,
                    prefix: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to unpin a dataCallGraph. Status (".concat(s.status, "). Error: ").concat(s.data.message, "."));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "renameDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var i, o, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return i = e.API_BASE_URL + "/api/imaging/dataCallGraph/rename/single", t.prev = 1, o = {
                    application: a,
                    dataCallGraphID: r,
                    dataCallGraphName: n,
                  }, t.next = 5, I.a.post(i, o);
                case 5:
                  if (s = t.sent, 200 != s.status) {
                    t.next = 11;
                    break;
                  }
                  return c = s.data, t.abrupt("return", c.data);
                case 11:
                  throw new Error("Failed to rename a dataCallGraph. Status (".concat(s.status, "). Error: ").concat(s.data.message));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(i, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a, r) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskDataCallGraphWithFilter", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/mask/filter", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    filter: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to mask dataCallGraph with filter. Status (".concat(i.status, "). Error: ").concat(i.data.message));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unmaskDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/unmask/single", t.prev = 1, t.next = 4, I.a.post(n, {
                    application: a,
                    dataCallGraphID: r,
                  });
                case 4:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return o = i.data, t.abrupt("return", o.data);
                case 10:
                  throw new Error("Failed to a batch of masked dataCallGraph. Status (".concat(i.status, "). Error: ").concat(i.data.message, "."));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "unmaskAllDataCallGraph", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/dataCallGraph/unmask/all", t.prev = 1, t.next = 4, I.a.post(r, { application: a });
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return i = n.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to un-mask all dataCallGraph. Status (".concat(n.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByCount", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/mask/byCount", t.prev = 1, i = {
                    application: a,
                    limit: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask dataCallGraph by Number of objects. Status (".concat(o.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByTechnology", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/mask/byTechnologies", t.prev = 1, i = {
                    application: a,
                    limit: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask dataCallGraph by Number of Technology. Status (".concat(o.status, "). Error: ").concat(o.data.message, "."));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskByTerms", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/dataCallGraph/mask/byTerms", t.prev = 1, i = {
                    application: a,
                    terms: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return s = o.data, t.abrupt("return", Number(s.data));
                case 11:
                  throw new Error("Failed to mask dataCallGraph by terms. Status (".concat(o.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, "."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    ds.API_BASE_URL = T.getUrl();
    var ps = n["a"].extend({
      name: "DataCallGraphExplorer", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      }, data: function() {
        return {
          application: "",
          pinPrefix: "#",
          headers: [{ text: "Name", align: "start", value: "name" }, {
            text: "Object Count",
            value: "count",
          }, { text: "Technologies", value: "technologies" }, {
            text: "Number of technologies",
            value: "numTechnologies",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          headersMasked: [{ text: "Name", align: "start", value: "name" }, {
            text: "Object Count",
            value: "count",
          }, { text: "Technologies", value: "technologies" }, {
            text: "Number of technologies",
            value: "numTechnologies",
          }, { text: "Actions", value: "actions", sortable: !1 }],
          loadingDataCallGraph: !0,
          loadingMaskedDataCallGraph: !0,
          optionsDataCallGraph: {},
          optionsMaskedDataCallGraph: {},
          numDataCallGraph: 0,
          numMaskedDataCallGraph: 0,
          displayedDataCallGraph: [],
          displayedMaskedDataCallGraph: [],
          startIndexDataCallGraph: 0,
          endIndexDataCallGraph: 0,
          pageDataCallGraph: 0,
          startIndexMaskedDataCallGraph: 0,
          endIndexMaskedDataCallGraph: 0,
          pageMaskedDataCallGraph: 0,
          searchName: "",
          maskActionLimit: 0,
          maskActionTechnology: 0,
          maskActionLoading: !1,
          maskActionTermsList: [],
          unmaskAllActionLoading: !1,
          dataCallGraphInsights: {},
          rangeObject: [0, 20],
          rangeTechnology: [0, 20],
          technologySearch: [],
          technologiesList: [],
          loadingTechList: !1,
          modalRename: !1,
          loadingRename: !1,
          toEditDataCallGraph: {},
        };
      }, methods: {
        openRenameModal: function(e) {
          this.toEditDataCallGraph = Object.assign({}, e), this.modalRename = !0;
        }, confirmRename: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.loadingRename = !0, t.next = 4, ds.renameDataCallGraph(e.application, e.toEditDataCallGraph._id, e.toEditDataCallGraph.name);
                case 4:
                  e.closeRenameModal(), e.refresh(), t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to rename the dataCallGraph.", t.t0);
                case 11:
                  return t.prev = 11, e.loadingRename = !1, t.finish(11);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8, 11, 14]]);
          })))();
        }, closeRenameModal: function() {
          this.modalRename = !1, this.toEditDataCallGraph = {};
        }, containsPrefix: function(e) {
          try {
            return 0 == e.name.indexOf(this.pinPrefix);
          } catch (t) {
            return !1;
          }
        }, unmaskAll: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.unmaskAllActionLoading = !0, t.next = 4, ds.unMaskAllDataCallGraph(e.application);
                case 4:
                  return e.numDataCallGraph = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to un-mask all the dataCallGraphs", t.t0);
                case 12:
                  return t.prev = 12, e.unmaskAllActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, getTechnologies: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (t.prev = 0, "" != e.application) {
                    t.next = 3;
                    break;
                  }
                  return t.abrupt("return");
                case 3:
                  return e.loadingTechList = !0, t.next = 6, ue.getLevelsByDepth(e.application, 5);
                case 6:
                  e.technologiesList = t.sent, e.technologiesList = e.technologiesList.sort(), t.next = 13;
                  break;
                case 10:
                  t.prev = 10, t.t0 = t["catch"](0), console.error("Failed to retrieve technologies in the application ".concat(e.application, "."), t.t0);
                case 13:
                  return t.prev = 13, e.loadingTechList = !1, t.finish(13);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 10, 13, 16]]);
          })))();
        }, maskByCount: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, ds.maskByCount(e.application, e.maskActionLimit);
                case 4:
                  return e.numDataCallGraph = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by count.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, maskByTechnology: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, ds.maskByTechnology(e.application, e.maskActionTechnology);
                case 4:
                  return e.numDataCallGraph = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by technology.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, maskByTerms: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, ds.maskByTerms(e.application, e.maskActionTermsList);
                case 4:
                  return e.numDataCallGraph = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by terms.", t.t0);
                case 12:
                  return t.prev = 12, e.maskActionLoading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 9, 12, 15]]);
          })))();
        }, getInsights: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ds.getInsightsUnmaskedDataCallGraph(e.application);
                case 3:
                  e.dataCallGraphInsights = t.sent, e.rangeTechnology = [e.dataCallGraphInsights.minTechnology, e.dataCallGraphInsights.maxTechnology], e.rangeObject = [e.dataCallGraphInsights.minObject, e.dataCallGraphInsights.maxObject], t.next = 11;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), console.error("Failed to get the insights of dataCallGraphs", t.t0);
                case 11:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8]]);
          })))();
        }, getNumberDataCallGraph: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ds.getNumberDataCallGraph(e.application);
                case 3:
                  return e.numDataCallGraph = t.sent, t.abrupt("return", e.numDataCallGraph);
                case 7:
                  t.prev = 7, t.t0 = t["catch"](0), console.error("Failed to get the number of dataCallGraph", t.t0);
                case 10:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 7]]);
          })))();
        }, getNumberMaskedDataCallGraph: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ds.getNumberMaskedDataCallGraph(e.application);
                case 3:
                  e.numMaskedDataCallGraph = t.sent, t.next = 9;
                  break;
                case 6:
                  t.prev = 6, t.t0 = t["catch"](0), console.error("Failed to get the number of dataCallGraph", t.t0);
                case 9:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 6]]);
          })))();
        }, dataCallGraphApiCall: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o, s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingDataCallGraph = !0, t.next = 3, e.getNumberDataCallGraph();
                case 3:
                  return a = {
                    minTechnologies: e.rangeTechnology[0],
                    maxTechnologies: e.rangeTechnology[1],
                    minObject: e.rangeObject[0],
                    maxObject: e.rangeObject[1],
                    techContained: e.technologySearch,
                  }, "" != e.searchName && (a.name = e.searchName), r = e.optionsDataCallGraph, n = r.sortBy, i = r.sortDesc, o = r.page, s = r.itemsPerPage, -1 === s && (s = e.numDataCallGraph), c = null, l = null, Array.isArray(n) && 1 === n.length && (c = n[0]), Array.isArray(i) && 1 === i.length && (l = i[0]), t.next = 13, ds.getBatchDataCallGraph(e.application, (o - 1) * s, o * s, c, l, a);
                case 13:
                  return u = t.sent, e.loadingDataCallGraph = !1, e.displayedDataCallGraph = u, t.abrupt("return", u);
                case 17:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskedDataCallGraphApiCall: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i, o, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingMaskedDataCallGraph = !0, t.next = 3, e.getNumberMaskedDataCallGraph();
                case 3:
                  return a = e.optionsMaskedDataCallGraph, r = a.sortBy, n = a.sortDesc, i = a.page, o = e.optionsMaskedDataCallGraph.itemsPerPage, -1 === o && (o = e.numMaskedDataCallGraph), s = null, c = null, Array.isArray(r) && 1 === r.length && (s = r[0]), Array.isArray(n) && 1 === n.length && (c = n[0]), t.next = 12, ds.getBatchMaskedDataCallGraph(e.application, (i - 1) * o, i * o, s, c);
                case 12:
                  return l = t.sent, e.loadingMaskedDataCallGraph = !1, e.displayedMaskedDataCallGraph = l, t.abrupt("return", l);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskDataCallGraph: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ds.maskDataCallGraph(t.application, e._id);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, pinDataCallGraph: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ds.pinDataCallGraph(t.application, e._id, t.pinPrefix);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, unpinDataCallGraph: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ds.unpinDataCallGraph(t.application, e._id, t.pinPrefix);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, renameDataCallGraph: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ds.renameDataCallGraph(t.application, e._id, e.name);
                case 2:
                  return a.next = 4, t.refresh();
                case 4:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, unMaskDataCallGraph: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ds.unmaskDataCallGraph(t.application, e._id);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, refresh: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getInsights();
                case 2:
                  return t.next = 4, e.getTechnologies();
                case 4:
                  return t.next = 6, e.dataCallGraphApiCall();
                case 6:
                  return t.next = 8, e.maskedDataCallGraphApiCall();
                case 8:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.refresh();
        }, optionsDataCallGraph: {
          handler: function() {
            this.dataCallGraphApiCall();
          }, deep: !0,
        }, optionsMaskedDataCallGraph: {
          handler: function() {
            this.maskedDataCallGraphApiCall();
          }, deep: !0,
        },
      },
    }), hs = ps, vs = Object(u["a"])(hs, ls, us, !1, null, null, null), ms = vs.exports;
    M()(vs, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VChipGroup: yt["a"],
      VCol: U["a"],
      VCombobox: Dn["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRangeSlider: os["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var fs = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticClass: "text-center pa-5" }, [a("h3", { staticClass: "text-h3" }, [e._v("This is page is under construction")])])], 1);
    }, gs = [], bs = n["a"].extend({
      name: "IconManager", data: function() {
        return {};
      },
    }), xs = bs, ws = Object(u["a"])(xs, fs, gs, !1, null, null, null), ks = ws.exports;
    M()(ws, { VContainer: G["a"], VRow: Q["a"] });
    var ys = n["a"].extend({
      name: "ImagingTuning",
      components: {
        LevelExplorer: Xi,
        ModuleExplorer: _o,
        ArchitectureExplorer: es,
        TransactionExplorer: cs,
        DataCallGraphExplorer: ms,
        IconManager: ks,
      },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName;
      },
      data: function() {
        return {
          application: "",
          step: 1,
          tab: 0,
          items: [{
            view: "LevelExplorer",
            name: "Level Manager",
            title: "Review the configuration of the ",
            icon: "mdi-folder-cog",
          }, {
            view: "ModuleExplorer",
            name: "Module Manager",
            title: "Review the configuration of the ",
            icon: "mdi-folder-cog",
          }, {
            view: "ArchitectureExplorer",
            name: "Architecture Manager",
            title: "Review the configuration of the ",
            icon: "mdi-folder-cog",
          }, {
            view: "TransactionExplorer",
            name: "Transaction",
            title: "Explore the transaction ",
            icon: "mdi-apple-safari",
          }, {
            view: "DataCallGraphExplorer",
            name: "Data Call Graph",
            title: "Explore the DataCallGraph",
            icon: "mdi-apple-safari",
          }],
        };
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), _s = ys, Cs = Object(u["a"])(_s, Ii, Ti, !1, null, null, null), As = Cs.exports;
    M()(Cs, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var Rs = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1), e.diplayNotInstalled ? a("div", { attrs: { id: "notInstalledDemter" } }, [a("h2", {
        staticClass: "ma-auto text--h2",
        attrs: { id: "Message" },
      }, [e._v(" The Demeter extension is not installed on this server."), a("br"), e._v(" You must install the Demeter extension to continue on this section."), a("br"), e._v(" Please install the extension from "), a("a", { attrs: { href: "https://extend.castsoftware.com/#/extension?id=com.castsoftware.uc.artemis&version=2.0.0" } }, [e._v(" CAST Extend ")])])]) : e._e()], 1);
    }, Ss = [], Is = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", [a("v-card", {
        staticClass: "pa-3",
        attrs: { "min-height": "300px" },
      }, [a("v-card-title", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h3", { staticClass: "text-h4 black--text mx-4 mb-4 my-3" }, [e._v(" Agents ")]), a("p", { staticClass: "ml-4 text-body-1" }, [e._v(" Industrialize the grouping operations in Imaging. With the demeter extension you'll be able to modify the differents views in CAST Imaging to have a better control over your applications."), a("br"), a("br"), e._v(" You can choose to automatize these grouping actions with the assistants. If they are activated, they will wait for their specifc tags ( indicated in the boxes below ) to performs the corresponding actions."), a("br"), e._v(" For more information, please refer to the documentation. ")])])], 1), a("v-card-text", [a("v-row", [a("v-col", {
        attrs: {
          cols: "4",
          md: "4",
          xl: "3",
          sm: "12",
        },
      }, [a("LevelAgent")], 1), a("v-col", {
        attrs: {
          cols: "4",
          md: "4",
          xl: "3",
          sm: "12",
        },
      }, [a("ModuleAgent")], 1), a("v-col", {
        attrs: {
          cols: "4",
          md: "4",
          xl: "3",
          sm: "12",
        },
      }, [a("ArchitectureAgent")], 1), a("v-col", {
        attrs: {
          cols: "4",
          md: "4",
          xl: "3",
          sm: "12",
        },
      }, [a("ViewAgent")], 1), a("v-col", {
        attrs: {
          cols: "4",
          md: "4",
          xl: "3",
          sm: "12",
        },
      }, [a("FrameworkAgent")], 1)], 1)], 1)], 1)], 1), a("v-row", { staticClass: "pt-5" }, [a("AssistantsManager")], 1)], 1);
    }, Ts = [], Es = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { "min-height": "100%" } }, [a("v-card-title", [e._v(" Level Agent")]), a("v-card-text", { staticClass: "mb-6" }, [a("v-container", [a("v-row", { staticClass: "mb-5" }, [a("p", [e._v(" Automatically extract the objects in CAST Imaging where a "), a("strong", { staticClass: "mx-2" }, [e._v(e._s(e.prefix))]), e._v(" is present to a new level. "), a("br"), a("br"), e._v(" For more information please visit the wiki of the extension : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.artemis/wiki" } }, [e._v("Demeter Wiki")])])]), a("v-row", { staticClass: "mt-2" }, [a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "mx-2",
        attrs: { width: "96%", tile: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.forceAction();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-adjust ")]), e._v(" Extract levels ")], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "ml-2 mr-8 white--text",
        attrs: { width: "96%", tile: "", loading: e.loadingToggle, color: e.daemonLevelState ? "#2a9d8f" : "#f4a261" },
        on: {
          click: function(t) {
            return e.toggleDaemon();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e.daemonLevelState ? a("span", [e._v(" Assistant active ")]) : a("span", [e._v(" Click to activate ")])], 1), a("p", { staticClass: "justify-center text-center w-100 px-5 pt-2" }, [e._v(" Click on the button above to toggle the state of the assistant ")])], 1)], 1)], 1)], 1)], 1);
    }, Ls = [], Vs = n["a"].extend({
      name: "LevelAgent", data: function() {
        return {
          nameAgent: "level",
          prefix: "<Failed to retrieve   the tag>",
          daemonLevelState: !1,
          loadingToggle: !1,
          loadingAction: !1,
        };
      }, methods: {
        getPrefix: function() {
          var e = this;
          Za.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Za.getStatus(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the level agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Za.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the level agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Za.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the level agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Za.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getPrefix(), this.getStatus();
      },
    }), Fs = Vs, Os = (a("ca8a"), Object(u["a"])(Fs, Es, Ls, !1, null, null, null)), js = Os.exports;
    M()(Os, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
    });
    var Ms = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { "min-height": "100%" } }, [a("v-card-title", [e._v(" Module Agent")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "mb-5" }, [a("p", [e._v(" Automatically extract the objects in CAST Imaging where a "), a("strong", { staticClass: "mx-2" }, [e._v(e._s(e.prefix))]), e._v(" is present. "), a("br"), a("br"), e._v(" For more information please visit the wiki of the extension : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.artemis/wiki" } }, [e._v("Demeter Wiki")])])]), a("v-row", { staticClass: "mt-2" }, [a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "mx-2",
        attrs: { width: "96%", tile: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.forceAction();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-adjust ")]), e._v(" Extract modules ")], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "ml-2 mr-8 white--text",
        attrs: { width: "96%", tile: "", loading: e.loadingToggle, color: e.daemonLevelState ? "#2a9d8f" : "#f4a261" },
        on: {
          click: function(t) {
            return e.toggleDaemon();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e.daemonLevelState ? a("span", [e._v(" Assistant active ")]) : a("span", [e._v(" Click to activate ")])], 1), a("p", { staticClass: "justify-center text-center w-100 px-5 pt-2" }, [e._v(" Click on the button above to toggle the state of the assistant ")])], 1)], 1)], 1)], 1)], 1);
    }, Ds = [], Ps = n["a"].extend({
      name: "ModuleAgent", data: function() {
        return {
          nameAgent: "module",
          prefix: "<Failed to retrieve the tag>",
          daemonLevelState: !1,
          loadingToggle: !1,
          loadingAction: !1,
        };
      }, methods: {
        getPrefix: function() {
          var e = this;
          Za.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Za.getStatus(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Module agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Za.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(t) {
            console.error("Failed to stop the Module agent", t), e.daemonLevelState = !0;
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Za.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(t) {
            console.error("Failed to start the Module agent", t), e.daemonLevelState = !1;
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Za.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getPrefix();
      },
    }), Ns = Ps, Bs = (a("b9cc"), Object(u["a"])(Ns, Ms, Ds, !1, null, null, null)), Us = Bs.exports;
    M()(Bs, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
    });
    var Gs = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { "min-height": "100%" } }, [a("v-card-title", [e._v(" Framework Agent")]), a("v-card-text", { staticClass: "mb-6" }, [a("v-container", [a("v-row", { staticClass: "mb-4" }, [a("p", [e._v(" Automatically extracts the nodes marked by the tag "), a("strong", { staticClass: "mx-2" }, [e._v(e._s(e.prefix))]), "" == e.tag ? a("span", [a("em", [e._v("Failed to retrieve the Tag")])]) : e._e(), e._v(" and creates frameworks nodes. "), a("br"), a("br"), e._v(" For more information please visit the wiki of the extension : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.artemis/wiki" } }, [e._v("Artemis Wiki")])])]), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "mx-2",
        attrs: { width: "96%", tile: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.forceAction();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-adjust ")]), e._v(" Extract Frameworks ")], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "ml-2 mr-8 white--text",
        attrs: { width: "96%", tile: "", loading: e.loadingToggle, color: e.daemonLevelState ? "#2a9d8f" : "#f4a261" },
        on: {
          click: function(t) {
            return e.toggleDaemon();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e.daemonLevelState ? a("span", [e._v(" Assistant active ")]) : a("span", [e._v(" Click to activate ")])], 1), a("p", { staticClass: "justify-center text-center w-100 px-5 pt-2" }, [e._v(" Click on the button above to toggle the state of the assistant ")])], 1)], 1)], 1)], 1)], 1);
    }, $s = [], qs = n["a"].extend({
      name: "FrameworkAgent", data: function() {
        return {
          tag: "",
          prefix: "<Failed to retrieve   the tag>",
          nameAgent: "framework",
          daemonLevelState: !1,
          loadingToggle: !1,
          loadingAction: !1,
        };
      }, methods: {
        getPrefix: function() {
          var e = this;
          Za.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getTag: function() {
          var e = this;
          ca.getFrameworkTag().then((function(t) {
            e.tag = t;
          })).catch((function(t) {
            console.error("Failed to retriece the tag associated to the framework grouping.", t), e.tag = "";
          }));
        }, getStatus: function() {
          var e = this;
          Za.getStatus(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Framework agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Za.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Za.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Za.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getTag(), this.getPrefix();
      },
    }), Hs = qs, Ws = (a("738d"), Object(u["a"])(Hs, Gs, $s, !1, null, null, null)), Qs = Ws.exports;
    M()(Ws, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
    });
    var zs = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        attrs: {
          disabled: "",
          "min-height": "100%",
        },
      }, [a("v-card-title", [e._v("View Agent"), a("br"), e._v("( Coming in Imaging funcrel 2.2.0 )")]), a("v-card-text", { staticClass: "mb-6" }, [a("v-container", [a("v-row", [e._v(" Automatically creates views from nodes marked by the tag $v_. "), a("br"), a("p", [e._v(" No view tags were found in your application "), a("br"), e._v("See how to create views on the "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.demeter/wiki" } }, [e._v("Demeter Wiki")])])]), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "mx-2",
        attrs: { width: "96%", tile: "", color: "persianGrey", dark: "" },
        on: {
          click: function(t) {
            return e.forceAction(e.application);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-adjust ")]), e._v(" Extract architectures ")], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "ml-2 mr-8 white--text",
        attrs: { width: "96%", tile: "", loading: e.loadingToggle, color: e.daemonLevelState ? "#2a9d8f" : "#f4a261" },
        on: {
          click: function(t) {
            return e.toggleDaemon();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e.daemonLevelState ? a("span", [e._v(" Assistant active ")]) : a("span", [e._v(" Click to activate ")])], 1), a("p", { staticClass: "justify-center text-center w-100 px-5 pt-2" }, [e._v(" Click on the button above to toggle the state of the assistant ")])], 1)], 1)], 1)], 1)], 1);
    }, Ys = [], Js = n["a"].extend({
      name: "ViewAgent", data: function() {
        return { nameAgent: "view", daemonLevelState: !1, loadingToggle: !1 };
      }, methods: {
        getStatus: function() {
          var e = this;
          Za.getStatus(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Framework agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Za.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Za.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          console.log("Extract");
        },
      }, mounted: function() {
        this.getStatus();
      },
    }), Xs = Js, Zs = (a("ff56"), Object(u["a"])(Xs, zs, Ys, !1, null, null, null)), Ks = Zs.exports;
    M()(Zs, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
    });
    var ec = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { "min-height": "100%" } }, [a("v-card-title", [e._v(" Architecture Agent")]), a("v-card-text", {
        staticClass: "mb-6",
        staticStyle: { "min-height": "180px" },
      }, [a("v-container", [a("v-row", [a("p", [e._v(" Automatically creates architectures views from nodes marked by the tag "), a("strong", { staticClass: "mx-2" }, [e._v(e._s(e.prefix))]), e._v("."), a("br"), e._v("You need to indicate the name of the view and the name of the subset separated by the \"$\" sign: Example : "), a("strong", { staticClass: "ml-2" }, [e._v(e._s(e.prefix) + "My view$My subset")]), a("br"), a("br"), e._v(" For more information please visit the wiki of the extension : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.artemis/wiki" } }, [e._v("Demeter Wiki")])])]), a("v-row", { staticClass: "mt-3" }, [a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "mx-2",
        attrs: { width: "96%", tile: "", color: "persianGrey", dark: "", loading: e.loadingAction },
        on: {
          click: function(t) {
            return e.forceAction();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-adjust ")]), e._v(" Extract architectures ")], 1)], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-btn", {
        staticClass: "ml-2 mr-8 white--text",
        attrs: { width: "96%", tile: "", loading: e.loadingToggle, color: e.daemonLevelState ? "#2a9d8f" : "#f4a261" },
        on: {
          click: function(t) {
            return e.toggleDaemon();
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e.daemonLevelState ? a("span", [e._v(" Assistant active ")]) : a("span", [e._v(" Click to activate ")])], 1), a("p", { staticClass: "justify-center text-center w-100 px-5 pt-2" }, [e._v(" Click on the button above to toggle the state of the assistant ")])], 1)], 1)], 1)], 1)], 1);
    }, tc = [], ac = n["a"].extend({
      name: "ArchitectureAgent", data: function() {
        return {
          nameAgent: "architecture",
          prefix: "<Failed to retrieve   the tag>",
          daemonLevelState: !1,
          loadingToggle: !1,
          loadingAction: !1,
        };
      }, methods: {
        getPrefix: function() {
          var e = this;
          Za.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Za.getStatus(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Module agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Za.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Module agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Za.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the Module agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Za.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getPrefix();
      },
    }), rc = ac, nc = (a("6a0e"), Object(u["a"])(rc, ec, tc, !1, null, null, null)), ic = nc.exports;
    M()(nc, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
    });
    var oc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "pa-3",
        attrs: { width: "100%", "min-height": "300px" },
      }, [a("v-card-title", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h3", { staticClass: "text-h4 black--text mx-4 mb-4 my-3" }, [e._v(" Assistants ")]), a("p", { staticClass: "ml-4 text-body-1" }, [e._v(" Automatize the actions of Demeter, Artemis and more, in your applications. ")])])], 1), a("v-card-text", [a("v-container", [a("v-row", {
        staticClass: "mb-5",
        attrs: { width: "100%" },
      }, [a("FrameworkAssistant")], 1), a("v-row", { attrs: { width: "100%" } }, [a("RegexAssistants")], 1)], 1)], 1)], 1);
    }, sc = [], cc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "pa-3",
        attrs: { "min-height": "300px", disabled: "" },
      }, [a("v-card-title", [e._v(" Regex Assistants ( Coming in next release )")]), a("v-card-subtitle", [e._v("Separate the objects in the applications matching theses rules.")]), a("v-card-text", [a("v-container", [a("v-row", { attrs: { width: "100%" } })], 1)], 1)], 1);
    }, lc = [], uc = n["a"].extend({
      name: "RegexAssistants", data: function() {
        return {};
      },
    }), dc = uc, pc = Object(u["a"])(dc, cc, lc, !1, null, null, null), hc = pc.exports;
    M()(pc, {
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VRow: Q["a"],
    });
    var vc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "pa-3",
        attrs: { "min-height": "300px", width: "100%" },
      }, [a("v-card-title", [e._v("Framework Assistant")]), a("v-card-subtitle", [e._v("Automatically analyze applications on-boarded.")]), a("v-card-text", { staticClass: "pa-0" }, [a("v-container", [a("v-row", { attrs: { width: "100%" } }, [a("v-col", { attrs: { cols: "6" } }, [a("v-card", { attrs: { width: "100%s" } }, [a("v-card-title", [e._v("Create a new Assistant")]), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { attrs: { align: "center" } }, [a("v-col", { attrs: { cols: "6" } }, [a("v-subheader", [e._v(" Category to bind : ")])], 1), a("v-col", { attrs: { cols: "6" } }, [a("v-select", {
        attrs: {
          items: e.categoriesList,
          loading: e.loadingCategories,
          label: "Select category",
          "persistent-hint": "",
          "single-line": "",
        }, model: {
          value: e.selectedCategory, callback: function(t) {
            e.selectedCategory = t;
          }, expression: "selectedCategory",
        },
      })], 1)], 1), a("v-row", { attrs: { align: "center" } }, [a("v-col", { attrs: { cols: "6" } }, [a("v-subheader", [e._v(" Actions to execute : ")])], 1), a("v-col", { attrs: { cols: "6" } }, [a("v-autocomplete", {
        attrs: {
          items: e.actionsList,
          loading: e.loadingActions,
          label: "Select actions",
          multiple: "",
        }, model: {
          value: e.selectedActions, callback: function(t) {
            e.selectedActions = t;
          }, expression: "selectedActions",
        },
      })], 1)], 1), a("v-row", [a("v-spacer"), a("v-btn", {
        attrs: {
          depressed: "",
          color: "primary",
          loading: e.loadingAssistantCreation,
        }, on: { click: e.createAssistant },
      }, [e._v(" Add assistant new ")])], 1)], 1)], 1)], 1)], 1), a("v-col", {
        staticClass: "pl-6",
        attrs: { cols: "6" },
      }, [a("v-row", { staticClass: "mb-4" }, [a("h3", [e._v("Running assistants:")])]), a("v-row", { staticStyle: { width: "100%" } }, e._l(e.assistantsList, (function(t, r) {
        return a("v-card", {
          key: r,
          staticClass: "my-2",
          attrs: { width: "100%", "min-height": "70px" },
        }, [a("v-card-text", [a("v-container", { staticClass: "pa-0" }, [a("v-row", [a("v-col", { attrs: { cols: "10" } }, [a("h3", [e._v("Assistant " + e._s(t.id))]), a("p", [e._v(" Monitoring : "), a("strong", [e._v(e._s(t.category))]), e._v(" and performing "), a("strong", [e._v(e._s(t.actions))]), e._v(" actions ")])]), a("v-col", { attrs: { cols: "1" } }, [a("v-btn", {
          staticClass: "mt-2",
          attrs: { fab: "", dark: "", "x-small": "", color: "red" },
          on: {
            click: function(a) {
              return e.removeAssistant(t);
            },
          },
        }, [a("v-icon", { attrs: { dark: "" } }, [e._v(" mdi-trash-can-outline ")])], 1)], 1)], 1)], 1)], 1)], 1);
      })), 1)], 1)], 1)], 1)], 1)], 1);
    }, mc = [], fc = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getPossibleActions", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/options/actions", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to get the actions. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to get the list of actions ."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getFrameworksCategories", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/options/categories", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to get the categories. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to get the list of categories ."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllAssistants", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to get all the assistants. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  throw t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to all the assistants."), t.t0), t.t0;
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "newAssistant", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/assistants/frameworks/new", t.prev = 1, i = {
                    category: a,
                    actions: r,
                  }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  console.warn("Failed to create the assistant. Status (".concat(o.status, ")"));
                case 11:
                  return t.abrupt("return", !1);
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to create the assistant."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "removeAssistant", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/assistants/frameworks/remove/" + a, t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 9:
                  console.warn("Failed to delete the assistant. Status (".concat(n.status, ")"));
                case 10:
                  return t.abrupt("return", !1);
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete the assistant."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    fc.API_BASE_URL = T.getUrl();
    var gc = n["a"].extend({
      name: "FrameworkAssistant", data: function() {
        return {
          selectedCategory: "",
          selectedActions: [],
          loadingActions: !1,
          actionsList: [],
          loadingCategories: !1,
          categoriesList: [],
          loadingAssistantCreation: !1,
          loadingAssistants: !1,
          assistantsList: [],
        };
      }, methods: {
        getListActions: function() {
          var e = this;
          this.loadingActions = !0, fc.getPossibleActions().then((function(t) {
            e.actionsList = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of actions.", e);
          })).finally((function() {
            e.loadingActions = !1;
          }));
        }, getListCategories: function() {
          var e = this;
          this.loadingCategories = !0, fc.getFrameworksCategories().then((function(t) {
            e.categoriesList = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of categories.", e);
          })).finally((function() {
            e.loadingCategories = !1;
          }));
        }, getListAssistants: function() {
          var e = this;
          this.loadingAssistants = !0, fc.getAllAssistants().then((function(t) {
            e.assistantsList = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of assistants.", e);
          })).finally((function() {
            e.loadingAssistants = !1;
          }));
        }, removeAssistant: function(e) {
          var t = this;
          fc.removeAssistant(e.id).then((function(e) {
            t.getListAssistants();
          })).catch((function(e) {
            console.error("Failed to remove the assistant.", e);
          }));
        }, createAssistant: function() {
          var e = this;
          "" != this.selectedCategory && 0 != this.selectedActions.length && fc.newAssistant(this.selectedCategory, this.selectedActions).then((function(t) {
            e.selectedCategory = "", e.selectedActions = [], e.getListAssistants();
          })).catch((function(e) {
            console.error("Failed to create the assistant", e);
          })).finally((function() {
            e.loadingAssistantCreation = !1;
          }));
        }, refresh: function() {
          this.getListActions(), this.getListCategories(), this.getListAssistants();
        },
      }, mounted: function() {
        this.refresh();
      },
    }), bc = gc, xc = Object(u["a"])(bc, vc, mc, !1, null, null, null), wc = xc.exports;
    M()(xc, {
      VAutocomplete: Ce["a"],
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSpacer: z["a"],
      VSubheader: Pa["a"],
    });
    var kc = n["a"].extend({
      name: "AssistantsManager",
      components: { RegexAssistants: hc, FrameworkAssistant: wc },
      data: function() {
        return {};
      },
    }), yc = kc, _c = Object(u["a"])(yc, oc, sc, !1, null, null, null), Cc = _c.exports;
    M()(_c, { VCard: N["a"], VCardText: B["c"], VCardTitle: B["d"], VContainer: G["a"], VRow: Q["a"] });
    var Ac = n["a"].component("GroupingTile", {
      components: {
        FrameworkAgent: Qs,
        ViewAgent: Ks,
        ArchitectureAgent: ic,
        AssistantsManager: Cc,
        LevelAgent: js,
        ModuleAgent: Us,
      }, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.daemonLevelState = this.$store.state.daemonLevelState, this.daemonModuleState = this.$store.state.daemonModuleState;
      }, data: function() {
        return {
          application: "",
          levelTags: [],
          moduleTags: [],
          countLevels: 0,
          countModule: 0,
          loading: !1,
          daemonLevelState: !0,
          daemonModuleState: !0,
        };
      }, methods: {
        toggleLevelDaemon: function() {
          this.daemonLevelState = this.$store.state.daemonLevelState = !this.$store.state.daemonLevelState, console.log("New Level Daemon state is ", this.$store.state.daemonLevelState);
        }, toggleModuleDaemon: function() {
          this.daemonModuleState = this.$store.state.daemonModuleState = !this.$store.state.daemonModuleState, console.log("New Module Daemon state is ", this.$store.state.daemonModuleState);
        }, toggleViewDaemon: function() {
          console.log("Not implemented yet !");
        }, groupApplication: function(e) {
          ji.executeGrouping(e).then((function() {
            console.log("Application ".concat(e, " was sucessfully grouped !"));
          }));
        }, groupToList: function(e) {
          if (null == e) return "";
          var t = [];
          return e.forEach((function(e) {
            var a = e.substring(6);
            -1 == t.indexOf(a) && t.push(a);
          })), t;
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), Rc = Ac, Sc = Object(u["a"])(Rc, Is, Ts, !1, null, null, null), Ic = Sc.exports;
    M()(Sc, { VCard: N["a"], VCardText: B["c"], VCardTitle: B["d"], VCol: U["a"], VContainer: G["a"], VRow: Q["a"] });
    var Tc = n["a"].extend({
      name: "Automation",
      components: { GroupingTile: Ic, TagStudio: Xr, UseCases: qr, TagViewer: Mr },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      data: function() {
        return {
          loading: !0,
          groupRecord: void 0,
          applicationName: "",
          diplayNotInstalled: !1,
          tab: 0,
          items: [{ view: "GroupingTile", name: "Assistants", icon: "mdi-assistant" }],
        };
      },
      mounted: function() {
        var e = this;
        this.applicationName = this.$store.state.applicationName, Ta.getDemeterVersion().then(function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.version = a;
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })));
          return function(e) {
            return t.apply(this, arguments);
          };
        }()).catch((function(t) {
          console.error("The Demeter extension wasn't detected. The functionnalities will be limited. Please install the Artemis extension", t), e.diplayNotInstalled = !0;
        }));
      },
      methods: {},
      watch: {
        getApplicationName: function(e) {
          this.applicationName = e;
        },
      },
    }), Ec = Tc, Lc = (a("6381"), Object(u["a"])(Ec, Rs, Ss, !1, null, null, null)), Vc = Lc.exports;
    M()(Lc, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var Fc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, Oc = [], jc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "mb-6",
        attrs: { height: "350px" },
      }, [a("v-card-text", [a("p", { staticClass: "display-1 text--primary" }, [e._v(" Demeter levels 5 detected in " + e._s(e.appName) + " ")]), 0 != e.demeterGroups.lenght ? a("v-row", [[a("v-sheet", {
        staticClass: "mx-auto text--black",
        attrs: { "min-width": "95%" },
      }, [a("v-slide-group", {
        attrs: { "center-active": "", "show-arrows": "" },
        model: {
          value: e.selectedGroupId, callback: function(t) {
            e.selectedGroupId = t;
          }, expression: "selectedGroupId",
        },
      }, e._l(e.demeterGroups, (function(t) {
        return a("v-slide-item", {
          key: t.id, scopedSlots: e._u([{
            key: "default", fn: function(r) {
              var n = r.active, i = r.toggle;
              return [a("v-btn", {
                staticClass: "mx-2",
                attrs: { "input-value": n, "active-class": "orange white--text", depressed: "", rounded: "" },
                on: {
                  click: i, change: function(t) {
                    e.editDGroup = !1;
                  },
                },
              }, [e._v(" " + e._s(t.name) + " ")])];
            },
          }], null, !0),
        });
      })), 1)], 1)]], 2) : a("v-row"), null == e.selectedGroupId ? a("v-row", { staticClass: "px-6 pt-4" }, [a("v-container", {
        staticClass: "d-flex flex-column",
        attrs: { "fill-height": "" },
      }, [a("p", { staticClass: "text-body-1" }, [a("b", [e._v("Select a group to display informations")])])])], 1) : a("v-row", { staticClass: "px-6 pt-4" }, [a("v-container", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h4", { staticClass: "text-h5" }, [e._v(" Name : " + e._s(e.getGroupByIndex(e.selectedGroupId).name) + " ")]), a("p", { staticClass: "text-body-1 pt-4" }, [a("b", [e._v("Number of objects in the group:")]), e._v(" " + e._s(e.getGroupByIndex(e.selectedGroupId).numObjects)), a("br")]), a("p", { staticClass: "text-body-1" }, [a("b", [e._v("Technologies presents in this level:")]), a("i", [e._v("(Coming soon)")]), a("br")])]), a("v-row", [a("v-btn", {
        attrs: {
          loading: e.loadingUndoGroup,
          disabled: e.loadingUndoGroup,
          color: "warning",
        }, on: {
          click: function(t) {
            e.undoGroup(e.getGroupByIndex(e.selectedGroupId).name);
          },
        },
      }, [e._v(" Undo group ")]), a("div", { staticClass: "text-center px-4" }, [a("v-dialog", {
        attrs: { width: "500" },
        scopedSlots: e._u([{
          key: "activator", fn: function(t) {
            var r = t.on, n = t.attrs;
            return [a("v-btn", e._g(e._b({
              attrs: {
                color: "orange",
                dark: "",
              },
            }, "v-btn", n, !1), r), [e._v(" Rename ")])];
          },
        }]),
        model: {
          value: e.editDGroup, callback: function(t) {
            e.editDGroup = t;
          }, expression: "editDGroup",
        },
      }, [a("v-card", [a("v-card-title", { staticClass: "headline charcoal " }, [a("p", { staticClass: "white--text" }, [e._v(" Rename level " + e._s(e.getGroupByIndex(e.selectedGroupId).name) + " ")])]), a("v-card-text", [a("p", { staticClass: "my-4" }, [e._v(" Rename the level with current name " + e._s(e.getGroupByIndex(e.selectedGroupId).name) + " on the level 5 view. ")]), a("v-text-field", {
        staticClass: "my-4",
        attrs: { label: "New level name", outlined: "" },
        model: {
          value: e.newGroupName, callback: function(t) {
            e.newGroupName = t;
          }, expression: "newGroupName",
        },
      })], 1), a("v-divider"), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: { color: "charcoal", text: "" },
        on: {
          click: function(t) {
            e.editDGroup = !1;
          },
        },
      }, [e._v(" Cancel ")]), a("v-btn", {
        staticClass: "white--text",
        attrs: { color: "persianGrey", loading: e.loadingRename },
        on: {
          click: function(t) {
            e.rename(e.getGroupByIndex(e.selectedGroupId).name, e.newGroupName);
          },
        },
      }, [e._v(" Rename ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    }, Mc = [], Dc = n["a"].component("DemeterLevelsTile", {
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.appName = this.$store.state.applicationName, 0 != this.appName.length && this.getDemeterGroups();
      }, data: function() {
        return {
          appName: "",
          loadingGroups: !1,
          loadingUndoGroup: !1,
          demeterGroups: [],
          selectedGroupId: null,
          editDGroup: !1,
          newGroupName: "",
          loadingRename: !1,
          groupToList: function(e) {
            if (null == e) return "";
            var t = [];
            return e.forEach((function(e) {
              var a = e.substring(6);
              -1 == t.indexOf(a) && t.push(a);
            })), t;
          },
          getGroupByIndex: function(e) {
            return this.demeterGroups[e];
          },
          isUndoLoading: function() {
            return this.loadingUndoGroup;
          },
        };
      }, methods: {
        getDemeterGroups: function() {
          var e = this;
          this.loadingGroups = !1, ji.getDemeterLevels(this.appName).then((function(t) {
            e.loadingGroups = !0, e.demeterGroups = t;
          })).catch((function(t) {
            e.loadingGroups = !1, console.error("An error happened while querying Demeter groups", t);
          }));
        }, undoGroup: function(e) {
          var t = this;
          this.loadingUndoGroup = !0, ji.undoGroupedLevel5(this.appName, e).then((function(a) {
            a ? t.getDemeterGroups() : console.error("Failed to undo the grouping for level ".concat(e, " on application ").concat(t.appName, "."));
          })).catch((function(a) {
            console.error("Failed to undo group with name ".concat(e, " on application ").concat(t.appName, "."), a);
          })).finally((function() {
            t.loadingUndoGroup = !1;
          }));
        }, rename: function(e, t) {
          var a = this;
          this.loadingRename = !0, e != t && ji.renameLevel(this.appName, e, t).then((function(e) {
            console.log("Successfuly renamed the level.", e), a.getDemeterGroups();
          })).catch((function(t) {
            console.error("Failed to rename level ".concat(e, "."), t);
          })).finally((function() {
            a.loadingRename = !1, a.editDGroup = !1, a.newGroupName = "";
          }));
        },
      }, watch: {
        getApplicationName: function(e) {
          this.appName = e, this.getDemeterGroups();
        },
      },
    }), Pc = Dc, Nc = Object(u["a"])(Pc, jc, Mc, !1, null, null, null), Bc = Nc.exports;
    M()(Nc, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VSheet: Or["a"],
      VSlideGroup: fa["b"],
      VSlideItem: ga["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var Uc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "mb-6",
        attrs: { height: "350px" },
      }, [a("v-card-text", [a("p", { staticClass: "display-1 text--primary" }, [e._v(" Demeter modules detected in " + e._s(e.appName) + " ")]), 0 != e.demeterModule.lenght ? a("v-row", [[a("v-sheet", {
        staticClass: "mx-auto text--black",
        attrs: { "min-width": "95%" },
      }, [a("v-slide-group", {
        attrs: { "center-active": "", "show-arrows": "" },
        model: {
          value: e.selectedGroupId, callback: function(t) {
            e.selectedGroupId = t;
          }, expression: "selectedGroupId",
        },
      }, e._l(e.demeterModule, (function(t) {
        return a("v-slide-item", {
          key: t.id, scopedSlots: e._u([{
            key: "default", fn: function(r) {
              var n = r.active, i = r.toggle;
              return [a("v-btn", {
                staticClass: "mx-2",
                attrs: { "input-value": n, "active-class": "brown white--text", depressed: "", rounded: "" },
                on: {
                  click: i, change: function(t) {
                    e.editDGroup = !1;
                  },
                },
              }, [e._v(" " + e._s(t.name) + " ")])];
            },
          }], null, !0),
        });
      })), 1)], 1)]], 2) : a("v-row"), null == e.selectedGroupId ? a("v-row", { staticClass: "px-6 pt-4" }, [a("v-container", {
        staticClass: "d-flex flex-column",
        attrs: { "fill-height": "" },
      }, [0 != e.demeterModule.lenght ? a("p", { staticClass: "text-body-1" }, [a("b", [e._v("Select a module to display informations")])]) : e._e(), 0 == e.demeterModule.lenght ? a("p", { staticClass: "text-body-1" }, [a("b", [e._v("No Demeter module were detected in " + e._s(e.appName) + ".")])]) : e._e()])], 1) : a("v-row", { staticClass: "px-6 pt-4" }, [a("v-container", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h4", { staticClass: "text-h5" }, [e._v(" Module : " + e._s(e.getGroupByIndex(e.selectedGroupId).name) + " ")]), a("p", { staticClass: "text-body-1 pt-4" }, [a("b", [e._v("Number of objects in the group:")]), e._v(" " + e._s(e.getGroupByIndex(e.selectedGroupId).numObjects)), a("br")]), a("p", { staticClass: "text-body-1" }, [a("b", [e._v("Technologies presents in this level:")]), a("i", [e._v("(Coming soon)")]), a("br")])]), a("v-row", [a("v-btn", {
        attrs: {
          disabled: "",
          color: "warning",
        },
      }, [e._v(" Rename ")])], 1)], 1)], 1)], 1)], 1);
    }, Gc = [], $c = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getDemeterModules", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n, i, o, s, c, l;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = "MATCH (app:Application) WHERE app.Name='".concat(t, "' \n      WITH [app.Name] as appName  \n      MATCH (l:Module:").concat(t, ") WHERE l.AipId=\"-1\" OR l.AipId=\"9999999\" \n      RETURN ID(l) as id, l.Name as groupName, l.Count as numObjects ;"), e.next = 3, this.neo4jal.execute(a);
                case 3:
                  for (r = e.sent, n = [], i = 0; i < r.records.length; i++) o = r.records[i], s = Object(C["int"])(o.get("id")).toNumber(), c = o.get("groupName"), l = o.get("numObjects"), n.push({
                    id: s,
                    name: c,
                    application: t,
                    numObjects: l,
                    demeterGroup: !0,
                  });
                  return e.abrupt("return", n);
                case 7:
                case"end":
                  return e.stop();
              }
            }), e, this);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }();
    $c.neo4jal = R.getInstance(), $c.API_BASE_URL = T.getUrl(), $c.tagPrefix = "$l_";
    var qc = n["a"].component("DemeterModuleTile", {
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.appName = this.$store.state.applicationName, 0 != this.appName.length && this.getDemeterModules();
      }, data: function() {
        return {
          appName: "",
          loadingModule: !1,
          loadingUndoGroup: !1,
          demeterModule: [],
          selectedGroupId: null,
          editDGroup: !1,
          newGroupName: "",
          loadingRename: !1,
          groupToList: function(e) {
            if (null == e) return "";
            var t = [];
            return e.forEach((function(e) {
              var a = e.substring(6);
              -1 == t.indexOf(a) && t.push(a);
            })), t;
          },
          getGroupByIndex: function(e) {
            return this.demeterModule[e];
          },
          isUndoLoading: function() {
            return this.loadingUndoGroup;
          },
        };
      }, methods: {
        getDemeterModules: function() {
          var e = this;
          this.loadingModule = !1, $c.getDemeterModules(this.appName).then((function(t) {
            e.loadingModule = !0, e.demeterModule = t, console.log("".concat(t.length, " groups found in application ").concat(e.appName, "."));
          })).catch((function(t) {
            e.loadingModule = !1, console.error("An error happened while querying Demeter groups", t);
          }));
        }, rename: function(e, t) {
          var a = this;
          this.loadingRename = !0, e != t && ji.renameLevel(this.appName, e, t).then((function(e) {
            console.log("Successfuly renamed the level.", e), a.getDemeterModules();
          })).catch((function(t) {
            console.error("Failed to rename level ".concat(e, "."), t);
          })).finally((function() {
            a.loadingRename = !1, a.editDGroup = !1, a.newGroupName = "";
          }));
        },
      }, watch: {
        getApplicationName: function(e) {
          this.appName = e, this.getDemeterModules();
        },
      },
    }), Hc = qc, Wc = Object(u["a"])(Hc, Uc, Gc, !1, null, null, null), Qc = Wc.exports;
    M()(Wc, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VContainer: G["a"],
      VRow: Q["a"],
      VSheet: Or["a"],
      VSlideGroup: fa["b"],
      VSlideItem: ga["a"],
    });
    var zc = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "display-1 text--primary" }, [e._v(" Global Operations ")]), a("v-card-text", [a("v-row", { staticClass: "px-4 my-4" }, [e._v("You can find here a list of different operations that will affect yout entire application."), a("br"), e._v("Be careful, even is these operations can undone, make sure you'll not override your previous work."), a("br"), e._v(" Based on the current machine resources the following operations can take a while on large applications.")]), a("v-divider"), a("v-row"), a("v-row", { staticClass: "my-3 mx-2" }, [a("h3", { staticClass: "red--text my-2" }, [e._v("Danger Zone")]), a("v-card", {
        staticStyle: {
          border: "2px solid #e76f51",
          "border-radius": "20px",
        },
      }, [a("v-card-text", [a("v-row", [a("v-col", {
        attrs: {
          cols: "8",
          md: "12",
        },
      }, [e._v(" Replicate all the level view in the module module view."), a("br"), a("em", [e._v("This operation will erase the current modules view")])]), a("v-col", {
        staticClass: "mb-2",
        attrs: { md: "12", cols: "4", "fill-height": "" },
      }, [a("v-btn", {
        staticClass: "ma-auto",
        attrs: { depressed: "", color: "orange", loading: e.loadReplication },
        on: {
          click: function(t) {
            return e.replicateModuleView();
          },
        },
      }, [e._v(" Replicate Levels ")])], 1)], 1), a("v-divider"), a("v-row", [a("v-col", {
        attrs: {
          cols: "8",
          md: "12",
        },
      }, [e._v(" Undo all the Demeter levels in your application. This operations will erase all the changes made on this application levels with the demeter extension. "), a("br"), a("em", [e._v("This operation can ask a lot of time on large applications")])]), a("v-col", {
        staticClass: "mb-2",
        attrs: { md: "12", cols: "4", "fill-height": "" },
      }, [a("v-btn", {
        staticClass: "ma-auto mt-2",
        attrs: { depressed: "", color: "orange", disabled: "" },
      }, [e._v(" Undo all levels ")])], 1)], 1), a("v-divider"), a("v-row", [a("v-col", {
        attrs: {
          cols: "8",
          md: "12",
        },
      }, [e._v(" Undo all the Demeter modules in you application. This operations will erase all the changes made on this application's modules with the demeter extension. "), a("br"), a("em", [e._v("( Coming soon )")])]), a("v-col", {
        staticClass: "mb-2",
        attrs: { md: "12", cols: "4", "fill-height": "" },
      }, [a("v-btn", {
        staticClass: "ma-auto mt-2",
        attrs: { depressed: "", color: "orange", disabled: "" },
      }, [e._v(" Undo all modules ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    }, Yc = [], Jc = n["a"].extend({
      name: "GlobalOperations", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.appName = this.$store.state.applicationName;
      }, data: function() {
        return { loadReplication: !1, appName: "" };
      }, methods: {
        replicateModuleView: function() {
          var e = this;
          this.loadReplication = !0, la.replicateModuleView(this.appName).catch((function(e) {
            console.error("Failed to replicate the level view in module view.", e);
          })).finally((function() {
            e.loadReplication = !1;
          }));
        },
      }, watch: {
        getApplicationName: function(e) {
          this.appName = e;
        },
      },
    }), Xc = Jc, Zc = Object(u["a"])(Xc, zc, Yc, !1, null, null, null), Kc = Zc.exports;
    M()(Zc, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VDivider: $["a"],
      VRow: Q["a"],
    });
    var el = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-row", { attrs: { justify: "center" } }, [a("v-col", [a("v-card", [a("v-card-text", [a("v-card-title", [e._v(" Demeter configuration ")]), a("div", { staticClass: "my-4 subtitle-1" }, [e._v(" Daemon grouping ")]), a("v-text-field", {
        ref: "refreshRate",
        attrs: {
          label: "Refresh rate of the daemon ( in Miliseconds ) ",
          placeholder: "Configuration_1",
          required: "",
        },
        model: {
          value: e.properties.refreshRate, callback: function(t) {
            e.$set(e.properties, "refreshRate", t);
          }, expression: "properties.refreshRate",
        },
      }), a("div", { staticClass: "my-4 subtitle-1" }, [e._v(" Configuration ")]), a("v-text-field", {
        ref: "configurationName",
        attrs: { rules: e.rules(), label: "Name of the configuration", placeholder: "Configuration_1", required: "" },
        model: {
          value: e.properties.configurationName, callback: function(t) {
            e.$set(e.properties, "configurationName", t);
          }, expression: "properties.configurationName",
        },
      }), a("v-divider", { staticClass: "mx-2" }), a("div", { staticClass: "my-4 subtitle-1" }, [e._v(" Neo4j Database ")]), a("v-text-field", {
        ref: "neo4jUri",
        attrs: {
          label: "URI of the Neo4j bolt interface",
          placeholder: "http://localhost:7687/",
          value: "http://localhost:7687/",
          required: "",
        },
        model: {
          value: e.properties.neo4jUri, callback: function(t) {
            e.$set(e.properties, "neo4jUri", t);
          }, expression: "properties.neo4jUri",
        },
      }), a("v-text-field", {
        ref: "neo4jUser",
        attrs: { label: "Database user", placeholder: "Neo4j user", required: "" },
        model: {
          value: e.credentials.user, callback: function(t) {
            e.$set(e.credentials, "user", t);
          }, expression: "credentials.user",
        },
      }), a("v-text-field", {
        attrs: {
          "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off",
          rules: [e.rules.required, e.rules.min],
          type: e.show1 ? "text" : "password",
          name: "input-10-1",
          label: "Database password",
          counter: "",
        }, on: {
          "click:append": function(t) {
            e.show1 = !e.show1;
          },
        }, model: {
          value: e.credentials.password, callback: function(t) {
            e.$set(e.credentials, "password", t);
          }, expression: "credentials.password",
        },
      })], 1), a("v-divider", { staticClass: "mt-12" }), a("v-card-actions", [a("v-btn", {
        attrs: { text: "" },
        on: { click: e.cancel },
      }, [e._v(" Cancel ")]), a("v-spacer"), a("v-btn", {
        attrs: { color: "primary", text: "" },
        on: { click: e.saveForm },
      }, [e._v(" Save parameters ")])], 1)], 1)], 1)], 1);
    }, tl = [], al = m["a"].extend({
      name: "DemeterParameters", computed: {
        formHasErrors: function() {
          return !1;
        },
      }, data: function() {
        return { show1: !1, properties: _.getProperties(), credentials: {} };
      }, methods: {
        rules: function() {
          var e = [], t = function(e) {
            return (e || "").length <= 30 || "A maximum of ".concat(30, " characters is allowed");
          };
          e.push(t);
          var a = function(e) {
            return (e || "").indexOf(" ") < 0 || "No spaces are allowed";
          };
          e.push(a);
          var r = /[!@#$%^&*()\-=[\]{};':"\\|,.<>/?]+/, n = function(e) {
            return !r.test(e || "") || "No special caracters are allowed";
          };
          return e.push(n), e;
        }, saveForm: function() {
          return _.saveProperties(this.properties), 0 != this.credentials.user.length && 0 != this.credentials.password.length && R.connectWithCredentials(this.credentials), window.location.reload(), !0;
        }, cancel: function() {
          this.properties = _.getProperties();
        },
      },
    }), rl = al, nl = Object(u["a"])(rl, el, tl, !1, null, null, null), il = nl.exports;
    M()(nl, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VDivider: $["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var ol = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-card", {
        attrs: {
          width: "100%",
          "min-height": "400px",
        },
      }, [a("v-card-title", [e._v(" Configuration of the Artemis extensions ")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-3" }, [a("PythiaParameters")], 1), a("v-divider"), a("v-row", { staticClass: "my-3" }, [a("ArtemisParametersViewer")], 1)], 1)], 1)], 1)], 1);
    }, sl = [], cl = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h4" }, [e._v(" Pythia : Framework repository "), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", { staticClass: "text-subtitle-1" }, [e._v("You can configure here the use of pytha that you want to make."), a("br"), e._v(" Pythia is an online repository that will gather the frameworks of several instances of Artemis.")]), a("v-card-text", [a("v-divider"), a("h2", { staticClass: "my-3 mr-2" }, [e._v(" Configuration of Pythia ")]), a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("v-text-field", {
        attrs: {
          hint: "URI of the Pythia server ( ex : http://192.9.1.0:3000 )",
          label: "Pythia URI",
          required: "",
        }, model: {
          value: e.pythiaURI, callback: function(t) {
            e.pythiaURI = t;
          }, expression: "pythiaURI",
        },
      })], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("v-text-field", {
        attrs: {
          "append-icon": e.show1 ? "mdi-eye" : "mdi-eye-off",
          type: e.show1 ? "text" : "password",
          name: "input-10-1",
          label: "Pythia token",
          hint: "Authentication token of Pythia",
          counter: "",
        }, on: {
          "click:append": function(t) {
            e.show1 = !e.show1;
          },
        }, model: {
          value: e.pythiaToken, callback: function(t) {
            e.pythiaToken = t;
          }, expression: "pythiaToken",
        },
      })], 1), a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-btn", {
        staticClass: "mt-3",
        attrs: { color: "charcoal", dark: "", loading: e.connectionLoading },
        on: {
          click: function(t) {
            return e.updateConnection();
          },
        },
      }, [e._v(" Connect to Pythia ")])], 1)], 1), a("v-row", [e.connectionPythia ? a("p", [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "green" },
      }, [e._v("mdi-checkbox-marked-circle-outline")]), e._v("Connection to Pythia successful ! ")], 1) : e._e(), "" != e.errorConnectionPythia ? a("p", [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "red" },
      }, [e._v("mdi-checkbox-marked-circle-outline")]), e._v("Failed to connect to Pythia : " + e._s(e.errorConnectionPythia) + " ")], 1) : e._e()])], 1), a("v-divider"), a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("h2", { staticClass: "my-3 " }, [e._v(" Last version pulled: "), a("em", [e._v(e._s(e.lastUpdateLocal))])]), a("h2", { staticClass: "my-3" }, [e._v(" Last version of Pythia: "), a("em", [e._v(e._s(e.lastUpdatePythia))])])]), a("v-col", {
        staticStyle: { "min-height": "100%" },
        attrs: { cols: "12", md: "4" },
      }, [a("v-btn", {
        staticClass: "my-4",
        attrs: { color: "charcoal", dark: "" },
      }, [e.isDatabaseEven() ? a("span", [e._v("Force pull")]) : a("span", [e._v("Pull " + e._s(e.framewokToPull) + " frameworks")])])], 1)], 1), a("v-row")], 1), e.isDatabaseEven() ? a("div", { staticClass: "text-subtitle-1" }, [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "green" },
      }, [e._v("mdi-checkbox-marked-circle-outline")]), e._v(" It seems that this local database is up-to-date ! ")], 1) : a("div", { staticClass: "text-subtitle-1" }, [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "red" },
      }, [e._v("mdi-exclamation-thick")]), e._v("A new set of frameworks are avaible on Pythia ! "), a("br"), a("em", [e._v(e._s(e.framewokToPull) + " framework where added since the last pull")])], 1)], 1)], 1);
    }, ll = [], ul = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getLocalLastUpdate", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/local/lastUpdate", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Number(n.data));
                case 10:
                  throw new Error("Failed to retrieve version. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve tag ").concat(name, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getRemoteLastUpdate", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/lastUpdate", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Number(n.data));
                case 10:
                  throw new Error("Failed to retrieve version. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve tag ").concat(name, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getPullForecast", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/forecast/pull", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 11;
                    break;
                  }
                  return console.log("Response of pull forecast :", r.data), n = r.data, t.abrupt("return", Number(n.data));
                case 11:
                  throw new Error("Failed to retrieve the last pull forecast. Status (".concat(r.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to last pull forecast."), t.t0), t.t0;
                case 18:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 14]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "pullFromPythia", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/pull", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  if (r = t.sent, 200 != r.status) {
                    t.next = 10;
                    break;
                  }
                  return n = r.data, t.abrupt("return", Number(n.data));
                case 10:
                  throw new Error("Failed to retrieve version. Status (".concat(r.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve tag ").concat(name, "."), t.t0), t.t0;
                case 17:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 13]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    ul.API_BASE_URL = T.getUrl();
    var dl = n["a"].extend({
      name: "PythiaParameters", data: function() {
        return {
          lastUpdateLocal: "Never",
          lastUpdatePythia: "Unkown",
          lastLocalTimestamp: 0,
          lastRemoteTimstamp: 0,
          even: !0,
          framewokToPull: 0,
          pythiaURI: "",
          pythiaToken: "",
          show1: !1,
          placeHolderToken: "******-*******-*******-*****",
          connectionPythia: !1,
          errorConnectionPythia: "",
          connectionLoading: !1,
        };
      }, methods: {
        isDatabaseEven: function() {
          return this.lastLocalTimestamp >= this.lastRemoteTimstamp;
        }, getLastLocalUpdate: function() {
          var e = this;
          ul.getLocalLastUpdate().then((function(t) {
            e.lastLocalTimestamp = t, e.lastUpdateLocal = new Date(t).toDateString();
          })).catch((function(t) {
            console.log("Failed to retieve the last local update", t), e.lastUpdatePythia = "Unkown - Make sure you installed the latest version of Artemis ";
          }));
        }, getRemoteLastUpdate: function() {
          var e = this;
          ul.getRemoteLastUpdate().then((function(t) {
            e.lastRemoteTimstamp = t, e.lastUpdatePythia = new Date(t).toDateString();
          })).catch((function(t) {
            console.error("Failed to retieve the last local update", t), e.lastUpdatePythia = "Unkown - Please check the configuraiton of Pythia ";
          }));
        }, getNumPull: function() {
          var e = this;
          ul.getPullForecast().then((function(t) {
            e.framewokToPull = t;
          })).catch((function(e) {
            console.error("Failed to pull fremwork", e);
          }));
        }, getURIPythia: function() {
          var e = this;
          L.getPythiaURL().then((function(t) {
            e.pythiaURI = t, e.errorConnectionPythia = "" == t ? "No URI was detected in the configuration" : "";
          })).catch((function(t) {
            console.error("Failed to retrieve the URI of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, getTokenPythia: function() {
          var e = this;
          L.getPythiaTokenPresence().then((function(t) {
            e.pythiaToken = 1 == t ? e.placeHolderToken : "";
          })).catch((function(t) {
            console.error("Failed to retrieve the Tokean of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, setTokenPythia: function() {
          var e = this;
          L.setPythiaToken(this.pythiaToken).then((function(t) {
            e.pythiaToken = e.placeHolderToken, e.errorConnectionPythia = 0 == t ? "No Token was detected in the configuration" : "";
          })).catch((function(t) {
            console.error("Failed to change the password of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, updateConnection: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (e.connectionLoading = !0, e.pythiaToken == e.placeHolderToken) {
                    t.next = 4;
                    break;
                  }
                  return t.next = 4, new Promise((function(t, a) {
                    L.setPythiaToken(e.pythiaToken).then((function(a) {
                      e.pythiaToken = e.placeHolderToken, console.log("Token was successfully changed."), e.errorConnectionPythia = 0 == a ? "No Token was detected in the configuration" : "", t();
                    })).catch((function(t) {
                      console.error("Failed to change the password of Pythia", t), e.errorConnectionPythia = t, a();
                    }));
                  }));
                case 4:
                  return t.next = 6, new Promise((function(t, a) {
                    L.setPythiaURL(e.pythiaURI).then((function(e) {
                      t();
                    })).catch((function(e) {
                      console.error("Failed to change the URL of pythia. ", e), a();
                    }));
                  }));
                case 6:
                  e.refresh(), e.connectionLoading = !1;
                case 8:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, refresh: function() {
          this.getLastLocalUpdate(), this.getRemoteLastUpdate(), this.getURIPythia(), this.getTokenPythia(), this.getNumPull();
        },
      }, mounted: function() {
        this.refresh();
      },
    }), pl = dl, hl = Object(u["a"])(pl, cl, ll, !1, null, null, null), vl = hl.exports;
    M()(hl, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var ml = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h4" }, [e._v(" Configuration of Artemis "), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle", { staticClass: "text-subtitle-1 ml-2 mt-2" }, [e._v("You can configure in this section the Artemis : Automatic Framework Detector extension."), a("br"), e._v(" You can find more information on this extension on the official Github : "), a("a", { attrs: { href: "https://github.com/CAST-Extend/com.castsoftware.uc.atlas" } }, [e._v(" https://github.com/CAST-Extend/com.castsoftware.uc.atlas ")])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("h3", [e._v("Path to the Artemis workspace")]), a("p", [e._v(" Set the path to the folder containing the files of the Artemis Installation. "), a("br")]), "" != e.updateSuccess ? a("p", [e._v(" " + e._s(e.updateSuccess) + " ")]) : e._e()]), a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("v-text-field", {
        attrs: {
          hint: "Workspace of the Artemis extension ( ex : C:/User/John/Desktop/ArtemisWorkspace )",
          label: "Artemis Workspace",
          required: "",
        }, model: {
          value: e.artemisWorkspace, callback: function(t) {
            e.artemisWorkspace = t;
          }, expression: "artemisWorkspace",
        },
      })], 1), a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-btn", {
        staticClass: "mt-3",
        attrs: { color: "charcoal", dark: "", loading: e.updatingWorkspace },
        on: {
          click: function(t) {
            return e.updateWorkspace();
          },
        },
      }, [e._v(" Update the workspace ")])], 1)], 1), a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("h3", [e._v("Load a new Framework Configuration")]), a("p", [e._v(" Load a zip file containing the new versions of the frameworks detected. "), a("br"), e._v(" New Frameworks will be merged with ancient ones found on this instance. ")]), "" != e.loadingSuccess ? a("p", [e._v(" " + e._s(e.loadingSuccess) + " ")]) : e._e()]), a("v-col", {
        attrs: {
          cols: "12",
          md: "4",
        },
      }, [a("v-file-input", {
        attrs: { placeholder: "Select a zip file", "prepend-icon": "mdi-paperclip" },
        scopedSlots: e._u([{
          key: "selection", fn: function(t) {
            var r = t.text;
            return [a("v-chip", { attrs: { small: "", label: "", color: "primary" } }, [e._v(" " + e._s(r) + " ")])];
          },
        }]),
        model: {
          value: e.file, callback: function(t) {
            e.file = t;
          }, expression: "file",
        },
      })], 1), a("v-col", { attrs: { cols: "12", md: "4" } }, [a("v-btn", {
        staticClass: "mt-3",
        attrs: { color: "charcoal", dark: "", loading: e.loadingConfigFiles },
        on: {
          click: function(t) {
            return e.loadConfigFiles();
          },
        },
      }, [e._v(" Load the configuration ")])], 1)], 1)], 1)], 1)], 1);
    }, fl = [], gl = n["a"].extend({
      name: "ArtemisParametersViewer", data: function() {
        return {
          artemisWorkspace: "",
          updatingWorkspace: !1,
          updateSuccess: "",
          file: null,
          loadingConfigFiles: !1,
          loadingSuccess: [],
        };
      }, methods: {
        getArtemisWorkspace: function() {
          var e = this;
          L.getArtemisWorkspace().then((function(t) {
            e.artemisWorkspace = t;
          })).catch((function(e) {
            console.error("Failed to get teh Artemis workspace", e);
          }));
        }, updateWorkspace: function() {
          var e = this;
          this.updatingWorkspace = !0, L.setArtemisWorkspace(this.artemisWorkspace).then(function() {
            var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.next = 2, e.getArtemisWorkspace();
                  case 2:
                    e.updateSuccess = "Successfully updated the workspace", setTimeout(function() {
                      this.updateSuccess = "";
                    }.bind(e), 4e3);
                  case 4:
                  case"end":
                    return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }()).catch((function(e) {
            console.error("Failed to update teh Artemis workspace", e);
          })).finally((function() {
            e.updatingWorkspace = !1;
          }));
        }, loadConfigFiles: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (null != e.file) {
                    t.next = 4;
                    break;
                  }
                  e.loadingSuccess = "Please select a file to upload.", t.next = 14;
                  break;
                case 4:
                  return t.prev = 4, t.next = 7, Ia.triggerImport(e.file);
                case 7:
                  a = t.sent, e.loadingSuccess = a, t.next = 14;
                  break;
                case 11:
                  t.prev = 11, t.t0 = t["catch"](4), e.loadingSuccess = "Failed to upload the new configuration";
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[4, 11]]);
          })))();
        }, refresh: function() {
          this.getArtemisWorkspace();
        },
      }, mounted: function() {
        this.getArtemisWorkspace();
      },
    }), bl = gl, xl = Object(u["a"])(bl, ml, fl, !1, null, null, null), wl = xl.exports;
    M()(xl, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VChip: kt["a"],
      VCol: U["a"],
      VContainer: G["a"],
      VFileInput: Fr["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var kl = n["a"].extend({
      name: "ArtemisParameters",
      components: { PythiaParameters: vl, ArtemisParametersViewer: wl },
      data: function() {
        return {};
      },
    }), yl = kl, _l = Object(u["a"])(yl, ol, sl, !1, null, null, null), Cl = _l.exports;
    M()(_l, {
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VContainer: G["a"],
      VDivider: $["a"],
      VRow: Q["a"],
    });
    var Al = function() {
      var e = this, t = e.$createElement, r = e._self._c || t;
      return r("v-card", [r("v-card-title", [r("h3", { staticClass: "text-h4 mb-3 " }, [e._v(" Global parameters ")]), r("v-spacer"), r("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [r("v-icon", [e._v("mdi-cached")])], 1)], 1), r("v-card-subtitle", { staticClass: "ml-1" }, [e._v(" Modify the parameters of the Atlas platform ")]), r("v-card-text", [r("v-container", [r("v-row", [r("v-card", { attrs: { width: "100%" } }, [r("v-card-title", { staticClass: "text-h6" }, [e._v("Path to Imaging Installation folder ")]), r("v-card-text", [r("v-container", { staticClass: "pa-3" }, [r("v-row", [r("v-col", {
        attrs: {
          cols: "12",
          md: "2",
        },
      }, [r("p", { staticClass: "text-decoration-underline text-subtitle-1 pt-4" }, [e._v(" Actual Imaging path : ")])]), r("v-col", {
        attrs: {
          cols: "12",
          md: "8",
        },
      }, [r("v-text-field", {
        attrs: { outlined: "", label: "Main input", "hide-details": "auto" },
        model: {
          value: e.imagingPath, callback: function(t) {
            e.imagingPath = t;
          }, expression: "imagingPath",
        },
      }), e.pathError ? r("p", { staticClass: "subtitle-2 red--text" }, [e._v(" " + e._s(e.pathError) + " ")]) : e._e(), e.pathSuccess ? r("p", { staticClass: "subtitle-2 light-green--text" }, [e._v(" " + e._s(e.pathSuccess) + " ")]) : e._e()], 1), r("v-col", {
        attrs: {
          cols: "2",
          md: "2",
        },
      }, [r("v-btn", {
        staticClass: "mt-2", attrs: { color: "persianGrey", dark: "" }, on: {
          click: function(t) {
            return e.setImagingPath();
          },
        },
      }, [e._v(" Apply changes ")])], 1)], 1)], 1)], 1)], 1)], 1), r("v-row", { staticClass: "mt-8" }, [r("v-card", { attrs: { width: "100%" } }, [r("v-card-title", { staticClass: "text-h6" }, [e._v("Status of the extensions "), r("v-spacer"), r("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: {
          click: function(t) {
            return e.refreshExtension();
          },
        },
      }, [r("v-icon", [e._v("mdi-cached")])], 1)], 1), r("v-card-text", [r("v-row", { staticClass: "justify-center pa-3" }, [r("v-col", {
        staticClass: "d-flex flex-column align-center justify-center",
        attrs: { cols: "12", md: "4" },
      }, [r("img", {
        attrs: {
          src: a("81d4"),
          height: "150px",
          width: "150px",
        },
      }), r("h4", { staticClass: "pt-3" }, [e._v("Demeter Extension")]), r("p", [e._v("Imaging remodelling")]), r("p", [e._v(e._s(e.demeterSuccess))]), e.demeterError ? r("p", { staticClass: "red--text" }, [e._v(" " + e._s(e.demeterError) + " ")]) : e._e()]), r("v-col", {
        staticClass: "d-flex flex-column align-center  justify-center",
        attrs: { cols: "12", md: "4" },
      }, [r("img", {
        attrs: {
          src: a("42b6"),
          height: "150px",
          width: "150px",
        },
      }), r("h4", { staticClass: "pt-3" }, [e._v("Artemis Extension")]), r("p", [e._v("Frameworks and communities detection")]), r("p", [e._v(e._s(e.artemisSuccess))]), e.artemisError ? r("p", { staticClass: "red--text" }, [e._v(" " + e._s(e.artemisError) + " ")]) : e._e()]), r("v-col", {
        staticClass: "d-flex flex-column align-center  justify-center",
        attrs: { cols: "12", md: "4" },
      })], 1)], 1)], 1)], 1)], 1)], 1)], 1);
    }, Rl = [], Sl = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getImagingPath", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.API_BASE_URL + "/api/imaging/installation/imaging/path/base", e.prev = 1, e.next = 4, I.a.get(t);
                case 4:
                  if (a = e.sent, 200 != a.status) {
                    e.next = 10;
                    break;
                  }
                  return r = a.data, e.abrupt("return", String(r.data));
                case 10:
                  return console.warn("Failed to retrieve imaging path. Status (".concat(a.status, ")")), e.abrupt("return", "The API returned status code : ".concat(a.status, "."));
                case 12:
                  e.next = 18;
                  break;
                case 14:
                  throw e.prev = 14, e.t0 = e["catch"](1), console.error("Failed to reach the API : ".concat(t, ". Failed to get Imaging path."), e.t0), e.t0;
                case 18:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, 14]]);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "setImagingPath", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = this.API_BASE_URL + "/api/imaging/installation/imaging/path/base", e.prev = 1, r = { path: t }, e.next = 5, I.a.post(a, r);
                case 5:
                  if (n = e.sent, 200 != n.status) {
                    e.next = 11;
                    break;
                  }
                  return i = n.data, e.abrupt("return", String(i.data));
                case 11:
                  return console.warn("Failed to set imaging path. Status (".concat(n.status, ")")), e.abrupt("return", "The API returned status code : ".concat(n.status, ". ").concat(n.data));
                case 13:
                  e.next = 19;
                  break;
                case 15:
                  throw e.prev = 15, e.t0 = e["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to set Imaging path."), e.t0), e.t0;
                case 19:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, 15]]);
          })));

          function t(t) {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getDemeterStatus", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.API_BASE_URL + "/api/atlas/extensions/demeter/version", e.prev = 1, e.next = 4, I.a.get(t);
                case 4:
                  if (a = e.sent, 200 != a.status) {
                    e.next = 10;
                    break;
                  }
                  return r = a.data, e.abrupt("return", String(r.data));
                case 10:
                  return console.warn("Failed to get Demeter Status. API Status (".concat(a.status, ")")), e.abrupt("return", "The API returned status code : ".concat(a.status, "."));
                case 12:
                  e.next = 18;
                  break;
                case 14:
                  throw e.prev = 14, e.t0 = e["catch"](1), console.error("Failed to reach the API : ".concat(t, ". Failed to get Demeter Status."), e.t0), e.t0;
                case 18:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, 14]]);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }, {
        key: "getArtemisStatus", value: function() {
          var e = Object(r["a"])(regeneratorRuntime.mark((function e() {
            var t, a, r;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return t = this.API_BASE_URL + "/api/atlas/extensions/artemis/version", e.prev = 1, e.next = 4, I.a.get(t);
                case 4:
                  if (a = e.sent, 200 != a.status) {
                    e.next = 10;
                    break;
                  }
                  return r = a.data, e.abrupt("return", String(r.data));
                case 10:
                  return console.warn("Failed to get Artemis Status. API Status (".concat(a.status, ")")), e.abrupt("return", "The API returned status code : ".concat(a.status, "."));
                case 12:
                  e.next = 18;
                  break;
                case 14:
                  throw e.prev = 14, e.t0 = e["catch"](1), console.error("Failed to reach the API : ".concat(t, ". Failed to get artemis Status."), e.t0), e.t0;
                case 18:
                case"end":
                  return e.stop();
              }
            }), e, this, [[1, 14]]);
          })));

          function t() {
            return e.apply(this, arguments);
          }

          return t;
        }(),
      }]), e;
    }();
    Sl.API_BASE_URL = T.getUrl();
    var Il = m["a"].extend({
      name: "GlobalParameters", computed: {}, data: function() {
        return {
          publicPath: "/",
          imagingPath: "",
          pathError: "",
          pathSuccess: "",
          demeterError: "",
          demeterSuccess: "",
          artemisError: "",
          artemisSuccess: "",
        };
      }, methods: {
        refresh: function() {
          this.getImagingPath();
        }, refreshExtension: function() {
          this.getDemeterVersion(), this.getArtemisVersion();
        }, setImagingPath: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, Sl.setImagingPath(e.imagingPath);
                case 3:
                  e.imagingPath = t.sent, e.pathError = "", e.pathSuccess = "The path was successfully changed.", t.next = 12;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](0), e.pathSuccess = "", e.pathError = t.t0;
                case 12:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8]]);
          })))();
        }, getImagingPath: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, Sl.getImagingPath();
                case 3:
                  e.imagingPath = t.sent, e.pathError = "", t.next = 11;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](0), e.pathSuccess = "", e.pathError = t.t0;
                case 11:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 7]]);
          })))();
        }, getDemeterVersion: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, Sl.getDemeterStatus();
                case 3:
                  t.t0 = t.sent, e.demeterSuccess = "Version : " + t.t0, e.demeterError = "", t.next = 12;
                  break;
                case 8:
                  t.prev = 8, t.t1 = t["catch"](0), e.demeterSuccess = "", e.demeterError = t.t1;
                case 12:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8]]);
          })))();
        }, getArtemisVersion: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, Sl.getArtemisStatus();
                case 3:
                  t.t0 = t.sent, e.artemisSuccess = "Version : " + t.t0, e.artemisError = "", t.next = 12;
                  break;
                case 8:
                  t.prev = 8, t.t1 = t["catch"](0), e.artemisSuccess = "", e.artemisError = t.t1;
                case 12:
                case"end":
                  return t.stop();
              }
            }), t, null, [[0, 8]]);
          })))();
        },
      }, mounted: function() {
        this.refresh(), this.refreshExtension();
      },
    }), Tl = Il, El = Object(u["a"])(Tl, Al, Rl, !1, null, null, null), Ll = El.exports;
    M()(El, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var Vl = n["a"].extend({
      name: "Administration",
      components: {
        DemeterLevelsTile: Bc,
        GlobalOperations: Kc,
        DemeterModuleTile: Qc,
        DemeterParameters: il,
        GlobalParameters: Ll,
        ArtemisParameters: Cl,
      },
      data: function() {
        return {
          tab: 0,
          step: 1,
          items: [{
            view: "GlobalParameters",
            name: "Global Parameters",
            icon: "mdi-cogs",
          }, { view: "DemeterParameters", name: "Demeter Parameters", icon: "mdi-cogs" }, {
            view: "ArtemisParameters",
            name: "Artemis Parameters",
            icon: "mdi-cogs",
          }],
        };
      },
    }), Fl = Vl, Ol = Object(u["a"])(Fl, Fc, Oc, !1, null, null, null), jl = Ol.exports;
    M()(Ol, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var Ml = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticClass: "mb-10" }, [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto " }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, Dl = [], Pl = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h3", { staticClass: "text-h4 black--text mx-4 mb-4 my-3" }, [e._v(" CAST AIP Configuration ")]), a("p", { staticClass: "ml-4 text-body-1" }, [e._v(" For more information, please refer to the documentation. ")])])], 1), a("v-card-text", [a("v-container", { attrs: { fluid: "" } }, [a("v-row", { staticClass: "mt-3" }, [a("h3", { staticClass: "text-h3" }, [e._v("Server list")]), a("v-spacer"), a("v-btn", {
        staticClass: "mr-3",
        attrs: { color: "green", dark: "" },
        on: {
          click: function(t) {
            return e.testAllConnection();
          },
        },
      }, [e._v(" Check Validity "), a("v-icon", [e._v("mdi-timeline-check")])], 1), a("v-btn", {
        staticClass: "mr-3",
        attrs: { color: "green", dark: "" },
        on: {
          click: function(t) {
            e.dialogAddServer = !0;
          },
        },
      }, [e._v(" Add a server "), a("v-icon", [e._v("mdi-plus")])], 1), a("v-btn", {
        staticClass: "mr-3",
        attrs: { color: "green", dark: "" },
        on: {
          click: function(t) {
            return e.refresh();
          },
        },
      }, [e._v(" Refresh list "), a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-row", { staticClass: "mt-3 d-flex flex-column" }, [a("p", [e._v(" Search in the list of the server by their name / ip ")]), a("v-text-field", {
        attrs: {
          label: "Search Server",
          flat: "",
          "solo-inverted": "",
          "hide-details": "",
          clearable: "",
          "clear-icon": "mdi-close-circle-outline",
        }, model: {
          value: e.search, callback: function(t) {
            e.search = t;
          }, expression: "search",
        },
      })], 1), a("v-row", { staticClass: "mt-5 mb-8" }, [a("v-col", [a("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          loading: e.loading,
          items: e.items,
          headers: e.headers,
          "single-expand": "",
          "expanded.sync": "",
          "show-expand": "",
          "item-key": "id",
          search: e.search,
        },
        scopedSlots: e._u([{
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2",
              attrs: { small: "", disabled: "" },
            }, [e._v(" mdi-pencil ")]), a("v-icon", {
              attrs: { small: "", color: "red" }, on: {
                click: function(t) {
                  return e.deleteConfiguration(r.id);
                },
              },
            }, [e._v(" mdi-delete ")])];
          },
        }, {
          key: "no-data", fn: function() {
            return [a("v-btn", {
              attrs: { color: "primary" }, on: {
                click: function(t) {
                  return e.refresh();
                },
              },
            }, [e._v(" Reset ")])];
          }, proxy: !0,
        }, {
          key: "item.schemas", fn: function(t) {
            var r = t.item;
            return [a("p", [e._v(e._s(r.schemas.length || 0))])];
          },
        }, {
          key: "expanded-item", fn: function(t) {
            var r = t.headers, n = t.item;
            return [a("td", { attrs: { colspan: r.length } }, [a("v-container", [a("v-row", { staticClass: "ma-2" }, [a("h3", [e._v("Registerd schema for this application")]), a("v-spacer"), a("v-btn", {
              staticClass: "mr-3",
              attrs: { color: "green", text: "" },
              on: {
                click: function(t) {
                  return e.openDialogSchema(n.id);
                },
              },
            }, [e._v(" Add schema "), a("v-icon", [e._v("mdi-plus")])], 1)], 1), n.schemas && 0 != n.schemas.length ? e._e() : a("v-row", { staticClass: "ma-2" }, [a("i", [e._v("No schema has been registered for this server. Add a new schema to start.")])]), n.schemas && n.schemas.length > 0 ? a("v-row", [a("v-col", { attrs: { cols: "3" } }, [a("strong", [e._v("Custom Name")])]), a("v-col", { attrs: { cols: "2" } }, [a("strong", [e._v("Schema")])]), a("v-col", { attrs: { cols: "2" } }, [a("strong", [e._v("Registered Type")])]), a("v-col", { attrs: { cols: "2" } }, [a("strong", [e._v("Action")])])], 1) : e._e(), n.schemas && n.schemas.length > 0 ? a("v-row", {
              staticClass: "d-flex flex-column justify-start pb-10",
              staticStyle: { "min-height": "220px: flex: 0 1 auto !important" },
            }, e._l(n.schemas, (function(t, r) {
              return a("v-row", {
                key: r,
                staticClass: "mt-2 mb-2 pr-4 pl-4",
                attrs: { "max-height": "30px" },
              }, [a("v-hover", {
                scopedSlots: e._u([{
                  key: "default", fn: function(r) {
                    var n = r.hover;
                    return [a("v-sheet", {
                      attrs: {
                        color: n ? "blue-grey lighten-5" : "white",
                        elevation: n ? 5 : 3,
                        height: "50",
                        width: "100%",
                      },
                    }, [a("v-container", [a("v-row", [a("v-col", { attrs: { cols: "3" } }, [a("p", [e._v(e._s(t.name))])]), a("v-col", { attrs: { cols: "2" } }, [a("p", [e._v(e._s(t.schema))])]), a("v-col", { attrs: { cols: "2" } }, [a("p", [e._v(e._s(t.type))])])], 1)], 1)], 1)];
                  },
                }], null, !0),
              })], 1);
            })), 1) : e._e()], 1)], 1)];
          },
        }], null, !0),
      })], 1)], 1), a("v-row")], 1)], 1), a("AddAIPServerModal", {
        attrs: { dialog: e.dialogAddServer },
        on: {
          close: function(t) {
            return e.creationSchemaClosed();
          },
        },
      }), a("AddAIPSchemaModal", {
        attrs: { dialog: e.dialogAddSchema, serverId: e.selectedServerId },
        on: {
          close: function(t) {
            e.dialogAddSchema = !1;
          },
        },
      })], 1);
    }, Nl = [], Bl = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-row", { attrs: { justify: "center" } }, [a("v-dialog", {
        attrs: {
          persistent: "",
          "max-width": "600px",
        }, model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "text-h5" }, [e._v("Create a new server")])]), a("v-card-text", [a("v-container", [this.errors ? a("v-row", [a("p", { staticClass: "red--text" }, [e._v(e._s(this.errors))])]) : e._e(), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Custom Name*",
          required: "",
        }, model: {
          value: e.configuration.name, callback: function(t) {
            e.$set(e.configuration, "name", t);
          }, expression: "configuration.name",
        },
      })], 1), a("v-col", {
        attrs: {
          cols: "12",
          sm: "8",
          md: "9",
        },
      }, [a("v-text-field", {
        attrs: { label: "Server URL*", hint: "http://localhost", required: "" },
        model: {
          value: e.configuration.url, callback: function(t) {
            e.$set(e.configuration, "url", t);
          }, expression: "configuration.url",
        },
      })], 1), a("v-col", { attrs: { cols: "12", sm: "4", md: "3" } }, [a("v-text-field", {
        attrs: {
          label: "Port*",
          hint: "2284",
          type: "number",
          required: "",
        }, model: {
          value: e.configuration.port, callback: function(t) {
            e.$set(e.configuration, "port", t);
          }, expression: "configuration.port",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Database*",
          hint: "Default: postgres",
          "persistent-hint": "",
          required: "",
        }, model: {
          value: e.configuration.database, callback: function(t) {
            e.$set(e.configuration, "database", t);
          }, expression: "configuration.database",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "User*",
          hint: "Default: operator",
          "persistent-hint": "",
          required: "",
        }, model: {
          value: e.configuration.user, callback: function(t) {
            e.$set(e.configuration, "user", t);
          }, expression: "configuration.user",
        },
      })], 1), a("v-col", { attrs: { cols: "12" } }, [a("v-text-field", {
        attrs: {
          label: "Password*",
          type: "password",
          hint: "CastAIP",
          required: "",
        }, model: {
          value: e.configuration.password, callback: function(t) {
            e.$set(e.configuration, "password", t);
          }, expression: "configuration.password",
        },
      })], 1)], 1)], 1), a("small", [e._v("*indicates required field")])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
          disabled: e.loading,
        }, on: {
          click: function(t) {
            return e.closeModal();
          },
        },
      }, [e._v(" Close ")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "", loading: e.loading },
        on: {
          click: function(t) {
            return e.save();
          },
        },
      }, [e._v(" Save ")])], 1)], 1)], 1)], 1);
    }, Ul = [], Gl = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "getConfigurationList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/aip/parameters/configuration/all", t.prev = 1, t.next = 4, I.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (i = r.data, Array.isArray(i.data) && (n = i.data)) : console.warn("Failed to retrieve Aip Configuration list. Status (".concat(r.status, ")")), t.abrupt("return", n);
                case 10:
                  t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to retrieve Aip Configuration list."), t.t0);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "createConfigurationNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/aip/parameters/configuration", t.prev = 1, n = { configuration: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 === i.status) {
                    t.next = 8;
                    break;
                  }
                  throw new Error("Failed to create the AIP configuration node. Status : ".concat(i.status, "."));
                case 8:
                  return t.abrupt("return");
                case 11:
                  t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve Aip Configuration list."), t.t0);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteConfigurationNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/aip/parameters/configuration/" + a, t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 === n.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to delete the AIP configuration. Status : ".concat(n.status, "."));
                case 7:
                  return t.abrupt("return");
                case 10:
                  t.prev = 10, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to configurationId Aip Configuration."), t.t0);
                case 13:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 10]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "testConnection", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/aip/parameters/test/configuration", t.prev = 1, n = { configuration: a }, t.next = 5, I.a.post(r, n);
                case 5:
                  if (i = t.sent, 200 === i.status) {
                    t.next = 8;
                    break;
                  }
                  return t.abrupt("return", !1);
                case 8:
                  return t.abrupt("return", !0);
                case 11:
                  return t.prev = 11, t.t0 = t["catch"](1), t.abrupt("return", !1);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getAllSchemaList", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/aip/parameters/configuration/byId/".concat(a, "/all/schemas"), t.prev = 1, t.next = 4, I.a.get(r);
                case 4:
                  if (n = t.sent, 200 === n.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to retrieve the schemas list. Status : ".concat(n.status, "."));
                case 7:
                  return i = n.data, console.log("Data received ", i.data), t.abrupt("return", i.data);
                case 12:
                  t.prev = 12, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve the schemas list."), t.t0);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 12]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "deleteSchemaById", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/aip/parameters/configuration/delete/byId/".concat(a), t.prev = 1, t.next = 4, I.a.delete(r);
                case 4:
                  if (n = t.sent, 200 === n.status) {
                    t.next = 7;
                    break;
                  }
                  throw new Error("Failed to delete the server. Status : ".concat(n.status, "."));
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to delete the server."), t.t0);
                case 12:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Gl.API_BASE_URL = T.getUrl(), Gl.neo4jal = R.getInstance();
    var $l = n["a"].extend({
      name: "AddAIPServerModal", props: { dialog: Boolean }, methods: {
        closeModal: function() {
          this.dialog = !1, this.$emit("close", !1);
        }, save: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loading = !0, e.errors = "", t.prev = 2, t.next = 5, Gl.createConfigurationNode(e.configuration);
                case 5:
                  t.next = 11;
                  break;
                case 7:
                  t.prev = 7, t.t0 = t["catch"](2), console.error("Failed to create configuration.", t.t0), e.errors = "Failed to create configuration. Error: " + t.t0;
                case 11:
                  return t.prev = 11, e.loading = !1, t.finish(11);
                case 14:
                  e.closeModal();
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 7, 11, 14]]);
          })))();
        },
      }, data: function() {
        return {
          errors: "",
          loading: !1,
          configuration: {
            name: "Server Name",
            url: "http://localhost",
            port: 2284,
            database: "postgres",
            user: "operator",
            password: "CastAIP",
            schemas: [],
          },
        };
      },
    }), ql = $l, Hl = Object(u["a"])(ql, Bl, Ul, !1, null, null, null), Wl = Hl.exports;
    M()(Hl, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var Ql, zl = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-row", { attrs: { justify: "center" } }, [a("v-dialog", {
        attrs: {
          persistent: "",
          "max-width": "600px",
        }, model: {
          value: e.dialog, callback: function(t) {
            e.dialog = t;
          }, expression: "dialog",
        },
      }, [a("v-card", [a("v-card-title", [a("span", { staticClass: "text-h5" }, [e._v("Create a new schema")])]), a("v-card-text", [a("v-container", [this.errors ? a("v-row", [a("p", { staticClass: "red--text" }, [e._v(e._s(this.errors))])]) : e._e(), a("v-row", [a("v-col", {
        staticClass: "pa-0  pb-3",
        attrs: { cols: "12" },
      }, [a("h3", [e._v("Enter a custom schema name")])]), a("v-col", {
        staticClass: "pa-0",
        attrs: { cols: "12" },
      }, [a("v-text-field", {
        attrs: { label: "Custom Name*", required: "" },
        model: {
          value: e.schema.name, callback: function(t) {
            e.$set(e.schema, "name", t);
          }, expression: "schema.name",
        },
      })], 1), a("v-col", {
        staticClass: "pa-0 pb-3",
        attrs: { cols: "12" },
      }, [a("h4", [e._v("Select a schema from the list")])]), e.errorSchema ? a("v-col", { attrs: { cols: "12" } }, [e._v(" " + e._s(e.errorSchema) + " ")]) : e._e(), a("v-col", { attrs: { cols: "12" } }, [a("v-card", {
        staticClass: "mx-auto",
        staticStyle: { "min-height": "200px", overflow: "scroll" },
        attrs: { outlined: "", "max-height": "300px", scrollable: "" },
      }, [e.schemasList && 0 != e.schemasList.length ? e._e() : a("v-btn", {
        staticClass: "mx-auto",
        on: {
          click: function(t) {
            return e.loadSchemas();
          },
        },
      }, [e._v("Click to load schemas")]), a("v-list", { attrs: { dense: "" } }, [a("v-list-item-group", { attrs: { color: "primary" } }, e._l(e.schemasList, (function(t, r) {
        return a("v-list-item", {
          key: r, on: {
            click: function(a) {
              return e.selectSchemaList(t);
            },
          },
        }, [a("v-list-item-content", [a("v-list-item-title", { domProps: { textContent: e._s(t) } })], 1)], 1);
      })), 1)], 1)], 1)], 1), a("v-divider"), a("v-col", {
        staticClass: "pa-0 pb-3",
        attrs: { cols: "12" },
      }, [a("h3", [e._v("Or Manual input")])]), a("v-col", {
        staticClass: "pa-0",
        attrs: { cols: "12" },
      }, [a("v-text-field", {
        attrs: { label: "Schema name*", required: "" },
        model: {
          value: e.schema.schema, callback: function(t) {
            e.$set(e.schema, "schema", t);
          }, expression: "schema.schema",
        },
      })], 1), a("v-col", { staticClass: "pa-0", attrs: { cols: "12" } }, [a("v-select", {
        attrs: {
          items: e.itemsType,
          label: "Schema Type",
        }, model: {
          value: e.schema.type, callback: function(t) {
            e.$set(e.schema, "type", t);
          }, expression: "schema.type",
        },
      })], 1)], 1)], 1), a("small", [e._v("*indicates required field")])], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: {
          color: "blue darken-1",
          text: "",
          disabled: e.loading,
        }, on: {
          click: function(t) {
            return e.closeModal();
          },
        },
      }, [e._v(" Close ")]), a("v-btn", {
        attrs: { color: "blue darken-1", text: "", loading: e.loading },
        on: {
          click: function(t) {
            return e.save();
          },
        },
      }, [e._v(" Save ")])], 1)], 1)], 1)], 1);
    }, Yl = [];
    (function(e) {
      e["LOCAL"] = "Local", e["MANAGEMENT"] = "Management", e["CENTRAL"] = "Central";
    })(Ql || (Ql = {}));
    var Jl = function() {
      function e() {
        Object(g["a"])(this, e);
      }

      return Object(f["a"])(e, null, [{
        key: "createSchemaNode", value: function() {
          var t = Object(r["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, i, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/aip/parameters/configuration/".concat(a, "/add/schemas"), t.prev = 1, i = { schema: r }, t.next = 5, I.a.post(n, i);
                case 5:
                  if (o = t.sent, 200 === o.status) {
                    t.next = 8;
                    break;
                  }
                  throw new Error("Failed to create the AIP Schema. Status : ".concat(o.status, "."));
                case 8:
                  return t.abrupt("return");
                case 11:
                  t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(n, ". Failed to create the AIP Schema."), t.t0);
                case 14:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a(e, a) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }();
    Jl.API_BASE_URL = T.getUrl();
    var Xl, Zl = n["a"].extend({
      name: "AddAIPSchemaModal", props: { serverId: Number, dialog: Boolean }, methods: {
        closeModal: function() {
          this.dialog = !1, this.selectedSchemaName = "", this.loadingSchemas = !1, this.schemasList = [], this.errorSchema = "", this.$emit("close", !1);
        }, loadSchemas: function() {
          var e = this;
          this.loadingSchemas = !0, Gl.getAllSchemaList(this.serverId).then((function(t) {
            e.schemasList = t;
          })).catch((function(t) {
            e.errorSchema = "Failed to get the schema list. Check the connectivity to the server.";
          })).finally((function() {
            e.loadingSchemas = !1;
          }));
        }, selectSchemaList: function(e) {
          this.schema.schema = e, e.indexOf("_local") >= 0 ? this.schema.type = Ql.LOCAL : e.indexOf("_mngt") >= 0 ? this.schema.type = Ql.MANAGEMENT : e.indexOf("_central") >= 0 && (this.schema.type = Ql.CENTRAL);
        }, save: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loading = !0, e.errors = "", t.prev = 2, t.next = 5, Jl.createSchemaNode(e.serverId, e.schema);
                case 5:
                  e.closeModal(), t.next = 12;
                  break;
                case 8:
                  t.prev = 8, t.t0 = t["catch"](2), console.error("Failed to create schema.", t.t0), e.errors = "Failed to create schema. Error: " + t.t0;
                case 12:
                  return t.prev = 12, e.loading = !1, t.finish(12);
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[2, 8, 12, 15]]);
          })))();
        },
      }, data: function() {
        return {
          errors: "",
          loading: !1,
          itemsType: ["Local", "Management", "Central"],
          schema: { name: "Local Database", schema: "application_local", type: Ql.LOCAL },
          selectedSchemaName: "",
          loadingSchemas: !1,
          schemasList: [],
          errorSchema: "",
        };
      },
    }), Kl = Zl, eu = Object(u["a"])(Kl, zl, Yl, !1, null, null, null), tu = eu.exports;
    M()(eu, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardActions: B["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDialog: Je["a"],
      VDivider: $["a"],
      VList: Ae["a"],
      VListItem: Re["a"],
      VListItemContent: Se["a"],
      VListItemGroup: Ie["a"],
      VListItemTitle: Se["c"],
      VRow: Q["a"],
      VSelect: qt["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    }), function(e) {
      e["UNKNOWN"] = "Unknown", e["VALID"] = "Valid", e["ERROR"] = "Error", e["LOADING"] = "Loading";
    }(Xl || (Xl = {}));
    var au = n["a"].extend({
      name: "AipParameters", components: { AddAIPServerModal: Wl, AddAIPSchemaModal: tu }, mounted: function() {
        this.getConfigurationList();
      }, computed: {
        filter: function() {
          return this.caseSensitive ? function(e, t, a) {
            return e[a].indexOf(t) > -1;
          } : void 0;
        },
      }, methods: {
        refresh: function() {
          this.getConfigurationList();
        }, creationSchemaClosed: function() {
          this.dialogAddServer = !1, this.refresh();
        }, getConfigurationList: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loading = !1, t.prev = 1, t.next = 4, Gl.getConfigurationList();
                case 4:
                  a = t.sent, a.forEach((function(e) {
                    e.valid = Xl.UNKNOWN, e.schemas || (e.schemas = []);
                  })), e.items = a, t.next = 13;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](1), console.error("Failed to retrieve server list.", t.t0), e.errors = t.t0;
                case 13:
                  return t.prev = 13, e.loading = !1, t.finish(13);
                case 16:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 9, 13, 16]]);
          })))();
        }, deleteConfiguration: function(e) {
          var t = this;
          return Object(r["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, Gl.deleteSchemaById(e);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, testConnection: function(e) {
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  Gl.testConnection(e);
                case 1:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, testAllConnection: function() {
          var e = this;
          return Object(r["a"])(regeneratorRuntime.mark((function t() {
            var a, r;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  for (r in a = function(t) {
                    e.items[t].valid = Xl.LOADING, Gl.testConnection(e.items[t]).then((function(a) {
                      e.items[t].valid = a ? Xl.VALID : Xl.ERROR;
                    })).catch((function(e) {
                      console.error("Failed to to check configuration.");
                    }));
                  }, e.items) a(r);
                case 2:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, openDialogSchema: function(e) {
          this.dialogAddSchema = !0, this.selectedServerId = e;
        },
      }, data: function() {
        return {
          errors: "",
          items: [],
          open: [],
          search: null,
          caseSensitive: !1,
          expanded: [],
          loading: !1,
          headers: [{ text: "Name", align: "start", value: "name" }, { text: "Url", value: "url" }, {
            text: "Port",
            value: "port",
          }, { text: "Database", value: "database" }, { text: "Schemas", value: "schemas" }, {
            text: "Valid",
            value: "valid",
          }, { text: "Actions", value: "actions", sortable: !1 }, { text: "", value: "data-table-expand" }],
          dialogAddServer: !1,
          dialogAddSchema: !1,
          selectedServerId: 0,
        };
      },
    }), ru = au, nu = Object(u["a"])(ru, Pl, Nl, !1, null, null, null), iu = nu.exports;
    M()(nu, {
      VBtn: P["a"],
      VCard: N["a"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VDataTable: Da["a"],
      VHover: ft["a"],
      VIcon: H["a"],
      VRow: Q["a"],
      VSheet: Or["a"],
      VSpacer: z["a"],
      VTextField: Y["a"],
    });
    var ou = n["a"].extend({
      name: "AipAdministration",
      components: { AipParameters: iu },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      mounted: function() {
        this.application = this.$store.state.applicationName;
      },
      data: function() {
        return {
          application: "",
          step: 1,
          tab: 0,
          items: [{ view: "AipParameters", name: "AIP Parameters", icon: "mdi-folder-cog" }],
        };
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), su = ou, cu = Object(u["a"])(su, Ml, Dl, !1, null, null, null), lu = cu.exports;
    M()(cu, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var uu = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "deepcharcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, du = [], pu = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [a("h3", { staticClass: "py-3 pb-5 text-h4" }, [e._v("Rules injection")])]), a("v-card-subtitle", [a("p", { staticClass: "subtitle-1 ml-1" }, [e._v(" Inject rules coming from CAST AIP in CAST Imaging ")])]), a("v-card-text", [a("v-container", [a("v-row", [a("v-col", {
        attrs: {
          cols: "12",
          md: "5",
        },
      }, [a("v-select", {
        attrs: {
          items: e.schemaNames,
          label: "Outlined style",
          outlined: "",
        },
      })], 1), a("v-col", {
        attrs: {
          cols: "12",
          md: "2",
        },
      }, [a("p", { staticClass: "text-center" }, [e._v("send to")])]), a("v-col", {
        attrs: {
          cols: "12",
          md: "5",
        },
      })], 1), a("v-row")], 1)], 1)], 1);
    }, hu = [], vu = n["a"].extend({
      name: "RulesInjection", data: function() {
        return { schemaNames: void 0 };
      },
    }), mu = vu, fu = Object(u["a"])(mu, pu, hu, !1, null, null, null), gu = fu.exports;
    M()(fu, {
      VCard: N["a"],
      VCardSubtitle: B["b"],
      VCardText: B["c"],
      VCardTitle: B["d"],
      VCol: U["a"],
      VContainer: G["a"],
      VRow: Q["a"],
      VSelect: qt["a"],
    });
    var bu = n["a"].extend({
      name: "AipInjection",
      components: { RulesInjection: gu },
      computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      },
      data: function() {
        return {
          loading: !0,
          applicationName: "",
          tab: 0,
          items: [{ view: "RulesInjection", name: "Inject Rules", icon: "mdi-assistant" }],
        };
      },
      mounted: function() {
        this.applicationName = this.$store.state.applicationName;
      },
      watch: {
        getApplicationName: function(e) {
          this.applicationName = e;
        },
      },
    }), xu = bu, wu = (a("17cf"), Object(u["a"])(xu, uu, du, !1, null, null, null)), ku = wu.exports;
    M()(wu, { VContainer: G["a"], VIcon: H["a"], VRow: Q["a"], VTab: br["a"], VTabs: xr["a"] });
    var yu = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("div", { staticClass: "main-application" }, [a("v-app", [a("v-navigation-drawer", {
        staticClass: "side-bar",
        attrs: { color: "deepblue", dark: "", "expand-on-hover": "", fixed: "", permanent: "", shaped: "" },
        scopedSlots: e._u([{
          key: "append", fn: function() {
            return [a("div", { staticClass: "pa-2" }, [a("v-list", [a("v-tooltip", {
              attrs: { bottom: "" },
              scopedSlots: e._u([{
                key: "activator", fn: function(t) {
                  var r = t.on, n = t.attrs;
                  return [a("v-list-item", e._g(e._b({
                    attrs: { link: "" }, on: {
                      click: function(t) {
                        return e.simpleHealthCheck();
                      },
                    },
                  }, "v-list-item", n, !1), r && !e.onlineDatabase), [a("v-list-item-icon", [e.onlineDatabase ? a("v-icon", { attrs: { color: "green" } }, [e._v("mdi-database-check ")]) : e._e(), e.onlineDatabase ? e._e() : a("v-icon", { attrs: { color: "red" } }, [e._v("mdi-database-remove ")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Database " + e._s(e.onlineDatabase ? "online" : "offline") + " ")])], 1)], 1)];
                },
              }]),
            }, [a("span", [e._v("Lost connection to the database")])]), a("v-list-item", {
              attrs: {
                href: "https://github.com/Makunda/Demeter/wiki",
                link: "",
              },
            }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-information-outline")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Documentation")])], 1)], 1)], 1)], 1)];
          }, proxy: !0,
        }]),
      }, [a("v-list", [a("v-list-item", {
        staticClass: "ml-1",
        attrs: { link: "" },
      }, [a("v-list-item-content", { staticClass: "mx-auto" }, [a("v-list-item-title", { staticClass: "title" }, [a("v-icon", {
        staticClass: "mr-2",
        attrs: { color: "#438FDA" },
      }, [e._v("mdi-globe-model")]), e._v(" Atlas ")], 1), a("v-list-item-subtitle", [e._v("Intelligence for CAST Imaging ")])], 1)], 1)], 1), a("v-divider"), a("v-list", {
        attrs: {
          dense: "",
          nav: "",
        },
      }, [a("v-list-item-group", {
        attrs: { "active-class": "activeNavigationElement", mandatory: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t, r) {
        return a("v-list-item", {
          key: r,
          attrs: { link: "" },
        }, [a("v-list-item-icon", [a("v-icon", {
          staticClass: "pl-1",
          attrs: { color: e.tab === r ? "#ffffff" : "#a5a4a4" },
        }, [e._v(e._s(t.icon) + " ")])], 1), a("v-list-item-title", {
          staticClass: "text-uppercase",
          attrs: { color: e.tab === r ? "#ffffff" : "#a5a4a4" },
        }, [e._v(e._s(t.name) + " ")])], 1);
      })), 1)], 1)], 1), a("v-row", { staticStyle: { "max-height": "80px" } }, [a("v-toolbar", {
        staticClass: "ml-15 text--white top-toolbar",
        attrs: { color: "charcoal", dark: "", height: "80px", "min-width": "50px" },
      }, [a("v-toolbar-title", { staticClass: "ml-8 screen-title" }, [a("span", { staticClass: "lighten-5" }, [e._v("Atlas")]), a("span", { staticClass: "font-weight-light" }, [e._v("Administration")])]), a("v-spacer"), a("span", { staticClass: "mt-2 d-flex flex-row" }, [a("v-btn", {
        attrs: { text: "" },
        on: {
          click: function(t) {
            return e.goTo("atlas", !0);
          },
        },
      }, [a("p", { staticClass: "lighten-3 mr-2 pt-4" }, [e._v("Go back to application")]), a("v-icon", [e._v("mdi-application")])], 1), a("v-divider", {
        staticClass: "mx-2",
        attrs: { dark: "", vertical: "" },
      }), a("v-btn", {
        attrs: { text: "" }, on: {
          click: function(t) {
            return e.logout();
          },
        },
      }, [a("p", { staticClass: "lighten-3 mr-2 pt-4" }, [e._v("Logout")]), a("v-icon", [e._v("mdi-exit-to-app")])], 1)], 1)], 1)], 1), a("v-row", { attrs: { "no-gutters": "" } }, [a("router-view", {
        staticStyle: { "margin-left": "50px" },
        scopedSlots: e._u([{
          key: "default", fn: function(e) {
            var t = e.Component;
            return [a("transition", { attrs: { name: "fade", mode: "out-in" } }, [a(t, { tag: "component" })], 1)];
          },
        }]),
      })], 1)], 1)], 1);
    }, _u = [], Cu = n["a"].extend({
      name: "Server", mounted: function() {
        this.getApplicationList(), this.healthcheck();
      }, computed: {
        getCurrentView: function() {
          return this.$store.state.currentView;
        },
      }, data: function() {
        return {
          tab: 0,
          currentScreen: "Reporting",
          items: [{ name: "Server", screen: "", icon: "mdi-server" }, {
            name: "Aip Servers",
            screen: "aipAdministration",
            icon: "mdi-server",
          }, { name: "Automation", screen: "automation", icon: "mdi-robot-industrial" }, {
            name: "Frameworks",
            screen: "frameworks",
            icon: "mdi-package-variant-closed",
          }, { name: "Parameters", screen: "parameters", icon: "mdi-cog" }],
          loadingApplication: !0,
          applicationName: "",
          applicationList: [],
          transitionName: "",
          onlineDatabase: !1,
        };
      }, methods: {
        changeApplication: function(e) {
          this.applicationName = e, this.$store.state.applicationName = e;
        }, getApplicationList: function() {
          var e = this;
          this.loadingApplication = !0, ue.getListApplications().then((function(t) {
            e.applicationList = t, 0 != t.length ? e.changeApplication(t[0]) : e.applicationName = "No Application found", e.loadingApplication = !1;
          }));
        }, simpleHealthCheck: function() {
          var e = this;
          V.healthCheck().then((function(t) {
            e.onlineDatabase = t;
          })).catch((function(t) {
            e.onlineDatabase = !1;
          }));
        }, healthcheck: function() {
          var e = this;
          V.healthCheck().then((function(t) {
            e.onlineDatabase = t;
          })).catch((function(t) {
            e.onlineDatabase = !1;
          })).finally((function() {
            setTimeout(function() {
              this.healthcheck();
            }.bind(e), 1e4);
          }));
        }, goTo: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t ? this.$router.replace("/" + e) : this.$router.replace("/administration/" + e);
        }, changeView: function(e) {
          this.$store.state.currentView = e, this.currentScreen = e;
        }, updateViewTab: function(e) {
          for (var t = 0; t < this.items.length; t++) this.items[t].screen === e && (this.tab = t);
        }, logout: function() {
          _.deleteProperties(), document.location.reload();
        },
      }, watch: {
        $route: function(e, t) {
          var a = e.path.split("/"), r = a[a.length - 1];
          this.updateViewTab(r);
          var n = e.path.split("/").length, i = t.path.split("/").length;
          this.transitionName = n < i ? "slide-right" : "slide-left";
        }, applicationName: function() {
          this.changeApplication(this.applicationName);
        }, tab: function() {
          this.$router.replace("/administration/" + this.items[this.tab].screen);
        }, getCurrentView: function(e) {
          for (var t = 0; t < this.items.length; t++) this.items[t].screen === e && (this.tab = t);
          console.log("Not found ".concat(e));
        },
      },
    }), Au = Cu, Ru = (a("c631"), a("fc40"), Object(u["a"])(Au, yu, _u, !1, null, "186c5c75", null)), Su = Ru.exports;
    M()(Ru, {
      VApp: D["a"],
      VBtn: P["a"],
      VDivider: $["a"],
      VIcon: H["a"],
      VList: Ae["a"],
      VListItem: Re["a"],
      VListItemContent: Se["a"],
      VListItemGroup: Ie["a"],
      VListItemIcon: Te["a"],
      VListItemSubtitle: Se["b"],
      VListItemTitle: Se["c"],
      VNavigationDrawer: Ee["a"],
      VRow: Q["a"],
      VSpacer: z["a"],
      VToolbar: Le["a"],
      VToolbarTitle: Ve["a"],
      VTooltip: Fe["a"],
    });
    var Iu = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("div", { attrs: { id: "app" } }, [a("v-container", { attrs: { id: "main-container" } }, [a("span", { attrs: { id: "text-span" } }, [a("h1", { staticClass: "white--text text-h1" }, [e._v("404 - Not Found")]), a("a", {
          staticClass: "white--text text-h3",
          attrs: { href: "/atlas/" },
        }, [e._v("Go back to Atlas")])])])], 1);
      }, Tu = [], Eu = m["a"].extend({ name: "NotFound" }), Lu = Eu,
      Vu = (a("66bc"), Object(u["a"])(Lu, Iu, Tu, !1, null, "0afcca53", null)), Fu = Vu.exports;
    M()(Vu, { VContainer: G["a"] }), n["a"].use(se["a"]), n["a"].component("Login", X), n["a"].component("License", oe), n["a"].component("Application", je), n["a"].component("Home", Ct), n["a"].component("ServerHome", Mt), n["a"].component("Server", Su);
    var Ou = [{ path: "", redirect: "/atlas/" }, {
        path: "/atlas",
        name: "Main",
        component: je,
        children: [{ path: "", component: Ct }, { path: "reports", component: Wt }, {
          path: "analysis",
          component: kr,
        }, { path: "tags", component: tn }, { path: "tuning", component: As }, {
          path: "highlight",
          component: Si,
        }, { path: "aip", component: ku }],
      }, {
        path: "/administration",
        name: "Administration",
        component: Su,
        children: [{ path: "", component: Mt }, { path: "automation", component: Vc }, {
          path: "frameworks",
          component: ai,
        }, { path: "aipAdministration", component: lu }, { path: "parameters", component: jl }],
      }, { path: "/login", name: "Login", component: X }, {
        path: "/license",
        name: "License",
        component: oe,
      }, {
        path: "/atlas/about", name: "About", component: function() {
          return a.e("about").then(a.bind(null, "f820"));
        },
      }, { path: "/api" }, { path: "*", name: "404", component: Fu }], ju = new se["a"]({ mode: "history", routes: Ou }),
      Mu = ju, Du = (a("5363"), a("f309"));
    n["a"].use(Du["a"]);
    var Pu = new Du["a"]({
      theme: {
        themes: {
          light: {
            deepblue: "#073B4C",
            lightblue: "#00779b",
            grey: "#363636",
            charcoal: "#425b66",
            deepcharcoal: "#31444c",
            persianGrey: "#2a9d8f",
            orange: "#e9c46a",
            brown: "#f4a261",
            sienna: "#e76f51",
          },
        },
      }, icons: { iconfont: "mdi" },
    });
    n["a"].use(i["a"]);
    var Nu = new i["a"].Store({
      state: {
        applicationName: "",
        currentView: {},
        daemonLevelState: !0,
        daemonModuleState: !0,
      },
    });
    n["a"].config.productionTip = !1, n["a"].use(i["a"]), console.log("Launching Atlas"), R.connect();
    var Bu, Uu = R.getInstance();
    Uu.testConnection().then(Object(r["a"])(regeneratorRuntime.mark((function e() {
      var t;
      return regeneratorRuntime.wrap((function(e) {
        while (1) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, te.getLicense();
          case 2:
            t = e.sent, t.status == Z.NOT_VALID ? (Bu = oe, Mu.replace("/license")) : Bu = p;
          case 4:
          case"end":
            return e.stop();
        }
      }), e);
    })))).catch((function(e) {
      console.warn("Connection to Neo4j failed.", e), Mu.replace("/login"), Bu = X;
    })).finally((function() {
      new n["a"]({
        router: Mu, vuetify: Pu, store: Nu, render: function(e) {
          return e(Bu);
        },
      }).$mount("#app");
    }));
  }, d0a0: function(e, t, a) {
    var r = a("b9f4");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("566d4028", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, d4a6: function(e, t, a) {
    var r = a("da95");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("c73447ba", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, d50d: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".bottom-right[data-v-3738dea4]{display:block;position:absolute;right:0;bottom:0}", ""]), e.exports = t;
  }, d6db: function(e, t, a) {
    "use strict";
    a("e2a2");
  }, d755: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, d9c8: function(e, t, a) {
    var r = a("6133");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("ca17cd2c", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, da41: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#artemis-viewer{min-height:100px;color:#000;background-color:#fff;border:2px inset #2a9d8f;border-radius:20px}", ""]), e.exports = t;
  }, da95: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "@-webkit-keyframes glowing{0%{box-shadow:0 0 -10px #8b0000}40%{box-shadow:0 0 20px #8b0000}60%{box-shadow:0 0 20px #8b0000}to{box-shadow:0 0 -10px #8b0000}}@keyframes glowing{0%{box-shadow:0 0 -10px #8b0000}40%{box-shadow:0 0 20px #8b0000}60%{box-shadow:0 0 20px #8b0000}to{box-shadow:0 0 -10px #8b0000}}.button-glow{-webkit-animation:glowing 2s infinite;animation:glowing 2s infinite}", ""]), e.exports = t;
  }, dc16: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#NotInstalledArtemis{min-width:100%;min-height:100%;position:absolute;top:0;right:0;border-radius:10px;background-color:rgba(0,0,0,.7)}#NotInstalledArtemis #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, dc4f: function(e, t, a) {
    var r = a("cb43");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1cd40c30", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, e062: function(e, t, a) {
    var r = a("0ba8");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("7987ba80", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, e2a2: function(e, t, a) {
    var r = a("2e17");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("7bebf460", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, eb5e: function(e, t, a) {
    var r = a("7551");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("56750d08", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, ec8c: function(e, t, a) {
    "use strict";
    a("e062");
  }, f24e: function(e, t, a) {
    var r = a("7b29");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("143569f8", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, f6ff: function(e, t, a) {
    "use strict";
    a("b12b");
  }, fb8a: function(e, t, a) {
    var r = a("9c85");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("42bc0bdc", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, fc40: function(e, t, a) {
    "use strict";
    a("b2de");
  }, fc47: function(e, t, a) {
    "use strict";
    a("c773");
  }, ff56: function(e, t, a) {
    "use strict";
    a("b7bb");
  },
});
//# sourceMappingURL=app.88b6e861.js.map