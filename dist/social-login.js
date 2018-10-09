! function (t, e) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = e(require("react"));
  else if ("function" == typeof define && define.amd) define(["react"], e);
  else {
    var n = e("object" == typeof exports ? require("react") : t.React);
    for (var r in n)("object" == typeof exports ? exports : t)[r] = n[r]
  }
}(this, function (t) {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 9)
  }([function (t, e, n) {
    (function (e, n, r) {
      ! function (e) {
        t.exports = e()
      }(function () {
        var t, i, o;
        return function t(e, n, r) {
          function i(a, s) {
            if (!n[a]) {
              if (!e[a]) {
                var c = "function" == typeof _dereq_ && _dereq_;
                if (!s && c) return c(a, !0);
                if (o) return o(a, !0);
                var u = Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
              }
              var l = n[a] = {
                exports: {}
              };
              e[a][0].call(l.exports, function (t) {
                var n = e[a][1][t];
                return i(n || t)
              }, l, l.exports, t, e, n, r)
            }
            return n[a].exports
          }
          for (var o = "function" == typeof _dereq_ && _dereq_, a = 0; r.length > a; a++) i(r[a]);
          return i
        }({
          1: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
              function e(t) {
                var e = new n(t),
                  r = e.promise();
                return e.setHowMany(1), e.setUnwrap(), e.init(), r
              }
              var n = t._SomePromiseArray;
              t.any = function (t) {
                return e(t)
              }, t.prototype.any = function () {
                return e(this)
              }
            }
          }, {}],
          2: [function (t, n, r) {
            "use strict";

            function i() {
              this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new l(16), this._normalQueue = new l(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
              var t = this;
              this.drainQueues = function () {
                t._drainQueues()
              }, this._schedule = u
            }

            function o(t, e, n) {
              this._lateQueue.push(t, e, n), this._queueTick()
            }

            function a(t, e, n) {
              this._normalQueue.push(t, e, n), this._queueTick()
            }

            function s(t) {
              this._normalQueue._pushOne(t), this._queueTick()
            }
            var c;
            try {
              throw Error()
            } catch (t) {
              c = t
            }
            var u = t("./schedule"),
              l = t("./queue"),
              f = t("./util");
            i.prototype.setScheduler = function (t) {
              var e = this._schedule;
              return this._schedule = t, this._customScheduler = !0, e
            }, i.prototype.hasCustomScheduler = function () {
              return this._customScheduler
            }, i.prototype.enableTrampoline = function () {
              this._trampolineEnabled = !0
            }, i.prototype.disableTrampolineIfNecessary = function () {
              f.hasDevTools && (this._trampolineEnabled = !1)
            }, i.prototype.haveItemsQueued = function () {
              return this._isTickUsed || this._haveDrainedQueues
            }, i.prototype.fatalError = function (t, n) {
              n ? (e.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), e.exit(2)) : this.throwLater(t)
            }, i.prototype.throwLater = function (t, e) {
              if (1 === arguments.length && (e = t, t = function () {
                  throw e
                }), "undefined" != typeof setTimeout) setTimeout(function () {
                t(e)
              }, 0);
              else try {
                this._schedule(function () {
                  t(e)
                })
              } catch (t) {
                throw Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
              }
            }, f.hasDevTools ? (i.prototype.invokeLater = function (t, e, n) {
              this._trampolineEnabled ? o.call(this, t, e, n) : this._schedule(function () {
                setTimeout(function () {
                  t.call(e, n)
                }, 100)
              })
            }, i.prototype.invoke = function (t, e, n) {
              this._trampolineEnabled ? a.call(this, t, e, n) : this._schedule(function () {
                t.call(e, n)
              })
            }, i.prototype.settlePromises = function (t) {
              this._trampolineEnabled ? s.call(this, t) : this._schedule(function () {
                t._settlePromises()
              })
            }) : (i.prototype.invokeLater = o, i.prototype.invoke = a, i.prototype.settlePromises = s), i.prototype._drainQueue = function (t) {
              for (; t.length() > 0;) {
                var e = t.shift();
                if ("function" == typeof e) {
                  e.call(t.shift(), t.shift())
                } else e._settlePromises()
              }
            }, i.prototype._drainQueues = function () {
              this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue)
            }, i.prototype._queueTick = function () {
              this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues))
            }, i.prototype._reset = function () {
              this._isTickUsed = !1
            }, n.exports = i, n.exports.firstLineError = c
          }, {
            "./queue": 26,
            "./schedule": 29,
            "./util": 36
          }],
          3: [function (t, e, n) {
            "use strict";
            e.exports = function (t, e, n, r) {
              var i = !1,
                o = function (t, e) {
                  this._reject(e)
                },
                a = function (t, e) {
                  e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t)
                },
                s = function (t, e) {
                  0 == (50397184 & this._bitField) && this._resolveCallback(e.target)
                },
                c = function (t, e) {
                  e.promiseRejectionQueued || this._reject(t)
                };
              t.prototype.bind = function (o) {
                i || (i = !0, t.prototype._propagateFrom = r.propagateFromFunction(), t.prototype._boundValue = r.boundValueFunction());
                var u = n(o),
                  l = new t(e);
                l._propagateFrom(this, 1);
                var f = this._target();
                if (l._setBoundTo(u), u instanceof t) {
                  var p = {
                    promiseRejectionQueued: !1,
                    promise: l,
                    target: f,
                    bindingPromise: u
                  };
                  f._then(e, a, void 0, l, p), u._then(s, c, void 0, l, p), l._setOnCancel(u)
                } else l._resolveCallback(f);
                return l
              }, t.prototype._setBoundTo = function (t) {
                void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField
              }, t.prototype._isBound = function () {
                return 2097152 == (2097152 & this._bitField)
              }, t.bind = function (e, n) {
                return t.resolve(n).bind(e)
              }
            }
          }, {}],
          4: [function (t, e, n) {
            "use strict";

            function r() {
              try {
                Promise === o && (Promise = i)
              } catch (t) {}
              return o
            }
            var i;
            "undefined" != typeof Promise && (i = Promise);
            var o = t("./promise")();
            o.noConflict = r, e.exports = o
          }, {
            "./promise": 22
          }],
          5: [function (t, e, n) {
            "use strict";
            var r = Object.create;
            if (r) {
              var i = r(null),
                o = r(null);
              i[" size"] = o[" size"] = 0
            }
            e.exports = function (e) {
              function n(t, n) {
                var r;
                if (null != t && (r = t[n]), "function" != typeof r) {
                  var i = "Object " + s.classString(t) + " has no method '" + s.toString(n) + "'";
                  throw new e.TypeError(i)
                }
                return r
              }

              function r(t) {
                return n(t, this.pop()).apply(t, this)
              }

              function i(t) {
                return t[this]
              }

              function o(t) {
                var e = +this;
                return 0 > e && (e = Math.max(0, e + t.length)), t[e]
              }
              var a, s = t("./util"),
                c = s.canEvaluate;
              e.prototype.call = function (t) {
                var e = [].slice.call(arguments, 1);
                return e.push(t), this._then(r, void 0, void 0, e, void 0)
              }, e.prototype.get = function (t) {
                var e, n = "number" == typeof t;
                if (n) e = o;
                else if (c) {
                  var r = a(t);
                  e = null !== r ? r : i
                } else e = i;
                return this._then(e, void 0, void 0, t, void 0)
              }
            }
          }, {
            "./util": 36
          }],
          6: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i) {
              var o = t("./util"),
                a = o.tryCatch,
                s = o.errorObj,
                c = e._async;
              e.prototype.break = e.prototype.cancel = function () {
                if (!i.cancellation()) return this._warn("cancellation is disabled");
                for (var t = this, e = t; t._isCancellable();) {
                  if (!t._cancelBy(e)) {
                    e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                    break
                  }
                  var n = t._cancellationParent;
                  if (null == n || !n._isCancellable()) {
                    t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                    break
                  }
                  t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = n
                }
              }, e.prototype._branchHasCancelled = function () {
                this._branchesRemainingToCancel--
              }, e.prototype._enoughBranchesHaveCancelled = function () {
                return void 0 === this._branchesRemainingToCancel || 0 >= this._branchesRemainingToCancel
              }, e.prototype._cancelBy = function (t) {
                return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0))
              }, e.prototype._cancelBranched = function () {
                this._enoughBranchesHaveCancelled() && this._cancel()
              }, e.prototype._cancel = function () {
                this._isCancellable() && (this._setCancelled(), c.invoke(this._cancelPromises, this, void 0))
              }, e.prototype._cancelPromises = function () {
                this._length() > 0 && this._settlePromises()
              }, e.prototype._unsetOnCancel = function () {
                this._onCancelField = void 0
              }, e.prototype._isCancellable = function () {
                return this.isPending() && !this._isCancelled()
              }, e.prototype.isCancellable = function () {
                return this.isPending() && !this.isCancelled()
              }, e.prototype._doInvokeOnCancel = function (t, e) {
                if (o.isArray(t))
                  for (var n = 0; t.length > n; ++n) this._doInvokeOnCancel(t[n], e);
                else if (void 0 !== t)
                  if ("function" == typeof t) {
                    if (!e) {
                      var r = a(t).call(this._boundValue());
                      r === s && (this._attachExtraTrace(r.e), c.throwLater(r.e))
                    }
                  } else t._resultCancelled(this)
              }, e.prototype._invokeOnCancel = function () {
                var t = this._onCancel();
                this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, t)
              }, e.prototype._invokeInternalOnCancel = function () {
                this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel())
              }, e.prototype._resultCancelled = function () {
                this.cancel()
              }
            }
          }, {
            "./util": 36
          }],
          7: [function (t, e, n) {
            "use strict";
            e.exports = function (e) {
              function n(t, n, s) {
                return function (c) {
                  var u = s._boundValue();
                  t: for (var l = 0; t.length > l; ++l) {
                    var f = t[l];
                    if (f === Error || null != f && f.prototype instanceof Error) {
                      if (c instanceof f) return o(n).call(u, c)
                    } else if ("function" == typeof f) {
                      var p = o(f).call(u, c);
                      if (p === a) return p;
                      if (p) return o(n).call(u, c)
                    } else if (r.isObject(c)) {
                      for (var h = i(f), d = 0; h.length > d; ++d) {
                        var _ = h[d];
                        if (f[_] != c[_]) continue t
                      }
                      return o(n).call(u, c)
                    }
                  }
                  return e
                }
              }
              var r = t("./util"),
                i = t("./es5").keys,
                o = r.tryCatch,
                a = r.errorObj;
              return n
            }
          }, {
            "./es5": 13,
            "./util": 36
          }],
          8: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
              function e() {
                this._trace = new e.CapturedTrace(r())
              }

              function n() {
                if (i) return new e
              }

              function r() {
                var t = o.length - 1;
                if (t >= 0) return o[t]
              }
              var i = !1,
                o = [];
              return t.prototype._promiseCreated = function () {}, t.prototype._pushContext = function () {}, t.prototype._popContext = function () {
                return null
              }, t._peekContext = t.prototype._peekContext = function () {}, e.prototype._pushContext = function () {
                void 0 !== this._trace && (this._trace._promiseCreated = null, o.push(this._trace))
              }, e.prototype._popContext = function () {
                if (void 0 !== this._trace) {
                  var t = o.pop(),
                    e = t._promiseCreated;
                  return t._promiseCreated = null, e
                }
                return null
              }, e.CapturedTrace = null, e.create = n, e.deactivateLongStackTraces = function () {}, e.activateLongStackTraces = function () {
                var n = t.prototype._pushContext,
                  o = t.prototype._popContext,
                  a = t._peekContext,
                  s = t.prototype._peekContext,
                  c = t.prototype._promiseCreated;
                e.deactivateLongStackTraces = function () {
                  t.prototype._pushContext = n, t.prototype._popContext = o, t._peekContext = a, t.prototype._peekContext = s, t.prototype._promiseCreated = c, i = !1
                }, i = !0, t.prototype._pushContext = e.prototype._pushContext, t.prototype._popContext = e.prototype._popContext, t._peekContext = t.prototype._peekContext = r, t.prototype._promiseCreated = function () {
                  var t = this._peekContext();
                  t && null == t._promiseCreated && (t._promiseCreated = this)
                }
              }, e
            }
          }, {}],
          9: [function (t, n, r) {
            "use strict";
            n.exports = function (n, r) {
              function i(t, e) {
                return {
                  promise: e
                }
              }

              function o() {
                return !1
              }

              function a(t, e, n) {
                var r = this;
                try {
                  t(e, n, function (t) {
                    if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + D.toString(t));
                    r._attachCancellationCallback(t)
                  })
                } catch (t) {
                  return t
                }
              }

              function s(t) {
                if (!this._isCancellable()) return this;
                var e = this._onCancel();
                void 0 !== e ? D.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t)
              }

              function c() {
                return this._onCancelField
              }

              function u(t) {
                this._onCancelField = t
              }

              function l() {
                this._cancellationParent = void 0, this._onCancelField = void 0
              }

              function f(t, e) {
                if (0 != (1 & e)) {
                  this._cancellationParent = t;
                  var n = t._branchesRemainingToCancel;
                  void 0 === n && (n = 0), t._branchesRemainingToCancel = n + 1
                }
                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
              }

              function p(t, e) {
                0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
              }

              function h() {
                var t = this._boundTo;
                return void 0 !== t && t instanceof n ? t.isFulfilled() ? t.value() : void 0 : t
              }

              function d() {
                this._trace = new A(this._peekContext())
              }

              function _(t, e) {
                if (M(t)) {
                  var n = this._trace;
                  if (void 0 !== n && e && (n = n._parent), void 0 !== n) n.attachExtraTrace(t);
                  else if (!t.__stackCleaned__) {
                    var r = C(t);
                    D.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")), D.notEnumerableProp(t, "__stackCleaned__", !0)
                  }
                }
              }

              function v(t, e, n, r, i) {
                if (void 0 === t && null !== e && K) {
                  if (void 0 !== i && i._returnedNonUndefined()) return;
                  if (0 == (65535 & r._bitField)) return;
                  n && (n += " ");
                  var o = "",
                    a = "";
                  if (e._trace) {
                    for (var s = e._trace.stack.split("\n"), c = k(s), u = c.length - 1; u >= 0; --u) {
                      var l = c[u];
                      if (!H.test(l)) {
                        var f = l.match(q);
                        f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
                        break
                      }
                    }
                    if (c.length > 0)
                      for (var p = c[0], u = 0; s.length > u; ++u)
                        if (s[u] === p) {
                          u > 0 && (a = "\n" + s[u - 1]);
                          break
                        }
                  }
                  r._warn("a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + a, !0, e)
                }
              }

              function y(t, e) {
                var n = t + " is deprecated and will be removed in a future version.";
                return e && (n += " Use " + e + " instead."), m(n)
              }

              function m(t, e, r) {
                if (at.warnings) {
                  var i, o = new B(t);
                  if (e) r._attachExtraTrace(o);
                  else if (at.longStackTraces && (i = n._peekContext())) i.attachExtraTrace(o);
                  else {
                    var a = C(o);
                    o.stack = a.message + "\n" + a.stack.join("\n")
                  }
                  et("warning", o) || j(o, "", !0)
                }
              }

              function g(t, e) {
                for (var n = 0; e.length - 1 > n; ++n) e[n].push("From previous event:"), e[n] = e[n].join("\n");
                return e.length > n && (e[n] = e[n].join("\n")), t + "\n" + e.join("\n")
              }

              function b(t) {
                for (var e = 0; t.length > e; ++e)(0 === t[e].length || t.length > e + 1 && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--)
              }

              function w(t) {
                for (var e = t[0], n = 1; t.length > n; ++n) {
                  for (var r = t[n], i = e.length - 1, o = e[i], a = -1, s = r.length - 1; s >= 0; --s)
                    if (r[s] === o) {
                      a = s;
                      break
                    } for (var s = a; s >= 0; --s) {
                    if (e[i] !== r[s]) break;
                    e.pop(), i--
                  }
                  e = r
                }
              }

              function k(t) {
                for (var e = [], n = 0; t.length > n; ++n) {
                  var r = t[n],
                    i = "    (No stack trace)" === r || z.test(r),
                    o = i && rt(r);
                  i && !o && ($ && " " !== r.charAt(0) && (r = "    " + r), e.push(r))
                }
                return e
              }

              function E(t) {
                for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; e.length > n; ++n) {
                  var r = e[n];
                  if ("    (No stack trace)" === r || z.test(r)) break
                }
                return n > 0 && "SyntaxError" != t.name && (e = e.slice(n)), e
              }

              function C(t) {
                var e = t.stack,
                  n = "" + t;
                return e = "string" == typeof e && e.length > 0 ? E(t) : ["    (No stack trace)"], {
                  message: n,
                  stack: "SyntaxError" == t.name ? e : k(e)
                }
              }

              function j(t, e, n) {
                if ("undefined" != typeof console) {
                  var r;
                  if (D.isObject(t)) {
                    r = e + Q(t.stack, t)
                  } else r = e + (t + "");
                  "function" == typeof L ? L(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r)
                }
              }

              function T(t, e, n, r) {
                var i = !1;
                try {
                  "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(r) : e(n, r))
                } catch (t) {
                  U.throwLater(t)
                }
                "unhandledRejection" === t ? et(t, n, r) || i || j(n, "Unhandled rejection ") : et(t, r)
              }

              function F(t) {
                var e;
                if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";
                else {
                  e = t && "function" == typeof t.toString ? "" + t : D.toString(t);
                  if (/\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
                    e = JSON.stringify(t)
                  } catch (t) {}
                  0 === e.length && (e = "(empty array)")
                }
                return "(<" + x(e) + ">, no stack trace)"
              }

              function x(t) {
                return 41 > t.length ? t : t.substr(0, 38) + "..."
              }

              function P() {
                return "function" == typeof ot
              }

              function O(t) {
                var e = t.match(it);
                if (e) return {
                  fileName: e[1],
                  line: parseInt(e[2], 10)
                }
              }

              function S(t, e) {
                if (P()) {
                  for (var n, r, i = t.stack.split("\n"), o = e.stack.split("\n"), a = -1, s = -1, c = 0; i.length > c; ++c) {
                    var u = O(i[c]);
                    if (u) {
                      n = u.fileName, a = u.line;
                      break
                    }
                  }
                  for (var c = 0; o.length > c; ++c) {
                    var u = O(o[c]);
                    if (u) {
                      r = u.fileName, s = u.line;
                      break
                    }
                  }
                  a >= 0 && s >= 0 && n && r && n === r && s > a && (rt = function (t) {
                    if (V.test(t)) return !0;
                    var e = O(t);
                    return !(!e || e.fileName !== n || a > e.line || e.line > s)
                  })
                }
              }

              function A(t) {
                this._parent = t, this._promisesCreated = 0;
                var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                ot(this, A), e > 32 && this.uncycle()
              }
              var R, I, L, N = n._getDomain,
                U = n._async,
                B = t("./errors").Warning,
                D = t("./util"),
                M = D.canAttachTrace,
                V = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                H = /\((?:timers\.js):\d+:\d+\)/,
                q = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                z = null,
                Q = null,
                $ = !1,
                G = !(0 == D.env("BLUEBIRD_DEBUG")),
                W = !(0 == D.env("BLUEBIRD_WARNINGS") || !G && !D.env("BLUEBIRD_WARNINGS")),
                X = !(0 == D.env("BLUEBIRD_LONG_STACK_TRACES") || !G && !D.env("BLUEBIRD_LONG_STACK_TRACES")),
                K = 0 != D.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (W || !!D.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
              n.prototype.suppressUnhandledRejections = function () {
                var t = this._target();
                t._bitField = -1048577 & t._bitField | 524288
              }, n.prototype._ensurePossibleRejectionHandled = function () {
                if (0 == (524288 & this._bitField)) {
                  this._setRejectionIsUnhandled();
                  var t = this;
                  setTimeout(function () {
                    t._notifyUnhandledRejection()
                  }, 1)
                }
              }, n.prototype._notifyUnhandledRejectionIsHandled = function () {
                T("rejectionHandled", R, void 0, this)
              }, n.prototype._setReturnedNonUndefined = function () {
                this._bitField = 268435456 | this._bitField
              }, n.prototype._returnedNonUndefined = function () {
                return 0 != (268435456 & this._bitField)
              }, n.prototype._notifyUnhandledRejection = function () {
                if (this._isRejectionUnhandled()) {
                  var t = this._settledValue();
                  this._setUnhandledRejectionIsNotified(), T("unhandledRejection", I, t, this)
                }
              }, n.prototype._setUnhandledRejectionIsNotified = function () {
                this._bitField = 262144 | this._bitField
              }, n.prototype._unsetUnhandledRejectionIsNotified = function () {
                this._bitField = -262145 & this._bitField
              }, n.prototype._isUnhandledRejectionNotified = function () {
                return (262144 & this._bitField) > 0
              }, n.prototype._setRejectionIsUnhandled = function () {
                this._bitField = 1048576 | this._bitField
              }, n.prototype._unsetRejectionIsUnhandled = function () {
                this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled())
              }, n.prototype._isRejectionUnhandled = function () {
                return (1048576 & this._bitField) > 0
              }, n.prototype._warn = function (t, e, n) {
                return m(t, e, n || this)
              }, n.onPossiblyUnhandledRejection = function (t) {
                var e = N();
                I = "function" == typeof t ? null === e ? t : D.domainBind(e, t) : void 0
              }, n.onUnhandledRejectionHandled = function (t) {
                var e = N();
                R = "function" == typeof t ? null === e ? t : D.domainBind(e, t) : void 0
              };
              var J = function () {};
              n.longStackTraces = function () {
                if (U.haveItemsQueued() && !at.longStackTraces) throw Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                if (!at.longStackTraces && P()) {
                  var t = n.prototype._captureStackTrace,
                    e = n.prototype._attachExtraTrace;
                  at.longStackTraces = !0, J = function () {
                    if (U.haveItemsQueued() && !at.longStackTraces) throw Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    n.prototype._captureStackTrace = t, n.prototype._attachExtraTrace = e, r.deactivateLongStackTraces(), U.enableTrampoline(), at.longStackTraces = !1
                  }, n.prototype._captureStackTrace = d, n.prototype._attachExtraTrace = _, r.activateLongStackTraces(), U.disableTrampolineIfNecessary()
                }
              }, n.hasLongStackTraces = function () {
                return at.longStackTraces && P()
              };
              var Y = function () {
                  try {
                    if ("function" == typeof CustomEvent) {
                      var t = new CustomEvent("CustomEvent");
                      return D.global.dispatchEvent(t),
                        function (t, e) {
                          var n = new CustomEvent(t.toLowerCase(), {
                            detail: e,
                            cancelable: !0
                          });
                          return !D.global.dispatchEvent(n)
                        }
                    }
                    if ("function" == typeof Event) {
                      var t = new Event("CustomEvent");
                      return D.global.dispatchEvent(t),
                        function (t, e) {
                          var n = new Event(t.toLowerCase(), {
                            cancelable: !0
                          });
                          return n.detail = e, !D.global.dispatchEvent(n)
                        }
                    }
                    var t = document.createEvent("CustomEvent");
                    return t.initCustomEvent("testingtheevent", !1, !0, {}), D.global.dispatchEvent(t),
                      function (t, e) {
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(t.toLowerCase(), !1, !0, e), !D.global.dispatchEvent(n)
                      }
                  } catch (t) {}
                  return function () {
                    return !1
                  }
                }(),
                Z = function () {
                  return D.isNode ? function () {
                    return e.emit.apply(e, arguments)
                  } : D.global ? function (t) {
                    var e = "on" + t.toLowerCase(),
                      n = D.global[e];
                    return !!n && (n.apply(D.global, [].slice.call(arguments, 1)), !0)
                  } : function () {
                    return !1
                  }
                }(),
                tt = {
                  promiseCreated: i,
                  promiseFulfilled: i,
                  promiseRejected: i,
                  promiseResolved: i,
                  promiseCancelled: i,
                  promiseChained: function (t, e, n) {
                    return {
                      promise: e,
                      child: n
                    }
                  },
                  warning: function (t, e) {
                    return {
                      warning: e
                    }
                  },
                  unhandledRejection: function (t, e, n) {
                    return {
                      reason: e,
                      promise: n
                    }
                  },
                  rejectionHandled: i
                },
                et = function (t) {
                  var e = !1;
                  try {
                    e = Z.apply(null, arguments)
                  } catch (t) {
                    U.throwLater(t), e = !0
                  }
                  var n = !1;
                  try {
                    n = Y(t, tt[t].apply(null, arguments))
                  } catch (t) {
                    U.throwLater(t), n = !0
                  }
                  return n || e
                };
              n.config = function (t) {
                if (t = Object(t), "longStackTraces" in t && (t.longStackTraces ? n.longStackTraces() : !t.longStackTraces && n.hasLongStackTraces() && J()), "warnings" in t) {
                  var e = t.warnings;
                  at.warnings = !!e, K = at.warnings, D.isObject(e) && "wForgottenReturn" in e && (K = !!e.wForgottenReturn)
                }
                if ("cancellation" in t && t.cancellation && !at.cancellation) {
                  if (U.haveItemsQueued()) throw Error("cannot enable cancellation after promises are in use");
                  n.prototype._clearCancellationData = l, n.prototype._propagateFrom = f, n.prototype._onCancel = c, n.prototype._setOnCancel = u, n.prototype._attachCancellationCallback = s, n.prototype._execute = a, nt = f, at.cancellation = !0
                }
                return "monitoring" in t && (t.monitoring && !at.monitoring ? (at.monitoring = !0, n.prototype._fireEvent = et) : !t.monitoring && at.monitoring && (at.monitoring = !1, n.prototype._fireEvent = o)), n
              }, n.prototype._fireEvent = o, n.prototype._execute = function (t, e, n) {
                try {
                  t(e, n)
                } catch (t) {
                  return t
                }
              }, n.prototype._onCancel = function () {}, n.prototype._setOnCancel = function (t) {}, n.prototype._attachCancellationCallback = function (t) {}, n.prototype._captureStackTrace = function () {}, n.prototype._attachExtraTrace = function () {}, n.prototype._clearCancellationData = function () {}, n.prototype._propagateFrom = function (t, e) {};
              var nt = p,
                rt = function () {
                  return !1
                },
                it = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
              D.inherits(A, Error), r.CapturedTrace = A, A.prototype.uncycle = function () {
                var t = this._length;
                if (t >= 2) {
                  for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r) e.push(i), i = i._parent;
                  t = this._length = r;
                  for (var r = t - 1; r >= 0; --r) {
                    var o = e[r].stack;
                    void 0 === n[o] && (n[o] = r)
                  }
                  for (var r = 0; t > r; ++r) {
                    var a = e[r].stack,
                      s = n[a];
                    if (void 0 !== s && s !== r) {
                      s > 0 && (e[s - 1]._parent = void 0, e[s - 1]._length = 1), e[r]._parent = void 0, e[r]._length = 1;
                      var c = r > 0 ? e[r - 1] : this;
                      t - 1 > s ? (c._parent = e[s + 1], c._parent.uncycle(), c._length = c._parent._length + 1) : (c._parent = void 0, c._length = 1);
                      for (var u = c._length + 1, l = r - 2; l >= 0; --l) e[l]._length = u, u++;
                      return
                    }
                  }
                }
              }, A.prototype.attachExtraTrace = function (t) {
                if (!t.__stackCleaned__) {
                  this.uncycle();
                  for (var e = C(t), n = e.message, r = [e.stack], i = this; void 0 !== i;) r.push(k(i.stack.split("\n"))), i = i._parent;
                  w(r), b(r), D.notEnumerableProp(t, "stack", g(n, r)), D.notEnumerableProp(t, "__stackCleaned__", !0)
                }
              };
              var ot = function () {
                var t = /^\s*at\s*/,
                  e = function (t, e) {
                    return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? "" + e : F(e)
                  };
                if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                  Error.stackTraceLimit += 6, z = t, Q = e;
                  var n = Error.captureStackTrace;
                  return rt = function (t) {
                      return V.test(t)
                    },
                    function (t, e) {
                      Error.stackTraceLimit += 6, n(t, e), Error.stackTraceLimit -= 6
                    }
                }
                var r = Error();
                if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return z = /@/, Q = e, $ = !0,
                  function (t) {
                    t.stack = Error().stack
                  };
                var i;
                try {
                  throw Error()
                } catch (t) {
                  i = "stack" in t
                }
                return "stack" in r || !i || "number" != typeof Error.stackTraceLimit ? (Q = function (t, e) {
                  return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? F(e) : "" + e
                }, null) : (z = t, Q = e, function (t) {
                  Error.stackTraceLimit += 6;
                  try {
                    throw Error()
                  } catch (e) {
                    t.stack = e.stack
                  }
                  Error.stackTraceLimit -= 6
                })
              }();
              "undefined" != typeof console && void 0 !== console.warn && (L = function (t) {
                console.warn(t)
              }, D.isNode && e.stderr.isTTY ? L = function (t, e) {
                var n = e ? "[33m" : "[31m";
                console.warn(n + t + "[0m\n")
              } : D.isNode || "string" != typeof Error().stack || (L = function (t, e) {
                console.warn("%c" + t, e ? "color: darkorange" : "color: red")
              }));
              var at = {
                warnings: W,
                longStackTraces: !1,
                cancellation: !1,
                monitoring: !1
              };
              return X && n.longStackTraces(), {
                longStackTraces: function () {
                  return at.longStackTraces
                },
                warnings: function () {
                  return at.warnings
                },
                cancellation: function () {
                  return at.cancellation
                },
                monitoring: function () {
                  return at.monitoring
                },
                propagateFromFunction: function () {
                  return nt
                },
                boundValueFunction: function () {
                  return h
                },
                checkForgottenReturns: v,
                setBounds: S,
                warn: m,
                deprecated: y,
                CapturedTrace: A,
                fireDomEvent: Y,
                fireGlobalEvent: Z
              }
            }
          }, {
            "./errors": 12,
            "./util": 36
          }],
          10: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
              function e() {
                return this.value
              }

              function n() {
                throw this.reason
              }
              t.prototype.return = t.prototype.thenReturn = function (n) {
                return n instanceof t && n.suppressUnhandledRejections(), this._then(e, void 0, void 0, {
                  value: n
                }, void 0)
              }, t.prototype.throw = t.prototype.thenThrow = function (t) {
                return this._then(n, void 0, void 0, {
                  reason: t
                }, void 0)
              }, t.prototype.catchThrow = function (t) {
                if (arguments.length > 1) {
                  var e = arguments[1];
                  return this.caught(t, function () {
                    throw e
                  })
                }
                return this._then(void 0, n, void 0, {
                  reason: t
                }, void 0)
              }, t.prototype.catchReturn = function (n) {
                if (arguments.length > 1) {
                  var r = arguments[1];
                  r instanceof t && r.suppressUnhandledRejections();
                  return this.caught(n, function () {
                    return r
                  })
                }
                return n instanceof t && n.suppressUnhandledRejections(), this._then(void 0, e, void 0, {
                  value: n
                }, void 0)
              }
            }
          }, {}],
          11: [function (t, e, n) {
            "use strict";
            e.exports = function (t, e) {
              function n() {
                return o(this)
              }

              function r(t, n) {
                return i(t, n, e, e)
              }
              var i = t.reduce,
                o = t.all;
              t.prototype.each = function (t) {
                return i(this, t, e, 0)._then(n, void 0, void 0, this, void 0)
              }, t.prototype.mapSeries = function (t) {
                return i(this, t, e, e)
              }, t.each = function (t, r) {
                return i(t, r, e, 0)._then(n, void 0, void 0, t, void 0)
              }, t.mapSeries = r
            }
          }, {}],
          12: [function (t, e, n) {
            "use strict";

            function r(t, e) {
              function n(r) {
                if (!(this instanceof n)) return new n(r);
                f(this, "message", "string" == typeof r ? r : e), f(this, "name", t), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
              }
              return l(n, Error), n
            }

            function i(t) {
              if (!(this instanceof i)) return new i(t);
              f(this, "name", "OperationalError"), f(this, "message", t), this.cause = t, this.isOperational = !0, t instanceof Error ? (f(this, "message", t.message), f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }
            var o, a, s = t("./es5"),
              c = s.freeze,
              u = t("./util"),
              l = u.inherits,
              f = u.notEnumerableProp,
              p = r("Warning", "warning"),
              h = r("CancellationError", "cancellation error"),
              d = r("TimeoutError", "timeout error"),
              _ = r("AggregateError", "aggregate error");
            try {
              o = TypeError, a = RangeError
            } catch (t) {
              o = r("TypeError", "type error"), a = r("RangeError", "range error")
            }
            for (var v = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), y = 0; v.length > y; ++y) "function" == typeof Array.prototype[v[y]] && (_.prototype[v[y]] = Array.prototype[v[y]]);
            s.defineProperty(_.prototype, "length", {
              value: 0,
              configurable: !1,
              writable: !0,
              enumerable: !0
            }), _.prototype.isOperational = !0;
            var m = 0;
            _.prototype.toString = function () {
              var t = Array(4 * m + 1).join(" "),
                e = "\n" + t + "AggregateError of:\n";
              m++, t = Array(4 * m + 1).join(" ");
              for (var n = 0; this.length > n; ++n) {
                for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; i.length > o; ++o) i[o] = t + i[o];
                r = i.join("\n"), e += r + "\n"
              }
              return m--, e
            }, l(i, Error);
            var g = Error.__BluebirdErrorTypes__;
            g || (g = c({
              CancellationError: h,
              TimeoutError: d,
              OperationalError: i,
              RejectionError: i,
              AggregateError: _
            }), s.defineProperty(Error, "__BluebirdErrorTypes__", {
              value: g,
              writable: !1,
              enumerable: !1,
              configurable: !1
            })), e.exports = {
              Error: Error,
              TypeError: o,
              RangeError: a,
              CancellationError: g.CancellationError,
              OperationalError: g.OperationalError,
              TimeoutError: g.TimeoutError,
              AggregateError: g.AggregateError,
              Warning: p
            }
          }, {
            "./es5": 13,
            "./util": 36
          }],
          13: [function (t, e, n) {
            var r = function () {
              "use strict";
              return void 0 === this
            }();
            if (r) e.exports = {
              freeze: Object.freeze,
              defineProperty: Object.defineProperty,
              getDescriptor: Object.getOwnPropertyDescriptor,
              keys: Object.keys,
              names: Object.getOwnPropertyNames,
              getPrototypeOf: Object.getPrototypeOf,
              isArray: Array.isArray,
              isES5: r,
              propertyIsWritable: function (t, e) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                return !(n && !n.writable && !n.set)
              }
            };
            else {
              var i = {}.hasOwnProperty,
                o = {}.toString,
                a = {}.constructor.prototype,
                s = function (t) {
                  var e = [];
                  for (var n in t) i.call(t, n) && e.push(n);
                  return e
                },
                c = function (t, e) {
                  return {
                    value: t[e]
                  }
                },
                u = function (t, e, n) {
                  return t[e] = n.value, t
                },
                l = function (t) {
                  return t
                },
                f = function (t) {
                  try {
                    return Object(t).constructor.prototype
                  } catch (t) {
                    return a
                  }
                };
              e.exports = {
                isArray: function (t) {
                  try {
                    return "[object Array]" === o.call(t)
                  } catch (t) {
                    return !1
                  }
                },
                keys: s,
                names: s,
                defineProperty: u,
                getDescriptor: c,
                freeze: l,
                getPrototypeOf: f,
                isES5: r,
                propertyIsWritable: function () {
                  return !0
                }
              }
            }
          }, {}],
          14: [function (t, e, n) {
            "use strict";
            e.exports = function (t, e) {
              var n = t.map;
              t.prototype.filter = function (t, r) {
                return n(this, t, r, e)
              }, t.filter = function (t, r, i) {
                return n(t, r, i, e)
              }
            }
          }, {}],
          15: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r) {
              function i(t, e, n) {
                this.promise = t, this.type = e, this.handler = n, this.called = !1, this.cancelPromise = null
              }

              function o(t) {
                this.finallyHandler = t
              }

              function a(t, e) {
                return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0)
              }

              function s() {
                return u.call(this, this.promise._target()._settledValue())
              }

              function c(t) {
                if (!a(this, t)) return p.e = t, p
              }

              function u(t) {
                var i = this.promise,
                  u = this.handler;
                if (!this.called) {
                  this.called = !0;
                  var l = this.isFinallyHandler() ? u.call(i._boundValue()) : u.call(i._boundValue(), t);
                  if (l === r) return l;
                  if (void 0 !== l) {
                    i._setReturnedNonUndefined();
                    var h = n(l, i);
                    if (h instanceof e) {
                      if (null != this.cancelPromise) {
                        if (h._isCancelled()) {
                          var d = new f("late cancellation observer");
                          return i._attachExtraTrace(d), p.e = d, p
                        }
                        h.isPending() && h._attachCancellationCallback(new o(this))
                      }
                      return h._then(s, c, void 0, this, void 0)
                    }
                  }
                }
                return i.isRejected() ? (a(this), p.e = t, p) : (a(this), t)
              }
              var l = t("./util"),
                f = e.CancellationError,
                p = l.errorObj,
                h = t("./catch_filter")(r);
              return i.prototype.isFinallyHandler = function () {
                return 0 === this.type
              }, o.prototype._resultCancelled = function () {
                a(this.finallyHandler)
              }, e.prototype._passThrough = function (t, e, n, r) {
                return "function" != typeof t ? this.then() : this._then(n, r, void 0, new i(this, e, t), void 0)
              }, e.prototype.lastly = e.prototype.finally = function (t) {
                return this._passThrough(t, 0, u, u)
              }, e.prototype.tap = function (t) {
                return this._passThrough(t, 1, u)
              }, e.prototype.tapCatch = function (t) {
                var n = arguments.length;
                if (1 === n) return this._passThrough(t, 1, void 0, u);
                var r, i = Array(n - 1),
                  o = 0;
                for (r = 0; n - 1 > r; ++r) {
                  var a = arguments[r];
                  if (!l.isObject(a)) return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + l.classString(a)));
                  i[o++] = a
                }
                return i.length = o, this._passThrough(h(i, arguments[r], this), 1, void 0, u)
              }, i
            }
          }, {
            "./catch_filter": 7,
            "./util": 36
          }],
          16: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o, a) {
              function s(t, n, r) {
                for (var o = 0; n.length > o; ++o) {
                  r._pushContext();
                  var a = h(n[o])(t);
                  if (r._popContext(), a === p) {
                    r._pushContext();
                    var s = e.reject(p.e);
                    return r._popContext(), s
                  }
                  var c = i(a, r);
                  if (c instanceof e) return c
                }
                return null
              }

              function c(t, n, i, o) {
                if (a.cancellation()) {
                  var s = new e(r),
                    c = this._finallyPromise = new e(r);
                  this._promise = s.lastly(function () {
                    return c
                  }), s._captureStackTrace(), s._setOnCancel(this)
                } else {
                  (this._promise = new e(r))._captureStackTrace()
                }
                this._stack = o, this._generatorFunction = t, this._receiver = n, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(d) : d, this._yieldedPromise = null, this._cancellationPhase = !1
              }
              var u = t("./errors"),
                l = u.TypeError,
                f = t("./util"),
                p = f.errorObj,
                h = f.tryCatch,
                d = [];
              f.inherits(c, o), c.prototype._isResolved = function () {
                return null === this._promise
              }, c.prototype._cleanup = function () {
                this._promise = this._generator = null, a.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null)
              }, c.prototype._promiseCancelled = function () {
                if (!this._isResolved()) {
                  var t, n = void 0 !== this._generator.return;
                  if (n) this._promise._pushContext(), t = h(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                  else {
                    var r = new e.CancellationError("generator .return() sentinel");
                    e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = h(this._generator.throw).call(this._generator, r), this._promise._popContext()
                  }
                  this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t)
                }
              }, c.prototype._promiseFulfilled = function (t) {
                this._yieldedPromise = null, this._promise._pushContext();
                var e = h(this._generator.next).call(this._generator, t);
                this._promise._popContext(), this._continue(e)
              }, c.prototype._promiseRejected = function (t) {
                this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();
                var e = h(this._generator.throw).call(this._generator, t);
                this._promise._popContext(), this._continue(e)
              }, c.prototype._resultCancelled = function () {
                if (this._yieldedPromise instanceof e) {
                  var t = this._yieldedPromise;
                  this._yieldedPromise = null, t.cancel()
                }
              }, c.prototype.promise = function () {
                return this._promise
              }, c.prototype._run = function () {
                this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0)
              }, c.prototype._continue = function (t) {
                var n = this._promise;
                if (t === p) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
                var r = t.value;
                if (!0 === t.done) return this._cleanup(), this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                var o = i(r, this._promise);
                if (!(o instanceof e) && null === (o = s(o, this._yieldHandlers, this._promise))) return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", r + "") + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                o = o._target();
                var a = o._bitField;
                0 == (50397184 & a) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & a) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & a) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
              }, e.coroutine = function (t, e) {
                if ("function" != typeof t) throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                var n = Object(e).yieldHandler,
                  r = c,
                  i = Error().stack;
                return function () {
                  var e = t.apply(this, arguments),
                    o = new r(void 0, void 0, n, i),
                    a = o.promise();
                  return o._generator = e, o._promiseFulfilled(void 0), a
                }
              }, e.coroutine.addYieldHandler = function (t) {
                if ("function" != typeof t) throw new l("expecting a function but got " + f.classString(t));
                d.push(t)
              }, e.spawn = function (t) {
                if (a.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                var r = new c(t, this),
                  i = r.promise();
                return r._run(e.spawn), i
              }
            }
          }, {
            "./errors": 12,
            "./util": 36
          }],
          17: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o, a) {
              t("./util");
              e.join = function () {
                var t, e = arguments.length - 1;
                if (e > 0 && "function" == typeof arguments[e]) {
                  t = arguments[e];
                  var r
                }
                var i = [].slice.call(arguments);
                t && i.pop();
                var r = new n(i).promise();
                return void 0 !== t ? r.spread(t) : r
              }
            }
          }, {
            "./util": 36
          }],
          18: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o, a) {
              function s(t, e, n, r) {
                this.constructor$(t), this._promise._captureStackTrace();
                var i = u();
                this._callback = null === i ? e : l.domainBind(i, e), this._preservedValues = r === o ? Array(this.length()) : null, this._limit = n, this._inFlight = 0, this._queue = [], h.invoke(this._asyncInit, this, void 0)
              }

              function c(t, n, i, o) {
                if ("function" != typeof n) return r("expecting a function but got " + l.classString(n));
                var a = 0;
                if (void 0 !== i) {
                  if ("object" != typeof i || null === i) return e.reject(new TypeError("options argument must be an object but it is " + l.classString(i)));
                  if ("number" != typeof i.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + l.classString(i.concurrency)));
                  a = i.concurrency
                }
                return a = "number" == typeof a && isFinite(a) && a >= 1 ? a : 0, new s(t, n, a, o).promise()
              }
              var u = e._getDomain,
                l = t("./util"),
                f = l.tryCatch,
                p = l.errorObj,
                h = e._async;
              l.inherits(s, n), s.prototype._asyncInit = function () {
                this._init$(void 0, -2)
              }, s.prototype._init = function () {}, s.prototype._promiseFulfilled = function (t, n) {
                var r = this._values,
                  o = this.length(),
                  s = this._preservedValues,
                  c = this._limit;
                if (0 > n) {
                  if (n = -1 * n - 1, r[n] = t, c >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0
                } else {
                  if (c >= 1 && this._inFlight >= c) return r[n] = t, this._queue.push(n), !1;
                  null !== s && (s[n] = t);
                  var u = this._promise,
                    l = this._callback,
                    h = u._boundValue();
                  u._pushContext();
                  var d = f(l).call(h, t, n, o),
                    _ = u._popContext();
                  if (a.checkForgottenReturns(d, _, null !== s ? "Promise.filter" : "Promise.map", u), d === p) return this._reject(d.e), !0;
                  var v = i(d, this._promise);
                  if (v instanceof e) {
                    v = v._target();
                    var y = v._bitField;
                    if (0 == (50397184 & y)) return 1 > c || this._inFlight++, r[n] = v, v._proxy(this, -1 * (n + 1)), !1;
                    if (0 == (33554432 & y)) return 0 != (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);
                    d = v._value()
                  }
                  r[n] = d
                }
                return o <= ++this._totalResolved && (null !== s ? this._filter(r, s) : this._resolve(r), !0)
              }, s.prototype._drainQueue = function () {
                for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && e > this._inFlight;) {
                  if (this._isResolved()) return;
                  var r = t.pop();
                  this._promiseFulfilled(n[r], r)
                }
              }, s.prototype._filter = function (t, e) {
                for (var n = e.length, r = Array(n), i = 0, o = 0; n > o; ++o) t[o] && (r[i++] = e[o]);
                r.length = i, this._resolve(r)
              }, s.prototype.preservedValues = function () {
                return this._preservedValues
              }, e.prototype.map = function (t, e) {
                return c(this, t, e, null)
              }, e.map = function (t, e, n, r) {
                return c(t, e, n, r)
              }
            }
          }, {
            "./util": 36
          }],
          19: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o) {
              var a = t("./util"),
                s = a.tryCatch;
              e.method = function (t) {
                if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + a.classString(t));
                return function () {
                  var r = new e(n);
                  r._captureStackTrace(), r._pushContext();
                  var i = s(t).apply(this, arguments),
                    a = r._popContext();
                  return o.checkForgottenReturns(i, a, "Promise.method", r), r._resolveFromSyncValue(i), r
                }
              }, e.attempt = e.try = function (t) {
                if ("function" != typeof t) return i("expecting a function but got " + a.classString(t));
                var r = new e(n);
                r._captureStackTrace(), r._pushContext();
                var c;
                if (arguments.length > 1) {
                  o.deprecated("calling Promise.try with more than 1 argument");
                  var u = arguments[1],
                    l = arguments[2];
                  c = a.isArray(u) ? s(t).apply(l, u) : s(t).call(l, u)
                } else c = s(t)();
                var f = r._popContext();
                return o.checkForgottenReturns(c, f, "Promise.try", r), r._resolveFromSyncValue(c), r
              }, e.prototype._resolveFromSyncValue = function (t) {
                t === a.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0)
              }
            }
          }, {
            "./util": 36
          }],
          20: [function (t, e, n) {
            "use strict";

            function r(t) {
              return t instanceof Error && l.getPrototypeOf(t) === Error.prototype
            }

            function i(t) {
              var e;
              if (r(t)) {
                e = new u(t), e.name = t.name, e.message = t.message, e.stack = t.stack;
                for (var n = l.keys(t), i = 0; n.length > i; ++i) {
                  var o = n[i];
                  f.test(o) || (e[o] = t[o])
                }
                return e
              }
              return a.markAsOriginatingFromRejection(t), t
            }

            function o(t, e) {
              return function (n, r) {
                if (null !== t) {
                  if (n) {
                    var o = i(s(n));
                    t._attachExtraTrace(o), t._reject(o)
                  } else if (e) {
                    var a = [].slice.call(arguments, 1);
                    t._fulfill(a)
                  } else t._fulfill(r);
                  t = null
                }
              }
            }
            var a = t("./util"),
              s = a.maybeWrapAsError,
              c = t("./errors"),
              u = c.OperationalError,
              l = t("./es5"),
              f = /^(?:name|message|stack|cause)$/;
            e.exports = o
          }, {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
          }],
          21: [function (t, e, n) {
            "use strict";
            e.exports = function (e) {
              function n(t, e) {
                var n = this;
                if (!o.isArray(t)) return r.call(n, t, e);
                var i = s(e).apply(n._boundValue(), [null].concat(t));
                i === c && a.throwLater(i.e)
              }

              function r(t, e) {
                var n = this,
                  r = n._boundValue(),
                  i = void 0 === t ? s(e).call(r, null) : s(e).call(r, null, t);
                i === c && a.throwLater(i.e)
              }

              function i(t, e) {
                var n = this;
                if (!t) {
                  var r = Error(t + "");
                  r.cause = t, t = r
                }
                var i = s(e).call(n._boundValue(), t);
                i === c && a.throwLater(i.e)
              }
              var o = t("./util"),
                a = e._async,
                s = o.tryCatch,
                c = o.errorObj;
              e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
                if ("function" == typeof t) {
                  var o = r;
                  void 0 !== e && Object(e).spread && (o = n), this._then(o, i, void 0, this, t)
                }
                return this
              }
            }
          }, {
            "./util": 36
          }],
          22: [function (t, n, r) {
            "use strict";
            n.exports = function () {
              function r() {}

              function i(t, e) {
                if (null == t || t.constructor !== o) throw new g("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                if ("function" != typeof e) throw new g("expecting a function but got " + d.classString(e))
              }

              function o(t) {
                t !== w && i(this, t), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(t), this._promiseCreated(), this._fireEvent("promiseCreated", this)
              }

              function a(t) {
                this.promise._resolveCallback(t)
              }

              function s(t) {
                this.promise._rejectCallback(t, !1)
              }

              function c(t) {
                var e = new o(w);
                e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t
              }
              var u, l = function () {
                  return new g("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                },
                f = function () {
                  return new o.PromiseInspection(this._target())
                },
                p = function (t) {
                  return o.reject(new g(t))
                },
                h = {},
                d = t("./util");
              u = d.isNode ? function () {
                var t = e.domain;
                return void 0 === t && (t = null), t
              } : function () {
                return null
              }, d.notEnumerableProp(o, "_getDomain", u);
              var _ = t("./es5"),
                v = t("./async"),
                y = new v;
              _.defineProperty(o, "_async", {
                value: y
              });
              var m = t("./errors"),
                g = o.TypeError = m.TypeError;
              o.RangeError = m.RangeError;
              var b = o.CancellationError = m.CancellationError;
              o.TimeoutError = m.TimeoutError, o.OperationalError = m.OperationalError, o.RejectionError = m.OperationalError, o.AggregateError = m.AggregateError;
              var w = function () {},
                k = {},
                E = {},
                C = t("./thenables")(o, w),
                j = t("./promise_array")(o, w, C, p, r),
                T = t("./context")(o),
                F = T.create,
                x = t("./debuggability")(o, T),
                P = t("./finally")(o, C, E),
                O = t("./catch_filter")(E),
                S = t("./nodeback"),
                A = d.errorObj,
                R = d.tryCatch;
              return o.prototype.toString = function () {
                return "[object Promise]"
              }, o.prototype.caught = o.prototype.catch = function (t) {
                var e = arguments.length;
                if (e > 1) {
                  var n, r = Array(e - 1),
                    i = 0;
                  for (n = 0; e - 1 > n; ++n) {
                    var o = arguments[n];
                    if (!d.isObject(o)) return p("Catch statement predicate: expecting an object but got " + d.classString(o));
                    r[i++] = o
                  }
                  return r.length = i, t = arguments[n], this.then(void 0, O(r, t, this))
                }
                return this.then(void 0, t)
              }, o.prototype.reflect = function () {
                return this._then(f, f, void 0, this, void 0)
              }, o.prototype.then = function (t, e) {
                if (x.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                  var n = ".then() only accepts functions but was passed: " + d.classString(t);
                  arguments.length > 1 && (n += ", " + d.classString(e)), this._warn(n)
                }
                return this._then(t, e, void 0, void 0, void 0)
              }, o.prototype.done = function (t, e) {
                this._then(t, e, void 0, void 0, void 0)._setIsFinal()
              }, o.prototype.spread = function (t) {
                return "function" != typeof t ? p("expecting a function but got " + d.classString(t)) : this.all()._then(t, void 0, void 0, k, void 0)
              }, o.prototype.toJSON = function () {
                var t = {
                  isFulfilled: !1,
                  isRejected: !1,
                  fulfillmentValue: void 0,
                  rejectionReason: void 0
                };
                return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t
              }, o.prototype.all = function () {
                return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new j(this).promise()
              }, o.prototype.error = function (t) {
                return this.caught(d.originatesFromRejection, t)
              }, o.getNewLibraryCopy = n.exports, o.is = function (t) {
                return t instanceof o
              }, o.fromNode = o.fromCallback = function (t) {
                var e = new o(w);
                e._captureStackTrace();
                var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                  r = R(t)(S(e, n));
                return r === A && e._rejectCallback(r.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e
              }, o.all = function (t) {
                return new j(t).promise()
              }, o.cast = function (t) {
                var e = C(t);
                return e instanceof o || (e = new o(w), e._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e
              }, o.resolve = o.fulfilled = o.cast, o.reject = o.rejected = function (t) {
                var e = new o(w);
                return e._captureStackTrace(), e._rejectCallback(t, !0), e
              }, o.setScheduler = function (t) {
                if ("function" != typeof t) throw new g("expecting a function but got " + d.classString(t));
                return y.setScheduler(t)
              }, o.prototype._then = function (t, e, n, r, i) {
                var a = void 0 !== i,
                  s = a ? i : new o(w),
                  c = this._target(),
                  l = c._bitField;
                a || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & l) ? this._boundValue() : c === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, s));
                var f = u();
                if (0 != (50397184 & l)) {
                  var p, h, _ = c._settlePromiseCtx;
                  0 != (33554432 & l) ? (h = c._rejectionHandler0, p = t) : 0 != (16777216 & l) ? (h = c._fulfillmentHandler0, p = e, c._unsetRejectionIsUnhandled()) : (_ = c._settlePromiseLateCancellationObserver, h = new b("late cancellation observer"), c._attachExtraTrace(h), p = e), y.invoke(_, c, {
                    handler: null === f ? p : "function" == typeof p && d.domainBind(f, p),
                    promise: s,
                    receiver: r,
                    value: h
                  })
                } else c._addCallbacks(t, e, s, r, f);
                return s
              }, o.prototype._length = function () {
                return 65535 & this._bitField
              }, o.prototype._isFateSealed = function () {
                return 0 != (117506048 & this._bitField)
              }, o.prototype._isFollowing = function () {
                return 67108864 == (67108864 & this._bitField)
              }, o.prototype._setLength = function (t) {
                this._bitField = -65536 & this._bitField | 65535 & t
              }, o.prototype._setFulfilled = function () {
                this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this)
              }, o.prototype._setRejected = function () {
                this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this)
              }, o.prototype._setFollowing = function () {
                this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this)
              }, o.prototype._setIsFinal = function () {
                this._bitField = 4194304 | this._bitField
              }, o.prototype._isFinal = function () {
                return (4194304 & this._bitField) > 0
              }, o.prototype._unsetCancelled = function () {
                this._bitField = -65537 & this._bitField
              }, o.prototype._setCancelled = function () {
                this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this)
              }, o.prototype._setWillBeCancelled = function () {
                this._bitField = 8388608 | this._bitField
              }, o.prototype._setAsyncGuaranteed = function () {
                y.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
              }, o.prototype._receiverAt = function (t) {
                var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                if (e !== h) return void 0 === e && this._isBound() ? this._boundValue() : e
              }, o.prototype._promiseAt = function (t) {
                return this[4 * t - 4 + 2]
              }, o.prototype._fulfillmentHandlerAt = function (t) {
                return this[4 * t - 4 + 0]
              }, o.prototype._rejectionHandlerAt = function (t) {
                return this[4 * t - 4 + 1]
              }, o.prototype._boundValue = function () {}, o.prototype._migrateCallback0 = function (t) {
                var e = t._fulfillmentHandler0,
                  n = t._rejectionHandler0,
                  r = t._promise0,
                  i = t._receiverAt(0);
                void 0 === i && (i = h), this._addCallbacks(e, n, r, i, null)
              }, o.prototype._migrateCallbackAt = function (t, e) {
                var n = t._fulfillmentHandlerAt(e),
                  r = t._rejectionHandlerAt(e),
                  i = t._promiseAt(e),
                  o = t._receiverAt(e);
                void 0 === o && (o = h), this._addCallbacks(n, r, i, o, null)
              }, o.prototype._addCallbacks = function (t, e, n, r, i) {
                var o = this._length();
                if (65531 > o || (o = 0, this._setLength(0)), 0 === o) this._promise0 = n, this._receiver0 = r, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : d.domainBind(i, t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : d.domainBind(i, e));
                else {
                  var a = 4 * o - 4;
                  this[a + 2] = n, this[a + 3] = r, "function" == typeof t && (this[a + 0] = null === i ? t : d.domainBind(i, t)), "function" == typeof e && (this[a + 1] = null === i ? e : d.domainBind(i, e))
                }
                return this._setLength(o + 1), o
              }, o.prototype._proxy = function (t, e) {
                this._addCallbacks(void 0, void 0, e, t, null)
              }, o.prototype._resolveCallback = function (t, e) {
                if (0 == (117506048 & this._bitField)) {
                  if (t === this) return this._rejectCallback(l(), !1);
                  var n = C(t, this);
                  if (!(n instanceof o)) return this._fulfill(t);
                  e && this._propagateFrom(n, 2);
                  var r = n._target();
                  if (r === this) return void this._reject(l());
                  var i = r._bitField;
                  if (0 == (50397184 & i)) {
                    var a = this._length();
                    a > 0 && r._migrateCallback0(this);
                    for (var s = 1; a > s; ++s) r._migrateCallbackAt(this, s);
                    this._setFollowing(), this._setLength(0), this._setFollowee(r)
                  } else if (0 != (33554432 & i)) this._fulfill(r._value());
                  else if (0 != (16777216 & i)) this._reject(r._reason());
                  else {
                    var c = new b("late cancellation observer");
                    r._attachExtraTrace(c), this._reject(c)
                  }
                }
              }, o.prototype._rejectCallback = function (t, e, n) {
                var r = d.ensureErrorObject(t),
                  i = r === t;
                if (!i && !n && x.warnings()) {
                  this._warn("a promise was rejected with a non-error: " + d.classString(t), !0)
                }
                this._attachExtraTrace(r, !!e && i), this._reject(t)
              }, o.prototype._resolveFromExecutor = function (t) {
                if (t !== w) {
                  var e = this;
                  this._captureStackTrace(), this._pushContext();
                  var n = !0,
                    r = this._execute(t, function (t) {
                      e._resolveCallback(t)
                    }, function (t) {
                      e._rejectCallback(t, n)
                    });
                  n = !1, this._popContext(), void 0 !== r && e._rejectCallback(r, !0)
                }
              }, o.prototype._settlePromiseFromHandler = function (t, e, n, r) {
                var i = r._bitField;
                if (0 == (65536 & i)) {
                  r._pushContext();
                  var o;
                  e === k ? n && "number" == typeof n.length ? o = R(t).apply(this._boundValue(), n) : (o = A, o.e = new g("cannot .spread() a non-array: " + d.classString(n))) : o = R(t).call(e, n);
                  var a = r._popContext();
                  i = r._bitField, 0 == (65536 & i) && (o === E ? r._reject(n) : o === A ? r._rejectCallback(o.e, !1) : (x.checkForgottenReturns(o, a, "", r, this), r._resolveCallback(o)))
                }
              }, o.prototype._target = function () {
                for (var t = this; t._isFollowing();) t = t._followee();
                return t
              }, o.prototype._followee = function () {
                return this._rejectionHandler0
              }, o.prototype._setFollowee = function (t) {
                this._rejectionHandler0 = t
              }, o.prototype._settlePromise = function (t, e, n, i) {
                var a = t instanceof o,
                  s = this._bitField,
                  c = 0 != (134217728 & s);
                0 != (65536 & s) ? (a && t._invokeInternalOnCancel(), n instanceof P && n.isFinallyHandler() ? (n.cancelPromise = t, R(e).call(n, i) === A && t._reject(A.e)) : e === f ? t._fulfill(f.call(n)) : n instanceof r ? n._promiseCancelled(t) : a || t instanceof j ? t._cancel() : n.cancel()) : "function" == typeof e ? a ? (c && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, n, i, t)) : e.call(n, i, t) : n instanceof r ? n._isResolved() || (0 != (33554432 & s) ? n._promiseFulfilled(i, t) : n._promiseRejected(i, t)) : a && (c && t._setAsyncGuaranteed(), 0 != (33554432 & s) ? t._fulfill(i) : t._reject(i))
              }, o.prototype._settlePromiseLateCancellationObserver = function (t) {
                var e = t.handler,
                  n = t.promise,
                  r = t.receiver,
                  i = t.value;
                "function" == typeof e ? n instanceof o ? this._settlePromiseFromHandler(e, r, i, n) : e.call(r, i, n) : n instanceof o && n._reject(i)
              }, o.prototype._settlePromiseCtx = function (t) {
                this._settlePromise(t.promise, t.handler, t.receiver, t.value)
              }, o.prototype._settlePromise0 = function (t, e, n) {
                var r = this._promise0,
                  i = this._receiverAt(0);
                this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(r, t, i, e)
              }, o.prototype._clearCallbackDataAtIndex = function (t) {
                var e = 4 * t - 4;
                this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
              }, o.prototype._fulfill = function (t) {
                var e = this._bitField;
                if (!((117506048 & e) >>> 16)) {
                  if (t === this) {
                    var n = l();
                    return this._attachExtraTrace(n), this._reject(n)
                  }
                  this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : y.settlePromises(this))
                }
              }, o.prototype._reject = function (t) {
                var e = this._bitField;
                if (!((117506048 & e) >>> 16)) {
                  if (this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal()) return y.fatalError(t, d.isNode);
                  (65535 & e) > 0 ? y.settlePromises(this) : this._ensurePossibleRejectionHandled()
                }
              }, o.prototype._fulfillPromises = function (t, e) {
                for (var n = 1; t > n; n++) {
                  var r = this._fulfillmentHandlerAt(n),
                    i = this._promiseAt(n),
                    o = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                }
              }, o.prototype._rejectPromises = function (t, e) {
                for (var n = 1; t > n; n++) {
                  var r = this._rejectionHandlerAt(n),
                    i = this._promiseAt(n),
                    o = this._receiverAt(n);
                  this._clearCallbackDataAtIndex(n), this._settlePromise(i, r, o, e)
                }
              }, o.prototype._settlePromises = function () {
                var t = this._bitField,
                  e = 65535 & t;
                if (e > 0) {
                  if (0 != (16842752 & t)) {
                    var n = this._fulfillmentHandler0;
                    this._settlePromise0(this._rejectionHandler0, n, t), this._rejectPromises(e, n)
                  } else {
                    var r = this._rejectionHandler0;
                    this._settlePromise0(this._fulfillmentHandler0, r, t), this._fulfillPromises(e, r)
                  }
                  this._setLength(0)
                }
                this._clearCancellationData()
              }, o.prototype._settledValue = function () {
                var t = this._bitField;
                return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0
              }, o.defer = o.pending = function () {
                return x.deprecated("Promise.defer", "new Promise"), {
                  promise: new o(w),
                  resolve: a,
                  reject: s
                }
              }, d.notEnumerableProp(o, "_makeSelfResolutionError", l), t("./method")(o, w, C, p, x), t("./bind")(o, w, C, x), t("./cancel")(o, j, p, x), t("./direct_resolve")(o), t("./synchronous_inspection")(o), t("./join")(o, j, C, w, y, u), o.Promise = o, o.version = "3.5.1", t("./map.js")(o, j, p, C, w, x), t("./call_get.js")(o), t("./using.js")(o, p, C, F, w, x), t("./timers.js")(o, w, x), t("./generators.js")(o, p, w, C, r, x), t("./nodeify.js")(o), t("./promisify.js")(o, w), t("./props.js")(o, j, C, p), t("./race.js")(o, w, C, p), t("./reduce.js")(o, j, p, C, w, x), t("./settle.js")(o, j, x), t("./some.js")(o, j, p), t("./filter.js")(o, w), t("./each.js")(o, w), t("./any.js")(o), d.toFastProperties(o), d.toFastProperties(o.prototype), c({
                a: 1
              }), c({
                b: 2
              }), c({
                c: 3
              }), c(1), c(function () {}), c(void 0), c(!1), c(new o(w)), x.setBounds(v.firstLineError, d.lastLineError), o
            }
          }, {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36
          }],
          23: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o) {
              function a(t) {
                switch (t) {
                  case -2:
                    return [];
                  case -3:
                    return {};
                  case -6:
                    return new Map
                }
              }

              function s(t) {
                var r = this._promise = new e(n);
                t instanceof e && r._propagateFrom(t, 3), r._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2)
              }
              var c = t("./util");
              return c.inherits(s, o), s.prototype.length = function () {
                return this._length
              }, s.prototype.promise = function () {
                return this._promise
              }, s.prototype._init = function t(n, o) {
                var s = r(this._values, this._promise);
                if (s instanceof e) {
                  s = s._target();
                  var u = s._bitField;
                  if (this._values = s, 0 == (50397184 & u)) return this._promise._setAsyncGuaranteed(), s._then(t, this._reject, void 0, this, o);
                  if (0 == (33554432 & u)) return 0 != (16777216 & u) ? this._reject(s._reason()) : this._cancel();
                  s = s._value()
                }
                if (null === (s = c.asArray(s))) {
                  return void this._promise._rejectCallback(i("expecting an array or an iterable object but got " + c.classString(s)).reason(), !1)
                }
                if (0 === s.length) return void(-5 === o ? this._resolveEmptyArray() : this._resolve(a(o)));
                this._iterate(s)
              }, s.prototype._iterate = function (t) {
                var n = this.getActualLength(t.length);
                this._length = n, this._values = this.shouldCopyValues() ? Array(n) : this._values;
                for (var i = this._promise, o = !1, a = null, s = 0; n > s; ++s) {
                  var c = r(t[s], i);
                  c instanceof e ? (c = c._target(), a = c._bitField) : a = null, o ? null !== a && c.suppressUnhandledRejections() : null !== a ? 0 == (50397184 & a) ? (c._proxy(this, s), this._values[s] = c) : o = 0 != (33554432 & a) ? this._promiseFulfilled(c._value(), s) : 0 != (16777216 & a) ? this._promiseRejected(c._reason(), s) : this._promiseCancelled(s) : o = this._promiseFulfilled(c, s)
                }
                o || i._setAsyncGuaranteed()
              }, s.prototype._isResolved = function () {
                return null === this._values
              }, s.prototype._resolve = function (t) {
                this._values = null, this._promise._fulfill(t)
              }, s.prototype._cancel = function () {
                !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel())
              }, s.prototype._reject = function (t) {
                this._values = null, this._promise._rejectCallback(t, !1)
              }, s.prototype._promiseFulfilled = function (t, e) {
                return this._values[e] = t, this._length <= ++this._totalResolved && (this._resolve(this._values), !0)
              }, s.prototype._promiseCancelled = function () {
                return this._cancel(), !0
              }, s.prototype._promiseRejected = function (t) {
                return this._totalResolved++, this._reject(t), !0
              }, s.prototype._resultCancelled = function () {
                if (!this._isResolved()) {
                  var t = this._values;
                  if (this._cancel(), t instanceof e) t.cancel();
                  else
                    for (var n = 0; t.length > n; ++n) t[n] instanceof e && t[n].cancel()
                }
              }, s.prototype.shouldCopyValues = function () {
                return !0
              }, s.prototype.getActualLength = function (t) {
                return t
              }, s
            }
          }, {
            "./util": 36
          }],
          24: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n) {
              function r(t) {
                return !w.test(t)
              }

              function i(t) {
                try {
                  return !0 === t.__isPromisified__
                } catch (t) {
                  return !1
                }
              }

              function o(t, e, n) {
                var r = h.getDataPropertyOrDefault(t, e + n, g);
                return !!r && i(r)
              }

              function a(t, e, n) {
                for (var r = 0; t.length > r; r += 2) {
                  var i = t[r];
                  if (n.test(i))
                    for (var o = i.replace(n, ""), a = 0; t.length > a; a += 2)
                      if (t[a] === o) throw new m("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e))
                }
              }

              function s(t, e, n, r) {
                for (var s = h.inheritedDataKeys(t), c = [], u = 0; s.length > u; ++u) {
                  var l = s[u],
                    f = t[l],
                    p = r === k || k(l, f, t);
                  "function" != typeof f || i(f) || o(t, l, e) || !r(l, f, t, p) || c.push(l, f)
                }
                return a(c, e, n), c
              }

              function c(t, r, i, o, a, s) {
                function c() {
                  var i = r;
                  r === p && (i = this);
                  var o = new e(n);
                  o._captureStackTrace();
                  var a = "string" == typeof l && this !== u ? this[l] : t,
                    c = d(o, s);
                  try {
                    a.apply(i, _(arguments, c))
                  } catch (t) {
                    o._rejectCallback(v(t), !0, !0)
                  }
                  return o._isFateSealed() || o._setAsyncGuaranteed(), o
                }
                var u = function () {
                    return this
                  }(),
                  l = t;
                return "string" == typeof l && (t = o), h.notEnumerableProp(c, "__isPromisified__", !0), c
              }

              function u(t, e, n, r, i) {
                for (var o = RegExp(E(e) + "$"), a = s(t, e, o, n), c = 0, u = a.length; u > c; c += 2) {
                  var l = a[c],
                    f = a[c + 1],
                    d = l + e;
                  if (r === C) t[d] = C(l, p, l, f, e, i);
                  else {
                    var _ = r(f, function () {
                      return C(l, p, l, f, e, i)
                    });
                    h.notEnumerableProp(_, "__isPromisified__", !0), t[d] = _
                  }
                }
                return h.toFastProperties(t), t
              }

              function l(t, e, n) {
                return C(t, e, void 0, t, null, n)
              }
              var f, p = {},
                h = t("./util"),
                d = t("./nodeback"),
                _ = h.withAppended,
                v = h.maybeWrapAsError,
                y = h.canEvaluate,
                m = t("./errors").TypeError,
                g = {
                  __isPromisified__: !0
                },
                b = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"],
                w = RegExp("^(?:" + b.join("|") + ")$"),
                k = function (t) {
                  return h.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                },
                E = function (t) {
                  return t.replace(/([$])/, "\\$")
                },
                C = y ? f : c;
              e.promisify = function (t, e) {
                if ("function" != typeof t) throw new m("expecting a function but got " + h.classString(t));
                if (i(t)) return t;
                e = Object(e);
                var n = void 0 === e.context ? p : e.context,
                  o = !!e.multiArgs,
                  a = l(t, n, o);
                return h.copyDescriptors(t, a, r), a
              }, e.promisifyAll = function (t, e) {
                if ("function" != typeof t && "object" != typeof t) throw new m("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                e = Object(e);
                var n = !!e.multiArgs,
                  r = e.suffix;
                "string" != typeof r && (r = "Async");
                var i = e.filter;
                "function" != typeof i && (i = k);
                var o = e.promisifier;
                if ("function" != typeof o && (o = C), !h.isIdentifier(r)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                for (var a = h.inheritedDataKeys(t), s = 0; a.length > s; ++s) {
                  var c = t[a[s]];
                  "constructor" !== a[s] && h.isClass(c) && (u(c.prototype, r, i, o, n), u(c, r, i, o, n))
                }
                return u(t, r, i, o, n)
              }
            }
          }, {
            "./errors": 12,
            "./nodeback": 20,
            "./util": 36
          }],
          25: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i) {
              function o(t) {
                var e, n = !1;
                if (void 0 !== s && t instanceof s) e = f(t), n = !0;
                else {
                  var r = l.keys(t),
                    i = r.length;
                  e = Array(2 * i);
                  for (var o = 0; i > o; ++o) {
                    var a = r[o];
                    e[o] = t[a], e[o + i] = a
                  }
                }
                this.constructor$(e), this._isMap = n, this._init$(void 0, n ? -6 : -3)
              }

              function a(t) {
                var n, a = r(t);
                return u(a) ? (n = a instanceof e ? a._then(e.props, void 0, void 0, void 0, void 0) : new o(a).promise(), a instanceof e && n._propagateFrom(a, 2), n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
              }
              var s, c = t("./util"),
                u = c.isObject,
                l = t("./es5");
              "function" == typeof Map && (s = Map);
              var f = function () {
                  function t(t, r) {
                    this[e] = t, this[e + n] = r, e++
                  }
                  var e = 0,
                    n = 0;
                  return function (r) {
                    n = r.size, e = 0;
                    var i = Array(2 * r.size);
                    return r.forEach(t, i), i
                  }
                }(),
                p = function (t) {
                  for (var e = new s, n = t.length / 2 | 0, r = 0; n > r; ++r) {
                    e.set(t[n + r], t[r])
                  }
                  return e
                };
              c.inherits(o, n), o.prototype._init = function () {}, o.prototype._promiseFulfilled = function (t, e) {
                if (this._values[e] = t, ++this._totalResolved >= this._length) {
                  var n;
                  if (this._isMap) n = p(this._values);
                  else {
                    n = {};
                    for (var r = this.length(), i = 0, o = this.length(); o > i; ++i) n[this._values[i + r]] = this._values[i]
                  }
                  return this._resolve(n), !0
                }
                return !1
              }, o.prototype.shouldCopyValues = function () {
                return !1
              }, o.prototype.getActualLength = function (t) {
                return t >> 1
              }, e.prototype.props = function () {
                return a(this)
              }, e.props = function (t) {
                return a(t)
              }
            }
          }, {
            "./es5": 13,
            "./util": 36
          }],
          26: [function (t, e, n) {
            "use strict";

            function r(t, e, n, r, i) {
              for (var o = 0; i > o; ++o) n[o + r] = t[o + e], t[o + e] = void 0
            }

            function i(t) {
              this._capacity = t, this._length = 0, this._front = 0
            }
            i.prototype._willBeOverCapacity = function (t) {
              return t > this._capacity
            }, i.prototype._pushOne = function (t) {
              var e = this.length();
              this._checkCapacity(e + 1), this[this._front + e & this._capacity - 1] = t, this._length = e + 1
            }, i.prototype.push = function (t, e, n) {
              var r = this.length() + 3;
              if (this._willBeOverCapacity(r)) return this._pushOne(t), this._pushOne(e), void this._pushOne(n);
              var i = this._front + r - 3;
              this._checkCapacity(r);
              var o = this._capacity - 1;
              this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = n, this._length = r
            }, i.prototype.shift = function () {
              var t = this._front,
                e = this[t];
              return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e
            }, i.prototype.length = function () {
              return this._length
            }, i.prototype._checkCapacity = function (t) {
              t > this._capacity && this._resizeTo(this._capacity << 1)
            }, i.prototype._resizeTo = function (t) {
              var e = this._capacity;
              this._capacity = t, r(this, 0, this, e, this._front + this._length & e - 1)
            }, e.exports = i
          }, {}],
          27: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i) {
              function o(t, o) {
                var c = r(t);
                if (c instanceof e) return s(c);
                if (null === (t = a.asArray(t))) return i("expecting an array or an iterable object but got " + a.classString(t));
                var u = new e(n);
                void 0 !== o && u._propagateFrom(o, 3);
                for (var l = u._fulfill, f = u._reject, p = 0, h = t.length; h > p; ++p) {
                  var d = t[p];
                  (void 0 !== d || p in t) && e.cast(d)._then(l, f, void 0, u, null)
                }
                return u
              }
              var a = t("./util"),
                s = function (t) {
                  return t.then(function (e) {
                    return o(e, t)
                  })
                };
              e.race = function (t) {
                return o(t, void 0)
              }, e.prototype.race = function () {
                return o(this, void 0)
              }
            }
          }, {
            "./util": 36
          }],
          28: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o, a) {
              function s(t, n, r, i) {
                this.constructor$(t);
                var a = p();
                this._fn = null === a ? n : h.domainBind(a, n), void 0 !== r && (r = e.resolve(r), r._attachCancellationCallback(this)), this._initialValue = r, this._currentCancellable = null, this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5)
              }

              function c(t, e) {
                this.isFulfilled() ? e._resolve(t) : e._reject(t)
              }

              function u(t, e, n, i) {
                return "function" != typeof e ? r("expecting a function but got " + h.classString(e)) : new s(t, e, n, i).promise()
              }

              function l(t) {
                this.accum = t, this.array._gotAccum(t);
                var n = i(this.value, this.array._promise);
                return n instanceof e ? (this.array._currentCancellable = n, n._then(f, void 0, void 0, this, void 0)) : f.call(this, n)
              }

              function f(t) {
                var n = this.array,
                  r = n._promise,
                  i = d(n._fn);
                r._pushContext();
                var o;
                (o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (n._currentCancellable = o);
                var s = r._popContext();
                return a.checkForgottenReturns(o, s, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r), o
              }
              var p = e._getDomain,
                h = t("./util"),
                d = h.tryCatch;
              h.inherits(s, n), s.prototype._gotAccum = function (t) {
                void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t)
              }, s.prototype._eachComplete = function (t) {
                return null !== this._eachValues && this._eachValues.push(t), this._eachValues
              }, s.prototype._init = function () {}, s.prototype._resolveEmptyArray = function () {
                this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
              }, s.prototype.shouldCopyValues = function () {
                return !1
              }, s.prototype._resolve = function (t) {
                this._promise._resolveCallback(t), this._values = null
              }, s.prototype._resultCancelled = function (t) {
                if (t === this._initialValue) return this._cancel();
                this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel())
              }, s.prototype._iterate = function (t) {
                this._values = t;
                var n, r, i = t.length;
                if (void 0 !== this._initialValue ? (n = this._initialValue, r = 0) : (n = e.resolve(t[0]), r = 1), this._currentCancellable = n, !n.isRejected())
                  for (; i > r; ++r) {
                    var o = {
                      accum: null,
                      value: t[r],
                      index: r,
                      length: i,
                      array: this
                    };
                    n = n._then(l, void 0, void 0, o, void 0)
                  }
                void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)), n._then(c, c, void 0, n, this)
              }, e.prototype.reduce = function (t, e) {
                return u(this, t, e, null)
              }, e.reduce = function (t, e, n, r) {
                return u(t, e, n, r)
              }
            }
          }, {
            "./util": 36
          }],
          29: [function (t, i, o) {
            "use strict";
            var a, s = t("./util"),
              c = function () {
                throw Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
              },
              u = s.getNativePromise();
            if (s.isNode && "undefined" == typeof MutationObserver) {
              var l = n.setImmediate,
                f = e.nextTick;
              a = s.isRecentNode ? function (t) {
                l.call(n, t)
              } : function (t) {
                f.call(e, t)
              }
            } else if ("function" == typeof u && "function" == typeof u.resolve) {
              var p = u.resolve();
              a = function (t) {
                p.then(t)
              }
            } else a = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== r ? function (t) {
              r(t)
            } : "undefined" != typeof setTimeout ? function (t) {
              setTimeout(t, 0)
            } : c : function () {
              var t = document.createElement("div"),
                e = {
                  attributes: !0
                },
                n = !1,
                r = document.createElement("div");
              new MutationObserver(function () {
                t.classList.toggle("foo"), n = !1
              }).observe(r, e);
              var i = function () {
                n || (n = !0, r.classList.toggle("foo"))
              };
              return function (n) {
                var r = new MutationObserver(function () {
                  r.disconnect(), n()
                });
                r.observe(t, e), i()
              }
            }();
            i.exports = a
          }, {
            "./util": 36
          }],
          30: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r) {
              function i(t) {
                this.constructor$(t)
              }
              var o = e.PromiseInspection;
              t("./util").inherits(i, n), i.prototype._promiseResolved = function (t, e) {
                return this._values[t] = e, this._length <= ++this._totalResolved && (this._resolve(this._values), !0)
              }, i.prototype._promiseFulfilled = function (t, e) {
                var n = new o;
                return n._bitField = 33554432, n._settledValueField = t, this._promiseResolved(e, n)
              }, i.prototype._promiseRejected = function (t, e) {
                var n = new o;
                return n._bitField = 16777216, n._settledValueField = t, this._promiseResolved(e, n)
              }, e.settle = function (t) {
                return r.deprecated(".settle()", ".reflect()"), new i(t).promise()
              }, e.prototype.settle = function () {
                return e.settle(this)
              }
            }
          }, {
            "./util": 36
          }],
          31: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r) {
              function i(t) {
                this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1
              }

              function o(t, e) {
                if ((0 | e) !== e || 0 > e) return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                var n = new i(t),
                  o = n.promise();
                return n.setHowMany(e), n.init(), o
              }
              var a = t("./util"),
                s = t("./errors").RangeError,
                c = t("./errors").AggregateError,
                u = a.isArray,
                l = {};
              a.inherits(i, n), i.prototype._init = function () {
                if (this._initialized) {
                  if (0 === this._howMany) return void this._resolve([]);
                  this._init$(void 0, -5);
                  var t = u(this._values);
                  !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                }
              }, i.prototype.init = function () {
                this._initialized = !0, this._init()
              }, i.prototype.setUnwrap = function () {
                this._unwrap = !0
              }, i.prototype.howMany = function () {
                return this._howMany
              }, i.prototype.setHowMany = function (t) {
                this._howMany = t
              }, i.prototype._promiseFulfilled = function (t) {
                return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), this._resolve(1 === this.howMany() && this._unwrap ? this._values[0] : this._values), !0)
              }, i.prototype._promiseRejected = function (t) {
                return this._addRejected(t), this._checkOutcome()
              }, i.prototype._promiseCancelled = function () {
                return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l), this._checkOutcome())
              }, i.prototype._checkOutcome = function () {
                if (this.howMany() > this._canPossiblyFulfill()) {
                  for (var t = new c, e = this.length(); this._values.length > e; ++e) this._values[e] !== l && t.push(this._values[e]);
                  return t.length > 0 ? this._reject(t) : this._cancel(), !0
                }
                return !1
              }, i.prototype._fulfilled = function () {
                return this._totalResolved
              }, i.prototype._rejected = function () {
                return this._values.length - this.length()
              }, i.prototype._addRejected = function (t) {
                this._values.push(t)
              }, i.prototype._addFulfilled = function (t) {
                this._values[this._totalResolved++] = t
              }, i.prototype._canPossiblyFulfill = function () {
                return this.length() - this._rejected()
              }, i.prototype._getRangeError = function (t) {
                return new s("Input array must contain at least " + this._howMany + " items but contains only " + t + " items")
              }, i.prototype._resolveEmptyArray = function () {
                this._reject(this._getRangeError(0))
              }, e.some = function (t, e) {
                return o(t, e)
              }, e.prototype.some = function (t) {
                return o(this, t)
              }, e._SomePromiseArray = i
            }
          }, {
            "./errors": 12,
            "./util": 36
          }],
          32: [function (t, e, n) {
            "use strict";
            e.exports = function (t) {
              function e(t) {
                void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0)
              }
              e.prototype._settledValue = function () {
                return this._settledValueField
              };
              var n = e.prototype.value = function () {
                  if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                  return this._settledValue()
                },
                r = e.prototype.error = e.prototype.reason = function () {
                  if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                  return this._settledValue()
                },
                i = e.prototype.isFulfilled = function () {
                  return 0 != (33554432 & this._bitField)
                },
                o = e.prototype.isRejected = function () {
                  return 0 != (16777216 & this._bitField)
                },
                a = e.prototype.isPending = function () {
                  return 0 == (50397184 & this._bitField)
                },
                s = e.prototype.isResolved = function () {
                  return 0 != (50331648 & this._bitField)
                };
              e.prototype.isCancelled = function () {
                return 0 != (8454144 & this._bitField)
              }, t.prototype.__isCancelled = function () {
                return 65536 == (65536 & this._bitField)
              }, t.prototype._isCancelled = function () {
                return this._target().__isCancelled()
              }, t.prototype.isCancelled = function () {
                return 0 != (8454144 & this._target()._bitField)
              }, t.prototype.isPending = function () {
                return a.call(this._target())
              }, t.prototype.isRejected = function () {
                return o.call(this._target())
              }, t.prototype.isFulfilled = function () {
                return i.call(this._target())
              }, t.prototype.isResolved = function () {
                return s.call(this._target())
              }, t.prototype.value = function () {
                return n.call(this._target())
              }, t.prototype.reason = function () {
                var t = this._target();
                return t._unsetRejectionIsUnhandled(), r.call(t)
              }, t.prototype._value = function () {
                return this._settledValue()
              }, t.prototype._reason = function () {
                return this._unsetRejectionIsUnhandled(), this._settledValue()
              }, t.PromiseInspection = e
            }
          }, {}],
          33: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n) {
              function r(t, r) {
                if (l(t)) {
                  if (t instanceof e) return t;
                  var i = o(t);
                  if (i === u) {
                    r && r._pushContext();
                    var c = e.reject(i.e);
                    return r && r._popContext(), c
                  }
                  if ("function" == typeof i) {
                    if (a(t)) {
                      var c = new e(n);
                      return t._then(c._fulfill, c._reject, void 0, c, null), c
                    }
                    return s(t, i, r)
                  }
                }
                return t
              }

              function i(t) {
                return t.then
              }

              function o(t) {
                try {
                  return i(t)
                } catch (t) {
                  return u.e = t, u
                }
              }

              function a(t) {
                try {
                  return f.call(t, "_promise0")
                } catch (t) {
                  return !1
                }
              }

              function s(t, r, i) {
                function o(t) {
                  s && (s._resolveCallback(t), s = null)
                }

                function a(t) {
                  s && (s._rejectCallback(t, f, !0), s = null)
                }
                var s = new e(n),
                  l = s;
                i && i._pushContext(), s._captureStackTrace(), i && i._popContext();
                var f = !0,
                  p = c.tryCatch(r).call(t, o, a);
                return f = !1, s && p === u && (s._rejectCallback(p.e, !0, !0), s = null), l
              }
              var c = t("./util"),
                u = c.errorObj,
                l = c.isObject,
                f = {}.hasOwnProperty;
              return r
            }
          }, {
            "./util": 36
          }],
          34: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r) {
              function i(t) {
                this.handle = t
              }

              function o(t) {
                return clearTimeout(this.handle), t
              }

              function a(t) {
                throw clearTimeout(this.handle), t
              }
              var s = t("./util"),
                c = e.TimeoutError;
              i.prototype._resultCancelled = function () {
                clearTimeout(this.handle)
              };
              var u = function (t) {
                  return l(+this).thenReturn(t)
                },
                l = e.delay = function (t, o) {
                  var a, s;
                  return void 0 !== o ? (a = e.resolve(o)._then(u, null, null, t, void 0), r.cancellation() && o instanceof e && a._setOnCancel(o)) : (a = new e(n), s = setTimeout(function () {
                    a._fulfill()
                  }, +t), r.cancellation() && a._setOnCancel(new i(s)), a._captureStackTrace()), a._setAsyncGuaranteed(), a
                };
              e.prototype.delay = function (t) {
                return l(t, this)
              };
              var f = function (t, e, n) {
                var r;
                r = "string" != typeof e ? e instanceof Error ? e : new c("operation timed out") : new c(e), s.markAsOriginatingFromRejection(r), t._attachExtraTrace(r), t._reject(r), null != n && n.cancel()
              };
              e.prototype.timeout = function (t, e) {
                t = +t;
                var n, s, c = new i(setTimeout(function () {
                  n.isPending() && f(n, e, s)
                }, t));
                return r.cancellation() ? (s = this.then(), n = s._then(o, a, void 0, c, void 0), n._setOnCancel(c)) : n = this._then(o, a, void 0, c, void 0), n
              }
            }
          }, {
            "./util": 36
          }],
          35: [function (t, e, n) {
            "use strict";
            e.exports = function (e, n, r, i, o, a) {
              function s(t) {
                setTimeout(function () {
                  throw t
                }, 0)
              }

              function c(t) {
                var e = r(t);
                return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e
              }

              function u(t, n) {
                function i() {
                  if (a >= u) return l._fulfill();
                  var o = c(t[a++]);
                  if (o instanceof e && o._isDisposable()) {
                    try {
                      o = r(o._getDisposer().tryDispose(n), t.promise)
                    } catch (t) {
                      return s(t)
                    }
                    if (o instanceof e) return o._then(i, s, null, null, null)
                  }
                  i()
                }
                var a = 0,
                  u = t.length,
                  l = new e(o);
                return i(), l
              }

              function l(t, e, n) {
                this._data = t, this._promise = e, this._context = n
              }

              function f(t, e, n) {
                this.constructor$(t, e, n)
              }

              function p(t) {
                return l.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t
              }

              function h(t) {
                this.length = t, this.promise = null, this[t - 1] = null
              }
              var d = t("./util"),
                _ = t("./errors").TypeError,
                v = t("./util").inherits,
                y = d.errorObj,
                m = d.tryCatch,
                g = {};
              l.prototype.data = function () {
                return this._data
              }, l.prototype.promise = function () {
                return this._promise
              }, l.prototype.resource = function () {
                return this.promise().isFulfilled() ? this.promise().value() : g
              }, l.prototype.tryDispose = function (t) {
                var e = this.resource(),
                  n = this._context;
                void 0 !== n && n._pushContext();
                var r = e !== g ? this.doDispose(e, t) : null;
                return void 0 !== n && n._popContext(), this._promise._unsetDisposable(), this._data = null, r
              }, l.isDisposer = function (t) {
                return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
              }, v(f, l), f.prototype.doDispose = function (t, e) {
                return this.data().call(t, t, e)
              }, h.prototype._resultCancelled = function () {
                for (var t = this.length, n = 0; t > n; ++n) {
                  var r = this[n];
                  r instanceof e && r.cancel()
                }
              }, e.using = function () {
                var t = arguments.length;
                if (2 > t) return n("you must pass at least 2 arguments to Promise.using");
                var i = arguments[t - 1];
                if ("function" != typeof i) return n("expecting a function but got " + d.classString(i));
                var o, s = !0;
                2 === t && Array.isArray(arguments[0]) ? (o = arguments[0], t = o.length, s = !1) : (o = arguments, t--);
                for (var c = new h(t), f = 0; t > f; ++f) {
                  var _ = o[f];
                  if (l.isDisposer(_)) {
                    var v = _;
                    _ = _.promise(), _._setDisposable(v)
                  } else {
                    var g = r(_);
                    g instanceof e && (_ = g._then(p, null, null, {
                      resources: c,
                      index: f
                    }, void 0))
                  }
                  c[f] = _
                }
                for (var b = Array(c.length), f = 0; b.length > f; ++f) b[f] = e.resolve(c[f]).reflect();
                var w = e.all(b).then(function (t) {
                    for (var e = 0; t.length > e; ++e) {
                      var n = t[e];
                      if (n.isRejected()) return y.e = n.error(), y;
                      if (!n.isFulfilled()) return void w.cancel();
                      t[e] = n.value()
                    }
                    k._pushContext(), i = m(i);
                    var r = s ? i.apply(void 0, t) : i(t),
                      o = k._popContext();
                    return a.checkForgottenReturns(r, o, "Promise.using", k), r
                  }),
                  k = w.lastly(function () {
                    var t = new e.PromiseInspection(w);
                    return u(c, t)
                  });
                return c.promise = k, k._setOnCancel(c), k
              }, e.prototype._setDisposable = function (t) {
                this._bitField = 131072 | this._bitField, this._disposer = t
              }, e.prototype._isDisposable = function () {
                return (131072 & this._bitField) > 0
              }, e.prototype._getDisposer = function () {
                return this._disposer
              }, e.prototype._unsetDisposable = function () {
                this._bitField = -131073 & this._bitField, this._disposer = void 0
              }, e.prototype.disposer = function (t) {
                if ("function" == typeof t) return new f(t, this, i());
                throw new _
              }
            }
          }, {
            "./errors": 12,
            "./util": 36
          }],
          36: [function (t, r, i) {
            "use strict";

            function o() {
              try {
                var t = S;
                return S = null, t.apply(this, arguments)
              } catch (t) {
                return O.e = t, O
              }
            }

            function a(t) {
              return S = t, o
            }

            function s(t) {
              return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t
            }

            function c(t) {
              return "function" == typeof t || "object" == typeof t && null !== t
            }

            function u(t) {
              return s(t) ? Error(m(t)) : t
            }

            function l(t, e) {
              var n, r = t.length,
                i = Array(r + 1);
              for (n = 0; r > n; ++n) i[n] = t[n];
              return i[n] = e, i
            }

            function f(t, e, n) {
              if (!x.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
              var r = Object.getOwnPropertyDescriptor(t, e);
              return null != r ? null == r.get && null == r.set ? r.value : n : void 0
            }

            function p(t, e, n) {
              return s(t) ? t : (x.defineProperty(t, e, {
                value: n,
                configurable: !0,
                enumerable: !1,
                writable: !0
              }), t)
            }

            function h(t) {
              throw t
            }

            function d(t) {
              try {
                if ("function" == typeof t) {
                  var e = x.names(t.prototype),
                    n = x.isES5 && e.length > 1,
                    r = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                    i = L.test(t + "") && x.names(t).length > 0;
                  if (n || r || i) return !0
                }
                return !1
              } catch (t) {
                return !1
              }
            }

            function _(t) {
              function e() {}
              e.prototype = t;
              for (var n = 8; n--;) new e;
              return t
            }

            function v(t) {
              return N.test(t)
            }

            function y(t, e, n) {
              for (var r = Array(t), i = 0; t > i; ++i) r[i] = e + i + n;
              return r
            }

            function m(t) {
              try {
                return t + ""
              } catch (t) {
                return "[no string representation]"
              }
            }

            function g(t) {
              return t instanceof Error || null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name
            }

            function b(t) {
              try {
                p(t, "isOperational", !0)
              } catch (t) {}
            }

            function w(t) {
              return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational)
            }

            function k(t) {
              return g(t) && x.propertyIsWritable(t, "stack")
            }

            function E(t) {
              return {}.toString.call(t)
            }

            function C(t, e, n) {
              for (var r = x.names(t), i = 0; r.length > i; ++i) {
                var o = r[i];
                if (n(o)) try {
                  x.defineProperty(e, o, x.getDescriptor(t, o))
                } catch (t) {}
              }
            }

            function j(t) {
              return V ? Object({
                NODE_ENV: "production"
              })[t] : void 0
            }

            function T() {
              if ("function" == typeof Promise) try {
                if ("[object Promise]" === {}.toString.call(new Promise(function () {}))) return Promise
              } catch (t) {}
            }

            function F(t, e) {
              return t.bind(e)
            }
            var x = t("./es5"),
              P = "undefined" == typeof navigator,
              O = {
                e: {}
              },
              S, A = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : void 0 !== this ? this : null,
              R = function (t, e) {
                function n() {
                  this.constructor = t, this.constructor$ = e;
                  for (var n in e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
                }
                var r = {}.hasOwnProperty;
                return n.prototype = e.prototype, t.prototype = new n
              },
              I = function () {
                var t = [Array.prototype, Object.prototype, Function.prototype],
                  e = function (e) {
                    for (var n = 0; t.length > n; ++n)
                      if (t[n] === e) return !0;
                    return !1
                  };
                if (x.isES5) {
                  var n = Object.getOwnPropertyNames;
                  return function (t) {
                    for (var r = [], i = Object.create(null); null != t && !e(t);) {
                      var o;
                      try {
                        o = n(t)
                      } catch (t) {
                        return r
                      }
                      for (var a = 0; o.length > a; ++a) {
                        var s = o[a];
                        if (!i[s]) {
                          i[s] = !0;
                          var c = Object.getOwnPropertyDescriptor(t, s);
                          null != c && null == c.get && null == c.set && r.push(s)
                        }
                      }
                      t = x.getPrototypeOf(t)
                    }
                    return r
                  }
                }
                var r = {}.hasOwnProperty;
                return function (n) {
                  if (e(n)) return [];
                  var i = [];
                  t: for (var o in n)
                    if (r.call(n, o)) i.push(o);
                    else {
                      for (var a = 0; t.length > a; ++a)
                        if (r.call(t[a], o)) continue t;
                      i.push(o)
                    }
                  return i
                }
              }(),
              L = /this\s*\.\s*\S+\s*=/,
              N = /^[a-z$_][a-z$_0-9]*$/i,
              U = function () {
                return "stack" in Error() ? function (t) {
                  return k(t) ? t : Error(m(t))
                } : function (t) {
                  if (k(t)) return t;
                  try {
                    throw Error(m(t))
                  } catch (t) {
                    return t
                  }
                }
              }(),
              B = function (t) {
                return x.isArray(t) ? t : null
              };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
              var D = "function" == typeof Array.from ? function (t) {
                return Array.from(t)
              } : function (t) {
                for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done;) n.push(e.value);
                return n
              };
              B = function (t) {
                return x.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? D(t) : null
              }
            }
            var M = void 0 !== e && "[object process]" === E(e).toLowerCase(),
              V = void 0 !== e && !0,
              H = {
                isClass: d,
                isIdentifier: v,
                inheritedDataKeys: I,
                getDataPropertyOrDefault: f,
                thrower: h,
                isArray: x.isArray,
                asArray: B,
                notEnumerableProp: p,
                isPrimitive: s,
                isObject: c,
                isError: g,
                canEvaluate: P,
                errorObj: O,
                tryCatch: a,
                inherits: R,
                withAppended: l,
                maybeWrapAsError: u,
                toFastProperties: _,
                filledRange: y,
                toString: m,
                canAttachTrace: k,
                ensureErrorObject: U,
                originatesFromRejection: w,
                markAsOriginatingFromRejection: b,
                classString: E,
                copyDescriptors: C,
                hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                isNode: M,
                hasEnvVariables: V,
                env: j,
                global: A,
                getNativePromise: T,
                domainBind: F
              };
            H.isRecentNode = H.isNode && function () {
              var t = e.versions.node.split(".").map(Number);
              return 0 === t[0] && t[1] > 10 || t[0] > 0
            }(), H.isNode && H.toFastProperties(e);
            try {
              throw Error()
            } catch (t) {
              H.lastLineError = t
            }
            r.exports = H
          }, {
            "./es5": 13
          }]
        }, {}, [4])(4)
      }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise)
    }).call(e, n(6), n(7), n(17).setImmediate)
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = void 0;
    "undefined" != typeof window && (r = window.document.createElement("a"));
    e.omit = function (t, e) {
      return Object.keys(t).reduce(function (n, r) {
        return e && e.indexOf && -1 === e.indexOf(r) && (n[r] = t[r]), n
      }, {})
    }, e.parseAsURL = function (t) {
      return r || (r = window.document.createElement("a")), r.href = t, {
        protocol: r.protocol,
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname,
        search: r.search,
        hash: r.hash,
        host: r.host,
        toString: function () {
          return this.protocol + "//" + this.host + ("/" === this.pathname ? "" : this.pathname) + this.search + this.hash
        }
      }
    }, e.getQueryStringValue = function (t) {
      return decodeURIComponent(window.location.search.replace(RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
    }, e.getHashValue = function (t) {
      var e = window.location.hash.match(RegExp(t + "=([^&]*)"));
      return e ? e[1] : null
    }, e.cleanLocation = function () {
      if (window.history && window.history.pushState) {
        var t = window.location,
          e = t.protocol,
          n = t.host,
          r = t.pathname,
          i = t.search,
          o = t.hash,
          a = /access_token/.test(o) ? "" : o || "",
          s = i.split("&").reduce(function (t, e, n) {
            var r = /rslCallback=/.test(e) || /code=/.test(e) || /state=/.test(e) || /error=/.test(e) || /error_reason=/.test(e);
            return 0 === n && r ? "?" : 0 === n ? e : r ? t : t + "&" + e
          }, "");
        return s = "?" === s ? "" : s, window.history.pushState({
          html: document.body.innerHTML,
          pageTitle: document.title
        }, "", e + "//" + n + r + s + a), !0
      }
    }, e.rslError = function (t) {
      var e = [];
      return e.push("[" + t.provider + "][" + t.type + "] " + t.description), t.error && e.push(JSON.stringify(t.error, null, 2)), Error(e.join("\n\nORIGINAL ERROR: "))
    }, e.timestampFromNow = function (t) {
      var e = new Date;
      return e.setSeconds(e.getSeconds() + t)
    }
  }, function (t, e) {
    ! function (t) {
      "use strict";

      function e(t) {
        if ("string" != typeof t && (t += ""), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
      }

      function n(t) {
        return "string" != typeof t && (t += ""), t
      }

      function r(t) {
        var e = {
          next: function () {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e
            }
          }
        };
        return y.iterable && (e[Symbol.iterator] = function () {
          return e
        }), e
      }

      function i(t) {
        this.map = {}, t instanceof i ? t.forEach(function (t, e) {
          this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function (t) {
          this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
          this.append(e, t[e])
        }, this)
      }

      function o(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
      }

      function a(t) {
        return new Promise(function (e, n) {
          t.onload = function () {
            e(t.result)
          }, t.onerror = function () {
            n(t.error)
          }
        })
      }

      function s(t) {
        var e = new FileReader,
          n = a(e);
        return e.readAsArrayBuffer(t), n
      }

      function c(t) {
        var e = new FileReader,
          n = a(e);
        return e.readAsText(t), n
      }

      function u(t) {
        for (var e = new Uint8Array(t), n = Array(e.length), r = 0; e.length > r; r++) n[r] = String.fromCharCode(e[r]);
        return n.join("")
      }

      function l(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
      }

      function f() {
        return this.bodyUsed = !1, this._initBody = function (t) {
          if (this._bodyInit = t, t)
            if ("string" == typeof t) this._bodyText = t;
            else if (y.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
          else if (y.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
          else if (y.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = "" + t;
          else if (y.arrayBuffer && y.blob && g(t)) this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
          else {
            if (!y.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !b(t)) throw Error("unsupported BodyInit type");
            this._bodyArrayBuffer = l(t)
          } else this._bodyText = "";
          this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : y.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, y.blob && (this.blob = function () {
          var t = o(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
          return this._bodyArrayBuffer ? o(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
        }), this.text = function () {
          var t = o(this);
          if (t) return t;
          if (this._bodyBlob) return c(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(u(this._bodyArrayBuffer));
          if (this._bodyFormData) throw Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText)
        }, y.formData && (this.formData = function () {
          return this.text().then(d)
        }), this.json = function () {
          return this.text().then(JSON.parse)
        }, this
      }

      function p(t) {
        var e = t.toUpperCase();
        return w.indexOf(e) > -1 ? e : t
      }

      function h(t, e) {
        e = e || {};
        var n = e.body;
        if (t instanceof h) {
          if (t.bodyUsed) throw new TypeError("Already read");
          this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        } else this.url = t + "";
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = p(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
      }

      function d(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function (t) {
          if (t) {
            var n = t.split("="),
              r = n.shift().replace(/\+/g, " "),
              i = n.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(r), decodeURIComponent(i))
          }
        }), e
      }

      function _(t) {
        var e = new i;
        return t.split(/\r?\n/).forEach(function (t) {
          var n = t.split(":"),
            r = n.shift().trim();
          if (r) {
            var i = n.join(":").trim();
            e.append(r, i)
          }
        }), e
      }

      function v(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && 300 > this.status, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
      }
      if (!t.fetch) {
        var y = {
          searchParams: "URLSearchParams" in t,
          iterable: "Symbol" in t && "iterator" in Symbol,
          blob: "FileReader" in t && "Blob" in t && function () {
            try {
              return new Blob, !0
            } catch (t) {
              return !1
            }
          }(),
          formData: "FormData" in t,
          arrayBuffer: "ArrayBuffer" in t
        };
        if (y.arrayBuffer) var m = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          g = function (t) {
            return t && DataView.prototype.isPrototypeOf(t)
          },
          b = ArrayBuffer.isView || function (t) {
            return t && m.indexOf(Object.prototype.toString.call(t)) > -1
          };
        i.prototype.append = function (t, r) {
          t = e(t), r = n(r);
          var i = this.map[t];
          this.map[t] = i ? i + "," + r : r
        }, i.prototype.delete = function (t) {
          delete this.map[e(t)]
        }, i.prototype.get = function (t) {
          return t = e(t), this.has(t) ? this.map[t] : null
        }, i.prototype.has = function (t) {
          return this.map.hasOwnProperty(e(t))
        }, i.prototype.set = function (t, r) {
          this.map[e(t)] = n(r)
        }, i.prototype.forEach = function (t, e) {
          for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
        }, i.prototype.keys = function () {
          var t = [];
          return this.forEach(function (e, n) {
            t.push(n)
          }), r(t)
        }, i.prototype.values = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e)
          }), r(t)
        }, i.prototype.entries = function () {
          var t = [];
          return this.forEach(function (e, n) {
            t.push([n, e])
          }), r(t)
        }, y.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
        var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        h.prototype.clone = function () {
          return new h(this, {
            body: this._bodyInit
          })
        }, f.call(h.prototype), f.call(v.prototype), v.prototype.clone = function () {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new i(this.headers),
            url: this.url
          })
        }, v.error = function () {
          var t = new v(null, {
            status: 0,
            statusText: ""
          });
          return t.type = "error", t
        };
        var k = [301, 302, 303, 307, 308];
        v.redirect = function (t, e) {
          if (-1 === k.indexOf(e)) throw new RangeError("Invalid status code");
          return new v(null, {
            status: e,
            headers: {
              location: t
            }
          })
        }, t.Headers = i, t.Request = h, t.Response = v, t.fetch = function (t, e) {
          return new Promise(function (n, r) {
            var i = new h(t, e),
              o = new XMLHttpRequest;
            o.onload = function () {
              var t = {
                status: o.status,
                statusText: o.statusText,
                headers: _(o.getAllResponseHeaders() || "")
              };
              t.url = "responseURL" in o ? o.responseURL : t.headers.get("X-Request-URL"), n(new v("response" in o ? o.response : o.responseText, t))
            }, o.onerror = function () {
              r(new TypeError("Network request failed"))
            }, o.ontimeout = function () {
              r(new TypeError("Network request failed"))
            }, o.open(i.method, i.url, !0), "include" === i.credentials && (o.withCredentials = !0), "responseType" in o && y.blob && (o.responseType = "blob"), i.headers.forEach(function (t, e) {
              o.setRequestHeader(e, t)
            }), o.send(void 0 === i._bodyInit ? null : i._bodyInit)
          })
        }, t.fetch.polyfill = !0
      }
    }("undefined" != typeof self ? self : this)
  }, function (t, e, n) {
    t.exports = n(12)()
  }, function (e, n) {
    e.exports = t
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(16),
      o = r(i),
      a = n(19),
      s = r(a);
    e.default = {
      amazon: o.default,
      github: r(n(20)).default,
      google: r(n(24)).default,
      facebook: s.default,
      instagram: r(n(25)).default,
      linkedin: r(n(27)).default
    }
  }, function (t, e) {
    function n() {
      throw Error("setTimeout has not been defined")
    }

    function r() {
      throw Error("clearTimeout has not been defined")
    }

    function i(t) {
      if (l === setTimeout) return setTimeout(t, 0);
      if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
      try {
        return l(t, 0)
      } catch (e) {
        try {
          return l.call(null, t, 0)
        } catch (e) {
          return l.call(this, t, 0)
        }
      }
    }

    function o(t) {
      if (f === clearTimeout) return clearTimeout(t);
      if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
      try {
        return f(t)
      } catch (e) {
        try {
          return f.call(null, t)
        } catch (e) {
          return f.call(this, t)
        }
      }
    }

    function a() {
      _ && h && (_ = !1, h.length ? d = h.concat(d) : v = -1, d.length && s())
    }

    function s() {
      if (!_) {
        var t = i(a);
        _ = !0;
        for (var e = d.length; e;) {
          for (h = d, d = []; ++v < e;) h && h[v].run();
          v = -1, e = d.length
        }
        h = null, _ = !1, o(t)
      }
    }

    function c(t, e) {
      this.fun = t, this.array = e
    }

    function u() {}
    var l, f, p = t.exports = {};
    ! function () {
      try {
        l = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        l = n
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : r
      } catch (t) {
        f = r
      }
    }();
    var h, d = [],
      _ = !1,
      v = -1;
    p.nextTick = function (t) {
      var e = Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; arguments.length > n; n++) e[n - 1] = arguments[n];
      d.push(new c(t, e)), 1 !== d.length || _ || i(s)
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function (t) {
      return []
    }, p.binding = function (t) {
      throw Error("process.binding is not supported")
    }, p.cwd = function () {
      return "/"
    }, p.chdir = function (t) {
      throw Error("process.chdir is not supported")
    }, p.umask = function () {
      return 0
    }
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function () {
      function t(t, e) {
        for (var n = 0; e.length > n; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e
      }
    }();
    e.default = function () {
      function t(e) {
        r(this, t), this._provider = e, this._profile = {
          id: void 0,
          name: void 0,
          firstName: void 0,
          lastName: void 0,
          email: void 0,
          profilePicUrl: void 0
        }, this._token = {
          accessToken: void 0,
          expiresAt: void 0
        }, this._other = void 0
      }
      return i(t, [{
        key: "provider",
        set: function (t) {
          this._provider = t
        },
        get: function () {
          return this._provider
        }
      }, {
        key: "profile",
        set: function (t) {
          this._profile = t
        },
        get: function () {
          return this._profile
        }
      }, {
        key: "token",
        set: function (t) {
          this._token = t
        },
        get: function () {
          return this._token
        }
      }, {
        key: "other",
        set: function (t) {
          this._other = t
        },
        get: function () {
          return this._other
        }
      }]), t
    }()
  }, function (t, e, n) {
    n(2), t.exports = n(10)
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.OldSocialLogin = void 0;
    var s = Object.assign || function (t) {
        for (var e = 1; arguments.length > e; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      },
      c = function () {
        function t(t, e) {
          for (var n = 0; e.length > n; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      u = n(11);
    Object.defineProperty(e, "OldSocialLogin", {
      enumerable: !0,
      get: function () {
        return r(u).default
      }
    });
    var l = n(0),
      f = r(l),
      p = n(3),
      h = r(p),
      d = n(4),
      _ = r(d),
      v = n(28),
      y = r(v),
      m = n(5),
      g = r(m),
      b = n(8),
      w = r(b),
      k = n(1);
    f.default.config({
      cancellation: !0
    }), e.default = function (t) {
      var e, n;
      return n = e = function (e) {
        function n(e) {
          i(this, n);
          var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
          return r.isStateless = !t.prototype.render, r.state = {
            isLoaded: !1,
            isConnected: !1,
            isFetching: !1
          }, r.sdk = g.default[e.provider], r.accessToken = null, r.fetchProvider = "instagram" === e.provider || "github" === e.provider, r.loadPromise = f.default.resolve(), r.node = null, r.onLoginSuccess = r.onLoginSuccess.bind(r), r.onLoginFailure = r.onLoginFailure.bind(r), r.onLogoutFailure = r.onLogoutFailure.bind(r), r.onLogoutSuccess = r.onLogoutSuccess.bind(r), r.login = r.login.bind(r), r.logout = r.logout.bind(r), r.setInstance = r.setInstance.bind(r), r
        }
        return a(n, e), c(n, [{
          key: "componentDidMount",
          value: function () {
            var t = this,
              e = this.props,
              n = e.appId,
              r = e.autoCleanUri,
              i = e.autoLogin,
              o = e.gatekeeper,
              a = e.redirect;
            this.loadPromise = this.sdk.load({
              appId: n,
              redirect: a,
              gatekeeper: o,
              scope: e.scope
            }).then(function (e) {
              return r && (0, k.cleanLocation)(), e && (t.accessToken = e), t.setState(function (t) {
                return s({}, t, {
                  isLoaded: !0
                })
              }, function () {
                (i || t.accessToken) && (t.fetchProvider && !t.accessToken ? t.sdk.login(n, a).catch(t.onLoginFailure) : t.sdk.checkLogin(!0).then(t.onLoginSuccess, t.onLoginFailure))
              }), null
            }, this.onLoginFailure)
          }
        }, {
          key: "componentWillReceiveProps",
          value: function (t) {
            var e = this,
              n = this.props,
              r = n.appId,
              i = n.gatekeeper;
            "github" !== n.provider || i || r === t.appId || this.setState(function () {
              return {
                isLoaded: !1,
                isFetching: !1,
                isConnected: !1
              }
            }, function () {
              e.sdk.load(t.appId).then(function () {
                e.setState(function (t) {
                  return s({}, t, {
                    isLoaded: !0
                  })
                })
              }, e.onLoginFailure)
            })
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            this.loadPromise.cancel(), this.node = null
          }
        }, {
          key: "setInstance",
          value: function (t) {
            this.node = t, "function" == typeof this.props.getInstance && this.props.getInstance(t)
          }
        }, {
          key: "login",
          value: function () {
            var t = this;
            !this.state.isLoaded || this.state.isConnected || this.state.isFetching ? this.state.isLoaded && this.state.isConnected ? this.props.onLoginFailure("User already connected") : this.state.isLoaded && this.state.isFetching ? this.setState({
              isFetching: !1
            }, function () {
              t.login()
            }) : this.props.onLoginFailure(this.state.isLoaded ? "Unknown error" : "SDK not loaded") : this.setState(function (t) {
              return s({}, t, {
                isFetching: !0
              })
            }, function () {
              t.sdk.login().then(t.onLoginSuccess, t.onLoginFailure)
            })
          }
        }, {
          key: "onLoginSuccess",
          value: function (t) {
            var e = this.props,
              n = e.onLoginSuccess,
              r = e.provider,
              i = new w.default(r),
              o = this.sdk.generateUser(t);
            i.profile = o.profile, i.token = o.token, this.node ? this.setState(function (t) {
              return s({}, t, {
                isFetching: !1,
                isConnected: !0
              })
            }, function () {
              "function" == typeof n && n(i)
            }) : "function" == typeof n && n(i)
          }
        }, {
          key: "onLoginFailure",
          value: function (t) {
            var e = this.props.onLoginFailure;
            this.node ? this.setState(function (t) {
              return s({}, t, {
                isFetching: !1,
                isConnected: !1
              })
            }, function () {
              "function" == typeof e && e(t)
            }) : this.setState({
              isFetching: !1,
              isConnected: !1
            }, function () {
              "function" == typeof e && e(t)
            })
          }
        }, {
          key: "logout",
          value: function () {
            this.state.isLoaded && this.state.isConnected ? this.sdk.logout().then(this.onLogoutSuccess, this.onLogoutFailure) : this.props.onLoginFailure(this.state.isLoaded && !this.state.isConnected ? "User not connected" : "SDK not loaded")
          }
        }, {
          key: "onLogoutSuccess",
          value: function () {
            var t = this.props.onLogoutSuccess;
            this.node ? this.setState(function (t) {
              return s({}, t, {
                isConnected: !1
              })
            }, function () {
              "function" == typeof t && t()
            }) : "function" == typeof t && t()
          }
        }, {
          key: "onLogoutFailure",
          value: function (t) {
            "function" == typeof this.props.onLoginFailure && this.props.onLoginFailure(t)
          }
        }, {
          key: "render",
          value: function () {
            var e = (0, k.omit)(this.props, ["appId", "scope", "autoCleanUri", "autoLogin", "gatekeeper", "getInstance", "onLoginFailure", "onLoginSuccess", "onLogoutFailure", "onLogoutSuccess", "provider", "redirect", "ref"]),
              n = {};
            return (this.props.onLogoutFailure || this.props.onLogoutSuccess) && (n = {
              triggerLogout: this.logout
            }), this.isStateless || (n = s({}, n, {
              ref: this.setInstance
            })), _.default.createElement(t, s({
              triggerLogin: this.login
            }, n, e))
          }
        }]), n
      }(d.Component), e.propTypes = {
        appId: h.default.string.isRequired,
        autoCleanUri: h.default.bool,
        autoLogin: h.default.bool,
        gatekeeper: h.default.string,
        getInstance: h.default.func,
        onLoginFailure: h.default.func,
        onLoginSuccess: h.default.func,
        onLogoutFailure: h.default.func,
        onLogoutSuccess: h.default.func,
        provider: h.default.oneOf(y.default.providers).isRequired,
        redirect: function (t, e, n) {
          if ("instagram" === t.provider && (!t[e] || "string" != typeof t[e])) return Error("Missing required `" + e + "` prop of type `string` on " + n + ".")
        },
        scope: h.default.oneOfType([h.default.array, h.default.string])
      }, n
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = function () {
        function t(t, e) {
          for (var n = 0; e.length > n; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }(),
      c = n(3),
      u = r(c),
      l = n(4),
      f = r(l),
      p = n(5),
      h = r(p),
      d = n(8),
      _ = r(d),
      v = function (t) {
        function e(t) {
          i(this, e);
          var n = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return n.id = "sl" + Math.floor(65535 * Math.random()), n.handleSocialLoginInvokeSuccess = n.handleSocialLoginInvokeSuccess.bind(n), n.handleSocialLoginInvokeFailure = n.handleSocialLoginInvokeFailure.bind(n), n.handleLogin = n.handleLogin.bind(n), n
        }
        return a(e, t), s(e, [{
          key: "handleSocialLoginInvokeSuccess",
          value: function (t) {
            var e = this.props,
              n = e.callback,
              r = e.provider,
              i = new _.default,
              o = void 0,
              a = void 0;
            switch (r) {
              case "google":
                var s = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile(),
                  c = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse(!0);
                o = {
                  id: s.getId(),
                  name: s.getName(),
                  firstName: s.getGivenName(),
                  lastName: s.getFamilyName(),
                  email: s.getEmail(),
                  profilePicURL: s.getImageUrl()
                }, a = {
                  accessToken: c.access_token,
                  idToken: c.id_token,
                  scope: c.scope,
                  expiresIn: c.expires_in,
                  firstIssued_at: c.first_issued_at,
                  expiresAt: c.expires_at
                };
                break;
              case "facebook":
                o = {
                  id: t.id,
                  name: t.name,
                  firstName: t.first_name,
                  lastName: t.last_name,
                  email: t.email,
                  profilePicURL: t.picture.data.url
                }, a = {
                  accessToken: t.authResponse.accessToken,
                  expiresAt: t.authResponse.expiresIn
                };
                break;
              case "linkedin":
                o = {
                  id: window.IN.ENV.auth.member_id,
                  name: t.values[0].firstName + " " + t.values[0].lastName,
                  firstName: t.values[0].firstName,
                  lastName: t.values[0].lastName,
                  email: t.values[0].emailAddress,
                  profilePicURL: t.values[0].pictureUrl
                }, a = {
                  accessToken: void 0
                };
                var u = new Date;
                u.setSeconds(u.getSeconds() + window.IN.ENV.auth.oauth_expires_in), i.token.expiresAt = u;
                break;
              default:
                throw Error("Provider ’" + r + "’ isn’t supported.")
            }
            i.provider = r, i.profile = o, i.token = a, n(i, null)
          }
        }, {
          key: "handleSocialLoginInvokeFailure",
          value: function (t) {
            this.props.callback(null, t)
          }
        }, {
          key: "handleLogin",
          value: function (t, e) {
            var n = this,
              r = this.props,
              i = r.appId,
              o = r.provider,
              a = r.version,
              s = this.handleSocialLoginInvokeSuccess;
            "facebook" === o ? (window.FB.init({
              appId: i,
              xfbml: !0,
              version: "v" + a
            }), window.FB.login(function (t) {
              var e = t;
              window.FB.api("/me", {
                fields: "email,name,id,first_name,last_name,picture"
              }, function (t) {
                Object.assign(t, e), s(t)
              })
            }, {
              scope: "email"
            })) : "linkedin" === o && window.IN.User.authorize(function (t) {
              window.IN.API.Profile("me").fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "emailAddress"]).result(function (t) {
                s(t)
              }).error(function (t) {
                n.handleSocialLoginInvokeFailure(t)
              })
            })
          }
        }, {
          key: "componentDidMount",
          value: function () {
            var t = this.props.appId;
            "google" === this.props.provider ? h.default.google.oldLoad(t, this.id, this.handleSocialLoginInvokeSuccess, this.handleSocialLoginInvokeFailure, this.props.prompt) : "facebook" === this.props.provider ? h.default.facebook.oldLoad(t) : "linkedin" === this.props.provider && h.default.linkedin.oldLoad(t, this.props.authorize, this.props.cookie)
          }
        }, {
          key: "getProfile",
          value: function () {
            window.IN.API.Profile("me").fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "emailAddress"]).result(function (t) {
              alert(t)
            })
          }
        }, {
          key: "render",
          value: function () {
            return f.default.createElement("div", {
              id: this.id,
              onClick: this.handleLogin
            }, this.props.children)
          }
        }]), e
      }(l.Component);
    v.propTypes = {
      appId: u.default.string.isRequired,
      callback: u.default.func,
      children: u.default.oneOfType([u.default.string, u.default.number, u.default.element, u.default.node]).isRequired,
      provider: u.default.oneOf(["facebook", "google", "linkedin"]).isRequired,
      prompt: u.default.string,
      cookie: u.default.bool,
      authorize: u.default.bool,
      version: u.default.string
    }, v.defaultProps = {
      version: "2.8"
    }, e.default = v
  }, function (t, e, n) {
    "use strict";
    var r = n(13),
      i = n(14),
      o = n(15);
    t.exports = function () {
      function t(t, e, n, r, a, s) {
        s !== o && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
      }

      function e() {
        return t
      }
      t.isRequired = t;
      var n = {
        array: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: e,
        element: t,
        instanceOf: e,
        node: t,
        objectOf: e,
        oneOf: e,
        oneOfType: e,
        shape: e,
        exact: e
      };
      return n.checkPropTypes = r, n.PropTypes = n, n
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return function () {
        return t
      }
    }
    var i = function () {};
    i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function () {
      return this
    }, i.thatReturnsArgument = function (t) {
      return t
    }, t.exports = i
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n, r, o, a, s, c) {
      if (i(e), !t) {
        var u;
        if (void 0 === e) u = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
          var l = [n, r, o, a, s, c],
            f = 0;
          u = Error(e.replace(/%s/g, function () {
            return l[f++]
          })), u.name = "Invariant Violation"
        }
        throw u.framesToPop = 1, u
      }
    }
    var i = function (t) {};
    t.exports = r
  }, function (t, e, n) {
    "use strict";
    t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = Object.assign || function (t) {
        for (var e = 1; arguments.length > e; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      },
      i = n(0),
      o = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(i),
      a = n(1),
      s = ["profile"],
      c = function (t) {
        var e = t.appId,
          n = t.scope;
        return new o.default(function (t) {
          if (document.getElementById("amazon-sdk")) return t();
          Array.isArray(n) ? s = s.concat(n) : "string" == typeof n && n && (s = s.concat(n.split(","))), s = s.reduce(function (t, e) {
            return "string" == typeof e && t && t.indexOf && -1 === t.indexOf(e) && t.push(e.trim()), t
          }, []);
          var r = document.getElementsByTagName("script")[0],
            i = document.createElement("script");
          i.src = "//api-cdn.amazon.com/sdk/login1.js", i.id = "amazon-sdk", i.async = !0, window.onAmazonLoginReady = function () {
            return window.amazon.Login.setClientId(e), t()
          }, r ? r.parentNode.appendChild(i) : document.appendChild(i)
        })
      },
      u = function () {
        return new o.default(function (t, e) {
          window.amazon.Login.authorize({
            scope: s
          }, function (n) {
            return n.error ? e((0, a.rslError)({
              provider: "amazon",
              type: "auth",
              description: "Authentication failed",
              error: n
            })) : p(n).then(t, e)
          })
        })
      },
      l = function () {
        return new o.default(function (t, e) {
          return u().then(t, e)
        })
      },
      f = function () {
        return new o.default(function (t) {
          return window.amazon.Login.logout(), t()
        })
      },
      p = function (t) {
        return new o.default(function (e, n) {
          window.amazon.Login.retrieveProfile(t.access_token, function (i) {
            return i.error ? n((0, a.rslError)({
              provider: "amazon",
              type: "get_profile",
              description: "Failed to get user profile",
              error: i
            })) : e(r({}, t, i))
          })
        })
      };
    e.default = {
      checkLogin: u,
      generateUser: function (t) {
        return {
          profile: {
            id: t.profile.CustomerId,
            name: t.profile.Name,
            firstName: t.profile.Name,
            lastName: t.profile.Name,
            email: t.profile.PrimaryEmail,
            profilePicURL: void 0
          },
          token: {
            accessToken: t.access_token,
            expiresAt: (0, a.timestampFromNow)(t.expires_in)
          }
        }
      },
      load: c,
      login: l,
      logout: f
    }
  }, function (t, e, n) {
    function r(t, e) {
      this._id = t, this._clearFn = e
    }
    var i = Function.prototype.apply;
    e.setTimeout = function () {
      return new r(i.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function () {
      return new r(i.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close()
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(window, this._id)
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      0 > e || (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout()
      }, e))
    }, n(18), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
  }, function (t, e, n) {
    (function (t, e) {
      ! function (t, n) {
        "use strict";

        function r(t) {
          "function" != typeof t && (t = Function("" + t));
          for (var e = Array(arguments.length - 1), n = 0; e.length > n; n++) e[n] = arguments[n + 1];
          return u[c] = {
            callback: t,
            args: e
          }, s(c), c++
        }

        function i(t) {
          delete u[t]
        }

        function o(t) {
          var e = t.callback,
            r = t.args;
          switch (r.length) {
            case 0:
              e();
              break;
            case 1:
              e(r[0]);
              break;
            case 2:
              e(r[0], r[1]);
              break;
            case 3:
              e(r[0], r[1], r[2]);
              break;
            default:
              e.apply(n, r)
          }
        }

        function a(t) {
          if (l) setTimeout(a, 0, t);
          else {
            var e = u[t];
            if (e) {
              l = !0;
              try {
                o(e)
              } finally {
                i(t), l = !1
              }
            }
          }
        }
        if (!t.setImmediate) {
          var s, c = 1,
            u = {},
            l = !1,
            f = t.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(t);
          p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? function () {
            s = function (t) {
              e.nextTick(function () {
                a(t)
              })
            }
          }() : function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0,
                n = t.onmessage;
              return t.onmessage = function () {
                e = !1
              }, t.postMessage("", "*"), t.onmessage = n, e
            }
          }() ? function () {
            var e = "setImmediate$" + Math.random() + "$",
              n = function (n) {
                n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
              };
            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function (n) {
              t.postMessage(e + n, "*")
            }
          }() : t.MessageChannel ? function () {
            var t = new MessageChannel;
            t.port1.onmessage = function (t) {
              a(t.data)
            }, s = function (e) {
              t.port2.postMessage(e)
            }
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var t = f.documentElement;
            s = function (e) {
              var n = f.createElement("script");
              n.onreadystatechange = function () {
                a(e), n.onreadystatechange = null, t.removeChild(n), n = null
              }, t.appendChild(n)
            }
          }() : function () {
            s = function (t) {
              setTimeout(a, 0, t)
            }
          }(), p.setImmediate = r, p.clearImmediate = i
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(7), n(6))
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      var n = {};
      for (var r in t) 0 > e.indexOf(r) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
      return n
    }

    function i(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); t.length > e; e++) n[e] = t[e];
        return n
      }
      return Array.from(t)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = Object.assign || function (t) {
        for (var e = 1; arguments.length > e; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      },
      a = n(0),
      s = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(a),
      c = n(1),
      u = ["public_profile", "email"],
      l = ["email", "name", "id", "first_name", "last_name", "picture"],
      f = function (t) {
        var e = t.appId,
          n = t.field,
          r = t.version;
        return new s.default(function (t) {
          if (document.getElementById("facebook-jssdk")) return t();
          u = p(n, u), l = p(n, l);
          var i = document.getElementsByTagName("script")[0],
            o = document.createElement("script");
          o.src = "//connect.facebook.net/en_US/sdk.js", o.id = "facebook-jssdk", window.fbAsyncInit = function () {
            return window.FB.init({
              appId: e,
              xfbml: !0,
              version: r || "v2.9"
            }), t()
          }, i ? i.parentNode.appendChild(o) : document.appendChild(o)
        })
      },
      p = function (t, e) {
        var n = ["default"];
        return Array.isArray(t) ? n = e.concat(t) : t && "string" == typeof t && (n = e.concat(t.split(","))), n = n.reduce(function (t, e) {
          return "string" == typeof e && t && t.indexOf && -1 === t.indexOf(e) && t.add(e.trim()), t
        }, new Set), [].concat(i(n))
      },
      h = function (t) {
        return new s.default(function (e, n) {
          if (!t.authResponse) return n((0, c.rslError)({
            provider: "facebook",
            type: "auth",
            description: "Authentication failed",
            error: t
          }));
          switch (t.status) {
            case "connected":
              y().then(function (n) {
                return e(o({}, n, t.authResponse))
              });
              break;
            case "not_authorized":
            case "unknown":
              return n((0, c.rslError)({
                provider: "facebook",
                type: "auth",
                description: "Authentication has been cancelled or an unknown error occurred",
                error: t
              }))
          }
        })
      },
      d = function () {
        return new s.default(function (t, e) {
          window.FB.getLoginStatus(function (n) {
            return h(n).then(t, e)
          })
        })
      },
      _ = function () {
        return new s.default(function (t, e) {
          window.FB.login(function (n) {
            return h(n).then(t, e)
          }, {
            scope: u
          })
        })
      },
      v = function () {
        return new s.default(function (t) {
          window.FB.logout(t)
        })
      },
      y = function () {
        return new s.default(function (t) {
          window.FB.api("/me", "GET", {
            fields: l
          }, t)
        })
      };
    e.default = {
      checkLogin: d,
      generateUser: function (t) {
        var e = t.accessToken,
          n = t.id,
          i = t.email,
          o = t.expiresIn,
          a = t.first_name,
          s = t.last_name,
          u = t.name,
          l = t.picture,
          f = r(t, ["accessToken", "id", "email", "expiresIn", "first_name", "last_name", "name", "picture", "userID"]);
        return {
          profile: {
            id: n,
            email: i,
            name: u,
            firstName: a,
            lastName: s,
            profilePicURL: l.data.url
          },
          token: {
            accessToken: e,
            expiresAt: (0, c.timestampFromNow)(o)
          },
          other: f
        }
      },
      load: f,
      login: _,
      logout: v,
      oldLoad: function (t) {
        var e = "fb-client",
          n = document.getElementsByTagName("script")[0],
          r = void 0;
        document.getElementById(e) || (r = document.createElement("script"), r.id = e, r.src = "//connect.facebook.net/en_US/all.js", r.onLoad = function () {
          window.fbAsyncInit = function () {
            window.FB.init({
              appId: t,
              xfbml: !0,
              version: "v2.8"
            })
          }
        }, n.parentNode.insertBefore(r, n))
      }
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = r(i),
      a = n(21),
      s = r(a),
      c = n(1),
      u = !1,
      l = void 0,
      f = void 0,
      p = void 0,
      h = void 0;
    "undefined" == typeof window || window.fetch || n(2);
    var d = function (t) {
        var e = t.appId,
          n = t.gatekeeper,
          r = t.redirect,
          i = t.scope;
        return new o.default(function (t, o) {
          if (!e) return o((0, c.rslError)({
            provider: "github",
            type: "load",
            description: "Cannot load SDK without appId",
            error: null
          }));
          if (p = e, !n) return t();
          l = n, u = !0;
          var a = (0, c.parseAsURL)(r),
            d = ["user"];
          if (Array.isArray(i) ? d = d.concat(i) : "string" == typeof i && i && (d = d.concat(i.split(","))), d = d.reduce(function (t, e) {
              return "string" == typeof e && t && t.indexOf && -1 === t.indexOf(e) && t.push(e.trim()), t
            }, []).join("%20"), a.search = a.search ? a.search + "&rslCallback=github" : "?rslCallback=github", h = "http://github.com/login/oauth/authorize?client_id=" + p + "&redirect_uri=" + encodeURIComponent("" + a) + "&scope=" + d + "&state=" + (0, s.default)(r, s.default.URL), "github" !== (0, c.getQueryStringValue)("rslCallback")) return t();
          m().then(function (e) {
            return f = e, t(f)
          }).catch(o)
        })
      },
      _ = function () {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? v() : !f && u ? o.default.reject((0, c.rslError)({
          provider: "github",
          type: "access_token",
          description: "No access token available",
          error: null
        })) : new o.default(function (t, e) {
          window.fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: new Headers({
              Authorization: "Bearer " + (f || p)
            }),
            body: JSON.stringify({
              query: "query { viewer { login, name, email, avatarUrl } }"
            })
          }).then(function (t) {
            return t.json()
          }).then(function (n) {
            return n.message || n.errors ? e((0, c.rslError)({
              provider: "github",
              type: "check_login",
              description: "Failed to fetch user data",
              error: n
            })) : t(n)
          }).catch(function () {
            return e((0, c.rslError)({
              provider: "github",
              type: "check_login",
              description: "Failed to fetch user data due to window.fetch() error",
              error: null
            }))
          })
        })
      },
      v = function () {
        return new o.default(function (t, e) {
          _().then(function (e) {
            return t(e)
          }).catch(function (t) {
            if (!u) return e(t);
            window.open(h, "_self")
          })
        })
      },
      y = function () {
        return new o.default(function (t, e) {
          return e((0, c.rslError)({
            provider: "github",
            type: "logout",
            description: "Cannot logout from github provider",
            error: null
          }))
        })
      },
      m = function () {
        return new o.default(function (t, e) {
          var n = (0, c.getQueryStringValue)("code");
          if (!n) return e(Error("Authorization code not found"));
          window.fetch(l + "/authenticate/" + n).then(function (t) {
            return t.json()
          }).then(function (n) {
            return n.error || !n.token ? e((0, c.rslError)({
              provider: "github",
              type: "access_token",
              description: "Got error from fetch access token",
              error: n
            })) : t(n.token)
          }).catch(function (t) {
            return e((0, c.rslError)({
              provider: "github",
              type: "access_token",
              description: "Failed to fetch user data due to window.fetch() error",
              error: t
            }))
          })
        })
      };
    e.default = {
      checkLogin: _,
      generateUser: function (t) {
        var e = t.data.viewer;
        return {
          profile: {
            id: e.login,
            name: e.name,
            firstName: e.name,
            lastName: e.name,
            email: e.email,
            profilePicURL: e.avatarUrl
          },
          token: {
            accessToken: f || p,
            expiresAt: 1 / 0
          }
        }
      },
      load: d,
      login: v,
      logout: y
    }
  }, function (t, e, n) {
    function r(t) {
      var e = [];
      return t.replace(/[a-fA-F0-9]{2}/g, function (t) {
        e.push(parseInt(t, 16))
      }), e
    }

    function i(t) {
      t = unescape(encodeURIComponent(t));
      for (var e = Array(t.length), n = 0; t.length > n; n++) e[n] = t.charCodeAt(n);
      return e
    }

    function o(t, e, n, o) {
      if ("string" == typeof t && (t = i(t)), "string" == typeof e && (e = r(e)), !Array.isArray(t)) throw TypeError("name must be an array of bytes");
      if (!Array.isArray(e) || 16 != e.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
      var c = a(e.concat(t));
      return c[6] = 15 & c[6] | 80, c[8] = 63 & c[8] | 128, n || s(c)
    }
    var a = n(22),
      s = n(23);
    o.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", o.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", t.exports = o
  }, function (t, e, n) {
    "use strict";

    function r(t, e, n, r) {
      switch (t) {
        case 0:
          return e & n ^ ~e & r;
        case 1:
          return e ^ n ^ r;
        case 2:
          return e & n ^ e & r ^ n & r;
        case 3:
          return e ^ n ^ r
      }
    }

    function i(t, e) {
      return t << e | t >>> 32 - e
    }

    function o(t) {
      var e = [1518500249, 1859775393, 2400959708, 3395469782],
        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" == typeof t) {
        var o = unescape(encodeURIComponent(t));
        t = Array(o.length);
        for (var a = 0; o.length > a; a++) t[a] = o.charCodeAt(a)
      }
      t.push(128);
      for (var s = t.length / 4 + 2, c = Math.ceil(s / 16), u = Array(c), a = 0; c > a; a++) {
        u[a] = Array(16);
        for (var l = 0; 16 > l; l++) u[a][l] = t[64 * a + 4 * l] << 24 | t[64 * a + 4 * l + 1] << 16 | t[64 * a + 4 * l + 2] << 8 | t[64 * a + 4 * l + 3]
      }
      u[c - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), u[c - 1][14] = Math.floor(u[c - 1][14]), u[c - 1][15] = 8 * (t.length - 1) & 4294967295;
      for (var a = 0; c > a; a++) {
        for (var f = Array(80), p = 0; 16 > p; p++) f[p] = u[a][p];
        for (var p = 16; 80 > p; p++) f[p] = i(f[p - 3] ^ f[p - 8] ^ f[p - 14] ^ f[p - 16], 1);
        for (var h = n[0], d = n[1], _ = n[2], v = n[3], y = n[4], p = 0; 80 > p; p++) {
          var m = Math.floor(p / 20),
            g = i(h, 5) + r(m, d, _, v) + y + e[m] + f[p] >>> 0;
          y = v, v = _, _ = i(d, 30) >>> 0, d = h, h = g
        }
        n[0] = n[0] + h >>> 0, n[1] = n[1] + d >>> 0, n[2] = n[2] + _ >>> 0, n[3] = n[3] + v >>> 0, n[4] = n[4] + y >>> 0
      }
      return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
    }
    t.exports = o
  }, function (t, e) {
    function n(t, e) {
      var n = e || 0,
        i = r;
      return i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + "-" + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]] + i[t[n++]]
    }
    for (var r = [], i = 0; 256 > i; ++i) r[i] = (i + 256).toString(16).substr(1);
    t.exports = n
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(0),
      i = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(r),
      o = n(1),
      a = function (t) {
        var e = t.appId,
          n = t.scope;
        return new i.default(function (t, r) {
          var i = document.getElementsByTagName("script")[0],
            a = document.createElement("script");
          a.src = "//apis.google.com/js/platform.js", a.id = "gapi-client", a.onload = function () {
            window.gapi.load("auth2", function () {
              window.gapi.auth2.getAuthInstance() ? t() : window.gapi.auth2.init({
                client_id: e,
                fetchBasicProfile: !0,
                scope: n ? Array.isArray(n) && n.join(" ") || n : null
              }).then(function () {
                return t()
              }, function (t) {
                return r((0, o.rslError)({
                  provider: "google",
                  type: "load",
                  description: "Failed to load SDK",
                  error: t
                }))
              })
            })
          }, i ? i.parentNode.appendChild(a) : document.appendChild(a)
        })
      },
      s = function () {
        return new i.default(function (t, e) {
          var n = window.gapi.auth2.getAuthInstance();
          return n.isSignedIn.get() ? t(n.currentUser.get()) : e((0, o.rslError)({
            provider: "google",
            type: "check_login",
            description: "Not authenticated",
            error: null
          }))
        })
      },
      c = function () {
        return new i.default(function (t, e) {
          window.gapi.auth2.getAuthInstance().signIn().then(function () {
            return s().then(t, e)
          }, function (t) {
            return e((0, o.rslError)({
              provider: "google",
              type: "auth",
              description: "Authentication failed",
              error: t
            }))
          })
        })
      },
      u = function () {
        return new i.default(function (t, e) {
          window.gapi.auth2.getAuthInstance().signOut().then(t, e)
        })
      };
    e.default = {
      checkLogin: s,
      generateUser: function (t) {
        var e = t.getBasicProfile(),
          n = t.getAuthResponse(!0);
        return {
          profile: {
            id: e.getId(),
            name: e.getName(),
            firstName: e.getGivenName(),
            lastName: e.getFamilyName(),
            email: e.getEmail(),
            profilePicURL: e.getImageUrl()
          },
          token: {
            accessToken: n.access_token,
            idToken: n.id_token,
            scope: n.scope,
            expiresIn: n.expires_in,
            firstIssued_at: n.first_issued_at,
            expiresAt: n.expires_at
          }
        }
      },
      load: a,
      login: c,
      logout: u,
      oldLoad: function (t, e, n, r, i) {
        var o = document.createElement("script");
        o.src = "https://apis.google.com/js/platform.js", o.id = "gapi-client", o.onload = function () {
          window.gapi.load("auth2", function () {
            window.gapi.auth2.getAuthInstance() || window.gapi.auth2.init({
              client_id: t,
              prompt: i || void 0
            }), window.gapi.auth2.getAuthInstance().attachClickHandler(e, {}, n, r)
          })
        }, 0 === document.getElementsByTagName("script").length ? document.appendChild(o) : document.getElementsByTagName("script")[0].parentNode.appendChild(o)
      }
    }
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(0),
      o = r(i),
      a = n(26),
      s = r(a),
      c = n(1),
      u = void 0,
      l = void 0,
      f = function (t) {
        var e = t.appId,
          n = t.redirect,
          r = t.scope;
        return new o.default(function (t, i) {
          var o = (0, c.parseAsURL)(n),
            a = ["basic"];
          if (Array.isArray(r) ? a = a.concat(r) : "string" == typeof r && r && (a = a.concat(r.split(","))), a = a.reduce(function (t, e) {
              return "string" == typeof e && t && t.indexOf && -1 === t.indexOf(e) && t.push(e.trim()), t
            }, []).join("+"), o.search = o.search ? o.search + "&rslCallback=instagram" : "?rslCallback=instagram", u = "https://api.instagram.com/oauth/authorize/?client_id=" + e + "&scope=" + a + "&redirect_uri=" + encodeURIComponent("" + o) + "&response_type=token", "instagram" === (0, c.getQueryStringValue)("rslCallback")) {
            if ((0, c.getQueryStringValue)("error")) return i((0, c.rslError)({
              provider: "instagram",
              type: "auth",
              description: "Authentication failed",
              error: {
                error_reason: (0, c.getQueryStringValue)("error_reason"),
                error_description: (0, c.getQueryStringValue)("error_description")
              }
            }));
            l = (0, c.getHashValue)("access_token")
          }
          return t(l)
        })
      },
      p = function () {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? h() : l ? new o.default(function (t, e) {
          (0, s.default)("https://api.instagram.com/v1/users/self/?access_token=" + l).then(function (t) {
            return t.json()
          }).then(function (n) {
            return 200 !== n.meta.code ? e((0, c.rslError)({
              provider: "instagram",
              type: "check_login",
              description: "Failed to fetch user data",
              error: n.meta
            })) : t({
              data: n.data,
              accessToken: l
            })
          }).catch(function (t) {
            return e({
              fetchErr: !0,
              err: (0, c.rslError)({
                provider: "instagram",
                type: "check_login",
                description: "Failed to fetch user data due to fetch error",
                error: t
              })
            })
          })
        }) : o.default.reject((0, c.rslError)({
          provider: "instagram",
          type: "access_token",
          description: "No access token available",
          error: null
        }))
      },
      h = function () {
        return new o.default(function (t, e) {
          p().then(function (e) {
            return t(e)
          }).catch(function (t) {
            if (t.fetchErr) return e(t.err);
            window.open(u, "_self")
          })
        })
      },
      d = function () {
        return new o.default(function (t) {
          return l = void 0, t()
        })
      };
    e.default = {
      checkLogin: p,
      generateUser: function (t) {
        return {
          profile: {
            id: t.data.id,
            name: t.data.full_name,
            firstName: t.data.full_name,
            lastName: t.data.full_name,
            email: void 0,
            profilePicURL: t.data.profile_picture
          },
          token: {
            accessToken: t.accessToken,
            expiresAt: 1 / 0
          }
        }
      },
      load: f,
      login: h,
      logout: d
    }
  }, function (t, e, n) {
    var r, i, o;
    ! function (n, a) {
      i = [e, t], r = a, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o)
    }(0, function (t, e) {
      "use strict";

      function n() {
        return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
      }

      function r(t) {
        try {
          delete window[t]
        } catch (e) {
          window[t] = void 0
        }
      }

      function i(t) {
        var e = document.getElementById(t);
        e && document.getElementsByTagName("head")[0].removeChild(e)
      }

      function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = t,
          s = e.timeout || a.timeout,
          c = e.jsonpCallback || a.jsonpCallback,
          u = void 0;
        return new Promise(function (a, l) {
          var f = e.jsonpCallbackFunction || n(),
            p = c + "_" + f;
          window[f] = function (t) {
            a({
              ok: !0,
              json: function () {
                return Promise.resolve(t)
              }
            }), u && clearTimeout(u), i(p), r(f)
          }, o += -1 === o.indexOf("?") ? "?" : "&";
          var h = document.createElement("script");
          h.setAttribute("src", "" + o + c + "=" + f), e.charset && h.setAttribute("charset", e.charset), h.id = p, document.getElementsByTagName("head")[0].appendChild(h), u = setTimeout(function () {
            l(Error("JSONP request to " + t + " timed out")), r(f), i(p), window[f] = function () {
              r(f)
            }
          }, s), h.onerror = function () {
            l(Error("JSONP request to " + t + " failed")), r(f), i(p), u && clearTimeout(u)
          }
        })
      }
      var a = {
        timeout: 5e3,
        jsonpCallback: "callback",
        jsonpCallbackFunction: null
      };
      e.exports = o
    })
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(0),
      i = function (t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }(r),
      o = n(1),
      a = function (t) {
        var e = t.appId;
        return new i.default(function (t) {
          if (document.getElementById("linkedin-client")) return t();
          var n = document.getElementsByTagName("script")[0],
            r = document.createElement("script");
          r.src = "//platform.linkedin.com/in.js?async=true", r.id = "linkedin-client", r.onload = function () {
            return window.IN.init({
              api_key: e
            }), t()
          }, n ? n.parentNode.appendChild(r) : document.appendChild(r)
        })
      },
      s = function () {
        return new i.default(function (t, e) {
          return window.IN.User.isAuthorized() ? l().then(t, e) : e((0, o.rslError)({
            provider: "linkedin",
            type: "check_login",
            description: "Not authenticated",
            error: null
          }))
        })
      },
      c = function () {
        return new i.default(function (t, e) {
          window.IN.User.authorize(function () {
            return s().then(l).then(t).catch(e)
          })
        })
      },
      u = function () {
        return new i.default(function (t) {
          window.IN.User.logout(t)
        })
      },
      l = function () {
        return new i.default(function (t, e) {
          window.IN.API.Profile("me").fields(["id", "firstName", "lastName", "pictureUrl", "publicProfileUrl", "emailAddress"]).result(t).error(function (t) {
            return e((0, o.rslError)({
              provider: "linkedin",
              type: "get_profile",
              description: "Failed to get user profile",
              error: t
            }))
          })
        })
      };
    e.default = {
      checkLogin: s,
      generateUser: function (t) {
        return {
          profile: {
            id: window.IN.ENV.auth.member_id,
            name: t.values[0].firstName + " " + t.values[0].lastName,
            firstName: t.values[0].firstName,
            lastName: t.values[0].lastName,
            email: t.values[0].emailAddress,
            publicProfileURL: t.values[0].publicProfileUrl,
            profilePicURL: t.values[0].pictureUrl
          },
          token: {
            accessToken: window.IN.ENV.auth.oauth_token,
            expiresAt: (0, o.timestampFromNow)(window.IN.ENV.auth.oauth_expires_in)
          }
        }
      },
      load: a,
      login: c,
      logout: u,
      oldLoad: function (t, e, n) {
        var r = "li-client",
          i = document.getElementsByTagName("script")[0],
          o = void 0;
        document.getElementById(r) || (o = document.createElement("script"), o.id = r, o.src = "//platform.linkedin.com/in.js?async=true", o.onload = function () {
          window.IN.init({
            api_key: t,
            authorize: !1 !== e,
            credentials_cookie: !!n || void 0
          })
        }, i.parentNode.insertBefore(o, i))
      }
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {
      providers: ["amazon", "facebook", "github", "google", "instagram", "linkedin"]
    }
  }])
});