var R = /* @__PURE__ */ ((t) => (t.Mean = "Mean", t.True = "True", t))(R || {}), J = /* @__PURE__ */ ((t) => (t.MeanOfTheDate = "MeanOfTheDate", t.StandardJ2000 = "StandardJ2000", t))(J || {});
const Lt = 2440588, Mt = 2451545, i0 = 24000005e-1, Et = 1e3 * 3600 * 24, gt = Math.PI, c0 = gt * 2, pe = gt / 2, D = gt / 180, m = 180 / gt, vi = 12 / gt, s0 = gt / 12, ht = 360 / 24, g1 = 24 / 360, M1 = 299792.458, ji = 3e5, h2 = 20.49552, tc = 1.0027379093, ec = 365.25, a0 = 365.2425, nc = 365.256363, oc = 365.259635, ic = 365.24219, cc = 346.620075, r0 = 86400, sc = a0 * r0, o1 = 23.4392911, ac = 23.4457889, rc = 365.25, uc = 365.2421988, d1 = 24332824235e-4, lc = 192.25, fc = 27.4, u0 = 6378.14, Ae = 1 / 298.257, Dc = Math.sqrt(Ae * 2 - Math.pow(Ae, 2)), k1 = 149597870691e-3, W1 = 1 / Math.tan(1 / 3600 * Math.PI / 180), M2 = 3.263797724738089, gc = 662606957e-42, hc = 13806488e-30, Mc = 198855e25, dc = 1899e24, Tc = 10243e22, pc = 59736e20, Ac = 18.539490383676657, Jc = 317.8987545198875, d2 = 72, mc = -273.15, Cc = [
  -0.833,
  -6,
  -12,
  -18
], $c = [
  6,
  -0.3,
  -0.833,
  -6,
  -12,
  -18
], it = -0.5667, Lc = 0.125, l0 = -0.8333, V1 = 29.53058770576;
var D1 = /* @__PURE__ */ ((t) => (t[t.New = 0] = "New", t[t.FirstQuarter = 1] = "FirstQuarter", t[t.Full = 2] = "Full", t[t.LastQuarter = 3] = "LastQuarter", t))(D1 || {}), H = /* @__PURE__ */ ((t) => (t[t.New = 0] = "New", t[t.WaxingCrescent = 1] = "WaxingCrescent", t[t.FirstQuarter = 2] = "FirstQuarter", t[t.WaxingGibbous = 3] = "WaxingGibbous", t[t.Full = 4] = "Full", t[t.WaningGibbous = 5] = "WaningGibbous", t[t.LastQuarter = 6] = "LastQuarter", t[t.WaningCrescent = 7] = "WaningCrescent", t))(H || {});
const Dt = {
  0: 0.033863193308711,
  1: 0.216136806691289,
  2: 0.283863193308711,
  3: 0.466136806691289,
  4: 0.533863193308711,
  5: 0.716136806691289,
  6: 0.783863193308711,
  7: 0.966136806691289
};
function T2(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var U1 = { exports: {} }, f0 = U1.exports, r2;
function D0() {
  return r2 || (r2 = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(f0, (function() {
      var n = 1e3, i = 6e4, o = 36e5, s = "millisecond", a = "second", f = "minute", r = "hour", g = "day", M = "week", d = "month", T = "quarter", l = "year", c = "date", h = "Invalid Date", u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
        var C = ["th", "st", "nd", "rd"], A = O % 100;
        return "[" + O + (C[(A - 20) % 10] || C[A] || C[0]) + "]";
      } }, b = function(O, C, A) {
        var B = String(O);
        return !B || B.length >= C ? O : "" + Array(C + 1 - B.length).join(A) + O;
      }, N = { s: b, z: function(O) {
        var C = -O.utcOffset(), A = Math.abs(C), B = Math.floor(A / 60), $ = A % 60;
        return (C <= 0 ? "+" : "-") + b(B, 2, "0") + ":" + b($, 2, "0");
      }, m: function O(C, A) {
        if (C.date() < A.date()) return -O(A, C);
        var B = 12 * (A.year() - C.year()) + (A.month() - C.month()), $ = C.clone().add(B, d), y = A - $ < 0, S = C.clone().add(B + (y ? -1 : 1), d);
        return +(-(B + (A - $) / (y ? $ - S : S - $)) || 0);
      }, a: function(O) {
        return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
      }, p: function(O) {
        return { M: d, y: l, w: M, d: g, D: c, h: r, m: f, s: a, ms: s, Q: T }[O] || String(O || "").toLowerCase().replace(/s$/, "");
      }, u: function(O) {
        return O === void 0;
      } }, z = "en", F = {};
      F[z] = _;
      var X = "$isDayjsObject", nt = function(O) {
        return O instanceof e1 || !(!O || !O[X]);
      }, v = function O(C, A, B) {
        var $;
        if (!C) return z;
        if (typeof C == "string") {
          var y = C.toLowerCase();
          F[y] && ($ = y), A && (F[y] = A, $ = y);
          var S = C.split("-");
          if (!$ && S.length > 1) return O(S[0]);
        } else {
          var q = C.name;
          F[q] = C, $ = q;
        }
        return !B && $ && (z = $), $ || !B && z;
      }, V = function(O, C) {
        if (nt(O)) return O.clone();
        var A = typeof C == "object" ? C : {};
        return A.date = O, A.args = arguments, new e1(A);
      }, w = N;
      w.l = v, w.i = nt, w.w = function(O, C) {
        return V(O, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
      };
      var e1 = (function() {
        function O(A) {
          this.$L = v(A.locale, null, !0), this.parse(A), this.$x = this.$x || A.x || {}, this[X] = !0;
        }
        var C = O.prototype;
        return C.parse = function(A) {
          this.$d = (function(B) {
            var $ = B.date, y = B.utc;
            if ($ === null) return /* @__PURE__ */ new Date(NaN);
            if (w.u($)) return /* @__PURE__ */ new Date();
            if ($ instanceof Date) return new Date($);
            if (typeof $ == "string" && !/Z$/i.test($)) {
              var S = $.match(u);
              if (S) {
                var q = S[2] - 1 || 0, x = (S[7] || "0").substring(0, 3);
                return y ? new Date(Date.UTC(S[1], q, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, x)) : new Date(S[1], q, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, x);
              }
            }
            return new Date($);
          })(A), this.init();
        }, C.init = function() {
          var A = this.$d;
          this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
        }, C.$utils = function() {
          return w;
        }, C.isValid = function() {
          return this.$d.toString() !== h;
        }, C.isSame = function(A, B) {
          var $ = V(A);
          return this.startOf(B) <= $ && $ <= this.endOf(B);
        }, C.isAfter = function(A, B) {
          return V(A) < this.startOf(B);
        }, C.isBefore = function(A, B) {
          return this.endOf(B) < V(A);
        }, C.$g = function(A, B, $) {
          return w.u(A) ? this[B] : this.set($, A);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(A, B) {
          var $ = this, y = !!w.u(B) || B, S = w.p(A), q = function($t, Q) {
            var ft = w.w($.$u ? Date.UTC($.$y, Q, $t) : new Date($.$y, Q, $t), $);
            return y ? ft : ft.endOf(g);
          }, x = function($t, Q) {
            return w.w($.toDate()[$t].apply($.toDate("s"), (y ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), $);
          }, U = this.$W, Y = this.$M, k = this.$D, ut = "set" + (this.$u ? "UTC" : "");
          switch (S) {
            case l:
              return y ? q(1, 0) : q(31, 11);
            case d:
              return y ? q(1, Y) : q(0, Y + 1);
            case M:
              var lt = this.$locale().weekStart || 0, n1 = (U < lt ? U + 7 : U) - lt;
              return q(y ? k - n1 : k + (6 - n1), Y);
            case g:
            case c:
              return x(ut + "Hours", 0);
            case r:
              return x(ut + "Minutes", 1);
            case f:
              return x(ut + "Seconds", 2);
            case a:
              return x(ut + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, C.endOf = function(A) {
          return this.startOf(A, !1);
        }, C.$set = function(A, B) {
          var $, y = w.p(A), S = "set" + (this.$u ? "UTC" : ""), q = ($ = {}, $[g] = S + "Date", $[c] = S + "Date", $[d] = S + "Month", $[l] = S + "FullYear", $[r] = S + "Hours", $[f] = S + "Minutes", $[a] = S + "Seconds", $[s] = S + "Milliseconds", $)[y], x = y === g ? this.$D + (B - this.$W) : B;
          if (y === d || y === l) {
            var U = this.clone().set(c, 1);
            U.$d[q](x), U.init(), this.$d = U.set(c, Math.min(this.$D, U.daysInMonth())).$d;
          } else q && this.$d[q](x);
          return this.init(), this;
        }, C.set = function(A, B) {
          return this.clone().$set(A, B);
        }, C.get = function(A) {
          return this[w.p(A)]();
        }, C.add = function(A, B) {
          var $, y = this;
          A = Number(A);
          var S = w.p(B), q = function(Y) {
            var k = V(y);
            return w.w(k.date(k.date() + Math.round(Y * A)), y);
          };
          if (S === d) return this.set(d, this.$M + A);
          if (S === l) return this.set(l, this.$y + A);
          if (S === g) return q(1);
          if (S === M) return q(7);
          var x = ($ = {}, $[f] = i, $[r] = o, $[a] = n, $)[S] || 1, U = this.$d.getTime() + A * x;
          return w.w(U, this);
        }, C.subtract = function(A, B) {
          return this.add(-1 * A, B);
        }, C.format = function(A) {
          var B = this, $ = this.$locale();
          if (!this.isValid()) return $.invalidDate || h;
          var y = A || "YYYY-MM-DDTHH:mm:ssZ", S = w.z(this), q = this.$H, x = this.$m, U = this.$M, Y = $.weekdays, k = $.months, ut = $.meridiem, lt = function(Q, ft, f1, F1) {
            return Q && (Q[ft] || Q(B, y)) || f1[ft].slice(0, F1);
          }, n1 = function(Q) {
            return w.s(q % 12 || 12, Q, "0");
          }, $t = ut || function(Q, ft, f1) {
            var F1 = Q < 12 ? "AM" : "PM";
            return f1 ? F1.toLowerCase() : F1;
          };
          return y.replace(E, (function(Q, ft) {
            return ft || (function(f1) {
              switch (f1) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return w.s(B.$y, 4, "0");
                case "M":
                  return U + 1;
                case "MM":
                  return w.s(U + 1, 2, "0");
                case "MMM":
                  return lt($.monthsShort, U, k, 3);
                case "MMMM":
                  return lt(k, U);
                case "D":
                  return B.$D;
                case "DD":
                  return w.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return lt($.weekdaysMin, B.$W, Y, 2);
                case "ddd":
                  return lt($.weekdaysShort, B.$W, Y, 3);
                case "dddd":
                  return Y[B.$W];
                case "H":
                  return String(q);
                case "HH":
                  return w.s(q, 2, "0");
                case "h":
                  return n1(1);
                case "hh":
                  return n1(2);
                case "a":
                  return $t(q, x, !0);
                case "A":
                  return $t(q, x, !1);
                case "m":
                  return String(x);
                case "mm":
                  return w.s(x, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return w.s(B.$s, 2, "0");
                case "SSS":
                  return w.s(B.$ms, 3, "0");
                case "Z":
                  return S;
              }
              return null;
            })(Q) || S.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(A, B, $) {
          var y, S = this, q = w.p(B), x = V(A), U = (x.utcOffset() - this.utcOffset()) * i, Y = this - x, k = function() {
            return w.m(S, x);
          };
          switch (q) {
            case l:
              y = k() / 12;
              break;
            case d:
              y = k();
              break;
            case T:
              y = k() / 3;
              break;
            case M:
              y = (Y - U) / 6048e5;
              break;
            case g:
              y = (Y - U) / 864e5;
              break;
            case r:
              y = Y / o;
              break;
            case f:
              y = Y / i;
              break;
            case a:
              y = Y / n;
              break;
            default:
              y = Y;
          }
          return $ ? y : w.a(y);
        }, C.daysInMonth = function() {
          return this.endOf(d).$D;
        }, C.$locale = function() {
          return F[this.$L];
        }, C.locale = function(A, B) {
          if (!A) return this.$L;
          var $ = this.clone(), y = v(A, B, !0);
          return y && ($.$L = y), $;
        }, C.clone = function() {
          return w.w(this.$d, this);
        }, C.toDate = function() {
          return new Date(this.valueOf());
        }, C.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, C.toISOString = function() {
          return this.$d.toISOString();
        }, C.toString = function() {
          return this.$d.toUTCString();
        }, O;
      })(), x1 = e1.prototype;
      return V.prototype = x1, [["$ms", s], ["$s", a], ["$m", f], ["$H", r], ["$W", g], ["$M", d], ["$y", l], ["$D", c]].forEach((function(O) {
        x1[O[1]] = function(C) {
          return this.$g(C, O[0], O[1]);
        };
      })), V.extend = function(O, C) {
        return O.$i || (O(C, e1, V), O.$i = !0), V;
      }, V.locale = v, V.isDayjs = nt, V.unix = function(O) {
        return V(1e3 * O);
      }, V.en = F[z], V.Ls = F, V.p = {}, V;
    }));
  })(U1)), U1.exports;
}
var g0 = D0();
const Ce = /* @__PURE__ */ T2(g0), et = [
  // All the initial values are observed values from 1 February 1973 to 1 June 2017 as taken from http:// maia.usno.navy.mil/ser7/deltat.data
  { JD: 24417145e-1, DeltaT: 43.4724 },
  { JD: 24417425e-1, DeltaT: 43.5648 },
  { JD: 24417735e-1, DeltaT: 43.6737 },
  { JD: 24418035e-1, DeltaT: 43.7782 },
  { JD: 24418345e-1, DeltaT: 43.8763 },
  { JD: 24418645e-1, DeltaT: 43.9562 },
  { JD: 24418955e-1, DeltaT: 44.0315 },
  { JD: 24419265e-1, DeltaT: 44.1132 },
  { JD: 24419565e-1, DeltaT: 44.1982 },
  { JD: 24419875e-1, DeltaT: 44.2952 },
  { JD: 24420175e-1, DeltaT: 44.3936 },
  { JD: 24420485e-1, DeltaT: 44.4841 },
  { JD: 24420795e-1, DeltaT: 44.5646 },
  { JD: 24421075e-1, DeltaT: 44.6425 },
  { JD: 24421385e-1, DeltaT: 44.7386 },
  { JD: 24421685e-1, DeltaT: 44.837 },
  { JD: 24421995e-1, DeltaT: 44.9302 },
  { JD: 24422295e-1, DeltaT: 44.9986 },
  { JD: 24422605e-1, DeltaT: 45.0584 },
  { JD: 24422915e-1, DeltaT: 45.1284 },
  { JD: 24423215e-1, DeltaT: 45.2064 },
  { JD: 24423525e-1, DeltaT: 45.298 },
  { JD: 24423825e-1, DeltaT: 45.3897 },
  { JD: 24424135e-1, DeltaT: 45.4761 },
  { JD: 24424445e-1, DeltaT: 45.5633 },
  { JD: 24424725e-1, DeltaT: 45.645 },
  { JD: 24425035e-1, DeltaT: 45.7375 },
  { JD: 24425335e-1, DeltaT: 45.8284 },
  { JD: 24425645e-1, DeltaT: 45.9133 },
  { JD: 24425945e-1, DeltaT: 45.982 },
  { JD: 24426255e-1, DeltaT: 46.0408 },
  { JD: 24426565e-1, DeltaT: 46.1067 },
  { JD: 24426865e-1, DeltaT: 46.1825 },
  { JD: 24427175e-1, DeltaT: 46.2789 },
  { JD: 24427475e-1, DeltaT: 46.3713 },
  { JD: 24427785e-1, DeltaT: 46.4567 },
  { JD: 24428095e-1, DeltaT: 46.5445 },
  { JD: 24428385e-1, DeltaT: 46.6311 },
  { JD: 24428695e-1, DeltaT: 46.7302 },
  { JD: 24428995e-1, DeltaT: 46.8284 },
  { JD: 24429305e-1, DeltaT: 46.9247 },
  { JD: 24429605e-1, DeltaT: 46.997 },
  { JD: 24429915e-1, DeltaT: 47.0709 },
  { JD: 24430225e-1, DeltaT: 47.1451 },
  { JD: 24430525e-1, DeltaT: 47.2362 },
  { JD: 24430835e-1, DeltaT: 47.3413 },
  { JD: 24431135e-1, DeltaT: 47.4319 },
  { JD: 24431445e-1, DeltaT: 47.5214 },
  { JD: 24431755e-1, DeltaT: 47.6049 },
  { JD: 24432035e-1, DeltaT: 47.6837 },
  { JD: 24432345e-1, DeltaT: 47.7781 },
  { JD: 24432645e-1, DeltaT: 47.8771 },
  { JD: 24432955e-1, DeltaT: 47.9687 },
  { JD: 24433255e-1, DeltaT: 48.0348 },
  { JD: 24433565e-1, DeltaT: 48.0942 },
  { JD: 24433875e-1, DeltaT: 48.1608 },
  { JD: 24434175e-1, DeltaT: 48.246 },
  { JD: 24434485e-1, DeltaT: 48.3439 },
  { JD: 24434785e-1, DeltaT: 48.4355 },
  { JD: 24435095e-1, DeltaT: 48.5344 },
  { JD: 24435405e-1, DeltaT: 48.6325 },
  { JD: 24435685e-1, DeltaT: 48.7294 },
  { JD: 24435995e-1, DeltaT: 48.8365 },
  { JD: 24436295e-1, DeltaT: 48.9353 },
  { JD: 24436605e-1, DeltaT: 49.0319 },
  { JD: 24436905e-1, DeltaT: 49.1013 },
  { JD: 24437215e-1, DeltaT: 49.1591 },
  { JD: 24437525e-1, DeltaT: 49.2286 },
  { JD: 24437825e-1, DeltaT: 49.307 },
  { JD: 24438135e-1, DeltaT: 49.4018 },
  { JD: 24438435e-1, DeltaT: 49.4945 },
  { JD: 24438745e-1, DeltaT: 49.5862 },
  { JD: 24439055e-1, DeltaT: 49.6805 },
  { JD: 24439335e-1, DeltaT: 49.7602 },
  { JD: 24439645e-1, DeltaT: 49.8556 },
  { JD: 24439945e-1, DeltaT: 49.9489 },
  { JD: 24440255e-1, DeltaT: 50.0347 },
  { JD: 24440555e-1, DeltaT: 50.1019 },
  { JD: 24440865e-1, DeltaT: 50.1622 },
  { JD: 24441175e-1, DeltaT: 50.226 },
  { JD: 24441475e-1, DeltaT: 50.2968 },
  { JD: 24441785e-1, DeltaT: 50.3831 },
  { JD: 24442085e-1, DeltaT: 50.4599 },
  { JD: 24442395e-1, DeltaT: 50.5387 },
  { JD: 24442705e-1, DeltaT: 50.6161 },
  { JD: 24442995e-1, DeltaT: 50.6866 },
  { JD: 24443305e-1, DeltaT: 50.7658 },
  { JD: 24443605e-1, DeltaT: 50.8454 },
  { JD: 24443915e-1, DeltaT: 50.9187 },
  { JD: 24444215e-1, DeltaT: 50.9761 },
  { JD: 24444525e-1, DeltaT: 51.0278 },
  { JD: 24444835e-1, DeltaT: 51.0843 },
  { JD: 24445135e-1, DeltaT: 51.1538 },
  { JD: 24445445e-1, DeltaT: 51.2319 },
  { JD: 24445745e-1, DeltaT: 51.3063 },
  { JD: 24446055e-1, DeltaT: 51.3808 },
  { JD: 24446365e-1, DeltaT: 51.4526 },
  { JD: 24446645e-1, DeltaT: 51.516 },
  { JD: 24446955e-1, DeltaT: 51.5985 },
  { JD: 24447255e-1, DeltaT: 51.6809 },
  { JD: 24447565e-1, DeltaT: 51.7573 },
  { JD: 24447865e-1, DeltaT: 51.8133 },
  { JD: 24448175e-1, DeltaT: 51.8532 },
  { JD: 24448485e-1, DeltaT: 51.9014 },
  { JD: 24448785e-1, DeltaT: 51.9603 },
  { JD: 24449095e-1, DeltaT: 52.0328 },
  { JD: 24449395e-1, DeltaT: 52.0985 },
  { JD: 24449705e-1, DeltaT: 52.1668 },
  { JD: 24450015e-1, DeltaT: 52.2316 },
  { JD: 24450295e-1, DeltaT: 52.2938 },
  { JD: 24450605e-1, DeltaT: 52.368 },
  { JD: 24450905e-1, DeltaT: 52.4465 },
  { JD: 24451215e-1, DeltaT: 52.518 },
  { JD: 24451515e-1, DeltaT: 52.5752 },
  { JD: 24451825e-1, DeltaT: 52.6178 },
  { JD: 24452135e-1, DeltaT: 52.6668 },
  { JD: 24452435e-1, DeltaT: 52.734 },
  { JD: 24452745e-1, DeltaT: 52.8056 },
  { JD: 24453045e-1, DeltaT: 52.8792 },
  { JD: 24453355e-1, DeltaT: 52.9565 },
  { JD: 24453665e-1, DeltaT: 53.0445 },
  { JD: 24453945e-1, DeltaT: 53.1268 },
  { JD: 24454255e-1, DeltaT: 53.2197 },
  { JD: 24454555e-1, DeltaT: 53.3024 },
  { JD: 24454865e-1, DeltaT: 53.3747 },
  { JD: 24455165e-1, DeltaT: 53.4335 },
  { JD: 24455475e-1, DeltaT: 53.4778 },
  { JD: 24455785e-1, DeltaT: 53.53 },
  { JD: 24456085e-1, DeltaT: 53.5845 },
  { JD: 24456395e-1, DeltaT: 53.6523 },
  { JD: 24456695e-1, DeltaT: 53.7256 },
  { JD: 24457005e-1, DeltaT: 53.7882 },
  { JD: 24457315e-1, DeltaT: 53.8367 },
  { JD: 24457605e-1, DeltaT: 53.883 },
  { JD: 24457915e-1, DeltaT: 53.9443 },
  { JD: 24458215e-1, DeltaT: 54.0042 },
  { JD: 24458525e-1, DeltaT: 54.0536 },
  { JD: 24458825e-1, DeltaT: 54.0856 },
  { JD: 24459135e-1, DeltaT: 54.1084 },
  { JD: 24459445e-1, DeltaT: 54.1463 },
  { JD: 24459745e-1, DeltaT: 54.1914 },
  { JD: 24460055e-1, DeltaT: 54.2452 },
  { JD: 24460355e-1, DeltaT: 54.2958 },
  { JD: 24460665e-1, DeltaT: 54.3427 },
  { JD: 24460975e-1, DeltaT: 54.3911 },
  { JD: 24461255e-1, DeltaT: 54.432 },
  { JD: 24461565e-1, DeltaT: 54.4898 },
  { JD: 24461865e-1, DeltaT: 54.5456 },
  { JD: 24462175e-1, DeltaT: 54.5977 },
  { JD: 24462475e-1, DeltaT: 54.6355 },
  { JD: 24462785e-1, DeltaT: 54.6532 },
  { JD: 24463095e-1, DeltaT: 54.6776 },
  { JD: 24463395e-1, DeltaT: 54.7174 },
  { JD: 24463705e-1, DeltaT: 54.7741 },
  { JD: 24464005e-1, DeltaT: 54.8253 },
  { JD: 24464315e-1, DeltaT: 54.8713 },
  { JD: 24464625e-1, DeltaT: 54.9161 },
  { JD: 24464905e-1, DeltaT: 54.9581 },
  { JD: 24465215e-1, DeltaT: 54.9997 },
  { JD: 24465515e-1, DeltaT: 55.0476 },
  { JD: 24465825e-1, DeltaT: 55.0912 },
  { JD: 24466125e-1, DeltaT: 55.1132 },
  { JD: 24466435e-1, DeltaT: 55.1328 },
  { JD: 24466745e-1, DeltaT: 55.1532 },
  { JD: 24467045e-1, DeltaT: 55.1898 },
  { JD: 24467355e-1, DeltaT: 55.2416 },
  { JD: 24467655e-1, DeltaT: 55.2838 },
  { JD: 24467965e-1, DeltaT: 55.3222 },
  { JD: 24468275e-1, DeltaT: 55.3613 },
  { JD: 24468555e-1, DeltaT: 55.4063 },
  { JD: 24468865e-1, DeltaT: 55.4629 },
  { JD: 24469165e-1, DeltaT: 55.5111 },
  { JD: 24469475e-1, DeltaT: 55.5524 },
  { JD: 24469775e-1, DeltaT: 55.5812 },
  { JD: 24470085e-1, DeltaT: 55.6004 },
  { JD: 24470395e-1, DeltaT: 55.6262 },
  { JD: 24470695e-1, DeltaT: 55.6656 },
  { JD: 24471005e-1, DeltaT: 55.7168 },
  { JD: 24471305e-1, DeltaT: 55.7698 },
  { JD: 24471615e-1, DeltaT: 55.8197 },
  { JD: 24471925e-1, DeltaT: 55.8615 },
  { JD: 24472215e-1, DeltaT: 55.913 },
  { JD: 24472525e-1, DeltaT: 55.9663 },
  { JD: 24472825e-1, DeltaT: 56.022 },
  { JD: 24473135e-1, DeltaT: 56.07 },
  { JD: 24473435e-1, DeltaT: 56.0939 },
  { JD: 24473745e-1, DeltaT: 56.1105 },
  { JD: 24474055e-1, DeltaT: 56.1314 },
  { JD: 24474355e-1, DeltaT: 56.1611 },
  { JD: 24474665e-1, DeltaT: 56.2068 },
  { JD: 24474965e-1, DeltaT: 56.2583 },
  { JD: 24475275e-1, DeltaT: 56.3 },
  { JD: 24475585e-1, DeltaT: 56.3399 },
  { JD: 24475865e-1, DeltaT: 56.379 },
  { JD: 24476175e-1, DeltaT: 56.4283 },
  { JD: 24476475e-1, DeltaT: 56.4804 },
  { JD: 24476785e-1, DeltaT: 56.5352 },
  { JD: 24477085e-1, DeltaT: 56.5697 },
  { JD: 24477395e-1, DeltaT: 56.5983 },
  { JD: 24477705e-1, DeltaT: 56.6328 },
  { JD: 24478005e-1, DeltaT: 56.6739 },
  { JD: 24478315e-1, DeltaT: 56.7332 },
  { JD: 24478615e-1, DeltaT: 56.7972 },
  { JD: 24478925e-1, DeltaT: 56.8553 },
  { JD: 24479235e-1, DeltaT: 56.9111 },
  { JD: 24479515e-1, DeltaT: 56.9755 },
  { JD: 24479825e-1, DeltaT: 57.0471 },
  { JD: 24480125e-1, DeltaT: 57.1136 },
  { JD: 24480435e-1, DeltaT: 57.1738 },
  { JD: 24480735e-1, DeltaT: 57.2226 },
  { JD: 24481045e-1, DeltaT: 57.2597 },
  { JD: 24481355e-1, DeltaT: 57.3073 },
  { JD: 24481655e-1, DeltaT: 57.3643 },
  { JD: 24481965e-1, DeltaT: 57.4334 },
  { JD: 24482265e-1, DeltaT: 57.5016 },
  { JD: 24482575e-1, DeltaT: 57.5653 },
  { JD: 24482885e-1, DeltaT: 57.6333 },
  { JD: 24483165e-1, DeltaT: 57.6973 },
  { JD: 24483475e-1, DeltaT: 57.7711 },
  { JD: 24483775e-1, DeltaT: 57.8407 },
  { JD: 24484085e-1, DeltaT: 57.9058 },
  { JD: 24484385e-1, DeltaT: 57.9576 },
  { JD: 24484695e-1, DeltaT: 57.9975 },
  { JD: 24485005e-1, DeltaT: 58.0426 },
  { JD: 24485305e-1, DeltaT: 58.1043 },
  { JD: 24485615e-1, DeltaT: 58.1679 },
  { JD: 24485915e-1, DeltaT: 58.2389 },
  { JD: 24486225e-1, DeltaT: 58.3092 },
  { JD: 24486535e-1, DeltaT: 58.3833 },
  { JD: 24486825e-1, DeltaT: 58.4537 },
  { JD: 24487135e-1, DeltaT: 58.5401 },
  { JD: 24487435e-1, DeltaT: 58.6228 },
  { JD: 24487745e-1, DeltaT: 58.6917 },
  { JD: 24488045e-1, DeltaT: 58.741 },
  { JD: 24488355e-1, DeltaT: 58.7836 },
  { JD: 24488665e-1, DeltaT: 58.8406 },
  { JD: 24488965e-1, DeltaT: 58.8986 },
  { JD: 24489275e-1, DeltaT: 58.9714 },
  { JD: 24489575e-1, DeltaT: 59.0438 },
  { JD: 24489885e-1, DeltaT: 59.1218 },
  { JD: 24490195e-1, DeltaT: 59.2003 },
  { JD: 24490475e-1, DeltaT: 59.2747 },
  { JD: 24490785e-1, DeltaT: 59.3574 },
  { JD: 24491085e-1, DeltaT: 59.4434 },
  { JD: 24491395e-1, DeltaT: 59.5242 },
  { JD: 24491695e-1, DeltaT: 59.585 },
  { JD: 24492005e-1, DeltaT: 59.6344 },
  { JD: 24492315e-1, DeltaT: 59.6928 },
  { JD: 24492615e-1, DeltaT: 59.7588 },
  { JD: 24492925e-1, DeltaT: 59.8386 },
  { JD: 24493225e-1, DeltaT: 59.9111 },
  { JD: 24493535e-1, DeltaT: 59.9845 },
  { JD: 24493845e-1, DeltaT: 60.0564 },
  { JD: 24494125e-1, DeltaT: 60.1231 },
  { JD: 24494435e-1, DeltaT: 60.2042 },
  { JD: 24494735e-1, DeltaT: 60.2804 },
  { JD: 24495045e-1, DeltaT: 60.353 },
  { JD: 24495345e-1, DeltaT: 60.4012 },
  { JD: 24495655e-1, DeltaT: 60.444 },
  { JD: 24495965e-1, DeltaT: 60.49 },
  { JD: 24496265e-1, DeltaT: 60.5578 },
  { JD: 24496575e-1, DeltaT: 60.6324 },
  { JD: 24496875e-1, DeltaT: 60.7059 },
  { JD: 24497185e-1, DeltaT: 60.7853 },
  { JD: 24497495e-1, DeltaT: 60.8664 },
  { JD: 24497775e-1, DeltaT: 60.9387 },
  { JD: 24498085e-1, DeltaT: 61.0277 },
  { JD: 24498385e-1, DeltaT: 61.1103 },
  { JD: 24498695e-1, DeltaT: 61.187 },
  { JD: 24498995e-1, DeltaT: 61.2454 },
  { JD: 24499305e-1, DeltaT: 61.2881 },
  { JD: 24499615e-1, DeltaT: 61.3378 },
  { JD: 24499915e-1, DeltaT: 61.4036 },
  { JD: 24500225e-1, DeltaT: 61.476 },
  { JD: 24500525e-1, DeltaT: 61.5525 },
  { JD: 24500835e-1, DeltaT: 61.6287 },
  { JD: 24501145e-1, DeltaT: 61.6846 },
  { JD: 24501435e-1, DeltaT: 61.7433 },
  { JD: 24501745e-1, DeltaT: 61.8132 },
  { JD: 24502045e-1, DeltaT: 61.8823 },
  { JD: 24502355e-1, DeltaT: 61.9497 },
  { JD: 24502655e-1, DeltaT: 61.9969 },
  { JD: 24502965e-1, DeltaT: 62.0343 },
  { JD: 24503275e-1, DeltaT: 62.0714 },
  { JD: 24503575e-1, DeltaT: 62.1202 },
  { JD: 24503885e-1, DeltaT: 62.181 },
  { JD: 24504185e-1, DeltaT: 62.2382 },
  { JD: 24504495e-1, DeltaT: 62.295 },
  { JD: 24504805e-1, DeltaT: 62.3506 },
  { JD: 24505085e-1, DeltaT: 62.3995 },
  { JD: 24505395e-1, DeltaT: 62.4754 },
  { JD: 24505695e-1, DeltaT: 62.5463 },
  { JD: 24506005e-1, DeltaT: 62.6136 },
  { JD: 24506305e-1, DeltaT: 62.6571 },
  { JD: 24506615e-1, DeltaT: 62.6942 },
  { JD: 24506925e-1, DeltaT: 62.7383 },
  { JD: 24507225e-1, DeltaT: 62.7926 },
  { JD: 24507535e-1, DeltaT: 62.8567 },
  { JD: 24507835e-1, DeltaT: 62.9146 },
  { JD: 24508145e-1, DeltaT: 62.9659 },
  { JD: 24508455e-1, DeltaT: 63.0217 },
  { JD: 24508735e-1, DeltaT: 63.0807 },
  { JD: 24509045e-1, DeltaT: 63.1462 },
  { JD: 24509345e-1, DeltaT: 63.2053 },
  { JD: 24509655e-1, DeltaT: 63.2599 },
  { JD: 24509955e-1, DeltaT: 63.2844 },
  { JD: 24510265e-1, DeltaT: 63.2961 },
  { JD: 24510575e-1, DeltaT: 63.3126 },
  { JD: 24510875e-1, DeltaT: 63.3422 },
  { JD: 24511185e-1, DeltaT: 63.3871 },
  { JD: 24511485e-1, DeltaT: 63.4339 },
  { JD: 24511795e-1, DeltaT: 63.4673 },
  { JD: 24512105e-1, DeltaT: 63.4979 },
  { JD: 24512385e-1, DeltaT: 63.5319 },
  { JD: 24512695e-1, DeltaT: 63.5679 },
  { JD: 24512995e-1, DeltaT: 63.6104 },
  { JD: 24513305e-1, DeltaT: 63.6444 },
  { JD: 24513605e-1, DeltaT: 63.6642 },
  { JD: 24513915e-1, DeltaT: 63.6739 },
  { JD: 24514225e-1, DeltaT: 63.6926 },
  { JD: 24514525e-1, DeltaT: 63.7147 },
  { JD: 24514835e-1, DeltaT: 63.7518 },
  { JD: 24515135e-1, DeltaT: 63.7927 },
  { JD: 24515445e-1, DeltaT: 63.8285 },
  { JD: 24515755e-1, DeltaT: 63.8557 },
  { JD: 24516045e-1, DeltaT: 63.8804 },
  { JD: 24516355e-1, DeltaT: 63.9075 },
  { JD: 24516655e-1, DeltaT: 63.9393 },
  { JD: 24516965e-1, DeltaT: 63.9691 },
  { JD: 24517265e-1, DeltaT: 63.9799 },
  { JD: 24517575e-1, DeltaT: 63.9833 },
  { JD: 24517885e-1, DeltaT: 63.9938 },
  { JD: 24518185e-1, DeltaT: 64.0093 },
  { JD: 24518495e-1, DeltaT: 64.04 },
  { JD: 24518795e-1, DeltaT: 64.067 },
  { JD: 24519105e-1, DeltaT: 64.0908 },
  { JD: 24519415e-1, DeltaT: 64.1068 },
  { JD: 24519695e-1, DeltaT: 64.1282 },
  { JD: 24520005e-1, DeltaT: 64.1584 },
  { JD: 24520305e-1, DeltaT: 64.1833 },
  { JD: 24520615e-1, DeltaT: 64.2094 },
  { JD: 24520915e-1, DeltaT: 64.2117 },
  { JD: 24521225e-1, DeltaT: 64.2073 },
  { JD: 24521535e-1, DeltaT: 64.2116 },
  { JD: 24521835e-1, DeltaT: 64.2223 },
  { JD: 24522145e-1, DeltaT: 64.25 },
  { JD: 24522445e-1, DeltaT: 64.2761 },
  { JD: 24522755e-1, DeltaT: 64.2998 },
  { JD: 24523065e-1, DeltaT: 64.3192 },
  { JD: 24523345e-1, DeltaT: 64.345 },
  { JD: 24523655e-1, DeltaT: 64.3735 },
  { JD: 24523955e-1, DeltaT: 64.3943 },
  { JD: 24524265e-1, DeltaT: 64.4151 },
  { JD: 24524565e-1, DeltaT: 64.4132 },
  { JD: 24524875e-1, DeltaT: 64.4118 },
  { JD: 24525185e-1, DeltaT: 64.4097 },
  { JD: 24525485e-1, DeltaT: 64.4168 },
  { JD: 24525795e-1, DeltaT: 64.4329 },
  { JD: 24526095e-1, DeltaT: 64.4511 },
  { JD: 24526405e-1, DeltaT: 64.4734 },
  { JD: 24526715e-1, DeltaT: 64.4893 },
  { JD: 24526995e-1, DeltaT: 64.5053 },
  { JD: 24527305e-1, DeltaT: 64.5269 },
  { JD: 24527605e-1, DeltaT: 64.5471 },
  { JD: 24527915e-1, DeltaT: 64.5597 },
  { JD: 24528215e-1, DeltaT: 64.5512 },
  { JD: 24528525e-1, DeltaT: 64.5371 },
  { JD: 24528835e-1, DeltaT: 64.5359 },
  { JD: 24529135e-1, DeltaT: 64.5415 },
  { JD: 24529445e-1, DeltaT: 64.5544 },
  { JD: 24529745e-1, DeltaT: 64.5654 },
  { JD: 24530055e-1, DeltaT: 64.5736 },
  { JD: 24530365e-1, DeltaT: 64.5891 },
  { JD: 24530655e-1, DeltaT: 64.6015 },
  { JD: 24530965e-1, DeltaT: 64.6176 },
  { JD: 24531265e-1, DeltaT: 64.6374 },
  { JD: 24531575e-1, DeltaT: 64.6549 },
  { JD: 24531875e-1, DeltaT: 64.653 },
  { JD: 24532185e-1, DeltaT: 64.6379 },
  { JD: 24532495e-1, DeltaT: 64.6372 },
  { JD: 24532795e-1, DeltaT: 64.64 },
  { JD: 24533105e-1, DeltaT: 64.6543 },
  { JD: 24533405e-1, DeltaT: 64.6723 },
  { JD: 24533715e-1, DeltaT: 64.6876 },
  { JD: 24534025e-1, DeltaT: 64.7052 },
  { JD: 24534305e-1, DeltaT: 64.7313 },
  { JD: 24534615e-1, DeltaT: 64.7575 },
  { JD: 24534915e-1, DeltaT: 64.7811 },
  { JD: 24535225e-1, DeltaT: 64.8001 },
  { JD: 24535525e-1, DeltaT: 64.7995 },
  { JD: 24535835e-1, DeltaT: 64.7876 },
  { JD: 24536145e-1, DeltaT: 64.7831 },
  { JD: 24536445e-1, DeltaT: 64.7921 },
  { JD: 24536755e-1, DeltaT: 64.8096 },
  { JD: 24537055e-1, DeltaT: 64.8311 },
  { JD: 24537365e-1, DeltaT: 64.8452 },
  { JD: 24537675e-1, DeltaT: 64.8597 },
  { JD: 24537955e-1, DeltaT: 64.885 },
  { JD: 24538265e-1, DeltaT: 64.9175 },
  { JD: 24538565e-1, DeltaT: 64.948 },
  { JD: 24538875e-1, DeltaT: 64.9794 },
  { JD: 24539175e-1, DeltaT: 64.9895 },
  { JD: 24539485e-1, DeltaT: 65.0028 },
  { JD: 24539795e-1, DeltaT: 65.0138 },
  { JD: 24540095e-1, DeltaT: 65.0371 },
  { JD: 24540405e-1, DeltaT: 65.0773 },
  { JD: 24540705e-1, DeltaT: 65.1122 },
  { JD: 24541015e-1, DeltaT: 65.1464 },
  { JD: 24541325e-1, DeltaT: 65.1833 },
  { JD: 24541605e-1, DeltaT: 65.2145 },
  { JD: 24541915e-1, DeltaT: 65.2494 },
  { JD: 24542215e-1, DeltaT: 65.2921 },
  { JD: 24542525e-1, DeltaT: 65.3279 },
  { JD: 24542825e-1, DeltaT: 65.3413 },
  { JD: 24543135e-1, DeltaT: 65.3452 },
  { JD: 24543445e-1, DeltaT: 65.3496 },
  { JD: 24543745e-1, DeltaT: 65.3711 },
  { JD: 24544055e-1, DeltaT: 65.3972 },
  { JD: 24544355e-1, DeltaT: 65.4296 },
  { JD: 24544665e-1, DeltaT: 65.4573 },
  { JD: 24544975e-1, DeltaT: 65.4868 },
  { JD: 24545265e-1, DeltaT: 65.5152 },
  { JD: 24545575e-1, DeltaT: 65.545 },
  { JD: 24545875e-1, DeltaT: 65.5781 },
  { JD: 24546185e-1, DeltaT: 65.6127 },
  { JD: 24546485e-1, DeltaT: 65.6288 },
  { JD: 24546795e-1, DeltaT: 65.637 },
  { JD: 24547105e-1, DeltaT: 65.6493 },
  { JD: 24547405e-1, DeltaT: 65.676 },
  { JD: 24547715e-1, DeltaT: 65.7097 },
  { JD: 24548015e-1, DeltaT: 65.7461 },
  { JD: 24548325e-1, DeltaT: 65.7768 },
  { JD: 24548635e-1, DeltaT: 65.8025 },
  { JD: 24548915e-1, DeltaT: 65.8237 },
  { JD: 24549225e-1, DeltaT: 65.8595 },
  { JD: 24549525e-1, DeltaT: 65.8973 },
  { JD: 24549835e-1, DeltaT: 65.9323 },
  { JD: 24550135e-1, DeltaT: 65.9509 },
  { JD: 24550445e-1, DeltaT: 65.9534 },
  { JD: 24550755e-1, DeltaT: 65.9628 },
  { JD: 24551055e-1, DeltaT: 65.9839 },
  { JD: 24551365e-1, DeltaT: 66.0147 },
  { JD: 24551665e-1, DeltaT: 66.042 },
  { JD: 24551975e-1, DeltaT: 66.0699 },
  { JD: 24552285e-1, DeltaT: 66.0961 },
  { JD: 24552565e-1, DeltaT: 66.131 },
  { JD: 24552875e-1, DeltaT: 66.1683 },
  { JD: 24553175e-1, DeltaT: 66.2072 },
  { JD: 24553485e-1, DeltaT: 66.2356 },
  { JD: 24553785e-1, DeltaT: 66.2409 },
  { JD: 24554095e-1, DeltaT: 66.2335 },
  { JD: 24554405e-1, DeltaT: 66.2349 },
  { JD: 24554705e-1, DeltaT: 66.2441 },
  { JD: 24555015e-1, DeltaT: 66.2751 },
  { JD: 24555315e-1, DeltaT: 66.3054 },
  { JD: 24555625e-1, DeltaT: 66.3246 },
  { JD: 24555935e-1, DeltaT: 66.3406 },
  { JD: 24556215e-1, DeltaT: 66.3624 },
  { JD: 24556525e-1, DeltaT: 66.3957 },
  { JD: 24556825e-1, DeltaT: 66.4289 },
  { JD: 24557135e-1, DeltaT: 66.4619 },
  { JD: 24557435e-1, DeltaT: 66.4749 },
  { JD: 24557745e-1, DeltaT: 66.4751 },
  { JD: 24558055e-1, DeltaT: 66.4829 },
  { JD: 24558355e-1, DeltaT: 66.5056 },
  { JD: 24558665e-1, DeltaT: 66.5383 },
  { JD: 24558965e-1, DeltaT: 66.5706 },
  { JD: 24559275e-1, DeltaT: 66.603 },
  { JD: 24559585e-1, DeltaT: 66.634 },
  { JD: 24559875e-1, DeltaT: 66.6569 },
  { JD: 24560185e-1, DeltaT: 66.6925 },
  // 1 April 2012
  { JD: 24560485e-1, DeltaT: 66.7289 },
  { JD: 24560795e-1, DeltaT: 66.7579 },
  { JD: 24561095e-1, DeltaT: 66.7708 },
  { JD: 24561405e-1, DeltaT: 66.774 },
  { JD: 24561715e-1, DeltaT: 66.7846 },
  { JD: 24562015e-1, DeltaT: 66.8103 },
  { JD: 24562325e-1, DeltaT: 66.84 },
  { JD: 24562625e-1, DeltaT: 66.8779 },
  { JD: 24562935e-1, DeltaT: 66.9069 },
  // 1 January 2013
  { JD: 24563245e-1, DeltaT: 66.9443 },
  // 1 Februrary 2013
  { JD: 24563525e-1, DeltaT: 66.9763 },
  // 1 March 2013
  { JD: 24563835e-1, DeltaT: 67.0258 },
  // 1 April 2013
  { JD: 24564135e-1, DeltaT: 67.0716 },
  // 1 May 2013
  { JD: 24564445e-1, DeltaT: 67.11 },
  // 1 June 2013
  { JD: 24564745e-1, DeltaT: 67.1266 },
  // 1 July 2013
  { JD: 24565055e-1, DeltaT: 67.1331 },
  // 1 August 2013
  { JD: 24565365e-1, DeltaT: 67.1458 },
  // 1 September 2013
  { JD: 24565665e-1, DeltaT: 67.1717 },
  // 1 October 2013
  { JD: 24565975e-1, DeltaT: 67.2091 },
  // 1 November 2013
  { JD: 24566275e-1, DeltaT: 67.246 },
  // 1 December 2013
  { JD: 24566585e-1, DeltaT: 67.281 },
  // 1 January 2014
  { JD: 24566895e-1, DeltaT: 67.3136 },
  // 1 February 2014
  { JD: 24567175e-1, DeltaT: 67.3457 },
  // 1 March 2014
  { JD: 24567485e-1, DeltaT: 67.389 },
  // 1 April 2014
  { JD: 24567785e-1, DeltaT: 67.4318 },
  // 1 May 2014
  { JD: 24568095e-1, DeltaT: 67.4666 },
  // 1 June 2014
  { JD: 24568395e-1, DeltaT: 67.4858 },
  // 1 July 2014
  { JD: 24568705e-1, DeltaT: 67.4989 },
  // 1 August 2014
  { JD: 24569015e-1, DeltaT: 67.5111 },
  // 1 September 2014
  { JD: 24569315e-1, DeltaT: 67.5353 },
  // 1 October 2014
  { JD: 24569625e-1, DeltaT: 67.5711 },
  // 1 November 2014
  { JD: 24569925e-1, DeltaT: 67.607 },
  // 1 December 2014
  { JD: 24570235e-1, DeltaT: 67.6439 },
  // 1 January 2015
  { JD: 24570545e-1, DeltaT: 67.6765 },
  // 1 February 2015
  { JD: 24570825e-1, DeltaT: 67.7117 },
  // 1 March 2015
  { JD: 24571135e-1, DeltaT: 67.7591 },
  // 1 April 2015
  { JD: 24571435e-1, DeltaT: 67.8012 },
  // 1 May 2015
  { JD: 24571745e-1, DeltaT: 67.8402 },
  // 1 June 2015
  { JD: 24572045e-1, DeltaT: 67.8606 },
  // 1 July 2015
  { JD: 24572355e-1, DeltaT: 67.8822 },
  // 1 August 2015
  { JD: 24572665e-1, DeltaT: 67.912 },
  // 1 September 2015
  { JD: 24572965e-1, DeltaT: 67.9546 },
  // 1 October 2015
  { JD: 24573275e-1, DeltaT: 68.0055 },
  // 1 November 2015
  { JD: 24573575e-1, DeltaT: 68.0514 },
  // 1 December 2015
  { JD: 24573885e-1, DeltaT: 68.1024 },
  // 1 January 2016
  { JD: 24574195e-1, DeltaT: 68.1577 },
  // 1 February 2016
  { JD: 24574485e-1, DeltaT: 68.2044 },
  // 1 March 2016
  { JD: 24574795e-1, DeltaT: 68.2665 },
  // 1 April 2016
  { JD: 24575095e-1, DeltaT: 68.3188 },
  // 1 May 2016
  { JD: 24575405e-1, DeltaT: 68.3703 },
  // 1 June 2016
  { JD: 24575705e-1, DeltaT: 68.3964 },
  // 1 July 2016
  { JD: 24576015e-1, DeltaT: 68.4094 },
  // 1 August 2016
  { JD: 24576325e-1, DeltaT: 68.4305 },
  // 1 September 2016
  { JD: 24576625e-1, DeltaT: 68.463 },
  // 1 October 2016
  { JD: 24576935e-1, DeltaT: 68.5078 },
  // 1 November 2016
  { JD: 24577235e-1, DeltaT: 68.5537 },
  // 1 December 2016
  { JD: 24577545e-1, DeltaT: 68.5928 },
  // 1 January 2017
  { JD: 24577855e-1, DeltaT: 68.6298 },
  // 1 February 2017
  { JD: 24578135e-1, DeltaT: 68.6671 },
  // 1 March 2017
  { JD: 24578445e-1, DeltaT: 68.7135 },
  // 1 April 2017
  { JD: 24578745e-1, DeltaT: 68.7623 },
  // 1 May 2017
  { JD: 24579055e-1, DeltaT: 68.8033 },
  // 1 June 2017
  // All these final values are predicted values from Year 2017.5 to Year 2026.0 are taken from http:// maia.usno.navy.mil/ser7/deltat.preds
  { JD: 2457937, DeltaT: 68.81 },
  // 2017.5
  { JD: 245802825e-2, DeltaT: 68.86 },
  // 2017.75
  { JD: 24581195e-1, DeltaT: 68.99 },
  // 2018.0
  { JD: 245821075e-2, DeltaT: 69.14 },
  // 2018.25
  { JD: 2458302, DeltaT: 69.3 },
  // 2018.5
  { JD: 24584845e-1, DeltaT: 69.5 },
  // 2019.0
  { JD: 245857575e-2, DeltaT: 69.6 },
  // 2019.25
  { JD: 2458667, DeltaT: 69.7 },
  // 2019.5
  { JD: 245875825e-2, DeltaT: 69.8 },
  // 2019.75
  { JD: 24588495e-1, DeltaT: 69.9 },
  // 2020.0
  { JD: 2458941, DeltaT: 70 },
  // 2020.25
  { JD: 2459763, DeltaT: 71 },
  // 2022.5
  { JD: 24610415e-1, DeltaT: 72 }
  // 2026.0
  // Note as currently coded there is a single discontinuity of c. 2.074 seconds on 1 January 2026. At this point http:// maia.usno.navy.mil/ser7/deltat.preds indicates an error value for DeltaT of about 5 seconds anyway.
], K = (
  //  Cumulative leap second values from 1 Jan 1961 to 1 January 2017 as taken from http:// maia.usno.navy.mil/ser7/tai-utc.dat
  [
    { JD: 24373005e-1, LeapSeconds: 1.422818, BaseMJD: 37300, Coefficient: 1296e-6 },
    { JD: 24375125e-1, LeapSeconds: 1.372818, BaseMJD: 37300, Coefficient: 1296e-6 },
    { JD: 24376655e-1, LeapSeconds: 1.845858, BaseMJD: 37665, Coefficient: 11232e-7 },
    { JD: 24383345e-1, LeapSeconds: 1.945858, BaseMJD: 37665, Coefficient: 11232e-7 },
    { JD: 24383955e-1, LeapSeconds: 3.24013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24384865e-1, LeapSeconds: 3.34013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24386395e-1, LeapSeconds: 3.44013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24387615e-1, LeapSeconds: 3.54013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24388205e-1, LeapSeconds: 3.64013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24389425e-1, LeapSeconds: 3.74013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24390045e-1, LeapSeconds: 3.84013, BaseMJD: 38761, Coefficient: 1296e-6 },
    { JD: 24391265e-1, LeapSeconds: 4.31317, BaseMJD: 39126, Coefficient: 2592e-6 },
    { JD: 24398875e-1, LeapSeconds: 4.21317, BaseMJD: 39126, Coefficient: 2592e-6 },
    { JD: 24413175e-1, LeapSeconds: 10, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24414995e-1, LeapSeconds: 11, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24416835e-1, LeapSeconds: 12, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24420485e-1, LeapSeconds: 13, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24424135e-1, LeapSeconds: 14, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24427785e-1, LeapSeconds: 15, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24431445e-1, LeapSeconds: 16, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24435095e-1, LeapSeconds: 17, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24438745e-1, LeapSeconds: 18, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24442395e-1, LeapSeconds: 19, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24447865e-1, LeapSeconds: 20, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24451515e-1, LeapSeconds: 21, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24455165e-1, LeapSeconds: 22, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24462475e-1, LeapSeconds: 23, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24471615e-1, LeapSeconds: 24, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24478925e-1, LeapSeconds: 25, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24482575e-1, LeapSeconds: 26, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24488045e-1, LeapSeconds: 27, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24491695e-1, LeapSeconds: 28, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24495345e-1, LeapSeconds: 29, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24500835e-1, LeapSeconds: 30, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24506305e-1, LeapSeconds: 31, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24511795e-1, LeapSeconds: 32, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24537365e-1, LeapSeconds: 33, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24548325e-1, LeapSeconds: 34, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24561095e-1, LeapSeconds: 35, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24572045e-1, LeapSeconds: 36, BaseMJD: 41317, Coefficient: 0 },
    { JD: 24577545e-1, LeapSeconds: 37, BaseMJD: 41317, Coefficient: 0 }
  ]
);
function p2(t, e, n, i = !0) {
  e < 3 && (t = t - 1, e = e + 12);
  let o = 0;
  if (i) {
    const s = Math.floor(t / 100);
    o = 2 - s + Math.floor(s / 4);
  }
  return Math.floor(365.25 * (t + 4716)) + Math.floor(30.6001 * (e + 1)) + n + o - 1524.5;
}
function A2(t, e = !0) {
  return e && t % 100 === 0 ? t % 400 === 0 : t % 4 === 0;
}
function J2(t, e = !0) {
  const n = K1(t).getFullYear(), i = A2(n, e) ? 366 : 365;
  return n + (t - p2(n, 1, 1)) / i;
}
function at(t, e = !0) {
  const n = K1(t).getFullYear(), i = A2(n, e) ? 366 : 365, o = new Date(Date.UTC(n, 0, 0, 0, 0, 0, 0));
  return n + (t - Ee(o)) / i;
}
function bt(t) {
  let e = 0;
  const n = et.length;
  if (t >= et[0].JD && t < et[n - 1].JD) {
    let i = !1, o = 0;
    for (; !i; )
      i = et[o].JD > t, i ? e = (t - et[o - 1].JD) / (et[o].JD - et[o - 1].JD) * (et[o].DeltaT - et[o - 1].DeltaT) + et[o - 1].DeltaT : ++o;
  } else {
    const i = J2(t);
    if (i < -500) {
      const o = (i - 1820) / 100;
      e = -20 + 32 * (o * o);
    } else if (i < 500) {
      const o = i / 100, s = o * o, a = s * o, f = a * o, r = f * o, g = r * o;
      e = 10583.6 + -1014.41 * o + 33.78311 * s + -5.952053 * a + -0.1798452 * f + 0.022174192 * r + 0.0090316521 * g;
    } else if (i < 1600) {
      const o = (i - 1e3) / 100, s = o * o, a = s * o, f = a * o, r = f * o, g = r * o;
      e = 1574.2 + -556.01 * o + 71.23472 * s + 0.319781 * a + -0.8503463 * f + -5050998e-9 * r + 0.0083572073 * g;
    } else if (i < 1700) {
      const o = (i - 1600) / 100, s = o * o, a = s * o;
      e = 120 + -98.08 * o + -153.2 * s + a / 7129e-6;
    } else if (i < 1800) {
      const o = (i - 1700) / 100, s = o * o, a = s * o, f = a * o;
      e = 8.83 + 16.03 * o + -59.285 * s + 133.36 * a + -f / 0.01174;
    } else if (i < 1860) {
      const o = (i - 1800) / 100, s = o * o, a = s * o, f = a * o, r = f * o, g = r * o, M = g * o;
      e = 13.72 + -33.2447 * o + 68.612 * s + 4111.6 * a + -37436 * f + 121272 * r + -169900 * g + 87500 * M;
    } else if (i < 1900) {
      const o = (i - 1860) / 100, s = o * o, a = s * o, f = a * o, r = f * o;
      e = 7.62 + 57.37 * o + -2517.54 * s + 16806.68 * a + -44736.24 * f + r / 233174e-10;
    } else if (i < 1920) {
      const o = (i - 1900) / 100, s = o * o, a = s * o, f = a * o;
      e = -2.79 + 149.4119 * o + -598.939 * s + 6196.6 * a + -19700 * f;
    } else if (i < 1941) {
      const o = (i - 1920) / 100, s = o * o, a = s * o;
      e = 21.2 + 84.493 * o + -761 * s + 2093.6 * a;
    } else if (i < 1961) {
      const o = (i - 1950) / 100, s = o * o, a = s * o;
      e = 29.07 + 40.7 * o + -s / 0.0233 + a / 2547e-6;
    } else if (i < 1986) {
      const o = (i - 1975) / 100, s = o * o, a = s * o;
      e = 45.45 + 106.7 * o - s / 0.026 - a / 718e-6;
    } else if (i < 2005) {
      const o = (i - 2e3) / 100, s = o * o, a = s * o, f = a * o, r = f * o;
      e = 63.86 + 33.45 * o + -603.74 * s + 1727.5 * a + 65181.4 * f + 237359.9 * r;
    } else if (i < 2050) {
      const o = (i - 2e3) / 100, s = o * o;
      e = 62.92 + 32.217 * o + 55.89 * s;
    } else if (i < 2150) {
      const o = (i - 1820) / 100, s = o * o;
      e = -205.72 + 56.28 * o + 32 * s;
    } else {
      const o = (i - 1820) / 100;
      e = -20 + 32 * (o * o);
    }
  }
  return e;
}
function $e(t) {
  let e = 0;
  const n = K.length;
  if (t >= K[0].JD) {
    let i = !0, o = 1;
    for (; i; )
      o >= n ? (e = K[n - 1].LeapSeconds + (t - 24000005e-1 - K[n - 1].BaseMJD) * K[n - 1].Coefficient, i = !1) : t < K[o].JD && (e = K[o - 1].LeapSeconds + (t - 24000005e-1 - K[o - 1].BaseMJD) * K[o - 1].Coefficient, i = !1), i && ++o;
  }
  return e;
}
function h0(t) {
  const e = K.length;
  if (t < K[0].JD || t > K[e - 1].JD + 500)
    return C2(t);
  const n = bt(t), i = t - n / 86400, o = $e(t);
  return (n - o - 32.184) / 86400 + i;
}
function m2(t) {
  const e = K.length;
  if (t < K[0].JD || t > K[e - 1].JD + 500)
    return $2(t);
  const n = bt(t), i = $e(t);
  return t - (n - i - 32.184) / 86400 + n / 86400;
}
function M0(t) {
  return t - 32.184 / 86400;
}
function d0(t) {
  return t + 32.184 / 86400;
}
function C2(t) {
  return t - bt(t) / 86400;
}
function $2(t) {
  return t + bt(t) / 86400;
}
function T0(t) {
  const e = t + (bt(t) - $e(t) - 32.184) / 86400;
  return (t - e) * 86400;
}
const Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDecimalYear: at,
  getDeltaT: bt,
  getFractionalYear: J2,
  getFullScaleJulianDay: p2,
  transformTAI2TT: d0,
  transformTT2TAI: M0,
  transformTT2UT1: C2,
  transformTT2UTC: h0,
  transformUT12TT: $2,
  transformUT1MinusUTC: T0,
  transformUTC2TT: m2
}, Symbol.toStringTag, { value: "Module" }));
var z1 = { exports: {} }, p0 = z1.exports, u2;
function A0() {
  return u2 || (u2 = 1, (function(t, e) {
    (function(n, i) {
      t.exports = i();
    })(p0, (function() {
      var n = "minute", i = /[+-]\d\d(?::?\d\d)?/g, o = /([+-]|\d\d)/g;
      return function(s, a, f) {
        var r = a.prototype;
        f.utc = function(h) {
          var u = { date: h, utc: !0, args: arguments };
          return new a(u);
        }, r.utc = function(h) {
          var u = f(this.toDate(), { locale: this.$L, utc: !0 });
          return h ? u.add(this.utcOffset(), n) : u;
        }, r.local = function() {
          return f(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var g = r.parse;
        r.parse = function(h) {
          h.utc && (this.$u = !0), this.$utils().u(h.$offset) || (this.$offset = h.$offset), g.call(this, h);
        };
        var M = r.init;
        r.init = function() {
          if (this.$u) {
            var h = this.$d;
            this.$y = h.getUTCFullYear(), this.$M = h.getUTCMonth(), this.$D = h.getUTCDate(), this.$W = h.getUTCDay(), this.$H = h.getUTCHours(), this.$m = h.getUTCMinutes(), this.$s = h.getUTCSeconds(), this.$ms = h.getUTCMilliseconds();
          } else M.call(this);
        };
        var d = r.utcOffset;
        r.utcOffset = function(h, u) {
          var E = this.$utils().u;
          if (E(h)) return this.$u ? 0 : E(this.$offset) ? d.call(this) : this.$offset;
          if (typeof h == "string" && (h = (function(z) {
            z === void 0 && (z = "");
            var F = z.match(i);
            if (!F) return null;
            var X = ("" + F[0]).match(o) || ["-", 0, 0], nt = X[0], v = 60 * +X[1] + +X[2];
            return v === 0 ? 0 : nt === "+" ? v : -v;
          })(h), h === null)) return this;
          var _ = Math.abs(h) <= 16 ? 60 * h : h;
          if (_ === 0) return this.utc(u);
          var b = this.clone();
          if (u) return b.$offset = _, b.$u = !1, b;
          var N = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (b = this.local().add(_ + N, n)).$offset = _, b.$x.$localOffset = N, b;
        };
        var T = r.format;
        r.format = function(h) {
          var u = h || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return T.call(this, u);
        }, r.valueOf = function() {
          var h = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * h;
        }, r.isUTC = function() {
          return !!this.$u;
        }, r.toISOString = function() {
          return this.toDate().toISOString();
        }, r.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = r.toDate;
        r.toDate = function(h) {
          return h === "s" && this.$offset ? f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = r.diff;
        r.diff = function(h, u, E) {
          if (h && this.$u === h.$u) return c.call(this, h, u, E);
          var _ = this.local(), b = f(h).local();
          return c.call(_, b, u, E);
        };
      };
    }));
  })(z1)), z1.exports;
}
var J0 = A0();
const m0 = /* @__PURE__ */ T2(J0);
Ce.extend(m0);
function Le(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function i1(t) {
  return Le(t) && parseFloat(t) >= 0;
}
function C0(t) {
  return Le(t) && parseFloat(t) < 0;
}
function Ot(t, e) {
  return Number(t - Math.floor(t / e) * e);
}
function L2(t) {
  return Ot(t, 24);
}
function L(t) {
  return Ot(t, 360);
}
function $0(t) {
  let e = L(t);
  return e > 180 ? e = e - 360 : e < -180 && (e = e + 360), e;
}
function W(t) {
  let e = L(t);
  return e > 270 ? e = e - 360 : (e > 180 || e > 90) && (e = 180 - e), e;
}
function K1(t) {
  return new Date((t + 0.5 - Lt) * Et);
}
function Ee(...t) {
  if (t.length === 0)
    return (/* @__PURE__ */ new Date()).valueOf() / Et - 0.5 + Lt;
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof Date)
      return e.valueOf() / Et - 0.5 + Lt;
    if (e instanceof String || typeof e == "string")
      return Ce(e).toDate().valueOf() / Et - 0.5 + Lt;
    if (Le(e)) {
      const n = Math.floor(e), i = Math.floor(e - n) * 12, o = Math.floor(((e - n) * 12 - i) * 365);
      return new Date(Date.UTC(n, i, o)).valueOf() / Et - 0.5 + Lt;
    } else
      return console.warn(`Invalid input argument for JulianDay : ${e} (${typeof e}). Using J2000 in place.`), Mt;
  } else return t.length === 2 ? new Date(Date.UTC(t[0], t[1], 0)).valueOf() / Et - 0.5 + Lt : new Date(Date.UTC(t[0], t[1], t[2])).valueOf() / Et - 0.5 + Lt;
}
function tt(t, e) {
  const n = G(t), i = 280.46061837 + 360.98564736629 * (t - 2451545) + 387933e-9 * n * n - n * n * n / 3871e4;
  return L2(L(i + e) * g1);
}
function L0(t, e) {
  const n = p.getTrueObliquityOfEcliptic(t), i = p.getNutationInLongitude(t);
  return tt(t, e) + i * Math.cos(n) * g1;
}
function E0(t) {
  return t - i0;
}
function X1(t) {
  return Math.floor(t - 0.5) + 0.5;
}
function Q1(t) {
  return m2(X1(t));
}
function G(t) {
  return (t - 2451545) / 36525;
}
function I(t) {
  return (t - 2451545) / 365250;
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getApparentLocalSiderealTime: L0,
  getDate: K1,
  getJulianCentury: G,
  getJulianDay: Ee,
  getJulianDayMidnight: X1,
  getJulianDayMidnightDynamicalTime: Q1,
  getJulianMillenium: I,
  getLocalSiderealTime: tt,
  getModifiedJulianDay: E0
}, Symbol.toStringTag, { value: "Module" })), B0 = {
  equatorialRadius: 695990
};
function O0(t, e, n) {
  const o = (tt(t, n.longitude) * ht - e.rightAscension) * D, s = {
    rightAscension: e.rightAscension * D,
    declination: e.declination * D
  }, a = {
    longitude: n.longitude * D,
    latitude: n.latitude * D
  };
  let f;
  const r = Math.cos(s.declination);
  return r !== 0 ? f = Math.atan2(
    Math.sin(o),
    Math.tan(a.latitude) * r - Math.sin(s.declination) * Math.cos(o)
  ) * m : f = a.latitude >= 0 ? 180 : 0, f;
}
function y0(t, e) {
  const n = t.rightAscension * D, i = e.rightAscension * D, o = t.declination * D, s = e.declination * D, a = Math.cos(o) * Math.sin(s) - Math.sin(o) * Math.cos(s) * Math.cos(i - n), f = Math.cos(s) * Math.sin(i - n), r = Math.sin(o) * Math.sin(s) + Math.cos(o) * Math.cos(s) * Math.cos(i - n);
  return Math.atan2(Math.sqrt(a * a + f * f), r) / D;
}
function E2(t, e = o1) {
  const n = {
    longitude: t.longitude * D,
    latitude: t.latitude * D
  }, i = e * D, o = Math.atan2(
    Math.sin(n.longitude) * Math.cos(i) - Math.tan(n.latitude) * Math.sin(i),
    Math.cos(n.longitude)
  );
  return L(o / D);
}
function B2(t, e = o1) {
  const n = {
    longitude: t.longitude * D,
    latitude: t.latitude * D
  }, i = e * D, o = Math.asin(
    Math.sin(n.latitude) * Math.cos(i) + Math.cos(n.latitude) * Math.sin(i) * Math.sin(n.longitude)
  );
  return W(o / D);
}
function P(t, e = o1) {
  return {
    rightAscension: E2(t, e),
    declination: B2(t, e)
  };
}
function O2(t, e = o1) {
  const n = {
    rightAscension: t.rightAscension * D,
    declination: t.declination * D
  }, i = e * D, o = Math.atan2(
    Math.sin(n.rightAscension) * Math.cos(i) + Math.tan(n.declination) * Math.sin(i),
    Math.cos(n.rightAscension)
  );
  return L(o * m);
}
function y2(t, e = o1) {
  const n = {
    rightAscension: t.rightAscension * D,
    declination: t.declination * D
  }, i = e * D, o = Math.asin(
    Math.sin(n.declination) * Math.cos(i) - Math.cos(n.declination) * Math.sin(i) * Math.sin(n.rightAscension)
  );
  return W(o * m);
}
function S0(t, e = o1) {
  return {
    longitude: O2(t, e),
    latitude: y2(t, e)
  };
}
function c1(t, e, n) {
  const i = e, o = n, s = (i - Mt) / 36525, a = (o - i) / 36525, f = s * s, r = a * a, g = a * a * a, M = (2306.2181 + 1.39656 * s - 139e-6 * f) * a + (0.30188 - 344e-6 * s) * r + 0.017998 * g, d = (2306.2181 + 1.39656 * s - 139e-6 * f) * a + (1.09468 + 66e-6 * s) * r + 0.018203 * g, T = (2004.3109 - 0.85339 * s - 217e-6 * f) * a - (0.42665 + 217e-6 * s) * r - 0.041833 * g, l = Math.cos(t.declination * D), c = Math.sin(t.declination * D), h = Math.cos(T / 3600 * D), u = Math.sin(T / 3600 * D), E = Math.cos((t.rightAscension + M / 3600) * D), _ = Math.sin((t.rightAscension + M / 3600) * D), b = l * _, N = h * l * E - u * c, z = u * l * E + h * c, F = Math.atan2(b, N) * m + d / 3600, X = Math.asin(z) * m;
  return {
    rightAscension: F,
    declination: X,
    epoch: n
  };
}
function R0(t) {
  return c1(t, Mt, d1);
}
function b0(t) {
  return c1(t, d1, Mt);
}
function S2(t, e = Mt) {
  const n = c1(t, e, d1), i = {
    rightAscension: n.rightAscension * D,
    declination: n.declination * D
  }, o = 192.25 * D, s = 27.4 * D, a = Math.sin(o - i.rightAscension), f = Math.cos(o - i.rightAscension) * Math.sin(s), r = Math.tan(i.declination) * Math.cos(s);
  return L(303 - Math.atan2(a, f - r) * m);
}
function R2(t, e = Mt) {
  const n = c1(t, e, d1), i = {
    rightAscension: n.rightAscension * D,
    declination: n.declination * D
  }, o = 192.25 * D, s = 27.4 * D;
  return L(
    Math.sin(i.declination) * Math.sin(s) + Math.cos(i.declination) * Math.cos(s) * (o - i.rightAscension)
  );
}
function P0(t, e = Mt) {
  return {
    longitude: S2(t, e),
    latitude: R2(t, e)
  };
}
function b2(t, e, n) {
  const o = (tt(t, n.longitude) * ht - e.rightAscension) * D, s = {
    rightAscension: e.rightAscension * D,
    declination: e.declination * D
  }, a = {
    longitude: n.longitude * D,
    latitude: n.latitude * D
  }, f = Math.asin(
    Math.sin(a.latitude) * Math.sin(s.declination) + Math.cos(a.latitude) * Math.cos(s.declination) * Math.cos(o)
  );
  return W(f * m);
}
function P2(t, e, n) {
  const o = (tt(t, n.longitude) * ht - e.rightAscension) * D, s = {
    rightAscension: e.rightAscension * D,
    declination: e.declination * D
  }, a = {
    longitude: n.longitude * D,
    latitude: n.latitude * D
  }, f = Math.atan2(
    Math.sin(o),
    Math.cos(o) * Math.sin(a.latitude) - Math.tan(s.declination) * Math.cos(a.latitude)
  );
  return L(f * m);
}
function w0(t, e, n) {
  return {
    azimuth: P2(t, e, n),
    altitude: b2(t, e, n)
  };
}
function q0(t, e, n, i) {
  if (i.height === void 0)
    throw new Error('The geographic coordinates must contain a value for "height".');
  const o = X2(i.height, i.latitude), a = Math.sin(8.794 / 3600 * D) / n, f = tt(t, 0), r = L2(f + i.longitude * g1 - e.rightAscension * g1) * s0, g = Math.sin(e.declination * D), M = Math.cos(e.declination * D), d = -1 * o.rhocosphi * a * Math.sin(r), T = M - o.rhocosphi * a * Math.cos(r), l = d / T, c = Math.cos(Math.atan(l)), h = (g - o.rhosinphi * a) * c, u = M - o.rhocosphi * a * Math.cos(r), E = h / u;
  return {
    rightAscension: e.rightAscension + Math.atan(l) * m,
    declination: Math.atan(E) * m
  };
}
function Be(t, e, n) {
  const i = G(t), o = (e - 1.397 * i - 31e-5 * i * i) * D;
  return (-0.09033 + 0.03916 * (Math.cos(o) - Math.sin(o)) * Math.tan(n * D)) / 3600;
}
function Oe(t, e) {
  const n = G(t), i = (e - 1.397 * n - 31e-5 * n * n) * D;
  return 0.03916 * (Math.cos(i) - Math.sin(i)) / 3600;
}
function w2(t) {
  const e = 27.4 * D, n = (t.longitude - 123) * D, i = t.latitude * D, o = Math.sin(n), s = Math.cos(n) * Math.sin(e) - Math.tan(i) * Math.cos(e);
  return L(12.15 + Math.atan2(o, s) * m);
}
function q2(t) {
  const e = 27.4 * D, n = (t.longitude - 123) * D, i = t.latitude * D;
  return W(Math.asin(Math.sin(i) * Math.sin(e) + Math.cos(i) * Math.cos(e) * Math.cos(n)) * m);
}
function G0(t, e = Mt) {
  const n = {
    rightAscension: w2(t),
    declination: q2(t)
  };
  return c1(n, d1, e);
}
function G2(t, e, n) {
  const i = tt(t, n.longitude) * ht, o = {
    azimuth: e.azimuth * D,
    altitude: e.altitude * D
  }, s = {
    longitude: n.longitude * D,
    latitude: n.latitude * D
  }, a = Math.sin(o.azimuth), f = Math.cos(o.azimuth) * Math.sin(s.latitude) + Math.tan(o.altitude) * Math.cos(s.latitude), r = i - Math.atan2(a, f) * m;
  return L(r);
}
function _2(t, e) {
  const n = {
    azimuth: t.azimuth * D,
    altitude: t.altitude * D
  }, i = {
    longitude: e.longitude * D,
    latitude: e.latitude * D
  }, o = Math.asin(
    Math.sin(i.latitude) * Math.sin(n.altitude) - Math.cos(i.latitude) * Math.cos(n.altitude) * Math.cos(n.azimuth)
  );
  return W(o * m);
}
function _0(t, e, n) {
  return {
    rightAscension: G2(t, e, n),
    declination: _2(e, n)
  };
}
function I0(t, e, n) {
  const i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o);
  return {
    azimuth: L(-1 * (Math.atan2(o, i) * m) - 270),
    altitude: 90 * (1 - s / n)
  };
}
function N0(t, e, n) {
  const i = (90 - t.altitude) * Math.cos((t.azimuth - 90) * D) / 90 * n, o = (90 - t.altitude) * Math.sin((t.azimuth - 90) * D) / 90 * n;
  return i > n || o > n || t.altitude < 0 ? { x: 0, y: 0 } : { x: Math.round(e.x + i), y: Math.round(e.y - o) };
}
const Oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCorrectionInLatitude: Oe,
  getCorrectionInLongitude: Be,
  getDeclinationFromEcliptic: B2,
  getDeclinationFromHorizontal: _2,
  getEclipticLatitudeFromEquatorial: y2,
  getEclipticLongitudeFromEquatorial: O2,
  getEquatorialDeclinationB1950FromGalactic: q2,
  getEquatorialRightAscensionB1950FromGalactic: w2,
  getGalacticLatitudeFromEquatorial: R2,
  getGalacticLongitudeFromEquatorial: S2,
  getGreatCircleAngularDistance: y0,
  getHorizontalAltitude: b2,
  getHorizontalAzimuth: P2,
  getParallacticAngle: O0,
  getRightAscensionFromEcliptic: E2,
  getRightAscensionFromHorizontal: G2,
  precessEquatorialCoordinates: c1,
  precessEquatorialCoordinatesFromB1950ToJ2000: b0,
  precessEquatorialCoordinatesFromJ2000ToB1950: R0,
  transformEclipticToEquatorial: P,
  transformEquatorialToEcliptic: S0,
  transformEquatorialToGalactic: P0,
  transformEquatorialToHorizontal: w0,
  transformEquatorialToTopocentric: q0,
  transformGalacticToEquatorial: G0,
  transformHorizontalToEquatorial: _0,
  transformHorizontalToPoint: N0,
  transformPointToHorizontal: I0
}, Symbol.toStringTag, { value: "Module" }));
function l2(t, e, n, i) {
  const o = e - t, s = n - e, a = s - o;
  return e + i / 2 * (o + s + i * a);
}
function Te(t, e, n, i, o, s, a = it) {
  const f = L(n + 360.985647 * t), r = t + i / 86400, g = l2(o[0].rightAscension, o[1].rightAscension, o[2].rightAscension, r), M = l2(o[0].declination, o[1].declination, o[2].declination, r), d = s.longitude, T = s.latitude, l = $0(f + d - g), c = Math.sin(T * D) * Math.sin(M * D) + Math.cos(T * D) * Math.cos(M * D) * Math.cos(l * D), h = Math.asin(c) / D;
  return {
    Deltam: e ? -1 * l / 360 : (h - a) / (Math.cos(M * D) * Math.cos(T * D) * Math.sin(l * D) * 360),
    hourAngle: l,
    localAltitude: h
  };
}
function I2(t, e, n, i = it) {
  const o = X1(t), s = tt(o, 0) * ht, a = {
    m0: void 0,
    // transit
    m1: void 0,
    // rise
    m2: void 0,
    // set,
    isCircumpolar: void 0,
    altitude: void 0,
    cosH0: void 0
  }, f = e.rightAscension, r = n.longitude;
  a.m0 = Ot((f - r - s) / 360, 1);
  const g = e.declination, M = n.latitude, d = Math.sin(i * D), T = Math.sin(M * D), l = Math.sin(g * D), c = Math.cos(M * D), h = Math.cos(g * D);
  if (a.cosH0 = (d - T * l) / (c * h), a.isCircumpolar = Math.abs(a.cosH0) > 1, a.altitude = Math.asin(T * l + c * h) / D, !a.isCircumpolar) {
    const u = Math.acos(a.cosH0) / D / 360;
    a.m1 = Ot(a.m0 - u, 1), a.m2 = Ot(a.m0 + u, 1);
  }
  return a;
}
function Z(t, e, n) {
  const i = i1(t), o = Math.abs(t) + Math.abs(e) / 60 + Math.abs(n) / 3600;
  return i ? o : -1 * Math.abs(o);
}
function ye(t) {
  const e = Math.abs(t), n = Math.floor(e), o = (e - n) * 60, s = Math.floor(o), a = (o - s) * 60, f = Math.floor(a), r = (a - f) * 1e3;
  return {
    sign: i1(t) ? 1 : -1,
    radix: n,
    minutes: s,
    seconds: f,
    milliseconds: r
  };
}
const x0 = {
  value: 0,
  unitChars: ["º", "'", '"'],
  showSign: !0,
  separator: " ",
  decimals: 3,
  showSeconds: !0,
  zeroPads: !1
};
function Pt(t) {
  const { value: e, unitChars: n, showSign: i, separator: o, decimals: s, showSeconds: a, zeroPads: f } = { ...x0, ...t }, { sign: r, radix: g, minutes: M, seconds: d, milliseconds: T } = ye(e), l = i || C0(r) ? i1(r) ? "+" : "-" : "", c = n || ["º", "'", '"'];
  let h = `${l}${g.toString().padStart(f ? 2 : 1, "0")}${c[0]}`;
  return h += `${o}${M.toString().padStart(f ? 2 : 1, "0")}${c[1]}`, a && (h += `${o}${(d + T / 1e3).toFixed(s).padStart(f ? 2 : 1, "0")}${c[2]}`), h;
}
function F0(t, e = !1) {
  return Pt({
    value: t,
    unitChars: ["h", "m", "s"],
    showSign: !1,
    decimals: 0,
    showSeconds: e
  });
}
function V0(t, e = !1) {
  return Pt({
    value: t,
    unitChars: ["", "", ""],
    showSign: !1,
    separator: ":",
    decimals: 0,
    showSeconds: e,
    zeroPads: !0
  });
}
function U0(t, e = !1) {
  return Pt({
    value: t * g1,
    unitChars: ["h", "m", "s"],
    showSign: !1,
    separator: " ",
    decimals: 3,
    showSeconds: e
  });
}
function z0(t) {
  return Pt({
    value: t,
    unitChars: ["º", "'", '"'],
    showSign: !0,
    separator: " ",
    decimals: 2
  });
}
function Y0(t) {
  const e = i1(t);
  return Pt({
    value: t,
    showSign: !1,
    separator: " ",
    decimals: 2
  }) + (e ? " E" : " W");
}
function H0(t) {
  const e = i1(t);
  return Pt({
    value: t,
    showSign: !1,
    separator: " ",
    decimals: 2
  }) + (e ? " N" : " S");
}
function k0(t) {
  if (!t || t.length === 0 || t.constructor !== Array)
    return null;
  let e = t[0];
  const n = i1(e) ? 1 : -1;
  return e = Math.abs(e), t.length > 1 && (e = e + Math.abs(t[1]) / 60, t.length > 2 && (e = e + Math.abs(t[2]) / 3600)), n * e;
}
const yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDecimalValue: Z,
  getSexagesimalValue: ye,
  makeCompactSexagesimal: V0,
  makeDecimalFloat: k0,
  makeDeclinationSexagesimal: z0,
  makeHoursMinutesSexagesimal: F0,
  makeLatitudeSexagesimal: H0,
  makeLongitudeSexagesimal: Y0,
  makeRightAscensionSexagesimal: U0,
  makeSexagesimal: Pt
}, Symbol.toStringTag, { value: "Module" }));
function Bt(t, e) {
  const n = Ce.utc(K1(t)), i = ye(e);
  return Ee(
    n.hour(i.radix).minute(i.minutes).second(i.seconds).toDate()
  );
}
function N2(t, e, n, i = it, o = 1) {
  const s = {
    rise: {
      utc: void 0,
      julianDay: void 0
    },
    set: {
      utc: void 0,
      julianDay: void 0
    },
    transit: {
      utc: void 0,
      julianDay: void 0,
      altitude: void 0,
      refAltitude: i,
      isAboveHorizon: !1,
      isAboveAltitude: !1,
      isCircumpolar: !1,
      internals: {
        m0: void 0,
        cosH0: void 0
      }
    }
  }, a = X1(t), f = tt(a, 0) * ht, r = I2(t, e[1], n, i);
  if (s.transit.utc = r.m0 * 24, s.transit.julianDay = Bt(t, s.transit.utc), s.transit.altitude = r.altitude, s.transit.internals.m0 = r.m0, s.transit.internals.cosH0 = r.cosH0, s.transit.isCircumpolar = r.isCircumpolar, s.transit.isAboveHorizon = r.altitude > it, s.transit.isAboveAltitude = r.altitude > i, !r.isCircumpolar) {
    const g = bt(t);
    for (let M = 0; M < o; M++) {
      const d = Te(r.m0, !0, f, g, e, n, i), T = Te(r.m1, !1, f, g, e, n, i), l = Te(r.m2, !1, f, g, e, n, i);
      r.altitude = r.m0 + d.localAltitude, r.m0 = r.m0 + d.Deltam, r.m1 = r.m1 + T.Deltam, r.m2 = r.m2 + l.Deltam;
    }
    s.transit.altitude = r.altitude, s.transit.utc = r.m0 * 24, s.rise.utc = r.m1 * 24, s.set.utc = r.m2 * 24, s.transit.julianDay = Bt(t, s.transit.utc), s.rise.julianDay = Bt(t, s.rise.utc), s.set.julianDay = Bt(t, s.set.utc), s.transit.isCircumpolar = r.isCircumpolar, s.transit.isAboveHorizon = r.altitude > it, s.transit.isAboveAltitude = r.altitude > i, s.rise.julianDay && s.transit.julianDay && s.rise.julianDay > s.transit.julianDay && (s.rise.julianDay = s.rise.julianDay - 1), s.set.julianDay && s.transit.julianDay && s.set.julianDay < s.transit.julianDay && (s.set.julianDay = s.set.julianDay + 1);
  }
  return s;
}
function Se(t, e, n, i = it) {
  const o = {
    rise: {
      utc: void 0,
      julianDay: void 0
    },
    set: {
      utc: void 0,
      julianDay: void 0
    },
    transit: {
      utc: void 0,
      julianDay: void 0,
      altitude: void 0,
      refAltitude: i,
      isAboveHorizon: !1,
      isAboveAltitude: !1,
      isCircumpolar: !1,
      internals: {
        m0: void 0,
        cosH0: void 0
      }
    }
  }, s = I2(t, e, n, i);
  return o.transit.altitude = s.altitude, o.transit.utc = s.m0 * 24, o.transit.julianDay = Bt(t, o.transit.utc), o.transit.internals.m0 = s.m0, o.transit.internals.cosH0 = s.cosH0, o.transit.isCircumpolar = s.isCircumpolar, o.transit.isAboveHorizon = s.altitude > it, o.transit.isAboveAltitude = s.altitude > i, s.isCircumpolar || (o.rise.utc = s.m1 * 24, o.set.utc = s.m2 * 24, o.rise.julianDay = Bt(t, o.rise.utc), o.set.julianDay = Bt(t, o.set.utc), o.rise.julianDay && o.transit.julianDay && o.rise.julianDay > o.transit.julianDay && (o.rise.julianDay = o.rise.julianDay - 1), o.set.julianDay && o.transit.julianDay && o.set.julianDay < o.transit.julianDay && (o.set.julianDay = o.set.julianDay + 1)), o;
}
const Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAccurateRiseTransitSetTimes: N2,
  getRiseTransitSetTimes: Se
}, Symbol.toStringTag, { value: "Module" }));
function Re(t) {
  const e = G(t), n = 357.52911 + 35999.05029 * e - 1537e-7 * e * e + e * e * e / 2449e4;
  return L(n);
}
function W0(t) {
  const e = G(t), n = Re(t), i = be(e, n);
  return L(n + i);
}
function be(t, e) {
  return (1.914602 - 4817e-6 * t - 14e-6 * t * t) * Math.sin(e * D) + (0.019993 - 101e-6 * t) * Math.sin(2 * e * D) + 289e-6 * Math.sin(3 * e * D);
}
function K0(t) {
  const e = 280.46646 + 36000.76983 * t + 3032e-7 * t * t;
  return L(e);
}
function X0(t) {
  return L(280.46646 + 36000.76983 * t + 3032e-7 * t * t);
}
function Q0(t) {
  const e = G(t), n = X0(e), i = Re(t), o = be(e, i);
  return L(n + o);
}
function Z1(t, e = J.MeanOfTheDate) {
  return L(p.getEclipticLongitude(t, e) + 180);
}
function v1(t, e = J.MeanOfTheDate) {
  return -p.getEclipticLatitude(t, e);
}
function x2(t, e = J.MeanOfTheDate) {
  let n = Z1(t, e);
  const i = v1(t, e);
  return n = n + Be(t, n, i), n;
}
function F2(t, e = J.MeanOfTheDate) {
  const n = Z1(t, e);
  let i = v1(t, e);
  return i = i + Oe(t, n), i;
}
function V2(t, e = J.MeanOfTheDate) {
  return {
    longitude: Z1(t, e),
    latitude: v1(t, e)
  };
}
function Z0(t, e = J.MeanOfTheDate) {
  return P(V2(t, e), p.getMeanObliquityOfEcliptic(t));
}
function U2(t) {
  let e = x2(t, J.MeanOfTheDate);
  e = e + Z(0, 0, p.getNutationInLongitude(t));
  const n = p.getRadiusVector(t);
  return e = e - Z(0, 0, 20.4898 / n), e;
}
function z2(t) {
  return F2(t, J.MeanOfTheDate);
}
function Y2(t) {
  return {
    longitude: U2(t),
    latitude: z2(t)
  };
}
function H2(t) {
  return P(Y2(t), p.getTrueObliquityOfEcliptic(t));
}
function v0(t) {
  const n = (t - 2451545) / 365250, i = n * n, o = i * n;
  return 3548.193 + 118.568 * Math.sin(D * (87.5287 + 359993.7286 * n)) + 2.476 * Math.sin(D * (85.0561 + 719987.4571 * n)) + 1.376 * Math.sin(D * (27.8502 + 44526711152e-4 * n)) + 0.119 * Math.sin(D * (73.1375 + 450368.8564 * n)) + 0.114 * Math.sin(D * (337.2264 + 329644.6718 * n)) + 0.086 * Math.sin(D * (222.54 + 659289.3436 * n)) + 0.078 * Math.sin(D * (162.8136 + 92246597915e-4 * n)) + 0.054 * Math.sin(D * (82.5823 + 10799811857e-4 * n)) + 0.052 * Math.sin(D * (171.5189 + 225184.4282 * n)) + 0.034 * Math.sin(D * (30.3214 + 40926773866e-4 * n)) + 0.033 * Math.sin(D * (119.8105 + 337181.4711 * n)) + 0.023 * Math.sin(D * (247.5418 + 299295.6151 * n)) + 0.023 * Math.sin(D * (325.1526 + 315559.556 * n)) + 0.021 * Math.sin(D * (155.1241 + 675553.2846 * n)) + 7.311 * n * Math.sin(D * (333.4515 + 359993.7286 * n)) + 0.305 * n * Math.sin(D * (330.9814 + 719987.4571 * n)) + 0.01 * n * Math.sin(D * (328.517 + 10799811857e-4 * n)) + 0.309 * i * Math.sin(D * (241.4518 + 359993.7286 * n)) + 0.021 * i * Math.sin(D * (205.0482 + 719987.4571 * n)) + 4e-3 * i * Math.sin(D * (297.861 + 44526711152e-4 * n)) + 0.01 * o * Math.sin(D * (154.7066 + 359993.7286 * n));
}
function j0(t, e) {
  const n = Q1(t), i = H2(n);
  return Se(t, i, e, l0);
}
const j = {
  getMeanAnomaly: Re,
  getTrueAnomaly: W0,
  getEquationOfTheCenter: be,
  getMeanLongitudeReferredToMeanEquinoxOfDate: K0,
  getGeometricEclipticLongitude: Q0,
  getGeocentricEclipticLongitude: Z1,
  getGeocentricEclipticLatitude: v1,
  getGeometricFK5EclipticLongitude: x2,
  getGeometricFK5EclipticLatitude: F2,
  getGeocentricEclipticCoordinates: V2,
  getGeocentricEquatorialCoordinates: Z0,
  getApparentGeocentricEclipticLongitude: U2,
  getApparentGeocentricEclipticLatitude: z2,
  getApparentGeocentricEclipticCoordinates: Y2,
  getApparentGeocentricEquatorialCoordinates: H2,
  getVariationGeometricEclipticLongitude: v0,
  getRiseTransitSet: j0,
  constants: B0
}, f2 = function() {
  return [
    [175347046, 0, 0],
    [3341656, 4.6692568, 6283.07585],
    [34894, 4.6261, 12566.1517],
    [3497, 2.7441, 5753.3849],
    [3418, 2.8289, 3.5231],
    [3136, 3.6277, 77713.7715],
    [2676, 4.4181, 7860.4194],
    [2343, 6.1352, 3930.2097],
    [1324, 0.7425, 11506.7698],
    [1273, 2.0371, 529.691],
    [1199, 1.1096, 1577.3435],
    [990, 5.233, 5884.927],
    [902, 2.045, 26.298],
    [857, 3.508, 398.149],
    [780, 1.179, 5223.694],
    [753, 2.533, 5507.553],
    [505, 4.583, 18849.228],
    [492, 4.205, 775.523],
    [357, 2.92, 0.067],
    [317, 5.849, 11790.629],
    [284, 1.899, 796.298],
    [271, 0.315, 10977.079],
    [243, 0.345, 5486.778],
    [206, 4.806, 2544.314],
    [205, 1.869, 5573.143],
    [202, 2.458, 6069.777],
    [156, 0.833, 213.299],
    [132, 3.411, 2942.463],
    [126, 1.083, 20.775],
    [115, 0.645, 0.98],
    [103, 0.636, 4694.003],
    [102, 0.976, 15720.839],
    [102, 4.267, 7.114],
    [99, 6.21, 2146.17],
    [98, 0.68, 155.42],
    [86, 5.98, 161000.69],
    [85, 1.3, 6275.96],
    [85, 3.67, 71430.7],
    [80, 1.81, 17260.15],
    [79, 3.04, 12036.46],
    [75, 1.76, 5088.63],
    [74, 3.5, 3154.69],
    [74, 4.68, 801.82],
    [70, 0.83, 9437.76],
    [62, 3.98, 8827.39],
    [61, 1.82, 7084.9],
    [57, 2.78, 6286.6],
    [56, 4.39, 14143.5],
    [56, 3.47, 6279.55],
    [52, 0.19, 12139.55],
    [52, 1.33, 1748.02],
    [51, 0.28, 5856.48],
    [49, 0.49, 1194.45],
    [41, 5.37, 8429.24],
    [41, 2.4, 19651.05],
    [39, 6.17, 10447.39],
    [37, 6.04, 10213.29],
    [37, 2.57, 1059.38],
    [36, 1.71, 2352.87],
    [36, 1.78, 6812.77],
    [33, 0.59, 17789.85],
    [30, 0.44, 83996.85],
    [30, 2.74, 1349.87],
    [25, 3.16, 4690.48]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, t4 = function() {
  return [
    [628331966747, 0, 0],
    [206059, 2.678235, 6283.07585],
    [4303, 2.6351, 12566.1517],
    [425, 1.59, 3.523],
    [119, 5.796, 26.298],
    [109, 2.966, 1577.344],
    [93, 2.59, 18849.23],
    [72, 1.14, 529.69],
    [68, 1.87, 398.15],
    [67, 4.41, 5507.55],
    [59, 2.89, 5223.69],
    [56, 2.17, 155.42],
    [45, 0.4, 796.3],
    [36, 0.47, 775.52],
    [29, 2.65, 7.11],
    [21, 5.34, 0.98],
    [19, 1.85, 5486.78],
    [19, 4.97, 213.3],
    [17, 2.99, 6275.96],
    [16, 0.03, 2544.31],
    [16, 1.43, 2146.17],
    [15, 1.21, 10977.08],
    [12, 2.83, 1748.02],
    [12, 3.26, 5088.63],
    [12, 5.27, 1194.45],
    [12, 2.08, 4694],
    [11, 0.77, 553.57],
    [10, 1.3, 6286.6],
    [10, 4.24, 1349.87],
    [9, 2.7, 242.73],
    [9, 5.64, 951.72],
    [8, 5.3, 2352.87],
    [6, 2.65, 9437.76],
    [6, 4.67, 4690.48]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, e4 = function() {
  return [
    [52919, 0, 0],
    [8720, 1.0721, 6283.0758],
    [309, 0.867, 12566.152],
    [27, 0.05, 3.52],
    [16, 5.19, 26.3],
    [16, 3.68, 155.42],
    [10, 0.76, 18849.23],
    [9, 2.06, 77713.77],
    [7, 0.83, 775.52],
    [5, 4.66, 1577.34],
    [4, 1.03, 7.11],
    [4, 3.44, 5573.14],
    [3, 5.14, 796.3],
    [3, 6.05, 5507.55],
    [3, 1.19, 242.73],
    [3, 6.12, 529.69],
    [3, 0.31, 398.15],
    [3, 2.28, 553.57],
    [2, 4.38, 5223.69],
    [2, 3.75, 0.98]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, n4 = function() {
  return [
    [289, 5.844, 6283.076],
    [35, 0, 0],
    [17, 5.49, 12566.15],
    [3, 5.2, 155.42],
    [1, 4.72, 3.52],
    [1, 5.3, 18849.23],
    [1, 5.97, 242.73]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, o4 = function() {
  return [
    [114, 3.142, 0],
    [8, 4.13, 6283.08],
    [1, 3.84, 12566.15]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, i4 = function() {
  return [
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, D2 = function() {
  return [
    [280, 3.199, 84334.662],
    [102, 5.422, 5507.553],
    [80, 3.88, 5223.69],
    [44, 3.7, 2352.87],
    [32, 4, 1577.34]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, c4 = function() {
  return [
    [9, 3.9, 5507.55],
    [6, 1.73, 5223.69]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, s4 = function() {
  return [
    [100013989, 0, 0],
    [1670700, 3.0984635, 6283.07585],
    [13956, 3.05525, 12566.1517],
    [3084, 5.1985, 77713.7715],
    [1628, 1.1739, 5753.3849],
    [1576, 2.8469, 7860.4194],
    [925, 5.453, 11506.77],
    [542, 4.564, 3930.21],
    [472, 3.661, 5884.927],
    [346, 0.964, 5507.553],
    [329, 5.9, 5223.694],
    [307, 0.299, 5573.143],
    [243, 4.273, 11790.629],
    [212, 5.847, 1577.344],
    [186, 5.022, 10977.079],
    [175, 3.012, 18849.228],
    [110, 5.055, 5486.778],
    [98, 0.89, 6069.78],
    [86, 5.69, 15720.84],
    [86, 1.27, 161000.69],
    [65, 0.27, 17260.15],
    [63, 0.92, 529.69],
    [57, 2.01, 83996.85],
    [56, 5.24, 71430.7],
    [49, 3.25, 2544.31],
    [47, 2.58, 775.52],
    [45, 5.54, 9437.76],
    [43, 6.01, 6275.96],
    [39, 5.36, 4694],
    [38, 2.39, 8827.39],
    [37, 0.83, 19651.05],
    [37, 4.9, 12139.55],
    [36, 1.67, 12036.46],
    [35, 1.84, 2942.46],
    [33, 0.24, 7084.9],
    [32, 0.18, 5088.63],
    [32, 1.78, 398.15],
    [28, 1.21, 6286.6],
    [28, 1.9, 6279.55],
    [26, 4.59, 10447.39]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, a4 = function() {
  return [
    [103019, 1.10749, 6283.07585],
    [1721, 1.0644, 12566.1517],
    [702, 3.142, 0],
    [32, 1.02, 18849.23],
    [31, 2.84, 5507.55],
    [25, 1.32, 5223.69],
    [18, 1.42, 1577.34],
    [10, 5.91, 10977.08],
    [9, 1.42, 6275.96],
    [9, 0.27, 5486.78]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, r4 = function() {
  return [
    [4359, 5.7846, 6283.0758],
    [124, 5.579, 12566.152],
    [12, 3.14, 0],
    [9, 3.63, 77713.77],
    [6, 1.87, 5573.14],
    [3, 5.47, 18849.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, u4 = function() {
  return [
    [145, 4.273, 6283.076],
    [7, 3.92, 12566.15]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, l4 = function() {
  return [
    [4, 2.56, 6283.08]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, f4 = function() {
  return [
    [628307584999, 0, 0],
    [206059, 2.678235, 6283.07585],
    [4303, 2.6351, 12566.1517],
    [425, 1.59, 3.523],
    [119, 5.796, 26.298],
    [109, 2.966, 1577.344],
    [93, 2.59, 18849.23],
    [72, 1.14, 529.69],
    [68, 1.87, 398.15],
    [67, 4.41, 5507.55],
    [59, 2.89, 5223.69],
    [56, 2.17, 155.42],
    [45, 0.4, 796.3],
    [36, 0.47, 775.52],
    [29, 2.65, 7.11],
    [21, 5.43, 0.98],
    [19, 1.85, 5486.78],
    [19, 4.97, 213.3],
    [17, 2.99, 6275.96],
    [16, 0.03, 2544.31],
    [16, 1.43, 2146.17],
    [15, 1.21, 10977.08],
    [12, 2.83, 1748.02],
    [12, 3.26, 5088.63],
    [12, 5.27, 1194.45],
    [12, 2.08, 4694],
    [11, 0.77, 553.57],
    [10, 1.3, 6286.6],
    [10, 4.24, 1349.87],
    [9, 2.7, 242.73],
    [9, 5.64, 951.72],
    [8, 5.3, 2352.87],
    [6, 2.65, 9437.76],
    [6, 4.67, 4690.48]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, D4 = function() {
  return [
    [8722, 1.0725, 6283.0758],
    [991, 3.1416, 0],
    [295, 0.437, 12566.152],
    [27, 0.05, 3.52],
    [16, 5.19, 26.3],
    [16, 3.69, 155.42],
    [9, 0.3, 18849.23],
    [9, 2.06, 77713.77],
    [7, 0.83, 775.52],
    [5, 4.66, 1577.34],
    [4, 1.03, 7.11],
    [4, 3.44, 5573.14],
    [3, 5.14, 796.3],
    [3, 6.05, 5507.55],
    [3, 1.19, 242.73],
    [3, 6.12, 529.69],
    [3, 0.3, 398.15],
    [3, 2.28, 553.57],
    [2, 4.38, 5223.69],
    [2, 3.75, 0.98]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, g4 = function() {
  return [
    [289, 5.842, 6283.076],
    [21, 6.05, 12566.15],
    [3, 5.2, 155.42],
    [3, 3.14, 0],
    [1, 4.72, 3.52],
    [1, 5.97, 242.73],
    [1, 5.54, 18849.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, h4 = function() {
  return [
    [8, 4.14, 6283.08],
    [1, 3.28, 12566.15]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, M4 = function() {
  return [
    [227778, 3.413766, 6283.07585],
    [3806, 3.3706, 12566.1517],
    [3620, 0, 0],
    [72, 3.33, 18849.23],
    [8, 3.89, 5507.55],
    [8, 1.79, 5223.69],
    [6, 5.2, 2352.87]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, d4 = function() {
  return [
    [9721, 5.1519, 6283.07585],
    [233, 3.1416, 0],
    [134, 0.644, 12566.152],
    [7, 1.07, 18849.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, T4 = function() {
  return [
    [276, 0.595, 6283.076],
    [17, 3.14, 0],
    [4, 0.12, 12566.15]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, p4 = function() {
  return [
    [6, 2.27, 6283.08],
    [1, 0, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function Je(t, e = J.MeanOfTheDate) {
  const n = I(t), i = (e === J.MeanOfTheDate, f2()), o = e === J.MeanOfTheDate ? t4() : f4(), s = e === J.MeanOfTheDate ? e4() : D4(), a = e === J.MeanOfTheDate ? n4() : g4(), f = e === J.MeanOfTheDate ? o4() : h4(), r = e === J.MeanOfTheDate ? i4() : [], g = i.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0), M = o.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0), d = s.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0), T = a.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0), l = f.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0), c = r.reduce((u, E) => u + E.A * Math.cos(E.B + E.C * n), 0);
  return (g + M * n + d * Math.pow(n, 2) + T * Math.pow(n, 3) + l * Math.pow(n, 4) + c * Math.pow(n, 5)) / 1e8 * m;
}
function k2(t, e = J.MeanOfTheDate) {
  return L(Je(t, e));
}
function A4(t, e, n = J.MeanOfTheDate) {
  return Je(e, n) - Je(t, n);
}
function W2(t, e = J.MeanOfTheDate) {
  const n = I(t), i = (e === J.MeanOfTheDate, D2()), o = e === J.MeanOfTheDate ? c4() : M4(), s = e === J.MeanOfTheDate ? [] : d4(), a = e === J.MeanOfTheDate ? [] : T4(), f = e === J.MeanOfTheDate ? [] : p4(), r = i.reduce((c, h) => c + h.A * Math.cos(h.B + h.C * n), 0), g = o.reduce((c, h) => c + h.A * Math.cos(h.B + h.C * n), 0), M = s.reduce((c, h) => c + h.A * Math.cos(h.B + h.C * n), 0), d = a.reduce((c, h) => c + h.A * Math.cos(h.B + h.C * n), 0), T = f.reduce((c, h) => c + h.A * Math.cos(h.B + h.C * n), 0), l = r + g * n + M * Math.pow(n, 2) + d * Math.pow(n, 3) + T * Math.pow(n, 4);
  return W(l / 1e8 * m);
}
function J4(t, e = J.MeanOfTheDate) {
  return {
    longitude: k2(t, e),
    latitude: W2(t, e)
  };
}
function K2(t) {
  const e = I(t), n = s4(), i = a4(), o = r4(), s = u4(), a = l4(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0);
  return (f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4)) / 1e8;
}
function m4(t) {
  return j.getMeanAnomaly(t);
}
function Pe(t) {
  const e = G(t);
  return 0.016708634 - e * 42037e-9 - e * e * 1267e-10;
}
function we(t) {
  const e = G(t);
  return 102.93735 + e * 1.71946 + e * e * 46e-5;
}
function X2(t, e) {
  const n = u0 * 1e3, i = 1 - Ae, o = e * D, s = Math.atan(i * Math.tan(o)), a = t / n;
  return {
    rhosinphi: i * Math.sin(s) + a * Math.sin(o),
    rhocosphi: Math.cos(s) + a * Math.cos(o)
  };
}
const C4 = function() {
  return [
    [0, 0, 0, 0, 1, -171996, -174.2, 92025, 8.9],
    [-2, 0, 0, 2, 2, -13187, -1.6, 5736, -3.1],
    [0, 0, 0, 2, 2, -2274, -0.2, 977, -0.5],
    [0, 0, 0, 0, 2, 2062, 0.2, -895, 0.5],
    [0, 1, 0, 0, 0, 1426, -3.4, 54, -0.1],
    [0, 0, 1, 0, 0, 712, 0.1, -7, 0],
    [-2, 1, 0, 2, 2, -517, 1.2, 224, -0.6],
    [0, 0, 0, 2, 1, -386, -0.4, 200, 0],
    [0, 0, 1, 2, 2, -301, 0, 129, -0.1],
    [-2, -1, 0, 2, 2, 217, -0.5, -95, 0.3],
    [-2, 0, 1, 0, 0, -158, 0, 0, 0],
    [-2, 0, 0, 2, 1, 129, 0.1, -70, 0],
    [0, 0, -1, 2, 2, 123, 0, -53, 0],
    [2, 0, 0, 0, 0, 63, 0, 0, 0],
    [0, 0, 1, 0, 1, 63, 0.1, -33, 0],
    [2, 0, -1, 2, 2, -59, 0, 26, 0],
    [0, 0, -1, 0, 1, -58, -0.1, 32, 0],
    [0, 0, 1, 2, 1, -51, 0, 27, 0],
    [-2, 0, 2, 0, 0, 48, 0, 0, 0],
    [0, 0, -2, 2, 1, 46, 0, -24, 0],
    [2, 0, 0, 2, 2, -38, 0, 16, 0],
    [0, 0, 2, 2, 2, -31, 0, 13, 0],
    [0, 0, 2, 0, 0, 29, 0, 0, 0],
    [-2, 0, 1, 2, 2, 29, 0, -12, 0],
    [0, 0, 0, 2, 0, 26, 0, 0, 0],
    [-2, 0, 0, 2, 0, -22, 0, 0, 0],
    [0, 0, -1, 2, 1, 21, 0, -10, 0],
    [0, 2, 0, 0, 0, 17, -0.1, 0, 0],
    [2, 0, -1, 0, 1, 16, 0, -8, 0],
    [-2, 2, 0, 2, 2, -16, 0.1, 7, 0],
    [0, 1, 0, 0, 1, -15, 0, 9, 0],
    [-2, 0, 1, 0, 1, -13, 0, 7, 0],
    [0, -1, 0, 0, 1, -12, 0, 6, 0],
    [0, 0, 2, -2, 0, 11, 0, 0, 0],
    [2, 0, -1, 2, 1, -10, 0, 5, 0],
    [2, 0, 1, 2, 2, -8, 0, 3, 0],
    [0, 1, 0, 2, 2, 7, 0, -3, 0],
    [-2, 1, 1, 0, 0, -7, 0, 0, 0],
    [0, -1, 0, 2, 2, -7, 0, 3, 0],
    [2, 0, 0, 2, 1, -7, 0, 3, 0],
    [2, 0, 1, 0, 0, 6, 0, 0, 0],
    [-2, 0, 2, 2, 2, 6, 0, -3, 0],
    [-2, 0, 1, 2, 1, 6, 0, -3, 0],
    [2, 0, -2, 0, 1, -6, 0, 3, 0],
    [2, 0, 0, 0, 1, -6, 0, 3, 0],
    [0, -1, 1, 0, 0, 5, 0, 0, 0],
    [-2, -1, 0, 2, 1, -5, 0, 3, 0],
    [-2, 0, 0, 0, 1, -5, 0, 3, 0],
    [0, 0, 2, 2, 1, -5, 0, 3, 0],
    [-2, 0, 2, 0, 1, 4, 0, 0, 0],
    [-2, 1, 0, 2, 1, 4, 0, 0, 0],
    [0, 0, 1, -2, 0, 4, 0, 0, 0],
    [-1, 0, 1, 0, 0, -4, 0, 0, 0],
    [-2, 1, 0, 0, 0, -4, 0, 0, 0],
    [1, 0, 0, 0, 0, -4, 0, 0, 0],
    [0, 0, 1, 2, 0, 3, 0, 0, 0],
    [0, 0, -2, 2, 2, -3, 0, 0, 0],
    [-1, -1, 1, 0, 0, -3, 0, 0, 0],
    [0, 1, 1, 0, 0, -3, 0, 0, 0],
    [0, -1, 1, 2, 2, -3, 0, 0, 0],
    [2, -1, -1, 2, 2, -3, 0, 0, 0],
    [0, 0, 3, 2, 2, -3, 0, 0, 0],
    [2, -1, 0, 2, 2, -3, 0, 0, 0]
  ].map(
    (t) => ({
      D: t[0],
      M: t[1],
      Mprime: t[2],
      F: t[3],
      omega: t[4],
      sincoeff1: t[5],
      sincoeff2: t[6],
      coscoeff1: t[7],
      coscoeff2: t[8]
    })
  );
};
function Q2(t, e, n, i, o, s, a) {
  const f = C4(), r = a === "sin" ? Math.sin : Math.cos;
  return f.reduce((g, M) => {
    const d = M.D * e + M.M * n + M.Mprime * i + M.F * o + M.omega * s, T = a === "sin" ? M.sincoeff1 : M.coscoeff1, l = a === "sin" ? M.sincoeff2 : M.coscoeff2;
    return g + (T + l * t) * (r(d * D) * 1e-4);
  }, 0);
}
function qe(t) {
  const e = G(t), n = ot.getMeanElongation(t), i = j.getMeanAnomaly(t), o = ot.getMeanAnomaly(t), s = ot.getArgumentOfLatitude(t), a = ot.getMeanLongitudeAscendingNode(t);
  return Q2(e, n, i, o, s, a, "sin");
}
function Ge(t) {
  const e = G(t), n = ot.getMeanElongation(t), i = j.getMeanAnomaly(t), o = ot.getMeanAnomaly(t), s = ot.getArgumentOfLatitude(t), a = ot.getMeanLongitudeAscendingNode(t);
  return Q2(e, n, i, o, s, a, "cos");
}
function j1(t) {
  const e = (t - 2451545) / 3652500;
  return Z(23, 26, 21.448) - Z(0, 0, 4680.93) * e - Z(0, 0, 1.55) * Math.pow(e, 2) + Z(0, 0, 1999.25) * Math.pow(e, 3) - Z(0, 0, 51.38) * Math.pow(e, 4) - Z(0, 0, 249.67) * Math.pow(e, 5) - Z(0, 0, 39.05) * Math.pow(e, 6) + Z(0, 0, 7.12) * Math.pow(e, 7) + Z(0, 0, 27.87) * Math.pow(e, 8) + Z(0, 0, 5.79) * Math.pow(e, 9) + Z(0, 0, 2.45) * Math.pow(e, 10);
}
function te(t) {
  return j1(t) + Ge(t) / 3600;
}
const Z2 = function() {
  return [
    [0, 0, 1, 0],
    [2, 0, -1, 0],
    [2, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 2],
    [2, 0, -2, 0],
    [2, -1, -1, 0],
    [2, 0, 1, 0],
    [2, -1, 0, 0],
    [0, 1, -1, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [2, 0, 0, -2],
    [0, 0, 1, 2],
    [0, 0, 1, -2],
    [4, 0, -1, 0],
    [0, 0, 3, 0],
    [4, 0, -2, 0],
    [2, 1, -1, 0],
    [2, 1, 0, 0],
    [1, 0, -1, 0],
    [1, 1, 0, 0],
    [2, -1, 1, 0],
    [2, 0, 2, 0],
    [4, 0, 0, 0],
    [2, 0, -3, 0],
    [0, 1, -2, 0],
    [2, 0, -1, 2],
    [2, -1, -2, 0],
    [1, 0, 1, 0],
    [2, -2, 0, 0],
    [0, 1, 2, 0],
    [0, 2, 0, 0],
    [2, -2, -1, 0],
    [2, 0, 1, -2],
    [2, 0, 0, 2],
    [4, -1, -1, 0],
    [0, 0, 2, 2],
    [3, 0, -1, 0],
    [2, 1, 1, 0],
    [4, -1, -2, 0],
    [0, 2, -1, 0],
    [2, 2, -1, 0],
    [2, 1, -2, 0],
    [2, -1, 0, -2],
    [4, 0, 1, 0],
    [0, 0, 4, 0],
    [4, -1, 0, 0],
    [1, 0, -2, 0],
    [2, 1, 0, -2],
    [0, 0, 2, -2],
    [1, 1, 1, 0],
    [3, 0, -2, 0],
    [4, 0, -3, 0],
    [2, -1, 2, 0],
    [0, 2, 1, 0],
    [1, 1, -1, 0],
    [2, 0, 3, 0],
    [2, 0, -1, -2]
  ].map((t) => ({ D: t[0], M: t[1], Mdash: t[2], F: t[3] }));
}, v2 = function() {
  return [
    [6288774, -20905355],
    [1274027, -3699111],
    [658314, -2955968],
    [213618, -569925],
    [-185116, 48888],
    [-114332, -3149],
    [58793, 246158],
    [57066, -152138],
    [53322, -170733],
    [45758, -204586],
    [-40923, -129620],
    [-34720, 108743],
    [-30383, 104755],
    [15327, 10321],
    [-12528, 0],
    [10980, 79661],
    [10675, -34782],
    [10034, -23210],
    [8548, -21636],
    [-7888, 24208],
    [-6766, 30824],
    [-5163, -8379],
    [4987, -16675],
    [4036, -12831],
    [3994, -10445],
    [3861, -11650],
    [3665, 14403],
    [-2689, -7003],
    [-2602, 0],
    [2390, 10056],
    [-2348, 6322],
    [2236, -9884],
    [-2120, 5751],
    [-2069, 0],
    [2048, -4950],
    [-1773, 4130],
    [-1595, 0],
    [1215, -3958],
    [-1110, 0],
    [-892, 3258],
    [-810, 2616],
    [759, -1897],
    [-713, -2117],
    [-700, 2354],
    [691, 0],
    [596, 0],
    [549, -1423],
    [537, -1117],
    [520, -1571],
    [-487, -1739],
    [-399, 0],
    [-381, -4421],
    [351, 0],
    [-340, 0],
    [330, 0],
    [327, 0],
    [-323, 1165],
    [299, 0],
    [294, 0],
    [0, 8752]
  ].map((t) => ({ A: t[0], B: t[1] }));
}, $4 = function() {
  return [
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 0, 1, -1],
    [2, 0, 0, -1],
    [2, 0, -1, 1],
    [2, 0, -1, -1],
    [2, 0, 0, 1],
    [0, 0, 2, 1],
    [2, 0, 1, -1],
    [0, 0, 2, -1],
    [2, -1, 0, -1],
    [2, 0, -2, -1],
    [2, 0, 1, 1],
    [2, 1, 0, -1],
    [2, -1, -1, 1],
    [2, -1, 0, 1],
    [2, -1, -1, -1],
    [0, 1, -1, -1],
    [4, 0, -1, -1],
    [0, 1, 0, 1],
    [0, 0, 0, 3],
    [0, 1, -1, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, -1],
    [0, 1, 0, -1],
    [1, 0, 0, -1],
    [0, 0, 3, 1],
    [4, 0, 0, -1],
    [4, 0, -1, 1],
    [0, 0, 1, -3],
    [4, 0, -2, 1],
    [2, 0, 0, -3],
    [2, 0, 2, -1],
    [2, -1, 1, -1],
    [2, 0, -2, 1],
    [0, 0, 3, -1],
    [2, 0, 2, 1],
    [2, 0, -3, -1],
    [2, 1, -1, 1],
    [2, 1, 0, 1],
    [4, 0, 0, 1],
    [2, -1, 1, 1],
    [2, -2, 0, -1],
    [0, 0, 1, 3],
    [2, 1, 1, -1],
    [1, 1, 0, -1],
    [1, 1, 0, 1],
    [0, 1, -2, -1],
    [2, 1, -1, -1],
    [1, 0, 1, 1],
    [2, -1, -2, -1],
    [0, 1, 2, 1],
    [4, 0, -2, -1],
    [4, -1, -1, -1],
    [1, 0, 1, -1],
    [4, 0, 1, -1],
    [1, 0, -1, -1],
    [4, -1, 0, -1],
    [2, -2, 0, 1]
  ].map((t) => ({ D: t[0], M: t[1], Mdash: t[2], F: t[3] }));
}, L4 = function() {
  return [
    5128122,
    280602,
    277693,
    173237,
    55413,
    46271,
    32573,
    17198,
    9266,
    8822,
    8216,
    4324,
    4200,
    -3359,
    2463,
    2211,
    2065,
    -1870,
    1828,
    -1794,
    -1749,
    -1565,
    -1491,
    -1475,
    -1410,
    -1344,
    -1335,
    1107,
    1021,
    833,
    777,
    671,
    607,
    596,
    491,
    -451,
    439,
    422,
    421,
    -366,
    -351,
    331,
    315,
    302,
    -283,
    -229,
    223,
    223,
    -220,
    -220,
    -185,
    181,
    -177,
    176,
    166,
    -164,
    132,
    -119,
    115,
    107
  ].map((t) => t);
};
function _e(t, e, n, i, o, s, a, f, r) {
  const g = s(), M = a();
  return g.reduce((d, T, l) => {
    const c = T.D * e + T.M * n + T.Mdash * i + T.F * o, h = Math.abs(T.M) === 1 ? t : Math.abs(T.M) === 2 ? Math.pow(t, 2) : 1, u = f.length ? M[l][f] : M[l];
    return d + u * h * Math[r](c);
  }, 0);
}
function Ie(t) {
  const e = G(t), n = 218.3164477 + 481267.88123421 * e - 15786e-7 * e * e + e * e * e / 538841 - e * e * e * e / 65194e3;
  return L(n);
}
function T1(t) {
  const e = G(t), n = 297.8501921 + 445267.1114034 * e - 18819e-7 * e * e + e * e * e / 545868 - e * e * e * e / 113065e3;
  return L(n);
}
function p1(t) {
  const e = G(t), n = 134.9633964 + 477198.8675055 * e + 87414e-7 * e * e + e * e * e / 69699 - e * e * e * e / 14712e3;
  return L(n);
}
function A1(t) {
  const e = G(t), n = 93.272095 + 483202.0175233 * e - 36539e-7 * e * e - e * e * e / 3526e3 - e * e * e * e / 86331e4;
  return L(n);
}
function j2(t) {
  const e = Ie(t) * D, n = T1(t) * D, i = j.getMeanAnomaly(t) * D, o = p1(t) * D, s = A1(t) * D, a = G(t), f = 1 - a * 2516e-6 - a * a * 74e-7, r = L(119.75 + 131.849 * a) * D, g = L(53.09 + 479264.29 * a) * D;
  let M = _e(f, n, i, o, s, Z2, v2, "A", "sin");
  return M += 3958 * Math.sin(r) + 1962 * Math.sin(e - s) + 318 * Math.sin(g), L(e * m + M / 1e6);
}
function tn(t) {
  const e = Ie(t) * D, n = T1(t) * D, i = j.getMeanAnomaly(t) * D, o = p1(t) * D, s = A1(t) * D, a = G(t), f = 1 - a * 2516e-6 - a * a * 74e-7, r = L(119.75 + 131.849 * a) * D, g = L(313.45 + 481266.484 * a) * D;
  let M = _e(f, n, i, o, s, $4, L4, "", "sin");
  return M = M - 2235 * Math.sin(e) + 382 * Math.sin(g) + 175 * Math.sin(r - s) + 175 * Math.sin(r + s) + 127 * Math.sin(e - o) - 115 * Math.sin(e + o), M / 1e6;
}
function Ne(t) {
  return {
    longitude: j2(t),
    latitude: tn(t)
  };
}
function xe(t, e = R.Mean) {
  return P(
    Ne(t),
    e === R.Mean ? j1(t) : te(t)
  );
}
function me(t) {
  const e = Ne(t);
  return e.longitude = e.longitude + qe(t) / 3600, P(e, te(t));
}
function yt(t) {
  const e = T1(t) * D, n = j.getMeanAnomaly(t) * D, i = p1(t) * D, o = A1(t) * D, s = G(t), a = 1 - s * 2516e-6 - s * s * 74e-7;
  return 385000.56 + _e(a, e, n, i, o, Z2, v2, "B", "cos") / 1e3;
}
function E4(t) {
  return en(yt(t));
}
function en(t) {
  return Math.asin(6378.14 / t) * m;
}
function B4(t) {
  const e = t * D;
  return 6378.14 / Math.sin(e);
}
function nn(t) {
  const e = G(t), n = 125.0445479 - 1934.1362891 * e + 20754e-7 * e * e + e * e * e / 467441 - e * e * e * e / 60616e3;
  return L(n);
}
function O4(t) {
  const e = G(t), n = 83.3532465 + 4069.0137287 * e - 0.01032 * e * e - e * e * e / 80053 + e * e * e * e / 18999e3;
  return L(n);
}
function y4(t) {
  let e = nn(t);
  const n = T1(t) * D, i = j.getMeanAnomaly(t) * D, o = p1(t) * D, s = A1(t) * D, a = e - 1.4979 * Math.sin(2 * (n - s)) - 0.15 * Math.sin(i) - 0.1226 * Math.sin(2 * n) + 0.1176 * Math.sin(2 * s) - 0.0801 * Math.sin(2 * (o - s));
  return L(a);
}
function on(t) {
  const e = j.getGeocentricEquatorialCoordinates(t, J.MeanOfTheDate), n = xe(t, R.Mean), i = e.declination * D, o = n.declination * D, s = e.rightAscension * D, a = n.rightAscension * D, f = Math.sin(i) * Math.sin(o), r = Math.cos(i) * Math.cos(o) * Math.cos(s - a);
  return Math.acos(f + r) * m;
}
function cn(t) {
  const e = on(t) * D, n = yt(t), i = K2(t) * k1;
  return Math.atan2(i * Math.sin(e), n - i * Math.cos(e)) * m;
}
function S4(t) {
  const e = j.getGeocentricEquatorialCoordinates(t, J.MeanOfTheDate), n = xe(t, R.Mean), i = e.rightAscension * D, o = n.rightAscension * D, s = e.declination * D, a = n.declination * D, f = Math.cos(s) * Math.sin(i - o), r = Math.sin(s) * Math.cos(a) - Math.cos(s) * Math.sin(a) * Math.cos(i - o);
  return Math.atan2(f, r) * m;
}
function R4(t) {
  const e = cn(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function b4(t) {
  return Math.asin(6378.14 / yt(t)) * m;
}
function P4(t) {
  return 358473400 / yt(t);
}
function w4(t) {
  const n = 12.3685 * (at(t) - 2e3);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function q4(t, e) {
  let n = w4(t);
  return e === D1.FirstQuarter ? n = n + 0.25 : e == D1.Full ? n = n + 0.5 : e == D1.LastQuarter && (n = n + 0.75), n;
}
function sn(t, e) {
  const n = q4(t, e), i = n / 1236.85;
  return 245155009766e-5 + 29.530588861 * n + 15437e-8 * Math.pow(i, 2) - 15e-8 * Math.pow(i, 3) + 73e-11 * Math.pow(i, 4);
}
function an(t) {
  let e = sn(t - V1, D1.New);
  return e > t && (e = e - V1), Ot(t - e, V1);
}
function G4(t) {
  const e = an(t) / V1;
  return e <= Dt[H.New] ? H.New : e <= Dt[H.WaxingCrescent] ? H.WaxingCrescent : e <= Dt[H.FirstQuarter] ? H.FirstQuarter : e <= Dt[H.WaxingGibbous] ? H.WaxingGibbous : e <= Dt[H.Full] ? H.Full : e <= Dt[H.WaningGibbous] ? H.WaningGibbous : e <= Dt[H.LastQuarter] ? H.LastQuarter : e <= Dt[H.WaningCrescent] ? H.WaningCrescent : H.New;
}
const Y1 = Math.PI / 180, _4 = 6378.137;
function I4(t) {
  return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
}
function N4(t, e) {
  return { x: t.x - e.x, y: t.y - e.y, z: t.z - e.z };
}
function x4(t, e, n) {
  const i = t * Y1, o = e * Y1, s = Math.cos(o);
  return {
    x: n * s * Math.cos(i),
    y: n * s * Math.sin(i),
    z: n * Math.sin(o)
  };
}
function F4(t, e, n = 0) {
  const i = t * Y1, o = e * Y1, s = _4 + n / 1e3, a = Math.cos(i);
  return {
    x: s * a * Math.cos(o),
    y: s * a * Math.sin(o),
    z: s * Math.sin(i)
  };
}
function g2(t, e, n, i, o, s) {
  const a = x4(t, e, n), f = F4(i, o, s);
  return I4(N4(a, f));
}
function V4(t, e) {
  const i = 6944444444444445e-19, o = t - i, s = t + i, a = me(o), f = me(s), r = yt(o), g = yt(s), M = tt(o, e.longitude) * ht, d = tt(s, e.longitude) * ht, T = g2(
    a.rightAscension,
    a.declination,
    r,
    e.latitude,
    M,
    e.height ?? 0
  );
  return (g2(
    f.rightAscension,
    f.declination,
    g,
    e.latitude,
    d,
    e.height ?? 0
  ) - T) / 120;
}
const ot = {
  getGeocentricElongation: on,
  getMeanLongitude: Ie,
  getMeanElongation: T1,
  getMeanAnomaly: p1,
  getArgumentOfLatitude: A1,
  getGeocentricEclipticLongitude: j2,
  getGeocentricEclipticLatitude: tn,
  getGeocentricEclipticCoordinates: Ne,
  getGeocentricEquatorialCoordinates: xe,
  getApparentGeocentricEquatorialCoordinates: me,
  getRadiusVectorInKilometer: yt,
  radiusVectorToHorizontalParallax: en,
  horizontalParallaxToRadiusVector: B4,
  getMeanLongitudeAscendingNode: nn,
  getMeanLongitudePerigee: O4,
  trueLongitudeOfAscendingNode: y4,
  horizontalParallax: E4,
  getPhaseAngle: cn,
  getIlluminatedFraction: R4,
  getEquatorialHorizontalParallax: b4,
  getGeocentricSemiDiameter: P4,
  getPositionAngleOfTheBrightLimb: S4,
  getTimeOfMeanPhase: sn,
  getAge: an,
  getAgeName: G4,
  getTopocentricRadialVelocity: V4
}, U4 = function() {
  return [
    //L2   L3   L4  L5  L6  L7  L8  Ldash D   Mdash F   xsin      xsint xcos    xcost ysin   ysint ycos     ycost zsin   zsint zcos    zcost
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1719914, -2, -25, 0, 25, -13, 1578089, 156, 10, 32, 684185, -358],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6434, 141, 28007, -107, 25697, -95, -5904, -130, 11141, -48, -2559, -55],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 715, 0, 0, 0, 6, 0, -657, 0, -15, 0, -282, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 715, 0, 0, 0, 0, 0, -656, 0, 0, 0, -285, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 486, -5, -236, -4, -216, -4, -446, 5, -94, 0, -193, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 159, 0, 0, 0, 2, 0, -147, 0, -6, 0, -61, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, -59, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 39, 0, 0, 0, 0, 0, -36, 0, 0, 0, -16, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 33, 0, -10, 0, -9, 0, -30, 0, -5, 0, -13, 0],
    [0, 2, 0, -1, 0, 0, 0, 0, 0, 0, 0, 31, 0, 1, 0, 1, 0, -28, 0, 0, 0, -12, 0],
    [0, 3, -8, 3, 0, 0, 0, 0, 0, 0, 0, 8, 0, -28, 0, 25, 0, 8, 0, 11, 0, 3, 0],
    [0, 5, -8, 3, 0, 0, 0, 0, 0, 0, 0, 8, 0, -28, 0, -25, 0, -8, 0, -11, 0, -3, 0],
    [2, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 0, -19, 0, 0, 0, -8, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -19, 0, 0, 0, 0, 0, 17, 0, 0, 0, 8, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 0, -16, 0, 0, 0, -7, 0],
    [0, 1, 0, -2, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 15, 0, 1, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 16, 0, 0, 0, 1, 0, -15, 0, -3, 0, -6, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 11, 0, -1, 0, -1, 0, -10, 0, -1, 0, -5, 0],
    [2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -11, 0, -10, 0, 0, 0, -4, 0, 0, 0],
    [0, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, -11, 0, -2, 0, -2, 0, 9, 0, -1, 0, 4, 0],
    [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 0, -8, 0, -8, 0, 6, 0, -3, 0, 3, 0],
    [0, 3, 0, -2, 0, 0, 0, 0, 0, 0, 0, -10, 0, 0, 0, 0, 0, 9, 0, 0, 0, 4, 0],
    [1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0, -9, 0, 0, 0, -4, 0],
    [2, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, -9, 0, 0, 0, 0, 0, -8, 0, 0, 0, -4, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, -9, 0, -8, 0, 0, 0, -3, 0, 0, 0],
    [2, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -9, 0, 8, 0, 0, 0, 3, 0, 0, 0],
    [0, 3, -2, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, -8, 0, 0, 0, -3, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 2, -1, 0, 8, 0, 0, 0, 0, 0, -7, 0, 0, 0, -3, 0],
    [8, -12, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -7, 0, -6, 0, 4, 0, -3, 0, 2, 0],
    [8, -14, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, 0, -7, 0, 6, 0, -4, 0, 3, 0, -2, 0],
    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, -6, 0, -5, 0, -4, 0, 5, 0, -2, 0, 2, 0],
    [3, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, -2, 0, -7, 0, 1, 0, -4, 0],
    [0, 2, 0, -2, 0, 0, 0, 0, 0, 0, 0, 4, 0, -6, 0, -5, 0, -4, 0, -2, 0, -2, 0],
    [3, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7, 0, -6, 0, 0, 0, -3, 0, 0, 0],
    [0, 2, -2, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, -5, 0, -4, 0, -5, 0, -2, 0, -2, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, -2, 0, 0, 5, 0, 0, 0, 0, 0, -5, 0, 0, 0, -2, 0]
  ].map((t) => ({
    L2: t[0],
    L3: t[1],
    L4: t[2],
    L5: t[3],
    L6: t[4],
    L7: t[5],
    L8: t[6],
    Ldash: t[7],
    D: t[8],
    Mdash: t[9],
    F: t[10],
    xsin: t[11],
    xsint: t[12],
    xcos: t[13],
    xcost: t[14],
    ysin: t[15],
    ysint: t[16],
    ycos: t[17],
    ycost: t[18],
    zsin: t[19],
    zsint: t[20],
    zcos: t[21],
    zcost: t[22]
  }));
};
function rn(t) {
  const e = G(t), n = U4(), i = 3.1761467 + 1021.3285546 * e, o = 1.7534703 + 628.3075849 * e, s = 6.2034809 + 334.0612431 * e, a = 0.5995465 + 52.9690965 * e, f = 0.8740168 + 21.3299095 * e, r = 5.4812939 + 7.4781599 * e, g = 5.3118863 + 3.8133036 * e, M = 3.8103444 + 8399.6847337 * e, d = 5.1984667 + 7771.3771486 * e, T = 2.3555559 + 8328.6914289 * e, l = 1.6279052 + 8433.4661601 * e;
  return n.reduce((h, u) => {
    const E = u.L2 * i + u.L3 * o + u.L4 * s + u.L5 * a + u.L6 * f + u.L7 * r + u.L8 * g + u.Ldash * M + u.D * d + u.Mdash * T + u.F * l;
    return {
      X: h.X + u.xsin + u.xsint * e * Math.sin(E) + u.xcos + u.xcost * e * Math.cos(E),
      Y: h.Y + u.ysin + u.ysint * e * Math.sin(E) + u.ycos + u.ycost * e * Math.cos(E),
      Z: h.Z + u.zsin + u.zsint * e * Math.sin(E) + u.zcos + u.zcost * e * Math.cos(E)
    };
  }, { X: 0, Y: 0, Z: 0 });
}
function z4(t, e) {
  const n = e.rightAscension * D, i = e.declination * D, o = Math.cos(n), s = Math.sin(n), a = Math.cos(i), f = Math.sin(i), r = rn(t), g = 17314463350, d = (r.Y * o - r.X * s) / (g * a), T = r.X * o + r.Y * s, l = r.Z * a, c = (T * f - l) / g;
  return {
    DeltaRightAscension: d * m * 3600,
    // to obtain units of ArcSecond
    DeltaDeclination: -1 * c * m * 3600
    // to obtain units of ArcSecond
  };
}
function Y4(t, e) {
  let n, i;
  const o = e.rightAscension * D, s = e.declination * D, a = Pe(t), f = h2, r = we(t) * D, g = te(t) * D, M = j.getGeometricEclipticLongitude(t) * D, d = Math.cos(r), T = Math.sin(r), l = Math.cos(g), c = Math.tan(g), h = Math.cos(M), u = Math.sin(M), E = Math.cos(o), _ = Math.sin(o), b = Math.cos(s), N = Math.sin(s), z = E * h * l + _ * u, F = E * d * l + _ * T;
  n = -1 * f * (z / b) + a * f * F / b;
  const X = c * b - _ * N, nt = h * l * X + E * N * u, v = d * l * X + E * N * T;
  return i = -1 * f * nt + a * f * v, { DeltaRightAscension: n, DeltaDeclination: i };
}
function H4(t, e) {
  const n = Pe(t), i = we(t), o = h2, s = j.getGeometricEclipticLongitude(t) * D, a = e.longitude * D, f = e.latitude * D, r = -1 * o * Math.cos(s - a), g = n * o * Math.cos(i - a), M = (r + g) / Math.cos(f) / 3600, d = -1 * o * Math.sin(f), T = Math.sin(s - a), l = n * Math.sin(i - a), c = d * (T - l) / 3600;
  return { DeltaLongitude: M, DeltaLatitude: c };
}
function k4(t, e) {
  const n = j1(t) * D, i = Ge(t), o = qe(t), s = e.rightAscension * D, a = e.declination * D, f = Math.cos(n), r = Math.sin(n), g = Math.cos(s), M = Math.sin(s), d = Math.tan(a), T = f + r * M * d, l = o * T - i * g * d, c = o * r * g + i * M;
  return { DeltaRightAscension: l, DeltaDeclination: c };
}
const p = {
  getEclipticLongitude: k2,
  getEclipticLongitudinalRotation: A4,
  getEclipticLatitude: W2,
  getEclipticCoordinates: J4,
  getRadiusVector: K2,
  getFlatteningCorrections: X2,
  getMeanAnomaly: m4,
  getEccentricity: Pe,
  getLongitudeOfPerihelion: we,
  getNutationInLongitude: qe,
  getNutationInObliquity: Ge,
  getMeanObliquityOfEcliptic: j1,
  getTrueObliquityOfEcliptic: te,
  getEarthVelocity: rn,
  getAccurateAnnualEquatorialAberration: z4,
  getAnnualEclipticAberration: H4,
  getAnnualEquatorialAberration: Y4,
  getNutationEquatorialAberration: k4,
  Moon: ot
}, W4 = function() {
  return [
    [440250710, 0, 0],
    [40989415, 1.48302034, 26087.90314157],
    [5046294, 4.4778549, 52175.8062831],
    [855347, 1.165203, 78263.709425],
    [165590, 4.119692, 104351.612566],
    [34562, 0.77931, 130439.51571],
    [7583, 3.7135, 156527.4188],
    [3560, 1.512, 1109.3786],
    [1803, 4.1033, 5661.332],
    [1726, 0.3583, 182615.322],
    [1590, 2.9951, 25028.5212],
    [1365, 4.5992, 27197.2817],
    [1017, 0.8803, 31749.2352],
    [714, 1.541, 24978.525],
    [644, 5.303, 21535.95],
    [451, 6.05, 51116.424],
    [404, 3.282, 208703.225],
    [352, 5.242, 20426.571],
    [345, 2.792, 15874.618],
    [343, 5.765, 955.6],
    [339, 5.863, 25558.212],
    [325, 1.337, 53285.185],
    [273, 2.495, 529.691],
    [264, 3.917, 57837.138],
    [260, 0.987, 4551.953],
    [239, 0.113, 1059.382],
    [235, 0.267, 11322.664],
    [217, 0.66, 13521.751],
    [209, 2.092, 47623.853],
    [183, 2.629, 27043.503],
    [182, 2.434, 25661.305],
    [176, 4.536, 51066.428],
    [173, 2.452, 24498.83],
    [142, 3.36, 37410.567],
    [138, 0.291, 10213.286],
    [125, 3.721, 39609.655],
    [118, 2.781, 77204.327],
    [106, 4.206, 19804.827]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, K4 = function() {
  return [
    [2608814706223, 0, 0],
    [1126008, 6.2170397, 26087.9031416],
    [303471, 3.055655, 52175.806283],
    [80538, 6.10455, 78263.70942],
    [21245, 2.83532, 104351.61257],
    [5592, 5.8268, 130439.5157],
    [1472, 2.5185, 156527.4188],
    [388, 5.48, 182615.322],
    [352, 3.052, 1109.379],
    [103, 2.149, 208703.225],
    [94, 6.12, 27197.28],
    [91, 0, 24978.52],
    [52, 5.62, 5661.33],
    [44, 4.57, 25028.52],
    [28, 3.04, 51066.43],
    [27, 5.09, 234791.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, X4 = function() {
  return [
    [53050, 0, 0],
    [16904, 4.69072, 26087.90314],
    [7397, 1.3474, 52175.8063],
    [3018, 4.4564, 78263.7094],
    [1107, 1.2623, 104351.6126],
    [378, 4.32, 130439.516],
    [123, 1.069, 156527.419],
    [39, 4.08, 182615.32],
    [15, 4.63, 1109.38],
    [12, 0.79, 208703.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Q4 = function() {
  return [
    [188, 0.035, 52175.806],
    [142, 3.125, 26087.903],
    [97, 3, 78263.71],
    [44, 6.02, 104351.61],
    [35, 0, 0],
    [18, 2.78, 130439.52],
    [7, 5.82, 156527.42],
    [3, 2.57, 182615.32]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Z4 = function() {
  return [
    [114, 3.1416, 0],
    [3, 2.03, 26087.9],
    [2, 1.42, 78263.71],
    [2, 4.5, 52175.81],
    [1, 4.5, 104351.61],
    [1, 1.27, 130439.52]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, v4 = function() {
  return [
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, j4 = function() {
  return [
    [11737529, 1.98357499, 26087.90314157],
    [2388077, 5.0373896, 52175.8062831],
    [1222840, 3.1415927, 0],
    [543252, 1.796444, 78263.709425],
    [129779, 4.832325, 104351.612566],
    [31867, 1.58088, 130439.51571],
    [7963, 4.6097, 156527.4188],
    [2014, 1.3532, 182615.322],
    [514, 4.378, 208703.225],
    [209, 2.02, 24978.525],
    [208, 4.918, 27197.282],
    [132, 1.119, 234791.128],
    [121, 1.813, 53285.185],
    [100, 5.657, 20426.571]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, t5 = function() {
  return [
    [429151, 3.501698, 26087.903142],
    [146234, 3.141593, 0],
    [22675, 0.01515, 52175.80628],
    [10895, 0.4854, 78263.70942],
    [6353, 3.4294, 104351.6126],
    [2496, 0.1605, 130439.5157],
    [860, 3.185, 156527.419],
    [278, 6.21, 182615.322],
    [86, 2.95, 208703.23],
    [28, 0.29, 27197.28],
    [26, 5.98, 234791.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, e5 = function() {
  return [
    [11831, 4.79066, 26087.90314],
    [1914, 0, 0],
    [1045, 1.2122, 52175.8063],
    [266, 4.434, 78263.709],
    [170, 1.623, 104351.613],
    [96, 4.8, 130439.52],
    [45, 1.61, 156527.42],
    [18, 4.67, 182615.32],
    [7, 1.43, 208703.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, n5 = function() {
  return [
    [235, 0.354, 26087.903],
    [161, 0, 0],
    [19, 4.36, 52175.81],
    [6, 2.51, 78263.71],
    [5, 6.14, 104351.61],
    [3, 3.12, 130439.52],
    [2, 6.27, 156527.42]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, o5 = function() {
  return [
    [4, 1.75, 26087.9],
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, i5 = function() {
  return [
    [39528272, 0, 0],
    [7834132, 6.1923372, 26087.9031416],
    [795526, 2.959897, 52175.806283],
    [121282, 6.010642, 78263.709425],
    [21922, 2.7782, 104351.61257],
    [4354, 5.8289, 130439.5157],
    [918, 2.597, 156527.419],
    [290, 1.424, 25028.521],
    [260, 3.028, 27197.282],
    [202, 5.647, 182615.322],
    [201, 5.592, 31749.235],
    [142, 6.253, 24978.525],
    [100, 3.734, 21535.95]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, c5 = function() {
  return [
    [217348, 4.656172, 26087.903142],
    [44142, 1.42386, 52175.80628],
    [10094, 4.47466, 78263.70942],
    [2433, 1.2423, 104351.6126],
    [1624, 0, 0],
    [604, 4.293, 130439.516],
    [153, 1.061, 156527.419],
    [39, 4.11, 182615.32]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, s5 = function() {
  return [
    [3118, 3.0823, 26087.9031],
    [1245, 6.1518, 52175.8063],
    [425, 2.926, 78263.709],
    [136, 5.98, 104351.613],
    [42, 2.75, 130439.52],
    [22, 3.14, 0],
    [13, 5.8, 156527.42]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, a5 = function() {
  return [
    [33, 1.68, 26087.9],
    [24, 4.63, 52175.81],
    [12, 1.39, 78263.71],
    [5, 4.44, 104351.61],
    [2, 1.21, 130439.52]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function J1(t) {
  const e = I(t), n = W4(), i = K4(), o = X4(), s = Q4(), a = Z4(), f = v4(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), c = r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5);
  return L(c / 1e8 * m);
}
function m1(t) {
  const e = I(t), n = j4(), i = t5(), o = e5(), s = n5(), a = o5(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function wt(t) {
  const e = I(t), n = i5(), i = c5(), o = s5(), s = a5(), a = n.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), f = i.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), r = o.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), g = s.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0);
  return (a + f * e + r * Math.pow(e, 2) + g * Math.pow(e, 3)) / 1e8;
}
function un(t) {
  return {
    longitude: J1(t),
    latitude: m1(t)
  };
}
function r5(t, e = R.Mean) {
  return P(
    un(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const u5 = {
  equatorialRadius: 2440.53,
  meanRadius: 2439.4,
  mass: 0.330114,
  bulkDensity: 5.4291,
  siderealRotationPeriod: 58.6462,
  siderealOrbitPeriod: 0.2408467,
  visualMagnitude: -0.6,
  geometricAlbedo: 0.106,
  equatorialGravity: 3.7,
  escapeVelocity: 4.25
}, qt = {
  semiMajorAxis: [0.38709831, 0, 0, 0],
  eccentricity: [0.20563175, 20407e-9, -283e-10, -18e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [252.250906, 149474.0722491, 3035e-7, 18e-9],
    inclination: [7.004986, 18215e-7, -181e-7, 56e-9],
    longitudeOfAscendingNode: [48.330893, 1.1861883, 17542e-8, 215e-9],
    longitudeOfPerihelion: [77.456119, 1.5564776, 29544e-8, 9e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [252.250906, 149472.6746358, -536e-8, 2e-9],
    inclination: [7.004986, -59516e-7, 8e-7, 43e-9],
    longitudeOfAscendingNode: [48.330893, -0.1254227, -8833e-8, -2e-7],
    longitudeOfPerihelion: [77.456119, 0.1588643, -1342e-8, -7e-9]
  }
};
function ln(t) {
  const n = 4.15201 * (at(t) - 2000.12);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function l5(t) {
  return 2451590257e-3 + 87.96934963 * (ln(t) + 0.5);
}
function f5(t) {
  return 2451590257e-3 + 87.96934963 * ln(t);
}
function D5(t) {
  return Math.atan(1 / (t * W1)) * 3600 * 180 / Math.PI;
}
function g5(t) {
  return 1 / Math.tan(t / 3600 * Math.PI / 180) / W1;
}
function fn(t) {
  return t * W1;
}
function Dn(t) {
  return t / W1;
}
function h5(t) {
  return fn(t) * k1;
}
function M5(t) {
  return Dn(t / k1);
}
function d5(t) {
  return t * M2;
}
function T5(t) {
  return t / M2;
}
function p5(t, e = 0) {
  return 5 * Math.log10(t) - 5 + e;
}
function A5(t, e = 0) {
  return Math.pow(10, (t + 5 - e) / 5);
}
function J5(t, e = d2) {
  return t * e / M1;
}
function m5(t, e = d2) {
  return t / e * M1;
}
function h1(t) {
  return t * 0.0057755183;
}
const Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAstronomicalUnitsFromParsecs: fn,
  getDistanceModulusFromParsecs: p5,
  getKilometersFromParsecs: h5,
  getLightTimeFromDistance: h1,
  getLightYearsFromParsecs: d5,
  getMegaparsecsFromRedshift: m5,
  getParallaxFromParsecs: D5,
  getParsecsFromAstronomicalUnits: Dn,
  getParsecsFromDistanceModulus: A5,
  getParsecsFromKilometers: M5,
  getParsecsFromLightYears: T5,
  getParsecsFromParallax: g5,
  getRedshiftFromMegaparsecs: J5
}, Symbol.toStringTag, { value: "Module" }));
function H1(t, e, n, i) {
  const o = {
    L: p.getEclipticLongitude(t, J.MeanOfTheDate) * D,
    B: p.getEclipticLatitude(t, J.MeanOfTheDate) * D,
    R: p.getRadiusVector(t)
  };
  let s = !0, a = !1, f = { L: 0, B: 0, R: 0 };
  const r = {
    x: 0,
    y: 0,
    z: 0,
    Delta: 0,
    tau: 0,
    l: 0,
    b: 0,
    r: 0
  };
  let g = t;
  for (; s; ) {
    let M = {
      L: e(g) * D,
      B: n(g) * D,
      R: i(g)
    };
    const d = {
      L: o.L,
      B: o.B,
      R: o.R
    };
    a ? (s = Math.abs(M.L - f.L) > 1e-5 || Math.abs(M.B - f.B) > 1e-5 || Math.abs(M.R - f.R) > 1e-6, f = { ...M }) : a = !0, s && (r.x = M.R * Math.cos(M.B) * Math.cos(M.L) - d.R * Math.cos(d.B) * Math.cos(d.L), r.y = M.R * Math.cos(M.B) * Math.sin(M.L) - d.R * Math.cos(d.B) * Math.sin(d.L), r.z = M.R * Math.sin(M.B) - d.R * Math.sin(d.B), r.Delta = Math.sqrt(
      r.x * r.x + r.y * r.y + r.z * r.z
    ), r.tau = h1(r.Delta)), r.l = M.L, r.b = M.B, r.r = M.R, g = t - r.tau;
  }
  return r;
}
function dt(t, e, n, i) {
  return H1(
    t,
    e,
    n,
    i
  ).Delta;
}
function rt(t, e, n, i) {
  const o = H1(
    t,
    e,
    n,
    i
  );
  return {
    longitude: L(Math.atan2(o.y, o.x) * m),
    latitude: W(Math.atan2(o.z, Math.sqrt(o.x * o.x + o.y * o.y)) * m)
  };
}
function Tt(t, e, n, i) {
  const o = rt(
    t,
    e,
    n,
    i
  ), s = p.getAnnualEclipticAberration(t, o);
  o.longitude = o.longitude + s.DeltaLongitude / 3600, o.latitude = o.latitude + s.DeltaLatitude / 3600;
  const a = Be(t, o.longitude, o.latitude);
  o.longitude = o.longitude + a;
  const f = Oe(t, o.longitude);
  o.latitude = o.latitude + f;
  const r = p.getNutationInLongitude(t);
  return o.longitude = o.longitude + r / 3600, o;
}
function Gt(t, e) {
  return 42.1219 * Math.sqrt(1 / t - 1 / (2 * e));
}
function _t(t, e) {
  return 29.7847 / Math.sqrt(e) * Math.sqrt((1 + t) / (1 - t));
}
function It(t, e) {
  return 29.7847 / Math.sqrt(e) * Math.sqrt((1 - t) / (1 + t));
}
function Nt(t, e) {
  const n = e * Math.sqrt(1 - t * t);
  return Math.PI * (3 * (e + n) - Math.sqrt((e + 3 * n) * (3 * e + n)));
}
function pt(t, e, n) {
  const i = Q1(t), o = n(i);
  return Se(t, o, e, it);
}
function At(t, e, n) {
  const i = Q1(t), o = n(i - 1), s = n(i), a = n(i + 1);
  return N2(t, [o, s, a], e, it, 1);
}
function s1(t, e) {
  const n = G(t);
  return e[0] + e[1] * n + e[2] * n * n + e[3] * n * n * n;
}
function xt(t, e) {
  return s1(t, e);
}
function Ft(t, e) {
  return s1(t, e);
}
function Vt(t, e) {
  return s1(t, e);
}
function Ut(t, e) {
  return s1(t, e);
}
function zt(t, e) {
  return s1(t, e);
}
function Yt(t, e) {
  return s1(t, e);
}
function C5(t, e = J.MeanOfTheDate) {
  return xt(t, qt[e].meanLongitude);
}
function C1(t) {
  return Ft(t, qt.semiMajorAxis);
}
function ee(t) {
  return Vt(t, qt.eccentricity);
}
function $5(t, e = J.MeanOfTheDate) {
  return Ut(t, qt[e].inclination);
}
function L5(t, e = J.MeanOfTheDate) {
  return zt(t, qt[e].longitudeOfAscendingNode);
}
function E5(t, e = J.MeanOfTheDate) {
  return Yt(t, qt[e].longitudeOfPerihelion);
}
function ne(t) {
  return dt(t, J1, m1, wt);
}
function gn(t) {
  return rt(t, J1, m1, wt);
}
function hn(t) {
  return Tt(t, J1, m1, wt);
}
function Fe(t, e = R.Mean) {
  return P(
    gn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function B5(t) {
  return P(
    hn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function O5(t) {
  return Gt(wt(t), C1(t));
}
function y5(t) {
  return _t(ee(t), C1(t));
}
function S5(t) {
  return It(ee(t), C1(t));
}
function R5(t) {
  return Nt(ee(t), C1(t));
}
function b5(t, e) {
  return pt(t, e, Fe);
}
function P5(t, e) {
  return At(t, e, Fe);
}
function Ve(t) {
  const e = wt(t), n = p.getRadiusVector(t), i = ne(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function w5(t) {
  const e = Ve(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function q5(t) {
  const e = wt(t), n = ne(t), i = Ve(t);
  return -0.42 + 5 * Math.log10(e * n) + 0.038 * i - 273e-6 * Math.pow(i, 2) + 2e-6 * Math.pow(i, 3);
}
function Mn(t) {
  return 3.36 / ne(t);
}
function G5(t) {
  return Mn(t);
}
const Ue = {
  // Heliocentric coordinates
  getEclipticLongitude: J1,
  getEclipticLatitude: m1,
  getEclipticCoordinates: un,
  getEquatorialCoordinates: r5,
  getRadiusVector: wt,
  // Geocentric coordinates
  getGeocentricDistance: ne,
  getGeocentricEclipticCoordinates: gn,
  getApparentGeocentricEclipticCoordinates: hn,
  getGeocentricEquatorialCoordinates: Fe,
  getApparentGeocentricEquatorialCoordinates: B5,
  // Planet elliptical properties
  getInstantaneousVelocity: O5,
  getVelocityAtPerihelion: y5,
  getVelocityAtAphelion: S5,
  getLengthOfEllipse: R5,
  getRiseTransitSet: b5,
  getAccurateRiseTransitSet: P5,
  // Planet orbital properties
  getMeanLongitude: C5,
  getEccentricity: ee,
  getInclination: $5,
  getLongitudeOfAscendingNode: L5,
  getLongitudeOfPerihelion: E5,
  getSemiMajorAxis: C1,
  // Planet base properties
  getAphelion: l5,
  getPerihelion: f5,
  getPhaseAngle: Ve,
  getIlluminatedFraction: w5,
  getMagnitude: q5,
  getEquatorialSemiDiameter: Mn,
  getPolarSemiDiameter: G5,
  // Fixed values
  constants: u5,
  orbitalElements: qt
}, _5 = function() {
  return [
    [317614667, 0, 0],
    [1353968, 5.5931332, 10213.2855462],
    [89892, 5.3065, 20426.57109],
    [5477, 4.4163, 7860.4194],
    [3456, 2.6996, 11790.6291],
    [2372, 2.9938, 3930.2097],
    [1664, 4.2502, 1577.3435],
    [1438, 4.1575, 9683.5946],
    [1317, 5.1867, 26.2983],
    [1201, 6.1536, 30639.8566],
    [769, 0.816, 9437.763],
    [761, 1.95, 529.691],
    [708, 1.065, 775.523],
    [585, 3.998, 191.448],
    [500, 4.123, 15720.839],
    [429, 3.586, 19367.189],
    [327, 5.677, 5507.553],
    [326, 4.591, 10404.734],
    [232, 3.163, 9153.904],
    [180, 4.653, 1109.379],
    [155, 5.57, 19651.048],
    [128, 4.226, 20.775],
    [128, 0.962, 5661.332],
    [106, 1.537, 801.821]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, I5 = function() {
  return [
    [1021352943053, 0, 0],
    [95708, 2.46424, 10213.28555],
    [14445, 0.51625, 20426.57109],
    [213, 1.795, 30639.857],
    [174, 2.655, 26.298],
    [152, 6.106, 1577.344],
    [82, 5.7, 191.45],
    [70, 2.68, 9437.76],
    [52, 3.6, 775.52],
    [38, 1.03, 529.69],
    [30, 1.25, 5507.55],
    [25, 6.11, 10404.73]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, N5 = function() {
  return [
    [54127, 0, 0],
    [3891, 0.3451, 10213.2855],
    [1338, 2.0201, 20426.5711],
    [24, 2.05, 26.3],
    [19, 3.54, 30639.86],
    [10, 3.97, 775.52],
    [7, 1.52, 1577.34],
    [6, 1, 191.45]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, x5 = function() {
  return [
    [136, 4.804, 10213.286],
    [78, 3.67, 20426.57],
    [26, 0, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, F5 = function() {
  return [
    [114, 3.1416, 0],
    [3, 5.21, 20426.57],
    [2, 2.51, 10213.29]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, V5 = function() {
  return [
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, U5 = function() {
  return [
    [5923638, 0.2670278, 10213.2855462],
    [40108, 1.14737, 20426.57109],
    [32815, 3.14159, 0],
    [1011, 1.0895, 30639.8566],
    [149, 6.254, 18073.705],
    [138, 0.86, 1577.344],
    [130, 3.672, 9437.763],
    [120, 3.705, 2352.866],
    [108, 4.539, 22003.915]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, z5 = function() {
  return [
    [513348, 1.803643, 10213.285546],
    [4380, 3.3862, 20426.5711],
    [199, 0, 0],
    [197, 2.53, 30639.857]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Y5 = function() {
  return [
    [22378, 3.38509, 10213.28555],
    [282, 0, 0],
    [173, 5.256, 20426.571],
    [27, 3.87, 30639.86]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, H5 = function() {
  return [
    [647, 4.992, 10213.286],
    [20, 3.14, 0],
    [6, 0.77, 20426.57],
    [3, 5.44, 30639.86]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, k5 = function() {
  return [
    [14, 0.32, 10213.29]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, W5 = function() {
  return [
    [72334821, 0, 0],
    [489824, 4.021518, 10213.285546],
    [1658, 4.9021, 20426.5711],
    [1632, 2.8455, 7860.4194],
    [1378, 1.1285, 11790.6291],
    [498, 2.587, 9683.595],
    [374, 1.423, 3930.21],
    [264, 5.529, 9437.763],
    [237, 2.551, 15720.839],
    [222, 2.013, 19367.189],
    [126, 2.728, 1577.344],
    [119, 3.02, 10404.734]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, K5 = function() {
  return [
    [34551, 0.89199, 10213.28555],
    [234, 1.772, 20426.571],
    [234, 3.142, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, X5 = function() {
  return [
    [1407, 5.0637, 10213.2855],
    [16, 5.47, 20426.57],
    [13, 0, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Q5 = function() {
  return [
    [50, 3.22, 10213.29]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Z5 = function() {
  return [
    [1, 0.92, 10213.29]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function $1(t) {
  const e = I(t), n = _5(), i = I5(), o = N5(), s = x5(), a = F5(), f = V5(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), c = r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5);
  return L(c / 1e8 * m);
}
function L1(t) {
  const e = I(t), n = U5(), i = z5(), o = Y5(), s = H5(), a = k5(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function Ht(t) {
  const e = I(t), n = W5(), i = K5(), o = X5(), s = Q5(), a = Z5(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0);
  return (f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4)) / 1e8;
}
function dn(t) {
  return {
    longitude: $1(t),
    latitude: L1(t)
  };
}
function v5(t, e = R.Mean) {
  return P(
    dn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const j5 = {
  equatorialRadius: 6051.8,
  meanRadius: 6051.8,
  mass: 4.86747,
  bulkDensity: 5.243,
  siderealRotationPeriod: -243.018,
  // negative
  siderealOrbitPeriod: 0.61519726,
  visualMagnitude: -4.47,
  geometricAlbedo: 0.65,
  equatorialGravity: 8.87,
  escapeVelocity: 10.36
}, kt = {
  semiMajorAxis: [0.72332982, 0, 0, 0],
  eccentricity: [677192e-8, -47765e-9, 981e-10, 46e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [181.979801, 58519.2130302, 31014e-8, 15e-9],
    inclination: [3.394662, 10037e-7, -88e-8, -7e-9],
    longitudeOfAscendingNode: [76.67992, 0.9011206, 40618e-8, -93e-9],
    longitudeOfPerihelion: [131.563703, 1.4022288, -107618e-8, -5678e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [181.979801, 58517.815676, 165e-8, -2e-9],
    inclination: [3.394662, -8568e-7, -3244e-8, 9e-8],
    longitudeOfAscendingNode: [76.67992, -0.2780134, -14257e-8, -164e-9],
    longitudeOfPerihelion: [131.563703, 48746e-7, -138467e-8, -5695e-9]
  }
};
function Tn(t) {
  const n = 1.62549 * (at(t) - 2000.53);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function t3(t) {
  const e = Tn(t) + 0.5;
  return 2451738233e-3 + 224.7008188 * e - 327e-10 * Math.pow(e, 2);
}
function e3(t) {
  const e = Tn(t);
  return 2451738233e-3 + 224.7008188 * e - 327e-10 * Math.pow(e, 2);
}
function n3(t, e = J.MeanOfTheDate) {
  return xt(t, kt[e].meanLongitude);
}
function E1(t) {
  return Ft(t, kt.semiMajorAxis);
}
function oe(t) {
  return Vt(t, kt.eccentricity);
}
function o3(t, e = J.MeanOfTheDate) {
  return Ut(t, kt[e].inclination);
}
function i3(t, e = J.MeanOfTheDate) {
  return zt(t, kt[e].longitudeOfAscendingNode);
}
function c3(t, e = J.MeanOfTheDate) {
  return Yt(t, kt[e].longitudeOfPerihelion);
}
function ie(t) {
  return dt(t, $1, L1, Ht);
}
function pn(t) {
  return rt(t, $1, L1, Ht);
}
function An(t) {
  return Tt(t, $1, L1, Ht);
}
function ze(t, e = R.Mean) {
  return P(
    pn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function s3(t) {
  return P(
    An(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function a3(t) {
  return Gt(Ht(t), E1(t));
}
function r3(t) {
  return _t(oe(t), E1(t));
}
function u3(t) {
  return It(oe(t), E1(t));
}
function l3(t) {
  return Nt(oe(t), E1(t));
}
function f3(t, e) {
  return pt(t, e, ze);
}
function D3(t, e) {
  return At(t, e, ze);
}
function Ye(t) {
  const e = Ht(t), n = p.getRadiusVector(t), i = ie(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function g3(t) {
  const e = Ye(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function h3(t) {
  const e = Ht(t), n = ie(t), i = Ye(t);
  return -4.4 + 5 * Math.log10(e * n) + 9e-4 * i + 239e-6 * Math.pow(i, 2) - 65e-8 * Math.pow(i, 3);
}
function Jn(t) {
  return 8.34 / ie(t);
}
function M3(t) {
  return Jn(t);
}
const He = {
  // Heliocentric coordinates
  getEclipticLongitude: $1,
  getEclipticLatitude: L1,
  getEclipticCoordinates: dn,
  getEquatorialCoordinates: v5,
  getRadiusVector: Ht,
  // Geocentric coordinates
  getGeocentricDistance: ie,
  getGeocentricEclipticCoordinates: pn,
  getApparentGeocentricEclipticCoordinates: An,
  getGeocentricEquatorialCoordinates: ze,
  getApparentGeocentricEquatorialCoordinates: s3,
  // Planet elliptical properties
  getInstantaneousVelocity: a3,
  getVelocityAtPerihelion: r3,
  getVelocityAtAphelion: u3,
  getLengthOfEllipse: l3,
  getRiseTransitSet: f3,
  getAccurateRiseTransitSet: D3,
  // Planet orbital properties
  getMeanLongitude: n3,
  getEccentricity: oe,
  getInclination: o3,
  getLongitudeOfAscendingNode: i3,
  getLongitudeOfPerihelion: c3,
  getSemiMajorAxis: E1,
  // Planet base properties
  getAphelion: t3,
  getPerihelion: e3,
  getPhaseAngle: Ye,
  getIlluminatedFraction: g3,
  getMagnitude: h3,
  getEquatorialSemiDiameter: Jn,
  getPolarSemiDiameter: M3,
  // Fixed values
  constants: j5,
  orbitalElements: kt
}, d3 = function() {
  return [
    [620347712, 0, 0],
    [18656368, 5.050371, 3340.6124267],
    [1108217, 5.4009984, 6681.2248534],
    [91798, 5.75479, 10021.83728],
    [27745, 5.9705, 3.52312],
    [12316, 0.84956, 2810.92146],
    [10610, 2.93959, 2281.2305],
    [8927, 4.157, 0.0173],
    [8716, 6.1101, 13362.4497],
    [7775, 3.3397, 5621.8429],
    [6798, 0.3646, 398.149],
    [4161, 0.2281, 2942.4634],
    [3575, 1.6619, 2544.3144],
    [3075, 0.857, 191.4483],
    [2938, 6.0789, 0.0673],
    [2628, 0.6481, 3337.0893],
    [2580, 0.03, 3344.1355],
    [2389, 5.039, 796.298],
    [1799, 0.6563, 529.691],
    [1546, 2.9158, 1751.5395],
    [1528, 1.1498, 6151.5339],
    [1286, 3.068, 2146.1654],
    [1264, 3.6228, 5092.152],
    [1025, 3.6933, 8962.4553],
    [892, 0.183, 16703.062],
    [859, 2.401, 2914.014],
    [833, 4.495, 3340.63],
    [833, 2.464, 3340.595],
    [749, 3.822, 155.42],
    [724, 0.675, 3738.761],
    [713, 3.663, 1059.382],
    [655, 0.489, 3127.313],
    [636, 2.922, 8432.764],
    [553, 4.475, 1748.016],
    [550, 3.81, 0.98],
    [472, 3.625, 1194.447],
    [426, 0.554, 6283.076],
    [415, 0.497, 213.299],
    [312, 0.999, 6677.702],
    [307, 0.381, 6684.748],
    [302, 4.486, 3532.061],
    [299, 2.783, 6254.627],
    [293, 4.221, 20.775],
    [284, 5.769, 3149.164],
    [281, 5.882, 1349.867],
    [274, 0.542, 3340.545],
    [274, 0.134, 3340.68],
    [239, 5.372, 4136.91],
    [236, 5.755, 3333.499],
    [231, 1.282, 3870.303],
    [221, 3.505, 382.897],
    [204, 2.821, 1221.849],
    [193, 3.357, 3.59],
    [189, 1.491, 9492.146],
    [179, 1.006, 951.718],
    [174, 2.414, 553.569],
    [172, 0.439, 5486.778],
    [160, 3.949, 4562.461],
    [144, 1.419, 135.065],
    [140, 3.326, 2700.715],
    [138, 4.301, 7.114],
    [131, 4.045, 12303.068],
    [128, 2.208, 1592.596],
    [128, 1.807, 5088.629],
    [117, 3.128, 7903.073],
    [113, 3.701, 1589.073],
    [110, 1.052, 242.729],
    [105, 0.785, 8827.39],
    [100, 3.243, 11773.377]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, T3 = function() {
  return [
    [334085627474, 0, 0],
    [1458227, 3.6042605, 3340.6124267],
    [164901, 3.926313, 6681.224853],
    [19963, 4.26594, 10021.83728],
    [3452, 4.7321, 3.5231],
    [2485, 4.6128, 13362.4497],
    [842, 4.459, 2281.23],
    [538, 5.016, 398.149],
    [521, 4.994, 3344.136],
    [433, 2.561, 191.448],
    [430, 5.316, 155.42],
    [382, 3.539, 796.298],
    [314, 4.963, 16703.062],
    [283, 3.16, 2544.314],
    [206, 4.569, 2146.165],
    [169, 1.329, 3337.089],
    [158, 4.185, 1751.54],
    [134, 2.233, 0.98],
    [134, 5.974, 1748.016],
    [118, 6.024, 6151.534],
    [117, 2.213, 1059.382],
    [114, 2.129, 1194.447],
    [114, 5.428, 3738.761],
    [91, 1.1, 1349.87],
    [85, 3.91, 553.57],
    [83, 5.3, 6684.75],
    [81, 4.43, 529.69],
    [80, 2.25, 8962.46],
    [73, 2.5, 951.72],
    [73, 5.84, 242.73],
    [71, 3.86, 2914.01],
    [68, 5.02, 382.9],
    [65, 1.02, 3340.6],
    [65, 3.05, 3340.63],
    [62, 4.15, 3149.16],
    [57, 3.89, 4136.91],
    [48, 4.87, 213.3],
    [48, 1.18, 3333.5],
    [47, 1.31, 3185.19],
    [41, 0.71, 1592.6],
    [40, 2.73, 7.11],
    [40, 5.32, 20043.67],
    [33, 5.41, 6283.08],
    [28, 0.05, 9492.15],
    [27, 3.89, 1221.85],
    [27, 5.11, 2700.72]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, p3 = function() {
  return [
    [58016, 2.04979, 3340.61243],
    [54188, 0, 0],
    [13908, 2.45742, 6681.22485],
    [2465, 2.8, 10021.8373],
    [398, 3.141, 13362.45],
    [222, 3.194, 3.523],
    [121, 0.543, 155.42],
    [62, 3.49, 16703.06],
    [54, 3.54, 3344.14],
    [34, 6, 2281.23],
    [32, 4.14, 191.45],
    [30, 2, 796.3],
    [23, 4.33, 242.73],
    [22, 3.45, 398.15],
    [20, 5.42, 553.57],
    [16, 0.66, 0.98],
    [16, 6.11, 2146.17],
    [16, 1.22, 1748.02],
    [15, 6.1, 3185.19],
    [14, 4.02, 951.72],
    [14, 2.62, 1349.87],
    [13, 0.6, 1194.45],
    [12, 3.86, 6684.75],
    [11, 4.72, 2544.31],
    [10, 0.25, 382.9],
    [9, 0.68, 1059.38],
    [9, 3.83, 20043.67],
    [9, 3.88, 3738.76],
    [8, 5.46, 1751.54],
    [7, 2.58, 3149.16],
    [7, 2.38, 4136.91],
    [6, 5.48, 1592.6],
    [6, 2.34, 3097.88]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, A3 = function() {
  return [
    [1482, 0.4443, 3340.6124],
    [662, 0.885, 6681.225],
    [188, 1.288, 10021.837],
    [41, 1.65, 13362.45],
    [26, 0, 0],
    [23, 2.05, 155.42],
    [10, 1.58, 3.52],
    [8, 2, 16703.06],
    [5, 2.82, 242.73],
    [4, 2.02, 3344.14],
    [3, 4.59, 3185.19],
    [3, 0.65, 553.57]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, J3 = function() {
  return [
    [114, 3.1416, 0],
    [29, 5.64, 6681.22],
    [24, 5.14, 3340.61],
    [11, 6.03, 10021.84],
    [3, 0.13, 13362.45],
    [3, 3.56, 155.42],
    [1, 0.49, 16703.06],
    [1, 1.32, 242.73]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, m3 = function() {
  return [
    [1, 3.14, 0],
    [1, 4.04, 6681.22]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, C3 = function() {
  return [
    [3197135, 3.7683204, 3340.6124267],
    [298033, 4.10617, 6681.224853],
    [289105, 0, 0],
    [31366, 4.44651, 10021.83728],
    [3484, 4.7881, 13362.4497],
    [443, 5.026, 3344.136],
    [443, 5.652, 3337.089],
    [399, 5.131, 16703.062],
    [293, 3.793, 2281.23],
    [182, 6.136, 6151.534],
    [163, 4.264, 529.691],
    [160, 2.232, 1059.382],
    [149, 2.165, 5621.843],
    [143, 1.182, 3340.595],
    [143, 3.213, 3340.63],
    [139, 2.418, 8962.455]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, $3 = function() {
  return [
    [350069, 5.368478, 3340.612427],
    [14116, 3.14159, 0],
    [9671, 5.4788, 6681.2249],
    [1472, 3.2021, 10021.8373],
    [426, 3.408, 13362.45],
    [102, 0.776, 3337.089],
    [79, 3.72, 16703.06],
    [33, 3.46, 5621.84],
    [26, 2.48, 2281.23]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, L3 = function() {
  return [
    [16727, 0.60221, 3340.61243],
    [4987, 3.1416, 0],
    [302, 5.559, 6681.225],
    [26, 1.9, 13362.45],
    [21, 0.92, 10021.84],
    [12, 2.24, 3337.09],
    [8, 2.25, 16703.06]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, E3 = function() {
  return [
    [607, 1.981, 3340.612],
    [43, 0, 0],
    [14, 1.8, 6681.22],
    [3, 3.45, 10021.84]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, B3 = function() {
  return [
    [13, 0, 0],
    [11, 3.46, 3340.61],
    [1, 0.5, 6681.22]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, O3 = function() {
  return [
    [153033488, 0, 0],
    [14184953, 3.47971284, 3340.6124267],
    [660776, 3.817834, 6681.224853],
    [46179, 4.15595, 10021.83728],
    [8110, 5.5596, 2810.9215],
    [7485, 1.7724, 5621.8429],
    [5523, 1.3644, 2281.2305],
    [3825, 4.4941, 13362.4497],
    [2484, 4.9255, 2942.4634],
    [2307, 0.0908, 2544.3144],
    [1999, 5.3606, 3337.0893],
    [1960, 4.7425, 3344.1355],
    [1167, 2.1126, 5092.152],
    [1103, 5.0091, 398.149],
    [992, 5.839, 6151.534],
    [899, 4.408, 529.691],
    [807, 2.102, 1059.382],
    [798, 3.448, 796.298],
    [741, 1.499, 2146.165],
    [726, 1.245, 8432.764],
    [692, 2.134, 8962.455],
    [633, 0.894, 3340.595],
    [633, 2.924, 3340.63],
    [630, 1.287, 1751.54],
    [574, 0.829, 2914.014],
    [526, 5.383, 3738.761],
    [473, 5.199, 3127.313],
    [348, 4.832, 16703.062],
    [284, 2.907, 3532.061],
    [280, 5.257, 6283.076],
    [276, 1.218, 6254.627],
    [275, 2.908, 1748.016],
    [270, 3.764, 5884.927],
    [239, 2.037, 1194.447],
    [234, 5.105, 5486.778],
    [228, 3.255, 6872.673],
    [223, 4.199, 3149.164],
    [219, 5.583, 191.448],
    [208, 5.255, 3340.545],
    [208, 4.846, 3340.68],
    [186, 5.699, 6677.702],
    [183, 5.081, 6684.748],
    [179, 4.184, 3333.499],
    [176, 5.953, 3870.303],
    [164, 3.799, 4136.91]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, y3 = function() {
  return [
    [1107433, 2.0325052, 3340.6124267],
    [103176, 2.370718, 6681.224853],
    [12877, 0, 0],
    [10816, 2.70888, 10021.83728],
    [1195, 3.047, 13362.4497],
    [439, 2.888, 2281.23],
    [396, 3.423, 3344.136],
    [183, 1.584, 2544.314],
    [136, 3.385, 16703.062],
    [128, 6.043, 3337.089],
    [128, 0.63, 1059.382],
    [127, 1.954, 796.298],
    [118, 2.998, 2146.165],
    [88, 3.42, 398.15],
    [83, 3.86, 3738.76],
    [76, 4.45, 6151.53],
    [72, 2.76, 529.69],
    [67, 2.55, 1751.54],
    [66, 4.41, 1748.02],
    [58, 0.54, 1194.45],
    [54, 0.68, 8962.46],
    [51, 3.73, 6684.75],
    [49, 5.73, 3340.6],
    [49, 1.48, 3340.63],
    [48, 2.58, 3149.16],
    [48, 2.29, 2914.01],
    [39, 2.32, 4136.91]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, S3 = function() {
  return [
    [44242, 0.47931, 3340.61243],
    [8138, 0.87, 6681.2249],
    [1275, 1.2259, 10021.8373],
    [187, 1.573, 13362.45],
    [52, 3.14, 0],
    [41, 1.97, 3344.14],
    [27, 1.92, 16703.06],
    [18, 4.43, 2281.23],
    [12, 4.53, 3185.19],
    [10, 5.39, 1059.38],
    [10, 0.42, 796.3]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, R3 = function() {
  return [
    [1113, 5.1499, 3340.6124],
    [424, 5.613, 6681.225],
    [100, 5.997, 10021.837],
    [20, 0.08, 13362.45],
    [5, 3.14, 0],
    [3, 0.43, 16703.06]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, b3 = function() {
  return [
    [20, 3.58, 3340.61],
    [16, 4.05, 6681.22],
    [6, 4.46, 10021.84],
    [2, 4.84, 13362.45]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function a1(t) {
  const e = I(t), n = d3(), i = T3(), o = p3(), s = A3(), a = J3(), f = m3(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), c = r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5);
  return L(c / 1e8 * m);
}
function r1(t) {
  const e = I(t), n = C3(), i = $3(), o = L3(), s = E3(), a = B3(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function Jt(t) {
  const e = I(t), n = O3(), i = y3(), o = S3(), s = R3(), a = b3(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0);
  return (f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4)) / 1e8;
}
function mn(t) {
  return {
    longitude: a1(t),
    latitude: r1(t)
  };
}
function P3(t, e = R.Mean) {
  return P(
    mn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const w3 = {
  equatorialRadius: 3396.19,
  meanRadius: 3389.5,
  mass: 0.641712,
  bulkDensity: 3.9341,
  siderealRotationPeriod: 1.02595676,
  siderealOrbitPeriod: 1.8808476,
  visualMagnitude: -1.52,
  geometricAlbedo: 0.15,
  equatorialGravity: 3.71,
  escapeVelocity: 5.03
}, Wt = {
  semiMajorAxis: [1.523679342, 0, 0, 0],
  eccentricity: [0.09340065, 90484e-9, -806e-10, -25e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [355.433, 19141.6964471, 31052e-8, 16e-9],
    inclination: [1.849726, -6011e-7, 1276e-8, -7e-9],
    longitudeOfAscendingNode: [49.558093, 0.7720959, 1557e-8, 2267e-9],
    longitudeOfPerihelion: [336.060234, 1.8410449, 13477e-8, 536e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [355.433, 19140.2993039, 262e-8, -3e-9],
    inclination: [1.849726, -81477e-7, -2255e-8, -29e-8],
    longitudeOfAscendingNode: [49.558093, -0.295025, -64048e-8, -1964e-9],
    longitudeOfPerihelion: [336.060234, 0.4439016, -17313e-8, 518e-9]
  }
};
function Cn(t) {
  const n = 0.53166 * (at(t) - 2001.78);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function q3(t) {
  const e = Cn(t) + 0.5;
  return 2452195026e-3 + 686.9957857 * e - 1187e-10 * Math.pow(e, 2);
}
function G3(t) {
  const e = Cn(t);
  return 2452195026e-3 + 686.9957857 * e - 1187e-10 * Math.pow(e, 2);
}
function _3(t, e = J.MeanOfTheDate) {
  return xt(t, Wt[e].meanLongitude);
}
function B1(t) {
  return Ft(t, Wt.semiMajorAxis);
}
function ce(t) {
  return Vt(t, Wt.eccentricity);
}
function I3(t, e = J.MeanOfTheDate) {
  return Ut(t, Wt[e].inclination);
}
function N3(t, e = J.MeanOfTheDate) {
  return zt(t, Wt[e].longitudeOfAscendingNode);
}
function x3(t, e = J.MeanOfTheDate) {
  return Yt(t, Wt[e].longitudeOfPerihelion);
}
function se(t) {
  return dt(t, a1, r1, Jt);
}
function $n(t) {
  return rt(t, a1, r1, Jt);
}
function Ln(t) {
  return Tt(t, a1, r1, Jt);
}
function ke(t, e = R.Mean) {
  return P(
    $n(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function F3(t) {
  return P(
    Ln(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function V3(t) {
  return Gt(Jt(t), B1(t));
}
function U3(t) {
  return _t(ce(t), B1(t));
}
function z3(t) {
  return It(ce(t), B1(t));
}
function Y3(t) {
  return Nt(ce(t), B1(t));
}
function H3(t, e) {
  return pt(t, e, ke);
}
function k3(t, e) {
  return At(t, e, ke);
}
function We(t) {
  const e = Jt(t), n = p.getRadiusVector(t), i = se(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function W3(t) {
  const e = We(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function K3(t) {
  const e = Jt(t), n = se(t), i = We(t);
  return -1.52 + 5 * Math.log10(e * n) + 0.016 * i;
}
function En(t) {
  return 4.68 / se(t);
}
function X3(t) {
  return En(t);
}
function Bn(t) {
  const e = G(t), n = (352.9065 + 1.1733 * e) * D, i = (63.2818 - 394e-5 * e) * D, o = p.getEclipticLongitude(t) * D, s = p.getEclipticLatitude(t) * D, a = p.getRadiusVector(t);
  let f = 0, r = 0, g = 0, M = 0, d = 0, T = !0, l = 0, c = 0, h = 0, u = 0;
  for (; T; ) {
    let b = t - r;
    c = a1(b) * D, h = r1(b) * D, u = Jt(b), g = u * Math.cos(h) * Math.cos(c) - a * Math.cos(o), M = u * Math.cos(h) * Math.sin(c) - a * Math.sin(o), d = u * Math.sin(h) - a * Math.sin(s), l = Math.sqrt(g * g + M * M + d * d), r = h1(l), T = Math.abs(r - f) > 2e-6, T && (f = r);
  }
  const E = Math.atan2(M, g), _ = Math.atan2(d, Math.sqrt(g * g + M * M));
  return { T: e, Lambda0: n, Beta0: i, lambda: E, beta: _, l: c, b: h, r: u, Delta: l };
}
function Q3(t) {
  const { Lambda0: e, Beta0: n, lambda: i, beta: o } = Bn(t), s = -1 * Math.sin(n) * Math.sin(o), a = Math.cos(n) * Math.cos(o) * Math.cos(e - i);
  return Math.asin(s - a) * m;
}
function Z3(t) {
  const { T: e, Lambda0: n, Beta0: i, l: o, b: s, r: a } = Bn(t), f = 49.5581 + 0.7721 * e, [r, g] = [o * m, s * m], M = r - 697e-5 / a, d = g - 225e-6 * Math.cos((r - f) * D) / a, T = -1 * Math.sin(i) * Math.sin(d * D), l = Math.cos(i) * Math.cos(d * D) * Math.cos(n - M * D);
  return Math.asin(T - l) * m;
}
const Ke = {
  // Heliocentric coordinates
  getEclipticLongitude: a1,
  getEclipticLatitude: r1,
  getEclipticCoordinates: mn,
  getEquatorialCoordinates: P3,
  getRadiusVector: Jt,
  // Geocentric coordinates
  getGeocentricDistance: se,
  getGeocentricEclipticCoordinates: $n,
  getApparentGeocentricEclipticCoordinates: Ln,
  getGeocentricEquatorialCoordinates: ke,
  getApparentGeocentricEquatorialCoordinates: F3,
  // Planet elliptical properties
  getInstantaneousVelocity: V3,
  getVelocityAtPerihelion: U3,
  getVelocityAtAphelion: z3,
  getLengthOfEllipse: Y3,
  getRiseTransitSet: H3,
  getAccurateRiseTransitSet: k3,
  // Planet orbital properties
  getMeanLongitude: _3,
  getEccentricity: ce,
  getInclination: I3,
  getLongitudeOfAscendingNode: N3,
  getLongitudeOfPerihelion: x3,
  getSemiMajorAxis: B1,
  // Planet base properties
  getAphelion: q3,
  getPerihelion: G3,
  getPhaseAngle: We,
  getIlluminatedFraction: W3,
  getMagnitude: K3,
  getEquatorialSemiDiameter: En,
  getPolarSemiDiameter: X3,
  // Mars-specific details
  getPlanetocentricDeclinationOfTheSun: Z3,
  getPlanetocentricDeclinationOfTheEarth: Q3,
  // Fixed values
  constants: w3,
  orbitalElements: Wt
}, v3 = function() {
  return [
    [59954691, 0, 0],
    [9695899, 5.0619179, 529.6909651],
    [573610, 1.444062, 7.113547],
    [306389, 5.417347, 1059.38193],
    [97178, 4.14265, 632.78374],
    [72903, 3.64043, 522.57742],
    [64264, 3.41145, 103.09277],
    [39806, 2.29377, 419.48464],
    [38858, 1.27232, 316.39187],
    [27965, 1.78455, 536.80451],
    [13590, 5.77481, 1589.0729],
    [8769, 3.63, 949.1756],
    [8246, 3.5823, 206.1855],
    [7368, 5.081, 735.8765],
    [6263, 0.025, 213.2991],
    [6114, 4.5132, 1162.4747],
    [5305, 4.1863, 1052.2684],
    [5305, 1.3067, 14.2271],
    [4905, 1.3208, 110.2063],
    [4647, 4.6996, 3.9322],
    [3045, 4.3168, 426.5982],
    [2610, 1.5667, 846.0828],
    [2028, 1.0638, 3.1814],
    [1921, 0.9717, 639.8973],
    [1765, 2.1415, 1066.4955],
    [1723, 3.8804, 1265.5675],
    [1633, 3.582, 515.4639],
    [1432, 4.2968, 625.6702],
    [973, 4.098, 95.979],
    [884, 2.437, 412.371],
    [733, 6.085, 838.969],
    [731, 3.806, 1581.959],
    [709, 1.293, 742.99],
    [692, 6.134, 2118.764],
    [614, 4.109, 1478.867],
    [582, 4.54, 309.278],
    [495, 3.756, 323.505],
    [441, 2.958, 454.909],
    [417, 1.036, 2.448],
    [390, 4.897, 1692.166],
    [376, 4.703, 1368.66],
    [341, 5.715, 533.623],
    [330, 4.74, 0.048],
    [262, 1.877, 0.963],
    [261, 0.82, 380.128],
    [257, 3.724, 199.072],
    [244, 5.22, 728.763],
    [235, 1.227, 909.819],
    [220, 1.651, 543.918],
    [207, 1.855, 525.759],
    [202, 1.807, 1375.774],
    [197, 5.293, 1155.361],
    [175, 3.73, 942.062],
    [175, 3.226, 1898.351],
    [175, 5.91, 956.289],
    [158, 4.365, 1795.258],
    [151, 3.906, 74.782],
    [149, 4.377, 1685.052],
    [141, 3.136, 491.558],
    [138, 1.318, 1169.588],
    [131, 4.169, 1045.155],
    [117, 2.5, 1596.186],
    [117, 3.389, 0.521],
    [106, 4.554, 526.51]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, j3 = function() {
  return [
    [52993480757, 0, 0],
    [489741, 4.220667, 529.690965],
    [228919, 6.026475, 7.113547],
    [27655, 4.57266, 1059.38193],
    [20721, 5.45939, 522.57742],
    [12106, 0.16986, 536.80451],
    [6068, 4.4242, 103.0928],
    [5434, 3.9848, 419.4846],
    [4238, 5.8901, 14.2271],
    [2212, 5.2677, 206.1855],
    [1746, 4.9267, 1589.0729],
    [1296, 5.5513, 3.1814],
    [1173, 5.8565, 1052.2684],
    [1163, 0.5145, 3.9322],
    [1099, 5.307, 515.4639],
    [1007, 0.4648, 735.8765],
    [1004, 3.1504, 426.5982],
    [848, 5.758, 110.206],
    [827, 4.803, 213.299],
    [816, 0.586, 1066.495],
    [725, 5.518, 639.897],
    [568, 5.989, 625.67],
    [474, 4.132, 412.371],
    [413, 5.737, 95.979],
    [345, 4.242, 632.784],
    [336, 3.732, 1162.475],
    [234, 4.035, 949.176],
    [234, 6.243, 309.278],
    [199, 1.505, 838.969],
    [195, 2.219, 323.505],
    [187, 6.086, 742.99],
    [184, 6.28, 543.918],
    [171, 5.417, 199.072],
    [131, 0.626, 728.763],
    [115, 0.68, 846.083],
    [115, 5.286, 2118.764],
    [108, 4.493, 956.289],
    [80, 5.82, 1045.15],
    [72, 5.34, 942.06],
    [70, 5.97, 532.87],
    [67, 5.73, 21.34],
    [66, 0.13, 526.51],
    [65, 6.09, 1581.96],
    [59, 0.59, 1155.36],
    [58, 0.99, 1596.19],
    [57, 5.97, 1169.59],
    [57, 1.41, 533.62],
    [55, 5.43, 10.29],
    [52, 5.73, 117.32],
    [52, 0.23, 1368.66],
    [50, 6.08, 525.76],
    [47, 3.63, 1478.87],
    [47, 0.51, 1265.57],
    [40, 4.16, 1692.17],
    [34, 0.1, 302.16],
    [33, 5.04, 220.41],
    [32, 5.37, 508.35],
    [29, 5.42, 1272.68],
    [29, 3.36, 4.67],
    [29, 0.76, 88.87],
    [25, 1.61, 831.86]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, t6 = function() {
  return [
    [47234, 4.32148, 7.11355],
    [38966, 0, 0],
    [30629, 2.93021, 529.69097],
    [3189, 1.055, 522.5774],
    [2729, 4.8455, 536.8045],
    [2723, 3.4141, 1059.3819],
    [1721, 4.1873, 14.2271],
    [383, 5.768, 419.485],
    [378, 0.76, 515.464],
    [367, 6.055, 103.093],
    [337, 3.786, 3.181],
    [308, 0.694, 206.186],
    [218, 3.814, 1589.073],
    [199, 5.34, 1066.495],
    [197, 2.484, 3.932],
    [156, 1.406, 1052.268],
    [146, 3.814, 639.897],
    [142, 1.634, 426.598],
    [130, 5.837, 412.371],
    [117, 1.414, 625.67],
    [97, 4.03, 110.21],
    [91, 1.11, 95.98],
    [87, 2.52, 632.78],
    [79, 4.64, 543.92],
    [72, 2.22, 735.88],
    [58, 0.83, 199.07],
    [57, 3.12, 213.3],
    [49, 1.67, 309.28],
    [40, 4.02, 21.34],
    [40, 0.62, 323.51],
    [36, 2.33, 728.76],
    [29, 3.61, 10.29],
    [28, 3.24, 838.97],
    [26, 4.5, 742.99],
    [26, 2.51, 1162.47],
    [25, 1.22, 1045.15],
    [24, 3.01, 956.29],
    [19, 4.29, 532.87],
    [18, 0.81, 508.35],
    [17, 4.2, 2118.76],
    [17, 1.83, 526.51],
    [15, 5.81, 1596.19],
    [15, 0.68, 942.06],
    [15, 4, 117.32],
    [14, 5.95, 316.39],
    [14, 1.8, 302.16],
    [13, 2.52, 88.87],
    [13, 4.37, 1169.59],
    [11, 4.44, 525.76],
    [10, 1.72, 1581.96],
    [9, 2.18, 1155.36],
    [9, 3.29, 220.41],
    [9, 3.32, 831.86],
    [8, 5.76, 846.08],
    [8, 2.71, 533.62],
    [7, 2.18, 1265.57],
    [6, 0.5, 949.18]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, e6 = function() {
  return [
    [6502, 2.5986, 7.1135],
    [1357, 1.3464, 529.691],
    [471, 2.475, 14.227],
    [417, 3.245, 536.805],
    [353, 2.974, 522.577],
    [155, 2.076, 1059.382],
    [87, 2.51, 515.46],
    [44, 0, 0],
    [34, 3.83, 1066.5],
    [28, 2.45, 206.19],
    [24, 1.28, 412.37],
    [23, 2.98, 543.92],
    [20, 2.1, 639.9],
    [20, 1.4, 419.48],
    [19, 1.59, 103.09],
    [17, 2.3, 21.34],
    [17, 2.6, 1589.07],
    [16, 3.15, 625.67],
    [16, 3.36, 1052.27],
    [13, 2.76, 95.98],
    [13, 2.54, 199.07],
    [13, 6.27, 426.6],
    [9, 1.76, 10.29],
    [9, 2.27, 110.21],
    [7, 3.43, 309.28],
    [7, 4.04, 728.76],
    [6, 2.52, 508.35],
    [5, 2.91, 1045.15],
    [5, 5.25, 323.51],
    [4, 4.3, 88.87],
    [4, 3.52, 302.16],
    [4, 4.09, 735.88],
    [3, 1.43, 956.29],
    [3, 4.36, 1596.19],
    [3, 1.25, 213.3],
    [3, 5.02, 838.97],
    [3, 2.24, 117.32],
    [2, 2.9, 742.99],
    [2, 2.36, 942.06]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, n6 = function() {
  return [
    [669, 0.853, 7.114],
    [114, 3.142, 0],
    [100, 0.743, 14.227],
    [50, 1.65, 536.8],
    [44, 5.82, 529.69],
    [32, 4.86, 522.58],
    [15, 4.29, 515.46],
    [9, 0.71, 1059.38],
    [5, 1.3, 543.92],
    [4, 2.32, 1066.5],
    [4, 0.48, 21.34],
    [3, 3, 412.37],
    [2, 0.4, 639.9],
    [2, 4.26, 199.07],
    [2, 4.91, 625.67],
    [2, 4.26, 206.19],
    [1, 5.26, 1052.27],
    [1, 4.72, 95.98],
    [1, 1.29, 1589.07]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, o6 = function() {
  return [
    [50, 5.26, 7.11],
    [16, 5.25, 14.23],
    [4, 0.01, 536.8],
    [2, 1.1, 522.58],
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, i6 = function() {
  return [
    [2268616, 3.5585261, 529.6909651],
    [110090, 0, 0],
    [109972, 3.908093, 1059.38193],
    [8101, 3.6051, 522.5774],
    [6438, 0.3063, 536.8045],
    [6044, 4.2588, 1589.0729],
    [1107, 2.9853, 1162.4747],
    [944, 1.675, 426.598],
    [942, 2.936, 1052.268],
    [894, 1.754, 7.114],
    [836, 5.179, 103.093],
    [767, 2.155, 632.784],
    [684, 3.678, 213.299],
    [629, 0.643, 1066.495],
    [559, 0.014, 846.083],
    [532, 2.703, 110.206],
    [464, 1.173, 949.176],
    [431, 2.608, 419.485],
    [351, 4.611, 2118.764],
    [132, 4.778, 742.99],
    [123, 3.35, 1692.166],
    [116, 1.387, 323.505],
    [115, 5.049, 316.392],
    [104, 3.701, 515.464],
    [103, 2.319, 1478.867],
    [102, 3.153, 1581.959]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, c6 = function() {
  return [
    [177352, 5.701665, 529.690965],
    [3230, 5.7794, 1059.3819],
    [3081, 5.4746, 522.5774],
    [2212, 4.7348, 536.8045],
    [1694, 3.1416, 0],
    [346, 4.746, 1052.268],
    [234, 5.189, 1066.495],
    [196, 6.186, 7.114],
    [150, 3.927, 1589.073],
    [114, 3.439, 632.784],
    [97, 2.91, 949.18],
    [82, 5.08, 1162.47],
    [77, 2.51, 103.09],
    [77, 0.61, 419.48],
    [74, 5.5, 515.46],
    [61, 5.45, 213.3],
    [50, 3.95, 735.88],
    [46, 0.54, 110.21],
    [45, 1.9, 846.08],
    [37, 4.7, 543.92],
    [36, 6.11, 316.39],
    [32, 4.92, 1581.96]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, s6 = function() {
  return [
    [8094, 1.4632, 529.691],
    [813, 3.1416, 0],
    [742, 0.957, 522.577],
    [399, 2.899, 536.805],
    [342, 1.447, 1059.382],
    [74, 0.41, 1052.27],
    [46, 3.48, 1066.5],
    [30, 1.93, 1589.07],
    [29, 0.99, 515.46],
    [23, 4.27, 7.11],
    [14, 2.92, 543.92],
    [12, 5.22, 632.78],
    [11, 4.88, 949.18],
    [6, 6.21, 1045.15]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, a6 = function() {
  return [
    [252, 3.381, 529.691],
    [122, 2.733, 522.577],
    [49, 1.04, 536.8],
    [11, 2.31, 1052.27],
    [8, 2.77, 515.46],
    [7, 4.25, 1059.38],
    [6, 1.78, 1066.5],
    [4, 1.13, 543.92],
    [3, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, r6 = function() {
  return [
    [15, 4.53, 522.58],
    [5, 4.47, 529.69],
    [4, 5.44, 536.8],
    [3, 0, 0],
    [2, 4.52, 515.46],
    [1, 4.2, 1052.27]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, u6 = function() {
  return [
    [520887429, 0, 0],
    [25209327, 3.4910864, 529.69096509],
    [610600, 3.841154, 1059.38193],
    [282029, 2.574199, 632.783739],
    [187647, 2.075904, 522.577418],
    [86793, 0.71001, 419.48464],
    [72063, 0.21466, 536.80451],
    [65517, 5.97996, 316.39187],
    [30135, 2.16132, 949.17561],
    [29135, 1.67759, 103.09277],
    [23947, 0.27458, 7.11355],
    [23453, 3.54023, 735.87651],
    [22284, 4.19363, 1589.0729],
    [13033, 2.96043, 1162.4747],
    [12749, 2.7155, 1052.26838],
    [9703, 1.9067, 206.1855],
    [9161, 4.4135, 213.2991],
    [7895, 2.4791, 426.5982],
    [7058, 2.1818, 1265.5675],
    [6138, 6.2642, 846.0828],
    [5477, 5.6573, 639.8973],
    [4170, 2.0161, 515.4639],
    [4137, 2.7222, 625.6702],
    [3503, 0.5653, 1066.4955],
    [2617, 2.0099, 1581.9593],
    [2500, 4.5518, 838.9693],
    [2128, 6.1275, 742.9901],
    [1912, 0.8562, 412.3711],
    [1611, 3.0887, 1368.6603],
    [1479, 2.6803, 1478.8666],
    [1231, 1.8904, 323.5054],
    [1217, 1.8017, 110.2063],
    [1015, 1.3867, 454.9094],
    [999, 2.872, 309.278],
    [961, 4.549, 2118.764],
    [886, 4.148, 533.623],
    [821, 1.593, 1898.351],
    [812, 5.941, 909.819],
    [777, 3.677, 728.763],
    [727, 3.988, 1155.361],
    [655, 2.791, 1685.052],
    [654, 3.382, 1692.166],
    [621, 4.823, 956.289],
    [615, 2.276, 942.062],
    [562, 0.081, 543.918],
    [542, 0.284, 525.759]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, l6 = function() {
  return [
    [1271802, 2.6493751, 529.6909651],
    [61662, 3.00076, 1059.38193],
    [53444, 3.89718, 522.57742],
    [41390, 0, 0],
    [31185, 4.88277, 536.80451],
    [11847, 2.4133, 419.48464],
    [9166, 4.7598, 7.1135],
    [3404, 3.3469, 1589.0729],
    [3203, 5.2108, 735.8765],
    [3176, 2.793, 103.0928],
    [2806, 3.7422, 515.4639],
    [2677, 4.3305, 1052.2684],
    [2600, 3.6344, 206.1855],
    [2412, 1.4695, 426.5982],
    [2101, 3.9276, 639.8973],
    [1646, 5.3095, 1066.4955],
    [1641, 4.4163, 625.6702],
    [1050, 3.1611, 213.2991],
    [1025, 2.5543, 412.3711],
    [806, 2.678, 632.784],
    [741, 2.171, 1162.475],
    [677, 6.25, 838.969],
    [567, 4.577, 742.99],
    [485, 2.469, 949.176],
    [469, 4.71, 543.918],
    [445, 0.403, 323.505],
    [416, 5.368, 728.763],
    [402, 4.605, 309.278],
    [347, 4.681, 14.227],
    [338, 3.168, 956.289],
    [261, 5.343, 846.083],
    [247, 3.923, 942.062],
    [220, 4.842, 1368.66],
    [203, 5.6, 1155.361],
    [200, 4.439, 1045.155],
    [197, 3.706, 2118.764],
    [196, 3.759, 199.072],
    [184, 4.265, 95.979],
    [180, 4.402, 532.872],
    [170, 4.846, 526.51],
    [146, 6.13, 533.623],
    [133, 1.322, 110.206],
    [132, 4.512, 525.759]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, f6 = function() {
  return [
    [79645, 1.35866, 529.69097],
    [8252, 5.7777, 522.5774],
    [7030, 3.2748, 536.8045],
    [5314, 1.8384, 1059.3819],
    [1861, 2.9768, 7.1135],
    [964, 5.48, 515.464],
    [836, 4.199, 419.485],
    [498, 3.142, 0],
    [427, 2.228, 639.897],
    [406, 3.783, 1066.495],
    [377, 2.242, 1589.073],
    [363, 5.368, 206.186],
    [342, 6.099, 1052.268],
    [339, 6.127, 625.67],
    [333, 3e-3, 426.598],
    [280, 4.262, 412.371],
    [257, 0.963, 632.784],
    [230, 0.705, 735.877],
    [201, 3.069, 543.918],
    [200, 4.429, 103.093],
    [139, 2.932, 14.227],
    [114, 0.787, 728.763],
    [95, 1.7, 838.97],
    [86, 5.14, 323.51],
    [83, 0.06, 309.28],
    [80, 2.98, 742.99],
    [75, 1.6, 956.29],
    [70, 1.51, 213.3],
    [67, 5.47, 199.07],
    [62, 6.1, 1045.15],
    [56, 0.96, 1162.47],
    [52, 5.58, 942.06],
    [50, 2.72, 532.87],
    [45, 5.52, 508.35],
    [44, 0.27, 526.51],
    [40, 5.95, 95.98]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, D6 = function() {
  return [
    [3519, 6.058, 529.691],
    [1073, 1.6732, 536.8045],
    [916, 1.413, 522.577],
    [342, 0.523, 1059.382],
    [255, 1.196, 7.114],
    [222, 0.952, 515.464],
    [90, 3.14, 0],
    [69, 2.27, 1066.5],
    [58, 1.41, 543.92],
    [58, 0.53, 639.9],
    [51, 5.98, 412.37],
    [47, 1.58, 625.67],
    [43, 6.12, 419.48],
    [37, 1.18, 14.23],
    [34, 1.67, 1052.27],
    [34, 0.85, 206.19],
    [31, 1.04, 1589.07],
    [30, 4.63, 426.6],
    [21, 2.5, 728.76],
    [15, 0.89, 199.07],
    [14, 0.96, 508.35],
    [13, 1.5, 1045.15],
    [12, 2.61, 735.88],
    [12, 3.56, 323.51],
    [11, 1.79, 309.28],
    [11, 6.28, 956.29],
    [10, 6.26, 103.09],
    [9, 3.45, 838.97]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, g6 = function() {
  return [
    [129, 0.084, 536.805],
    [113, 4.249, 529.691],
    [83, 3.3, 522.58],
    [38, 2.73, 515.46],
    [27, 5.69, 7.11],
    [18, 5.4, 1059.38],
    [13, 6.02, 543.92],
    [9, 0.77, 1066.5],
    [8, 5.68, 14.23],
    [7, 1.43, 412.37],
    [6, 5.12, 639.9],
    [5, 3.34, 625.67],
    [3, 3.4, 1052.27],
    [3, 4.16, 728.76],
    [3, 2.9, 426.6]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, h6 = function() {
  return [
    [11, 4.75, 536.8],
    [4, 5.92, 522.58],
    [2, 5.57, 515.46],
    [2, 4.3, 543.92],
    [2, 3.69, 7.11],
    [2, 4.13, 1059.38],
    [2, 5.49, 1066.5]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function mt(t) {
  const e = I(t), n = v3(), i = j3(), o = t6(), s = e6(), a = n6(), f = o6(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), c = r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5);
  return L(c / 1e8 * m);
}
function Kt(t) {
  const e = I(t), n = i6(), i = c6(), o = s6(), s = a6(), a = r6(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function Ct(t) {
  const e = I(t), n = u6(), i = l6(), o = f6(), s = D6(), a = g6(), f = h6(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0);
  return (r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5)) / 1e8;
}
function On(t) {
  return {
    longitude: mt(t),
    latitude: Kt(t)
  };
}
function M6(t, e = R.Mean) {
  return P(
    On(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const d6 = {
  equatorialRadius: 71492,
  meanRadius: 69911,
  mass: 1898.187,
  bulkDensity: 1.3262,
  siderealRotationPeriod: 0.41354,
  siderealOrbitPeriod: 11.862615,
  visualMagnitude: -9.4,
  geometricAlbedo: 0.52,
  equatorialGravity: 24.79,
  escapeVelocity: 60.2
}, Xt = {
  semiMajorAxis: [5.202603209, 1913e-10, 0, 0],
  eccentricity: [0.04849793, 163225e-9, -4714e-10, -201e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [34.351519, 3036.3027748, 2233e-7, 37e-9],
    inclination: [1.303267, -54965e-7, 466e-8, -2e-9],
    longitudeOfAscendingNode: [100.464407, 1.0209774, 40315e-8, 404e-9],
    longitudeOfPerihelion: [14.331207, 1.6126352, 103042e-8, -4464e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [34.351519, 3034.9056606, -8501e-8, 16e-9],
    inclination: [1.303267, -19877e-7, 332e-7, 97e-9],
    longitudeOfAscendingNode: [100.464407, 0.1767232, 907e-6, -7272e-9],
    longitudeOfPerihelion: [14.331207, 0.2155209, 72211e-8, -4485e-9]
  }
};
function yn(t) {
  const n = 0.0843 * (at(t) - 2011.2);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function T6(t) {
  const e = yn(t) + 0.5;
  return 2455636936e-3 + 4332.897065 * e + 1367e-7 * Math.pow(e, 2);
}
function p6(t) {
  const e = yn(t);
  return 2455636936e-3 + 4332.897065 * e + 1367e-7 * Math.pow(e, 2);
}
function A6(t, e = J.MeanOfTheDate) {
  return xt(t, Xt[e].meanLongitude);
}
function O1(t) {
  return Ft(t, Xt.semiMajorAxis);
}
function ae(t) {
  return Vt(t, Xt.eccentricity);
}
function J6(t, e = J.MeanOfTheDate) {
  return Ut(t, Xt[e].inclination);
}
function m6(t, e = J.MeanOfTheDate) {
  return zt(t, Xt[e].longitudeOfAscendingNode);
}
function C6(t, e = J.MeanOfTheDate) {
  return Yt(t, Xt[e].longitudeOfPerihelion);
}
function y1(t) {
  return dt(t, mt, Kt, Ct);
}
function Sn(t) {
  return rt(t, mt, Kt, Ct);
}
function Rn(t) {
  return Tt(t, mt, Kt, Ct);
}
function Xe(t, e = R.Mean) {
  return P(
    Sn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function $6(t) {
  return P(
    Rn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function L6(t) {
  return Gt(Ct(t), O1(t));
}
function E6(t) {
  return _t(ae(t), O1(t));
}
function B6(t) {
  return It(ae(t), O1(t));
}
function O6(t) {
  return Nt(ae(t), O1(t));
}
function y6(t, e) {
  return pt(t, e, Xe);
}
function S6(t, e) {
  return At(t, e, Xe);
}
function Qe(t) {
  const e = Ct(t), n = p.getRadiusVector(t), i = y1(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function R6(t) {
  const e = Qe(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function b6(t) {
  const e = Ct(t), n = y1(t), i = Qe(t);
  return -9.4 + 5 * Math.log10(e * n) + 5e-3 * i;
}
function P6(t) {
  return 98.47 / y1(t);
}
function w6(t) {
  return 91.91 / y1(t);
}
function Ze(t) {
  const e = p.getEclipticLongitude(t) * D, n = p.getEclipticLatitude(t) * D, i = p.getRadiusVector(t);
  let o = mt(t) * D;
  const s = Kt(t) * D, a = Ct(t);
  let f = a * Math.cos(s) * Math.cos(o) - i * Math.cos(e), r = a * Math.cos(s) * Math.sin(o) - i * Math.sin(e), g = a * Math.sin(s) - i * Math.sin(n), M = Math.sqrt(f * f + r * r + g * g);
  o = o - 0.01299 * M / (a * a), f = a * Math.cos(s) * Math.cos(o) - i * Math.cos(e), r = a * Math.cos(s) * Math.sin(o) - i * Math.sin(e), g = a * Math.sin(s) - i * Math.sin(n), M = Math.sqrt(f * f + r * r + g * g);
  const d = p.getMeanObliquityOfEcliptic(t) * D, T = r * Math.cos(d) - g * Math.sin(d), l = r * Math.sin(d) + g * Math.cos(d), c = Math.atan2(T, f) * m, h = Math.atan2(l, Math.sqrt(f * f + T * T)) * m;
  return { alpha: c, delta: h, r: a, Delta: M };
}
function q6(t) {
  const n = (t - 24332825e-1) / 36525, i = (268 + 0.1061 * n) * D, o = (64.5 - 0.0164 * n) * D, { r: s, Delta: a } = Ze(t), f = (mt(t) - 0.01299 * a / (s * s)) * D, r = Kt(t) * D, g = p.getMeanObliquityOfEcliptic(t) * D, M = Math.atan2(Math.cos(g) * Math.sin(f) - Math.sin(g) * Math.tan(r), Math.cos(f)), d = Math.asin(Math.cos(g) * Math.sin(r) + Math.sin(g) * Math.cos(r) * Math.sin(f)), T = -1 * Math.sin(o) * Math.sin(d), l = Math.cos(o) * Math.cos(d) * Math.cos(i - M);
  return Math.asin(T - l) * m;
}
function G6(t) {
  const n = (t - 24332825e-1) / 36525, i = (268 + 0.1061 * n) * D, o = (64.5 - 0.0164 * n) * D, { alpha: s, delta: a } = Ze(t), f = -1 * Math.sin(o) * Math.sin(a), r = Math.cos(o) * Math.cos(a) * Math.cos(i - s);
  return Math.asin(f - r) * m;
}
function _6(t) {
  const e = t - 24332825e-1, n = e / 36525, i = (268 + 0.1061 * n) * D, o = (64.5 - 0.0164 * n) * D, s = p.getEclipticLongitude(t) * D, a = p.getRadiusVector(t), { alpha: f, delta: r, r: g, Delta: M } = Ze(t), d = (mt(t) - 0.01299 * M / Math.pow(g, 2)) * D, T = L(17.71 + 877.90003539 * e), l = L(16.838 + 870.27003539 * e), c = Math.sin(o) * Math.cos(r) * Math.cos(i - f), h = Math.sin(r) * Math.cos(o), u = Math.cos(r) * Math.sin(i - f), E = Math.atan2(c - h, u) * m, _ = L(T - E - 5.07033 * M), b = L(l - E - 5.02626 * M), N = 57.2958 * (2 * g * M + a * a - g * g - M * M) / (4 * g * M);
  let z, F;
  return Math.sin(d - s) > 0 ? (z = L(_ + N), F = L(b + N)) : (z = L(_ - N), F = L(b - N)), {
    geometricSystemI: _,
    geometricSystemII: b,
    apparentSystemI: z,
    apparentSystemII: F
  };
}
const re = {
  // Heliocentric coordinates
  getEclipticLongitude: mt,
  getEclipticLatitude: Kt,
  getEclipticCoordinates: On,
  getEquatorialCoordinates: M6,
  getRadiusVector: Ct,
  // Geocentric coordinates
  getGeocentricDistance: y1,
  getGeocentricEclipticCoordinates: Sn,
  getApparentGeocentricEclipticCoordinates: Rn,
  getGeocentricEquatorialCoordinates: Xe,
  getApparentGeocentricEquatorialCoordinates: $6,
  // Planet elliptical properties
  getInstantaneousVelocity: L6,
  getVelocityAtPerihelion: E6,
  getVelocityAtAphelion: B6,
  getLengthOfEllipse: O6,
  getRiseTransitSet: y6,
  getAccurateRiseTransitSet: S6,
  // Planet orbital properties
  getMeanLongitude: A6,
  getEccentricity: ae,
  getInclination: J6,
  getLongitudeOfAscendingNode: m6,
  getLongitudeOfPerihelion: C6,
  getSemiMajorAxis: O1,
  // Planet base properties
  getAphelion: T6,
  getPerihelion: p6,
  getPhaseAngle: Qe,
  getIlluminatedFraction: R6,
  getMagnitude: b6,
  getEquatorialSemiDiameter: P6,
  getPolarSemiDiameter: w6,
  // Specific
  getCentralMeridianLongitudes: _6,
  getPlanetocentricDeclinationOfTheEarth: G6,
  getPlanetocentricDeclinationOfTheSun: q6,
  // Fixed values
  constants: d6,
  orbitalElements: Xt
}, I6 = function() {
  return [
    [87401354, 0, 0],
    [11107660, 3.9620509, 213.29909544],
    [1414151, 4.5858152, 7.113547],
    [398379, 0.52112, 206.185548],
    [350769, 3.303299, 426.598191],
    [206816, 0.246584, 103.092774],
    [79271, 3.84007, 220.41264],
    [23990, 4.66977, 110.20632],
    [16574, 0.43719, 419.48464],
    [15820, 0.93809, 632.78374],
    [15054, 2.7167, 639.89729],
    [14907, 5.76903, 316.39187],
    [14610, 1.56519, 3.93215],
    [13160, 4.44891, 14.22709],
    [13005, 5.98119, 11.0457],
    [10725, 3.1294, 202.2534],
    [6126, 1.7633, 277.035],
    [5863, 0.2366, 529.691],
    [5228, 4.2078, 3.1814],
    [5020, 3.1779, 433.7117],
    [4593, 0.6198, 199.072],
    [4006, 2.2448, 63.7359],
    [3874, 3.2228, 138.5175],
    [3269, 0.7749, 949.1756],
    [2954, 0.9828, 95.9792],
    [2461, 2.0316, 735.8765],
    [1758, 3.2658, 522.5774],
    [1640, 5.505, 846.0828],
    [1581, 4.3727, 309.2783],
    [1391, 4.0233, 323.5054],
    [1124, 2.8373, 415.5525],
    [1087, 4.1834, 2.4477],
    [1017, 3.717, 227.5262],
    [957, 0.507, 1265.567],
    [853, 3.421, 175.166],
    [849, 3.191, 209.367],
    [789, 5.007, 0.963],
    [749, 2.144, 853.196],
    [744, 5.253, 224.345],
    [687, 1.747, 1052.268],
    [654, 1.599, 0.048],
    [634, 2.299, 412.371],
    [625, 0.97, 210.118],
    [580, 3.093, 74.782],
    [546, 2.127, 350.332],
    [543, 1.518, 9.561],
    [530, 4.449, 117.32],
    [478, 2.965, 137.033],
    [474, 5.475, 742.99],
    [452, 1.044, 490.334],
    [449, 1.29, 127.472],
    [372, 2.278, 217.231],
    [355, 3.013, 838.969],
    [347, 1.539, 340.771],
    [343, 0.246, 0.521],
    [330, 0.247, 1581.959],
    [322, 0.961, 203.738],
    [322, 2.572, 647.011],
    [309, 3.495, 216.48],
    [287, 2.37, 351.817],
    [278, 0.4, 211.815],
    [249, 1.47, 1368.66],
    [227, 4.91, 12.53],
    [220, 4.204, 200.769],
    [209, 1.345, 625.67],
    [208, 0.483, 1162.475],
    [208, 1.283, 39.357],
    [204, 6.011, 265.989],
    [185, 3.503, 149.563],
    [184, 0.973, 4.193],
    [182, 5.491, 2.921],
    [174, 1.863, 0.751],
    [165, 0.44, 5.417],
    [149, 5.736, 52.69],
    [148, 1.535, 5.629],
    [146, 6.231, 195.14],
    [140, 4.295, 21.341],
    [131, 4.068, 10.295],
    [125, 6.277, 1898.351],
    [122, 1.976, 4.666],
    [118, 5.341, 554.07],
    [117, 2.679, 1155.361],
    [114, 5.594, 1059.382],
    [112, 1.105, 191.208],
    [110, 0.166, 1.484],
    [109, 3.438, 536.805],
    [107, 4.012, 956.289],
    [104, 2.192, 88.866],
    [103, 1.197, 1685.052],
    [101, 4.965, 269.921]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, N6 = function() {
  return [
    [21354295596, 0, 0],
    [1296855, 1.8282054, 213.2990954],
    [564348, 2.885001, 7.113547],
    [107679, 2.277699, 206.185548],
    [98323, 1.0807, 426.59819],
    [40255, 2.04128, 220.41264],
    [19942, 1.27955, 103.09277],
    [10512, 2.7488, 14.22709],
    [6939, 0.4049, 639.8973],
    [4803, 2.4419, 419.4846],
    [4056, 2.9217, 110.2063],
    [3769, 3.6497, 3.9322],
    [3385, 2.4169, 3.1814],
    [3302, 1.2626, 433.7117],
    [3071, 2.3274, 199.072],
    [1953, 3.5639, 11.0457],
    [1249, 2.628, 95.9792],
    [922, 1.961, 227.526],
    [706, 4.417, 529.691],
    [650, 6.174, 202.253],
    [628, 6.111, 309.278],
    [487, 6.04, 853.196],
    [479, 4.988, 522.577],
    [468, 4.617, 63.736],
    [417, 2.117, 323.505],
    [408, 1.299, 209.367],
    [352, 2.317, 632.784],
    [344, 3.959, 412.371],
    [340, 3.634, 316.392],
    [336, 3.772, 735.877],
    [332, 2.861, 210.118],
    [289, 2.733, 117.32],
    [281, 5.744, 2.448],
    [266, 0.543, 647.011],
    [230, 1.644, 216.48],
    [192, 2.965, 224.345],
    [173, 4.077, 846.083],
    [167, 2.597, 21.341],
    [136, 2.286, 10.295],
    [131, 3.441, 742.99],
    [128, 4.095, 217.231],
    [109, 6.161, 415.552],
    [98, 4.73, 838.97],
    [94, 3.48, 1052.27],
    [92, 3.95, 88.87],
    [87, 1.22, 440.83],
    [83, 3.11, 625.67],
    [78, 6.24, 302.16],
    [67, 0.29, 4.67],
    [66, 5.65, 9.56],
    [62, 4.29, 127.47],
    [62, 1.83, 195.14],
    [58, 2.48, 191.96],
    [57, 5.02, 137.03],
    [55, 0.28, 74.78],
    [54, 5.13, 490.33],
    [51, 1.46, 536.8],
    [47, 1.18, 149.56],
    [47, 5.15, 515.46],
    [46, 2.23, 956.29],
    [44, 2.71, 5.42],
    [40, 0.41, 269.92],
    [40, 3.89, 728.76],
    [38, 0.65, 422.67],
    [38, 2.53, 12.53],
    [37, 3.78, 2.92],
    [35, 6.08, 5.63],
    [34, 3.21, 1368.66],
    [33, 4.64, 277.03],
    [33, 5.43, 1066.5],
    [33, 0.3, 351.82],
    [32, 4.39, 1155.36],
    [31, 2.43, 52.69],
    [30, 2.84, 203],
    [30, 6.19, 284.15],
    [30, 3.39, 1059.38],
    [29, 2.03, 330.62],
    [28, 2.74, 265.99],
    [26, 4.51, 340.77]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, x6 = function() {
  return [
    [116441, 1.179879, 7.113547],
    [91921, 0.07425, 213.2991],
    [90592, 0, 0],
    [15277, 4.06492, 206.18555],
    [10631, 0.25778, 220.41264],
    [10605, 5.40964, 426.59819],
    [4265, 1.046, 14.2271],
    [1216, 2.9186, 103.0928],
    [1165, 4.6094, 639.8973],
    [1082, 5.6913, 433.7117],
    [1045, 4.0421, 199.072],
    [1020, 0.6337, 3.1814],
    [634, 4.388, 419.485],
    [549, 5.573, 3.932],
    [457, 1.268, 110.206],
    [425, 0.209, 227.526],
    [274, 4.288, 95.979],
    [162, 1.381, 11.046],
    [129, 1.566, 309.278],
    [117, 3.881, 853.196],
    [105, 4.9, 647.011],
    [101, 0.893, 21.341],
    [96, 2.91, 316.39],
    [95, 5.63, 412.37],
    [85, 5.73, 209.37],
    [83, 6.05, 216.48],
    [82, 1.02, 117.32],
    [75, 4.76, 210.12],
    [67, 0.46, 522.58],
    [66, 0.48, 10.29],
    [64, 0.35, 323.51],
    [61, 4.88, 632.78],
    [53, 2.75, 529.69],
    [46, 5.69, 440.83],
    [45, 1.67, 202.25],
    [42, 5.71, 88.87],
    [32, 0.07, 63.74],
    [32, 1.67, 302.16],
    [31, 4.16, 191.96],
    [27, 0.83, 224.34],
    [25, 5.66, 735.88],
    [20, 5.94, 217.23],
    [18, 4.9, 625.67],
    [17, 1.63, 742.99],
    [16, 0.58, 515.46],
    [14, 0.21, 838.97],
    [14, 3.76, 195.14],
    [12, 4.72, 203],
    [12, 0.13, 234.64],
    [12, 3.12, 846.08],
    [11, 5.92, 536.8],
    [11, 5.6, 728.76],
    [11, 3.2, 1066.5],
    [10, 4.99, 422.67],
    [10, 0.26, 330.62],
    [10, 4.15, 860.31],
    [9, 0.46, 956.29],
    [8, 2.14, 269.92],
    [8, 5.25, 429.78],
    [8, 4.03, 9.56],
    [7, 5.4, 1052.27],
    [6, 4.46, 284.15],
    [6, 5.93, 405.26]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, F6 = function() {
  return [
    [16039, 5.73945, 7.11355],
    [4250, 4.5854, 213.2991],
    [1907, 4.7608, 220.4126],
    [1466, 5.9133, 206.1855],
    [1162, 5.6197, 14.2271],
    [1067, 3.6082, 426.5982],
    [239, 3.861, 433.712],
    [237, 5.768, 199.072],
    [166, 5.116, 3.181],
    [151, 2.736, 639.897],
    [131, 4.743, 227.526],
    [63, 0.23, 419.48],
    [62, 4.74, 103.09],
    [40, 5.47, 21.34],
    [40, 5.96, 95.98],
    [39, 5.83, 110.21],
    [28, 3.01, 647.01],
    [25, 0.99, 3.93],
    [19, 1.92, 853.2],
    [18, 4.97, 10.29],
    [18, 1.03, 412.37],
    [18, 4.2, 216.48],
    [18, 3.32, 309.28],
    [16, 3.9, 440.83],
    [16, 5.62, 117.32],
    [13, 1.18, 88.87],
    [11, 5.58, 11.05],
    [11, 5.93, 191.96],
    [10, 3.95, 209.37],
    [9, 3.39, 302.16],
    [8, 4.88, 323.51],
    [7, 0.38, 632.78],
    [6, 2.25, 522.58],
    [6, 1.06, 210.12],
    [5, 4.64, 234.64],
    [4, 3.14, 0],
    [4, 2.31, 515.46],
    [3, 2.2, 860.31],
    [3, 0.59, 529.69],
    [3, 4.93, 224.34],
    [3, 0.42, 625.67],
    [2, 4.77, 330.62],
    [2, 3.35, 429.78],
    [2, 3.2, 202.25],
    [2, 1.19, 1066.5],
    [2, 1.35, 405.26],
    [2, 4.16, 223.59],
    [2, 3.07, 654.12]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, V6 = function() {
  return [
    [1662, 3.9983, 7.1135],
    [257, 2.984, 220.413],
    [236, 3.902, 14.227],
    [149, 2.741, 213.299],
    [114, 3.142, 0],
    [110, 1.515, 206.186],
    [68, 1.72, 426.6],
    [40, 2.05, 433.71],
    [38, 1.24, 199.07],
    [31, 3.01, 227.53],
    [15, 0.83, 639.9],
    [9, 3.71, 21.34],
    [6, 2.42, 419.48],
    [6, 1.16, 647.01],
    [4, 1.45, 95.98],
    [4, 2.12, 440.83],
    [3, 4.09, 110.21],
    [3, 2.77, 412.37],
    [3, 3.01, 88.87],
    [3, 0, 853.2],
    [3, 0.39, 103.09],
    [2, 3.78, 117.32],
    [2, 2.83, 234.64],
    [2, 5.08, 309.28],
    [2, 2.24, 216.48],
    [2, 5.19, 302.16],
    [1, 1.55, 191.96]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, U6 = function() {
  return [
    [124, 2.259, 7.114],
    [34, 2.16, 14.23],
    [28, 1.2, 220.41],
    [6, 1.22, 227.53],
    [5, 0.24, 433.71],
    [4, 6.23, 426.6],
    [3, 2.97, 199.07],
    [3, 4.29, 206.19],
    [2, 6.25, 213.3],
    [1, 5.28, 639.9],
    [1, 0.24, 440.83],
    [1, 3.14, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, z6 = function() {
  return [
    [4330678, 3.6028443, 213.2990954],
    [240348, 2.852385, 426.598191],
    [84746, 0, 0],
    [34116, 0.57297, 206.18555],
    [30863, 3.48442, 220.41264],
    [14734, 2.11847, 639.89729],
    [9917, 5.79, 419.4846],
    [6994, 4.736, 7.1135],
    [4808, 5.4331, 316.3919],
    [4788, 4.9651, 110.2063],
    [3432, 2.7326, 433.7117],
    [1506, 6.013, 103.0928],
    [1060, 5.631, 529.691],
    [969, 5.204, 632.784],
    [942, 1.396, 853.196],
    [708, 3.803, 323.505],
    [552, 5.131, 202.253],
    [400, 3.359, 227.526],
    [319, 3.626, 209.367],
    [316, 1.997, 647.011],
    [314, 0.465, 217.231],
    [284, 4.886, 224.345],
    [236, 2.139, 11.046],
    [215, 5.95, 846.083],
    [209, 2.12, 415.552],
    [207, 0.73, 199.072],
    [179, 2.954, 63.736],
    [141, 0.644, 490.334],
    [139, 4.595, 14.227],
    [139, 1.998, 735.877],
    [135, 5.245, 742.99],
    [122, 3.115, 522.577],
    [116, 3.109, 216.48],
    [114, 0.963, 210.118]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Y6 = function() {
  return [
    [397555, 5.3329, 213.299095],
    [49479, 3.14159, 0],
    [18572, 6.09919, 426.59819],
    [14801, 2.30586, 206.18555],
    [9644, 1.6967, 220.4126],
    [3757, 1.2543, 419.4846],
    [2717, 5.9117, 639.8973],
    [1455, 0.8516, 433.7117],
    [1291, 2.9177, 7.1135],
    [853, 0.436, 316.392],
    [298, 0.919, 632.784],
    [292, 5.316, 853.196],
    [284, 1.619, 227.526],
    [275, 3.889, 103.093],
    [172, 0.052, 647.011],
    [166, 2.444, 199.072],
    [158, 5.209, 110.206],
    [128, 1.207, 529.691],
    [110, 2.457, 217.231],
    [82, 2.76, 210.12],
    [81, 2.86, 14.23],
    [69, 1.66, 202.25],
    [65, 1.26, 216.48],
    [61, 1.25, 209.37],
    [59, 1.82, 323.51],
    [46, 0.82, 440.83],
    [36, 1.82, 224.34],
    [34, 2.84, 117.32],
    [33, 1.31, 412.37],
    [32, 1.19, 846.08],
    [27, 4.65, 1066.5],
    [27, 4.44, 11.05]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, H6 = function() {
  return [
    [20630, 0.50482, 213.2991],
    [3720, 3.9983, 206.1855],
    [1627, 6.1819, 220.4126],
    [1346, 0, 0],
    [706, 3.039, 419.485],
    [365, 5.099, 426.598],
    [330, 5.279, 433.712],
    [219, 3.828, 639.897],
    [139, 1.043, 7.114],
    [104, 6.157, 227.526],
    [93, 1.98, 316.39],
    [71, 4.15, 199.07],
    [52, 2.88, 632.78],
    [49, 4.43, 647.01],
    [41, 3.16, 853.2],
    [29, 4.53, 210.12],
    [24, 1.12, 14.23],
    [21, 4.35, 217.23],
    [20, 5.31, 440.83],
    [18, 0.85, 110.21],
    [17, 5.68, 216.48],
    [16, 4.26, 103.09],
    [14, 3, 412.37],
    [12, 2.53, 529.69],
    [8, 3.32, 202.25],
    [7, 5.56, 209.37],
    [7, 0.29, 323.51],
    [6, 1.16, 117.32],
    [6, 3.61, 860.31]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, k6 = function() {
  return [
    [666, 1.99, 213.299],
    [632, 5.698, 206.186],
    [398, 0, 0],
    [188, 4.338, 220.413],
    [92, 4.84, 419.48],
    [52, 3.42, 433.71],
    [42, 2.38, 426.6],
    [26, 4.4, 227.53],
    [21, 5.85, 199.07],
    [18, 1.99, 639.9],
    [11, 5.37, 7.11],
    [10, 2.55, 647.01],
    [7, 3.46, 316.39],
    [6, 4.8, 632.78],
    [6, 0.02, 210.12],
    [6, 3.52, 440.83],
    [5, 5.64, 14.23],
    [5, 1.22, 853.2],
    [4, 4.71, 412.37],
    [3, 0.63, 103.09],
    [2, 3.72, 216.48]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, W6 = function() {
  return [
    [80, 1.12, 206.19],
    [32, 3.12, 213.3],
    [17, 2.48, 220.41],
    [12, 3.14, 0],
    [9, 0.38, 419.48],
    [6, 1.56, 433.71],
    [5, 2.63, 227.53],
    [5, 1.28, 199.07],
    [1, 1.43, 426.6],
    [1, 0.67, 647.01],
    [1, 1.72, 440.83],
    [1, 6.18, 639.9]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, K6 = function() {
  return [
    [955758136, 0, 0],
    [52921382, 2.3922622, 213.29909544],
    [1873680, 5.2354961, 206.1855484],
    [1464664, 1.6476305, 426.5981909],
    [821891, 5.9352, 316.39187],
    [547507, 5.015326, 103.092774],
    [371684, 2.271148, 220.412642],
    [361778, 3.139043, 7.113547],
    [140618, 5.704067, 632.783739],
    [108975, 3.293136, 110.206321],
    [69007, 5.941, 419.48464],
    [61053, 0.94038, 639.89729],
    [48913, 1.55733, 202.2534],
    [34144, 0.19519, 277.03499],
    [32402, 5.47085, 949.17561],
    [20937, 0.46349, 735.87651],
    [20839, 1.52103, 433.71174],
    [20747, 5.33256, 199.072],
    [15298, 3.05944, 529.69097],
    [14296, 2.60434, 323.50542],
    [12884, 1.64892, 138.5175],
    [11993, 5.98051, 846.08283],
    [11380, 1.73106, 522.57742],
    [9796, 5.2048, 1265.5675],
    [7753, 5.8519, 95.9792],
    [6771, 3.0043, 14.2271],
    [6466, 0.1773, 1052.2684],
    [5850, 1.4552, 415.5525],
    [5307, 0.5974, 63.7359],
    [4696, 2.1492, 227.5262],
    [4044, 1.6401, 209.3669],
    [3688, 0.7802, 412.3711],
    [3461, 1.8509, 175.1661],
    [3420, 4.9455, 1581.9593],
    [3401, 0.5539, 350.3321],
    [3376, 3.6953, 224.3448],
    [2976, 5.6847, 210.1177],
    [2885, 1.3876, 838.9693],
    [2881, 0.1796, 853.1964],
    [2508, 3.5385, 742.9901],
    [2448, 6.1841, 1368.6603],
    [2406, 2.9656, 117.3199],
    [2174, 0.0151, 340.7709],
    [2024, 5.0541, 11.0457]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, X6 = function() {
  return [
    [6182981, 0.2584352, 213.2990954],
    [506578, 0.711147, 206.185548],
    [341394, 5.796358, 426.598191],
    [188491, 0.472157, 220.412642],
    [186262, 3.141593, 0],
    [143891, 1.407449, 7.113547],
    [49621, 6.01744, 103.09277],
    [20928, 5.09246, 639.89729],
    [19953, 1.1756, 419.48464],
    [18840, 1.6082, 110.20632],
    [13877, 0.75886, 199.072],
    [12893, 5.9433, 433.71174],
    [5397, 1.2885, 14.2271],
    [4869, 0.8679, 323.5054],
    [4247, 0.393, 227.5262],
    [3252, 1.2585, 95.9792],
    [3081, 3.4366, 522.5774],
    [2909, 4.6068, 202.2534],
    [2856, 2.1673, 735.8765],
    [1988, 2.4505, 412.3711],
    [1941, 6.0239, 209.3669],
    [1581, 1.2919, 210.1177],
    [1340, 4.308, 853.1964],
    [1316, 1.253, 117.3199],
    [1203, 1.8665, 316.3919],
    [1091, 0.0753, 216.4805],
    [966, 0.48, 632.784],
    [954, 5.152, 647.011],
    [898, 0.983, 529.691],
    [882, 1.885, 1052.268],
    [874, 1.402, 224.345],
    [785, 3.064, 838.969],
    [740, 1.382, 625.67],
    [658, 4.144, 309.278],
    [650, 1.725, 742.99],
    [613, 3.033, 63.736],
    [599, 2.549, 217.231],
    [503, 2.13, 3.932]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Q6 = function() {
  return [
    [436902, 4.786717, 213.299095],
    [71923, 2.5007, 206.18555],
    [49767, 4.97168, 220.41264],
    [43221, 3.8694, 426.59819],
    [29646, 5.9631, 7.11355],
    [4721, 2.4753, 199.072],
    [4142, 4.1067, 433.7117],
    [3789, 3.0977, 639.8973],
    [2964, 1.3721, 103.0928],
    [2556, 2.8507, 419.4846],
    [2327, 0, 0],
    [2208, 6.2759, 110.2063],
    [2188, 5.8555, 14.2271],
    [1957, 4.9245, 227.5262],
    [924, 5.464, 323.505],
    [706, 2.971, 95.979],
    [546, 4.129, 412.371],
    [431, 5.178, 522.577],
    [405, 4.173, 209.367],
    [391, 4.481, 216.48],
    [374, 5.834, 117.32],
    [361, 3.277, 647.011],
    [356, 3.192, 210.118],
    [326, 2.269, 853.196],
    [207, 4.022, 735.877],
    [204, 0.088, 202.253],
    [180, 3.597, 632.784],
    [178, 4.097, 440.825],
    [154, 3.135, 625.67],
    [148, 0.136, 302.165],
    [133, 2.594, 191.958],
    [132, 5.933, 309.278]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Z6 = function() {
  return [
    [20315, 3.02187, 213.2991],
    [8924, 3.1914, 220.4126],
    [6909, 4.3517, 206.1855],
    [4087, 4.2241, 7.1135],
    [3879, 2.0106, 426.5982],
    [1071, 4.2036, 199.072],
    [907, 2.283, 433.712],
    [606, 3.175, 227.526],
    [597, 4.135, 14.227],
    [483, 1.173, 639.897],
    [393, 0, 0],
    [229, 4.698, 419.485],
    [188, 4.59, 110.206],
    [150, 3.202, 103.093],
    [121, 3.768, 323.505],
    [102, 4.71, 95.979],
    [101, 5.819, 412.371],
    [93, 1.44, 647.01],
    [84, 2.63, 216.48],
    [73, 4.15, 117.32],
    [62, 2.31, 440.83],
    [55, 0.31, 853.2],
    [50, 2.39, 209.37],
    [45, 4.37, 191.96],
    [41, 0.69, 522.58],
    [40, 1.84, 302.16],
    [38, 5.94, 88.87],
    [32, 4.01, 21.34]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, v6 = function() {
  return [
    [1202, 1.415, 220.4126],
    [708, 1.162, 213.299],
    [516, 6.24, 206.186],
    [427, 2.469, 7.114],
    [268, 0.187, 426.598],
    [170, 5.959, 199.072],
    [150, 0.48, 433.712],
    [145, 1.442, 227.526],
    [121, 2.405, 14.227],
    [47, 5.57, 639.9],
    [19, 5.86, 647.01],
    [17, 0.53, 440.83],
    [16, 2.9, 110.21],
    [15, 0.3, 419.48],
    [14, 1.3, 412.37],
    [13, 2.09, 323.51],
    [11, 0.22, 95.98],
    [11, 2.46, 117.32],
    [10, 3.14, 0],
    [9, 1.56, 88.87],
    [9, 2.28, 21.34],
    [9, 0.68, 216.48],
    [8, 1.27, 234.64]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, j6 = function() {
  return [
    [129, 5.913, 220.413],
    [32, 0.69, 7.11],
    [27, 5.91, 227.53],
    [20, 4.95, 433.71],
    [20, 0.67, 14.23],
    [14, 2.67, 206.19],
    [14, 1.46, 199.07],
    [13, 4.59, 426.6],
    [7, 4.63, 213.3],
    [5, 3.61, 639.9],
    [4, 4.9, 440.83],
    [3, 4.07, 647.01],
    [3, 4.66, 191.96],
    [3, 0.49, 323.51],
    [3, 3.18, 419.48],
    [2, 3.7, 88.87],
    [2, 3.32, 95.98],
    [2, 0.56, 117.32]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function St(t) {
  const e = I(t), n = I6(), i = N6(), o = x6(), s = F6(), a = V6(), f = U6(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), c = r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5);
  return L(c / 1e8 * m);
}
function Rt(t) {
  const e = I(t), n = z6(), i = Y6(), o = H6(), s = k6(), a = W6(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function st(t) {
  const e = I(t), n = K6(), i = X6(), o = Q6(), s = Z6(), a = v6(), f = j6(), r = n.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), g = i.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), M = o.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), d = s.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), T = a.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0), l = f.reduce((h, u) => h + u.A * Math.cos(u.B + u.C * e), 0);
  return (r + g * e + M * Math.pow(e, 2) + d * Math.pow(e, 3) + T * Math.pow(e, 4) + l * Math.pow(e, 5)) / 1e8;
}
function bn(t) {
  return {
    longitude: St(t),
    latitude: Rt(t)
  };
}
function to(t, e = R.Mean) {
  return P(
    bn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const eo = {
  equatorialRadius: 60268,
  meanRadius: 58232,
  mass: 568.3174,
  bulkDensity: 0.6871,
  siderealRotationPeriod: 0.44401,
  siderealOrbitPeriod: 29.447498,
  visualMagnitude: -8.88,
  geometricAlbedo: 0.47,
  equatorialGravity: 10.44,
  escapeVelocity: 36.09
}, Qt = {
  semiMajorAxis: [9.554909192, -2139e-9, 4e-9, 0],
  eccentricity: [0.05554814, -346641e-9, -6436e-10, 34e-10],
  [J.MeanOfTheDate]: {
    meanLongitude: [50.077444, 1223.5110686, 51908e-8, -3e-8],
    inclination: [2.488879, -37362e-7, -1519e-8, 87e-9],
    longitudeOfAscendingNode: [113.665503, 0.877088, -12176e-8, -2249e-9],
    longitudeOfPerihelion: [93.057237, 1.9637613, 83753e-8, 4928e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [50.077444, 1222.1138488, 21004e-8, -46e-9],
    inclination: [2.488879, 25514e-7, -4906e-8, 17e-9],
    longitudeOfAscendingNode: [113.665503, -0.2566722, -18399e-8, 48e-8],
    longitudeOfPerihelion: [93.057237, 0.5665415, 5285e-7, 4912e-9]
  }
};
function Pn(t) {
  const n = 0.03393 * (at(t) - 2003.52);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function no(t) {
  const e = Pn(t) + 0.5;
  return 245283012e-2 + 10764.21676 * e + 827e-6 * Math.pow(e, 2);
}
function oo(t) {
  const e = Pn(t);
  return 245283012e-2 + 10764.21676 * e + 827e-6 * Math.pow(e, 2);
}
function io(t, e = J.MeanOfTheDate) {
  return xt(t, Qt[e].meanLongitude);
}
function S1(t) {
  return Ft(t, Qt.semiMajorAxis);
}
function ue(t) {
  return Vt(t, Qt.eccentricity);
}
function co(t, e = J.MeanOfTheDate) {
  return Ut(t, Qt[e].inclination);
}
function so(t, e = J.MeanOfTheDate) {
  return zt(t, Qt[e].longitudeOfAscendingNode);
}
function ao(t, e = J.MeanOfTheDate) {
  return Yt(t, Qt[e].longitudeOfPerihelion);
}
function le(t) {
  return dt(t, St, Rt, st);
}
function wn(t) {
  return rt(t, St, Rt, st);
}
function qn(t) {
  return Tt(t, St, Rt, st);
}
function ve(t, e = R.Mean) {
  return P(
    wn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function ro(t) {
  return P(
    qn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function uo(t) {
  return Gt(st(t), S1(t));
}
function lo(t) {
  return _t(ue(t), S1(t));
}
function fo(t) {
  return It(ue(t), S1(t));
}
function Do(t) {
  return Nt(ue(t), S1(t));
}
function go(t, e) {
  return pt(t, e, ve);
}
function ho(t, e) {
  return At(t, e, ve);
}
function Gn(t) {
  const e = G(t), n = (28.075216 - 0.012998 * e + 4e-6 * Math.pow(e, 2)) * D, i = (169.50847 + 1.394681 * e + 412e-6 + Math.pow(e, 2)) * D, o = p.getEclipticLongitude(t) * D;
  let s = h1(9);
  const a = t - s;
  let f = H1(a, St, Rt, st);
  s = h1(f.Delta);
  const r = t - s;
  f = H1(r, St, Rt, st);
  const [g, M, d] = [f.l, f.b, f.r], T = f.Delta, l = Ot(Math.atan2(f.y, f.x), c0), c = Math.atan2(f.z, Math.sqrt(Math.pow(f.x, 2) + Math.pow(f.y, 2))), h = Math.asin(Math.sin(n) * Math.cos(c) * Math.sin(l - i) - Math.cos(n) * Math.sin(c)) * m, u = 375.35 / T, E = u * Math.sin(Math.abs(h) * D), _ = (113.6655 + 0.8771 * e) * D, b = (g * m - 0.01759 / d) * D, N = (M * m - 764e-6 * Math.cos(g - _) / d) * D, z = Math.asin(Math.sin(n) * Math.cos(N) * Math.sin(b - i) - Math.cos(n) * Math.sin(N)) * m, F = Math.atan2(
    Math.sin(n) * Math.sin(N) + Math.cos(n) * Math.cos(N) * Math.sin(b - i),
    Math.cos(N) * Math.cos(b - i)
  ) * m, X = Math.atan2(
    Math.sin(n) * Math.sin(c) + Math.cos(n) * Math.cos(c) * Math.sin(l - i),
    Math.cos(c) * Math.cos(l - i)
  ) * m, nt = L(Math.abs(F - X)), v = p.getTrueObliquityOfEcliptic(t), V = p.getNutationInLongitude(t) / 3600, w = (i - pe) * m, e1 = (pe - n) * m, x1 = 5693e-6 * Math.cos(o - l) / Math.cos(c), O = 5693e-6 * Math.sin(o - l) * Math.sin(c);
  let C = L(l * m + x1);
  const A = c * m + O, B = w + V;
  C = C + V;
  const y = P({ longitude: C, latitude: A }, v), S = y.rightAscension * D, q = y.declination * D, U = P({ longitude: B, latitude: e1 }, v), Y = U.rightAscension * D, k = U.declination * D, ut = Math.atan2(
    Math.cos(k) * Math.sin(Y - S),
    Math.sin(k) * Math.cos(q) - Math.cos(k) * Math.sin(q) * Math.cos(Y - S)
  ) * m;
  return {
    majorAxis: u,
    // The major axis of the outer edge of the outer ring.
    minorAxis: E,
    // The minor axis of the outer edge of the outer ring.
    // The position angle of the north pole of rotation of the planet. Because the ring is
    // situated exactly in Saturn's equator plane, P is also the geocentric position angle of the
    // northern semiminor axis of the apparent ellipse of the ring, measured from the North towards
    // the East (trust me... see AA p.317)
    northPolePositionAngle: ut,
    // The difference between the Saturnicentric longitude of the Sun and the Earth, measured in
    // the plane of the ring. Used to compute Saturn's magnitude.
    saturnicentricSunEarthLongitudesDifference: nt,
    // The Saturnicentric coordinates of the Earth referred to the plane of the ring (B)
    earthCoordinates: {
      longitude: X,
      latitude: h
    },
    // The Saturnicentric coordinates of the Sun referred to the plane of the ring (B)
    sunCoordinates: {
      longitude: F,
      latitude: z
    }
  };
}
function _n(t) {
  const e = st(t), n = p.getRadiusVector(t), i = le(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function Mo(t) {
  const e = _n(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function To(t) {
  const e = st(t), n = le(t), i = Gn(t), o = i.earthCoordinates.latitude * D, s = Math.sin(o), a = i.saturnicentricSunEarthLongitudesDifference;
  return -8.88 + 5 * Math.log10(e * n) + 0.044 * Math.abs(a) - 2.6 * Math.sin(Math.abs(o)) + 1.25 * Math.pow(s, 2);
}
function In(t) {
  return 8.34 / le(t);
}
function po(t) {
  return In(t);
}
const je = {
  // Heliocentric coordinates
  getEclipticLongitude: St,
  getEclipticLatitude: Rt,
  getEclipticCoordinates: bn,
  getEquatorialCoordinates: to,
  getRadiusVector: st,
  // Geocentric coordinates
  getGeocentricDistance: le,
  getGeocentricEclipticCoordinates: wn,
  getApparentGeocentricEclipticCoordinates: qn,
  getGeocentricEquatorialCoordinates: ve,
  getApparentGeocentricEquatorialCoordinates: ro,
  // Planet elliptical properties
  getInstantaneousVelocity: uo,
  getVelocityAtPerihelion: lo,
  getVelocityAtAphelion: fo,
  getLengthOfEllipse: Do,
  getRiseTransitSet: go,
  getAccurateRiseTransitSet: ho,
  // Planet orbital properties
  getMeanLongitude: io,
  getEccentricity: ue,
  getInclination: co,
  getLongitudeOfAscendingNode: so,
  getLongitudeOfPerihelion: ao,
  getSemiMajorAxis: S1,
  // Planet base properties
  getAphelion: no,
  getPerihelion: oo,
  getPhaseAngle: _n,
  getIlluminatedFraction: Mo,
  getMagnitude: To,
  getEquatorialSemiDiameter: In,
  getPolarSemiDiameter: po,
  // Specific
  getRingSystemDetails: Gn,
  // Fixed values
  constants: eo,
  orbitalElements: Qt
}, Ao = function() {
  return [
    [548129294, 0, 0],
    [9260408, 0.8910642, 74.7815986],
    [1504248, 3.6271926, 1.4844727],
    [365982, 1.899622, 73.297126],
    [272328, 3.358237, 149.563197],
    [70328, 5.39254, 63.7359],
    [68893, 6.09292, 76.26607],
    [61999, 2.26952, 2.96895],
    [61951, 2.85099, 11.0457],
    [26469, 3.14152, 71.81265],
    [25711, 6.1138, 454.90937],
    [21079, 4.36059, 148.07872],
    [17819, 1.74437, 36.64856],
    [14613, 4.73732, 3.93215],
    [11163, 5.82682, 224.3448],
    [10998, 0.48865, 138.5175],
    [9527, 2.9552, 35.1641],
    [7546, 5.2363, 109.9457],
    [4220, 3.2333, 70.8494],
    [4052, 2.2775, 151.0477],
    [3490, 5.4831, 146.5943],
    [3355, 1.0655, 4.4534],
    [3144, 4.752, 77.7505],
    [2927, 4.629, 9.5612],
    [2922, 5.3524, 85.8273],
    [2273, 4.366, 70.3282],
    [2149, 0.6075, 38.133],
    [2051, 1.5177, 0.1119],
    [1992, 4.9244, 277.035],
    [1667, 3.6274, 380.1278],
    [1533, 2.5859, 52.6902],
    [1376, 2.0428, 65.2204],
    [1372, 4.1964, 111.4302],
    [1284, 3.1135, 202.2534],
    [1282, 0.5427, 222.8603],
    [1244, 0.9161, 2.4477],
    [1221, 0.199, 108.4612],
    [1151, 4.179, 33.6796],
    [1150, 0.9334, 3.1814],
    [1090, 1.775, 12.5302],
    [1072, 0.2356, 62.2514],
    [946, 1.192, 127.472],
    [708, 5.183, 213.299],
    [653, 0.966, 78.714],
    [628, 0.182, 984.6],
    [607, 5.432, 529.691],
    [559, 3.358, 0.521],
    [524, 2.013, 299.126],
    [483, 2.106, 0.963],
    [471, 1.407, 184.727],
    [467, 0.415, 145.11],
    [434, 5.521, 183.243],
    [405, 5.987, 8.077],
    [399, 0.338, 415.552],
    [396, 5.87, 351.817],
    [379, 2.35, 56.622],
    [310, 5.833, 145.631],
    [300, 5.644, 22.091],
    [294, 5.839, 39.618],
    [252, 1.637, 221.376],
    [249, 4.746, 225.829],
    [239, 2.35, 137.033],
    [224, 0.516, 84.343],
    [223, 2.843, 0.261],
    [220, 1.922, 67.668],
    [217, 6.142, 5.938],
    [216, 4.778, 340.771],
    [208, 5.58, 68.844],
    [202, 1.297, 0.048],
    [199, 0.956, 152.532],
    [194, 1.888, 456.394],
    [193, 0.916, 453.425],
    [187, 1.319, 0.16],
    [182, 3.536, 79.235],
    [173, 1.539, 160.609],
    [172, 5.68, 219.891],
    [170, 3.677, 5.417],
    [169, 5.879, 18.159],
    [165, 1.424, 106.977],
    [163, 3.05, 112.915],
    [158, 0.738, 54.175],
    [147, 1.263, 59.804],
    [143, 1.3, 35.425],
    [139, 5.386, 32.195],
    [139, 4.26, 909.819],
    [124, 1.374, 7.114],
    [110, 2.027, 554.07],
    [109, 5.706, 77.963],
    [104, 5.028, 0.751],
    [104, 1.458, 24.379],
    [103, 0.681, 14.978]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Jo = function() {
  return [
    [7502543122, 0, 0],
    [154458, 5.242017, 74.781599],
    [24456, 1.71256, 1.48447],
    [9258, 0.4284, 11.0457],
    [8266, 1.5022, 63.7359],
    [7842, 1.3198, 149.5632],
    [3899, 0.4648, 3.9322],
    [2284, 4.1737, 76.2661],
    [1927, 0.5301, 2.9689],
    [1233, 1.5863, 70.8494],
    [791, 5.436, 3.181],
    [767, 1.996, 73.297],
    [482, 2.984, 85.827],
    [450, 4.138, 138.517],
    [446, 3.723, 224.345],
    [427, 4.731, 71.813],
    [354, 2.583, 148.079],
    [348, 2.454, 9.561],
    [317, 5.579, 52.69],
    [206, 2.363, 2.448],
    [189, 4.202, 56.622],
    [184, 0.284, 151.048],
    [180, 5.684, 12.53],
    [171, 3.001, 78.714],
    [158, 2.909, 0.963],
    [155, 5.591, 4.453],
    [154, 4.652, 35.164],
    [152, 2.942, 77.751],
    [143, 2.59, 62.251],
    [121, 4.148, 127.472],
    [116, 3.732, 65.22],
    [102, 4.188, 145.631],
    [102, 6.034, 0.112],
    [88, 3.99, 18.16],
    [88, 6.16, 202.25],
    [81, 2.64, 22.09],
    [72, 6.05, 70.33],
    [69, 4.05, 77.96],
    [59, 3.7, 67.67],
    [47, 3.54, 351.82],
    [44, 5.91, 7.11],
    [43, 5.72, 5.42],
    [39, 4.92, 222.86],
    [36, 5.9, 33.68],
    [36, 3.29, 8.08],
    [36, 3.33, 71.6],
    [35, 5.08, 38.13],
    [31, 5.62, 984.6],
    [31, 5.5, 59.8],
    [31, 5.46, 160.61],
    [30, 1.66, 447.8],
    [29, 1.15, 462.02],
    [29, 4.52, 84.34],
    [27, 5.54, 131.4],
    [27, 6.15, 299.13],
    [26, 4.99, 137.03],
    [25, 5.74, 380.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, mo = function() {
  return [
    [53033, 0, 0],
    [2358, 2.2601, 74.7816],
    [769, 4.526, 11.046],
    [552, 3.258, 63.736],
    [542, 2.276, 3.932],
    [529, 4.923, 1.484],
    [258, 3.691, 3.181],
    [239, 5.858, 149.563],
    [182, 6.218, 70.849],
    [54, 1.44, 76.27],
    [49, 6.03, 56.62],
    [45, 3.91, 2.45],
    [45, 0.81, 85.83],
    [38, 1.78, 52.69],
    [37, 4.46, 2.97],
    [33, 0.86, 9.56],
    [29, 5.1, 73.3],
    [24, 2.11, 18.16],
    [22, 5.99, 138.52],
    [22, 4.82, 78.71],
    [21, 2.4, 77.96],
    [21, 2.17, 224.34],
    [17, 2.54, 145.63],
    [17, 3.47, 12.53],
    [12, 0.02, 22.09],
    [11, 0.08, 127.47],
    [10, 5.16, 71.6],
    [10, 4.46, 62.25],
    [9, 4.26, 7.11],
    [8, 5.5, 67.67],
    [7, 1.25, 5.42],
    [6, 3.36, 447.8],
    [6, 5.45, 65.22],
    [6, 4.52, 151.05],
    [6, 5.73, 462.02]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Co = function() {
  return [
    [121, 0.024, 74.782],
    [68, 4.12, 3.93],
    [53, 2.39, 11.05],
    [46, 0, 0],
    [45, 2.04, 3.18],
    [44, 2.96, 1.48],
    [25, 4.89, 63.74],
    [21, 4.55, 70.85],
    [20, 2.31, 149.56],
    [9, 1.58, 56.62],
    [4, 0.23, 18.16],
    [4, 5.39, 76.27],
    [4, 0.95, 77.96],
    [3, 4.98, 85.83],
    [3, 4.13, 52.69],
    [3, 0.37, 78.71],
    [2, 0.86, 145.63],
    [2, 5.66, 9.56]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, $o = function() {
  return [
    [114, 3.142, 0],
    [6, 4.58, 74.78],
    [3, 0.35, 11.05],
    [1, 3.42, 56.62]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Lo = function() {
  return [
    [1346278, 2.6187781, 74.7815986],
    [62341, 5.08111, 149.5632],
    [61601, 3.14159, 0],
    [9964, 1.616, 76.2661],
    [9926, 0.5763, 73.2971],
    [3259, 1.2612, 224.3448],
    [2972, 2.2437, 1.4845],
    [2010, 6.0555, 148.0787],
    [1522, 0.2796, 63.7359],
    [924, 4.038, 151.048],
    [761, 6.14, 71.813],
    [522, 3.321, 138.517],
    [463, 0.743, 85.827],
    [437, 3.381, 529.691],
    [435, 0.341, 77.751],
    [431, 3.554, 213.299],
    [420, 5.213, 11.046],
    [245, 0.788, 2.969],
    [233, 2.257, 222.86],
    [216, 1.591, 38.133],
    [180, 3.725, 299.126],
    [175, 1.236, 146.594],
    [174, 1.937, 380.128],
    [160, 5.336, 111.43],
    [144, 5.962, 35.164],
    [116, 5.739, 70.849],
    [106, 0.941, 70.328],
    [102, 2.619, 78.714]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Eo = function() {
  return [
    [206366, 4.123943, 74.781599],
    [8563, 0.3382, 149.5632],
    [1726, 2.1219, 73.2971],
    [1374, 0, 0],
    [1369, 3.0686, 76.2661],
    [451, 3.777, 1.484],
    [400, 2.848, 224.345],
    [307, 1.255, 148.079],
    [154, 3.786, 63.736],
    [112, 5.573, 151.048],
    [111, 5.329, 138.517],
    [83, 3.59, 71.81],
    [56, 3.4, 85.83],
    [54, 1.7, 77.75],
    [42, 1.21, 11.05],
    [41, 4.45, 78.71],
    [32, 3.77, 222.86],
    [30, 2.56, 2.97],
    [27, 5.34, 213.3],
    [26, 0.42, 380.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Bo = function() {
  return [
    [9212, 5.8004, 74.7816],
    [557, 0, 0],
    [286, 2.177, 149.563],
    [95, 3.84, 73.3],
    [45, 4.88, 76.27],
    [20, 5.46, 1.48],
    [15, 0.88, 138.52],
    [14, 2.85, 148.08],
    [14, 5.07, 63.74],
    [10, 5, 224.34],
    [8, 6.27, 78.71]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Oo = function() {
  return [
    [268, 1.251, 74.782],
    [11, 3.14, 0],
    [6, 4.01, 149.56],
    [3, 5.78, 73.3]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, yo = function() {
  return [
    [6, 2.85, 74.78]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, So = function() {
  return [
    [1921264848, 0, 0],
    [88784984, 5.60377527, 74.78159857],
    [3440836, 0.328361, 73.2971259],
    [2055653, 1.7829517, 149.5631971],
    [649322, 4.522473, 76.266071],
    [602248, 3.860038, 63.735898],
    [496404, 1.401399, 454.909367],
    [338526, 1.580027, 138.517497],
    [243508, 1.570866, 71.812653],
    [190522, 1.998094, 1.484473],
    [161858, 2.791379, 148.078724],
    [143706, 1.383686, 11.0457],
    [93192, 0.17437, 36.64856],
    [89806, 3.66105, 109.94569],
    [71424, 4.24509, 224.3448],
    [46677, 1.39977, 35.16409],
    [39026, 3.36235, 277.03499],
    [39010, 1.66971, 70.84945],
    [36755, 3.88649, 146.59425],
    [30349, 0.701, 151.04767],
    [29156, 3.18056, 77.75054],
    [25786, 3.78538, 85.8273],
    [25620, 5.25656, 380.12777],
    [22637, 0.72519, 529.69097],
    [20473, 2.7964, 70.32818],
    [20472, 1.55589, 202.2534],
    [17901, 0.55455, 2.96895],
    [15503, 5.35405, 38.13304],
    [14702, 4.90434, 108.46122],
    [12897, 2.62154, 111.43016],
    [12328, 5.96039, 127.4718],
    [11959, 1.75044, 984.60033],
    [11853, 0.99343, 52.6902],
    [11696, 3.29826, 3.93215],
    [11495, 0.43774, 65.22037],
    [10793, 1.42105, 213.2991],
    [9111, 4.9964, 62.2514],
    [8421, 5.2535, 222.8603],
    [8402, 5.0388, 415.5525],
    [7449, 0.7949, 351.8166],
    [7329, 3.9728, 183.2428],
    [6046, 5.6796, 78.7138],
    [5524, 3.115, 9.5612],
    [5445, 5.1058, 145.1098],
    [5238, 2.6296, 33.6796],
    [4079, 3.2206, 340.7709],
    [3919, 4.2502, 39.6175],
    [3802, 6.1099, 184.7273],
    [3781, 3.4584, 456.3938],
    [3687, 2.4872, 453.4249],
    [3102, 4.1403, 219.8914],
    [2963, 0.8298, 56.6224],
    [2942, 0.4239, 299.1264],
    [2940, 2.1464, 137.033],
    [2938, 3.6766, 140.002],
    [2865, 0.31, 12.5302],
    [2538, 4.8546, 131.4039],
    [2364, 0.4425, 554.07],
    [2183, 2.9404, 305.3462]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Ro = function() {
  return [
    [1479896, 3.6720571, 74.7815986],
    [71212, 6.22601, 63.7359],
    [68627, 6.13411, 149.5632],
    [24060, 3.14159, 0],
    [21468, 2.60177, 76.26607],
    [20857, 5.24625, 11.0457],
    [11405, 0.01848, 70.84945],
    [7497, 0.4236, 73.2971],
    [4244, 1.4169, 85.8273],
    [3927, 3.1551, 71.8127],
    [3578, 2.3116, 224.3448],
    [3506, 2.5835, 138.5175],
    [3229, 5.255, 3.9322],
    [3060, 0.1532, 1.4845],
    [2564, 0.9808, 148.0787],
    [2429, 3.9944, 52.6902],
    [1645, 2.6535, 127.4718],
    [1584, 1.4305, 78.7138],
    [1508, 5.06, 151.0477],
    [1490, 2.6756, 56.6224],
    [1413, 4.5746, 202.2534],
    [1403, 1.3699, 77.7505],
    [1228, 1.047, 62.2514],
    [1033, 0.2646, 131.4039],
    [992, 2.172, 65.22],
    [862, 5.055, 351.817],
    [744, 3.076, 35.164],
    [687, 2.499, 77.963],
    [647, 4.473, 70.328],
    [624, 0.863, 9.561],
    [604, 0.907, 984.6],
    [575, 3.231, 447.796],
    [562, 2.718, 462.023],
    [530, 5.917, 213.299],
    [528, 5.151, 2.969]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, bo = function() {
  return [
    [22440, 0.69953, 74.7816],
    [4727, 1.699, 63.7359],
    [1682, 4.6483, 70.8494],
    [1650, 3.0966, 11.0457],
    [1434, 3.5212, 149.5632],
    [770, 0, 0],
    [500, 6.172, 76.266],
    [461, 0.767, 3.932],
    [390, 4.496, 56.622],
    [390, 5.527, 85.827],
    [292, 0.204, 52.69],
    [287, 3.534, 73.297],
    [273, 3.847, 138.517],
    [220, 1.964, 131.404],
    [216, 0.848, 77.963],
    [205, 3.248, 78.714],
    [149, 4.898, 127.472],
    [129, 2.081, 3.181]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, Po = function() {
  return [
    [1164, 4.7345, 74.7816],
    [212, 3.343, 63.736],
    [196, 2.98, 70.849],
    [105, 0.958, 11.046],
    [73, 1, 149.56],
    [72, 0.03, 56.62],
    [55, 2.59, 3.93],
    [36, 5.65, 77.96],
    [34, 3.82, 76.27],
    [32, 3.6, 131.4]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, wo = function() {
  return [
    [53, 3.01, 74.78],
    [10, 1.91, 56.62]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function R1(t) {
  const e = I(t), n = Ao(), i = Jo(), o = mo(), s = Co(), a = $o(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return L(T / 1e8 * m);
}
function b1(t) {
  const e = I(t), n = Lo(), i = Eo(), o = Bo(), s = Oo(), a = yo(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function Zt(t) {
  const e = I(t), n = So(), i = Ro(), o = bo(), s = Po(), a = wo(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0);
  return (f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4)) / 1e8;
}
function Nn(t) {
  return {
    longitude: R1(t),
    latitude: b1(t)
  };
}
function qo(t, e = R.Mean) {
  return P(
    Nn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const Go = {
  equatorialRadius: 25559,
  meanRadius: 25362,
  mass: 86.8127,
  bulkDensity: 1.27,
  siderealRotationPeriod: -0.71833,
  // negative
  siderealOrbitPeriod: 84.016846,
  visualMagnitude: -7.19,
  geometricAlbedo: 0.51,
  equatorialGravity: 8.87,
  escapeVelocity: 21.38
}, vt = {
  semiMajorAxis: [19.218446062, -372e-10, 98e-11, 0],
  eccentricity: [0.04638122, -27293e-9, 789e-10, 24e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [314.055005, 429.8240561, 3039e-7, 26e-9],
    inclination: [0.773197, 7744e-7, 3749e-8, -92e-9],
    longitudeOfAscendingNode: [74.005957, 0.5211278, 133947e-8, 18484e-9],
    longitudeOfPerihelion: [173.005291, 1.486379, 21406e-8, 434e-9]
  },
  [J.StandardJ2000]: {
    meanLongitude: [314.055005, 428.4669983, -486e-8, 6e-9],
    inclination: [0.773197, -16869e-7, 349e-8, 16e-9],
    longitudeOfAscendingNode: [74.005957, 0.0741431, 40539e-8, 119e-9],
    longitudeOfPerihelion: [173.005291, 0.0893212, -947e-7, 414e-9]
  }
};
function xn(t) {
  const n = 0.0119 * (at(t) - 2051.1);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function _o(t) {
  const e = xn(t) + 0.5;
  return 24702135e-1 + 30694.8767 * e - 541e-5 * Math.pow(e, 2);
}
function Io(t) {
  const e = xn(t);
  return 24702135e-1 + 30694.8767 * e - 541e-5 * Math.pow(e, 2);
}
function No(t, e = J.MeanOfTheDate) {
  return xt(t, vt[e].meanLongitude);
}
function P1(t) {
  return Ft(t, vt.semiMajorAxis);
}
function fe(t) {
  return Vt(t, vt.eccentricity);
}
function xo(t, e = J.MeanOfTheDate) {
  return Ut(t, vt[e].inclination);
}
function Fo(t, e = J.MeanOfTheDate) {
  return zt(t, vt[e].longitudeOfAscendingNode);
}
function Vo(t, e = J.MeanOfTheDate) {
  return Yt(t, vt[e].longitudeOfPerihelion);
}
function De(t) {
  return dt(t, R1, b1, Zt);
}
function Fn(t) {
  return rt(t, R1, b1, Zt);
}
function Vn(t) {
  return Tt(t, R1, b1, Zt);
}
function t2(t, e = R.Mean) {
  return P(
    Fn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function Uo(t) {
  return P(
    Vn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function zo(t) {
  return Gt(Zt(t), P1(t));
}
function Yo(t) {
  return _t(fe(t), P1(t));
}
function Ho(t) {
  return It(fe(t), P1(t));
}
function ko(t) {
  return Nt(fe(t), P1(t));
}
function Wo(t, e) {
  return pt(t, e, t2);
}
function Ko(t, e) {
  return At(t, e, t2);
}
function Un(t) {
  const e = Zt(t), n = p.getRadiusVector(t), i = De(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function Xo(t) {
  const e = Un(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function Qo(t) {
  const e = Zt(t), n = De(t);
  return -7.19 + 5 * Math.log10(e * n);
}
function zn(t) {
  return 35.02 / De(t);
}
function Zo(t) {
  return zn(t);
}
const e2 = {
  // Heliocentric coordinates
  getEclipticLongitude: R1,
  getEclipticLatitude: b1,
  getEclipticCoordinates: Nn,
  getEquatorialCoordinates: qo,
  getRadiusVector: Zt,
  // Geocentric coordinates
  getGeocentricDistance: De,
  getGeocentricEclipticCoordinates: Fn,
  getApparentGeocentricEclipticCoordinates: Vn,
  getGeocentricEquatorialCoordinates: t2,
  getApparentGeocentricEquatorialCoordinates: Uo,
  // Planet elliptical properties
  getInstantaneousVelocity: zo,
  getVelocityAtPerihelion: Yo,
  getVelocityAtAphelion: Ho,
  getLengthOfEllipse: ko,
  getRiseTransitSet: Wo,
  getAccurateRiseTransitSet: Ko,
  // Planet orbital properties
  getMeanLongitude: No,
  getEccentricity: fe,
  getInclination: xo,
  getLongitudeOfAscendingNode: Fo,
  getLongitudeOfPerihelion: Vo,
  getSemiMajorAxis: P1,
  // Planet base properties
  getAphelion: _o,
  getPerihelion: Io,
  getPhaseAngle: Un,
  getIlluminatedFraction: Xo,
  getMagnitude: Qo,
  getEquatorialSemiDiameter: zn,
  getPolarSemiDiameter: Zo,
  // Fixed values
  constants: Go,
  orbitalElements: vt
}, vo = function() {
  return [
    [531188633, 0, 0],
    [1798476, 2.9010127, 38.1330356],
    [1019728, 0.4858092, 1.4844727],
    [124532, 4.830081, 36.648563],
    [42064, 5.41055, 2.96895],
    [37715, 6.09222, 35.16409],
    [33785, 1.24489, 76.26607],
    [16483, 8e-5, 491.55793],
    [9199, 4.9375, 39.6175],
    [8994, 0.2746, 175.1661],
    [4216, 1.9871, 73.2971],
    [3365, 1.0359, 33.6796],
    [2285, 4.2061, 4.4534],
    [1434, 2.7834, 74.7816],
    [900, 2.076, 109.946],
    [745, 3.19, 71.813],
    [506, 5.748, 114.399],
    [400, 0.35, 1021.249],
    [345, 3.462, 41.102],
    [340, 3.304, 77.751],
    [323, 2.248, 32.195],
    [306, 0.497, 0.521],
    [287, 4.505, 0.048],
    [282, 2.246, 146.594],
    [267, 4.889, 0.963],
    [252, 5.782, 388.465],
    [245, 1.247, 9.561],
    [233, 2.505, 137.033],
    [227, 1.797, 453.425],
    [170, 3.324, 108.461],
    [151, 2.192, 33.94],
    [150, 2.997, 5.938],
    [148, 0.859, 111.43],
    [119, 3.677, 2.448],
    [109, 2.416, 183.243],
    [103, 0.041, 0.261],
    [103, 4.404, 70.328],
    [102, 5.705, 0.112]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, jo = function() {
  return [
    [3837687717, 0, 0],
    [16604, 4.86319, 1.48447],
    [15807, 2.27923, 38.13304],
    [3335, 3.682, 76.2661],
    [1306, 3.6732, 2.9689],
    [605, 1.505, 35.164],
    [179, 3.453, 39.618],
    [107, 2.451, 4.453],
    [106, 2.755, 33.68],
    [73, 5.49, 36.65],
    [57, 1.86, 114.4],
    [57, 5.22, 0.52],
    [35, 4.52, 74.78],
    [32, 5.9, 77.75],
    [30, 3.67, 388.47],
    [29, 5.17, 9.56],
    [29, 5.17, 2.45],
    [26, 5.25, 168.05]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ti = function() {
  return [
    [53893, 0, 0],
    [296, 1.855, 1.484],
    [281, 1.191, 38.133],
    [270, 5.721, 76.266],
    [23, 1.21, 2.97],
    [9, 4.43, 35.16],
    [7, 0.54, 2.45]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ei = function() {
  return [
    [31, 0, 0],
    [15, 1.35, 76.27],
    [12, 6.04, 1.48],
    [12, 6.11, 38.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ni = function() {
  return [
    [114, 3.142, 0]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, oi = function() {
  return [
    [3088623, 1.4410437, 38.1330356],
    [27780, 5.91272, 76.26607],
    [27624, 0, 0],
    [15448, 3.50877, 39.61751],
    [15355, 2.52124, 36.64856],
    [2e3, 1.51, 74.7816],
    [1968, 4.3778, 1.4845],
    [1015, 3.2156, 35.1641],
    [606, 2.802, 73.297],
    [595, 2.129, 41.102],
    [589, 3.187, 2.969],
    [402, 4.169, 114.399],
    [280, 1.682, 77.751],
    [262, 3.767, 213.299],
    [254, 3.271, 453.425],
    [206, 4.257, 529.691],
    [140, 3.53, 137.033]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ii = function() {
  return [
    [227279, 3.807931, 38.133036],
    [1803, 1.9758, 76.2661],
    [1433, 3.1416, 0],
    [1386, 4.8256, 36.6486],
    [1073, 6.0805, 39.6175],
    [148, 3.858, 74.782],
    [136, 0.478, 1.484],
    [70, 6.19, 35.16],
    [52, 5.05, 73.3],
    [43, 0.31, 114.4],
    [37, 4.89, 41.1],
    [37, 5.76, 2.97],
    [26, 5.22, 213.3]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ci = function() {
  return [
    [9691, 5.5712, 38.133],
    [79, 3.63, 76.27],
    [72, 0.45, 36.65],
    [59, 3.14, 0],
    [30, 1.61, 39.62],
    [6, 5.61, 74.78]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, si = function() {
  return [
    [273, 1.017, 38.133],
    [2, 0, 0],
    [2, 2.37, 36.65],
    [2, 5.33, 76.27]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ai = function() {
  return [
    [6, 2.67, 38.13]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ri = function() {
  return [
    [3007013206, 0, 0],
    [27062259, 1.32999459, 38.13303564],
    [1691764, 3.2518614, 36.6485629],
    [807831, 5.185928, 1.484473],
    [537761, 4.521139, 35.16409],
    [495726, 1.571057, 491.557929],
    [274572, 1.845523, 175.16606],
    [135134, 3.372206, 39.617508],
    [121802, 5.797544, 76.266071],
    [100895, 0.377027, 73.297126],
    [69792, 3.79617, 2.96895],
    [46688, 5.74938, 33.67962],
    [24594, 0.50802, 109.94569],
    [16939, 1.59422, 71.81265],
    [14230, 1.07786, 74.7816],
    [12012, 1.92062, 1021.24889],
    [8395, 0.6782, 146.5943],
    [7572, 1.0715, 388.4652],
    [5721, 2.5906, 4.4534],
    [4840, 1.9069, 41.102],
    [4483, 2.9057, 529.691],
    [4421, 1.7499, 108.4612],
    [4354, 0.6799, 32.1951],
    [4270, 3.4134, 453.4249],
    [3381, 0.8481, 183.2428],
    [2881, 1.986, 137.033],
    [2879, 3.6742, 350.3321],
    [2636, 3.0976, 213.2991],
    [2530, 5.7984, 490.0735],
    [2523, 0.4863, 493.0424],
    [2306, 2.8096, 70.3282],
    [2087, 0.6186, 33.9402]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, ui = function() {
  return [
    [236339, 0.70498, 38.133036],
    [13220, 3.32015, 1.48447],
    [8622, 6.2163, 35.1641],
    [2702, 1.8814, 39.6175],
    [2155, 2.0943, 2.9689],
    [2153, 5.1687, 76.2661],
    [1603, 0, 0],
    [1464, 1.1842, 33.6796],
    [1136, 3.9189, 36.6486],
    [898, 5.241, 388.465],
    [790, 0.533, 168.053],
    [760, 0.021, 182.28],
    [607, 1.077, 1021.249],
    [572, 3.401, 484.444],
    [561, 2.887, 498.671]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, li = function() {
  return [
    [4247, 5.8991, 38.133],
    [218, 0.346, 1.484],
    [163, 2.239, 168.053],
    [156, 4.594, 182.28],
    [127, 2.848, 35.164]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
}, fi = function() {
  return [
    [166, 4.552, 38.133]
  ].map((t) => ({ A: t[0], B: t[1], C: t[2] }));
};
function w1(t) {
  const e = I(t), n = vo(), i = jo(), o = ti(), s = ei(), a = ni(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return L(T / 1e8 * m);
}
function q1(t) {
  const e = I(t), n = oi(), i = ii(), o = ci(), s = si(), a = ai(), f = n.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), r = i.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), g = o.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), M = s.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), d = a.reduce((l, c) => l + c.A * Math.cos(c.B + c.C * e), 0), T = f + r * e + g * Math.pow(e, 2) + M * Math.pow(e, 3) + d * Math.pow(e, 4);
  return W(T / 1e8 * m);
}
function jt(t) {
  const e = I(t), n = ri(), i = ui(), o = li(), s = fi(), a = n.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), f = i.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), r = o.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0), g = s.reduce((d, T) => d + T.A * Math.cos(T.B + T.C * e), 0);
  return (a + f * e + r * Math.pow(e, 2) + g * Math.pow(e, 3)) / 1e8;
}
function Yn(t) {
  return {
    longitude: w1(t),
    latitude: q1(t)
  };
}
function Di(t, e = R.Mean) {
  return P(
    Yn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const gi = {
  equatorialRadius: 24764,
  meanRadius: 24622,
  mass: 102.4126,
  bulkDensity: 1.638,
  siderealRotationPeriod: 0.67125,
  siderealOrbitPeriod: 164.79132,
  visualMagnitude: -6.87,
  geometricAlbedo: 0.41,
  equatorialGravity: 11.15,
  escapeVelocity: 23.56
}, t1 = {
  semiMajorAxis: [30.110386869, -1663e-10, 0, 0],
  eccentricity: [945575e-8, 6033e-9, 0, -5e-11],
  [J.MeanOfTheDate]: {
    meanLongitude: [304.348665, 219.8833092, 30882e-8, 18e-9],
    inclination: [1.769953, -93082e-7, -708e-8, 27e-8],
    longitudeOfAscendingNode: [131.784057, 1.1022039, 25952e-8, -637e-9],
    longitudeOfPerihelion: [48.120276, 1.4262957, 38434e-8, 2e-8]
  },
  [J.StandardJ2000]: {
    meanLongitude: [304.348665, 218.4862002, 59e-8, -2e-9],
    inclination: [1.769953, 2256e-7, 23e-8, 0],
    longitudeOfAscendingNode: [131.784057, -61651e-7, -219e-8, -78e-9],
    longitudeOfPerihelion: [48.120276, 0.0291866, 761e-7, 0]
  }
};
function Hn(t) {
  const n = 607e-5 * (at(t) - 2047.5);
  return n >= 0 ? Math.floor(n) : Math.ceil(n);
}
function hi(t) {
  const e = Hn(t) + 0.5;
  return 24688951e-1 + 60190.33 * e + 0.03429 * Math.pow(e, 2);
}
function Mi(t) {
  const e = Hn(t);
  return 24688951e-1 + 60190.33 * e + 0.03429 * Math.pow(e, 2);
}
function di(t, e = J.MeanOfTheDate) {
  return xt(t, t1[e].meanLongitude);
}
function G1(t) {
  return Ft(t, t1.semiMajorAxis);
}
function ge(t) {
  return Vt(t, t1.eccentricity);
}
function Ti(t, e = J.MeanOfTheDate) {
  return Ut(t, t1[e].inclination);
}
function pi(t, e = J.MeanOfTheDate) {
  return zt(t, t1[e].longitudeOfAscendingNode);
}
function Ai(t, e = J.MeanOfTheDate) {
  return Yt(t, t1[e].longitudeOfPerihelion);
}
function he(t) {
  return dt(t, w1, q1, jt);
}
function kn(t) {
  return rt(t, w1, q1, jt);
}
function Wn(t) {
  return Tt(t, w1, q1, jt);
}
function n2(t, e = R.Mean) {
  return P(
    kn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function Ji(t) {
  return P(
    Wn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function mi(t) {
  return Gt(jt(t), G1(t));
}
function Ci(t) {
  return _t(ge(t), G1(t));
}
function $i(t) {
  return It(ge(t), G1(t));
}
function Li(t) {
  return Nt(ge(t), G1(t));
}
function Ei(t, e) {
  return pt(t, e, n2);
}
function Bi(t, e) {
  return At(t, e, n2);
}
function Kn(t) {
  const e = jt(t), n = p.getRadiusVector(t), i = he(t);
  return L(
    m * Math.acos((e * e + i * i - n * n) / (2 * e * i))
  );
}
function Oi(t) {
  const e = Kn(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function yi(t) {
  const e = jt(t), n = he(t);
  return -6.87 + 5 * Math.log10(e * n);
}
function Xn(t) {
  return 33.5 / he(t);
}
function Si(t) {
  return Xn(t);
}
const o2 = {
  // Heliocentric coordinates
  getEclipticLongitude: w1,
  getEclipticLatitude: q1,
  getEclipticCoordinates: Yn,
  getEquatorialCoordinates: Di,
  getRadiusVector: jt,
  // Geocentric coordinates
  getGeocentricDistance: he,
  getGeocentricEclipticCoordinates: kn,
  getApparentGeocentricEclipticCoordinates: Wn,
  getGeocentricEquatorialCoordinates: n2,
  getApparentGeocentricEquatorialCoordinates: Ji,
  // Planet elliptical properties
  getInstantaneousVelocity: mi,
  getVelocityAtPerihelion: Ci,
  getVelocityAtAphelion: $i,
  getLengthOfEllipse: Li,
  getRiseTransitSet: Ei,
  getAccurateRiseTransitSet: Bi,
  // Planet orbital properties
  getMeanLongitude: di,
  getEccentricity: ge,
  getInclination: Ti,
  getLongitudeOfAscendingNode: pi,
  getLongitudeOfPerihelion: Ai,
  getSemiMajorAxis: G1,
  // Planet base properties
  getAphelion: hi,
  getPerihelion: Mi,
  getPhaseAngle: Kn,
  getIlluminatedFraction: Oi,
  getMagnitude: yi,
  getEquatorialSemiDiameter: Xn,
  getPolarSemiDiameter: Si,
  // Fixed values
  constants: gi,
  orbitalElements: t1
}, i2 = function() {
  return [
    [0, 0, 1],
    [0, 0, 2],
    [0, 0, 3],
    [0, 0, 4],
    [0, 0, 5],
    [0, 0, 6],
    [0, 1, -1],
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 2],
    [0, 1, 3],
    [0, 2, -2],
    [0, 2, -1],
    [0, 2, 0],
    [1, -1, 0],
    [1, -1, 1],
    [1, 0, -3],
    [1, 0, -2],
    [1, 0, -1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 0, 2],
    [1, 0, 3],
    [1, 0, 4],
    [1, 1, -3],
    [1, 1, -2],
    [1, 1, -1],
    [1, 1, 0],
    [1, 1, 1],
    [1, 1, 3],
    [2, 0, -6],
    [2, 0, -5],
    [2, 0, -4],
    [2, 0, -3],
    [2, 0, -2],
    [2, 0, -1],
    [2, 0, 0],
    [2, 0, 1],
    [2, 0, 2],
    [2, 0, 3],
    [3, 0, -2],
    [3, 0, -1],
    [3, 0, 0]
  ].map((t) => ({ J: t[0], S: t[1], P: t[2] }));
}, Ri = function() {
  return [
    [-19799805, 19850055],
    [897144, -4954829],
    [611149, 1211027],
    [-341243, -189585],
    [129287, -34992],
    [-38164, 30893],
    [20442, -9987],
    [-4063, -5071],
    [-6016, -3336],
    [-3956, 3039],
    [-667, 3572],
    [1276, 501],
    [1152, -917],
    [630, -1277],
    [2571, -459],
    [899, -1449],
    [-1016, 1043],
    [-2343, -1012],
    [7042, 788],
    [1199, -338],
    [418, -67],
    [120, -274],
    [-60, -159],
    [-82, -29],
    [-36, -29],
    [-40, 7],
    [-14, 22],
    [4, 13],
    [5, 2],
    [-1, 0],
    [2, 0],
    [-4, 5],
    [4, -7],
    [14, 24],
    [-49, -34],
    [163, -48],
    [9, -24],
    [-4, 1],
    [-3, 1],
    [1, 3],
    [-3, -1],
    [5, -3],
    [0, 0]
  ].map((t) => ({ A: t[0], B: t[1] }));
}, bi = function() {
  return [
    [-5452852, -14974862],
    [3527812, 1672790],
    [-1050748, 327647],
    [178690, -292153],
    [18650, 100340],
    [-30697, -25823],
    [4878, 11248],
    [226, -64],
    [2030, -836],
    [69, -604],
    [-247, -567],
    [-57, 1],
    [-122, 175],
    [-49, -164],
    [-197, 199],
    [-25, 217],
    [589, -248],
    [-269, 711],
    [185, 193],
    [315, 807],
    [-130, -43],
    [5, 3],
    [2, 17],
    [2, 5],
    [2, 3],
    [3, 1],
    [2, -1],
    [1, -1],
    [0, -1],
    [0, 0],
    [0, -2],
    [2, 2],
    [-7, 0],
    [10, -8],
    [-3, 20],
    [6, 5],
    [14, 17],
    [-2, 0],
    [0, 0],
    [0, 0],
    [0, 1],
    [0, 0],
    [1, 0]
  ].map((t) => ({ A: t[0], B: t[1] }));
}, Pi = function() {
  return [
    [66865439, 68951812],
    [-11827535, -332538],
    [1593179, -1438890],
    [-18444, 483220],
    [-65977, -85431],
    [31174, -6032],
    [-5794, 22161],
    [4601, 4032],
    [-1729, 234],
    [-415, 702],
    [239, 723],
    [67, -67],
    [1034, -451],
    [-129, 504],
    [480, -231],
    [2, -441],
    [-3359, 265],
    [7856, -7832],
    [36, 45763],
    [8663, 8547],
    [-809, -769],
    [263, -144],
    [-126, 32],
    [-35, -16],
    [-19, -4],
    [-15, 8],
    [-4, 12],
    [5, 6],
    [3, 1],
    [6, -2],
    [2, 2],
    [-2, -2],
    [14, 13],
    [-63, 13],
    [136, -236],
    [273, 1065],
    [251, 149],
    [-25, -9],
    [9, -2],
    [-8, 7],
    [2, -10],
    [19, 35],
    [10, 3]
  ].map((t) => ({ A: t[0], B: t[1] }));
};
function _1(t) {
  const e = G(t), n = i2(), i = Ri(), o = 34.35 + 3034.9057 * e, s = 50.08 + 1222.1138 * e, a = 238.96 + 144.96 * e, f = n.reduce((r, g, M) => {
    const d = (g.J * o + g.S * s + g.P * a) * D;
    return r + i[M].A * Math.sin(d) + i[M].B * Math.cos(d);
  }, 0);
  return L(f / 1e8 + 238.958116 + 144.96 * e);
}
function I1(t) {
  const e = G(t), n = i2(), i = bi(), o = 34.35 + 3034.9057 * e, s = 50.08 + 1222.1138 * e, a = 238.96 + 144.96 * e, f = n.reduce((r, g, M) => {
    const d = (g.J * o + g.S * s + g.P * a) * D;
    return r + i[M].A * Math.sin(d) + i[M].B * Math.cos(d);
  }, 0);
  return W(f / 1e8 - 3.908239);
}
function u1(t) {
  const e = G(t), n = i2(), i = Pi(), o = 34.35 + 3034.9057 * e, s = 50.08 + 1222.1138 * e, a = 238.96 + 144.96 * e, f = n.reduce((r, g, M) => {
    const d = (g.J * o + g.S * s + g.P * a) * D;
    return r + i[M].A * Math.sin(d) + i[M].B * Math.cos(d);
  }, 0);
  return W(f / 1e8 + 40.7241346);
}
function Qn(t) {
  return {
    longitude: _1(t),
    latitude: I1(t)
  };
}
function wi(t, e = R.Mean) {
  return P(
    Qn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
const qi = {
  equatorialRadius: 1188.3,
  meanRadius: 1188.3,
  mass: 0.01303,
  bulkDensity: 1.89,
  siderealRotationPeriod: -6.3872,
  siderealOrbitPeriod: 247.92065,
  visualMagnitude: -1,
  geometricAlbedo: 0.3,
  equatorialGravity: 0.62,
  escapeVelocity: 1.21
};
function Me(t) {
  return dt(t, _1, I1, u1);
}
function Zn(t) {
  return rt(t, _1, I1, u1);
}
function vn(t) {
  return Tt(t, _1, I1, u1);
}
function c2(t, e = R.Mean) {
  return P(
    Zn(t),
    e === R.Mean ? p.getMeanObliquityOfEcliptic(t) : p.getTrueObliquityOfEcliptic(t)
  );
}
function Gi(t) {
  return P(
    vn(t),
    p.getTrueObliquityOfEcliptic(t)
  );
}
function _i(t, e) {
  return pt(t, e, c2);
}
function Ii(t, e) {
  return At(t, e, c2);
}
function jn(t) {
  const e = u1(t), n = p.getRadiusVector(t), i = Me(t);
  return L(m * Math.acos((e * e + i * i - n * n) / (2 * e * i)));
}
function Ni(t) {
  const e = jn(t) * D;
  return (1 + Math.cos(e)) / 2;
}
function xi(t) {
  const e = u1(t), n = Me(t);
  return -1 + 5 * Math.log10(e * n);
}
function t0(t) {
  return 2.07 / Me(t);
}
function Fi(t) {
  return t0(t);
}
const e0 = {
  getEclipticLongitude: _1,
  getEclipticLatitude: I1,
  getEclipticCoordinates: Qn,
  getEquatorialCoordinates: wi,
  getGeocentricDistance: Me,
  getGeocentricEclipticCoordinates: Zn,
  getGeocentricEquatorialCoordinates: c2,
  getApparentGeocentricEclipticCoordinates: vn,
  getApparentGeocentricEquatorialCoordinates: Gi,
  getRiseTransitSet: _i,
  getAccurateRiseTransitSet: Ii,
  getRadiusVector: u1,
  getPhaseAngle: jn,
  getIlluminatedFraction: Ni,
  getMagnitude: xi,
  getEquatorialSemiDiameter: t0,
  getPolarSemiDiameter: Fi,
  constants: qi
};
function N1(t) {
  const e = t / 100;
  return 4165e-8 / (e * e);
}
function l1(t, e, n) {
  const i = N1(t);
  return 1 - e - i - n;
}
const ct = 2e3, s2 = 977.8;
function Vi(t, e, n, i, o) {
  return Math.sqrt(e + n / t + i / (t * t) + o * t * t);
}
function de(t, e, n, i, o) {
  const s = 1 / (1 + i), a = N1(t), f = l1(t, e, n);
  let r = 0;
  for (let g = 0; g < ct; g++) {
    const M = s + (1 - s) * (g + 0.5) / ct, d = Vi(M, f, e, a, n);
    r += o(M, d);
  }
  return r = (1 - s) * r / ct, r;
}
function Ui(t, e, n) {
  let i = 1, o = N1(t), s = l1(t, e, n), a = 0;
  for (let f = 0; f < ct; f++) {
    const r = i * (f + 0.5) / ct, g = Math.sqrt(s + e / r + o / (r * r) + n * r * r);
    a = a + 1 / g;
  }
  return a = a / ct, a * (s2 / t);
}
function zi(t, e, n, i) {
  let o = 1 / (1 + i), s = N1(t), a = l1(t, e, n), f = 0;
  for (let d = 0; d < ct; d++) {
    const T = o * (d + 0.5) / ct, l = Math.sqrt(a + e / T + s / (T * T) + n * T * T);
    f = f + 1 / l;
  }
  let r = o * f / ct;
  var g = Math.log(1 + i) / Math.log(10), M = 0;
  return g > 7.5 && (M = 2e-3 * (g - 7.5)), g > 8 && (M = 0.014 * (g - 8) + 1e-3), g > 8.5 && (M = 0.04 * (g - 8.5) + 8e-3), g > 9 && (M = 0.02 * (g - 9) + 0.028), g > 9.5 && (M = 0.019 * (g - 9.5) + 0.039), g > 10 && (M = 0.048), g > 10.775 && (M = 0.035 * (g - 10.775) + 0.048), g > 11.851 && (M = 0.069 * (g - 11.851) + 0.086), g > 12.258 && (M = 0.461 * (g - 12.258) + 0.114), g > 12.382 && (M = 0.024 * (g - 12.382) + 0.171), g > 13.055 && (M = 0.013 * (g - 13.055) + 0.188), g > 14.081 && (M = 0.013 * (g - 14.081) + 0.201), g > 15.107 && (M = 0.214), s2 / t * r * Math.pow(10, M);
}
function Yi(t, e, n, i) {
  const o = de(t, e, n, i, (s, a) => 1 / a);
  return s2 / t * o;
}
function Hi(t, e, n, i) {
  const o = de(t, e, n, i, (s, a) => 1 / (s * a));
  return M1 / t * o;
}
function n0(t, e, n, i) {
  const o = de(t, e, n, i, (g, M) => 1 / (g * M)), s = l1(t, e, n), a = Math.sqrt(Math.abs(s)) * o;
  if (a > 0.1)
    return (s > 0 ? 0.5 * (Math.exp(a) - Math.exp(-a)) / a : Math.sin(a) / a) * o;
  let f = a * a;
  return s < 0 && (f = -f), (1 + f / 6 + f * f / 120) * o;
}
function a2(t, e, n, i) {
  const s = 1 / (1 + i) * n0(t, e, n, i);
  return M1 / t * s;
}
function ki(t, e, n, i) {
  return a2(t, e, n, i) / 206.264806;
}
function Wi(t, e, n, i) {
  const o = 1 / (1 + i);
  return a2(t, e, n, i) / (o * o);
}
function o0(t, e) {
  const n = Math.sqrt(Math.abs(t)) * e;
  if (n > 0.1)
    return (t > 0 ? (0.125 * (Math.exp(2 * n) - Math.exp(-2 * n)) - n / 2) / (n * n * n / 3) : (n / 2 - Math.sin(2 * n) / 4) / (n * n * n / 3)) * e * e * e / 3;
  let i = n * n;
  return t < 0 && (i = -i), (1 + i / 5 + 2 / 105 * i * i) * e * e * e / 3;
}
function Ki(t, e, n, i) {
  const o = l1(t, e, n), s = de(t, e, n, i, (f, r) => 1 / (f * r)), a = o0(o, s);
  return 4 * Math.PI * Math.pow(1e-3 * M1 / t, 3) * a;
}
const bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAngularSizeDistance: a2,
  getAngularSizeScale: ki,
  getComovingRadialDistance: Hi,
  getComovingVolume: o0,
  getComovingVolumeWithinRedshift: Ki,
  getLightTravelTime: Yi,
  getLuminosityDistance: Wi,
  getOmegaK: l1,
  getOmegaR: N1,
  getTangentialComovingDistance: n0,
  getUniverseAge: Ui,
  getUniverseAgeAtRedshift: zi
}, Symbol.toStringTag, { value: "Module" }));
function Xi(t, e, n) {
  const i = Math.floor(1 + t / e - n / e);
  return n + i * e;
}
function Qi(t, e, n, i, o, s, a) {
  let f = pe - e * D;
  const r = i, g = t, M = 2 * (Math.atan(Math.sqrt((1 - r) / (1 + r))) * Math.tan(f / 2)), d = a * j.constants.equatorialRadius, T = o * re.constants.equatorialRadius, l = s * k1, c = Math.asin((d + T) / l / (1 - r * Math.cos(M)));
  f = f + c;
  const h = M - r * Math.sin(M), u = g * h / gt, E = g / (2 * gt) * (M - r * Math.sin(M)), _ = n + E, b = _ - u / 2, N = _ + u / 2;
  return { duration: u, start: b, center: _, end: N };
}
function Zi(t, e, n = void 0) {
  let i = 1;
  if (n != null) {
    const a = tt(n, e.longitude);
    i = Math.cos((a - t.rightAscension) * D);
  }
  const o = e.latitude * D, s = e.latitude * D;
  return Math.asin(
    Math.sin(o) * Math.sin(s) + Math.cos(o) * Math.cos(s) * i
  ) * m;
}
const Pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getExoplanetTransitDetails: Qi,
  getTransitAltitude: Zi,
  julianDayOfNextTransit: Xi
}, Symbol.toStringTag, { value: "Module" })), wc = {
  Mercury: Ue,
  Venus: He,
  Mars: Ke,
  Jupiter: re,
  Saturn: je,
  Uranus: e2,
  Neptune: o2
}, qc = {
  Mercury: Ue,
  Venus: He,
  Mars: Ke,
  Jupiter: re,
  Saturn: je,
  Uranus: e2,
  Neptune: o2,
  Pluto: e0
}, Gc = {
  Sun: j,
  Mercury: Ue,
  Venus: He,
  Earth: p,
  Mars: Ke,
  Jupiter: re,
  Saturn: je,
  Uranus: e2,
  Neptune: o2,
  Pluto: e0
};
export {
  mc as ABSOLUTE_ZERO_TEMPERATURE_CELSIUS,
  oc as AVERAGE_ANOMALISTIC_YEAR,
  cc as AVERAGE_ECLIPSE_YEAR,
  a0 as AVERAGE_GREGORIAN_YEAR,
  ec as AVERAGE_JULIAN_YEAR,
  nc as AVERAGE_SIDEREAL_YEAR,
  ic as AVERAGE_TROPICAL_YEAR,
  qc as AllPlanets,
  uc as BESSELIAN_YEAR,
  hc as BOLTZMANN_CONSTANT,
  h2 as CONSTANT_OF_ABERRATION,
  Et as DAYMS,
  g1 as DEG2H,
  D as DEG2RAD,
  u0 as EARTH_EQUATORIAL_RADIUS,
  Dc as EARTH_MERIDIAN_ECCENTRICITY,
  Ae as EARTH_RADIUS_FLATTENING_FACTOR,
  ac as ECLIPTIC_OBLIQUITY_B1950_0,
  o1 as ECLIPTIC_OBLIQUITY_J2000_0,
  p as Earth,
  J as Equinox,
  lc as GALACTIC_NORTH_POLE_ALPHA_B1950_0,
  fc as GALACTIC_NORTH_POLE_DELTA_B1950_0,
  ht as H2DEG,
  s0 as H2RAD,
  d2 as HUBBLE_CONSTANT,
  Lt as J1970,
  Mt as J2000,
  d1 as JULIAN_DAY_B1950_0,
  rc as JULIAN_YEAR,
  re as Jupiter,
  pc as MEARTH,
  i0 as MJD_START,
  dc as MJUP,
  Tc as MNEP,
  Dt as MOON_PHASE_UPPER_LIMITS,
  V1 as MOON_SYNODIC_PERIOD,
  Mc as MSUN,
  Ke as Mars,
  Ue as Mercury,
  H as MoonPhase,
  D1 as MoonPhaseQuarter,
  o2 as Neptune,
  r0 as ONE_DAY_IN_SECONDS,
  Jc as ONE_MASS_OF_JUPITER_IN_EARTH_MASS,
  Ac as ONE_MASS_OF_JUPITER_IN_NEPTUNE_MASS,
  k1 as ONE_UA_IN_KILOMETERS,
  sc as ONE_YEAR_IN_SECONDS,
  R as Obliquity,
  M2 as PC2LY,
  W1 as PC2UA,
  gt as PI,
  pe as PIHALF,
  c0 as PITWO,
  gc as PLANCK_CONSTANT,
  wc as Planets,
  e0 as Pluto,
  m as RAD2DEG,
  vi as RAD2H,
  tc as SIDEREAL_OVER_SOLAR_RATE,
  M1 as SPEED_OF_LIGHT,
  ji as SPEED_OF_LIGHT_APPROX,
  Lc as STANDARD_ALTITUDE_MOON,
  it as STANDARD_ALTITUDE_STARS,
  l0 as STANDARD_ALTITUDE_SUN,
  Cc as SUN_EVENTS_ALTITUDES,
  $c as SUN_EXTENDED_EVENTS_ALTITUDES,
  je as Saturn,
  Gc as SolarSystem,
  j as Sun,
  e2 as Uranus,
  He as Venus,
  Oc as coordinates,
  bc as cosmology,
  Rc as distances,
  Pc as exoplanets,
  Ot as fmod,
  $0 as fmod180,
  L2 as fmod24,
  L as fmod360,
  W as fmod90,
  C0 as isNegative,
  Le as isNumber,
  i1 as isPositive,
  Bc as juliandays,
  Sc as risetransitset,
  yc as sexagesimal,
  Ec as times
};
