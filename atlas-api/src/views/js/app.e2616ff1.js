(function(e) {
  function t(t) {
    for (var r, i, s = t[0], c = t[1], l = t[2], u = 0, p = []; u < s.length; u++) i = s[u], Object.prototype.hasOwnProperty.call(n, i) && n[i] && p.push(n[i][0]), n[i] = 0;
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    d && d(t);
    while (p.length) p.shift()();
    return o.push.apply(o, l || []), a();
  }

  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], r = !0, i = 1; i < a.length; i++) {
        var c = a[i];
        0 !== n[c] && (r = !1);
      }
      r && (o.splice(t--, 1), e = s(s.s = a[0]));
    }
    return e;
  }

  var r = {}, n = { app: 0 }, o = [];

  function i(e) {
    return s.p + "js/" + ({ about: "about" }[e] || e) + "." + { about: "201c274a" }[e] + ".js";
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
      var o, c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = i(e);
      var l = new Error;
      o = function(t) {
        c.onerror = c.onload = null, clearTimeout(u);
        var a = n[e];
        if (0 !== a) {
          if (a) {
            var r = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src;
            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", l.name = "ChunkLoadError", l.type = r, l.request = o, a[1](l);
          }
          n[e] = void 0;
        }
      };
      var u = setTimeout((function() {
        o({ type: "timeout", target: c });
      }), 12e4);
      c.onerror = c.onload = o, document.head.appendChild(c);
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
  o.push([0, "chunk-vendors"]), a();
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
  }, "0ba8": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#NotInstalledArtemis{min-width:100%;min-height:100%;position:absolute;top:0;right:0;border-radius:10px;background-color:rgba(0,0,0,.7)}#NotInstalledArtemis #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, "154f": function(e, t, a) {
    "use strict";
    a("9f37");
  }, 1951: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".statistic-tile{height:250px;width:250px}", ""]), e.exports = t;
  }, "20ad": function(e, t, a) {
    "use strict";
    a("eb5e");
  }, "252f": function(e, t, a) {
    "use strict";
    a("6e39");
  }, "28c2": function(e, t, a) {
    "use strict";
    a("5ec4");
  }, "2aa6": function(e, t, a) {
    "use strict";
    a("b95c");
  }, 3155: function(e, t, a) {
    var r = a("57b8");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("c7e284e4", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "47f5": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".login-container{display:block;width:100%;position:absolute;top:0;left:0;background-color:rgba(0,0,0,.103);min-width:100vw;min-height:100vh}", ""]), e.exports = t;
  }, "4eb7": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, "507b": function(e, t, a) {
    var r = a("4eb7");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("0aa905fa", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "57b8": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, "#notInstalledArtemis{position:absolute;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.7)}#notInstalledArtemis #Message{display:block;color:#fff;text-align:center;position:absolute;top:40%;right:0;width:100%}", ""]), e.exports = t;
  }, "5ec4": function(e, t, a) {
    var r = a("f45b");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1792dd94", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "5f10": function(e, t, a) {
    "use strict";
    a("3155");
  }, 6133: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".frameworkListItem{cursor:pointer}.frameworkListItem .v-card__subtitle{padding-bottom:4px!important}#frameworkEditorZone{position:relative}#frameworkEditorZone #selectMessage{position:absolute;top:45%;left:50%;transform:translateX(-50%)}", ""]), e.exports = t;
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
  }, "76c7": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".screen-title{font-size:40px;margin-top:6px;font-weight:400}.floating-application{position:absolute;bottom:10px;right:40px}.side-bar{min-width:64px}.custom-container{margin-top:10px;min-width:100%!important;padding:0!important;padding-left:75px!important;max-width:100%!important}.main-application{position:relative}.top-toolbar{min-height:64px}.activeNavigationElement{border-left:3px solid #fff}", ""]), e.exports = t;
  }, "7e9e": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".modernization-stepper{width:100%}.v-tab--active{background-color:rgba(90,114,124,.6509803921568628)}.v-tabs-slider-wrapper{border-bottom:6px solid #2a9d8f}", ""]), e.exports = t;
  }, "7f1f": function(e, t, a) {
    var r = a("47f5");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("5487a99a", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, "97a1": function(e, t, a) {
    "use strict";
    a("7f1f");
  }, "9b89": function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".color-ruler{display:flex;flex-direction:row;justify-content:space-between;border-radius:29px;border:2px solid #545454;border-right:1px solid #545454;border-left:1px #545454;height:30px;width:300px;background:#e76f51;background:linear-gradient(90deg,#e76f51,#f4a261 33%,#e9c46a 66%,#2a9d8f)}.color-ruler .round{content:\"\";display:table-cell;transform:translateY(-2px);line-height:28px;font-size:12px;border-radius:20px;text-align:center;vertical-align:middle;height:29px;width:29px;background-color:#fff}", ""]), e.exports = t;
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
  }, ad21: function(e, t, a) {
    "use strict";
    a("f015");
  }, ae05: function(e, t, a) {
    var r = a("dc16");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("a8f7401c", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, b112: function(e, t, a) {
    "use strict";
    a("d4a6");
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
  }, bccb: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".card-outter{position:relative;padding-bottom:50px}.card-actions{position:absolute;bottom:0}", ""]), e.exports = t;
  }, c00d: function(e, t, a) {
    var r = a("bccb");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("1b3df0aa", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, c773: function(e, t, a) {
    var r = a("1951");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("26e5aa3c", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, ca8a: function(e, t, a) {
    "use strict";
    a("a4da");
  }, cd49: function(e, t, a) {
    "use strict";
    a.r(t);
    a("d3b7"), a("ac1f"), a("5319"), a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var r = a("a026"), n = a("2f62"), o = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("v-app", { staticClass: "main-application" }, [a("v-navigation-drawer", {
          staticClass: "side-bar",
          attrs: { shaped: "", permanent: "", dark: "", "expand-on-hover": "", fixed: "" },
          scopedSlots: e._u([{
            key: "append", fn: function() {
              return [a("div", { staticClass: "pa-2" }, [a("v-list", [a("v-list-item", {
                on: {
                  click: function(t) {
                    return e.changeView("Administration");
                  },
                },
              }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-cog")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Administration")])], 1)], 1), a("v-tooltip", {
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
                    }, "v-list-item", n, !1), r && !e.onlineDatabase), [a("v-list-item-icon", [e.onlineDatabase ? a("v-icon", { attrs: { color: "green" } }, [e._v("mdi-database-check")]) : e._e(), e.onlineDatabase ? e._e() : a("v-icon", { attrs: { color: "red" } }, [e._v("mdi-database-remove")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Database " + e._s(e.onlineDatabase ? "online" : "offline"))])], 1)], 1)];
                  },
                }]),
              }, [a("span", [e._v("Lost connection to the database")])]), a("v-list-item", {
                attrs: {
                  link: "",
                  href: "https://github.com/Makunda/Demeter/wiki",
                },
              }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-information-outline")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Documentation")])], 1)], 1), a("v-list-item", {
                attrs: { link: "" },
                on: {
                  click: function(t) {
                    return e.logout();
                  },
                },
              }, [a("v-list-item-icon", [a("v-icon", [e._v("mdi-exit-to-app")])], 1), a("v-list-item-content", [a("v-list-item-title", [e._v("Logout")])], 1)], 1)], 1)], 1)];
            }, proxy: !0,
          }]),
        }, [a("v-list", [a("v-list-item", {
          staticClass: "ml-1",
          attrs: { link: "" },
        }, [a("v-list-item-content", { staticClass: "mx-auto" }, [a("v-list-item-title", { staticClass: "title" }, [a("v-icon", {
          staticClass: "mr-2",
          attrs: { color: "#438FDA" },
        }, [e._v("mdi-globe-model")]), e._v(" Atlas ")], 1), a("v-list-item-subtitle", [e._v("Intelligence for CAST Imaging")])], 1)], 1)], 1), a("v-divider"), a("v-list", {
          attrs: {
            nav: "",
            dense: "",
          },
        }, [a("v-list-item-group", {
          attrs: { mandatory: "", "active-class": "activeNavigationElement" },
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
            attrs: { color: e.tab == r ? "#ffffff" : "#a5a4a4" },
          }, [e._v(e._s(t.icon))])], 1), a("v-list-item-title", {
            staticClass: "text-uppercase",
            attrs: { color: e.tab === r ? "#ffffff" : "#a5a4a4" },
          }, [e._v(e._s(t.name))])], 1);
        })), 1)], 1)], 1), a("v-row", { staticStyle: { "max-height": "80px" } }, [a("v-toolbar", {
          staticClass: "ml-15 text--white top-toolbar",
          attrs: { dark: "", color: "charcoal", "min-width": "50px", height: "80px" },
        }, [a("v-toolbar-title", { staticClass: "ml-8 screen-title" }, [e._v(e._s(e.items[e.tab].name) + " ")]), a("v-spacer"), a("v-toolbar-title", { staticClass: "mt-2" }, [e._v("Application selection :")]), a("v-autocomplete", {
          staticClass: "mx-4 mt-2",
          attrs: {
            loading: e.loadingApplication,
            items: e.applicationList,
            "cache-items": "",
            flat: "",
            "hide-no-data": "",
            "hide-details": "",
            label: "Pick an application",
            "solo-inverted": "",
          },
          model: {
            value: e.applicationName, callback: function(t) {
              e.applicationName = t;
            }, expression: "applicationName",
          },
        })], 1)], 1), a("v-row", { attrs: { "no-gutters": "" } }, [a(e.currentScreen, {
          tag: "component",
          staticClass: "custom-container",
          model: {
            value: e.applicationName, callback: function(t) {
              e.applicationName = t;
            }, expression: "applicationName",
          },
        })], 1)], 1);
      }, i = [], s = (a("b0c0"), a("96cf"), a("1da1")), c = a("d4ec"), l = a("bee2"), u = a("bc3a"), d = a.n(u),
      p = function() {
        function e() {
          Object(c["a"])(this, e);
        }

        return Object(l["a"])(e, null, [{
          key: "getUrl", value: function() {
            return "http://localhost:3000";
          },
        }]), e;
      }();

    function h(e) {
      return 200 == e || 304 == e;
    }

    var v = a("2b27"), m = a.n(v);
    r["a"].use(m.a), r["a"].$cookies.config("30d", "/");
    var f, g = "olympus", b = function e() {
      Object(c["a"])(this, e), this.refreshRate = 500, this.configurationName = "Configuration_1", this.neo4jUri = "neo4j://localhost:7687", this.token = {};
    }, x = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "setAuthToken", value: function(e) {
          f.token = e, console.log("Token was set");
        },
      }, {
        key: "getAuthToken", value: function() {
          return f.token;
        },
      }, {
        key: "getProperties", value: function() {
          var e = sessionStorage.getItem(g);
          return null != e ? JSON.parse(e) : new b;
        },
      }, {
        key: "saveProperties", value: function(e) {
          console.log("Properties Saved"), sessionStorage.setItem(g, JSON.stringify(e));
        },
      }, {
        key: "deleteProperties", value: function() {
          sessionStorage.clear();
        },
      }]), e;
    }(), w = a("4398"), k = a.n(w), y = function() {
      function e() {
        Object(c["a"])(this, e);
        var t = x.getProperties();
        this.uri = t.neo4jUri;
        var a = t.token;
        try {
          this.driver = k.a.driver(this.uri, a);
        } catch (r) {
          throw new Error("Cannot connect to the remote Neo4j database o ".concat(this.uri));
        }
      }

      return Object(l["a"])(e, [{
        key: "execute", value: function() {
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, a) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
            var t = x.getProperties();
            if (void 0 == t.token) throw console.log("You must log with credentials"), new Error("No credentials were provided for the connection. Aborting...");
            return e.INSTANCE = new e, !0;
          } catch (a) {
            return !1;
          }
        },
      }, {
        key: "connectWithCredentials", value: function(t) {
          try {
            var a = x.getProperties(), r = k.a.auth.basic(t.user, t.password);
            return a.token = r, x.saveProperties(a), e.INSTANCE = new e, !0;
          } catch (n) {
            return !1;
          }
        },
      }]), e;
    }(), _ = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getListApplications", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/imaging/applications/all", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve application list. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/applications/insights/" + a, t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
      }]), e;
    }();
    _.API_BASE_URL = p.getUrl(), _.neo4jal = y.getInstance();
    var C = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "charcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, A = [], I = function() {
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
              var n = r.active, o = r.toggle;
              return [a("v-btn", {
                staticClass: "mx-2",
                attrs: { "input-value": n, "active-class": "orange white--text", depressed: "", rounded: "" },
                on: {
                  click: o, change: function(t) {
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
    }, R = [], S = (a("99af"), a("4160"), a("c975"), a("159b"), a("a9e3"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "executeGrouping", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/group"), t.prev = 1, t.next = 4, d.a.post(r);
                case 4:
                  if (n = t.sent, !h(n.status)) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Number(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/candidates"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, !h(n.status)) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/all"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, !h(n.status)) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/grouped"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, !h(n.status)) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  throw new Error("Failed to retrieve grouped level. Status (".concat(n.status, ")"));
                case 12:
                  t.next = 18;
                  break;
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve grouped levels."), t.t0), t.t0;
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
        key: "undoGroupedLevel5", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/undo"), t.prev = 1, t.next = 4, d.a.post(n, { level: r });
                case 4:
                  if (o = t.sent, !h(o.status)) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", Boolean(i.data));
                case 10:
                  throw new Error("Failed to undo a grouped level. Status (".concat(o.status, ")"));
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
        key: "renameLevel", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/demeter/levels/".concat(a, "/rename"), t.prev = 1, t.next = 4, d.a.post(o, {
                    level: r,
                    newLevel: n,
                  });
                case 4:
                  if (i = t.sent, !h(i.status)) {
                    t.next = 10;
                    break;
                  }
                  return s = i.data, t.abrupt("return", Boolean(s.data));
                case 10:
                  throw new Error("Failed to rename a grouped level. Status (".concat(i.status, ")"));
                case 11:
                  t.next = 17;
                  break;
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(o, ". Failed to rename a grouped level."), t.t0), t.t0;
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
    }());
    S.API_BASE_URL = p.getUrl();
    var T = r["a"].component("DemeterLevelsTile", {
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
            this.loadingGroups = !1, S.getDemeterLevels(this.appName).then((function(t) {
              e.loadingGroups = !0, e.demeterGroups = t, console.log("".concat(t.length, " groups found in application ").concat(e.appName, "."));
            })).catch((function(t) {
              e.loadingGroups = !1, console.error("An error happened while querying Demeter groups", t);
            }));
          }, undoGroup: function(e) {
            var t = this;
            this.loadingUndoGroup = !0, S.undoGroupedLevel5(this.appName, e).then((function(a) {
              a ? t.getDemeterGroups() : console.error("Failed to undo the grouping for level ".concat(e, " on application ").concat(t.appName, "."));
            })).catch((function(a) {
              console.error("Failed to undo group with name ".concat(e, " on application ").concat(t.appName, "."), a);
            })).finally((function() {
              t.loadingUndoGroup = !1;
            }));
          }, rename: function(e, t) {
            var a = this;
            this.loadingRename = !0, e != t && S.renameLevel(this.appName, e, t).then((function(e) {
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
      }), F = T, O = a("2877"), E = a("6544"), V = a.n(E), j = a("8336"), N = a("b0af"), L = a("99d9"), P = a("a523"),
      D = a("169a"), M = a("ce7e"), U = a("0fd9"), B = a("8dd9"), G = a("7efd"), $ = a("9dbe"), q = a("2fa4"),
      H = a("8654"), W = Object(O["a"])(F, I, R, !1, null, null, null), Q = W.exports;
    V()(W, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VRow: U["a"],
      VSheet: B["a"],
      VSlideGroup: G["b"],
      VSlideItem: $["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var z = function() {
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
              var n = r.active, o = r.toggle;
              return [a("v-btn", {
                staticClass: "mx-2",
                attrs: { "input-value": n, "active-class": "brown white--text", depressed: "", rounded: "" },
                on: {
                  click: o, change: function(t) {
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
    }, Y = [], J = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getDemeterModules", value: function() {
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n, o, i, s, c, l;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return a = "MATCH (app:Application) WHERE app.Name='".concat(t, "' \n      WITH [app.Name] as appName  \n      MATCH (l:Module:").concat(t, ") WHERE l.AipId=\"-1\" OR l.AipId=\"9999999\" \n      RETURN ID(l) as id, l.Name as groupName, l.Count as numObjects ;"), e.next = 3, this.neo4jal.execute(a);
                case 3:
                  for (r = e.sent, n = [], o = 0; o < r.records.length; o++) i = r.records[o], s = Object(w["int"])(i.get("id")).toNumber(), c = i.get("groupName"), l = i.get("numObjects"), n.push({
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
    J.neo4jal = y.getInstance(), J.API_BASE_URL = p.getUrl(), J.tagPrefix = "$l_";
    var X = r["a"].component("DemeterModuleTile", {
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
          this.loadingModule = !1, J.getDemeterModules(this.appName).then((function(t) {
            e.loadingModule = !0, e.demeterModule = t, console.log("".concat(t.length, " groups found in application ").concat(e.appName, "."));
          })).catch((function(t) {
            e.loadingModule = !1, console.error("An error happened while querying Demeter groups", t);
          }));
        }, rename: function(e, t) {
          var a = this;
          this.loadingRename = !0, e != t && S.renameLevel(this.appName, e, t).then((function(e) {
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
    }), Z = X, K = Object(O["a"])(Z, z, Y, !1, null, null, null), ee = K.exports;
    V()(K, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VContainer: P["a"],
      VRow: U["a"],
      VSheet: B["a"],
      VSlideGroup: G["b"],
      VSlideItem: $["a"],
    });
    var te = function() {
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
    }, ae = [], re = (a("d81d"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getTag", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/tags/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  return n = t.sent, 200 == n.status ? (i = n.data, o = String(i.data)) : console.warn("Failed to retrieve version. Status (".concat(n.status, ")")), t.abrupt("return", o);
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
    re.API_BASE_URL = p.getUrl();
    var ne = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getConfigurationActions", value: function() {
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n = this;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, re.getLevelTag();
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
                    request: "MATCH (n:ObjectProperty) \n          WITH MAX(n.Id)+1 as maxId \n          MERGE (oc:ObjectProperty { Description: \"Prefix_List of transactions going through the object:\", Id: maxId }) \n          WITH oc \n          MATCH (o:Object:%%CONTEXT_LABEL%%)<-[:Contains]-(tx:TransactionUtils) \n          WITH oc, o, COLLECT(DISTINCT tx.Name) as transactionList \n          WITH oc, o, REDUCE(s = \"\", n IN transactionList | s + ', ' + n) as stringTransactions \n          MERGE (o)-[:Property { value: RIGHT(stringTransactions,SIZE(stringTransactions)-2) }]->(oc)",
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n = this;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, re.getLevelTag();
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
    ne.neo4jal = y.getInstance(), ne.contextAnchor = "%%CONTEXT_LABEL%%";
    var oe = r["a"].extend({
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
          this.loadReplication = !0, ne.replicateModuleView(this.appName).catch((function(e) {
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
    }), ie = oe, se = a("62ad"), ce = Object(O["a"])(ie, te, ae, !1, null, null, null), le = ce.exports;
    V()(ce, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VDivider: M["a"],
      VRow: U["a"],
    });
    var ue = function() {
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
          label: "URI of the Neo4j bolt interfaces",
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
    }, de = [], pe = a("60a3"), he = pe["a"].extend({
      name: "DemeterParameters", computed: {
        formHasErrors: function() {
          return !1;
        },
      }, data: function() {
        return { show1: !1, properties: x.getProperties(), credentials: {} };
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
          return x.saveProperties(this.properties), 0 != this.credentials.user.length && 0 != this.credentials.password.length && y.connectWithCredentials(this.credentials), window.location.reload(), !0;
        }, cancel: function() {
          this.properties = x.getProperties();
        },
      },
    }), ve = he, me = Object(O["a"])(ve, ue, de, !1, null, null, null), fe = me.exports;
    V()(me, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VDivider: M["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var ge = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-card", {
        attrs: {
          width: "100%",
          "min-height": "400px",
        },
      }, [a("v-card-title", [e._v(" Configuration of the Artemis extensions ")]), a("v-card-text", [a("v-container", [a("v-row", { staticClass: "my-3" }, [a("PythiaParameters")], 1), a("v-divider"), a("v-row", { staticClass: "my-3" }, [a("ArtemisParametersViewer")], 1)], 1)], 1)], 1)], 1);
    }, be = [], xe = function() {
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
    }, we = [], ke = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getLocalLastUpdate", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/local/lastUpdate", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/lastUpdate", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/forecast/pull", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/pythia/artemis/remote/pull", t.prev = 1, t.next = 4, d.a.get(a);
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
    ke.API_BASE_URL = p.getUrl();
    var ye = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getPythiaURL", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, d.a.post(r, { url: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", String(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/pythia/uri", t.prev = 1, t.next = 4, d.a.post(r, { token: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Boolean(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/pythia/token", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/artemis/workspace", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/artemis/workspace", t.prev = 1, t.next = 4, d.a.post(r, { workspace: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", String(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/demeter/workspace", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/artemis/internalMode", t.prev = 1, t.next = 4, d.a.post(r, { value: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Boolean(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/configuration/parameters/artemis/internalMode", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/configuration/parameters/demeter/workspace", t.prev = 1, t.next = 4, d.a.post(r, { workspace: a });
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", String(o.data));
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
    ye.API_BASE_URL = p.getUrl();
    var _e = r["a"].extend({
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
          ke.getLocalLastUpdate().then((function(t) {
            e.lastLocalTimestamp = t, e.lastUpdateLocal = new Date(t).toDateString();
          })).catch((function(t) {
            console.log("Failed to retieve the last local update", t), e.lastUpdatePythia = "Unkown - Make sure you installed the latest version of Artemis ";
          }));
        }, getRemoteLastUpdate: function() {
          var e = this;
          ke.getRemoteLastUpdate().then((function(t) {
            e.lastRemoteTimstamp = t, e.lastUpdatePythia = new Date(t).toDateString();
          })).catch((function(t) {
            console.error("Failed to retieve the last local update", t), e.lastUpdatePythia = "Unkown - Please check the configuraiton of Pythia ";
          }));
        }, getNumPull: function() {
          var e = this;
          ke.getPullForecast().then((function(t) {
            e.framewokToPull = t;
          })).catch((function(e) {
            console.log("Failed to pull fremwork", e);
          }));
        }, getURIPythia: function() {
          var e = this;
          ye.getPythiaURL().then((function(t) {
            e.pythiaURI = t, e.errorConnectionPythia = "" == t ? "No URI was detected in the configuration" : "", console.log("Local URI ", t);
          })).catch((function(t) {
            console.error("Failed to retrieve the URI of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, getTokenPythia: function() {
          var e = this;
          ye.getPythiaTokenPresence().then((function(t) {
            e.pythiaToken = 1 == t ? e.placeHolderToken : "";
          })).catch((function(t) {
            console.error("Failed to retrieve the Tokean of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, setTokenPythia: function() {
          var e = this;
          ye.setPythiaToken(this.pythiaToken).then((function(t) {
            e.pythiaToken = e.placeHolderToken, console.log("Token was successfully changed."), e.errorConnectionPythia = 0 == t ? "No Token was detected in the configuration" : "";
          })).catch((function(t) {
            console.error("Failed to change the password of Pythia", t), e.errorConnectionPythia = t;
          }));
        }, updateConnection: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (e.connectionLoading = !0, e.pythiaToken == e.placeHolderToken) {
                    t.next = 4;
                    break;
                  }
                  return t.next = 4, new Promise((function(t, a) {
                    ye.setPythiaToken(e.pythiaToken).then((function(a) {
                      e.pythiaToken = e.placeHolderToken, console.log("Token was successfully changed."), e.errorConnectionPythia = 0 == a ? "No Token was detected in the configuration" : "", t();
                    })).catch((function(t) {
                      console.error("Failed to change the password of Pythia", t), e.errorConnectionPythia = t, a();
                    }));
                  }));
                case 4:
                  return t.next = 6, new Promise((function(t, a) {
                    ye.setPythiaURL(e.pythiaURI).then((function(e) {
                      console.log("Pythia URI was changed to ", e), t();
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
    }), Ce = _e, Ae = a("132d"), Ie = Object(O["a"])(Ce, xe, we, !1, null, null, null), Re = Ie.exports;
    V()(Ie, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var Se = function() {
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
    }, Te = [], Fe = (a("1276"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getSupportedLanguages", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/languages", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data), console.info("".concat(n.length, " languages were retrieved. ").concat(n))) : console.warn("Failed to retrieve languages. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e() {
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/utils/import/frameworks", t.prev = 1, n = new FormData, n.append("file", a), t.next = 6, d.a.post(r, n, { headers: { "Content-Type": "multipart/form-data" } });
                case 6:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  return i = o.data, t.abrupt("return", String(i.data));
                case 12:
                  throw new Error("Failed to perform the extraction of selected artifacts. Status (".concat(o.status, "). Message: ").concat(o.data));
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
    }());
    Fe.API_BASE_URL = p.getUrl(), Fe.neo4jal = y.getInstance();
    var Oe = r["a"].extend({
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
          ye.getArtemisWorkspace().then((function(t) {
            e.artemisWorkspace = t;
          })).catch((function(e) {
            console.error("Failed to get teh Artemis workspace", e);
          }));
        }, updateWorkspace: function() {
          var e = this;
          this.updatingWorkspace = !0, ye.setArtemisWorkspace(this.artemisWorkspace).then(function() {
            var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
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
                  return t.prev = 4, t.next = 7, Fe.triggerImport(e.file);
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
    }), Ee = Oe, Ve = a("cc20"), je = a("23a7"), Ne = Object(O["a"])(Ee, Se, Te, !1, null, null, null), Le = Ne.exports;
    V()(Ne, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VChip: Ve["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VFileInput: je["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var Pe = r["a"].extend({
      name: "ArtemisParameters",
      components: { PythiaParameters: Re, ArtemisParametersViewer: Le },
      data: function() {
        return {};
      },
    }), De = Pe, Me = Object(O["a"])(De, ge, be, !1, null, null, null), Ue = Me.exports;
    V()(Me, {
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VDivider: M["a"],
      VRow: U["a"],
    });
    var Be = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [e._v(" Global parameters ")]), a("v-card-subtitle", [e._v(" Modify the parameters of the Atlas platform ")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h6" }, [e._v("Path to Imaging Installation folder ")]), a("v-card-text", [a("v-container", { staticClass: "pa-3" }, [a("v-row", [a("p", { staticClass: "text-subtitle-1 pt-3" }, [e._v(" Auto detect Imaging installation path : ")]), a("v-spacer"), a("v-btn", {
        staticClass: "ma-2",
        attrs: { color: "persianGrey", dark: "" },
      }, [e._v(" Auto Detect ")])], 1), a("v-row", { staticClass: "mt-7" }, [a("p", { staticClass: "text-decoration-underline text-subtitle-1" }, [e._v(" Manual input of the Imaging path : ")])]), a("v-row", { attrs: { "px-3": "" } }, [a("v-text-field", {
        attrs: {
          label: "Main input",
          rules: e.rules,
          "hide-details": "auto",
        },
      })], 1)], 1)], 1)], 1)], 1), a("v-row", { staticClass: "mt-8" }, [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", { staticClass: "text-h6" }, [e._v("Status of the extensions")]), a("v-card-text", [a("v-row")], 1)], 1)], 1)], 1)], 1)], 1);
    }, Ge = [], $e = pe["a"].extend({
      name: "GlobalParameters", computed: {}, data: function() {
        return {};
      }, methods: {},
    }), qe = $e, He = Object(O["a"])(qe, Be, Ge, !1, null, null, null), We = He.exports;
    V()(He, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var Qe = r["a"].extend({
      name: "Administration",
      components: {
        DemeterLevelsTile: Q,
        GlobalOperations: le,
        DemeterModuleTile: ee,
        DemeterParameters: fe,
        GlobalParameters: We,
        ArtemisParameters: Ue,
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
          }, { view: "GroupingStep", name: "Grouping", icon: "mdi-group" }],
        };
      },
    }), ze = Qe, Ye = a("71a3"), Je = a("fe57"), Xe = Object(O["a"])(ze, C, A, !1, null, null, null), Ze = Xe.exports;
    V()(Xe, { VContainer: P["a"], VIcon: Ae["a"], VRow: U["a"], VTab: Ye["a"], VTabs: Je["a"] });
    var Ke = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "charcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, et = [], tt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [e._v(" Review the level of the application. "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-card", [a("v-card-title", { staticClass: "charcoal white--text headline" }, [e._v(" Levels viewer ")]), a("v-row", {
        staticClass: "pa-4",
        attrs: { justify: "space-between" },
      }, [a("v-col", { attrs: { cols: "5" } }, [a("v-treeview", {
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
              class: "mt-4 ml-3 " + e.getLevelColor(r.level),
              attrs: { small: "", "text-color": "white" },
            }, [a("v-avatar", {
              class: e.getLevelColor(r.level) + " darken-4",
              attrs: { left: "" },
            }, [e._v(" " + e._s(r.level) + " ")]), e._v(" Level ")], 1)], 1)], 1)];
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
        class: e.getLevelColor(e.selected.level),
        attrs: { "text-color": "white" },
      }, [a("v-avatar", {
        class: e.getLevelColor(e.selected.level) + " darken-4",
        attrs: { left: "" },
      }, [e._v(" " + e._s(e.selected.level) + " ")]), e._v(" Level ")], 1)], 1), a("v-divider"), a("v-row", {
        staticClass: "text-left",
        attrs: { tag: "v-card-text" },
      }, [a("v-col", {
        staticClass: "text-right mr-4 mb-2",
        attrs: { tag: "strong", cols: "5" },
      }, [e._v(" Name: ")]), a("v-col", [e._v(e._s(e.selected.name))]), a("v-col", {
        staticClass: "text-right mr-4 mb-2",
        attrs: { tag: "strong", cols: "5" },
      }, [e._v(" FullName: ")]), a("v-col", [e._v(e._s(e.selected.fullName))]), a("v-col", {
        staticClass: "text-right mr-4 mb-2",
        attrs: { tag: "strong", cols: "5" },
      }, [e._v(" Count: ")]), a("v-col", [e._v(e._s(e.selected.count))])], 1), e.selected.level < 3 ? a("v-row", [a("i", [e._v("Unfortunately. The modification of level above the level 3 is not possible for the moment.")])]) : e._e(), e.selected.level >= 3 ? a("v-row", { staticClass: "mt-6 justify-center" }, [a("div", { staticClass: "text-center" }, [a("v-btn", {
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
        staticClass: "mx-3",
        attrs: { rounded: "", small: "", color: "primary", dark: "", disabled: e.selected.level < 3 },
        on: {
          click: function(t) {
            return e.editLevel(e.selected);
          },
        },
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-pencil ")]), e._v(" Modify level ")], 1), a("v-btn", {
        attrs: {
          rounded: "",
          small: "",
          color: "warning",
          disabled: e.selected.count > 0,
        },
      }, [e._v(" Delete level ")])], 1)]) : e._e()], 1) : a("div", {
        staticClass: "title grey--text text--lighten-1 font-weight-light",
        staticStyle: { "align-self": "center" },
      }, [e._v(" Select a Level ")])], 1)], 1)], 1)], 1)], 1)], 1), a("v-dialog", {
        attrs: {
          persistent: "",
          "max-width": "600px",
        }, model: {
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
      }, [e._v(" " + e._s(e.textSnackBar) + " ")])], 1);
    }, at = [], rt = (a("ddb0"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getRootLevels", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/levels/roots/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
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
        key: "fetchChildren", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/attached/".concat(a, "/").concat(r._id), t.prev = 1, t.next = 4, d.a.get(n);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  if (i = o.data, !Array.isArray(i.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", i.data);
                case 9:
                  t.next = 12;
                  break;
                case 11:
                  console.warn("Failed to retrieve attached levels. Status (".concat(o.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/parent/".concat(a, "/").concat(r._id), t.prev = 1, t.next = 4, d.a.get(n);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", i.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/imaging/levels/create/".concat(a), t.prev = 1, i = n, i.parentId = r, t.next = 6, d.a.post(o, i);
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
                  throw t.prev = 15, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(o, ". Failed to create new levels."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/levels/update/".concat(a, "/").concat(r._id), t.prev = 1, o = r, t.next = 5, d.a.put(n, o);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  return s = i.data, t.abrupt("return", s.data);
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
      }]), e;
    }());
    rt.API_BASE_URL = p.getUrl();
    var nt = r["a"].extend({
        name: "LevelExplorer", data: function() {
          return {
            tree: [],
            active: [],
            open: [],
            levels: [],
            selected: null,
            loadingRoots: !1,
            snackbarInfo: !1,
            textSnackBar: "",
            colorPicker: {},
            editionType: "",
            dialog: !1,
            parentItem: null,
            editItem: {},
          };
        }, computed: {
          getApplicationName: function() {
            return this.$store.state.applicationName;
          },
        }, mounted: function() {
          this.application = this.$store.state.applicationName, this.refresh();
        }, methods: {
          editLevel: function(e) {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark((function a() {
              return regeneratorRuntime.wrap((function(a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, rt.fetchParent(t.application, e);
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
            this.editItem.fullName = (this.parentItem ? this.parentItem.fullName + "##" : "") + this.editItem.name, this.editItem.shade = (this.parentItem ? this.parentItem.shade + "##" : "") + this.editItem.color, -1 != this.editItem._id ? rt.updateLevel(this.application, this.editItem).then((function(t) {
              e.snackbarInfo = !0, e.textSnackBar = "Successfully updated level.";
            })).catch((function(t) {
              console.error("Failed to update the level : ", t), e.snackbarInfo = !0, e.textSnackBar = "Failed to update the level : " + t;
            })).finally((function() {
              e.editItem = {}, e.parentItem = {}, e.dialog = !1, e.refresh();
            })) : rt.createLevel(this.application, this.parentItem._id, this.editItem).then((function(t) {
              e.snackbarInfo = !0, e.textSnackBar = "Creation of level is a success.";
            })).catch((function(t) {
              console.error("Failed to create the level : ", t), e.snackbarInfo = !0, e.textSnackBar = "Failed to create the level : " + t;
            })).finally((function() {
              e.editItem = {}, e.parentItem = {}, e.dialog = !1, e.refresh();
            }));
          }, closeEditDialog: function() {
            this.editItem = {}, this.dialog = !1;
          }, focusLevel: function(e) {
            this.selected = e;
          }, getLevelColor: function(e) {
            switch (e) {
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
          }, getRootLevels: function() {
            var e = this;
            this.loadingRoots = !0, rt.getRootLevels(this.application).then(function() {
              var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      e.levels = [], t.t0 = regeneratorRuntime.keys(a);
                    case 2:
                      if ((t.t1 = t.t0()).done) {
                        t.next = 11;
                        break;
                      }
                      return r = t.t1.value, t.t2 = e.levels, t.next = 7, e.getChildren(a[r]);
                    case 7:
                      t.t3 = t.sent, t.t2.push.call(t.t2, t.t3), t.next = 2;
                      break;
                    case 11:
                    case"end":
                      return t.stop();
                  }
                }), t);
              })));
              return function(e) {
                return t.apply(this, arguments);
              };
            }()).catch((function(t) {
              console.error("Failed to retrieve root levels of the application.", t), e.snackbarInfo = !0, e.textSnackBar = t;
            })).finally((function() {
              e.loadingRoots = !1;
            }));
          }, getChildren: function(e) {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark((function a() {
              var r;
              return regeneratorRuntime.wrap((function(a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, rt.fetchChildren(t.application, e);
                  case 2:
                    e.children = a.sent, a.t0 = regeneratorRuntime.keys(e.children);
                  case 4:
                    if ((a.t1 = a.t0()).done) {
                      a.next = 11;
                      break;
                    }
                    return r = a.t1.value, a.next = 8, t.getChildren(e.children[r]);
                  case 8:
                    e.children[r] = a.sent, a.next = 4;
                    break;
                  case 11:
                    return a.abrupt("return", e);
                  case 12:
                  case"end":
                    return a.stop();
                }
              }), a);
            })))();
          }, refresh: function() {
            this.selected = null, this.getRootLevels();
          },
        }, watch: {
          getApplicationName: function(e) {
            this.application = e, this.refresh();
          },
        },
      }), ot = nt, it = a("8212"), st = a("03a4"), ct = a("0789"), lt = a("2db4"), ut = a("a844"), dt = a("eb2a"),
      pt = Object(O["a"])(ot, tt, at, !1, null, null, null), ht = pt.exports;
    V()(pt, {
      VAvatar: it["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VChip: Ve["a"],
      VCol: se["a"],
      VColorPicker: st["a"],
      VContainer: P["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VScrollYTransition: ct["g"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
      VTextarea: ut["a"],
      VTreeview: dt["a"],
    });
    var vt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", [a("v-card-title", [e._v(" Review the transactions in the " + e._s(e.application) + " application. "), a("v-spacer"), a("v-btn", {
        staticClass: "mr-5",
        attrs: { icon: "", color: "green" },
        on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "ma-4",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Power actions ")]), a("v-card-subtitle"), a("v-card-text", [a("v-container", [a("v-row", [a("v-card", {
        staticClass: "mr-2",
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
      }, [a("p", [e._v("Mask the transactions .")])])], 1)], 1), a("v-card", { attrs: { "max-width": "344" } }, [a("v-card-text", [a("div", [e._v("Reset transactions")]), a("div", { staticClass: "text--primary" }, [e._v(" Unmask all the transactions ( Reset ) ")])]), a("v-card-actions", [a("v-btn", {
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
      }, [a("v-row", { staticClass: "mx-3" }, [a("h3", [e._v("Search by technology")])]), a("v-row", { staticClass: "mx-3" }, [a("v-text-field", {
        attrs: { label: "Technology" },
        model: {
          value: e.technologySearch, callback: function(t) {
            e.technologySearch = t;
          }, expression: "technologySearch",
        },
      })], 1)], 1)], 1), a("v-row", { staticClass: "mt-6 mb-1" }, [a("v-spacer"), a("v-btn", {
        staticClass: "mr-3",
        attrs: { depressed: "", color: "grey", dark: "" },
        on: {
          click: function(t) {
            return e.transactionApiCall();
          },
        },
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
        staticClass: "elevation-1",
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
          key: "item.actions", fn: function(t) {
            var r = t.item;
            return [a("v-icon", {
              staticClass: "mr-2", attrs: { small: "" }, on: {
                click: function(t) {
                  return e.maskTransaction(r);
                },
              },
            }, [e._v(" mdi-eye-off ")])];
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
      })], 1)], 1)], 1)], 1)], 1)], 1);
    }, mt = [], ft = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "unMaskAllTransaction", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/unmask/all/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Number(o.data));
                case 10:
                  throw new Error("Failed to unmask all transactions. Status (".concat(n.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/number/unmasked/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Number(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/insights/unmasked/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/number/masked/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Number(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n, o, i) {
            var s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return s = e.API_BASE_URL + "/api/imaging/transactions/batch/masked/".concat(a), t.prev = 1, c = {
                    start: r,
                    end: n,
                    sort: o,
                    sortDesc: i,
                  }, t.next = 5, d.a.post(s, c);
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
                  throw new Error("Failed to a batch of masked transactions. Status (".concat(l.status, ")"));
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

          function a(e, a, r, n, o) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getBatchTransaction", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n, o, i, s) {
            var c, l, u, p;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return c = e.API_BASE_URL + "/api/imaging/transactions/batch/unmasked/".concat(a), t.prev = 1, l = {
                    start: r,
                    end: n,
                    sort: o,
                    sortDesc: i,
                    filter: s,
                  }, t.next = 5, d.a.post(c, l);
                case 5:
                  if (u = t.sent, 200 != u.status) {
                    t.next = 12;
                    break;
                  }
                  if (p = u.data, !Array.isArray(p.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", p.data);
                case 10:
                  t.next = 13;
                  break;
                case 12:
                  throw new Error("Failed to a batch of masked transactions. Status (".concat(u.status, ")"));
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

          function a(e, a, r, n, o, i) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "maskTransaction", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/single/".concat(a, "/").concat(r), t.prev = 1, t.next = 4, d.a.get(n);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to get a batch of masked transactions. Status (".concat(o.status, ")"));
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
        key: "maskTransactionWithFilter", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/filter/".concat(a), t.prev = 1, t.next = 4, d.a.post(n, r);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to mask transactions with filter. Status (".concat(o.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/unmask/single/".concat(a, "/").concat(r), t.prev = 1, t.next = 4, d.a.get(n);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", i.data);
                case 10:
                  throw new Error("Failed to a batch of masked transactions. Status (".concat(o.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/imaging/transactions/unmask/all/".concat(a), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Boolean(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/imaging/transactions/mask/by/".concat(a, "?limit=").concat(r), t.prev = 1, t.next = 4, d.a.get(n);
                case 4:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 10;
                    break;
                  }
                  return i = o.data, t.abrupt("return", Number(i.data));
                case 10:
                  throw new Error("Failed to un-mask all transactions. Status (".concat(o.status, ")"));
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
      }]), e;
    }();
    ft.API_BASE_URL = p.getUrl();
    var gt = r["a"].extend({
      name: "TransactionExplorer", computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName, this.refresh();
      }, data: function() {
        return {
          headers: [{ text: "Name", align: "start", value: "name" }, {
            text: "Full Name",
            value: "fullName",
          }, { text: "Object Count", value: "count" }, {
            text: "Technologies",
            value: "technologies",
          }, { text: "Number of technologies", value: "numTechnologies" }, {
            text: "Actions",
            value: "actions",
            sortable: !1,
          }],
          headersMasked: [{ text: "Name", align: "start", value: "name" }, {
            text: "Full Name",
            value: "fullName",
          }, { text: "Object Count", value: "count" }, {
            text: "Technologies",
            value: "technologies",
          }, { text: "Number of technologies", value: "numTechnologies" }, {
            text: "Actions",
            value: "actions",
            sortable: !1,
          }],
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
          maskActionLimit: 0,
          maskActionLoading: !1,
          unmaskAllActionLoading: !1,
          transactionInsights: {},
          rangeObject: [0, 20],
          rangeTechnology: [0, 20],
          technologySearch: "",
        };
      }, methods: {
        unmaskAll: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.unmaskAllActionLoading = !0, t.next = 4, ft.unMaskAllTransaction(e.application);
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
        }, maskByCount: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, e.maskActionLoading = !0, t.next = 4, ft.maskByCount(e.application, e.maskActionLimit);
                case 4:
                  return e.numTransaction = t.sent, t.next = 7, e.refresh();
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  t.prev = 9, t.t0 = t["catch"](0), console.error("Failed to mask by count", t.t0);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ft.getInsightsUnmaskedTransaction(e.application);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ft.getNumberTransaction(e.application);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.prev = 0, t.next = 3, ft.getNumberMaskedTransaction(e.application);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o, i, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingTransaction = !0, t.next = 3, e.getNumberTransaction();
                case 3:
                  return a = {
                    minTechnology: e.rangeTechnology[0],
                    maxTechnologies: e.rangeTechnology[1],
                    minObject: e.rangeObject[0],
                    maxObject: e.rangeObject[1],
                    techContained: e.technologySearch,
                  }, r = e.optionsTransaction, n = r.sortBy, o = r.sortDesc, i = r.page, s = r.itemsPerPage, t.next = 7, ft.getBatchTransaction(e.application, (i - 1) * s, i * s, n, o, a);
                case 7:
                  return c = t.sent, e.loadingTransaction = !1, e.displayedTransaction = c, t.abrupt("return", c);
                case 11:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskedTransactionApiCall: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingMaskedTransaction = !0, t.next = 3, e.getNumberMaskedTransaction();
                case 3:
                  return a = e.optionsMaskedTransaction, r = a.sortBy, n = a.sortDesc, o = a.page, i = a.itemsPerPage, t.next = 6, ft.getBatchMaskedTransaction(e.application, (o - 1) * i, o * i, r, n);
                case 6:
                  return s = t.sent, e.loadingMaskedTransaction = !1, e.displayedMaskedTransaction = s, t.abrupt("return", s);
                case 10:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, maskTransaction: function(e) {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ft.maskTransaction(t.application, e._id);
                case 2:
                  t.refresh();
                case 3:
                case"end":
                  return a.stop();
              }
            }), a);
          })))();
        }, unMaskTransaction: function(e) {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark((function a() {
            return regeneratorRuntime.wrap((function(a) {
              while (1) switch (a.prev = a.next) {
                case 0:
                  return a.next = 2, ft.unmaskTransaction(t.application, e._id);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getInsights();
                case 2:
                  return t.next = 4, e.transactionApiCall();
                case 4:
                  return t.next = 6, e.maskedTransactionApiCall();
                case 6:
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
    }), bt = gt, xt = a("8fea"), wt = a("5963"), kt = Object(O["a"])(bt, vt, mt, !1, null, null, null), yt = kt.exports;
    V()(kt, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VDataTable: xt["a"],
      VIcon: Ae["a"],
      VRangeSlider: wt["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
    });
    var _t = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticClass: "text-center pa-5" }, [a("h3", { staticClass: "text-h3" }, [e._v("This is page is under construction")])])], 1);
    }, Ct = [], At = r["a"].extend({
      name: "IconManager", data: function() {
        return {};
      },
    }), It = At, Rt = Object(O["a"])(It, _t, Ct, !1, null, null, null), St = Rt.exports;
    V()(Rt, { VContainer: P["a"], VRow: U["a"] });
    var Tt = r["a"].extend({
      name: "ImagingTuning",
      components: { LevelExplorer: ht, TransactionExplorer: yt, IconManager: St },
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
            view: "TransactionExplorer",
            name: "Transaction",
            title: "Explore the transaction ",
            icon: "mdi-apple-safari",
          }, { view: "IconManager", name: "Icon Manager", title: "Manage icons ", icon: "mdi-file-image-outline" }],
        };
      },
      watch: {
        getApplicationName: function(e) {
          this.application = e;
        },
      },
    }), Ft = Tt, Ot = (a("28c2"), Object(O["a"])(Ft, Ke, et, !1, null, null, null)), Et = Ot.exports;
    V()(Ot, { VContainer: P["a"], VIcon: Ae["a"], VRow: U["a"], VTab: Ye["a"], VTabs: Je["a"] });
    var Vt = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "charcoal", dark: "" },
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
    }, jt = [], Nt = function() {
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
    }, Lt = [], Pt = function() {
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
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e._v(" Assistant " + e._s(e.daemonLevelState ? "active" : "stopped") + " ")], 1)], 1)], 1)], 1)], 1)], 1);
    }, Dt = [], Mt = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getStatus", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/status"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, o = !1, 200 != n.status) {
                    t.next = 12;
                    break;
                  }
                  i = n.data, console.log("API response for agent : ".concat(a, " ::"), i), o = Boolean(i.data), t.next = 13;
                  break;
                case 12:
                  throw new Error("Status (".concat(n.status, ")"));
                case 13:
                  return t.abrupt("return", o);
                case 16:
                  throw t.prev = 16, t.t0 = t["catch"](1), console.error("Something went wrong trying to change the status of agent ".concat(a, "."), t.t0), t.t0;
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
      }, {
        key: "getPrefix", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/prefix"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status && 304 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", String(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/stop"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, o = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  i = n.data, o = Boolean(i.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", o);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/start"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, o = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  i = n.data, o = Boolean(i.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", o);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/atlas/agents/".concat(a, "/force"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, o = !1, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  i = n.data, o = Boolean(i.data), t.next = 12;
                  break;
                case 11:
                  throw new Error("Status (".concat(n.status, ")"));
                case 12:
                  return t.abrupt("return", o);
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
    Mt.API_BASE_URL = p.getUrl();
    var Ut = r["a"].extend({
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
          Mt.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Mt.getStatus(this.nameAgent).then((function(t) {
            console.log("Status of the level agent", t), e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the level agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Mt.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the level agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Mt.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the level agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Mt.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getPrefix(), this.getStatus();
      },
    }), Bt = Ut, Gt = (a("ca8a"), Object(O["a"])(Bt, Pt, Dt, !1, null, null, null)), $t = Gt.exports;
    V()(Gt, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
    });
    var qt = function() {
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
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e._v(" Assistant " + e._s(e.daemonLevelState ? "active" : "stopped") + " ")], 1)], 1)], 1)], 1)], 1)], 1);
    }, Ht = [], Wt = r["a"].extend({
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
          Mt.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Mt.getStatus(this.nameAgent).then((function(t) {
            console.log("Status of the Module agent", t), e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Module agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Mt.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(t) {
            console.error("Failed to stop the Module agent", t), e.daemonLevelState = !0;
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Mt.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(t) {
            console.error("Failed to start the Module agent", t), e.daemonLevelState = !1;
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Mt.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getPrefix();
      },
    }), Qt = Wt, zt = (a("b9cc"), Object(O["a"])(Qt, qt, Ht, !1, null, null, null)), Yt = zt.exports;
    V()(zt, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
    });
    var Jt = function() {
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
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e._v(" Assistant " + e._s(e.daemonLevelState ? "active" : "stopped") + " ")], 1)], 1)], 1)], 1)], 1)], 1);
    }, Xt = [], Zt = r["a"].extend({
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
          Mt.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getTag: function() {
          var e = this;
          re.getFrameworkTag().then((function(t) {
            e.tag = t;
          })).catch((function(t) {
            console.error("Failed to retriece the tag associated to the framework grouping.", t), e.tag = "";
          }));
        }, getStatus: function() {
          var e = this;
          Mt.getStatus(this.nameAgent).then((function(t) {
            console.log("Status of the Framework agent", t), e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Framework agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Mt.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Mt.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Mt.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getTag(), this.getPrefix();
      },
    }), Kt = Zt, ea = (a("738d"), Object(O["a"])(Kt, Jt, Xt, !1, null, null, null)), ta = ea.exports;
    V()(ea, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
    });
    var aa = function() {
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
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e._v(" Assistant " + e._s(e.daemonLevelState ? "active" : "stopped") + " ")], 1)], 1)], 1)], 1)], 1)], 1);
    }, ra = [], na = r["a"].extend({
      name: "ViewAgent", data: function() {
        return { nameAgent: "view", daemonLevelState: !1, loadingToggle: !1 };
      }, methods: {
        getStatus: function() {
          var e = this;
          Mt.getStatus(this.nameAgent).then((function(t) {
            console.log("Status of the Framework agent", t), e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Framework agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Mt.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Framework agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Mt.startAgent(this.nameAgent).then((function(t) {
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
    }), oa = na, ia = (a("ff56"), Object(O["a"])(oa, aa, ra, !1, null, null, null)), sa = ia.exports;
    V()(ia, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
    });
    var ca = function() {
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
      }, [a("v-icon", { attrs: { left: "" } }, [e._v(" mdi-image-auto-adjust ")]), e._v(" Assistant " + e._s(e.daemonLevelState ? "active" : "stopped") + " ")], 1)], 1)], 1)], 1)], 1)], 1);
    }, la = [], ua = r["a"].extend({
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
          Mt.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getStatus: function() {
          var e = this;
          Mt.getStatus(this.nameAgent).then((function(t) {
            console.log("Status of the Module agent", t), e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the status of the Module agent", e);
          }));
        }, toggleDaemon: function() {
          var e = this;
          this.loadingToggle = !0, this.daemonLevelState ? Mt.stopAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = !t;
          })).catch((function(e) {
            console.error("Failed to stop the Module agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          })) : Mt.startAgent(this.nameAgent).then((function(t) {
            e.daemonLevelState = t;
          })).catch((function(e) {
            console.error("Failed to start the Module agent", e);
          })).finally((function() {
            e.loadingToggle = !1;
          }));
        }, forceAction: function() {
          var e = this;
          this.loadingAction = !0, Mt.forceAgent(this.nameAgent).catch((function(e) {
            console.error("Failed to force the action of the agent.", e);
          })).finally((function() {
            e.loadingAction = !1;
          }));
        },
      }, mounted: function() {
        this.getStatus(), this.getPrefix();
      },
    }), da = ua, pa = (a("6a0e"), Object(O["a"])(da, ca, la, !1, null, null, null)), ha = pa.exports;
    V()(pa, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
    });
    var va = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "pa-3",
        attrs: { width: "100%", "min-height": "300px" },
      }, [a("v-card-title", [a("v-row", { staticClass: "d-flex flex-column" }, [a("h3", { staticClass: "text-h4 black--text mx-4 mb-4 my-3" }, [e._v(" Assistants ")]), a("p", { staticClass: "ml-4 text-body-1" }, [e._v(" Automatize the actions of Demeter, Artemis and more, in your applications. ")])])], 1), a("v-card-text", [a("v-container", [a("v-row", {
        staticClass: "mb-5",
        attrs: { width: "100%" },
      }, [a("FrameworkAssistant")], 1), a("v-row", { attrs: { width: "100%" } }, [a("RegexAssistants")], 1)], 1)], 1)], 1);
    }, ma = [], fa = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "pa-3",
        attrs: { "min-height": "300px", disabled: "" },
      }, [a("v-card-title", [e._v(" Regex Assistants ( Coming in next release )")]), a("v-card-subtitle", [e._v("Separate the objects in the applications matching theses rules.")]), a("v-card-text", [a("v-container", [a("v-row", { attrs: { width: "100%" } })], 1)], 1)], 1);
    }, ga = [], ba = r["a"].extend({
      name: "RegexAssistants", data: function() {
        return {};
      },
    }), xa = ba, wa = Object(O["a"])(xa, fa, ga, !1, null, null, null), ka = wa.exports;
    V()(wa, {
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VRow: U["a"],
    });
    var ya = function() {
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
    }, _a = [], Ca = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getPossibleActions", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/options/actions", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to get the actions. Status (".concat(r.status, ")")), console.log("Action retrieved", n), t.abrupt("return", n);
                case 11:
                  throw t.prev = 11, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(a, ". Failed to get the list of actions ."), t.t0), t.t0;
                case 15:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 11]]);
          })));

          function a() {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getFrameworksCategories", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/options/categories", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to get the categories. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/all", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to get all the assistants. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/assistants/frameworks/new", t.prev = 1, o = {
                    category: a,
                    actions: r,
                  }, t.next = 5, d.a.post(n, o);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", !0);
                case 10:
                  console.warn("Failed to create the assistant. Status (".concat(i.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/assistants/frameworks/remove/" + a, t.prev = 1, t.next = 4, d.a.delete(r);
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
    Ca.API_BASE_URL = p.getUrl();
    var Aa = r["a"].extend({
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
            this.loadingActions = !0, Ca.getPossibleActions().then((function(t) {
              e.actionsList = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of actions.", e);
            })).finally((function() {
              e.loadingActions = !1;
            }));
          }, getListCategories: function() {
            var e = this;
            this.loadingCategories = !0, Ca.getFrameworksCategories().then((function(t) {
              e.categoriesList = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of categories.", e);
            })).finally((function() {
              e.loadingCategories = !1;
            }));
          }, getListAssistants: function() {
            var e = this;
            this.loadingAssistants = !0, Ca.getAllAssistants().then((function(t) {
              e.assistantsList = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of assistants.", e);
            })).finally((function() {
              e.loadingAssistants = !1;
            }));
          }, removeAssistant: function(e) {
            var t = this;
            Ca.removeAssistant(e.id).then((function(e) {
              t.getListAssistants();
            })).catch((function(e) {
              console.error("Failed to remove the assistant.", e);
            }));
          }, createAssistant: function() {
            var e = this;
            "" != this.selectedCategory && 0 != this.selectedActions.length && Ca.newAssistant(this.selectedCategory, this.selectedActions).then((function(t) {
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
      }), Ia = Aa, Ra = a("c6a6"), Sa = a("b974"), Ta = a("e0c7"), Fa = Object(O["a"])(Ia, ya, _a, !1, null, null, null),
      Oa = Fa.exports;
    V()(Fa, {
      VAutocomplete: Ra["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSpacer: q["a"],
      VSubheader: Ta["a"],
    });
    var Ea = r["a"].extend({
      name: "AssistantsManager",
      components: { RegexAssistants: ka, FrameworkAssistant: Oa },
      data: function() {
        return {};
      },
    }), Va = Ea, ja = Object(O["a"])(Va, va, ma, !1, null, null, null), Na = ja.exports;
    V()(ja, { VCard: N["a"], VCardText: L["c"], VCardTitle: L["d"], VContainer: P["a"], VRow: U["a"] });
    var La = r["a"].component("GroupingTile", {
      components: {
        FrameworkAgent: ta,
        ViewAgent: sa,
        ArchitectureAgent: ha,
        AssistantsManager: Na,
        LevelAgent: $t,
        ModuleAgent: Yt,
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
          S.executeGrouping(e).then((function() {
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
    }), Pa = La, Da = Object(O["a"])(Pa, Nt, Lt, !1, null, null, null), Ma = Da.exports;
    V()(Da, { VCard: N["a"], VCardText: L["c"], VCardTitle: L["d"], VCol: se["a"], VContainer: P["a"], VRow: U["a"] });
    var Ua = function() {
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
    }, Ba = [], Ga = (a("4de4"), a("2909")), $a = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getAllUseCase", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/useCases/all", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/useCases/roots", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/attached/" + a + "/useCases", t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/attached/" + a + "/groups", t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 11;
                    break;
                  }
                  if (o = n.data, !Array.isArray(o.data)) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/add", t.prev = 1, t.next = 4, d.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/useCases/delete/" + a.id, t.prev = 1, t.next = 4, d.a.delete(r);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/addWithParent", t.prev = 1, o = a, o.idParent = r, t.next = 6, d.a.post(n, o);
                case 6:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  return s = i.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to add a use cases. Status (".concat(i.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/check/validity", t.prev = 1, o = {}, o.request = a, o.awaitedResult = r, t.next = 7, d.a.post(n, o);
                case 7:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 13;
                    break;
                  }
                  return s = i.data, t.abrupt("return", Boolean(s.data));
                case 13:
                  console.warn("Failed to verify the validity of the request. Status (".concat(i.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/useCases/update", t.prev = 1, o = a, o.parentId = r, t.next = 6, d.a.put(n, o);
                case 6:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  return s = i.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to update a use cases. Status (".concat(i.status, ")"));
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
    $a.API_BASE_URL = p.getUrl();
    a("a4d3"), a("e01a");
    var qa = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getTagResults", value: function() {
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, o, i, s, c, l, u, d, p, h;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.tag.getAsList('".concat(t, "', '").concat(a, "')"), e.next = 3, this.neo4jal.execute(r);
                case 3:
                  for (n = e.sent, o = [], i = 0; i < n.records.length; i++) s = n.records[i], c = Object(w["int"])(s.get("id")).toNumber(), l = s.get("tag"), u = s.get("description") || "No description", d = Object(w["int"])(s.get("numMatch")).toInt(), p = s.get("categories") || "No category", h = s.get("useCase"), o.push({
                    type: "tag",
                    id: c,
                    name: l,
                    description: u,
                    numMatch: d,
                    categories: p,
                    useCase: h,
                  });
                  return e.abrupt("return", o);
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, o, i, s, c, l, u, d;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.tag.execute( ".concat(a, ", \"").concat(t, "\");"), e.next = 3, this.neo4jal.execute(r);
                case 3:
                  return n = e.sent, o = n.records[0], i = Object(w["int"])(o.get("id")).toNumber(), s = o.get("tag"), c = o.get("description") || "No description", l = Object(w["int"])(o.get("numMatch")).toInt(), u = o.get("categories") || "No category", d = o.get("useCase"), e.abrupt("return", {
                    type: "tag",
                    id: i,
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
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
    qa.neo4jal = y.getInstance();
    a("a15b");
    var Ha = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getAllGroups", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/paris/groups/all", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/addWithUseCase", t.prev = 1, a.creationDate = Date.now(), a.categories = [], a.typesAsList = [], a.active = !1, a.selected = !1, t.next = 9, d.a.post(r, a);
                case 9:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 15;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return console.log("Tags", a), r = e.API_BASE_URL + "/api/paris/groups/delete/" + a.id, t.prev = 2, t.next = 5, d.a.delete(r);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/groups/addWithUseCase", t.prev = 1, o = a, o.idUseCase = r, t.next = 6, d.a.post(n, o);
                case 6:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 12;
                    break;
                  }
                  return s = i.data, t.abrupt("return", s.data);
                case 12:
                  console.warn("Failed to add a group. Status (".concat(i.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/update", t.prev = 1, t.next = 4, d.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/paris/groups/execute", t.prev = 1, o = {
                    application: a,
                    idList: r,
                    executionType: "Tag",
                  }, t.next = 5, d.a.post(n, o);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  return s = i.data, t.abrupt("return", Number(s.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/paris/groups/forecast", t.prev = 1, n = { application: a }, t.next = 5, d.a.post(r, n);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 12;
                    break;
                  }
                  if (i = o.data, !Array.isArray(i.data)) {
                    t.next = 10;
                    break;
                  }
                  return t.abrupt("return", i.data);
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
    Ha.API_BASE_URL = p.getUrl();
    var Wa = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getDownloadUrl", value: function() {
          return e.API_BASE_URL + "/api/paris/export/all";
        },
      }]), e;
    }();
    Wa.API_BASE_URL = p.getUrl();
    var Qa = r["a"].extend({
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
            return Object(s["a"])(regeneratorRuntime.mark((function a() {
              var r, n, o;
              return regeneratorRuntime.wrap((function(a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, $a.getAttachedUseCase(e.id);
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
                    return a.next = 13, $a.getAttachedGroups(e.id);
                  case 13:
                    return o = a.sent, (r = e.children).push.apply(r, Object(Ga["a"])(o)), e.isUseCase = !0, a.abrupt("return", e);
                  case 17:
                  case"end":
                    return a.stop();
                }
              }), a);
            })))();
          }, focusGroup: function(e) {
            this.focusedGroup = e;
          }, generateZip: function() {
            window.open(Wa.getDownloadUrl());
          }, getRootUseCase: function() {
            var e = this;
            $a.getRootUseCase().then(function() {
              var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
            this.loading = !0, qa.getTagResults("Configuration_1", this.application).then((function(t) {
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
            return Object(s["a"])(regeneratorRuntime.mark((function t() {
              var a, r;
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    e.loadingQueries = !0, a = e.tree.filter((function(e) {
                      return e && void 0 !== e && !e.isUseCase;
                    })), console.log("ToExecute", a), console.log("About to execute ".concat(a.length, " tags on the application.")), r = e.tree.map((function(e) {
                      return e.id;
                    })), Ha.executeListGroupAsTag(e.application, r).then((function(t) {
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
      }), za = Qa, Ya = a("490a"), Ja = a("71d9"), Xa = a("2a7f"), Za = Object(O["a"])(za, Ua, Ba, !1, null, null, null),
      Ka = Za.exports;
    V()(Za, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VChip: Ve["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VDivider: M["a"],
      VFileInput: je["a"],
      VIcon: Ae["a"],
      VProgressCircular: Ya["a"],
      VRow: U["a"],
      VScrollXTransition: ct["f"],
      VSheet: B["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
      VToolbar: Ja["a"],
      VToolbarTitle: Xa["a"],
      VTreeview: dt["a"],
    });
    var er = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("v-container", [a("v-card", { attrs: { width: "100%" } }, [a("v-card-title", [e._v(" Use Cases Manager "), a("v-spacer"), a("v-btn", {
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
                    var n = t.on, o = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ma-2",
                      attrs: { text: "", small: "", icon: "", color: "blue lighten-2" },
                      on: {
                        click: function(t) {
                          return e.editItem(r);
                        },
                      },
                    }, "v-btn", o, !1), n), [a("v-icon", [e._v("mdi-pencil")])], 1)];
                  },
                }], null, !0),
              }, [a("span", [e._v("Edit")])]), a("v-tooltip", {
                attrs: { bottom: "" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var n = t.on, o = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ma-2",
                      attrs: { text: "", small: "", icon: "", color: "red lighten-2" },
                      on: {
                        click: function(t) {
                          return e.deleteItem(r);
                        },
                      },
                    }, "v-btn", o, !1), n), [a("v-icon", [e._v("mdi-timeline-remove-outline")])], 1)];
                  },
                }], null, !0),
              }, [a("span", [e._v("Remove the use case")])]), a("v-tooltip", {
                attrs: { bottom: "" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var n = t.on, o = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ma-2",
                      attrs: { text: "", small: "", icon: "", color: "green lighten-2" },
                      on: {
                        click: function(t) {
                          return e.createItemUnderParent(r);
                        },
                      },
                    }, "v-btn", o, !1), n), [a("v-icon", [e._v("mdi-folder-plus")])], 1)];
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
      }, tr = [], ar = r["a"].extend({
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
            return Object(s["a"])(regeneratorRuntime.mark((function a() {
              return regeneratorRuntime.wrap((function(a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, $a.getAttachedUseCase(e.id).then(function() {
                      var a = Object(s["a"])(regeneratorRuntime.mark((function a(r) {
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
                      return console.log("Failed to fetch the children for use case with id : ".concat(e.id), t), e;
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
            $a.getRootUseCase().then(function() {
              var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
            this.titleEditBox = "Edit the use case : ".concat(e.title), this.editedIndex = this.items.indexOf(e), console.log("Use Case ", e), this.parentUseCaseId = -1, this.editParentUseCaseId = e.parentId || -1, this.editedItem = Object.assign({}, e), this.dialog = !0;
          }, deleteItem: function(e) {
            this.contentDeleteBox = "You're about to delete the use case with name <strong>".concat(e.title, "</strong>. Are you sure that you want to delete it ?  "), this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0;
          }, confirmDelete: function() {
            var e = this;
            this.loadingDelete = !0, $a.deleteUseCase(this.editedItem).then((function(t) {
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
            console.log("About to save", this.editedItem), this.editedItem.id && this.editedItem.id > 0 ? $a.editUseCase(this.editedItem, this.editParentUseCaseId).then((function(t) {
              e.textSnackBar = "Successfully updated the use case.", e.snackbarInfo = !0, e.refresh();
            })).catch((function(t) {
              e.textSnackBar = "Failed to update the use case. Error: ".concat(t), e.snackbarInfo = !0;
            })) : -1 != this.parentUseCaseId && this.editedIndex <= -1 ? $a.addUseCaseWithParent(this.editedItem, this.parentUseCaseId).then((function(t) {
              e.textSnackBar = "Successfully attached a new use case.", e.snackbarInfo = !0, e.refresh();
            })).catch((function(t) {
              e.textSnackBar = "Failed to attach the new use case. Error: ".concat(t), e.snackbarInfo = !0;
            })) : $a.addUseCaseWithParent(this.editedItem, this.editParentUseCaseId).then((function(t) {
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
      }), rr = ar, nr = a("ac7c"), or = a("67b6"), ir = a("43a6"), sr = a("3a2f"),
      cr = Object(O["a"])(rr, er, tr, !1, null, null, null), lr = cr.exports;
    V()(cr, {
      VAutocomplete: Ra["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCheckbox: nr["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRadio: or["a"],
      VRadioGroup: ir["a"],
      VRow: U["a"],
      VScrollYTransition: ct["g"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
      VTooltip: sr["a"],
      VTreeview: dt["a"],
    });
    var ur = function() {
        var e = this, t = e.$createElement, a = e._self._c || t;
        return a("v-container", { staticClass: "ml-5" }, [a("v-card", [a("v-card-title", [e._v(" Tag creator studio ")]), a("v-card-subtitle", [e._v("In this creator studio you'll be able to create your own Demeter recommendations ,in order to enrich your configuration, and display more informations on CAST Imaging System."), a("br"), a("br"), e._v(" For more informations on tags and documents, please refer to the official "), a("a", { attrs: { href: "#" } }, [e._v("CAST Imaging documentation")]), e._v(".")]), a("v-card-text", [a("v-container", [a("v-row", [a("v-expand-x-transition", [a("v-col", {
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
                    var n = t.on, o = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ma-2",
                      attrs: { text: "", small: "", icon: "", color: "blue lighten-2" },
                      on: {
                        click: function(t) {
                          return e.editItem(r);
                        },
                      },
                    }, "v-btn", o, !1), n), [a("v-icon", [e._v("mdi-pencil")])], 1)];
                  },
                }], null, !0),
              }, [a("span", [e._v("Edit")])]), a("v-tooltip", {
                attrs: { bottom: "" },
                scopedSlots: e._u([{
                  key: "activator", fn: function(t) {
                    var n = t.on, o = t.attrs;
                    return [a("v-btn", e._g(e._b({
                      staticClass: "ma-2",
                      attrs: { text: "", small: "", icon: "", color: "red lighten-2" },
                      on: {
                        click: function(t) {
                          return e.removeItem(r);
                        },
                      },
                    }, "v-btn", o, !1), n), [a("v-icon", [e._v("mdi-timeline-remove-outline")])], 1)];
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
        }, [a("v-row", [a("v-col", [a("v-card", { staticClass: "mx-auto pa-3" }, [a("v-card-text", [a("v-row", [a("p", { staticClass: "display-1 text--primary" }, [e._v(" Recommendation creation ")]), a("v-spacer"), e.editMode ? a("v-btn", {
          staticClass: "ma-2 mr-5",
          attrs: { small: "", dark: "" },
          on: { click: e.close },
        }, [a("v-icon", {
          attrs: {
            dark: "",
            left: "",
          },
        }, [e._v(" mdi-minus-circle ")]), e._v("Close ")], 1) : e._e()], 1), a("div", { staticClass: "text--primary" }, [e._v(" Select the type of the recommendation to create ")]), e.editMode ? a("v-form", {
          ref: "form",
          staticClass: "pa-4",
          attrs: { "lazy-validation": "" },
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
        }, [e._v(" Open assitant ")])], 1) : e._e(), a("div", {
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
      }, dr = [], pr = pe["a"].extend({
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
            Ha.deleteGroup(this.group).then((function(t) {
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
            this.loadingCreation = !0, this.group.idUseCase = this.selectedUseCaseId, this.editedIndex > -1 ? Ha.editUseCase(this.group).then((function(t) {
              e.textSnackBar = "Successfully updated the group.", e.snackbarInfo = !0, e.initialize(), e.close();
            })).catch((function(t) {
              e.textSnackBar = "Failed to udpdate the Category. Error: ".concat(t), e.snackbarInfo = !0;
            })).finally((function() {
              e.loadingCreation = !1;
            })) : Ha.addGroup(this.group).then((function(t) {
              e.textSnackBar = "Successfully added the group.", e.snackbarInfo = !0, e.initialize(), e.close();
            })).catch((function(t) {
              e.textSnackBar = "Failed to add the Category. Error: ".concat(t), e.snackbarInfo = !0;
            })).finally((function() {
              e.loadingCreation = !1;
            }));
          }, getChildren: function(e) {
            var t = this;
            return Object(s["a"])(regeneratorRuntime.mark((function a() {
              var r, n, o;
              return regeneratorRuntime.wrap((function(a) {
                while (1) switch (a.prev = a.next) {
                  case 0:
                    return a.next = 2, $a.getAttachedUseCase(e.id);
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
                    return a.next = 13, $a.getAttachedGroups(e.id);
                  case 13:
                    return o = a.sent, console.log("got groups ", o), (r = e.children).push.apply(r, Object(Ga["a"])(o)), e.isUseCase = !0, a.abrupt("return", e);
                  case 18:
                  case"end":
                    return a.stop();
                }
              }), a);
            })))();
          }, getRootUseCase: function() {
            var e = this;
            $a.getRootUseCase().then(function() {
              var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
            $a.getAllUseCase().then((function(t) {
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
            this.loadingValidity = !0, $a.checkValidity(this.group.cypherRequest, this.group.cypherRequestReturn).then((function(t) {
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
      }), hr = pr, vr = a("0798"), mr = a("4bd4"), fr = a("8860"), gr = a("da13"), br = a("5d23"), xr = a("1baa"),
      wr = Object(O["a"])(hr, ur, dr, !1, null, null, null), kr = wr.exports;
    V()(wr, {
      VAlert: vr["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCheckbox: nr["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VDialog: D["a"],
      VExpandXTransition: ct["b"],
      VForm: mr["a"],
      VIcon: Ae["a"],
      VList: fr["a"],
      VListItem: gr["a"],
      VListItemContent: br["a"],
      VListItemGroup: xr["a"],
      VListItemTitle: br["c"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VSubheader: Ta["a"],
      VTextField: H["a"],
      VTextarea: ut["a"],
      VTooltip: sr["a"],
      VTreeview: dt["a"],
    });
    var yr = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getDemeterVersion", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/extensions/demeter/version", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, 200 == r.status ? (o = r.data, n = String(o.data)) : console.warn("Failed to retrieve version. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/atlas/extensions/artemis/version", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, 200 == r.status ? (o = r.data, n = String(o.data)) : console.warn("Failed to retrieve version. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
    yr.API_BASE_URL = p.getUrl();
    var _r = r["a"].extend({
      name: "Enrichment",
      components: { GroupingTile: Ma, TagStudio: kr, UseCases: lr, TagViewer: Ka },
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
          items: [{ view: "GroupingTile", name: "Assistants", icon: "mdi-assistant" }, {
            view: "TagViewer",
            name: "Tags",
            icon: "mdi-tag-multiple",
          }, { view: "UseCases", name: "Use cases", icon: "mdi-folder" }, {
            view: "TagStudio",
            name: "Tag studio",
            icon: "mdi-android-studio",
          }],
        };
      },
      mounted: function() {
        var e = this;
        this.applicationName = this.$store.state.applicationName, yr.getDemeterVersion().then(function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
    }), Cr = _r, Ar = (a("20ad"), Object(O["a"])(Cr, Vt, jt, !1, null, null, null)), Ir = Ar.exports;
    V()(Ar, { VContainer: P["a"], VIcon: Ae["a"], VRow: U["a"], VTab: Ye["a"], VTabs: Je["a"] });
    var Rr, Sr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "charcoal", dark: "" },
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
    }, Tr = [], Fr = function() {
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
        }, [a("strong", [e._v(e._s(t.application))])]), e._l(t.languages, (function(n, o) {
          return a("v-col", { key: o, staticClass: "mb-2", attrs: { cols: "2" } }, [a("v-checkbox", {
            attrs: {
              label: n,
              color: "indigo",
              value: "indigo",
              "hide-details": "",
            }, on: {
              click: function(a) {
                return e.toPreQueue(t.application, n, e.selected["option-" + r + "-" + o]);
              },
            }, model: {
              value: e.selected["option-" + r + "-" + o], callback: function(t) {
                e.$set(e.selected, "option-" + r + "-" + o, t);
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
    }, Or = [], Er = (a("a434"), a("25f0"), function() {
      function e() {
        Object(c["a"])(this, e), this.timestampFinish = 0, this.data = [];
      }

      return Object(l["a"])(e, null, [{
        key: "fromRecord", value: function(t) {
          if (null == t) return null;
          var a = new e;
          return a.application = String(t["application"]) || "No Application", a.timestampStart = Number(t["timestampStart"]) || 0, a.timestampFinish = Number(t["timestampFinish"]) || 0, a.language = String(t["language"]) || "No language", a.status = t["status"], a.data = t["data"] || [], a;
        },
      }]), e;
    }()), Vr = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "launchDetection", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/detection/launch", o = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, d.a.post(n, o);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  return s = i.data, t.abrupt("return", Boolean(s.data));
                case 11:
                  return console.warn("Failed to launch the detection. Status (".concat(i.status, ")")), t.abrupt("return", !1);
                case 13:
                  t.next = 19;
                  break;
                case 15:
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(n, ". The detection was not launched."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/detection/stop", o = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, d.a.post(n, o);
                case 5:
                  if (i = t.sent, 200 != i.status) {
                    t.next = 11;
                    break;
                  }
                  return s = i.data, t.abrupt("return", Boolean(s.data));
                case 11:
                  return console.warn("Failed to stop the detection. Status (".concat(i.status, ")")), t.abrupt("return", !1);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/pending", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve pending operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/successes", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve successful operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/failed", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve failed operations. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/detection/status/" + a, t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 13;
                    break;
                  }
                  if (o = n.data, null != o) {
                    t.next = 9;
                    break;
                  }
                  return t.abrupt("return", null);
                case 9:
                  return i = Er.fromRecord(o.data), t.abrupt("return", i);
                case 13:
                  return console.warn("Failed to launch the detection. Status (".concat(n.status, ")")), t.abrupt("return", null);
                case 15:
                  t.next = 21;
                  break;
                case 17:
                  throw t.prev = 17, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(r, ". Failed to retrieve pending operations."), t.t0), t.t0;
                case 21:
                case"end":
                  return t.stop();
              }
            }), t, null, [[1, 17]]);
          })));

          function a(e) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }, {
        key: "getDetectionQueue", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/get", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve the queue of detection. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/current", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/detection/queue/flush", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/detection/queue/add", t.prev = 1, n = { candidates: a }, t.next = 5, d.a.post(r, n);
                case 5:
                  if (o = t.sent, 200 != o.status) {
                    t.next = 11;
                    break;
                  }
                  return i = o.data, t.abrupt("return", Number(i.data));
                case 11:
                  console.warn("Failed to add the list of candidates to the detection queue. Status (".concat(o.status, ")"));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/assistants/frameworks/candidates", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to get the list of candidates. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
    Vr.API_BASE_URL = p.getUrl(), function(e) {
      e[e["Pending"] = 0] = "Pending", e[e["Success"] = 1] = "Success", e[e["Failure"] = 2] = "Failure", e[e["Unknown"] = 3] = "Unknown";
    }(Rr || (Rr = {}));
    var jr = r["a"].extend({
        name: "ArtemisConsole", computed: {
          filteredFrameworks: function() {
            return console.log("Result size : " + this.resultDetection.filter((function(e) {
              return "Framework" == e.type;
            })).length), this.showOnlyFrameworks ? this.resultDetection.filter((function(e) {
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
            return Object(s["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, Vr.getDetectionCandidates();
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
              var o = this.preQueue[n].languages.indexOf(t);
              return this.preQueue[n].languages.splice(o, 1), void (0 == this.preQueue[n].languages.length && this.preQueue.splice(n, 1));
            }
          }, getConfiguration: function() {
            var e = this;
            return Object(s["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return e.loadingConfiguration = !0, t.next = 3, Fe.getOnlineMode();
                  case 3:
                    return e.onlineMode = t.sent, t.next = 6, Fe.getRepositoryMode();
                  case 6:
                    return e.repositoryMode = t.sent, t.next = 9, ye.getArtemisWorkspace();
                  case 9:
                    return e.workspacePath = t.sent, t.next = 12, Fe.getSupportedLanguages().then((function(t) {
                      console.log("Avaible languages are :" + t.join(";")), e.availableLanguages = t, e.selectedLanguage = t[0];
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
            this.loadingOnlineMode = !0, Fe.setOnlineMode(this.onlineMode).then((function(t) {
              e.onlineMode = t;
            })).catch((function(t) {
              e.errorOnlineMode = !0, console.error("Failed to change online mode of Artemis Framework detector.", t);
            })).then((function() {
              e.loadingOnlineMode = !1;
            }));
          }, setRepositoryMode: function() {
            var e = this;
            this.loadingOnlineMode = !0, Fe.setRepositoryMode(this.repositoryMode).then((function(t) {
              e.repositoryMode = t;
            })).catch((function(t) {
              console.error("Failed to change the repository setting of Artemis.", t), e.errorRepositoryMode = !0;
            })).then((function() {
              e.loadingOnlineMode = !1;
            }));
          }, milisecondsToDhms: function(e) {
            var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
              n = Math.floor(t % 3600 / 60), o = Math.floor(t % 60), i = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
              s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
              c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
              l = o > 0 ? o + (1 == o ? " second" : " seconds") : "";
            return i + s + c + l;
          }, countDownTimer: function() {
            this.toDisplay = this.milisecondsToDhms(Date.now() - this.detection.timestampStart), setTimeout(this.countDownTimer, 1e3);
          }, checkStatus: function() {
            var e = this;
            this.checkingStatus || (this.checkingStatus = !0, Vr.getApplicationStatus(this.application).then((function(t) {
              if (console.log("Got status", t), null == t) return e.ongoingDetection = "", void (e.errorDetection = "");
              switch (e.detection = t, t.status) {
                case Rr.Pending:
                  e.ongoingDetection = "On-going detection for the ".concat(e.application, " application."), e.runningArtemis = !0, e.errorDetection = "", e.countDownTimer();
                  break;
                case Rr.Success:
                  e.resultDetection = t.data, e.runningArtemis = !1, e.errorDetection = "", e.ongoingDetection = "";
                  break;
                case Rr.Failure:
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
            this.loadingCandidates = !0, _.getApplicationInsights(this.application).then((function(e) {
              console.log("Insights :", e);
            })).catch((function(e) {
              console.error("Failed to get the insights of the application", e);
            })).finally((function() {
              e.loadingCandidates = !1;
            }));
          }, loadQueue: function() {
            var e = this;
            return Object(s["a"])(regeneratorRuntime.mark((function t() {
              return regeneratorRuntime.wrap((function(t) {
                while (1) switch (t.prev = t.next) {
                  case 0:
                    return e.loadingOngoingQueue = !0, t.next = 3, Vr.getDetectionQueue().then((function(t) {
                      e.ongoingQueue = t;
                    })).catch((function(e) {
                      console.error("Failed to retrieve the detection queue.", e);
                    })).finally((function() {
                      e.loadingOngoingQueue = !1;
                    }));
                  case 3:
                    return t.next = 5, Vr.getCurrent().then((function(t) {
                      console.log("Curent detection is ", t), e.currentDetection = t;
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
            0 != this.preQueue.length && (this.loadingPrequeueUpload = !0, Vr.addCandidatesToDetection(this.preQueue).then((function(t) {
              e.preQueue = [];
            })).catch((function(e) {
              console.error("Failed to add the Frameworks to the database", e);
            })).finally((function() {
              e.loadingPrequeueUpload = !1;
            })));
          }, flushQueue: function() {
            var e = this;
            this.loadingFlush = !0, Vr.flushDetectionQueue().then((function(t) {
              e.ongoingQueue = [];
            })).catch((function(e) {
              console.error("Failed to add the Frameworks to the database", e);
            })).finally((function() {
              e.loadingFlush = !1;
            }));
          }, launchDetection: function() {
            var e = this;
            this.displayErrorDetection = !1, Vr.launchDetection(this.application, this.selectedLanguage).then((function(t) {
              if (!t) throw new Error("The server refused to launch the detection. Check the logs.");
              e.runningArtemis = !0;
            })).catch((function(t) {
              console.error("The analysis of the application ".concat(e.application, " failed to launch."), t), e.errorDetection = t;
            }));
          }, stopDetection: function() {
            var e = this;
            this.displayErrorDetection = !1, Vr.cancelDetection(this.application, this.selectedLanguage).then((function(t) {
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
          this.disabledTile = !0, this.resultDetection = [], yr.getArtemisVersion().then(function() {
            var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
      }), Nr = jr, Lr = (a("ec8c"), a("ef9a")), Pr = a("b73d"), Dr = Object(O["a"])(Nr, Fr, Or, !1, null, null, null),
      Mr = Dr.exports;
    V()(Dr, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCheckbox: nr["a"],
      VChip: Ve["a"],
      VChipGroup: Lr["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VSwitch: Pr["a"],
    });
    var Ur = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticClass: "text-center pa-5" }, [a("h3", { staticClass: "text-h4" }, [e._v(" Review the different detection operations previously launched ")])]), a("v-row", { staticClass: "text-center pa-5" }, [a("v-spacer"), a("v-btn", {
        staticClass: "ma-2 white--text",
        attrs: { color: "charcoal", disabled: e.checkingStatus, dark: "" },
        on: {
          click: function(t) {
            return e.reload();
          },
        },
      }, [e._v(" Reload "), a("v-icon", {
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
      })), 1)], 1), a("v-row", [a("div", { staticClass: "d-flex flex-column mx-1 my-3" }, [a("h5", { staticClass: "text-h5 " }, [e._v("Successful operations")]), 0 == e.successOperations.length ? a("p", [e._v(" No successful operation detected ")]) : e._e()]), a("v-expansion-panels", {
        staticClass: "mb-6",
        staticStyle: { width: "100%" },
      }, e._l(e.successOperations, (function(t, r) {
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
        }, [e._v(" Go to results ")])], 1)], 1)])], 1);
      })), 1)], 1), a("v-row", [a("div", { staticClass: "d-flex flex-column mx-1 my-3" }, [a("h5", { staticClass: "text-h5" }, [e._v("Failed operations")]), 0 == e.failedOperations.length ? a("p", [e._v(" No Failed operation detected ")]) : e._e()]), a("v-expansion-panels", {
        staticClass: "mb-6",
        staticStyle: { width: "100%" },
      }, e._l(e.failedOperations, (function(t, r) {
        return a("v-expansion-panel", { key: r }, [a("v-expansion-panel-header", { attrs: { "expand-icon": "mdi-menu-down" } }, [a("h3", [e._v(e._s(t.application))]), a("v-spacer"), a("span", {
          staticClass: "text-body-1",
          staticStyle: { "max-width": "100px" },
        }, [e._v("Status : "), a("v-icon", { attrs: { color: "error" } }, [e._v(" mdi-alert-circle ")])], 1)], 1), a("v-expansion-panel-content", [a("div", { staticClass: "d-flex flex-column" }, [a("DetectionViewer", { attrs: { detection: t } }), a("div", { staticClass: "d-flex flex-row" }, [a("v-btn", {
          staticClass: "float-right my-3",
          staticStyle: { width: "150px" },
          attrs: { color: "charcoal", dark: "" },
        }, [e._v(" Re-launch analysis ")])], 1)], 1)])], 1);
      })), 1)], 1)], 1)], 1)], 1)], 1);
    }, Br = [], Gr = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticStyle: { width: "100%" } }, [a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Application")]), a("br"), e._v(e._s(e.detection.application) + " ")])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Language")]), a("br"), e._v(e._s(e.detection.language))])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Time Elapsed")]), a("br"), e._v(e._s(e.toDisplay))])]), a("v-col", { attrs: { cols: "3" } }, [a("p", [a("strong", [e._v("Results")]), a("br"), e._v(e._s(e.numResults))])])], 1)], 1);
    }, $r = [], qr = r["a"].component("DetectionViewer", {
      props: ["detection"], data: function() {
        return { toDisplay: "", numResults: "" };
      }, methods: {
        milisecondsToDhms: function(e) {
          var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
            n = Math.floor(t % 3600 / 60), o = Math.floor(t % 60), i = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
            s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
            c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
            l = o > 0 ? o + (1 == o ? " second" : " seconds") : "";
          return i + s + c + l;
        }, countDownTimer: function() {
          this.toDisplay = this.milisecondsToDhms(Date.now() - this.detection.timestampStart), setTimeout(this.countDownTimer, 1e3);
        },
      }, mounted: function() {
        if (this.detection.status == Rr.Pending) this.countDownTimer(), this.numResults = "Pending detection"; else {
          var e = this.detection.timestampFinish - this.detection.timestampStart;
          this.toDisplay = e > 0 ? this.milisecondsToDhms(e) : "No information", this.numResults = this.detection.data.length > 0 ? this.detection.data.filter((function(e) {
            return "Framework" == e;
          })).length + " framework detected" : "No framework detected";
        }
      },
    }), Hr = qr, Wr = Object(O["a"])(Hr, Gr, $r, !1, null, null, null), Qr = Wr.exports;
    V()(Wr, { VCol: se["a"], VContainer: P["a"], VRow: U["a"] });
    var zr = r["a"].extend({
        name: "DetectionExplorer", components: { DetectionViewer: Qr }, data: function() {
          return {
            pendingOperations: [],
            successOperations: [],
            failedOperations: [],
            getOperationErrors: "",
            loadingPending: !1,
          };
        }, methods: {
          getPendingOperations: function() {
            var e = this;
            Vr.getPendingDetections().then((function(t) {
              e.pendingOperations = t;
            })).catch((function(t) {
              console.error("Failed to retrieve pending operations.", t), e.getOperationErrors = "Failed to retrieve pending operations : ".concat(t);
            })).finally((function() {
              e.loadingPending = !1;
            }));
          }, getSuccessfulOperations: function() {
            var e = this;
            Vr.getSuccessfulDetections().then((function(t) {
              e.successOperations = t;
            })).catch((function(t) {
              console.error("Failed to retrieve successful operations.", t), e.getOperationErrors = "Failed to retrieve successful operations : ".concat(t);
            })).finally((function() {
              e.loadingPending = !1;
            }));
          }, getFailedOperations: function() {
            var e = this;
            Vr.getFailedDetections().then((function(t) {
              e.failedOperations = t;
            })).catch((function(t) {
              console.error("Failed to retrieve failed operations.", t), e.getOperationErrors = "Failed to retrieve failed operations : ".concat(t);
            })).finally((function() {
              e.loadingPending = !1;
            }));
          }, stopDetection: function(e) {
            var t = this;
            this.displayErrorDetection = !1, Vr.cancelDetection(e.application, e.language).then((function(e) {
              if (!e) throw new Error("The server refused to stopped the detection. Check the logs.");
              t.runningArtemis = !1;
            })).catch((function(e) {
              console.error("Failed to stop the on-going analysis.", e), t.errorDetection = "Failed to stop the on-going analysis. Error : ".concat(e);
            }));
          }, reload: function() {
            this.getOperationErrors = "", this.getPendingOperations(), this.getSuccessfulOperations(), this.getPendingOperations();
          },
        }, mounted: function() {
          this.reload();
        },
      }), Yr = zr, Jr = a("cd55"), Xr = a("49e2"), Zr = a("c865a"), Kr = a("0393"),
      en = Object(O["a"])(Yr, Ur, Br, !1, null, null, null), tn = en.exports;
    V()(en, {
      VAlert: vr["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VContainer: P["a"],
      VExpansionPanel: Jr["a"],
      VExpansionPanelContent: Xr["a"],
      VExpansionPanelHeader: Zr["a"],
      VExpansionPanels: Kr["a"],
      VIcon: Ae["a"],
      VProgressCircular: Ya["a"],
      VRow: U["a"],
      VSpacer: q["a"],
    });
    var an = function() {
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
                  var n = t.on, o = t.attrs;
                  return [a("v-icon", e._g(e._b({
                    attrs: { small: "" }, on: {
                      click: function(t) {
                        return e.toggleFramework(r);
                      },
                    },
                  }, "v-icon", o, !1), n), [e._v(" mdi-check-underline-circle-outline ")])];
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
    }, rn = [], nn = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "findFramework", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r) {
            var n, o, i, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return n = e.API_BASE_URL + "/api/artemis/frameworks/find/", t.prev = 1, o = a.replace(" ", "+"), n += o, r && "" != r && (i = r.replace(" ", "+"), n += "?internalType=" + i), t.next = 7, d.a.get(n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/total", t.prev = 1, a && "" != a && (n = a.replace(" ", "+"), r += "?internalType=" + n), t.next = 5, d.a.get(r);
                case 5:
                  return o = t.sent, 200 == o.status ? (s = o.data, i = Number(s.data)) : console.warn("Failed to retrieve number of frameworks by internalType. Status (".concat(o.status, ")")), t.abrupt("return", i);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/search/", t.prev = 1, t.next = 4, d.a.get(r + a);
                case 4:
                  return n = t.sent, o = [], 200 == n.status ? (i = n.data, Array.isArray(i.data) && (o = i.data)) : console.warn("Failed to search the frameworks. Status (".concat(n.status, ")")), t.abrupt("return", o);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/internalTypes", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  return r = t.sent, n = [], 200 == r.status ? (o = r.data, Array.isArray(o.data) && (n = o.data)) : console.warn("Failed to retrieve list of internal type. Status (".concat(r.status, ")")), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/toValidate", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/duplicates", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/frameworks/autoClean", t.prev = 1, t.next = 4, d.a.get(a);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/artemis/frameworks/batch", t.prev = 1, o += "?start=" + a, o += "&stop=" + r, n && "" != n && (i = n.replace(" ", "+"), o += "&internalType=" + i), t.next = 7, d.a.get(o);
                case 7:
                  return s = t.sent, c = [], 200 == s.status ? (l = s.data, Array.isArray(l.data) && (c = l.data, console.log(c))) : console.warn("Failed to retrieve a batch of frameworks by internalType. Status (".concat(s.status, ")")), t.abrupt("return", c);
                case 13:
                  throw t.prev = 13, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(o, ". Failed to retrieve a batch frameworks by internalType."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s, c, l;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/artemis/frameworks/update", t.prev = 1, i = {}, i.oldName = a, i.oldInternalType = r, i.framework = n, t.next = 8, d.a.post(o, i);
                case 8:
                  return s = t.sent, c = !1, 200 == s.status ? (l = s.data, c = Boolean(l.data)) : console.warn("Failed to retrieve a batch of frameworks by internalType. Status (".concat(s.status, ")")), t.abrupt("return", c);
                case 14:
                  throw t.prev = 14, t.t0 = t["catch"](1), console.error("Failed to reach the API : ".concat(o, ". Failed to retrieve a batch frameworks by internalType."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/updateByID", t.prev = 1, n = {}, n.framework = a, t.next = 6, d.a.post(r, n);
                case 6:
                  return o = t.sent, i = !1, 200 == o.status ? (s = o.data, i = Boolean(s.data)) : console.warn("Failed to update a framework by its Id. Status (".concat(o.status, ")")), t.abrupt("return", i);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/add", t.prev = 1, n = {}, n.framework = a, t.next = 6, d.a.post(r, n);
                case 6:
                  return o = t.sent, i = !1, 200 == o.status ? (s = o.data, i = Boolean(s.data)) : console.warn("Failed to add a framework by its Id. Status (".concat(o.status, ")")), t.abrupt("return", i);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/delete", t.prev = 1, n = { id: a }, t.next = 5, d.a.post(r, n);
                case 5:
                  return o = t.sent, i = !1, 200 == o.status ? (s = o.data, i = Boolean(s.data)) : console.warn("Failed to delete a framework by its Id. Status (".concat(o.status, ")")), t.abrupt("return", i);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o, i, s;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/frameworks/toggle/validation", t.prev = 1, n = { id: a }, t.next = 5, d.a.post(r, n);
                case 5:
                  return o = t.sent, i = !1, 200 == o.status ? (s = o.data, i = Boolean(s.data)) : console.warn("Failed to toggle the type of a framework by its Id. Status (".concat(o.status, ")")), t.abrupt("return", i);
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
    nn.API_BASE_URL = p.getUrl();
    var on = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "addNode", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category", t.prev = 1, t.next = 4, d.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category", t.prev = 1, t.next = 4, d.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/category/".concat(a.id), t.prev = 1, t.next = 4, d.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Boolean(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/category/all", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  if (r = t.sent, n = [], 200 != r.status) {
                    t.next = 12;
                    break;
                  }
                  return o = r.data, Array.isArray(o.data) && (n = o.data), t.abrupt("return", n);
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
    }();
    on.API_BASE_URL = p.getUrl();
    var sn = r["a"].component("FrameworkReviewer", {
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
            on.getAllNode().then((function(t) {
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
            this.editItemLoading = !0, nn.deleteFramework(this.items[this.editedIndex].id).then((function(t) {
              t && (e.refreshFramework(), e.closeDelete()), e.editItemError = "Failed to delete the framework";
            })).catch((function(t) {
              e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            }));
          }, toggleFramework: function(e) {
            var t = this;
            this.editItemLoading = !0, nn.toggleFramework(e.id).then((function(e) {
              e && t.refreshFramework();
            })).catch((function(e) {
              console.error("Toggle framework failed", e), t.editItemError = e;
            }));
          }, getNumberFrameworks: function() {
            var e = this;
            nn.getTotalFramework().then((function(t) {
              e.numberItems = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            }));
          }, getInternalTypes: function() {
            var e = this;
            nn.getInternalTypes().then((function(t) {
              e.internalTypes = t;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of internal types", e);
            }));
          }, updateFramework: function(e) {
            var t = this, a = this.focusedFramework.name, r = this.focusedFramework.internalType;
            this.frameworkUpdateSnackBar = a, console.log("New Framework : ", e), this.updatingFramework = !0, nn.updateFrameworks(a, r, e).then((function(e) {
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
            console.log("Deletion not implemented"), this.closeDelete();
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
            this.editedIndex > -1 ? (this.editItemLoading = !0, nn.updateFrameworksById(this.editedItem).then((function(t) {
              t && e.close(), e.editItemError = "Failed to update the framework";
            })).catch((function(t) {
              console.error("Failed to update the framework", t), e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            })), Object.assign(this.items[this.editedIndex], this.editedItem)) : (nn.addFramework(this.editedItem).then((function(t) {
              t && e.close(), e.editItemError = "Failed to add the framework";
            })).catch((function(t) {
              console.error("Failed to add the framework", t), e.editItemError = t;
            })).finally((function() {
              e.editItemLoading = !1;
            })), this.items.push(this.editedItem));
          }, getBatchFramework: function() {
            var e = this, t = this.page * this.itemsPerPage, a = t + this.itemsPerPage;
            this.getNumberFrameworks(), this.loadingTable = !0, nn.getFrameworkBatch(t, a).then((function(t) {
              e.items = t, e.currentIndex && e.setFrameworkFocus(e.currentIndex);
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1;
            }));
          }, getToValidateFramework: function() {
            var e = this;
            this.loadingTable = !0, nn.getToValidateFrameworks().then((function(t) {
              e.items = t, e.currentIndex = 0, e.numberItems = t.length;
            })).catch((function(e) {
              console.error("Failed to retrieve the list of frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1;
            }));
          }, getDuplicatesFramework: function() {
            var e = this;
            this.loadingTable = !0, nn.getDuplicatesFrameworks().then((function(t) {
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
            this.loadingAutoClean = !0, nn.launchAutoCleaning().then((function(t) {
              e.autoCleanInfo = "".concat(t, " groups were cleaned during the operation.");
            })).catch((function(e) {
              console.error("Failed to search for frameworks.", e);
            })).finally((function() {
              e.loadingAutoClean = !1;
            }));
          }, searchFrameworks: function() {
            var e = this;
            this.toSearch && 0 != this.toSearch.length ? (this.loadintTable = !0, this.loadingSearch = !0, nn.searchFramework(this.toSearch).then((function(t) {
              e.items = t, e.numberItems = t.length, e.currentIndex = 0;
            })).catch((function(e) {
              console.error("Failed to search for frameworks.", e);
            })).finally((function() {
              e.loadingTable = !1, e.loadingSearch = !1;
            }))) : this.refreshFramework();
          }, launchExport: function() {
            Fe.launchExportAll();
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
      }), cn = sn, ln = (a("0862"), a("2b5d")), un = a("e449"), dn = Object(O["a"])(cn, an, rn, !1, null, null, null),
      pn = dn.exports;
    V()(dn, {
      VAutocomplete: Ra["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCheckbox: nr["a"],
      VChip: Ve["a"],
      VChipGroup: Lr["a"],
      VCol: se["a"],
      VCombobox: ln["a"],
      VContainer: P["a"],
      VDataTable: xt["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VList: fr["a"],
      VListItem: gr["a"],
      VListItemTitle: br["c"],
      VMenu: un["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VSubheader: Ta["a"],
      VTextField: H["a"],
      VTextarea: ut["a"],
      VToolbar: Ja["a"],
      VToolbarTitle: Xa["a"],
      VTooltip: sr["a"],
    });
    var hn = function() {
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
    }, vn = [], mn = r["a"].extend({
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
          on.getAllNode().then((function(t) {
            e.items = t;
          })).catch((function(e) {
            console.log("Failed to retrieve the list of Category", e);
          }));
        }, editItem: function(e) {
          this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialog = !0;
        }, deleteItem: function(e) {
          this.editedIndex = this.items.indexOf(e), this.editedItem = Object.assign({}, e), this.dialogDelete = !0;
        }, deleteItemConfirm: function() {
          var e = this;
          on.deleteNode(this.editedItem).then((function(t) {
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
          this.editedIndex > -1 ? on.updateNode(this.editedItem).then((function(t) {
            e.textSnackBar = "Successfully updated the category.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to udpdate the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })) : on.addNode(this.editedItem).then((function(t) {
            e.textSnackBar = "Successfully added the category.", e.snackbarInfo = !0, e.initialize();
          })).catch((function(t) {
            e.textSnackBar = "Failed to add the Category. Error: ".concat(t), e.snackbarInfo = !0;
          })), this.close();
        },
      },
    }), fn = mn, gn = Object(O["a"])(fn, hn, vn, !1, null, null, null), bn = gn.exports;
    V()(gn, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VDataTable: xt["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VSubheader: Ta["a"],
      VTextField: H["a"],
      VToolbar: Ja["a"],
      VToolbarTitle: Xa["a"],
    });
    var xn = function() {
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
    }, wn = [], kn = (a("b64b"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "addRegexNode", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/add", t.prev = 1, t.next = 4, d.a.post(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/update", t.prev = 1, t.next = 4, d.a.put(r, a);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", o.data);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/artemis/regexes/all", t.prev = 1, t.next = 4, d.a.get(a);
                case 4:
                  if (r = t.sent, n = [], 200 != r.status) {
                    t.next = 12;
                    break;
                  }
                  return o = r.data, Array.isArray(o.data) && (n = o.data), t.abrupt("return", n);
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a, "/test"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Number(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a, "/request"), t.prev = 1, t.next = 4, d.a.get(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", String(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
            var r, n, o;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return r = e.API_BASE_URL + "/api/artemis/regexes/".concat(a), t.prev = 1, t.next = 4, d.a.delete(r);
                case 4:
                  if (n = t.sent, 200 != n.status) {
                    t.next = 10;
                    break;
                  }
                  return o = n.data, t.abrupt("return", Boolean(o.data));
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n, o, i, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, e.getAllNode();
                case 2:
                  for (a = t.sent, r = a.filter((function(e) {
                    return -1 == e.parentId;
                  })), n = a.filter((function(e) {
                    return -1 == e.parentId;
                  })), o = [], i = 0; i < n.length; i++) {
                    for (c in s = n[i], a) s.id == a[c].parentId && (s.children || (s.children = []), s.children.push(a[c]), n.push(a[c]));
                    o.push(s), n.splice(i, 1);
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
    }());
    kn.API_BASE_URL = p.getUrl();
    var yn = r["a"].extend({
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
          kn.addRegexNode(e).then((function(e) {
            t.focusedRegexNode = Object.assign({}, t.defaultRegexNode), t.addMode = !1, t.editMode = !1, t.displayInfoSnackbar("Successfully added the rule."), t.refresh();
          })).catch((function(e) {
            console.error("Failed to add the rule", e), t.displayInfoSnackbar("Failed to add the rule. Error: ".concat(e));
          }));
        }, displayInfoSnackbar: function(e) {
          this.textSnackBar = e, this.snackbarInfo = !0;
        }, updateRegex: function(e) {
          var t = this;
          kn.updateRegexNode(e).then((function(e) {
            t.addMode = !1, t.editMode = !1, t.displayInfoSnackbar("Successfully updated the rule."), t.refresh();
          })).catch((function(e) {
            console.error("Failed to update the rule"), t.displayInfoSnackbar("Failed to update the rule. Error: ".concat(e));
          }));
        }, appendToRegexList: function(e) {
          "" != this.currentRegexInput && e.regexes.push(this.currentRegexInput), this.currentRegexInput = "", this.focusedRegexNode = e;
        }, removeRegexNode: function(e) {
          var t = this;
          this.deletingNode = !0, kn.deleteRegexNode(this.toDelete.id).then((function(a) {
            a ? (t.displayInfoSnackbar("Successfully deleted the rule."), t.refresh()) : (console.error("Failed to delete the node.", e), t.displayInfoSnackbar("Failed to update the rule. Bad Request."));
          })).catch((function(a) {
            console.error("Failed to delete the node.", e), t.displayInfoSnackbar("Failed to delete the rule. Error: ".concat(a));
          })).finally((function() {
            t.dialogDeleteNode = !1, t.deletingNode = !1;
          }));
        }, askForDeletion: function(e) {
          var t = this;
          this.dialogDeleteNode = !0, this.toDelete = e, kn.testRegex(this.toDelete.id).then((function(e) {
            t.dialogDeleteNodeNumAffected = e;
          })).catch((function(e) {
            t.dialogDeleteNodeNumAffected = e;
          }));
        }, testRegexNode: function(e) {
          var t = this;
          kn.testRegex(e.id).then((function(e) {
            t.testRegexResults = "".concat(e, " objects matched this rule"), t.snackbarTestResults = !0;
          })).catch((function(e) {
            t.testRegexResults = e;
          }));
        }, removeFromList: function(e, t) {
          var a = e.regexes.indexOf(t);
          -1 != a && e.regexes.splice(a, 1), this.focusedRegexNode = e;
        }, getInternalTypes: function() {
          var e = this;
          nn.getInternalTypes().then((function(t) {
            e.internalTypes = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the list of internal types", e);
          }));
        }, getCategories: function() {
          var e = this;
          on.getAllNode().then((function(t) {
            e.categories = t;
          })).catch((function(e) {
            console.log("Failed to retrieve the list of categories");
          }));
        }, getAllNodesAsTree: function() {
          var e = this;
          kn.getAllNodesAsTree().then((function(t) {
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
    }), _n = yn, Cn = Object(O["a"])(_n, xn, wn, !1, null, null, null), An = Cn.exports;
    V()(Cn, {
      VAutocomplete: Ra["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VChip: Ve["a"],
      VChipGroup: Lr["a"],
      VCol: se["a"],
      VContainer: P["a"],
      VDialog: D["a"],
      VDivider: M["a"],
      VExpandTransition: ct["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
      VTreeview: dt["a"],
    });
    var In = r["a"].extend({
      name: "Frameworks",
      components: {
        ArtemisConsole: Mr,
        DetectionExplorer: tn,
        FrameworkReviewer: pn,
        CustomsCreator: An,
        CategoriesCreator: bn,
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
        this.applicationName = this.$store.state.applicationName, console.log("Checking if the Artemis extension is installed.."), yr.getArtemisVersion().then(function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
    }), Rn = In, Sn = (a("5f10"), Object(O["a"])(Rn, Sr, Tr, !1, null, null, null)), Tn = Sn.exports;
    V()(Sn, { VContainer: P["a"], VIcon: Ae["a"], VRow: U["a"], VTab: Ye["a"], VTabs: Je["a"] });
    var Fn = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "healthCheck", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t() {
            var a, r, n;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return a = e.API_BASE_URL + "/api/utils/healthCheck", t.prev = 1, t.next = 4, d.a.get(a);
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
    Fn.neo4jal = y.getInstance(), Fn.API_BASE_URL = p.getUrl();
    var On = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", { staticClass: "pa-10" }, [a("v-container", [a("v-card", { staticClass: "mx-auto mt-10" }, [a("v-card-title", [a("h3", [e._v("Generate reports for application " + e._s(e.application))]), a("v-spacer"), a("v-btn", {
        attrs: {
          icon: "",
          color: "green",
        }, on: { click: e.refresh },
      }, [a("v-icon", [e._v("mdi-cached")])], 1)], 1), a("v-card-text", [a("v-container", [e.reportGenerated || e.reportLoading ? e._e() : a("v-row", [a("v-btn", {
        staticClass: "ma-auto white--text",
        attrs: { color: "blue-grey" },
        on: {
          click: function(t) {
            return e.generateReport();
          },
        },
      }, [e._v(" Generate report "), a("v-icon", {
        attrs: {
          right: "",
          dark: "",
        },
      }, [e._v(" mdi-cloud-upload ")])], 1)], 1), !e.reportGenerated && e.reportLoading ? a("v-row", [a("v-container", [a("v-row", [e._v(" Creating report ...")]), a("v-row", [a("v-progress-circular", {
        attrs: {
          size: 50,
          color: "primary",
          indeterminate: "",
        },
      })], 1)], 1)], 1) : e._e(), e.reportGenerated && !e.reportLoading ? a("v-row", [a("v-container", [a("v-row", [e._v(" Report completed on ")]), a("v-row", [e._v(" " + e._s(e.groupResult) + " ")])], 1)], 1) : e._e()], 1)], 1)], 1)], 1)], 1)], 1);
    }, En = [], Vn = r["a"].extend({
      name: "Reporting", components: {}, computed: {
        getApplicationName: function() {
          return this.$store.state.applicationName;
        },
      }, mounted: function() {
        this.application = this.$store.state.applicationName;
      }, data: function() {
        return {
          application: "",
          reportGenerated: !1,
          reportLoading: !1,
          groupResultLoading: !1,
          groupResult: [],
          items: [],
        };
      }, methods: {
        generateReport: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  e.reportLoading = !0, e.groupResultLoading = !0, Ha.forecastAllGroups(e.application).then((function(t) {
                    e.groupResult = t;
                  })).catch((function(e) {
                    console.error("Error : ", e);
                  })), e.reportLoading = !1, e.reportGenerated = !0;
                case 5:
                case"end":
                  return t.stop();
              }
            }), t);
          })))();
        }, refresh: function() {
          this.reportGenerated = !1, this.reportLoading = !1, this.groupResultLoading = !1, this.groupResult = [];
        },
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.reportGenerated = !1;
        },
      },
    }), jn = Vn, Nn = Object(O["a"])(jn, On, En, !1, null, null, null), Ln = Nn.exports;
    V()(Nn, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VProgressCircular: Ya["a"],
      VRow: U["a"],
      VSpacer: q["a"],
    });
    var Pn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", { attrs: { fluid: "" } }, [a("v-row", [a("v-tabs", {
        staticClass: "pt-3",
        attrs: { "align-with-title": "", "fixed-tabs": "", "background-color": "charcoal", dark: "" },
        model: {
          value: e.tab, callback: function(t) {
            e.tab = t;
          }, expression: "tab",
        },
      }, e._l(e.items, (function(t) {
        return a("v-tab", { key: t.name }, [t.icon ? a("v-icon", { staticClass: "mr-3" }, [e._v(e._s(t.icon))]) : e._e(), e._v(" " + e._s(t.name) + " ")], 1);
      })), 1)], 1), a("v-row", [a("v-container", { staticClass: "mx-auto mt-10" }, [a("h4", { staticClass: "text-h4 ml-3 my-5" }, [e._v(" " + e._s(e.items[e.tab].title + e.application + " application") + " ")]), a(e.items[e.tab].view, { tag: "component" })], 1)], 1)], 1);
    }, Dn = [], Mn = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-card", [a("v-card-text", [a("v-row", { staticClass: "mx-2 mt-2 d-flex flex-column" }, [a("h5", { staticClass: "text-h5 black--text" }, [e._v("Statistics on the application")]), a("p", [e._v(" Quickly discover if the configuration of the application's analysis is correct with some statistiscs on it ")]), a("h3", [e._v("Color Schema :")]), a("p", [e._v(" The statistical tiles below change color according to the score they measure. A green tile is a sign that the statistics have a \"high percentage\" of compliance."), a("br"), e._v(" They they follow the following color schema : ")]), a("div", { staticClass: "color-ruler mb-6" }, [a("div", { staticClass: "round" }, [e._v("0")]), a("div", { staticClass: "round" }, [e._v("33")]), a("div", { staticClass: "round" }, [e._v("66")]), a("div", { staticClass: "round" }, [e._v("100")])]), a("p", [a("i", [e._v("Disclaimer : It can happens that even with the perfect configuration, the statistics display bad scores. Further investigation is necessary to understand where these scores come from."), a("br"), e._v(" That can done with the action tiles, below this section, to investigate direclty in CAST Imaging.")])])]), a("v-divider"), a("v-row", {
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
    }, Un = [], Bn = function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getStatisticResults", value: function() {
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t, a) {
            var r, n, o, i, s, c, l, u;
            return regeneratorRuntime.wrap((function(e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  return r = "CALL demeter.statistics.getAsList('".concat(t, "', '").concat(a, "')"), console.log("Request statstics : " + r), e.next = 4, this.neo4jal.execute(r);
                case 4:
                  for (n = e.sent, o = [], i = 0; i < n.records.length; i++) s = n.records[i], c = s.get("title"), l = s.get("description"), u = s.get("result"), u = u.replace(" - ", "").replaceAll(" - ", "<br \\><br \\>"), o.push({
                    title: c,
                    description: l,
                    result: u,
                  });
                  return e.abrupt("return", o);
                case 8:
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
          var e = Object(s["a"])(regeneratorRuntime.mark((function e(t) {
            var a, r, n, o, i, s;
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
                    title: "In TransactionUtils",
                    description: "Percentage of objects in transactions",
                    request: "MATCH (o:Object:".concat(t, ") WITH COUNT(o) as totObj\n        MATCH (obj:Object:").concat(t, ") WHERE NOT (:TransactionUtils:").concat(t, ")-[:Contains]->(obj) WITH  COUNT(DISTINCT obj) as notInTransaction, totObj \n        RETURN toFloat(notInTransaction) / totObj as percentage;"),
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
                  if (o = e.sent, 0 != o.records.length) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("continue", 14);
                case 11:
                  i = o.records[0], s = i.get("percentage"), r.push({
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
    }();
    Bn.neo4jal = y.getInstance();
    var Gn = function() {
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
    }, $n = [], qn = r["a"].extend({
      name: "PercentageTile",
      props: { title: String, description: String, percentage: Number, inverted: Boolean },
      mounted: function() {
        this.inverted ? this.displayedPercentage = 1 - this.percentage : this.displayedPercentage = this.percentage, this.displayedPercentage <= .25 ? this.indicatorColor = "#e76f51" : this.displayedPercentage > .25 && this.displayedPercentage <= .5 || this.displayedPercentage > .5 && this.displayedPercentage <= .75 ? this.indicatorColor = "#f4a261" : this.indicatorColor = "#2a9d8f";
      },
      data: function() {
        return { indicatorColor: "persianGrey", displayedPercentage: 0 };
      },
    }), Hn = qn, Wn = (a("fc47"), a("8e36")), Qn = Object(O["a"])(Hn, Gn, $n, !1, null, null, null), zn = Qn.exports;
    V()(Qn, { VCard: N["a"], VCardText: L["c"], VCardTitle: L["d"], VProgressLinear: Wn["a"] });
    var Yn = function() {
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
    }, Jn = [], Xn = (a("caad"), a("2532"), function() {
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
    }), Zn = [], Kn = {
      name: "GroupOperationsTile", props: { groupAction: Object }, data: function() {
        return { loading: !1 };
      }, methods: {
        execute: function() {
          var e = this;
          this.loading = !0, ne.executeAction(this.groupAction).catch((function(e) {
            console.error("The query failed to execute.", e);
          })).finally((function() {
            e.loading = !1;
          }));
        },
      },
    }, eo = Kn, to = Object(O["a"])(eo, Xn, Zn, !1, null, null, null), ao = to.exports;
    V()(to, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardTitle: L["d"],
      VIcon: Ae["a"],
      VListItem: gr["a"],
    });
    var ro = r["a"].extend({
      name: "ActionTileViewer", components: { GroupOperationsTile: ao }, data: function() {
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
          ne.getConfigurationActions(this.application).then((function(t) {
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
    }), no = ro, oo = Object(O["a"])(no, Yn, Jn, !1, null, null, null), io = oo.exports;
    V()(oo, {
      VAutocomplete: Ra["a"],
      VCard: N["a"],
      VCardText: L["c"],
      VDivider: M["a"],
      VRow: U["a"],
      VSlideGroup: G["b"],
      VSlideItem: $["a"],
      VSpacer: q["a"],
      VToolbar: Ja["a"],
      VToolbarTitle: Xa["a"],
    });
    var so = r["a"].extend({
      name: "ConfigurationStep",
      components: { PercentageTile: zn, ActionTileViewer: io },
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
          this.loadingStatistics = !0, this.statistics = [], Bn.getConfigurationStatistics(this.application).then((function(t) {
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
    }), co = so, lo = (a("154f"), Object(O["a"])(co, Mn, Un, !1, null, null, null)), uo = lo.exports;
    V()(lo, {
      VCard: N["a"],
      VCardText: L["c"],
      VContainer: P["a"],
      VDivider: M["a"],
      VProgressCircular: Ya["a"],
      VRow: U["a"],
    });
    var po = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("ActionTileViewer"), a("v-divider"), a("v-card", { staticClass: "pa-5 mb-3" }, [a("v-card-text", [a("v-row", [a("h5", { staticClass: "text-h5 black--text" }, [e._v(" Grouping exploration : Detach objects and investigate in CAST Imaging ")])]), a("v-row", { staticClass: "my-5" }, [a("p", [e._v(" Here is a selection of actions that you can execute on your application. "), a("br"), e._v(" The objects matching these use cases will be detached from the default levels and merged again to facilitate investigation and overview. ")])]), a("v-row", [a("v-skeleton-loader", {
        staticClass: "mx-auto",
        attrs: { width: "300", type: "card" },
      }), a("v-skeleton-loader", {
        staticClass: "mx-auto",
        attrs: { width: "300", type: "card" },
      }), a("v-skeleton-loader", { staticClass: "mx-auto", attrs: { width: "300", type: "card" } })], 1)], 1)], 1)], 1);
    }, ho = [], vo = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "px-5 mb-5 pt-4",
        attrs: { disabled: e.disabledTile },
      }, [a("v-card-text", [a("v-row", [a("h5", { staticClass: "text-h4 black--text" }, [e._v(" Automatic framework discovery ")])]), a("v-row", { staticClass: "my-5" }, [a("p", [e._v(" The "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" your application and finds objects belonging to open-source components. It analyzes the most popular online repositories and Google, and thanks to its built-in automatic learning algorithm, it finds the best matches. "), a("br"), e._v(" You can choose to activate or not these options. If no option is activated, the "), a("i", [e._v("Artemis : automatic framewok detector ")]), e._v(" will rely on it's own database to discover frameworks. ")])]), a("v-row", { staticClass: "mt-5" }, [a("h3", [e._v("Actions:")])]), a("v-row", { staticClass: "d-flex flex-column" }, [a("v-switch", {
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
      }, [a("p", [e._v(" " + e._s(e.ongoingDetection) + " "), a("strong", { staticClass: "mx-2" }, [e._v("Time Elapsed")]), e._v(e._s(e.toDisplay) + " ")])]) : e._e(), e.errorDetection && "" != e.errorDetection ? a("v-alert", {
        staticClass: "ma-2",
        attrs: { width: "100%", border: "left", dense: "", type: "error" },
      }, [e._v(" " + e._s(e.errorDetection) + " ")]) : e._e()], 1), a("v-divider"), a("v-card", { staticClass: "my-6" }, [a("v-card-title", [e._v(" Result of the detection: "), a("v-spacer"), a("v-text-field", {
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
    }, mo = [], fo = r["a"].extend({
      name: "ActionTileViewer", computed: {
        filteredFrameworks: function() {
          return console.log("Result size : " + this.resultDetection.filter((function(e) {
            return "Framework" == e.type;
          })).length), this.showOnlyFrameworks ? this.resultDetection.filter((function(e) {
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
          flaggedAsToDestroy: !1,
        };
      }, methods: {
        getConfiguration: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return e.loadingConfiguration = !0, t.next = 3, Fe.getOnlineMode();
                case 3:
                  return e.onlineMode = t.sent, t.next = 6, Fe.getRepositoryMode();
                case 6:
                  return e.repositoryMode = t.sent, t.next = 9, ye.getArtemisWorkspace();
                case 9:
                  return e.workspacePath = t.sent, t.next = 12, Fe.getSupportedLanguages().then((function(t) {
                    console.log("Avaible languages are :" + t.join(";")), e.availableLanguages = t, e.selectedLanguage = t[0];
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
          this.loadingOnlineMode = !0, Fe.setOnlineMode(this.onlineMode).then((function(t) {
            e.onlineMode = t;
          })).catch((function(t) {
            e.errorOnlineMode = !0, console.error("Failed to change online mode of Artemis Framework detector.", t);
          })).then((function() {
            e.loadingOnlineMode = !1;
          }));
        }, setRepositoryMode: function() {
          var e = this;
          this.loadingOnlineMode = !0, Fe.setRepositoryMode(this.repositoryMode).then((function(t) {
            e.repositoryMode = t;
          })).catch((function(t) {
            console.error("Failed to change the repository setting of Artemis.", t), e.errorRepositoryMode = !0;
          })).then((function() {
            e.loadingOnlineMode = !1;
          }));
        }, milisecondsToDhms: function(e) {
          var t = Number(e / 1e3), a = Math.floor(t / 86400), r = Math.floor(t % 86400 / 3600),
            n = Math.floor(t % 3600 / 60), o = Math.floor(t % 60), i = a > 0 ? a + (1 == a ? " day, " : " days, ") : "",
            s = r > 0 ? r + (1 == r ? " hour, " : " hours, ") : "",
            c = n > 0 ? n + (1 == n ? " minute, " : " minutes, ") : "",
            l = o > 0 ? o + (1 == o ? " second" : " seconds") : "";
          return i + s + c + l;
        }, countDownTimer: function() {
          this.toDisplay = this.milisecondsToDhms(Date.now() - this.detection.timestampStart), setTimeout(this.countDownTimer, 1e3);
        }, checkStatus: function() {
          var e = this;
          this.checkingStatus || (this.checkingStatus = !0, Vr.getApplicationStatus(this.application).then((function(t) {
            if (console.log("Got status", t), null == t) return e.ongoingDetection = "", void (e.errorDetection = "");
            switch (e.detection = t, t.status) {
              case Rr.Pending:
                e.ongoingDetection = "On-going detection for the ".concat(e.application, " application."), e.runningArtemis = !0, e.errorDetection = "", e.countDownTimer();
                break;
              case Rr.Success:
                e.resultDetection = t.data, e.runningArtemis = !1, e.errorDetection = "", e.ongoingDetection = "";
                break;
              case Rr.Failure:
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
        }, launchDetection: function() {
          var e = this;
          this.displayErrorDetection = !1, Vr.launchDetection(this.application, this.selectedLanguage).then((function(t) {
            if (!t) throw new Error("The server refused to launch the detection. Check the logs.");
            e.runningArtemis = !0;
          })).catch((function(t) {
            console.error("The analysis of the application ".concat(e.application, " failed to launch."), t), e.errorDetection = t;
          }));
        }, stopDetection: function() {
          var e = this;
          this.displayErrorDetection = !1, Vr.cancelDetection(this.application, this.selectedLanguage).then((function(t) {
            if (!t) throw new Error("The server refused to stopped the detection. Check the logs.");
            e.runningArtemis = !1;
          })).catch((function(t) {
            console.error("Failed to stop the on-going analysis.", t), e.errorDetection = "Failed to stop the on-going analysis. Error : ".concat(t);
          }));
        }, constantStatusCheck: function() {
          this.diplayNotInstalled || (this.checkStatus(), this.flaggedAsToDestroy || setTimeout(this.constantStatusCheck, 3e3));
        }, cancelDetection: function() {
        },
      }, mounted: function() {
        var e = this;
        this.disabledTile = !0, this.resultDetection = [], yr.getArtemisVersion().then(function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a) {
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
        })), this.constantStatusCheck();
      }, beforeDestroy: function() {
        this.flaggedAsToDestroy = !0;
      }, watch: {
        getApplicationName: function(e) {
          this.application = e, this.resultDetection = [], this.runningArtemis = !1, this.checkStatus();
        },
      },
    }), go = fo, bo = (a("0658"), Object(O["a"])(go, vo, mo, !1, null, null, null)), xo = bo.exports;
    V()(bo, {
      VAlert: vr["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCheckbox: nr["a"],
      VCol: se["a"],
      VDataTable: xt["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSpacer: q["a"],
      VSubheader: Ta["a"],
      VSwitch: Pr["a"],
      VTextField: H["a"],
    });
    var wo = r["a"].extend({
      name: "ExplorationStep",
      components: { ActionTileViewer: xo },
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
    }), ko = wo, yo = (a("252f"), a("3129")), _o = Object(O["a"])(ko, po, ho, !1, null, null, null), Co = _o.exports;
    V()(_o, {
      VCard: N["a"],
      VCardText: L["c"],
      VContainer: P["a"],
      VDivider: M["a"],
      VRow: U["a"],
      VSkeletonLoader: yo["a"],
    });
    var Ao = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-container", [a("v-row", [a("BreakdownApplication")], 1)], 1);
    }, Io = [], Ro = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-card", {
        staticClass: "ma-2",
        attrs: { width: "100%" },
      }, [a("v-card-title", [e._v(" Generate rules from the breakdown of the application " + e._s(e.applicationName) + " "), a("v-spacer"), a("v-btn", {
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
      })), 1), a("v-row", [a("h3", { staticClass: "mx-4 mb-2" }, [e._v(" Select the externality: " + e._s(e.classExternality) + " ")])]), a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-switch", {
        attrs: {
          label: e.classExternality ? "External class" : "Internal classes",
          color: "primary",
        }, model: {
          value: e.classExternality, callback: function(t) {
            e.classExternality = t;
          }, expression: "classExternality",
        },
      })], 1), a("v-row", [a("h3", { staticClass: "mx-4 mb-2 mt-3" }, [e._v("Select the language:")])]), a("v-row", [a("v-col", { attrs: { cols: "12" } }, [a("v-row", { staticClass: "pa-4" }, [a("v-select", {
        staticClass: "mx-2",
        attrs: { items: e.languageItems, label: "Language", outlined: "" },
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
            return [a("v-container", [a("v-row", [a("p", {
              staticClass: "my-2",
              staticStyle: { "word-break": "break-word" },
            }, [a("strong", [e._v(e._s(r.customName || r.name) + " ")]), a("i", { staticClass: "text--persianGrey" }, [e._v("( items count : " + e._s(r.count) + ")")]), a("br")]), a("v-tooltip", {
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
                  var n = t.on, o = t.attrs;
                  return [a("v-icon", e._g(e._b({
                    staticClass: "ma-2", on: {
                      click: function(t) {
                        return e.selectFramework(r);
                      },
                    },
                  }, "v-icon", o, !1), n), [e._v("mdi-keyboard-caps")])];
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
        }], null, !1, 3596214570),
        model: {
          value: e.artifactTree, callback: function(t) {
            e.artifactTree = t;
          }, expression: "artifactTree",
        },
      }), 0 === e.artifactItems.length ? a("p", { staticClass: "pa-4" }, [a("i", [e._v("No object found for this language in the application.")])]) : e._e()], 1), a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Do you want the selection in the same group or separated ? ")])]), a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-select", {
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
      })], 1) : e._e(), "architecture" === e.selectedTarget && "together" !== e.selectedLocation ? a("v-row", [a("p", { staticClass: "mx-4 mb-6" }, [e._v("If you choose to extract the nodes separately, one subset will be created by item selected. ")])]) : e._e(), "architecture" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", [a("h3", { staticClass: "mx-4 mb-6" }, [e._v(" Enter the name of the subset: ")])]) : e._e(), "architecture" === e.selectedTarget && "together" === e.selectedLocation ? a("v-row", { staticClass: "mx-4 mb-2" }, [a("v-text-field", {
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
    }, So = [], To = (a("7db0"), function() {
      function e() {
        Object(c["a"])(this, e);
      }

      return Object(l["a"])(e, null, [{
        key: "getArtifactList", value: function() {
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/artemis/artifacts/all?external=".concat(n), i = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, d.a.post(o, i);
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
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(o, ". The breakdown failed."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n) {
            var o, i, s, c;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return o = e.API_BASE_URL + "/api/artemis/artifacts/tree?external=".concat(n), i = {
                    application: a,
                    language: r,
                  }, t.prev = 2, t.next = 5, d.a.post(o, i);
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
                  throw t.prev = 15, t.t0 = t["catch"](2), console.error("Failed to reach the API : ".concat(o, ". Failed to get the Artifact tree."), t.t0), t.t0;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n, o) {
            var i, s, c, l, u;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, this.getArtifactList(r, n, o);
                case 2:
                  for (s in i = t.sent, a) c = e.getFullNameRec(a[s], i), a[s].name = c;
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
          var t = Object(s["a"])(regeneratorRuntime.mark((function t(a, r, n, o, i, s) {
            var c, l, u, p;
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return c = e.API_BASE_URL + "/api/artemis/artifacts/extract", l = {
                    application: a,
                    artifactList: r,
                    extractionType: n,
                    groupType: o,
                    primaryGroupName: i,
                    secondaryGroupName: s,
                  }, t.prev = 2, t.next = 5, d.a.post(c, l);
                case 5:
                  if (u = t.sent, 200 != u.status) {
                    t.next = 11;
                    break;
                  }
                  return p = u.data, t.abrupt("return", p.data);
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

          function a(e, a, r, n, o, i) {
            return t.apply(this, arguments);
          }

          return a;
        }(),
      }]), e;
    }());
    To.API_BASE_URL = p.getUrl();
    var Fo = function() {
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
    }, Oo = [], Eo = (a("04d3"), r["a"].extend({
      name: "FrameworkDispatch", props: { model: Boolean, artifact: Object }, watch: {
        artifact: function() {
          this.frameworkArtifact = this.artifact, this.frameworkArtifact.children && this.frameworkArtifact.children > 0 ? this.frameworkArtifact.fullName += this.frameworkArtifact.delimiter + "*" : this.frameworkArtifact.fullName += "*", this.authorizedType = this.frameworkArtifact.objectTypes, this.frameworkArtifact.pattern = this.frameworkArtifact.name + ".*", this.frameworkArtifact.isRegex = !0;
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if ("framework" != e.choice) {
                    t.next = 6;
                    break;
                  }
                  return e.categoriesLoading = !0, t.next = 4, on.getAllNode();
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
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
                  }, t.prev = 1, t.next = 4, nn.addFramework(a);
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
          return Object(s["a"])(regeneratorRuntime.mark((function e() {
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
    })), Vo = Eo, jo = (a("b112"), Object(O["a"])(Vo, Fo, Oo, !1, null, null, null)), No = jo.exports;
    V()(jo, {
      VAutocomplete: Ra["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCheckbox: nr["a"],
      VContainer: P["a"],
      VDialog: D["a"],
      VIcon: Ae["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSpacer: q["a"],
      VTextField: H["a"],
      VTextarea: ut["a"],
    });
    var Lo = r["a"].extend({
      name: "BreakdownApplication", components: { FrameworkDispatch: No }, watch: {
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
          classExternality: !1,
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
          To.buildQuerySet(this.artifactTree, this.defaultApplication, this.defaultLanguage, this.classExternality).then((function(t) {
            e.fullQuerySet = t;
          })).catch((function(t) {
            e.fullQuerySet = t;
          }));
        }, getNodeList: function() {
          var e = this;
          kn.getAllNode().then((function(t) {
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
          _.getListApplications().then((function(t) {
            console.log("Application list", t), e.applicationItems = t, e.defaultApplication = t[0];
          })).catch((function(e) {
            console.error("Failed to get the list of the application");
          })), Fe.getSupportedLanguages().then((function(t) {
            e.languageItems = t, e.defaultLanguage = t[0];
          })).catch((function(e) {
            console.error("Failed to retrieve languages.", e);
          }));
        }, getArtifactTree: function() {
          var e = this;
          this.loadingArtifacts = !0, To.getArtifactAsTree(this.applicationName, this.defaultLanguage, this.classExternality).then((function(t) {
            console.log("Get Artifact Tree", t), e.artifactItems = t;
          })).catch((function(t) {
            console.error("Error trying to retrieve the breakdown of ".concat(e.defaultApplication), t);
          })).finally((function() {
            e.loadingArtifacts = !1;
          }));
        }, getPrefix: function() {
          var e = this;
          Mt.getPrefix(this.nameAgent).then((function(t) {
            e.prefix = t;
          })).catch((function(e) {
            console.error("Failed to retrieve the prefix of the Framework agent", e);
          }));
        }, getApplicationInsights: function() {
          var e = this;
          this.loadingCandidates = !0, _.getApplicationInsights(this.applicationName).then((function(t) {
            e.insights = t;
          })).catch((function(e) {
            console.error("Failed to get the insights of the application", e);
          })).finally((function() {
            e.loadingCandidates = !1;
          }));
        }, getRequests: function(e) {
          var t = this;
          return Object(s["a"])(regeneratorRuntime.mark((function a() {
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
                  return n = a.t1.value, r += "<span style='color: #66B245'>// " + e[n].name + "</span><br />", a.t2 = r, a.next = 11, kn.getRegexRequest(e[n].id);
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
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
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
          To.launchQuerySet(this.applicationName, this.artifactTree, this.selectedLocation, this.selectedTarget, this.primaryGroupName, this.secondaryGroupName).then((function(a) {
            e.textSnackBar = "Extraction to a ".concat(t, " is a success. Refresh Imaging in few seconds"), e.refresh();
          })).catch((function(t) {
            e.textSnackBar = "Failed to perform the extraction. Error : " + t, console.error("Failed to perform the extraction", t);
          }));
        }, refresh: function() {
          this.getApplicationInsights(), this.getArtifactTree(), this.getApplicationAndLanguages();
        },
      }, mounted: function() {
        this.applicationName = this.$store.state.applicationName, this.refresh();
      },
    }), Po = Lo, Do = Object(O["a"])(Po, Ro, So, !1, null, "631d4316", null), Mo = Do.exports;
    V()(Do, {
      VBtn: j["a"],
      VCard: N["a"],
      VCardSubtitle: L["b"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VCol: se["a"],
      VContainer: P["a"],
      VIcon: Ae["a"],
      VProgressCircular: Ya["a"],
      VRow: U["a"],
      VSelect: Sa["a"],
      VSnackbar: lt["a"],
      VSpacer: q["a"],
      VSwitch: Pr["a"],
      VTextField: H["a"],
      VTooltip: sr["a"],
      VTreeview: dt["a"],
    });
    var Uo = r["a"].extend({
      name: "BreakdownStep", components: { BreakdownApplication: Mo }, data: function() {
        return {};
      },
    }), Bo = Uo, Go = Object(O["a"])(Bo, Ao, Io, !1, null, null, null), $o = Go.exports;
    V()(Go, { VContainer: P["a"], VRow: U["a"] });
    var qo = r["a"].extend({
      name: "AnalysisChecker",
      components: { BreakdownStep: $o, ConfigurationStep: uo, ExplorationStep: Co },
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
            name: "Exploration",
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
    }), Ho = qo, Wo = (a("2aa6"), Object(O["a"])(Ho, Pn, Dn, !1, null, null, null)), Qo = Wo.exports;
    V()(Wo, { VContainer: P["a"], VIcon: Ae["a"], VRow: U["a"], VTab: Ye["a"], VTabs: Je["a"] });
    var zo = r["a"].extend({
        name: "Application",
        components: {
          Reporting: Ln,
          Enrichment: Ir,
          Administration: Ze,
          AnalysisChecker: Qo,
          Frameworks: Tn,
          ImagingTuning: Et,
        },
        mounted: function() {
          this.getApplicationList(), this.healthcheck();
        },
        computed: {
          getCurrentView: function() {
            return this.$store.state.currentView;
          },
        },
        data: function() {
          return {
            tab: 0,
            currentScreen: "Reporting",
            items: [{ name: "Reporting", screen: "Reporting", icon: "mdi-file" }, {
              name: "Analysis Checker",
              screen: "AnalysisChecker",
              icon: "mdi-file-cad",
            }, { name: "Enrichment", screen: "Enrichment", icon: "mdi-hexagon-multiple" }, {
              name: "Frameworks",
              screen: "Frameworks",
              icon: "mdi-package-variant-closed",
            }, { name: "Imaging tuning", screen: "ImagingTuning", icon: "mdi-merge" }],
            loadingApplication: !0,
            applicationName: "",
            applicationList: [],
            onlineDatabase: !1,
          };
        },
        methods: {
          changeApplication: function(e) {
            this.applicationName = e, this.$store.state.applicationName = e;
          }, getApplicationList: function() {
            var e = this;
            this.loadingApplication = !0, _.getListApplications().then((function(t) {
              e.applicationList = t, 0 != t.length ? e.changeApplication(t[0]) : e.applicationName = "No Application found", e.loadingApplication = !1;
            }));
          }, simpleHealthCheck: function() {
            var e = this;
            Fn.healthCheck().then((function(t) {
              e.onlineDatabase = t;
            })).catch((function(t) {
              e.onlineDatabase = !1;
            }));
          }, healthcheck: function() {
            var e = this;
            Fn.healthCheck().then((function(t) {
              e.onlineDatabase = t;
            })).catch((function(t) {
              e.onlineDatabase = !1;
            })).finally((function() {
              setTimeout(function() {
                this.healthcheck();
              }.bind(e), 5e3);
            }));
          }, changeView: function(e) {
            console.log("Go to administration"), this.$store.state.currentView = e, this.currentScreen = e;
          }, logout: function() {
            x.deleteProperties(), document.location.reload();
          },
        },
        watch: {
          applicationName: function() {
            this.changeApplication(this.applicationName);
          }, tab: function() {
            this.$store.state.currentView = this.items[this.tab].name, this.currentScreen = this.items[this.tab].screen;
          }, getCurrentView: function(e) {
            for (var t = 0; t < this.items.length; t++) this.items[t].name === e && (this.tab = t);
          },
        },
      }), Yo = zo, Jo = (a("ad21"), a("7496")), Xo = a("34c3"), Zo = a("f774"),
      Ko = Object(O["a"])(Yo, o, i, !1, null, null, null), ei = Ko.exports;
    V()(Ko, {
      VApp: Jo["a"],
      VAutocomplete: Ra["a"],
      VDivider: M["a"],
      VIcon: Ae["a"],
      VList: fr["a"],
      VListItem: gr["a"],
      VListItemContent: br["a"],
      VListItemGroup: xr["a"],
      VListItemIcon: Xo["a"],
      VListItemSubtitle: br["b"],
      VListItemTitle: br["c"],
      VNavigationDrawer: Zo["a"],
      VRow: U["a"],
      VSpacer: q["a"],
      VToolbar: Ja["a"],
      VToolbarTitle: Xa["a"],
      VTooltip: sr["a"],
    });
    var ti = function() {
      var e = this, t = e.$createElement, a = e._self._c || t;
      return a("v-app", { staticClass: "main-application" }, [e.showLogin ? a("v-container", {
        staticClass: "login-container mx-auto",
        attrs: { "fill-height": "" },
      }, [a("v-card", {
        ref: "form",
        staticClass: "mx-auto",
      }, [a("v-card-text", [a("v-card-title", { staticClass: "mt-3 mb-8" }, [a("h2", [e._v(" Log in to Neo4j database ")])]), a("v-text-field", {
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
          type: e.show1 ? "text" : "password",
          name: "input-10-1",
          label: "Database password",
        }, on: {
          "click:append": function(t) {
            e.show1 = !e.show1;
          },
        }, model: {
          value: e.credentials.password, callback: function(t) {
            e.$set(e.credentials, "password", t);
          }, expression: "credentials.password",
        },
      }), a("v-text-field", {
        attrs: { name: "input-10-1", label: "Database bolt URI" },
        on: {
          "click:append": function(t) {
            e.show1 = !e.show1;
          },
        },
        model: {
          value: e.uri, callback: function(t) {
            e.uri = t;
          }, expression: "uri",
        },
      }), e.failedLogin ? a("div", {
        staticClass: "red darken-2 text-center pa-2",
        attrs: { width: "100%" },
      }, [a("span", { staticClass: "white--text" }, [e._v("Wrong credentials / URI. Contact your CAST Imaging administrator for more informations.")])]) : e._e(), a("v-divider"), a("div", [a("p", { staticClass: "mt-2 text-subtitle-1" }, [e._v("Options :")]), a("v-switch", {
        attrs: { label: "Internal use ( CAST User )" },
        on: { change: e.setInternalMode },
        model: {
          value: e.switchInternalUse, callback: function(t) {
            e.switchInternalUse = t;
          }, expression: "switchInternalUse",
        },
      })], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", {
        attrs: { color: "primary", text: "" },
        on: { click: e.save },
      }, [e._v(" Login ")])], 1)], 1)], 1) : e._e()], 1);
    }, ai = [], ri = pe["a"].extend({
      name: "Login", data: function() {
        return {
          failedLogin: !1,
          showLogin: !0,
          show1: !1,
          uri: x.getProperties().neo4jUri,
          credentials: {},
          switchInternalUse: !1,
        };
      }, mounted: function() {
        this.getInternalMode();
      }, methods: {
        save: function() {
          var e = this, t = x.getProperties();
          t.neo4jUri = this.uri, x.saveProperties(t), y.connectWithCredentials(this.credentials);
          var a = y.getInstance();
          console.log("new props ", t), a.testConnection().then((function(t) {
            console.log("Connection successful.", t), e.$router.replace("/atlas/main"), window.location.reload();
          })).catch((function(t) {
            console.error("Cannot connect to Neo4j", t), e.failedLogin = !0;
          }));
        }, setInternalMode: function() {
          var e = this;
          return Object(s["a"])(regeneratorRuntime.mark((function t() {
            return regeneratorRuntime.wrap((function(t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  return t.next = 2, ye.setInternalMode(!e.switchInternalUse).then((function(e) {
                    console.log("Internal mode was changed to ", e);
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
          ye.getInternalMode().then((function(t) {
            e.switchInternalUse = t;
          })).catch((function(t) {
            console.log("Failed to change the value of internal mode.", t), e.switchInternalUse = !1;
          }));
        },
      },
    }), ni = ri, oi = (a("97a1"), Object(O["a"])(ni, ti, ai, !1, null, null, null)), ii = oi.exports;
    V()(oi, {
      VApp: Jo["a"],
      VBtn: j["a"],
      VCard: N["a"],
      VCardActions: L["a"],
      VCardText: L["c"],
      VCardTitle: L["d"],
      VContainer: P["a"],
      VDivider: M["a"],
      VSpacer: q["a"],
      VSwitch: Pr["a"],
      VTextField: H["a"],
    });
    var si = a("8c4f");
    r["a"].use(si["a"]), r["a"].component("Login", ii), r["a"].component("Application", ei);
    var ci = [{ path: "/atlas/main", name: "Main", component: ei }, {
        path: "/atlas/login",
        name: "Login",
        component: ii,
      }, {
        path: "/atlas/about", name: "About", component: function() {
          return a.e("about").then(a.bind(null, "f820"));
        },
      }, { path: "*", name: "404", component: { template: "<h2>404 - Not found</h2>" } }],
      li = new si["a"]({ mode: "history", routes: ci }), ui = li, di = a("f309");
    r["a"].use(di["a"]);
    var pi = new di["a"]({
      theme: {
        themes: {
          light: {
            grey: "#363636",
            charcoal: "#264653",
            persianGrey: "#2a9d8f",
            orange: "#e9c46a",
            brown: "#f4a261",
            sienna: "#e76f51",
          },
        },
      },
    });
    r["a"].use(n["a"]);
    var hi = new n["a"].Store({
      state: {
        applicationName: "",
        currentView: {},
        daemonLevelState: !0,
        daemonModuleState: !0,
      },
    });
    r["a"].config.productionTip = !1, r["a"].use(n["a"]), console.log("Launching Olympus"), y.connect();
    var vi, mi = y.getInstance();
    mi.testConnection().then((function() {
      ui.replace("/atlas/main"), vi = ei;
    })).catch((function(e) {
      console.warn("Connection to Neo4j failed.", e), ui.replace("/atlas/login"), vi = ii;
    })).finally((function() {
      new r["a"]({
        router: ui, vuetify: pi, store: hi, render: function(e) {
          return e(vi);
        },
      }).$mount("#app");
    }));
  }, d4a6: function(e, t, a) {
    var r = a("da95");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("c73447ba", r, !0, { sourceMap: !1, shadowMode: !1 });
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
  }, e062: function(e, t, a) {
    var r = a("0ba8");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("7987ba80", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, eb5e: function(e, t, a) {
    var r = a("7551");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("56750d08", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, ec8c: function(e, t, a) {
    "use strict";
    a("e062");
  }, f015: function(e, t, a) {
    var r = a("76c7");
    "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
    var n = a("499e").default;
    n("54dcfb53", r, !0, { sourceMap: !1, shadowMode: !1 });
  }, f45b: function(e, t, a) {
    var r = a("24fb");
    t = r(!1), t.push([e.i, ".modernization-stepper{width:100%}.v-tab--active{background-color:rgba(90,114,124,.6509803921568628)}.v-tabs-slider-wrapper{border-bottom:6px solid #2a9d8f}", ""]), e.exports = t;
  }, fc47: function(e, t, a) {
    "use strict";
    a("c773");
  }, ff56: function(e, t, a) {
    "use strict";
    a("b7bb");
  },
});
//# sourceMappingURL=app.e2616ff1.js.map