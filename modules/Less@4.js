/**
 * Less - Leaner CSS v4.1.3
 * http://lesscss.org
 * 
 * Copyright (c) 2009-2022, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 * @license Apache-2.0
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).less = t() }(this, (function() { "use strict";

  function e(e) { return e.replace(/^[a-z-]+:\/+?[^\/]+/, "").replace(/[\?\&]livereload=\w+/, "").replace(/^\//, "").replace(/\.[a-zA-Z]+$/, "").replace(/[^\.\w-]+/g, "-").replace(/\./g, ":") }

  function t(e, t) { if (t)
      for (var i in t.dataset)
        if (t.dataset.hasOwnProperty(i))
          if ("env" === i || "dumpLineNumbers" === i || "rootpath" === i || "errorReporting" === i) e[i] = t.dataset[i];
          else try { e[i] = JSON.parse(t.dataset[i]) } catch (e) {} } var i = function(t, i, n) { var r = n.href || "",
        s = "less:" + (n.title || e(r)),
        o = t.getElementById(s),
        a = !1,
        l = t.createElement("style");
      l.setAttribute("type", "text/css"), n.media && l.setAttribute("media", n.media), l.id = s, l.styleSheet || (l.appendChild(t.createTextNode(i)), a = null !== o && o.childNodes.length > 0 && l.childNodes.length > 0 && o.firstChild.nodeValue === l.firstChild.nodeValue); var u = t.getElementsByTagName("head")[0]; if (null === o || !1 === a) { var c = n && n.nextSibling || null;
        c ? c.parentNode.insertBefore(l, c) : u.appendChild(l) } if (o && !1 === a && o.parentNode.removeChild(o), l.styleSheet) try { l.styleSheet.cssText = i } catch (e) { throw new Error("Couldn't reassign styleSheet.cssText.") } },
    n = function(e) { var t, i = e.document; return i.currentScript || (t = i.getElementsByTagName("script"))[t.length - 1] },
    r = { error: function(e) { this._fireEvent("error", e) }, warn: function(e) { this._fireEvent("warn", e) }, info: function(e) { this._fireEvent("info", e) }, debug: function(e) { this._fireEvent("debug", e) }, addListener: function(e) { this._listeners.push(e) }, removeListener: function(e) { for (var t = 0; t < this._listeners.length; t++)
          if (this._listeners[t] === e) return void this._listeners.splice(t, 1) }, _fireEvent: function(e, t) { for (var i = 0; i < this._listeners.length; i++) { var n = this._listeners[i][e];
          n && n(t) } }, _listeners: [] },
    s = function() {
      function e(e, t) { this.fileManagers = t || [], e = e || {}; for (var i = [], n = i.concat(["encodeBase64", "mimeLookup", "charsetLookup", "getSourceMapGenerator"]), r = 0; r < n.length; r++) { var s = n[r],
            o = e[s];
          o ? this[s] = o.bind(e) : r < i.length && this.warn("missing required function in environment - " + s) } } return e.prototype.getFileManager = function(e, t, i, n, s) { e || r.warn("getFileManager called with no filename.. Please report this issue. continuing."), null == t && r.warn("getFileManager called with null directory.. Please report this issue. continuing."); var o = this.fileManagers;
        i.pluginManager && (o = [].concat(o).concat(i.pluginManager.getFileManagers())); for (var a = o.length - 1; a >= 0; a--) { var l = o[a]; if (l[s ? "supportsSync" : "supports"](e, t, i, n)) return l } return null }, e.prototype.addFileManager = function(e) { this.fileManagers.push(e) }, e.prototype.clearFileManagers = function() { this.fileManagers = [] }, e }(),
    o = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#00ffff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000000", blanchedalmond: "#ffebcd", blue: "#0000ff", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgrey: "#a9a9a9", darkgreen: "#006400", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#ff00ff", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#adff2f", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgrey: "#d3d3d3", lightgreen: "#90ee90", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#00ff00", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#ff00ff", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370d8", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#d87093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#663399", red: "#ff0000", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#ffffff", whitesmoke: "#f5f5f5", yellow: "#ffff00", yellowgreen: "#9acd32" },
    a = { length: { m: 1, cm: .01, mm: .001, in: .0254, px: .0254 / 96, pt: .0254 / 72, pc: .0254 / 72 * 12 }, duration: { s: 1, ms: .001 }, angle: { rad: 1 / (2 * Math.PI), deg: 1 / 360, grad: 1 / 400, turn: 1 } },
    l = { colors: o, unitConversions: a },
    u = function() {
      function e() { this.parent = null, this.visibilityBlocks = void 0, this.nodeVisible = void 0, this.rootNode = null, this.parsed = null } return Object.defineProperty(e.prototype, "currentFileInfo", { get: function() { return this.fileInfo() }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "index", { get: function() { return this.getIndex() }, enumerable: !1, configurable: !0 }), e.prototype.setParent = function(t, i) {
        function n(t) { t && t instanceof e && (t.parent = i) } Array.isArray(t) ? t.forEach(n) : n(t) }, e.prototype.getIndex = function() { return this._index || this.parent && this.parent.getIndex() || 0 }, e.prototype.fileInfo = function() { return this._fileInfo || this.parent && this.parent.fileInfo() || {} }, e.prototype.isRulesetLike = function() { return !1 }, e.prototype.toCSS = function(e) { var t = []; return this.genCSS(e, { add: function(e, i, n) { t.push(e) }, isEmpty: function() { return 0 === t.length } }), t.join("") }, e.prototype.genCSS = function(e, t) { t.add(this.value) }, e.prototype.accept = function(e) { this.value = e.visit(this.value) }, e.prototype.eval = function() { return this }, e.prototype._operate = function(e, t, i, n) { switch (t) {
          case "+":
            return i + n;
          case "-":
            return i - n;
          case "*":
            return i * n;
          case "/":
            return i / n } }, e.prototype.fround = function(e, t) { var i = e && e.numPrecision; return i ? Number((t + 2e-16).toFixed(i)) : t }, e.compare = function(t, i) { if (t.compare && "Quoted" !== i.type && "Anonymous" !== i.type) return t.compare(i); if (i.compare) return -i.compare(t); if (t.type === i.type) { if (t = t.value, i = i.value, !Array.isArray(t)) return t === i ? 0 : void 0; if (t.length === i.length) { for (var n = 0; n < t.length; n++)
              if (0 !== e.compare(t[n], i[n])) return; return 0 } } }, e.numericCompare = function(e, t) { return e < t ? -1 : e === t ? 0 : e > t ? 1 : void 0 }, e.prototype.blocksVisibility = function() { return null == this.visibilityBlocks && (this.visibilityBlocks = 0), 0 !== this.visibilityBlocks }, e.prototype.addVisibilityBlock = function() { null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks + 1 }, e.prototype.removeVisibilityBlock = function() { null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks - 1 }, e.prototype.ensureVisibility = function() { this.nodeVisible = !0 }, e.prototype.ensureInvisibility = function() { this.nodeVisible = !1 }, e.prototype.isVisible = function() { return this.nodeVisible }, e.prototype.visibilityInfo = function() { return { visibilityBlocks: this.visibilityBlocks, nodeVisible: this.nodeVisible } }, e.prototype.copyVisibilityInfo = function(e) { e && (this.visibilityBlocks = e.visibilityBlocks, this.nodeVisible = e.nodeVisible) }, e }(),
    c = function(e, t, i) { var n = this;
      Array.isArray(e) ? this.rgb = e : e.length >= 6 ? (this.rgb = [], e.match(/.{2}/g).map((function(e, t) { t < 3 ? n.rgb.push(parseInt(e, 16)) : n.alpha = parseInt(e, 16) / 255 }))) : (this.rgb = [], e.split("").map((function(e, t) { t < 3 ? n.rgb.push(parseInt(e + e, 16)) : n.alpha = parseInt(e + e, 16) / 255 }))), this.alpha = this.alpha || ("number" == typeof t ? t : 1), void 0 !== i && (this.value = i) };

  function h(e, t) { return Math.min(Math.max(e, 0), t) }

  function f(e) { return "#" + e.map((function(e) { return ((e = h(Math.round(e), 255)) < 16 ? "0" : "") + e.toString(16) })).join("") } c.prototype = Object.assign(new u, { type: "Color", luma: function() { var e = this.rgb[0] / 255,
        t = this.rgb[1] / 255,
        i = this.rgb[2] / 255; return .2126 * (e = e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (i = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) }, genCSS: function(e, t) { t.add(this.toCSS(e)) }, toCSS: function(e, t) { var i, n, r, s = e && e.compress && !t,
        o = []; if (n = this.fround(e, this.alpha), this.value)
        if (0 === this.value.indexOf("rgb")) n < 1 && (r = "rgba");
        else { if (0 !== this.value.indexOf("hsl")) return this.value;
          r = n < 1 ? "hsla" : "hsl" } else n < 1 && (r = "rgba"); switch (r) {
        case "rgba":
          o = this.rgb.map((function(e) { return h(Math.round(e), 255) })).concat(h(n, 1)); break;
        case "hsla":
          o.push(h(n, 1));
        case "hsl":
          i = this.toHSL(), o = [this.fround(e, i.h), this.fround(e, 100 * i.s) + "%", this.fround(e, 100 * i.l) + "%"].concat(o) } if (r) return r + "(" + o.join("," + (s ? "" : " ")) + ")"; if (i = this.toRGB(), s) { var a = i.split("");
        a[1] === a[2] && a[3] === a[4] && a[5] === a[6] && (i = "#" + a[1] + a[3] + a[5]) } return i }, operate: function(e, t, i) { for (var n = new Array(3), r = this.alpha * (1 - i.alpha) + i.alpha, s = 0; s < 3; s++) n[s] = this._operate(e, t, this.rgb[s], i.rgb[s]); return new c(n, r) }, toRGB: function() { return f(this.rgb) }, toHSL: function() { var e, t, i = this.rgb[0] / 255,
        n = this.rgb[1] / 255,
        r = this.rgb[2] / 255,
        s = this.alpha,
        o = Math.max(i, n, r),
        a = Math.min(i, n, r),
        l = (o + a) / 2,
        u = o - a; if (o === a) e = t = 0;
      else { switch (t = l > .5 ? u / (2 - o - a) : u / (o + a), o) {
          case i:
            e = (n - r) / u + (n < r ? 6 : 0); break;
          case n:
            e = (r - i) / u + 2; break;
          case r:
            e = (i - n) / u + 4 } e /= 6 } return { h: 360 * e, s: t, l: l, a: s } }, toHSV: function() { var e, t, i = this.rgb[0] / 255,
        n = this.rgb[1] / 255,
        r = this.rgb[2] / 255,
        s = this.alpha,
        o = Math.max(i, n, r),
        a = Math.min(i, n, r),
        l = o,
        u = o - a; if (t = 0 === o ? 0 : u / o, o === a) e = 0;
      else { switch (o) {
          case i:
            e = (n - r) / u + (n < r ? 6 : 0); break;
          case n:
            e = (r - i) / u + 2; break;
          case r:
            e = (i - n) / u + 4 } e /= 6 } return { h: 360 * e, s: t, v: l, a: s } }, toARGB: function() { return f([255 * this.alpha].concat(this.rgb)) }, compare: function(e) { return e.rgb && e.rgb[0] === this.rgb[0] && e.rgb[1] === this.rgb[1] && e.rgb[2] === this.rgb[2] && e.alpha === this.alpha ? 0 : void 0 } }), c.fromKeyword = function(e) { var t, i = e.toLowerCase(); if (o.hasOwnProperty(i) ? t = new c(o[i].slice(1)) : "transparent" === i && (t = new c([0, 0, 0], 0)), t) return t.value = e, t }; var p = function(e) { this.value = e };
  p.prototype = Object.assign(new u, { type: "Paren", genCSS: function(e, t) { t.add("("), this.value.genCSS(e, t), t.add(")") }, eval: function(e) { return new p(this.value.eval(e)) } }); var v = { "": !0, " ": !0, "|": !0 },
    d = function(e) { " " === e ? (this.value = " ", this.emptyOrWhitespace = !0) : (this.value = e ? e.trim() : "", this.emptyOrWhitespace = "" === this.value) };
  d.prototype = Object.assign(new u, { type: "Combinator", genCSS: function(e, t) { var i = e.compress || v[this.value] ? "" : " ";
      t.add(i + this.value + i) } }); var m = function(e, t, i, n, r, s) { this.combinator = e instanceof d ? e : new d(e), this.value = "string" == typeof t ? t.trim() : t || "", this.isVariable = i, this._index = n, this._fileInfo = r, this.copyVisibilityInfo(s), this.setParent(this.combinator, this) };
  m.prototype = Object.assign(new u, { type: "Element", accept: function(e) { var t = this.value;
      this.combinator = e.visit(this.combinator), "object" == typeof t && (this.value = e.visit(t)) }, eval: function(e) { return new m(this.combinator, this.value.eval ? this.value.eval(e) : this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo()) }, clone: function() { return new m(this.combinator, this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo()) }, genCSS: function(e, t) { t.add(this.toCSS(e), this.fileInfo(), this.getIndex()) }, toCSS: function(e) { e = e || {}; var t = this.value,
        i = e.firstSelector; return t instanceof p && (e.firstSelector = !0), t = t.toCSS ? t.toCSS(e) : t, e.firstSelector = i, "" === t && "&" === this.combinator.value.charAt(0) ? "" : this.combinator.toCSS(e) + t } }); var g = { ALWAYS: 0, PARENS_DIVISION: 1, PARENS: 2 },
    y = 0,
    b = 1,
    w = 2;

  function x(e) { return Object.prototype.toString.call(e).slice(8, -1) }

  function S(e) { return "Array" === x(e) }

  function I(e, t) { return void 0 === t && (t = {}), S(e) ? e.map((function(e) { return I(e, t) })) : "Object" !== x(i = e) || i.constructor !== Object || Object.getPrototypeOf(i) !== Object.prototype ? e : function() { for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length; var n = Array(e),
        r = 0; for (t = 0; t < i; t++)
        for (var s = arguments[t], o = 0, a = s.length; o < a; o++, r++) n[r] = s[o]; return n }(Object.getOwnPropertyNames(e), Object.getOwnPropertySymbols(e)).reduce((function(i, n) { return S(t.props) && !t.props.includes(n) || function(e, t, i, n, r) { var s = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable"; "enumerable" === s && (e[t] = i), r && "nonenumerable" === s && Object.defineProperty(e, t, { value: i, enumerable: !1, writable: !0, configurable: !0 }) }(i, n, I(e[n], t), e, t.nonenumerable), i }), {}); var i }

  function C(e, t) { for (var i = e + 1, n = null, r = -1; --i >= 0 && "\n" !== t.charAt(i);) r++; return "number" == typeof e && (n = (t.slice(0, e).match(/\n/g) || "").length), { line: n, column: r } }

  function k(e) { var t, i = e.length,
      n = new Array(i); for (t = 0; t < i; t++) n[t] = e[t]; return n }

  function _(e) { var t = {}; for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }

  function A(e, t) { var i = t || {}; if (!t._defaults) { i = {}; var n = I(e);
      i._defaults = n; var r = t ? I(t) : {};
      Object.assign(i, n, r) } return i }

  function M(e, t) { if (t && t._defaults) return t; var i = A(e, t); if (i.strictMath && (i.math = g.PARENS), i.relativeUrls && (i.rewriteUrls = w), "string" == typeof i.math) switch (i.math.toLowerCase()) {
      case "always":
        i.math = g.ALWAYS; break;
      case "parens-division":
        i.math = g.PARENS_DIVISION; break;
      case "strict":
      case "parens":
        i.math = g.PARENS; break;
      default:
        i.math = g.PARENS }
    if ("string" == typeof i.rewriteUrls) switch (i.rewriteUrls.toLowerCase()) {
      case "off":
        i.rewriteUrls = y; break;
      case "local":
        i.rewriteUrls = b; break;
      case "all":
        i.rewriteUrls = w }
    return i }

  function E(e, t) { void 0 === t && (t = []); for (var i = 0, n = e.length; i < n; i++) { var r = e[i];
      Array.isArray(r) ? E(r, t) : void 0 !== r && t.push(r) } return t } var P = Object.freeze({ __proto__: null, getLocation: C, copyArray: k, clone: _, defaults: A, copyOptions: M, merge: function(e, t) { for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]); return e }, flattenArray: E }),
    R = /(<anonymous>|Function):(\d+):(\d+)/,
    O = function(e, t, i) { Error.call(this); var n = e.filename || i; if (this.message = e.message, this.stack = e.stack, t && n) { var r = t.contents[n],
          s = C(e.index, r),
          o = s.line,
          a = s.column,
          l = e.call && C(e.call, r).line,
          u = r ? r.split("\n") : ""; if (this.type = e.type || "Syntax", this.filename = n, this.index = e.index, this.line = "number" == typeof o ? o + 1 : null, this.column = a, !this.line && this.stack) { var c = this.stack.match(R),
            h = new Function("a", "throw new Error()"),
            f = 0; try { h() } catch (e) { var p = e.stack.match(R);
            f = 1 - (o = parseInt(p[2])) } c && (c[2] && (this.line = parseInt(c[2]) + f), c[3] && (this.column = parseInt(c[3]))) } this.callLine = l + 1, this.callExtract = u[l], this.extract = [u[this.line - 2], u[this.line - 1], u[this.line]] } }; if (void 0 === Object.create) { var V = function() {};
    V.prototype = Error.prototype, O.prototype = new V } else O.prototype = Object.create(Error.prototype);
  O.prototype.constructor = O, O.prototype.toString = function(e) { e = e || {}; var t = "",
      i = this.extract || [],
      n = [],
      r = function(e) { return e }; if (e.stylize) { var s = typeof e.stylize; if ("function" !== s) throw Error("options.stylize should be a function, got a " + s + "!");
      r = e.stylize } if (null !== this.line) { if ("string" == typeof i[0] && n.push(r(this.line - 1 + " " + i[0], "grey")), "string" == typeof i[1]) { var o = this.line + " ";
        i[1] && (o += i[1].slice(0, this.column) + r(r(r(i[1].substr(this.column, 1), "bold") + i[1].slice(this.column + 1), "red"), "inverse")), n.push(o) } "string" == typeof i[2] && n.push(r(this.line + 1 + " " + i[2], "grey")), n = n.join("\n") + r("", "reset") + "\n" } return t += r(this.type + "Error: " + this.message, "red"), this.filename && (t += r(" in ", "red") + this.filename), this.line && (t += r(" on line " + this.line + ", column " + (this.column + 1) + ":", "grey")), t += "\n" + n, this.callLine && (t += r("from ", "red") + (this.filename || "") + "/n", t += r(this.callLine, "grey") + " " + this.callExtract + "/n"), t }; var F = function(e, t, i, n, r, s) { this.extendList = t, this.condition = i, this.evaldCondition = !i, this._index = n, this._fileInfo = r, this.elements = this.getElements(e), this.mixinElements_ = void 0, this.copyVisibilityInfo(s), this.setParent(this.elements, this) };
  F.prototype = Object.assign(new u, { type: "Selector", accept: function(e) { this.elements && (this.elements = e.visitArray(this.elements)), this.extendList && (this.extendList = e.visitArray(this.extendList)), this.condition && (this.condition = e.visit(this.condition)) }, createDerived: function(e, t, i) { e = this.getElements(e); var n = new F(e, t || this.extendList, null, this.getIndex(), this.fileInfo(), this.visibilityInfo()); return n.evaldCondition = null != i ? i : this.evaldCondition, n.mediaEmpty = this.mediaEmpty, n }, getElements: function(e) { return e ? ("string" == typeof e && this.parse.parseNode(e, ["selector"], this._index, this._fileInfo, (function(t, i) { if (t) throw new O({ index: t.index, message: t.message }, this.parse.imports, this._fileInfo.filename);
        e = i[0].elements })), e) : [new m("", "&", !1, this._index, this._fileInfo)] }, createEmptySelectors: function() { var e = new m("", "&", !1, this._index, this._fileInfo),
        t = [new F([e], null, null, this._index, this._fileInfo)]; return t[0].mediaEmpty = !0, t }, match: function(e) { var t, i, n = this.elements,
        r = n.length; if (0 === (t = (e = e.mixinElements()).length) || r < t) return 0; for (i = 0; i < t; i++)
        if (n[i].value !== e[i]) return 0; return t }, mixinElements: function() { if (this.mixinElements_) return this.mixinElements_; var e = this.elements.map((function(e) { return e.combinator.value + (e.value.value || e.value) })).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g); return e ? "&" === e[0] && e.shift() : e = [], this.mixinElements_ = e }, isJustParentSelector: function() { return !this.mediaEmpty && 1 === this.elements.length && "&" === this.elements[0].value && (" " === this.elements[0].combinator.value || "" === this.elements[0].combinator.value) }, eval: function(e) { var t = this.condition && this.condition.eval(e),
        i = this.elements,
        n = this.extendList; return i = i && i.map((function(t) { return t.eval(e) })), n = n && n.map((function(t) { return t.eval(e) })), this.createDerived(i, n, t) }, genCSS: function(e, t) { var i; for (e && e.firstSelector || "" !== this.elements[0].combinator.value || t.add(" ", this.fileInfo(), this.getIndex()), i = 0; i < this.elements.length; i++) this.elements[i].genCSS(e, t) }, getIsOutput: function() { return this.evaldCondition } }); var $ = function(e) { if (!e) throw new Error("Value requires an array argument");
    Array.isArray(e) ? this.value = e : this.value = [e] };
  $.prototype = Object.assign(new u, { type: "Value", accept: function(e) { this.value && (this.value = e.visitArray(this.value)) }, eval: function(e) { return 1 === this.value.length ? this.value[0].eval(e) : new $(this.value.map((function(t) { return t.eval(e) }))) }, genCSS: function(e, t) { var i; for (i = 0; i < this.value.length; i++) this.value[i].genCSS(e, t), i + 1 < this.value.length && t.add(e && e.compress ? "," : ", ") } }); var L = function(e) { this.value = e };
  L.prototype = Object.assign(new u, { type: "Keyword", genCSS: function(e, t) { if ("%" === this.value) throw { type: "Syntax", message: "Invalid % without number" };
      t.add(this.value) } }), L.True = new L("true"), L.False = new L("false"); var j = function(e, t, i, n, r, s) { this.value = e, this._index = t, this._fileInfo = i, this.mapLines = n, this.rulesetLike = void 0 !== r && r, this.allowRoot = !0, this.copyVisibilityInfo(s) };
  j.prototype = Object.assign(new u, { type: "Anonymous", eval: function() { return new j(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo()) }, compare: function(e) { return e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0 }, isRulesetLike: function() { return this.rulesetLike }, genCSS: function(e, t) { this.nodeVisible = Boolean(this.value), this.nodeVisible && t.add(this.value, this._fileInfo, this._index, this.mapLines) } }); var N = g; var D = function(e, t, i, n, r, s, o, a) { this.name = e, this.value = t instanceof u ? t : new $([t ? new j(t) : null]), this.important = i ? " " + i.trim() : "", this.merge = n, this._index = r, this._fileInfo = s, this.inline = o || !1, this.variable = void 0 !== a ? a : e.charAt && "@" === e.charAt(0), this.allowRoot = !0, this.setParent(this.value, this) };

  function B(e) { return "/* line " + e.debugInfo.lineNumber + ", " + e.debugInfo.fileName + " */\n" }

  function U(e) { var t = e.debugInfo.fileName; return /^[a-z]+:\/\//i.test(t) || (t = "file://" + t), "@media -sass-debug-info{filename{font-family:" + t.replace(/([.:\/\\])/g, (function(e) { return "\\" == e && (e = "/"), "\\" + e })) + "}line{font-family:\\00003" + e.debugInfo.lineNumber + "}}\n" }

  function q(e, t, i) { var n = ""; if (e.dumpLineNumbers && !e.compress) switch (e.dumpLineNumbers) {
      case "comments":
        n = B(t); break;
      case "mediaquery":
        n = U(t); break;
      case "all":
        n = B(t) + (i || "") + U(t) }
    return n } D.prototype = Object.assign(new u, { type: "Declaration", genCSS: function(e, t) { t.add(this.name + (e.compress ? ":" : ": "), this.fileInfo(), this.getIndex()); try { this.value.genCSS(e, t) } catch (e) { throw e.index = this._index, e.filename = this._fileInfo.filename, e } t.add(this.important + (this.inline || e.lastRule && e.compress ? "" : ";"), this._fileInfo, this._index) }, eval: function(e) { var t, i, n = !1,
        r = this.name,
        s = this.variable; "string" != typeof r && (r = 1 === r.length && r[0] instanceof L ? r[0].value : function(e, t) { var i, n = "",
          r = t.length,
          s = { add: function(e) { n += e } }; for (i = 0; i < r; i++) t[i].eval(e).genCSS(e, s); return n }(e, r), s = !1), "font" === r && e.math === N.ALWAYS && (n = !0, t = e.math, e.math = N.PARENS_DIVISION); try { if (e.importantScope.push({}), i = this.value.eval(e), !this.variable && "DetachedRuleset" === i.type) throw { message: "Rulesets cannot be evaluated on a property.", index: this.getIndex(), filename: this.fileInfo().filename }; var o = this.important,
          a = e.importantScope.pop(); return !o && a.important && (o = a.important), new D(r, i, o, this.merge, this.getIndex(), this.fileInfo(), this.inline, s) } catch (e) { throw "number" != typeof e.index && (e.index = this.getIndex(), e.filename = this.fileInfo().filename), e } finally { n && (e.math = t) } }, makeImportant: function() { return new D(this.name, this.value, "!important", this.merge, this.getIndex(), this.fileInfo(), this.inline) } }); var T = function(e, t, i, n) { this.value = e, this.isLineComment = t, this._index = i, this._fileInfo = n, this.allowRoot = !0 };
  T.prototype = Object.assign(new u, { type: "Comment", genCSS: function(e, t) { this.debugInfo && t.add(q(e, this), this.fileInfo(), this.getIndex()), t.add(this.value) }, isSilent: function(e) { var t = e.compress && "!" !== this.value[2]; return this.isLineComment || t } }); var z = {},
    G = function(e, t, i) { if (e)
        for (var n = 0; n < i.length; n++) e.hasOwnProperty(i[n]) && (t[i[n]] = e[i[n]]) },
    W = ["paths", "rewriteUrls", "rootpath", "strictImports", "insecure", "dumpLineNumbers", "compress", "syncImport", "chunkInput", "mime", "useFileCache", "processImports", "pluginManager"];
  z.Parse = function(e) { G(e, this, W), "string" == typeof this.paths && (this.paths = [this.paths]) }; var J = ["paths", "compress", "math", "strictUnits", "sourceMap", "importMultiple", "urlArgs", "javascriptEnabled", "pluginManager", "importantScope", "rewriteUrls"];

  function H(e) { return !/^(?:[a-z-]+:|\/|#)/i.test(e) }

  function K(e) { return "." === e.charAt(0) } z.Eval = function(e, t) { G(e, this, J), "string" == typeof this.paths && (this.paths = [this.paths]), this.frames = t || [], this.importantScope = this.importantScope || [] }, z.Eval.prototype.enterCalc = function() { this.calcStack || (this.calcStack = []), this.calcStack.push(!0), this.inCalc = !0 }, z.Eval.prototype.exitCalc = function() { this.calcStack.pop(), this.calcStack.length || (this.inCalc = !1) }, z.Eval.prototype.inParenthesis = function() { this.parensStack || (this.parensStack = []), this.parensStack.push(!0) }, z.Eval.prototype.outOfParenthesis = function() { this.parensStack.pop() }, z.Eval.prototype.inCalc = !1, z.Eval.prototype.mathOn = !0, z.Eval.prototype.isMathOn = function(e) { return !!this.mathOn && (!!("/" !== e || this.math === g.ALWAYS || this.parensStack && this.parensStack.length) && (!(this.math > g.PARENS_DIVISION) || this.parensStack && this.parensStack.length)) }, z.Eval.prototype.pathRequiresRewrite = function(e) { return (this.rewriteUrls === b ? K : H)(e) }, z.Eval.prototype.rewritePath = function(e, t) { var i; return t = t || "", i = this.normalizePath(t + e), K(e) && H(t) && !1 === K(i) && (i = "./" + i), i }, z.Eval.prototype.normalizePath = function(e) { var t, i = e.split("/").reverse(); for (e = []; 0 !== i.length;) switch (t = i.pop()) {
      case ".":
        break;
      case "..":
        0 === e.length || ".." === e[e.length - 1] ? e.push(t) : e.pop(); break;
      default:
        e.push(t) }
    return e.join("/") }; var Z = function e(t) { return { _data: {}, add: function(e, t) { e = e.toLowerCase(), this._data.hasOwnProperty(e), this._data[e] = t }, addMultiple: function(e) { var t = this;
          Object.keys(e).forEach((function(i) { t.add(i, e[i]) })) }, get: function(e) { return this._data[e] || t && t.get(e) }, getLocalFunctions: function() { return this._data }, inherit: function() { return e(this) }, create: function(t) { return e(t) } } }(null),
    Q = { eval: function() { var e = this.value_,
          t = this.error_; if (t) throw t; if (null != e) return e ? L.True : L.False }, value: function(e) { this.value_ = e }, error: function(e) { this.error_ = e }, reset: function() { this.value_ = this.error_ = null } },
    X = function(e, t, i, n) { this.selectors = e, this.rules = t, this._lookups = {}, this._variables = null, this._properties = null, this.strictImports = i, this.copyVisibilityInfo(n), this.allowRoot = !0, this.setParent(this.selectors, this), this.setParent(this.rules, this) };
  X.prototype = Object.assign(new u, { type: "Ruleset", isRuleset: !0, isRulesetLike: function() { return !0 }, accept: function(e) { this.paths ? this.paths = e.visitArray(this.paths, !0) : this.selectors && (this.selectors = e.visitArray(this.selectors)), this.rules && this.rules.length && (this.rules = e.visitArray(this.rules)) }, eval: function(e) { var t, i, n, r, s, o = !1; if (this.selectors && (i = this.selectors.length)) { for (t = new Array(i), Q.error({ type: "Syntax", message: "it is currently only allowed in parametric mixin guards," }), r = 0; r < i; r++) { n = this.selectors[r].eval(e); for (var a = 0; a < n.elements.length; a++)
            if (n.elements[a].isVariable) { s = !0; break } t[r] = n, n.evaldCondition && (o = !0) } if (s) { var l = new Array(i); for (r = 0; r < i; r++) n = t[r], l[r] = n.toCSS(e);
          this.parse.parseNode(l.join(","), ["selectors"], t[0].getIndex(), t[0].fileInfo(), (function(e, i) { i && (t = E(i)) })) } Q.reset() } else o = !0; var c, h, f = this.rules ? k(this.rules) : null,
        p = new X(t, f, this.strictImports, this.visibilityInfo());
      p.originalRuleset = this, p.root = this.root, p.firstRoot = this.firstRoot, p.allowImports = this.allowImports, this.debugInfo && (p.debugInfo = this.debugInfo), o || (f.length = 0), p.functionRegistry = function(e) { for (var t, i = 0, n = e.length; i !== n; ++i)
          if (t = e[i].functionRegistry) return t; return Z }(e.frames).inherit(); var v = e.frames;
      v.unshift(p); var d = e.selectors;
      d || (e.selectors = d = []), d.unshift(this.selectors), (p.root || p.allowImports || !p.strictImports) && p.evalImports(e); var m = p.rules; for (r = 0; c = m[r]; r++) c.evalFirst && (m[r] = c.eval(e)); var g = e.mediaBlocks && e.mediaBlocks.length || 0; for (r = 0; c = m[r]; r++) "MixinCall" === c.type ? (f = c.eval(e).filter((function(e) { return !(e instanceof D && e.variable) || !p.variable(e.name) })), m.splice.apply(m, [r, 1].concat(f)), r += f.length - 1, p.resetCache()) : "VariableCall" === c.type && (f = c.eval(e).rules.filter((function(e) { return !(e instanceof D && e.variable) })), m.splice.apply(m, [r, 1].concat(f)), r += f.length - 1, p.resetCache()); for (r = 0; c = m[r]; r++) c.evalFirst || (m[r] = c = c.eval ? c.eval(e) : c); for (r = 0; c = m[r]; r++)
        if (c instanceof X && c.selectors && 1 === c.selectors.length && c.selectors[0] && c.selectors[0].isJustParentSelector()) { m.splice(r--, 1); for (a = 0; h = c.rules[a]; a++) h instanceof u && (h.copyVisibilityInfo(c.visibilityInfo()), h instanceof D && h.variable || m.splice(++r, 0, h)) } if (v.shift(), d.shift(), e.mediaBlocks)
        for (r = g; r < e.mediaBlocks.length; r++) e.mediaBlocks[r].bubbleSelectors(t); return p }, evalImports: function(e) { var t, i, n = this.rules; if (n)
        for (t = 0; t < n.length; t++) "Import" === n[t].type && ((i = n[t].eval(e)) && (i.length || 0 === i.length) ? (n.splice.apply(n, [t, 1].concat(i)), t += i.length - 1) : n.splice(t, 1, i), this.resetCache()) }, makeImportant: function() { return new X(this.selectors, this.rules.map((function(e) { return e.makeImportant ? e.makeImportant() : e })), this.strictImports, this.visibilityInfo()) }, matchArgs: function(e) { return !e || 0 === e.length }, matchCondition: function(e, t) { var i = this.selectors[this.selectors.length - 1]; return !!i.evaldCondition && !(i.condition && !i.condition.eval(new z.Eval(t, t.frames))) }, resetCache: function() { this._rulesets = null, this._variables = null, this._properties = null, this._lookups = {} }, variables: function() { return this._variables || (this._variables = this.rules ? this.rules.reduce((function(e, t) { if (t instanceof D && !0 === t.variable && (e[t.name] = t), "Import" === t.type && t.root && t.root.variables) { var i = t.root.variables(); for (var n in i) i.hasOwnProperty(n) && (e[n] = t.root.variable(n)) } return e }), {}) : {}), this._variables }, properties: function() { return this._properties || (this._properties = this.rules ? this.rules.reduce((function(e, t) { if (t instanceof D && !0 !== t.variable) { var i = 1 === t.name.length && t.name[0] instanceof L ? t.name[0].value : t.name;
          e["$" + i] ? e["$" + i].push(t) : e["$" + i] = [t] } return e }), {}) : {}), this._properties }, variable: function(e) { var t = this.variables()[e]; if (t) return this.parseValue(t) }, property: function(e) { var t = this.properties()[e]; if (t) return this.parseValue(t) }, lastDeclaration: function() { for (var e = this.rules.length; e > 0; e--) { var t = this.rules[e - 1]; if (t instanceof D) return this.parseValue(t) } }, parseValue: function(e) { var t = this;

      function i(e) { return e.value instanceof j && !e.parsed ? ("string" == typeof e.value.value ? this.parse.parseNode(e.value.value, ["value", "important"], e.value.getIndex(), e.fileInfo(), (function(t, i) { t && (e.parsed = !0), i && (e.value = i[0], e.important = i[1] || "", e.parsed = !0) })) : e.parsed = !0, e) : e } if (Array.isArray(e)) { var n = []; return e.forEach((function(e) { n.push(i.call(t, e)) })), n } return i.call(t, e) }, rulesets: function() { if (!this.rules) return []; var e, t, i = [],
        n = this.rules; for (e = 0; t = n[e]; e++) t.isRuleset && i.push(t); return i }, prependRule: function(e) { var t = this.rules;
      t ? t.unshift(e) : this.rules = [e], this.setParent(e, this) }, find: function(e, t, i) { t = t || this; var n, r, s = [],
        o = e.toCSS(); return o in this._lookups ? this._lookups[o] : (this.rulesets().forEach((function(o) { if (o !== t)
          for (var a = 0; a < o.selectors.length; a++)
            if (n = e.match(o.selectors[a])) { if (e.elements.length > n) { if (!i || i(o)) { r = o.find(new F(e.elements.slice(n)), t, i); for (var l = 0; l < r.length; ++l) r[l].path.push(o);
                  Array.prototype.push.apply(s, r) } } else s.push({ rule: o, path: [] }); break } })), this._lookups[o] = s, s) }, genCSS: function(e, t) { var i, n, r, s, o, a = [];
      e.tabLevel = e.tabLevel || 0, this.root || e.tabLevel++; var l, u = e.compress ? "" : Array(e.tabLevel + 1).join("  "),
        c = e.compress ? "" : Array(e.tabLevel).join("  "),
        h = 0,
        f = 0; for (i = 0; s = this.rules[i]; i++) s instanceof T ? (f === i && f++, a.push(s)) : s.isCharset && s.isCharset() ? (a.splice(h, 0, s), h++, f++) : "Import" === s.type ? (a.splice(f, 0, s), f++) : a.push(s); if (a = [].concat(a), !this.root) {
        (r = q(e, this, c)) && (t.add(r), t.add(c)); var p = this.paths,
          v = p.length,
          d = void 0; for (l = e.compress ? "," : ",\n" + c, i = 0; i < v; i++)
          if (d = (o = p[i]).length)
            for (i > 0 && t.add(l), e.firstSelector = !0, o[0].genCSS(e, t), e.firstSelector = !1, n = 1; n < d; n++) o[n].genCSS(e, t);
        t.add((e.compress ? "{" : " {\n") + u) } for (i = 0; s = a[i]; i++) { i + 1 === a.length && (e.lastRule = !0); var m = e.lastRule;
        s.isRulesetLike(s) && (e.lastRule = !1), s.genCSS ? s.genCSS(e, t) : s.value && t.add(s.value.toString()), e.lastRule = m, !e.lastRule && s.isVisible() ? t.add(e.compress ? "" : "\n" + u) : e.lastRule = !1 } this.root || (t.add(e.compress ? "}" : "\n" + c + "}"), e.tabLevel--), t.isEmpty() || e.compress || !this.firstRoot || t.add("\n") }, joinSelectors: function(e, t, i) { for (var n = 0; n < i.length; n++) this.joinSelector(e, t, i[n]) }, joinSelector: function(e, t, i) {
      function n(e, t) { var i, n; if (0 === e.length) i = new p(e[0]);
        else { var r = new Array(e.length); for (n = 0; n < e.length; n++) r[n] = new m(null, e[n], t.isVariable, t._index, t._fileInfo);
          i = new p(new F(r)) } return i }

      function r(e, t) { var i; return i = new m(null, e, t.isVariable, t._index, t._fileInfo), new F([i]) }

      function s(e, t, i, n) { var r, s, o; if (r = [], e.length > 0 ? (s = (r = k(e)).pop(), o = n.createDerived(k(s.elements))) : o = n.createDerived([]), t.length > 0) { var a = i.combinator,
            l = t[0].elements[0];
          a.emptyOrWhitespace && !l.combinator.emptyOrWhitespace && (a = l.combinator), o.elements.push(new m(a, l.value, i.isVariable, i._index, i._fileInfo)), o.elements = o.elements.concat(t[0].elements.slice(1)) } if (0 !== o.elements.length && r.push(o), t.length > 1) { var u = t.slice(1);
          u = u.map((function(e) { return e.createDerived(e.elements, []) })), r = r.concat(u) } return r }

      function o(e, t, i, n, r) { var o; for (o = 0; o < e.length; o++) { var a = s(e[o], t, i, n);
          r.push(a) } return r }

      function a(e, t) { var i, n; if (0 !== e.length)
          if (0 !== t.length)
            for (i = 0; n = t[i]; i++) n.length > 0 ? n[n.length - 1] = n[n.length - 1].createDerived(n[n.length - 1].elements.concat(e)) : n.push(new F(e));
          else t.push([new F(e)]) }

      function l(e, t) { var i = t.createDerived(t.elements, t.extendList, t.evaldCondition); return i.copyVisibilityInfo(e), i } var u, c; if (! function e(t, i, l) { var u, c, h, f, v, d, g, y, b, w, x, S, I = !1; for (f = [], v = [[]], u = 0; y = l.elements[u]; u++)
            if ("&" !== y.value) { var C = (S = void 0, (x = y).value instanceof p && (S = x.value.value) instanceof F ? S : null); if (null != C) { a(f, v); var k, _ = [],
                  A = []; for (k = e(_, i, C), I = I || k, h = 0; h < _.length; h++) { o(v, [r(n(_[h], y), y)], y, l, A) } v = A, f = [] } else f.push(y) } else { for (I = !0, d = [], a(f, v), c = 0; c < v.length; c++)
                if (g = v[c], 0 === i.length) g.length > 0 && g[0].elements.push(new m(y.combinator, "", y.isVariable, y._index, y._fileInfo)), d.push(g);
                else
                  for (h = 0; h < i.length; h++) { var M = s(g, i[h], y, l);
                    d.push(M) } v = d, f = [] } for (a(f, v), u = 0; u < v.length; u++)(b = v[u].length) > 0 && (t.push(v[u]), w = v[u][b - 1], v[u][b - 1] = w.createDerived(w.elements, l.extendList)); return I }(c = [], t, i))
        if (t.length > 0)
          for (c = [], u = 0; u < t.length; u++) { var h = t[u].map(l.bind(this, i.visibilityInfo()));
            h.push(i), c.push(h) } else c = [[i]]; for (u = 0; u < c.length; u++) e.push(c[u]) } }); var Y = function(e, t, i, n, r, s, o, a) { var l; if (this.name = e, this.value = t instanceof u ? t : t ? new j(t) : t, i) { for (Array.isArray(i) ? this.rules = i : (this.rules = [i], this.rules[0].selectors = new F([], null, null, n, r).createEmptySelectors()), l = 0; l < this.rules.length; l++) this.rules[l].allowImports = !0;
      this.setParent(this.rules, this) } this._index = n, this._fileInfo = r, this.debugInfo = s, this.isRooted = o || !1, this.copyVisibilityInfo(a), this.allowRoot = !0 };
  Y.prototype = Object.assign(new u, { type: "AtRule", accept: function(e) { var t = this.value,
        i = this.rules;
      i && (this.rules = e.visitArray(i)), t && (this.value = e.visit(t)) }, isRulesetLike: function() { return this.rules || !this.isCharset() }, isCharset: function() { return "@charset" === this.name }, genCSS: function(e, t) { var i = this.value,
        n = this.rules;
      t.add(this.name, this.fileInfo(), this.getIndex()), i && (t.add(" "), i.genCSS(e, t)), n ? this.outputRuleset(e, t, n) : t.add(";") }, eval: function(e) { var t, i, n = this.value,
        r = this.rules; return t = e.mediaPath, i = e.mediaBlocks, e.mediaPath = [], e.mediaBlocks = [], n && (n = n.eval(e)), r && ((r = [r[0].eval(e)])[0].root = !0), e.mediaPath = t, e.mediaBlocks = i, new Y(this.name, n, r, this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo()) }, variable: function(e) { if (this.rules) return X.prototype.variable.call(this.rules[0], e) }, find: function() { if (this.rules) return X.prototype.find.apply(this.rules[0], arguments) }, rulesets: function() { if (this.rules) return X.prototype.rulesets.apply(this.rules[0]) }, outputRuleset: function(e, t, i) { var n, r = i.length; if (e.tabLevel = 1 + (0 | e.tabLevel), e.compress) { for (t.add("{"), n = 0; n < r; n++) i[n].genCSS(e, t); return t.add("}"), void e.tabLevel-- } var s = "\n" + Array(e.tabLevel).join("  "),
        o = s + "  "; if (r) { for (t.add(" {" + o), i[0].genCSS(e, t), n = 1; n < r; n++) t.add(o), i[n].genCSS(e, t);
        t.add(s + "}") } else t.add(" {" + s + "}");
      e.tabLevel-- } }); var ee = function(e, t) { this.ruleset = e, this.frames = t, this.setParent(this.ruleset, this) };
  ee.prototype = Object.assign(new u, { type: "DetachedRuleset", evalFirst: !0, accept: function(e) { this.ruleset = e.visit(this.ruleset) }, eval: function(e) { var t = this.frames || k(e.frames); return new ee(this.ruleset, t) }, callEval: function(e) { return this.ruleset.eval(this.frames ? new z.Eval(e, this.frames.concat(e.frames)) : e) } }); var te = function(e, t, i) { this.numerator = e ? k(e).sort() : [], this.denominator = t ? k(t).sort() : [], i ? this.backupUnit = i : e && e.length && (this.backupUnit = e[0]) };
  te.prototype = Object.assign(new u, { type: "Unit", clone: function() { return new te(k(this.numerator), k(this.denominator), this.backupUnit) }, genCSS: function(e, t) { var i = e && e.strictUnits;
      1 === this.numerator.length ? t.add(this.numerator[0]) : !i && this.backupUnit ? t.add(this.backupUnit) : !i && this.denominator.length && t.add(this.denominator[0]) }, toString: function() { var e, t = this.numerator.join("*"); for (e = 0; e < this.denominator.length; e++) t += "/" + this.denominator[e]; return t }, compare: function(e) { return this.is(e.toString()) ? 0 : void 0 }, is: function(e) { return this.toString().toUpperCase() === e.toUpperCase() }, isLength: function() { return RegExp("^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$", "gi").test(this.toCSS()) }, isEmpty: function() { return 0 === this.numerator.length && 0 === this.denominator.length }, isSingular: function() { return this.numerator.length <= 1 && 0 === this.denominator.length }, map: function(e) { var t; for (t = 0; t < this.numerator.length; t++) this.numerator[t] = e(this.numerator[t], !1); for (t = 0; t < this.denominator.length; t++) this.denominator[t] = e(this.denominator[t], !0) }, usedUnits: function() { var e, t, i, n = {}; for (i in t = function(t) { return e.hasOwnProperty(t) && !n[i] && (n[i] = t), t }, a) a.hasOwnProperty(i) && (e = a[i], this.map(t)); return n }, cancel: function() { var e, t, i = {}; for (t = 0; t < this.numerator.length; t++) i[e = this.numerator[t]] = (i[e] || 0) + 1; for (t = 0; t < this.denominator.length; t++) i[e = this.denominator[t]] = (i[e] || 0) - 1; for (e in this.numerator = [], this.denominator = [], i)
        if (i.hasOwnProperty(e)) { var n = i[e]; if (n > 0)
            for (t = 0; t < n; t++) this.numerator.push(e);
          else if (n < 0)
            for (t = 0; t < -n; t++) this.denominator.push(e) } this.numerator.sort(), this.denominator.sort() } }); var ie = function(e, t) { if (this.value = parseFloat(e), isNaN(this.value)) throw new Error("Dimension is not a number.");
    this.unit = t && t instanceof te ? t : new te(t ? [t] : void 0), this.setParent(this.unit, this) };
  ie.prototype = Object.assign(new u, { type: "Dimension", accept: function(e) { this.unit = e.visit(this.unit) }, eval: function(e) { return this }, toColor: function() { return new c([this.value, this.value, this.value]) }, genCSS: function(e, t) { if (e && e.strictUnits && !this.unit.isSingular()) throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString()); var i = this.fround(e, this.value),
        n = String(i); if (0 !== i && i < 1e-6 && i > -1e-6 && (n = i.toFixed(20).replace(/0+$/, "")), e && e.compress) { if (0 === i && this.unit.isLength()) return void t.add(n);
        i > 0 && i < 1 && (n = n.substr(1)) } t.add(n), this.unit.genCSS(e, t) }, operate: function(e, t, i) { var n = this._operate(e, t, this.value, i.value),
        r = this.unit.clone(); if ("+" === t || "-" === t)
        if (0 === r.numerator.length && 0 === r.denominator.length) r = i.unit.clone(), this.unit.backupUnit && (r.backupUnit = this.unit.backupUnit);
        else if (0 === i.unit.numerator.length && 0 === r.denominator.length);
      else { if (i = i.convertTo(this.unit.usedUnits()), e.strictUnits && i.unit.toString() !== r.toString()) throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '" + r.toString() + "' and '" + i.unit.toString() + "'.");
        n = this._operate(e, t, this.value, i.value) } else "*" === t ? (r.numerator = r.numerator.concat(i.unit.numerator).sort(), r.denominator = r.denominator.concat(i.unit.denominator).sort(), r.cancel()) : "/" === t && (r.numerator = r.numerator.concat(i.unit.denominator).sort(), r.denominator = r.denominator.concat(i.unit.numerator).sort(), r.cancel()); return new ie(n, r) }, compare: function(e) { var t, i; if (e instanceof ie) { if (this.unit.isEmpty() || e.unit.isEmpty()) t = this, i = e;
        else if (t = this.unify(), i = e.unify(), 0 !== t.unit.compare(i.unit)) return; return u.numericCompare(t.value, i.value) } }, unify: function() { return this.convertTo({ length: "px", duration: "s", angle: "rad" }) }, convertTo: function(e) { var t, i, n, r, s, o = this.value,
        l = this.unit.clone(),
        u = {}; if ("string" == typeof e) { for (t in a) a[t].hasOwnProperty(e) && ((u = {})[t] = e);
        e = u } for (i in s = function(e, t) { return n.hasOwnProperty(e) ? (t ? o /= n[e] / n[r] : o *= n[e] / n[r], r) : e }, e) e.hasOwnProperty(i) && (r = e[i], n = a[i], l.map(s)); return l.cancel(), new ie(o, l) } }); var ne = g,
    re = function(e, t, i) { this.op = e.trim(), this.operands = t, this.isSpaced = i };
  re.prototype = Object.assign(new u, { type: "Operation", accept: function(e) { this.operands = e.visitArray(this.operands) }, eval: function(e) { var t, i = this.operands[0].eval(e),
        n = this.operands[1].eval(e); if (e.isMathOn(this.op)) { if (t = "./" === this.op ? "/" : this.op, i instanceof ie && n instanceof c && (i = i.toColor()), n instanceof ie && i instanceof c && (n = n.toColor()), !i.operate || !n.operate) { if ((i instanceof re || n instanceof re) && "/" === i.op && e.math === ne.PARENS_DIVISION) return new re(this.op, [i, n], this.isSpaced); throw { type: "Operation", message: "Operation on an invalid type" } } return i.operate(e, t, n) } return new re(this.op, [i, n], this.isSpaced) }, genCSS: function(e, t) { this.operands[0].genCSS(e, t), this.isSpaced && t.add(" "), t.add(this.op), this.isSpaced && t.add(" "), this.operands[1].genCSS(e, t) } }); var se = function(e, t) { if (this.value = e, this.noSpacing = t, !e) throw new Error("Expression requires an array parameter") };
  se.prototype = Object.assign(new u, { type: "Expression", accept: function(e) { this.value = e.visitArray(this.value) }, eval: function(e) { var t, i = e.isMathOn(),
        n = this.parens,
        r = !1; return n && e.inParenthesis(), this.value.length > 1 ? t = new se(this.value.map((function(t) { return t.eval ? t.eval(e) : t })), this.noSpacing) : 1 === this.value.length ? (!this.value[0].parens || this.value[0].parensInOp || e.inCalc || (r = !0), t = this.value[0].eval(e)) : t = this, n && e.outOfParenthesis(), !this.parens || !this.parensInOp || i || r || t instanceof ie || (t = new p(t)), t }, genCSS: function(e, t) { for (var i = 0; i < this.value.length; i++) this.value[i].genCSS(e, t), !this.noSpacing && i + 1 < this.value.length && t.add(" ") }, throwAwayComments: function() { this.value = this.value.filter((function(e) { return !(e instanceof T) })) } }); var oe = function() {
      function e(e, t, i, n) { this.name = e.toLowerCase(), this.index = i, this.context = t, this.currentFileInfo = n, this.func = t.frames[0].functionRegistry.get(this.name) } return e.prototype.isValid = function() { return Boolean(this.func) }, e.prototype.call = function(e) { var t = this;
        Array.isArray(e) || (e = [e]); var i = this.func.evalArgs;!1 !== i && (e = e.map((function(e) { return e.eval(t.context) }))); var n = function(e) { return !("Comment" === e.type) }; return e = e.filter(n).map((function(e) { if ("Expression" === e.type) { var t = e.value.filter(n); return 1 === t.length ? e.parens && "/" === t[0].op ? e : t[0] : new se(t) } return e })), !1 === i ? this.func.apply(this, function(e, t, i) { if (i || 2 === arguments.length)
            for (var n, r = 0, s = t.length; r < s; r++) !n && r in t || (n || (n = Array.prototype.slice.call(t, 0, r)), n[r] = t[r]); return e.concat(n || t) }([this.context], e)) : this.func.apply(this, e) }, e }(),
    ae = function(e, t, i, n) { this.name = e, this.args = t, this.calc = "calc" === e, this._index = i, this._fileInfo = n };
  ae.prototype = Object.assign(new u, { type: "Call", accept: function(e) { this.args && (this.args = e.visitArray(this.args)) }, eval: function(e) { var t = this,
        i = e.mathOn;
      e.mathOn = !this.calc, (this.calc || e.inCalc) && e.enterCalc(); var n, r = function() {
          (t.calc || e.inCalc) && e.exitCalc(), e.mathOn = i },
        s = new oe(this.name, e, this.getIndex(), this.fileInfo()); if (s.isValid()) try { n = s.call(this.args), r() } catch (e) { if (e.hasOwnProperty("line") && e.hasOwnProperty("column")) throw e; throw { type: e.type || "Runtime", message: "Error evaluating function `" + this.name + "`" + (e.message ? ": " + e.message : ""), index: this.getIndex(), filename: this.fileInfo().filename, line: e.lineNumber, column: e.columnNumber } }
      if (null != n) return n instanceof u || (n = new j(n && !0 !== n ? n.toString() : null)), n._index = this._index, n._fileInfo = this._fileInfo, n; var o = this.args.map((function(t) { return t.eval(e) })); return r(), new ae(this.name, o, this.getIndex(), this.fileInfo()) }, genCSS: function(e, t) { t.add(this.name + "(", this.fileInfo(), this.getIndex()); for (var i = 0; i < this.args.length; i++) this.args[i].genCSS(e, t), i + 1 < this.args.length && t.add(", ");
      t.add(")") } }); var le = function(e, t, i) { this.name = e, this._index = t, this._fileInfo = i };
  le.prototype = Object.assign(new u, { type: "Variable", eval: function(e) { var t, i = this.name; if (0 === i.indexOf("@@") && (i = "@" + new le(i.slice(1), this.getIndex(), this.fileInfo()).eval(e).value), this.evaluating) throw { type: "Name", message: "Recursive variable definition for " + i, filename: this.fileInfo().filename, index: this.getIndex() }; if (this.evaluating = !0, t = this.find(e.frames, (function(t) { var n = t.variable(i); if (n) { if (n.important) e.importantScope[e.importantScope.length - 1].important = n.important; return e.inCalc ? new ae("_SELF", [n.value]).eval(e) : n.value.eval(e) } }))) return this.evaluating = !1, t; throw { type: "Name", message: "variable " + i + " is undefined", filename: this.fileInfo().filename, index: this.getIndex() } }, find: function(e, t) { for (var i = 0, n = void 0; i < e.length; i++)
        if (n = t.call(e, e[i])) return n; return null } }); var ue = function(e, t, i) { this.name = e, this._index = t, this._fileInfo = i };
  ue.prototype = Object.assign(new u, { type: "Property", eval: function(e) { var t, i = this.name,
        n = e.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules; if (this.evaluating) throw { type: "Name", message: "Recursive property reference for " + i, filename: this.fileInfo().filename, index: this.getIndex() }; if (this.evaluating = !0, t = this.find(e.frames, (function(t) { var r, s = t.property(i); if (s) { for (var o = 0; o < s.length; o++) r = s[o], s[o] = new D(r.name, r.value, r.important, r.merge, r.index, r.currentFileInfo, r.inline, r.variable); if (n(s), (r = s[s.length - 1]).important) e.importantScope[e.importantScope.length - 1].important = r.important; return r = r.value.eval(e) } }))) return this.evaluating = !1, t; throw { type: "Name", message: "Property '" + i + "' is undefined", filename: this.currentFileInfo.filename, index: this.index } }, find: function(e, t) { for (var i = 0, n = void 0; i < e.length; i++)
        if (n = t.call(e, e[i])) return n; return null } }); var ce = function(e, t, i, n) { this.key = e, this.op = t, this.value = i, this.cif = n };
  ce.prototype = Object.assign(new u, { type: "Attribute", eval: function(e) { return new ce(this.key.eval ? this.key.eval(e) : this.key, this.op, this.value && this.value.eval ? this.value.eval(e) : this.value, this.cif) }, genCSS: function(e, t) { t.add(this.toCSS(e)) }, toCSS: function(e) { var t = this.key.toCSS ? this.key.toCSS(e) : this.key; return this.op && (t += this.op, t += this.value.toCSS ? this.value.toCSS(e) : this.value), this.cif && (t = t + " " + this.cif), "[" + t + "]" } }); var he = function(e, t, i, n, r) { this.escaped = null == i || i, this.value = t || "", this.quote = e.charAt(0), this._index = n, this._fileInfo = r, this.variableRegex = /@\{([\w-]+)\}/g, this.propRegex = /\$\{([\w-]+)\}/g, this.allowRoot = i };
  he.prototype = Object.assign(new u, { type: "Quoted", genCSS: function(e, t) { this.escaped || t.add(this.quote, this.fileInfo(), this.getIndex()), t.add(this.value), this.escaped || t.add(this.quote) }, containsVariables: function() { return this.value.match(this.variableRegex) }, eval: function(e) { var t = this,
        i = this.value;

      function n(e, t, i) { var n = e;
        do { e = n.toString(), n = e.replace(t, i) } while (e !== n); return n } return i = n(i, this.variableRegex, (function(i, n) { var r = new le("@" + n, t.getIndex(), t.fileInfo()).eval(e, !0); return r instanceof he ? r.value : r.toCSS() })), i = n(i, this.propRegex, (function(i, n) { var r = new ue("$" + n, t.getIndex(), t.fileInfo()).eval(e, !0); return r instanceof he ? r.value : r.toCSS() })), new he(this.quote + i + this.quote, i, this.escaped, this.getIndex(), this.fileInfo()) }, compare: function(e) { return "Quoted" !== e.type || this.escaped || e.escaped ? e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0 : u.numericCompare(this.value, e.value) } }); var fe = function(e, t, i, n) { this.value = e, this._index = t, this._fileInfo = i, this.isEvald = n };
  fe.prototype = Object.assign(new u, { type: "Url", accept: function(e) { this.value = e.visit(this.value) }, genCSS: function(e, t) { t.add("url("), this.value.genCSS(e, t), t.add(")") }, eval: function(e) { var t, i = this.value.eval(e); if (!this.isEvald && ("string" == typeof(t = this.fileInfo() && this.fileInfo().rootpath) && "string" == typeof i.value && e.pathRequiresRewrite(i.value) ? (i.quote || (t = t.replace(/[\(\)'"\s]/g, (function(e) { return "\\" + e }))), i.value = e.rewritePath(i.value, t)) : i.value = e.normalizePath(i.value), e.urlArgs && !i.value.match(/^\s*data:/))) { var n = (-1 === i.value.indexOf("?") ? "?" : "&") + e.urlArgs; - 1 !== i.value.indexOf("#") ? i.value = i.value.replace("#", n + "#") : i.value += n } return new fe(i, this.getIndex(), this.fileInfo(), !0) } }); var pe = function(e, t, i, n, r) { this._index = i, this._fileInfo = n; var s = new F([], null, null, this._index, this._fileInfo).createEmptySelectors();
    this.features = new $(t), this.rules = [new X(s, e)], this.rules[0].allowImports = !0, this.copyVisibilityInfo(r), this.allowRoot = !0, this.setParent(s, this), this.setParent(this.features, this), this.setParent(this.rules, this) };
  pe.prototype = Object.assign(new Y, { type: "Media", isRulesetLike: function() { return !0 }, accept: function(e) { this.features && (this.features = e.visit(this.features)), this.rules && (this.rules = e.visitArray(this.rules)) }, genCSS: function(e, t) { t.add("@media ", this._fileInfo, this._index), this.features.genCSS(e, t), this.outputRuleset(e, t, this.rules) }, eval: function(e) { e.mediaBlocks || (e.mediaBlocks = [], e.mediaPath = []); var t = new pe(null, [], this._index, this._fileInfo, this.visibilityInfo()); return this.debugInfo && (this.rules[0].debugInfo = this.debugInfo, t.debugInfo = this.debugInfo), t.features = this.features.eval(e), e.mediaPath.push(t), e.mediaBlocks.push(t), this.rules[0].functionRegistry = e.frames[0].functionRegistry.inherit(), e.frames.unshift(this.rules[0]), t.rules = [this.rules[0].eval(e)], e.frames.shift(), e.mediaPath.pop(), 0 === e.mediaPath.length ? t.evalTop(e) : t.evalNested(e) }, evalTop: function(e) { var t = this; if (e.mediaBlocks.length > 1) { var i = new F([], null, null, this.getIndex(), this.fileInfo()).createEmptySelectors();
        (t = new X(i, e.mediaBlocks)).multiMedia = !0, t.copyVisibilityInfo(this.visibilityInfo()), this.setParent(t, this) } return delete e.mediaBlocks, delete e.mediaPath, t }, evalNested: function(e) { var t, i, n = e.mediaPath.concat([this]); for (t = 0; t < n.length; t++) i = n[t].features instanceof $ ? n[t].features.value : n[t].features, n[t] = Array.isArray(i) ? i : [i]; return this.features = new $(this.permute(n).map((function(e) { for (e = e.map((function(e) { return e.toCSS ? e : new j(e) })), t = e.length - 1; t > 0; t--) e.splice(t, 0, new j("and")); return new se(e) }))), this.setParent(this.features, this), new X([], []) }, permute: function(e) { if (0 === e.length) return []; if (1 === e.length) return e[0]; for (var t = [], i = this.permute(e.slice(1)), n = 0; n < i.length; n++)
        for (var r = 0; r < e[0].length; r++) t.push([e[0][r]].concat(i[n])); return t }, bubbleSelectors: function(e) { e && (this.rules = [new X(k(e), [this.rules[0]])], this.setParent(this.rules, this)) } }); var ve = function(e, t, i, n, r, s) { if (this.options = i, this._index = n, this._fileInfo = r, this.path = e, this.features = t, this.allowRoot = !0, void 0 !== this.options.less || this.options.inline) this.css = !this.options.less || this.options.inline;
    else { var o = this.getPath();
      o && /[#\.\&\?]css([\?;].*)?$/.test(o) && (this.css = !0) } this.copyVisibilityInfo(s), this.setParent(this.features, this), this.setParent(this.path, this) };
  ve.prototype = Object.assign(new u, { type: "Import", accept: function(e) { this.features && (this.features = e.visit(this.features)), this.path = e.visit(this.path), this.options.isPlugin || this.options.inline || !this.root || (this.root = e.visit(this.root)) }, genCSS: function(e, t) { this.css && void 0 === this.path._fileInfo.reference && (t.add("@import ", this._fileInfo, this._index), this.path.genCSS(e, t), this.features && (t.add(" "), this.features.genCSS(e, t)), t.add(";")) }, getPath: function() { return this.path instanceof fe ? this.path.value.value : this.path.value }, isVariableImport: function() { var e = this.path; return e instanceof fe && (e = e.value), !(e instanceof he) || e.containsVariables() }, evalForImport: function(e) { var t = this.path; return t instanceof fe && (t = t.value), new ve(t.eval(e), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo()) }, evalPath: function(e) { var t = this.path.eval(e),
        i = this._fileInfo; if (!(t instanceof fe)) { var n = t.value;
        i && n && e.pathRequiresRewrite(n) ? t.value = e.rewritePath(n, i.rootpath) : t.value = e.normalizePath(t.value) } return t }, eval: function(e) { var t = this.doEval(e); return (this.options.reference || this.blocksVisibility()) && (t.length || 0 === t.length ? t.forEach((function(e) { e.addVisibilityBlock() })) : t.addVisibilityBlock()), t }, doEval: function(e) { var t, i, n = this.features && this.features.eval(e); if (this.options.isPlugin) { if (this.root && this.root.eval) try { this.root.eval(e) } catch (e) { throw e.message = "Plugin error during evaluation", new O(e, this.root.imports, this.root.filename) }
        return (i = e.frames[0] && e.frames[0].functionRegistry) && this.root && this.root.functions && i.addMultiple(this.root.functions), [] } if (this.skip && ("function" == typeof this.skip && (this.skip = this.skip()), this.skip)) return []; if (this.options.inline) { var r = new j(this.root, 0, { filename: this.importedFilename, reference: this.path._fileInfo && this.path._fileInfo.reference }, !0, !0); return this.features ? new pe([r], this.features.value) : [r] } if (this.css) { var s = new ve(this.evalPath(e), n, this.options, this._index); if (!s.css && this.error) throw this.error; return s } return this.root ? ((t = new X(null, k(this.root.rules))).evalImports(e), this.features ? new pe(t.rules, this.features.value) : t.rules) : [] } }); var de = function() {};
  de.prototype = Object.assign(new u, { evaluateJavaScript: function(e, t) { var i, n = this,
        r = {}; if (!t.javascriptEnabled) throw { message: "Inline JavaScript is not enabled. Is it set in your options?", filename: this.fileInfo().filename, index: this.getIndex() };
      e = e.replace(/@\{([\w-]+)\}/g, (function(e, i) { return n.jsify(new le("@" + i, n.getIndex(), n.fileInfo()).eval(t)) })); try { e = new Function("return (" + e + ")") } catch (t) { throw { message: "JavaScript evaluation error: " + t.message + " from `" + e + "`", filename: this.fileInfo().filename, index: this.getIndex() } } var s = t.frames[0].variables(); for (var o in s) s.hasOwnProperty(o) && (r[o.slice(1)] = { value: s[o].value, toJS: function() { return this.value.eval(t).toCSS() } }); try { i = e.call(r) } catch (e) { throw { message: "JavaScript evaluation error: '" + e.name + ": " + e.message.replace(/["]/g, "'") + "'", filename: this.fileInfo().filename, index: this.getIndex() } } return i }, jsify: function(e) { return Array.isArray(e.value) && e.value.length > 1 ? "[" + e.value.map((function(e) { return e.toCSS() })).join(", ") + "]" : e.toCSS() } }); var me = function(e, t, i, n) { this.escaped = t, this.expression = e, this._index = i, this._fileInfo = n };
  me.prototype = Object.assign(new de, { type: "JavaScript", eval: function(e) { var t = this.evaluateJavaScript(this.expression, e),
        i = typeof t; return "number" !== i || isNaN(t) ? "string" === i ? new he('"' + t + '"', t, this.escaped, this._index) : Array.isArray(t) ? new j(t.join(", ")) : new j(t) : new ie(t) } }); var ge = function(e, t) { this.key = e, this.value = t };
  ge.prototype = Object.assign(new u, { type: "Assignment", accept: function(e) { this.value = e.visit(this.value) }, eval: function(e) { return this.value.eval ? new ge(this.key, this.value.eval(e)) : this }, genCSS: function(e, t) { t.add(this.key + "="), this.value.genCSS ? this.value.genCSS(e, t) : t.add(this.value) } }); var ye = function(e, t, i, n, r) { this.op = e.trim(), this.lvalue = t, this.rvalue = i, this._index = n, this.negate = r };
  ye.prototype = Object.assign(new u, { type: "Condition", accept: function(e) { this.lvalue = e.visit(this.lvalue), this.rvalue = e.visit(this.rvalue) }, eval: function(e) { var t = function(e, t, i) { switch (e) {
          case "and":
            return t && i;
          case "or":
            return t || i;
          default:
            switch (u.compare(t, i)) {
              case -1:
                return "<" === e || "=<" === e || "<=" === e;
              case 0:
                return "=" === e || ">=" === e || "=<" === e || "<=" === e;
              case 1:
                return ">" === e || ">=" === e;
              default:
                return !1 } } }(this.op, this.lvalue.eval(e), this.rvalue.eval(e)); return this.negate ? !t : t } }); var be = function(e) { this.value = e };
  be.prototype = Object.assign(new u, { type: "UnicodeDescriptor" }); var we = function(e) { this.value = e };
  we.prototype = Object.assign(new u, { type: "Negative", genCSS: function(e, t) { t.add("-"), this.value.genCSS(e, t) }, eval: function(e) { return e.isMathOn() ? new re("*", [new ie(-1), this.value]).eval(e) : new we(this.value.eval(e)) } }); var xe = function(e, t, i, n, r) { switch (this.selector = e, this.option = t, this.object_id = xe.next_id++, this.parent_ids = [this.object_id], this._index = i, this._fileInfo = n, this.copyVisibilityInfo(r), this.allowRoot = !0, t) {
      case "all":
        this.allowBefore = !0, this.allowAfter = !0; break;
      default:
        this.allowBefore = !1, this.allowAfter = !1 } this.setParent(this.selector, this) };
  xe.prototype = Object.assign(new u, { type: "Extend", accept: function(e) { this.selector = e.visit(this.selector) }, eval: function(e) { return new xe(this.selector.eval(e), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo()) }, clone: function(e) { return new xe(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo()) }, findSelfSelectors: function(e) { var t, i, n = []; for (t = 0; t < e.length; t++) i = e[t].elements, t > 0 && i.length && "" === i[0].combinator.value && (i[0].combinator.value = " "), n = n.concat(e[t].elements);
      this.selfSelectors = [new F(n)], this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo()) } }), xe.next_id = 0; var Se = function(e, t, i) { this.variable = e, this._index = t, this._fileInfo = i, this.allowRoot = !0 };
  Se.prototype = Object.assign(new u, { type: "VariableCall", eval: function(e) { var t, i = new le(this.variable, this.getIndex(), this.fileInfo()).eval(e),
        n = new O({ message: "Could not evaluate variable call " + this.variable }); if (!i.ruleset) { if (i.rules) t = i;
        else if (Array.isArray(i)) t = new X("", i);
        else { if (!Array.isArray(i.value)) throw n;
          t = new X("", i.value) } i = new ee(t) } if (i.ruleset) return i.callEval(e); throw n } }); var Ie = function(e, t, i, n) { this.value = e, this.lookups = t, this._index = i, this._fileInfo = n };
  Ie.prototype = Object.assign(new u, { type: "NamespaceValue", eval: function(e) { var t, i, n = this.value.eval(e); for (t = 0; t < this.lookups.length; t++) { if (i = this.lookups[t], Array.isArray(n) && (n = new X([new F], n)), "" === i) n = n.lastDeclaration();
        else if ("@" === i.charAt(0)) { if ("@" === i.charAt(1) && (i = "@" + new le(i.substr(1)).eval(e).value), n.variables && (n = n.variable(i)), !n) throw { type: "Name", message: "variable " + i + " not found", filename: this.fileInfo().filename, index: this.getIndex() } } else { if (i = "$@" === i.substring(0, 2) ? "$" + new le(i.substr(1)).eval(e).value : "$" === i.charAt(0) ? i : "$" + i, n.properties && (n = n.property(i)), !n) throw { type: "Name", message: 'property "' + i.substr(1) + '" not found', filename: this.fileInfo().filename, index: this.getIndex() };
          n = n[n.length - 1] } n.value && (n = n.eval(e).value), n.ruleset && (n = n.ruleset.eval(e)) } return n } }); var Ce = function(e, t, i, n, r, s, o) { this.name = e || "anonymous mixin", this.selectors = [new F([new m(null, e, !1, this._index, this._fileInfo)])], this.params = t, this.condition = n, this.variadic = r, this.arity = t.length, this.rules = i, this._lookups = {}; var a = [];
    this.required = t.reduce((function(e, t) { return !t.name || t.name && !t.value ? e + 1 : (a.push(t.name), e) }), 0), this.optionalParameters = a, this.frames = s, this.copyVisibilityInfo(o), this.allowRoot = !0 };
  Ce.prototype = Object.assign(new X, { type: "MixinDefinition", evalFirst: !0, accept: function(e) { this.params && this.params.length && (this.params = e.visitArray(this.params)), this.rules = e.visitArray(this.rules), this.condition && (this.condition = e.visit(this.condition)) }, evalParams: function(e, t, i, n) { var r, s, o, a, l, u, c, h, f = new X(null, null),
        p = k(this.params),
        v = 0; if (t.frames && t.frames[0] && t.frames[0].functionRegistry && (f.functionRegistry = t.frames[0].functionRegistry.inherit()), t = new z.Eval(t, [f].concat(t.frames)), i)
        for (v = (i = k(i)).length, o = 0; o < v; o++)
          if (u = (s = i[o]) && s.name) { for (c = !1, a = 0; a < p.length; a++)
              if (!n[a] && u === p[a].name) { n[a] = s.value.eval(e), f.prependRule(new D(u, s.value.eval(e))), c = !0; break } if (c) { i.splice(o, 1), o--; continue } throw { type: "Runtime", message: "Named argument for " + this.name + " " + i[o].name + " not found" } } for (h = 0, o = 0; o < p.length; o++)
        if (!n[o]) { if (s = i && i[h], u = p[o].name)
            if (p[o].variadic) { for (r = [], a = h; a < v; a++) r.push(i[a].value.eval(e));
              f.prependRule(new D(u, new se(r).eval(e))) } else { if (l = s && s.value) l = Array.isArray(l) ? new ee(new X("", l)) : l.eval(e);
              else { if (!p[o].value) throw { type: "Runtime", message: "wrong number of arguments for " + this.name + " (" + v + " for " + this.arity + ")" };
                l = p[o].value.eval(t), f.resetCache() } f.prependRule(new D(u, l)), n[o] = l } if (p[o].variadic && i)
            for (a = h; a < v; a++) n[a] = i[a].value.eval(e);
          h++ } return f }, makeImportant: function() { var e = this.rules ? this.rules.map((function(e) { return e.makeImportant ? e.makeImportant(!0) : e })) : this.rules; return new Ce(this.name, this.params, e, this.condition, this.variadic, this.frames) }, eval: function(e) { return new Ce(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || k(e.frames)) }, evalCall: function(e, t, i) { var n, r, s = [],
        o = this.frames ? this.frames.concat(e.frames) : e.frames,
        a = this.evalParams(e, new z.Eval(e, o), t, s); return a.prependRule(new D("@arguments", new se(s).eval(e))), n = k(this.rules), (r = new X(null, n)).originalRuleset = this, r = r.eval(new z.Eval(e, [this, a].concat(o))), i && (r = r.makeImportant()), r }, matchCondition: function(e, t) { return !(this.condition && !this.condition.eval(new z.Eval(t, [this.evalParams(t, new z.Eval(t, this.frames ? this.frames.concat(t.frames) : t.frames), e, [])].concat(this.frames || []).concat(t.frames)))) }, matchArgs: function(e, t) { var i, n = e && e.length || 0,
        r = this.optionalParameters,
        s = e ? e.reduce((function(e, t) { return r.indexOf(t.name) < 0 ? e + 1 : e }), 0) : 0; if (this.variadic) { if (s < this.required - 1) return !1 } else { if (s < this.required) return !1; if (n > this.params.length) return !1 } i = Math.min(s, this.arity); for (var o = 0; o < i; o++)
        if (!this.params[o].name && !this.params[o].variadic && e[o].value.eval(t).toCSS() != this.params[o].value.eval(t).toCSS()) return !1; return !0 } }); var ke = function(e, t, i, n, r) { this.selector = new F(e), this.arguments = t || [], this._index = i, this._fileInfo = n, this.important = r, this.allowRoot = !0, this.setParent(this.selector, this) };
  ke.prototype = Object.assign(new u, { type: "MixinCall", accept: function(e) { this.selector && (this.selector = e.visit(this.selector)), this.arguments.length && (this.arguments = e.visitArray(this.arguments)) }, eval: function(e) { var t, i, n, r, s, o, a, l, u, c, h, f, p, v, d, m = [],
        g = [],
        y = !1,
        b = [],
        w = [];

      function x(t, i) { var n, r, s; for (n = 0; n < 2; n++) { for (w[n] = !0, Q.value(n), r = 0; r < i.length && w[n]; r++)(s = i[r]).matchCondition && (w[n] = w[n] && s.matchCondition(null, e));
          t.matchCondition && (w[n] = w[n] && t.matchCondition(m, e)) } return w[0] || w[1] ? w[0] != w[1] ? w[1] ? 1 : 2 : 0 : -1 } for (this.selector = this.selector.eval(e), o = 0; o < this.arguments.length; o++)
        if (s = (r = this.arguments[o]).value.eval(e), r.expand && Array.isArray(s.value))
          for (s = s.value, a = 0; a < s.length; a++) m.push({ value: s[a] });
        else m.push({ name: r.name, value: s }); for (d = function(t) { return t.matchArgs(null, e) }, o = 0; o < e.frames.length; o++)
        if ((t = e.frames[o].find(this.selector, null, d)).length > 0) { for (c = !0, a = 0; a < t.length; a++) { for (i = t[a].rule, n = t[a].path, u = !1, l = 0; l < e.frames.length; l++)
              if (!(i instanceof Ce) && i === (e.frames[l].originalRuleset || e.frames[l])) { u = !0; break } u || i.matchArgs(m, e) && (-1 !== (h = { mixin: i, group: x(i, n) }).group && b.push(h), y = !0) } for (Q.reset(), p = [0, 0, 0], a = 0; a < b.length; a++) p[b[a].group]++; if (p[0] > 0) f = 2;
          else if (f = 1, p[1] + p[2] > 1) throw { type: "Runtime", message: "Ambiguous use of `default()` found when matching for `" + this.format(m) + "`", index: this.getIndex(), filename: this.fileInfo().filename }; for (a = 0; a < b.length; a++)
            if (0 === (h = b[a].group) || h === f) try {
              (i = b[a].mixin) instanceof Ce || (v = i.originalRuleset || i, (i = new Ce("", [], i.rules, null, !1, null, v.visibilityInfo())).originalRuleset = v); var S = i.evalCall(e, m, this.important).rules;
              this._setVisibilityToReplacement(S), Array.prototype.push.apply(g, S) } catch (e) { throw { message: e.message, index: this.getIndex(), filename: this.fileInfo().filename, stack: e.stack } }
          if (y) return g } throw c ? { type: "Runtime", message: "No matching definition was found for `" + this.format(m) + "`", index: this.getIndex(), filename: this.fileInfo().filename } : { type: "Name", message: this.selector.toCSS().trim() + " is undefined", index: this.getIndex(), filename: this.fileInfo().filename } }, _setVisibilityToReplacement: function(e) { var t; if (this.blocksVisibility())
        for (t = 0; t < e.length; t++) e[t].addVisibilityBlock() }, format: function(e) { return this.selector.toCSS().trim() + "(" + (e ? e.map((function(e) { var t = ""; return e.name && (t += e.name + ":"), e.value.toCSS ? t += e.value.toCSS() : t += "???", t })).join(", ") : "") + ")" } }); var _e = { Node: u, Color: c, AtRule: Y, DetachedRuleset: ee, Operation: re, Dimension: ie, Unit: te, Keyword: L, Variable: le, Property: ue, Ruleset: X, Element: m, Attribute: ce, Combinator: d, Selector: F, Quoted: he, Expression: se, Declaration: D, Call: ae, URL: fe, Import: ve, Comment: T, Anonymous: j, Value: $, JavaScript: me, Assignment: ge, Condition: ye, Paren: p, Media: pe, UnicodeDescriptor: be, Negative: we, Extend: xe, VariableCall: Se, NamespaceValue: Ie, mixin: { Call: ke, Definition: Ce } },
    Ae = function() {
      function e() {} return e.prototype.getPath = function(e) { var t = e.lastIndexOf("?"); return t > 0 && (e = e.slice(0, t)), (t = e.lastIndexOf("/")) < 0 && (t = e.lastIndexOf("\\")), t < 0 ? "" : e.slice(0, t + 1) }, e.prototype.tryAppendExtension = function(e, t) { return /(\.[a-z]*$)|([\?;].*)$/.test(e) ? e : e + t }, e.prototype.tryAppendLessExtension = function(e) { return this.tryAppendExtension(e, ".less") }, e.prototype.supportsSync = function() { return !1 }, e.prototype.alwaysMakePathsAbsolute = function() { return !1 }, e.prototype.isPathAbsolute = function(e) { return /^(?:[a-z-]+:|\/|\\|#)/i.test(e) }, e.prototype.join = function(e, t) { return e ? e + t : t }, e.prototype.pathDiff = function(e, t) { var i, n, r, s, o = this.extractUrlParts(e),
          a = this.extractUrlParts(t),
          l = ""; if (o.hostPart !== a.hostPart) return ""; for (n = Math.max(a.directories.length, o.directories.length), i = 0; i < n && a.directories[i] === o.directories[i]; i++); for (s = a.directories.slice(i), r = o.directories.slice(i), i = 0; i < s.length - 1; i++) l += "../"; for (i = 0; i < r.length - 1; i++) l += r[i] + "/"; return l }, e.prototype.extractUrlParts = function(e, t) { var i, n, r = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
          s = e.match(r),
          o = {},
          a = [],
          l = []; if (!s) throw new Error("Could not parse sheet href - '" + e + "'"); if (t && (!s[1] || s[2])) { if (!(n = t.match(r))) throw new Error("Could not parse page url - '" + t + "'");
          s[1] = s[1] || n[1] || "", s[2] || (s[3] = n[3] + s[3]) } if (s[3])
          for (a = s[3].replace(/\\/g, "/").split("/"), i = 0; i < a.length; i++) ".." === a[i] ? l.pop() : "." !== a[i] && l.push(a[i]); return o.hostPart = s[1], o.directories = l, o.rawPath = (s[1] || "") + a.join("/"), o.path = (s[1] || "") + l.join("/"), o.filename = s[4], o.fileUrl = o.path + (s[4] || ""), o.url = o.fileUrl + (s[5] || ""), o }, e }(),
    Me = function() {
      function e() { this.require = function() { return null } } return e.prototype.evalPlugin = function(e, t, i, n, r) { var s, o, a, l, u, c;
        l = t.pluginManager, r && (u = "string" == typeof r ? r : r.filename); var h = (new this.less.FileManager).extractUrlParts(u).filename; if (u && (o = l.get(u))) { if (c = this.trySetOptions(o, u, h, n)) return c; try { o.use && o.use.call(this.context, o) } catch (e) { return e.message = e.message || "Error during @plugin call", new O(e, i, u) } return o } a = { exports: {}, pluginManager: l, fileInfo: r }, s = Z.create(); try { new Function("module", "require", "registerPlugin", "functions", "tree", "less", "fileInfo", e)(a, this.require(u), (function(e) { o = e }), s, this.less.tree, this.less, r) } catch (e) { return new O(e, i, u) } if (o || (o = a.exports), (o = this.validatePlugin(o, u, h)) instanceof O) return o; if (!o) return new O({ message: "Not a valid plugin" }, i, u); if (o.imports = i, o.filename = u, (!o.minVersion || this.compareVersion("3.0.0", o.minVersion) < 0) && (c = this.trySetOptions(o, u, h, n))) return c; if (l.addPlugin(o, r.filename, s), o.functions = s.getLocalFunctions(), c = this.trySetOptions(o, u, h, n)) return c; try { o.use && o.use.call(this.context, o) } catch (e) { return e.message = e.message || "Error during @plugin call", new O(e, i, u) } return o }, e.prototype.trySetOptions = function(e, t, i, n) { if (n && !e.setOptions) return new O({ message: "Options have been provided but the plugin " + i + " does not support any options." }); try { e.setOptions && e.setOptions(n) } catch (e) { return new O(e) } }, e.prototype.validatePlugin = function(e, t, i) { return e ? ("function" == typeof e && (e = new e), e.minVersion && this.compareVersion(e.minVersion, this.less.version) < 0 ? new O({ message: "Plugin " + i + " requires version " + this.versionToString(e.minVersion) }) : e) : null }, e.prototype.compareVersion = function(e, t) { "string" == typeof e && (e = e.match(/^(\d+)\.?(\d+)?\.?(\d+)?/)).shift(); for (var i = 0; i < e.length; i++)
          if (e[i] !== t[i]) return parseInt(e[i]) > parseInt(t[i]) ? -1 : 1; return 0 }, e.prototype.versionToString = function(e) { for (var t = "", i = 0; i < e.length; i++) t += (t ? "." : "") + e[i]; return t }, e.prototype.printUsage = function(e) { for (var t = 0; t < e.length; t++) { var i = e[t];
          i.printUsage && i.printUsage() } }, e }(),
    Ee = { visitDeeper: !0 },
    Pe = !1;

  function Re(e) { return e } var Oe = function() {
      function e(e) { this._implementation = e, this._visitInCache = {}, this._visitOutCache = {}, Pe || (! function e(t, i) { var n, r; for (n in t) switch (typeof(r = t[n])) {
            case "function":
              r.prototype && r.prototype.type && (r.prototype.typeIndex = i++); break;
            case "object":
              i = e(r, i) }
          return i }(_e, 1), Pe = !0) } return e.prototype.visit = function(e) { if (!e) return e; var t = e.typeIndex; if (!t) return e.value && e.value.typeIndex && this.visit(e.value), e; var i, n = this._implementation,
          r = this._visitInCache[t],
          s = this._visitOutCache[t],
          o = Ee; if (o.visitDeeper = !0, r || (r = n[i = "visit" + e.type] || Re, s = n[i + "Out"] || Re, this._visitInCache[t] = r, this._visitOutCache[t] = s), r !== Re) { var a = r.call(n, e, o);
          e && n.isReplacing && (e = a) } if (o.visitDeeper && e)
          if (e.length)
            for (var l = 0, u = e.length; l < u; l++) e[l].accept && e[l].accept(this);
          else e.accept && e.accept(this); return s != Re && s.call(n, e), e }, e.prototype.visitArray = function(e, t) { if (!e) return e; var i, n = e.length; if (t || !this._implementation.isReplacing) { for (i = 0; i < n; i++) this.visit(e[i]); return e } var r = []; for (i = 0; i < n; i++) { var s = this.visit(e[i]);
          void 0 !== s && (s.splice ? s.length && this.flatten(s, r) : r.push(s)) } return r }, e.prototype.flatten = function(e, t) { var i, n, r, s, o, a; for (t || (t = []), n = 0, i = e.length; n < i; n++)
          if (void 0 !== (r = e[n]))
            if (r.splice)
              for (o = 0, s = r.length; o < s; o++) void 0 !== (a = r[o]) && (a.splice ? a.length && this.flatten(a, t) : t.push(a));
            else t.push(r); return t }, e }(),
    Ve = function() {
      function e(e) { this.imports = [], this.variableImports = [], this._onSequencerEmpty = e, this._currentDepth = 0 } return e.prototype.addImport = function(e) { var t = this,
          i = { callback: e, args: null, isReady: !1 }; return this.imports.push(i),
          function() { i.args = Array.prototype.slice.call(arguments, 0), i.isReady = !0, t.tryRun() } }, e.prototype.addVariableImport = function(e) { this.variableImports.push(e) }, e.prototype.tryRun = function() { this._currentDepth++; try { for (;;) { for (; this.imports.length > 0;) { var e = this.imports[0]; if (!e.isReady) return;
              this.imports = this.imports.slice(1), e.callback.apply(null, e.args) } if (0 === this.variableImports.length) break; var t = this.variableImports[0];
            this.variableImports = this.variableImports.slice(1), t() } } finally { this._currentDepth-- } 0 === this._currentDepth && this._onSequencerEmpty && this._onSequencerEmpty() }, e }(),
    Fe = function(e, t) { this._visitor = new Oe(this), this._importer = e, this._finish = t, this.context = new z.Eval, this.importCount = 0, this.onceFileDetectionMap = {}, this.recursionDetector = {}, this._sequencer = new Ve(this._onSequencerEmpty.bind(this)) };
  Fe.prototype = { isReplacing: !1, run: function(e) { try { this._visitor.visit(e) } catch (e) { this.error = e } this.isFinished = !0, this._sequencer.tryRun() }, _onSequencerEmpty: function() { this.isFinished && this._finish(this.error) }, visitImport: function(e, t) { var i = e.options.inline; if (!e.css || i) { var n = new z.Eval(this.context, k(this.context.frames)),
          r = n.frames[0];
        this.importCount++, e.isVariableImport() ? this._sequencer.addVariableImport(this.processImportNode.bind(this, e, n, r)) : this.processImportNode(e, n, r) } t.visitDeeper = !1 }, processImportNode: function(e, t, i) { var n, r = e.options.inline; try { n = e.evalForImport(t) } catch (t) { t.filename || (t.index = e.getIndex(), t.filename = e.fileInfo().filename), e.css = !0, e.error = t } if (!n || n.css && !r) this.importCount--, this.isFinished && this._sequencer.tryRun();
      else { n.options.multiple && (t.importMultiple = !0); for (var s = void 0 === n.css, o = 0; o < i.rules.length; o++)
          if (i.rules[o] === e) { i.rules[o] = n; break } var a = this.onImported.bind(this, n, t),
          l = this._sequencer.addImport(a);
        this._importer.push(n.getPath(), s, n.fileInfo(), n.options, l) } }, onImported: function(e, t, i, n, r, s) { i && (i.filename || (i.index = e.getIndex(), i.filename = e.fileInfo().filename), this.error = i); var o = this,
        a = e.options.inline,
        l = e.options.isPlugin,
        u = e.options.optional,
        c = r || s in o.recursionDetector; if (t.importMultiple || (e.skip = !!c || function() { return s in o.onceFileDetectionMap || (o.onceFileDetectionMap[s] = !0, !1) }), !s && u && (e.skip = !0), n && (e.root = n, e.importedFilename = s, !a && !l && (t.importMultiple || !c))) { o.recursionDetector[s] = !0; var h = this.context;
        this.context = t; try { this._visitor.visit(n) } catch (i) { this.error = i } this.context = h } o.importCount--, o.isFinished && o._sequencer.tryRun() }, visitDeclaration: function(e, t) { "DetachedRuleset" === e.value.type ? this.context.frames.unshift(e) : t.visitDeeper = !1 }, visitDeclarationOut: function(e) { "DetachedRuleset" === e.value.type && this.context.frames.shift() }, visitAtRule: function(e, t) { this.context.frames.unshift(e) }, visitAtRuleOut: function(e) { this.context.frames.shift() }, visitMixinDefinition: function(e, t) { this.context.frames.unshift(e) }, visitMixinDefinitionOut: function(e) { this.context.frames.shift() }, visitRuleset: function(e, t) { this.context.frames.unshift(e) }, visitRulesetOut: function(e) { this.context.frames.shift() }, visitMedia: function(e, t) { this.context.frames.unshift(e.rules[0]) }, visitMediaOut: function(e) { this.context.frames.shift() } }; var $e = function() {
      function e(e) { this.visible = e } return e.prototype.run = function(e) { this.visit(e) }, e.prototype.visitArray = function(e) { if (!e) return e; var t, i = e.length; for (t = 0; t < i; t++) this.visit(e[t]); return e }, e.prototype.visit = function(e) { return e ? e.constructor === Array ? this.visitArray(e) : (!e.blocksVisibility || e.blocksVisibility() || (this.visible ? e.ensureVisibility() : e.ensureInvisibility(), e.accept(this)), e) : e }, e }(),
    Le = function() {
      function e() { this._visitor = new Oe(this), this.contexts = [], this.allExtendsStack = [[]] } return e.prototype.run = function(e) { return (e = this._visitor.visit(e)).allExtends = this.allExtendsStack[0], e }, e.prototype.visitDeclaration = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitMixinDefinition = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitRuleset = function(e, t) { if (!e.root) { var i, n, r, s, o = [],
            a = e.rules,
            l = a ? a.length : 0; for (i = 0; i < l; i++) e.rules[i] instanceof _e.Extend && (o.push(a[i]), e.extendOnEveryPath = !0); var u = e.paths; for (i = 0; i < u.length; i++) { var c = u[i],
              h = c[c.length - 1].extendList; for ((s = h ? k(h).concat(o) : o) && (s = s.map((function(e) { return e.clone() }))), n = 0; n < s.length; n++) this.foundExtends = !0, (r = s[n]).findSelfSelectors(c), r.ruleset = e, 0 === n && (r.firstExtendOnThisSelectorPath = !0), this.allExtendsStack[this.allExtendsStack.length - 1].push(r) } this.contexts.push(e.selectors) } }, e.prototype.visitRulesetOut = function(e) { e.root || (this.contexts.length = this.contexts.length - 1) }, e.prototype.visitMedia = function(e, t) { e.allExtends = [], this.allExtendsStack.push(e.allExtends) }, e.prototype.visitMediaOut = function(e) { this.allExtendsStack.length = this.allExtendsStack.length - 1 }, e.prototype.visitAtRule = function(e, t) { e.allExtends = [], this.allExtendsStack.push(e.allExtends) }, e.prototype.visitAtRuleOut = function(e) { this.allExtendsStack.length = this.allExtendsStack.length - 1 }, e }(),
    je = function() {
      function e() { this._visitor = new Oe(this) } return e.prototype.run = function(e) { var t = new Le; if (this.extendIndices = {}, t.run(e), !t.foundExtends) return e;
        e.allExtends = e.allExtends.concat(this.doExtendChaining(e.allExtends, e.allExtends)), this.allExtendsStack = [e.allExtends]; var i = this._visitor.visit(e); return this.checkExtendsForNonMatched(e.allExtends), i }, e.prototype.checkExtendsForNonMatched = function(e) { var t = this.extendIndices;
        e.filter((function(e) { return !e.hasFoundMatches && 1 == e.parent_ids.length })).forEach((function(e) { var i = "_unknown_"; try { i = e.selector.toCSS({}) } catch (e) {} t[e.index + " " + i] || (t[e.index + " " + i] = !0, r.warn("extend '" + i + "' has no matches")) })) }, e.prototype.doExtendChaining = function(e, t, i) { var n, r, s, o, a, l, u, c, h = [],
          f = this; for (i = i || 0, n = 0; n < e.length; n++)
          for (r = 0; r < t.length; r++) l = e[n], u = t[r], l.parent_ids.indexOf(u.object_id) >= 0 || (a = [u.selfSelectors[0]], (s = f.findMatch(l, a)).length && (l.hasFoundMatches = !0, l.selfSelectors.forEach((function(e) { var t = u.visibilityInfo();
            o = f.extendSelector(s, a, e, l.isVisible()), (c = new _e.Extend(u.selector, u.option, 0, u.fileInfo(), t)).selfSelectors = o, o[o.length - 1].extendList = [c], h.push(c), c.ruleset = u.ruleset, c.parent_ids = c.parent_ids.concat(u.parent_ids, l.parent_ids), u.firstExtendOnThisSelectorPath && (c.firstExtendOnThisSelectorPath = !0, u.ruleset.paths.push(o)) })))); if (h.length) { if (this.extendChainCount++, i > 100) { var p = "{unable to calculate}",
              v = "{unable to calculate}"; try { p = h[0].selfSelectors[0].toCSS(), v = h[0].selector.toCSS() } catch (e) {} throw { message: "extend circular reference detected. One of the circular extends is currently:" + p + ":extend(" + v + ")" } } return h.concat(f.doExtendChaining(h, t, i + 1)) } return h }, e.prototype.visitDeclaration = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitMixinDefinition = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitSelector = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitRuleset = function(e, t) { if (!e.root) { var i, n, r, s, o = this.allExtendsStack[this.allExtendsStack.length - 1],
            a = [],
            l = this; for (r = 0; r < o.length; r++)
            for (n = 0; n < e.paths.length; n++)
              if (s = e.paths[n], !e.extendOnEveryPath) { var u = s[s.length - 1].extendList;
                u && u.length || (i = this.findMatch(o[r], s)).length && (o[r].hasFoundMatches = !0, o[r].selfSelectors.forEach((function(e) { var t;
                  t = l.extendSelector(i, s, e, o[r].isVisible()), a.push(t) }))) } e.paths = e.paths.concat(a) } }, e.prototype.findMatch = function(e, t) { var i, n, r, s, o, a, l, u = e.selector.elements,
          c = [],
          h = []; for (i = 0; i < t.length; i++)
          for (n = t[i], r = 0; r < n.elements.length; r++)
            for (s = n.elements[r], (e.allowBefore || 0 === i && 0 === r) && c.push({ pathIndex: i, index: r, matched: 0, initialCombinator: s.combinator }), a = 0; a < c.length; a++) l = c[a], "" === (o = s.combinator.value) && 0 === r && (o = " "), !this.isElementValuesEqual(u[l.matched].value, s.value) || l.matched > 0 && u[l.matched].combinator.value !== o ? l = null : l.matched++, l && (l.finished = l.matched === u.length, l.finished && !e.allowAfter && (r + 1 < n.elements.length || i + 1 < t.length) && (l = null)), l ? l.finished && (l.length = u.length, l.endPathIndex = i, l.endPathElementIndex = r + 1, c.length = 0, h.push(l)) : (c.splice(a, 1), a--); return h }, e.prototype.isElementValuesEqual = function(e, t) { if ("string" == typeof e || "string" == typeof t) return e === t; if (e instanceof _e.Attribute) return e.op === t.op && e.key === t.key && (e.value && t.value ? (e = e.value.value || e.value) === (t = t.value.value || t.value) : !e.value && !t.value); if (e = e.value, t = t.value, e instanceof _e.Selector) { if (!(t instanceof _e.Selector) || e.elements.length !== t.elements.length) return !1; for (var i = 0; i < e.elements.length; i++) { if (e.elements[i].combinator.value !== t.elements[i].combinator.value && (0 !== i || (e.elements[i].combinator.value || " ") !== (t.elements[i].combinator.value || " "))) return !1; if (!this.isElementValuesEqual(e.elements[i].value, t.elements[i].value)) return !1 } return !0 } return !1 }, e.prototype.extendSelector = function(e, t, i, n) { var r, s, o, a, l, u = 0,
          c = 0,
          h = []; for (r = 0; r < e.length; r++) s = t[(a = e[r]).pathIndex], o = new _e.Element(a.initialCombinator, i.elements[0].value, i.elements[0].isVariable, i.elements[0].getIndex(), i.elements[0].fileInfo()), a.pathIndex > u && c > 0 && (h[h.length - 1].elements = h[h.length - 1].elements.concat(t[u].elements.slice(c)), c = 0, u++), l = s.elements.slice(c, a.index).concat([o]).concat(i.elements.slice(1)), u === a.pathIndex && r > 0 ? h[h.length - 1].elements = h[h.length - 1].elements.concat(l) : (h = h.concat(t.slice(u, a.pathIndex))).push(new _e.Selector(l)), u = a.endPathIndex, (c = a.endPathElementIndex) >= t[u].elements.length && (c = 0, u++); return u < t.length && c > 0 && (h[h.length - 1].elements = h[h.length - 1].elements.concat(t[u].elements.slice(c)), u++), h = (h = h.concat(t.slice(u, t.length))).map((function(e) { var t = e.createDerived(e.elements); return n ? t.ensureVisibility() : t.ensureInvisibility(), t })) }, e.prototype.visitMedia = function(e, t) { var i = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        i = i.concat(this.doExtendChaining(i, e.allExtends)), this.allExtendsStack.push(i) }, e.prototype.visitMediaOut = function(e) { var t = this.allExtendsStack.length - 1;
        this.allExtendsStack.length = t }, e.prototype.visitAtRule = function(e, t) { var i = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        i = i.concat(this.doExtendChaining(i, e.allExtends)), this.allExtendsStack.push(i) }, e.prototype.visitAtRuleOut = function(e) { var t = this.allExtendsStack.length - 1;
        this.allExtendsStack.length = t }, e }(),
    Ne = function() {
      function e() { this.contexts = [[]], this._visitor = new Oe(this) } return e.prototype.run = function(e) { return this._visitor.visit(e) }, e.prototype.visitDeclaration = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitMixinDefinition = function(e, t) { t.visitDeeper = !1 }, e.prototype.visitRuleset = function(e, t) { var i, n = this.contexts[this.contexts.length - 1],
          r = [];
        this.contexts.push(r), e.root || ((i = e.selectors) && (i = i.filter((function(e) { return e.getIsOutput() })), e.selectors = i.length ? i : i = null, i && e.joinSelectors(r, n, i)), i || (e.rules = null), e.paths = r) }, e.prototype.visitRulesetOut = function(e) { this.contexts.length = this.contexts.length - 1 }, e.prototype.visitMedia = function(e, t) { var i = this.contexts[this.contexts.length - 1];
        e.rules[0].root = 0 === i.length || i[0].multiMedia }, e.prototype.visitAtRule = function(e, t) { var i = this.contexts[this.contexts.length - 1];
        e.rules && e.rules.length && (e.rules[0].root = e.isRooted || 0 === i.length || null) }, e }(),
    De = function() {
      function e(e) { this._visitor = new Oe(this), this._context = e } return e.prototype.containsSilentNonBlockedChild = function(e) { var t; if (!e) return !1; for (var i = 0; i < e.length; i++)
          if ((t = e[i]).isSilent && t.isSilent(this._context) && !t.blocksVisibility()) return !0; return !1 }, e.prototype.keepOnlyVisibleChilds = function(e) { e && e.rules && (e.rules = e.rules.filter((function(e) { return e.isVisible() }))) }, e.prototype.isEmpty = function(e) { return !e || !e.rules || 0 === e.rules.length }, e.prototype.hasVisibleSelector = function(e) { return !(!e || !e.paths) && e.paths.length > 0 }, e.prototype.resolveVisibility = function(e, t) { if (!e.blocksVisibility()) { if (this.isEmpty(e) && !this.containsSilentNonBlockedChild(t)) return; return e } var i = e.rules[0]; if (this.keepOnlyVisibleChilds(i), !this.isEmpty(i)) return e.ensureVisibility(), e.removeVisibilityBlock(), e }, e.prototype.isVisibleRuleset = function(e) { return !!e.firstRoot || !this.isEmpty(e) && !(!e.root && !this.hasVisibleSelector(e)) }, e }(),
    Be = function(e) { this._visitor = new Oe(this), this._context = e, this.utils = new De(e) };
  Be.prototype = { isReplacing: !0, run: function(e) { return this._visitor.visit(e) }, visitDeclaration: function(e, t) { if (!e.blocksVisibility() && !e.variable) return e }, visitMixinDefinition: function(e, t) { e.frames = [] }, visitExtend: function(e, t) {}, visitComment: function(e, t) { if (!e.blocksVisibility() && !e.isSilent(this._context)) return e }, visitMedia: function(e, t) { var i = e.rules[0].rules; return e.accept(this._visitor), t.visitDeeper = !1, this.utils.resolveVisibility(e, i) }, visitImport: function(e, t) { if (!e.blocksVisibility()) return e }, visitAtRule: function(e, t) { return e.rules && e.rules.length ? this.visitAtRuleWithBody(e, t) : this.visitAtRuleWithoutBody(e, t) }, visitAnonymous: function(e, t) { if (!e.blocksVisibility()) return e.accept(this._visitor), e }, visitAtRuleWithBody: function(e, t) { var i = function(e) { var t = e.rules; return function(e) { var t = e.rules; return 1 === t.length && (!t[0].paths || 0 === t[0].paths.length) }(e) ? t[0].rules : t }(e); return e.accept(this._visitor), t.visitDeeper = !1, this.utils.isEmpty(e) || this._mergeRules(e.rules[0].rules), this.utils.resolveVisibility(e, i) }, visitAtRuleWithoutBody: function(e, t) { if (!e.blocksVisibility()) { if ("@charset" === e.name) { if (this.charset) { if (e.debugInfo) { var i = new _e.Comment("/* " + e.toCSS(this._context).replace(/\n/g, "") + " */\n"); return i.debugInfo = e.debugInfo, this._visitor.visit(i) } return } this.charset = !0 } return e } }, checkValidNodes: function(e, t) { if (e)
        for (var i = 0; i < e.length; i++) { var n = e[i]; if (t && n instanceof _e.Declaration && !n.variable) throw { message: "Properties must be inside selector blocks. They cannot be in the root", index: n.getIndex(), filename: n.fileInfo() && n.fileInfo().filename }; if (n instanceof _e.Call) throw { message: "Function '" + n.name + "' did not return a root node", index: n.getIndex(), filename: n.fileInfo() && n.fileInfo().filename }; if (n.type && !n.allowRoot) throw { message: n.type + " node returned by a function is not valid here", index: n.getIndex(), filename: n.fileInfo() && n.fileInfo().filename } } }, visitRuleset: function(e, t) { var i, n = []; if (this.checkValidNodes(e.rules, e.firstRoot), e.root) e.accept(this._visitor), t.visitDeeper = !1;
      else { this._compileRulesetPaths(e); for (var r = e.rules, s = r ? r.length : 0, o = 0; o < s;)(i = r[o]) && i.rules ? (n.push(this._visitor.visit(i)), r.splice(o, 1), s--) : o++;
        s > 0 ? e.accept(this._visitor) : e.rules = null, t.visitDeeper = !1 } return e.rules && (this._mergeRules(e.rules), this._removeDuplicateRules(e.rules)), this.utils.isVisibleRuleset(e) && (e.ensureVisibility(), n.splice(0, 0, e)), 1 === n.length ? n[0] : n }, _compileRulesetPaths: function(e) { e.paths && (e.paths = e.paths.filter((function(e) { var t; for (" " === e[0].elements[0].combinator.value && (e[0].elements[0].combinator = new _e.Combinator("")), t = 0; t < e.length; t++)
          if (e[t].isVisible() && e[t].getIsOutput()) return !0; return !1 }))) }, _removeDuplicateRules: function(e) { if (e) { var t, i, n, r = {}; for (n = e.length - 1; n >= 0; n--)
          if ((i = e[n]) instanceof _e.Declaration)
            if (r[i.name]) {
              (t = r[i.name]) instanceof _e.Declaration && (t = r[i.name] = [r[i.name].toCSS(this._context)]); var s = i.toCSS(this._context); - 1 !== t.indexOf(s) ? e.splice(n, 1) : t.push(s) } else r[i.name] = i } }, _mergeRules: function(e) { if (e) { for (var t = {}, i = [], n = 0; n < e.length; n++) { var r = e[n]; if (r.merge) { var s = r.name;
            t[s] ? e.splice(n--, 1) : i.push(t[s] = []), t[s].push(r) } } i.forEach((function(e) { if (e.length > 0) { var t = e[0],
              i = [],
              n = [new _e.Expression(i)];
            e.forEach((function(e) { "+" === e.merge && i.length > 0 && n.push(new _e.Expression(i = [])), i.push(e.value), t.important = t.important || e.important })), t.value = new _e.Value(n) } })) } } }; var Ue = { Visitor: Oe, ImportVisitor: Fe, MarkVisibleSelectorsVisitor: $e, ExtendVisitor: je, JoinSelectorVisitor: Ne, ToCSSVisitor: Be }; var qe = function() { var e, t, i, n, r, s, o, a = [],
        l = {};

      function u(i) { for (var n, a, c, h = l.i, f = t, p = l.i - o, v = l.i + s.length - p, d = l.i += i, m = e; l.i < v; l.i++) { if (n = m.charCodeAt(l.i), l.autoCommentAbsorb && 47 === n) { if ("/" === (a = m.charAt(l.i + 1))) { c = { index: l.i, isLineComment: !0 }; var g = m.indexOf("\n", l.i + 2);
              g < 0 && (g = v), l.i = g, c.text = m.substr(c.index, l.i - c.index), l.commentStore.push(c); continue } if ("*" === a) { var y = m.indexOf("*/", l.i + 2); if (y >= 0) { c = { index: l.i, text: m.substr(l.i, y + 2 - l.i), isLineComment: !1 }, l.i += c.text.length - 1, l.commentStore.push(c); continue } } break } if (32 !== n && 10 !== n && 9 !== n && 13 !== n) break } if (s = s.slice(i + l.i - d + p), o = l.i, !s.length) { if (t < r.length - 1) return s = r[++t], u(0), !0;
          l.finished = !0 } return h !== l.i || f !== t } return l.save = function() { o = l.i, a.push({ current: s, i: l.i, j: t }) }, l.restore = function(e) {
        (l.i > i || l.i === i && e && !n) && (i = l.i, n = e); var r = a.pop();
        s = r.current, o = l.i = r.i, t = r.j }, l.forget = function() { a.pop() }, l.isWhitespace = function(t) { var i = l.i + (t || 0),
          n = e.charCodeAt(i); return 32 === n || 13 === n || 9 === n || 10 === n }, l.$re = function(e) { l.i > o && (s = s.slice(l.i - o), o = l.i); var t = e.exec(s); return t ? (u(t[0].length), "string" == typeof t ? t : 1 === t.length ? t[0] : t) : null }, l.$char = function(t) { return e.charAt(l.i) !== t ? null : (u(1), t) }, l.$str = function(t) { for (var i = t.length, n = 0; n < i; n++)
          if (e.charAt(l.i + n) !== t.charAt(n)) return null; return u(i), t }, l.$quoted = function(t) { var i = t || l.i,
          n = e.charAt(i); if ("'" === n || '"' === n) { for (var r = e.length, s = i, o = 1; o + s < r; o++) { switch (e.charAt(o + s)) {
              case "\\":
                o++; continue;
              case "\r":
              case "\n":
                break;
              case n:
                var a = e.substr(s, o + 1); return t || 0 === t ? [n, a] : (u(o + 1), a) } } return null } }, l.$parseUntil = function(t) { var i, n = "",
          r = null,
          s = !1,
          o = 0,
          a = [],
          c = [],
          h = e.length,
          f = l.i,
          p = l.i,
          v = l.i,
          d = !0;
        i = "string" == typeof t ? function(e) { return e === t } : function(e) { return t.test(e) };
        do { var m = e.charAt(v); if (0 === o && i(m))(r = e.substr(p, v - p)) ? c.push(r) : c.push(" "), r = c, u(v - f), d = !1;
          else { if (s) { "*" === m && "/" === e.charAt(v + 1) && (v++, o--, s = !1), v++; continue } switch (m) {
              case "\\":
                v++, m = e.charAt(v), c.push(e.substr(p, v - p + 1)), p = v + 1; break;
              case "/":
                "*" === e.charAt(v + 1) && (v++, s = !0, o++); break;
              case "'":
              case '"':
                (n = l.$quoted(v)) ? (c.push(e.substr(p, v - p), n), p = (v += n[1].length - 1) + 1) : (u(v - f), r = m, d = !1); break;
              case "{":
                a.push("}"), o++; break;
              case "(":
                a.push(")"), o++; break;
              case "[":
                a.push("]"), o++; break;
              case "}":
              case ")":
              case "]":
                var g = a.pop();
                m === g ? o-- : (u(v - f), r = g, d = !1) }++v > h && (d = !1) } } while (d); return r || null }, l.autoCommentAbsorb = !0, l.commentStore = [], l.finished = !1, l.peek = function(t) { if ("string" == typeof t) { for (var i = 0; i < t.length; i++)
            if (e.charAt(l.i + i) !== t.charAt(i)) return !1; return !0 } return t.test(s) }, l.peekChar = function(t) { return e.charAt(l.i) === t }, l.currentChar = function() { return e.charAt(l.i) }, l.prevChar = function() { return e.charAt(l.i - 1) }, l.getInput = function() { return e }, l.peekNotNumeric = function() { var t = e.charCodeAt(l.i); return t > 57 || t < 43 || 47 === t || 44 === t }, l.start = function(n, a, c) { e = n, l.i = t = o = i = 0, r = a ? function(e, t) { var i, n, r, s, o, a, l, u, c, h = e.length,
            f = 0,
            p = 0,
            v = [],
            d = 0;

          function m(t) { var i = o - d;
            i < 512 && !t || !i || (v.push(e.slice(d, o + 1)), d = o + 1) } for (o = 0; o < h; o++)
            if (!((l = e.charCodeAt(o)) >= 97 && l <= 122 || l < 34)) switch (l) {
              case 40:
                p++, n = o; continue;
              case 41:
                if (--p < 0) return t("missing opening `(`", o); continue;
              case 59:
                p || m(); continue;
              case 123:
                f++, i = o; continue;
              case 125:
                if (--f < 0) return t("missing opening `{`", o);
                f || p || m(); continue;
              case 92:
                if (o < h - 1) { o++; continue } return t("unescaped `\\`", o);
              case 34:
              case 39:
              case 96:
                for (c = 0, a = o, o += 1; o < h; o++)
                  if (!((u = e.charCodeAt(o)) > 96)) { if (u == l) { c = 1; break } if (92 == u) { if (o == h - 1) return t("unescaped `\\`", o);
                      o++ } } if (c) continue; return t("unmatched `" + String.fromCharCode(l) + "`", a);
              case 47:
                if (p || o == h - 1) continue; if (47 == (u = e.charCodeAt(o + 1)))
                  for (o += 2; o < h && (!((u = e.charCodeAt(o)) <= 13) || 10 != u && 13 != u); o++);
                else if (42 == u) { for (r = a = o, o += 2; o < h - 1 && (125 == (u = e.charCodeAt(o)) && (s = o), 42 != u || 47 != e.charCodeAt(o + 1)); o++); if (o == h - 1) return t("missing closing `*/`", a);
                  o++ } continue;
              case 42:
                if (o < h - 1 && 47 == e.charCodeAt(o + 1)) return t("unmatched `/*`", o); continue }
          return 0 !== f ? t(r > i && s > r ? "missing closing `}` or `*/`" : "missing closing `}`", i) : 0 !== p ? t("missing closing `)`", n) : (m(!0), v) }(n, c) : [n], s = r[0], u(0) }, l.end = function() { var t, r = l.i >= e.length; return l.i < i && (t = n, l.i = i), { isFinished: r, furthest: l.i, furthestPossibleErrorMessage: t, furthestReachedEnd: l.i >= e.length - 1, furthestChar: e[l.i] } }, l },
    Te = function e(t, i, n) { var r, s = qe();

      function o(e, t) { throw new O({ index: s.i, filename: n.filename, type: t || "Syntax", message: e }, i) }

      function a(e, t) { var i = e instanceof Function ? e.call(r) : s.$re(e); if (i) return i;
        o(t || ("string" == typeof e ? "expected '" + e + "' got '" + s.currentChar() + "'" : "unexpected token")) }

      function l(e, t) { if (s.$char(e)) return e;
        o(t || "expected '" + e + "' got '" + s.currentChar() + "'") }

      function u(e) { var t = n.filename; return { lineNumber: C(e, s.getInput()).line + 1, fileName: t } } return { parserInput: s, imports: i, fileInfo: n, parseNode: function(e, t, n, o, a) { var l, u = [],
            c = s; try { c.start(e, !1, (function(e, t) { a({ message: e, index: t + n }) })); for (var h = 0, f = void 0, p = void 0; f = t[h]; h++)
              if (p = c.i, l = r[f]()) { try { l._index = p + n, l._fileInfo = o } catch (e) {} u.push(l) } else u.push(null);
            c.end().isFinished ? a(null, u) : a(!0, null) } catch (e) { throw new O({ index: e.index + n, message: e.message }, i, o.filename) } }, parse: function(a, l, u) { var c, h, f, p, v = null,
            d = ""; if (u && u.disablePluginRule && (r.plugin = function() { s.$re(/^@plugin?\s+/) && o("@plugin statements are not allowed when disablePluginRule is set to true") }), h = u && u.globalVars ? e.serializeVars(u.globalVars) + "\n" : "", f = u && u.modifyVars ? "\n" + e.serializeVars(u.modifyVars) : "", t.pluginManager)
            for (var m = t.pluginManager.getPreProcessors(), g = 0; g < m.length; g++) a = m[g].process(a, { context: t, imports: i, fileInfo: n });
          (h || u && u.banner) && (d = (u && u.banner ? u.banner : "") + h, (p = i.contentsIgnoredChars)[n.filename] = p[n.filename] || 0, p[n.filename] += d.length), a = d + (a = a.replace(/\r\n?/g, "\n")).replace(/^\uFEFF/, "") + f, i.contents[n.filename] = a; try { s.start(a, t.chunkInput, (function(e, t) { throw new O({ index: t, type: "Parse", message: e, filename: n.filename }, i) })), _e.Node.prototype.parse = this, c = new _e.Ruleset(null, this.parsers.primary()), _e.Node.prototype.rootNode = c, c.root = !0, c.firstRoot = !0, c.functionRegistry = Z.inherit() } catch (e) { return l(new O(e, i, n.filename)) } var y = s.end(); if (!y.isFinished) { var b = y.furthestPossibleErrorMessage;
            b || (b = "Unrecognised input", "}" === y.furthestChar ? b += ". Possibly missing opening '{'" : ")" === y.furthestChar ? b += ". Possibly missing opening '('" : y.furthestReachedEnd && (b += ". Possibly missing something")), v = new O({ type: "Parse", message: b, index: y.furthest, filename: n.filename }, i) } var w = function(e) { return (e = v || e || i.error) ? (e instanceof O || (e = new O(e, i, n.filename)), l(e)) : l(null, c) }; if (!1 === t.processImports) return w();
          new Ue.ImportVisitor(i, w).run(c) }, parsers: r = { primary: function() { for (var e, t = this.mixin, i = [];;) { for (; e = this.comment();) i.push(e); if (s.finished) break; if (s.peek("}")) break; if (e = this.extendRule()) i = i.concat(e);
              else if (e = t.definition() || this.declaration() || t.call(!1, !1) || this.ruleset() || this.variableCall() || this.entities.call() || this.atrule()) i.push(e);
              else { for (var n = !1; s.$char(";");) n = !0; if (!n) break } } return i }, comment: function() { if (s.commentStore.length) { var e = s.commentStore.shift(); return new _e.Comment(e.text, e.isLineComment, e.index, n) } }, entities: { mixinLookup: function() { return r.mixin.call(!0, !0) }, quoted: function(e) { var t, i = s.i,
                r = !1; if (s.save(), s.$char("~")) r = !0;
              else if (e) return void s.restore(); if (t = s.$quoted()) return s.forget(), new _e.Quoted(t.charAt(0), t.substr(1, t.length - 2), r, i, n);
              s.restore() }, keyword: function() { var e = s.$char("%") || s.$re(/^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/); if (e) return _e.Color.fromKeyword(e) || new _e.Keyword(e) }, call: function() { var e, t, i, r = s.i; if (!s.peek(/^url\(/i))
                if (s.save(), e = s.$re(/^([\w-]+|%|~|progid:[\w\.]+)\(/)) { if (e = e[1], (i = this.customFuncCall(e)) && (t = i.parse()) && i.stop) return s.forget(), t; if (t = this.arguments(t), s.$char(")")) return s.forget(), new _e.Call(e, t, r, n);
                  s.restore("Could not parse call arguments or missing ')'") } else s.forget() }, customFuncCall: function(e) { return { alpha: t(r.ieAlpha, !0), boolean: t(i), if: t(i) } [e.toLowerCase()];

              function t(e, t) { return { parse: e, stop: t } }

              function i() { return [a(r.condition, "expected condition")] } }, arguments: function(e) { var t, i, n = e || [],
                o = []; for (s.save();;) { if (e) e = !1;
                else { if (!(i = r.detachedRuleset() || this.assignment() || r.expression())) break;
                  i.value && 1 == i.value.length && (i = i.value[0]), n.push(i) } s.$char(",") || (s.$char(";") || t) && (t = !0, i = n.length < 1 ? n[0] : new _e.Value(n), o.push(i), n = []) } return s.forget(), t ? o : n }, literal: function() { return this.dimension() || this.color() || this.quoted() || this.unicodeDescriptor() }, assignment: function() { var e, t; if (s.save(), e = s.$re(/^\w+(?=\s?=)/i))
                if (s.$char("=")) { if (t = r.entity()) return s.forget(), new _e.Assignment(e, t);
                  s.restore() } else s.restore();
              else s.restore() }, url: function() { var e, t = s.i; if (s.autoCommentAbsorb = !1, s.$str("url(")) return e = this.quoted() || this.variable() || this.property() || s.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "", s.autoCommentAbsorb = !0, l(")"), new _e.URL(null != e.value || e instanceof _e.Variable || e instanceof _e.Property ? e : new _e.Anonymous(e, t), t, n);
              s.autoCommentAbsorb = !0 }, variable: function() { var e, t, i = s.i; if (s.save(), "@" === s.currentChar() && (t = s.$re(/^@@?[\w-]+/))) { if ("(" === (e = s.currentChar()) || "[" === e && !s.prevChar().match(/^\s/)) { var o = r.variableCall(t); if (o) return s.forget(), o } return s.forget(), new _e.Variable(t, i, n) } s.restore() }, variableCurly: function() { var e, t = s.i; if ("@" === s.currentChar() && (e = s.$re(/^@\{([\w-]+)\}/))) return new _e.Variable("@" + e[1], t, n) }, property: function() { var e, t = s.i; if ("$" === s.currentChar() && (e = s.$re(/^\$[\w-]+/))) return new _e.Property(e, t, n) }, propertyCurly: function() { var e, t = s.i; if ("$" === s.currentChar() && (e = s.$re(/^\$\{([\w-]+)\}/))) return new _e.Property("$" + e[1], t, n) }, color: function() { var e; if (s.save(), "#" === s.currentChar() && (e = s.$re(/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})([\w.#\[])?/)) && !e[2]) return s.forget(), new _e.Color(e[1], void 0, e[0]);
              s.restore() }, colorKeyword: function() { s.save(); var e = s.autoCommentAbsorb;
              s.autoCommentAbsorb = !1; var t = s.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/); if (s.autoCommentAbsorb = e, t) { s.restore(); var i = _e.Color.fromKeyword(t); return i ? (s.$str(t), i) : void 0 } s.forget() }, dimension: function() { if (!s.peekNotNumeric()) { var e = s.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i); return e ? new _e.Dimension(e[1], e[2]) : void 0 } }, unicodeDescriptor: function() { var e; if (e = s.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/)) return new _e.UnicodeDescriptor(e[0]) }, javascript: function() { var e, t = s.i;
              s.save(); var i = s.$char("~"); if (s.$char("`")) { if (e = s.$re(/^[^`]*`/)) return s.forget(), new _e.JavaScript(e.substr(0, e.length - 1), Boolean(i), t, n);
                s.restore("invalid javascript definition") } else s.restore() } }, variable: function() { var e; if ("@" === s.currentChar() && (e = s.$re(/^(@[\w-]+)\s*:/))) return e[1] }, variableCall: function(e) { var t, i = s.i,
              o = !!e,
              a = e; if (s.save(), a || "@" === s.currentChar() && (a = s.$re(/^(@[\w-]+)(\(\s*\))?/))) { if (!(t = this.mixin.ruleLookups()) && (o && "()" !== s.$str("()") || "()" !== a[2])) return void s.restore("Missing '[...]' lookup in variable call");
              o || (a = a[1]); var l = new _e.VariableCall(a, i, n); return !o && r.end() ? (s.forget(), l) : (s.forget(), new _e.NamespaceValue(l, t, i, n)) } s.restore() }, extend: function(e) { var t, i, r, l, u, c = s.i; if (s.$str(e ? "&:extend(" : ":extend(")) { do { for (r = null, t = null; !(r = s.$re(/^(all)(?=\s*(\)|,))/)) && (i = this.element());) t ? t.push(i) : t = [i];
                r = r && r[1], t || o("Missing target selector for :extend()."), u = new _e.Extend(new _e.Selector(t), r, c, n), l ? l.push(u) : l = [u] } while (s.$char(",")); return a(/^\)/), e && a(/^;/), l } }, extendRule: function() { return this.extend(!0) }, mixin: { call: function(e, t) { var i, o, a, u, c = s.currentChar(),
                h = !1,
                f = s.i; if ("." === c || "#" === c) { if (s.save(), o = this.elements()) { if (s.$char("(") && (a = this.args(!0).args, l(")"), u = !0), !1 !== t && (i = this.ruleLookups()), !0 === t && !i) return void s.restore(); if (e && !i && !u) return void s.restore(); if (!e && r.important() && (h = !0), e || r.end()) { s.forget(); var p = new _e.mixin.Call(o, a, f, n, !i && h); return i ? new _e.NamespaceValue(p, i) : p } } s.restore() } }, elements: function() { for (var e, t, i, r, o, a = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/; o = s.i, t = s.$re(a);) r = new _e.Element(i, t, !1, o, n), e ? e.push(r) : e = [r], i = s.$char(">"); return e }, args: function(e) { var t, i, n, a, l, u, c, h = r.entities,
                f = { args: null, variadic: !1 },
                p = [],
                v = [],
                d = [],
                m = !0; for (s.save();;) { if (e) u = r.detachedRuleset() || r.expression();
                else { if (s.commentStore.length = 0, s.$str("...")) { f.variadic = !0, s.$char(";") && !t && (t = !0), (t ? v : d).push({ variadic: !0 }); break } u = h.variable() || h.property() || h.literal() || h.keyword() || this.call(!0) } if (!u || !m) break;
                a = null, u.throwAwayComments && u.throwAwayComments(), l = u; var g = null; if (e ? u.value && 1 == u.value.length && (g = u.value[0]) : g = u, g && (g instanceof _e.Variable || g instanceof _e.Property))
                  if (s.$char(":")) { if (p.length > 0 && (t && o("Cannot mix ; and , as delimiter types"), i = !0), !(l = r.detachedRuleset() || r.expression())) { if (!e) return s.restore(), f.args = [], f;
                      o("could not understand value for named argument") } a = n = g.name } else if (s.$str("...")) { if (!e) { f.variadic = !0, s.$char(";") && !t && (t = !0), (t ? v : d).push({ name: u.name, variadic: !0 }); break } c = !0 } else e || (n = a = g.name, l = null);
                l && p.push(l), d.push({ name: a, value: l, expand: c }), s.$char(",") ? m = !0 : ((m = ";" === s.$char(";")) || t) && (i && o("Cannot mix ; and , as delimiter types"), t = !0, p.length > 1 && (l = new _e.Value(p)), v.push({ name: n, value: l, expand: c }), n = null, p = [], i = !1) } return s.forget(), f.args = t ? v : d, f }, definition: function() { var e, t, i, n, o = [],
                l = !1; if (!("." !== s.currentChar() && "#" !== s.currentChar() || s.peek(/^[^{]*\}/)))
                if (s.save(), t = s.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)) { e = t[1]; var u = this.args(!1); if (o = u.args, l = u.variadic, !s.$char(")")) return void s.restore("Missing closing ')'"); if (s.commentStore.length = 0, s.$str("when") && (n = a(r.conditions, "expected condition")), i = r.block()) return s.forget(), new _e.mixin.Definition(e, o, i, n, l);
                  s.restore() } else s.restore() }, ruleLookups: function() { var e, t = []; if ("[" === s.currentChar()) { for (;;) { if (s.save(), !(e = this.lookupValue()) && "" !== e) { s.restore(); break } t.push(e), s.forget() } return t.length > 0 ? t : void 0 } }, lookupValue: function() { if (s.save(), s.$char("[")) { var e = s.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/); if (s.$char("]")) return e || "" === e ? (s.forget(), e) : void s.restore();
                s.restore() } else s.restore() } }, entity: function() { var e = this.entities; return this.comment() || e.literal() || e.variable() || e.url() || e.property() || e.call() || e.keyword() || this.mixin.call(!0) || e.javascript() }, end: function() { return s.$char(";") || s.peek("}") }, ieAlpha: function() { var e; if (s.$re(/^opacity=/i)) return (e = s.$re(/^\d+/)) || (e = "@{" + (e = a(r.entities.variable, "Could not parse alpha")).name.slice(1) + "}"), l(")"), new _e.Quoted("", "alpha(opacity=" + e + ")") }, element: function() { var e, t, i, r = s.i; if (t = this.combinator(), (e = s.$re(/^(?:\d+\.\d+|\d+)%/) || s.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) || s.$char("*") || s.$char("&") || this.attribute() || s.$re(/^\([^&()@]+\)/) || s.$re(/^[\.#:](?=@)/) || this.entities.variableCurly()) || (s.save(), s.$char("(") ? (i = this.selector(!1)) && s.$char(")") ? (e = new _e.Paren(i), s.forget()) : s.restore("Missing closing ')'") : s.forget()), e) return new _e.Element(t, e, e instanceof _e.Variable, r, n) }, combinator: function() { var e = s.currentChar(); if ("/" === e) { s.save(); var t = s.$re(/^\/[a-z]+\//i); if (t) return s.forget(), new _e.Combinator(t);
              s.restore() } if (">" === e || "+" === e || "~" === e || "|" === e || "^" === e) { for (s.i++, "^" === e && "^" === s.currentChar() && (e = "^^", s.i++); s.isWhitespace();) s.i++; return new _e.Combinator(e) } return s.isWhitespace(-1) ? new _e.Combinator(" ") : new _e.Combinator(null) }, selector: function(e) { var t, i, r, l, u, c, h, f = s.i; for (e = !1 !== e;
              (e && (i = this.extend()) || e && (c = s.$str("when")) || (l = this.element())) && (c ? h = a(this.conditions, "expected condition") : h ? o("CSS guard can only be used at the end of selector") : i ? u = u ? u.concat(i) : i : (u && o("Extend can only be used at the end of selector"), r = s.currentChar(), t ? t.push(l) : t = [l], l = null), "{" !== r && "}" !== r && ";" !== r && "," !== r && ")" !== r);); if (t) return new _e.Selector(t, u, h, f, n);
            u && o("Extend must be used to extend a selector, it cannot be used on its own") }, selectors: function() { for (var e, t;
              (e = this.selector()) && (t ? t.push(e) : t = [e], s.commentStore.length = 0, e.condition && t.length > 1 && o("Guards are only currently allowed on a single selector."), s.$char(","));) e.condition && o("Guards are only currently allowed on a single selector."), s.commentStore.length = 0; return t }, attribute: function() { if (s.$char("[")) { var e, t, i, n, r = this.entities; return (e = r.variableCurly()) || (e = a(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)), (i = s.$re(/^[|~*$^]?=/)) && (t = r.quoted() || s.$re(/^[0-9]+%/) || s.$re(/^[\w-]+/) || r.variableCurly()) && (n = s.$re(/^[iIsS]/)), l("]"), new _e.Attribute(e, i, t, n) } }, block: function() { var e; if (s.$char("{") && (e = this.primary()) && s.$char("}")) return e }, blockRuleset: function() { var e = this.block(); return e && (e = new _e.Ruleset(null, e)), e }, detachedRuleset: function() { var e, t, i; if (s.save(), !s.$re(/^[.#]\(/) || (t = (e = this.mixin.args(!1)).args, i = e.variadic, s.$char(")"))) { var n = this.blockRuleset(); if (n) return s.forget(), t ? new _e.mixin.Definition(null, t, n, null, i) : new _e.DetachedRuleset(n);
              s.restore() } else s.restore() }, ruleset: function() { var e, i, n; if (s.save(), t.dumpLineNumbers && (n = u(s.i)), (e = this.selectors()) && (i = this.block())) { s.forget(); var r = new _e.Ruleset(e, i, t.strictImports); return t.dumpLineNumbers && (r.debugInfo = n), r } s.restore() }, declaration: function() { var e, t, i, r, o, a, l = s.i,
              u = s.currentChar(); if ("." !== u && "#" !== u && "&" !== u && ":" !== u)
              if (s.save(), e = this.variable() || this.ruleProperty()) { if ((a = "string" == typeof e) && (t = this.detachedRuleset()) && (i = !0), s.commentStore.length = 0, !t) { if (o = !a && e.length > 1 && e.pop().value, t = e[0].value && "--" === e[0].value.slice(0, 2) ? this.permissiveValue() : this.anonymousValue()) return s.forget(), new _e.Declaration(e, t, !1, o, l, n);
                  t || (t = this.value()), t ? r = this.important() : a && (t = this.permissiveValue()) } if (t && (this.end() || i)) return s.forget(), new _e.Declaration(e, t, r, o, l, n);
                s.restore() } else s.restore() }, anonymousValue: function() { var e = s.i,
              t = s.$re(/^([^.#@\$+\/'"*`(;{}-]*);/); if (t) return new _e.Anonymous(t[1], e) }, permissiveValue: function(e) { var t, i, r, a, l = e || ";",
              u = s.i,
              c = [];

            function h() { var e = s.currentChar(); return "string" == typeof l ? e === l : l.test(e) } if (!h()) { a = [];
              do {
                ((i = this.comment()) || (i = this.entity())) && a.push(i) } while (i); if (r = h(), a.length > 0) { if (a = new _e.Expression(a), r) return a;
                c.push(a), " " === s.prevChar() && c.push(new _e.Anonymous(" ", u)) } if (s.save(), a = s.$parseUntil(l)) { if ("string" == typeof a && o("Expected '" + a + "'", "Parse"), 1 === a.length && " " === a[0]) return s.forget(), new _e.Anonymous("", u); var f = void 0; for (t = 0; t < a.length; t++)
                  if (f = a[t], Array.isArray(f)) c.push(new _e.Quoted(f[0], f[1], !0, u, n));
                  else { t === a.length - 1 && (f = f.trim()); var p = new _e.Quoted("'", f, !0, u, n);
                    p.variableRegex = /@([\w-]+)/g, p.propRegex = /\$([\w-]+)/g, c.push(p) } return s.forget(), new _e.Expression(c, !0) } s.restore() } }, import: function() { var e, t, i = s.i,
              r = s.$re(/^@import\s+/); if (r) { var a = (r ? this.importOptions() : null) || {}; if (e = this.entities.quoted() || this.entities.url()) return t = this.mediaFeatures(), s.$char(";") || (s.i = i, o("missing semi-colon or unrecognised media features on import")), t = t && new _e.Value(t), new _e.Import(e, t, a, i, n);
              s.i = i, o("malformed import statement") } }, importOptions: function() { var e, t, i, n = {}; if (!s.$char("(")) return null;
            do { if (e = this.importOption()) { switch (i = !0, t = e) {
                  case "css":
                    t = "less", i = !1; break;
                  case "once":
                    t = "multiple", i = !1 } if (n[t] = i, !s.$char(",")) break } } while (e); return l(")"), n }, importOption: function() { var e = s.$re(/^(less|css|multiple|once|inline|reference|optional)/); if (e) return e[1] }, mediaFeature: function() { var e, t, i = this.entities,
              r = [];
            s.save();
            do {
              (e = i.keyword() || i.variable() || i.mixinLookup()) ? r.push(e): s.$char("(") && (t = this.property(), e = this.value(), s.$char(")") ? t && e ? r.push(new _e.Paren(new _e.Declaration(t, e, null, null, s.i, n, !0))) : e ? r.push(new _e.Paren(e)) : o("badly formed media feature definition") : o("Missing closing ')'", "Parse")) } while (e); if (s.forget(), r.length > 0) return new _e.Expression(r) }, mediaFeatures: function() { var e, t = this.entities,
              i = [];
            do { if (e = this.mediaFeature()) { if (i.push(e), !s.$char(",")) break } else if ((e = t.variable() || t.mixinLookup()) && (i.push(e), !s.$char(","))) break } while (e); return i.length > 0 ? i : null }, media: function() { var e, i, r, a, l = s.i; if (t.dumpLineNumbers && (a = u(l)), s.save(), s.$str("@media")) return e = this.mediaFeatures(), (i = this.block()) || o("media definitions require block statements after any features"), s.forget(), r = new _e.Media(i, e, l, n), t.dumpLineNumbers && (r.debugInfo = a), r;
            s.restore() }, plugin: function() { var e, t, i, r = s.i; if (s.$re(/^@plugin\s+/)) { if (i = (t = this.pluginArgs()) ? { pluginArgs: t, isPlugin: !0 } : { isPlugin: !0 }, e = this.entities.quoted() || this.entities.url()) return s.$char(";") || (s.i = r, o("missing semi-colon on @plugin")), new _e.Import(e, null, i, r, n);
              s.i = r, o("malformed @plugin statement") } }, pluginArgs: function() { if (s.save(), !s.$char("(")) return s.restore(), null; var e = s.$re(/^\s*([^\);]+)\)\s*/); return e[1] ? (s.forget(), e[1].trim()) : (s.restore(), null) }, atrule: function() { var e, i, r, a, l, c, h, f = s.i,
              p = !0,
              v = !0; if ("@" === s.currentChar()) { if (i = this.import() || this.plugin() || this.media()) return i; if (s.save(), e = s.$re(/^@[a-z-]+/)) { switch (a = e, "-" == e.charAt(1) && e.indexOf("-", 2) > 0 && (a = "@" + e.slice(e.indexOf("-", 2) + 1)), a) {
                  case "@charset":
                    l = !0, p = !1; break;
                  case "@namespace":
                    c = !0, p = !1; break;
                  case "@keyframes":
                  case "@counter-style":
                    l = !0; break;
                  case "@document":
                  case "@supports":
                    h = !0, v = !1; break;
                  default:
                    h = !0 } if (s.commentStore.length = 0, l ? (i = this.entity()) || o("expected " + e + " identifier") : c ? (i = this.expression()) || o("expected " + e + " expression") : h && (i = this.permissiveValue(/^[{;]/), p = "{" === s.currentChar(), i ? i.value || (i = null) : p || ";" === s.currentChar() || o(e + " rule is missing block or ending semi-colon")), p && (r = this.blockRuleset()), r || !p && i && s.$char(";")) return s.forget(), new _e.AtRule(e, i, r, f, n, t.dumpLineNumbers ? u(f) : null, v);
                s.restore("at-rule options not recognised") } } }, value: function() { var e, t = [],
              i = s.i;
            do { if ((e = this.expression()) && (t.push(e), !s.$char(","))) break } while (e); if (t.length > 0) return new _e.Value(t, i) }, important: function() { if ("!" === s.currentChar()) return s.$re(/^! *important/) }, sub: function() { var e, t; if (s.save(), s.$char("(")) return (e = this.addition()) && s.$char(")") ? (s.forget(), (t = new _e.Expression([e])).parens = !0, t) : void s.restore("Expected ')'");
            s.restore() }, multiplication: function() { var e, t, i, n, r; if (e = this.operand()) { for (r = s.isWhitespace(-1); !s.peek(/^\/[*\/]/);) { if (s.save(), !(i = s.$char("/") || s.$char("*") || s.$str("./"))) { s.forget(); break } if (!(t = this.operand())) { s.restore(); break } s.forget(), e.parensInOp = !0, t.parensInOp = !0, n = new _e.Operation(i, [n || e, t], r), r = s.isWhitespace(-1) } return n || e } }, addition: function() { var e, t, i, n, r; if (e = this.multiplication()) { for (r = s.isWhitespace(-1);
                (i = s.$re(/^[-+]\s+/) || !r && (s.$char("+") || s.$char("-"))) && (t = this.multiplication());) e.parensInOp = !0, t.parensInOp = !0, n = new _e.Operation(i, [n || e, t], r), r = s.isWhitespace(-1); return n || e } }, conditions: function() { var e, t, i, n = s.i; if (e = this.condition(!0)) { for (; s.peek(/^,\s*(not\s*)?\(/) && s.$char(",") && (t = this.condition(!0));) i = new _e.Condition("or", i || e, t, n); return i || e } }, condition: function(e) { var t, i, n; if (t = this.conditionAnd(e)) { if (i = s.$str("or")) { if (!(n = this.condition(e))) return;
                t = new _e.Condition(i, t, n) } return t } }, conditionAnd: function(e) { var t, i, n, r, o = this; if (t = (r = o.negatedCondition(e) || o.parenthesisCondition(e)) || e ? r : o.atomicCondition(e)) { if (i = s.$str("and")) { if (!(n = this.conditionAnd(e))) return;
                t = new _e.Condition(i, t, n) } return t } }, negatedCondition: function(e) { if (s.$str("not")) { var t = this.parenthesisCondition(e); return t && (t.negate = !t.negate), t } }, parenthesisCondition: function(e) { var t; if (s.save(), s.$str("(")) { if (t = function(t) { var i; if (s.save(), i = t.condition(e)) { if (s.$char(")")) return s.forget(), i;
                    s.restore() } else s.restore() }(this)) return s.forget(), t; if (t = this.atomicCondition(e)) { if (s.$char(")")) return s.forget(), t;
                s.restore("expected ')' got '" + s.currentChar() + "'") } else s.restore() } else s.restore() }, atomicCondition: function(e) { var t, i, n, r, a = this.entities,
              l = s.i;

            function u() { return this.addition() || a.keyword() || a.quoted() || a.mixinLookup() } if (t = (u = u.bind(this))()) return s.$char(">") ? r = s.$char("=") ? ">=" : ">" : s.$char("<") ? r = s.$char("=") ? "<=" : "<" : s.$char("=") && (r = s.$char(">") ? "=>" : s.$char("<") ? "=<" : "="), r ? (i = u()) ? n = new _e.Condition(r, t, i, l, !1) : o("expected expression") : n = new _e.Condition("=", t, new _e.Keyword("true"), l, !1), n }, operand: function() { var e, t = this.entities;
            s.peek(/^-[@\$\(]/) && (e = s.$char("-")); var i = this.sub() || t.dimension() || t.color() || t.variable() || t.property() || t.call() || t.quoted(!0) || t.colorKeyword() || t.mixinLookup(); return e && (i.parensInOp = !0, i = new _e.Negative(i)), i }, expression: function() { var e, t, i = [],
              n = s.i;
            do {
              (e = this.comment()) ? i.push(e): ((e = this.addition() || this.entity()) instanceof _e.Comment && (e = null), e && (i.push(e), s.peek(/^\/[\/*]/) || (t = s.$char("/")) && i.push(new _e.Anonymous(t, n)))) } while (e); if (i.length > 0) return new _e.Expression(i) }, property: function() { var e = s.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/); if (e) return e[1] }, ruleProperty: function() { var e, t, i = [],
              r = [];
            s.save(); var o = s.$re(/^([_a-zA-Z0-9-]+)\s*:/); if (o) return i = [new _e.Keyword(o[1])], s.forget(), i;

            function a(e) { var t = s.i,
                n = s.$re(e); if (n) return r.push(t), i.push(n[1]) } for (a(/^(\*?)/); a(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/);); if (i.length > 1 && a(/^((?:\+_|\+)?)\s*:/)) { for (s.forget(), "" === i[0] && (i.shift(), r.shift()), t = 0; t < i.length; t++) e = i[t], i[t] = "@" !== e.charAt(0) && "$" !== e.charAt(0) ? new _e.Keyword(e) : "@" === e.charAt(0) ? new _e.Variable("@" + e.slice(2, -1), r[t], n) : new _e.Property("$" + e.slice(2, -1), r[t], n); return i } s.restore() } } } };

  function ze(e, t, i, n) { return t.eval(e) ? i.eval(e) : n ? n.eval(e) : new j }

  function Ge(e, t) { try { return t.eval(e), L.True } catch (e) { return L.False } } Te.serializeVars = function(e) { var t = ""; for (var i in e)
      if (Object.hasOwnProperty.call(e, i)) { var n = e[i];
        t += ("@" === i[0] ? "" : "@") + i + ": " + n + (";" === String(n).slice(-1) ? "" : ";") } return t }, ze.evalArgs = !1, Ge.evalArgs = !1; var We, Je = { isdefined: Ge, boolean: function(e) { return e ? L.True : L.False }, if: ze };

  function He(e) { return Math.min(1, Math.max(0, e)) }

  function Ke(e, t) { var i = We.hsla(t.h, t.s, t.l, t.a); if (i) return e.value && /^(rgb|hsl)/.test(e.value) ? i.value = e.value : i.value = "rgb", i }

  function Ze(e) { if (e.toHSL) return e.toHSL(); throw new Error("Argument cannot be evaluated to a color") }

  function Qe(e) { if (e.toHSV) return e.toHSV(); throw new Error("Argument cannot be evaluated to a color") }

  function Xe(e) { if (e instanceof ie) return parseFloat(e.unit.is("%") ? e.value / 100 : e.value); if ("number" == typeof e) return e; throw { type: "Argument", message: "color functions take numbers as parameters" } } var Ye = We = { rgb: function(e, t, i) { var n = 1; if (e instanceof se) { var r = e.value; if (e = r[0], t = r[1], (i = r[2]) instanceof re) { var s = i;
          i = s.operands[0], n = s.operands[1] } } var o = We.rgba(e, t, i, n); if (o) return o.value = "rgb", o }, rgba: function(e, t, i, n) { try { if (e instanceof c) return n = t ? Xe(t) : e.alpha, new c(e.rgb, n, "rgba"); var r = [e, t, i].map((function(e) { return i = 255, (t = e) instanceof ie && t.unit.is("%") ? parseFloat(t.value * i / 100) : Xe(t); var t, i })); return n = Xe(n), new c(r, n, "rgba") } catch (e) {} }, hsl: function(e, t, i) { var n = 1; if (e instanceof se) { var r = e.value; if (e = r[0], t = r[1], (i = r[2]) instanceof re) { var s = i;
          i = s.operands[0], n = s.operands[1] } } var o = We.hsla(e, t, i, n); if (o) return o.value = "hsl", o }, hsla: function(e, t, i, n) { try { if (e instanceof c) return n = t ? Xe(t) : e.alpha, new c(e.rgb, n, "hsla"); var r, s;

        function o(e) { return 6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? r + (s - r) * e * 6 : 2 * e < 1 ? s : 3 * e < 2 ? r + (s - r) * (2 / 3 - e) * 6 : r } e = Xe(e) % 360 / 360, t = He(Xe(t)), i = He(Xe(i)), n = He(Xe(n)), r = 2 * i - (s = i <= .5 ? i * (t + 1) : i + t - i * t); var a = [255 * o(e + 1 / 3), 255 * o(e), 255 * o(e - 1 / 3)]; return n = Xe(n), new c(a, n, "hsla") } catch (e) {} }, hsv: function(e, t, i) { return We.hsva(e, t, i, 1) }, hsva: function(e, t, i, n) { var r, s;
      e = Xe(e) % 360 / 360 * 360, t = Xe(t), i = Xe(i), n = Xe(n); var o = [i, i * (1 - t), i * (1 - (s = e / 60 - (r = Math.floor(e / 60 % 6))) * t), i * (1 - (1 - s) * t)],
        a = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]]; return We.rgba(255 * o[a[r][0]], 255 * o[a[r][1]], 255 * o[a[r][2]], n) }, hue: function(e) { return new ie(Ze(e).h) }, saturation: function(e) { return new ie(100 * Ze(e).s, "%") }, lightness: function(e) { return new ie(100 * Ze(e).l, "%") }, hsvhue: function(e) { return new ie(Qe(e).h) }, hsvsaturation: function(e) { return new ie(100 * Qe(e).s, "%") }, hsvvalue: function(e) { return new ie(100 * Qe(e).v, "%") }, red: function(e) { return new ie(e.rgb[0]) }, green: function(e) { return new ie(e.rgb[1]) }, blue: function(e) { return new ie(e.rgb[2]) }, alpha: function(e) { return new ie(Ze(e).a) }, luma: function(e) { return new ie(e.luma() * e.alpha * 100, "%") }, luminance: function(e) { var t = .2126 * e.rgb[0] / 255 + .7152 * e.rgb[1] / 255 + .0722 * e.rgb[2] / 255; return new ie(t * e.alpha * 100, "%") }, saturate: function(e, t, i) { if (!e.rgb) return null; var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.s += n.s * t.value / 100 : n.s += t.value / 100, n.s = He(n.s), Ke(e, n) }, desaturate: function(e, t, i) { var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.s -= n.s * t.value / 100 : n.s -= t.value / 100, n.s = He(n.s), Ke(e, n) }, lighten: function(e, t, i) { var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.l += n.l * t.value / 100 : n.l += t.value / 100, n.l = He(n.l), Ke(e, n) }, darken: function(e, t, i) { var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.l -= n.l * t.value / 100 : n.l -= t.value / 100, n.l = He(n.l), Ke(e, n) }, fadein: function(e, t, i) { var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.a += n.a * t.value / 100 : n.a += t.value / 100, n.a = He(n.a), Ke(e, n) }, fadeout: function(e, t, i) { var n = Ze(e); return void 0 !== i && "relative" === i.value ? n.a -= n.a * t.value / 100 : n.a -= t.value / 100, n.a = He(n.a), Ke(e, n) }, fade: function(e, t) { var i = Ze(e); return i.a = t.value / 100, i.a = He(i.a), Ke(e, i) }, spin: function(e, t) { var i = Ze(e),
        n = (i.h + t.value) % 360; return i.h = n < 0 ? 360 + n : n, Ke(e, i) }, mix: function(e, t, i) { i || (i = new ie(50)); var n = i.value / 100,
        r = 2 * n - 1,
        s = Ze(e).a - Ze(t).a,
        o = ((r * s == -1 ? r : (r + s) / (1 + r * s)) + 1) / 2,
        a = 1 - o,
        l = [e.rgb[0] * o + t.rgb[0] * a, e.rgb[1] * o + t.rgb[1] * a, e.rgb[2] * o + t.rgb[2] * a],
        u = e.alpha * n + t.alpha * (1 - n); return new c(l, u) }, greyscale: function(e) { return We.desaturate(e, new ie(100)) }, contrast: function(e, t, i, n) { if (!e.rgb) return null; if (void 0 === i && (i = We.rgba(255, 255, 255, 1)), void 0 === t && (t = We.rgba(0, 0, 0, 1)), t.luma() > i.luma()) { var r = i;
        i = t, t = r } return n = void 0 === n ? .43 : Xe(n), e.luma() < n ? i : t }, argb: function(e) { return new j(e.toARGB()) }, color: function(e) { if (e instanceof he && /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(e.value)) { var t = e.value.slice(1); return new c(t, void 0, "#" + t) } if (e instanceof c || (e = c.fromKeyword(e.value))) return e.value = void 0, e; throw { type: "Argument", message: "argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF" } }, tint: function(e, t) { return We.mix(We.rgb(255, 255, 255), e, t) }, shade: function(e, t) { return We.mix(We.rgb(0, 0, 0), e, t) } };

  function et(e, t, i) { var n, r, s, o, a = t.alpha,
      l = i.alpha,
      u = [];
    s = l + a * (1 - l); for (var h = 0; h < 3; h++) o = e(n = t.rgb[h] / 255, r = i.rgb[h] / 255), s && (o = (l * r + a * (n - l * (n + r - o))) / s), u[h] = 255 * o; return new c(u, s) } var tt = { multiply: function(e, t) { return e * t }, screen: function(e, t) { return e + t - e * t }, overlay: function(e, t) { return (e *= 2) <= 1 ? tt.multiply(e, t) : tt.screen(e - 1, t) }, softlight: function(e, t) { var i = 1,
        n = e; return t > .5 && (n = 1, i = e > .25 ? Math.sqrt(e) : ((16 * e - 12) * e + 4) * e), e - (1 - 2 * t) * n * (i - e) }, hardlight: function(e, t) { return tt.overlay(t, e) }, difference: function(e, t) { return Math.abs(e - t) }, exclusion: function(e, t) { return e + t - 2 * e * t }, average: function(e, t) { return (e + t) / 2 }, negation: function(e, t) { return 1 - Math.abs(e + t - 1) } }; for (var it in tt) tt.hasOwnProperty(it) && (et[it] = et.bind(null, tt[it])); var nt = function(e) { return Array.isArray(e.value) ? e.value : Array(e) },
    rt = { _SELF: function(e) { return e }, "~": function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return 1 === e.length ? e[0] : new $(e) }, extract: function(e, t) { return t = t.value - 1, nt(e)[t] }, length: function(e) { return new ie(nt(e).length) }, range: function(e, t, i) { var n, r, s = 1,
          o = [];
        t ? (r = t, n = e.value, i && (s = i.value)) : (n = 1, r = e); for (var a = n; a <= r.value; a += s) o.push(new ie(a, r.unit)); return new se(o) }, each: function(e, t) { var i, n, r = this,
          s = [],
          o = function(e) { return e instanceof u ? e.eval(r.context) : e };
        n = !e.value || e instanceof he ? e.ruleset ? o(e.ruleset).rules : e.rules ? e.rules.map(o) : Array.isArray(e) ? e.map(o) : [o(e)] : Array.isArray(e.value) ? e.value.map(o) : [o(e.value)]; var a = "@value",
          l = "@key",
          c = "@index";
        t.params ? (a = t.params[0] && t.params[0].name, l = t.params[1] && t.params[1].name, c = t.params[2] && t.params[2].name, t = t.rules) : t = t.ruleset; for (var h = 0; h < n.length; h++) { var f = void 0,
            p = void 0,
            v = n[h];
          v instanceof D ? (f = "string" == typeof v.name ? v.name : v.name[0].value, p = v.value) : (f = new ie(h + 1), p = v), v instanceof T || (i = t.rules.slice(0), a && i.push(new D(a, p, !1, !1, this.index, this.currentFileInfo)), c && i.push(new D(c, new ie(h + 1), !1, !1, this.index, this.currentFileInfo)), l && i.push(new D(l, f, !1, !1, this.index, this.currentFileInfo)), s.push(new X([new F([new m("", "&")])], i, t.strictImports, t.visibilityInfo()))) } return new X([new F([new m("", "&")])], s, t.strictImports, t.visibilityInfo()).eval(this.context) } },
    st = function(e, t, i) { if (!(i instanceof ie)) throw { type: "Argument", message: "argument must be a number" }; return null == t ? t = i.unit : i = i.unify(), new ie(e(parseFloat(i.value)), t) },
    ot = { ceil: null, floor: null, sqrt: null, abs: null, tan: "", sin: "", cos: "", atan: "rad", asin: "rad", acos: "rad" }; for (var at in ot) ot.hasOwnProperty(at) && (ot[at] = st.bind(null, Math[at], ot[at]));
  ot.round = function(e, t) { var i = void 0 === t ? 0 : t.value; return st((function(e) { return e.toFixed(i) }), null, e) }; var lt = function(e, t) { switch ((t = Array.prototype.slice.call(t)).length) {
        case 0:
          throw { type: "Argument", message: "one or more arguments required" } } var i, n, r, s, o, a, l, u, c = [],
        h = {}; for (i = 0; i < t.length; i++)
        if ((r = t[i]) instanceof ie)
          if (l = "" !== (a = "" === (s = "" === r.unit.toString() && void 0 !== u ? new ie(r.value, u).unify() : r.unify()).unit.toString() && void 0 !== l ? l : s.unit.toString()) && void 0 === l || "" !== a && "" === c[0].unify().unit.toString() ? a : l, u = "" !== a && void 0 === u ? r.unit.toString() : u, void 0 !== (n = void 0 !== h[""] && "" !== a && a === l ? h[""] : h[a])) o = "" === c[n].unit.toString() && void 0 !== u ? new ie(c[n].value, u).unify() : c[n].unify(), (e && s.value < o.value || !e && s.value > o.value) && (c[n] = r);
          else { if (void 0 !== l && a !== l) throw { type: "Argument", message: "incompatible types" };
            h[a] = c.length, c.push(r) } else Array.isArray(t[i].value) && Array.prototype.push.apply(t, Array.prototype.slice.call(t[i].value)); return 1 == c.length ? c[0] : (t = c.map((function(e) { return e.toCSS(this.context) })).join(this.context.compress ? "," : ", "), new j((e ? "min" : "max") + "(" + t + ")")) },
    ut = { min: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; try { return lt(!0, e) } catch (e) {} }, max: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; try { return lt(!1, e) } catch (e) {} }, convert: function(e, t) { return e.convertTo(t.value) }, pi: function() { return new ie(Math.PI) }, mod: function(e, t) { return new ie(e.value % t.value, e.unit) }, pow: function(e, t) { if ("number" == typeof e && "number" == typeof t) e = new ie(e), t = new ie(t);
        else if (!(e instanceof ie && t instanceof ie)) throw { type: "Argument", message: "arguments must be numbers" }; return new ie(Math.pow(e.value, t.value), e.unit) }, percentage: function(e) { return st((function(e) { return 100 * e }), "%", e) } },
    ct = { e: function(e) { return new he('"', e instanceof me ? e.evaluated : e.value, !0) }, escape: function(e) { return new j(encodeURI(e.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29")) }, replace: function(e, t, i, n) { var r = e.value; return i = "Quoted" === i.type ? i.value : i.toCSS(), r = r.replace(new RegExp(t.value, n ? n.value : ""), i), new he(e.quote || "", r, e.escaped) }, "%": function(e) { for (var t = Array.prototype.slice.call(arguments, 1), i = e.value, n = function(e) { i = i.replace(/%[sda]/i, (function(i) { var n = "Quoted" === t[e].type && i.match(/s/i) ? t[e].value : t[e].toCSS(); return i.match(/[A-Z]$/) ? encodeURIComponent(n) : n })) }, r = 0; r < t.length; r++) n(r); return i = i.replace(/%%/g, "%"), new he(e.quote || "", i, e.escaped) } },
    ht = function(e, t) { return e instanceof t ? L.True : L.False },
    ft = function(e, t) { if (void 0 === t) throw { type: "Argument", message: "missing the required second argument to isunit." }; if ("string" != typeof(t = "string" == typeof t.value ? t.value : t)) throw { type: "Argument", message: "Second argument to isunit should be a unit or a string." }; return e instanceof ie && e.unit.is(t) ? L.True : L.False },
    pt = { isruleset: function(e) { return ht(e, ee) }, iscolor: function(e) { return ht(e, c) }, isnumber: function(e) { return ht(e, ie) }, isstring: function(e) { return ht(e, he) }, iskeyword: function(e) { return ht(e, L) }, isurl: function(e) { return ht(e, fe) }, ispixel: function(e) { return ft(e, "px") }, ispercentage: function(e) { return ft(e, "%") }, isem: function(e) { return ft(e, "em") }, isunit: ft, unit: function(e, t) { if (!(e instanceof ie)) throw { type: "Argument", message: "the first argument to unit must be a number" + (e instanceof re ? ". Have you forgotten parenthesis?" : "") }; return t = t ? t instanceof L ? t.value : t.toCSS() : "", new ie(e.value, t) }, "get-unit": function(e) { return new j(e.unit) } },
    vt = function(e) { var t = { functionRegistry: Z, functionCaller: oe }; return Z.addMultiple(Je), Z.add("default", Q.eval.bind(Q)), Z.addMultiple(Ye), Z.addMultiple(et), Z.addMultiple(function(e) { var t = function(e, t) { return new fe(t, e.index, e.currentFileInfo).eval(e.context) }; return { "data-uri": function(i, n) { n || (n = i, i = null); var s = i && i.value,
              o = n.value,
              a = this.currentFileInfo,
              l = a.rewriteUrls ? a.currentDirectory : a.entryPath,
              u = o.indexOf("#"),
              c = ""; - 1 !== u && (c = o.slice(u), o = o.slice(0, u)); var h = _(this.context);
            h.rawBuffer = !0; var f = e.getFileManager(o, l, h, e, !0); if (!f) return t(this, n); var p = !1; if (i) p = /;base64$/.test(s);
            else { if ("image/svg+xml" === (s = e.mimeLookup(o))) p = !1;
              else { var v = e.charsetLookup(s);
                p = ["US-ASCII", "UTF-8"].indexOf(v) < 0 } p && (s += ";base64") } var d = f.loadFileSync(o, l, h, e); if (!d.contents) return r.warn("Skipped data-uri embedding of " + o + " because file not found"), t(this, n || i); var m = d.contents; if (p && !e.encodeBase64) return t(this, n); var g = "data:" + s + "," + (m = p ? e.encodeBase64(m) : encodeURIComponent(m)) + c; return new fe(new he('"' + g + '"', g, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo) } } }(e)), Z.addMultiple(rt), Z.addMultiple(ot), Z.addMultiple(ut), Z.addMultiple(ct), Z.addMultiple({ "svg-gradient": function(e) { var t, i, n, r, s, o, a, l, u = "linear",
            h = 'x="0" y="0" width="1" height="1"',
            f = { compress: !1 },
            p = e.toCSS(f);

          function v() { throw { type: "Argument", message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position] or direction, color list" } } switch (2 == arguments.length ? (arguments[1].value.length < 2 && v(), t = arguments[1].value) : arguments.length < 3 ? v() : t = Array.prototype.slice.call(arguments, 1), p) {
            case "to bottom":
              i = 'x1="0%" y1="0%" x2="0%" y2="100%"'; break;
            case "to right":
              i = 'x1="0%" y1="0%" x2="100%" y2="0%"'; break;
            case "to bottom right":
              i = 'x1="0%" y1="0%" x2="100%" y2="100%"'; break;
            case "to top right":
              i = 'x1="0%" y1="100%" x2="100%" y2="0%"'; break;
            case "ellipse":
            case "ellipse at center":
              u = "radial", i = 'cx="50%" cy="50%" r="75%"', h = 'x="-50" y="-50" width="101" height="101"'; break;
            default:
              throw { type: "Argument", message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'" } } for (n = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><' + u + 'Gradient id="g" ' + i + ">", r = 0; r < t.length; r += 1) t[r] instanceof se ? (s = t[r].value[0], o = t[r].value[1]) : (s = t[r], o = void 0), s instanceof c && ((0 === r || r + 1 === t.length) && void 0 === o || o instanceof ie) || v(), a = o ? o.toCSS(f) : 0 === r ? "0%" : "100%", l = s.alpha, n += '<stop offset="' + a + '" stop-color="' + s.toRGB() + '"' + (l < 1 ? ' stop-opacity="' + l + '"' : "") + "/>"; return n += "</" + u + "Gradient><rect " + h + ' fill="url(#g)" /></svg>', n = encodeURIComponent(n), new fe(new he("'" + (n = "data:image/svg+xml," + n) + "'", n, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo) } }), Z.addMultiple(pt), t };

  function dt(e, t) { var i, n = (t = t || {}).variables,
      r = new z.Eval(t); "object" != typeof n || Array.isArray(n) || (n = Object.keys(n).map((function(e) { var t = n[e]; return t instanceof _e.Value || (t instanceof _e.Expression || (t = new _e.Expression([t])), t = new _e.Value([t])), new _e.Declaration("@" + e, t, !1, null, 0) })), r.frames = [new _e.Ruleset(null, n)]); var s, o, a = [new Ue.JoinSelectorVisitor, new Ue.MarkVisibleSelectorsVisitor(!0), new Ue.ExtendVisitor, new Ue.ToCSSVisitor({ compress: Boolean(t.compress) })],
      l = []; if (t.pluginManager) { o = t.pluginManager.visitor(); for (var u = 0; u < 2; u++)
        for (o.first(); s = o.get();) s.isPreEvalVisitor ? 0 !== u && -1 !== l.indexOf(s) || (l.push(s), s.run(e)) : 0 !== u && -1 !== a.indexOf(s) || (s.isPreVisitor ? a.unshift(s) : a.push(s)) } i = e.eval(r); for (u = 0; u < a.length; u++) a[u].run(i); if (t.pluginManager)
      for (o.first(); s = o.get();) - 1 === a.indexOf(s) && -1 === l.indexOf(s) && s.run(i); return i } var mt, gt = function() {
      function e(e) { this.less = e, this.visitors = [], this.preProcessors = [], this.postProcessors = [], this.installedPlugins = [], this.fileManagers = [], this.iterator = -1, this.pluginCache = {}, this.Loader = new e.PluginLoader(e) } return e.prototype.addPlugins = function(e) { if (e)
          for (var t = 0; t < e.length; t++) this.addPlugin(e[t]) }, e.prototype.addPlugin = function(e, t, i) { this.installedPlugins.push(e), t && (this.pluginCache[t] = e), e.install && e.install(this.less, this, i || this.less.functions.functionRegistry) }, e.prototype.get = function(e) { return this.pluginCache[e] }, e.prototype.addVisitor = function(e) { this.visitors.push(e) }, e.prototype.addPreProcessor = function(e, t) { var i; for (i = 0; i < this.preProcessors.length && !(this.preProcessors[i].priority >= t); i++);
        this.preProcessors.splice(i, 0, { preProcessor: e, priority: t }) }, e.prototype.addPostProcessor = function(e, t) { var i; for (i = 0; i < this.postProcessors.length && !(this.postProcessors[i].priority >= t); i++);
        this.postProcessors.splice(i, 0, { postProcessor: e, priority: t }) }, e.prototype.addFileManager = function(e) { this.fileManagers.push(e) }, e.prototype.getPreProcessors = function() { for (var e = [], t = 0; t < this.preProcessors.length; t++) e.push(this.preProcessors[t].preProcessor); return e }, e.prototype.getPostProcessors = function() { for (var e = [], t = 0; t < this.postProcessors.length; t++) e.push(this.postProcessors[t].postProcessor); return e }, e.prototype.getVisitors = function() { return this.visitors }, e.prototype.visitor = function() { var e = this; return { first: function() { return e.iterator = -1, e.visitors[e.iterator] }, get: function() { return e.iterator += 1, e.visitors[e.iterator] } } }, e.prototype.getFileManagers = function() { return this.fileManagers }, e }(),
    yt = function(e, t) { return !t && mt || (mt = new gt(e)), mt }; var bt, wt, xt = function(e) { var t = e.match(/^v(\d{1,2})\.(\d{1,2})\.(\d{1,2})(?:-([0-9A-Za-z-.]+))?(?:\+([0-9A-Za-z-.]+))?$/); if (!t) throw new Error("Unable to parse: " + e); return { major: parseInt(t[1], 10), minor: parseInt(t[2], 10), patch: parseInt(t[3], 10), pre: t[4] || "", build: t[5] || "" } };

  function St(e, t) { var i, n, o, a;
    o = function(e) { return function() {
        function t(e, t) { this.root = e, this.imports = t } return t.prototype.toCSS = function(t) { var i, n, s = {}; try { i = dt(this.root, t) } catch (e) { throw new O(e, this.imports) } try { var o = Boolean(t.compress);
            o && r.warn("The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css."); var a = { compress: o, dumpLineNumbers: t.dumpLineNumbers, strictUnits: Boolean(t.strictUnits), numPrecision: 8 };
            t.sourceMap ? (n = new e(t.sourceMap), s.css = n.toCSS(i, a, this.imports)) : s.css = i.toCSS(a) } catch (e) { throw new O(e, this.imports) } if (t.pluginManager)
            for (var l = t.pluginManager.getPostProcessors(), u = 0; u < l.length; u++) s.css = l[u].process(s.css, { sourceMap: n, options: t, imports: this.imports }); for (var c in t.sourceMap && (s.map = n.getExternalSourceMap()), s.imports = [], this.imports.files) this.imports.files.hasOwnProperty(c) && c !== this.imports.rootFilename && s.imports.push(c); return s }, t }() }(n = function(e, t) { return function() {
        function i(e) { this.options = e } return i.prototype.toCSS = function(t, i, n) { var r = new e({ contentsIgnoredCharsMap: n.contentsIgnoredChars, rootNode: t, contentsMap: n.contents, sourceMapFilename: this.options.sourceMapFilename, sourceMapURL: this.options.sourceMapURL, outputFilename: this.options.sourceMapOutputFilename, sourceMapBasepath: this.options.sourceMapBasepath, sourceMapRootpath: this.options.sourceMapRootpath, outputSourceFiles: this.options.outputSourceFiles, sourceMapGenerator: this.options.sourceMapGenerator, sourceMapFileInline: this.options.sourceMapFileInline, disableSourcemapAnnotation: this.options.disableSourcemapAnnotation }),
            s = r.toCSS(i); return this.sourceMap = r.sourceMap, this.sourceMapURL = r.sourceMapURL, this.options.sourceMapInputFilename && (this.sourceMapInputFilename = r.normalizeFilename(this.options.sourceMapInputFilename)), void 0 !== this.options.sourceMapBasepath && void 0 !== this.sourceMapURL && (this.sourceMapURL = r.removeBasepath(this.sourceMapURL)), s + this.getCSSAppendage() }, i.prototype.getCSSAppendage = function() { var e = this.sourceMapURL; if (this.options.sourceMapFileInline) { if (void 0 === this.sourceMap) return "";
            e = "data:application/json;base64," + t.encodeBase64(this.sourceMap) } return this.options.disableSourcemapAnnotation ? "" : e ? "/*# sourceMappingURL=" + e + " */" : "" }, i.prototype.getExternalSourceMap = function() { return this.sourceMap }, i.prototype.setExternalSourceMap = function(e) { this.sourceMap = e }, i.prototype.isInline = function() { return this.options.sourceMapFileInline }, i.prototype.getSourceMapURL = function() { return this.sourceMapURL }, i.prototype.getOutputFilename = function() { return this.options.sourceMapOutputFilename }, i.prototype.getInputFilename = function() { return this.sourceMapInputFilename }, i }() }(i = function(e) { return function() {
        function t(t) { this._css = [], this._rootNode = t.rootNode, this._contentsMap = t.contentsMap, this._contentsIgnoredCharsMap = t.contentsIgnoredCharsMap, t.sourceMapFilename && (this._sourceMapFilename = t.sourceMapFilename.replace(/\\/g, "/")), this._outputFilename = t.outputFilename, this.sourceMapURL = t.sourceMapURL, t.sourceMapBasepath && (this._sourceMapBasepath = t.sourceMapBasepath.replace(/\\/g, "/")), t.sourceMapRootpath ? (this._sourceMapRootpath = t.sourceMapRootpath.replace(/\\/g, "/"), "/" !== this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) && (this._sourceMapRootpath += "/")) : this._sourceMapRootpath = "", this._outputSourceFiles = t.outputSourceFiles, this._sourceMapGeneratorConstructor = e.getSourceMapGenerator(), this._lineNumber = 0, this._column = 0 } return t.prototype.removeBasepath = function(e) { return this._sourceMapBasepath && 0 === e.indexOf(this._sourceMapBasepath) && ("\\" !== (e = e.substring(this._sourceMapBasepath.length)).charAt(0) && "/" !== e.charAt(0) || (e = e.substring(1))), e }, t.prototype.normalizeFilename = function(e) { return e = e.replace(/\\/g, "/"), e = this.removeBasepath(e), (this._sourceMapRootpath || "") + e }, t.prototype.add = function(e, t, i, n) { if (e) { var r, s, o, a, l; if (t && t.filename) { var u = this._contentsMap[t.filename]; if (this._contentsIgnoredCharsMap[t.filename] && ((i -= this._contentsIgnoredCharsMap[t.filename]) < 0 && (i = 0), u = u.slice(this._contentsIgnoredCharsMap[t.filename])), void 0 === u) return void this._css.push(e);
              a = (s = (u = u.substring(0, i)).split("\n"))[s.length - 1] } if (o = (r = e.split("\n"))[r.length - 1], t && t.filename)
              if (n)
                for (l = 0; l < r.length; l++) this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + l + 1, column: 0 === l ? this._column : 0 }, original: { line: s.length + l, column: 0 === l ? a.length : 0 }, source: this.normalizeFilename(t.filename) });
              else this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + 1, column: this._column }, original: { line: s.length, column: a.length }, source: this.normalizeFilename(t.filename) });
            1 === r.length ? this._column += o.length : (this._lineNumber += r.length - 1, this._column = o.length), this._css.push(e) } }, t.prototype.isEmpty = function() { return 0 === this._css.length }, t.prototype.toCSS = function(e) { if (this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({ file: this._outputFilename, sourceRoot: null }), this._outputSourceFiles)
            for (var t in this._contentsMap)
              if (this._contentsMap.hasOwnProperty(t)) { var i = this._contentsMap[t];
                this._contentsIgnoredCharsMap[t] && (i = i.slice(this._contentsIgnoredCharsMap[t])), this._sourceMapGenerator.setSourceContent(this.normalizeFilename(t), i) } if (this._rootNode.genCSS(e, this), this._css.length > 0) { var n = void 0,
              r = JSON.stringify(this._sourceMapGenerator.toJSON());
            this.sourceMapURL ? n = this.sourceMapURL : this._sourceMapFilename && (n = this._sourceMapFilename), this.sourceMapURL = n, this.sourceMap = r } return this._css.join("") }, t }() }(e = new s(e, t)), e)), a = function(e) { return function() {
        function t(e, t, i) { this.less = e, this.rootFilename = i.filename, this.paths = t.paths || [], this.contents = {}, this.contentsIgnoredChars = {}, this.mime = t.mime, this.error = null, this.context = t, this.queue = [], this.files = {} } return t.prototype.push = function(t, i, n, s, o) { var a = this,
            l = this.context.pluginManager.Loader;
          this.queue.push(t); var u = function(e, i, n) { a.queue.splice(a.queue.indexOf(t), 1); var l = n === a.rootFilename;
              s.optional && e ? (o(null, { rules: [] }, !1, null), r.info("The file " + n + " was skipped because it was not found and the import was marked optional.")) : (a.files[n] || s.inline || (a.files[n] = { root: i, options: s }), e && !a.error && (a.error = e), o(e, i, l, n)) },
            c = { rewriteUrls: this.context.rewriteUrls, entryPath: n.entryPath, rootpath: n.rootpath, rootFilename: n.rootFilename },
            h = e.getFileManager(t, n.currentDirectory, this.context, e); if (h) { var f, p, v = function(e) { var t, i = e.filename,
                  r = e.contents.replace(/^\uFEFF/, "");
                c.currentDirectory = h.getPath(i), c.rewriteUrls && (c.rootpath = h.join(a.context.rootpath || "", h.pathDiff(c.currentDirectory, c.entryPath)), !h.isPathAbsolute(c.rootpath) && h.alwaysMakePathsAbsolute() && (c.rootpath = h.join(c.entryPath, c.rootpath))), c.filename = i; var o = new z.Parse(a.context);
                o.processImports = !1, a.contents[i] = r, (n.reference || s.reference) && (c.reference = !0), s.isPlugin ? (t = l.evalPlugin(r, o, a, s.pluginArgs, c)) instanceof O ? u(t, null, i) : u(null, t, i) : s.inline ? u(null, r, i) : !a.files[i] || a.files[i].options.multiple || s.multiple ? new Te(o, a, c).parse(r, (function(e, t) { u(e, t, i) })) : u(null, a.files[i].root, i) },
              d = _(this.context);
            i && (d.ext = s.isPlugin ? ".js" : ".less"), s.isPlugin ? (d.mime = "application/javascript", d.syncImport ? f = l.loadPluginSync(t, n.currentDirectory, d, e, h) : p = l.loadPlugin(t, n.currentDirectory, d, e, h)) : d.syncImport ? f = h.loadFileSync(t, n.currentDirectory, d, e) : p = h.loadFile(t, n.currentDirectory, d, e, (function(e, t) { e ? u(e) : v(t) })), f ? f.filename ? v(f) : u(f) : p && p.then(v, u) } else u({ message: "Could not find a file-manager for " + t }) }, t }() }(e); var u, c = function(e, t, i) { var n = function(e, i, r) { if ("function" == typeof i ? (r = i, i = M(this.options, {})) : i = M(this.options, i || {}), !r) { var s = this; return new Promise((function(t, r) { n.call(s, e, i, (function(e, i) { e ? r(e) : t(i) })) })) } this.parse(e, i, (function(e, i, n, s) { if (e) return r(e); var o; try { o = new t(i, n).toCSS(s) } catch (e) { return r(e) } r(null, o) })) }; return n }(0, o),
      h = function(e, t, i) { var n = function(e, t, r) { if ("function" == typeof t ? (r = t, t = M(this.options, {})) : t = M(this.options, t || {}), !r) { var s = this; return new Promise((function(i, r) { n.call(s, e, t, (function(e, t) { e ? r(e) : i(t) })) })) } var o, a = void 0,
            l = new yt(this, !t.reUsePluginManager); if (t.pluginManager = l, o = new z.Parse(t), t.rootFileInfo) a = t.rootFileInfo;
          else { var u = t.filename || "input",
              c = u.replace(/[^\/\\]*$/, "");
            (a = { filename: u, rewriteUrls: o.rewriteUrls, rootpath: o.rootpath || "", currentDirectory: c, entryPath: c, rootFilename: u }).rootpath && "/" !== a.rootpath.slice(-1) && (a.rootpath += "/") } var h = new i(this, o, a);
          this.importManager = h, t.plugins && t.plugins.forEach((function(e) { var t, i; if (e.fileContent) { if (i = e.fileContent.replace(/^\uFEFF/, ""), (t = l.Loader.evalPlugin(i, o, h, e.options, e.filename)) instanceof O) return r(t) } else l.addPlugin(e) })), new Te(o, h, a).parse(e, (function(e, i) { if (e) return r(e);
            r(null, i, h, t) }), t) }; return n }(0, 0, a),
      f = xt("v4.1.3"),
      p = { version: [f.major, f.minor, f.patch], data: l, tree: _e, Environment: s, AbstractFileManager: Ae, AbstractPluginLoader: Me, environment: e, visitors: Ue, Parser: Te, functions: vt(e), contexts: z, SourceMapOutput: i, SourceMapBuilder: n, ParseTree: o, ImportManager: a, render: c, parse: h, LessError: O, transformTree: dt, utils: P, PluginManager: yt, logger: r },
      v = function(e) { return function() { var t = Object.create(e.prototype); return e.apply(t, Array.prototype.slice.call(arguments, 0)), t } },
      d = Object.create(p); for (var m in p.tree)
      if ("function" == typeof(u = p.tree[m])) d[m.toLowerCase()] = v(u);
      else
        for (var g in d[m] = Object.create(null), u) d[m][g.toLowerCase()] = v(u[g]); return p.parse = p.parse.bind(d), p.render = p.render.bind(d), d } var It = {},
    Ct = function() {};
  Ct.prototype = Object.assign(new Ae, { alwaysMakePathsAbsolute: function() { return !0 }, join: function(e, t) { return e ? this.extractUrlParts(t, e).path : t }, doXHR: function(e, t, i, n) { var r = new XMLHttpRequest,
        s = !bt.isFileProtocol || bt.fileAsync;

      function o(t, i, n) { t.status >= 200 && t.status < 300 ? i(t.responseText, t.getResponseHeader("Last-Modified")) : "function" == typeof n && n(t.status, e) } "function" == typeof r.overrideMimeType && r.overrideMimeType("text/css"), wt.debug("XHR: Getting '" + e + "'"), r.open("GET", e, s), r.setRequestHeader("Accept", t || "text/x-less, text/css; q=0.9, */*; q=0.5"), r.send(null), bt.isFileProtocol && !bt.fileAsync ? 0 === r.status || r.status >= 200 && r.status < 300 ? i(r.responseText) : n(r.status, e) : s ? r.onreadystatechange = function() { 4 == r.readyState && o(r, i, n) } : o(r, i, n) }, supports: function() { return !0 }, clearFileCache: function() { It = {} }, loadFile: function(e, t, i, n) { t && !this.isPathAbsolute(e) && (e = t + e), e = i.ext ? this.tryAppendExtension(e, i.ext) : e, i = i || {}; var r = this.extractUrlParts(e, window.location.href).url,
        s = this; return new Promise((function(e, t) { if (i.useFileCache && It[r]) try { var n = It[r]; return e({ contents: n, filename: r, webInfo: { lastModified: new Date } }) } catch (e) { return t({ filename: r, message: "Error loading file " + r + " error was " + e.message }) } s.doXHR(r, i.mime, (function(t, i) { It[r] = t, e({ contents: t, filename: r, webInfo: { lastModified: i } }) }), (function(e, i) { t({ type: "File", message: "'" + i + "' wasn't found (" + e + ")", href: r }) })) })) } }); var kt = function(e, t) { return bt = e, wt = t, Ct },
    _t = function(e) { this.less = e };
  _t.prototype = Object.assign(new Me, { loadPlugin: function(e, t, i, n, r) { return new Promise((function(s, o) { r.loadFile(e, t, i, n).then(s).catch(o) })) } }); var At = function(t, n, r) { return { add: function(s, o) { r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting ? function(e, t) { var i = e.filename || t,
              s = [],
              o = (e.type || "Syntax") + "Error: " + (e.message || "There is an error in your .less file") + " in " + i,
              a = function(e, t, i) { void 0 !== e.extract[t] && s.push("{line} {content}".replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, i).replace(/\{content\}/, e.extract[t])) };
            e.line && (a(e, 0, ""), a(e, 1, "line"), a(e, 2, ""), o += " on line " + e.line + ", column " + (e.column + 1) + ":\n" + s.join("\n")), e.stack && (e.extract || r.logLevel >= 4) && (o += "\nStack Trace\n" + e.stack), n.logger.error(o) }(s, o) : "function" == typeof r.errorReporting && r.errorReporting("add", s, o) : function(n, s) { var o, a, l = "less-error-message:" + e(s || ""),
              u = t.document.createElement("div"),
              c = [],
              h = n.filename || s,
              f = h.match(/([^\/]+(\?.*)?)$/)[1];
            u.id = l, u.className = "less-error-message", a = "<h3>" + (n.type || "Syntax") + "Error: " + (n.message || "There is an error in your .less file") + '</h3><p>in <a href="' + h + '">' + f + "</a> "; var p = function(e, t, i) { void 0 !== e.extract[t] && c.push('<li><label>{line}</label><pre class="{class}">{content}</pre></li>'.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, i).replace(/\{content\}/, e.extract[t])) };
            n.line && (p(n, 0, ""), p(n, 1, "line"), p(n, 2, ""), a += "on line " + n.line + ", column " + (n.column + 1) + ":</p><ul>" + c.join("") + "</ul>"), n.stack && (n.extract || r.logLevel >= 4) && (a += "<br/>Stack Trace</br />" + n.stack.split("\n").slice(1).join("<br/>")), u.innerHTML = a, i(t.document, [".less-error-message ul, .less-error-message li {", "list-style-type: none;", "margin-right: 15px;", "padding: 4px 0;", "margin: 0;", "}", ".less-error-message label {", "font-size: 12px;", "margin-right: 15px;", "padding: 4px 0;", "color: #cc7777;", "}", ".less-error-message pre {", "color: #dd6666;", "padding: 4px 0;", "margin: 0;", "display: inline-block;", "}", ".less-error-message pre.line {", "color: #ff0000;", "}", ".less-error-message h3 {", "font-size: 20px;", "font-weight: bold;", "padding: 15px 0 5px 0;", "margin: 0;", "}", ".less-error-message a {", "color: #10a", "}", ".less-error-message .error {", "color: red;", "font-weight: bold;", "padding-bottom: 2px;", "border-bottom: 1px dashed red;", "}"].join("\n"), { title: "error-message" }), u.style.cssText = ["font-family: Arial, sans-serif", "border: 1px solid #e00", "background-color: #eee", "border-radius: 5px", "-webkit-border-radius: 5px", "-moz-border-radius: 5px", "color: #e00", "padding: 15px", "margin-bottom: 15px"].join(";"), "development" === r.env && (o = setInterval((function() { var e = t.document,
                i = e.body;
              i && (e.getElementById(l) ? i.replaceChild(u, e.getElementById(l)) : i.insertBefore(u, i.firstChild), clearInterval(o)) }), 10)) }(s, o) }, remove: function(i) { r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting || "function" == typeof r.errorReporting && r.errorReporting("remove", i) : function(i) { var n = t.document.getElementById("less-error-message:" + e(i));
            n && n.parentNode.removeChild(n) }(i) } } },
    Mt = { javascriptEnabled: !1, depends: !1, compress: !1, lint: !1, paths: [], color: !0, strictImports: !1, insecure: !1, rootpath: "", rewriteUrls: !1, math: 1, strictUnits: !1, globalVars: null, modifyVars: null, urlArgs: "" }; if (window.less)
    for (var Et in window.less) window.less.hasOwnProperty(Et) && (Mt[Et] = window.less[Et]);! function(e, i) { t(i, n(e)), void 0 === i.isFileProtocol && (i.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(e.location.protocol)), i.async = i.async || !1, i.fileAsync = i.fileAsync || !1, i.poll = i.poll || (i.isFileProtocol ? 1e3 : 1500), i.env = i.env || ("127.0.0.1" == e.location.hostname || "0.0.0.0" == e.location.hostname || "localhost" == e.location.hostname || e.location.port && e.location.port.length > 0 || i.isFileProtocol ? "development" : "production"); var r = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(e.location.hash);
    r && (i.dumpLineNumbers = r[1]), void 0 === i.useFileCache && (i.useFileCache = !0), void 0 === i.onReady && (i.onReady = !0), i.relativeUrls && (i.rewriteUrls = "all") }(window, Mt), Mt.plugins = Mt.plugins || [], window.LESS_PLUGINS && (Mt.plugins = Mt.plugins.concat(window.LESS_PLUGINS)); var Pt, Rt, Ot, Vt = function(e, n) { var r = e.document,
      s = St();
    s.options = n; var o = s.environment,
      a = kt(n, s.logger),
      l = new a;
    o.addFileManager(l), s.FileManager = a, s.PluginLoader = _t,
      function(e, t) { t.logLevel = void 0 !== t.logLevel ? t.logLevel : "development" === t.env ? 3 : 1, t.loggers || (t.loggers = [{ debug: function(e) { t.logLevel >= 4 /*&& console.log(e)*/ }, info: function(e) { t.logLevel >= 3 /*&& console.log(e)*/ }, warn: function(e) { t.logLevel >= 2 && console.warn(e) }, error: function(e) { t.logLevel >= 1 && console.error(e) } }]); for (var i = 0; i < t.loggers.length; i++) e.logger.addListener(t.loggers[i]) }(s, n); var u = At(e, s, n),
      c = s.cache = n.cache || function(e, t, i) { var n = null; if ("development" !== t.env) try { n = void 0 === e.localStorage ? null : e.localStorage } catch (e) {}
        return { setCSS: function(e, t, r, s) { if (n) { i.info("saving " + e + " to cache."); try { n.setItem(e, s), n.setItem(e + ":timestamp", t), r && n.setItem(e + ":vars", JSON.stringify(r)) } catch (t) { i.error('failed to save "' + e + '" to local storage for caching.') } } }, getCSS: function(e, t, i) { var r = n && n.getItem(e),
              s = n && n.getItem(e + ":timestamp"),
              o = n && n.getItem(e + ":vars"); if (i = i || {}, o = o || "{}", s && t.lastModified && new Date(t.lastModified).valueOf() === new Date(s).valueOf() && JSON.stringify(i) === o) return r } } }(e, n, s.logger);! function() {
      function e() { throw { type: "Runtime", message: "Image size functions are not supported in browser version of less" } } var t = { "image-size": function(t) { return e(), -1 }, "image-width": function(t) { return e(), -1 }, "image-height": function(t) { return e(), -1 } };
      Z.addMultiple(t) }(s.environment), n.functions && s.functions.functionRegistry.addMultiple(n.functions); var h = /^text\/(x-)?less$/;

    function f(e) { var t = {}; for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]); return t }

    function p(e, t) { var i = Array.prototype.slice.call(arguments, 2); return function() { var n = i.concat(Array.prototype.slice.call(arguments, 0)); return e.apply(t, n) } }

    function v(e) { for (var t, i = r.getElementsByTagName("style"), o = 0; o < i.length; o++)
        if ((t = i[o]).type.match(h)) { var a = f(n);
          a.modifyVars = e; var l = t.innerHTML || "";
          a.filename = r.location.href.replace(/#.*$/, ""), s.render(l, a, p((function(e, t, i) { t ? u.add(t, "inline") : (e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = i.css : e.innerHTML = i.css) }), null, t)) } }

    function d(e, i, r, a, h) { var p = f(n);
      t(p, e), p.mime = e.type, h && (p.modifyVars = h), l.loadFile(e.href, null, p, o).then((function(t) {! function(t) { var n = t.contents,
            o = t.filename,
            h = t.webInfo,
            f = { currentDirectory: l.getPath(o), filename: o, rootFilename: o, rewriteUrls: p.rewriteUrls }; if (f.entryPath = f.currentDirectory, f.rootpath = p.rootpath || f.currentDirectory, h) { h.remaining = a; var v = c.getCSS(o, h, p.modifyVars); if (!r && v) return h.local = !0, void i(null, v, n, e, h, o) } u.remove(o), p.rootFileInfo = f, s.render(n, p, (function(t, r) { t ? (t.href = o, i(t)) : (c.setCSS(e.href, h.lastModified, p.modifyVars, r.css), i(null, r.css, n, e, h, o)) })) }(t) })).catch((function(e) { /*console.log(e), */i(e) })) }

    function m(e, t, i) { for (var n = 0; n < s.sheets.length; n++) d(s.sheets[n], e, t, s.sheets.length - (n + 1), i) } return s.watch = function() { return s.watchMode || (s.env = "development", "development" === s.env && (s.watchTimer = setInterval((function() { s.watchMode && (l.clearFileCache(), m((function(t, n, r, s, o) { t ? u.add(t, t.href || s.href) : n && i(e.document, n, s) }))) }), n.poll))), this.watchMode = !0, !0 }, s.unwatch = function() { return clearInterval(s.watchTimer), this.watchMode = !1, !1 }, s.registerStylesheetsImmediately = function() { var e = r.getElementsByTagName("link");
      s.sheets = []; for (var t = 0; t < e.length; t++)("stylesheet/less" === e[t].rel || e[t].rel.match(/stylesheet/) && e[t].type.match(h)) && s.sheets.push(e[t]) }, s.registerStylesheets = function() { return new Promise((function(e, t) { s.registerStylesheetsImmediately(), e() })) }, s.modifyVars = function(e) { return s.refresh(!0, e, !1) }, s.refresh = function(t, n, r) { return (t || r) && !1 !== r && l.clearFileCache(), new Promise((function(r, o) { var a, l, c, h;
        a = l = new Date, 0 === (h = s.sheets.length) ? (l = new Date, c = l - a, s.logger.info("Less has finished and no sheets were loaded."), r({ startTime: a, endTime: l, totalMilliseconds: c, sheets: s.sheets.length })) : m((function(t, n, f, p, v) { if (t) return u.add(t, t.href || p.href), void o(t);
          v.local ? s.logger.info("Loading " + p.href + " from cache.") : s.logger.info("Rendered " + p.href + " successfully."), i(e.document, n, p), s.logger.info("CSS for " + p.href + " generated in " + (new Date - l) + "ms"), 0 === --h && (c = new Date - a, s.logger.info("Less has finished. CSS generated in " + c + "ms"), r({ startTime: a, endTime: l, totalMilliseconds: c, sheets: s.sheets.length })), l = new Date }), t, n), v(n) })) }, s.refreshStyles = v, s }(window, Mt);

  function Ft(e) { e.filename && console.warn(e), Mt.async || Rt.removeChild(Ot) } return window.less = Vt, Mt.onReady && (/!watch/.test(window.location.hash) && Vt.watch(), Mt.async || (Pt = "body { display: none !important }", Rt = document.head || document.getElementsByTagName("head")[0], (Ot = document.createElement("style")).type = "text/css", Ot.styleSheet ? Ot.styleSheet.cssText = Pt : Ot.appendChild(document.createTextNode(Pt)), Rt.appendChild(Ot)), Vt.registerStylesheetsImmediately(), Vt.pageLoadFinished = Vt.refresh("development" === Vt.env).then(Ft, Ft)), Vt }));
//# sourceMappingURL=less.min.js.map