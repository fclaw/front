(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod5) => function __require2() {
    return mod5 || (0, cb[__getOwnPropNames(cb)[0]])((mod5 = { exports: {} }).exports, mod5), mod5.exports;
  };
  var __copyProps = (to2, from3, except2, desc) => {
    if (from3 && typeof from3 === "object" || typeof from3 === "function") {
      for (let key of __getOwnPropNames(from3))
        if (!__hasOwnProp.call(to2, key) && key !== except2)
          __defProp(to2, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM = (mod5, isNodeMode, target6) => (target6 = mod5 != null ? __create(__getProtoOf(mod5)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod5 || !mod5.__esModule ? __defProp(target6, "default", { value: mod5, enumerable: true }) : target6,
    mod5
  ));

  // output/Control.Monad.Trans.Class/index.js
  var lift;
  var init_Control_Monad_Trans = __esm({
    "output/Control.Monad.Trans.Class/index.js"() {
      lift = function(dict) {
        return dict.lift;
      };
    }
  });

  // output/Effect/foreign.js
  var pureE, bindE;
  var init_foreign = __esm({
    "output/Effect/foreign.js"() {
      pureE = function(a2) {
        return function() {
          return a2;
        };
      };
      bindE = function(a2) {
        return function(f) {
          return function() {
            return f(a2())();
          };
        };
      };
    }
  });

  // output/Control.Apply/foreign.js
  var arrayApply;
  var init_foreign2 = __esm({
    "output/Control.Apply/foreign.js"() {
      arrayApply = function(fs) {
        return function(xs) {
          var l = fs.length;
          var k = xs.length;
          var result = new Array(l * k);
          var n = 0;
          for (var i2 = 0; i2 < l; i2++) {
            var f = fs[i2];
            for (var j = 0; j < k; j++) {
              result[n++] = f(xs[j]);
            }
          }
          return result;
        };
      };
    }
  });

  // output/Control.Semigroupoid/index.js
  var semigroupoidFn, compose, composeFlipped;
  var init_Control = __esm({
    "output/Control.Semigroupoid/index.js"() {
      semigroupoidFn = {
        compose: function(f) {
          return function(g) {
            return function(x) {
              return f(g(x));
            };
          };
        }
      };
      compose = function(dict) {
        return dict.compose;
      };
      composeFlipped = function(dictSemigroupoid) {
        var compose12 = compose(dictSemigroupoid);
        return function(f) {
          return function(g) {
            return compose12(g)(f);
          };
        };
      };
    }
  });

  // output/Control.Category/index.js
  var identity, categoryFn;
  var init_Control2 = __esm({
    "output/Control.Category/index.js"() {
      init_Control();
      init_Control();
      identity = function(dict) {
        return dict.identity;
      };
      categoryFn = {
        identity: function(x) {
          return x;
        },
        Semigroupoid0: function() {
          return semigroupoidFn;
        }
      };
    }
  });

  // output/Data.Boolean/index.js
  var otherwise;
  var init_Data = __esm({
    "output/Data.Boolean/index.js"() {
      otherwise = true;
    }
  });

  // output/Data.Function/index.js
  var on, flip, $$const, applyFlipped;
  var init_Data2 = __esm({
    "output/Data.Function/index.js"() {
      init_Control2();
      init_Data();
      init_Control2();
      on = function(f) {
        return function(g) {
          return function(x) {
            return function(y) {
              return f(g(x))(g(y));
            };
          };
        };
      };
      flip = function(f) {
        return function(b2) {
          return function(a2) {
            return f(a2)(b2);
          };
        };
      };
      $$const = function(a2) {
        return function(v) {
          return a2;
        };
      };
      applyFlipped = function(x) {
        return function(f) {
          return f(x);
        };
      };
    }
  });

  // output/Data.Functor/foreign.js
  var arrayMap;
  var init_foreign3 = __esm({
    "output/Data.Functor/foreign.js"() {
      arrayMap = function(f) {
        return function(arr) {
          var l = arr.length;
          var result = new Array(l);
          for (var i2 = 0; i2 < l; i2++) {
            result[i2] = f(arr[i2]);
          }
          return result;
        };
      };
    }
  });

  // output/Data.Unit/foreign.js
  var unit;
  var init_foreign4 = __esm({
    "output/Data.Unit/foreign.js"() {
      unit = void 0;
    }
  });

  // output/Data.Unit/index.js
  var init_Data3 = __esm({
    "output/Data.Unit/index.js"() {
      init_foreign4();
      init_foreign4();
    }
  });

  // output/Type.Proxy/index.js
  var $$Proxy;
  var init_Type = __esm({
    "output/Type.Proxy/index.js"() {
      $$Proxy = /* @__PURE__ */ function() {
        function $$Proxy2() {
        }
        ;
        $$Proxy2.value = new $$Proxy2();
        return $$Proxy2;
      }();
    }
  });

  // output/Data.Functor/index.js
  var map, mapFlipped, $$void, voidLeft, voidRight, functorFn, functorArray;
  var init_Data4 = __esm({
    "output/Data.Functor/index.js"() {
      init_foreign3();
      init_Control();
      init_Data2();
      init_Data3();
      init_Type();
      map = function(dict) {
        return dict.map;
      };
      mapFlipped = function(dictFunctor) {
        var map115 = map(dictFunctor);
        return function(fa) {
          return function(f) {
            return map115(f)(fa);
          };
        };
      };
      $$void = function(dictFunctor) {
        return map(dictFunctor)($$const(unit));
      };
      voidLeft = function(dictFunctor) {
        var map115 = map(dictFunctor);
        return function(f) {
          return function(x) {
            return map115($$const(x))(f);
          };
        };
      };
      voidRight = function(dictFunctor) {
        var map115 = map(dictFunctor);
        return function(x) {
          return map115($$const(x));
        };
      };
      functorFn = {
        map: /* @__PURE__ */ compose(semigroupoidFn)
      };
      functorArray = {
        map: arrayMap
      };
    }
  });

  // output/Control.Apply/index.js
  var identity2, applyFn, applyArray, apply, applyFirst, applySecond;
  var init_Control3 = __esm({
    "output/Control.Apply/index.js"() {
      init_foreign2();
      init_Control2();
      init_Data2();
      init_Data4();
      init_Type();
      init_Data4();
      identity2 = /* @__PURE__ */ identity(categoryFn);
      applyFn = {
        apply: function(f) {
          return function(g) {
            return function(x) {
              return f(x)(g(x));
            };
          };
        },
        Functor0: function() {
          return functorFn;
        }
      };
      applyArray = {
        apply: arrayApply,
        Functor0: function() {
          return functorArray;
        }
      };
      apply = function(dict) {
        return dict.apply;
      };
      applyFirst = function(dictApply) {
        var apply12 = apply(dictApply);
        var map45 = map(dictApply.Functor0());
        return function(a2) {
          return function(b2) {
            return apply12(map45($$const)(a2))(b2);
          };
        };
      };
      applySecond = function(dictApply) {
        var apply12 = apply(dictApply);
        var map45 = map(dictApply.Functor0());
        return function(a2) {
          return function(b2) {
            return apply12(map45($$const(identity2))(a2))(b2);
          };
        };
      };
    }
  });

  // output/Control.Applicative/index.js
  var pure, unless, when, liftA1;
  var init_Control4 = __esm({
    "output/Control.Applicative/index.js"() {
      init_Control3();
      init_Data4();
      init_Data3();
      init_Type();
      init_Control3();
      init_Data4();
      pure = function(dict) {
        return dict.pure;
      };
      unless = function(dictApplicative) {
        var pure113 = pure(dictApplicative);
        return function(v) {
          return function(v1) {
            if (!v) {
              return v1;
            }
            ;
            if (v) {
              return pure113(unit);
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
          };
        };
      };
      when = function(dictApplicative) {
        var pure113 = pure(dictApplicative);
        return function(v) {
          return function(v1) {
            if (v) {
              return v1;
            }
            ;
            if (!v) {
              return pure113(unit);
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
          };
        };
      };
      liftA1 = function(dictApplicative) {
        var apply6 = apply(dictApplicative.Apply0());
        var pure113 = pure(dictApplicative);
        return function(f) {
          return function(a2) {
            return apply6(pure113(f))(a2);
          };
        };
      };
    }
  });

  // output/Control.Bind/foreign.js
  var arrayBind;
  var init_foreign5 = __esm({
    "output/Control.Bind/foreign.js"() {
      arrayBind = function(arr) {
        return function(f) {
          var result = [];
          for (var i2 = 0, l = arr.length; i2 < l; i2++) {
            Array.prototype.push.apply(result, f(arr[i2]));
          }
          return result;
        };
      };
    }
  });

  // output/Control.Bind/index.js
  var identity3, discard, bindArray, bind, bindFlipped, composeKleisliFlipped, composeKleisli, discardUnit, join;
  var init_Control5 = __esm({
    "output/Control.Bind/index.js"() {
      init_foreign5();
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data2();
      init_Data4();
      init_Type();
      init_Control4();
      init_Control3();
      init_Data4();
      identity3 = /* @__PURE__ */ identity(categoryFn);
      discard = function(dict) {
        return dict.discard;
      };
      bindArray = {
        bind: arrayBind,
        Apply0: function() {
          return applyArray;
        }
      };
      bind = function(dict) {
        return dict.bind;
      };
      bindFlipped = function(dictBind) {
        return flip(bind(dictBind));
      };
      composeKleisliFlipped = function(dictBind) {
        var bindFlipped13 = bindFlipped(dictBind);
        return function(f) {
          return function(g) {
            return function(a2) {
              return bindFlipped13(f)(g(a2));
            };
          };
        };
      };
      composeKleisli = function(dictBind) {
        var bind111 = bind(dictBind);
        return function(f) {
          return function(g) {
            return function(a2) {
              return bind111(f(a2))(g);
            };
          };
        };
      };
      discardUnit = {
        discard: function(dictBind) {
          return bind(dictBind);
        }
      };
      join = function(dictBind) {
        var bind111 = bind(dictBind);
        return function(m) {
          return bind111(m)(identity3);
        };
      };
    }
  });

  // output/Control.Monad/index.js
  var unlessM, ap;
  var init_Control6 = __esm({
    "output/Control.Monad/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data4();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data4();
      unlessM = function(dictMonad) {
        var bind21 = bind(dictMonad.Bind1());
        var unless4 = unless(dictMonad.Applicative0());
        return function(mb) {
          return function(m) {
            return bind21(mb)(function(b2) {
              return unless4(b2)(m);
            });
          };
        };
      };
      ap = function(dictMonad) {
        var bind21 = bind(dictMonad.Bind1());
        var pure25 = pure(dictMonad.Applicative0());
        return function(f) {
          return function(a2) {
            return bind21(f)(function(f$prime) {
              return bind21(a2)(function(a$prime) {
                return pure25(f$prime(a$prime));
              });
            });
          };
        };
      };
    }
  });

  // output/Data.EuclideanRing/foreign.js
  var intDegree, intDiv, intMod;
  var init_foreign6 = __esm({
    "output/Data.EuclideanRing/foreign.js"() {
      intDegree = function(x) {
        return Math.min(Math.abs(x), 2147483647);
      };
      intDiv = function(x) {
        return function(y) {
          if (y === 0)
            return 0;
          return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
        };
      };
      intMod = function(x) {
        return function(y) {
          if (y === 0)
            return 0;
          var yy = Math.abs(y);
          return (x % yy + yy) % yy;
        };
      };
    }
  });

  // output/Data.Ring/foreign.js
  var intSub;
  var init_foreign7 = __esm({
    "output/Data.Ring/foreign.js"() {
      intSub = function(x) {
        return function(y) {
          return x - y | 0;
        };
      };
    }
  });

  // output/Data.Semiring/foreign.js
  var intAdd, intMul;
  var init_foreign8 = __esm({
    "output/Data.Semiring/foreign.js"() {
      intAdd = function(x) {
        return function(y) {
          return x + y | 0;
        };
      };
      intMul = function(x) {
        return function(y) {
          return x * y | 0;
        };
      };
    }
  });

  // output/Data.Symbol/foreign.js
  var init_foreign9 = __esm({
    "output/Data.Symbol/foreign.js"() {
    }
  });

  // output/Data.Symbol/index.js
  var reflectSymbol;
  var init_Data5 = __esm({
    "output/Data.Symbol/index.js"() {
      init_foreign9();
      init_Type();
      reflectSymbol = function(dict) {
        return dict.reflectSymbol;
      };
    }
  });

  // output/Record.Unsafe/foreign.js
  var unsafeHas, unsafeGet, unsafeSet, unsafeDelete;
  var init_foreign10 = __esm({
    "output/Record.Unsafe/foreign.js"() {
      unsafeHas = function(label5) {
        return function(rec) {
          return {}.hasOwnProperty.call(rec, label5);
        };
      };
      unsafeGet = function(label5) {
        return function(rec) {
          return rec[label5];
        };
      };
      unsafeSet = function(label5) {
        return function(value17) {
          return function(rec) {
            var copy2 = {};
            for (var key in rec) {
              if ({}.hasOwnProperty.call(rec, key)) {
                copy2[key] = rec[key];
              }
            }
            copy2[label5] = value17;
            return copy2;
          };
        };
      };
      unsafeDelete = function(label5) {
        return function(rec) {
          var copy2 = {};
          for (var key in rec) {
            if (key !== label5 && {}.hasOwnProperty.call(rec, key)) {
              copy2[key] = rec[key];
            }
          }
          return copy2;
        };
      };
    }
  });

  // output/Record.Unsafe/index.js
  var init_Record = __esm({
    "output/Record.Unsafe/index.js"() {
      init_foreign10();
      init_foreign10();
    }
  });

  // output/Data.Semiring/index.js
  var zero, semiringInt;
  var init_Data6 = __esm({
    "output/Data.Semiring/index.js"() {
      init_foreign8();
      init_Data5();
      init_Data3();
      init_Record();
      init_Type();
      zero = function(dict) {
        return dict.zero;
      };
      semiringInt = {
        add: intAdd,
        zero: 0,
        mul: intMul,
        one: 1
      };
    }
  });

  // output/Data.Ring/index.js
  var sub, ringInt, negate;
  var init_Data7 = __esm({
    "output/Data.Ring/index.js"() {
      init_foreign7();
      init_Data6();
      init_Data5();
      init_Data3();
      init_Record();
      init_Type();
      init_Data6();
      sub = function(dict) {
        return dict.sub;
      };
      ringInt = {
        sub: intSub,
        Semiring0: function() {
          return semiringInt;
        }
      };
      negate = function(dictRing) {
        var sub1 = sub(dictRing);
        var zero2 = zero(dictRing.Semiring0());
        return function(a2) {
          return sub1(zero2)(a2);
        };
      };
    }
  });

  // output/Data.CommutativeRing/index.js
  var commutativeRingInt;
  var init_Data8 = __esm({
    "output/Data.CommutativeRing/index.js"() {
      init_Data7();
      init_Data6();
      init_Data6();
      commutativeRingInt = {
        Ring0: function() {
          return ringInt;
        }
      };
    }
  });

  // output/Data.Eq/foreign.js
  var refEq, eqBooleanImpl, eqIntImpl, eqCharImpl, eqStringImpl;
  var init_foreign11 = __esm({
    "output/Data.Eq/foreign.js"() {
      refEq = function(r1) {
        return function(r2) {
          return r1 === r2;
        };
      };
      eqBooleanImpl = refEq;
      eqIntImpl = refEq;
      eqCharImpl = refEq;
      eqStringImpl = refEq;
    }
  });

  // output/Data.Eq/index.js
  var eqUnit, eqString, eqRowNil, eqRecord, eqRec, eqInt, eqChar, eqBoolean, eq, eq2, eqRowCons, notEq;
  var init_Data9 = __esm({
    "output/Data.Eq/index.js"() {
      init_foreign11();
      init_Data5();
      init_Record();
      init_Type();
      eqUnit = {
        eq: function(v) {
          return function(v1) {
            return true;
          };
        }
      };
      eqString = {
        eq: eqStringImpl
      };
      eqRowNil = {
        eqRecord: function(v) {
          return function(v1) {
            return function(v2) {
              return true;
            };
          };
        }
      };
      eqRecord = function(dict) {
        return dict.eqRecord;
      };
      eqRec = function() {
        return function(dictEqRecord) {
          return {
            eq: eqRecord(dictEqRecord)($$Proxy.value)
          };
        };
      };
      eqInt = {
        eq: eqIntImpl
      };
      eqChar = {
        eq: eqCharImpl
      };
      eqBoolean = {
        eq: eqBooleanImpl
      };
      eq = function(dict) {
        return dict.eq;
      };
      eq2 = /* @__PURE__ */ eq(eqBoolean);
      eqRowCons = function(dictEqRecord) {
        var eqRecord1 = eqRecord(dictEqRecord);
        return function() {
          return function(dictIsSymbol) {
            var reflectSymbol2 = reflectSymbol(dictIsSymbol);
            return function(dictEq) {
              var eq32 = eq(dictEq);
              return {
                eqRecord: function(v) {
                  return function(ra) {
                    return function(rb) {
                      var tail3 = eqRecord1($$Proxy.value)(ra)(rb);
                      var key = reflectSymbol2($$Proxy.value);
                      var get7 = unsafeGet(key);
                      return eq32(get7(ra))(get7(rb)) && tail3;
                    };
                  };
                }
              };
            };
          };
        };
      };
      notEq = function(dictEq) {
        var eq32 = eq(dictEq);
        return function(x) {
          return function(y) {
            return eq2(eq32(x)(y))(false);
          };
        };
      };
    }
  });

  // output/Data.EuclideanRing/index.js
  var mod, euclideanRingInt, div;
  var init_Data10 = __esm({
    "output/Data.EuclideanRing/index.js"() {
      init_foreign6();
      init_Data8();
      init_Data9();
      init_Data7();
      init_Data6();
      init_Data7();
      init_Data6();
      mod = function(dict) {
        return dict.mod;
      };
      euclideanRingInt = {
        degree: intDegree,
        div: intDiv,
        mod: intMod,
        CommutativeRing0: function() {
          return commutativeRingInt;
        }
      };
      div = function(dict) {
        return dict.div;
      };
    }
  });

  // output/Data.Ordering/index.js
  var LT, GT, EQ;
  var init_Data11 = __esm({
    "output/Data.Ordering/index.js"() {
      LT = /* @__PURE__ */ function() {
        function LT2() {
        }
        ;
        LT2.value = new LT2();
        return LT2;
      }();
      GT = /* @__PURE__ */ function() {
        function GT2() {
        }
        ;
        GT2.value = new GT2();
        return GT2;
      }();
      EQ = /* @__PURE__ */ function() {
        function EQ2() {
        }
        ;
        EQ2.value = new EQ2();
        return EQ2;
      }();
    }
  });

  // output/Data.Semigroup/foreign.js
  var concatString, concatArray;
  var init_foreign12 = __esm({
    "output/Data.Semigroup/foreign.js"() {
      concatString = function(s1) {
        return function(s2) {
          return s1 + s2;
        };
      };
      concatArray = function(xs) {
        return function(ys) {
          if (xs.length === 0)
            return ys;
          if (ys.length === 0)
            return xs;
          return xs.concat(ys);
        };
      };
    }
  });

  // output/Data.Void/index.js
  var init_Data12 = __esm({
    "output/Data.Void/index.js"() {
    }
  });

  // output/Data.Semigroup/index.js
  var semigroupString, semigroupRecordNil, semigroupArray, appendRecord, semigroupRecord, append, semigroupRecordCons;
  var init_Data13 = __esm({
    "output/Data.Semigroup/index.js"() {
      init_foreign12();
      init_Data5();
      init_Data3();
      init_Data12();
      init_Record();
      init_Type();
      semigroupString = {
        append: concatString
      };
      semigroupRecordNil = {
        appendRecord: function(v) {
          return function(v1) {
            return function(v2) {
              return {};
            };
          };
        }
      };
      semigroupArray = {
        append: concatArray
      };
      appendRecord = function(dict) {
        return dict.appendRecord;
      };
      semigroupRecord = function() {
        return function(dictSemigroupRecord) {
          return {
            append: appendRecord(dictSemigroupRecord)($$Proxy.value)
          };
        };
      };
      append = function(dict) {
        return dict.append;
      };
      semigroupRecordCons = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function() {
          return function(dictSemigroupRecord) {
            var appendRecord1 = appendRecord(dictSemigroupRecord);
            return function(dictSemigroup) {
              var append12 = append(dictSemigroup);
              return {
                appendRecord: function(v) {
                  return function(ra) {
                    return function(rb) {
                      var tail3 = appendRecord1($$Proxy.value)(ra)(rb);
                      var key = reflectSymbol2($$Proxy.value);
                      var insert10 = unsafeSet(key);
                      var get7 = unsafeGet(key);
                      return insert10(append12(get7(ra))(get7(rb)))(tail3);
                    };
                  };
                }
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Monoid/index.js
  var semigroupRecord2, monoidString, monoidRecordNil, memptyRecord, monoidRecord, mempty, monoidRecordCons;
  var init_Data14 = __esm({
    "output/Data.Monoid/index.js"() {
      init_Data();
      init_Data10();
      init_Data11();
      init_Data13();
      init_Data5();
      init_Data3();
      init_Record();
      init_Type();
      semigroupRecord2 = /* @__PURE__ */ semigroupRecord();
      monoidString = {
        mempty: "",
        Semigroup0: function() {
          return semigroupString;
        }
      };
      monoidRecordNil = {
        memptyRecord: function(v) {
          return {};
        },
        SemigroupRecord0: function() {
          return semigroupRecordNil;
        }
      };
      memptyRecord = function(dict) {
        return dict.memptyRecord;
      };
      monoidRecord = function() {
        return function(dictMonoidRecord) {
          var semigroupRecord1 = semigroupRecord2(dictMonoidRecord.SemigroupRecord0());
          return {
            mempty: memptyRecord(dictMonoidRecord)($$Proxy.value),
            Semigroup0: function() {
              return semigroupRecord1;
            }
          };
        };
      };
      mempty = function(dict) {
        return dict.mempty;
      };
      monoidRecordCons = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        var semigroupRecordCons2 = semigroupRecordCons(dictIsSymbol)();
        return function(dictMonoid) {
          var mempty1 = mempty(dictMonoid);
          var Semigroup0 = dictMonoid.Semigroup0();
          return function() {
            return function(dictMonoidRecord) {
              var memptyRecord1 = memptyRecord(dictMonoidRecord);
              var semigroupRecordCons1 = semigroupRecordCons2(dictMonoidRecord.SemigroupRecord0())(Semigroup0);
              return {
                memptyRecord: function(v) {
                  var tail3 = memptyRecord1($$Proxy.value);
                  var key = reflectSymbol2($$Proxy.value);
                  var insert10 = unsafeSet(key);
                  return insert10(mempty1)(tail3);
                },
                SemigroupRecord0: function() {
                  return semigroupRecordCons1;
                }
              };
            };
          };
        };
      };
    }
  });

  // output/Effect/index.js
  var $runtime_lazy, monadEffect, bindEffect, applicativeEffect, $lazy_functorEffect, $lazy_applyEffect, functorEffect, applyEffect;
  var init_Effect = __esm({
    "output/Effect/index.js"() {
      init_foreign();
      init_Control4();
      init_Control3();
      init_Control6();
      init_Data14();
      init_Data13();
      init_foreign();
      $runtime_lazy = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      monadEffect = {
        Applicative0: function() {
          return applicativeEffect;
        },
        Bind1: function() {
          return bindEffect;
        }
      };
      bindEffect = {
        bind: bindE,
        Apply0: function() {
          return $lazy_applyEffect(0);
        }
      };
      applicativeEffect = {
        pure: pureE,
        Apply0: function() {
          return $lazy_applyEffect(0);
        }
      };
      $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
        return {
          map: liftA1(applicativeEffect)
        };
      });
      $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
        return {
          apply: ap(monadEffect),
          Functor0: function() {
            return $lazy_functorEffect(0);
          }
        };
      });
      functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);
      applyEffect = /* @__PURE__ */ $lazy_applyEffect(23);
    }
  });

  // output/Data.Functor.Invariant/index.js
  var init_Data_Functor = __esm({
    "output/Data.Functor.Invariant/index.js"() {
      init_Data4();
    }
  });

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl, ordIntImpl, ordStringImpl, ordCharImpl;
  var init_foreign13 = __esm({
    "output/Data.Ord/foreign.js"() {
      unsafeCompareImpl = function(lt) {
        return function(eq5) {
          return function(gt) {
            return function(x) {
              return function(y) {
                return x < y ? lt : x === y ? eq5 : gt;
              };
            };
          };
        };
      };
      ordIntImpl = unsafeCompareImpl;
      ordStringImpl = unsafeCompareImpl;
      ordCharImpl = unsafeCompareImpl;
    }
  });

  // output/Data.Ord/index.js
  var ordUnit, ordString, ordInt, ordChar, compare, greaterThanOrEq, abs;
  var init_Data15 = __esm({
    "output/Data.Ord/index.js"() {
      init_foreign13();
      init_Data9();
      init_Data11();
      init_Data7();
      init_Data6();
      init_Data5();
      init_Record();
      init_Type();
      init_Data11();
      ordUnit = {
        compare: function(v) {
          return function(v1) {
            return EQ.value;
          };
        },
        Eq0: function() {
          return eqUnit;
        }
      };
      ordString = /* @__PURE__ */ function() {
        return {
          compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
          Eq0: function() {
            return eqString;
          }
        };
      }();
      ordInt = /* @__PURE__ */ function() {
        return {
          compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
          Eq0: function() {
            return eqInt;
          }
        };
      }();
      ordChar = /* @__PURE__ */ function() {
        return {
          compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
          Eq0: function() {
            return eqChar;
          }
        };
      }();
      compare = function(dict) {
        return dict.compare;
      };
      greaterThanOrEq = function(dictOrd) {
        var compare3 = compare(dictOrd);
        return function(a1) {
          return function(a2) {
            var v = compare3(a1)(a2);
            if (v instanceof LT) {
              return false;
            }
            ;
            return true;
          };
        };
      };
      abs = function(dictOrd) {
        var greaterThanOrEq1 = greaterThanOrEq(dictOrd);
        return function(dictRing) {
          var zero2 = zero(dictRing.Semiring0());
          var negate1 = negate(dictRing);
          return function(x) {
            var $99 = greaterThanOrEq1(x)(zero2);
            if ($99) {
              return x;
            }
            ;
            return negate1(x);
          };
        };
      };
    }
  });

  // output/Data.Show/foreign.js
  var showIntImpl, showCharImpl, showStringImpl, showArrayImpl;
  var init_foreign14 = __esm({
    "output/Data.Show/foreign.js"() {
      showIntImpl = function(n) {
        return n.toString();
      };
      showCharImpl = function(c) {
        var code2 = c.charCodeAt(0);
        if (code2 < 32 || code2 === 127) {
          switch (c) {
            case "\x07":
              return "'\\a'";
            case "\b":
              return "'\\b'";
            case "\f":
              return "'\\f'";
            case "\n":
              return "'\\n'";
            case "\r":
              return "'\\r'";
            case "	":
              return "'\\t'";
            case "\v":
              return "'\\v'";
          }
          return "'\\" + code2.toString(10) + "'";
        }
        return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
      };
      showStringImpl = function(s) {
        var l = s.length;
        return '"' + s.replace(
          /[\0-\x1F\x7F"\\]/g,
          // eslint-disable-line no-control-regex
          function(c, i2) {
            switch (c) {
              case '"':
              case "\\":
                return "\\" + c;
              case "\x07":
                return "\\a";
              case "\b":
                return "\\b";
              case "\f":
                return "\\f";
              case "\n":
                return "\\n";
              case "\r":
                return "\\r";
              case "	":
                return "\\t";
              case "\v":
                return "\\v";
            }
            var k = i2 + 1;
            var empty8 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
            return "\\" + c.charCodeAt(0).toString(10) + empty8;
          }
        ) + '"';
      };
      showArrayImpl = function(f) {
        return function(xs) {
          var ss = [];
          for (var i2 = 0, l = xs.length; i2 < l; i2++) {
            ss[i2] = f(xs[i2]);
          }
          return "[" + ss.join(",") + "]";
        };
      };
    }
  });

  // output/Data.Show/index.js
  var showString, showRecordFields, showRecord, showInt, showChar, show, showArray, showRecordFieldsCons, showRecordFieldsConsNil;
  var init_Data16 = __esm({
    "output/Data.Show/index.js"() {
      init_foreign14();
      init_Data5();
      init_Data12();
      init_Record();
      init_Type();
      showString = {
        show: showStringImpl
      };
      showRecordFields = function(dict) {
        return dict.showRecordFields;
      };
      showRecord = function() {
        return function() {
          return function(dictShowRecordFields) {
            var showRecordFields1 = showRecordFields(dictShowRecordFields);
            return {
              show: function(record) {
                return "{" + (showRecordFields1($$Proxy.value)(record) + "}");
              }
            };
          };
        };
      };
      showInt = {
        show: showIntImpl
      };
      showChar = {
        show: showCharImpl
      };
      show = function(dict) {
        return dict.show;
      };
      showArray = function(dictShow) {
        return {
          show: showArrayImpl(show(dictShow))
        };
      };
      showRecordFieldsCons = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function(dictShowRecordFields) {
          var showRecordFields1 = showRecordFields(dictShowRecordFields);
          return function(dictShow) {
            var show16 = show(dictShow);
            return {
              showRecordFields: function(v) {
                return function(record) {
                  var tail3 = showRecordFields1($$Proxy.value)(record);
                  var key = reflectSymbol2($$Proxy.value);
                  var focus3 = unsafeGet(key)(record);
                  return " " + (key + (": " + (show16(focus3) + ("," + tail3))));
                };
              }
            };
          };
        };
      };
      showRecordFieldsConsNil = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function(dictShow) {
          var show16 = show(dictShow);
          return {
            showRecordFields: function(v) {
              return function(record) {
                var key = reflectSymbol2($$Proxy.value);
                var focus3 = unsafeGet(key)(record);
                return " " + (key + (": " + (show16(focus3) + " ")));
              };
            }
          };
        };
      };
    }
  });

  // output/Data.Const/index.js
  var init_Data17 = __esm({
    "output/Data.Const/index.js"() {
      init_Data9();
      init_Data_Functor();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
    }
  });

  // output/Control.Alt/index.js
  var alt;
  var init_Control7 = __esm({
    "output/Control.Alt/index.js"() {
      init_Data4();
      init_Data13();
      init_Data4();
      alt = function(dict) {
        return dict.alt;
      };
    }
  });

  // output/Data.Bounded/foreign.js
  var topInt, bottomInt, topChar, bottomChar, topNumber, bottomNumber;
  var init_foreign15 = __esm({
    "output/Data.Bounded/foreign.js"() {
      topInt = 2147483647;
      bottomInt = -2147483648;
      topChar = String.fromCharCode(65535);
      bottomChar = String.fromCharCode(0);
      topNumber = Number.POSITIVE_INFINITY;
      bottomNumber = Number.NEGATIVE_INFINITY;
    }
  });

  // output/Data.Bounded/index.js
  var top, boundedInt, boundedChar, bottom;
  var init_Data18 = __esm({
    "output/Data.Bounded/index.js"() {
      init_foreign15();
      init_Data15();
      init_Data11();
      init_Data5();
      init_Data3();
      init_Record();
      init_Type();
      init_Data15();
      top = function(dict) {
        return dict.top;
      };
      boundedInt = {
        top: topInt,
        bottom: bottomInt,
        Ord0: function() {
          return ordInt;
        }
      };
      boundedChar = {
        top: topChar,
        bottom: bottomChar,
        Ord0: function() {
          return ordChar;
        }
      };
      bottom = function(dict) {
        return dict.bottom;
      };
    }
  });

  // output/Data.Generic.Rep/index.js
  var Inl, Inr, NoArguments, Constructor, Argument, to, from;
  var init_Data_Generic = __esm({
    "output/Data.Generic.Rep/index.js"() {
      init_Data16();
      init_Data5();
      init_Type();
      Inl = /* @__PURE__ */ function() {
        function Inl2(value0) {
          this.value0 = value0;
        }
        ;
        Inl2.create = function(value0) {
          return new Inl2(value0);
        };
        return Inl2;
      }();
      Inr = /* @__PURE__ */ function() {
        function Inr2(value0) {
          this.value0 = value0;
        }
        ;
        Inr2.create = function(value0) {
          return new Inr2(value0);
        };
        return Inr2;
      }();
      NoArguments = /* @__PURE__ */ function() {
        function NoArguments2() {
        }
        ;
        NoArguments2.value = new NoArguments2();
        return NoArguments2;
      }();
      Constructor = function(x) {
        return x;
      };
      Argument = function(x) {
        return x;
      };
      to = function(dict) {
        return dict.to;
      };
      from = function(dict) {
        return dict.from;
      };
    }
  });

  // output/Data.Maybe/index.js
  var identity4, Nothing, Just, showMaybe, semigroupMaybe, maybe, isNothing, isJust, functorMaybe, map2, fromMaybe, fromJust, eqMaybe, applyMaybe, bindMaybe, applicativeMaybe, altMaybe;
  var init_Data19 = __esm({
    "output/Data.Maybe/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data18();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data_Functor();
      init_Data_Generic();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data3();
      identity4 = /* @__PURE__ */ identity(categoryFn);
      Nothing = /* @__PURE__ */ function() {
        function Nothing2() {
        }
        ;
        Nothing2.value = new Nothing2();
        return Nothing2;
      }();
      Just = /* @__PURE__ */ function() {
        function Just2(value0) {
          this.value0 = value0;
        }
        ;
        Just2.create = function(value0) {
          return new Just2(value0);
        };
        return Just2;
      }();
      showMaybe = function(dictShow) {
        var show9 = show(dictShow);
        return {
          show: function(v) {
            if (v instanceof Just) {
              return "(Just " + (show9(v.value0) + ")");
            }
            ;
            if (v instanceof Nothing) {
              return "Nothing";
            }
            ;
            throw new Error("Failed pattern match at Data.Maybe (line 223, column 1 - line 225, column 28): " + [v.constructor.name]);
          }
        };
      };
      semigroupMaybe = function(dictSemigroup) {
        var append12 = append(dictSemigroup);
        return {
          append: function(v) {
            return function(v1) {
              if (v instanceof Nothing) {
                return v1;
              }
              ;
              if (v1 instanceof Nothing) {
                return v;
              }
              ;
              if (v instanceof Just && v1 instanceof Just) {
                return new Just(append12(v.value0)(v1.value0));
              }
              ;
              throw new Error("Failed pattern match at Data.Maybe (line 182, column 1 - line 185, column 43): " + [v.constructor.name, v1.constructor.name]);
            };
          }
        };
      };
      maybe = function(v) {
        return function(v1) {
          return function(v2) {
            if (v2 instanceof Nothing) {
              return v;
            }
            ;
            if (v2 instanceof Just) {
              return v1(v2.value0);
            }
            ;
            throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
          };
        };
      };
      isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
      isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
      functorMaybe = {
        map: function(v) {
          return function(v1) {
            if (v1 instanceof Just) {
              return new Just(v(v1.value0));
            }
            ;
            return Nothing.value;
          };
        }
      };
      map2 = /* @__PURE__ */ map(functorMaybe);
      fromMaybe = function(a2) {
        return maybe(a2)(identity4);
      };
      fromJust = function() {
        return function(v) {
          if (v instanceof Just) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
        };
      };
      eqMaybe = function(dictEq) {
        var eq5 = eq(dictEq);
        return {
          eq: function(x) {
            return function(y) {
              if (x instanceof Nothing && y instanceof Nothing) {
                return true;
              }
              ;
              if (x instanceof Just && y instanceof Just) {
                return eq5(x.value0)(y.value0);
              }
              ;
              return false;
            };
          }
        };
      };
      applyMaybe = {
        apply: function(v) {
          return function(v1) {
            if (v instanceof Just) {
              return map2(v.value0)(v1);
            }
            ;
            if (v instanceof Nothing) {
              return Nothing.value;
            }
            ;
            throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
          };
        },
        Functor0: function() {
          return functorMaybe;
        }
      };
      bindMaybe = {
        bind: function(v) {
          return function(v1) {
            if (v instanceof Just) {
              return v1(v.value0);
            }
            ;
            if (v instanceof Nothing) {
              return Nothing.value;
            }
            ;
            throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
          };
        },
        Apply0: function() {
          return applyMaybe;
        }
      };
      applicativeMaybe = /* @__PURE__ */ function() {
        return {
          pure: Just.create,
          Apply0: function() {
            return applyMaybe;
          }
        };
      }();
      altMaybe = {
        alt: function(v) {
          return function(v1) {
            if (v instanceof Nothing) {
              return v1;
            }
            ;
            return v;
          };
        },
        Functor0: function() {
          return functorMaybe;
        }
      };
    }
  });

  // output/Data.Either/index.js
  var Left, Right, note, functorEither, map3, eqEither, either, hush, blush, applyEither, bindEither, applicativeEither;
  var init_Data20 = __esm({
    "output/Data.Either/index.js"() {
      init_Control7();
      init_Control3();
      init_Data18();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data_Functor();
      init_Data_Generic();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data3();
      Left = /* @__PURE__ */ function() {
        function Left2(value0) {
          this.value0 = value0;
        }
        ;
        Left2.create = function(value0) {
          return new Left2(value0);
        };
        return Left2;
      }();
      Right = /* @__PURE__ */ function() {
        function Right2(value0) {
          this.value0 = value0;
        }
        ;
        Right2.create = function(value0) {
          return new Right2(value0);
        };
        return Right2;
      }();
      note = function(a2) {
        return maybe(new Left(a2))(Right.create);
      };
      functorEither = {
        map: function(f) {
          return function(m) {
            if (m instanceof Left) {
              return new Left(m.value0);
            }
            ;
            if (m instanceof Right) {
              return new Right(f(m.value0));
            }
            ;
            throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
          };
        }
      };
      map3 = /* @__PURE__ */ map(functorEither);
      eqEither = function(dictEq) {
        var eq5 = eq(dictEq);
        return function(dictEq1) {
          var eq13 = eq(dictEq1);
          return {
            eq: function(x) {
              return function(y) {
                if (x instanceof Left && y instanceof Left) {
                  return eq5(x.value0)(y.value0);
                }
                ;
                if (x instanceof Right && y instanceof Right) {
                  return eq13(x.value0)(y.value0);
                }
                ;
                return false;
              };
            }
          };
        };
      };
      either = function(v) {
        return function(v1) {
          return function(v2) {
            if (v2 instanceof Left) {
              return v(v2.value0);
            }
            ;
            if (v2 instanceof Right) {
              return v1(v2.value0);
            }
            ;
            throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
          };
        };
      };
      hush = /* @__PURE__ */ function() {
        return either($$const(Nothing.value))(Just.create);
      }();
      blush = /* @__PURE__ */ function() {
        return either(Just.create)($$const(Nothing.value));
      }();
      applyEither = {
        apply: function(v) {
          return function(v1) {
            if (v instanceof Left) {
              return new Left(v.value0);
            }
            ;
            if (v instanceof Right) {
              return map3(v.value0)(v1);
            }
            ;
            throw new Error("Failed pattern match at Data.Either (line 70, column 1 - line 72, column 30): " + [v.constructor.name, v1.constructor.name]);
          };
        },
        Functor0: function() {
          return functorEither;
        }
      };
      bindEither = {
        bind: /* @__PURE__ */ either(function(e) {
          return function(v) {
            return new Left(e);
          };
        })(function(a2) {
          return function(f) {
            return f(a2);
          };
        }),
        Apply0: function() {
          return applyEither;
        }
      };
      applicativeEither = /* @__PURE__ */ function() {
        return {
          pure: Right.create,
          Apply0: function() {
            return applyEither;
          }
        };
      }();
    }
  });

  // output/Data.Foldable/foreign.js
  var foldrArray, foldlArray;
  var init_foreign16 = __esm({
    "output/Data.Foldable/foreign.js"() {
      foldrArray = function(f) {
        return function(init4) {
          return function(xs) {
            var acc = init4;
            var len = xs.length;
            for (var i2 = len - 1; i2 >= 0; i2--) {
              acc = f(xs[i2])(acc);
            }
            return acc;
          };
        };
      };
      foldlArray = function(f) {
        return function(init4) {
          return function(xs) {
            var acc = init4;
            var len = xs.length;
            for (var i2 = 0; i2 < len; i2++) {
              acc = f(acc)(xs[i2]);
            }
            return acc;
          };
        };
      };
    }
  });

  // output/Control.Plus/index.js
  var empty;
  var init_Control8 = __esm({
    "output/Control.Plus/index.js"() {
      init_Control7();
      init_Data4();
      init_Control7();
      init_Data4();
      empty = function(dict) {
        return dict.empty;
      };
    }
  });

  // output/Control.Extend/foreign.js
  var init_foreign17 = __esm({
    "output/Control.Extend/foreign.js"() {
    }
  });

  // output/Control.Extend/index.js
  var init_Control9 = __esm({
    "output/Control.Extend/index.js"() {
      init_foreign17();
      init_Control2();
      init_Data4();
      init_Data13();
      init_Data4();
    }
  });

  // output/Control.Comonad/index.js
  var init_Control10 = __esm({
    "output/Control.Comonad/index.js"() {
      init_Control9();
      init_Data4();
      init_Control9();
      init_Data4();
    }
  });

  // output/Control.Lazy/index.js
  var defer;
  var init_Control11 = __esm({
    "output/Control.Lazy/index.js"() {
      init_Data3();
      defer = function(dict) {
        return dict.defer;
      };
    }
  });

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj, boolDisj, boolNot;
  var init_foreign18 = __esm({
    "output/Data.HeytingAlgebra/foreign.js"() {
      boolConj = function(b1) {
        return function(b2) {
          return b1 && b2;
        };
      };
      boolDisj = function(b1) {
        return function(b2) {
          return b1 || b2;
        };
      };
      boolNot = function(b2) {
        return !b2;
      };
    }
  });

  // output/Data.HeytingAlgebra/index.js
  var tt, not, implies, ff, disj, heytingAlgebraBoolean, conj, heytingAlgebraFunction;
  var init_Data21 = __esm({
    "output/Data.HeytingAlgebra/index.js"() {
      init_foreign18();
      init_Data5();
      init_Data3();
      init_Record();
      init_Type();
      tt = function(dict) {
        return dict.tt;
      };
      not = function(dict) {
        return dict.not;
      };
      implies = function(dict) {
        return dict.implies;
      };
      ff = function(dict) {
        return dict.ff;
      };
      disj = function(dict) {
        return dict.disj;
      };
      heytingAlgebraBoolean = {
        ff: false,
        tt: true,
        implies: function(a2) {
          return function(b2) {
            return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a2))(b2);
          };
        },
        conj: boolConj,
        disj: boolDisj,
        not: boolNot
      };
      conj = function(dict) {
        return dict.conj;
      };
      heytingAlgebraFunction = function(dictHeytingAlgebra) {
        var ff1 = ff(dictHeytingAlgebra);
        var tt1 = tt(dictHeytingAlgebra);
        var implies1 = implies(dictHeytingAlgebra);
        var conj1 = conj(dictHeytingAlgebra);
        var disj1 = disj(dictHeytingAlgebra);
        var not1 = not(dictHeytingAlgebra);
        return {
          ff: function(v) {
            return ff1;
          },
          tt: function(v) {
            return tt1;
          },
          implies: function(f) {
            return function(g) {
              return function(a2) {
                return implies1(f(a2))(g(a2));
              };
            };
          },
          conj: function(f) {
            return function(g) {
              return function(a2) {
                return conj1(f(a2))(g(a2));
              };
            };
          },
          disj: function(f) {
            return function(g) {
              return function(a2) {
                return disj1(f(a2))(g(a2));
              };
            };
          },
          not: function(f) {
            return function(a2) {
              return not1(f(a2));
            };
          }
        };
      };
    }
  });

  // output/Data.Tuple/index.js
  var Tuple, uncurry, snd, functorTuple, fst, eqTuple, ordTuple;
  var init_Data22 = __esm({
    "output/Data.Tuple/index.js"() {
      init_Control11();
      init_Data18();
      init_Data9();
      init_Data_Functor();
      init_Data_Generic();
      init_Data21();
      init_Data14();
      init_Data15();
      init_Data11();
      init_Data7();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data3();
      Tuple = /* @__PURE__ */ function() {
        function Tuple2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Tuple2.create = function(value0) {
          return function(value1) {
            return new Tuple2(value0, value1);
          };
        };
        return Tuple2;
      }();
      uncurry = function(f) {
        return function(v) {
          return f(v.value0)(v.value1);
        };
      };
      snd = function(v) {
        return v.value1;
      };
      functorTuple = {
        map: function(f) {
          return function(m) {
            return new Tuple(m.value0, f(m.value1));
          };
        }
      };
      fst = function(v) {
        return v.value0;
      };
      eqTuple = function(dictEq) {
        var eq5 = eq(dictEq);
        return function(dictEq1) {
          var eq13 = eq(dictEq1);
          return {
            eq: function(x) {
              return function(y) {
                return eq5(x.value0)(y.value0) && eq13(x.value1)(y.value1);
              };
            }
          };
        };
      };
      ordTuple = function(dictOrd) {
        var compare3 = compare(dictOrd);
        var eqTuple1 = eqTuple(dictOrd.Eq0());
        return function(dictOrd1) {
          var compare12 = compare(dictOrd1);
          var eqTuple2 = eqTuple1(dictOrd1.Eq0());
          return {
            compare: function(x) {
              return function(y) {
                var v = compare3(x.value0)(y.value0);
                if (v instanceof LT) {
                  return LT.value;
                }
                ;
                if (v instanceof GT) {
                  return GT.value;
                }
                ;
                return compare12(x.value1)(y.value1);
              };
            },
            Eq0: function() {
              return eqTuple2;
            }
          };
        };
      };
    }
  });

  // output/Data.Bifunctor/index.js
  var identity5, bimap, lmap, bifunctorTuple, bifunctorEither;
  var init_Data23 = __esm({
    "output/Data.Bifunctor/index.js"() {
      init_Control2();
      init_Data20();
      init_Data22();
      identity5 = /* @__PURE__ */ identity(categoryFn);
      bimap = function(dict) {
        return dict.bimap;
      };
      lmap = function(dictBifunctor) {
        var bimap1 = bimap(dictBifunctor);
        return function(f) {
          return bimap1(f)(identity5);
        };
      };
      bifunctorTuple = {
        bimap: function(f) {
          return function(g) {
            return function(v) {
              return new Tuple(f(v.value0), g(v.value1));
            };
          };
        }
      };
      bifunctorEither = {
        bimap: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Left) {
                return new Left(v(v2.value0));
              }
              ;
              if (v2 instanceof Right) {
                return new Right(v1(v2.value0));
              }
              ;
              throw new Error("Failed pattern match at Data.Bifunctor (line 32, column 1 - line 34, column 36): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        }
      };
    }
  });

  // output/Data.Functor.Coproduct/index.js
  var init_Data_Functor2 = __esm({
    "output/Data.Functor.Coproduct/index.js"() {
      init_Control10();
      init_Control9();
      init_Data23();
      init_Data20();
      init_Data9();
      init_Data4();
      init_Data15();
      init_Data11();
      init_Data16();
    }
  });

  // output/Data.Maybe.First/index.js
  var semigroupFirst, monoidFirst;
  var init_Data_Maybe = __esm({
    "output/Data.Maybe.First/index.js"() {
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data16();
      semigroupFirst = {
        append: function(v) {
          return function(v1) {
            if (v instanceof Just) {
              return v;
            }
            ;
            return v1;
          };
        }
      };
      monoidFirst = /* @__PURE__ */ function() {
        return {
          mempty: Nothing.value,
          Semigroup0: function() {
            return semigroupFirst;
          }
        };
      }();
    }
  });

  // output/Data.Monoid.Conj/index.js
  var init_Data_Monoid = __esm({
    "output/Data.Monoid.Conj/index.js"() {
      init_Data9();
      init_Data21();
      init_Data15();
      init_Data16();
    }
  });

  // output/Data.Monoid.Disj/index.js
  var Disj, semigroupDisj, monoidDisj;
  var init_Data_Monoid2 = __esm({
    "output/Data.Monoid.Disj/index.js"() {
      init_Data9();
      init_Data21();
      init_Data15();
      init_Data16();
      Disj = function(x) {
        return x;
      };
      semigroupDisj = function(dictHeytingAlgebra) {
        var disj2 = disj(dictHeytingAlgebra);
        return {
          append: function(v) {
            return function(v1) {
              return disj2(v)(v1);
            };
          }
        };
      };
      monoidDisj = function(dictHeytingAlgebra) {
        var semigroupDisj1 = semigroupDisj(dictHeytingAlgebra);
        return {
          mempty: ff(dictHeytingAlgebra),
          Semigroup0: function() {
            return semigroupDisj1;
          }
        };
      };
    }
  });

  // output/Data.Monoid.Dual/index.js
  var init_Data_Monoid3 = __esm({
    "output/Data.Monoid.Dual/index.js"() {
      init_Data9();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
    }
  });

  // output/Data.Monoid.Endo/index.js
  var init_Data_Monoid4 = __esm({
    "output/Data.Monoid.Endo/index.js"() {
      init_Control2();
      init_Control();
      init_Data16();
    }
  });

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2;
  var init_foreign19 = __esm({
    "output/Unsafe.Coerce/foreign.js"() {
      unsafeCoerce2 = function(x) {
        return x;
      };
    }
  });

  // output/Unsafe.Coerce/index.js
  var init_Unsafe = __esm({
    "output/Unsafe.Coerce/index.js"() {
      init_foreign19();
      init_foreign19();
    }
  });

  // output/Safe.Coerce/index.js
  var coerce;
  var init_Safe = __esm({
    "output/Safe.Coerce/index.js"() {
      init_Unsafe();
      coerce = function() {
        return unsafeCoerce2;
      };
    }
  });

  // output/Data.Newtype/index.js
  var coerce2, wrap, unwrap, over, alaF;
  var init_Data24 = __esm({
    "output/Data.Newtype/index.js"() {
      init_Safe();
      coerce2 = /* @__PURE__ */ coerce();
      wrap = function() {
        return coerce2;
      };
      unwrap = function() {
        return coerce2;
      };
      over = function() {
        return function() {
          return function(v) {
            return coerce2;
          };
        };
      };
      alaF = function() {
        return function() {
          return function() {
            return function() {
              return function(v) {
                return coerce2;
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Foldable/index.js
  var identity6, unwrap2, alaF2, foldr, traverse_, for_, foldl, indexl, foldableMaybe, foldableEither, foldMapDefaultR, foldableArray, foldMap, lookup, fold, any;
  var init_Data25 = __esm({
    "output/Data.Foldable/index.js"() {
      init_foreign16();
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control8();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data_Functor2();
      init_Data21();
      init_Data19();
      init_Data_Maybe();
      init_Data14();
      init_Data_Monoid();
      init_Data_Monoid2();
      init_Data_Monoid3();
      init_Data_Monoid4();
      init_Data24();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data6();
      init_Data3();
      identity6 = /* @__PURE__ */ identity(categoryFn);
      unwrap2 = /* @__PURE__ */ unwrap();
      alaF2 = /* @__PURE__ */ alaF()()()();
      foldr = function(dict) {
        return dict.foldr;
      };
      traverse_ = function(dictApplicative) {
        var applySecond2 = applySecond(dictApplicative.Apply0());
        var pure25 = pure(dictApplicative);
        return function(dictFoldable) {
          var foldr22 = foldr(dictFoldable);
          return function(f) {
            return foldr22(function($454) {
              return applySecond2(f($454));
            })(pure25(unit));
          };
        };
      };
      for_ = function(dictApplicative) {
        var traverse_14 = traverse_(dictApplicative);
        return function(dictFoldable) {
          return flip(traverse_14(dictFoldable));
        };
      };
      foldl = function(dict) {
        return dict.foldl;
      };
      indexl = function(dictFoldable) {
        var foldl22 = foldl(dictFoldable);
        return function(idx) {
          var go2 = function(cursor) {
            return function(a2) {
              if (cursor.elem instanceof Just) {
                return cursor;
              }
              ;
              var $296 = cursor.pos === idx;
              if ($296) {
                return {
                  elem: new Just(a2),
                  pos: cursor.pos
                };
              }
              ;
              return {
                pos: cursor.pos + 1 | 0,
                elem: cursor.elem
              };
            };
          };
          var $455 = foldl22(go2)({
            elem: Nothing.value,
            pos: 0
          });
          return function($456) {
            return function(v) {
              return v.elem;
            }($455($456));
          };
        };
      };
      foldableMaybe = {
        foldr: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Nothing) {
                return v1;
              }
              ;
              if (v2 instanceof Just) {
                return v(v2.value0)(v1);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        },
        foldl: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Nothing) {
                return v1;
              }
              ;
              if (v2 instanceof Just) {
                return v(v1)(v2.value0);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        },
        foldMap: function(dictMonoid) {
          var mempty6 = mempty(dictMonoid);
          return function(v) {
            return function(v1) {
              if (v1 instanceof Nothing) {
                return mempty6;
              }
              ;
              if (v1 instanceof Just) {
                return v(v1.value0);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
            };
          };
        }
      };
      foldableEither = {
        foldr: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Left) {
                return v1;
              }
              ;
              if (v2 instanceof Right) {
                return v(v2.value0)(v1);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        },
        foldl: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Left) {
                return v1;
              }
              ;
              if (v2 instanceof Right) {
                return v(v1)(v2.value0);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
            };
          };
        },
        foldMap: function(dictMonoid) {
          var mempty6 = mempty(dictMonoid);
          return function(v) {
            return function(v1) {
              if (v1 instanceof Left) {
                return mempty6;
              }
              ;
              if (v1 instanceof Right) {
                return v(v1.value0);
              }
              ;
              throw new Error("Failed pattern match at Data.Foldable (line 181, column 1 - line 187, column 28): " + [v.constructor.name, v1.constructor.name]);
            };
          };
        }
      };
      foldMapDefaultR = function(dictFoldable) {
        var foldr22 = foldr(dictFoldable);
        return function(dictMonoid) {
          var append11 = append(dictMonoid.Semigroup0());
          var mempty6 = mempty(dictMonoid);
          return function(f) {
            return foldr22(function(x) {
              return function(acc) {
                return append11(f(x))(acc);
              };
            })(mempty6);
          };
        };
      };
      foldableArray = {
        foldr: foldrArray,
        foldl: foldlArray,
        foldMap: function(dictMonoid) {
          return foldMapDefaultR(foldableArray)(dictMonoid);
        }
      };
      foldMap = function(dict) {
        return dict.foldMap;
      };
      lookup = function(dictFoldable) {
        var foldMap22 = foldMap(dictFoldable)(monoidFirst);
        return function(dictEq) {
          var eq22 = eq(dictEq);
          return function(a2) {
            var $460 = foldMap22(function(v) {
              var $444 = eq22(a2)(v.value0);
              if ($444) {
                return new Just(v.value1);
              }
              ;
              return Nothing.value;
            });
            return function($461) {
              return unwrap2($460($461));
            };
          };
        };
      };
      fold = function(dictFoldable) {
        var foldMap22 = foldMap(dictFoldable);
        return function(dictMonoid) {
          return foldMap22(dictMonoid)(identity6);
        };
      };
      any = function(dictFoldable) {
        var foldMap22 = foldMap(dictFoldable);
        return function(dictHeytingAlgebra) {
          return alaF2(Disj)(foldMap22(monoidDisj(dictHeytingAlgebra)));
        };
      };
    }
  });

  // output/Data.Identity/index.js
  var Identity, functorIdentity, applyIdentity, bindIdentity, applicativeIdentity, monadIdentity;
  var init_Data26 = __esm({
    "output/Data.Identity/index.js"() {
      init_Data9();
      init_Data_Functor();
      init_Data15();
      init_Data16();
      Identity = function(x) {
        return x;
      };
      functorIdentity = {
        map: function(f) {
          return function(m) {
            return f(m);
          };
        }
      };
      applyIdentity = {
        apply: function(v) {
          return function(v1) {
            return v(v1);
          };
        },
        Functor0: function() {
          return functorIdentity;
        }
      };
      bindIdentity = {
        bind: function(v) {
          return function(f) {
            return f(v);
          };
        },
        Apply0: function() {
          return applyIdentity;
        }
      };
      applicativeIdentity = {
        pure: Identity,
        Apply0: function() {
          return applyIdentity;
        }
      };
      monadIdentity = {
        Applicative0: function() {
          return applicativeIdentity;
        },
        Bind1: function() {
          return bindIdentity;
        }
      };
    }
  });

  // output/Effect.Ref/foreign.js
  var _new, read, modifyImpl, write;
  var init_foreign20 = __esm({
    "output/Effect.Ref/foreign.js"() {
      _new = function(val) {
        return function() {
          return { value: val };
        };
      };
      read = function(ref2) {
        return function() {
          return ref2.value;
        };
      };
      modifyImpl = function(f) {
        return function(ref2) {
          return function() {
            var t = f(ref2.value);
            ref2.value = t.state;
            return t.value;
          };
        };
      };
      write = function(val) {
        return function(ref2) {
          return function() {
            ref2.value = val;
          };
        };
      };
    }
  });

  // output/Effect.Ref/index.js
  var $$void2, $$new, modify$prime, modify, modify_;
  var init_Effect2 = __esm({
    "output/Effect.Ref/index.js"() {
      init_foreign20();
      init_Data4();
      init_Effect();
      init_foreign20();
      $$void2 = /* @__PURE__ */ $$void(functorEffect);
      $$new = _new;
      modify$prime = modifyImpl;
      modify = function(f) {
        return modify$prime(function(s) {
          var s$prime = f(s);
          return {
            state: s$prime,
            value: s$prime
          };
        });
      };
      modify_ = function(f) {
        return function(s) {
          return $$void2(modify(f)(s));
        };
      };
    }
  });

  // output/Control.Monad.Rec.Class/index.js
  var bindFlipped2, map4, Loop, Done, tailRecM, tailRec, monadRecIdentity, monadRecEffect, forever;
  var init_Control_Monad_Rec = __esm({
    "output/Control.Monad.Rec.Class/index.js"() {
      init_Control5();
      init_Control6();
      init_Data20();
      init_Data4();
      init_Data26();
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data3();
      init_Effect();
      init_Effect2();
      bindFlipped2 = /* @__PURE__ */ bindFlipped(bindEffect);
      map4 = /* @__PURE__ */ map(functorEffect);
      Loop = /* @__PURE__ */ function() {
        function Loop2(value0) {
          this.value0 = value0;
        }
        ;
        Loop2.create = function(value0) {
          return new Loop2(value0);
        };
        return Loop2;
      }();
      Done = /* @__PURE__ */ function() {
        function Done2(value0) {
          this.value0 = value0;
        }
        ;
        Done2.create = function(value0) {
          return new Done2(value0);
        };
        return Done2;
      }();
      tailRecM = function(dict) {
        return dict.tailRecM;
      };
      tailRec = function(f) {
        var go2 = function($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
            if (v instanceof Loop) {
              $copy_v = f(v.value0);
              return;
            }
            ;
            if (v instanceof Done) {
              $tco_done = true;
              return v.value0;
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 103, column 3 - line 103, column 25): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
          }
          ;
          return $tco_result;
        };
        return function($85) {
          return go2(f($85));
        };
      };
      monadRecIdentity = {
        tailRecM: function(f) {
          var runIdentity = function(v) {
            return v;
          };
          var $86 = tailRec(function($88) {
            return runIdentity(f($88));
          });
          return function($87) {
            return Identity($86($87));
          };
        },
        Monad0: function() {
          return monadIdentity;
        }
      };
      monadRecEffect = {
        tailRecM: function(f) {
          return function(a2) {
            var fromDone = function(v) {
              if (v instanceof Done) {
                return v.value0;
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 137, column 30 - line 137, column 44): " + [v.constructor.name]);
            };
            return function __do4() {
              var r = bindFlipped2($$new)(f(a2))();
              (function() {
                while (!function __do5() {
                  var v = read(r)();
                  if (v instanceof Loop) {
                    var e = f(v.value0)();
                    write(e)(r)();
                    return false;
                  }
                  ;
                  if (v instanceof Done) {
                    return true;
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 128, column 22 - line 133, column 28): " + [v.constructor.name]);
                }()) {
                }
                ;
                return {};
              })();
              return map4(fromDone)(read(r))();
            };
          };
        },
        Monad0: function() {
          return monadEffect;
        }
      };
      forever = function(dictMonadRec) {
        var tailRecM1 = tailRecM(dictMonadRec);
        var voidRight3 = voidRight(dictMonadRec.Monad0().Bind1().Apply0().Functor0());
        return function(ma) {
          return tailRecM1(function(u2) {
            return voidRight3(new Loop(u2))(ma);
          })(unit);
        };
      };
    }
  });

  // output/Data.FunctorWithIndex/foreign.js
  var init_foreign21 = __esm({
    "output/Data.FunctorWithIndex/foreign.js"() {
    }
  });

  // output/Data.Functor.App/index.js
  var init_Data_Functor3 = __esm({
    "output/Data.Functor.App/index.js"() {
      init_Control4();
      init_Control3();
      init_Data9();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
      init_Unsafe();
    }
  });

  // output/Data.Functor.Compose/index.js
  var init_Data_Functor4 = __esm({
    "output/Data.Functor.Compose/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control8();
      init_Data9();
      init_Data4();
      init_Data_Functor3();
      init_Data15();
      init_Data16();
    }
  });

  // output/Data.Functor.Product/index.js
  var init_Data_Functor5 = __esm({
    "output/Data.Functor.Product/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data23();
      init_Data9();
      init_Data4();
      init_Data24();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data22();
    }
  });

  // output/Data.Maybe.Last/index.js
  var init_Data_Maybe2 = __esm({
    "output/Data.Maybe.Last/index.js"() {
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data16();
    }
  });

  // output/Data.Monoid.Additive/index.js
  var init_Data_Monoid5 = __esm({
    "output/Data.Monoid.Additive/index.js"() {
      init_Data9();
      init_Data15();
      init_Data6();
      init_Data16();
    }
  });

  // output/Data.Monoid.Multiplicative/index.js
  var init_Data_Monoid6 = __esm({
    "output/Data.Monoid.Multiplicative/index.js"() {
      init_Data9();
      init_Data15();
      init_Data6();
      init_Data16();
    }
  });

  // output/Data.FunctorWithIndex/index.js
  var init_Data27 = __esm({
    "output/Data.FunctorWithIndex/index.js"() {
      init_foreign21();
      init_Data23();
      init_Data17();
      init_Data20();
      init_Data2();
      init_Data4();
      init_Data_Functor3();
      init_Data_Functor4();
      init_Data_Functor2();
      init_Data_Functor5();
      init_Data26();
      init_Data19();
      init_Data_Maybe();
      init_Data_Maybe2();
      init_Data_Monoid5();
      init_Data_Monoid();
      init_Data_Monoid2();
      init_Data_Monoid3();
      init_Data_Monoid6();
      init_Data22();
      init_Data3();
    }
  });

  // output/Data.FoldableWithIndex/index.js
  var init_Data28 = __esm({
    "output/Data.FoldableWithIndex/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data_Functor2();
      init_Data27();
      init_Data19();
      init_Data14();
      init_Data_Monoid();
      init_Data_Monoid2();
      init_Data_Monoid3();
      init_Data_Monoid4();
      init_Data24();
      init_Data13();
      init_Data22();
      init_Data3();
    }
  });

  // output/Data.Ord.Max/index.js
  var init_Data_Ord = __esm({
    "output/Data.Ord.Max/index.js"() {
      init_Data18();
      init_Data15();
      init_Data16();
    }
  });

  // output/Data.Ord.Min/index.js
  var init_Data_Ord2 = __esm({
    "output/Data.Ord.Min/index.js"() {
      init_Data18();
      init_Data15();
      init_Data16();
    }
  });

  // output/Data.Semigroup.Foldable/index.js
  var identity7, JoinWith, semigroupJoinWith, joinee, foldl1, foldMap1DefaultL, foldMap1, intercalateMap, intercalate;
  var init_Data_Semigroup = __esm({
    "output/Data.Semigroup.Foldable/index.js"() {
      init_Control3();
      init_Control2();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_Monoid3();
      init_Data24();
      init_Data_Ord();
      init_Data_Ord2();
      init_Data11();
      init_Data13();
      init_Data3();
      identity7 = /* @__PURE__ */ identity(categoryFn);
      JoinWith = function(x) {
        return x;
      };
      semigroupJoinWith = function(dictSemigroup) {
        var append11 = append(dictSemigroup);
        return {
          append: function(v) {
            return function(v1) {
              return function(j) {
                return append11(v(j))(append11(j)(v1(j)));
              };
            };
          }
        };
      };
      joinee = function(v) {
        return v;
      };
      foldl1 = function(dict) {
        return dict.foldl1;
      };
      foldMap1DefaultL = function(dictFoldable1) {
        var foldl11 = foldl1(dictFoldable1);
        return function(dictFunctor) {
          var map45 = map(dictFunctor);
          return function(dictSemigroup) {
            var append11 = append(dictSemigroup);
            return function(f) {
              var $162 = foldl11(append11);
              var $163 = map45(f);
              return function($164) {
                return $162($163($164));
              };
            };
          };
        };
      };
      foldMap1 = function(dict) {
        return dict.foldMap1;
      };
      intercalateMap = function(dictFoldable1) {
        var foldMap11 = foldMap1(dictFoldable1);
        return function(dictSemigroup) {
          var foldMap122 = foldMap11(semigroupJoinWith(dictSemigroup));
          return function(j) {
            return function(f) {
              return function(foldable) {
                return joinee(foldMap122(function($171) {
                  return JoinWith($$const(f($171)));
                })(foldable))(j);
              };
            };
          };
        };
      };
      intercalate = function(dictFoldable1) {
        var intercalateMap1 = intercalateMap(dictFoldable1);
        return function(dictSemigroup) {
          return flip(intercalateMap1(dictSemigroup))(identity7);
        };
      };
    }
  });

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl;
  var init_foreign22 = __esm({
    "output/Data.Traversable/foreign.js"() {
      traverseArrayImpl = function() {
        function array1(a2) {
          return [a2];
        }
        function array2(a2) {
          return function(b2) {
            return [a2, b2];
          };
        }
        function array3(a2) {
          return function(b2) {
            return function(c) {
              return [a2, b2, c];
            };
          };
        }
        function concat2(xs) {
          return function(ys) {
            return xs.concat(ys);
          };
        }
        return function(apply6) {
          return function(map45) {
            return function(pure25) {
              return function(f) {
                return function(array) {
                  function go2(bot, top3) {
                    switch (top3 - bot) {
                      case 0:
                        return pure25([]);
                      case 1:
                        return map45(array1)(f(array[bot]));
                      case 2:
                        return apply6(map45(array2)(f(array[bot])))(f(array[bot + 1]));
                      case 3:
                        return apply6(apply6(map45(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                      default:
                        var pivot = bot + Math.floor((top3 - bot) / 4) * 2;
                        return apply6(map45(concat2)(go2(bot, pivot)))(go2(pivot, top3));
                    }
                  }
                  return go2(0, array.length);
                };
              };
            };
          };
        };
      }();
    }
  });

  // output/Data.Traversable.Accum.Internal/index.js
  var init_Data_Traversable_Accum = __esm({
    "output/Data.Traversable.Accum.Internal/index.js"() {
    }
  });

  // output/Data.Traversable/index.js
  var identity8, traverse, traversableMaybe, sequenceDefault, traversableArray, $$for;
  var init_Data29 = __esm({
    "output/Data.Traversable/index.js"() {
      init_foreign22();
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data17();
      init_Data20();
      init_Data25();
      init_Data4();
      init_Data_Functor3();
      init_Data_Functor4();
      init_Data_Functor2();
      init_Data_Functor5();
      init_Data26();
      init_Data19();
      init_Data_Maybe();
      init_Data_Maybe2();
      init_Data_Monoid5();
      init_Data_Monoid();
      init_Data_Monoid2();
      init_Data_Monoid3();
      init_Data_Monoid6();
      init_Data_Traversable_Accum();
      init_Data22();
      init_Data25();
      identity8 = /* @__PURE__ */ identity(categoryFn);
      traverse = function(dict) {
        return dict.traverse;
      };
      traversableMaybe = {
        traverse: function(dictApplicative) {
          var pure25 = pure(dictApplicative);
          var map45 = map(dictApplicative.Apply0().Functor0());
          return function(v) {
            return function(v1) {
              if (v1 instanceof Nothing) {
                return pure25(Nothing.value);
              }
              ;
              if (v1 instanceof Just) {
                return map45(Just.create)(v(v1.value0));
              }
              ;
              throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): " + [v.constructor.name, v1.constructor.name]);
            };
          };
        },
        sequence: function(dictApplicative) {
          var pure25 = pure(dictApplicative);
          var map45 = map(dictApplicative.Apply0().Functor0());
          return function(v) {
            if (v instanceof Nothing) {
              return pure25(Nothing.value);
            }
            ;
            if (v instanceof Just) {
              return map45(Just.create)(v.value0);
            }
            ;
            throw new Error("Failed pattern match at Data.Traversable (line 115, column 1 - line 119, column 33): " + [v.constructor.name]);
          };
        },
        Functor0: function() {
          return functorMaybe;
        },
        Foldable1: function() {
          return foldableMaybe;
        }
      };
      sequenceDefault = function(dictTraversable) {
        var traverse22 = traverse(dictTraversable);
        return function(dictApplicative) {
          return traverse22(dictApplicative)(identity8);
        };
      };
      traversableArray = {
        traverse: function(dictApplicative) {
          var Apply0 = dictApplicative.Apply0();
          return traverseArrayImpl(apply(Apply0))(map(Apply0.Functor0()))(pure(dictApplicative));
        },
        sequence: function(dictApplicative) {
          return sequenceDefault(traversableArray)(dictApplicative);
        },
        Functor0: function() {
          return functorArray;
        },
        Foldable1: function() {
          return foldableArray;
        }
      };
      $$for = function(dictApplicative) {
        return function(dictTraversable) {
          var traverse22 = traverse(dictTraversable)(dictApplicative);
          return function(x) {
            return function(f) {
              return traverse22(f)(x);
            };
          };
        };
      };
    }
  });

  // output/Data.TraversableWithIndex/index.js
  var init_Data30 = __esm({
    "output/Data.TraversableWithIndex/index.js"() {
      init_Control4();
      init_Control3();
      init_Data20();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data_Functor3();
      init_Data_Functor4();
      init_Data_Functor2();
      init_Data_Functor5();
      init_Data27();
      init_Data26();
      init_Data29();
      init_Data_Traversable_Accum();
      init_Data22();
      init_Data3();
    }
  });

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl;
  var init_foreign23 = __esm({
    "output/Data.Unfoldable/foreign.js"() {
      unfoldrArrayImpl = function(isNothing2) {
        return function(fromJust10) {
          return function(fst2) {
            return function(snd2) {
              return function(f) {
                return function(b2) {
                  var result = [];
                  var value17 = b2;
                  while (true) {
                    var maybe2 = f(value17);
                    if (isNothing2(maybe2))
                      return result;
                    var tuple = fromJust10(maybe2);
                    result.push(fst2(tuple));
                    value17 = snd2(tuple);
                  }
                };
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl;
  var init_foreign24 = __esm({
    "output/Data.Unfoldable1/foreign.js"() {
      unfoldr1ArrayImpl = function(isNothing2) {
        return function(fromJust10) {
          return function(fst2) {
            return function(snd2) {
              return function(f) {
                return function(b2) {
                  var result = [];
                  var value17 = b2;
                  while (true) {
                    var tuple = f(value17);
                    result.push(fst2(tuple));
                    var maybe2 = snd2(tuple);
                    if (isNothing2(maybe2))
                      return result;
                    value17 = fromJust10(maybe2);
                  }
                };
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Semigroup.Traversable/index.js
  var init_Data_Semigroup2 = __esm({
    "output/Data.Semigroup.Traversable/index.js"() {
      init_Control2();
      init_Data4();
      init_Data26();
      init_Data_Monoid3();
      init_Data_Monoid6();
      init_Data_Semigroup();
      init_Data29();
      init_Data22();
    }
  });

  // output/Data.Unfoldable1/index.js
  var fromJust2, unfoldable1Array;
  var init_Data31 = __esm({
    "output/Data.Unfoldable1/index.js"() {
      init_foreign24();
      init_Data();
      init_Data19();
      init_Data_Semigroup2();
      init_Data22();
      fromJust2 = /* @__PURE__ */ fromJust();
      unfoldable1Array = {
        unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
      };
    }
  });

  // output/Data.Unfoldable/index.js
  var fromJust3, unfoldr, unfoldableArray, none;
  var init_Data32 = __esm({
    "output/Data.Unfoldable/index.js"() {
      init_foreign23();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data29();
      init_Data22();
      init_Data31();
      init_Data3();
      init_Data31();
      fromJust3 = /* @__PURE__ */ fromJust();
      unfoldr = function(dict) {
        return dict.unfoldr;
      };
      unfoldableArray = {
        unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
        Unfoldable10: function() {
          return unfoldable1Array;
        }
      };
      none = function(dictUnfoldable) {
        return unfoldr(dictUnfoldable)($$const(Nothing.value))(unit);
      };
    }
  });

  // output/Data.NonEmpty/index.js
  var NonEmpty, singleton2;
  var init_Data33 = __esm({
    "output/Data.NonEmpty/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control8();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data4();
      init_Data27();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data_Semigroup();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data22();
      init_Data32();
      NonEmpty = /* @__PURE__ */ function() {
        function NonEmpty2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        NonEmpty2.create = function(value0) {
          return function(value1) {
            return new NonEmpty2(value0, value1);
          };
        };
        return NonEmpty2;
      }();
      singleton2 = function(dictPlus) {
        var empty8 = empty(dictPlus);
        return function(a2) {
          return new NonEmpty(a2, empty8);
        };
      };
    }
  });

  // output/Data.List.Types/index.js
  var Nil, Cons, NonEmptyList, toList, listMap, functorList, foldableList, foldr2, semigroupList, append1, semigroupNonEmptyList, altList, plusList;
  var init_Data_List = __esm({
    "output/Data.List.Types/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data27();
      init_Data19();
      init_Data14();
      init_Data33();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data_Semigroup2();
      init_Data6();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data22();
      Nil = /* @__PURE__ */ function() {
        function Nil3() {
        }
        ;
        Nil3.value = new Nil3();
        return Nil3;
      }();
      Cons = /* @__PURE__ */ function() {
        function Cons3(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Cons3.create = function(value0) {
          return function(value1) {
            return new Cons3(value0, value1);
          };
        };
        return Cons3;
      }();
      NonEmptyList = function(x) {
        return x;
      };
      toList = function(v) {
        return new Cons(v.value0, v.value1);
      };
      listMap = function(f) {
        var chunkedRevMap = function($copy_v) {
          return function($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
              if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
                $tco_var_v = new Cons(v1, v);
                $copy_v1 = v1.value1.value1.value1;
                return;
              }
              ;
              var unrolledMap = function(v2) {
                if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
                  return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
                }
                ;
                if (v2 instanceof Cons && v2.value1 instanceof Nil) {
                  return new Cons(f(v2.value0), Nil.value);
                }
                ;
                return Nil.value;
              };
              var reverseUnrolledMap = function($copy_v2) {
                return function($copy_v3) {
                  var $tco_var_v2 = $copy_v2;
                  var $tco_done1 = false;
                  var $tco_result2;
                  function $tco_loop2(v2, v3) {
                    if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                      $tco_var_v2 = v2.value1;
                      $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                      return;
                    }
                    ;
                    $tco_done1 = true;
                    return v3;
                  }
                  ;
                  while (!$tco_done1) {
                    $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
                  }
                  ;
                  return $tco_result2;
                };
              };
              $tco_done = true;
              return reverseUnrolledMap(v)(unrolledMap(v1));
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        return chunkedRevMap(Nil.value);
      };
      functorList = {
        map: listMap
      };
      foldableList = {
        foldr: function(f) {
          return function(b2) {
            var rev3 = function() {
              var go2 = function($copy_v) {
                return function($copy_v1) {
                  var $tco_var_v = $copy_v;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(v, v1) {
                    if (v1 instanceof Nil) {
                      $tco_done = true;
                      return v;
                    }
                    ;
                    if (v1 instanceof Cons) {
                      $tco_var_v = new Cons(v1.value0, v);
                      $copy_v1 = v1.value1;
                      return;
                    }
                    ;
                    throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
                  }
                  ;
                  while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $copy_v1);
                  }
                  ;
                  return $tco_result;
                };
              };
              return go2(Nil.value);
            }();
            var $284 = foldl(foldableList)(flip(f))(b2);
            return function($285) {
              return $284(rev3($285));
            };
          };
        },
        foldl: function(f) {
          var go2 = function($copy_b) {
            return function($copy_v) {
              var $tco_var_b = $copy_b;
              var $tco_done1 = false;
              var $tco_result;
              function $tco_loop(b2, v) {
                if (v instanceof Nil) {
                  $tco_done1 = true;
                  return b2;
                }
                ;
                if (v instanceof Cons) {
                  $tco_var_b = f(b2)(v.value0);
                  $copy_v = v.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
              }
              ;
              while (!$tco_done1) {
                $tco_result = $tco_loop($tco_var_b, $copy_v);
              }
              ;
              return $tco_result;
            };
          };
          return go2;
        },
        foldMap: function(dictMonoid) {
          var append22 = append(dictMonoid.Semigroup0());
          var mempty6 = mempty(dictMonoid);
          return function(f) {
            return foldl(foldableList)(function(acc) {
              var $286 = append22(acc);
              return function($287) {
                return $286(f($287));
              };
            })(mempty6);
          };
        }
      };
      foldr2 = /* @__PURE__ */ foldr(foldableList);
      semigroupList = {
        append: function(xs) {
          return function(ys) {
            return foldr2(Cons.create)(ys)(xs);
          };
        }
      };
      append1 = /* @__PURE__ */ append(semigroupList);
      semigroupNonEmptyList = {
        append: function(v) {
          return function(as$prime) {
            return new NonEmpty(v.value0, append1(v.value1)(toList(as$prime)));
          };
        }
      };
      altList = {
        alt: append1,
        Functor0: function() {
          return functorList;
        }
      };
      plusList = /* @__PURE__ */ function() {
        return {
          empty: Nil.value,
          Alt0: function() {
            return altList;
          }
        };
      }();
    }
  });

  // output/Data.List.Internal/index.js
  var init_Data_List2 = __esm({
    "output/Data.List.Internal/index.js"() {
      init_Data_List();
      init_Data11();
    }
  });

  // output/Data.List/index.js
  var reverse, $$null, some, many;
  var init_Data34 = __esm({
    "output/Data.List/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control11();
      init_Control_Monad_Rec();
      init_Data23();
      init_Data();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data21();
      init_Data_List2();
      init_Data_List();
      init_Data19();
      init_Data33();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data29();
      init_Data22();
      init_Data32();
      init_Data3();
      init_Data25();
      init_Data_List();
      init_Data29();
      reverse = /* @__PURE__ */ function() {
        var go2 = function($copy_v) {
          return function($copy_v1) {
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v, v1) {
              if (v1 instanceof Nil) {
                $tco_done = true;
                return v;
              }
              ;
              if (v1 instanceof Cons) {
                $tco_var_v = new Cons(v1.value0, v);
                $copy_v1 = v1.value1;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
        return go2(Nil.value);
      }();
      $$null = function(v) {
        if (v instanceof Nil) {
          return true;
        }
        ;
        return false;
      };
      some = function(dictAlternative) {
        var apply6 = apply(dictAlternative.Applicative0().Apply0());
        var map115 = map(dictAlternative.Plus1().Alt0().Functor0());
        return function(dictLazy) {
          var defer5 = defer(dictLazy);
          return function(v) {
            return apply6(map115(Cons.create)(v))(defer5(function(v1) {
              return many(dictAlternative)(dictLazy)(v);
            }));
          };
        };
      };
      many = function(dictAlternative) {
        var alt9 = alt(dictAlternative.Plus1().Alt0());
        var pure25 = pure(dictAlternative.Applicative0());
        return function(dictLazy) {
          return function(v) {
            return alt9(some(dictAlternative)(dictLazy)(v))(pure25(Nil.value));
          };
        };
      };
    }
  });

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial;
  var init_foreign25 = __esm({
    "output/Partial.Unsafe/foreign.js"() {
      _unsafePartial = function(f) {
        return f();
      };
    }
  });

  // output/Partial/foreign.js
  var _crashWith;
  var init_foreign26 = __esm({
    "output/Partial/foreign.js"() {
      _crashWith = function(msg) {
        throw new Error(msg);
      };
    }
  });

  // output/Partial/index.js
  var crashWith;
  var init_Partial = __esm({
    "output/Partial/index.js"() {
      init_foreign26();
      crashWith = function() {
        return _crashWith;
      };
    }
  });

  // output/Partial.Unsafe/index.js
  var crashWith2, unsafePartial, unsafeCrashWith;
  var init_Partial2 = __esm({
    "output/Partial.Unsafe/index.js"() {
      init_foreign25();
      init_Partial();
      crashWith2 = /* @__PURE__ */ crashWith();
      unsafePartial = _unsafePartial;
      unsafeCrashWith = function(msg) {
        return unsafePartial(function() {
          return crashWith2(msg);
        });
      };
    }
  });

  // output/Data.List.NonEmpty/index.js
  var singleton3, head, cons;
  var init_Data_List3 = __esm({
    "output/Data.List.NonEmpty/index.js"() {
      init_Control5();
      init_Control2();
      init_Data();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data19();
      init_Data33();
      init_Data15();
      init_Data13();
      init_Data_Semigroup();
      init_Data_Semigroup2();
      init_Data29();
      init_Data22();
      init_Data32();
      init_Partial2();
      init_Data25();
      init_Data_List();
      init_Data_Semigroup();
      init_Data_Semigroup2();
      init_Data29();
      singleton3 = /* @__PURE__ */ function() {
        var $200 = singleton2(plusList);
        return function($201) {
          return NonEmptyList($200($201));
        };
      }();
      head = function(v) {
        return v.value0;
      };
      cons = function(y) {
        return function(v) {
          return new NonEmpty(y, new Cons(v.value0, v.value1));
        };
      };
    }
  });

  // output/Control.Applicative.Free/index.js
  var identity9, Pure, Lift, Ap, mkAp, liftFreeAp, goLeft, goApply, functorFreeAp, foldFreeAp, retractFreeAp, applyFreeAp, applicativeFreeAp, foldFreeAp1, hoistFreeAp;
  var init_Control_Applicative = __esm({
    "output/Control.Applicative.Free/index.js"() {
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data17();
      init_Data20();
      init_Data_List3();
      init_Data_List();
      init_Data24();
      init_Data33();
      init_Data22();
      identity9 = /* @__PURE__ */ identity(categoryFn);
      Pure = /* @__PURE__ */ function() {
        function Pure2(value0) {
          this.value0 = value0;
        }
        ;
        Pure2.create = function(value0) {
          return new Pure2(value0);
        };
        return Pure2;
      }();
      Lift = /* @__PURE__ */ function() {
        function Lift4(value0) {
          this.value0 = value0;
        }
        ;
        Lift4.create = function(value0) {
          return new Lift4(value0);
        };
        return Lift4;
      }();
      Ap = /* @__PURE__ */ function() {
        function Ap2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Ap2.create = function(value0) {
          return function(value1) {
            return new Ap2(value0, value1);
          };
        };
        return Ap2;
      }();
      mkAp = function(fba) {
        return function(fb) {
          return new Ap(fba, fb);
        };
      };
      liftFreeAp = /* @__PURE__ */ function() {
        return Lift.create;
      }();
      goLeft = function(dictApplicative) {
        var pure25 = pure(dictApplicative);
        return function(fStack) {
          return function(valStack) {
            return function(nat) {
              return function(func) {
                return function(count) {
                  if (func instanceof Pure) {
                    return new Tuple(new Cons({
                      func: pure25(func.value0),
                      count
                    }, fStack), valStack);
                  }
                  ;
                  if (func instanceof Lift) {
                    return new Tuple(new Cons({
                      func: nat(func.value0),
                      count
                    }, fStack), valStack);
                  }
                  ;
                  if (func instanceof Ap) {
                    return goLeft(dictApplicative)(fStack)(cons(func.value1)(valStack))(nat)(func.value0)(count + 1 | 0);
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): " + [func.constructor.name]);
                };
              };
            };
          };
        };
      };
      goApply = function(dictApplicative) {
        var apply6 = apply(dictApplicative.Apply0());
        return function(fStack) {
          return function(vals) {
            return function(gVal) {
              if (fStack instanceof Nil) {
                return new Left(gVal);
              }
              ;
              if (fStack instanceof Cons) {
                var gRes = apply6(fStack.value0.func)(gVal);
                var $31 = fStack.value0.count === 1;
                if ($31) {
                  if (fStack.value1 instanceof Nil) {
                    return new Left(gRes);
                  }
                  ;
                  return goApply(dictApplicative)(fStack.value1)(vals)(gRes);
                }
                ;
                if (vals instanceof Nil) {
                  return new Left(gRes);
                }
                ;
                if (vals instanceof Cons) {
                  return new Right(new Tuple(new Cons({
                    func: gRes,
                    count: fStack.value0.count - 1 | 0
                  }, fStack.value1), new NonEmpty(vals.value0, vals.value1)));
                }
                ;
                throw new Error("Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): " + [vals.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): " + [fStack.constructor.name]);
            };
          };
        };
      };
      functorFreeAp = {
        map: function(f) {
          return function(x) {
            return mkAp(new Pure(f))(x);
          };
        }
      };
      foldFreeAp = function(dictApplicative) {
        var goApply1 = goApply(dictApplicative);
        var pure25 = pure(dictApplicative);
        var goLeft1 = goLeft(dictApplicative);
        return function(nat) {
          return function(z) {
            var go2 = function($copy_v) {
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v) {
                if (v.value1.value0 instanceof Pure) {
                  var v1 = goApply1(v.value0)(v.value1.value1)(pure25(v.value1.value0.value0));
                  if (v1 instanceof Left) {
                    $tco_done = true;
                    return v1.value0;
                  }
                  ;
                  if (v1 instanceof Right) {
                    $copy_v = v1.value0;
                    return;
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [v1.constructor.name]);
                }
                ;
                if (v.value1.value0 instanceof Lift) {
                  var v1 = goApply1(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
                  if (v1 instanceof Left) {
                    $tco_done = true;
                    return v1.value0;
                  }
                  ;
                  if (v1 instanceof Right) {
                    $copy_v = v1.value0;
                    return;
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [v1.constructor.name]);
                }
                ;
                if (v.value1.value0 instanceof Ap) {
                  var nextVals = new NonEmpty(v.value1.value0.value1, v.value1.value1);
                  $copy_v = goLeft1(v.value0)(nextVals)(nat)(v.value1.value0.value0)(1);
                  return;
                }
                ;
                throw new Error("Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): " + [v.value1.value0.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($copy_v);
              }
              ;
              return $tco_result;
            };
            return go2(new Tuple(Nil.value, singleton3(z)));
          };
        };
      };
      retractFreeAp = function(dictApplicative) {
        return foldFreeAp(dictApplicative)(identity9);
      };
      applyFreeAp = {
        apply: function(fba) {
          return function(fb) {
            return mkAp(fba)(fb);
          };
        },
        Functor0: function() {
          return functorFreeAp;
        }
      };
      applicativeFreeAp = /* @__PURE__ */ function() {
        return {
          pure: Pure.create,
          Apply0: function() {
            return applyFreeAp;
          }
        };
      }();
      foldFreeAp1 = /* @__PURE__ */ foldFreeAp(applicativeFreeAp);
      hoistFreeAp = function(f) {
        return foldFreeAp1(function($54) {
          return liftFreeAp(f($54));
        });
      };
    }
  });

  // output/Effect.Exception/foreign.js
  function showErrorImpl(err) {
    return err.stack || err.toString();
  }
  function error(msg) {
    return new Error(msg);
  }
  function message(e) {
    return e.message;
  }
  function throwException(e) {
    return function() {
      throw e;
    };
  }
  var init_foreign27 = __esm({
    "output/Effect.Exception/foreign.js"() {
    }
  });

  // output/Effect.Exception/index.js
  var $$throw, showError;
  var init_Effect3 = __esm({
    "output/Effect.Exception/index.js"() {
      init_foreign27();
      init_Control4();
      init_Data20();
      init_Data4();
      init_Data19();
      init_Effect();
      init_foreign27();
      $$throw = function($4) {
        return throwException(error($4));
      };
      showError = {
        show: showErrorImpl
      };
    }
  });

  // output/Control.Monad.Error.Class/index.js
  var throwError, catchError, $$try;
  var init_Control_Monad_Error = __esm({
    "output/Control.Monad.Error.Class/index.js"() {
      init_Control4();
      init_Control5();
      init_Data20();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data3();
      init_Effect();
      init_Effect3();
      throwError = function(dict) {
        return dict.throwError;
      };
      catchError = function(dict) {
        return dict.catchError;
      };
      $$try = function(dictMonadError) {
        var catchError1 = catchError(dictMonadError);
        var Monad0 = dictMonadError.MonadThrow0().Monad0();
        var map45 = map(Monad0.Bind1().Apply0().Functor0());
        var pure25 = pure(Monad0.Applicative0());
        return function(a2) {
          return catchError1(map45(Right.create)(a2))(function($52) {
            return pure25(Left.create($52));
          });
        };
      };
    }
  });

  // output/Data.CatQueue/index.js
  var CatQueue, uncons2, snoc2, $$null2, empty2;
  var init_Data35 = __esm({
    "output/Data.CatQueue/index.js"() {
      init_Control4();
      init_Control3();
      init_Control6();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data29();
      init_Data22();
      CatQueue = /* @__PURE__ */ function() {
        function CatQueue2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        CatQueue2.create = function(value0) {
          return function(value1) {
            return new CatQueue2(value0, value1);
          };
        };
        return CatQueue2;
      }();
      uncons2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v.value0 instanceof Nil) {
            $copy_v = new CatQueue(reverse(v.value1), Nil.value);
            return;
          }
          ;
          if (v.value0 instanceof Cons) {
            $tco_done = true;
            return new Just(new Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
          }
          ;
          throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      snoc2 = function(v) {
        return function(a2) {
          return new CatQueue(v.value0, new Cons(a2, v.value1));
        };
      };
      $$null2 = function(v) {
        if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
          return true;
        }
        ;
        return false;
      };
      empty2 = /* @__PURE__ */ function() {
        return new CatQueue(Nil.value, Nil.value);
      }();
    }
  });

  // output/Data.CatList/index.js
  var CatNil, CatCons, link, foldr3, uncons3, empty3, append2, semigroupCatList, snoc3;
  var init_Data36 = __esm({
    "output/Data.CatList/index.js"() {
      init_Control4();
      init_Control3();
      init_Control6();
      init_Data35();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_List();
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data29();
      init_Data22();
      CatNil = /* @__PURE__ */ function() {
        function CatNil2() {
        }
        ;
        CatNil2.value = new CatNil2();
        return CatNil2;
      }();
      CatCons = /* @__PURE__ */ function() {
        function CatCons2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        CatCons2.create = function(value0) {
          return function(value1) {
            return new CatCons2(value0, value1);
          };
        };
        return CatCons2;
      }();
      link = function(v) {
        return function(v1) {
          if (v instanceof CatNil) {
            return v1;
          }
          ;
          if (v1 instanceof CatNil) {
            return v;
          }
          ;
          if (v instanceof CatCons) {
            return new CatCons(v.value0, snoc2(v.value1)(v1));
          }
          ;
          throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
        };
      };
      foldr3 = function(k) {
        return function(b2) {
          return function(q2) {
            var foldl3 = function($copy_v) {
              return function($copy_v1) {
                return function($copy_v2) {
                  var $tco_var_v = $copy_v;
                  var $tco_var_v1 = $copy_v1;
                  var $tco_done = false;
                  var $tco_result;
                  function $tco_loop(v, v1, v2) {
                    if (v2 instanceof Nil) {
                      $tco_done = true;
                      return v1;
                    }
                    ;
                    if (v2 instanceof Cons) {
                      $tco_var_v = v;
                      $tco_var_v1 = v(v1)(v2.value0);
                      $copy_v2 = v2.value1;
                      return;
                    }
                    ;
                    throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
                  }
                  ;
                  while (!$tco_done) {
                    $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
                  }
                  ;
                  return $tco_result;
                };
              };
            };
            var go2 = function($copy_xs) {
              return function($copy_ys) {
                var $tco_var_xs = $copy_xs;
                var $tco_done1 = false;
                var $tco_result;
                function $tco_loop(xs, ys) {
                  var v = uncons2(xs);
                  if (v instanceof Nothing) {
                    $tco_done1 = true;
                    return foldl3(function(x) {
                      return function(i2) {
                        return i2(x);
                      };
                    })(b2)(ys);
                  }
                  ;
                  if (v instanceof Just) {
                    $tco_var_xs = v.value0.value1;
                    $copy_ys = new Cons(k(v.value0.value0), ys);
                    return;
                  }
                  ;
                  throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [v.constructor.name]);
                }
                ;
                while (!$tco_done1) {
                  $tco_result = $tco_loop($tco_var_xs, $copy_ys);
                }
                ;
                return $tco_result;
              };
            };
            return go2(q2)(Nil.value);
          };
        };
      };
      uncons3 = function(v) {
        if (v instanceof CatNil) {
          return Nothing.value;
        }
        ;
        if (v instanceof CatCons) {
          return new Just(new Tuple(v.value0, function() {
            var $66 = $$null2(v.value1);
            if ($66) {
              return CatNil.value;
            }
            ;
            return foldr3(link)(CatNil.value)(v.value1);
          }()));
        }
        ;
        throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
      };
      empty3 = /* @__PURE__ */ function() {
        return CatNil.value;
      }();
      append2 = link;
      semigroupCatList = {
        append: append2
      };
      snoc3 = function(cat) {
        return function(a2) {
          return append2(cat)(new CatCons(a2, empty2));
        };
      };
    }
  });

  // output/Control.Monad.Free/index.js
  var $runtime_lazy2, append3, map5, Free, Return, Bind, toView, fromView, freeMonad, freeFunctor, freeBind, freeApplicative, $lazy_freeApply, bind2, pure2, liftF, substFree, hoistFree, foldFree;
  var init_Control_Monad = __esm({
    "output/Control.Monad.Free/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control6();
      init_Control_Monad_Rec();
      init_Data36();
      init_Data20();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data29();
      init_Unsafe();
      $runtime_lazy2 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      append3 = /* @__PURE__ */ append(semigroupCatList);
      map5 = /* @__PURE__ */ map(functorFn);
      Free = /* @__PURE__ */ function() {
        function Free2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Free2.create = function(value0) {
          return function(value1) {
            return new Free2(value0, value1);
          };
        };
        return Free2;
      }();
      Return = /* @__PURE__ */ function() {
        function Return2(value0) {
          this.value0 = value0;
        }
        ;
        Return2.create = function(value0) {
          return new Return2(value0);
        };
        return Return2;
      }();
      Bind = /* @__PURE__ */ function() {
        function Bind2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Bind2.create = function(value0) {
          return function(value1) {
            return new Bind2(value0, value1);
          };
        };
        return Bind2;
      }();
      toView = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          var runExpF = function(v22) {
            return v22;
          };
          var concatF = function(v22) {
            return function(r) {
              return new Free(v22.value0, append3(v22.value1)(r));
            };
          };
          if (v.value0 instanceof Return) {
            var v2 = uncons3(v.value1);
            if (v2 instanceof Nothing) {
              $tco_done = true;
              return new Return(v.value0.value0);
            }
            ;
            if (v2 instanceof Just) {
              $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
          }
          ;
          if (v.value0 instanceof Bind) {
            $tco_done = true;
            return new Bind(v.value0.value0, function(a2) {
              return concatF(v.value0.value1(a2))(v.value1);
            });
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      fromView = function(f) {
        return new Free(f, empty3);
      };
      freeMonad = {
        Applicative0: function() {
          return freeApplicative;
        },
        Bind1: function() {
          return freeBind;
        }
      };
      freeFunctor = {
        map: function(k) {
          return function(f) {
            return bindFlipped(freeBind)(function() {
              var $189 = pure(freeApplicative);
              return function($190) {
                return $189(k($190));
              };
            }())(f);
          };
        }
      };
      freeBind = {
        bind: function(v) {
          return function(k) {
            return new Free(v.value0, snoc3(v.value1)(k));
          };
        },
        Apply0: function() {
          return $lazy_freeApply(0);
        }
      };
      freeApplicative = {
        pure: function($191) {
          return fromView(Return.create($191));
        },
        Apply0: function() {
          return $lazy_freeApply(0);
        }
      };
      $lazy_freeApply = /* @__PURE__ */ $runtime_lazy2("freeApply", "Control.Monad.Free", function() {
        return {
          apply: ap(freeMonad),
          Functor0: function() {
            return freeFunctor;
          }
        };
      });
      bind2 = /* @__PURE__ */ bind(freeBind);
      pure2 = /* @__PURE__ */ pure(freeApplicative);
      liftF = function(f) {
        return fromView(new Bind(f, function($192) {
          return pure2($192);
        }));
      };
      substFree = function(k) {
        var go2 = function(f) {
          var v = toView(f);
          if (v instanceof Return) {
            return pure2(v.value0);
          }
          ;
          if (v instanceof Bind) {
            return bind2(k(v.value0))(map5(go2)(v.value1));
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Free (line 168, column 10 - line 170, column 33): " + [v.constructor.name]);
        };
        return go2;
      };
      hoistFree = function(k) {
        return substFree(function($193) {
          return liftF(k($193));
        });
      };
      foldFree = function(dictMonadRec) {
        var Monad0 = dictMonadRec.Monad0();
        var map115 = map(Monad0.Bind1().Apply0().Functor0());
        var pure113 = pure(Monad0.Applicative0());
        var tailRecM4 = tailRecM(dictMonadRec);
        return function(k) {
          var go2 = function(f) {
            var v = toView(f);
            if (v instanceof Return) {
              return map115(Done.create)(pure113(v.value0));
            }
            ;
            if (v instanceof Bind) {
              return map115(function($199) {
                return Loop.create(v.value1($199));
              })(k(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): " + [v.constructor.name]);
          };
          return tailRecM4(go2);
        };
      };
    }
  });

  // output/Control.Monad.Reader.Class/index.js
  var ask;
  var init_Control_Monad_Reader = __esm({
    "output/Control.Monad.Reader.Class/index.js"() {
      init_Control2();
      init_Control6();
      init_Control();
      init_Data4();
      ask = function(dict) {
        return dict.ask;
      };
    }
  });

  // output/Control.Monad.Writer.Class/index.js
  var init_Control_Monad_Writer = __esm({
    "output/Control.Monad.Writer.Class/index.js"() {
      init_Control4();
      init_Control5();
      init_Data22();
    }
  });

  // output/Data.Lazy/foreign.js
  var defer2, force;
  var init_foreign28 = __esm({
    "output/Data.Lazy/foreign.js"() {
      defer2 = function(thunk) {
        var v = null;
        return function() {
          if (thunk === void 0)
            return v;
          v = thunk();
          thunk = void 0;
          return v;
        };
      };
      force = function(l) {
        return l();
      };
    }
  });

  // output/Data.Lazy/index.js
  var init_Data37 = __esm({
    "output/Data.Lazy/index.js"() {
      init_foreign28();
      init_Control3();
      init_Data18();
      init_Data9();
      init_Data10();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_Functor();
      init_Data21();
      init_Data14();
      init_Data15();
      init_Data7();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data29();
      init_Data3();
      init_foreign28();
    }
  });

  // output/Data.List.Lazy.Types/index.js
  var init_Data_List_Lazy = __esm({
    "output/Data.List.Lazy.Types/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control11();
      init_Control6();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data27();
      init_Data37();
      init_Data19();
      init_Data14();
      init_Data24();
      init_Data33();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data22();
      init_Data31();
    }
  });

  // output/Data.List.Lazy/index.js
  var init_Data_List4 = __esm({
    "output/Data.List.Lazy/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control11();
      init_Control_Monad_Rec();
      init_Data();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data21();
      init_Data37();
      init_Data_List2();
      init_Data_List_Lazy();
      init_Data19();
      init_Data24();
      init_Data33();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data29();
      init_Data22();
      init_Data32();
      init_Data25();
      init_Data_List_Lazy();
      init_Data29();
    }
  });

  // output/Data.Map.Internal/index.js
  var Leaf, Two, Three, TwoLeft, TwoRight, ThreeLeft, ThreeMiddle, ThreeRight, KickUp, lookup2, fromZipper, insert, pop, foldableMap, empty4, $$delete, alter;
  var init_Data_Map = __esm({
    "output/Data.Map.Internal/index.js"() {
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data27();
      init_Data21();
      init_Data34();
      init_Data_List4();
      init_Data_List_Lazy();
      init_Data_List();
      init_Data19();
      init_Data14();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data22();
      init_Data32();
      init_Partial2();
      Leaf = /* @__PURE__ */ function() {
        function Leaf2() {
        }
        ;
        Leaf2.value = new Leaf2();
        return Leaf2;
      }();
      Two = /* @__PURE__ */ function() {
        function Two2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Two2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Two2(value0, value1, value22, value32);
              };
            };
          };
        };
        return Two2;
      }();
      Three = /* @__PURE__ */ function() {
        function Three2(value0, value1, value22, value32, value42, value52, value62) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
          this.value4 = value42;
          this.value5 = value52;
          this.value6 = value62;
        }
        ;
        Three2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return function(value42) {
                  return function(value52) {
                    return function(value62) {
                      return new Three2(value0, value1, value22, value32, value42, value52, value62);
                    };
                  };
                };
              };
            };
          };
        };
        return Three2;
      }();
      TwoLeft = /* @__PURE__ */ function() {
        function TwoLeft2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        TwoLeft2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new TwoLeft2(value0, value1, value22);
            };
          };
        };
        return TwoLeft2;
      }();
      TwoRight = /* @__PURE__ */ function() {
        function TwoRight2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        TwoRight2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new TwoRight2(value0, value1, value22);
            };
          };
        };
        return TwoRight2;
      }();
      ThreeLeft = /* @__PURE__ */ function() {
        function ThreeLeft2(value0, value1, value22, value32, value42, value52) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
          this.value4 = value42;
          this.value5 = value52;
        }
        ;
        ThreeLeft2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return function(value42) {
                  return function(value52) {
                    return new ThreeLeft2(value0, value1, value22, value32, value42, value52);
                  };
                };
              };
            };
          };
        };
        return ThreeLeft2;
      }();
      ThreeMiddle = /* @__PURE__ */ function() {
        function ThreeMiddle2(value0, value1, value22, value32, value42, value52) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
          this.value4 = value42;
          this.value5 = value52;
        }
        ;
        ThreeMiddle2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return function(value42) {
                  return function(value52) {
                    return new ThreeMiddle2(value0, value1, value22, value32, value42, value52);
                  };
                };
              };
            };
          };
        };
        return ThreeMiddle2;
      }();
      ThreeRight = /* @__PURE__ */ function() {
        function ThreeRight2(value0, value1, value22, value32, value42, value52) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
          this.value4 = value42;
          this.value5 = value52;
        }
        ;
        ThreeRight2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return function(value42) {
                  return function(value52) {
                    return new ThreeRight2(value0, value1, value22, value32, value42, value52);
                  };
                };
              };
            };
          };
        };
        return ThreeRight2;
      }();
      KickUp = /* @__PURE__ */ function() {
        function KickUp2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        KickUp2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new KickUp2(value0, value1, value22, value32);
              };
            };
          };
        };
        return KickUp2;
      }();
      lookup2 = function(dictOrd) {
        var compare3 = compare(dictOrd);
        return function(k) {
          var go2 = function($copy_v) {
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v) {
              if (v instanceof Leaf) {
                $tco_done = true;
                return Nothing.value;
              }
              ;
              if (v instanceof Two) {
                var v2 = compare3(k)(v.value1);
                if (v2 instanceof EQ) {
                  $tco_done = true;
                  return new Just(v.value2);
                }
                ;
                if (v2 instanceof LT) {
                  $copy_v = v.value0;
                  return;
                }
                ;
                $copy_v = v.value3;
                return;
              }
              ;
              if (v instanceof Three) {
                var v3 = compare3(k)(v.value1);
                if (v3 instanceof EQ) {
                  $tco_done = true;
                  return new Just(v.value2);
                }
                ;
                var v4 = compare3(k)(v.value4);
                if (v4 instanceof EQ) {
                  $tco_done = true;
                  return new Just(v.value5);
                }
                ;
                if (v3 instanceof LT) {
                  $copy_v = v.value0;
                  return;
                }
                ;
                if (v4 instanceof GT) {
                  $copy_v = v.value6;
                  return;
                }
                ;
                $copy_v = v.value3;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 241, column 5 - line 241, column 22): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($copy_v);
            }
            ;
            return $tco_result;
          };
          return go2;
        };
      };
      fromZipper = function($copy_dictOrd) {
        return function($copy_v) {
          return function($copy_v1) {
            var $tco_var_dictOrd = $copy_dictOrd;
            var $tco_var_v = $copy_v;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(dictOrd, v, v1) {
              if (v instanceof Nil) {
                $tco_done = true;
                return v1;
              }
              ;
              if (v instanceof Cons) {
                if (v.value0 instanceof TwoLeft) {
                  $tco_var_dictOrd = dictOrd;
                  $tco_var_v = v.value1;
                  $copy_v1 = new Two(v1, v.value0.value0, v.value0.value1, v.value0.value2);
                  return;
                }
                ;
                if (v.value0 instanceof TwoRight) {
                  $tco_var_dictOrd = dictOrd;
                  $tco_var_v = v.value1;
                  $copy_v1 = new Two(v.value0.value0, v.value0.value1, v.value0.value2, v1);
                  return;
                }
                ;
                if (v.value0 instanceof ThreeLeft) {
                  $tco_var_dictOrd = dictOrd;
                  $tco_var_v = v.value1;
                  $copy_v1 = new Three(v1, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
                  return;
                }
                ;
                if (v.value0 instanceof ThreeMiddle) {
                  $tco_var_dictOrd = dictOrd;
                  $tco_var_v = v.value1;
                  $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v1, v.value0.value3, v.value0.value4, v.value0.value5);
                  return;
                }
                ;
                if (v.value0 instanceof ThreeRight) {
                  $tco_var_dictOrd = dictOrd;
                  $tco_var_v = v.value1;
                  $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, v1);
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 462, column 3 - line 467, column 88): " + [v.value0.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 459, column 1 - line 459, column 80): " + [v.constructor.name, v1.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_v1);
            }
            ;
            return $tco_result;
          };
        };
      };
      insert = function(dictOrd) {
        var fromZipper1 = fromZipper(dictOrd);
        var compare3 = compare(dictOrd);
        return function(k) {
          return function(v) {
            var up = function($copy_v1) {
              return function($copy_v2) {
                var $tco_var_v1 = $copy_v1;
                var $tco_done = false;
                var $tco_result;
                function $tco_loop(v1, v2) {
                  if (v1 instanceof Nil) {
                    $tco_done = true;
                    return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
                  }
                  ;
                  if (v1 instanceof Cons) {
                    if (v1.value0 instanceof TwoLeft) {
                      $tco_done = true;
                      return fromZipper1(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                    }
                    ;
                    if (v1.value0 instanceof TwoRight) {
                      $tco_done = true;
                      return fromZipper1(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                    }
                    ;
                    if (v1.value0 instanceof ThreeLeft) {
                      $tco_var_v1 = v1.value1;
                      $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                      return;
                    }
                    ;
                    if (v1.value0 instanceof ThreeMiddle) {
                      $tco_var_v1 = v1.value1;
                      $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                      return;
                    }
                    ;
                    if (v1.value0 instanceof ThreeRight) {
                      $tco_var_v1 = v1.value1;
                      $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
                      return;
                    }
                    ;
                    throw new Error("Failed pattern match at Data.Map.Internal (line 498, column 5 - line 503, column 108): " + [v1.value0.constructor.name, v2.constructor.name]);
                  }
                  ;
                  throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 3 - line 495, column 56): " + [v1.constructor.name, v2.constructor.name]);
                }
                ;
                while (!$tco_done) {
                  $tco_result = $tco_loop($tco_var_v1, $copy_v2);
                }
                ;
                return $tco_result;
              };
            };
            var down = function($copy_v1) {
              return function($copy_v2) {
                var $tco_var_v1 = $copy_v1;
                var $tco_done1 = false;
                var $tco_result;
                function $tco_loop(v1, v2) {
                  if (v2 instanceof Leaf) {
                    $tco_done1 = true;
                    return up(v1)(new KickUp(Leaf.value, k, v, Leaf.value));
                  }
                  ;
                  if (v2 instanceof Two) {
                    var v3 = compare3(k)(v2.value1);
                    if (v3 instanceof EQ) {
                      $tco_done1 = true;
                      return fromZipper1(v1)(new Two(v2.value0, k, v, v2.value3));
                    }
                    ;
                    if (v3 instanceof LT) {
                      $tco_var_v1 = new Cons(new TwoLeft(v2.value1, v2.value2, v2.value3), v1);
                      $copy_v2 = v2.value0;
                      return;
                    }
                    ;
                    $tco_var_v1 = new Cons(new TwoRight(v2.value0, v2.value1, v2.value2), v1);
                    $copy_v2 = v2.value3;
                    return;
                  }
                  ;
                  if (v2 instanceof Three) {
                    var v3 = compare3(k)(v2.value1);
                    if (v3 instanceof EQ) {
                      $tco_done1 = true;
                      return fromZipper1(v1)(new Three(v2.value0, k, v, v2.value3, v2.value4, v2.value5, v2.value6));
                    }
                    ;
                    var v4 = compare3(k)(v2.value4);
                    if (v4 instanceof EQ) {
                      $tco_done1 = true;
                      return fromZipper1(v1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, k, v, v2.value6));
                    }
                    ;
                    if (v3 instanceof LT) {
                      $tco_var_v1 = new Cons(new ThreeLeft(v2.value1, v2.value2, v2.value3, v2.value4, v2.value5, v2.value6), v1);
                      $copy_v2 = v2.value0;
                      return;
                    }
                    ;
                    if (v3 instanceof GT && v4 instanceof LT) {
                      $tco_var_v1 = new Cons(new ThreeMiddle(v2.value0, v2.value1, v2.value2, v2.value4, v2.value5, v2.value6), v1);
                      $copy_v2 = v2.value3;
                      return;
                    }
                    ;
                    $tco_var_v1 = new Cons(new ThreeRight(v2.value0, v2.value1, v2.value2, v2.value3, v2.value4, v2.value5), v1);
                    $copy_v2 = v2.value6;
                    return;
                  }
                  ;
                  throw new Error("Failed pattern match at Data.Map.Internal (line 478, column 3 - line 478, column 55): " + [v1.constructor.name, v2.constructor.name]);
                }
                ;
                while (!$tco_done1) {
                  $tco_result = $tco_loop($tco_var_v1, $copy_v2);
                }
                ;
                return $tco_result;
              };
            };
            return down(Nil.value);
          };
        };
      };
      pop = function(dictOrd) {
        var fromZipper1 = fromZipper(dictOrd);
        var compare3 = compare(dictOrd);
        return function(k) {
          var up = function($copy_ctxs) {
            return function($copy_tree) {
              var $tco_var_ctxs = $copy_ctxs;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(ctxs, tree) {
                if (ctxs instanceof Nil) {
                  $tco_done = true;
                  return tree;
                }
                ;
                if (ctxs instanceof Cons) {
                  if (ctxs.value0 instanceof TwoLeft && (ctxs.value0.value2 instanceof Leaf && tree instanceof Leaf)) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value));
                  }
                  ;
                  if (ctxs.value0 instanceof TwoRight && (ctxs.value0.value0 instanceof Leaf && tree instanceof Leaf)) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value));
                  }
                  ;
                  if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Two) {
                    $tco_var_ctxs = ctxs.value1;
                    $copy_tree = new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3);
                    return;
                  }
                  ;
                  if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Two) {
                    $tco_var_ctxs = ctxs.value1;
                    $copy_tree = new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree);
                    return;
                  }
                  ;
                  if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6)));
                  }
                  ;
                  if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree)));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeLeft && (ctxs.value0.value2 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeMiddle && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf))) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeRight && (ctxs.value0.value0 instanceof Leaf && (ctxs.value0.value3 instanceof Leaf && tree instanceof Leaf))) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value4, ctxs.value0.value5, Leaf.value));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Two) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Two) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Two) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0, ctxs.value0.value5.value1, ctxs.value0.value5.value2, ctxs.value0.value5.value3)));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Two) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3, ctxs.value0.value4, ctxs.value0.value5, tree)));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0), ctxs.value0.value5.value1, ctxs.value0.value5.value2, new Two(ctxs.value0.value5.value3, ctxs.value0.value5.value4, ctxs.value0.value5.value5, ctxs.value0.value5.value6)));
                  }
                  ;
                  if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Three) {
                    $tco_done = true;
                    return fromZipper1(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3), ctxs.value0.value3.value4, ctxs.value0.value3.value5, new Two(ctxs.value0.value3.value6, ctxs.value0.value4, ctxs.value0.value5, tree)));
                  }
                  ;
                  $tco_done = true;
                  return unsafeCrashWith("The impossible happened in partial function `up`.");
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 552, column 5 - line 573, column 86): " + [ctxs.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_ctxs, $copy_tree);
              }
              ;
              return $tco_result;
            };
          };
          var removeMaxNode = function($copy_ctx) {
            return function($copy_m) {
              var $tco_var_ctx = $copy_ctx;
              var $tco_done1 = false;
              var $tco_result;
              function $tco_loop(ctx, m) {
                if (m instanceof Two && (m.value0 instanceof Leaf && m.value3 instanceof Leaf)) {
                  $tco_done1 = true;
                  return up(ctx)(Leaf.value);
                }
                ;
                if (m instanceof Two) {
                  $tco_var_ctx = new Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                  $copy_m = m.value3;
                  return;
                }
                ;
                if (m instanceof Three && (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf))) {
                  $tco_done1 = true;
                  return up(new Cons(new TwoRight(Leaf.value, m.value1, m.value2), ctx))(Leaf.value);
                }
                ;
                if (m instanceof Three) {
                  $tco_var_ctx = new Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
                  $copy_m = m.value6;
                  return;
                }
                ;
                $tco_done1 = true;
                return unsafeCrashWith("The impossible happened in partial function `removeMaxNode`.");
              }
              ;
              while (!$tco_done1) {
                $tco_result = $tco_loop($tco_var_ctx, $copy_m);
              }
              ;
              return $tco_result;
            };
          };
          var maxNode = function($copy_m) {
            var $tco_done2 = false;
            var $tco_result;
            function $tco_loop(m) {
              if (m instanceof Two && m.value3 instanceof Leaf) {
                $tco_done2 = true;
                return {
                  key: m.value1,
                  value: m.value2
                };
              }
              ;
              if (m instanceof Two) {
                $copy_m = m.value3;
                return;
              }
              ;
              if (m instanceof Three && m.value6 instanceof Leaf) {
                $tco_done2 = true;
                return {
                  key: m.value4,
                  value: m.value5
                };
              }
              ;
              if (m instanceof Three) {
                $copy_m = m.value6;
                return;
              }
              ;
              $tco_done2 = true;
              return unsafeCrashWith("The impossible happened in partial function `maxNode`.");
            }
            ;
            while (!$tco_done2) {
              $tco_result = $tco_loop($copy_m);
            }
            ;
            return $tco_result;
          };
          var down = function($copy_ctx) {
            return function($copy_m) {
              var $tco_var_ctx = $copy_ctx;
              var $tco_done3 = false;
              var $tco_result;
              function $tco_loop(ctx, m) {
                if (m instanceof Leaf) {
                  $tco_done3 = true;
                  return Nothing.value;
                }
                ;
                if (m instanceof Two) {
                  var v = compare3(k)(m.value1);
                  if (m.value3 instanceof Leaf && v instanceof EQ) {
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value2, up(ctx)(Leaf.value)));
                  }
                  ;
                  if (v instanceof EQ) {
                    var max6 = maxNode(m.value0);
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value2, removeMaxNode(new Cons(new TwoLeft(max6.key, max6.value, m.value3), ctx))(m.value0)));
                  }
                  ;
                  if (v instanceof LT) {
                    $tco_var_ctx = new Cons(new TwoLeft(m.value1, m.value2, m.value3), ctx);
                    $copy_m = m.value0;
                    return;
                  }
                  ;
                  $tco_var_ctx = new Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
                  $copy_m = m.value3;
                  return;
                }
                ;
                if (m instanceof Three) {
                  var leaves = function() {
                    if (m.value0 instanceof Leaf && (m.value3 instanceof Leaf && m.value6 instanceof Leaf)) {
                      return true;
                    }
                    ;
                    return false;
                  }();
                  var v = compare3(k)(m.value4);
                  var v3 = compare3(k)(m.value1);
                  if (leaves && v3 instanceof EQ) {
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value2, fromZipper1(ctx)(new Two(Leaf.value, m.value4, m.value5, Leaf.value))));
                  }
                  ;
                  if (leaves && v instanceof EQ) {
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value5, fromZipper1(ctx)(new Two(Leaf.value, m.value1, m.value2, Leaf.value))));
                  }
                  ;
                  if (v3 instanceof EQ) {
                    var max6 = maxNode(m.value0);
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value2, removeMaxNode(new Cons(new ThreeLeft(max6.key, max6.value, m.value3, m.value4, m.value5, m.value6), ctx))(m.value0)));
                  }
                  ;
                  if (v instanceof EQ) {
                    var max6 = maxNode(m.value3);
                    $tco_done3 = true;
                    return new Just(new Tuple(m.value5, removeMaxNode(new Cons(new ThreeMiddle(m.value0, m.value1, m.value2, max6.key, max6.value, m.value6), ctx))(m.value3)));
                  }
                  ;
                  if (v3 instanceof LT) {
                    $tco_var_ctx = new Cons(new ThreeLeft(m.value1, m.value2, m.value3, m.value4, m.value5, m.value6), ctx);
                    $copy_m = m.value0;
                    return;
                  }
                  ;
                  if (v3 instanceof GT && v instanceof LT) {
                    $tco_var_ctx = new Cons(new ThreeMiddle(m.value0, m.value1, m.value2, m.value4, m.value5, m.value6), ctx);
                    $copy_m = m.value3;
                    return;
                  }
                  ;
                  $tco_var_ctx = new Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
                  $copy_m = m.value6;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 525, column 16 - line 548, column 80): " + [m.constructor.name]);
              }
              ;
              while (!$tco_done3) {
                $tco_result = $tco_loop($tco_var_ctx, $copy_m);
              }
              ;
              return $tco_result;
            };
          };
          return down(Nil.value);
        };
      };
      foldableMap = {
        foldr: function(f) {
          return function(z) {
            return function(m) {
              if (m instanceof Leaf) {
                return z;
              }
              ;
              if (m instanceof Two) {
                return foldr(foldableMap)(f)(f(m.value2)(foldr(foldableMap)(f)(z)(m.value3)))(m.value0);
              }
              ;
              if (m instanceof Three) {
                return foldr(foldableMap)(f)(f(m.value2)(foldr(foldableMap)(f)(f(m.value5)(foldr(foldableMap)(f)(z)(m.value6)))(m.value3)))(m.value0);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 133, column 17 - line 136, column 85): " + [m.constructor.name]);
            };
          };
        },
        foldl: function(f) {
          return function(z) {
            return function(m) {
              if (m instanceof Leaf) {
                return z;
              }
              ;
              if (m instanceof Two) {
                return foldl(foldableMap)(f)(f(foldl(foldableMap)(f)(z)(m.value0))(m.value2))(m.value3);
              }
              ;
              if (m instanceof Three) {
                return foldl(foldableMap)(f)(f(foldl(foldableMap)(f)(f(foldl(foldableMap)(f)(z)(m.value0))(m.value2))(m.value3))(m.value5))(m.value6);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 137, column 17 - line 140, column 85): " + [m.constructor.name]);
            };
          };
        },
        foldMap: function(dictMonoid) {
          var mempty6 = mempty(dictMonoid);
          var append22 = append(dictMonoid.Semigroup0());
          return function(f) {
            return function(m) {
              if (m instanceof Leaf) {
                return mempty6;
              }
              ;
              if (m instanceof Two) {
                return append22(foldMap(foldableMap)(dictMonoid)(f)(m.value0))(append22(f(m.value2))(foldMap(foldableMap)(dictMonoid)(f)(m.value3)));
              }
              ;
              if (m instanceof Three) {
                return append22(foldMap(foldableMap)(dictMonoid)(f)(m.value0))(append22(f(m.value2))(append22(foldMap(foldableMap)(dictMonoid)(f)(m.value3))(append22(f(m.value5))(foldMap(foldableMap)(dictMonoid)(f)(m.value6)))));
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 141, column 17 - line 144, column 93): " + [m.constructor.name]);
            };
          };
        }
      };
      empty4 = /* @__PURE__ */ function() {
        return Leaf.value;
      }();
      $$delete = function(dictOrd) {
        var pop12 = pop(dictOrd);
        return function(k) {
          return function(m) {
            return maybe(m)(snd)(pop12(k)(m));
          };
        };
      };
      alter = function(dictOrd) {
        var lookup13 = lookup2(dictOrd);
        var delete1 = $$delete(dictOrd);
        var insert13 = insert(dictOrd);
        return function(f) {
          return function(k) {
            return function(m) {
              var v = f(lookup13(k)(m));
              if (v instanceof Nothing) {
                return delete1(k)(m);
              }
              ;
              if (v instanceof Just) {
                return insert13(k)(v.value0)(m);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 596, column 15 - line 598, column 25): " + [v.constructor.name]);
            };
          };
        };
      };
    }
  });

  // output/Control.Monad.Cont.Class/index.js
  var init_Control_Monad_Cont = __esm({
    "output/Control.Monad.Cont.Class/index.js"() {
    }
  });

  // output/Control.Monad.State.Class/index.js
  var state, put, modify_2, gets, get;
  var init_Control_Monad_State = __esm({
    "output/Control.Monad.State.Class/index.js"() {
      init_Data22();
      init_Data3();
      state = function(dict) {
        return dict.state;
      };
      put = function(dictMonadState) {
        var state1 = state(dictMonadState);
        return function(s) {
          return state1(function(v) {
            return new Tuple(unit, s);
          });
        };
      };
      modify_2 = function(dictMonadState) {
        var state1 = state(dictMonadState);
        return function(f) {
          return state1(function(s) {
            return new Tuple(unit, f(s));
          });
        };
      };
      gets = function(dictMonadState) {
        var state1 = state(dictMonadState);
        return function(f) {
          return state1(function(s) {
            return new Tuple(f(s), s);
          });
        };
      };
      get = function(dictMonadState) {
        return state(dictMonadState)(function(s) {
          return new Tuple(s, s);
        });
      };
    }
  });

  // output/Effect.Class/index.js
  var monadEffectEffect, liftEffect;
  var init_Effect4 = __esm({
    "output/Effect.Class/index.js"() {
      init_Control2();
      init_Effect();
      monadEffectEffect = {
        liftEffect: /* @__PURE__ */ identity(categoryFn),
        Monad0: function() {
          return monadEffect;
        }
      };
      liftEffect = function(dict) {
        return dict.liftEffect;
      };
    }
  });

  // output/Control.Monad.Cont.Trans/index.js
  var init_Control_Monad_Cont2 = __esm({
    "output/Control.Monad.Cont.Trans/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Cont();
      init_Control_Monad_Reader();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Data2();
      init_Data14();
      init_Data13();
      init_Effect4();
      init_Control_Monad_Cont();
      init_Control_Monad_Trans();
    }
  });

  // output/Control.Monad.Except.Trans/index.js
  var map6, ExceptT, runExceptT, mapExceptT, functorExceptT, monadExceptT, bindExceptT, applyExceptT, applicativeExceptT, monadThrowExceptT, altExceptT;
  var init_Control_Monad_Except = __esm({
    "output/Control.Monad.Except.Trans/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control6();
      init_Control_Monad_Cont();
      init_Control_Monad_Error();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
      init_Data20();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data22();
      init_Effect4();
      init_Control_Monad_Error();
      init_Control_Monad_Trans();
      map6 = /* @__PURE__ */ map(functorEither);
      ExceptT = function(x) {
        return x;
      };
      runExceptT = function(v) {
        return v;
      };
      mapExceptT = function(f) {
        return function(v) {
          return f(v);
        };
      };
      functorExceptT = function(dictFunctor) {
        var map115 = map(dictFunctor);
        return {
          map: function(f) {
            return mapExceptT(map115(map6(f)));
          }
        };
      };
      monadExceptT = function(dictMonad) {
        return {
          Applicative0: function() {
            return applicativeExceptT(dictMonad);
          },
          Bind1: function() {
            return bindExceptT(dictMonad);
          }
        };
      };
      bindExceptT = function(dictMonad) {
        var bind21 = bind(dictMonad.Bind1());
        var pure25 = pure(dictMonad.Applicative0());
        return {
          bind: function(v) {
            return function(k) {
              return bind21(v)(either(function($187) {
                return pure25(Left.create($187));
              })(function(a2) {
                var v1 = k(a2);
                return v1;
              }));
            };
          },
          Apply0: function() {
            return applyExceptT(dictMonad);
          }
        };
      };
      applyExceptT = function(dictMonad) {
        var functorExceptT1 = functorExceptT(dictMonad.Bind1().Apply0().Functor0());
        return {
          apply: ap(monadExceptT(dictMonad)),
          Functor0: function() {
            return functorExceptT1;
          }
        };
      };
      applicativeExceptT = function(dictMonad) {
        return {
          pure: function() {
            var $188 = pure(dictMonad.Applicative0());
            return function($189) {
              return ExceptT($188(Right.create($189)));
            };
          }(),
          Apply0: function() {
            return applyExceptT(dictMonad);
          }
        };
      };
      monadThrowExceptT = function(dictMonad) {
        var monadExceptT1 = monadExceptT(dictMonad);
        return {
          throwError: function() {
            var $198 = pure(dictMonad.Applicative0());
            return function($199) {
              return ExceptT($198(Left.create($199)));
            };
          }(),
          Monad0: function() {
            return monadExceptT1;
          }
        };
      };
      altExceptT = function(dictSemigroup) {
        var append11 = append(dictSemigroup);
        return function(dictMonad) {
          var Bind1 = dictMonad.Bind1();
          var bind21 = bind(Bind1);
          var pure25 = pure(dictMonad.Applicative0());
          var functorExceptT1 = functorExceptT(Bind1.Apply0().Functor0());
          return {
            alt: function(v) {
              return function(v1) {
                return bind21(v)(function(rm) {
                  if (rm instanceof Right) {
                    return pure25(new Right(rm.value0));
                  }
                  ;
                  if (rm instanceof Left) {
                    return bind21(v1)(function(rn) {
                      if (rn instanceof Right) {
                        return pure25(new Right(rn.value0));
                      }
                      ;
                      if (rn instanceof Left) {
                        return pure25(new Left(append11(rm.value0)(rn.value0)));
                      }
                      ;
                      throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [rn.constructor.name]);
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [rm.constructor.name]);
                });
              };
            },
            Functor0: function() {
              return functorExceptT1;
            }
          };
        };
      };
    }
  });

  // output/Control.Monad.List.Trans/index.js
  var init_Control_Monad_List = __esm({
    "output/Control.Monad.List.Trans/index.js"() {
      init_Control4();
      init_Control5();
      init_Control2();
      init_Control6();
      init_Control_Monad_Rec();
      init_Control_Monad_Trans();
      init_Data2();
      init_Data4();
      init_Data37();
      init_Data19();
      init_Data13();
      init_Data22();
      init_Data3();
      init_Effect4();
      init_Control_Monad_Trans();
    }
  });

  // output/Control.Monad.Maybe.Trans/index.js
  var init_Control_Monad_Maybe = __esm({
    "output/Control.Monad.Maybe.Trans/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control6();
      init_Control_Monad_Cont();
      init_Control_Monad_Error();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data22();
      init_Effect4();
      init_Control_Monad_Trans();
    }
  });

  // output/Control.Monad.RWS.Trans/index.js
  var init_Control_Monad_RWS = __esm({
    "output/Control.Monad.RWS.Trans/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Error();
      init_Control_Monad_Rec();
      init_Control_Monad_Trans();
      init_Control8();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data22();
      init_Data3();
      init_Effect4();
      init_Control_Monad_Trans();
    }
  });

  // output/Type.Equality/index.js
  var refl, proof, from2;
  var init_Type2 = __esm({
    "output/Type.Equality/index.js"() {
      refl = {
        proof: function(a2) {
          return a2;
        },
        Coercible0: function() {
          return void 0;
        }
      };
      proof = function(dict) {
        return dict.proof;
      };
      from2 = function(dictTypeEquals) {
        var v = proof(dictTypeEquals)(function(a2) {
          return a2;
        });
        return v;
      };
    }
  });

  // output/Data.Distributive/index.js
  var init_Data38 = __esm({
    "output/Data.Distributive/index.js"() {
      init_Control2();
      init_Data4();
      init_Data26();
      init_Data24();
      init_Data22();
      init_Data3();
      init_Type2();
    }
  });

  // output/Control.Monad.Reader.Trans/index.js
  var ReaderT, runReaderT, monadTransReaderT, lift3, mapReaderT, functorReaderT, applyReaderT, bindReaderT, applicativeReaderT, monadReaderT, monadAskReaderT, monadEffectReader;
  var init_Control_Monad_Reader2 = __esm({
    "output/Control.Monad.Reader.Trans/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Cont();
      init_Control_Monad_Error();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
      init_Control8();
      init_Data38();
      init_Data2();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Effect4();
      init_Control_Monad_Reader();
      init_Control_Monad_Trans();
      ReaderT = function(x) {
        return x;
      };
      runReaderT = function(v) {
        return v;
      };
      monadTransReaderT = {
        lift: function(dictMonad) {
          return function($147) {
            return ReaderT($$const($147));
          };
        }
      };
      lift3 = /* @__PURE__ */ lift(monadTransReaderT);
      mapReaderT = function(f) {
        return function(v) {
          return function($148) {
            return f(v($148));
          };
        };
      };
      functorReaderT = function(dictFunctor) {
        return {
          map: function() {
            var $149 = map(dictFunctor);
            return function($150) {
              return mapReaderT($149($150));
            };
          }()
        };
      };
      applyReaderT = function(dictApply) {
        var apply6 = apply(dictApply);
        var functorReaderT1 = functorReaderT(dictApply.Functor0());
        return {
          apply: function(v) {
            return function(v1) {
              return function(r) {
                return apply6(v(r))(v1(r));
              };
            };
          },
          Functor0: function() {
            return functorReaderT1;
          }
        };
      };
      bindReaderT = function(dictBind) {
        var bind21 = bind(dictBind);
        var applyReaderT1 = applyReaderT(dictBind.Apply0());
        return {
          bind: function(v) {
            return function(k) {
              return function(r) {
                return bind21(v(r))(function(a2) {
                  var v1 = k(a2);
                  return v1(r);
                });
              };
            };
          },
          Apply0: function() {
            return applyReaderT1;
          }
        };
      };
      applicativeReaderT = function(dictApplicative) {
        var applyReaderT1 = applyReaderT(dictApplicative.Apply0());
        return {
          pure: function() {
            var $154 = pure(dictApplicative);
            return function($155) {
              return ReaderT($$const($154($155)));
            };
          }(),
          Apply0: function() {
            return applyReaderT1;
          }
        };
      };
      monadReaderT = function(dictMonad) {
        var applicativeReaderT1 = applicativeReaderT(dictMonad.Applicative0());
        var bindReaderT1 = bindReaderT(dictMonad.Bind1());
        return {
          Applicative0: function() {
            return applicativeReaderT1;
          },
          Bind1: function() {
            return bindReaderT1;
          }
        };
      };
      monadAskReaderT = function(dictMonad) {
        var monadReaderT1 = monadReaderT(dictMonad);
        return {
          ask: pure(dictMonad.Applicative0()),
          Monad0: function() {
            return monadReaderT1;
          }
        };
      };
      monadEffectReader = function(dictMonadEffect) {
        var Monad0 = dictMonadEffect.Monad0();
        var monadReaderT1 = monadReaderT(Monad0);
        return {
          liftEffect: function() {
            var $157 = lift3(Monad0);
            var $158 = liftEffect(dictMonadEffect);
            return function($159) {
              return $157($158($159));
            };
          }(),
          Monad0: function() {
            return monadReaderT1;
          }
        };
      };
    }
  });

  // output/Control.Monad.State.Trans/index.js
  var init_Control_Monad_State2 = __esm({
    "output/Control.Monad.State.Trans/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control6();
      init_Control_Monad_Cont();
      init_Control_Monad_Error();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
      init_Control8();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data22();
      init_Data3();
      init_Effect4();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
    }
  });

  // output/Control.Monad.Writer.Trans/index.js
  var init_Control_Monad_Writer2 = __esm({
    "output/Control.Monad.Writer.Trans/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Cont();
      init_Control_Monad_Error();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
      init_Control8();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data22();
      init_Data3();
      init_Effect4();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer();
    }
  });

  // output/Effect.Aff/foreign.js
  function _catchError(aff) {
    return function(k) {
      return Aff.Catch(aff, k);
    };
  }
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value17) {
          return Aff.Pure(f(value17));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  function _fork(immediate) {
    return function(aff) {
      return Aff.Fork(immediate, aff);
    };
  }
  function _parAffMap(f) {
    return function(aff) {
      return Aff.ParMap(f, aff);
    };
  }
  function _parAffApply(aff1) {
    return function(aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  }
  function generalBracket(acquire) {
    return function(options2) {
      return function(k) {
        return Aff.Bracket(acquire, options2, k);
      };
    };
  }
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var Aff, _pure, _throwError, _liftEffect, makeAff, _delay, _sequential;
  var init_foreign29 = __esm({
    "output/Effect.Aff/foreign.js"() {
      Aff = function() {
        var EMPTY = {};
        var PURE = "Pure";
        var THROW = "Throw";
        var CATCH = "Catch";
        var SYNC = "Sync";
        var ASYNC = "Async";
        var BIND = "Bind";
        var BRACKET = "Bracket";
        var FORK = "Fork";
        var SEQ = "Sequential";
        var MAP = "Map";
        var APPLY = "Apply";
        var ALT = "Alt";
        var CONS = "Cons";
        var RESUME = "Resume";
        var RELEASE = "Release";
        var FINALIZER = "Finalizer";
        var FINALIZED = "Finalized";
        var FORKED = "Forked";
        var FIBER = "Fiber";
        var THUNK = "Thunk";
        function Aff2(tag, _1, _2, _3) {
          this.tag = tag;
          this._1 = _1;
          this._2 = _2;
          this._3 = _3;
        }
        function AffCtr(tag) {
          var fn = function(_1, _2, _3) {
            return new Aff2(tag, _1, _2, _3);
          };
          fn.tag = tag;
          return fn;
        }
        function nonCanceler2(error4) {
          return new Aff2(PURE, void 0);
        }
        function runEff(eff) {
          try {
            eff();
          } catch (error4) {
            setTimeout(function() {
              throw error4;
            }, 0);
          }
        }
        function runSync(left, right, eff) {
          try {
            return right(eff());
          } catch (error4) {
            return left(error4);
          }
        }
        function runAsync(left, eff, k) {
          try {
            return eff(k)();
          } catch (error4) {
            k(left(error4))();
            return nonCanceler2;
          }
        }
        var Scheduler = function() {
          var limit = 1024;
          var size5 = 0;
          var ix = 0;
          var queue = new Array(limit);
          var draining = false;
          function drain() {
            var thunk;
            draining = true;
            while (size5 !== 0) {
              size5--;
              thunk = queue[ix];
              queue[ix] = void 0;
              ix = (ix + 1) % limit;
              thunk();
            }
            draining = false;
          }
          return {
            isDraining: function() {
              return draining;
            },
            enqueue: function(cb) {
              var i2, tmp;
              if (size5 === limit) {
                tmp = draining;
                drain();
                draining = tmp;
              }
              queue[(ix + size5) % limit] = cb;
              size5++;
              if (!draining) {
                drain();
              }
            }
          };
        }();
        function Supervisor(util) {
          var fibers = {};
          var fiberId = 0;
          var count = 0;
          return {
            register: function(fiber) {
              var fid = fiberId++;
              fiber.onComplete({
                rethrow: true,
                handler: function(result) {
                  return function() {
                    count--;
                    delete fibers[fid];
                  };
                }
              })();
              fibers[fid] = fiber;
              count++;
            },
            isEmpty: function() {
              return count === 0;
            },
            killAll: function(killError, cb) {
              return function() {
                if (count === 0) {
                  return cb();
                }
                var killCount = 0;
                var kills = {};
                function kill3(fid) {
                  kills[fid] = fibers[fid].kill(killError, function(result) {
                    return function() {
                      delete kills[fid];
                      killCount--;
                      if (util.isLeft(result) && util.fromLeft(result)) {
                        setTimeout(function() {
                          throw util.fromLeft(result);
                        }, 0);
                      }
                      if (killCount === 0) {
                        cb();
                      }
                    };
                  })();
                }
                for (var k in fibers) {
                  if (fibers.hasOwnProperty(k)) {
                    killCount++;
                    kill3(k);
                  }
                }
                fibers = {};
                fiberId = 0;
                count = 0;
                return function(error4) {
                  return new Aff2(SYNC, function() {
                    for (var k2 in kills) {
                      if (kills.hasOwnProperty(k2)) {
                        kills[k2]();
                      }
                    }
                  });
                };
              };
            }
          };
        }
        var SUSPENDED = 0;
        var CONTINUE = 1;
        var STEP_BIND = 2;
        var STEP_RESULT = 3;
        var PENDING = 4;
        var RETURN = 5;
        var COMPLETED = 6;
        function Fiber(util, supervisor, aff) {
          var runTick = 0;
          var status = SUSPENDED;
          var step4 = aff;
          var fail4 = null;
          var interrupt = null;
          var bhead = null;
          var btail = null;
          var attempts = null;
          var bracketCount = 0;
          var joinId = 0;
          var joins = null;
          var rethrow = true;
          function run5(localRunTick) {
            var tmp, result, attempt;
            while (true) {
              tmp = null;
              result = null;
              attempt = null;
              switch (status) {
                case STEP_BIND:
                  status = CONTINUE;
                  try {
                    step4 = bhead(step4);
                    if (btail === null) {
                      bhead = null;
                    } else {
                      bhead = btail._1;
                      btail = btail._2;
                    }
                  } catch (e) {
                    status = RETURN;
                    fail4 = util.left(e);
                    step4 = null;
                  }
                  break;
                case STEP_RESULT:
                  if (util.isLeft(step4)) {
                    status = RETURN;
                    fail4 = step4;
                    step4 = null;
                  } else if (bhead === null) {
                    status = RETURN;
                  } else {
                    status = STEP_BIND;
                    step4 = util.fromRight(step4);
                  }
                  break;
                case CONTINUE:
                  switch (step4.tag) {
                    case BIND:
                      if (bhead) {
                        btail = new Aff2(CONS, bhead, btail);
                      }
                      bhead = step4._2;
                      status = CONTINUE;
                      step4 = step4._1;
                      break;
                    case PURE:
                      if (bhead === null) {
                        status = RETURN;
                        step4 = util.right(step4._1);
                      } else {
                        status = STEP_BIND;
                        step4 = step4._1;
                      }
                      break;
                    case SYNC:
                      status = STEP_RESULT;
                      step4 = runSync(util.left, util.right, step4._1);
                      break;
                    case ASYNC:
                      status = PENDING;
                      step4 = runAsync(util.left, step4._1, function(result2) {
                        return function() {
                          if (runTick !== localRunTick) {
                            return;
                          }
                          runTick++;
                          Scheduler.enqueue(function() {
                            if (runTick !== localRunTick + 1) {
                              return;
                            }
                            status = STEP_RESULT;
                            step4 = result2;
                            run5(runTick);
                          });
                        };
                      });
                      return;
                    case THROW:
                      status = RETURN;
                      fail4 = util.left(step4._1);
                      step4 = null;
                      break;
                    case CATCH:
                      if (bhead === null) {
                        attempts = new Aff2(CONS, step4, attempts, interrupt);
                      } else {
                        attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                      }
                      bhead = null;
                      btail = null;
                      status = CONTINUE;
                      step4 = step4._1;
                      break;
                    case BRACKET:
                      bracketCount++;
                      if (bhead === null) {
                        attempts = new Aff2(CONS, step4, attempts, interrupt);
                      } else {
                        attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                      }
                      bhead = null;
                      btail = null;
                      status = CONTINUE;
                      step4 = step4._1;
                      break;
                    case FORK:
                      status = STEP_RESULT;
                      tmp = Fiber(util, supervisor, step4._2);
                      if (supervisor) {
                        supervisor.register(tmp);
                      }
                      if (step4._1) {
                        tmp.run();
                      }
                      step4 = util.right(tmp);
                      break;
                    case SEQ:
                      status = CONTINUE;
                      step4 = sequential3(util, supervisor, step4._1);
                      break;
                  }
                  break;
                case RETURN:
                  bhead = null;
                  btail = null;
                  if (attempts === null) {
                    status = COMPLETED;
                    step4 = interrupt || fail4 || step4;
                  } else {
                    tmp = attempts._3;
                    attempt = attempts._1;
                    attempts = attempts._2;
                    switch (attempt.tag) {
                      case CATCH:
                        if (interrupt && interrupt !== tmp && bracketCount === 0) {
                          status = RETURN;
                        } else if (fail4) {
                          status = CONTINUE;
                          step4 = attempt._2(util.fromLeft(fail4));
                          fail4 = null;
                        }
                        break;
                      case RESUME:
                        if (interrupt && interrupt !== tmp && bracketCount === 0 || fail4) {
                          status = RETURN;
                        } else {
                          bhead = attempt._1;
                          btail = attempt._2;
                          status = STEP_BIND;
                          step4 = util.fromRight(step4);
                        }
                        break;
                      case BRACKET:
                        bracketCount--;
                        if (fail4 === null) {
                          result = util.fromRight(step4);
                          attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                          if (interrupt === tmp || bracketCount > 0) {
                            status = CONTINUE;
                            step4 = attempt._3(result);
                          }
                        }
                        break;
                      case RELEASE:
                        attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail4), attempts, interrupt);
                        status = CONTINUE;
                        if (interrupt && interrupt !== tmp && bracketCount === 0) {
                          step4 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                        } else if (fail4) {
                          step4 = attempt._1.failed(util.fromLeft(fail4))(attempt._2);
                        } else {
                          step4 = attempt._1.completed(util.fromRight(step4))(attempt._2);
                        }
                        fail4 = null;
                        bracketCount++;
                        break;
                      case FINALIZER:
                        bracketCount++;
                        attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail4), attempts, interrupt);
                        status = CONTINUE;
                        step4 = attempt._1;
                        break;
                      case FINALIZED:
                        bracketCount--;
                        status = RETURN;
                        step4 = attempt._1;
                        fail4 = attempt._2;
                        break;
                    }
                  }
                  break;
                case COMPLETED:
                  for (var k in joins) {
                    if (joins.hasOwnProperty(k)) {
                      rethrow = rethrow && joins[k].rethrow;
                      runEff(joins[k].handler(step4));
                    }
                  }
                  joins = null;
                  if (interrupt && fail4) {
                    setTimeout(function() {
                      throw util.fromLeft(fail4);
                    }, 0);
                  } else if (util.isLeft(step4) && rethrow) {
                    setTimeout(function() {
                      if (rethrow) {
                        throw util.fromLeft(step4);
                      }
                    }, 0);
                  }
                  return;
                case SUSPENDED:
                  status = CONTINUE;
                  break;
                case PENDING:
                  return;
              }
            }
          }
          function onComplete(join5) {
            return function() {
              if (status === COMPLETED) {
                rethrow = rethrow && join5.rethrow;
                join5.handler(step4)();
                return function() {
                };
              }
              var jid = joinId++;
              joins = joins || {};
              joins[jid] = join5;
              return function() {
                if (joins !== null) {
                  delete joins[jid];
                }
              };
            };
          }
          function kill3(error4, cb) {
            return function() {
              if (status === COMPLETED) {
                cb(util.right(void 0))();
                return function() {
                };
              }
              var canceler = onComplete({
                rethrow: false,
                handler: function() {
                  return cb(util.right(void 0));
                }
              })();
              switch (status) {
                case SUSPENDED:
                  interrupt = util.left(error4);
                  status = COMPLETED;
                  step4 = interrupt;
                  run5(runTick);
                  break;
                case PENDING:
                  if (interrupt === null) {
                    interrupt = util.left(error4);
                  }
                  if (bracketCount === 0) {
                    if (status === PENDING) {
                      attempts = new Aff2(CONS, new Aff2(FINALIZER, step4(error4)), attempts, interrupt);
                    }
                    status = RETURN;
                    step4 = null;
                    fail4 = null;
                    run5(++runTick);
                  }
                  break;
                default:
                  if (interrupt === null) {
                    interrupt = util.left(error4);
                  }
                  if (bracketCount === 0) {
                    status = RETURN;
                    step4 = null;
                    fail4 = null;
                  }
              }
              return canceler;
            };
          }
          function join4(cb) {
            return function() {
              var canceler = onComplete({
                rethrow: false,
                handler: cb
              })();
              if (status === SUSPENDED) {
                run5(runTick);
              }
              return canceler;
            };
          }
          return {
            kill: kill3,
            join: join4,
            onComplete,
            isSuspended: function() {
              return status === SUSPENDED;
            },
            run: function() {
              if (status === SUSPENDED) {
                if (!Scheduler.isDraining()) {
                  Scheduler.enqueue(function() {
                    run5(runTick);
                  });
                } else {
                  run5(runTick);
                }
              }
            }
          };
        }
        function runPar(util, supervisor, par, cb) {
          var fiberId = 0;
          var fibers = {};
          var killId = 0;
          var kills = {};
          var early = new Error("[ParAff] Early exit");
          var interrupt = null;
          var root2 = EMPTY;
          function kill3(error4, par2, cb2) {
            var step4 = par2;
            var head6 = null;
            var tail3 = null;
            var count = 0;
            var kills2 = {};
            var tmp, kid;
            loop:
              while (true) {
                tmp = null;
                switch (step4.tag) {
                  case FORKED:
                    if (step4._3 === EMPTY) {
                      tmp = fibers[step4._1];
                      kills2[count++] = tmp.kill(error4, function(result) {
                        return function() {
                          count--;
                          if (count === 0) {
                            cb2(result)();
                          }
                        };
                      });
                    }
                    if (head6 === null) {
                      break loop;
                    }
                    step4 = head6._2;
                    if (tail3 === null) {
                      head6 = null;
                    } else {
                      head6 = tail3._1;
                      tail3 = tail3._2;
                    }
                    break;
                  case MAP:
                    step4 = step4._2;
                    break;
                  case APPLY:
                  case ALT:
                    if (head6) {
                      tail3 = new Aff2(CONS, head6, tail3);
                    }
                    head6 = step4;
                    step4 = step4._1;
                    break;
                }
              }
            if (count === 0) {
              cb2(util.right(void 0))();
            } else {
              kid = 0;
              tmp = count;
              for (; kid < tmp; kid++) {
                kills2[kid] = kills2[kid]();
              }
            }
            return kills2;
          }
          function join4(result, head6, tail3) {
            var fail4, step4, lhs, rhs, tmp, kid;
            if (util.isLeft(result)) {
              fail4 = result;
              step4 = null;
            } else {
              step4 = result;
              fail4 = null;
            }
            loop:
              while (true) {
                lhs = null;
                rhs = null;
                tmp = null;
                kid = null;
                if (interrupt !== null) {
                  return;
                }
                if (head6 === null) {
                  cb(fail4 || step4)();
                  return;
                }
                if (head6._3 !== EMPTY) {
                  return;
                }
                switch (head6.tag) {
                  case MAP:
                    if (fail4 === null) {
                      head6._3 = util.right(head6._1(util.fromRight(step4)));
                      step4 = head6._3;
                    } else {
                      head6._3 = fail4;
                    }
                    break;
                  case APPLY:
                    lhs = head6._1._3;
                    rhs = head6._2._3;
                    if (fail4) {
                      head6._3 = fail4;
                      tmp = true;
                      kid = killId++;
                      kills[kid] = kill3(early, fail4 === lhs ? head6._2 : head6._1, function() {
                        return function() {
                          delete kills[kid];
                          if (tmp) {
                            tmp = false;
                          } else if (tail3 === null) {
                            join4(fail4, null, null);
                          } else {
                            join4(fail4, tail3._1, tail3._2);
                          }
                        };
                      });
                      if (tmp) {
                        tmp = false;
                        return;
                      }
                    } else if (lhs === EMPTY || rhs === EMPTY) {
                      return;
                    } else {
                      step4 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                      head6._3 = step4;
                    }
                    break;
                  case ALT:
                    lhs = head6._1._3;
                    rhs = head6._2._3;
                    if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                      return;
                    }
                    if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                      fail4 = step4 === lhs ? rhs : lhs;
                      step4 = null;
                      head6._3 = fail4;
                    } else {
                      head6._3 = step4;
                      tmp = true;
                      kid = killId++;
                      kills[kid] = kill3(early, step4 === lhs ? head6._2 : head6._1, function() {
                        return function() {
                          delete kills[kid];
                          if (tmp) {
                            tmp = false;
                          } else if (tail3 === null) {
                            join4(step4, null, null);
                          } else {
                            join4(step4, tail3._1, tail3._2);
                          }
                        };
                      });
                      if (tmp) {
                        tmp = false;
                        return;
                      }
                    }
                    break;
                }
                if (tail3 === null) {
                  head6 = null;
                } else {
                  head6 = tail3._1;
                  tail3 = tail3._2;
                }
              }
          }
          function resolve(fiber) {
            return function(result) {
              return function() {
                delete fibers[fiber._1];
                fiber._3 = result;
                join4(result, fiber._2._1, fiber._2._2);
              };
            };
          }
          function run5() {
            var status = CONTINUE;
            var step4 = par;
            var head6 = null;
            var tail3 = null;
            var tmp, fid;
            loop:
              while (true) {
                tmp = null;
                fid = null;
                switch (status) {
                  case CONTINUE:
                    switch (step4.tag) {
                      case MAP:
                        if (head6) {
                          tail3 = new Aff2(CONS, head6, tail3);
                        }
                        head6 = new Aff2(MAP, step4._1, EMPTY, EMPTY);
                        step4 = step4._2;
                        break;
                      case APPLY:
                        if (head6) {
                          tail3 = new Aff2(CONS, head6, tail3);
                        }
                        head6 = new Aff2(APPLY, EMPTY, step4._2, EMPTY);
                        step4 = step4._1;
                        break;
                      case ALT:
                        if (head6) {
                          tail3 = new Aff2(CONS, head6, tail3);
                        }
                        head6 = new Aff2(ALT, EMPTY, step4._2, EMPTY);
                        step4 = step4._1;
                        break;
                      default:
                        fid = fiberId++;
                        status = RETURN;
                        tmp = step4;
                        step4 = new Aff2(FORKED, fid, new Aff2(CONS, head6, tail3), EMPTY);
                        tmp = Fiber(util, supervisor, tmp);
                        tmp.onComplete({
                          rethrow: false,
                          handler: resolve(step4)
                        })();
                        fibers[fid] = tmp;
                        if (supervisor) {
                          supervisor.register(tmp);
                        }
                    }
                    break;
                  case RETURN:
                    if (head6 === null) {
                      break loop;
                    }
                    if (head6._1 === EMPTY) {
                      head6._1 = step4;
                      status = CONTINUE;
                      step4 = head6._2;
                      head6._2 = EMPTY;
                    } else {
                      head6._2 = step4;
                      step4 = head6;
                      if (tail3 === null) {
                        head6 = null;
                      } else {
                        head6 = tail3._1;
                        tail3 = tail3._2;
                      }
                    }
                }
              }
            root2 = step4;
            for (fid = 0; fid < fiberId; fid++) {
              fibers[fid].run();
            }
          }
          function cancel(error4, cb2) {
            interrupt = util.left(error4);
            var innerKills;
            for (var kid in kills) {
              if (kills.hasOwnProperty(kid)) {
                innerKills = kills[kid];
                for (kid in innerKills) {
                  if (innerKills.hasOwnProperty(kid)) {
                    innerKills[kid]();
                  }
                }
              }
            }
            kills = null;
            var newKills = kill3(error4, root2, cb2);
            return function(killError) {
              return new Aff2(ASYNC, function(killCb) {
                return function() {
                  for (var kid2 in newKills) {
                    if (newKills.hasOwnProperty(kid2)) {
                      newKills[kid2]();
                    }
                  }
                  return nonCanceler2;
                };
              });
            };
          }
          run5();
          return function(killError) {
            return new Aff2(ASYNC, function(killCb) {
              return function() {
                return cancel(killError, killCb);
              };
            });
          };
        }
        function sequential3(util, supervisor, par) {
          return new Aff2(ASYNC, function(cb) {
            return function() {
              return runPar(util, supervisor, par, cb);
            };
          });
        }
        Aff2.EMPTY = EMPTY;
        Aff2.Pure = AffCtr(PURE);
        Aff2.Throw = AffCtr(THROW);
        Aff2.Catch = AffCtr(CATCH);
        Aff2.Sync = AffCtr(SYNC);
        Aff2.Async = AffCtr(ASYNC);
        Aff2.Bind = AffCtr(BIND);
        Aff2.Bracket = AffCtr(BRACKET);
        Aff2.Fork = AffCtr(FORK);
        Aff2.Seq = AffCtr(SEQ);
        Aff2.ParMap = AffCtr(MAP);
        Aff2.ParApply = AffCtr(APPLY);
        Aff2.ParAlt = AffCtr(ALT);
        Aff2.Fiber = Fiber;
        Aff2.Supervisor = Supervisor;
        Aff2.Scheduler = Scheduler;
        Aff2.nonCanceler = nonCanceler2;
        return Aff2;
      }();
      _pure = Aff.Pure;
      _throwError = Aff.Throw;
      _liftEffect = Aff.Sync;
      makeAff = Aff.Async;
      _delay = function() {
        function setDelay(n, k) {
          if (n === 0 && typeof setImmediate !== "undefined") {
            return setImmediate(k);
          } else {
            return setTimeout(k, n);
          }
        }
        function clearDelay(n, t) {
          if (n === 0 && typeof clearImmediate !== "undefined") {
            return clearImmediate(t);
          } else {
            return clearTimeout(t);
          }
        }
        return function(right, ms) {
          return Aff.Async(function(cb) {
            return function() {
              var timer = setDelay(ms, cb(right()));
              return function() {
                return Aff.Sync(function() {
                  return right(clearDelay(ms, timer));
                });
              };
            };
          });
        };
      }();
      _sequential = Aff.Seq;
    }
  });

  // output/Control.Monad.ST.Global/index.js
  var init_Control_Monad_ST = __esm({
    "output/Control.Monad.ST.Global/index.js"() {
      init_Unsafe();
    }
  });

  // output/Control.Monad.ST.Internal/foreign.js
  var init_foreign30 = __esm({
    "output/Control.Monad.ST.Internal/foreign.js"() {
    }
  });

  // output/Control.Monad.ST.Internal/index.js
  var init_Control_Monad_ST2 = __esm({
    "output/Control.Monad.ST.Internal/index.js"() {
      init_foreign30();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control6();
      init_Control_Monad_Rec();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data3();
      init_foreign30();
    }
  });

  // output/Control.Monad.ST.Class/index.js
  var init_Control_Monad_ST3 = __esm({
    "output/Control.Monad.ST.Class/index.js"() {
      init_Control2();
      init_Control_Monad_ST();
      init_Control_Monad_ST2();
      init_Effect();
    }
  });

  // output/Data.Functor.Contravariant/index.js
  var init_Data_Functor6 = __esm({
    "output/Data.Functor.Contravariant/index.js"() {
      init_Data4();
      init_Data12();
    }
  });

  // output/Data.Profunctor/index.js
  var dimap;
  var init_Data39 = __esm({
    "output/Data.Profunctor/index.js"() {
      init_Control2();
      init_Data24();
      dimap = function(dict) {
        return dict.dimap;
      };
    }
  });

  // output/Data.Functor.Costar/index.js
  var init_Data_Functor7 = __esm({
    "output/Data.Functor.Costar/index.js"() {
      init_Control10();
      init_Control9();
      init_Data38();
      init_Data4();
      init_Data_Functor6();
      init_Data_Functor();
      init_Data39();
      init_Data22();
    }
  });

  // output/Data.Profunctor.Star/index.js
  var init_Data_Profunctor = __esm({
    "output/Data.Profunctor.Star/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control8();
      init_Data38();
      init_Data20();
      init_Data4();
      init_Data_Functor();
      init_Data22();
    }
  });

  // output/Control.Parallel.Class/index.js
  var sequential, parallel;
  var init_Control_Parallel = __esm({
    "output/Control.Parallel.Class/index.js"() {
      init_Control4();
      init_Control5();
      init_Control_Monad_Cont2();
      init_Control_Monad_Except();
      init_Control_Monad_Maybe();
      init_Control_Monad_Reader2();
      init_Control_Monad_Writer2();
      init_Data20();
      init_Data4();
      init_Data_Functor4();
      init_Data_Functor7();
      init_Data19();
      init_Data_Profunctor();
      init_Data3();
      init_Effect4();
      init_Effect2();
      sequential = function(dict) {
        return dict.sequential;
      };
      parallel = function(dict) {
        return dict.parallel;
      };
    }
  });

  // output/Control.Parallel/index.js
  var identity10, parTraverse_, parSequence_;
  var init_Control12 = __esm({
    "output/Control.Parallel/index.js"() {
      init_Control3();
      init_Control2();
      init_Control_Parallel();
      init_Data25();
      init_Data29();
      init_Control_Parallel();
      identity10 = /* @__PURE__ */ identity(categoryFn);
      parTraverse_ = function(dictParallel) {
        var sequential3 = sequential(dictParallel);
        var traverse_7 = traverse_(dictParallel.Applicative1());
        var parallel3 = parallel(dictParallel);
        return function(dictFoldable) {
          var traverse_14 = traverse_7(dictFoldable);
          return function(f) {
            var $48 = traverse_14(function($50) {
              return parallel3(f($50));
            });
            return function($49) {
              return sequential3($48($49));
            };
          };
        };
      };
      parSequence_ = function(dictParallel) {
        var parTraverse_1 = parTraverse_(dictParallel);
        return function(dictFoldable) {
          return parTraverse_1(dictFoldable)(identity10);
        };
      };
    }
  });

  // output/Data.Time.Duration/index.js
  var init_Data_Time = __esm({
    "output/Data.Time.Duration/index.js"() {
      init_Control2();
      init_Data9();
      init_Data24();
      init_Data15();
      init_Data7();
      init_Data16();
    }
  });

  // output/Effect.Unsafe/foreign.js
  var unsafePerformEffect;
  var init_foreign31 = __esm({
    "output/Effect.Unsafe/foreign.js"() {
      unsafePerformEffect = function(f) {
        return f();
      };
    }
  });

  // output/Effect.Unsafe/index.js
  var init_Effect5 = __esm({
    "output/Effect.Unsafe/index.js"() {
      init_foreign31();
      init_foreign31();
    }
  });

  // output/Effect.Aff/index.js
  var $runtime_lazy3, pure3, $$void3, map7, Canceler, suspendAff, functorParAff, functorAff, map1, forkAff, ffiUtil, makeFiber, launchAff, launchAff_, delay, bracket, applyParAff, monadAff, bindAff, applicativeAff, $lazy_applyAff, pure22, bind1, bindFlipped3, $$finally, monadEffectAff, liftEffect2, effectCanceler, joinFiber, functorFiber, killFiber, monadThrowAff, monadErrorAff, $$try2, runAff, runAff_, parallelAff, $lazy_applicativeParAff, applicativeParAff, monadRecAff, nonCanceler;
  var init_Effect6 = __esm({
    "output/Effect.Aff/index.js"() {
      init_foreign29();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control6();
      init_Control_Monad_Error();
      init_Control_Monad_Rec();
      init_Control_Monad_ST3();
      init_Control12();
      init_Control_Parallel();
      init_Control8();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data_Time();
      init_Data3();
      init_Effect();
      init_Effect4();
      init_Effect3();
      init_Effect5();
      init_Partial2();
      init_Unsafe();
      init_foreign29();
      init_Control_Monad_Error();
      init_Control_Parallel();
      init_Data_Time();
      init_Effect3();
      $runtime_lazy3 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      pure3 = /* @__PURE__ */ pure(applicativeEffect);
      $$void3 = /* @__PURE__ */ $$void(functorEffect);
      map7 = /* @__PURE__ */ map(functorEffect);
      Canceler = function(x) {
        return x;
      };
      suspendAff = /* @__PURE__ */ _fork(false);
      functorParAff = {
        map: _parAffMap
      };
      functorAff = {
        map: _map
      };
      map1 = /* @__PURE__ */ map(functorAff);
      forkAff = /* @__PURE__ */ _fork(true);
      ffiUtil = /* @__PURE__ */ function() {
        var unsafeFromRight = function(v) {
          if (v instanceof Right) {
            return v.value0;
          }
          ;
          if (v instanceof Left) {
            return unsafeCrashWith("unsafeFromRight: Left");
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
        };
        var unsafeFromLeft = function(v) {
          if (v instanceof Left) {
            return v.value0;
          }
          ;
          if (v instanceof Right) {
            return unsafeCrashWith("unsafeFromLeft: Right");
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
        };
        var isLeft = function(v) {
          if (v instanceof Left) {
            return true;
          }
          ;
          if (v instanceof Right) {
            return false;
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
        };
        return {
          isLeft,
          fromLeft: unsafeFromLeft,
          fromRight: unsafeFromRight,
          left: Left.create,
          right: Right.create
        };
      }();
      makeFiber = function(aff) {
        return _makeFiber(ffiUtil, aff);
      };
      launchAff = function(aff) {
        return function __do4() {
          var fiber = makeFiber(aff)();
          fiber.run();
          return fiber;
        };
      };
      launchAff_ = function($74) {
        return $$void3(launchAff($74));
      };
      delay = function(v) {
        return _delay(Right.create, v);
      };
      bracket = function(acquire) {
        return function(completed) {
          return generalBracket(acquire)({
            killed: $$const(completed),
            failed: $$const(completed),
            completed: $$const(completed)
          });
        };
      };
      applyParAff = {
        apply: _parAffApply,
        Functor0: function() {
          return functorParAff;
        }
      };
      monadAff = {
        Applicative0: function() {
          return applicativeAff;
        },
        Bind1: function() {
          return bindAff;
        }
      };
      bindAff = {
        bind: _bind,
        Apply0: function() {
          return $lazy_applyAff(0);
        }
      };
      applicativeAff = {
        pure: _pure,
        Apply0: function() {
          return $lazy_applyAff(0);
        }
      };
      $lazy_applyAff = /* @__PURE__ */ $runtime_lazy3("applyAff", "Effect.Aff", function() {
        return {
          apply: ap(monadAff),
          Functor0: function() {
            return functorAff;
          }
        };
      });
      pure22 = /* @__PURE__ */ pure(applicativeAff);
      bind1 = /* @__PURE__ */ bind(bindAff);
      bindFlipped3 = /* @__PURE__ */ bindFlipped(bindAff);
      $$finally = function(fin) {
        return function(a2) {
          return bracket(pure22(unit))($$const(fin))($$const(a2));
        };
      };
      monadEffectAff = {
        liftEffect: _liftEffect,
        Monad0: function() {
          return monadAff;
        }
      };
      liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
      effectCanceler = function($75) {
        return Canceler($$const(liftEffect2($75)));
      };
      joinFiber = function(v) {
        return makeAff(function(k) {
          return map7(effectCanceler)(v.join(k));
        });
      };
      functorFiber = {
        map: function(f) {
          return function(t) {
            return unsafePerformEffect(makeFiber(map1(f)(joinFiber(t))));
          };
        }
      };
      killFiber = function(e) {
        return function(v) {
          return bind1(liftEffect2(v.isSuspended))(function(suspended) {
            if (suspended) {
              return liftEffect2($$void3(v.kill(e, $$const(pure3(unit)))));
            }
            ;
            return makeAff(function(k) {
              return map7(effectCanceler)(v.kill(e, k));
            });
          });
        };
      };
      monadThrowAff = {
        throwError: _throwError,
        Monad0: function() {
          return monadAff;
        }
      };
      monadErrorAff = {
        catchError: _catchError,
        MonadThrow0: function() {
          return monadThrowAff;
        }
      };
      $$try2 = /* @__PURE__ */ $$try(monadErrorAff);
      runAff = function(k) {
        return function(aff) {
          return launchAff(bindFlipped3(function($80) {
            return liftEffect2(k($80));
          })($$try2(aff)));
        };
      };
      runAff_ = function(k) {
        return function(aff) {
          return $$void3(runAff(k)(aff));
        };
      };
      parallelAff = {
        parallel: unsafeCoerce2,
        sequential: _sequential,
        Monad0: function() {
          return monadAff;
        },
        Applicative1: function() {
          return $lazy_applicativeParAff(0);
        }
      };
      $lazy_applicativeParAff = /* @__PURE__ */ $runtime_lazy3("applicativeParAff", "Effect.Aff", function() {
        return {
          pure: function() {
            var $82 = parallel(parallelAff);
            return function($83) {
              return $82(pure22($83));
            };
          }(),
          Apply0: function() {
            return applyParAff;
          }
        };
      });
      applicativeParAff = /* @__PURE__ */ $lazy_applicativeParAff(136);
      monadRecAff = {
        tailRecM: function(k) {
          var go2 = function(a2) {
            return bind1(k(a2))(function(res) {
              if (res instanceof Done) {
                return pure22(res.value0);
              }
              ;
              if (res instanceof Loop) {
                return go2(res.value0);
              }
              ;
              throw new Error("Failed pattern match at Effect.Aff (line 104, column 7 - line 106, column 23): " + [res.constructor.name]);
            });
          };
          return go2;
        },
        Monad0: function() {
          return monadAff;
        }
      };
      nonCanceler = /* @__PURE__ */ $$const(/* @__PURE__ */ pure22(unit));
    }
  });

  // output/Effect.Aff.Class/index.js
  var lift4, monadAffAff, liftAff, monadAffReader;
  var init_Effect_Aff = __esm({
    "output/Effect.Aff.Class/index.js"() {
      init_Control2();
      init_Control_Monad_Cont2();
      init_Control_Monad_Except();
      init_Control_Monad_List();
      init_Control_Monad_Maybe();
      init_Control_Monad_RWS();
      init_Control_Monad_Reader2();
      init_Control_Monad_State2();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer2();
      init_Effect6();
      lift4 = /* @__PURE__ */ lift(monadTransReaderT);
      monadAffAff = {
        liftAff: /* @__PURE__ */ identity(categoryFn),
        MonadEffect0: function() {
          return monadEffectAff;
        }
      };
      liftAff = function(dict) {
        return dict.liftAff;
      };
      monadAffReader = function(dictMonadAff) {
        var MonadEffect0 = dictMonadAff.MonadEffect0();
        var monadEffectReader2 = monadEffectReader(MonadEffect0);
        return {
          liftAff: function() {
            var $79 = lift4(MonadEffect0.Monad0());
            var $80 = liftAff(dictMonadAff);
            return function($81) {
              return $79($80($81));
            };
          }(),
          MonadEffect0: function() {
            return monadEffectReader2;
          }
        };
      };
    }
  });

  // output/Data.Monoid.Alternate/index.js
  var init_Data_Monoid7 = __esm({
    "output/Data.Monoid.Alternate/index.js"() {
      init_Control7();
      init_Control8();
      init_Data16();
    }
  });

  // output/Halogen.Data.OrdBox/index.js
  var OrdBox, mkOrdBox, eqOrdBox, ordOrdBox;
  var init_Halogen_Data = __esm({
    "output/Halogen.Data.OrdBox/index.js"() {
      init_Data9();
      init_Data15();
      OrdBox = /* @__PURE__ */ function() {
        function OrdBox2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        OrdBox2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new OrdBox2(value0, value1, value22);
            };
          };
        };
        return OrdBox2;
      }();
      mkOrdBox = function(dictOrd) {
        return OrdBox.create(eq(dictOrd.Eq0()))(compare(dictOrd));
      };
      eqOrdBox = {
        eq: function(v) {
          return function(v1) {
            return v.value0(v.value2)(v1.value2);
          };
        }
      };
      ordOrdBox = {
        compare: function(v) {
          return function(v1) {
            return v.value1(v.value2)(v1.value2);
          };
        },
        Eq0: function() {
          return eqOrdBox;
        }
      };
    }
  });

  // output/Halogen.Data.Slot/index.js
  var ordTuple2, pop1, lookup1, insert1, pop2, lookup3, insert2, foreachSlot, empty5;
  var init_Halogen_Data2 = __esm({
    "output/Halogen.Data.Slot/index.js"() {
      init_Data();
      init_Data25();
      init_Data_Map();
      init_Data19();
      init_Data_Monoid7();
      init_Data24();
      init_Data15();
      init_Data5();
      init_Data22();
      init_Halogen_Data();
      ordTuple2 = /* @__PURE__ */ ordTuple(ordString)(ordOrdBox);
      pop1 = /* @__PURE__ */ pop(ordTuple2);
      lookup1 = /* @__PURE__ */ lookup2(ordTuple2);
      insert1 = /* @__PURE__ */ insert(ordTuple2);
      pop2 = function() {
        return function(dictIsSymbol) {
          var reflectSymbol2 = reflectSymbol(dictIsSymbol);
          return function(dictOrd) {
            var mkOrdBox2 = mkOrdBox(dictOrd);
            return function(sym) {
              return function(key) {
                return function(v) {
                  return pop1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
                };
              };
            };
          };
        };
      };
      lookup3 = function() {
        return function(dictIsSymbol) {
          var reflectSymbol2 = reflectSymbol(dictIsSymbol);
          return function(dictOrd) {
            var mkOrdBox2 = mkOrdBox(dictOrd);
            return function(sym) {
              return function(key) {
                return function(v) {
                  return lookup1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
                };
              };
            };
          };
        };
      };
      insert2 = function() {
        return function(dictIsSymbol) {
          var reflectSymbol2 = reflectSymbol(dictIsSymbol);
          return function(dictOrd) {
            var mkOrdBox2 = mkOrdBox(dictOrd);
            return function(sym) {
              return function(key) {
                return function(val) {
                  return function(v) {
                    return insert1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(val)(v);
                  };
                };
              };
            };
          };
        };
      };
      foreachSlot = function(dictApplicative) {
        var traverse_7 = traverse_(dictApplicative)(foldableMap);
        return function(v) {
          return function(k) {
            return traverse_7(function($54) {
              return k($54);
            })(v);
          };
        };
      };
      empty5 = empty4;
    }
  });

  // output/Halogen.Query.ChildQuery/index.js
  var ChildQuery, unChildQueryBox, mkChildQueryBox;
  var init_Halogen_Query = __esm({
    "output/Halogen.Query.ChildQuery/index.js"() {
      init_Unsafe();
      ChildQuery = /* @__PURE__ */ function() {
        function ChildQuery3(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        ChildQuery3.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new ChildQuery3(value0, value1, value22);
            };
          };
        };
        return ChildQuery3;
      }();
      unChildQueryBox = unsafeCoerce2;
      mkChildQueryBox = unsafeCoerce2;
    }
  });

  // output/Data.Array/foreign.js
  var replicateFill, replicatePolyfill, replicate, fromFoldableImpl, length3, unconsImpl, indexImpl, findIndexImpl, _deleteAt, sortByImpl, slice;
  var init_foreign32 = __esm({
    "output/Data.Array/foreign.js"() {
      replicateFill = function(count) {
        return function(value17) {
          if (count < 1) {
            return [];
          }
          var result = new Array(count);
          return result.fill(value17);
        };
      };
      replicatePolyfill = function(count) {
        return function(value17) {
          var result = [];
          var n = 0;
          for (var i2 = 0; i2 < count; i2++) {
            result[n++] = value17;
          }
          return result;
        };
      };
      replicate = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
      fromFoldableImpl = function() {
        function Cons3(head6, tail3) {
          this.head = head6;
          this.tail = tail3;
        }
        var emptyList = {};
        function curryCons(head6) {
          return function(tail3) {
            return new Cons3(head6, tail3);
          };
        }
        function listToArray(list) {
          var result = [];
          var count = 0;
          var xs = list;
          while (xs !== emptyList) {
            result[count++] = xs.head;
            xs = xs.tail;
          }
          return result;
        }
        return function(foldr4) {
          return function(xs) {
            return listToArray(foldr4(curryCons)(emptyList)(xs));
          };
        };
      }();
      length3 = function(xs) {
        return xs.length;
      };
      unconsImpl = function(empty8) {
        return function(next) {
          return function(xs) {
            return xs.length === 0 ? empty8({}) : next(xs[0])(xs.slice(1));
          };
        };
      };
      indexImpl = function(just) {
        return function(nothing) {
          return function(xs) {
            return function(i2) {
              return i2 < 0 || i2 >= xs.length ? nothing : just(xs[i2]);
            };
          };
        };
      };
      findIndexImpl = function(just) {
        return function(nothing) {
          return function(f) {
            return function(xs) {
              for (var i2 = 0, l = xs.length; i2 < l; i2++) {
                if (f(xs[i2]))
                  return just(i2);
              }
              return nothing;
            };
          };
        };
      };
      _deleteAt = function(just) {
        return function(nothing) {
          return function(i2) {
            return function(l) {
              if (i2 < 0 || i2 >= l.length)
                return nothing;
              var l1 = l.slice();
              l1.splice(i2, 1);
              return just(l1);
            };
          };
        };
      };
      sortByImpl = function() {
        function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to2) {
          var mid;
          var i2;
          var j;
          var k;
          var x;
          var y;
          var c;
          mid = from3 + (to2 - from3 >> 1);
          if (mid - from3 > 1)
            mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
          if (to2 - mid > 1)
            mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to2);
          i2 = from3;
          j = mid;
          k = from3;
          while (i2 < mid && j < to2) {
            x = xs2[i2];
            y = xs2[j];
            c = fromOrdering(compare3(x)(y));
            if (c > 0) {
              xs1[k++] = y;
              ++j;
            } else {
              xs1[k++] = x;
              ++i2;
            }
          }
          while (i2 < mid) {
            xs1[k++] = xs2[i2++];
          }
          while (j < to2) {
            xs1[k++] = xs2[j++];
          }
        }
        return function(compare3) {
          return function(fromOrdering) {
            return function(xs) {
              var out;
              if (xs.length < 2)
                return xs;
              out = xs.slice(0);
              mergeFromTo(compare3, fromOrdering, out, xs.slice(0), 0, xs.length);
              return out;
            };
          };
        };
      }();
      slice = function(s) {
        return function(e) {
          return function(l) {
            return l.slice(s, e);
          };
        };
      };
    }
  });

  // output/Data.Array.ST/foreign.js
  function copyImpl(xs) {
    return function() {
      return xs.slice();
    };
  }
  var pushAll, unsafeFreeze, thaw, sortByImpl2;
  var init_foreign33 = __esm({
    "output/Data.Array.ST/foreign.js"() {
      pushAll = function(as2) {
        return function(xs) {
          return function() {
            return xs.push.apply(xs, as2);
          };
        };
      };
      unsafeFreeze = function(xs) {
        return function() {
          return xs;
        };
      };
      thaw = copyImpl;
      sortByImpl2 = function() {
        function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to2) {
          var mid;
          var i2;
          var j;
          var k;
          var x;
          var y;
          var c;
          mid = from3 + (to2 - from3 >> 1);
          if (mid - from3 > 1)
            mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
          if (to2 - mid > 1)
            mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to2);
          i2 = from3;
          j = mid;
          k = from3;
          while (i2 < mid && j < to2) {
            x = xs2[i2];
            y = xs2[j];
            c = fromOrdering(compare3(x)(y));
            if (c > 0) {
              xs1[k++] = y;
              ++j;
            } else {
              xs1[k++] = x;
              ++i2;
            }
          }
          while (i2 < mid) {
            xs1[k++] = xs2[i2++];
          }
          while (j < to2) {
            xs1[k++] = xs2[j++];
          }
        }
        return function(compare3) {
          return function(fromOrdering) {
            return function(xs) {
              return function() {
                if (xs.length < 2)
                  return xs;
                mergeFromTo(compare3, fromOrdering, xs, xs.slice(0), 0, xs.length);
                return xs;
              };
            };
          };
        };
      }();
    }
  });

  // output/Data.Array.ST/index.js
  var withArray, push;
  var init_Data_Array = __esm({
    "output/Data.Array.ST/index.js"() {
      init_foreign33();
      init_Control5();
      init_Control_Monad_ST2();
      init_Data19();
      init_Data15();
      init_Data11();
      init_foreign33();
      withArray = function(f) {
        return function(xs) {
          return function __do4() {
            var result = thaw(xs)();
            f(result)();
            return unsafeFreeze(result)();
          };
        };
      };
      push = function(a2) {
        return pushAll([a2]);
      };
    }
  });

  // output/Data.Array.ST.Iterator/index.js
  var init_Data_Array_ST = __esm({
    "output/Data.Array.ST.Iterator/index.js"() {
      init_Control_Monad_ST2();
      init_Data_Array();
      init_Data2();
      init_Data4();
      init_Data21();
      init_Data19();
    }
  });

  // output/Data.Array/index.js
  var fromJust4, append4, tail, snoc4, singleton5, $$null3, init2, index2, last2, head3, findIndex2, elemIndex, notElem2, drop2, deleteAt, deleteBy, cons3, some2, many2, concatMap, mapMaybe2;
  var init_Data40 = __esm({
    "output/Data.Array/index.js"() {
      init_foreign32();
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control11();
      init_Control_Monad_Rec();
      init_Control_Monad_ST2();
      init_Data_Array();
      init_Data_Array_ST();
      init_Data();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data27();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data29();
      init_Data22();
      init_Data32();
      init_foreign32();
      fromJust4 = /* @__PURE__ */ fromJust();
      append4 = /* @__PURE__ */ append(semigroupArray);
      tail = /* @__PURE__ */ function() {
        return unconsImpl($$const(Nothing.value))(function(v) {
          return function(xs) {
            return new Just(xs);
          };
        });
      }();
      snoc4 = function(xs) {
        return function(x) {
          return withArray(push(x))(xs)();
        };
      };
      singleton5 = function(a2) {
        return [a2];
      };
      $$null3 = function(xs) {
        return length3(xs) === 0;
      };
      init2 = function(xs) {
        if ($$null3(xs)) {
          return Nothing.value;
        }
        ;
        if (otherwise) {
          return new Just(slice(0)(length3(xs) - 1 | 0)(xs));
        }
        ;
        throw new Error("Failed pattern match at Data.Array (line 340, column 1 - line 340, column 45): " + [xs.constructor.name]);
      };
      index2 = /* @__PURE__ */ function() {
        return indexImpl(Just.create)(Nothing.value);
      }();
      last2 = function(xs) {
        return index2(xs)(length3(xs) - 1 | 0);
      };
      head3 = function(xs) {
        return index2(xs)(0);
      };
      findIndex2 = /* @__PURE__ */ function() {
        return findIndexImpl(Just.create)(Nothing.value);
      }();
      elemIndex = function(dictEq) {
        var eq22 = eq(dictEq);
        return function(x) {
          return findIndex2(function(v) {
            return eq22(v)(x);
          });
        };
      };
      notElem2 = function(dictEq) {
        var elemIndex1 = elemIndex(dictEq);
        return function(a2) {
          return function(arr) {
            return isNothing(elemIndex1(a2)(arr));
          };
        };
      };
      drop2 = function(n) {
        return function(xs) {
          var $173 = n < 1;
          if ($173) {
            return xs;
          }
          ;
          return slice(n)(length3(xs))(xs);
        };
      };
      deleteAt = /* @__PURE__ */ function() {
        return _deleteAt(Just.create)(Nothing.value);
      }();
      deleteBy = function(v) {
        return function(v1) {
          return function(v2) {
            if (v2.length === 0) {
              return [];
            }
            ;
            return maybe(v2)(function(i2) {
              return fromJust4(deleteAt(i2)(v2));
            })(findIndex2(v(v1))(v2));
          };
        };
      };
      cons3 = function(x) {
        return function(xs) {
          return append4([x])(xs);
        };
      };
      some2 = function(dictAlternative) {
        var apply12 = apply(dictAlternative.Applicative0().Apply0());
        var map310 = map(dictAlternative.Plus1().Alt0().Functor0());
        return function(dictLazy) {
          var defer5 = defer(dictLazy);
          return function(v) {
            return apply12(map310(cons3)(v))(defer5(function(v1) {
              return many2(dictAlternative)(dictLazy)(v);
            }));
          };
        };
      };
      many2 = function(dictAlternative) {
        var alt9 = alt(dictAlternative.Plus1().Alt0());
        var pure113 = pure(dictAlternative.Applicative0());
        return function(dictLazy) {
          return function(v) {
            return alt9(some2(dictAlternative)(dictLazy)(v))(pure113([]));
          };
        };
      };
      concatMap = /* @__PURE__ */ flip(/* @__PURE__ */ bind(bindArray));
      mapMaybe2 = function(f) {
        return concatMap(function() {
          var $191 = maybe([])(singleton5);
          return function($192) {
            return $191(f($192));
          };
        }());
      };
    }
  });

  // output/Unsafe.Reference/foreign.js
  function reallyUnsafeRefEq(a2) {
    return function(b2) {
      return a2 === b2;
    };
  }
  var init_foreign34 = __esm({
    "output/Unsafe.Reference/foreign.js"() {
    }
  });

  // output/Unsafe.Reference/index.js
  var unsafeRefEq;
  var init_Unsafe2 = __esm({
    "output/Unsafe.Reference/index.js"() {
      init_foreign34();
      init_Data9();
      init_foreign34();
      unsafeRefEq = reallyUnsafeRefEq;
    }
  });

  // output/Halogen.Subscription/index.js
  var $$void4, coerce3, bind3, append5, traverse_2, traverse_1, unsubscribe, subscribe, notify, makeEmitter, functorEmitter, create;
  var init_Halogen = __esm({
    "output/Halogen.Subscription/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data40();
      init_Data25();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data3();
      init_Effect();
      init_Effect2();
      init_Effect5();
      init_Safe();
      init_Unsafe2();
      $$void4 = /* @__PURE__ */ $$void(functorEffect);
      coerce3 = /* @__PURE__ */ coerce();
      bind3 = /* @__PURE__ */ bind(bindEffect);
      append5 = /* @__PURE__ */ append(semigroupArray);
      traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect);
      traverse_1 = /* @__PURE__ */ traverse_2(foldableArray);
      unsubscribe = function(v) {
        return v;
      };
      subscribe = function(v) {
        return function(k) {
          return v(function($76) {
            return $$void4(k($76));
          });
        };
      };
      notify = function(v) {
        return function(a2) {
          return v(a2);
        };
      };
      makeEmitter = coerce3;
      functorEmitter = {
        map: function(f) {
          return function(v) {
            return function(k) {
              return v(function($77) {
                return k(f($77));
              });
            };
          };
        }
      };
      create = function __do() {
        var subscribers = $$new([])();
        return {
          emitter: function(k) {
            return function __do4() {
              modify_(function(v) {
                return append5(v)([k]);
              })(subscribers)();
              return modify_(deleteBy(unsafeRefEq)(k))(subscribers);
            };
          },
          listener: function(a2) {
            return bind3(read(subscribers))(traverse_1(function(k) {
              return k(a2);
            }));
          }
        };
      };
    }
  });

  // output/Halogen.Query.HalogenM/index.js
  var identity11, lookup4, over2, SubscriptionId, ForkId, State, Subscribe, Unsubscribe, Lift2, ChildQuery2, Raise, Par, Fork, Join, Kill, GetRef, HalogenAp, HalogenM, subscribe2, raise, query, ordSubscriptionId, ordForkId, monadTransHalogenM, monadHalogenM, monadStateHalogenM, monadEffectHalogenM, monadAffHalogenM, hoist, functorHalogenM, bindHalogenM, bind4, applicativeHalogenM, pure4, monadRecHalogenM;
  var init_Halogen_Query2 = __esm({
    "output/Halogen.Query.HalogenM/index.js"() {
      init_Control4();
      init_Control_Applicative();
      init_Control5();
      init_Control2();
      init_Control_Monad_Error();
      init_Control_Monad();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_Writer();
      init_Data23();
      init_Data9();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data_Map();
      init_Data19();
      init_Data24();
      init_Data15();
      init_Data29();
      init_Data22();
      init_Data3();
      init_Effect_Aff();
      init_Effect4();
      init_Halogen_Data2();
      init_Halogen_Query();
      init_Halogen();
      identity11 = /* @__PURE__ */ identity(categoryFn);
      lookup4 = /* @__PURE__ */ lookup3();
      over2 = /* @__PURE__ */ over()();
      SubscriptionId = function(x) {
        return x;
      };
      ForkId = function(x) {
        return x;
      };
      State = /* @__PURE__ */ function() {
        function State2(value0) {
          this.value0 = value0;
        }
        ;
        State2.create = function(value0) {
          return new State2(value0);
        };
        return State2;
      }();
      Subscribe = /* @__PURE__ */ function() {
        function Subscribe2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Subscribe2.create = function(value0) {
          return function(value1) {
            return new Subscribe2(value0, value1);
          };
        };
        return Subscribe2;
      }();
      Unsubscribe = /* @__PURE__ */ function() {
        function Unsubscribe2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Unsubscribe2.create = function(value0) {
          return function(value1) {
            return new Unsubscribe2(value0, value1);
          };
        };
        return Unsubscribe2;
      }();
      Lift2 = /* @__PURE__ */ function() {
        function Lift4(value0) {
          this.value0 = value0;
        }
        ;
        Lift4.create = function(value0) {
          return new Lift4(value0);
        };
        return Lift4;
      }();
      ChildQuery2 = /* @__PURE__ */ function() {
        function ChildQuery3(value0) {
          this.value0 = value0;
        }
        ;
        ChildQuery3.create = function(value0) {
          return new ChildQuery3(value0);
        };
        return ChildQuery3;
      }();
      Raise = /* @__PURE__ */ function() {
        function Raise4(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Raise4.create = function(value0) {
          return function(value1) {
            return new Raise4(value0, value1);
          };
        };
        return Raise4;
      }();
      Par = /* @__PURE__ */ function() {
        function Par2(value0) {
          this.value0 = value0;
        }
        ;
        Par2.create = function(value0) {
          return new Par2(value0);
        };
        return Par2;
      }();
      Fork = /* @__PURE__ */ function() {
        function Fork2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Fork2.create = function(value0) {
          return function(value1) {
            return new Fork2(value0, value1);
          };
        };
        return Fork2;
      }();
      Join = /* @__PURE__ */ function() {
        function Join2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Join2.create = function(value0) {
          return function(value1) {
            return new Join2(value0, value1);
          };
        };
        return Join2;
      }();
      Kill = /* @__PURE__ */ function() {
        function Kill2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Kill2.create = function(value0) {
          return function(value1) {
            return new Kill2(value0, value1);
          };
        };
        return Kill2;
      }();
      GetRef = /* @__PURE__ */ function() {
        function GetRef2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        GetRef2.create = function(value0) {
          return function(value1) {
            return new GetRef2(value0, value1);
          };
        };
        return GetRef2;
      }();
      HalogenAp = function(x) {
        return x;
      };
      HalogenM = function(x) {
        return x;
      };
      subscribe2 = function(es) {
        return liftF(new Subscribe(function(v) {
          return es;
        }, identity11));
      };
      raise = function(o) {
        return liftF(new Raise(o, unit));
      };
      query = function() {
        return function(dictIsSymbol) {
          var lookup13 = lookup4(dictIsSymbol);
          return function(dictOrd) {
            var lookup23 = lookup13(dictOrd);
            return function(label5) {
              return function(p2) {
                return function(q2) {
                  return liftF(new ChildQuery2(mkChildQueryBox(new ChildQuery(function(dictApplicative) {
                    var pure113 = pure(dictApplicative);
                    return function(k) {
                      var $177 = maybe(pure113(Nothing.value))(k);
                      var $178 = lookup23(label5)(p2);
                      return function($179) {
                        return $177($178($179));
                      };
                    };
                  }, q2, identity11))));
                };
              };
            };
          };
        };
      };
      ordSubscriptionId = ordInt;
      ordForkId = ordInt;
      monadTransHalogenM = {
        lift: function(dictMonad) {
          return function($180) {
            return HalogenM(liftF(Lift2.create($180)));
          };
        }
      };
      monadHalogenM = freeMonad;
      monadStateHalogenM = {
        state: function($181) {
          return HalogenM(liftF(State.create($181)));
        },
        Monad0: function() {
          return monadHalogenM;
        }
      };
      monadEffectHalogenM = function(dictMonadEffect) {
        return {
          liftEffect: function() {
            var $186 = liftEffect(dictMonadEffect);
            return function($187) {
              return HalogenM(liftF(Lift2.create($186($187))));
            };
          }(),
          Monad0: function() {
            return monadHalogenM;
          }
        };
      };
      monadAffHalogenM = function(dictMonadAff) {
        var monadEffectHalogenM1 = monadEffectHalogenM(dictMonadAff.MonadEffect0());
        return {
          liftAff: function() {
            var $188 = liftAff(dictMonadAff);
            return function($189) {
              return HalogenM(liftF(Lift2.create($188($189))));
            };
          }(),
          MonadEffect0: function() {
            return monadEffectHalogenM1;
          }
        };
      };
      hoist = function(dictFunctor) {
        return function(nat) {
          return function(v) {
            var go2 = function(v1) {
              if (v1 instanceof State) {
                return new State(v1.value0);
              }
              ;
              if (v1 instanceof Subscribe) {
                return new Subscribe(v1.value0, v1.value1);
              }
              ;
              if (v1 instanceof Unsubscribe) {
                return new Unsubscribe(v1.value0, v1.value1);
              }
              ;
              if (v1 instanceof Lift2) {
                return new Lift2(nat(v1.value0));
              }
              ;
              if (v1 instanceof ChildQuery2) {
                return new ChildQuery2(v1.value0);
              }
              ;
              if (v1 instanceof Raise) {
                return new Raise(v1.value0, v1.value1);
              }
              ;
              if (v1 instanceof Par) {
                return new Par(over2(HalogenAp)(hoistFreeAp(hoist(dictFunctor)(nat)))(v1.value0));
              }
              ;
              if (v1 instanceof Fork) {
                return new Fork(hoist(dictFunctor)(nat)(v1.value0), v1.value1);
              }
              ;
              if (v1 instanceof Join) {
                return new Join(v1.value0, v1.value1);
              }
              ;
              if (v1 instanceof Kill) {
                return new Kill(v1.value0, v1.value1);
              }
              ;
              if (v1 instanceof GetRef) {
                return new GetRef(v1.value0, v1.value1);
              }
              ;
              throw new Error("Failed pattern match at Halogen.Query.HalogenM (line 312, column 8 - line 323, column 29): " + [v1.constructor.name]);
            };
            return hoistFree(go2)(v);
          };
        };
      };
      functorHalogenM = freeFunctor;
      bindHalogenM = freeBind;
      bind4 = /* @__PURE__ */ bind(bindHalogenM);
      applicativeHalogenM = freeApplicative;
      pure4 = /* @__PURE__ */ pure(applicativeHalogenM);
      monadRecHalogenM = {
        tailRecM: function(k) {
          return function(a2) {
            return bind4(k(a2))(function(v) {
              if (v instanceof Loop) {
                return tailRecM(monadRecHalogenM)(k)(v.value0);
              }
              ;
              if (v instanceof Done) {
                return pure4(v.value0);
              }
              ;
              throw new Error("Failed pattern match at Halogen.Query.HalogenM (line 105, column 26 - line 107, column 21): " + [v.constructor.name]);
            });
          };
        },
        Monad0: function() {
          return monadHalogenM;
        }
      };
    }
  });

  // output/Undefined/foreign.js
  var undefined2;
  var init_foreign35 = __esm({
    "output/Undefined/foreign.js"() {
      undefined2 = undefined2;
    }
  });

  // output/Undefined/index.js
  var init_Undefined = __esm({
    "output/Undefined/index.js"() {
      init_foreign35();
      init_foreign35();
    }
  });

  // output/App.Capability.Now/index.js
  var lift5, nowTime, nowEffect, nowDateTime, nowDate, now, nowHalogenM;
  var init_App_Capability = __esm({
    "output/App.Capability.Now/index.js"() {
      init_Control_Monad_Trans();
      init_Effect();
      init_Halogen_Query2();
      init_Undefined();
      lift5 = /* @__PURE__ */ lift(monadTransHalogenM);
      nowTime = function(dict) {
        return dict.nowTime;
      };
      nowEffect = {
        now: undefined2,
        nowDate: undefined2,
        nowTime: undefined2,
        nowDateTime: undefined2,
        Monad0: function() {
          return monadEffect;
        }
      };
      nowDateTime = function(dict) {
        return dict.nowDateTime;
      };
      nowDate = function(dict) {
        return dict.nowDate;
      };
      now = function(dict) {
        return dict.now;
      };
      nowHalogenM = function(dictNow) {
        var lift1 = lift5(dictNow.Monad0());
        return {
          now: lift1(now(dictNow)),
          nowDate: lift1(nowDate(dictNow)),
          nowTime: lift1(nowTime(dictNow)),
          nowDateTime: lift1(nowDateTime(dictNow)),
          Monad0: function() {
            return monadHalogenM;
          }
        };
      };
    }
  });

  // output/Data.DateTime/foreign.js
  var init_foreign36 = __esm({
    "output/Data.DateTime/foreign.js"() {
    }
  });

  // output/Data.Date/foreign.js
  function canonicalDateImpl(ctor, y, m, d) {
    var date2 = createDate(y, m - 1, d);
    return ctor(date2.getUTCFullYear())(date2.getUTCMonth() + 1)(date2.getUTCDate());
  }
  function calcWeekday(y, m, d) {
    return createDate(y, m - 1, d).getUTCDay();
  }
  var createDate;
  var init_foreign37 = __esm({
    "output/Data.Date/foreign.js"() {
      createDate = function(y, m, d) {
        var date2 = new Date(Date.UTC(y, m, d));
        if (y >= 0 && y < 100) {
          date2.setUTCFullYear(y);
        }
        return date2;
      };
    }
  });

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }
  var init_foreign38 = __esm({
    "output/Data.Enum/foreign.js"() {
    }
  });

  // output/Control.Alternative/index.js
  var init_Control13 = __esm({
    "output/Control.Alternative/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control8();
      init_Data4();
      init_Data3();
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control8();
      init_Data4();
    }
  });

  // output/Data.Enum/index.js
  var bottom1, top1, toEnum, fromEnum, toEnumWithDefaults, defaultSucc, defaultPred, charToEnum, enumChar, boundedEnumChar;
  var init_Data41 = __esm({
    "output/Data.Enum/index.js"() {
      init_foreign38();
      init_Control13();
      init_Control3();
      init_Control5();
      init_Data();
      init_Data18();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data22();
      init_Data32();
      init_Data31();
      init_Data3();
      bottom1 = /* @__PURE__ */ bottom(boundedChar);
      top1 = /* @__PURE__ */ top(boundedChar);
      toEnum = function(dict) {
        return dict.toEnum;
      };
      fromEnum = function(dict) {
        return dict.fromEnum;
      };
      toEnumWithDefaults = function(dictBoundedEnum) {
        var toEnum1 = toEnum(dictBoundedEnum);
        var fromEnum12 = fromEnum(dictBoundedEnum);
        var bottom22 = bottom(dictBoundedEnum.Bounded0());
        return function(low2) {
          return function(high2) {
            return function(x) {
              var v = toEnum1(x);
              if (v instanceof Just) {
                return v.value0;
              }
              ;
              if (v instanceof Nothing) {
                var $140 = x < fromEnum12(bottom22);
                if ($140) {
                  return low2;
                }
                ;
                return high2;
              }
              ;
              throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): " + [v.constructor.name]);
            };
          };
        };
      };
      defaultSucc = function(toEnum$prime) {
        return function(fromEnum$prime) {
          return function(a2) {
            return toEnum$prime(fromEnum$prime(a2) + 1 | 0);
          };
        };
      };
      defaultPred = function(toEnum$prime) {
        return function(fromEnum$prime) {
          return function(a2) {
            return toEnum$prime(fromEnum$prime(a2) - 1 | 0);
          };
        };
      };
      charToEnum = function(v) {
        if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
          return new Just(fromCharCode(v));
        }
        ;
        return Nothing.value;
      };
      enumChar = {
        succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
        pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
        Ord0: function() {
          return ordChar;
        }
      };
      boundedEnumChar = /* @__PURE__ */ function() {
        return {
          cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
          toEnum: charToEnum,
          fromEnum: toCharCode,
          Bounded0: function() {
            return boundedChar;
          },
          Enum1: function() {
            return enumChar;
          }
        };
      }();
    }
  });

  // output/Data.Date.Component/index.js
  var $runtime_lazy4, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, January, February, March, April, May, June, July, August, September, October, November, December, showWeekday, showMonth, ordYear, ordDay, eqWeekday, ordWeekday, eqMonth, ordMonth, boundedYear, boundedWeekday, boundedMonth, boundedEnumYear, $lazy_enumYear, boundedEnumWeekday, $lazy_enumWeekday, boundedEnumMonth, $lazy_enumMonth, boundedDay, boundedEnumDay, $lazy_enumDay;
  var init_Data_Date = __esm({
    "output/Data.Date.Component/index.js"() {
      init_Data();
      init_Data41();
      init_Data9();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      $runtime_lazy4 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      Monday = /* @__PURE__ */ function() {
        function Monday2() {
        }
        ;
        Monday2.value = new Monday2();
        return Monday2;
      }();
      Tuesday = /* @__PURE__ */ function() {
        function Tuesday2() {
        }
        ;
        Tuesday2.value = new Tuesday2();
        return Tuesday2;
      }();
      Wednesday = /* @__PURE__ */ function() {
        function Wednesday2() {
        }
        ;
        Wednesday2.value = new Wednesday2();
        return Wednesday2;
      }();
      Thursday = /* @__PURE__ */ function() {
        function Thursday2() {
        }
        ;
        Thursday2.value = new Thursday2();
        return Thursday2;
      }();
      Friday = /* @__PURE__ */ function() {
        function Friday2() {
        }
        ;
        Friday2.value = new Friday2();
        return Friday2;
      }();
      Saturday = /* @__PURE__ */ function() {
        function Saturday2() {
        }
        ;
        Saturday2.value = new Saturday2();
        return Saturday2;
      }();
      Sunday = /* @__PURE__ */ function() {
        function Sunday2() {
        }
        ;
        Sunday2.value = new Sunday2();
        return Sunday2;
      }();
      January = /* @__PURE__ */ function() {
        function January2() {
        }
        ;
        January2.value = new January2();
        return January2;
      }();
      February = /* @__PURE__ */ function() {
        function February2() {
        }
        ;
        February2.value = new February2();
        return February2;
      }();
      March = /* @__PURE__ */ function() {
        function March2() {
        }
        ;
        March2.value = new March2();
        return March2;
      }();
      April = /* @__PURE__ */ function() {
        function April2() {
        }
        ;
        April2.value = new April2();
        return April2;
      }();
      May = /* @__PURE__ */ function() {
        function May2() {
        }
        ;
        May2.value = new May2();
        return May2;
      }();
      June = /* @__PURE__ */ function() {
        function June2() {
        }
        ;
        June2.value = new June2();
        return June2;
      }();
      July = /* @__PURE__ */ function() {
        function July2() {
        }
        ;
        July2.value = new July2();
        return July2;
      }();
      August = /* @__PURE__ */ function() {
        function August2() {
        }
        ;
        August2.value = new August2();
        return August2;
      }();
      September = /* @__PURE__ */ function() {
        function September2() {
        }
        ;
        September2.value = new September2();
        return September2;
      }();
      October = /* @__PURE__ */ function() {
        function October2() {
        }
        ;
        October2.value = new October2();
        return October2;
      }();
      November = /* @__PURE__ */ function() {
        function November2() {
        }
        ;
        November2.value = new November2();
        return November2;
      }();
      December = /* @__PURE__ */ function() {
        function December2() {
        }
        ;
        December2.value = new December2();
        return December2;
      }();
      showWeekday = {
        show: function(v) {
          if (v instanceof Monday) {
            return "Monday";
          }
          ;
          if (v instanceof Tuesday) {
            return "Tuesday";
          }
          ;
          if (v instanceof Wednesday) {
            return "Wednesday";
          }
          ;
          if (v instanceof Thursday) {
            return "Thursday";
          }
          ;
          if (v instanceof Friday) {
            return "Friday";
          }
          ;
          if (v instanceof Saturday) {
            return "Saturday";
          }
          ;
          if (v instanceof Sunday) {
            return "Sunday";
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [v.constructor.name]);
        }
      };
      showMonth = {
        show: function(v) {
          if (v instanceof January) {
            return "January";
          }
          ;
          if (v instanceof February) {
            return "February";
          }
          ;
          if (v instanceof March) {
            return "March";
          }
          ;
          if (v instanceof April) {
            return "April";
          }
          ;
          if (v instanceof May) {
            return "May";
          }
          ;
          if (v instanceof June) {
            return "June";
          }
          ;
          if (v instanceof July) {
            return "July";
          }
          ;
          if (v instanceof August) {
            return "August";
          }
          ;
          if (v instanceof September) {
            return "September";
          }
          ;
          if (v instanceof October) {
            return "October";
          }
          ;
          if (v instanceof November) {
            return "November";
          }
          ;
          if (v instanceof December) {
            return "December";
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [v.constructor.name]);
        }
      };
      ordYear = ordInt;
      ordDay = ordInt;
      eqWeekday = {
        eq: function(x) {
          return function(y) {
            if (x instanceof Monday && y instanceof Monday) {
              return true;
            }
            ;
            if (x instanceof Tuesday && y instanceof Tuesday) {
              return true;
            }
            ;
            if (x instanceof Wednesday && y instanceof Wednesday) {
              return true;
            }
            ;
            if (x instanceof Thursday && y instanceof Thursday) {
              return true;
            }
            ;
            if (x instanceof Friday && y instanceof Friday) {
              return true;
            }
            ;
            if (x instanceof Saturday && y instanceof Saturday) {
              return true;
            }
            ;
            if (x instanceof Sunday && y instanceof Sunday) {
              return true;
            }
            ;
            return false;
          };
        }
      };
      ordWeekday = {
        compare: function(x) {
          return function(y) {
            if (x instanceof Monday && y instanceof Monday) {
              return EQ.value;
            }
            ;
            if (x instanceof Monday) {
              return LT.value;
            }
            ;
            if (y instanceof Monday) {
              return GT.value;
            }
            ;
            if (x instanceof Tuesday && y instanceof Tuesday) {
              return EQ.value;
            }
            ;
            if (x instanceof Tuesday) {
              return LT.value;
            }
            ;
            if (y instanceof Tuesday) {
              return GT.value;
            }
            ;
            if (x instanceof Wednesday && y instanceof Wednesday) {
              return EQ.value;
            }
            ;
            if (x instanceof Wednesday) {
              return LT.value;
            }
            ;
            if (y instanceof Wednesday) {
              return GT.value;
            }
            ;
            if (x instanceof Thursday && y instanceof Thursday) {
              return EQ.value;
            }
            ;
            if (x instanceof Thursday) {
              return LT.value;
            }
            ;
            if (y instanceof Thursday) {
              return GT.value;
            }
            ;
            if (x instanceof Friday && y instanceof Friday) {
              return EQ.value;
            }
            ;
            if (x instanceof Friday) {
              return LT.value;
            }
            ;
            if (y instanceof Friday) {
              return GT.value;
            }
            ;
            if (x instanceof Saturday && y instanceof Saturday) {
              return EQ.value;
            }
            ;
            if (x instanceof Saturday) {
              return LT.value;
            }
            ;
            if (y instanceof Saturday) {
              return GT.value;
            }
            ;
            if (x instanceof Sunday && y instanceof Sunday) {
              return EQ.value;
            }
            ;
            throw new Error("Failed pattern match at Data.Date.Component (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
          };
        },
        Eq0: function() {
          return eqWeekday;
        }
      };
      eqMonth = {
        eq: function(x) {
          return function(y) {
            if (x instanceof January && y instanceof January) {
              return true;
            }
            ;
            if (x instanceof February && y instanceof February) {
              return true;
            }
            ;
            if (x instanceof March && y instanceof March) {
              return true;
            }
            ;
            if (x instanceof April && y instanceof April) {
              return true;
            }
            ;
            if (x instanceof May && y instanceof May) {
              return true;
            }
            ;
            if (x instanceof June && y instanceof June) {
              return true;
            }
            ;
            if (x instanceof July && y instanceof July) {
              return true;
            }
            ;
            if (x instanceof August && y instanceof August) {
              return true;
            }
            ;
            if (x instanceof September && y instanceof September) {
              return true;
            }
            ;
            if (x instanceof October && y instanceof October) {
              return true;
            }
            ;
            if (x instanceof November && y instanceof November) {
              return true;
            }
            ;
            if (x instanceof December && y instanceof December) {
              return true;
            }
            ;
            return false;
          };
        }
      };
      ordMonth = {
        compare: function(x) {
          return function(y) {
            if (x instanceof January && y instanceof January) {
              return EQ.value;
            }
            ;
            if (x instanceof January) {
              return LT.value;
            }
            ;
            if (y instanceof January) {
              return GT.value;
            }
            ;
            if (x instanceof February && y instanceof February) {
              return EQ.value;
            }
            ;
            if (x instanceof February) {
              return LT.value;
            }
            ;
            if (y instanceof February) {
              return GT.value;
            }
            ;
            if (x instanceof March && y instanceof March) {
              return EQ.value;
            }
            ;
            if (x instanceof March) {
              return LT.value;
            }
            ;
            if (y instanceof March) {
              return GT.value;
            }
            ;
            if (x instanceof April && y instanceof April) {
              return EQ.value;
            }
            ;
            if (x instanceof April) {
              return LT.value;
            }
            ;
            if (y instanceof April) {
              return GT.value;
            }
            ;
            if (x instanceof May && y instanceof May) {
              return EQ.value;
            }
            ;
            if (x instanceof May) {
              return LT.value;
            }
            ;
            if (y instanceof May) {
              return GT.value;
            }
            ;
            if (x instanceof June && y instanceof June) {
              return EQ.value;
            }
            ;
            if (x instanceof June) {
              return LT.value;
            }
            ;
            if (y instanceof June) {
              return GT.value;
            }
            ;
            if (x instanceof July && y instanceof July) {
              return EQ.value;
            }
            ;
            if (x instanceof July) {
              return LT.value;
            }
            ;
            if (y instanceof July) {
              return GT.value;
            }
            ;
            if (x instanceof August && y instanceof August) {
              return EQ.value;
            }
            ;
            if (x instanceof August) {
              return LT.value;
            }
            ;
            if (y instanceof August) {
              return GT.value;
            }
            ;
            if (x instanceof September && y instanceof September) {
              return EQ.value;
            }
            ;
            if (x instanceof September) {
              return LT.value;
            }
            ;
            if (y instanceof September) {
              return GT.value;
            }
            ;
            if (x instanceof October && y instanceof October) {
              return EQ.value;
            }
            ;
            if (x instanceof October) {
              return LT.value;
            }
            ;
            if (y instanceof October) {
              return GT.value;
            }
            ;
            if (x instanceof November && y instanceof November) {
              return EQ.value;
            }
            ;
            if (x instanceof November) {
              return LT.value;
            }
            ;
            if (y instanceof November) {
              return GT.value;
            }
            ;
            if (x instanceof December && y instanceof December) {
              return EQ.value;
            }
            ;
            throw new Error("Failed pattern match at Data.Date.Component (line 0, column 0 - line 0, column 0): " + [x.constructor.name, y.constructor.name]);
          };
        },
        Eq0: function() {
          return eqMonth;
        }
      };
      boundedYear = /* @__PURE__ */ function() {
        return {
          bottom: -271820 | 0,
          top: 275759,
          Ord0: function() {
            return ordYear;
          }
        };
      }();
      boundedWeekday = /* @__PURE__ */ function() {
        return {
          bottom: Monday.value,
          top: Sunday.value,
          Ord0: function() {
            return ordWeekday;
          }
        };
      }();
      boundedMonth = /* @__PURE__ */ function() {
        return {
          bottom: January.value,
          top: December.value,
          Ord0: function() {
            return ordMonth;
          }
        };
      }();
      boundedEnumYear = {
        cardinality: 547580,
        toEnum: function(n) {
          if (n >= (-271820 | 0) && n <= 275759) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedYear;
        },
        Enum1: function() {
          return $lazy_enumYear(0);
        }
      };
      $lazy_enumYear = /* @__PURE__ */ $runtime_lazy4("enumYear", "Data.Date.Component", function() {
        return {
          succ: function() {
            var $55 = toEnum(boundedEnumYear);
            var $56 = fromEnum(boundedEnumYear);
            return function($57) {
              return $55(function(v) {
                return v + 1 | 0;
              }($56($57)));
            };
          }(),
          pred: function() {
            var $58 = toEnum(boundedEnumYear);
            var $59 = fromEnum(boundedEnumYear);
            return function($60) {
              return $58(function(v) {
                return v - 1 | 0;
              }($59($60)));
            };
          }(),
          Ord0: function() {
            return ordYear;
          }
        };
      });
      boundedEnumWeekday = {
        cardinality: 7,
        toEnum: function(v) {
          if (v === 1) {
            return new Just(Monday.value);
          }
          ;
          if (v === 2) {
            return new Just(Tuesday.value);
          }
          ;
          if (v === 3) {
            return new Just(Wednesday.value);
          }
          ;
          if (v === 4) {
            return new Just(Thursday.value);
          }
          ;
          if (v === 5) {
            return new Just(Friday.value);
          }
          ;
          if (v === 6) {
            return new Just(Saturday.value);
          }
          ;
          if (v === 7) {
            return new Just(Sunday.value);
          }
          ;
          return Nothing.value;
        },
        fromEnum: function(v) {
          if (v instanceof Monday) {
            return 1;
          }
          ;
          if (v instanceof Tuesday) {
            return 2;
          }
          ;
          if (v instanceof Wednesday) {
            return 3;
          }
          ;
          if (v instanceof Thursday) {
            return 4;
          }
          ;
          if (v instanceof Friday) {
            return 5;
          }
          ;
          if (v instanceof Saturday) {
            return 6;
          }
          ;
          if (v instanceof Sunday) {
            return 7;
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [v.constructor.name]);
        },
        Bounded0: function() {
          return boundedWeekday;
        },
        Enum1: function() {
          return $lazy_enumWeekday(0);
        }
      };
      $lazy_enumWeekday = /* @__PURE__ */ $runtime_lazy4("enumWeekday", "Data.Date.Component", function() {
        return {
          succ: function() {
            var $61 = toEnum(boundedEnumWeekday);
            var $62 = fromEnum(boundedEnumWeekday);
            return function($63) {
              return $61(function(v) {
                return v + 1 | 0;
              }($62($63)));
            };
          }(),
          pred: function() {
            var $64 = toEnum(boundedEnumWeekday);
            var $65 = fromEnum(boundedEnumWeekday);
            return function($66) {
              return $64(function(v) {
                return v - 1 | 0;
              }($65($66)));
            };
          }(),
          Ord0: function() {
            return ordWeekday;
          }
        };
      });
      boundedEnumMonth = {
        cardinality: 12,
        toEnum: function(v) {
          if (v === 1) {
            return new Just(January.value);
          }
          ;
          if (v === 2) {
            return new Just(February.value);
          }
          ;
          if (v === 3) {
            return new Just(March.value);
          }
          ;
          if (v === 4) {
            return new Just(April.value);
          }
          ;
          if (v === 5) {
            return new Just(May.value);
          }
          ;
          if (v === 6) {
            return new Just(June.value);
          }
          ;
          if (v === 7) {
            return new Just(July.value);
          }
          ;
          if (v === 8) {
            return new Just(August.value);
          }
          ;
          if (v === 9) {
            return new Just(September.value);
          }
          ;
          if (v === 10) {
            return new Just(October.value);
          }
          ;
          if (v === 11) {
            return new Just(November.value);
          }
          ;
          if (v === 12) {
            return new Just(December.value);
          }
          ;
          return Nothing.value;
        },
        fromEnum: function(v) {
          if (v instanceof January) {
            return 1;
          }
          ;
          if (v instanceof February) {
            return 2;
          }
          ;
          if (v instanceof March) {
            return 3;
          }
          ;
          if (v instanceof April) {
            return 4;
          }
          ;
          if (v instanceof May) {
            return 5;
          }
          ;
          if (v instanceof June) {
            return 6;
          }
          ;
          if (v instanceof July) {
            return 7;
          }
          ;
          if (v instanceof August) {
            return 8;
          }
          ;
          if (v instanceof September) {
            return 9;
          }
          ;
          if (v instanceof October) {
            return 10;
          }
          ;
          if (v instanceof November) {
            return 11;
          }
          ;
          if (v instanceof December) {
            return 12;
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [v.constructor.name]);
        },
        Bounded0: function() {
          return boundedMonth;
        },
        Enum1: function() {
          return $lazy_enumMonth(0);
        }
      };
      $lazy_enumMonth = /* @__PURE__ */ $runtime_lazy4("enumMonth", "Data.Date.Component", function() {
        return {
          succ: function() {
            var $67 = toEnum(boundedEnumMonth);
            var $68 = fromEnum(boundedEnumMonth);
            return function($69) {
              return $67(function(v) {
                return v + 1 | 0;
              }($68($69)));
            };
          }(),
          pred: function() {
            var $70 = toEnum(boundedEnumMonth);
            var $71 = fromEnum(boundedEnumMonth);
            return function($72) {
              return $70(function(v) {
                return v - 1 | 0;
              }($71($72)));
            };
          }(),
          Ord0: function() {
            return ordMonth;
          }
        };
      });
      boundedDay = {
        bottom: 1,
        top: 31,
        Ord0: function() {
          return ordDay;
        }
      };
      boundedEnumDay = {
        cardinality: 31,
        toEnum: function(n) {
          if (n >= 1 && n <= 31) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedDay;
        },
        Enum1: function() {
          return $lazy_enumDay(0);
        }
      };
      $lazy_enumDay = /* @__PURE__ */ $runtime_lazy4("enumDay", "Data.Date.Component", function() {
        return {
          succ: function() {
            var $73 = toEnum(boundedEnumDay);
            var $74 = fromEnum(boundedEnumDay);
            return function($75) {
              return $73(function(v) {
                return v + 1 | 0;
              }($74($75)));
            };
          }(),
          pred: function() {
            var $76 = toEnum(boundedEnumDay);
            var $77 = fromEnum(boundedEnumDay);
            return function($78) {
              return $76(function(v) {
                return v - 1 | 0;
              }($77($78)));
            };
          }(),
          Ord0: function() {
            return ordDay;
          }
        };
      });
    }
  });

  // output/Data.Int/foreign.js
  var fromNumberImpl, toNumber;
  var init_foreign39 = __esm({
    "output/Data.Int/foreign.js"() {
      fromNumberImpl = function(just) {
        return function(nothing) {
          return function(n) {
            return (n | 0) === n ? just(n) : nothing;
          };
        };
      };
      toNumber = function(n) {
        return n;
      };
    }
  });

  // output/Data.Number/foreign.js
  var isFiniteImpl, floor;
  var init_foreign40 = __esm({
    "output/Data.Number/foreign.js"() {
      isFiniteImpl = isFinite;
      floor = Math.floor;
    }
  });

  // output/Data.Number/index.js
  var init_Data42 = __esm({
    "output/Data.Number/index.js"() {
      init_foreign40();
      init_Data19();
      init_foreign40();
    }
  });

  // output/Data.Int/index.js
  var top2, bottom2, fromNumber, unsafeClamp, floor2;
  var init_Data43 = __esm({
    "output/Data.Int/index.js"() {
      init_foreign39();
      init_Control2();
      init_Data();
      init_Data18();
      init_Data9();
      init_Data19();
      init_Data42();
      init_Data11();
      init_Data6();
      init_foreign39();
      top2 = /* @__PURE__ */ top(boundedInt);
      bottom2 = /* @__PURE__ */ bottom(boundedInt);
      fromNumber = /* @__PURE__ */ function() {
        return fromNumberImpl(Just.create)(Nothing.value);
      }();
      unsafeClamp = function(x) {
        if (!isFiniteImpl(x)) {
          return 0;
        }
        ;
        if (x >= toNumber(top2)) {
          return top2;
        }
        ;
        if (x <= toNumber(bottom2)) {
          return bottom2;
        }
        ;
        if (otherwise) {
          return fromMaybe(0)(fromNumber(x));
        }
        ;
        throw new Error("Failed pattern match at Data.Int (line 72, column 1 - line 72, column 29): " + [x.constructor.name]);
      };
      floor2 = function($39) {
        return unsafeClamp(floor($39));
      };
    }
  });

  // output/Data.Date/index.js
  var fromEnum2, fromJust5, toEnum2, toEnum22, $$Date, year, weekday, month, day, canonicalDate;
  var init_Data44 = __esm({
    "output/Data.Date/index.js"() {
      init_foreign37();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data();
      init_Data18();
      init_Data_Date();
      init_Data41();
      init_Data9();
      init_Data10();
      init_Data2();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data_Time();
      init_Data_Date();
      fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
      fromJust5 = /* @__PURE__ */ fromJust();
      toEnum2 = /* @__PURE__ */ toEnum(boundedEnumWeekday);
      toEnum22 = /* @__PURE__ */ toEnum(boundedEnumMonth);
      $$Date = /* @__PURE__ */ function() {
        function $$Date2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        $$Date2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new $$Date2(value0, value1, value22);
            };
          };
        };
        return $$Date2;
      }();
      year = function(v) {
        return v.value0;
      };
      weekday = function(v) {
        var n = calcWeekday(v.value0, fromEnum2(v.value1), v.value2);
        var $86 = n === 0;
        if ($86) {
          return fromJust5(toEnum2(7));
        }
        ;
        return fromJust5(toEnum2(n));
      };
      month = function(v) {
        return v.value1;
      };
      day = function(v) {
        return v.value2;
      };
      canonicalDate = function(y) {
        return function(m) {
          return function(d) {
            var mkDate = function(y$prime) {
              return function(m$prime) {
                return function(d$prime) {
                  return new $$Date(y$prime, fromJust5(toEnum22(m$prime)), d$prime);
                };
              };
            };
            return canonicalDateImpl(mkDate, y, fromEnum2(m), d);
          };
        };
      };
    }
  });

  // output/Data.Time.Component/index.js
  var $runtime_lazy5, ordSecond, ordMinute, ordMillisecond, ordHour, boundedSecond, boundedMinute, boundedMillisecond, boundedHour, boundedEnumSecond, $lazy_enumSecond, boundedEnumMinute, $lazy_enumMinute, boundedEnumMillisecond, $lazy_enumMillisecond, boundedEnumHour, $lazy_enumHour;
  var init_Data_Time2 = __esm({
    "output/Data.Time.Component/index.js"() {
      init_Data();
      init_Data41();
      init_Data9();
      init_Data19();
      init_Data15();
      init_Data16();
      $runtime_lazy5 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      ordSecond = ordInt;
      ordMinute = ordInt;
      ordMillisecond = ordInt;
      ordHour = ordInt;
      boundedSecond = {
        bottom: 0,
        top: 59,
        Ord0: function() {
          return ordSecond;
        }
      };
      boundedMinute = {
        bottom: 0,
        top: 59,
        Ord0: function() {
          return ordMinute;
        }
      };
      boundedMillisecond = {
        bottom: 0,
        top: 999,
        Ord0: function() {
          return ordMillisecond;
        }
      };
      boundedHour = {
        bottom: 0,
        top: 23,
        Ord0: function() {
          return ordHour;
        }
      };
      boundedEnumSecond = {
        cardinality: 60,
        toEnum: function(n) {
          if (n >= 0 && n <= 59) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedSecond;
        },
        Enum1: function() {
          return $lazy_enumSecond(0);
        }
      };
      $lazy_enumSecond = /* @__PURE__ */ $runtime_lazy5("enumSecond", "Data.Time.Component", function() {
        return {
          succ: function() {
            var $36 = toEnum(boundedEnumSecond);
            var $37 = fromEnum(boundedEnumSecond);
            return function($38) {
              return $36(function(v) {
                return v + 1 | 0;
              }($37($38)));
            };
          }(),
          pred: function() {
            var $39 = toEnum(boundedEnumSecond);
            var $40 = fromEnum(boundedEnumSecond);
            return function($41) {
              return $39(function(v) {
                return v - 1 | 0;
              }($40($41)));
            };
          }(),
          Ord0: function() {
            return ordSecond;
          }
        };
      });
      boundedEnumMinute = {
        cardinality: 60,
        toEnum: function(n) {
          if (n >= 0 && n <= 59) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedMinute;
        },
        Enum1: function() {
          return $lazy_enumMinute(0);
        }
      };
      $lazy_enumMinute = /* @__PURE__ */ $runtime_lazy5("enumMinute", "Data.Time.Component", function() {
        return {
          succ: function() {
            var $42 = toEnum(boundedEnumMinute);
            var $43 = fromEnum(boundedEnumMinute);
            return function($44) {
              return $42(function(v) {
                return v + 1 | 0;
              }($43($44)));
            };
          }(),
          pred: function() {
            var $45 = toEnum(boundedEnumMinute);
            var $46 = fromEnum(boundedEnumMinute);
            return function($47) {
              return $45(function(v) {
                return v - 1 | 0;
              }($46($47)));
            };
          }(),
          Ord0: function() {
            return ordMinute;
          }
        };
      });
      boundedEnumMillisecond = {
        cardinality: 1e3,
        toEnum: function(n) {
          if (n >= 0 && n <= 999) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedMillisecond;
        },
        Enum1: function() {
          return $lazy_enumMillisecond(0);
        }
      };
      $lazy_enumMillisecond = /* @__PURE__ */ $runtime_lazy5("enumMillisecond", "Data.Time.Component", function() {
        return {
          succ: function() {
            var $48 = toEnum(boundedEnumMillisecond);
            var $49 = fromEnum(boundedEnumMillisecond);
            return function($50) {
              return $48(function(v) {
                return v + 1 | 0;
              }($49($50)));
            };
          }(),
          pred: function() {
            var $51 = toEnum(boundedEnumMillisecond);
            var $52 = fromEnum(boundedEnumMillisecond);
            return function($53) {
              return $51(function(v) {
                return v - 1 | 0;
              }($52($53)));
            };
          }(),
          Ord0: function() {
            return ordMillisecond;
          }
        };
      });
      boundedEnumHour = {
        cardinality: 24,
        toEnum: function(n) {
          if (n >= 0 && n <= 23) {
            return new Just(n);
          }
          ;
          if (otherwise) {
            return Nothing.value;
          }
          ;
          throw new Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [n.constructor.name]);
        },
        fromEnum: function(v) {
          return v;
        },
        Bounded0: function() {
          return boundedHour;
        },
        Enum1: function() {
          return $lazy_enumHour(0);
        }
      };
      $lazy_enumHour = /* @__PURE__ */ $runtime_lazy5("enumHour", "Data.Time.Component", function() {
        return {
          succ: function() {
            var $54 = toEnum(boundedEnumHour);
            var $55 = fromEnum(boundedEnumHour);
            return function($56) {
              return $54(function(v) {
                return v + 1 | 0;
              }($55($56)));
            };
          }(),
          pred: function() {
            var $57 = toEnum(boundedEnumHour);
            var $58 = fromEnum(boundedEnumHour);
            return function($59) {
              return $57(function(v) {
                return v - 1 | 0;
              }($58($59)));
            };
          }(),
          Ord0: function() {
            return ordHour;
          }
        };
      });
    }
  });

  // output/Data.Time/index.js
  var Time, second, minute, millisecond, hour;
  var init_Data45 = __esm({
    "output/Data.Time/index.js"() {
      init_Control3();
      init_Data18();
      init_Data41();
      init_Data9();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data24();
      init_Data42();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data_Time2();
      init_Data_Time();
      init_Data22();
      Time = /* @__PURE__ */ function() {
        function Time2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Time2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Time2(value0, value1, value22, value32);
              };
            };
          };
        };
        return Time2;
      }();
      second = function(v) {
        return v.value2;
      };
      minute = function(v) {
        return v.value1;
      };
      millisecond = function(v) {
        return v.value3;
      };
      hour = function(v) {
        return v.value0;
      };
    }
  });

  // output/Data.DateTime/index.js
  var DateTime, time, date;
  var init_Data46 = __esm({
    "output/Data.DateTime/index.js"() {
      init_foreign36();
      init_Control3();
      init_Control5();
      init_Data18();
      init_Data44();
      init_Data_Date();
      init_Data41();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data45();
      init_Data_Time2();
      init_Data_Time();
      init_Data44();
      init_Data45();
      DateTime = /* @__PURE__ */ function() {
        function DateTime2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        DateTime2.create = function(value0) {
          return function(value1) {
            return new DateTime2(value0, value1);
          };
        };
        return DateTime2;
      }();
      time = function(v) {
        return v.value1;
      };
      date = function(v) {
        return v.value0;
      };
    }
  });

  // output/Control.Monad.State/index.js
  var init_Control_Monad2 = __esm({
    "output/Control.Monad.State/index.js"() {
      init_Control_Monad_State();
      init_Control_Monad_State2();
      init_Data26();
      init_Data24();
      init_Control_Monad_State();
      init_Control_Monad_State2();
    }
  });

  // output/Data.DateTime.Instant/foreign.js
  function fromDateTimeImpl(y, mo, d, h, mi, s, ms) {
    return createDateTime(y, mo - 1, d, h, mi, s, ms).getTime();
  }
  function toDateTimeImpl(ctor) {
    return function(instant2) {
      var dt2 = new Date(instant2);
      return ctor(dt2.getUTCFullYear())(dt2.getUTCMonth() + 1)(dt2.getUTCDate())(dt2.getUTCHours())(dt2.getUTCMinutes())(dt2.getUTCSeconds())(dt2.getUTCMilliseconds());
    };
  }
  var createDateTime;
  var init_foreign41 = __esm({
    "output/Data.DateTime.Instant/foreign.js"() {
      createDateTime = function(y, m, d, h, mi, s, ms) {
        var dateTime3 = new Date(Date.UTC(y, m, d, h, mi, s, ms));
        if (y >= 0 && y < 100) {
          dateTime3.setUTCFullYear(y);
        }
        return dateTime3;
      };
    }
  });

  // output/Data.DateTime.Instant/index.js
  var fromJust6, toEnum3, fromEnum3, unInstant, toDateTime, fromDateTime;
  var init_Data_DateTime = __esm({
    "output/Data.DateTime.Instant/index.js"() {
      init_foreign41();
      init_Data();
      init_Data18();
      init_Data44();
      init_Data_Date();
      init_Data46();
      init_Data41();
      init_Data19();
      init_Data13();
      init_Data16();
      init_Data45();
      init_Data_Time2();
      init_Data_Time();
      fromJust6 = /* @__PURE__ */ fromJust();
      toEnum3 = /* @__PURE__ */ toEnum(boundedEnumMonth);
      fromEnum3 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
      unInstant = function(v) {
        return v;
      };
      toDateTime = /* @__PURE__ */ function() {
        var mkDateTime = function(y) {
          return function(mo) {
            return function(d) {
              return function(h) {
                return function(mi) {
                  return function(s) {
                    return function(ms) {
                      return new DateTime(canonicalDate(y)(fromJust6(toEnum3(mo)))(d), new Time(h, mi, s, ms));
                    };
                  };
                };
              };
            };
          };
        };
        return toDateTimeImpl(mkDateTime);
      }();
      fromDateTime = function(v) {
        return fromDateTimeImpl(year(v.value0), fromEnum3(month(v.value0)), day(v.value0), hour(v.value1), minute(v.value1), second(v.value1), millisecond(v.value1));
      };
    }
  });

  // output/Data.Formatter.Internal/index.js
  var init_Data_Formatter = __esm({
    "output/Data.Formatter.Internal/index.js"() {
      init_Data25();
      init_Data14();
      init_Data13();
    }
  });

  // output/Data.Show.Generic/foreign.js
  var intercalate3;
  var init_foreign42 = __esm({
    "output/Data.Show.Generic/foreign.js"() {
      intercalate3 = function(separator) {
        return function(xs) {
          return xs.join(separator);
        };
      };
    }
  });

  // output/Data.Show.Generic/index.js
  var append6, genericShowArgsArgument, genericShowArgs, genericShowConstructor, genericShow$prime, genericShow;
  var init_Data_Show = __esm({
    "output/Data.Show.Generic/index.js"() {
      init_foreign42();
      init_Data_Generic();
      init_Data13();
      init_Data16();
      init_Data5();
      init_Type();
      append6 = /* @__PURE__ */ append(semigroupArray);
      genericShowArgsArgument = function(dictShow) {
        var show9 = show(dictShow);
        return {
          genericShowArgs: function(v) {
            return [show9(v)];
          }
        };
      };
      genericShowArgs = function(dict) {
        return dict.genericShowArgs;
      };
      genericShowConstructor = function(dictGenericShowArgs) {
        var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
        return function(dictIsSymbol) {
          var reflectSymbol2 = reflectSymbol(dictIsSymbol);
          return {
            "genericShow'": function(v) {
              var ctor = reflectSymbol2($$Proxy.value);
              var v1 = genericShowArgs1(v);
              if (v1.length === 0) {
                return ctor;
              }
              ;
              return "(" + (intercalate3(" ")(append6([ctor])(v1)) + ")");
            }
          };
        };
      };
      genericShow$prime = function(dict) {
        return dict["genericShow'"];
      };
      genericShow = function(dictGeneric) {
        var from3 = from(dictGeneric);
        return function(dictGenericShow) {
          var genericShow$prime1 = genericShow$prime(dictGenericShow);
          return function(x) {
            return genericShow$prime1(from3(x));
          };
        };
      };
    }
  });

  // output/Parsing/index.js
  var unwrap3, ParseState, ParseError, More, Lift3, Stop, lazyParserT, functorParserT, applyParserT, bindParserT, bindFlipped4, applicativeParserT, monadParserT, monadThrowParseErrorParse, throwError2, altParserT, stateParserT, runParserT$prime, position, parseErrorPosition, parseErrorMessage, initialPos, runParserT, runParserT1, runParser, failWithPosition, fail, plusParserT, alternativeParserT;
  var init_Parsing = __esm({
    "output/Parsing/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Error();
      init_Control_Monad_Except();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Data20();
      init_Data9();
      init_Data4();
      init_Data37();
      init_Data19();
      init_Data14();
      init_Data24();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data16();
      init_Data_Show();
      init_Data22();
      init_Data3();
      unwrap3 = /* @__PURE__ */ unwrap();
      ParseState = /* @__PURE__ */ function() {
        function ParseState2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        ParseState2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new ParseState2(value0, value1, value22);
            };
          };
        };
        return ParseState2;
      }();
      ParseError = /* @__PURE__ */ function() {
        function ParseError2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        ParseError2.create = function(value0) {
          return function(value1) {
            return new ParseError2(value0, value1);
          };
        };
        return ParseError2;
      }();
      More = /* @__PURE__ */ function() {
        function More2(value0) {
          this.value0 = value0;
        }
        ;
        More2.create = function(value0) {
          return new More2(value0);
        };
        return More2;
      }();
      Lift3 = /* @__PURE__ */ function() {
        function Lift4(value0) {
          this.value0 = value0;
        }
        ;
        Lift4.create = function(value0) {
          return new Lift4(value0);
        };
        return Lift4;
      }();
      Stop = /* @__PURE__ */ function() {
        function Stop2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Stop2.create = function(value0) {
          return function(value1) {
            return new Stop2(value0, value1);
          };
        };
        return Stop2;
      }();
      lazyParserT = {
        defer: function(f) {
          var m = defer2(f);
          return function(state1, more, lift1, $$throw2, done) {
            var v = force(m);
            return v(state1, more, lift1, $$throw2, done);
          };
        }
      };
      functorParserT = {
        map: function(f) {
          return function(v) {
            return function(state1, more, lift1, $$throw2, done) {
              return more(function(v1) {
                return v(state1, more, lift1, $$throw2, function(state22, a2) {
                  return more(function(v2) {
                    return done(state22, f(a2));
                  });
                });
              });
            };
          };
        }
      };
      applyParserT = {
        apply: function(v) {
          return function(v1) {
            return function(state1, more, lift1, $$throw2, done) {
              return more(function(v2) {
                return v(state1, more, lift1, $$throw2, function(state22, f) {
                  return more(function(v3) {
                    return v1(state22, more, lift1, $$throw2, function(state3, a2) {
                      return more(function(v4) {
                        return done(state3, f(a2));
                      });
                    });
                  });
                });
              });
            };
          };
        },
        Functor0: function() {
          return functorParserT;
        }
      };
      bindParserT = {
        bind: function(v) {
          return function(next) {
            return function(state1, more, lift1, $$throw2, done) {
              return more(function(v1) {
                return v(state1, more, lift1, $$throw2, function(state22, a2) {
                  return more(function(v2) {
                    var v3 = next(a2);
                    return v3(state22, more, lift1, $$throw2, done);
                  });
                });
              });
            };
          };
        },
        Apply0: function() {
          return applyParserT;
        }
      };
      bindFlipped4 = /* @__PURE__ */ bindFlipped(bindParserT);
      applicativeParserT = {
        pure: function(a2) {
          return function(state1, v, v1, v2, done) {
            return done(state1, a2);
          };
        },
        Apply0: function() {
          return applyParserT;
        }
      };
      monadParserT = {
        Applicative0: function() {
          return applicativeParserT;
        },
        Bind1: function() {
          return bindParserT;
        }
      };
      monadThrowParseErrorParse = {
        throwError: function(err) {
          return function(state1, v, v1, $$throw2, v2) {
            return $$throw2(state1, err);
          };
        },
        Monad0: function() {
          return monadParserT;
        }
      };
      throwError2 = /* @__PURE__ */ throwError(monadThrowParseErrorParse);
      altParserT = {
        alt: function(v) {
          return function(v1) {
            return function(v2, more, lift1, $$throw2, done) {
              return more(function(v3) {
                return v(new ParseState(v2.value0, v2.value1, false), more, lift1, function(v4, err) {
                  return more(function(v5) {
                    if (v4.value2) {
                      return $$throw2(v4, err);
                    }
                    ;
                    return v1(v2, more, lift1, $$throw2, done);
                  });
                }, done);
              });
            };
          };
        },
        Functor0: function() {
          return functorParserT;
        }
      };
      stateParserT = function(k) {
        return function(state1, v, v1, v2, done) {
          var v3 = k(state1);
          return done(v3.value1, v3.value0);
        };
      };
      runParserT$prime = function(dictMonadRec) {
        var Monad0 = dictMonadRec.Monad0();
        var map45 = map(Monad0.Bind1().Apply0().Functor0());
        var pure113 = pure(Monad0.Applicative0());
        var tailRecM4 = tailRecM(dictMonadRec);
        return function(state1) {
          return function(v) {
            var go2 = function($copy_step) {
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(step4) {
                var v1 = step4(unit);
                if (v1 instanceof More) {
                  $copy_step = v1.value0;
                  return;
                }
                ;
                if (v1 instanceof Lift3) {
                  $tco_done = true;
                  return map45(Loop.create)(v1.value0);
                }
                ;
                if (v1 instanceof Stop) {
                  $tco_done = true;
                  return pure113(new Done(new Tuple(v1.value1, v1.value0)));
                }
                ;
                throw new Error("Failed pattern match at Parsing (line 152, column 13 - line 158, column 32): " + [v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($copy_step);
              }
              ;
              return $tco_result;
            };
            return tailRecM4(go2)(function(v1) {
              return v(state1, More.create, Lift3.create, function(state22, err) {
                return new Stop(state22, new Left(err));
              }, function(state22, res) {
                return new Stop(state22, new Right(res));
              });
            });
          };
        };
      };
      position = /* @__PURE__ */ stateParserT(function(v) {
        return new Tuple(v.value1, v);
      });
      parseErrorPosition = function(v) {
        return v.value1;
      };
      parseErrorMessage = function(v) {
        return v.value0;
      };
      initialPos = {
        index: 0,
        line: 1,
        column: 1
      };
      runParserT = function(dictMonadRec) {
        var map45 = map(dictMonadRec.Monad0().Bind1().Apply0().Functor0());
        var runParserT$prime1 = runParserT$prime(dictMonadRec);
        return function(s) {
          return function(p2) {
            var initialState = new ParseState(s, initialPos, false);
            return map45(fst)(runParserT$prime1(initialState)(p2));
          };
        };
      };
      runParserT1 = /* @__PURE__ */ runParserT(monadRecIdentity);
      runParser = function(s) {
        var $281 = runParserT1(s);
        return function($282) {
          return unwrap3($281($282));
        };
      };
      failWithPosition = function(message3) {
        return function(pos) {
          return throwError2(new ParseError(message3, pos));
        };
      };
      fail = function(message3) {
        return bindFlipped4(failWithPosition(message3))(position);
      };
      plusParserT = {
        empty: /* @__PURE__ */ fail("No alternative"),
        Alt0: function() {
          return altParserT;
        }
      };
      alternativeParserT = {
        Applicative0: function() {
          return applicativeParserT;
        },
        Plus1: function() {
          return plusParserT;
        }
      };
    }
  });

  // output/Parsing.Combinators/index.js
  var alt2, defer3, empty6, withLazyErrorMessage, $$try3, choice;
  var init_Parsing2 = __esm({
    "output/Parsing.Combinators/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control11();
      init_Control_Monad_Error();
      init_Control_Monad_Rec();
      init_Control8();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List4();
      init_Data_List3();
      init_Data_List();
      init_Data19();
      init_Data16();
      init_Data22();
      init_Data32();
      init_Data31();
      init_Data3();
      init_Parsing();
      init_Control8();
      init_Data_List4();
      init_Data32();
      init_Data31();
      alt2 = /* @__PURE__ */ alt(altParserT);
      defer3 = /* @__PURE__ */ defer(lazyParserT);
      empty6 = /* @__PURE__ */ empty(plusParserT);
      withLazyErrorMessage = function(p2) {
        return function(msg) {
          return alt2(p2)(defer3(function(v) {
            return fail("Expected " + msg(unit));
          }));
        };
      };
      $$try3 = function(v) {
        return function(v1, more, lift9, $$throw2, done) {
          return v(v1, more, lift9, function(v2, err) {
            return $$throw2(new ParseState(v2.value0, v2.value1, v1.value2), err);
          }, done);
        };
      };
      choice = function(dictFoldable) {
        var go2 = function(p1) {
          return function(v) {
            if (v instanceof Nothing) {
              return new Just(p1);
            }
            ;
            if (v instanceof Just) {
              return new Just(alt2(p1)(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Parsing.Combinators (line 358, column 11 - line 360, column 32): " + [v.constructor.name]);
          };
        };
        var $95 = fromMaybe(empty6);
        var $96 = foldr(dictFoldable)(go2)(Nothing.value);
        return function($97) {
          return $95($96($97));
        };
      };
    }
  });

  // output/Data.Array.NonEmpty.Internal/foreign.js
  var foldr1Impl, foldl1Impl, traverse1Impl;
  var init_foreign43 = __esm({
    "output/Data.Array.NonEmpty.Internal/foreign.js"() {
      foldr1Impl = function(f) {
        return function(xs) {
          var acc = xs[xs.length - 1];
          for (var i2 = xs.length - 2; i2 >= 0; i2--) {
            acc = f(xs[i2])(acc);
          }
          return acc;
        };
      };
      foldl1Impl = function(f) {
        return function(xs) {
          var acc = xs[0];
          var len = xs.length;
          for (var i2 = 1; i2 < len; i2++) {
            acc = f(acc)(xs[i2]);
          }
          return acc;
        };
      };
      traverse1Impl = function() {
        function Cont(fn) {
          this.fn = fn;
        }
        var emptyList = {};
        var ConsCell = function(head6, tail3) {
          this.head = head6;
          this.tail = tail3;
        };
        function finalCell(head6) {
          return new ConsCell(head6, emptyList);
        }
        function consList(x) {
          return function(xs) {
            return new ConsCell(x, xs);
          };
        }
        function listToArray(list) {
          var arr = [];
          var xs = list;
          while (xs !== emptyList) {
            arr.push(xs.head);
            xs = xs.tail;
          }
          return arr;
        }
        return function(apply6) {
          return function(map45) {
            return function(f) {
              var buildFrom = function(x, ys) {
                return apply6(map45(consList)(f(x)))(ys);
              };
              var go2 = function(acc, currentLen, xs) {
                if (currentLen === 0) {
                  return acc;
                } else {
                  var last4 = xs[currentLen - 1];
                  return new Cont(function() {
                    var built = go2(buildFrom(last4, acc), currentLen - 1, xs);
                    return built;
                  });
                }
              };
              return function(array) {
                var acc = map45(finalCell)(f(array[array.length - 1]));
                var result = go2(acc, array.length - 1, array);
                while (result instanceof Cont) {
                  result = result.fn();
                }
                return map45(listToArray)(result);
              };
            };
          };
        };
      }();
    }
  });

  // output/Data.Array.NonEmpty.Internal/index.js
  var NonEmptyArray, semigroupNonEmptyArray, functorNonEmptyArray, foldableNonEmptyArray, foldable1NonEmptyArray;
  var init_Data_Array_NonEmpty = __esm({
    "output/Data.Array.NonEmpty.Internal/index.js"() {
      init_foreign43();
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control6();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data4();
      init_Data27();
      init_Data15();
      init_Data13();
      init_Data_Semigroup();
      init_Data_Semigroup2();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data31();
      NonEmptyArray = function(x) {
        return x;
      };
      semigroupNonEmptyArray = semigroupArray;
      functorNonEmptyArray = functorArray;
      foldableNonEmptyArray = foldableArray;
      foldable1NonEmptyArray = {
        foldMap1: function(dictSemigroup) {
          return foldMap1DefaultL(foldable1NonEmptyArray)(functorNonEmptyArray)(dictSemigroup);
        },
        foldr1: foldr1Impl,
        foldl1: foldl1Impl,
        Foldable0: function() {
          return foldableNonEmptyArray;
        }
      };
    }
  });

  // output/Data.Array.NonEmpty/index.js
  var intercalate1, fromJust7, unsafeFromArray, toArray, snoc$prime, snoc5, singleton6, intercalate4, fromArray, cons$prime2, adaptMaybe, head4, init3, last3, tail2, adaptAny, unsafeAdapt, cons4;
  var init_Data_Array2 = __esm({
    "output/Data.Array.NonEmpty/index.js"() {
      init_Control5();
      init_Data40();
      init_Data_Array_NonEmpty();
      init_Data23();
      init_Data();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data33();
      init_Data15();
      init_Data13();
      init_Data_Semigroup();
      init_Data22();
      init_Data31();
      init_Safe();
      init_Unsafe();
      intercalate1 = /* @__PURE__ */ intercalate(foldable1NonEmptyArray);
      fromJust7 = /* @__PURE__ */ fromJust();
      unsafeFromArray = NonEmptyArray;
      toArray = function(v) {
        return v;
      };
      snoc$prime = function(xs) {
        return function(x) {
          return unsafeFromArray(snoc4(xs)(x));
        };
      };
      snoc5 = function(xs) {
        return function(x) {
          return unsafeFromArray(snoc4(toArray(xs))(x));
        };
      };
      singleton6 = function($110) {
        return unsafeFromArray(singleton5($110));
      };
      intercalate4 = function(dictSemigroup) {
        return intercalate1(dictSemigroup);
      };
      fromArray = function(xs) {
        if (length3(xs) > 0) {
          return new Just(unsafeFromArray(xs));
        }
        ;
        if (otherwise) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Array.NonEmpty (line 161, column 1 - line 161, column 58): " + [xs.constructor.name]);
      };
      cons$prime2 = function(x) {
        return function(xs) {
          return unsafeFromArray(cons3(x)(xs));
        };
      };
      adaptMaybe = function(f) {
        return function($126) {
          return fromJust7(f(toArray($126)));
        };
      };
      head4 = /* @__PURE__ */ adaptMaybe(head3);
      init3 = /* @__PURE__ */ adaptMaybe(init2);
      last3 = /* @__PURE__ */ adaptMaybe(last2);
      tail2 = /* @__PURE__ */ adaptMaybe(tail);
      adaptAny = function(f) {
        return function($128) {
          return f(toArray($128));
        };
      };
      unsafeAdapt = function(f) {
        var $129 = adaptAny(f);
        return function($130) {
          return unsafeFromArray($129($130));
        };
      };
      cons4 = function(x) {
        return unsafeAdapt(cons3(x));
      };
    }
  });

  // output/Data.Function.Uncurried/foreign.js
  var mkFn5, runFn2, runFn3, runFn4;
  var init_foreign44 = __esm({
    "output/Data.Function.Uncurried/foreign.js"() {
      mkFn5 = function(fn) {
        return function(a2, b2, c, d, e) {
          return fn(a2)(b2)(c)(d)(e);
        };
      };
      runFn2 = function(fn) {
        return function(a2) {
          return function(b2) {
            return fn(a2, b2);
          };
        };
      };
      runFn3 = function(fn) {
        return function(a2) {
          return function(b2) {
            return function(c) {
              return fn(a2, b2, c);
            };
          };
        };
      };
      runFn4 = function(fn) {
        return function(a2) {
          return function(b2) {
            return function(c) {
              return function(d) {
                return fn(a2, b2, c, d);
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Function.Uncurried/index.js
  var init_Data_Function = __esm({
    "output/Data.Function.Uncurried/index.js"() {
      init_foreign44();
      init_foreign44();
    }
  });

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom, hasStringIterator, hasFromCodePoint, hasCodePointAt, _unsafeCodePointAt0, _codePointAt, _singleton, _take, _toCodePointArray;
  var init_foreign45 = __esm({
    "output/Data.String.CodePoints/foreign.js"() {
      hasArrayFrom = typeof Array.from === "function";
      hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
      hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
      hasCodePointAt = typeof String.prototype.codePointAt === "function";
      _unsafeCodePointAt0 = function(fallback) {
        return hasCodePointAt ? function(str) {
          return str.codePointAt(0);
        } : fallback;
      };
      _codePointAt = function(fallback) {
        return function(Just2) {
          return function(Nothing2) {
            return function(unsafeCodePointAt02) {
              return function(index4) {
                return function(str) {
                  var length11 = str.length;
                  if (index4 < 0 || index4 >= length11)
                    return Nothing2;
                  if (hasStringIterator) {
                    var iter = str[Symbol.iterator]();
                    for (var i2 = index4; ; --i2) {
                      var o = iter.next();
                      if (o.done)
                        return Nothing2;
                      if (i2 === 0)
                        return Just2(unsafeCodePointAt02(o.value));
                    }
                  }
                  return fallback(index4)(str);
                };
              };
            };
          };
        };
      };
      _singleton = function(fallback) {
        return hasFromCodePoint ? String.fromCodePoint : fallback;
      };
      _take = function(fallback) {
        return function(n) {
          if (hasStringIterator) {
            return function(str) {
              var accum = "";
              var iter = str[Symbol.iterator]();
              for (var i2 = 0; i2 < n; ++i2) {
                var o = iter.next();
                if (o.done)
                  return accum;
                accum += o.value;
              }
              return accum;
            };
          }
          return fallback(n);
        };
      };
      _toCodePointArray = function(fallback) {
        return function(unsafeCodePointAt02) {
          if (hasArrayFrom) {
            return function(str) {
              return Array.from(str, unsafeCodePointAt02);
            };
          }
          return fallback;
        };
      };
    }
  });

  // output/Data.String.CodeUnits/foreign.js
  var fromCharArray, toCharArray, singleton7, length5, _indexOf, take3, drop3, splitAt2;
  var init_foreign46 = __esm({
    "output/Data.String.CodeUnits/foreign.js"() {
      fromCharArray = function(a2) {
        return a2.join("");
      };
      toCharArray = function(s) {
        return s.split("");
      };
      singleton7 = function(c) {
        return c;
      };
      length5 = function(s) {
        return s.length;
      };
      _indexOf = function(just) {
        return function(nothing) {
          return function(x) {
            return function(s) {
              var i2 = s.indexOf(x);
              return i2 === -1 ? nothing : just(i2);
            };
          };
        };
      };
      take3 = function(n) {
        return function(s) {
          return s.substr(0, n);
        };
      };
      drop3 = function(n) {
        return function(s) {
          return s.substring(n);
        };
      };
      splitAt2 = function(i2) {
        return function(s) {
          return { before: s.substring(0, i2), after: s.substring(i2) };
        };
      };
    }
  });

  // output/Data.String.Unsafe/foreign.js
  var charAt;
  var init_foreign47 = __esm({
    "output/Data.String.Unsafe/foreign.js"() {
      charAt = function(i2) {
        return function(s) {
          if (i2 >= 0 && i2 < s.length)
            return s.charAt(i2);
          throw new Error("Data.String.Unsafe.charAt: Invalid index.");
        };
      };
    }
  });

  // output/Data.String.Unsafe/index.js
  var init_Data_String = __esm({
    "output/Data.String.Unsafe/index.js"() {
      init_foreign47();
      init_foreign47();
    }
  });

  // output/Data.String.CodeUnits/index.js
  var stripPrefix, indexOf;
  var init_Data_String2 = __esm({
    "output/Data.String.CodeUnits/index.js"() {
      init_foreign46();
      init_Data19();
      init_Data_String();
      init_foreign46();
      stripPrefix = function(v) {
        return function(str) {
          var v1 = splitAt2(length5(v))(str);
          var $20 = v1.before === v;
          if ($20) {
            return new Just(v1.after);
          }
          ;
          return Nothing.value;
        };
      };
      indexOf = /* @__PURE__ */ function() {
        return _indexOf(Just.create)(Nothing.value);
      }();
    }
  });

  // output/Data.String.Common/foreign.js
  var split, joinWith;
  var init_foreign48 = __esm({
    "output/Data.String.Common/foreign.js"() {
      split = function(sep) {
        return function(s) {
          return s.split(sep);
        };
      };
      joinWith = function(s) {
        return function(xs) {
          return xs.join(s);
        };
      };
    }
  });

  // output/Data.String.Common/index.js
  var $$null4;
  var init_Data_String3 = __esm({
    "output/Data.String.Common/index.js"() {
      init_foreign48();
      init_Data11();
      init_foreign48();
      $$null4 = function(s) {
        return s === "";
      };
    }
  });

  // output/Data.String.CodePoints/index.js
  var $runtime_lazy6, fromEnum4, map8, unfoldr2, div2, mod2, compare2, unsurrogate, isTrail, isLead, uncons5, unconsButWithTuple, toCodePointArrayFallback, unsafeCodePointAt0Fallback, unsafeCodePointAt0, toCodePointArray, length6, fromCharCode2, singletonFallback, singleton8, takeFallback, take4, eqCodePoint, ordCodePoint, drop4, codePointAtFallback, codePointAt, boundedCodePoint, boundedEnumCodePoint, $lazy_enumCodePoint;
  var init_Data_String4 = __esm({
    "output/Data.String.CodePoints/index.js"() {
      init_foreign45();
      init_Data40();
      init_Data();
      init_Data18();
      init_Data41();
      init_Data10();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data15();
      init_Data_String2();
      init_Data_String3();
      init_Data_String();
      init_Data22();
      init_Data32();
      init_Data_String2();
      $runtime_lazy6 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      fromEnum4 = /* @__PURE__ */ fromEnum(boundedEnumChar);
      map8 = /* @__PURE__ */ map(functorMaybe);
      unfoldr2 = /* @__PURE__ */ unfoldr(unfoldableArray);
      div2 = /* @__PURE__ */ div(euclideanRingInt);
      mod2 = /* @__PURE__ */ mod(euclideanRingInt);
      compare2 = /* @__PURE__ */ compare(ordInt);
      unsurrogate = function(lead) {
        return function(trail) {
          return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
        };
      };
      isTrail = function(cu) {
        return 56320 <= cu && cu <= 57343;
      };
      isLead = function(cu) {
        return 55296 <= cu && cu <= 56319;
      };
      uncons5 = function(s) {
        var v = length5(s);
        if (v === 0) {
          return Nothing.value;
        }
        ;
        if (v === 1) {
          return new Just({
            head: fromEnum4(charAt(0)(s)),
            tail: ""
          });
        }
        ;
        var cu1 = fromEnum4(charAt(1)(s));
        var cu0 = fromEnum4(charAt(0)(s));
        var $43 = isLead(cu0) && isTrail(cu1);
        if ($43) {
          return new Just({
            head: unsurrogate(cu0)(cu1),
            tail: drop3(2)(s)
          });
        }
        ;
        return new Just({
          head: cu0,
          tail: drop3(1)(s)
        });
      };
      unconsButWithTuple = function(s) {
        return map8(function(v) {
          return new Tuple(v.head, v.tail);
        })(uncons5(s));
      };
      toCodePointArrayFallback = function(s) {
        return unfoldr2(unconsButWithTuple)(s);
      };
      unsafeCodePointAt0Fallback = function(s) {
        var cu0 = fromEnum4(charAt(0)(s));
        var $47 = isLead(cu0) && length5(s) > 1;
        if ($47) {
          var cu1 = fromEnum4(charAt(1)(s));
          var $48 = isTrail(cu1);
          if ($48) {
            return unsurrogate(cu0)(cu1);
          }
          ;
          return cu0;
        }
        ;
        return cu0;
      };
      unsafeCodePointAt0 = /* @__PURE__ */ _unsafeCodePointAt0(unsafeCodePointAt0Fallback);
      toCodePointArray = /* @__PURE__ */ _toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
      length6 = function($74) {
        return length3(toCodePointArray($74));
      };
      fromCharCode2 = /* @__PURE__ */ function() {
        var $75 = toEnumWithDefaults(boundedEnumChar)(bottom(boundedChar))(top(boundedChar));
        return function($76) {
          return singleton7($75($76));
        };
      }();
      singletonFallback = function(v) {
        if (v <= 65535) {
          return fromCharCode2(v);
        }
        ;
        var lead = div2(v - 65536 | 0)(1024) + 55296 | 0;
        var trail = mod2(v - 65536 | 0)(1024) + 56320 | 0;
        return fromCharCode2(lead) + fromCharCode2(trail);
      };
      singleton8 = /* @__PURE__ */ _singleton(singletonFallback);
      takeFallback = function(v) {
        return function(v1) {
          if (v < 1) {
            return "";
          }
          ;
          var v2 = uncons5(v1);
          if (v2 instanceof Just) {
            return singleton8(v2.value0.head) + takeFallback(v - 1 | 0)(v2.value0.tail);
          }
          ;
          return v1;
        };
      };
      take4 = /* @__PURE__ */ _take(takeFallback);
      eqCodePoint = {
        eq: function(x) {
          return function(y) {
            return x === y;
          };
        }
      };
      ordCodePoint = {
        compare: function(x) {
          return function(y) {
            return compare2(x)(y);
          };
        },
        Eq0: function() {
          return eqCodePoint;
        }
      };
      drop4 = function(n) {
        return function(s) {
          return drop3(length5(take4(n)(s)))(s);
        };
      };
      codePointAtFallback = function($copy_n) {
        return function($copy_s) {
          var $tco_var_n = $copy_n;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(n, s) {
            var v = uncons5(s);
            if (v instanceof Just) {
              var $66 = n === 0;
              if ($66) {
                $tco_done = true;
                return new Just(v.value0.head);
              }
              ;
              $tco_var_n = n - 1 | 0;
              $copy_s = v.value0.tail;
              return;
            }
            ;
            $tco_done = true;
            return Nothing.value;
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_n, $copy_s);
          }
          ;
          return $tco_result;
        };
      };
      codePointAt = function(v) {
        return function(v1) {
          if (v < 0) {
            return Nothing.value;
          }
          ;
          if (v === 0 && v1 === "") {
            return Nothing.value;
          }
          ;
          if (v === 0) {
            return new Just(unsafeCodePointAt0(v1));
          }
          ;
          return _codePointAt(codePointAtFallback)(Just.create)(Nothing.value)(unsafeCodePointAt0)(v)(v1);
        };
      };
      boundedCodePoint = {
        bottom: 0,
        top: 1114111,
        Ord0: function() {
          return ordCodePoint;
        }
      };
      boundedEnumCodePoint = /* @__PURE__ */ function() {
        return {
          cardinality: 1114111 + 1 | 0,
          fromEnum: function(v) {
            return v;
          },
          toEnum: function(n) {
            if (n >= 0 && n <= 1114111) {
              return new Just(n);
            }
            ;
            if (otherwise) {
              return Nothing.value;
            }
            ;
            throw new Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [n.constructor.name]);
          },
          Bounded0: function() {
            return boundedCodePoint;
          },
          Enum1: function() {
            return $lazy_enumCodePoint(0);
          }
        };
      }();
      $lazy_enumCodePoint = /* @__PURE__ */ $runtime_lazy6("enumCodePoint", "Data.String.CodePoints", function() {
        return {
          succ: defaultSucc(toEnum(boundedEnumCodePoint))(fromEnum(boundedEnumCodePoint)),
          pred: defaultPred(toEnum(boundedEnumCodePoint))(fromEnum(boundedEnumCodePoint)),
          Ord0: function() {
            return ordCodePoint;
          }
        };
      });
    }
  });

  // output/Data.String.Regex/foreign.js
  var regexImpl, test;
  var init_foreign49 = __esm({
    "output/Data.String.Regex/foreign.js"() {
      regexImpl = function(left) {
        return function(right) {
          return function(s1) {
            return function(s2) {
              try {
                return right(new RegExp(s1, s2));
              } catch (e) {
                return left(e.message);
              }
            };
          };
        };
      };
      test = function(r) {
        return function(s) {
          var lastIndex = r.lastIndex;
          var result = r.test(s);
          r.lastIndex = lastIndex;
          return result;
        };
      };
    }
  });

  // output/Data.String.Regex.Flags/index.js
  var noFlags;
  var init_Data_String_Regex = __esm({
    "output/Data.String.Regex.Flags/index.js"() {
      init_Control13();
      init_Data9();
      init_Data4();
      init_Data13();
      init_Data_String3();
      noFlags = {
        global: false,
        ignoreCase: false,
        multiline: false,
        dotAll: false,
        sticky: false,
        unicode: false
      };
    }
  });

  // output/Data.String.Regex/index.js
  var renderFlags, regex;
  var init_Data_String5 = __esm({
    "output/Data.String.Regex/index.js"() {
      init_foreign49();
      init_Data20();
      init_Data19();
      init_Data_String2();
      init_Data_String_Regex();
      init_foreign49();
      renderFlags = function(v) {
        return function() {
          if (v.global) {
            return "g";
          }
          ;
          return "";
        }() + (function() {
          if (v.ignoreCase) {
            return "i";
          }
          ;
          return "";
        }() + (function() {
          if (v.multiline) {
            return "m";
          }
          ;
          return "";
        }() + (function() {
          if (v.dotAll) {
            return "s";
          }
          ;
          return "";
        }() + (function() {
          if (v.sticky) {
            return "y";
          }
          ;
          return "";
        }() + function() {
          if (v.unicode) {
            return "u";
          }
          ;
          return "";
        }()))));
      };
      regex = function(s) {
        return function(f) {
          return regexImpl(Left.create)(Right.create)(s)(renderFlags(f));
        };
      };
    }
  });

  // output/Parsing.String/index.js
  var fromEnum5, mod3, fromJust8, toEnum4, show1, updatePosSingle, updatePosString, satisfy, eof, consumeWith, string;
  var init_Parsing3 = __esm({
    "output/Parsing.String/index.js"() {
      init_Control7();
      init_Control4();
      init_Control5();
      init_Control_Monad_Rec();
      init_Data40();
      init_Data_Array2();
      init_Data();
      init_Data20();
      init_Data41();
      init_Data9();
      init_Data10();
      init_Data2();
      init_Data_Function();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data15();
      init_Data16();
      init_Data_String4();
      init_Data_String2();
      init_Data_String3();
      init_Data_String5();
      init_Data22();
      init_Data3();
      init_Parsing();
      init_Parsing2();
      fromEnum5 = /* @__PURE__ */ fromEnum(boundedEnumCodePoint);
      mod3 = /* @__PURE__ */ mod(euclideanRingInt);
      fromJust8 = /* @__PURE__ */ fromJust();
      toEnum4 = /* @__PURE__ */ toEnum(boundedEnumChar);
      show1 = /* @__PURE__ */ show(showString);
      updatePosSingle = function(v) {
        return function(cp) {
          return function(after) {
            var v1 = fromEnum5(cp);
            if (v1 === 10) {
              return {
                index: v.index + 1 | 0,
                line: v.line + 1 | 0,
                column: 1
              };
            }
            ;
            if (v1 === 13) {
              var v2 = codePointAt(0)(after);
              if (v2 instanceof Just && fromEnum5(v2.value0) === 10) {
                return {
                  index: v.index + 1 | 0,
                  line: v.line,
                  column: v.column
                };
              }
              ;
              return {
                index: v.index + 1 | 0,
                line: v.line + 1 | 0,
                column: 1
              };
            }
            ;
            if (v1 === 9) {
              return {
                index: v.index + 1 | 0,
                line: v.line,
                column: (v.column + 8 | 0) - mod3(v.column - 1 | 0)(8) | 0
              };
            }
            ;
            return {
              index: v.index + 1 | 0,
              line: v.line,
              column: v.column + 1 | 0
            };
          };
        };
      };
      updatePosString = function($copy_pos) {
        return function($copy_before) {
          return function($copy_after) {
            var $tco_var_pos = $copy_pos;
            var $tco_var_before = $copy_before;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(pos, before, after) {
              var v = uncons5(before);
              if (v instanceof Nothing) {
                $tco_done = true;
                return pos;
              }
              ;
              if (v instanceof Just) {
                var newPos = function() {
                  if ($$null4(v.value0.tail)) {
                    return updatePosSingle(pos)(v.value0.head)(after);
                  }
                  ;
                  if (otherwise) {
                    return updatePosSingle(pos)(v.value0.head)(v.value0.tail);
                  }
                  ;
                  throw new Error("Failed pattern match at Parsing.String (line 165, column 7 - line 167, column 52): " + []);
                }();
                $tco_var_pos = newPos;
                $tco_var_before = v.value0.tail;
                $copy_after = after;
                return;
              }
              ;
              throw new Error("Failed pattern match at Parsing.String (line 161, column 36 - line 168, column 38): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_pos, $tco_var_before, $copy_after);
            }
            ;
            return $tco_result;
          };
        };
      };
      satisfy = function(f) {
        return mkFn5(function(v) {
          return function(v1) {
            return function(v2) {
              return function($$throw2) {
                return function(done) {
                  var v3 = uncons5(v.value0);
                  if (v3 instanceof Nothing) {
                    return $$throw2(v, new ParseError("Unexpected EOF", v.value1));
                  }
                  ;
                  if (v3 instanceof Just) {
                    var cp = fromEnum5(v3.value0.head);
                    var $85 = cp < 0 || cp > 65535;
                    if ($85) {
                      return $$throw2(v, new ParseError("Expected Char", v.value1));
                    }
                    ;
                    var ch = fromJust8(toEnum4(cp));
                    var $86 = f(ch);
                    if ($86) {
                      return done(new ParseState(v3.value0.tail, updatePosSingle(v.value1)(v3.value0.head)(v3.value0.tail), true), ch);
                    }
                    ;
                    return $$throw2(v, new ParseError("Predicate unsatisfied", v.value1));
                  }
                  ;
                  throw new Error("Failed pattern match at Parsing.String (line 114, column 7 - line 129, column 75): " + [v3.constructor.name]);
                };
              };
            };
          };
        });
      };
      eof = /* @__PURE__ */ mkFn5(function(v) {
        return function(v1) {
          return function(v2) {
            return function($$throw2) {
              return function(done) {
                var $133 = $$null4(v.value0);
                if ($133) {
                  return done(new ParseState(v.value0, v.value1, true), unit);
                }
                ;
                return $$throw2(v, new ParseError("Expected EOF", v.value1));
              };
            };
          };
        };
      });
      consumeWith = function(f) {
        return mkFn5(function(v) {
          return function(v1) {
            return function(v2) {
              return function($$throw2) {
                return function(done) {
                  var v3 = f(v.value0);
                  if (v3 instanceof Left) {
                    return $$throw2(v, new ParseError(v3.value0, v.value1));
                  }
                  ;
                  if (v3 instanceof Right) {
                    return done(new ParseState(v3.value0.remainder, updatePosString(v.value1)(v3.value0.consumed)(v3.value0.remainder), !$$null4(v3.value0.consumed)), v3.value0.value);
                  }
                  ;
                  throw new Error("Failed pattern match at Parsing.String (line 286, column 7 - line 290, column 121): " + [v3.constructor.name]);
                };
              };
            };
          };
        });
      };
      string = function(str) {
        return consumeWith(function(input3) {
          var v = stripPrefix(str)(input3);
          if (v instanceof Just) {
            return new Right({
              value: str,
              consumed: str,
              remainder: v.value0
            });
          }
          ;
          return new Left("Expected " + show1(str));
        });
      };
    }
  });

  // output/Data.Formatter.Parser.Utils/index.js
  var show2, lmap2, applyFirst2, voidLeft2, printPosition, printError, runP, oneOfAs;
  var init_Data_Formatter_Parser = __esm({
    "output/Data.Formatter.Parser.Utils/index.js"() {
      init_Control3();
      init_Data23();
      init_Data4();
      init_Data16();
      init_Parsing();
      init_Parsing2();
      init_Parsing3();
      show2 = /* @__PURE__ */ show(showInt);
      lmap2 = /* @__PURE__ */ lmap(bifunctorEither);
      applyFirst2 = /* @__PURE__ */ applyFirst(applyParserT);
      voidLeft2 = /* @__PURE__ */ voidLeft(functorParserT);
      printPosition = function(v) {
        return "(line " + (show2(v.line) + (", col " + (show2(v.column) + ")")));
      };
      printError = function(err) {
        return parseErrorMessage(err) + (" " + printPosition(parseErrorPosition(err)));
      };
      runP = function(p2) {
        return function(s) {
          return lmap2(printError)(runParser(s)(applyFirst2(p2)(eof)));
        };
      };
      oneOfAs = function(dictFunctor) {
        var map45 = map(dictFunctor);
        return function(dictFoldable) {
          var choice2 = choice(dictFoldable);
          return function(dictMonad) {
            return function(p2) {
              return function(xs) {
                return choice2(map45(function(v) {
                  return voidLeft2(p2(v.value0))(v.value1);
                })(xs));
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Char/index.js
  var init_Data47 = __esm({
    "output/Data.Char/index.js"() {
      init_Data41();
    }
  });

  // output/Data.CodePoint.Unicode.Internal/index.js
  var init_Data_CodePoint_Unicode = __esm({
    "output/Data.CodePoint.Unicode.Internal/index.js"() {
      init_Data40();
      init_Data();
      init_Data9();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data11();
      init_Data16();
    }
  });

  // output/Data.CodePoint.Unicode.Internal.Casing/index.js
  var init_Data_CodePoint_Unicode_Internal = __esm({
    "output/Data.CodePoint.Unicode.Internal.Casing/index.js"() {
      init_Data40();
      init_Data_CodePoint_Unicode();
      init_Data19();
      init_Data15();
    }
  });

  // output/Data.CodePoint.Unicode/index.js
  var init_Data_CodePoint = __esm({
    "output/Data.CodePoint.Unicode/index.js"() {
      init_Data();
      init_Data47();
      init_Data_CodePoint_Unicode();
      init_Data_CodePoint_Unicode_Internal();
      init_Data41();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data_String4();
      init_Unsafe();
    }
  });

  // output/Parsing.String.Basic/index.js
  var show12, notElem1, noneOf;
  var init_Parsing_String = __esm({
    "output/Parsing.String.Basic/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Data40();
      init_Data_CodePoint();
      init_Data20();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data14();
      init_Data42();
      init_Data16();
      init_Data_String4();
      init_Data_String2();
      init_Data_String_Regex();
      init_Parsing();
      init_Parsing2();
      init_Parsing3();
      init_Partial2();
      show12 = /* @__PURE__ */ show(/* @__PURE__ */ showArray(showChar));
      notElem1 = /* @__PURE__ */ notElem2(eqChar);
      noneOf = function(ss) {
        return withLazyErrorMessage(satisfy(flip(notElem1)(ss)))(function(v) {
          return "none of " + show12(ss);
        });
      };
    }
  });

  // output/Data.Formatter.Parser.Number/index.js
  var init_Data_Formatter_Parser2 = __esm({
    "output/Data.Formatter.Parser.Number/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data40();
      init_Data25();
      init_Data_Formatter();
      init_Data_Formatter_Parser();
      init_Data4();
      init_Data43();
      init_Data19();
      init_Data14();
      init_Data42();
      init_Data6();
      init_Data16();
      init_Data22();
      init_Parsing();
      init_Parsing2();
      init_Parsing3();
      init_Parsing_String();
    }
  });

  // output/Data.Formatter.DateTime/index.js
  var show3, foldMap2, foldMap12, mapFlipped2, oneOfAs2, map9, abs3, some3, fromEnum6, show13, fromEnum1, fromEnum22, unwrap4, fromEnum32, show22, fromEnum42, mod4, fromEnum52, fromEnum62, fromEnum7, div1, mapFlipped1, YearFull, YearTwoDigits, YearAbsolute, MonthFull, MonthShort, MonthTwoDigits, DayOfMonthTwoDigits, DayOfMonth, UnixTimestamp, DayOfWeek, DayOfWeekName, DayOfWeekNameShort, Hours24, Hours12, Meridiem, Minutes, MinutesTwoDigits, Seconds, SecondsTwoDigits, Milliseconds2, MillisecondsShort, MillisecondsTwoDigits, Placeholder, printShortMonth, placeholderContent, padSingleDigit, padQuadrupleDigit, padDoubleDigit, formatterCommandParser, formatYearTwoDigits, formatParser, parseFormatString, fix12, formatCommand, format, formatDateTime;
  var init_Data_Formatter2 = __esm({
    "output/Data.Formatter.DateTime/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control11();
      init_Control_Monad_Reader();
      init_Control_Monad_Reader2();
      init_Control_Monad_Rec();
      init_Control_Monad2();
      init_Control_Monad_State();
      init_Control_Monad_State2();
      init_Control_Monad_Trans();
      init_Data40();
      init_Data();
      init_Data44();
      init_Data_Date();
      init_Data46();
      init_Data_DateTime();
      init_Data20();
      init_Data41();
      init_Data10();
      init_Data25();
      init_Data_Formatter();
      init_Data_Formatter_Parser2();
      init_Data_Formatter_Parser();
      init_Data2();
      init_Data4();
      init_Data_Generic();
      init_Data26();
      init_Data43();
      init_Data34();
      init_Data_List();
      init_Data19();
      init_Data14();
      init_Data24();
      init_Data15();
      init_Data11();
      init_Data7();
      init_Data13();
      init_Data6();
      init_Data16();
      init_Data_Show();
      init_Data_String4();
      init_Data_String2();
      init_Data45();
      init_Data_Time2();
      init_Data22();
      init_Data3();
      init_Parsing();
      init_Parsing2();
      init_Parsing3();
      init_Parsing_String();
      show3 = /* @__PURE__ */ show(showInt);
      foldMap2 = /* @__PURE__ */ foldMap(foldableList);
      foldMap12 = /* @__PURE__ */ foldMap2(monoidString);
      mapFlipped2 = /* @__PURE__ */ mapFlipped(functorParserT);
      oneOfAs2 = /* @__PURE__ */ oneOfAs(functorArray)(foldableArray);
      map9 = /* @__PURE__ */ map(functorParserT);
      abs3 = /* @__PURE__ */ abs(ordInt)(ringInt);
      some3 = /* @__PURE__ */ some(alternativeParserT)(lazyParserT);
      fromEnum6 = /* @__PURE__ */ fromEnum(boundedEnumYear);
      show13 = /* @__PURE__ */ show(showMonth);
      fromEnum1 = /* @__PURE__ */ fromEnum(boundedEnumMonth);
      fromEnum22 = /* @__PURE__ */ fromEnum(boundedEnumDay);
      unwrap4 = /* @__PURE__ */ unwrap();
      fromEnum32 = /* @__PURE__ */ fromEnum(boundedEnumWeekday);
      show22 = /* @__PURE__ */ show(showWeekday);
      fromEnum42 = /* @__PURE__ */ fromEnum(boundedEnumHour);
      mod4 = /* @__PURE__ */ mod(euclideanRingInt);
      fromEnum52 = /* @__PURE__ */ fromEnum(boundedEnumMinute);
      fromEnum62 = /* @__PURE__ */ fromEnum(boundedEnumSecond);
      fromEnum7 = /* @__PURE__ */ fromEnum(boundedEnumMillisecond);
      div1 = /* @__PURE__ */ div(euclideanRingInt);
      mapFlipped1 = /* @__PURE__ */ mapFlipped(functorEither);
      YearFull = /* @__PURE__ */ function() {
        function YearFull2() {
        }
        ;
        YearFull2.value = new YearFull2();
        return YearFull2;
      }();
      YearTwoDigits = /* @__PURE__ */ function() {
        function YearTwoDigits2() {
        }
        ;
        YearTwoDigits2.value = new YearTwoDigits2();
        return YearTwoDigits2;
      }();
      YearAbsolute = /* @__PURE__ */ function() {
        function YearAbsolute2() {
        }
        ;
        YearAbsolute2.value = new YearAbsolute2();
        return YearAbsolute2;
      }();
      MonthFull = /* @__PURE__ */ function() {
        function MonthFull2() {
        }
        ;
        MonthFull2.value = new MonthFull2();
        return MonthFull2;
      }();
      MonthShort = /* @__PURE__ */ function() {
        function MonthShort2() {
        }
        ;
        MonthShort2.value = new MonthShort2();
        return MonthShort2;
      }();
      MonthTwoDigits = /* @__PURE__ */ function() {
        function MonthTwoDigits2() {
        }
        ;
        MonthTwoDigits2.value = new MonthTwoDigits2();
        return MonthTwoDigits2;
      }();
      DayOfMonthTwoDigits = /* @__PURE__ */ function() {
        function DayOfMonthTwoDigits2() {
        }
        ;
        DayOfMonthTwoDigits2.value = new DayOfMonthTwoDigits2();
        return DayOfMonthTwoDigits2;
      }();
      DayOfMonth = /* @__PURE__ */ function() {
        function DayOfMonth2() {
        }
        ;
        DayOfMonth2.value = new DayOfMonth2();
        return DayOfMonth2;
      }();
      UnixTimestamp = /* @__PURE__ */ function() {
        function UnixTimestamp2() {
        }
        ;
        UnixTimestamp2.value = new UnixTimestamp2();
        return UnixTimestamp2;
      }();
      DayOfWeek = /* @__PURE__ */ function() {
        function DayOfWeek2() {
        }
        ;
        DayOfWeek2.value = new DayOfWeek2();
        return DayOfWeek2;
      }();
      DayOfWeekName = /* @__PURE__ */ function() {
        function DayOfWeekName2() {
        }
        ;
        DayOfWeekName2.value = new DayOfWeekName2();
        return DayOfWeekName2;
      }();
      DayOfWeekNameShort = /* @__PURE__ */ function() {
        function DayOfWeekNameShort2() {
        }
        ;
        DayOfWeekNameShort2.value = new DayOfWeekNameShort2();
        return DayOfWeekNameShort2;
      }();
      Hours24 = /* @__PURE__ */ function() {
        function Hours242() {
        }
        ;
        Hours242.value = new Hours242();
        return Hours242;
      }();
      Hours12 = /* @__PURE__ */ function() {
        function Hours122() {
        }
        ;
        Hours122.value = new Hours122();
        return Hours122;
      }();
      Meridiem = /* @__PURE__ */ function() {
        function Meridiem2() {
        }
        ;
        Meridiem2.value = new Meridiem2();
        return Meridiem2;
      }();
      Minutes = /* @__PURE__ */ function() {
        function Minutes2() {
        }
        ;
        Minutes2.value = new Minutes2();
        return Minutes2;
      }();
      MinutesTwoDigits = /* @__PURE__ */ function() {
        function MinutesTwoDigits2() {
        }
        ;
        MinutesTwoDigits2.value = new MinutesTwoDigits2();
        return MinutesTwoDigits2;
      }();
      Seconds = /* @__PURE__ */ function() {
        function Seconds2() {
        }
        ;
        Seconds2.value = new Seconds2();
        return Seconds2;
      }();
      SecondsTwoDigits = /* @__PURE__ */ function() {
        function SecondsTwoDigits2() {
        }
        ;
        SecondsTwoDigits2.value = new SecondsTwoDigits2();
        return SecondsTwoDigits2;
      }();
      Milliseconds2 = /* @__PURE__ */ function() {
        function Milliseconds3() {
        }
        ;
        Milliseconds3.value = new Milliseconds3();
        return Milliseconds3;
      }();
      MillisecondsShort = /* @__PURE__ */ function() {
        function MillisecondsShort2() {
        }
        ;
        MillisecondsShort2.value = new MillisecondsShort2();
        return MillisecondsShort2;
      }();
      MillisecondsTwoDigits = /* @__PURE__ */ function() {
        function MillisecondsTwoDigits2() {
        }
        ;
        MillisecondsTwoDigits2.value = new MillisecondsTwoDigits2();
        return MillisecondsTwoDigits2;
      }();
      Placeholder = /* @__PURE__ */ function() {
        function Placeholder2(value0) {
          this.value0 = value0;
        }
        ;
        Placeholder2.create = function(value0) {
          return new Placeholder2(value0);
        };
        return Placeholder2;
      }();
      printShortMonth = function(v) {
        if (v instanceof January) {
          return "Jan";
        }
        ;
        if (v instanceof February) {
          return "Feb";
        }
        ;
        if (v instanceof March) {
          return "Mar";
        }
        ;
        if (v instanceof April) {
          return "Apr";
        }
        ;
        if (v instanceof May) {
          return "May";
        }
        ;
        if (v instanceof June) {
          return "Jun";
        }
        ;
        if (v instanceof July) {
          return "Jul";
        }
        ;
        if (v instanceof August) {
          return "Aug";
        }
        ;
        if (v instanceof September) {
          return "Sep";
        }
        ;
        if (v instanceof October) {
          return "Oct";
        }
        ;
        if (v instanceof November) {
          return "Nov";
        }
        ;
        if (v instanceof December) {
          return "Dec";
        }
        ;
        throw new Error("Failed pattern match at Data.Formatter.DateTime (line 489, column 19 - line 501, column 22): " + [v.constructor.name]);
      };
      placeholderContent = /* @__PURE__ */ mapFlipped2(/* @__PURE__ */ some2(alternativeParserT)(lazyParserT)(/* @__PURE__ */ noneOf(/* @__PURE__ */ toCharArray("YMDEHhamsS"))))(fromCharArray);
      padSingleDigit = function(i2) {
        if (i2 < 0) {
          return "-" + padSingleDigit(-i2 | 0);
        }
        ;
        if (i2 < 10) {
          return "0" + show3(i2);
        }
        ;
        if (otherwise) {
          return show3(i2);
        }
        ;
        throw new Error("Failed pattern match at Data.Formatter.DateTime (line 194, column 1 - line 194, column 32): " + [i2.constructor.name]);
      };
      padQuadrupleDigit = function(i2) {
        if (i2 < 0) {
          return "-" + padQuadrupleDigit(-i2 | 0);
        }
        ;
        if (i2 < 10) {
          return "000" + show3(i2);
        }
        ;
        if (i2 < 100) {
          return "00" + show3(i2);
        }
        ;
        if (i2 < 1e3) {
          return "0" + show3(i2);
        }
        ;
        if (otherwise) {
          return show3(i2);
        }
        ;
        throw new Error("Failed pattern match at Data.Formatter.DateTime (line 207, column 1 - line 207, column 35): " + [i2.constructor.name]);
      };
      padDoubleDigit = function(i2) {
        if (i2 < 0) {
          return "-" + padDoubleDigit(-i2 | 0);
        }
        ;
        if (i2 < 10) {
          return "00" + show3(i2);
        }
        ;
        if (i2 < 100) {
          return "0" + show3(i2);
        }
        ;
        if (otherwise) {
          return show3(i2);
        }
        ;
        throw new Error("Failed pattern match at Data.Formatter.DateTime (line 200, column 1 - line 200, column 32): " + [i2.constructor.name]);
      };
      formatterCommandParser = /* @__PURE__ */ function() {
        return alt(altParserT)(oneOfAs2(monadIdentity)(function($664) {
          return $$try3(string($664));
        })([new Tuple("YYYY", YearFull.value), new Tuple("YY", YearTwoDigits.value), new Tuple("Y", YearAbsolute.value), new Tuple("MMMM", MonthFull.value), new Tuple("MMM", MonthShort.value), new Tuple("MM", MonthTwoDigits.value), new Tuple("DD", DayOfMonthTwoDigits.value), new Tuple("D", DayOfMonth.value), new Tuple("E", DayOfWeek.value), new Tuple("X", UnixTimestamp.value), new Tuple("dddd", DayOfWeekName.value), new Tuple("ddd", DayOfWeekNameShort.value), new Tuple("HH", Hours24.value), new Tuple("hh", Hours12.value), new Tuple("a", Meridiem.value), new Tuple("mm", MinutesTwoDigits.value), new Tuple("m", Minutes.value), new Tuple("ss", SecondsTwoDigits.value), new Tuple("s", Seconds.value), new Tuple("SSS", Milliseconds2.value), new Tuple("SS", MillisecondsTwoDigits.value), new Tuple("S", MillisecondsShort.value)]))(map9(Placeholder.create)(placeholderContent));
      }();
      formatYearTwoDigits = function(i2) {
        var dateString = show3(abs3(i2));
        var dateLength = length6(dateString);
        if (dateLength === 1) {
          return "0" + dateString;
        }
        ;
        if (dateLength === 2) {
          return dateString;
        }
        ;
        return drop4(dateLength - 2 | 0)(dateString);
      };
      formatParser = /* @__PURE__ */ some3(formatterCommandParser);
      parseFormatString = /* @__PURE__ */ runP(formatParser);
      fix12 = function(h) {
        var $618 = h === 0;
        if ($618) {
          return 12;
        }
        ;
        return h;
      };
      formatCommand = function(v) {
        return function(v1) {
          if (v1 instanceof YearFull) {
            return padQuadrupleDigit(fromEnum6(year(v.value0)));
          }
          ;
          if (v1 instanceof YearTwoDigits) {
            return formatYearTwoDigits(fromEnum6(year(v.value0)));
          }
          ;
          if (v1 instanceof YearAbsolute) {
            return show3(fromEnum6(year(v.value0)));
          }
          ;
          if (v1 instanceof MonthFull) {
            return show13(month(v.value0));
          }
          ;
          if (v1 instanceof MonthShort) {
            return printShortMonth(month(v.value0));
          }
          ;
          if (v1 instanceof MonthTwoDigits) {
            return padSingleDigit(fromEnum1(month(v.value0)));
          }
          ;
          if (v1 instanceof DayOfMonthTwoDigits) {
            return padSingleDigit(fromEnum22(day(v.value0)));
          }
          ;
          if (v1 instanceof DayOfMonth) {
            return show3(fromEnum22(day(v.value0)));
          }
          ;
          if (v1 instanceof UnixTimestamp) {
            return show3(floor2(function(v2) {
              return v2 / 1e3;
            }(unwrap4(unInstant(fromDateTime(v))))));
          }
          ;
          if (v1 instanceof DayOfWeek) {
            return show3(fromEnum32(weekday(v.value0)));
          }
          ;
          if (v1 instanceof DayOfWeekName) {
            return show22(weekday(v.value0));
          }
          ;
          if (v1 instanceof DayOfWeekNameShort) {
            return take4(3)(show22(weekday(v.value0)));
          }
          ;
          if (v1 instanceof Hours24) {
            return padSingleDigit(fromEnum42(hour(v.value1)));
          }
          ;
          if (v1 instanceof Hours12) {
            return padSingleDigit(fix12(mod4(fromEnum42(hour(v.value1)))(12)));
          }
          ;
          if (v1 instanceof Meridiem) {
            var $621 = fromEnum42(hour(v.value1)) >= 12;
            if ($621) {
              return "PM";
            }
            ;
            return "AM";
          }
          ;
          if (v1 instanceof Minutes) {
            return show3(fromEnum52(minute(v.value1)));
          }
          ;
          if (v1 instanceof MinutesTwoDigits) {
            return padSingleDigit(fromEnum52(minute(v.value1)));
          }
          ;
          if (v1 instanceof Seconds) {
            return show3(fromEnum62(second(v.value1)));
          }
          ;
          if (v1 instanceof SecondsTwoDigits) {
            return padSingleDigit(fromEnum62(second(v.value1)));
          }
          ;
          if (v1 instanceof Milliseconds2) {
            return padDoubleDigit(fromEnum7(millisecond(v.value1)));
          }
          ;
          if (v1 instanceof MillisecondsShort) {
            return show3(function(v2) {
              return div1(v2)(100);
            }(fromEnum7(millisecond(v.value1))));
          }
          ;
          if (v1 instanceof MillisecondsTwoDigits) {
            return padSingleDigit(function(v2) {
              return div1(v2)(10);
            }(fromEnum7(millisecond(v.value1))));
          }
          ;
          if (v1 instanceof Placeholder) {
            return v1.value0;
          }
          ;
          throw new Error("Failed pattern match at Data.Formatter.DateTime (line 169, column 38 - line 192, column 21): " + [v1.constructor.name]);
        };
      };
      format = function(f) {
        return function(d) {
          return foldMap12(formatCommand(d))(f);
        };
      };
      formatDateTime = function(pattern2) {
        return function(datetime) {
          return mapFlipped1(parseFormatString(pattern2))(function(v) {
            return format(v)(datetime);
          });
        };
      };
    }
  });

  // output/App.Data.Log/index.js
  var identity12, fold3, Debug, Info, Warn, $$Error, reason, mkLog, message2;
  var init_App_Data = __esm({
    "output/App.Data.Log/index.js"() {
      init_App_Capability();
      init_Control4();
      init_Control5();
      init_Control2();
      init_Data46();
      init_Data20();
      init_Data9();
      init_Data25();
      init_Data_Formatter2();
      init_Data2();
      init_Data_Generic();
      init_Data14();
      init_Data11();
      init_Data16();
      init_Data_Show();
      identity12 = /* @__PURE__ */ identity(categoryFn);
      fold3 = /* @__PURE__ */ fold(foldableArray)(monoidString);
      Debug = /* @__PURE__ */ function() {
        function Debug2() {
        }
        ;
        Debug2.value = new Debug2();
        return Debug2;
      }();
      Info = /* @__PURE__ */ function() {
        function Info2() {
        }
        ;
        Info2.value = new Info2();
        return Info2;
      }();
      Warn = /* @__PURE__ */ function() {
        function Warn2() {
        }
        ;
        Warn2.value = new Warn2();
        return Warn2;
      }();
      $$Error = /* @__PURE__ */ function() {
        function $$Error3() {
        }
        ;
        $$Error3.value = new $$Error3();
        return $$Error3;
      }();
      reason = function(v) {
        return v.reason;
      };
      mkLog = function(dictNow) {
        var Monad0 = dictNow.Monad0();
        var bind21 = bind(Monad0.Bind1());
        var nowDateTime3 = nowDateTime(dictNow);
        var pure25 = pure(Monad0.Applicative0());
        return function(logReason) {
          return function(inputMessage) {
            var formatTimestamp = function() {
              var $89 = either($$const("(Failed to assign time)"))(identity12);
              var $90 = formatDateTime("YYYY-DD-MM hh:mm:ss a");
              return function($91) {
                return $89($90($91));
              };
            }();
            return bind21(nowDateTime3)(function(now3) {
              var headerWith = function(start2) {
                return fold3(["[", start2, ": ", formatTimestamp(now3), "]\n", inputMessage]);
              };
              var formattedLog = headerWith(function() {
                if (logReason instanceof Debug) {
                  return "DEBUG";
                }
                ;
                if (logReason instanceof Info) {
                  return "INFO";
                }
                ;
                if (logReason instanceof Warn) {
                  return "WARNING";
                }
                ;
                if (logReason instanceof $$Error) {
                  return "ERROR";
                }
                ;
                throw new Error("Failed pattern match at App.Data.Log (line 95, column 31 - line 99, column 23): " + [logReason.constructor.name]);
              }());
              return pure25({
                reason: logReason,
                timestamp: now3,
                message: formattedLog
              });
            });
          };
        };
      };
      message2 = function(v) {
        return v.message;
      };
    }
  });

  // output/App.Capability.LogMessages/index.js
  var lift6, logMessagesEffect, logMessage, logMessagesHalogenM, log2, logDebug, logError;
  var init_App_Capability2 = __esm({
    "output/App.Capability.LogMessages/index.js"() {
      init_App_Data();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control_Monad_Trans();
      init_Data20();
      init_Data19();
      init_Effect();
      init_Halogen_Query2();
      init_Undefined();
      lift6 = /* @__PURE__ */ lift(monadTransHalogenM);
      logMessagesEffect = {
        logMessage: undefined2,
        Monad0: function() {
          return monadEffect;
        }
      };
      logMessage = function(dict) {
        return dict.logMessage;
      };
      logMessagesHalogenM = function(dictLogMessages) {
        return {
          logMessage: function() {
            var $56 = lift6(dictLogMessages.Monad0());
            var $57 = logMessage(dictLogMessages);
            return function($58) {
              return $56($57($58));
            };
          }(),
          Monad0: function() {
            return monadHalogenM;
          }
        };
      };
      log2 = function(dictLogMessages) {
        var composeKleisliFlipped5 = composeKleisliFlipped(dictLogMessages.Monad0().Bind1());
        var logMessage1 = logMessage(dictLogMessages);
        return function(dictNow) {
          var mkLog2 = mkLog(dictNow);
          return function(reason2) {
            return composeKleisliFlipped5(logMessage1)(mkLog2(reason2));
          };
        };
      };
      logDebug = function(dictLogMessages) {
        var log1 = log2(dictLogMessages);
        return function(dictNow) {
          return log1(dictNow)(Debug.value);
        };
      };
      logError = function(dictLogMessages) {
        var log1 = log2(dictLogMessages);
        return function(dictNow) {
          return log1(dictNow)($$Error.value);
        };
      };
    }
  });

  // output/App.Capability.Navigate/index.js
  var lift7, navigate, logout, navigateHalogenM;
  var init_App_Capability3 = __esm({
    "output/App.Capability.Navigate/index.js"() {
      init_Control_Monad_Trans();
      init_Halogen_Query2();
      lift7 = /* @__PURE__ */ lift(monadTransHalogenM);
      navigate = function(dict) {
        return dict.navigate;
      };
      logout = function(dict) {
        return dict.logout;
      };
      navigateHalogenM = function(dictNavigate) {
        var lift1 = lift7(dictNavigate.Monad0());
        return {
          navigate: function() {
            var $9 = navigate(dictNavigate);
            return function($10) {
              return lift1($9($10));
            };
          }(),
          logout: lift1(logout(dictNavigate)),
          Monad0: function() {
            return monadHalogenM;
          }
        };
      };
    }
  });

  // output/App.Data.Credentials/index.js
  var unwrap5, Credentials, showCredentials, eqJWT, eqBasic, eq12, eqCredentials;
  var init_App_Data2 = __esm({
    "output/App.Data.Credentials/index.js"() {
      init_Data20();
      init_Data9();
      init_Data24();
      init_Data15();
      unwrap5 = /* @__PURE__ */ unwrap();
      Credentials = function(x) {
        return x;
      };
      showCredentials = {
        show: function(v) {
          if (v instanceof Left) {
            return "basic: " + unwrap5(v.value0);
          }
          ;
          if (v instanceof Right) {
            return "jwt: " + unwrap5(v.value0);
          }
          ;
          throw new Error("Failed pattern match at App.Data.Credentials (line 30, column 1 - line 32, column 59): " + [v.constructor.name]);
        }
      };
      eqJWT = {
        eq: function(x) {
          return function(y) {
            return x === y;
          };
        }
      };
      eqBasic = {
        eq: function(x) {
          return function(y) {
            return x === y;
          };
        }
      };
      eq12 = /* @__PURE__ */ eq(/* @__PURE__ */ eqEither(eqBasic)(eqJWT));
      eqCredentials = {
        eq: function(x) {
          return function(y) {
            return eq12(x)(y);
          };
        }
      };
    }
  });

  // output/Data.Codec/index.js
  var init_Data48 = __esm({
    "output/Data.Codec/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Data23();
      init_Data2();
      init_Data4();
      init_Data_Functor();
      init_Data22();
    }
  });

  // output/Data.Argonaut.Core/foreign.js
  function id(x) {
    return x;
  }
  function stringify(j) {
    return JSON.stringify(j);
  }
  var init_foreign50 = __esm({
    "output/Data.Argonaut.Core/foreign.js"() {
    }
  });

  // output/Foreign.Object/foreign.js
  function _copyST(m) {
    return function() {
      var r = {};
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  }
  function runST(f) {
    return f();
  }
  function _fmapObject(m0, f) {
    var m = {};
    for (var k in m0) {
      if (hasOwnProperty.call(m0, k)) {
        m[k] = f(m0[k]);
      }
    }
    return m;
  }
  function _foldM(bind21) {
    return function(f) {
      return function(mz) {
        return function(m) {
          var acc = mz;
          function g(k2) {
            return function(z) {
              return f(z)(k2)(m[k2]);
            };
          }
          for (var k in m) {
            if (hasOwnProperty.call(m, k)) {
              acc = bind21(acc)(g(k));
            }
          }
          return acc;
        };
      };
    };
  }
  function _lookup(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  }
  function toArrayWithKey(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var empty7, keys;
  var init_foreign51 = __esm({
    "output/Foreign.Object/foreign.js"() {
      empty7 = {};
      keys = Object.keys || toArrayWithKey(function(k) {
        return function() {
          return k;
        };
      });
    }
  });

  // output/Foreign.Object.ST/foreign.js
  function poke2(k) {
    return function(v) {
      return function(m) {
        return function() {
          m[k] = v;
          return m;
        };
      };
    };
  }
  var newImpl;
  var init_foreign52 = __esm({
    "output/Foreign.Object.ST/foreign.js"() {
      newImpl = function() {
        return {};
      };
    }
  });

  // output/Foreign.Object.ST/index.js
  var init_Foreign_Object = __esm({
    "output/Foreign.Object.ST/index.js"() {
      init_foreign52();
      init_Data19();
      init_foreign52();
    }
  });

  // output/Foreign.Object/index.js
  var thawST, mutate, lookup5, insert4, functorObject, fold4;
  var init_Foreign = __esm({
    "output/Foreign.Object/index.js"() {
      init_foreign51();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control_Monad_ST2();
      init_Data40();
      init_Data9();
      init_Data25();
      init_Data28();
      init_Data2();
      init_Data_Function();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
      init_Data29();
      init_Data30();
      init_Data22();
      init_Data32();
      init_Foreign_Object();
      init_Unsafe();
      init_foreign51();
      thawST = _copyST;
      mutate = function(f) {
        return function(m) {
          return runST(function __do4() {
            var s = thawST(m)();
            f(s)();
            return s;
          });
        };
      };
      lookup5 = /* @__PURE__ */ function() {
        return runFn4(_lookup)(Nothing.value)(Just.create);
      }();
      insert4 = function(k) {
        return function(v) {
          return mutate(poke2(k)(v));
        };
      };
      functorObject = {
        map: function(f) {
          return function(m) {
            return _fmapObject(m, f);
          };
        }
      };
      fold4 = /* @__PURE__ */ _foldM(applyFlipped);
    }
  });

  // output/Data.Argonaut.Core/index.js
  var jsonEmptyObject;
  var init_Data_Argonaut = __esm({
    "output/Data.Argonaut.Core/index.js"() {
      init_foreign50();
      init_Data9();
      init_Data2();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Foreign();
      init_foreign50();
      jsonEmptyObject = /* @__PURE__ */ id(empty7);
    }
  });

  // output/Data.Codec.Argonaut/index.js
  var init_Data_Codec = __esm({
    "output/Data.Codec.Argonaut/index.js"() {
      init_Control4();
      init_Control5();
      init_Control2();
      init_Data_Argonaut();
      init_Data40();
      init_Data23();
      init_Data48();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data_Generic();
      init_Data43();
      init_Data_List();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data_String4();
      init_Data_String2();
      init_Data5();
      init_Data30();
      init_Data22();
      init_Data12();
      init_Foreign();
      init_Record();
      init_Safe();
      init_Data48();
    }
  });

  // output/Data.Validation.Semigroup/index.js
  var V, validation, toEither, invalid, functorV, applyV, applicativeV, andThen;
  var init_Data_Validation = __esm({
    "output/Data.Validation.Semigroup/index.js"() {
      init_Control4();
      init_Control3();
      init_Data23();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
      V = function(x) {
        return x;
      };
      validation = function(v) {
        return function(v1) {
          return function(v2) {
            if (v2 instanceof Left) {
              return v(v2.value0);
            }
            ;
            if (v2 instanceof Right) {
              return v1(v2.value0);
            }
            ;
            throw new Error("Failed pattern match at Data.Validation.Semigroup (line 48, column 1 - line 48, column 84): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
          };
        };
      };
      toEither = function(v) {
        return v;
      };
      invalid = function($100) {
        return V(Left.create($100));
      };
      functorV = functorEither;
      applyV = function(dictSemigroup) {
        var append12 = append(dictSemigroup);
        return {
          apply: function(v) {
            return function(v1) {
              if (v instanceof Left && v1 instanceof Left) {
                return new Left(append12(v.value0)(v1.value0));
              }
              ;
              if (v instanceof Left) {
                return new Left(v.value0);
              }
              ;
              if (v1 instanceof Left) {
                return new Left(v1.value0);
              }
              ;
              if (v instanceof Right && v1 instanceof Right) {
                return new Right(v.value0(v1.value0));
              }
              ;
              throw new Error("Failed pattern match at Data.Validation.Semigroup (line 89, column 1 - line 93, column 54): " + [v.constructor.name, v1.constructor.name]);
            };
          },
          Functor0: function() {
            return functorV;
          }
        };
      };
      applicativeV = function(dictSemigroup) {
        var applyV1 = applyV(dictSemigroup);
        return {
          pure: function($108) {
            return V(Right.create($108));
          },
          Apply0: function() {
            return applyV1;
          }
        };
      };
      andThen = function(v1) {
        return function(f) {
          return validation(invalid)(f)(v1);
        };
      };
    }
  });

  // output/App.Data.Email/index.js
  var lmap3, applyFirst3, unwrap6, pure5, WrongEmail, RegError, Email, validate, showValidationError, parse, genericEmail, showEmail, eqEmail;
  var init_App_Data3 = __esm({
    "output/App.Data.Email/index.js"() {
      init_Control4();
      init_Control3();
      init_Data_Array2();
      init_Data_Array_NonEmpty();
      init_Data23();
      init_Data();
      init_Data48();
      init_Data_Codec();
      init_Data20();
      init_Data2();
      init_Data24();
      init_Data15();
      init_Data39();
      init_Data16();
      init_Data_Show();
      init_Data_String5();
      init_Data_String_Regex();
      init_Data3();
      init_Data_Validation();
      lmap3 = /* @__PURE__ */ lmap(bifunctorEither);
      applyFirst3 = /* @__PURE__ */ applyFirst(/* @__PURE__ */ applyV(semigroupNonEmptyArray));
      unwrap6 = /* @__PURE__ */ unwrap();
      pure5 = /* @__PURE__ */ pure(/* @__PURE__ */ applicativeV(semigroupNonEmptyArray));
      WrongEmail = /* @__PURE__ */ function() {
        function WrongEmail2() {
        }
        ;
        WrongEmail2.value = new WrongEmail2();
        return WrongEmail2;
      }();
      RegError = /* @__PURE__ */ function() {
        function RegError2(value0) {
          this.value0 = value0;
        }
        ;
        RegError2.create = function(value0) {
          return new RegError2(value0);
        };
        return RegError2;
      }();
      Email = function(x) {
        return x;
      };
      validate = function(s) {
        var init4 = lmap3(function($40) {
          return singleton6(RegError.create($40));
        })(regex("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")(noFlags));
        var checkEmailDomain = new Right(unit);
        var checkEmail = function(regexp) {
          if (!test(regexp)(s)) {
            return new Left(singleton6(WrongEmail.value));
          }
          ;
          if (otherwise) {
            return new Right(unit);
          }
          ;
          throw new Error("Failed pattern match at App.Data.Email (line 53, column 3 - line 56, column 33): " + [regexp.constructor.name]);
        };
        return validation(function($41) {
          return V(Left.create($41));
        })(function() {
          var $42 = flip(applyFirst3)(checkEmailDomain);
          return function($43) {
            return $42(checkEmail($43));
          };
        }())(init4);
      };
      showValidationError = {
        show: function(v) {
          if (v instanceof WrongEmail) {
            return "wrong email";
          }
          ;
          if (v instanceof RegError) {
            return "the regexp against which an email is checked is wrong";
          }
          ;
          throw new Error("Failed pattern match at App.Data.Email (line 42, column 1 - line 44, column 78): " + [v.constructor.name]);
        }
      };
      parse = function(email) {
        return toEither(andThen(validate(unwrap6(email)))($$const(pure5(email))));
      };
      genericEmail = {
        to: function(x) {
          return x;
        },
        from: function(x) {
          return x;
        }
      };
      showEmail = {
        show: /* @__PURE__ */ genericShow(genericEmail)(/* @__PURE__ */ genericShowConstructor(/* @__PURE__ */ genericShowArgsArgument(showString))({
          reflectSymbol: function() {
            return "Email";
          }
        }))
      };
      eqEmail = {
        eq: function(x) {
          return function(y) {
            return x === y;
          };
        }
      };
    }
  });

  // output/Record.Unsafe.Union/foreign.js
  function unsafeUnionFn(r1, r2) {
    var copy2 = {};
    for (var k1 in r2) {
      if ({}.hasOwnProperty.call(r2, k1)) {
        copy2[k1] = r2[k1];
      }
    }
    for (var k2 in r1) {
      if ({}.hasOwnProperty.call(r1, k2)) {
        copy2[k2] = r1[k2];
      }
    }
    return copy2;
  }
  var init_foreign53 = __esm({
    "output/Record.Unsafe.Union/foreign.js"() {
    }
  });

  // output/Record.Unsafe.Union/index.js
  var init_Record_Unsafe = __esm({
    "output/Record.Unsafe.Union/index.js"() {
      init_foreign53();
      init_Data_Function();
      init_foreign53();
    }
  });

  // output/Record/index.js
  var merge, get2, $$delete3;
  var init_Record2 = __esm({
    "output/Record/index.js"() {
      init_Data9();
      init_Data5();
      init_Record();
      init_Record_Unsafe();
      init_Type();
      init_Unsafe();
      merge = function() {
        return function() {
          return function(l) {
            return function(r) {
              return unsafeUnionFn(l, r);
            };
          };
        };
      };
      get2 = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function() {
          return function(l) {
            return function(r) {
              return unsafeGet(reflectSymbol2(l))(r);
            };
          };
        };
      };
      $$delete3 = function(dictIsSymbol) {
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function() {
          return function() {
            return function(l) {
              return function(r) {
                return unsafeDelete(reflectSymbol2(l))(r);
              };
            };
          };
        };
      };
    }
  });

  // output/Data.Bifoldable/index.js
  var bifoldableTuple;
  var init_Data49 = __esm({
    "output/Data.Bifoldable/index.js"() {
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data14();
      init_Data_Monoid();
      init_Data_Monoid2();
      init_Data_Monoid3();
      init_Data_Monoid4();
      init_Data24();
      init_Data13();
      init_Data3();
      bifoldableTuple = {
        bifoldMap: function(dictMonoid) {
          var append11 = append(dictMonoid.Semigroup0());
          return function(f) {
            return function(g) {
              return function(v) {
                return append11(f(v.value0))(g(v.value1));
              };
            };
          };
        },
        bifoldr: function(f) {
          return function(g) {
            return function(z) {
              return function(v) {
                return f(v.value0)(g(v.value1)(z));
              };
            };
          };
        },
        bifoldl: function(f) {
          return function(g) {
            return function(z) {
              return function(v) {
                return g(f(z)(v.value0))(v.value1);
              };
            };
          };
        }
      };
    }
  });

  // output/Data.Functor.Clown/index.js
  var init_Data_Functor8 = __esm({
    "output/Data.Functor.Clown/index.js"() {
      init_Control4();
      init_Control3();
      init_Data4();
      init_Data_Functor6();
      init_Data16();
    }
  });

  // output/Control.Biapply/index.js
  var init_Control14 = __esm({
    "output/Control.Biapply/index.js"() {
      init_Control2();
      init_Data23();
      init_Data2();
      init_Data22();
    }
  });

  // output/Control.Biapplicative/index.js
  var init_Control15 = __esm({
    "output/Control.Biapplicative/index.js"() {
      init_Control14();
      init_Data22();
    }
  });

  // output/Data.Functor.Flip/index.js
  var init_Data_Functor9 = __esm({
    "output/Data.Functor.Flip/index.js"() {
      init_Control15();
      init_Control14();
      init_Control2();
      init_Control();
      init_Data23();
      init_Data39();
      init_Data16();
    }
  });

  // output/Data.Functor.Joker/index.js
  var init_Data_Functor10 = __esm({
    "output/Data.Functor.Joker/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data20();
      init_Data4();
      init_Data24();
      init_Data16();
    }
  });

  // output/Data.Functor.Product2/index.js
  var init_Data_Functor11 = __esm({
    "output/Data.Functor.Product2/index.js"() {
      init_Control15();
      init_Control14();
      init_Data23();
      init_Data9();
      init_Data4();
      init_Data15();
      init_Data11();
      init_Data39();
      init_Data16();
    }
  });

  // output/Data.Bitraversable/index.js
  var bitraverse, ltraverse, bitraversableTuple;
  var init_Data50 = __esm({
    "output/Data.Bitraversable/index.js"() {
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data49();
      init_Data23();
      init_Data17();
      init_Data20();
      init_Data4();
      init_Data_Functor8();
      init_Data_Functor9();
      init_Data_Functor10();
      init_Data_Functor11();
      init_Data29();
      init_Data22();
      init_Data49();
      bitraverse = function(dict) {
        return dict.bitraverse;
      };
      ltraverse = function(dictBitraversable) {
        var bitraverse1 = bitraverse(dictBitraversable);
        return function(dictApplicative) {
          var bitraverse22 = bitraverse1(dictApplicative);
          var pure25 = pure(dictApplicative);
          return function(f) {
            return bitraverse22(f)(pure25);
          };
        };
      };
      bitraversableTuple = {
        bitraverse: function(dictApplicative) {
          var Apply0 = dictApplicative.Apply0();
          var apply6 = apply(Apply0);
          var map45 = map(Apply0.Functor0());
          return function(f) {
            return function(g) {
              return function(v) {
                return apply6(map45(Tuple.create)(f(v.value0)))(g(v.value1));
              };
            };
          };
        },
        bisequence: function(dictApplicative) {
          var Apply0 = dictApplicative.Apply0();
          var apply6 = apply(Apply0);
          var map45 = map(Apply0.Functor0());
          return function(v) {
            return apply6(map45(Tuple.create)(v.value0))(v.value1);
          };
        },
        Bifunctor0: function() {
          return bifunctorTuple;
        },
        Bifoldable1: function() {
          return bifoldableTuple;
        }
      };
    }
  });

  // output/JSURI/foreign.js
  function encodeURIComponent_to_RFC3986(input3) {
    return input3.replace(/[!'()*]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }
  function _encodeURIComponent(fail4, succeed, input3) {
    try {
      return succeed(encodeURIComponent_to_RFC3986(encodeURIComponent(input3)));
    } catch (err) {
      return fail4(err);
    }
  }
  function _encodeFormURLComponent(fail4, succeed, input3) {
    try {
      return succeed(encodeURIComponent_to_RFC3986(encodeURIComponent(input3)).replace(/%20/g, "+"));
    } catch (err) {
      return fail4(err);
    }
  }
  function _decodeURIComponent(fail4, succeed, input3) {
    try {
      return succeed(decodeURIComponent(input3));
    } catch (err) {
      return fail4(err);
    }
  }
  var init_foreign54 = __esm({
    "output/JSURI/foreign.js"() {
    }
  });

  // output/JSURI/index.js
  var $$encodeURIComponent, encodeFormURLComponent, $$decodeURIComponent;
  var init_JSURI = __esm({
    "output/JSURI/index.js"() {
      init_foreign54();
      init_Data2();
      init_Data_Function();
      init_Data19();
      $$encodeURIComponent = /* @__PURE__ */ function() {
        return runFn3(_encodeURIComponent)($$const(Nothing.value))(Just.create);
      }();
      encodeFormURLComponent = /* @__PURE__ */ function() {
        return runFn3(_encodeFormURLComponent)($$const(Nothing.value))(Just.create);
      }();
      $$decodeURIComponent = /* @__PURE__ */ function() {
        return runFn3(_decodeURIComponent)($$const(Nothing.value))(Just.create);
      }();
    }
  });

  // output/Routing.Duplex.Types/index.js
  var emptyRouteState;
  var init_Routing_Duplex = __esm({
    "output/Routing.Duplex.Types/index.js"() {
      emptyRouteState = {
        segments: [],
        params: [],
        hash: ""
      };
    }
  });

  // output/Routing.Duplex.Parser/index.js
  var $runtime_lazy7, bitraverse2, traverse2, lookup6, map10, map12, foldl2, composeKleisli2, append7, Expected, ExpectedEndOfPath, MissingParam, MalformedURIComponent, EndOfPath, Fail, Success, Alt, Chomp, Prefix, prefix, parsePath, param, functorRouteResult, map22, functorRouteParser, end, chompPrefix, $lazy_runRouteParser, runRouteParser, run3, applyRouteParser, applicativeRouteParser, altSnoc, altRouteParser, altCons, altAppend;
  var init_Routing_Duplex2 = __esm({
    "output/Routing.Duplex.Parser/index.js"() {
      init_Control7();
      init_Control4();
      init_Control5();
      init_Control8();
      init_Data40();
      init_Data_Array2();
      init_Data_Array_NonEmpty();
      init_Data50();
      init_Data();
      init_Data20();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_Generic();
      init_Data43();
      init_Data37();
      init_Data19();
      init_Data13();
      init_Data16();
      init_Data_Show();
      init_Data_String2();
      init_Data_String3();
      init_Data29();
      init_Data22();
      init_Data3();
      init_JSURI();
      init_Routing_Duplex();
      $runtime_lazy7 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      bitraverse2 = /* @__PURE__ */ bitraverse(bitraversableTuple)(applicativeEither);
      traverse2 = /* @__PURE__ */ traverse(traversableArray)(applicativeEither);
      lookup6 = /* @__PURE__ */ lookup(foldableArray)(eqString);
      map10 = /* @__PURE__ */ map(functorNonEmptyArray);
      map12 = /* @__PURE__ */ map(functorFn);
      foldl2 = /* @__PURE__ */ foldl(foldableNonEmptyArray);
      composeKleisli2 = /* @__PURE__ */ composeKleisli(bindEither);
      append7 = /* @__PURE__ */ append(semigroupNonEmptyArray);
      Expected = /* @__PURE__ */ function() {
        function Expected2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Expected2.create = function(value0) {
          return function(value1) {
            return new Expected2(value0, value1);
          };
        };
        return Expected2;
      }();
      ExpectedEndOfPath = /* @__PURE__ */ function() {
        function ExpectedEndOfPath2(value0) {
          this.value0 = value0;
        }
        ;
        ExpectedEndOfPath2.create = function(value0) {
          return new ExpectedEndOfPath2(value0);
        };
        return ExpectedEndOfPath2;
      }();
      MissingParam = /* @__PURE__ */ function() {
        function MissingParam2(value0) {
          this.value0 = value0;
        }
        ;
        MissingParam2.create = function(value0) {
          return new MissingParam2(value0);
        };
        return MissingParam2;
      }();
      MalformedURIComponent = /* @__PURE__ */ function() {
        function MalformedURIComponent2(value0) {
          this.value0 = value0;
        }
        ;
        MalformedURIComponent2.create = function(value0) {
          return new MalformedURIComponent2(value0);
        };
        return MalformedURIComponent2;
      }();
      EndOfPath = /* @__PURE__ */ function() {
        function EndOfPath2() {
        }
        ;
        EndOfPath2.value = new EndOfPath2();
        return EndOfPath2;
      }();
      Fail = /* @__PURE__ */ function() {
        function Fail3(value0) {
          this.value0 = value0;
        }
        ;
        Fail3.create = function(value0) {
          return new Fail3(value0);
        };
        return Fail3;
      }();
      Success = /* @__PURE__ */ function() {
        function Success2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Success2.create = function(value0) {
          return function(value1) {
            return new Success2(value0, value1);
          };
        };
        return Success2;
      }();
      Alt = /* @__PURE__ */ function() {
        function Alt2(value0) {
          this.value0 = value0;
        }
        ;
        Alt2.create = function(value0) {
          return new Alt2(value0);
        };
        return Alt2;
      }();
      Chomp = /* @__PURE__ */ function() {
        function Chomp2(value0) {
          this.value0 = value0;
        }
        ;
        Chomp2.create = function(value0) {
          return new Chomp2(value0);
        };
        return Chomp2;
      }();
      Prefix = /* @__PURE__ */ function() {
        function Prefix2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Prefix2.create = function(value0) {
          return function(value1) {
            return new Prefix2(value0, value1);
          };
        };
        return Prefix2;
      }();
      prefix = /* @__PURE__ */ function() {
        return Prefix.create;
      }();
      parsePath = /* @__PURE__ */ function() {
        var toRouteState = function(v) {
          return {
            segments: v.value0.value0,
            params: v.value0.value1,
            hash: v.value1
          };
        };
        var splitNonEmpty = function(v) {
          return function(v1) {
            if (v1 === "") {
              return [];
            }
            ;
            return split(v)(v1);
          };
        };
        var splitAt4 = function(k) {
          return function(p2) {
            return function(str) {
              var v = indexOf(p2)(str);
              if (v instanceof Just) {
                return new Tuple(take3(v.value0)(str), drop3(v.value0 + length5(p2) | 0)(str));
              }
              ;
              if (v instanceof Nothing) {
                return k(str);
              }
              ;
              throw new Error("Failed pattern match at Routing.Duplex.Parser (line 191, column 5 - line 193, column 23): " + [v.constructor.name]);
            };
          };
        };
        var decodeURIComponent$prime = function(str) {
          var v = $$decodeURIComponent(str);
          if (v instanceof Nothing) {
            return new Left(new MalformedURIComponent(str));
          }
          ;
          if (v instanceof Just) {
            return new Right(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Routing.Duplex.Parser (line 195, column 29 - line 197, column 22): " + [v.constructor.name]);
        };
        var splitKeyValue = function() {
          var $349 = bitraverse2(decodeURIComponent$prime)(decodeURIComponent$prime);
          var $350 = splitAt4(flip(Tuple.create)(""))("=");
          return function($351) {
            return $349($350($351));
          };
        }();
        var splitParams = function() {
          var $352 = traverse2(splitKeyValue);
          var $353 = splitNonEmpty("&");
          return function($354) {
            return $352($353($354));
          };
        }();
        var splitSegments = function() {
          var $355 = splitNonEmpty("/");
          return function($356) {
            return function(v) {
              if (v.length === 2 && (v[0] === "" && v[1] === "")) {
                return new Right([""]);
              }
              ;
              return traverse2(decodeURIComponent$prime)(v);
            }($355($356));
          };
        }();
        var splitPath = function() {
          var $357 = bitraverse2(splitSegments)(splitParams);
          var $358 = splitAt4(flip(Tuple.create)(""))("?");
          return function($359) {
            return $357($358($359));
          };
        }();
        var $360 = map(functorEither)(toRouteState);
        var $361 = ltraverse(bitraversableTuple)(applicativeEither)(splitPath);
        var $362 = splitAt4(flip(Tuple.create)(""))("#");
        return function($363) {
          return $360($361($362($363)));
        };
      }();
      param = function(key) {
        return new Chomp(function(state3) {
          var v = lookup6(key)(state3.params);
          if (v instanceof Just) {
            return new Success(state3, v.value0);
          }
          ;
          return new Fail(new MissingParam(key));
        });
      };
      functorRouteResult = {
        map: function(f) {
          return function(m) {
            if (m instanceof Fail) {
              return new Fail(m.value0);
            }
            ;
            if (m instanceof Success) {
              return new Success(m.value0, f(m.value1));
            }
            ;
            throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
          };
        }
      };
      map22 = /* @__PURE__ */ map(functorRouteResult);
      functorRouteParser = {
        map: function(f) {
          return function(m) {
            if (m instanceof Alt) {
              return new Alt(map10(map(functorRouteParser)(f))(m.value0));
            }
            ;
            if (m instanceof Chomp) {
              return new Chomp(map12(map22(f))(m.value0));
            }
            ;
            if (m instanceof Prefix) {
              return new Prefix(m.value0, map(functorRouteParser)(f)(m.value1));
            }
            ;
            throw new Error("Failed pattern match at Routing.Duplex.Parser (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
          };
        }
      };
      end = /* @__PURE__ */ function() {
        return new Chomp(function(state3) {
          var v = head3(state3.segments);
          if (v instanceof Nothing) {
            return new Success(state3, unit);
          }
          ;
          if (v instanceof Just) {
            return new Fail(new ExpectedEndOfPath(v.value0));
          }
          ;
          throw new Error("Failed pattern match at Routing.Duplex.Parser (line 266, column 3 - line 268, column 45): " + [v.constructor.name]);
        });
      }();
      chompPrefix = function(pre2) {
        return function(state3) {
          var v = head3(state3.segments);
          if (v instanceof Just && pre2 === v.value0) {
            return new Success({
              segments: drop2(1)(state3.segments),
              params: state3.params,
              hash: state3.hash
            }, unit);
          }
          ;
          if (v instanceof Just) {
            return new Fail(new Expected(pre2, v.value0));
          }
          ;
          return new Fail(EndOfPath.value);
        };
      };
      $lazy_runRouteParser = /* @__PURE__ */ $runtime_lazy7("runRouteParser", "Routing.Duplex.Parser", function() {
        var goAlt = function(v) {
          return function(v1) {
            return function(v2) {
              if (v1 instanceof Fail) {
                return $lazy_runRouteParser(161)(v)(v2);
              }
              ;
              return v1;
            };
          };
        };
        var go2 = function($copy_state) {
          return function($copy_v) {
            var $tco_var_state = $copy_state;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(state3, v) {
              if (v instanceof Alt) {
                $tco_done = true;
                return foldl2(goAlt(state3))(new Fail(EndOfPath.value))(v.value0);
              }
              ;
              if (v instanceof Chomp) {
                $tco_done = true;
                return v.value0(state3);
              }
              ;
              if (v instanceof Prefix) {
                var v1 = chompPrefix(v.value0)(state3);
                if (v1 instanceof Fail) {
                  $tco_done = true;
                  return new Fail(v1.value0);
                }
                ;
                if (v1 instanceof Success) {
                  $tco_var_state = v1.value0;
                  $copy_v = v.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Routing.Duplex.Parser (line 157, column 7 - line 159, column 40): " + [v1.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Routing.Duplex.Parser (line 153, column 14 - line 159, column 40): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_state, $copy_v);
            }
            ;
            return $tco_result;
          };
        };
        return go2;
      });
      runRouteParser = /* @__PURE__ */ $lazy_runRouteParser(150);
      run3 = function(p2) {
        return composeKleisli2(parsePath)(function() {
          var $366 = flip(runRouteParser)(p2);
          return function($367) {
            return function(v) {
              if (v instanceof Fail) {
                return new Left(v.value0);
              }
              ;
              if (v instanceof Success) {
                return new Right(v.value1);
              }
              ;
              throw new Error("Failed pattern match at Routing.Duplex.Parser (line 200, column 49 - line 202, column 29): " + [v.constructor.name]);
            }($366($367));
          };
        }());
      };
      applyRouteParser = {
        apply: function(fx) {
          return function(x) {
            return new Chomp(function(state3) {
              var v = runRouteParser(state3)(fx);
              if (v instanceof Fail) {
                return new Fail(v.value0);
              }
              ;
              if (v instanceof Success) {
                return map22(v.value1)(runRouteParser(v.value0)(x));
              }
              ;
              throw new Error("Failed pattern match at Routing.Duplex.Parser (line 81, column 5 - line 83, column 56): " + [v.constructor.name]);
            });
          };
        },
        Functor0: function() {
          return functorRouteParser;
        }
      };
      applicativeRouteParser = {
        pure: /* @__PURE__ */ function() {
          var $368 = flip(Success.create);
          return function($369) {
            return Chomp.create($368($369));
          };
        }(),
        Apply0: function() {
          return applyRouteParser;
        }
      };
      altSnoc = function(v) {
        return function(v1) {
          var v2 = function(v3) {
            return snoc5(v)(v1);
          };
          if (v1 instanceof Prefix) {
            var $310 = last3(v);
            if ($310 instanceof Prefix) {
              var $311 = v1.value0 === $310.value0;
              if ($311) {
                return snoc$prime(init3(v))(new Prefix(v1.value0, alt(altRouteParser)($310.value1)(v1.value1)));
              }
              ;
              return v2(true);
            }
            ;
            return v2(true);
          }
          ;
          return v2(true);
        };
      };
      altRouteParser = {
        alt: function(v) {
          return function(v1) {
            if (v instanceof Alt && v1 instanceof Alt) {
              return new Alt(altAppend(v.value0)(v1.value0));
            }
            ;
            if (v instanceof Alt) {
              return new Alt(altSnoc(v.value0)(v1));
            }
            ;
            if (v1 instanceof Alt) {
              return new Alt(altCons(v)(v1.value0));
            }
            ;
            if (v instanceof Prefix && (v1 instanceof Prefix && v.value0 === v1.value0)) {
              return new Prefix(v.value0, alt(altRouteParser)(v.value1)(v1.value1));
            }
            ;
            return new Alt(cons4(v)(singleton6(v1)));
          };
        },
        Functor0: function() {
          return functorRouteParser;
        }
      };
      altCons = function(v) {
        return function(v1) {
          var v2 = function(v3) {
            return cons4(v)(v1);
          };
          if (v instanceof Prefix) {
            var $330 = head4(v1);
            if ($330 instanceof Prefix) {
              var $331 = v.value0 === $330.value0;
              if ($331) {
                return cons$prime2(new Prefix(v.value0, alt(altRouteParser)(v.value1)($330.value1)))(tail2(v1));
              }
              ;
              return v2(true);
            }
            ;
            return v2(true);
          }
          ;
          return v2(true);
        };
      };
      altAppend = function($copy_ls) {
        return function($copy_rs) {
          var $tco_var_ls = $copy_ls;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(ls, rs) {
            var v = function(v12) {
              if (otherwise) {
                return append7(ls)(rs);
              }
              ;
              throw new Error("Failed pattern match at Routing.Duplex.Parser (line 103, column 1 - line 107, column 35): " + [ls.constructor.name, rs.constructor.name]);
            };
            var $340 = last3(ls);
            if ($340 instanceof Prefix) {
              var $341 = head4(rs);
              if ($341 instanceof Prefix) {
                var $342 = $340.value0 === $341.value0;
                if ($342) {
                  var rs$prime = cons$prime2(new Prefix($340.value0, alt(altRouteParser)($340.value1)($341.value1)))(tail2(rs));
                  var v1 = fromArray(init3(ls));
                  if (v1 instanceof Just) {
                    $tco_var_ls = v1.value0;
                    $copy_rs = rs$prime;
                    return;
                  }
                  ;
                  if (v1 instanceof Nothing) {
                    $tco_done = true;
                    return rs$prime;
                  }
                  ;
                  throw new Error("Failed pattern match at Routing.Duplex.Parser (line 116, column 9 - line 118, column 25): " + [v1.constructor.name]);
                }
                ;
                $tco_done = true;
                return v(true);
              }
              ;
              $tco_done = true;
              return v(true);
            }
            ;
            $tco_done = true;
            return v(true);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_ls, $copy_rs);
          }
          ;
          return $tco_result;
        };
      };
    }
  });

  // output/Routing.Duplex.Printer/index.js
  var append8, semigroupRoutePrinter, put2, printPath, param2, run4, monoidRoutePRinter;
  var init_Routing_Duplex3 = __esm({
    "output/Routing.Duplex.Printer/index.js"() {
      init_Control2();
      init_Data40();
      init_Data();
      init_Data2();
      init_Data19();
      init_Data14();
      init_Data24();
      init_Data13();
      init_Data_String3();
      init_Data22();
      init_JSURI();
      init_Routing_Duplex();
      append8 = /* @__PURE__ */ append(/* @__PURE__ */ semigroupMaybe(semigroupString));
      semigroupRoutePrinter = {
        append: function(v) {
          return function(v1) {
            return function($33) {
              return v1(v($33));
            };
          };
        }
      };
      put2 = function(str) {
        return function(state3) {
          return {
            segments: snoc4(state3.segments)(str),
            params: state3.params,
            hash: state3.hash
          };
        };
      };
      printPath = function(v) {
        var printSegments = function(v1) {
          if (v1.length === 1 && v1[0] === "") {
            return "/";
          }
          ;
          return joinWith("/")(mapMaybe2($$encodeURIComponent)(v1));
        };
        var printParam = function(v1) {
          return function(v2) {
            if (v2 === "") {
              return $$encodeURIComponent(v1);
            }
            ;
            return append8($$encodeURIComponent(v1))(append8(new Just("="))($$encodeURIComponent(v2)));
          };
        };
        var printParams = function(v1) {
          if (v1.length === 0) {
            return "";
          }
          ;
          return "?" + joinWith("&")(mapMaybe2(uncurry(printParam))(v1));
        };
        var printHash = function(v1) {
          if (v1 === "") {
            return "";
          }
          ;
          return "#" + v1;
        };
        return printSegments(v.segments) + (printParams(v.params) + printHash(v.hash));
      };
      param2 = function(key) {
        return function(val) {
          return function(state3) {
            return {
              segments: state3.segments,
              params: cons3(new Tuple(key, val))(state3.params),
              hash: state3.hash
            };
          };
        };
      };
      run4 = /* @__PURE__ */ function() {
        var $34 = applyFlipped(emptyRouteState);
        var $35 = unwrap();
        return function($36) {
          return printPath($34($35($36)));
        };
      }();
      monoidRoutePRinter = {
        mempty: /* @__PURE__ */ identity(categoryFn),
        Semigroup0: function() {
          return semigroupRoutePrinter;
        }
      };
    }
  });

  // output/Routing.Duplex/index.js
  var append9, applyFirst4, pure6, apply2, map11, mempty2, apply1, map13, RouteDuplex, profunctorRouteDuplex, print, prefix2, path, root, parse2, param3, functorRouteDuplex, end2, applyRouteDuplex, applicativeRouteDuplex;
  var init_Routing = __esm({
    "output/Routing.Duplex/index.js"() {
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data14();
      init_Data13();
      init_Data16();
      init_Data_String3();
      init_Data5();
      init_Data3();
      init_Record2();
      init_Routing_Duplex2();
      init_Routing_Duplex3();
      init_Type();
      append9 = /* @__PURE__ */ append(semigroupRoutePrinter);
      applyFirst4 = /* @__PURE__ */ applyFirst(applyRouteParser);
      pure6 = /* @__PURE__ */ pure(applicativeRouteParser);
      apply2 = /* @__PURE__ */ apply(applyRouteParser);
      map11 = /* @__PURE__ */ map(functorRouteParser);
      mempty2 = /* @__PURE__ */ mempty(monoidRoutePRinter);
      apply1 = /* @__PURE__ */ apply(applyFn);
      map13 = /* @__PURE__ */ map(functorFn);
      RouteDuplex = /* @__PURE__ */ function() {
        function RouteDuplex2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        RouteDuplex2.create = function(value0) {
          return function(value1) {
            return new RouteDuplex2(value0, value1);
          };
        };
        return RouteDuplex2;
      }();
      profunctorRouteDuplex = {
        dimap: function(f) {
          return function(g) {
            return function(v) {
              return new RouteDuplex(function($137) {
                return v.value0(f($137));
              }, map11(g)(v.value1));
            };
          };
        }
      };
      print = function(v) {
        return function($138) {
          return run4(v.value0($138));
        };
      };
      prefix2 = function(s) {
        return function(v) {
          return new RouteDuplex(function(a2) {
            return append9(put2(s))(v.value0(a2));
          }, prefix(s)(v.value1));
        };
      };
      path = /* @__PURE__ */ function() {
        var $139 = flip(foldr(foldableArray)(prefix2));
        var $140 = split("/");
        return function($141) {
          return $139($140($141));
        };
      }();
      root = /* @__PURE__ */ path("");
      parse2 = function(v) {
        return run3(v.value1);
      };
      param3 = function(p2) {
        return new RouteDuplex(param2(p2), param(p2));
      };
      functorRouteDuplex = {
        map: function(f) {
          return function(m) {
            return new RouteDuplex(m.value0, map11(f)(m.value1));
          };
        }
      };
      end2 = function(v) {
        return new RouteDuplex(v.value0, applyFirst4(v.value1)(end));
      };
      applyRouteDuplex = {
        apply: function(v) {
          return function(v1) {
            return new RouteDuplex(apply1(map13(append9)(v.value0))(v1.value0), apply2(v.value1)(v1.value1));
          };
        },
        Functor0: function() {
          return functorRouteDuplex;
        }
      };
      applicativeRouteDuplex = {
        pure: /* @__PURE__ */ function() {
          var $143 = RouteDuplex.create($$const(mempty2));
          return function($144) {
            return $143(pure6($144));
          };
        }(),
        Apply0: function() {
          return applyRouteDuplex;
        }
      };
    }
  });

  // output/Routing.Duplex.Generic/index.js
  var identity14, map14, alt3, dimap2, noArgs, gRouteNoArguments, gRouteDuplexCtr, gRouteDuplex, gRouteSum, sum2, gRouteConstructor, gRouteArgument, gRouteAll;
  var init_Routing_Duplex4 = __esm({
    "output/Routing.Duplex.Generic/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control2();
      init_Data4();
      init_Data_Generic();
      init_Data39();
      init_Data13();
      init_Record2();
      init_Routing();
      init_Routing_Duplex2();
      init_Routing_Duplex3();
      init_Type();
      identity14 = /* @__PURE__ */ identity(categoryFn);
      map14 = /* @__PURE__ */ map(functorRouteParser);
      alt3 = /* @__PURE__ */ alt(altRouteParser);
      dimap2 = /* @__PURE__ */ dimap(profunctorRouteDuplex);
      noArgs = /* @__PURE__ */ function() {
        return pure(applicativeRouteDuplex)(NoArguments.value);
      }();
      gRouteNoArguments = {
        gRouteDuplexCtr: identity14
      };
      gRouteDuplexCtr = function(dict) {
        return dict.gRouteDuplexCtr;
      };
      gRouteDuplex = function(dict) {
        return dict.gRouteDuplex;
      };
      gRouteSum = function(dictGRouteDuplex) {
        var gRouteDuplex1 = gRouteDuplex(dictGRouteDuplex);
        return function(dictGRouteDuplex1) {
          var gRouteDuplex2 = gRouteDuplex(dictGRouteDuplex1);
          return {
            gRouteDuplex: function(end$prime) {
              return function(r) {
                var v = gRouteDuplex1(end$prime)(r);
                var v1 = gRouteDuplex2(end$prime)(r);
                var enc = function(v2) {
                  if (v2 instanceof Inl) {
                    return v.value0(v2.value0);
                  }
                  ;
                  if (v2 instanceof Inr) {
                    return v1.value0(v2.value0);
                  }
                  ;
                  throw new Error("Failed pattern match at Routing.Duplex.Generic (line 51, column 11 - line 53, column 22): " + [v2.constructor.name]);
                };
                var dec = alt3(map14(Inl.create)(v.value1))(map14(Inr.create)(v1.value1));
                return new RouteDuplex(enc, dec);
              };
            }
          };
        };
      };
      sum2 = function(dictGeneric) {
        var from3 = from(dictGeneric);
        var to2 = to(dictGeneric);
        return function(dictGRouteDuplex) {
          var $71 = dimap2(from3)(to2);
          var $72 = gRouteDuplex(dictGRouteDuplex)(end2);
          return function($73) {
            return $71($72($73));
          };
        };
      };
      gRouteConstructor = function(dictIsSymbol) {
        var get7 = get2(dictIsSymbol)();
        return function() {
          return function(dictGRouteDuplexCtr) {
            var gRouteDuplexCtr1 = gRouteDuplexCtr(dictGRouteDuplexCtr);
            return {
              gRouteDuplex: function(end$prime) {
                return function(r) {
                  var v = end$prime(gRouteDuplexCtr1(get7($$Proxy.value)(r)));
                  var enc = function(v1) {
                    return v.value0(v1);
                  };
                  var dec = map14(Constructor)(v.value1);
                  return new RouteDuplex(enc, dec);
                };
              }
            };
          };
        };
      };
      gRouteArgument = {
        gRouteDuplexCtr: identity14
      };
      gRouteAll = {
        gRouteDuplexCtr: function(v) {
          return new RouteDuplex(function(v1) {
            return v.value0(v1);
          }, map14(Argument)(v.value1));
        }
      };
    }
  });

  // output/Routing.Duplex.Generic.Syntax/index.js
  var gsepStringRoute, gsep;
  var init_Routing_Duplex_Generic = __esm({
    "output/Routing.Duplex.Generic.Syntax/index.js"() {
      init_Control4();
      init_Data3();
      init_Routing();
      init_Routing_Duplex4();
      gsepStringRoute = function(dictGRouteDuplexCtr) {
        var gRouteDuplexCtr2 = gRouteDuplexCtr(dictGRouteDuplexCtr);
        return {
          gsep: function(a2) {
            var $15 = prefix2(a2);
            return function($16) {
              return $15(gRouteDuplexCtr2($16));
            };
          }
        };
      };
      gsep = function(dict) {
        return dict.gsep;
      };
    }
  });

  // output/App.Data.Route/index.js
  var gsep2, Home, Login, Register, EmailConfirmation, File2, showRoute, genericRoute, routeCodec, eqRoute;
  var init_App_Data4 = __esm({
    "output/App.Data.Route/index.js"() {
      init_Data_Generic();
      init_Data15();
      init_Data11();
      init_Routing();
      init_Routing_Duplex4();
      init_Routing_Duplex_Generic();
      gsep2 = /* @__PURE__ */ gsep(/* @__PURE__ */ gsepStringRoute(gRouteNoArguments));
      Home = /* @__PURE__ */ function() {
        function Home2() {
        }
        ;
        Home2.value = new Home2();
        return Home2;
      }();
      Login = /* @__PURE__ */ function() {
        function Login2() {
        }
        ;
        Login2.value = new Login2();
        return Login2;
      }();
      Register = /* @__PURE__ */ function() {
        function Register2() {
        }
        ;
        Register2.value = new Register2();
        return Register2;
      }();
      EmailConfirmation = /* @__PURE__ */ function() {
        function EmailConfirmation2(value0) {
          this.value0 = value0;
        }
        ;
        EmailConfirmation2.create = function(value0) {
          return new EmailConfirmation2(value0);
        };
        return EmailConfirmation2;
      }();
      File2 = /* @__PURE__ */ function() {
        function File3() {
        }
        ;
        File3.value = new File3();
        return File3;
      }();
      showRoute = {
        show: function(v) {
          if (v instanceof Home) {
            return "home";
          }
          ;
          if (v instanceof Login) {
            return "profile/login";
          }
          ;
          if (v instanceof Register) {
            return "profile/register";
          }
          ;
          if (v instanceof EmailConfirmation) {
            return "profile/email/confirm?registration_key=" + v.value0;
          }
          ;
          if (v instanceof File2) {
            return "file";
          }
          ;
          throw new Error("Failed pattern match at App.Data.Route (line 41, column 1 - line 46, column 21): " + [v.constructor.name]);
        }
      };
      genericRoute = {
        to: function(x) {
          if (x instanceof Inl) {
            return Home.value;
          }
          ;
          if (x instanceof Inr && x.value0 instanceof Inl) {
            return Login.value;
          }
          ;
          if (x instanceof Inr && (x.value0 instanceof Inr && x.value0.value0 instanceof Inl)) {
            return Register.value;
          }
          ;
          if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inl))) {
            return new EmailConfirmation(x.value0.value0.value0.value0);
          }
          ;
          if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inr))) {
            return File2.value;
          }
          ;
          throw new Error("Failed pattern match at App.Data.Route (line 37, column 1 - line 37, column 48): " + [x.constructor.name]);
        },
        from: function(x) {
          if (x instanceof Home) {
            return new Inl(NoArguments.value);
          }
          ;
          if (x instanceof Login) {
            return new Inr(new Inl(NoArguments.value));
          }
          ;
          if (x instanceof Register) {
            return new Inr(new Inr(new Inl(NoArguments.value)));
          }
          ;
          if (x instanceof EmailConfirmation) {
            return new Inr(new Inr(new Inr(new Inl(x.value0))));
          }
          ;
          if (x instanceof File2) {
            return new Inr(new Inr(new Inr(new Inr(NoArguments.value))));
          }
          ;
          throw new Error("Failed pattern match at App.Data.Route (line 37, column 1 - line 37, column 48): " + [x.constructor.name]);
        }
      };
      routeCodec = /* @__PURE__ */ root(/* @__PURE__ */ sum2(genericRoute)(/* @__PURE__ */ gRouteSum(/* @__PURE__ */ gRouteConstructor({
        reflectSymbol: function() {
          return "Home";
        }
      })()(gRouteNoArguments))(/* @__PURE__ */ gRouteSum(/* @__PURE__ */ gRouteConstructor({
        reflectSymbol: function() {
          return "Login";
        }
      })()(gRouteNoArguments))(/* @__PURE__ */ gRouteSum(/* @__PURE__ */ gRouteConstructor({
        reflectSymbol: function() {
          return "Register";
        }
      })()(gRouteNoArguments))(/* @__PURE__ */ gRouteSum(/* @__PURE__ */ gRouteConstructor({
        reflectSymbol: function() {
          return "EmailConfirmation";
        }
      })()(gRouteArgument))(/* @__PURE__ */ gRouteConstructor({
        reflectSymbol: function() {
          return "File";
        }
      })()(gRouteNoArguments))))))({
        Home: noArgs,
        Login: /* @__PURE__ */ gsep2("login")(noArgs),
        Register: /* @__PURE__ */ gsep2("register")(noArgs),
        EmailConfirmation: /* @__PURE__ */ gsep(/* @__PURE__ */ gsepStringRoute(gRouteArgument))("email")(/* @__PURE__ */ gsep(/* @__PURE__ */ gsepStringRoute(gRouteAll))("confirm")(/* @__PURE__ */ param3("activation_token"))),
        File: /* @__PURE__ */ gsep2("file")(noArgs)
      }));
      eqRoute = {
        eq: function(x) {
          return function(y) {
            if (x instanceof Home && y instanceof Home) {
              return true;
            }
            ;
            if (x instanceof Login && y instanceof Login) {
              return true;
            }
            ;
            if (x instanceof Register && y instanceof Register) {
              return true;
            }
            ;
            if (x instanceof EmailConfirmation && y instanceof EmailConfirmation) {
              return x.value0 === y.value0;
            }
            ;
            if (x instanceof File2 && y instanceof File2) {
              return true;
            }
            ;
            return false;
          };
        }
      };
    }
  });

  // node_modules/component-emitter/index.js
  var require_component_emitter = __commonJS({
    "node_modules/component-emitter/index.js"(exports, module) {
      if (typeof module !== "undefined") {
        module.exports = Emitter;
      }
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        function on4() {
          this.off(event, on4);
          fn.apply(this, arguments);
        }
        on4.fn = fn;
        this.on(event, on4);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks["$" + event];
        if (!callbacks)
          return this;
        if (1 == arguments.length) {
          delete this._callbacks["$" + event];
          return this;
        }
        var cb;
        for (var i2 = 0; i2 < callbacks.length; i2++) {
          cb = callbacks[i2];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i2, 1);
            break;
          }
        }
        if (callbacks.length === 0) {
          delete this._callbacks["$" + event];
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
        for (var i2 = 1; i2 < arguments.length; i2++) {
          args[i2 - 1] = arguments[i2];
        }
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
            callbacks[i2].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }
  });

  // node_modules/fast-safe-stringify/index.js
  var require_fast_safe_stringify = __commonJS({
    "node_modules/fast-safe-stringify/index.js"(exports, module) {
      module.exports = stringify2;
      stringify2.default = stringify2;
      stringify2.stable = deterministicStringify;
      stringify2.stableStringify = deterministicStringify;
      var LIMIT_REPLACE_NODE = "[...]";
      var CIRCULAR_REPLACE_NODE = "[Circular]";
      var arr = [];
      var replacerStack = [];
      function defaultOptions() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER
        };
      }
      function stringify2(obj, replacer, spacer, options2) {
        if (typeof options2 === "undefined") {
          options2 = defaultOptions();
        }
        decirc(obj, "", 0, [], void 0, 0, options2);
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function setReplace(replace4, val, k, parent2) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent2, k);
        if (propertyDescriptor.get !== void 0) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent2, k, { value: replace4 });
            arr.push([parent2, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k, replace4]);
          }
        } else {
          parent2[k] = replace4;
          arr.push([parent2, k, val]);
        }
      }
      function decirc(val, k, edgeIndex, stack, parent2, depth, options2) {
        depth += 1;
        var i2;
        if (typeof val === "object" && val !== null) {
          for (i2 = 0; i2 < stack.length; i2++) {
            if (stack[i2] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent2);
              return;
            }
          }
          if (typeof options2.depthLimit !== "undefined" && depth > options2.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent2);
            return;
          }
          if (typeof options2.edgesLimit !== "undefined" && edgeIndex + 1 > options2.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent2);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i2 = 0; i2 < val.length; i2++) {
              decirc(val[i2], i2, i2, stack, val, depth, options2);
            }
          } else {
            var keys3 = Object.keys(val);
            for (i2 = 0; i2 < keys3.length; i2++) {
              var key = keys3[i2];
              decirc(val[key], key, i2, stack, val, depth, options2);
            }
          }
          stack.pop();
        }
      }
      function compareFunction(a2, b2) {
        if (a2 < b2) {
          return -1;
        }
        if (a2 > b2) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer, options2) {
        if (typeof options2 === "undefined") {
          options2 = defaultOptions();
        }
        var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options2) || obj;
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, edgeIndex, stack, parent2, depth, options2) {
        depth += 1;
        var i2;
        if (typeof val === "object" && val !== null) {
          for (i2 = 0; i2 < stack.length; i2++) {
            if (stack[i2] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent2);
              return;
            }
          }
          try {
            if (typeof val.toJSON === "function") {
              return;
            }
          } catch (_) {
            return;
          }
          if (typeof options2.depthLimit !== "undefined" && depth > options2.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent2);
            return;
          }
          if (typeof options2.edgesLimit !== "undefined" && edgeIndex + 1 > options2.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent2);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i2 = 0; i2 < val.length; i2++) {
              deterministicDecirc(val[i2], i2, i2, stack, val, depth, options2);
            }
          } else {
            var tmp = {};
            var keys3 = Object.keys(val).sort(compareFunction);
            for (i2 = 0; i2 < keys3.length; i2++) {
              var key = keys3[i2];
              deterministicDecirc(val[key], key, i2, stack, val, depth, options2);
              tmp[key] = val[key];
            }
            if (typeof parent2 !== "undefined") {
              arr.push([parent2, k, val]);
              parent2[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack.pop();
        }
      }
      function replaceGetterValues(replacer) {
        replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
          return v;
        };
        return function(key, val) {
          if (replacerStack.length > 0) {
            for (var i2 = 0; i2 < replacerStack.length; i2++) {
              var part = replacerStack[i2];
              if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i2, 1);
                break;
              }
            }
          }
          return replacer.call(this, key, val);
        };
      }
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/has-proto/index.js
  var require_has_proto = __commonJS({
    "node_modules/has-proto/index.js"(exports, module) {
      "use strict";
      var test2 = {
        foo: {}
      };
      var $Object = Object;
      module.exports = function hasProto() {
        return { __proto__: test2 }.foo === test2.foo && !({ __proto__: null } instanceof $Object);
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var slice3 = Array.prototype.slice;
      var toStr = Object.prototype.toString;
      var funcType = "[object Function]";
      module.exports = function bind21(that) {
        var target6 = this;
        if (typeof target6 !== "function" || toStr.call(target6) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target6);
        }
        var args = slice3.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target6.apply(
              this,
              args.concat(slice3.call(arguments))
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target6.apply(
              that,
              args.concat(slice3.call(arguments))
            );
          }
        };
        var boundLength = Math.max(0, target6.length - args.length);
        var boundArgs = [];
        for (var i2 = 0; i2 < boundLength; i2++) {
          boundArgs.push("$" + i2);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target6.prototype) {
          var Empty2 = function Empty3() {
          };
          Empty2.prototype = target6.prototype;
          bound.prototype = new Empty2();
          Empty2.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/has/src/index.js
  var require_src = __commonJS({
    "node_modules/has/src/index.js"(exports, module) {
      "use strict";
      var bind21 = require_function_bind();
      module.exports = bind21.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined3;
      var $SyntaxError = SyntaxError;
      var $Function = Function;
      var $TypeError = TypeError;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var hasProto = require_has_proto()();
      var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
        return x.__proto__;
      } : null);
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined3 : getProto(Uint8Array);
      var INTRINSICS = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined3 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined3 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined3,
        "%AsyncFromSyncIteratorPrototype%": undefined3,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined3 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined3 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined3 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined3 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined3 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined3 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined3 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined3 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined3 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined3 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined3 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined3,
        "%JSON%": typeof JSON === "object" ? JSON : undefined3,
        "%Map%": typeof Map === "undefined" ? undefined3 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined3 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined3 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined3 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined3 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined3 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined3 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined3 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined3,
        "%Symbol%": hasSymbols ? Symbol : undefined3,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined3 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined3 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined3 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined3 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined3 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined3 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined3 : WeakSet
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name16) {
        var value17;
        if (name16 === "%AsyncFunction%") {
          value17 = getEvalledConstructor("async function () {}");
        } else if (name16 === "%GeneratorFunction%") {
          value17 = getEvalledConstructor("function* () {}");
        } else if (name16 === "%AsyncGeneratorFunction%") {
          value17 = getEvalledConstructor("async function* () {}");
        } else if (name16 === "%AsyncGenerator%") {
          var fn = doEval2("%AsyncGeneratorFunction%");
          if (fn) {
            value17 = fn.prototype;
          }
        } else if (name16 === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value17 = getProto(gen.prototype);
          }
        }
        INTRINSICS[name16] = value17;
        return value17;
      };
      var LEGACY_ALIASES = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind21 = require_function_bind();
      var hasOwn = require_src();
      var $concat = bind21.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind21.call(Function.apply, Array.prototype.splice);
      var $replace = bind21.call(Function.call, String.prototype.replace);
      var $strSlice = bind21.call(Function.call, String.prototype.slice);
      var $exec = bind21.call(Function.call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string3) {
        var first = $strSlice(string3, 0, 1);
        var last4 = $strSlice(string3, -1);
        if (first === "%" && last4 !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last4 === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string3, rePropName, function(match3, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match3;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name16, allowMissing) {
        var intrinsicName = name16;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value17 = INTRINSICS[intrinsicName];
          if (value17 === needsEval) {
            value17 = doEval(intrinsicName);
          }
          if (typeof value17 === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name16 + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value: value17
          };
        }
        throw new $SyntaxError("intrinsic " + name16 + " does not exist!");
      };
      module.exports = function GetIntrinsic(name16, allowMissing) {
        if (typeof name16 !== "string" || name16.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name16) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name16);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value17 = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
          var part = parts[i2];
          var first = $strSlice(part, 0, 1);
          var last4 = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last4 === '"' || last4 === "'" || last4 === "`")) && first !== last4) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value17 = INTRINSICS[intrinsicRealName];
          } else if (value17 != null) {
            if (!(part in value17)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name16 + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i2 + 1 >= parts.length) {
              var desc = $gOPD(value17, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value17 = desc.get;
              } else {
                value17 = value17[part];
              }
            } else {
              isOwn = hasOwn(value17, part);
              value17 = value17[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value17;
            }
          }
        }
        return value17;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind21 = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind21.call($call, $apply);
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
      var $max = GetIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind(originalFunction) {
        var func = $reflectApply(bind21, $call, arguments);
        if ($gOPD && $defineProperty) {
          var desc = $gOPD(func, "length");
          if (desc.configurable) {
            $defineProperty(
              func,
              "length",
              { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
            );
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind21, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name16, allowMissing) {
        var intrinsic = GetIntrinsic(name16, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name16, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // (disabled):node_modules/object-inspect/util.inspect
  var require_util = __commonJS({
    "(disabled):node_modules/object-inspect/util.inspect"() {
    }
  });

  // node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "node_modules/object-inspect/index.js"(exports, module) {
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize3 = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      module.exports = function inspect_(obj, options2, depth, seen) {
        var opts = options2 || {};
        if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray2(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf3(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value17, from3, noIndent) {
          if (from3) {
            seen = $arrSlice.call(seen);
            seen.push(from3);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value17, newOpts, depth + 1, seen);
          }
          return inspect_(value17, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp(obj)) {
          var name16 = nameOf(obj);
          var keys3 = arrObjKeys(obj, inspect);
          return "[Function" + (name16 ? ": " + name16 : " (anonymous)") + "]" + (keys3.length > 0 ? " { " + $join.call(keys3, ", ") + " }" : "");
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement(obj)) {
          var s = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i2 = 0; i2 < attrs.length; i2++) {
            s += " " + attrs[i2].name + "=" + wrapQuotes(quote(attrs[i2].value), "double", opts);
          }
          s += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s += "...";
          }
          s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s;
        }
        if (isArray2(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap2(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value17, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value17, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value17) {
              setParts.push(inspect(value17, obj));
            });
          }
          return collectionOf("Set", setSize3.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (!isDate(obj) && !isRegExp(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function isArray2(obj) {
        return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isDate(obj) {
        return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isRegExp(obj) {
        return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isString(obj) {
        return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isNumber(obj) {
        return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isBoolean(obj) {
        return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isSymbol(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf3(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i2 = 0, l = xs.length; i2 < l; i2++) {
          if (xs[i2] === x) {
            return i2;
          }
        }
        return -1;
      }
      function isMap2(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize3.call(x);
          } catch (s) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet(x) {
        if (!setSize3 || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize3.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, "single", opts);
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size5, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
        return type + " (" + size5 + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i2 = 0; i2 < xs.length; i2++) {
          if (indexOf3(xs[i2], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray2(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i2 = 0; i2 < obj.length; i2++) {
            xs[i2] = has(obj, i2) ? inspect(obj[i2], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_callBound();
      var inspect = require_object_inspect();
      var $TypeError = GetIntrinsic("%TypeError%");
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $Map = GetIntrinsic("%Map%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var listGetNode = function(list, key) {
        for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            curr.next = list.next;
            list.next = curr;
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value17) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value17;
        } else {
          objects.next = {
            // eslint-disable-line no-param-reassign
            key,
            next: objects.next,
            value: value17
          };
        }
      };
      var listHas = function(objects, key) {
        return !!listGetNode(objects, key);
      };
      module.exports = function getSideChannel() {
        var $wm;
        var $m;
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapGet($m, key);
              }
            } else {
              if ($o) {
                return listGet($o, key);
              }
            }
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapHas($m, key);
              }
            } else {
              if ($o) {
                return listHas($o, key);
              }
            }
            return false;
          },
          set: function(key, value17) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value17);
            } else if ($Map) {
              if (!$m) {
                $m = new $Map();
              }
              $mapSet($m, key, value17);
            } else {
              if (!$o) {
                $o = { key: {}, next: null };
              }
              listSet($o, key, value17);
            }
          }
        };
        return channel;
      };
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace4 = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value17) {
            return replace4.call(value17, percentTwenties, "+");
          },
          RFC3986: function(value17) {
            return String(value17);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var hexTable = function() {
        var array = [];
        for (var i2 = 0; i2 < 256; ++i2) {
          array.push("%" + ((i2 < 16 ? "0" : "") + i2.toString(16)).toUpperCase());
        }
        return array;
      }();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item2 = queue.pop();
          var obj = item2.obj[item2.prop];
          if (isArray2(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted.push(obj[j]);
              }
            }
            item2.obj[item2.prop] = compacted;
          }
        }
      };
      var arrayToObject = function arrayToObject2(source3, options2) {
        var obj = options2 && options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var i2 = 0; i2 < source3.length; ++i2) {
          if (typeof source3[i2] !== "undefined") {
            obj[i2] = source3[i2];
          }
        }
        return obj;
      };
      var merge3 = function merge4(target6, source3, options2) {
        if (!source3) {
          return target6;
        }
        if (typeof source3 !== "object") {
          if (isArray2(target6)) {
            target6.push(source3);
          } else if (target6 && typeof target6 === "object") {
            if (options2 && (options2.plainObjects || options2.allowPrototypes) || !has.call(Object.prototype, source3)) {
              target6[source3] = true;
            }
          } else {
            return [target6, source3];
          }
          return target6;
        }
        if (!target6 || typeof target6 !== "object") {
          return [target6].concat(source3);
        }
        var mergeTarget = target6;
        if (isArray2(target6) && !isArray2(source3)) {
          mergeTarget = arrayToObject(target6, options2);
        }
        if (isArray2(target6) && isArray2(source3)) {
          source3.forEach(function(item2, i2) {
            if (has.call(target6, i2)) {
              var targetItem = target6[i2];
              if (targetItem && typeof targetItem === "object" && item2 && typeof item2 === "object") {
                target6[i2] = merge4(targetItem, item2, options2);
              } else {
                target6.push(item2);
              }
            } else {
              target6[i2] = item2;
            }
          });
          return target6;
        }
        return Object.keys(source3).reduce(function(acc, key) {
          var value17 = source3[key];
          if (has.call(acc, key)) {
            acc[key] = merge4(acc[key], value17, options2);
          } else {
            acc[key] = value17;
          }
          return acc;
        }, mergeTarget);
      };
      var assign2 = function assignSingleSource(target6, source3) {
        return Object.keys(source3).reduce(function(acc, key) {
          acc[key] = source3[key];
          return acc;
        }, target6);
      };
      var decode2 = function(str, decoder, charset2) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset2 === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var encode3 = function encode4(str, defaultEncoder, charset2, kind2, format2) {
        if (str.length === 0) {
          return str;
        }
        var string3 = str;
        if (typeof str === "symbol") {
          string3 = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string3 = String(str);
        }
        if (charset2 === "iso-8859-1") {
          return escape(string3).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var i2 = 0; i2 < string3.length; ++i2) {
          var c = string3.charCodeAt(i2);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format2 === formats.RFC1738 && (c === 40 || c === 41)) {
            out += string3.charAt(i2);
            continue;
          }
          if (c < 128) {
            out = out + hexTable[c];
            continue;
          }
          if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
          }
          if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
          }
          i2 += 1;
          c = 65536 + ((c & 1023) << 10 | string3.charCodeAt(i2) & 1023);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        return out;
      };
      var compact = function compact2(value17) {
        var queue = [{ obj: { o: value17 }, prop: "o" }];
        var refs = [];
        for (var i2 = 0; i2 < queue.length; ++i2) {
          var item2 = queue[i2];
          var obj = item2.obj[item2.prop];
          var keys3 = Object.keys(obj);
          for (var j = 0; j < keys3.length; ++j) {
            var key = keys3[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue.push({ obj, prop: key });
              refs.push(val);
            }
          }
        }
        compactQueue(queue);
        return value17;
      };
      var isRegExp = function isRegExp2(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer = function isBuffer2(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a2, b2) {
        return [].concat(a2, b2);
      };
      var maybeMap = function maybeMap2(val, fn) {
        if (isArray2(val)) {
          var mapped = [];
          for (var i2 = 0; i2 < val.length; i2 += 1) {
            mapped.push(fn(val[i2]));
          }
          return mapped;
        }
        return fn(val);
      };
      module.exports = {
        arrayToObject,
        assign: assign2,
        combine,
        compact,
        decode: decode2,
        encode: encode3,
        isBuffer,
        isRegExp,
        maybeMap,
        merge: merge3
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix3) {
          return prefix3 + "[]";
        },
        comma: "comma",
        indices: function indices(prefix3, key) {
          return prefix3 + "[" + key + "]";
        },
        repeat: function repeat(prefix3) {
          return prefix3;
        }
      };
      var isArray2 = Array.isArray;
      var push2 = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push2.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults2 = {
        addQueryPrefix: false,
        allowDots: false,
        charset: "utf-8",
        charsetSentinel: false,
        delimiter: "&",
        encode: true,
        encoder: utils.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date2) {
          return toISO.call(date2);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify2 = function stringify3(object2, prefix3, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter4, sort2, allowDots, serializeDate, format2, formatter, encodeValuesOnly, charset2, sideChannel) {
        var obj = object2;
        var tmpSc = sideChannel;
        var step4 = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object2);
          step4 += 1;
          if (typeof pos !== "undefined") {
            if (pos === step4) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step4 = 0;
          }
        }
        if (typeof filter4 === "function") {
          obj = filter4(prefix3, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
          obj = utils.maybeMap(obj, function(value18) {
            if (value18 instanceof Date) {
              return serializeDate(value18);
            }
            return value18;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix3, defaults2.encoder, charset2, "key", format2) : prefix3;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix3 : encoder(prefix3, defaults2.encoder, charset2, "key", format2);
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset2, "value", format2))];
          }
          return [formatter(prefix3) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray2(obj)) {
          if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
          }
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray2(filter4)) {
          objKeys = filter4;
        } else {
          var keys3 = Object.keys(obj);
          objKeys = sort2 ? keys3.sort(sort2) : keys3;
        }
        var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? prefix3 + "[]" : prefix3;
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value17 = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value17 === null) {
            continue;
          }
          var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
          sideChannel.set(object2, step4);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify3(
            value17,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
            filter4,
            sort2,
            allowDots,
            serializeDate,
            format2,
            formatter,
            encodeValuesOnly,
            charset2,
            valueSideChannel
          ));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset2 = opts.charset || defaults2.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format2 = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format2 = opts.format;
        }
        var formatter = formats.formatters[format2];
        var filter4 = defaults2.filter;
        if (typeof opts.filter === "function" || isArray2(opts.filter)) {
          filter4 = opts.filter;
        }
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          charset: charset2,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
          filter: filter4,
          format: format2,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(object2, opts) {
        var obj = object2;
        var options2 = normalizeStringifyOptions(opts);
        var objKeys;
        var filter4;
        if (typeof options2.filter === "function") {
          filter4 = options2.filter;
          obj = filter4("", obj);
        } else if (isArray2(options2.filter)) {
          filter4 = options2.filter;
          objKeys = filter4;
        }
        var keys3 = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if (opts && "indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = "indices";
        }
        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options2.sort) {
          objKeys.sort(options2.sort);
        }
        var sideChannel = getSideChannel();
        for (var i2 = 0; i2 < objKeys.length; ++i2) {
          var key = objKeys[i2];
          if (options2.skipNulls && obj[key] === null) {
            continue;
          }
          pushToArray(keys3, stringify2(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options2.strictNullHandling,
            options2.skipNulls,
            options2.encode ? options2.encoder : null,
            options2.filter,
            options2.sort,
            options2.allowDots,
            options2.serializeDate,
            options2.format,
            options2.formatter,
            options2.encodeValuesOnly,
            options2.charset,
            sideChannel
          ));
        }
        var joined = keys3.join(options2.delimiter);
        var prefix3 = options2.addQueryPrefix === true ? "?" : "";
        if (options2.charsetSentinel) {
          if (options2.charset === "iso-8859-1") {
            prefix3 += "utf8=%26%2310003%3B&";
          } else {
            prefix3 += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix3 + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var defaults2 = {
        allowDots: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options2) {
        if (val && typeof val === "string" && options2.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options2) {
        var obj = { __proto__: null };
        var cleanStr = options2.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        var limit = options2.parameterLimit === Infinity ? void 0 : options2.parameterLimit;
        var parts = cleanStr.split(options2.delimiter, limit);
        var skipIndex = -1;
        var i2;
        var charset2 = options2.charset;
        if (options2.charsetSentinel) {
          for (i2 = 0; i2 < parts.length; ++i2) {
            if (parts[i2].indexOf("utf8=") === 0) {
              if (parts[i2] === charsetSentinel) {
                charset2 = "utf-8";
              } else if (parts[i2] === isoSentinel) {
                charset2 = "iso-8859-1";
              }
              skipIndex = i2;
              i2 = parts.length;
            }
          }
        }
        for (i2 = 0; i2 < parts.length; ++i2) {
          if (i2 === skipIndex) {
            continue;
          }
          var part = parts[i2];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key, val;
          if (pos === -1) {
            key = options2.decoder(part, defaults2.decoder, charset2, "key");
            val = options2.strictNullHandling ? null : "";
          } else {
            key = options2.decoder(part.slice(0, pos), defaults2.decoder, charset2, "key");
            val = utils.maybeMap(
              parseArrayValue(part.slice(pos + 1), options2),
              function(encodedVal) {
                return options2.decoder(encodedVal, defaults2.decoder, charset2, "value");
              }
            );
          }
          if (val && options2.interpretNumericEntities && charset2 === "iso-8859-1") {
            val = interpretNumericEntities(val);
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray2(val) ? [val] : val;
          }
          if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
          } else {
            obj[key] = val;
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options2, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options2);
        for (var i2 = chain.length - 1; i2 >= 0; --i2) {
          var obj;
          var root2 = chain[i2];
          if (root2 === "[]" && options2.parseArrays) {
            obj = [].concat(leaf);
          } else {
            obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
            var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
            var index4 = parseInt(cleanRoot, 10);
            if (!options2.parseArrays && cleanRoot === "") {
              obj = { 0: leaf };
            } else if (!isNaN(index4) && root2 !== cleanRoot && String(index4) === cleanRoot && index4 >= 0 && (options2.parseArrays && index4 <= options2.arrayLimit)) {
              obj = [];
              obj[index4] = leaf;
            } else if (cleanRoot !== "__proto__") {
              obj[cleanRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options2, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var key = options2.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = options2.depth > 0 && brackets.exec(key);
        var parent2 = segment ? key.slice(0, segment.index) : key;
        var keys3 = [];
        if (parent2) {
          if (!options2.plainObjects && has.call(Object.prototype, parent2)) {
            if (!options2.allowPrototypes) {
              return;
            }
          }
          keys3.push(parent2);
        }
        var i2 = 0;
        while (options2.depth > 0 && (segment = child.exec(key)) !== null && i2 < options2.depth) {
          i2 += 1;
          if (!options2.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options2.allowPrototypes) {
              return;
            }
          }
          keys3.push(segment[1]);
        }
        if (segment) {
          keys3.push("[" + key.slice(segment.index) + "]");
        }
        return parseObject(keys3, val, options2, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var charset2 = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
        return {
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
          charset: charset2,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(str, opts) {
        var options2 = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options2) : str;
        var obj = options2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var keys3 = Object.keys(tempObj);
        for (var i2 = 0; i2 < keys3.length; ++i2) {
          var key = keys3[i2];
          var newObj = parseKeys(key, tempObj[key], options2, typeof str === "string");
          obj = utils.merge(obj, newObj, options2);
        }
        if (options2.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify2 = require_stringify();
      var parse10 = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse: parse10,
        stringify: stringify2
      };
    }
  });

  // (disabled):node_modules/semver/index.js
  var require_semver = __commonJS({
    "(disabled):node_modules/semver/index.js"() {
    }
  });

  // node_modules/superagent/lib/utils.js
  var require_utils2 = __commonJS({
    "node_modules/superagent/lib/utils.js"(exports) {
      "use strict";
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i2 = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i2 >= o.length)
                return { done: true };
              return { done: false, value: o[i2++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step4 = it.next();
          normalCompletion = step4.done;
          return step4;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
          arr2[i2] = arr[i2];
        return arr2;
      }
      exports.type = (string_) => string_.split(/ *; */).shift();
      exports.params = (value17) => {
        const object2 = {};
        var _iterator = _createForOfIteratorHelper(value17.split(/ *; */)), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const string_ = _step.value;
            const parts = string_.split(/ *= */);
            const key = parts.shift();
            const value18 = parts.shift();
            if (key && value18)
              object2[key] = value18;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return object2;
      };
      exports.parseLinks = (value17) => {
        const object2 = {};
        var _iterator2 = _createForOfIteratorHelper(value17.split(/ *, */)), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const string_ = _step2.value;
            const parts = string_.split(/ *; */);
            const url = parts[0].slice(1, -1);
            const rel4 = parts[1].split(/ *= */)[1].slice(1, -1);
            object2[rel4] = url;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return object2;
      };
      exports.cleanHeader = (header2, changesOrigin) => {
        delete header2["content-type"];
        delete header2["content-length"];
        delete header2["transfer-encoding"];
        delete header2.host;
        if (changesOrigin) {
          delete header2.authorization;
          delete header2.cookie;
        }
        return header2;
      };
      exports.isObject = (object2) => {
        return object2 !== null && typeof object2 === "object";
      };
      exports.hasOwn = Object.hasOwn || function(object2, property) {
        if (object2 == null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        return Object.prototype.hasOwnProperty.call(new Object(object2), property);
      };
      exports.mixin = (target6, source3) => {
        for (const key in source3) {
          if (exports.hasOwn(source3, key)) {
            target6[key] = source3[key];
          }
        }
      };
    }
  });

  // node_modules/superagent/lib/request-base.js
  var require_request_base = __commonJS({
    "node_modules/superagent/lib/request-base.js"(exports, module) {
      "use strict";
      var semver = require_semver();
      var _require = require_utils2();
      var isObject = _require.isObject;
      var hasOwn = _require.hasOwn;
      module.exports = RequestBase;
      function RequestBase() {
      }
      RequestBase.prototype.clearTimeout = function() {
        clearTimeout(this._timer);
        clearTimeout(this._responseTimeoutTimer);
        clearTimeout(this._uploadTimeoutTimer);
        delete this._timer;
        delete this._responseTimeoutTimer;
        delete this._uploadTimeoutTimer;
        return this;
      };
      RequestBase.prototype.parse = function(fn) {
        this._parser = fn;
        return this;
      };
      RequestBase.prototype.responseType = function(value17) {
        this._responseType = value17;
        return this;
      };
      RequestBase.prototype.serialize = function(fn) {
        this._serializer = fn;
        return this;
      };
      RequestBase.prototype.timeout = function(options2) {
        if (!options2 || typeof options2 !== "object") {
          this._timeout = options2;
          this._responseTimeout = 0;
          this._uploadTimeout = 0;
          return this;
        }
        for (const option3 in options2) {
          if (hasOwn(options2, option3)) {
            switch (option3) {
              case "deadline":
                this._timeout = options2.deadline;
                break;
              case "response":
                this._responseTimeout = options2.response;
                break;
              case "upload":
                this._uploadTimeout = options2.upload;
                break;
              default:
                console.warn("Unknown timeout option", option3);
            }
          }
        }
        return this;
      };
      RequestBase.prototype.retry = function(count, fn) {
        if (arguments.length === 0 || count === true)
          count = 1;
        if (count <= 0)
          count = 0;
        this._maxRetries = count;
        this._retries = 0;
        this._retryCallback = fn;
        return this;
      };
      var ERROR_CODES = /* @__PURE__ */ new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]);
      var STATUS_CODES = /* @__PURE__ */ new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
      RequestBase.prototype._shouldRetry = function(error4, res) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) {
          return false;
        }
        if (this._retryCallback) {
          try {
            const override = this._retryCallback(error4, res);
            if (override === true)
              return true;
            if (override === false)
              return false;
          } catch (err) {
            console.error(err);
          }
        }
        if (res && res.status && STATUS_CODES.has(res.status))
          return true;
        if (error4) {
          if (error4.code && ERROR_CODES.has(error4.code))
            return true;
          if (error4.timeout && error4.code === "ECONNABORTED")
            return true;
          if (error4.crossDomain)
            return true;
        }
        return false;
      };
      RequestBase.prototype._retry = function() {
        this.clearTimeout();
        if (this.req) {
          this.req = null;
          this.req = this.request();
        }
        this._aborted = false;
        this.timedout = false;
        this.timedoutError = null;
        return this._end();
      };
      RequestBase.prototype.then = function(resolve, reject) {
        if (!this._fullfilledPromise) {
          const self2 = this;
          if (this._endCalled) {
            console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
          }
          this._fullfilledPromise = new Promise((resolve2, reject2) => {
            self2.on("abort", () => {
              if (this._maxRetries && this._maxRetries > this._retries) {
                return;
              }
              if (this.timedout && this.timedoutError) {
                reject2(this.timedoutError);
                return;
              }
              const error4 = new Error("Aborted");
              error4.code = "ABORTED";
              error4.status = this.status;
              error4.method = this.method;
              error4.url = this.url;
              reject2(error4);
            });
            self2.end((error4, res) => {
              if (error4)
                reject2(error4);
              else
                resolve2(res);
            });
          });
        }
        return this._fullfilledPromise.then(resolve, reject);
      };
      RequestBase.prototype.catch = function(callback) {
        return this.then(void 0, callback);
      };
      RequestBase.prototype.use = function(fn) {
        fn(this);
        return this;
      };
      RequestBase.prototype.ok = function(callback) {
        if (typeof callback !== "function")
          throw new Error("Callback required");
        this._okCallback = callback;
        return this;
      };
      RequestBase.prototype._isResponseOK = function(res) {
        if (!res) {
          return false;
        }
        if (this._okCallback) {
          return this._okCallback(res);
        }
        return res.status >= 200 && res.status < 300;
      };
      RequestBase.prototype.get = function(field) {
        return this._header[field.toLowerCase()];
      };
      RequestBase.prototype.getHeader = RequestBase.prototype.get;
      RequestBase.prototype.set = function(field, value17) {
        if (isObject(field)) {
          for (const key in field) {
            if (hasOwn(field, key))
              this.set(key, field[key]);
          }
          return this;
        }
        this._header[field.toLowerCase()] = value17;
        this.header[field] = value17;
        return this;
      };
      RequestBase.prototype.unset = function(field) {
        delete this._header[field.toLowerCase()];
        delete this.header[field];
        return this;
      };
      RequestBase.prototype.field = function(name16, value17, options2) {
        if (name16 === null || void 0 === name16) {
          throw new Error(".field(name, val) name can not be empty");
        }
        if (this._data) {
          throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        }
        if (isObject(name16)) {
          for (const key in name16) {
            if (hasOwn(name16, key))
              this.field(key, name16[key]);
          }
          return this;
        }
        if (Array.isArray(value17)) {
          for (const i2 in value17) {
            if (hasOwn(value17, i2))
              this.field(name16, value17[i2]);
          }
          return this;
        }
        if (value17 === null || void 0 === value17) {
          throw new Error(".field(name, val) val can not be empty");
        }
        if (typeof value17 === "boolean") {
          value17 = String(value17);
        }
        if (options2)
          this._getFormData().append(name16, value17, options2);
        else
          this._getFormData().append(name16, value17);
        return this;
      };
      RequestBase.prototype.abort = function() {
        if (this._aborted) {
          return this;
        }
        this._aborted = true;
        if (this.xhr)
          this.xhr.abort();
        if (this.req) {
          if (semver.gte(process.version, "v13.0.0") && semver.lt(process.version, "v14.0.0")) {
            throw new Error("Superagent does not work in v13 properly with abort() due to Node.js core changes");
          } else if (semver.gte(process.version, "v14.0.0")) {
            this.req.destroyed = true;
          }
          this.req.abort();
        }
        this.clearTimeout();
        this.emit("abort");
        return this;
      };
      RequestBase.prototype._auth = function(user, pass2, options2, base64Encoder) {
        switch (options2.type) {
          case "basic":
            this.set("Authorization", `Basic ${base64Encoder(`${user}:${pass2}`)}`);
            break;
          case "auto":
            this.username = user;
            this.password = pass2;
            break;
          case "bearer":
            this.set("Authorization", `Bearer ${user}`);
            break;
          default:
            break;
        }
        return this;
      };
      RequestBase.prototype.withCredentials = function(on4) {
        if (on4 === void 0)
          on4 = true;
        this._withCredentials = on4;
        return this;
      };
      RequestBase.prototype.redirects = function(n) {
        this._maxRedirects = n;
        return this;
      };
      RequestBase.prototype.maxResponseSize = function(n) {
        if (typeof n !== "number") {
          throw new TypeError("Invalid argument");
        }
        this._maxResponseSize = n;
        return this;
      };
      RequestBase.prototype.toJSON = function() {
        return {
          method: this.method,
          url: this.url,
          data: this._data,
          headers: this._header
        };
      };
      RequestBase.prototype.send = function(data) {
        const isObject_ = isObject(data);
        let type = this._header["content-type"];
        if (this._formData) {
          throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        }
        if (isObject_ && !this._data) {
          if (Array.isArray(data)) {
            this._data = [];
          } else if (!this._isHost(data)) {
            this._data = {};
          }
        } else if (data && this._data && this._isHost(this._data)) {
          throw new Error("Can't merge these send calls");
        }
        if (isObject_ && isObject(this._data)) {
          for (const key in data) {
            if (hasOwn(data, key))
              this._data[key] = data[key];
          }
        } else if (typeof data === "string") {
          if (!type)
            this.type("form");
          type = this._header["content-type"];
          if (type)
            type = type.toLowerCase().trim();
          if (type === "application/x-www-form-urlencoded") {
            this._data = this._data ? `${this._data}&${data}` : data;
          } else {
            this._data = (this._data || "") + data;
          }
        } else {
          this._data = data;
        }
        if (!isObject_ || this._isHost(data)) {
          return this;
        }
        if (!type)
          this.type("json");
        return this;
      };
      RequestBase.prototype.sortQuery = function(sort2) {
        this._sort = typeof sort2 === "undefined" ? true : sort2;
        return this;
      };
      RequestBase.prototype._finalizeQueryString = function() {
        const query5 = this._query.join("&");
        if (query5) {
          this.url += (this.url.includes("?") ? "&" : "?") + query5;
        }
        this._query.length = 0;
        if (this._sort) {
          const index4 = this.url.indexOf("?");
          if (index4 >= 0) {
            const queryArray = this.url.slice(index4 + 1).split("&");
            if (typeof this._sort === "function") {
              queryArray.sort(this._sort);
            } else {
              queryArray.sort();
            }
            this.url = this.url.slice(0, index4) + "?" + queryArray.join("&");
          }
        }
      };
      RequestBase.prototype._appendQueryString = () => {
        console.warn("Unsupported");
      };
      RequestBase.prototype._timeoutError = function(reason2, timeout, errno) {
        if (this._aborted) {
          return;
        }
        const error4 = new Error(`${reason2 + timeout}ms exceeded`);
        error4.timeout = timeout;
        error4.code = "ECONNABORTED";
        error4.errno = errno;
        this.timedout = true;
        this.timedoutError = error4;
        this.abort();
        this.callback(error4);
      };
      RequestBase.prototype._setTimeouts = function() {
        const self2 = this;
        if (this._timeout && !this._timer) {
          this._timer = setTimeout(() => {
            self2._timeoutError("Timeout of ", self2._timeout, "ETIME");
          }, this._timeout);
        }
        if (this._responseTimeout && !this._responseTimeoutTimer) {
          this._responseTimeoutTimer = setTimeout(() => {
            self2._timeoutError("Response timeout of ", self2._responseTimeout, "ETIMEDOUT");
          }, this._responseTimeout);
        }
      };
    }
  });

  // node_modules/superagent/lib/response-base.js
  var require_response_base = __commonJS({
    "node_modules/superagent/lib/response-base.js"(exports, module) {
      "use strict";
      var utils = require_utils2();
      module.exports = ResponseBase;
      function ResponseBase() {
      }
      ResponseBase.prototype.get = function(field) {
        return this.header[field.toLowerCase()];
      };
      ResponseBase.prototype._setHeaderProperties = function(header2) {
        const ct = header2["content-type"] || "";
        this.type = utils.type(ct);
        const parameters = utils.params(ct);
        for (const key in parameters) {
          if (Object.prototype.hasOwnProperty.call(parameters, key))
            this[key] = parameters[key];
        }
        this.links = {};
        try {
          if (header2.link) {
            this.links = utils.parseLinks(header2.link);
          }
        } catch (err) {
        }
      };
      ResponseBase.prototype._setStatusProperties = function(status) {
        const type = Math.trunc(status / 100);
        this.statusCode = status;
        this.status = this.statusCode;
        this.statusType = type;
        this.info = type === 1;
        this.ok = type === 2;
        this.redirect = type === 3;
        this.clientError = type === 4;
        this.serverError = type === 5;
        this.error = type === 4 || type === 5 ? this.toError() : false;
        this.created = status === 201;
        this.accepted = status === 202;
        this.noContent = status === 204;
        this.badRequest = status === 400;
        this.unauthorized = status === 401;
        this.notAcceptable = status === 406;
        this.forbidden = status === 403;
        this.notFound = status === 404;
        this.unprocessableEntity = status === 422;
      };
    }
  });

  // node_modules/superagent/lib/agent-base.js
  var require_agent_base = __commonJS({
    "node_modules/superagent/lib/agent-base.js"(exports, module) {
      "use strict";
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i2 = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i2 >= o.length)
                return { done: true };
              return { done: false, value: o[i2++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step4 = it.next();
          normalCompletion = step4.done;
          return step4;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
          arr2[i2] = arr[i2];
        return arr2;
      }
      function Agent() {
        this._defaults = [];
      }
      for (_i = 0, _arr = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"]; _i < _arr.length; _i++) {
        const fn = _arr[_i];
        Agent.prototype[fn] = function() {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          this._defaults.push({
            fn,
            args
          });
          return this;
        };
      }
      var _i;
      var _arr;
      Agent.prototype._setDefaults = function(request4) {
        var _iterator = _createForOfIteratorHelper(this._defaults), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const def = _step.value;
            request4[def.fn](...def.args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };
      module.exports = Agent;
    }
  });

  // node_modules/superagent/lib/client.js
  var require_client = __commonJS({
    "node_modules/superagent/lib/client.js"(exports, module) {
      "use strict";
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i2 = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i2 >= o.length)
                return { done: true };
              return { done: false, value: o[i2++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step4 = it.next();
          normalCompletion = step4.done;
          return step4;
        }, e: function e(_e2) {
          didErr = true;
          err = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
          arr2[i2] = arr[i2];
        return arr2;
      }
      var root2;
      if (typeof window !== "undefined") {
        root2 = window;
      } else if (typeof self === "undefined") {
        console.warn("Using browser-only version of superagent in non-browser environment");
        root2 = void 0;
      } else {
        root2 = self;
      }
      var Emitter = require_component_emitter();
      var safeStringify = require_fast_safe_stringify();
      var qs = require_lib();
      var RequestBase = require_request_base();
      var _require = require_utils2();
      var isObject = _require.isObject;
      var mixin = _require.mixin;
      var hasOwn = _require.hasOwn;
      var ResponseBase = require_response_base();
      var Agent = require_agent_base();
      function noop() {
      }
      module.exports = function(method2, url) {
        if (typeof url === "function") {
          return new exports.Request("GET", method2).end(url);
        }
        if (arguments.length === 1) {
          return new exports.Request("GET", method2);
        }
        return new exports.Request(method2, url);
      };
      exports = module.exports;
      var request4 = exports;
      exports.Request = Request;
      request4.getXHR = () => {
        if (root2.XMLHttpRequest) {
          return new root2.XMLHttpRequest();
        }
        throw new Error("Browser-only version of superagent could not find XHR");
      };
      var trim2 = "".trim ? (s) => s.trim() : (s) => s.replace(/(^\s*|\s*$)/g, "");
      function serialize(object2) {
        if (!isObject(object2))
          return object2;
        const pairs = [];
        for (const key in object2) {
          if (hasOwn(object2, key))
            pushEncodedKeyValuePair(pairs, key, object2[key]);
        }
        return pairs.join("&");
      }
      function pushEncodedKeyValuePair(pairs, key, value17) {
        if (value17 === void 0)
          return;
        if (value17 === null) {
          pairs.push(encodeURI(key));
          return;
        }
        if (Array.isArray(value17)) {
          var _iterator = _createForOfIteratorHelper(value17), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const v = _step.value;
              pushEncodedKeyValuePair(pairs, key, v);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (isObject(value17)) {
          for (const subkey in value17) {
            if (hasOwn(value17, subkey))
              pushEncodedKeyValuePair(pairs, `${key}[${subkey}]`, value17[subkey]);
          }
        } else {
          pairs.push(encodeURI(key) + "=" + encodeURIComponent(value17));
        }
      }
      request4.serializeObject = serialize;
      function parseString(string_) {
        const object2 = {};
        const pairs = string_.split("&");
        let pair;
        let pos;
        for (let i2 = 0, length_ = pairs.length; i2 < length_; ++i2) {
          pair = pairs[i2];
          pos = pair.indexOf("=");
          if (pos === -1) {
            object2[decodeURIComponent(pair)] = "";
          } else {
            object2[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
          }
        }
        return object2;
      }
      request4.parseString = parseString;
      request4.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
      };
      request4.serialize = {
        "application/x-www-form-urlencoded": qs.stringify,
        "application/json": safeStringify
      };
      request4.parse = {
        "application/x-www-form-urlencoded": parseString,
        "application/json": JSON.parse
      };
      function parseHeader(string_) {
        const lines = string_.split(/\r?\n/);
        const fields = {};
        let index4;
        let line;
        let field;
        let value17;
        for (let i2 = 0, length_ = lines.length; i2 < length_; ++i2) {
          line = lines[i2];
          index4 = line.indexOf(":");
          if (index4 === -1) {
            continue;
          }
          field = line.slice(0, index4).toLowerCase();
          value17 = trim2(line.slice(index4 + 1));
          fields[field] = value17;
        }
        return fields;
      }
      function isJSON(mime) {
        return /[/+]json($|[^-\w])/i.test(mime);
      }
      function Response2(request_) {
        this.req = request_;
        this.xhr = this.req.xhr;
        this.text = this.req.method !== "HEAD" && (this.xhr.responseType === "" || this.xhr.responseType === "text") || typeof this.xhr.responseType === "undefined" ? this.xhr.responseText : null;
        this.statusText = this.req.xhr.statusText;
        let status = this.xhr.status;
        if (status === 1223) {
          status = 204;
        }
        this._setStatusProperties(status);
        this.headers = parseHeader(this.xhr.getAllResponseHeaders());
        this.header = this.headers;
        this.header["content-type"] = this.xhr.getResponseHeader("content-type");
        this._setHeaderProperties(this.header);
        if (this.text === null && request_._responseType) {
          this.body = this.xhr.response;
        } else {
          this.body = this.req.method === "HEAD" ? null : this._parseBody(this.text ? this.text : this.xhr.response);
        }
      }
      mixin(Response2.prototype, ResponseBase.prototype);
      Response2.prototype._parseBody = function(string_) {
        let parse10 = request4.parse[this.type];
        if (this.req._parser) {
          return this.req._parser(this, string_);
        }
        if (!parse10 && isJSON(this.type)) {
          parse10 = request4.parse["application/json"];
        }
        return parse10 && string_ && (string_.length > 0 || string_ instanceof Object) ? parse10(string_) : null;
      };
      Response2.prototype.toError = function() {
        const req = this.req;
        const method2 = req.method;
        const url = req.url;
        const message3 = `cannot ${method2} ${url} (${this.status})`;
        const error4 = new Error(message3);
        error4.status = this.status;
        error4.method = method2;
        error4.url = url;
        return error4;
      };
      request4.Response = Response2;
      function Request(method2, url) {
        const self2 = this;
        this._query = this._query || [];
        this.method = method2;
        this.url = url;
        this.header = {};
        this._header = {};
        this.on("end", () => {
          let error4 = null;
          let res = null;
          try {
            res = new Response2(self2);
          } catch (err) {
            error4 = new Error("Parser is unable to parse the response");
            error4.parse = true;
            error4.original = err;
            if (self2.xhr) {
              error4.rawResponse = typeof self2.xhr.responseType === "undefined" ? self2.xhr.responseText : self2.xhr.response;
              error4.status = self2.xhr.status ? self2.xhr.status : null;
              error4.statusCode = error4.status;
            } else {
              error4.rawResponse = null;
              error4.status = null;
            }
            return self2.callback(error4);
          }
          self2.emit("response", res);
          let new_error;
          try {
            if (!self2._isResponseOK(res)) {
              new_error = new Error(res.statusText || res.text || "Unsuccessful HTTP response");
            }
          } catch (err) {
            new_error = err;
          }
          if (new_error) {
            new_error.original = error4;
            new_error.response = res;
            new_error.status = new_error.status || res.status;
            self2.callback(new_error, res);
          } else {
            self2.callback(null, res);
          }
        });
      }
      Emitter(Request.prototype);
      mixin(Request.prototype, RequestBase.prototype);
      Request.prototype.type = function(type) {
        this.set("Content-Type", request4.types[type] || type);
        return this;
      };
      Request.prototype.accept = function(type) {
        this.set("Accept", request4.types[type] || type);
        return this;
      };
      Request.prototype.auth = function(user, pass2, options2) {
        if (arguments.length === 1)
          pass2 = "";
        if (typeof pass2 === "object" && pass2 !== null) {
          options2 = pass2;
          pass2 = "";
        }
        if (!options2) {
          options2 = {
            type: typeof btoa === "function" ? "basic" : "auto"
          };
        }
        const encoder = options2.encoder ? options2.encoder : (string3) => {
          if (typeof btoa === "function") {
            return btoa(string3);
          }
          throw new Error("Cannot use basic auth, btoa is not a function");
        };
        return this._auth(user, pass2, options2, encoder);
      };
      Request.prototype.query = function(value17) {
        if (typeof value17 !== "string")
          value17 = serialize(value17);
        if (value17)
          this._query.push(value17);
        return this;
      };
      Request.prototype.attach = function(field, file, options2) {
        if (file) {
          if (this._data) {
            throw new Error("superagent can't mix .send() and .attach()");
          }
          this._getFormData().append(field, file, options2 || file.name);
        }
        return this;
      };
      Request.prototype._getFormData = function() {
        if (!this._formData) {
          this._formData = new root2.FormData();
        }
        return this._formData;
      };
      Request.prototype.callback = function(error4, res) {
        if (this._shouldRetry(error4, res)) {
          return this._retry();
        }
        const fn = this._callback;
        this.clearTimeout();
        if (error4) {
          if (this._maxRetries)
            error4.retries = this._retries - 1;
          this.emit("error", error4);
        }
        fn(error4, res);
      };
      Request.prototype.crossDomainError = function() {
        const error4 = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        error4.crossDomain = true;
        error4.status = this.status;
        error4.method = this.method;
        error4.url = this.url;
        this.callback(error4);
      };
      Request.prototype.agent = function() {
        console.warn("This is not supported in browser version of superagent");
        return this;
      };
      Request.prototype.ca = Request.prototype.agent;
      Request.prototype.buffer = Request.prototype.ca;
      Request.prototype.write = () => {
        throw new Error("Streaming is not supported in browser version of superagent");
      };
      Request.prototype.pipe = Request.prototype.write;
      Request.prototype._isHost = function(object2) {
        return object2 && typeof object2 === "object" && !Array.isArray(object2) && Object.prototype.toString.call(object2) !== "[object Object]";
      };
      Request.prototype.end = function(fn) {
        if (this._endCalled) {
          console.warn("Warning: .end() was called twice. This is not supported in superagent");
        }
        this._endCalled = true;
        this._callback = fn || noop;
        this._finalizeQueryString();
        this._end();
      };
      Request.prototype._setUploadTimeout = function() {
        const self2 = this;
        if (this._uploadTimeout && !this._uploadTimeoutTimer) {
          this._uploadTimeoutTimer = setTimeout(() => {
            self2._timeoutError("Upload timeout of ", self2._uploadTimeout, "ETIMEDOUT");
          }, this._uploadTimeout);
        }
      };
      Request.prototype._end = function() {
        if (this._aborted)
          return this.callback(new Error("The request has been aborted even before .end() was called"));
        const self2 = this;
        this.xhr = request4.getXHR();
        const xhr = this.xhr;
        let data = this._formData || this._data;
        this._setTimeouts();
        xhr.addEventListener("readystatechange", () => {
          const readyState3 = xhr.readyState;
          if (readyState3 >= 2 && self2._responseTimeoutTimer) {
            clearTimeout(self2._responseTimeoutTimer);
          }
          if (readyState3 !== 4) {
            return;
          }
          let status;
          try {
            status = xhr.status;
          } catch (err) {
            status = 0;
          }
          if (!status) {
            if (self2.timedout || self2._aborted)
              return;
            return self2.crossDomainError();
          }
          self2.emit("end");
        });
        const handleProgress = (direction, e) => {
          if (e.total > 0) {
            e.percent = e.loaded / e.total * 100;
            if (e.percent === 100) {
              clearTimeout(self2._uploadTimeoutTimer);
            }
          }
          e.direction = direction;
          self2.emit("progress", e);
        };
        if (this.hasListeners("progress")) {
          try {
            xhr.addEventListener("progress", handleProgress.bind(null, "download"));
            if (xhr.upload) {
              xhr.upload.addEventListener("progress", handleProgress.bind(null, "upload"));
            }
          } catch (err) {
          }
        }
        if (xhr.upload) {
          this._setUploadTimeout();
        }
        try {
          if (this.username && this.password) {
            xhr.open(this.method, this.url, true, this.username, this.password);
          } else {
            xhr.open(this.method, this.url, true);
          }
        } catch (err) {
          return this.callback(err);
        }
        if (this._withCredentials)
          xhr.withCredentials = true;
        if (!this._formData && this.method !== "GET" && this.method !== "HEAD" && typeof data !== "string" && !this._isHost(data)) {
          const contentType = this._header["content-type"];
          let serialize2 = this._serializer || request4.serialize[contentType ? contentType.split(";")[0] : ""];
          if (!serialize2 && isJSON(contentType)) {
            serialize2 = request4.serialize["application/json"];
          }
          if (serialize2)
            data = serialize2(data);
        }
        for (const field in this.header) {
          if (this.header[field] === null)
            continue;
          if (hasOwn(this.header, field))
            xhr.setRequestHeader(field, this.header[field]);
        }
        if (this._responseType) {
          xhr.responseType = this._responseType;
        }
        this.emit("request", this);
        xhr.send(typeof data === "undefined" ? null : data);
      };
      request4.agent = () => new Agent();
      for (_i = 0, _arr = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; _i < _arr.length; _i++) {
        const method2 = _arr[_i];
        Agent.prototype[method2.toLowerCase()] = function(url, fn) {
          const request_ = new request4.Request(method2, url);
          this._setDefaults(request_);
          if (fn) {
            request_.end(fn);
          }
          return request_;
        };
      }
      var _i;
      var _arr;
      Agent.prototype.del = Agent.prototype.delete;
      request4.get = (url, data, fn) => {
        const request_ = request4("GET", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.query(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
      request4.head = (url, data, fn) => {
        const request_ = request4("HEAD", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.query(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
      request4.options = (url, data, fn) => {
        const request_ = request4("OPTIONS", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.send(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
      function del2(url, data, fn) {
        const request_ = request4("DELETE", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.send(data);
        if (fn)
          request_.end(fn);
        return request_;
      }
      request4.del = del2;
      request4.delete = del2;
      request4.patch = (url, data, fn) => {
        const request_ = request4("PATCH", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.send(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
      request4.post = (url, data, fn) => {
        const request_ = request4("POST", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.send(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
      request4.put = (url, data, fn) => {
        const request_ = request4("PUT", url);
        if (typeof data === "function") {
          fn = data;
          data = null;
        }
        if (data)
          request_.send(data);
        if (fn)
          request_.end(fn);
        return request_;
      };
    }
  });

  // node_modules/querystring/decode.js
  var require_decode = __commonJS({
    "node_modules/querystring/decode.js"(exports, module) {
      "use strict";
      function hasOwnProperty2(obj, prop3) {
        return Object.prototype.hasOwnProperty.call(obj, prop3);
      }
      module.exports = function(qs, sep, eq5, options2) {
        sep = sep || "&";
        eq5 = eq5 || "=";
        var obj = {};
        if (typeof qs !== "string" || qs.length === 0) {
          return obj;
        }
        var regexp = /\+/g;
        qs = qs.split(sep);
        var maxKeys = 1e3;
        if (options2 && typeof options2.maxKeys === "number") {
          maxKeys = options2.maxKeys;
        }
        var len = qs.length;
        if (maxKeys > 0 && len > maxKeys) {
          len = maxKeys;
        }
        for (var i2 = 0; i2 < len; ++i2) {
          var x = qs[i2].replace(regexp, "%20"), idx = x.indexOf(eq5), kstr, vstr, k, v;
          if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
          } else {
            kstr = x;
            vstr = "";
          }
          k = decodeURIComponent(kstr);
          v = decodeURIComponent(vstr);
          if (!hasOwnProperty2(obj, k)) {
            obj[k] = v;
          } else if (Array.isArray(obj[k])) {
            obj[k].push(v);
          } else {
            obj[k] = [obj[k], v];
          }
        }
        return obj;
      };
    }
  });

  // node_modules/querystring/encode.js
  var require_encode = __commonJS({
    "node_modules/querystring/encode.js"(exports, module) {
      "use strict";
      var stringifyPrimitive = function(v) {
        switch (typeof v) {
          case "string":
            return v;
          case "boolean":
            return v ? "true" : "false";
          case "number":
            return isFinite(v) ? v : "";
          default:
            return "";
        }
      };
      module.exports = function(obj, sep, eq5, name16) {
        sep = sep || "&";
        eq5 = eq5 || "=";
        if (obj === null) {
          obj = void 0;
        }
        if (typeof obj === "object") {
          return Object.keys(obj).map(function(k) {
            var ks = encodeURIComponent(stringifyPrimitive(k)) + eq5;
            if (Array.isArray(obj[k])) {
              return obj[k].map(function(v) {
                return ks + encodeURIComponent(stringifyPrimitive(v));
              }).join(sep);
            } else {
              return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
            }
          }).filter(Boolean).join(sep);
        }
        if (!name16)
          return "";
        return encodeURIComponent(stringifyPrimitive(name16)) + eq5 + encodeURIComponent(stringifyPrimitive(obj));
      };
    }
  });

  // node_modules/querystring/index.js
  var require_querystring = __commonJS({
    "node_modules/querystring/index.js"(exports) {
      "use strict";
      exports.decode = exports.parse = require_decode();
      exports.encode = exports.stringify = require_encode();
    }
  });

  // (disabled):fs
  var require_fs = __commonJS({
    "(disabled):fs"() {
    }
  });

  // output/App.Api.Endpoints/Foreign/src/ApiClient.js
  var import_superagent, import_querystring, ApiClient, ApiClient_default;
  var init_ApiClient = __esm({
    "output/App.Api.Endpoints/Foreign/src/ApiClient.js"() {
      import_superagent = __toESM(require_client());
      import_querystring = __toESM(require_querystring());
      ApiClient = class {
        /**
         * The base URL against which to resolve every API call's (relative) path.
         * Overrides the default value set in spec file if present
         * @param {String} basePath
         */
        constructor(basePath = "http://127.0.0.1:12000") {
          this.basePath = basePath.replace(/\/+$/, "");
          this.authentications = {
            "BasicAuth": { type: "basic" },
            "JwtSecurity": { type: "apiKey", "in": "header", name: "Authorization" }
          };
          this.defaultHeaders = {
            "User-Agent": "OpenAPI-Generator/v0.0.1/Javascript"
          };
          this.timeout = 6e4;
          this.cache = true;
          this.enableCookies = false;
          if (typeof window === "undefined") {
            this.agent = new import_superagent.default.agent();
          }
          this.requestAgent = null;
          this.plugins = null;
        }
        /**
        * Returns a string representation for an actual parameter.
        * @param param The actual parameter.
        * @returns {String} The string representation of <code>param</code>.
        */
        paramToString(param5) {
          if (param5 == void 0 || param5 == null) {
            return "";
          }
          if (param5 instanceof Date) {
            return param5.toJSON();
          }
          if (ApiClient.canBeJsonified(param5)) {
            return JSON.stringify(param5);
          }
          return param5.toString();
        }
        /**
        * Returns a boolean indicating if the parameter could be JSON.stringified
        * @param param The actual parameter
        * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
        */
        static canBeJsonified(str) {
          if (typeof str !== "string" && typeof str !== "object")
            return false;
          try {
            const type = str.toString();
            return type === "[object Object]" || type === "[object Array]";
          } catch (err) {
            return false;
          }
        }
        /**
         * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
         * NOTE: query parameters are not handled here.
         * @param {String} path The path to append to the base URL.
         * @param {Object} pathParams The parameter values to append.
         * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
         * @returns {String} The encoded path with parameter values substituted.
         */
        buildUrl(path2, pathParams, apiBasePath) {
          if (!path2.match(/^\//)) {
            path2 = "/" + path2;
          }
          var url = this.basePath + path2;
          if (apiBasePath !== null && apiBasePath !== void 0) {
            url = apiBasePath + path2;
          }
          url = url.replace(/\{([\w-\.]+)\}/g, (fullMatch, key) => {
            var value17;
            if (pathParams.hasOwnProperty(key)) {
              value17 = this.paramToString(pathParams[key]);
            } else {
              value17 = fullMatch;
            }
            return encodeURIComponent(value17);
          });
          return url;
        }
        /**
        * Checks whether the given content type represents JSON.<br>
        * JSON content type examples:<br>
        * <ul>
        * <li>application/json</li>
        * <li>application/json; charset=UTF8</li>
        * <li>APPLICATION/JSON</li>
        * </ul>
        * @param {String} contentType The MIME content type to check.
        * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
        */
        isJsonMime(contentType) {
          return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
        }
        /**
        * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
        * @param {Array.<String>} contentTypes
        * @returns {String} The chosen content type, preferring JSON.
        */
        jsonPreferredMime(contentTypes) {
          for (var i2 = 0; i2 < contentTypes.length; i2++) {
            if (this.isJsonMime(contentTypes[i2])) {
              return contentTypes[i2];
            }
          }
          return contentTypes[0];
        }
        /**
        * Checks whether the given parameter value represents file-like content.
        * @param param The parameter to check.
        * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
        */
        isFileParam(param5) {
          if (typeof __require === "function") {
            let fs;
            try {
              fs = require_fs();
            } catch (err) {
            }
            if (fs && fs.ReadStream && param5 instanceof fs.ReadStream) {
              return true;
            }
          }
          if (typeof Buffer === "function" && param5 instanceof Buffer) {
            return true;
          }
          if (typeof Blob === "function" && param5 instanceof Blob) {
            return true;
          }
          if (typeof File === "function" && param5 instanceof File) {
            return true;
          }
          return false;
        }
        /**
        * Normalizes parameter values:
        * <ul>
        * <li>remove nils</li>
        * <li>keep files and arrays</li>
        * <li>format to string with `paramToString` for other cases</li>
        * </ul>
        * @param {Object.<String, Object>} params The parameters as object properties.
        * @returns {Object.<String, Object>} normalized parameters.
        */
        normalizeParams(params2) {
          var newParams = {};
          for (var key in params2) {
            if (params2.hasOwnProperty(key) && params2[key] != void 0 && params2[key] != null) {
              var value17 = params2[key];
              if (this.isFileParam(value17) || Array.isArray(value17)) {
                newParams[key] = value17;
              } else {
                newParams[key] = this.paramToString(value17);
              }
            }
          }
          return newParams;
        }
        /**
        * Builds a string representation of an array-type actual parameter, according to the given collection format.
        * @param {Array} param An array parameter.
        * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
        * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
        * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
        */
        buildCollectionParam(param5, collectionFormat) {
          if (param5 == null) {
            return null;
          }
          switch (collectionFormat) {
            case "csv":
              return param5.map(this.paramToString, this).join(",");
            case "ssv":
              return param5.map(this.paramToString, this).join(" ");
            case "tsv":
              return param5.map(this.paramToString, this).join("	");
            case "pipes":
              return param5.map(this.paramToString, this).join("|");
            case "multi":
              return param5.map(this.paramToString, this);
            case "passthrough":
              return param5;
            default:
              throw new Error("Unknown collection format: " + collectionFormat);
          }
        }
        /**
        * Applies authentication headers to the request.
        * @param {Object} request The request object created by a <code>superagent()</code> call.
        * @param {Array.<String>} authNames An array of authentication method names.
        */
        applyAuthToRequest(request4, authNames) {
          authNames.forEach((authName) => {
            var auth = this.authentications[authName];
            switch (auth.type) {
              case "basic":
                if (auth.username || auth.password) {
                  request4.auth(auth.username || "", auth.password || "");
                }
                break;
              case "bearer":
                if (auth.accessToken) {
                  var localVarBearerToken = typeof auth.accessToken === "function" ? auth.accessToken() : auth.accessToken;
                  request4.set({ "Authorization": "Bearer " + localVarBearerToken });
                }
                break;
              case "apiKey":
                if (auth.apiKey) {
                  var data = {};
                  if (auth.apiKeyPrefix) {
                    data[auth.name] = auth.apiKeyPrefix + " " + auth.apiKey;
                  } else {
                    data[auth.name] = auth.apiKey;
                  }
                  if (auth["in"] === "header") {
                    request4.set(data);
                  } else {
                    request4.query(data);
                  }
                }
                break;
              case "oauth2":
                if (auth.accessToken) {
                  request4.set({ "Authorization": "Bearer " + auth.accessToken });
                }
                break;
              default:
                throw new Error("Unknown authentication type: " + auth.type);
            }
          });
        }
        /**
         * Deserializes an HTTP response body into a value of the specified type.
         * @param {Object} response A SuperAgent response object.
         * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
         * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
         * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
         * all properties on <code>data<code> will be converted to this type.
         * @returns A value of the specified type.
         */
        deserialize(response, returnType) {
          if (response == null || returnType == null || response.status == 204) {
            return null;
          }
          var data = response.body;
          if (data == null || typeof data === "object" && typeof data.length === "undefined" && !Object.keys(data).length) {
            data = response.text;
          }
          return ApiClient.convertToType(data, returnType);
        }
        /**
         * Invokes the REST service using the supplied settings and parameters.
         * @param {String} path The base URL to invoke.
         * @param {String} httpMethod The HTTP method to use.
         * @param {Object.<String, String>} pathParams A map of path parameters and their values.
         * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
         * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
         * @param {Object.<String, Object>} formParams A map of form parameters and their values.
         * @param {Object} bodyParam The value to pass as the request body.
         * @param {Array.<String>} authNames An array of authentication type names.
         * @param {Array.<String>} contentTypes An array of request MIME types.
         * @param {Array.<String>} accepts An array of acceptable response MIME types.
         * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
         * constructor for a complex type.
         * @param {String} apiBasePath base path defined in the operation/path level to override the default one
         * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
         */
        callApi(path2, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath) {
          var url = this.buildUrl(path2, pathParams, apiBasePath);
          var request4 = (0, import_superagent.default)(httpMethod, url);
          if (this.plugins !== null) {
            for (var index4 in this.plugins) {
              if (this.plugins.hasOwnProperty(index4)) {
                request4.use(this.plugins[index4]);
              }
            }
          }
          this.applyAuthToRequest(request4, authNames);
          if (httpMethod.toUpperCase() === "GET" && this.cache === false) {
            queryParams["_"] = (/* @__PURE__ */ new Date()).getTime();
          }
          request4.query(this.normalizeParams(queryParams));
          request4.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
          if (this.requestAgent) {
            request4.agent(this.requestAgent);
          }
          request4.timeout(this.timeout);
          var contentType = this.jsonPreferredMime(contentTypes);
          if (contentType) {
            if (contentType != "multipart/form-data") {
              request4.type(contentType);
            }
          }
          if (contentType === "application/x-www-form-urlencoded") {
            request4.send(import_querystring.default.stringify(this.normalizeParams(formParams)));
          } else if (contentType == "multipart/form-data") {
            var _formParams = this.normalizeParams(formParams);
            for (var key in _formParams) {
              if (_formParams.hasOwnProperty(key)) {
                let _formParamsValue = _formParams[key];
                if (this.isFileParam(_formParamsValue)) {
                  request4.attach(key, _formParamsValue);
                } else if (Array.isArray(_formParamsValue) && _formParamsValue.length && this.isFileParam(_formParamsValue[0])) {
                  _formParamsValue.forEach((file) => request4.attach(key, file));
                } else {
                  request4.field(key, _formParamsValue);
                }
              }
            }
          } else if (bodyParam !== null && bodyParam !== void 0) {
            if (!request4.header["Content-Type"]) {
              request4.type("application/json");
            }
            request4.send(bodyParam);
          }
          var accept2 = this.jsonPreferredMime(accepts);
          if (accept2) {
            request4.accept(accept2);
          }
          if (returnType === "Blob") {
            request4.responseType("blob");
          } else if (returnType === "String") {
            request4.responseType("text");
          }
          if (this.enableCookies) {
            if (typeof window === "undefined") {
              this.agent._attachCookies(request4);
            } else {
              request4.withCredentials();
            }
          }
          return new Promise((resolve, reject) => {
            request4.end((error4, response) => {
              if (error4) {
                var err = {};
                if (response) {
                  err.status = response.status;
                  err.statusText = response.statusText;
                  err.body = response.body;
                  err.response = response;
                }
                err.error = error4;
                reject(err);
              } else {
                try {
                  var data = this.deserialize(response, returnType);
                  if (this.enableCookies && typeof window === "undefined") {
                    this.agent._saveCookies(response);
                  }
                  resolve({ data, response });
                } catch (err2) {
                  reject(err2);
                }
              }
            });
          });
        }
        /**
        * Parses an ISO-8601 string representation or epoch representation of a date value.
        * @param {String} str The date value as a string.
        * @returns {Date} The parsed date object.
        */
        static parseDate(str) {
          if (isNaN(str)) {
            return new Date(str.replace(/(\d)(T)(\d)/i, "$1 $3"));
          }
          return /* @__PURE__ */ new Date(+str);
        }
        /**
        * Converts a value to the specified type.
        * @param {(String|Object)} data The data to convert, as a string or object.
        * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
        * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
        * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
        * all properties on <code>data<code> will be converted to this type.
        * @returns An instance of the specified type or null or undefined if data is null or undefined.
        */
        static convertToType(data, type) {
          if (data === null || data === void 0)
            return data;
          switch (type) {
            case "Boolean":
              return Boolean(data);
            case "Integer":
              return parseInt(data, 10);
            case "Number":
              return parseFloat(data);
            case "String":
              return String(data);
            case "Date":
              return ApiClient.parseDate(String(data));
            case "Blob":
              return data;
            default:
              if (type === Object) {
                return data;
              } else if (typeof type.constructFromObject === "function") {
                return type.constructFromObject(data);
              } else if (Array.isArray(type)) {
                var itemType = type[0];
                return data.map((item2) => {
                  return ApiClient.convertToType(item2, itemType);
                });
              } else if (typeof type === "object") {
                var keyType, valueType;
                for (var k in type) {
                  if (type.hasOwnProperty(k)) {
                    keyType = k;
                    valueType = type[k];
                    break;
                  }
                }
                var result = {};
                for (var k in data) {
                  if (data.hasOwnProperty(k)) {
                    var key = ApiClient.convertToType(k, keyType);
                    var value17 = ApiClient.convertToType(data[k], valueType);
                    result[key] = value17;
                  }
                }
                return result;
              } else {
                return data;
              }
          }
        }
        /**
          * Gets an array of host settings
          * @returns An array of host settings
          */
        hostSettings() {
          return [
            {
              "url": "http://127.0.0.1:12000",
              "description": "No description provided"
            },
            {
              "url": "https://127.0.0.1:12000",
              "description": "No description provided"
            }
          ];
        }
        getBasePathFromSettings(index4, variables = {}) {
          var servers = this.hostSettings();
          if (index4 < 0 || index4 >= servers.length) {
            throw new Error("Invalid index " + index4 + " when selecting the host settings. Must be less than " + servers.length);
          }
          var server = servers[index4];
          var url = server["url"];
          for (var variable_name in server["variables"]) {
            if (variable_name in variables) {
              let variable = server["variables"][variable_name];
              if (!("enum_values" in variable) || variable["enum_values"].includes(variables[variable_name])) {
                url = url.replace("{" + variable_name + "}", variables[variable_name]);
              } else {
                throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server["variables"][variable_name]["enum_values"] + ".");
              }
            } else {
              url = url.replace("{" + variable_name + "}", server["variables"][variable_name]["default_value"]);
            }
          }
          return url;
        }
        /**
        * Constructs a new map or array model from REST data.
        * @param data {Object|Array} The REST data.
        * @param obj {Object|Array} The target object or array.
        */
        static constructFromObject(data, obj, itemType) {
          if (Array.isArray(data)) {
            for (var i2 = 0; i2 < data.length; i2++) {
              if (data.hasOwnProperty(i2))
                obj[i2] = ApiClient.convertToType(data[i2], itemType);
            }
          } else {
            for (var k in data) {
              if (data.hasOwnProperty(k))
                obj[k] = ApiClient.convertToType(data[k], itemType);
            }
          }
        }
      };
      ApiClient.CollectionFormatEnum = {
        /**
         * Comma-separated values. Value: <code>csv</code>
         * @const
         */
        CSV: ",",
        /**
         * Space-separated values. Value: <code>ssv</code>
         * @const
         */
        SSV: " ",
        /**
         * Tab-separated values. Value: <code>tsv</code>
         * @const
         */
        TSV: "	",
        /**
         * Pipe(|)-separated values. Value: <code>pipes</code>
         * @const
         */
        PIPES: "|",
        /**
         * Native array. Value: <code>multi</code>
         * @const
         */
        MULTI: "multi"
      };
      ApiClient.instance = new ApiClient();
      ApiClient_default = ApiClient;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/BasicCredentials.js
  var BasicCredentials, BasicCredentials_default;
  var init_BasicCredentials = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/BasicCredentials.js"() {
      init_ApiClient();
      BasicCredentials = class {
        /**
         * Constructs a new <code>BasicCredentials</code>.
         * @alias module:model/BasicCredentials
         */
        constructor() {
          BasicCredentials.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>BasicCredentials</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BasicCredentials} obj Optional instance to populate.
         * @return {module:model/BasicCredentials} The populated <code>BasicCredentials</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new BasicCredentials();
            if (data.hasOwnProperty("login")) {
              obj["login"] = ApiClient_default.convertToType(data["login"], "String");
            }
            if (data.hasOwnProperty("password")) {
              obj["password"] = ApiClient_default.convertToType(data["password"], "String");
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>BasicCredentials</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasicCredentials</code>.
         */
        static validateJSON(data) {
          if (data["login"] && !(typeof data["login"] === "string" || data["login"] instanceof String)) {
            throw new Error("Expected the field `login` to be a primitive type in the JSON string but got " + data["login"]);
          }
          if (data["password"] && !(typeof data["password"] === "string" || data["password"] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data["password"]);
          }
          return true;
        }
        /**
             * @return {String}
             */
        getLogin() {
          return this.login;
        }
        /**
         * @param {String} login
         */
        setLogin(login) {
          this["login"] = login;
        }
        /**
             * @return {String}
             */
        getPassword() {
          return this.password;
        }
        /**
         * @param {String} password
         */
        setPassword(password) {
          this["password"] = password;
        }
      };
      BasicCredentials.prototype["login"] = void 0;
      BasicCredentials.prototype["password"] = void 0;
      BasicCredentials_default = BasicCredentials;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/Error.js
  var Error2, Error_default;
  var init_Error = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/Error.js"() {
      init_ApiClient();
      Error2 = class {
        /**
         * Constructs a new <code>Error</code>.
         * @alias module:model/Error
         * @param message {String} 
         */
        constructor(message3) {
          Error2.initialize(this, message3);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj, message3) {
          obj["message"] = message3;
        }
        /**
         * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Error} obj Optional instance to populate.
         * @return {module:model/Error} The populated <code>Error</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new Error2();
            if (data.hasOwnProperty("message")) {
              obj["message"] = ApiClient_default.convertToType(data["message"], "String");
            }
            if (data.hasOwnProperty("meta")) {
              obj["meta"] = ApiClient_default.convertToType(data["meta"], Object);
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>Error</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Error</code>.
         */
        static validateJSON(data) {
          for (const property of Error2.RequiredProperties) {
            if (!data[property]) {
              throw new Error2("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
          }
          if (data["message"] && !(typeof data["message"] === "string" || data["message"] instanceof String)) {
            throw new Error2("Expected the field `message` to be a primitive type in the JSON string but got " + data["message"]);
          }
          return true;
        }
        /**
             * @return {String}
             */
        getMessage() {
          return this.message;
        }
        /**
         * @param {String} message
         */
        setMessage(message3) {
          this["message"] = message3;
        }
        /**
             * Returns Arbitrary JSON object.
             * @return {Object}
             */
        getMeta() {
          return this.meta;
        }
        /**
         * Sets Arbitrary JSON object.
         * @param {Object} meta Arbitrary JSON object.
         */
        setMeta(meta2) {
          this["meta"] = meta2;
        }
      };
      Error2.RequiredProperties = ["message"];
      Error2.prototype["message"] = void 0;
      Error2.prototype["meta"] = void 0;
      Error_default = Error2;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/RequestFrontendLog.js
  var RequestFrontendLog, RequestFrontendLog_default;
  var init_RequestFrontendLog = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/RequestFrontendLog.js"() {
      init_ApiClient();
      RequestFrontendLog = class {
        /**
         * Constructs a new <code>RequestFrontendLog</code>.
         * @alias module:model/RequestFrontendLog
         */
        constructor() {
          RequestFrontendLog.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>RequestFrontendLog</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/RequestFrontendLog} obj Optional instance to populate.
         * @return {module:model/RequestFrontendLog} The populated <code>RequestFrontendLog</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new RequestFrontendLog();
            if (data.hasOwnProperty("build")) {
              obj["build"] = ApiClient_default.convertToType(data["build"], "String");
            }
            if (data.hasOwnProperty("msg")) {
              obj["msg"] = ApiClient_default.convertToType(data["msg"], "String");
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>RequestFrontendLog</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RequestFrontendLog</code>.
         */
        static validateJSON(data) {
          if (data["build"] && !(typeof data["build"] === "string" || data["build"] instanceof String)) {
            throw new Error("Expected the field `build` to be a primitive type in the JSON string but got " + data["build"]);
          }
          if (data["msg"] && !(typeof data["msg"] === "string" || data["msg"] instanceof String)) {
            throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data["msg"]);
          }
          return true;
        }
        /**
             * @return {String}
             */
        getBuild() {
          return this.build;
        }
        /**
         * @param {String} build
         */
        setBuild(build2) {
          this["build"] = build2;
        }
        /**
             * @return {String}
             */
        getMsg() {
          return this.msg;
        }
        /**
         * @param {String} msg
         */
        setMsg(msg) {
          this["msg"] = msg;
        }
      };
      RequestFrontendLog.prototype["build"] = void 0;
      RequestFrontendLog.prototype["msg"] = void 0;
      RequestFrontendLog_default = RequestFrontendLog;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/Response.js
  var Response, Response_default;
  var init_Response = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/Response.js"() {
      init_ApiClient();
      init_Error();
      Response = class {
        /**
         * Constructs a new <code>Response</code>.
         * @alias module:model/Response
         */
        constructor() {
          Response.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>Response</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Response} obj Optional instance to populate.
         * @return {module:model/Response} The populated <code>Response</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new Response();
            if (data.hasOwnProperty("error")) {
              obj["error"] = Error_default.constructFromObject(data["error"]);
            }
            if (data.hasOwnProperty("success")) {
              obj["success"] = ApiClient_default.convertToType(data["success"], [Object]);
            }
            if (data.hasOwnProperty("warnings")) {
              obj["warnings"] = Error_default.constructFromObject(data["warnings"]);
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>Response</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Response</code>.
         */
        static validateJSON(data) {
          if (data["error"]) {
            Error_default.validateJSON(data["error"]);
          }
          if (!Array.isArray(data["success"])) {
            throw new Error_default("Expected the field `success` to be an array in the JSON data but got " + data["success"]);
          }
          if (data["warnings"]) {
            Error_default.validateJSON(data["warnings"]);
          }
          return true;
        }
        /**
             * @return {module:model/Error}
             */
        getError() {
          return this.error;
        }
        /**
         * @param {module:model/Error} error
         */
        setError(error4) {
          this["error"] = error4;
        }
        /**
             * @return {Array.<Object>}
             */
        getSuccess() {
          return this.success;
        }
        /**
         * @param {Array.<Object>} success
         */
        setSuccess(success) {
          this["success"] = success;
        }
        /**
             * @return {module:model/Error}
             */
        getWarnings() {
          return this.warnings;
        }
        /**
         * @param {module:model/Error} warnings
         */
        setWarnings(warnings) {
          this["warnings"] = warnings;
        }
      };
      Response.prototype["error"] = void 0;
      Response.prototype["success"] = void 0;
      Response.prototype["warnings"] = void 0;
      Response_default = Response;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/ResponseBasicAuth.js
  var ResponseBasicAuth;
  var init_ResponseBasicAuth = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/ResponseBasicAuth.js"() {
      init_ApiClient();
      init_Error();
      ResponseBasicAuth = class {
        /**
         * Constructs a new <code>ResponseBasicAuth</code>.
         * @alias module:model/ResponseBasicAuth
         */
        constructor() {
          ResponseBasicAuth.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>ResponseBasicAuth</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ResponseBasicAuth} obj Optional instance to populate.
         * @return {module:model/ResponseBasicAuth} The populated <code>ResponseBasicAuth</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new ResponseBasicAuth();
            if (data.hasOwnProperty("error")) {
              obj["error"] = Error_default.constructFromObject(data["error"]);
            }
            if (data.hasOwnProperty("success")) {
              obj["success"] = ApiClient_default.convertToType(data["success"], "String");
            }
            if (data.hasOwnProperty("warnings")) {
              obj["warnings"] = Error_default.constructFromObject(data["warnings"]);
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>ResponseBasicAuth</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseBasicAuth</code>.
         */
        static validateJSON(data) {
          if (data["error"]) {
            Error_default.validateJSON(data["error"]);
          }
          if (data["success"] && !(typeof data["success"] === "string" || data["success"] instanceof String)) {
            throw new Error_default("Expected the field `success` to be a primitive type in the JSON string but got " + data["success"]);
          }
          if (data["warnings"]) {
            Error_default.validateJSON(data["warnings"]);
          }
          return true;
        }
        /**
             * @return {module:model/Error}
             */
        getError() {
          return this.error;
        }
        /**
         * @param {module:model/Error} error
         */
        setError(error4) {
          this["error"] = error4;
        }
        /**
             * @return {String}
             */
        getSuccess() {
          return this.success;
        }
        /**
         * @param {String} success
         */
        setSuccess(success) {
          this["success"] = success;
        }
        /**
             * @return {module:model/Error}
             */
        getWarnings() {
          return this.warnings;
        }
        /**
         * @param {module:model/Error} warnings
         */
        setWarnings(warnings) {
          this["warnings"] = warnings;
        }
      };
      ResponseBasicAuth.prototype["error"] = void 0;
      ResponseBasicAuth.prototype["success"] = void 0;
      ResponseBasicAuth.prototype["warnings"] = void 0;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/ResponseIdFile.js
  var ResponseIdFile, ResponseIdFile_default;
  var init_ResponseIdFile = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/ResponseIdFile.js"() {
      init_ApiClient();
      init_Error();
      ResponseIdFile = class {
        /**
         * Constructs a new <code>ResponseIdFile</code>.
         * @alias module:model/ResponseIdFile
         */
        constructor() {
          ResponseIdFile.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>ResponseIdFile</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ResponseIdFile} obj Optional instance to populate.
         * @return {module:model/ResponseIdFile} The populated <code>ResponseIdFile</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new ResponseIdFile();
            if (data.hasOwnProperty("error")) {
              obj["error"] = Error_default.constructFromObject(data["error"]);
            }
            if (data.hasOwnProperty("success")) {
              obj["success"] = ApiClient_default.convertToType(data["success"], ["Number"]);
            }
            if (data.hasOwnProperty("warnings")) {
              obj["warnings"] = Error_default.constructFromObject(data["warnings"]);
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>ResponseIdFile</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseIdFile</code>.
         */
        static validateJSON(data) {
          if (data["error"]) {
            Error_default.validateJSON(data["error"]);
          }
          if (!Array.isArray(data["success"])) {
            throw new Error_default("Expected the field `success` to be an array in the JSON data but got " + data["success"]);
          }
          if (data["warnings"]) {
            Error_default.validateJSON(data["warnings"]);
          }
          return true;
        }
        /**
             * @return {module:model/Error}
             */
        getError() {
          return this.error;
        }
        /**
         * @param {module:model/Error} error
         */
        setError(error4) {
          this["error"] = error4;
        }
        /**
             * @return {Array.<Number>}
             */
        getSuccess() {
          return this.success;
        }
        /**
         * @param {Array.<Number>} success
         */
        setSuccess(success) {
          this["success"] = success;
        }
        /**
             * @return {module:model/Error}
             */
        getWarnings() {
          return this.warnings;
        }
        /**
         * @param {module:model/Error} warnings
         */
        setWarnings(warnings) {
          this["warnings"] = warnings;
        }
      };
      ResponseIdFile.prototype["error"] = void 0;
      ResponseIdFile.prototype["success"] = void 0;
      ResponseIdFile.prototype["warnings"] = void 0;
      ResponseIdFile_default = ResponseIdFile;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/model/ResponseUTCTime.js
  var ResponseUTCTime;
  var init_ResponseUTCTime = __esm({
    "output/App.Api.Endpoints/Foreign/src/model/ResponseUTCTime.js"() {
      init_ApiClient();
      init_Error();
      ResponseUTCTime = class {
        /**
         * Constructs a new <code>ResponseUTCTime</code>.
         * @alias module:model/ResponseUTCTime
         */
        constructor() {
          ResponseUTCTime.initialize(this);
        }
        /**
         * Initializes the fields of this object.
         * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
         * Only for internal use.
         */
        static initialize(obj) {
        }
        /**
         * Constructs a <code>ResponseUTCTime</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ResponseUTCTime} obj Optional instance to populate.
         * @return {module:model/ResponseUTCTime} The populated <code>ResponseUTCTime</code> instance.
         */
        static constructFromObject(data, obj) {
          if (data) {
            obj = obj || new ResponseUTCTime();
            if (data.hasOwnProperty("error")) {
              obj["error"] = Error_default.constructFromObject(data["error"]);
            }
            if (data.hasOwnProperty("success")) {
              obj["success"] = ApiClient_default.convertToType(data["success"], "String");
            }
            if (data.hasOwnProperty("warnings")) {
              obj["warnings"] = Error_default.constructFromObject(data["warnings"]);
            }
          }
          return obj;
        }
        /**
         * Validates the JSON data with respect to <code>ResponseUTCTime</code>.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseUTCTime</code>.
         */
        static validateJSON(data) {
          if (data["error"]) {
            Error_default.validateJSON(data["error"]);
          }
          if (data["success"] && !(typeof data["success"] === "string" || data["success"] instanceof String)) {
            throw new Error_default("Expected the field `success` to be a primitive type in the JSON string but got " + data["success"]);
          }
          if (data["warnings"]) {
            Error_default.validateJSON(data["warnings"]);
          }
          return true;
        }
        /**
             * @return {module:model/Error}
             */
        getError() {
          return this.error;
        }
        /**
         * @param {module:model/Error} error
         */
        setError(error4) {
          this["error"] = error4;
        }
        /**
             * @return {String}
             */
        getSuccess() {
          return this.success;
        }
        /**
         * @param {String} success
         */
        setSuccess(success) {
          this["success"] = success;
        }
        /**
             * @return {module:model/Error}
             */
        getWarnings() {
          return this.warnings;
        }
        /**
         * @param {module:model/Error} warnings
         */
        setWarnings(warnings) {
          this["warnings"] = warnings;
        }
      };
      ResponseUTCTime.prototype["error"] = void 0;
      ResponseUTCTime.prototype["success"] = void 0;
      ResponseUTCTime.prototype["warnings"] = void 0;
    }
  });

  // output/App.Api.Endpoints/Foreign/src/api/AdminApi.js
  var init_AdminApi = __esm({
    "output/App.Api.Endpoints/Foreign/src/api/AdminApi.js"() {
      init_ApiClient();
      init_ResponseUTCTime();
    }
  });

  // output/App.Api.Endpoints/Foreign/src/api/AuthApi.js
  var init_AuthApi = __esm({
    "output/App.Api.Endpoints/Foreign/src/api/AuthApi.js"() {
      init_ApiClient();
      init_BasicCredentials();
      init_ResponseBasicAuth();
    }
  });

  // output/App.Api.Endpoints/Foreign/src/api/FileApi.js
  var FileApi;
  var init_FileApi = __esm({
    "output/App.Api.Endpoints/Foreign/src/api/FileApi.js"() {
      init_ApiClient();
      init_Response();
      init_ResponseIdFile();
      FileApi = class {
        /**
        * Constructs a new FileApi. 
        * @alias module:api/FileApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient) {
          this.apiClient = apiClient || ApiClient_default.instance;
        }
        /**
         * http apiupload to server
         * @param {String} bucket 
         * @param {File} payloadFiles 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResponseIdFile} and HTTP response
         */
        apiFileBucketPutWithHttpInfo(bucket, payloadFiles) {
          let postBody = null;
          if (bucket === void 0 || bucket === null) {
            throw new Error("Missing the required parameter 'bucket' when calling apiFileBucketPut");
          }
          if (payloadFiles === void 0 || payloadFiles === null) {
            throw new Error("Missing the required parameter 'payloadFiles' when calling apiFileBucketPut");
          }
          let pathParams = {
            "bucket": bucket
          };
          let queryParams = {};
          let headerParams = {};
          let formParams = {
            "payloadFiles": payloadFiles
          };
          let authNames = [];
          let contentTypes = ["multipart/form-data"];
          let accepts = ["application/json;charset=utf-8"];
          let returnType = ResponseIdFile_default;
          return this.apiClient.callApi(
            "/api/file/{bucket}",
            "PUT",
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            null
          );
        }
        /**
         * http apiupload to server
         * @param {String} bucket 
         * @param {File} payloadFiles 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResponseIdFile}
         */
        apiFileBucketPut(bucket, payloadFiles) {
          return this.apiFileBucketPutWithHttpInfo(bucket, payloadFiles).then(function(response_and_data) {
            return response_and_data.data;
          });
        }
        /**
         * http apidelete file
         * @param {Number} fileId 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
         */
        apiFileFileIdDeleteWithHttpInfo(fileId) {
          let postBody = null;
          if (fileId === void 0 || fileId === null) {
            throw new Error("Missing the required parameter 'fileId' when calling apiFileFileIdDelete");
          }
          let pathParams = {
            "file_id": fileId
          };
          let queryParams = {};
          let headerParams = {};
          let formParams = {};
          let authNames = [];
          let contentTypes = [];
          let accepts = ["application/json;charset=utf-8"];
          let returnType = Response_default;
          return this.apiClient.callApi(
            "/api/file/{file_id}",
            "DELETE",
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            null
          );
        }
        /**
         * http apidelete file
         * @param {Number} fileId 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
         */
        apiFileFileIdDelete(fileId) {
          return this.apiFileFileIdDeleteWithHttpInfo(fileId).then(function(response_and_data) {
            return response_and_data.data;
          });
        }
        /**
         * http apipatch file by replacing new one
         * @param {Number} fileId 
         * @param {File} payloadFile 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
         */
        apiFileFileIdPatchWithHttpInfo(fileId, payloadFile) {
          let postBody = null;
          if (fileId === void 0 || fileId === null) {
            throw new Error("Missing the required parameter 'fileId' when calling apiFileFileIdPatch");
          }
          if (payloadFile === void 0 || payloadFile === null) {
            throw new Error("Missing the required parameter 'payloadFile' when calling apiFileFileIdPatch");
          }
          let pathParams = {
            "file_id": fileId
          };
          let queryParams = {};
          let headerParams = {};
          let formParams = {
            "payloadFile": payloadFile
          };
          let authNames = [];
          let contentTypes = ["multipart/form-data"];
          let accepts = ["application/json;charset=utf-8"];
          let returnType = Response_default;
          return this.apiClient.callApi(
            "/api/file/{file_id}",
            "PATCH",
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            null
          );
        }
        /**
         * http apipatch file by replacing new one
         * @param {Number} fileId 
         * @param {File} payloadFile 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
         */
        apiFileFileIdPatch(fileId, payloadFile) {
          return this.apiFileFileIdPatchWithHttpInfo(fileId, payloadFile).then(function(response_and_data) {
            return response_and_data.data;
          });
        }
      };
    }
  });

  // output/App.Api.Endpoints/Foreign/src/api/FrontApi.js
  var FrontApi;
  var init_FrontApi = __esm({
    "output/App.Api.Endpoints/Foreign/src/api/FrontApi.js"() {
      init_ApiClient();
      init_RequestFrontendLog();
      init_Response();
      FrontApi = class {
        /**
        * Constructs a new FrontApi. 
        * @alias module:api/FrontApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient) {
          this.apiClient = apiClient || ApiClient_default.instance;
        }
        /**
         * http api
         * @param {module:model/RequestFrontendLog} body 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
         */
        apiFrontendLogPutWithHttpInfo(body2) {
          let postBody = body2;
          if (body2 === void 0 || body2 === null) {
            throw new Error("Missing the required parameter 'body' when calling apiFrontendLogPut");
          }
          let pathParams = {};
          let queryParams = {};
          let headerParams = {};
          let formParams = {};
          let authNames = [];
          let contentTypes = ["application/json;charset=utf-8"];
          let accepts = ["application/json;charset=utf-8"];
          let returnType = Response_default;
          return this.apiClient.callApi(
            "/api/frontend/log",
            "PUT",
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            null
          );
        }
        /**
         * http api
         * @param {module:model/RequestFrontendLog} body 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
         */
        apiFrontendLogPut(body2) {
          return this.apiFrontendLogPutWithHttpInfo(body2).then(function(response_and_data) {
            return response_and_data.data;
          });
        }
      };
    }
  });

  // output/App.Api.Endpoints/Foreign/src/api/UserApi.js
  var UserApi;
  var init_UserApi = __esm({
    "output/App.Api.Endpoints/Foreign/src/api/UserApi.js"() {
      init_ApiClient();
      init_BasicCredentials();
      init_Response();
      UserApi = class {
        /**
        * Constructs a new UserApi. 
        * @alias module:api/UserApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instance} if unspecified.
        */
        constructor(apiClient) {
          this.apiClient = apiClient || ApiClient_default.instance;
        }
        /**
         * http api
         * @param {module:model/BasicCredentials} body 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
         */
        apiUserProfilePostWithHttpInfo(body2) {
          let postBody = body2;
          if (body2 === void 0 || body2 === null) {
            throw new Error("Missing the required parameter 'body' when calling apiUserProfilePost");
          }
          let pathParams = {};
          let queryParams = {};
          let headerParams = {};
          let formParams = {};
          let authNames = ["BasicAuth", "JwtSecurity"];
          let contentTypes = ["application/json;charset=utf-8"];
          let accepts = ["application/json;charset=utf-8"];
          let returnType = Response_default;
          return this.apiClient.callApi(
            "/api/user/profile",
            "POST",
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            null
          );
        }
        /**
         * http api
         * @param {module:model/BasicCredentials} body 
         * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
         */
        apiUserProfilePost(body2) {
          return this.apiUserProfilePostWithHttpInfo(body2).then(function(response_and_data) {
            return response_and_data.data;
          });
        }
      };
    }
  });

  // output/App.Api.Endpoints/Foreign/src/index.js
  var init_src = __esm({
    "output/App.Api.Endpoints/Foreign/src/index.js"() {
      init_ApiClient();
      init_BasicCredentials();
      init_Error();
      init_RequestFrontendLog();
      init_Response();
      init_ResponseBasicAuth();
      init_ResponseIdFile();
      init_ResponseUTCTime();
      init_AdminApi();
      init_AuthApi();
      init_FileApi();
      init_FrontApi();
      init_UserApi();
    }
  });

  // output/App.Api.Endpoints/foreign.js
  var mkApiClient, mkUserApi, constructBasicCredentials, apiUserLoginBasicGet, getCredentialsBasicAuth, mkFrontApi, putFrontendLog, constructFrontendLog, getDataFromResponse, mkFileApi, sendFiles;
  var init_foreign55 = __esm({
    "output/App.Api.Endpoints/foreign.js"() {
      init_src();
      mkApiClient = function(host3, credentials) {
        let cred_val = credentials != null ? Object.values(credentials)[0] : null;
        let cred_name = credentials != null ? credentials.constructor.name.replace(/[0-9]/g, "") : null;
        if (cred_val != null && typeof cred_val != "string") {
          throw "credential not a string: " + credentials;
        } else {
          let cl = new ApiClient_default(host3);
          if (cred_val != null) {
            cl.defaultHeaders = { "Authorization": cred_name + " " + cred_val };
          } else
            cl.defaultHeaders = {};
          return () => {
            return cl;
          };
        }
      };
      mkUserApi = (client) => {
        return function() {
          return new UserApi(client);
        };
      };
      constructBasicCredentials = function(email, pass2) {
        return function() {
          let cred = new BasicCredentials_default();
          cred.setLogin(email);
          cred.setPassword(pass2);
          return cred;
        };
      };
      apiUserLoginBasicGet = function(obj, api) {
        return function(onError, onOk) {
          api.apiUserLoginBasicPost(obj).then(onOk).catch(onError);
        };
      };
      getCredentialsBasicAuth = (obj) => {
        return obj.getSuccess();
      };
      mkFrontApi = (client) => {
        return function() {
          return new FrontApi(client);
        };
      };
      putFrontendLog = function(obj, api) {
        return function(onError, onOk) {
          api.apiFrontendLogPut(obj).then(onOk).catch(onError);
        };
      };
      constructFrontendLog = function(build2, msg) {
        return function() {
          let log4 = new RequestFrontendLog_default();
          log4.setBuild(build2);
          log4.setMsg(msg);
          return log4;
        };
      };
      getDataFromResponse = (json2) => () => {
        Response_default.validateJSON(json2);
        return Response_default.constructFromObject(json2).getSuccess();
      };
      mkFileApi = (client) => {
        return function() {
          return new FileApi(client);
        };
      };
      sendFiles = function(bucket, files2, api) {
        return function(onError, onOk) {
          api.apiFileBucketPut(bucket, files2).then(onOk).catch(onError);
        };
      };
    }
  });

  // output/App.Api.Endpoints/index.js
  var init_App_Api = __esm({
    "output/App.Api.Endpoints/index.js"() {
      init_foreign55();
      init_foreign55();
    }
  });

  // output/Effect.Uncurried/foreign.js
  var init_foreign56 = __esm({
    "output/Effect.Uncurried/foreign.js"() {
    }
  });

  // output/Effect.Uncurried/index.js
  var init_Effect7 = __esm({
    "output/Effect.Uncurried/index.js"() {
      init_foreign56();
      init_Data14();
      init_Data13();
      init_Effect();
      init_foreign56();
    }
  });

  // output/Effect.Aff.Compat/index.js
  var fromEffectFnAff;
  var init_Effect_Aff2 = __esm({
    "output/Effect.Aff.Compat/index.js"() {
      init_Data20();
      init_Effect6();
      init_Effect7();
      init_Effect7();
      fromEffectFnAff = function(v) {
        return makeAff(function(k) {
          return function __do4() {
            var v1 = v(function($9) {
              return k(Left.create($9))();
            }, function($10) {
              return k(Right.create($10))();
            });
            return function(e) {
              return makeAff(function(k2) {
                return function __do5() {
                  v1(e, function($11) {
                    return k2(Left.create($11))();
                  }, function($12) {
                    return k2(Right.create($12))();
                  });
                  return nonCanceler;
                };
              });
            };
          };
        });
      };
    }
  });

  // output/App.Api.Utils/index.js
  var bind5, $$try4, makeRequest;
  var init_App_Api2 = __esm({
    "output/App.Api.Utils/index.js"() {
      init_App_Api();
      init_Control5();
      init_Control_Monad_Error();
      init_Effect();
      init_Effect6();
      init_Effect_Aff();
      init_Effect_Aff2();
      init_Effect4();
      bind5 = /* @__PURE__ */ bind(bindEffect);
      $$try4 = /* @__PURE__ */ $$try(monadErrorAff);
      makeRequest = function(dictMonadAff) {
        var MonadEffect0 = dictMonadAff.MonadEffect0();
        var bind111 = bind(MonadEffect0.Monad0().Bind1());
        var liftEffect11 = liftEffect(MonadEffect0);
        var liftAff4 = liftAff(dictMonadAff);
        return function(host3) {
          return function(cred) {
            return function(mkApi) {
              return function(runApi) {
                return bind111(liftEffect11(bind5(mkApiClient(host3, cred))(mkApi)))(function(api) {
                  return liftAff4($$try4(fromEffectFnAff(runApi(api))));
                });
              };
            };
          };
        };
      };
    }
  });

  // output/DOM.HTML.Indexed.AutocompleteType/index.js
  var init_DOM_HTML_Indexed = __esm({
    "output/DOM.HTML.Indexed.AutocompleteType/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.ButtonType/index.js
  var init_DOM_HTML_Indexed2 = __esm({
    "output/DOM.HTML.Indexed.ButtonType/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.CrossOriginValue/index.js
  var init_DOM_HTML_Indexed3 = __esm({
    "output/DOM.HTML.Indexed.CrossOriginValue/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.DirValue/index.js
  var init_DOM_HTML_Indexed4 = __esm({
    "output/DOM.HTML.Indexed.DirValue/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.FormMethod/index.js
  var init_DOM_HTML_Indexed5 = __esm({
    "output/DOM.HTML.Indexed.FormMethod/index.js"() {
      init_Data11();
    }
  });

  // output/Data.MediaType/index.js
  var init_Data51 = __esm({
    "output/Data.MediaType/index.js"() {
      init_Data15();
      init_Data16();
    }
  });

  // output/DOM.HTML.Indexed.InputAcceptType/index.js
  var init_DOM_HTML_Indexed6 = __esm({
    "output/DOM.HTML.Indexed.InputAcceptType/index.js"() {
      init_Data9();
      init_Data4();
      init_Data51();
      init_Data15();
      init_Data11();
      init_Data13();
      init_Data_String3();
    }
  });

  // output/DOM.HTML.Indexed.InputType/index.js
  var InputButton, InputCheckbox, InputColor, InputDate, InputDatetimeLocal, InputEmail, InputFile, InputHidden, InputImage, InputMonth, InputNumber, InputPassword, InputRadio, InputRange, InputReset, InputSearch, InputSubmit, InputTel, InputText, InputTime, InputUrl, InputWeek, renderInputType;
  var init_DOM_HTML_Indexed7 = __esm({
    "output/DOM.HTML.Indexed.InputType/index.js"() {
      init_Data11();
      InputButton = /* @__PURE__ */ function() {
        function InputButton2() {
        }
        ;
        InputButton2.value = new InputButton2();
        return InputButton2;
      }();
      InputCheckbox = /* @__PURE__ */ function() {
        function InputCheckbox2() {
        }
        ;
        InputCheckbox2.value = new InputCheckbox2();
        return InputCheckbox2;
      }();
      InputColor = /* @__PURE__ */ function() {
        function InputColor2() {
        }
        ;
        InputColor2.value = new InputColor2();
        return InputColor2;
      }();
      InputDate = /* @__PURE__ */ function() {
        function InputDate2() {
        }
        ;
        InputDate2.value = new InputDate2();
        return InputDate2;
      }();
      InputDatetimeLocal = /* @__PURE__ */ function() {
        function InputDatetimeLocal2() {
        }
        ;
        InputDatetimeLocal2.value = new InputDatetimeLocal2();
        return InputDatetimeLocal2;
      }();
      InputEmail = /* @__PURE__ */ function() {
        function InputEmail2() {
        }
        ;
        InputEmail2.value = new InputEmail2();
        return InputEmail2;
      }();
      InputFile = /* @__PURE__ */ function() {
        function InputFile2() {
        }
        ;
        InputFile2.value = new InputFile2();
        return InputFile2;
      }();
      InputHidden = /* @__PURE__ */ function() {
        function InputHidden2() {
        }
        ;
        InputHidden2.value = new InputHidden2();
        return InputHidden2;
      }();
      InputImage = /* @__PURE__ */ function() {
        function InputImage2() {
        }
        ;
        InputImage2.value = new InputImage2();
        return InputImage2;
      }();
      InputMonth = /* @__PURE__ */ function() {
        function InputMonth2() {
        }
        ;
        InputMonth2.value = new InputMonth2();
        return InputMonth2;
      }();
      InputNumber = /* @__PURE__ */ function() {
        function InputNumber2() {
        }
        ;
        InputNumber2.value = new InputNumber2();
        return InputNumber2;
      }();
      InputPassword = /* @__PURE__ */ function() {
        function InputPassword2() {
        }
        ;
        InputPassword2.value = new InputPassword2();
        return InputPassword2;
      }();
      InputRadio = /* @__PURE__ */ function() {
        function InputRadio2() {
        }
        ;
        InputRadio2.value = new InputRadio2();
        return InputRadio2;
      }();
      InputRange = /* @__PURE__ */ function() {
        function InputRange2() {
        }
        ;
        InputRange2.value = new InputRange2();
        return InputRange2;
      }();
      InputReset = /* @__PURE__ */ function() {
        function InputReset2() {
        }
        ;
        InputReset2.value = new InputReset2();
        return InputReset2;
      }();
      InputSearch = /* @__PURE__ */ function() {
        function InputSearch2() {
        }
        ;
        InputSearch2.value = new InputSearch2();
        return InputSearch2;
      }();
      InputSubmit = /* @__PURE__ */ function() {
        function InputSubmit2() {
        }
        ;
        InputSubmit2.value = new InputSubmit2();
        return InputSubmit2;
      }();
      InputTel = /* @__PURE__ */ function() {
        function InputTel2() {
        }
        ;
        InputTel2.value = new InputTel2();
        return InputTel2;
      }();
      InputText = /* @__PURE__ */ function() {
        function InputText2() {
        }
        ;
        InputText2.value = new InputText2();
        return InputText2;
      }();
      InputTime = /* @__PURE__ */ function() {
        function InputTime2() {
        }
        ;
        InputTime2.value = new InputTime2();
        return InputTime2;
      }();
      InputUrl = /* @__PURE__ */ function() {
        function InputUrl2() {
        }
        ;
        InputUrl2.value = new InputUrl2();
        return InputUrl2;
      }();
      InputWeek = /* @__PURE__ */ function() {
        function InputWeek2() {
        }
        ;
        InputWeek2.value = new InputWeek2();
        return InputWeek2;
      }();
      renderInputType = function(v) {
        if (v instanceof InputButton) {
          return "button";
        }
        ;
        if (v instanceof InputCheckbox) {
          return "checkbox";
        }
        ;
        if (v instanceof InputColor) {
          return "color";
        }
        ;
        if (v instanceof InputDate) {
          return "date";
        }
        ;
        if (v instanceof InputDatetimeLocal) {
          return "datetime-local";
        }
        ;
        if (v instanceof InputEmail) {
          return "email";
        }
        ;
        if (v instanceof InputFile) {
          return "file";
        }
        ;
        if (v instanceof InputHidden) {
          return "hidden";
        }
        ;
        if (v instanceof InputImage) {
          return "image";
        }
        ;
        if (v instanceof InputMonth) {
          return "month";
        }
        ;
        if (v instanceof InputNumber) {
          return "number";
        }
        ;
        if (v instanceof InputPassword) {
          return "password";
        }
        ;
        if (v instanceof InputRadio) {
          return "radio";
        }
        ;
        if (v instanceof InputRange) {
          return "range";
        }
        ;
        if (v instanceof InputReset) {
          return "reset";
        }
        ;
        if (v instanceof InputSearch) {
          return "search";
        }
        ;
        if (v instanceof InputSubmit) {
          return "submit";
        }
        ;
        if (v instanceof InputTel) {
          return "tel";
        }
        ;
        if (v instanceof InputText) {
          return "text";
        }
        ;
        if (v instanceof InputTime) {
          return "time";
        }
        ;
        if (v instanceof InputUrl) {
          return "url";
        }
        ;
        if (v instanceof InputWeek) {
          return "week";
        }
        ;
        throw new Error("Failed pattern match at DOM.HTML.Indexed.InputType (line 33, column 19 - line 55, column 22): " + [v.constructor.name]);
      };
    }
  });

  // output/DOM.HTML.Indexed.KindValue/index.js
  var init_DOM_HTML_Indexed8 = __esm({
    "output/DOM.HTML.Indexed.KindValue/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.MenuType/index.js
  var init_DOM_HTML_Indexed9 = __esm({
    "output/DOM.HTML.Indexed.MenuType/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.MenuitemType/index.js
  var init_DOM_HTML_Indexed10 = __esm({
    "output/DOM.HTML.Indexed.MenuitemType/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.OrderedListType/index.js
  var init_DOM_HTML_Indexed11 = __esm({
    "output/DOM.HTML.Indexed.OrderedListType/index.js"() {
      init_Data9();
      init_Data15();
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.PreloadValue/index.js
  var init_DOM_HTML_Indexed12 = __esm({
    "output/DOM.HTML.Indexed.PreloadValue/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.ScopeValue/index.js
  var init_DOM_HTML_Indexed13 = __esm({
    "output/DOM.HTML.Indexed.ScopeValue/index.js"() {
      init_Data11();
    }
  });

  // output/DOM.HTML.Indexed.StepValue/index.js
  var init_DOM_HTML_Indexed14 = __esm({
    "output/DOM.HTML.Indexed.StepValue/index.js"() {
      init_Data15();
      init_Data11();
      init_Data16();
    }
  });

  // output/DOM.HTML.Indexed.WrapValue/index.js
  var init_DOM_HTML_Indexed15 = __esm({
    "output/DOM.HTML.Indexed.WrapValue/index.js"() {
      init_Data11();
    }
  });

  // output/Halogen.Query.Input/index.js
  var RefUpdate, Action, functorInput;
  var init_Halogen_Query3 = __esm({
    "output/Halogen.Query.Input/index.js"() {
      init_Data9();
      init_Data15();
      RefUpdate = /* @__PURE__ */ function() {
        function RefUpdate2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        RefUpdate2.create = function(value0) {
          return function(value1) {
            return new RefUpdate2(value0, value1);
          };
        };
        return RefUpdate2;
      }();
      Action = /* @__PURE__ */ function() {
        function Action3(value0) {
          this.value0 = value0;
        }
        ;
        Action3.create = function(value0) {
          return new Action3(value0);
        };
        return Action3;
      }();
      functorInput = {
        map: function(f) {
          return function(m) {
            if (m instanceof RefUpdate) {
              return new RefUpdate(m.value0, m.value1);
            }
            ;
            if (m instanceof Action) {
              return new Action(f(m.value0));
            }
            ;
            throw new Error("Failed pattern match at Halogen.Query.Input (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
          };
        }
      };
    }
  });

  // output/Data.Nullable/foreign.js
  function nullable(a2, r, f) {
    return a2 == null ? r : f(a2);
  }
  function notNull(x) {
    return x;
  }
  var nullImpl;
  var init_foreign57 = __esm({
    "output/Data.Nullable/foreign.js"() {
      nullImpl = null;
    }
  });

  // output/Data.Nullable/index.js
  var toNullable, toMaybe;
  var init_Data52 = __esm({
    "output/Data.Nullable/index.js"() {
      init_foreign57();
      init_Data9();
      init_Data2();
      init_Data19();
      init_Data15();
      init_Data16();
      init_foreign57();
      toNullable = /* @__PURE__ */ maybe(nullImpl)(notNull);
      toMaybe = function(n) {
        return nullable(n, Nothing.value, Just.create);
      };
    }
  });

  // output/Halogen.VDom.Machine/index.js
  var Step, unStep, step2, mkStep, halt, extract2;
  var init_Halogen_VDom = __esm({
    "output/Halogen.VDom.Machine/index.js"() {
      init_Unsafe();
      Step = /* @__PURE__ */ function() {
        function Step3(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Step3.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Step3(value0, value1, value22, value32);
              };
            };
          };
        };
        return Step3;
      }();
      unStep = unsafeCoerce2;
      step2 = function(v, a2) {
        return v.value2(v.value1, a2);
      };
      mkStep = unsafeCoerce2;
      halt = function(v) {
        return v.value3(v.value1);
      };
      extract2 = /* @__PURE__ */ unStep(function(v) {
        return v.value0;
      });
    }
  });

  // output/Halogen.VDom.Types/index.js
  var map15, map16, Text, Elem, Keyed, Widget, Grafted, Graft, unGraft, graft, bifunctorGraft, bimap2, bifunctorVDom, runGraft;
  var init_Halogen_VDom2 = __esm({
    "output/Halogen.VDom.Types/index.js"() {
      init_Control2();
      init_Data23();
      init_Data9();
      init_Data4();
      init_Data15();
      init_Data22();
      init_Unsafe();
      map15 = /* @__PURE__ */ map(functorArray);
      map16 = /* @__PURE__ */ map(functorTuple);
      Text = /* @__PURE__ */ function() {
        function Text2(value0) {
          this.value0 = value0;
        }
        ;
        Text2.create = function(value0) {
          return new Text2(value0);
        };
        return Text2;
      }();
      Elem = /* @__PURE__ */ function() {
        function Elem2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Elem2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Elem2(value0, value1, value22, value32);
              };
            };
          };
        };
        return Elem2;
      }();
      Keyed = /* @__PURE__ */ function() {
        function Keyed2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Keyed2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Keyed2(value0, value1, value22, value32);
              };
            };
          };
        };
        return Keyed2;
      }();
      Widget = /* @__PURE__ */ function() {
        function Widget2(value0) {
          this.value0 = value0;
        }
        ;
        Widget2.create = function(value0) {
          return new Widget2(value0);
        };
        return Widget2;
      }();
      Grafted = /* @__PURE__ */ function() {
        function Grafted2(value0) {
          this.value0 = value0;
        }
        ;
        Grafted2.create = function(value0) {
          return new Grafted2(value0);
        };
        return Grafted2;
      }();
      Graft = /* @__PURE__ */ function() {
        function Graft2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        Graft2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new Graft2(value0, value1, value22);
            };
          };
        };
        return Graft2;
      }();
      unGraft = function(f) {
        return function($61) {
          return f($61);
        };
      };
      graft = unsafeCoerce2;
      bifunctorGraft = {
        bimap: function(f) {
          return function(g) {
            return unGraft(function(v) {
              return graft(new Graft(function($63) {
                return f(v.value0($63));
              }, function($64) {
                return g(v.value1($64));
              }, v.value2));
            });
          };
        }
      };
      bimap2 = /* @__PURE__ */ bimap(bifunctorGraft);
      bifunctorVDom = {
        bimap: function(v) {
          return function(v1) {
            return function(v2) {
              if (v2 instanceof Text) {
                return new Text(v2.value0);
              }
              ;
              if (v2 instanceof Grafted) {
                return new Grafted(bimap2(v)(v1)(v2.value0));
              }
              ;
              return new Grafted(graft(new Graft(v, v1, v2)));
            };
          };
        }
      };
      runGraft = /* @__PURE__ */ unGraft(function(v) {
        var go2 = function(v2) {
          if (v2 instanceof Text) {
            return new Text(v2.value0);
          }
          ;
          if (v2 instanceof Elem) {
            return new Elem(v2.value0, v2.value1, v.value0(v2.value2), map15(go2)(v2.value3));
          }
          ;
          if (v2 instanceof Keyed) {
            return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), map15(map16(go2))(v2.value3));
          }
          ;
          if (v2 instanceof Widget) {
            return new Widget(v.value1(v2.value0));
          }
          ;
          if (v2 instanceof Grafted) {
            return new Grafted(bimap2(v.value0)(v.value1)(v2.value0));
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [v2.constructor.name]);
        };
        return go2(v.value2);
      });
    }
  });

  // output/Halogen.VDom.Util/foreign.js
  function unsafeGetAny(key, obj) {
    return obj[key];
  }
  function unsafeHasAny(key, obj) {
    return obj.hasOwnProperty(key);
  }
  function unsafeSetAny(key, val, obj) {
    obj[key] = val;
  }
  function forE2(a2, f) {
    var b2 = [];
    for (var i2 = 0; i2 < a2.length; i2++) {
      b2.push(f(i2, a2[i2]));
    }
    return b2;
  }
  function forEachE(a2, f) {
    for (var i2 = 0; i2 < a2.length; i2++) {
      f(a2[i2]);
    }
  }
  function forInE(o, f) {
    var ks = Object.keys(o);
    for (var i2 = 0; i2 < ks.length; i2++) {
      var k = ks[i2];
      f(k, o[k]);
    }
  }
  function diffWithIxE(a1, a2, f1, f2, f3) {
    var a3 = [];
    var l1 = a1.length;
    var l2 = a2.length;
    var i2 = 0;
    while (1) {
      if (i2 < l1) {
        if (i2 < l2) {
          a3.push(f1(i2, a1[i2], a2[i2]));
        } else {
          f2(i2, a1[i2]);
        }
      } else if (i2 < l2) {
        a3.push(f3(i2, a2[i2]));
      } else {
        break;
      }
      i2++;
    }
    return a3;
  }
  function strMapWithIxE(as2, fk, f) {
    var o = {};
    for (var i2 = 0; i2 < as2.length; i2++) {
      var a2 = as2[i2];
      var k = fk(a2);
      o[k] = f(k, i2, a2);
    }
    return o;
  }
  function diffWithKeyAndIxE(o1, as2, fk, f1, f2, f3) {
    var o2 = {};
    for (var i2 = 0; i2 < as2.length; i2++) {
      var a2 = as2[i2];
      var k = fk(a2);
      if (o1.hasOwnProperty(k)) {
        o2[k] = f1(k, i2, o1[k], a2);
      } else {
        o2[k] = f3(k, i2, a2);
      }
    }
    for (var k in o1) {
      if (k in o2) {
        continue;
      }
      f2(k, o1[k]);
    }
    return o2;
  }
  function refEq2(a2, b2) {
    return a2 === b2;
  }
  function createTextNode(s, doc) {
    return doc.createTextNode(s);
  }
  function setTextContent(s, n) {
    n.textContent = s;
  }
  function createElement(ns, name16, doc) {
    if (ns != null) {
      return doc.createElementNS(ns, name16);
    } else {
      return doc.createElement(name16);
    }
  }
  function insertChildIx(i2, a2, b2) {
    var n = b2.childNodes.item(i2) || null;
    if (n !== a2) {
      b2.insertBefore(a2, n);
    }
  }
  function removeChild(a2, b2) {
    if (b2 && a2.parentNode === b2) {
      b2.removeChild(a2);
    }
  }
  function parentNode(a2) {
    return a2.parentNode;
  }
  function setAttribute(ns, attr3, val, el) {
    if (ns != null) {
      el.setAttributeNS(ns, attr3, val);
    } else {
      el.setAttribute(attr3, val);
    }
  }
  function removeAttribute(ns, attr3, el) {
    if (ns != null) {
      el.removeAttributeNS(ns, attr3);
    } else {
      el.removeAttribute(attr3);
    }
  }
  function hasAttribute(ns, attr3, el) {
    if (ns != null) {
      return el.hasAttributeNS(ns, attr3);
    } else {
      return el.hasAttribute(attr3);
    }
  }
  function addEventListener(ev, listener, el) {
    el.addEventListener(ev, listener, false);
  }
  function removeEventListener(ev, listener, el) {
    el.removeEventListener(ev, listener, false);
  }
  var jsUndefined;
  var init_foreign58 = __esm({
    "output/Halogen.VDom.Util/foreign.js"() {
      "use strict";
      jsUndefined = void 0;
    }
  });

  // output/Halogen.VDom.Util/index.js
  var unsafeLookup, unsafeFreeze2, pokeMutMap, newMutMap;
  var init_Halogen_VDom3 = __esm({
    "output/Halogen.VDom.Util/index.js"() {
      init_foreign58();
      init_Foreign_Object();
      init_Unsafe();
      init_foreign58();
      unsafeLookup = unsafeGetAny;
      unsafeFreeze2 = unsafeCoerce2;
      pokeMutMap = unsafeSetAny;
      newMutMap = newImpl;
    }
  });

  // output/Web.DOM.Element/foreign.js
  var getProp, _namespaceURI, _prefix, localName, tagName;
  var init_foreign59 = __esm({
    "output/Web.DOM.Element/foreign.js"() {
      getProp = function(name16) {
        return function(doctype) {
          return doctype[name16];
        };
      };
      _namespaceURI = getProp("namespaceURI");
      _prefix = getProp("prefix");
      localName = getProp("localName");
      tagName = getProp("tagName");
    }
  });

  // output/Web.DOM.ParentNode/foreign.js
  function _querySelector(selector) {
    return function(node) {
      return function() {
        return node.querySelector(selector);
      };
    };
  }
  var getEffProp, children, _firstElementChild, _lastElementChild, childElementCount;
  var init_foreign60 = __esm({
    "output/Web.DOM.ParentNode/foreign.js"() {
      getEffProp = function(name16) {
        return function(node) {
          return function() {
            return node[name16];
          };
        };
      };
      children = getEffProp("children");
      _firstElementChild = getEffProp("firstElementChild");
      _lastElementChild = getEffProp("lastElementChild");
      childElementCount = getEffProp("childElementCount");
    }
  });

  // output/Web.DOM.ParentNode/index.js
  var map17, querySelector;
  var init_Web_DOM = __esm({
    "output/Web.DOM.ParentNode/index.js"() {
      init_foreign60();
      init_Data9();
      init_Data4();
      init_Data52();
      init_Data15();
      init_Effect();
      init_foreign60();
      map17 = /* @__PURE__ */ map(functorEffect);
      querySelector = function(qs) {
        var $2 = map17(toMaybe);
        var $3 = _querySelector(qs);
        return function($4) {
          return $2($3($4));
        };
      };
    }
  });

  // output/Web.DOM.ShadowRoot/foreign.js
  var init_foreign61 = __esm({
    "output/Web.DOM.ShadowRoot/foreign.js"() {
    }
  });

  // output/Web.DOM.ShadowRoot/index.js
  var init_Web_DOM2 = __esm({
    "output/Web.DOM.ShadowRoot/index.js"() {
      init_foreign61();
      init_Data19();
      init_Unsafe();
      init_foreign61();
    }
  });

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name16, value17) {
    if (typeof window !== "undefined") {
      var ty = window[name16];
      if (ty != null && value17 instanceof ty) {
        return just(value17);
      }
    }
    var obj = value17;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name16) {
        return just(value17);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }
  var init_foreign62 = __esm({
    "output/Web.Internal.FFI/foreign.js"() {
    }
  });

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged;
  var init_Web_Internal = __esm({
    "output/Web.Internal.FFI/index.js"() {
      init_foreign62();
      init_Data19();
      unsafeReadProtoTagged = function(name16) {
        return function(value17) {
          return _unsafeReadProtoTagged(Nothing.value, Just.create, name16, value17);
        };
      };
    }
  });

  // output/Web.DOM.Element/index.js
  var toNode;
  var init_Web_DOM3 = __esm({
    "output/Web.DOM.Element/index.js"() {
      init_foreign59();
      init_Data4();
      init_Data52();
      init_Data16();
      init_Effect();
      init_Unsafe();
      init_Web_DOM();
      init_Web_DOM2();
      init_Web_Internal();
      init_foreign59();
      toNode = unsafeCoerce2;
    }
  });

  // output/Halogen.VDom.DOM/index.js
  var $runtime_lazy8, haltWidget, $lazy_patchWidget, patchWidget, haltText, $lazy_patchText, patchText, haltKeyed, haltElem, eqElemSpec, $lazy_patchElem, patchElem, $lazy_patchKeyed, patchKeyed, buildWidget, buildText, buildKeyed, buildElem, buildVDom;
  var init_Halogen_VDom4 = __esm({
    "output/Halogen.VDom.DOM/index.js"() {
      init_Data40();
      init_Data();
      init_Data19();
      init_Data52();
      init_Data22();
      init_Halogen_VDom();
      init_Halogen_VDom2();
      init_Halogen_VDom3();
      init_Web_DOM3();
      $runtime_lazy8 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      haltWidget = function(v) {
        return halt(v.widget);
      };
      $lazy_patchWidget = /* @__PURE__ */ $runtime_lazy8("patchWidget", "Halogen.VDom.DOM", function() {
        return function(state3, vdom) {
          if (vdom instanceof Grafted) {
            return $lazy_patchWidget(291)(state3, runGraft(vdom.value0));
          }
          ;
          if (vdom instanceof Widget) {
            var res = step2(state3.widget, vdom.value0);
            var res$prime = unStep(function(v) {
              return mkStep(new Step(v.value0, {
                build: state3.build,
                widget: res
              }, $lazy_patchWidget(296), haltWidget));
            })(res);
            return res$prime;
          }
          ;
          haltWidget(state3);
          return state3.build(vdom);
        };
      });
      patchWidget = /* @__PURE__ */ $lazy_patchWidget(286);
      haltText = function(v) {
        var parent2 = parentNode(v.node);
        return removeChild(v.node, parent2);
      };
      $lazy_patchText = /* @__PURE__ */ $runtime_lazy8("patchText", "Halogen.VDom.DOM", function() {
        return function(state3, vdom) {
          if (vdom instanceof Grafted) {
            return $lazy_patchText(82)(state3, runGraft(vdom.value0));
          }
          ;
          if (vdom instanceof Text) {
            if (state3.value === vdom.value0) {
              return mkStep(new Step(state3.node, state3, $lazy_patchText(85), haltText));
            }
            ;
            if (otherwise) {
              var nextState = {
                build: state3.build,
                node: state3.node,
                value: vdom.value0
              };
              setTextContent(vdom.value0, state3.node);
              return mkStep(new Step(state3.node, nextState, $lazy_patchText(89), haltText));
            }
            ;
          }
          ;
          haltText(state3);
          return state3.build(vdom);
        };
      });
      patchText = /* @__PURE__ */ $lazy_patchText(77);
      haltKeyed = function(v) {
        var parent2 = parentNode(v.node);
        removeChild(v.node, parent2);
        forInE(v.children, function(v1, s) {
          return halt(s);
        });
        return halt(v.attrs);
      };
      haltElem = function(v) {
        var parent2 = parentNode(v.node);
        removeChild(v.node, parent2);
        forEachE(v.children, halt);
        return halt(v.attrs);
      };
      eqElemSpec = function(ns1, v, ns2, v1) {
        var $63 = v === v1;
        if ($63) {
          if (ns1 instanceof Just && (ns2 instanceof Just && ns1.value0 === ns2.value0)) {
            return true;
          }
          ;
          if (ns1 instanceof Nothing && ns2 instanceof Nothing) {
            return true;
          }
          ;
          return false;
        }
        ;
        return false;
      };
      $lazy_patchElem = /* @__PURE__ */ $runtime_lazy8("patchElem", "Halogen.VDom.DOM", function() {
        return function(state3, vdom) {
          if (vdom instanceof Grafted) {
            return $lazy_patchElem(135)(state3, runGraft(vdom.value0));
          }
          ;
          if (vdom instanceof Elem && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
            var v = length3(vdom.value3);
            var v1 = length3(state3.children);
            if (v1 === 0 && v === 0) {
              var attrs2 = step2(state3.attrs, vdom.value2);
              var nextState = {
                build: state3.build,
                node: state3.node,
                attrs: attrs2,
                ns: vdom.value0,
                name: vdom.value1,
                children: state3.children
              };
              return mkStep(new Step(state3.node, nextState, $lazy_patchElem(149), haltElem));
            }
            ;
            var onThis = function(v2, s) {
              return halt(s);
            };
            var onThese = function(ix, s, v2) {
              var res = step2(s, v2);
              insertChildIx(ix, extract2(res), state3.node);
              return res;
            };
            var onThat = function(ix, v2) {
              var res = state3.build(v2);
              insertChildIx(ix, extract2(res), state3.node);
              return res;
            };
            var children2 = diffWithIxE(state3.children, vdom.value3, onThese, onThis, onThat);
            var attrs2 = step2(state3.attrs, vdom.value2);
            var nextState = {
              build: state3.build,
              node: state3.node,
              attrs: attrs2,
              ns: vdom.value0,
              name: vdom.value1,
              children: children2
            };
            return mkStep(new Step(state3.node, nextState, $lazy_patchElem(172), haltElem));
          }
          ;
          haltElem(state3);
          return state3.build(vdom);
        };
      });
      patchElem = /* @__PURE__ */ $lazy_patchElem(130);
      $lazy_patchKeyed = /* @__PURE__ */ $runtime_lazy8("patchKeyed", "Halogen.VDom.DOM", function() {
        return function(state3, vdom) {
          if (vdom instanceof Grafted) {
            return $lazy_patchKeyed(222)(state3, runGraft(vdom.value0));
          }
          ;
          if (vdom instanceof Keyed && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
            var v = length3(vdom.value3);
            if (state3.length === 0 && v === 0) {
              var attrs2 = step2(state3.attrs, vdom.value2);
              var nextState = {
                build: state3.build,
                node: state3.node,
                attrs: attrs2,
                ns: vdom.value0,
                name: vdom.value1,
                children: state3.children,
                length: 0
              };
              return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(237), haltKeyed));
            }
            ;
            var onThis = function(v2, s) {
              return halt(s);
            };
            var onThese = function(v2, ix$prime, s, v3) {
              var res = step2(s, v3.value1);
              insertChildIx(ix$prime, extract2(res), state3.node);
              return res;
            };
            var onThat = function(v2, ix, v3) {
              var res = state3.build(v3.value1);
              insertChildIx(ix, extract2(res), state3.node);
              return res;
            };
            var children2 = diffWithKeyAndIxE(state3.children, vdom.value3, fst, onThese, onThis, onThat);
            var attrs2 = step2(state3.attrs, vdom.value2);
            var nextState = {
              build: state3.build,
              node: state3.node,
              attrs: attrs2,
              ns: vdom.value0,
              name: vdom.value1,
              children: children2,
              length: v
            };
            return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(261), haltKeyed));
          }
          ;
          haltKeyed(state3);
          return state3.build(vdom);
        };
      });
      patchKeyed = /* @__PURE__ */ $lazy_patchKeyed(217);
      buildWidget = function(v, build2, w) {
        var res = v.buildWidget(v)(w);
        var res$prime = unStep(function(v1) {
          return mkStep(new Step(v1.value0, {
            build: build2,
            widget: res
          }, patchWidget, haltWidget));
        })(res);
        return res$prime;
      };
      buildText = function(v, build2, s) {
        var node = createTextNode(s, v.document);
        var state3 = {
          build: build2,
          node,
          value: s
        };
        return mkStep(new Step(node, state3, patchText, haltText));
      };
      buildKeyed = function(v, build2, ns1, name1, as1, ch1) {
        var el = createElement(toNullable(ns1), name1, v.document);
        var node = toNode(el);
        var onChild = function(v1, ix, v2) {
          var res = build2(v2.value1);
          insertChildIx(ix, extract2(res), node);
          return res;
        };
        var children2 = strMapWithIxE(ch1, fst, onChild);
        var attrs = v.buildAttributes(el)(as1);
        var state3 = {
          build: build2,
          node,
          attrs,
          ns: ns1,
          name: name1,
          children: children2,
          length: length3(ch1)
        };
        return mkStep(new Step(node, state3, patchKeyed, haltKeyed));
      };
      buildElem = function(v, build2, ns1, name1, as1, ch1) {
        var el = createElement(toNullable(ns1), name1, v.document);
        var node = toNode(el);
        var onChild = function(ix, child) {
          var res = build2(child);
          insertChildIx(ix, extract2(res), node);
          return res;
        };
        var children2 = forE2(ch1, onChild);
        var attrs = v.buildAttributes(el)(as1);
        var state3 = {
          build: build2,
          node,
          attrs,
          ns: ns1,
          name: name1,
          children: children2
        };
        return mkStep(new Step(node, state3, patchElem, haltElem));
      };
      buildVDom = function(spec) {
        var $lazy_build = $runtime_lazy8("build", "Halogen.VDom.DOM", function() {
          return function(v) {
            if (v instanceof Text) {
              return buildText(spec, $lazy_build(59), v.value0);
            }
            ;
            if (v instanceof Elem) {
              return buildElem(spec, $lazy_build(60), v.value0, v.value1, v.value2, v.value3);
            }
            ;
            if (v instanceof Keyed) {
              return buildKeyed(spec, $lazy_build(61), v.value0, v.value1, v.value2, v.value3);
            }
            ;
            if (v instanceof Widget) {
              return buildWidget(spec, $lazy_build(62), v.value0);
            }
            ;
            if (v instanceof Grafted) {
              return $lazy_build(63)(runGraft(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [v.constructor.name]);
          };
        });
        var build2 = $lazy_build(58);
        return build2;
      };
    }
  });

  // output/Halogen.VDom/index.js
  var init_Halogen2 = __esm({
    "output/Halogen.VDom/index.js"() {
      init_Halogen_VDom4();
      init_Halogen_VDom();
      init_Halogen_VDom2();
      init_Halogen_VDom4();
      init_Halogen_VDom();
      init_Halogen_VDom2();
    }
  });

  // output/Foreign/foreign.js
  function typeOf(value17) {
    return typeof value17;
  }
  function tagOf(value17) {
    return Object.prototype.toString.call(value17).slice(8, -1);
  }
  var isArray;
  var init_foreign63 = __esm({
    "output/Foreign/foreign.js"() {
      isArray = Array.isArray || function(value17) {
        return Object.prototype.toString.call(value17) === "[object Array]";
      };
    }
  });

  // output/Foreign/index.js
  var ForeignError, TypeMismatch, unsafeToForeign, unsafeFromForeign, fail2, unsafeReadTagged, readString;
  var init_Foreign2 = __esm({
    "output/Foreign/index.js"() {
      init_foreign63();
      init_Control4();
      init_Control_Monad_Error();
      init_Control_Monad_Except();
      init_Data();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data43();
      init_Data_List3();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data_String2();
      init_Unsafe();
      init_foreign63();
      ForeignError = /* @__PURE__ */ function() {
        function ForeignError2(value0) {
          this.value0 = value0;
        }
        ;
        ForeignError2.create = function(value0) {
          return new ForeignError2(value0);
        };
        return ForeignError2;
      }();
      TypeMismatch = /* @__PURE__ */ function() {
        function TypeMismatch3(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        TypeMismatch3.create = function(value0) {
          return function(value1) {
            return new TypeMismatch3(value0, value1);
          };
        };
        return TypeMismatch3;
      }();
      unsafeToForeign = unsafeCoerce2;
      unsafeFromForeign = unsafeCoerce2;
      fail2 = function(dictMonad) {
        var $153 = throwError(monadThrowExceptT(dictMonad));
        return function($154) {
          return $153(singleton3($154));
        };
      };
      unsafeReadTagged = function(dictMonad) {
        var pure113 = pure(applicativeExceptT(dictMonad));
        var fail1 = fail2(dictMonad);
        return function(tag) {
          return function(value17) {
            if (tagOf(value17) === tag) {
              return pure113(unsafeFromForeign(value17));
            }
            ;
            if (otherwise) {
              return fail1(new TypeMismatch(tag, tagOf(value17)));
            }
            ;
            throw new Error("Failed pattern match at Foreign (line 123, column 1 - line 123, column 104): " + [tag.constructor.name, value17.constructor.name]);
          };
        };
      };
      readString = function(dictMonad) {
        return unsafeReadTagged(dictMonad)("String");
      };
    }
  });

  // output/Web.Event.EventTarget/foreign.js
  function eventListener(fn) {
    return function() {
      return function(event) {
        return fn(event)();
      };
    };
  }
  function addEventListener2(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target6) {
          return function() {
            return target6.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }
  function removeEventListener2(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target6) {
          return function() {
            return target6.removeEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }
  var init_foreign64 = __esm({
    "output/Web.Event.EventTarget/foreign.js"() {
    }
  });

  // output/Web.Event.EventTarget/index.js
  var init_Web_Event = __esm({
    "output/Web.Event.EventTarget/index.js"() {
      init_foreign64();
      init_foreign64();
    }
  });

  // output/Halogen.VDom.DOM.Prop/index.js
  var $runtime_lazy9, map18, map19, Created, Removed, Attribute, Property, Handler, Ref, unsafeGetProperty, setProperty, removeProperty, propToStrKey, propFromString, functorProp, buildProp;
  var init_Halogen_VDom_DOM = __esm({
    "output/Halogen.VDom.DOM.Prop/index.js"() {
      init_Data4();
      init_Data19();
      init_Data52();
      init_Data22();
      init_Data3();
      init_Effect2();
      init_Foreign2();
      init_Foreign();
      init_Halogen_VDom();
      init_Halogen_VDom3();
      init_Unsafe();
      init_Web_Event();
      $runtime_lazy9 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      map18 = /* @__PURE__ */ map(functorFn);
      map19 = /* @__PURE__ */ map(functorMaybe);
      Created = /* @__PURE__ */ function() {
        function Created2(value0) {
          this.value0 = value0;
        }
        ;
        Created2.create = function(value0) {
          return new Created2(value0);
        };
        return Created2;
      }();
      Removed = /* @__PURE__ */ function() {
        function Removed2(value0) {
          this.value0 = value0;
        }
        ;
        Removed2.create = function(value0) {
          return new Removed2(value0);
        };
        return Removed2;
      }();
      Attribute = /* @__PURE__ */ function() {
        function Attribute2(value0, value1, value22) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
        }
        ;
        Attribute2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return new Attribute2(value0, value1, value22);
            };
          };
        };
        return Attribute2;
      }();
      Property = /* @__PURE__ */ function() {
        function Property2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Property2.create = function(value0) {
          return function(value1) {
            return new Property2(value0, value1);
          };
        };
        return Property2;
      }();
      Handler = /* @__PURE__ */ function() {
        function Handler2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Handler2.create = function(value0) {
          return function(value1) {
            return new Handler2(value0, value1);
          };
        };
        return Handler2;
      }();
      Ref = /* @__PURE__ */ function() {
        function Ref2(value0) {
          this.value0 = value0;
        }
        ;
        Ref2.create = function(value0) {
          return new Ref2(value0);
        };
        return Ref2;
      }();
      unsafeGetProperty = unsafeGetAny;
      setProperty = unsafeSetAny;
      removeProperty = function(key, el) {
        var v = hasAttribute(nullImpl, key, el);
        if (v) {
          return removeAttribute(nullImpl, key, el);
        }
        ;
        var v1 = typeOf(unsafeGetAny(key, el));
        if (v1 === "string") {
          return unsafeSetAny(key, "", el);
        }
        ;
        if (key === "rowSpan") {
          return unsafeSetAny(key, 1, el);
        }
        ;
        if (key === "colSpan") {
          return unsafeSetAny(key, 1, el);
        }
        ;
        return unsafeSetAny(key, jsUndefined, el);
      };
      propToStrKey = function(v) {
        if (v instanceof Attribute && v.value0 instanceof Just) {
          return "attr/" + (v.value0.value0 + (":" + v.value1));
        }
        ;
        if (v instanceof Attribute) {
          return "attr/:" + v.value1;
        }
        ;
        if (v instanceof Property) {
          return "prop/" + v.value0;
        }
        ;
        if (v instanceof Handler) {
          return "handler/" + v.value0;
        }
        ;
        if (v instanceof Ref) {
          return "ref";
        }
        ;
        throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): " + [v.constructor.name]);
      };
      propFromString = unsafeCoerce2;
      functorProp = {
        map: function(v) {
          return function(v1) {
            if (v1 instanceof Handler) {
              return new Handler(v1.value0, map18(map19(v))(v1.value1));
            }
            ;
            if (v1 instanceof Ref) {
              return new Ref(map18(map19(v))(v1.value0));
            }
            ;
            return v1;
          };
        }
      };
      buildProp = function(emit) {
        return function(el) {
          var removeProp = function(prevEvents) {
            return function(v, v1) {
              if (v1 instanceof Attribute) {
                return removeAttribute(toNullable(v1.value0), v1.value1, el);
              }
              ;
              if (v1 instanceof Property) {
                return removeProperty(v1.value0, el);
              }
              ;
              if (v1 instanceof Handler) {
                var handler3 = unsafeLookup(v1.value0, prevEvents);
                return removeEventListener(v1.value0, fst(handler3), el);
              }
              ;
              if (v1 instanceof Ref) {
                return unit;
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [v1.constructor.name]);
            };
          };
          var mbEmit = function(v) {
            if (v instanceof Just) {
              return emit(v.value0)();
            }
            ;
            return unit;
          };
          var haltProp = function(state3) {
            var v = lookup5("ref")(state3.props);
            if (v instanceof Just && v.value0 instanceof Ref) {
              return mbEmit(v.value0.value0(new Removed(el)));
            }
            ;
            return unit;
          };
          var diffProp = function(prevEvents, events) {
            return function(v, v1, v11, v2) {
              if (v11 instanceof Attribute && v2 instanceof Attribute) {
                var $66 = v11.value2 === v2.value2;
                if ($66) {
                  return v2;
                }
                ;
                setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
                return v2;
              }
              ;
              if (v11 instanceof Property && v2 instanceof Property) {
                var v4 = refEq2(v11.value1, v2.value1);
                if (v4) {
                  return v2;
                }
                ;
                if (v2.value0 === "value") {
                  var elVal = unsafeGetProperty("value", el);
                  var $75 = refEq2(elVal, v2.value1);
                  if ($75) {
                    return v2;
                  }
                  ;
                  setProperty(v2.value0, v2.value1, el);
                  return v2;
                }
                ;
                setProperty(v2.value0, v2.value1, el);
                return v2;
              }
              ;
              if (v11 instanceof Handler && v2 instanceof Handler) {
                var handler3 = unsafeLookup(v2.value0, prevEvents);
                write(v2.value1)(snd(handler3))();
                pokeMutMap(v2.value0, handler3, events);
                return v2;
              }
              ;
              return v2;
            };
          };
          var applyProp = function(events) {
            return function(v, v1, v2) {
              if (v2 instanceof Attribute) {
                setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
                return v2;
              }
              ;
              if (v2 instanceof Property) {
                setProperty(v2.value0, v2.value1, el);
                return v2;
              }
              ;
              if (v2 instanceof Handler) {
                var v3 = unsafeGetAny(v2.value0, events);
                if (unsafeHasAny(v2.value0, events)) {
                  write(v2.value1)(snd(v3))();
                  return v2;
                }
                ;
                var ref2 = $$new(v2.value1)();
                var listener = eventListener(function(ev) {
                  return function __do4() {
                    var f$prime = read(ref2)();
                    return mbEmit(f$prime(ev));
                  };
                })();
                pokeMutMap(v2.value0, new Tuple(listener, ref2), events);
                addEventListener(v2.value0, listener, el);
                return v2;
              }
              ;
              if (v2 instanceof Ref) {
                mbEmit(v2.value0(new Created(el)));
                return v2;
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [v2.constructor.name]);
            };
          };
          var $lazy_patchProp = $runtime_lazy9("patchProp", "Halogen.VDom.DOM.Prop", function() {
            return function(state3, ps2) {
              var events = newMutMap();
              var onThis = removeProp(state3.events);
              var onThese = diffProp(state3.events, events);
              var onThat = applyProp(events);
              var props = diffWithKeyAndIxE(state3.props, ps2, propToStrKey, onThese, onThis, onThat);
              var nextState = {
                events: unsafeFreeze2(events),
                props
              };
              return mkStep(new Step(unit, nextState, $lazy_patchProp(100), haltProp));
            };
          });
          var patchProp = $lazy_patchProp(87);
          var renderProp = function(ps1) {
            var events = newMutMap();
            var ps1$prime = strMapWithIxE(ps1, propToStrKey, applyProp(events));
            var state3 = {
              events: unsafeFreeze2(events),
              props: ps1$prime
            };
            return mkStep(new Step(unit, state3, patchProp, haltProp));
          };
          return renderProp;
        };
      };
    }
  });

  // output/Web.HTML.Common/index.js
  var ClassName;
  var init_Web_HTML = __esm({
    "output/Web.HTML.Common/index.js"() {
      init_Data9();
      init_Data15();
      ClassName = function(x) {
        return x;
      };
    }
  });

  // output/Halogen.HTML.Core/index.js
  var map20, map110, map23, bimap3, HTML, widget, toPropValue, text, prop, isPropString, isPropInputType, handler, element, bifunctorHTML;
  var init_Halogen_HTML = __esm({
    "output/Halogen.HTML.Core/index.js"() {
      init_DOM_HTML_Indexed();
      init_DOM_HTML_Indexed2();
      init_DOM_HTML_Indexed3();
      init_DOM_HTML_Indexed4();
      init_DOM_HTML_Indexed5();
      init_DOM_HTML_Indexed6();
      init_DOM_HTML_Indexed7();
      init_DOM_HTML_Indexed8();
      init_DOM_HTML_Indexed9();
      init_DOM_HTML_Indexed10();
      init_DOM_HTML_Indexed11();
      init_DOM_HTML_Indexed12();
      init_DOM_HTML_Indexed13();
      init_DOM_HTML_Indexed14();
      init_DOM_HTML_Indexed15();
      init_Data23();
      init_Data4();
      init_Data19();
      init_Data24();
      init_Halogen_Query3();
      init_Halogen2();
      init_Halogen_VDom_DOM();
      init_Halogen_VDom2();
      init_Web_HTML();
      init_Halogen2();
      init_Halogen_VDom_DOM();
      init_Web_HTML();
      map20 = /* @__PURE__ */ map(functorArray);
      map110 = /* @__PURE__ */ map(functorProp);
      map23 = /* @__PURE__ */ map(functorInput);
      bimap3 = /* @__PURE__ */ bimap(bifunctorVDom);
      HTML = function(x) {
        return x;
      };
      widget = function($28) {
        return HTML(Widget.create($28));
      };
      toPropValue = function(dict) {
        return dict.toPropValue;
      };
      text = function($29) {
        return HTML(Text.create($29));
      };
      prop = function(dictIsProp) {
        var toPropValue1 = toPropValue(dictIsProp);
        return function(v) {
          var $31 = Property.create(v);
          return function($32) {
            return $31(toPropValue1($32));
          };
        };
      };
      isPropString = {
        toPropValue: propFromString
      };
      isPropInputType = {
        toPropValue: function($45) {
          return propFromString(renderInputType($45));
        }
      };
      handler = /* @__PURE__ */ function() {
        return Handler.create;
      }();
      element = function(ns) {
        return function(name16) {
          return function(props) {
            return function(children2) {
              return new Elem(ns, name16, props, children2);
            };
          };
        };
      };
      bifunctorHTML = {
        bimap: function(f) {
          return function(g) {
            return function(v) {
              return bimap3(map20(map110(map23(g))))(f)(v);
            };
          };
        }
      };
    }
  });

  // output/Halogen.HTML.Properties/index.js
  var unwrap7, prop2, prop22, type_, value, placeholder, id3, $$for2, class_;
  var init_Halogen_HTML2 = __esm({
    "output/Halogen.HTML.Properties/index.js"() {
      init_Control4();
      init_DOM_HTML_Indexed();
      init_DOM_HTML_Indexed2();
      init_DOM_HTML_Indexed5();
      init_DOM_HTML_Indexed6();
      init_DOM_HTML_Indexed7();
      init_DOM_HTML_Indexed9();
      init_DOM_HTML_Indexed10();
      init_DOM_HTML_Indexed11();
      init_DOM_HTML_Indexed12();
      init_DOM_HTML_Indexed13();
      init_DOM_HTML_Indexed14();
      init_Data4();
      init_Data21();
      init_Data19();
      init_Data24();
      init_Data_String3();
      init_Halogen_HTML();
      init_Halogen_Query3();
      init_Halogen_VDom_DOM();
      init_Unsafe();
      init_DOM_HTML_Indexed();
      init_DOM_HTML_Indexed2();
      init_DOM_HTML_Indexed5();
      init_DOM_HTML_Indexed6();
      init_DOM_HTML_Indexed7();
      init_DOM_HTML_Indexed9();
      init_DOM_HTML_Indexed10();
      init_DOM_HTML_Indexed11();
      init_DOM_HTML_Indexed12();
      init_DOM_HTML_Indexed13();
      init_DOM_HTML_Indexed14();
      unwrap7 = /* @__PURE__ */ unwrap();
      prop2 = function(dictIsProp) {
        return prop(dictIsProp);
      };
      prop22 = /* @__PURE__ */ prop2(isPropString);
      type_ = function(dictIsProp) {
        return prop2(dictIsProp)("type");
      };
      value = function(dictIsProp) {
        return prop2(dictIsProp)("value");
      };
      placeholder = /* @__PURE__ */ prop22("placeholder");
      id3 = /* @__PURE__ */ prop22("id");
      $$for2 = /* @__PURE__ */ prop22("htmlFor");
      class_ = /* @__PURE__ */ function() {
        var $36 = prop22("className");
        return function($37) {
          return $36(unwrap7($37));
        };
      }();
    }
  });

  // output/App.Component.HTML.Utils/index.js
  var mempty3, maybeElem, css;
  var init_App_Component_HTML = __esm({
    "output/App.Component.HTML.Utils/index.js"() {
      init_App_Data4();
      init_Data19();
      init_Data14();
      init_Data13();
      init_Data3();
      init_Halogen_HTML();
      init_Halogen_HTML2();
      init_Routing();
      init_Web_HTML();
      mempty3 = /* @__PURE__ */ mempty(monoidString);
      maybeElem = function(v) {
        return function(v1) {
          if (v instanceof Just) {
            return v1(v.value0);
          }
          ;
          return text(mempty3);
        };
      };
      css = function($12) {
        return class_(ClassName($12));
      };
    }
  });

  // output/Data.Exists/index.js
  var runExists, mkExists;
  var init_Data53 = __esm({
    "output/Data.Exists/index.js"() {
      init_Unsafe();
      runExists = unsafeCoerce2;
      mkExists = unsafeCoerce2;
    }
  });

  // output/Data.Coyoneda/index.js
  var CoyonedaF, unCoyoneda, coyoneda, functorCoyoneda, liftCoyoneda;
  var init_Data54 = __esm({
    "output/Data.Coyoneda/index.js"() {
      init_Control7();
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control10();
      init_Control9();
      init_Control8();
      init_Data38();
      init_Data9();
      init_Data53();
      init_Data25();
      init_Data4();
      init_Data_Functor();
      init_Data15();
      init_Data_Semigroup();
      init_Data_Semigroup2();
      init_Data29();
      CoyonedaF = /* @__PURE__ */ function() {
        function CoyonedaF2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        CoyonedaF2.create = function(value0) {
          return function(value1) {
            return new CoyonedaF2(value0, value1);
          };
        };
        return CoyonedaF2;
      }();
      unCoyoneda = function(f) {
        return function(v) {
          return runExists(function(v1) {
            return f(v1.value0)(v1.value1);
          })(v);
        };
      };
      coyoneda = function(k) {
        return function(fi) {
          return mkExists(new CoyonedaF(k, fi));
        };
      };
      functorCoyoneda = {
        map: function(f) {
          return function(v) {
            return runExists(function(v1) {
              return coyoneda(function($180) {
                return f(v1.value0($180));
              })(v1.value1);
            })(v);
          };
        }
      };
      liftCoyoneda = /* @__PURE__ */ coyoneda(/* @__PURE__ */ identity(categoryFn));
    }
  });

  // output/Halogen.Query.HalogenQ/index.js
  var Initialize, Finalize, Receive, Action2, Query;
  var init_Halogen_Query4 = __esm({
    "output/Halogen.Query.HalogenQ/index.js"() {
      init_Data54();
      init_Data4();
      Initialize = /* @__PURE__ */ function() {
        function Initialize6(value0) {
          this.value0 = value0;
        }
        ;
        Initialize6.create = function(value0) {
          return new Initialize6(value0);
        };
        return Initialize6;
      }();
      Finalize = /* @__PURE__ */ function() {
        function Finalize2(value0) {
          this.value0 = value0;
        }
        ;
        Finalize2.create = function(value0) {
          return new Finalize2(value0);
        };
        return Finalize2;
      }();
      Receive = /* @__PURE__ */ function() {
        function Receive6(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Receive6.create = function(value0) {
          return function(value1) {
            return new Receive6(value0, value1);
          };
        };
        return Receive6;
      }();
      Action2 = /* @__PURE__ */ function() {
        function Action3(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Action3.create = function(value0) {
          return function(value1) {
            return new Action3(value0, value1);
          };
        };
        return Action3;
      }();
      Query = /* @__PURE__ */ function() {
        function Query4(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Query4.create = function(value0) {
          return function(value1) {
            return new Query4(value0, value1);
          };
        };
        return Query4;
      }();
    }
  });

  // output/Halogen.VDom.Thunk/index.js
  var $runtime_lazy10, Thunk, unsafeEqThunk, runThunk, mapThunk, hoist3, buildThunk;
  var init_Halogen_VDom5 = __esm({
    "output/Halogen.VDom.Thunk/index.js"() {
      init_Data_Function();
      init_Data4();
      init_Halogen_VDom4();
      init_Halogen_VDom();
      init_Halogen_VDom3();
      init_Unsafe();
      $runtime_lazy10 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      Thunk = /* @__PURE__ */ function() {
        function Thunk2(value0, value1, value22, value32) {
          this.value0 = value0;
          this.value1 = value1;
          this.value2 = value22;
          this.value3 = value32;
        }
        ;
        Thunk2.create = function(value0) {
          return function(value1) {
            return function(value22) {
              return function(value32) {
                return new Thunk2(value0, value1, value22, value32);
              };
            };
          };
        };
        return Thunk2;
      }();
      unsafeEqThunk = function(v, v1) {
        return refEq2(v.value0, v1.value0) && (refEq2(v.value1, v1.value1) && v.value1(v.value3, v1.value3));
      };
      runThunk = function(v) {
        return v.value2(v.value3);
      };
      mapThunk = function(k) {
        return function(v) {
          return new Thunk(v.value0, v.value1, function($51) {
            return k(v.value2($51));
          }, v.value3);
        };
      };
      hoist3 = mapThunk;
      buildThunk = function(toVDom) {
        var haltThunk = function(state3) {
          return halt(state3.vdom);
        };
        var $lazy_patchThunk = $runtime_lazy10("patchThunk", "Halogen.VDom.Thunk", function() {
          return function(state3, t2) {
            var $48 = unsafeEqThunk(state3.thunk, t2);
            if ($48) {
              return mkStep(new Step(extract2(state3.vdom), state3, $lazy_patchThunk(112), haltThunk));
            }
            ;
            var vdom = step2(state3.vdom, toVDom(runThunk(t2)));
            return mkStep(new Step(extract2(vdom), {
              vdom,
              thunk: t2
            }, $lazy_patchThunk(115), haltThunk));
          };
        });
        var patchThunk = $lazy_patchThunk(108);
        var renderThunk = function(spec) {
          return function(t) {
            var vdom = buildVDom(spec)(toVDom(runThunk(t)));
            return mkStep(new Step(extract2(vdom), {
              thunk: t,
              vdom
            }, patchThunk, haltThunk));
          };
        };
        return renderThunk;
      };
    }
  });

  // output/Halogen.Component/index.js
  var voidLeft3, traverse_3, map21, lmap4, pure7, lookup7, pop3, insert6, ComponentSlot, ThunkSlot, unComponentSlot, unComponent, mkEval, mkComponentSlot, mkComponent, hoistSlot, hoist4, defaultEval, componentSlot;
  var init_Halogen3 = __esm({
    "output/Halogen.Component/index.js"() {
      init_Control4();
      init_Data23();
      init_Data54();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data3();
      init_Halogen_Data2();
      init_Halogen_HTML();
      init_Halogen_Query2();
      init_Halogen_Query4();
      init_Halogen_VDom5();
      init_Unsafe();
      voidLeft3 = /* @__PURE__ */ voidLeft(functorHalogenM);
      traverse_3 = /* @__PURE__ */ traverse_(applicativeHalogenM)(foldableMaybe);
      map21 = /* @__PURE__ */ map(functorHalogenM);
      lmap4 = /* @__PURE__ */ lmap(bifunctorHTML);
      pure7 = /* @__PURE__ */ pure(applicativeHalogenM);
      lookup7 = /* @__PURE__ */ lookup3();
      pop3 = /* @__PURE__ */ pop2();
      insert6 = /* @__PURE__ */ insert2();
      ComponentSlot = /* @__PURE__ */ function() {
        function ComponentSlot2(value0) {
          this.value0 = value0;
        }
        ;
        ComponentSlot2.create = function(value0) {
          return new ComponentSlot2(value0);
        };
        return ComponentSlot2;
      }();
      ThunkSlot = /* @__PURE__ */ function() {
        function ThunkSlot2(value0) {
          this.value0 = value0;
        }
        ;
        ThunkSlot2.create = function(value0) {
          return new ThunkSlot2(value0);
        };
        return ThunkSlot2;
      }();
      unComponentSlot = unsafeCoerce2;
      unComponent = unsafeCoerce2;
      mkEval = function(args) {
        return function(v) {
          if (v instanceof Initialize) {
            return voidLeft3(traverse_3(args.handleAction)(args.initialize))(v.value0);
          }
          ;
          if (v instanceof Finalize) {
            return voidLeft3(traverse_3(args.handleAction)(args.finalize))(v.value0);
          }
          ;
          if (v instanceof Receive) {
            return voidLeft3(traverse_3(args.handleAction)(args.receive(v.value0)))(v.value1);
          }
          ;
          if (v instanceof Action2) {
            return voidLeft3(args.handleAction(v.value0))(v.value1);
          }
          ;
          if (v instanceof Query) {
            return unCoyoneda(function(g) {
              var $45 = map21(maybe(v.value1(unit))(g));
              return function($46) {
                return $45(args.handleQuery($46));
              };
            })(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 71): " + [v.constructor.name]);
        };
      };
      mkComponentSlot = unsafeCoerce2;
      mkComponent = unsafeCoerce2;
      hoistSlot = function(dictFunctor) {
        return function(nat) {
          return function(v) {
            if (v instanceof ComponentSlot) {
              return unComponentSlot(function(slot4) {
                return new ComponentSlot(mkComponentSlot({
                  get: slot4.get,
                  pop: slot4.pop,
                  set: slot4.set,
                  component: hoist4(dictFunctor)(nat)(slot4.component),
                  input: slot4.input,
                  output: slot4.output
                }));
              })(v.value0);
            }
            ;
            if (v instanceof ThunkSlot) {
              return new ThunkSlot(hoist3(lmap4(hoistSlot(dictFunctor)(nat)))(v.value0));
            }
            ;
            throw new Error("Failed pattern match at Halogen.Component (line 279, column 17 - line 284, column 53): " + [v.constructor.name]);
          };
        };
      };
      hoist4 = function(dictFunctor) {
        var hoist1 = hoist(dictFunctor);
        return function(nat) {
          return unComponent(function(c) {
            return mkComponent({
              initialState: c.initialState,
              render: function() {
                var $47 = lmap4(hoistSlot(dictFunctor)(nat));
                return function($48) {
                  return $47(c.render($48));
                };
              }(),
              "eval": function() {
                var $49 = hoist1(nat);
                return function($50) {
                  return $49(c["eval"]($50));
                };
              }()
            });
          });
        };
      };
      defaultEval = /* @__PURE__ */ function() {
        return {
          handleAction: $$const(pure7(unit)),
          handleQuery: $$const(pure7(Nothing.value)),
          receive: $$const(Nothing.value),
          initialize: Nothing.value,
          finalize: Nothing.value
        };
      }();
      componentSlot = function() {
        return function(dictIsSymbol) {
          var lookup13 = lookup7(dictIsSymbol);
          var pop12 = pop3(dictIsSymbol);
          var insert13 = insert6(dictIsSymbol);
          return function(dictOrd) {
            var lookup23 = lookup13(dictOrd);
            var pop22 = pop12(dictOrd);
            var insert22 = insert13(dictOrd);
            return function(label5) {
              return function(p2) {
                return function(comp) {
                  return function(input3) {
                    return function(output2) {
                      return mkComponentSlot({
                        get: lookup23(label5)(p2),
                        pop: pop22(label5)(p2),
                        set: insert22(label5)(p2),
                        component: comp,
                        input: input3,
                        output: output2
                      });
                    };
                  };
                };
              };
            };
          };
        };
      };
    }
  });

  // output/Halogen.HTML.Elements/index.js
  var element2, fieldset, fieldset_, form, h1, input, label, div3, div_;
  var init_Halogen_HTML3 = __esm({
    "output/Halogen.HTML.Elements/index.js"() {
      init_Control4();
      init_Data19();
      init_Halogen_HTML();
      init_Halogen_VDom2();
      element2 = /* @__PURE__ */ function() {
        return element(Nothing.value);
      }();
      fieldset = /* @__PURE__ */ element2("fieldset");
      fieldset_ = /* @__PURE__ */ fieldset([]);
      form = /* @__PURE__ */ element2("form");
      h1 = /* @__PURE__ */ element2("h1");
      input = function(props) {
        return element2("input")(props)([]);
      };
      label = /* @__PURE__ */ element2("label");
      div3 = /* @__PURE__ */ element2("div");
      div_ = /* @__PURE__ */ div3([]);
    }
  });

  // output/Control.Monad.Except/index.js
  var unwrap8, runExcept;
  var init_Control_Monad3 = __esm({
    "output/Control.Monad.Except/index.js"() {
      init_Control_Monad_Error();
      init_Control_Monad_Except();
      init_Data26();
      init_Data24();
      init_Control_Monad_Error();
      init_Control_Monad_Except();
      unwrap8 = /* @__PURE__ */ unwrap();
      runExcept = function($3) {
        return unwrap8(runExceptT($3));
      };
    }
  });

  // output/Foreign.Index/foreign.js
  function unsafeReadPropImpl(f, s, key, value17) {
    return value17 == null ? f : s(value17[key]);
  }
  var init_foreign65 = __esm({
    "output/Foreign.Index/foreign.js"() {
    }
  });

  // output/Foreign.Index/index.js
  var unsafeReadProp, readProp;
  var init_Foreign3 = __esm({
    "output/Foreign.Index/index.js"() {
      init_foreign65();
      init_Control4();
      init_Control5();
      init_Control_Monad_Except();
      init_Data2();
      init_Foreign2();
      unsafeReadProp = function(dictMonad) {
        var fail4 = fail2(dictMonad);
        var pure25 = pure(applicativeExceptT(dictMonad));
        return function(k) {
          return function(value17) {
            return unsafeReadPropImpl(fail4(new TypeMismatch("object", typeOf(value17))), pure25, k, value17);
          };
        };
      };
      readProp = function(dictMonad) {
        return unsafeReadProp(dictMonad);
      };
    }
  });

  // output/Web.Clipboard.ClipboardEvent.EventTypes/index.js
  var init_Web_Clipboard_ClipboardEvent = __esm({
    "output/Web.Clipboard.ClipboardEvent.EventTypes/index.js"() {
    }
  });

  // output/Web.Event.Event/foreign.js
  function _currentTarget(e) {
    return e.currentTarget;
  }
  function _target(e) {
    return e.target;
  }
  function preventDefault(e) {
    return function() {
      return e.preventDefault();
    };
  }
  var init_foreign66 = __esm({
    "output/Web.Event.Event/foreign.js"() {
    }
  });

  // output/Web.Event.EventPhase/index.js
  var init_Web_Event2 = __esm({
    "output/Web.Event.EventPhase/index.js"() {
      init_Data41();
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.Event.Event/index.js
  var target, currentTarget;
  var init_Web_Event3 = __esm({
    "output/Web.Event.Event/index.js"() {
      init_foreign66();
      init_Data41();
      init_Data9();
      init_Data19();
      init_Data52();
      init_Data15();
      init_Web_Event2();
      init_foreign66();
      target = function($3) {
        return toMaybe(_target($3));
      };
      currentTarget = function($5) {
        return toMaybe(_currentTarget($5));
      };
    }
  });

  // output/Web.File.FileList/foreign.js
  function _item(index4) {
    return function(fileList) {
      return fileList.item(index4);
    };
  }
  var init_foreign67 = __esm({
    "output/Web.File.FileList/foreign.js"() {
    }
  });

  // output/Web.File.FileList/index.js
  var map24, item, items;
  var init_Web_File = __esm({
    "output/Web.File.FileList/index.js"() {
      init_foreign67();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data52();
      init_Data22();
      init_Data32();
      init_foreign67();
      map24 = /* @__PURE__ */ map(functorMaybe);
      item = function(i2) {
        var $5 = _item(i2);
        return function($6) {
          return toMaybe($5($6));
        };
      };
      items = function(dictUnfoldable) {
        var unfoldr3 = unfoldr(dictUnfoldable);
        return function(fl) {
          return unfoldr3(function(i2) {
            return map24(flip(Tuple.create)(i2 + 1 | 0))(item(i2)(fl));
          })(0);
        };
      };
    }
  });

  // output/Web.HTML.Event.DragEvent.EventTypes/index.js
  var init_Web_HTML_Event_DragEvent = __esm({
    "output/Web.HTML.Event.DragEvent.EventTypes/index.js"() {
    }
  });

  // output/Web.HTML.Event.EventTypes/index.js
  var input2, domcontentloaded, change, blur;
  var init_Web_HTML_Event = __esm({
    "output/Web.HTML.Event.EventTypes/index.js"() {
      input2 = "input";
      domcontentloaded = "DOMContentLoaded";
      change = "change";
      blur = "blur";
    }
  });

  // output/Web.HTML.HTMLInputElement/foreign.js
  function _files(input3) {
    return function() {
      return input3.files;
    };
  }
  var init_foreign68 = __esm({
    "output/Web.HTML.HTMLInputElement/foreign.js"() {
    }
  });

  // output/Web.HTML.SelectionMode/index.js
  var init_Web_HTML2 = __esm({
    "output/Web.HTML.SelectionMode/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLInputElement/index.js
  var map25, fromEventTarget, files;
  var init_Web_HTML3 = __esm({
    "output/Web.HTML.HTMLInputElement/index.js"() {
      init_foreign68();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_HTML2();
      init_Web_Internal();
      init_foreign68();
      map25 = /* @__PURE__ */ map(functorEffect);
      fromEventTarget = /* @__PURE__ */ unsafeReadProtoTagged("HTMLInputElement");
      files = /* @__PURE__ */ function() {
        var $6 = map25(toMaybe);
        return function($7) {
          return $6(_files($7));
        };
      }();
    }
  });

  // output/Web.UIEvent.FocusEvent.EventTypes/index.js
  var init_Web_UIEvent_FocusEvent = __esm({
    "output/Web.UIEvent.FocusEvent.EventTypes/index.js"() {
    }
  });

  // output/Web.UIEvent.KeyboardEvent.EventTypes/index.js
  var init_Web_UIEvent_KeyboardEvent = __esm({
    "output/Web.UIEvent.KeyboardEvent.EventTypes/index.js"() {
    }
  });

  // output/Web.UIEvent.MouseEvent.EventTypes/index.js
  var click;
  var init_Web_UIEvent_MouseEvent = __esm({
    "output/Web.UIEvent.MouseEvent.EventTypes/index.js"() {
      click = "click";
    }
  });

  // output/Web.UIEvent.WheelEvent.EventTypes/index.js
  var init_Web_UIEvent_WheelEvent = __esm({
    "output/Web.UIEvent.WheelEvent.EventTypes/index.js"() {
    }
  });

  // output/Halogen.HTML.Events/index.js
  var map26, composeKleisli3, composeKleisliFlipped2, readProp2, readString2, mouseHandler, handler$prime, handler2, onClick, onFileUpload, onSubmit, focusHandler, onBlur, addForeignPropHandler, onValueInput;
  var init_Halogen_HTML4 = __esm({
    "output/Halogen.HTML.Events/index.js"() {
      init_Control5();
      init_Control_Monad3();
      init_Control_Monad_Except();
      init_Data20();
      init_Data2();
      init_Data4();
      init_Data26();
      init_Data19();
      init_Data32();
      init_Effect5();
      init_Foreign2();
      init_Foreign3();
      init_Halogen_HTML();
      init_Halogen_Query3();
      init_Unsafe();
      init_Web_Clipboard_ClipboardEvent();
      init_Web_Event3();
      init_Web_File();
      init_Web_HTML_Event_DragEvent();
      init_Web_HTML_Event();
      init_Web_HTML3();
      init_Web_UIEvent_FocusEvent();
      init_Web_UIEvent_KeyboardEvent();
      init_Web_UIEvent_MouseEvent();
      init_Web_UIEvent_WheelEvent();
      map26 = /* @__PURE__ */ map(functorMaybe);
      composeKleisli3 = /* @__PURE__ */ composeKleisli(bindMaybe);
      composeKleisliFlipped2 = /* @__PURE__ */ composeKleisliFlipped(/* @__PURE__ */ bindExceptT(monadIdentity));
      readProp2 = /* @__PURE__ */ readProp(monadIdentity);
      readString2 = /* @__PURE__ */ readString(monadIdentity);
      mouseHandler = unsafeCoerce2;
      handler$prime = function(et) {
        return function(f) {
          return handler(et)(function(ev) {
            return map26(Action.create)(f(ev));
          });
        };
      };
      handler2 = function(et) {
        return function(f) {
          return handler(et)(function(ev) {
            return new Just(new Action(f(ev)));
          });
        };
      };
      onClick = /* @__PURE__ */ function() {
        var $15 = handler2(click);
        return function($16) {
          return $15(mouseHandler($16));
        };
      }();
      onFileUpload = function(dictUnfoldable) {
        var none2 = none(dictUnfoldable);
        var items2 = items(dictUnfoldable);
        return function(f) {
          return handler2(change)(function() {
            var $19 = maybe(none2)(items2);
            var $20 = composeKleisli3(target)(composeKleisli3(fromEventTarget)(function($22) {
              return unsafePerformEffect(files($22));
            }));
            return function($21) {
              return f($19($20($21)));
            };
          }());
        };
      };
      onSubmit = /* @__PURE__ */ handler2("submit");
      focusHandler = unsafeCoerce2;
      onBlur = /* @__PURE__ */ function() {
        var $55 = handler2(blur);
        return function($56) {
          return $55(focusHandler($56));
        };
      }();
      addForeignPropHandler = function(key) {
        return function(prop3) {
          return function(reader) {
            return function(f) {
              var go2 = function(a2) {
                return composeKleisliFlipped2(reader)(readProp2(prop3))(unsafeToForeign(a2));
              };
              return handler$prime(key)(composeKleisli3(currentTarget)(function(e) {
                return either($$const(Nothing.value))(function($85) {
                  return Just.create(f($85));
                })(runExcept(go2(e)));
              }));
            };
          };
        };
      };
      onValueInput = /* @__PURE__ */ addForeignPropHandler(input2)("value")(readString2);
    }
  });

  // output/Control.Monad.Fork.Class/index.js
  var monadForkAff, fork;
  var init_Control_Monad_Fork = __esm({
    "output/Control.Monad.Fork.Class/index.js"() {
      init_Control_Monad_Reader2();
      init_Control_Monad_Trans();
      init_Effect6();
      monadForkAff = {
        suspend: suspendAff,
        fork: forkAff,
        join: joinFiber,
        Monad0: function() {
          return monadAff;
        },
        Functor1: function() {
          return functorFiber;
        }
      };
      fork = function(dict) {
        return dict.fork;
      };
    }
  });

  // output/Control.Monad.Identity.Trans/index.js
  var init_Control_Monad_Identity = __esm({
    "output/Control.Monad.Identity.Trans/index.js"() {
      init_Data9();
      init_Data15();
    }
  });

  // output/Halogen.Hooks.Internal.Types/foreign.js
  var init_foreign69 = __esm({
    "output/Halogen.Hooks.Internal.Types/foreign.js"() {
    }
  });

  // output/Halogen.Hooks.Internal.Types/index.js
  var init_Halogen_Hooks_Internal = __esm({
    "output/Halogen.Hooks.Internal.Types/index.js"() {
      init_foreign69();
      init_Unsafe();
      init_foreign69();
    }
  });

  // output/Web.HTML.HTMLElement/foreign.js
  function _read(nothing, just, value17) {
    var tag = Object.prototype.toString.call(value17);
    if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
      return just(value17);
    } else {
      return nothing;
    }
  }
  var init_foreign70 = __esm({
    "output/Web.HTML.HTMLElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLElement/index.js
  var toNode2, fromElement;
  var init_Web_HTML4 = __esm({
    "output/Web.HTML.HTMLElement/index.js"() {
      init_foreign70();
      init_Data4();
      init_Data19();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_foreign70();
      toNode2 = unsafeCoerce2;
      fromElement = function(x) {
        return _read(Nothing.value, Just.create, x);
      };
    }
  });

  // output/Halogen.Query/index.js
  var $$void5, query2, identity15, tell2, request, mkTell;
  var init_Halogen4 = __esm({
    "output/Halogen.Query/index.js"() {
      init_Control5();
      init_Control2();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Data4();
      init_Data19();
      init_Data3();
      init_Effect_Aff();
      init_Effect4();
      init_Halogen_Query2();
      init_Halogen_Query4();
      init_Halogen_Query3();
      init_Web_HTML4();
      init_Control_Monad_State();
      init_Control_Monad_Trans();
      init_Effect_Aff();
      init_Effect4();
      init_Halogen_Query2();
      init_Halogen_Query4();
      init_Halogen_Query3();
      $$void5 = /* @__PURE__ */ $$void(functorHalogenM);
      query2 = /* @__PURE__ */ query();
      identity15 = /* @__PURE__ */ identity(categoryFn);
      tell2 = function() {
        return function(dictIsSymbol) {
          var query1 = query2(dictIsSymbol);
          return function(dictOrd) {
            var query22 = query1(dictOrd);
            return function(slot4) {
              return function(label5) {
                return function(req) {
                  return $$void5(query22(slot4)(label5)(req(unit)));
                };
              };
            };
          };
        };
      };
      request = function() {
        return function(dictIsSymbol) {
          var query1 = query2(dictIsSymbol);
          return function(dictOrd) {
            var query22 = query1(dictOrd);
            return function(slot4) {
              return function(label5) {
                return function(req) {
                  return query22(slot4)(label5)(req(identity15));
                };
              };
            };
          };
        };
      };
      mkTell = function(act) {
        return act(unit);
      };
    }
  });

  // output/Halogen.Hooks.HookM/index.js
  var init_Halogen_Hooks = __esm({
    "output/Halogen.Hooks.HookM/index.js"() {
      init_Control4();
      init_Control_Applicative();
      init_Control5();
      init_Control2();
      init_Control_Monad_Error();
      init_Control_Monad();
      init_Control_Monad_Reader();
      init_Control_Monad_Rec();
      init_Control_Monad_Writer();
      init_Data28();
      init_Data2();
      init_Data4();
      init_Data_Map();
      init_Data19();
      init_Data29();
      init_Data3();
      init_Effect_Aff();
      init_Effect4();
      init_Halogen_Data2();
      init_Halogen_Hooks_Internal();
      init_Halogen4();
      init_Halogen_Query();
      init_Web_HTML4();
    }
  });

  // output/Halogen.Store.Select/index.js
  var unless2, Selector, selectEq, selectEmitter;
  var init_Halogen_Store = __esm({
    "output/Halogen.Store.Select/index.js"() {
      init_Control4();
      init_Control2();
      init_Data9();
      init_Data19();
      init_Effect();
      init_Effect2();
      init_Halogen();
      init_Unsafe2();
      unless2 = /* @__PURE__ */ unless(applicativeEffect);
      Selector = function(x) {
        return x;
      };
      selectEq = function(dictEq) {
        var eq5 = eq(dictEq);
        return function($14) {
          return Selector(function(v) {
            return {
              eq: eq5,
              select: v
            };
          }($14));
        };
      };
      selectEmitter = function(v) {
        return function(emitter) {
          return makeEmitter(function(push2) {
            return function __do4() {
              var previousDerivedRef = $$new(Nothing.value)();
              var subscription = subscribe(emitter)(function(store) {
                return function __do5() {
                  var previousDerived = read(previousDerivedRef)();
                  var newDerived = v.select(store);
                  var isUnchanged = maybe(false)(v.eq(newDerived))(previousDerived);
                  return unless2(isUnchanged)(function __do6() {
                    write(new Just(newDerived))(previousDerivedRef)();
                    return push2(newDerived)();
                  })();
                };
              })();
              return unsubscribe(subscription);
            };
          });
        };
      };
    }
  });

  // output/Halogen.Store.Monad/index.js
  var bind12, liftEffect3, pure1, map27, lift8, monadStoreT, monadEffectStoreT, monadStoreStoreT, monadAffStoreT, functorStoreT, bindStoreT, applicativeStoreT, updateStore, runAndEmitStoreT, runStoreT, getStore, emitSelected, monadStoreHalogenM;
  var init_Halogen_Store2 = __esm({
    "output/Halogen.Store.Monad/index.js"() {
      init_Control4();
      init_Control5();
      init_Control_Monad_Cont2();
      init_Control_Monad_Except();
      init_Control_Monad_Fork();
      init_Control_Monad_Identity();
      init_Control_Monad_Maybe();
      init_Control_Monad_RWS();
      init_Control_Monad_Reader();
      init_Control_Monad_Reader2();
      init_Control_Monad_State2();
      init_Control_Monad_Trans();
      init_Control_Monad_Writer2();
      init_Data4();
      init_Effect6();
      init_Effect_Aff();
      init_Effect4();
      init_Effect2();
      init_Halogen3();
      init_Halogen_Hooks();
      init_Halogen_Query2();
      init_Halogen_Store();
      init_Halogen();
      bind12 = /* @__PURE__ */ bind(bindAff);
      liftEffect3 = /* @__PURE__ */ liftEffect(monadEffectAff);
      pure1 = /* @__PURE__ */ pure(applicativeAff);
      map27 = /* @__PURE__ */ map(functorAff);
      lift8 = /* @__PURE__ */ lift(monadTransHalogenM);
      monadStoreT = function(dictMonad) {
        return monadReaderT(dictMonad);
      };
      monadEffectStoreT = function(dictMonadEffect) {
        return monadEffectReader(dictMonadEffect);
      };
      monadStoreStoreT = function(dictMonadEffect) {
        var Monad0 = dictMonadEffect.Monad0();
        var bind23 = bind(bindReaderT(Monad0.Bind1()));
        var ask2 = ask(monadAskReaderT(Monad0));
        var liftEffect12 = liftEffect(monadEffectReader(dictMonadEffect));
        var pure25 = pure(Monad0.Applicative0());
        var monadEffectStoreT1 = monadEffectStoreT(dictMonadEffect);
        return {
          getStore: bind23(ask2)(function(store) {
            return liftEffect12(read(store.value));
          }),
          updateStore: function(action2) {
            return bind23(ask2)(function(store) {
              return liftEffect12(function __do4() {
                var current = read(store.value)();
                var newStore = store.reducer(current)(action2);
                write(newStore)(store.value)();
                return notify(store.listener)(newStore)();
              });
            });
          },
          emitSelected: function(selector) {
            var $247 = selectEmitter(selector);
            return function($248) {
              return pure25($247(function(v) {
                return v.emitter;
              }($248)));
            };
          },
          MonadEffect0: function() {
            return monadEffectStoreT1;
          }
        };
      };
      monadAffStoreT = function(dictMonadAff) {
        return monadAffReader(dictMonadAff);
      };
      functorStoreT = function(dictFunctor) {
        return functorReaderT(dictFunctor);
      };
      bindStoreT = function(dictBind) {
        return bindReaderT(dictBind);
      };
      applicativeStoreT = function(dictApplicative) {
        return applicativeReaderT(dictApplicative);
      };
      updateStore = function(dict) {
        return dict.updateStore;
      };
      runAndEmitStoreT = function(dictMonad) {
        var hoist5 = hoist4(dictMonad.Bind1().Apply0().Functor0());
        return function(initialStore) {
          return function(reducer) {
            return function(component7) {
              return bind12(liftEffect3(function __do4() {
                var value17 = $$new(initialStore)();
                var v = create();
                return {
                  value: value17,
                  emitter: v.emitter,
                  listener: v.listener,
                  reducer
                };
              }))(function(hs) {
                return pure1({
                  emitter: hs.emitter,
                  component: hoist5(function(v) {
                    return runReaderT(v)(hs);
                  })(component7)
                });
              });
            };
          };
        };
      };
      runStoreT = function(dictMonad) {
        var runAndEmitStoreT1 = runAndEmitStoreT(dictMonad);
        return function(initialStore) {
          return function(reducer) {
            return function(component7) {
              return map27(function(v) {
                return v.component;
              })(runAndEmitStoreT1(initialStore)(reducer)(component7));
            };
          };
        };
      };
      getStore = function(dict) {
        return dict.getStore;
      };
      emitSelected = function(dict) {
        return dict.emitSelected;
      };
      monadStoreHalogenM = function(dictMonadStore) {
        var MonadEffect0 = dictMonadStore.MonadEffect0();
        var lift9 = lift8(MonadEffect0.Monad0());
        var monadEffectHalogenM2 = monadEffectHalogenM(MonadEffect0);
        return {
          getStore: lift9(getStore(dictMonadStore)),
          updateStore: function() {
            var $251 = updateStore(dictMonadStore);
            return function($252) {
              return lift9($251($252));
            };
          }(),
          emitSelected: function() {
            var $253 = emitSelected(dictMonadStore);
            return function($254) {
              return lift9($253($254));
            };
          }(),
          MonadEffect0: function() {
            return monadEffectHalogenM2;
          }
        };
      };
    }
  });

  // output/App.Page.FileUploader/index.js
  var type_4, show4, show14, Choose, Send, render, handleAction, handleAction1, component;
  var init_App_Page = __esm({
    "output/App.Page.FileUploader/index.js"() {
      init_App_Api();
      init_App_Api2();
      init_App_Capability2();
      init_App_Capability();
      init_App_Component_HTML();
      init_Control5();
      init_Control_Monad_State();
      init_DOM_HTML_Indexed7();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data_Function();
      init_Data4();
      init_Data19();
      init_Data16();
      init_Data32();
      init_Effect4();
      init_Effect3();
      init_Halogen3();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML4();
      init_Halogen_HTML2();
      init_Halogen_Query2();
      init_Halogen_Store2();
      type_4 = /* @__PURE__ */ type_(isPropInputType);
      show4 = /* @__PURE__ */ show(/* @__PURE__ */ showArray(showInt));
      show14 = /* @__PURE__ */ show(showError);
      Choose = /* @__PURE__ */ function() {
        function Choose2(value0) {
          this.value0 = value0;
        }
        ;
        Choose2.create = function(value0) {
          return new Choose2(value0);
        };
        return Choose2;
      }();
      Send = /* @__PURE__ */ function() {
        function Send2() {
        }
        ;
        Send2.value = new Send2();
        return Send2;
      }();
      render = /* @__PURE__ */ function() {
        return div3([css("custom-file")])([input([id3("customFile"), type_4(InputFile.value), css("custom-file-input"), onFileUpload(unfoldableArray)(Choose.create)]), label([css("custom-file-label"), $$for2("customFil")])([text("Choose file")]), input([type_4(InputSubmit.value), onClick($$const(Send.value))])]);
      }();
      handleAction = function(dictMonadState) {
        var modify_8 = modify_2(dictMonadState);
        var Monad0 = dictMonadState.Monad0();
        var bind21 = bind(Monad0.Bind1());
        var get7 = get(dictMonadState);
        var for_4 = for_(Monad0.Applicative0())(foldableMaybe);
        return function(dictMonadStore) {
          var getStore3 = getStore(dictMonadStore);
          return function(dictMonadAff) {
            var makeRequest3 = makeRequest(dictMonadAff);
            var MonadEffect0 = dictMonadAff.MonadEffect0();
            var Monad01 = MonadEffect0.Monad0();
            var bind111 = bind(Monad01.Bind1());
            var map45 = map(Monad01.Applicative0().Apply0().Functor0());
            var liftEffect11 = liftEffect(MonadEffect0);
            return function(dictLogMessages) {
              var logDebug2 = logDebug(dictLogMessages);
              return function(dictNow) {
                var logDebug1 = logDebug2(dictNow);
                return function(v) {
                  if (v instanceof Choose && v.value0.length === 0) {
                    return modify_8(function(s) {
                      var $51 = {};
                      for (var $52 in s) {
                        if ({}.hasOwnProperty.call(s, $52)) {
                          $51[$52] = s[$52];
                        }
                        ;
                      }
                      ;
                      $51.files = Nothing.value;
                      return $51;
                    });
                  }
                  ;
                  if (v instanceof Choose) {
                    return modify_8(function(s) {
                      var $55 = {};
                      for (var $56 in s) {
                        if ({}.hasOwnProperty.call(s, $56)) {
                          $55[$56] = s[$56];
                        }
                        ;
                      }
                      ;
                      $55.files = new Just(v.value0);
                      return $55;
                    });
                  }
                  ;
                  if (v instanceof Send) {
                    return bind21(getStore3)(function(v1) {
                      return bind21(get7)(function(v2) {
                        return for_4(v2.files)(function(files2) {
                          return bind21(makeRequest3(v1.config.url)(Nothing.value)(mkFileApi)(runFn3(sendFiles)(v2.bucket)(files2)))(function(res) {
                            if (res instanceof Right) {
                              return bind111(map45(show4)(liftEffect11(getDataFromResponse(res.value0))))(logDebug1);
                            }
                            ;
                            if (res instanceof Left) {
                              return logDebug1(show14(res.value0));
                            }
                            ;
                            throw new Error("Failed pattern match at App.Page.FileUploader (line 41, column 5 - line 43, column 34): " + [res.constructor.name]);
                          });
                        });
                      });
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at App.Page.FileUploader (line 34, column 1 - line 34, column 65): " + [v.constructor.name]);
                };
              };
            };
          };
        };
      };
      handleAction1 = /* @__PURE__ */ handleAction(monadStateHalogenM);
      component = function(dictMonadStore) {
        var handleAction2 = handleAction1(monadStoreHalogenM(dictMonadStore));
        return function(dictMonadAff) {
          var handleAction3 = handleAction2(monadAffHalogenM(dictMonadAff));
          return function(dictLogMessages) {
            var handleAction4 = handleAction3(logMessagesHalogenM(dictLogMessages));
            return function(dictNow) {
              return mkComponent({
                initialState: $$const({
                  files: Nothing.value,
                  bucket: "file"
                }),
                render: $$const(render),
                "eval": mkEval({
                  handleAction: handleAction4(nowHalogenM(dictNow)),
                  handleQuery: defaultEval.handleQuery,
                  receive: defaultEval.receive,
                  initialize: defaultEval.initialize,
                  finalize: defaultEval.finalize
                })
              });
            };
          };
        };
      };
    }
  });

  // output/Halogen.HTML/index.js
  var componentSlot2, slot_, slot;
  var init_Halogen5 = __esm({
    "output/Halogen.HTML/index.js"() {
      init_Data2();
      init_Data4();
      init_Data19();
      init_Halogen3();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML2();
      init_Halogen_VDom5();
      init_Unsafe();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML2();
      componentSlot2 = /* @__PURE__ */ componentSlot();
      slot_ = function() {
        return function(dictIsSymbol) {
          var componentSlot1 = componentSlot2(dictIsSymbol);
          return function(dictOrd) {
            var componentSlot22 = componentSlot1(dictOrd);
            return function(label5) {
              return function(p2) {
                return function(component7) {
                  return function(input3) {
                    return widget(new ComponentSlot(componentSlot22(label5)(p2)(component7)(input3)($$const(Nothing.value))));
                  };
                };
              };
            };
          };
        };
      };
      slot = function() {
        return function(dictIsSymbol) {
          var componentSlot1 = componentSlot2(dictIsSymbol);
          return function(dictOrd) {
            var componentSlot22 = componentSlot1(dictOrd);
            return function(label5) {
              return function(p2) {
                return function(component7) {
                  return function(input3) {
                    return function(outputQuery) {
                      return widget(new ComponentSlot(componentSlot22(label5)(p2)(component7)(input3)(function($11) {
                        return Just.create(outputQuery($11));
                      })));
                    };
                  };
                };
              };
            };
          };
        };
      };
    }
  });

  // output/Web.Socket/foreign.js
  var createWebSocket, readyStateImpl, getObject;
  var init_foreign71 = __esm({
    "output/Web.Socket/foreign.js"() {
      createWebSocket = function create2(url) {
        return function(protocols) {
          let ws = new WebSocket(url, protocols);
          ws.binaryType = "blob";
          return ws;
        };
      };
      readyStateImpl = function(ws) {
        return function() {
          return ws.readyState;
        };
      };
      getObject = function(ws) {
        return function(onErr, onOk) {
          ws.onmessage = function(event) {
            onOk(JSON.parse(event.data));
          };
          ws.onerror = function(err) {
            onErr(err);
          };
        };
      };
    }
  });

  // output/Web.Socket.ReadyState/index.js
  var Connecting, Open, Closing, Closed, toEnumReadyState, eqReadyState;
  var init_Web_Socket = __esm({
    "output/Web.Socket.ReadyState/index.js"() {
      init_Data41();
      init_Data19();
      init_Data11();
      Connecting = /* @__PURE__ */ function() {
        function Connecting2() {
        }
        ;
        Connecting2.value = new Connecting2();
        return Connecting2;
      }();
      Open = /* @__PURE__ */ function() {
        function Open2() {
        }
        ;
        Open2.value = new Open2();
        return Open2;
      }();
      Closing = /* @__PURE__ */ function() {
        function Closing2() {
        }
        ;
        Closing2.value = new Closing2();
        return Closing2;
      }();
      Closed = /* @__PURE__ */ function() {
        function Closed2() {
        }
        ;
        Closed2.value = new Closed2();
        return Closed2;
      }();
      toEnumReadyState = function(v) {
        if (v === 0) {
          return new Just(Connecting.value);
        }
        ;
        if (v === 1) {
          return new Just(Open.value);
        }
        ;
        if (v === 2) {
          return new Just(Closing.value);
        }
        ;
        if (v === 3) {
          return new Just(Closed.value);
        }
        ;
        return Nothing.value;
      };
      eqReadyState = {
        eq: function(x) {
          return function(y) {
            if (x instanceof Connecting && y instanceof Connecting) {
              return true;
            }
            ;
            if (x instanceof Open && y instanceof Open) {
              return true;
            }
            ;
            if (x instanceof Closing && y instanceof Closing) {
              return true;
            }
            ;
            if (x instanceof Closed && y instanceof Closed) {
              return true;
            }
            ;
            return false;
          };
        }
      };
    }
  });

  // output/Web.Socket/index.js
  var fromJust9, readyState;
  var init_Web = __esm({
    "output/Web.Socket/index.js"() {
      init_foreign71();
      init_Data19();
      init_Web_Socket();
      init_foreign71();
      fromJust9 = /* @__PURE__ */ fromJust();
      readyState = function(ws) {
        return function __do4() {
          var rs = readyStateImpl(ws)();
          return fromJust9(toEnumReadyState(rs));
        };
      };
    }
  });

  // output/App.Page.Home/index.js
  var $runtime_lazy11, unwrap9, discard2, discard1, bind6, liftEffect4, eq3, pure8, unlessM2, forever2, when2, $$try5, liftAff2, logError2, show5, bind22, $$void6, bindFlipped5, modify_3, mempty4, pure12, identity16, slot_2, Initialize2, Recieve, getMsg, getMsg1, systemInfo, component2;
  var init_App_Page2 = __esm({
    "output/App.Page.Home/index.js"() {
      init_App_Api();
      init_App_Capability2();
      init_App_Capability();
      init_App_Component_HTML();
      init_Control4();
      init_Control5();
      init_Control2();
      init_Control6();
      init_Control_Monad_Error();
      init_Control_Monad_Rec();
      init_Control_Monad_State();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data24();
      init_Data15();
      init_Data16();
      init_Data3();
      init_Effect6();
      init_Effect_Aff();
      init_Effect_Aff2();
      init_Effect4();
      init_Effect3();
      init_Halogen3();
      init_Halogen5();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_Query2();
      init_Halogen_Store2();
      init_Halogen();
      init_Type();
      init_Web();
      init_Web_Socket();
      $runtime_lazy11 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      unwrap9 = /* @__PURE__ */ unwrap();
      discard2 = /* @__PURE__ */ discard(discardUnit);
      discard1 = /* @__PURE__ */ discard2(bindAff);
      bind6 = /* @__PURE__ */ bind(bindAff);
      liftEffect4 = /* @__PURE__ */ liftEffect(monadEffectAff);
      eq3 = /* @__PURE__ */ eq(eqReadyState);
      pure8 = /* @__PURE__ */ pure(applicativeAff);
      unlessM2 = /* @__PURE__ */ unlessM(monadAff);
      forever2 = /* @__PURE__ */ forever(monadRecAff);
      when2 = /* @__PURE__ */ when(applicativeAff);
      $$try5 = /* @__PURE__ */ $$try(monadErrorAff);
      liftAff2 = /* @__PURE__ */ liftAff(monadAffAff);
      logError2 = /* @__PURE__ */ logError(logMessagesEffect)(nowEffect);
      show5 = /* @__PURE__ */ show(showError);
      bind22 = /* @__PURE__ */ bind(bindHalogenM);
      $$void6 = /* @__PURE__ */ $$void(functorHalogenM);
      bindFlipped5 = /* @__PURE__ */ bindFlipped(bindHalogenM);
      modify_3 = /* @__PURE__ */ modify_2(monadStateHalogenM);
      mempty4 = /* @__PURE__ */ mempty(monoidString);
      pure12 = /* @__PURE__ */ pure(applicativeMaybe);
      identity16 = /* @__PURE__ */ identity(categoryFn);
      slot_2 = /* @__PURE__ */ slot_()({
        reflectSymbol: function() {
          return "systemInfo";
        }
      })(ordInt);
      Initialize2 = /* @__PURE__ */ function() {
        function Initialize6() {
        }
        ;
        Initialize6.value = new Initialize6();
        return Initialize6;
      }();
      Recieve = /* @__PURE__ */ function() {
        function Recieve2(value0) {
          this.value0 = value0;
        }
        ;
        Recieve2.create = function(value0) {
          return new Recieve2(value0);
        };
        return Recieve2;
      }();
      getMsg = function(dictBind) {
        var bind32 = bind(dictBind);
        var discard23 = discard2(dictBind);
        var void1 = $$void(dictBind.Apply0().Functor0());
        return function(dictMonadEffect) {
          return function(dictMonadAff) {
            var MonadEffect0 = dictMonadAff.MonadEffect0();
            var liftEffect12 = liftEffect(MonadEffect0);
            var liftAff1 = liftAff(dictMonadAff);
            var pure25 = pure(MonadEffect0.Monad0().Applicative0());
            return function(dictMonadRec) {
              return function(url) {
                return function(go2) {
                  return bind32(liftEffect12(create))(function(v) {
                    return bind32(liftEffect12(createWebSocket(unwrap9(url) + "/api/public/server/info", [])))(function(ws) {
                      var $lazy_isOpen = $runtime_lazy11("isOpen", "App.Page.Home", function() {
                        return discard1(delay(1e3))(function() {
                          return bind6(liftEffect4(readyState(ws)))(function(st) {
                            var $65 = eq3(st)(Open.value);
                            if ($65) {
                              return pure8(true);
                            }
                            ;
                            return $lazy_isOpen(80);
                          });
                        });
                      });
                      var isOpen = $lazy_isOpen(76);
                      return discard23(liftAff1(unlessM2(isOpen)(pure8(unit))))(function() {
                        return discard23(void1(liftAff1(forkAff(forever2(discard1(delay(1e3))(function() {
                          return bind6(liftEffect4(readyState(ws)))(function(st) {
                            return when2(eq3(st)(Open.value))(bind6($$try5(liftAff2(fromEffectFnAff(getObject(ws)))))(function(res) {
                              if (res instanceof Right) {
                                return liftEffect4(function __do4() {
                                  var msg = getDataFromResponse(res.value0)();
                                  return notify(v.listener)(go2(msg))();
                                });
                              }
                              ;
                              if (res instanceof Left) {
                                return liftEffect4(logError2(show5(res.value0)));
                              }
                              ;
                              throw new Error("Failed pattern match at App.Page.Home (line 87, column 6 - line 92, column 50): " + [res.constructor.name]);
                            }));
                          });
                        }))))))(function() {
                          return pure25(v.emitter);
                        });
                      });
                    });
                  });
                };
              };
            };
          };
        };
      };
      getMsg1 = /* @__PURE__ */ getMsg(bindHalogenM);
      systemInfo = function(dictMonadStore) {
        var getStore3 = getStore(monadStoreHalogenM(dictMonadStore));
        var getMsg2 = getMsg1(monadEffectHalogenM(dictMonadStore.MonadEffect0()));
        return function(dictMonadAff) {
          var getMsg3 = getMsg2(monadAffHalogenM(dictMonadAff))(monadRecHalogenM);
          var handleAction2 = function(v) {
            if (v instanceof Initialize2) {
              return bind22(getStore3)(function(v1) {
                return $$void6(bindFlipped5(subscribe2)(getMsg3(v1.config.wsUrl)(Recieve.create)));
              });
            }
            ;
            if (v instanceof Recieve) {
              return modify_3(function(s) {
                var $75 = {};
                for (var $76 in s) {
                  if ({}.hasOwnProperty.call(s, $76)) {
                    $75[$76] = s[$76];
                  }
                  ;
                }
                ;
                $75.msg = v.value0;
                return $75;
              });
            }
            ;
            throw new Error("Failed pattern match at App.Page.Home (line 66, column 5 - line 68, column 50): " + [v.constructor.name]);
          };
          return mkComponent({
            initialState: $$const({
              msg: mempty4
            }),
            render: function(v) {
              return div3([css("child")])([text("Welcome to the home page! system info is: " + v.msg)]);
            },
            "eval": mkEval({
              handleAction: handleAction2,
              handleQuery: defaultEval.handleQuery,
              receive: defaultEval.receive,
              initialize: pure12(Initialize2.value),
              finalize: defaultEval.finalize
            })
          });
        };
      };
      component2 = function(dictMonadStore) {
        var systemInfo1 = systemInfo(dictMonadStore);
        return function(dictMonadAff) {
          return mkComponent({
            initialState: identity16,
            render: $$const(div3([css("center")])([slot_2($$Proxy.value)(0)(systemInfo1(dictMonadAff))({
              msg: mempty4
            })])),
            "eval": mkEval(defaultEval)
          });
        };
      };
    }
  });

  // output/Effect.Console/foreign.js
  var log3, warn;
  var init_foreign72 = __esm({
    "output/Effect.Console/foreign.js"() {
      log3 = function(s) {
        return function() {
          console.log(s);
        };
      };
      warn = function(s) {
        return function() {
          console.warn(s);
        };
      };
    }
  });

  // output/Effect.Console/index.js
  var logShow;
  var init_Effect8 = __esm({
    "output/Effect.Console/index.js"() {
      init_foreign72();
      init_Data16();
      init_foreign72();
      logShow = function(dictShow) {
        var show9 = show(dictShow);
        return function(a2) {
          return log3(show9(a2));
        };
      };
    }
  });

  // output/Effect.Class.Console/index.js
  var logShow2;
  var init_Effect_Class = __esm({
    "output/Effect.Class.Console/index.js"() {
      init_Effect4();
      init_Effect8();
      logShow2 = function(dictMonadEffect) {
        var liftEffect11 = liftEffect(dictMonadEffect);
        return function(dictShow) {
          var $49 = logShow(dictShow);
          return function($50) {
            return liftEffect11($49($50));
          };
        };
      };
    }
  });

  // output/Web.HTML/foreign.js
  var windowImpl;
  var init_foreign73 = __esm({
    "output/Web.HTML/foreign.js"() {
      windowImpl = function() {
        return window;
      };
    }
  });

  // output/Web.HTML.HTMLAnchorElement/foreign.js
  var init_foreign74 = __esm({
    "output/Web.HTML.HTMLAnchorElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLAnchorElement/index.js
  var init_Web_HTML5 = __esm({
    "output/Web.HTML.HTMLAnchorElement/index.js"() {
      init_foreign74();
      init_Unsafe();
      init_Web_Internal();
      init_foreign74();
    }
  });

  // output/Web.HTML.HTMLAreaElement/foreign.js
  var init_foreign75 = __esm({
    "output/Web.HTML.HTMLAreaElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLAreaElement/index.js
  var init_Web_HTML6 = __esm({
    "output/Web.HTML.HTMLAreaElement/index.js"() {
      init_foreign75();
      init_Unsafe();
      init_Web_Internal();
      init_foreign75();
    }
  });

  // output/Web.HTML.HTMLAudioElement/foreign.js
  var init_foreign76 = __esm({
    "output/Web.HTML.HTMLAudioElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLAudioElement/index.js
  var init_Web_HTML7 = __esm({
    "output/Web.HTML.HTMLAudioElement/index.js"() {
      init_foreign76();
      init_Unsafe();
      init_Web_Internal();
      init_foreign76();
    }
  });

  // output/Web.HTML.HTMLBRElement/index.js
  var init_Web_HTML8 = __esm({
    "output/Web.HTML.HTMLBRElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLBaseElement/foreign.js
  var init_foreign77 = __esm({
    "output/Web.HTML.HTMLBaseElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLBaseElement/index.js
  var init_Web_HTML9 = __esm({
    "output/Web.HTML.HTMLBaseElement/index.js"() {
      init_foreign77();
      init_Unsafe();
      init_Web_Internal();
      init_foreign77();
    }
  });

  // output/Web.HTML.HTMLBodyElement/index.js
  var init_Web_HTML10 = __esm({
    "output/Web.HTML.HTMLBodyElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLButtonElement/foreign.js
  var init_foreign78 = __esm({
    "output/Web.HTML.HTMLButtonElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLButtonElement/index.js
  var init_Web_HTML11 = __esm({
    "output/Web.HTML.HTMLButtonElement/index.js"() {
      init_foreign78();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign78();
    }
  });

  // output/Web.HTML.HTMLCanvasElement/foreign.js
  var init_foreign79 = __esm({
    "output/Web.HTML.HTMLCanvasElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLCanvasElement/index.js
  var init_Web_HTML12 = __esm({
    "output/Web.HTML.HTMLCanvasElement/index.js"() {
      init_foreign79();
      init_Unsafe();
      init_Web_Internal();
      init_foreign79();
    }
  });

  // output/Web.HTML.HTMLDListElement/index.js
  var init_Web_HTML13 = __esm({
    "output/Web.HTML.HTMLDListElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLDataElement/foreign.js
  var init_foreign80 = __esm({
    "output/Web.HTML.HTMLDataElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLDataElement/index.js
  var init_Web_HTML14 = __esm({
    "output/Web.HTML.HTMLDataElement/index.js"() {
      init_foreign80();
      init_Unsafe();
      init_Web_Internal();
      init_foreign80();
    }
  });

  // output/Web.HTML.HTMLDataListElement/foreign.js
  var init_foreign81 = __esm({
    "output/Web.HTML.HTMLDataListElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLDataListElement/index.js
  var init_Web_HTML15 = __esm({
    "output/Web.HTML.HTMLDataListElement/index.js"() {
      init_foreign81();
      init_Unsafe();
      init_Web_Internal();
      init_foreign81();
    }
  });

  // output/Web.HTML.HTMLDivElement/index.js
  var init_Web_HTML16 = __esm({
    "output/Web.HTML.HTMLDivElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLDocument/foreign.js
  function _readyState(doc) {
    return doc.readyState;
  }
  var init_foreign82 = __esm({
    "output/Web.HTML.HTMLDocument/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLDocument.ReadyState/index.js
  var Loading, Interactive, Complete, parse3;
  var init_Web_HTML_HTMLDocument = __esm({
    "output/Web.HTML.HTMLDocument.ReadyState/index.js"() {
      init_Data19();
      init_Data11();
      Loading = /* @__PURE__ */ function() {
        function Loading2() {
        }
        ;
        Loading2.value = new Loading2();
        return Loading2;
      }();
      Interactive = /* @__PURE__ */ function() {
        function Interactive2() {
        }
        ;
        Interactive2.value = new Interactive2();
        return Interactive2;
      }();
      Complete = /* @__PURE__ */ function() {
        function Complete2() {
        }
        ;
        Complete2.value = new Complete2();
        return Complete2;
      }();
      parse3 = function(v) {
        if (v === "loading") {
          return new Just(Loading.value);
        }
        ;
        if (v === "interactive") {
          return new Just(Interactive.value);
        }
        ;
        if (v === "complete") {
          return new Just(Complete.value);
        }
        ;
        return Nothing.value;
      };
    }
  });

  // output/Web.HTML.HTMLDocument.VisibilityState/index.js
  var init_Web_HTML_HTMLDocument2 = __esm({
    "output/Web.HTML.HTMLDocument.VisibilityState/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLDocument/index.js
  var map29, toParentNode, toDocument, readyState2;
  var init_Web_HTML17 = __esm({
    "output/Web.HTML.HTMLDocument/index.js"() {
      init_foreign82();
      init_Data4();
      init_Data19();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_HTML_HTMLDocument();
      init_Web_HTML_HTMLDocument2();
      init_Web_Internal();
      map29 = /* @__PURE__ */ map(functorEffect);
      toParentNode = unsafeCoerce2;
      toDocument = unsafeCoerce2;
      readyState2 = function(doc) {
        return map29(function() {
          var $4 = fromMaybe(Loading.value);
          return function($5) {
            return $4(parse3($5));
          };
        }())(function() {
          return _readyState(doc);
        });
      };
    }
  });

  // output/Web.HTML.HTMLEmbedElement/foreign.js
  var init_foreign83 = __esm({
    "output/Web.HTML.HTMLEmbedElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLEmbedElement/index.js
  var init_Web_HTML18 = __esm({
    "output/Web.HTML.HTMLEmbedElement/index.js"() {
      init_foreign83();
      init_Unsafe();
      init_Web_Internal();
      init_foreign83();
    }
  });

  // output/Web.HTML.HTMLFieldSetElement/foreign.js
  var init_foreign84 = __esm({
    "output/Web.HTML.HTMLFieldSetElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLFieldSetElement/index.js
  var init_Web_HTML19 = __esm({
    "output/Web.HTML.HTMLFieldSetElement/index.js"() {
      init_foreign84();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign84();
    }
  });

  // output/Web.HTML.HTMLFormElement/foreign.js
  var init_foreign85 = __esm({
    "output/Web.HTML.HTMLFormElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLFormElement/index.js
  var init_Web_HTML20 = __esm({
    "output/Web.HTML.HTMLFormElement/index.js"() {
      init_foreign85();
      init_Unsafe();
      init_Web_Internal();
      init_foreign85();
    }
  });

  // output/Web.HTML.HTMLHRElement/index.js
  var init_Web_HTML21 = __esm({
    "output/Web.HTML.HTMLHRElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLHeadElement/index.js
  var init_Web_HTML22 = __esm({
    "output/Web.HTML.HTMLHeadElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLHeadingElement/index.js
  var init_Web_HTML23 = __esm({
    "output/Web.HTML.HTMLHeadingElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLIFrameElement/foreign.js
  var init_foreign86 = __esm({
    "output/Web.HTML.HTMLIFrameElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLIFrameElement/index.js
  var init_Web_HTML24 = __esm({
    "output/Web.HTML.HTMLIFrameElement/index.js"() {
      init_foreign86();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign86();
    }
  });

  // output/Web.HTML.HTMLImageElement/foreign.js
  var init_foreign87 = __esm({
    "output/Web.HTML.HTMLImageElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLImageElement.CORSMode/index.js
  var init_Web_HTML_HTMLImageElement = __esm({
    "output/Web.HTML.HTMLImageElement.CORSMode/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLImageElement.DecodingHint/index.js
  var init_Web_HTML_HTMLImageElement2 = __esm({
    "output/Web.HTML.HTMLImageElement.DecodingHint/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLImageElement.Laziness/index.js
  var init_Web_HTML_HTMLImageElement3 = __esm({
    "output/Web.HTML.HTMLImageElement.Laziness/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLImageElement/index.js
  var init_Web_HTML25 = __esm({
    "output/Web.HTML.HTMLImageElement/index.js"() {
      init_foreign87();
      init_Control5();
      init_Data4();
      init_Data19();
      init_Data52();
      init_Effect();
      init_Effect7();
      init_Unsafe();
      init_Web_HTML_HTMLImageElement();
      init_Web_HTML_HTMLImageElement2();
      init_Web_HTML_HTMLImageElement3();
      init_Web_Internal();
      init_foreign87();
    }
  });

  // output/Web.HTML.HTMLKeygenElement/foreign.js
  var init_foreign88 = __esm({
    "output/Web.HTML.HTMLKeygenElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLKeygenElement/index.js
  var init_Web_HTML26 = __esm({
    "output/Web.HTML.HTMLKeygenElement/index.js"() {
      init_foreign88();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign88();
    }
  });

  // output/Web.HTML.HTMLLIElement/foreign.js
  var init_foreign89 = __esm({
    "output/Web.HTML.HTMLLIElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLLIElement/index.js
  var init_Web_HTML27 = __esm({
    "output/Web.HTML.HTMLLIElement/index.js"() {
      init_foreign89();
      init_Unsafe();
      init_Web_Internal();
      init_foreign89();
    }
  });

  // output/Web.HTML.HTMLLabelElement/foreign.js
  var init_foreign90 = __esm({
    "output/Web.HTML.HTMLLabelElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLLabelElement/index.js
  var init_Web_HTML28 = __esm({
    "output/Web.HTML.HTMLLabelElement/index.js"() {
      init_foreign90();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign90();
    }
  });

  // output/Web.HTML.HTMLLegendElement/foreign.js
  var init_foreign91 = __esm({
    "output/Web.HTML.HTMLLegendElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLLegendElement/index.js
  var init_Web_HTML29 = __esm({
    "output/Web.HTML.HTMLLegendElement/index.js"() {
      init_foreign91();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLLinkElement/foreign.js
  var init_foreign92 = __esm({
    "output/Web.HTML.HTMLLinkElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLLinkElement/index.js
  var init_Web_HTML30 = __esm({
    "output/Web.HTML.HTMLLinkElement/index.js"() {
      init_foreign92();
      init_Unsafe();
      init_Web_Internal();
      init_foreign92();
    }
  });

  // output/Web.HTML.HTMLMapElement/foreign.js
  var init_foreign93 = __esm({
    "output/Web.HTML.HTMLMapElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLMapElement/index.js
  var init_Web_HTML31 = __esm({
    "output/Web.HTML.HTMLMapElement/index.js"() {
      init_foreign93();
      init_Unsafe();
      init_Web_Internal();
      init_foreign93();
    }
  });

  // output/Web.HTML.HTMLMediaElement/foreign.js
  var init_foreign94 = __esm({
    "output/Web.HTML.HTMLMediaElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLMediaElement.CanPlayType/index.js
  var init_Web_HTML_HTMLMediaElement = __esm({
    "output/Web.HTML.HTMLMediaElement.CanPlayType/index.js"() {
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLMediaElement.NetworkState/index.js
  var init_Web_HTML_HTMLMediaElement2 = __esm({
    "output/Web.HTML.HTMLMediaElement.NetworkState/index.js"() {
      init_Data41();
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLMediaElement.ReadyState/index.js
  var init_Web_HTML_HTMLMediaElement3 = __esm({
    "output/Web.HTML.HTMLMediaElement.ReadyState/index.js"() {
      init_Data41();
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLMediaElement/index.js
  var init_Web_HTML32 = __esm({
    "output/Web.HTML.HTMLMediaElement/index.js"() {
      init_foreign94();
      init_Data41();
      init_Data4();
      init_Data19();
      init_Effect();
      init_Unsafe();
      init_Web_HTML_HTMLMediaElement();
      init_Web_HTML_HTMLMediaElement2();
      init_Web_HTML_HTMLMediaElement3();
      init_Web_Internal();
      init_foreign94();
    }
  });

  // output/Web.HTML.HTMLMetaElement/foreign.js
  var init_foreign95 = __esm({
    "output/Web.HTML.HTMLMetaElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLMetaElement/index.js
  var init_Web_HTML33 = __esm({
    "output/Web.HTML.HTMLMetaElement/index.js"() {
      init_foreign95();
      init_Unsafe();
      init_Web_Internal();
      init_foreign95();
    }
  });

  // output/Web.HTML.HTMLMeterElement/foreign.js
  var init_foreign96 = __esm({
    "output/Web.HTML.HTMLMeterElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLMeterElement/index.js
  var init_Web_HTML34 = __esm({
    "output/Web.HTML.HTMLMeterElement/index.js"() {
      init_foreign96();
      init_Unsafe();
      init_Web_Internal();
      init_foreign96();
    }
  });

  // output/Web.HTML.HTMLModElement/foreign.js
  var init_foreign97 = __esm({
    "output/Web.HTML.HTMLModElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLModElement/index.js
  var init_Web_HTML35 = __esm({
    "output/Web.HTML.HTMLModElement/index.js"() {
      init_foreign97();
      init_Unsafe();
      init_Web_Internal();
      init_foreign97();
    }
  });

  // output/Web.HTML.HTMLOListElement/foreign.js
  var init_foreign98 = __esm({
    "output/Web.HTML.HTMLOListElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLOListElement/index.js
  var init_Web_HTML36 = __esm({
    "output/Web.HTML.HTMLOListElement/index.js"() {
      init_foreign98();
      init_Unsafe();
      init_Web_Internal();
      init_foreign98();
    }
  });

  // output/Web.HTML.HTMLObjectElement/foreign.js
  var init_foreign99 = __esm({
    "output/Web.HTML.HTMLObjectElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLObjectElement/index.js
  var init_Web_HTML37 = __esm({
    "output/Web.HTML.HTMLObjectElement/index.js"() {
      init_foreign99();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign99();
    }
  });

  // output/Web.HTML.HTMLOptGroupElement/foreign.js
  var init_foreign100 = __esm({
    "output/Web.HTML.HTMLOptGroupElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLOptGroupElement/index.js
  var init_Web_HTML38 = __esm({
    "output/Web.HTML.HTMLOptGroupElement/index.js"() {
      init_foreign100();
      init_Unsafe();
      init_Web_Internal();
      init_foreign100();
    }
  });

  // output/Web.HTML.HTMLOptionElement/foreign.js
  var init_foreign101 = __esm({
    "output/Web.HTML.HTMLOptionElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLOptionElement/index.js
  var init_Web_HTML39 = __esm({
    "output/Web.HTML.HTMLOptionElement/index.js"() {
      init_foreign101();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign101();
    }
  });

  // output/Web.HTML.HTMLOutputElement/foreign.js
  var init_foreign102 = __esm({
    "output/Web.HTML.HTMLOutputElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLOutputElement/index.js
  var init_Web_HTML40 = __esm({
    "output/Web.HTML.HTMLOutputElement/index.js"() {
      init_foreign102();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign102();
    }
  });

  // output/Web.HTML.HTMLParagraphElement/index.js
  var init_Web_HTML41 = __esm({
    "output/Web.HTML.HTMLParagraphElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLParamElement/foreign.js
  var init_foreign103 = __esm({
    "output/Web.HTML.HTMLParamElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLParamElement/index.js
  var init_Web_HTML42 = __esm({
    "output/Web.HTML.HTMLParamElement/index.js"() {
      init_foreign103();
      init_Unsafe();
      init_Web_Internal();
      init_foreign103();
    }
  });

  // output/Web.HTML.HTMLPreElement/index.js
  var init_Web_HTML43 = __esm({
    "output/Web.HTML.HTMLPreElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLProgressElement/foreign.js
  var init_foreign104 = __esm({
    "output/Web.HTML.HTMLProgressElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLProgressElement/index.js
  var init_Web_HTML44 = __esm({
    "output/Web.HTML.HTMLProgressElement/index.js"() {
      init_foreign104();
      init_Unsafe();
      init_Web_Internal();
      init_foreign104();
    }
  });

  // output/Web.HTML.HTMLQuoteElement/foreign.js
  var init_foreign105 = __esm({
    "output/Web.HTML.HTMLQuoteElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLQuoteElement/index.js
  var init_Web_HTML45 = __esm({
    "output/Web.HTML.HTMLQuoteElement/index.js"() {
      init_foreign105();
      init_Unsafe();
      init_Web_Internal();
      init_foreign105();
    }
  });

  // output/Web.HTML.HTMLScriptElement/foreign.js
  var init_foreign106 = __esm({
    "output/Web.HTML.HTMLScriptElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLScriptElement/index.js
  var init_Web_HTML46 = __esm({
    "output/Web.HTML.HTMLScriptElement/index.js"() {
      init_foreign106();
      init_Unsafe();
      init_Web_Internal();
      init_foreign106();
    }
  });

  // output/Web.HTML.HTMLSelectElement/foreign.js
  var init_foreign107 = __esm({
    "output/Web.HTML.HTMLSelectElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLSelectElement/index.js
  var init_Web_HTML47 = __esm({
    "output/Web.HTML.HTMLSelectElement/index.js"() {
      init_foreign107();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign107();
    }
  });

  // output/Web.HTML.HTMLSourceElement/foreign.js
  var init_foreign108 = __esm({
    "output/Web.HTML.HTMLSourceElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLSourceElement/index.js
  var init_Web_HTML48 = __esm({
    "output/Web.HTML.HTMLSourceElement/index.js"() {
      init_foreign108();
      init_Unsafe();
      init_Web_Internal();
      init_foreign108();
    }
  });

  // output/Web.HTML.HTMLSpanElement/index.js
  var init_Web_HTML49 = __esm({
    "output/Web.HTML.HTMLSpanElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLStyleElement/foreign.js
  var init_foreign109 = __esm({
    "output/Web.HTML.HTMLStyleElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLStyleElement/index.js
  var init_Web_HTML50 = __esm({
    "output/Web.HTML.HTMLStyleElement/index.js"() {
      init_foreign109();
      init_Unsafe();
      init_Web_Internal();
      init_foreign109();
    }
  });

  // output/Web.HTML.HTMLTableCaptionElement/index.js
  var init_Web_HTML51 = __esm({
    "output/Web.HTML.HTMLTableCaptionElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLTableCellElement/foreign.js
  var init_foreign110 = __esm({
    "output/Web.HTML.HTMLTableCellElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableCellElement/index.js
  var init_Web_HTML52 = __esm({
    "output/Web.HTML.HTMLTableCellElement/index.js"() {
      init_foreign110();
      init_Unsafe();
      init_Web_Internal();
      init_foreign110();
    }
  });

  // output/Web.HTML.HTMLTableColElement/foreign.js
  var init_foreign111 = __esm({
    "output/Web.HTML.HTMLTableColElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableColElement/index.js
  var init_Web_HTML53 = __esm({
    "output/Web.HTML.HTMLTableColElement/index.js"() {
      init_foreign111();
      init_Unsafe();
      init_Web_Internal();
      init_foreign111();
    }
  });

  // output/Web.HTML.HTMLTableDataCellElement/index.js
  var init_Web_HTML54 = __esm({
    "output/Web.HTML.HTMLTableDataCellElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLTableElement/foreign.js
  var init_foreign112 = __esm({
    "output/Web.HTML.HTMLTableElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableElement/index.js
  var init_Web_HTML55 = __esm({
    "output/Web.HTML.HTMLTableElement/index.js"() {
      init_foreign112();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign112();
    }
  });

  // output/Web.HTML.HTMLTableHeaderCellElement/foreign.js
  var init_foreign113 = __esm({
    "output/Web.HTML.HTMLTableHeaderCellElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableHeaderCellElement/index.js
  var init_Web_HTML56 = __esm({
    "output/Web.HTML.HTMLTableHeaderCellElement/index.js"() {
      init_foreign113();
      init_Unsafe();
      init_Web_Internal();
      init_foreign113();
    }
  });

  // output/Web.HTML.HTMLTableRowElement/foreign.js
  var init_foreign114 = __esm({
    "output/Web.HTML.HTMLTableRowElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableRowElement/index.js
  var init_Web_HTML57 = __esm({
    "output/Web.HTML.HTMLTableRowElement/index.js"() {
      init_foreign114();
      init_Unsafe();
      init_Web_Internal();
      init_foreign114();
    }
  });

  // output/Web.HTML.HTMLTableSectionElement/foreign.js
  var init_foreign115 = __esm({
    "output/Web.HTML.HTMLTableSectionElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTableSectionElement/index.js
  var init_Web_HTML58 = __esm({
    "output/Web.HTML.HTMLTableSectionElement/index.js"() {
      init_foreign115();
      init_Unsafe();
      init_Web_Internal();
      init_foreign115();
    }
  });

  // output/Web.HTML.HTMLTemplateElement/foreign.js
  var init_foreign116 = __esm({
    "output/Web.HTML.HTMLTemplateElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTemplateElement/index.js
  var init_Web_HTML59 = __esm({
    "output/Web.HTML.HTMLTemplateElement/index.js"() {
      init_foreign116();
      init_Unsafe();
      init_Web_Internal();
      init_foreign116();
    }
  });

  // output/Web.HTML.HTMLTextAreaElement/foreign.js
  var init_foreign117 = __esm({
    "output/Web.HTML.HTMLTextAreaElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTextAreaElement/index.js
  var init_Web_HTML60 = __esm({
    "output/Web.HTML.HTMLTextAreaElement/index.js"() {
      init_foreign117();
      init_Data4();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_HTML2();
      init_Web_Internal();
      init_foreign117();
    }
  });

  // output/Web.HTML.HTMLTimeElement/foreign.js
  var init_foreign118 = __esm({
    "output/Web.HTML.HTMLTimeElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTimeElement/index.js
  var init_Web_HTML61 = __esm({
    "output/Web.HTML.HTMLTimeElement/index.js"() {
      init_foreign118();
      init_Unsafe();
      init_Web_Internal();
      init_foreign118();
    }
  });

  // output/Web.HTML.HTMLTitleElement/foreign.js
  var init_foreign119 = __esm({
    "output/Web.HTML.HTMLTitleElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTitleElement/index.js
  var init_Web_HTML62 = __esm({
    "output/Web.HTML.HTMLTitleElement/index.js"() {
      init_foreign119();
      init_Unsafe();
      init_Web_Internal();
      init_foreign119();
    }
  });

  // output/Web.HTML.HTMLTrackElement/foreign.js
  var init_foreign120 = __esm({
    "output/Web.HTML.HTMLTrackElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLTrackElement.ReadyState/index.js
  var init_Web_HTML_HTMLTrackElement = __esm({
    "output/Web.HTML.HTMLTrackElement.ReadyState/index.js"() {
      init_Data41();
      init_Data19();
      init_Data11();
    }
  });

  // output/Web.HTML.HTMLTrackElement/index.js
  var init_Web_HTML63 = __esm({
    "output/Web.HTML.HTMLTrackElement/index.js"() {
      init_foreign120();
      init_Data41();
      init_Data4();
      init_Data19();
      init_Effect();
      init_Unsafe();
      init_Web_HTML_HTMLTrackElement();
      init_Web_Internal();
      init_foreign120();
    }
  });

  // output/Web.HTML.HTMLUListElement/index.js
  var init_Web_HTML64 = __esm({
    "output/Web.HTML.HTMLUListElement/index.js"() {
      init_Unsafe();
      init_Web_Internal();
    }
  });

  // output/Web.HTML.HTMLVideoElement/foreign.js
  var init_foreign121 = __esm({
    "output/Web.HTML.HTMLVideoElement/foreign.js"() {
    }
  });

  // output/Web.HTML.HTMLVideoElement/index.js
  var init_Web_HTML65 = __esm({
    "output/Web.HTML.HTMLVideoElement/index.js"() {
      init_foreign121();
      init_Unsafe();
      init_Web_Internal();
      init_foreign121();
    }
  });

  // output/Web.HTML.History/foreign.js
  var init_foreign122 = __esm({
    "output/Web.HTML.History/foreign.js"() {
    }
  });

  // output/Web.HTML.History/index.js
  var init_Web_HTML66 = __esm({
    "output/Web.HTML.History/index.js"() {
      init_foreign122();
      init_Data15();
      init_foreign122();
    }
  });

  // output/Web.HTML.Location/foreign.js
  function hash3(location2) {
    return function() {
      return location2.hash;
    };
  }
  function setHash(hash4) {
    return function(location2) {
      return function() {
        location2.hash = hash4;
      };
    };
  }
  var init_foreign123 = __esm({
    "output/Web.HTML.Location/foreign.js"() {
    }
  });

  // output/Web.HTML.Location/index.js
  var init_Web_HTML67 = __esm({
    "output/Web.HTML.Location/index.js"() {
      init_foreign123();
      init_foreign123();
    }
  });

  // output/Web.HTML.Navigator/foreign.js
  var init_foreign124 = __esm({
    "output/Web.HTML.Navigator/foreign.js"() {
    }
  });

  // output/Web.HTML.Navigator/index.js
  var init_Web_HTML68 = __esm({
    "output/Web.HTML.Navigator/index.js"() {
      init_foreign124();
      init_foreign124();
    }
  });

  // output/Web.HTML.Window/foreign.js
  function document(window2) {
    return function() {
      return window2.document;
    };
  }
  function location(window2) {
    return function() {
      return window2.location;
    };
  }
  function localStorage(window2) {
    return function() {
      return window2.localStorage;
    };
  }
  var init_foreign125 = __esm({
    "output/Web.HTML.Window/foreign.js"() {
    }
  });

  // output/Web.HTML.Window/index.js
  var toEventTarget;
  var init_Web_HTML69 = __esm({
    "output/Web.HTML.Window/index.js"() {
      init_foreign125();
      init_Data4();
      init_Data52();
      init_Data15();
      init_Effect();
      init_Unsafe();
      init_Web_Internal();
      init_foreign125();
      toEventTarget = unsafeCoerce2;
    }
  });

  // output/Web.HTML/index.js
  var init_Web2 = __esm({
    "output/Web.HTML/index.js"() {
      init_foreign73();
      init_Web_HTML();
      init_Web_HTML5();
      init_Web_HTML6();
      init_Web_HTML7();
      init_Web_HTML8();
      init_Web_HTML9();
      init_Web_HTML10();
      init_Web_HTML11();
      init_Web_HTML12();
      init_Web_HTML13();
      init_Web_HTML14();
      init_Web_HTML15();
      init_Web_HTML16();
      init_Web_HTML17();
      init_Web_HTML4();
      init_Web_HTML18();
      init_Web_HTML19();
      init_Web_HTML20();
      init_Web_HTML21();
      init_Web_HTML22();
      init_Web_HTML23();
      init_Web_HTML24();
      init_Web_HTML25();
      init_Web_HTML3();
      init_Web_HTML26();
      init_Web_HTML27();
      init_Web_HTML28();
      init_Web_HTML29();
      init_Web_HTML30();
      init_Web_HTML31();
      init_Web_HTML32();
      init_Web_HTML33();
      init_Web_HTML34();
      init_Web_HTML35();
      init_Web_HTML36();
      init_Web_HTML37();
      init_Web_HTML38();
      init_Web_HTML39();
      init_Web_HTML40();
      init_Web_HTML41();
      init_Web_HTML42();
      init_Web_HTML43();
      init_Web_HTML44();
      init_Web_HTML45();
      init_Web_HTML46();
      init_Web_HTML47();
      init_Web_HTML48();
      init_Web_HTML49();
      init_Web_HTML50();
      init_Web_HTML51();
      init_Web_HTML52();
      init_Web_HTML53();
      init_Web_HTML54();
      init_Web_HTML55();
      init_Web_HTML56();
      init_Web_HTML57();
      init_Web_HTML58();
      init_Web_HTML59();
      init_Web_HTML60();
      init_Web_HTML61();
      init_Web_HTML62();
      init_Web_HTML63();
      init_Web_HTML64();
      init_Web_HTML65();
      init_Web_HTML66();
      init_Web_HTML67();
      init_Web_HTML68();
      init_Web_HTML69();
      init_foreign73();
    }
  });

  // output/Web.Storage.Storage/foreign.js
  function _getItem(key) {
    return function(storage) {
      return function() {
        return storage.getItem(key);
      };
    };
  }
  function setItem(key) {
    return function(value17) {
      return function(storage) {
        return function() {
          storage.setItem(key, value17);
        };
      };
    };
  }
  function removeItem(key) {
    return function(storage) {
      return function() {
        storage.removeItem(key);
      };
    };
  }
  var init_foreign126 = __esm({
    "output/Web.Storage.Storage/foreign.js"() {
    }
  });

  // output/Web.Storage.Storage/index.js
  var map30, getItem;
  var init_Web_Storage = __esm({
    "output/Web.Storage.Storage/index.js"() {
      init_foreign126();
      init_Data4();
      init_Data52();
      init_Effect();
      init_foreign126();
      map30 = /* @__PURE__ */ map(functorEffect);
      getItem = function(s) {
        var $5 = map30(toMaybe);
        var $6 = _getItem(s);
        return function($7) {
          return $5($6($7));
        };
      };
    }
  });

  // output/Store/index.js
  var unwrap10, map31, alt7, wrap3, Token, LoginUser, LogoutUser, writeToken, tokenKeyJWT, tokenKeyBasic, removeToken, reduce, readToken;
  var init_Store = __esm({
    "output/Store/index.js"() {
      init_App_Data2();
      init_Control7();
      init_Data20();
      init_Data4();
      init_Data19();
      init_Data24();
      init_Web2();
      init_Web_HTML69();
      init_Web_Storage();
      unwrap10 = /* @__PURE__ */ unwrap();
      map31 = /* @__PURE__ */ map(functorMaybe);
      alt7 = /* @__PURE__ */ alt(altMaybe);
      wrap3 = /* @__PURE__ */ wrap();
      Token = function(x) {
        return x;
      };
      LoginUser = /* @__PURE__ */ function() {
        function LoginUser2(value0) {
          this.value0 = value0;
        }
        ;
        LoginUser2.create = function(value0) {
          return new LoginUser2(value0);
        };
        return LoginUser2;
      }();
      LogoutUser = /* @__PURE__ */ function() {
        function LogoutUser2() {
        }
        ;
        LogoutUser2.value = new LogoutUser2();
        return LogoutUser2;
      }();
      writeToken = function(v) {
        return function __do4() {
          var w = windowImpl();
          var st = localStorage(w)();
          var v1 = function() {
            if (v instanceof Right) {
              return {
                tokenKey: "jwt",
                token: unwrap10(v.value0)
              };
            }
            ;
            if (v instanceof Left) {
              return {
                tokenKey: "basic",
                token: unwrap10(v.value0)
              };
            }
            ;
            throw new Error("Failed pattern match at Store (line 91, column 8 - line 93, column 66): " + [v.constructor.name]);
          }();
          return setItem(v1.tokenKey)(v1.token)(st)();
        };
      };
      tokenKeyJWT = "kwt";
      tokenKeyBasic = "basic";
      removeToken = function __do2() {
        var w = windowImpl();
        var st = localStorage(w)();
        removeItem(tokenKeyBasic)(st)();
        return removeItem(tokenKeyJWT)(st)();
      };
      reduce = function(v) {
        return function(v1) {
          if (v1 instanceof LoginUser) {
            return {
              config: v.config,
              currentUser: new Just(v1.value0)
            };
          }
          ;
          if (v1 instanceof LogoutUser) {
            return {
              config: v.config,
              currentUser: Nothing.value
            };
          }
          ;
          throw new Error("Failed pattern match at Store (line 50, column 1 - line 50, column 35): " + [v.constructor.name, v1.constructor.name]);
        };
      };
      readToken = function __do3() {
        var w = windowImpl();
        var st = localStorage(w)();
        var basic = getItem(tokenKeyBasic)(st)();
        var jwt = getItem(tokenKeyJWT)(st)();
        return map31(function($25) {
          return Token(Credentials($25));
        })(alt7(map31(function($26) {
          return Left.create(wrap3($26));
        })(basic))(map31(function($27) {
          return Right.create(wrap3($27));
        })(jwt)));
      };
    }
  });

  // output/App.Page.Login/index.js
  var type_20, value13, bind7, get3, bind13, pure9, discard3, when3, show6, modify_4, Submit, UpdateEmail, UpdatedPassword, initState, component3;
  var init_App_Page3 = __esm({
    "output/App.Page.Login/index.js"() {
      init_App_Api();
      init_App_Api2();
      init_App_Capability2();
      init_App_Capability3();
      init_App_Capability();
      init_App_Component_HTML();
      init_App_Data4();
      init_Control4();
      init_Control5();
      init_Control_Monad_State();
      init_DOM_HTML_Indexed7();
      init_Data20();
      init_Data_Function();
      init_Data19();
      init_Data16();
      init_Data_String4();
      init_Effect4();
      init_Effect_Class();
      init_Effect3();
      init_Halogen3();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML4();
      init_Halogen_HTML2();
      init_Halogen_Query2();
      init_Halogen_Store2();
      init_Store();
      type_20 = /* @__PURE__ */ type_(isPropInputType);
      value13 = /* @__PURE__ */ value(isPropString);
      bind7 = /* @__PURE__ */ bind(bindHalogenM);
      get3 = /* @__PURE__ */ get(monadStateHalogenM);
      bind13 = /* @__PURE__ */ bind(bindMaybe);
      pure9 = /* @__PURE__ */ pure(applicativeMaybe);
      discard3 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
      when3 = /* @__PURE__ */ when(applicativeHalogenM);
      show6 = /* @__PURE__ */ show(showError);
      modify_4 = /* @__PURE__ */ modify_2(monadStateHalogenM);
      Submit = /* @__PURE__ */ function() {
        function Submit3() {
        }
        ;
        Submit3.value = new Submit3();
        return Submit3;
      }();
      UpdateEmail = /* @__PURE__ */ function() {
        function UpdateEmail2(value0) {
          this.value0 = value0;
        }
        ;
        UpdateEmail2.create = function(value0) {
          return new UpdateEmail2(value0);
        };
        return UpdateEmail2;
      }();
      UpdatedPassword = /* @__PURE__ */ function() {
        function UpdatedPassword2(value0) {
          this.value0 = value0;
        }
        ;
        UpdatedPassword2.create = function(value0) {
          return new UpdatedPassword2(value0);
        };
        return UpdatedPassword2;
      }();
      initState = function(x) {
        return {
          email: Nothing.value,
          password: Nothing.value,
          redirect: x
        };
      };
      component3 = function(dictMonadStore) {
        var getStore3 = getStore(monadStoreHalogenM(dictMonadStore));
        var liftEffect11 = liftEffect(monadEffectHalogenM(dictMonadStore.MonadEffect0()));
        return function(dictMonadAff) {
          var makeRequest3 = makeRequest(monadAffHalogenM(dictMonadAff));
          var monadEffectHalogenM2 = monadEffectHalogenM(dictMonadAff.MonadEffect0());
          var liftEffect12 = liftEffect(monadEffectHalogenM2);
          var logShow3 = logShow2(monadEffectHalogenM2)(showString);
          return function(dictNavigate) {
            var navigate2 = navigate(navigateHalogenM(dictNavigate));
            return function(dictLogMessages) {
              var logDebug2 = logDebug(logMessagesHalogenM(dictLogMessages));
              return function(dictNow) {
                var logDebug1 = logDebug2(nowHalogenM(dictNow));
                var render3 = function(v) {
                  return div_([div3([css("logo")])([]), div3([css("login-block")])([h1([])([text("login")]), form([])([fieldset_([input([placeholder("Email"), type_20(InputEmail.value), onValueInput(UpdateEmail.create)]), input([placeholder("Password"), type_20(InputPassword.value), onValueInput(UpdatedPassword.create)]), input([type_20(InputSubmit.value), value13("Sign in"), onClick(function(v1) {
                    return Submit.value;
                  })])])])])]);
                };
                var handleAction2 = function(v) {
                  if (v instanceof Submit) {
                    return bind7(getStore3)(function(v1) {
                      return bind7(get3)(function(v2) {
                        var mkTpl = bind13(v2.email)(function(fst2) {
                          return bind13(v2.password)(function(snd2) {
                            return pure9({
                              fst: fst2,
                              snd: snd2
                            });
                          });
                        });
                        if (mkTpl instanceof Just) {
                          return bind7(liftEffect11(constructBasicCredentials(mkTpl.value0.fst, mkTpl.value0.snd)))(function(cred) {
                            return bind7(makeRequest3(v1.config.url)(Nothing.value)(mkUserApi)(runFn2(apiUserLoginBasicGet)(cred)))(function(res) {
                              if (res instanceof Right) {
                                var token = getCredentialsBasicAuth(res.value0);
                                return discard3(liftEffect12(writeToken(token)))(function() {
                                  return when3(v2.redirect.redirect)(navigate2(Home.value));
                                });
                              }
                              ;
                              if (res instanceof Left) {
                                return logDebug1(show6(res.value0));
                              }
                              ;
                              throw new Error("Failed pattern match at App.Page.Login (line 73, column 12 - line 78, column 41): " + [res.constructor.name]);
                            });
                          });
                        }
                        ;
                        return discard3(logShow3("validation error"))(function() {
                          return logDebug1("validation error");
                        });
                      });
                    });
                  }
                  ;
                  if (v instanceof UpdateEmail) {
                    return modify_4(function(s) {
                      var $60 = {};
                      for (var $61 in s) {
                        if ({}.hasOwnProperty.call(s, $61)) {
                          $60[$61] = s[$61];
                        }
                        ;
                      }
                      ;
                      $60.email = function() {
                        var $59 = length6(v.value0) !== 0;
                        if ($59) {
                          return pure9(v.value0);
                        }
                        ;
                        return Nothing.value;
                      }();
                      return $60;
                    });
                  }
                  ;
                  if (v instanceof UpdatedPassword) {
                    return modify_4(function(s) {
                      var $65 = {};
                      for (var $66 in s) {
                        if ({}.hasOwnProperty.call(s, $66)) {
                          $65[$66] = s[$66];
                        }
                        ;
                      }
                      ;
                      $65.password = function() {
                        var $64 = length6(v.value0) !== 0;
                        if ($64) {
                          return pure9(v.value0);
                        }
                        ;
                        return Nothing.value;
                      }();
                      return $65;
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at App.Page.Login (line 62, column 3 - line 81, column 39): " + [v.constructor.name]);
                };
                return mkComponent({
                  initialState: initState,
                  render: render3,
                  "eval": mkEval({
                    handleAction: handleAction2,
                    handleQuery: defaultEval.handleQuery,
                    receive: defaultEval.receive,
                    initialize: defaultEval.initialize,
                    finalize: defaultEval.finalize
                  })
                });
              };
            };
          };
        };
      };
    }
  });

  // output/App.Page.Register.Error/index.js
  var intercalate5, map32, show7, $$Error2, validationError;
  var init_App_Page_Register = __esm({
    "output/App.Page.Register.Error/index.js"() {
      init_App_Data3();
      init_Data_Array2();
      init_Data_Array_NonEmpty();
      init_Data4();
      init_Data13();
      init_Data16();
      intercalate5 = /* @__PURE__ */ intercalate4(semigroupString);
      map32 = /* @__PURE__ */ map(functorNonEmptyArray);
      show7 = /* @__PURE__ */ show(showValidationError);
      $$Error2 = function(x) {
        return x;
      };
      validationError = {
        errorToString: function(v) {
          return intercalate5(", ")(map32(show7)(v));
        }
      };
    }
  });

  // output/App.Component.Form.Validation/index.js
  var errorToString;
  var init_App_Component_Form = __esm({
    "output/App.Component.Form.Validation/index.js"() {
      errorToString = function(dict) {
        return dict.errorToString;
      };
    }
  });

  // output/App.Component.Form.Field/index.js
  var append10, value14, bind8, textInput;
  var init_App_Component_Form2 = __esm({
    "output/App.Component.Form.Field/index.js"() {
      init_App_Component_Form();
      init_App_Component_HTML();
      init_Control5();
      init_Data20();
      init_Data19();
      init_Data13();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML4();
      init_Halogen_HTML2();
      append10 = /* @__PURE__ */ append(semigroupArray);
      value14 = /* @__PURE__ */ value(isPropString);
      bind8 = /* @__PURE__ */ bind(bindMaybe);
      textInput = function(dictValidation) {
        var errorToString2 = errorToString(dictValidation);
        return function(v) {
          return function(props) {
            return fieldset([])([input(append10([value14(v.state.value), onValueInput(v.action.handleChange), onBlur(v.action.handleBlur)])(props)), maybeElem(bind8(v.state.result)(blush))(function(err) {
              return div_([text(errorToString2(err))]);
            })]);
          };
        };
      };
    }
  });

  // output/App.Page.Register.Html/index.js
  var textInput2, type_21, value15, Receive2, Eval, render2;
  var init_App_Page_Register2 = __esm({
    "output/App.Page.Register.Html/index.js"() {
      init_App_Component_Form2();
      init_App_Page_Register();
      init_DOM_HTML_Indexed7();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_HTML4();
      init_Halogen_HTML2();
      textInput2 = /* @__PURE__ */ textInput(validationError);
      type_21 = /* @__PURE__ */ type_(isPropInputType);
      value15 = /* @__PURE__ */ value(isPropString);
      Receive2 = /* @__PURE__ */ function() {
        function Receive6(value0) {
          this.value0 = value0;
        }
        ;
        Receive6.create = function(value0) {
          return new Receive6(value0);
        };
        return Receive6;
      }();
      Eval = /* @__PURE__ */ function() {
        function Eval3(value0) {
          this.value0 = value0;
        }
        ;
        Eval3.create = function(value0) {
          return new Eval3(value0);
        };
        return Eval3;
      }();
      render2 = function(v) {
        return form([onSubmit(v.formActions.handleSubmit)])([fieldset_([textInput2({
          state: v.fields.email,
          action: v.actions.email
        })([placeholder("Email"), type_21(InputEmail.value)]), textInput2({
          state: v.fields.password,
          action: v.actions.password
        })([placeholder("Password "), type_21(InputPassword.value)]), input([type_21(InputSubmit.value), value15("Sign up")])])]);
      };
    }
  });

  // output/Record.Builder/foreign.js
  function copyRecord(rec) {
    var copy2 = {};
    for (var key in rec) {
      if ({}.hasOwnProperty.call(rec, key)) {
        copy2[key] = rec[key];
      }
    }
    return copy2;
  }
  function unsafeInsert(l) {
    return function(a2) {
      return function(rec) {
        rec[l] = a2;
        return rec;
      };
    };
  }
  function unsafeModify(l) {
    return function(f) {
      return function(rec) {
        rec[l] = f(rec[l]);
        return rec;
      };
    };
  }
  var init_foreign127 = __esm({
    "output/Record.Builder/foreign.js"() {
    }
  });

  // output/Record.Builder/index.js
  var semigroupoidBuilder, modify5, insert7, categoryBuilder, build;
  var init_Record3 = __esm({
    "output/Record.Builder/index.js"() {
      init_foreign127();
      init_Control2();
      init_Control();
      init_Data2();
      init_Data5();
      init_Record_Unsafe();
      init_Unsafe();
      semigroupoidBuilder = semigroupoidFn;
      modify5 = function() {
        return function() {
          return function(dictIsSymbol) {
            var reflectSymbol2 = reflectSymbol(dictIsSymbol);
            return function(l) {
              return function(f) {
                return function(r1) {
                  return unsafeModify(reflectSymbol2(l))(f)(r1);
                };
              };
            };
          };
        };
      };
      insert7 = function() {
        return function() {
          return function(dictIsSymbol) {
            var reflectSymbol2 = reflectSymbol(dictIsSymbol);
            return function(l) {
              return function(a2) {
                return function(r1) {
                  return unsafeInsert(reflectSymbol2(l))(a2)(r1);
                };
              };
            };
          };
        };
      };
      categoryBuilder = categoryFn;
      build = function(v) {
        return function(r1) {
          return v(copyRecord(r1));
        };
      };
    }
  });

  // output/ConvertableOptions/index.js
  var merge2, defaultsRecord, defaults;
  var init_ConvertableOptions = __esm({
    "output/ConvertableOptions/index.js"() {
      init_Control2();
      init_Control();
      init_Data2();
      init_Record2();
      init_Record3();
      init_Type();
      merge2 = /* @__PURE__ */ merge()();
      defaultsRecord = function() {
        return function() {
          return {
            defaults: flip(merge2)
          };
        };
      };
      defaults = function(dict) {
        return dict.defaults;
      };
    }
  });

  // output/Data.Variant.Internal/index.js
  var init_Data_Variant = __esm({
    "output/Data.Variant.Internal/index.js"() {
      init_Control4();
      init_Control8();
      init_Data();
      init_Data_List();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data5();
      init_Partial2();
      init_Record();
      init_Type();
      init_Record();
    }
  });

  // output/Data.Variant/index.js
  var overSome, overSome1, over3, inj;
  var init_Data55 = __esm({
    "output/Data.Variant/index.js"() {
      init_Control4();
      init_Control8();
      init_Data18();
      init_Data41();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data_List();
      init_Data15();
      init_Data16();
      init_Data5();
      init_Data_Variant();
      init_Partial2();
      init_Record();
      init_Type();
      init_Unsafe();
      overSome = function() {
        return function() {
          return function() {
            return function() {
              return function(r) {
                return function(k) {
                  return function(v) {
                    if (unsafeHas(v.type)(r)) {
                      return {
                        type: v.type,
                        value: unsafeGet(v.type)(r)(v.value)
                      };
                    }
                    ;
                    return k(v);
                  };
                };
              };
            };
          };
        };
      };
      overSome1 = /* @__PURE__ */ overSome()()()();
      over3 = function() {
        return function() {
          return function() {
            return function() {
              return function(r) {
                return overSome1(r)(unsafeCoerce2);
              };
            };
          };
        };
      };
      inj = function() {
        return function(dictIsSymbol) {
          var reflectSymbol2 = reflectSymbol(dictIsSymbol);
          return function(p2) {
            return function(value17) {
              return {
                type: reflectSymbol2(p2),
                value: value17
              };
            };
          };
        };
      };
    }
  });

  // output/Foreign.Object.Unsafe/foreign.js
  function unsafeIndex2(m) {
    return function(k) {
      return m[k];
    };
  }
  var init_foreign128 = __esm({
    "output/Foreign.Object.Unsafe/foreign.js"() {
    }
  });

  // output/Foreign.Object.Unsafe/index.js
  var init_Foreign_Object2 = __esm({
    "output/Foreign.Object.Unsafe/index.js"() {
      init_foreign128();
      init_foreign128();
    }
  });

  // output/Data.Functor.Variant/index.js
  var init_Data_Functor12 = __esm({
    "output/Data.Functor.Variant/index.js"() {
      init_Control4();
      init_Control8();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_List();
      init_Data16();
      init_Data5();
      init_Data29();
      init_Data_Variant();
      init_Partial2();
      init_Record();
      init_Type();
      init_Unsafe();
    }
  });

  // output/Heterogeneous.Folding/index.js
  var hfoldlWithIndex, foldlRecordRowList, hfoldlRecordWithIndex, foldlRecordNil, foldingWithIndex, foldlRecordCons;
  var init_Heterogeneous = __esm({
    "output/Heterogeneous.Folding/index.js"() {
      init_Data20();
      init_Data25();
      init_Data28();
      init_Data_Functor12();
      init_Data55();
      init_Record2();
      init_Type();
      hfoldlWithIndex = function(dict) {
        return dict.hfoldlWithIndex;
      };
      foldlRecordRowList = function(dict) {
        return dict.foldlRecordRowList;
      };
      hfoldlRecordWithIndex = function() {
        return function(dictFoldlRecord) {
          var foldlRecordRowList1 = foldlRecordRowList(dictFoldlRecord);
          return {
            hfoldlWithIndex: function(f) {
              return function(x) {
                return foldlRecordRowList1(f)(x)($$Proxy.value);
              };
            }
          };
        };
      };
      foldlRecordNil = {
        foldlRecordRowList: function(v) {
          return function(x) {
            return function(v1) {
              return function(v2) {
                return x;
              };
            };
          };
        }
      };
      foldingWithIndex = function(dict) {
        return dict.foldingWithIndex;
      };
      foldlRecordCons = function(dictIsSymbol) {
        var get7 = get2(dictIsSymbol)();
        return function() {
          return function(dictFoldingWithIndex) {
            var foldingWithIndex1 = foldingWithIndex(dictFoldingWithIndex);
            return function(dictFoldlRecord) {
              var foldlRecordRowList1 = foldlRecordRowList(dictFoldlRecord);
              return {
                foldlRecordRowList: function(f) {
                  return function(x) {
                    return function(v) {
                      return function(r) {
                        return foldlRecordRowList1(f)(foldingWithIndex1(f)($$Proxy.value)(x)(get7($$Proxy.value)(r)))($$Proxy.value)(r);
                      };
                    };
                  };
                }
              };
            };
          };
        };
      };
    }
  });

  // output/Heterogeneous.Mapping/index.js
  var identity17, compose1, modify6, ConstMapping, mappingWithIndex, mapping, mapRecordWithIndexNil, mapRecordWithIndexBuilder, mapRecordWithIndexCons, hmapWithIndexRecord, hmapWithIndex, hmapRecord, hmap, constMapping;
  var init_Heterogeneous2 = __esm({
    "output/Heterogeneous.Mapping/index.js"() {
      init_Control2();
      init_Control();
      init_Data20();
      init_Data4();
      init_Data_Functor12();
      init_Data27();
      init_Data22();
      init_Data55();
      init_Record3();
      init_Type();
      identity17 = /* @__PURE__ */ identity(categoryBuilder);
      compose1 = /* @__PURE__ */ compose(semigroupoidBuilder);
      modify6 = /* @__PURE__ */ modify5()();
      ConstMapping = function(x) {
        return x;
      };
      mappingWithIndex = function(dict) {
        return dict.mappingWithIndex;
      };
      mapping = function(dict) {
        return dict.mapping;
      };
      mapRecordWithIndexNil = {
        mapRecordWithIndexBuilder: function(v) {
          return function(v1) {
            return identity17;
          };
        }
      };
      mapRecordWithIndexBuilder = function(dict) {
        return dict.mapRecordWithIndexBuilder;
      };
      mapRecordWithIndexCons = function(dictIsSymbol) {
        var modify1 = modify6(dictIsSymbol);
        return function(dictMappingWithIndex) {
          var mappingWithIndex1 = mappingWithIndex(dictMappingWithIndex);
          return function(dictMapRecordWithIndex) {
            var mapRecordWithIndexBuilder1 = mapRecordWithIndexBuilder(dictMapRecordWithIndex);
            return function() {
              return function() {
                return {
                  mapRecordWithIndexBuilder: function(v) {
                    return function(f) {
                      return compose1(modify1($$Proxy.value)(mappingWithIndex1(f)($$Proxy.value)))(mapRecordWithIndexBuilder1($$Proxy.value)(f));
                    };
                  }
                };
              };
            };
          };
        };
      };
      hmapWithIndexRecord = function() {
        return function(dictMapRecordWithIndex) {
          return {
            hmapWithIndex: function() {
              var $102 = mapRecordWithIndexBuilder(dictMapRecordWithIndex)($$Proxy.value);
              return function($103) {
                return build($102($103));
              };
            }()
          };
        };
      };
      hmapWithIndex = function(dict) {
        return dict.hmapWithIndex;
      };
      hmapRecord = function() {
        return function(dictMapRecordWithIndex) {
          return {
            hmap: function() {
              var $108 = mapRecordWithIndexBuilder(dictMapRecordWithIndex)($$Proxy.value);
              return function($109) {
                return build($108(ConstMapping($109)));
              };
            }()
          };
        };
      };
      hmap = function(dict) {
        return dict.hmap;
      };
      constMapping = function(dictMapping) {
        var mapping1 = mapping(dictMapping);
        return {
          mappingWithIndex: function(v) {
            return function(v1) {
              return mapping1(v);
            };
          }
        };
      };
    }
  });

  // output/Formless/index.js
  var map33, pure10, identity18, inj3, apply3, composeFlipped2, insert8, over4, discard4, pure13, bind9, $$delete4, coerce4, bindFlipped6, innerIsSymbol, request2, gets2, for_2, for_1, modify_5, get4, for_22, tell3, map111, slot2, query3, MkFieldState, MkFieldResult, MkFieldOutput, Query2, Validate, SubmitAttempt, Submit2, Reset, SubmitForm, ResetForm, SetForm, SetFormConfig, ChangeField, BlurField, ModifyField, ValidateField, ResetField, Raise2, Eval2, Initialize3, Receive3, HandleForm, mkFieldStates1, mkFieldResults1, mkFieldOutputs1, mkFieldActions1, mappingWithIndexMkFieldAc, mappingMkFieldStateFieldS, foldingWithIndexMkFieldRe, foldingWithIndexMkFieldOu, when$prime, when$prime1, validate2, mkFieldStates, mkFieldResults, mkFieldOutputs, mkFieldActions, mkConfig, handleSubmitValidate, formless, $$eval, defaultConfig, mkConfig1;
  var init_Formless = __esm({
    "output/Formless/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Control2();
      init_Control_Monad_State();
      init_Control();
      init_ConvertableOptions();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data5();
      init_Data3();
      init_Data55();
      init_Effect4();
      init_Foreign();
      init_Foreign_Object2();
      init_Halogen3();
      init_Halogen5();
      init_Halogen4();
      init_Halogen_Query2();
      init_Heterogeneous();
      init_Heterogeneous2();
      init_Record2();
      init_Record3();
      init_Safe();
      init_Type2();
      init_Type();
      init_Unsafe2();
      init_Web_Event3();
      map33 = /* @__PURE__ */ map(functorMaybe);
      pure10 = /* @__PURE__ */ pure(applicativeMaybe);
      identity18 = /* @__PURE__ */ identity(categoryBuilder);
      inj3 = /* @__PURE__ */ inj();
      apply3 = /* @__PURE__ */ apply(applyMaybe);
      composeFlipped2 = /* @__PURE__ */ composeFlipped(semigroupoidBuilder);
      insert8 = /* @__PURE__ */ insert7()();
      over4 = /* @__PURE__ */ over3()()()();
      discard4 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
      pure13 = /* @__PURE__ */ pure(applicativeHalogenM);
      bind9 = /* @__PURE__ */ bind(bindHalogenM);
      $$delete4 = /* @__PURE__ */ $$delete3({
        reflectSymbol: function() {
          return "liftAction";
        }
      })()();
      coerce4 = /* @__PURE__ */ coerce();
      bindFlipped6 = /* @__PURE__ */ bindFlipped(bindHalogenM);
      innerIsSymbol = {
        reflectSymbol: function() {
          return "inner";
        }
      };
      request2 = /* @__PURE__ */ request()(innerIsSymbol)(ordUnit);
      gets2 = /* @__PURE__ */ gets(monadStateHalogenM);
      for_2 = /* @__PURE__ */ for_(applicativeHalogenM);
      for_1 = /* @__PURE__ */ for_2(foldableMaybe);
      modify_5 = /* @__PURE__ */ modify_2(monadStateHalogenM);
      get4 = /* @__PURE__ */ get(monadStateHalogenM);
      for_22 = /* @__PURE__ */ for_2(foldableArray);
      tell3 = /* @__PURE__ */ tell2()(innerIsSymbol)(ordUnit);
      map111 = /* @__PURE__ */ map(functorObject);
      slot2 = /* @__PURE__ */ slot()(innerIsSymbol)(ordUnit);
      query3 = /* @__PURE__ */ query()(innerIsSymbol)(ordUnit);
      MkFieldState = /* @__PURE__ */ function() {
        function MkFieldState2() {
        }
        ;
        MkFieldState2.value = new MkFieldState2();
        return MkFieldState2;
      }();
      MkFieldResult = /* @__PURE__ */ function() {
        function MkFieldResult2() {
        }
        ;
        MkFieldResult2.value = new MkFieldResult2();
        return MkFieldResult2;
      }();
      MkFieldOutput = /* @__PURE__ */ function() {
        function MkFieldOutput2() {
        }
        ;
        MkFieldOutput2.value = new MkFieldOutput2();
        return MkFieldOutput2;
      }();
      Query2 = /* @__PURE__ */ function() {
        function Query4(value0) {
          this.value0 = value0;
        }
        ;
        Query4.create = function(value0) {
          return new Query4(value0);
        };
        return Query4;
      }();
      Validate = /* @__PURE__ */ function() {
        function Validate2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Validate2.create = function(value0) {
          return function(value1) {
            return new Validate2(value0, value1);
          };
        };
        return Validate2;
      }();
      SubmitAttempt = /* @__PURE__ */ function() {
        function SubmitAttempt2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        SubmitAttempt2.create = function(value0) {
          return function(value1) {
            return new SubmitAttempt2(value0, value1);
          };
        };
        return SubmitAttempt2;
      }();
      Submit2 = /* @__PURE__ */ function() {
        function Submit3(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Submit3.create = function(value0) {
          return function(value1) {
            return new Submit3(value0, value1);
          };
        };
        return Submit3;
      }();
      Reset = /* @__PURE__ */ function() {
        function Reset2(value0) {
          this.value0 = value0;
        }
        ;
        Reset2.create = function(value0) {
          return new Reset2(value0);
        };
        return Reset2;
      }();
      SubmitForm = /* @__PURE__ */ function() {
        function SubmitForm2(value0) {
          this.value0 = value0;
        }
        ;
        SubmitForm2.create = function(value0) {
          return new SubmitForm2(value0);
        };
        return SubmitForm2;
      }();
      ResetForm = /* @__PURE__ */ function() {
        function ResetForm2() {
        }
        ;
        ResetForm2.value = new ResetForm2();
        return ResetForm2;
      }();
      SetForm = /* @__PURE__ */ function() {
        function SetForm2(value0) {
          this.value0 = value0;
        }
        ;
        SetForm2.create = function(value0) {
          return new SetForm2(value0);
        };
        return SetForm2;
      }();
      SetFormConfig = /* @__PURE__ */ function() {
        function SetFormConfig2(value0) {
          this.value0 = value0;
        }
        ;
        SetFormConfig2.create = function(value0) {
          return new SetFormConfig2(value0);
        };
        return SetFormConfig2;
      }();
      ChangeField = /* @__PURE__ */ function() {
        function ChangeField2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        ChangeField2.create = function(value0) {
          return function(value1) {
            return new ChangeField2(value0, value1);
          };
        };
        return ChangeField2;
      }();
      BlurField = /* @__PURE__ */ function() {
        function BlurField2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        BlurField2.create = function(value0) {
          return function(value1) {
            return new BlurField2(value0, value1);
          };
        };
        return BlurField2;
      }();
      ModifyField = /* @__PURE__ */ function() {
        function ModifyField2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        ModifyField2.create = function(value0) {
          return function(value1) {
            return new ModifyField2(value0, value1);
          };
        };
        return ModifyField2;
      }();
      ValidateField = /* @__PURE__ */ function() {
        function ValidateField2(value0) {
          this.value0 = value0;
        }
        ;
        ValidateField2.create = function(value0) {
          return new ValidateField2(value0);
        };
        return ValidateField2;
      }();
      ResetField = /* @__PURE__ */ function() {
        function ResetField2(value0) {
          this.value0 = value0;
        }
        ;
        ResetField2.create = function(value0) {
          return new ResetField2(value0);
        };
        return ResetField2;
      }();
      Raise2 = /* @__PURE__ */ function() {
        function Raise4(value0) {
          this.value0 = value0;
        }
        ;
        Raise4.create = function(value0) {
          return new Raise4(value0);
        };
        return Raise4;
      }();
      Eval2 = /* @__PURE__ */ function() {
        function Eval3(value0) {
          this.value0 = value0;
        }
        ;
        Eval3.create = function(value0) {
          return new Eval3(value0);
        };
        return Eval3;
      }();
      Initialize3 = /* @__PURE__ */ function() {
        function Initialize6() {
        }
        ;
        Initialize6.value = new Initialize6();
        return Initialize6;
      }();
      Receive3 = /* @__PURE__ */ function() {
        function Receive6(value0) {
          this.value0 = value0;
        }
        ;
        Receive6.create = function(value0) {
          return new Receive6(value0);
        };
        return Receive6;
      }();
      HandleForm = /* @__PURE__ */ function() {
        function HandleForm2(value0) {
          this.value0 = value0;
        }
        ;
        HandleForm2.create = function(value0) {
          return new HandleForm2(value0);
        };
        return HandleForm2;
      }();
      mkFieldStates1 = function(dictHMap) {
        return {
          mkFieldStates: hmap(dictHMap)(MkFieldState.value),
          HMap0: function() {
            return dictHMap;
          }
        };
      };
      mkFieldResults1 = function(dictHFoldlWithIndex) {
        return {
          mkFieldResults: function() {
            var $267 = map33(flip(build)({}));
            var $268 = hfoldlWithIndex(dictHFoldlWithIndex)(MkFieldResult.value)(pure10(identity18));
            return function($269) {
              return $267($268($269));
            };
          }(),
          HFoldlWithIndex0: function() {
            return dictHFoldlWithIndex;
          }
        };
      };
      mkFieldOutputs1 = function(dictHFoldlWithIndex) {
        return {
          mkFieldOutputs: function() {
            var $270 = map33(flip(build)({}));
            var $271 = hfoldlWithIndex(dictHFoldlWithIndex)(MkFieldOutput.value)(pure10(identity18));
            return function($272) {
              return $270($271($272));
            };
          }(),
          HFoldlWithIndex0: function() {
            return dictHFoldlWithIndex;
          }
        };
      };
      mkFieldActions1 = function(dictHMapWithIndex) {
        var hmapWithIndex2 = hmapWithIndex(dictHMapWithIndex);
        return {
          mkFieldActions: function(lift9) {
            return hmapWithIndex2(lift9);
          },
          HMapWithIndex0: function() {
            return dictHMapWithIndex;
          }
        };
      };
      mappingWithIndexMkFieldAc = function(dictIsSymbol) {
        var inj1 = inj3(dictIsSymbol);
        var reflectSymbol2 = reflectSymbol(dictIsSymbol);
        return function(dictTypeEquals) {
          return function() {
            return {
              mappingWithIndex: function(v) {
                return function(sym) {
                  return function(v1) {
                    var fieldVariant = inj1(sym)(unit);
                    return {
                      key: reflectSymbol2(sym),
                      modify: function() {
                        var $273 = ModifyField.create(fieldVariant);
                        return function($274) {
                          return v($273($274));
                        };
                      }(),
                      reset: v(new ResetField(fieldVariant)),
                      validate: v(new ValidateField(fieldVariant)),
                      handleChange: function() {
                        var $275 = ChangeField.create(fieldVariant);
                        return function($276) {
                          return v($275($276));
                        };
                      }(),
                      handleBlur: function() {
                        var $277 = BlurField.create(fieldVariant);
                        return function($278) {
                          return v($277($278));
                        };
                      }()
                    };
                  };
                };
              }
            };
          };
        };
      };
      mappingMkFieldStateFieldS = {
        mapping: function(v) {
          return function(input3) {
            return {
              initialValue: input3,
              value: input3,
              result: Nothing.value
            };
          };
        }
      };
      foldingWithIndexMkFieldRe = function(dictIsSymbol) {
        var insert13 = insert8(dictIsSymbol);
        return function(dictTypeEquals) {
          var from3 = from2(dictTypeEquals);
          return function() {
            return function() {
              return {
                foldingWithIndex: function(v) {
                  return function(prop3) {
                    return function(rin) {
                      return function(field) {
                        var v1 = from3(field);
                        return apply3(map33(composeFlipped2)(rin))(map33(insert13(prop3))(v1.result));
                      };
                    };
                  };
                }
              };
            };
          };
        };
      };
      foldingWithIndexMkFieldOu = function(dictIsSymbol) {
        var insert13 = insert8(dictIsSymbol);
        return function(dictTypeEquals) {
          var from3 = from2(dictTypeEquals);
          return function() {
            return function() {
              return {
                foldingWithIndex: function(v) {
                  return function(prop3) {
                    return function(rin) {
                      return function(field) {
                        var result = from3(field);
                        return apply3(map33(composeFlipped2)(rin))(map33(insert13(prop3))(hush(result)));
                      };
                    };
                  };
                }
              };
            };
          };
        };
      };
      when$prime = function(dictApplicative) {
        var pure25 = pure(dictApplicative);
        return function(v) {
          return function(v1) {
            if (v) {
              return v1(unit);
            }
            ;
            return pure25(unit);
          };
        };
      };
      when$prime1 = /* @__PURE__ */ when$prime(applicativeHalogenM);
      validate2 = function() {
        return function() {
          return function() {
            return function() {
              return flip(over4);
            };
          };
        };
      };
      mkFieldStates = function(dict) {
        return dict.mkFieldStates;
      };
      mkFieldResults = function(dict) {
        return dict.mkFieldResults;
      };
      mkFieldOutputs = function(dict) {
        return dict.mkFieldOutputs;
      };
      mkFieldActions = function(dict) {
        return dict.mkFieldActions;
      };
      mkConfig = function(dict) {
        return dict.mkConfig;
      };
      handleSubmitValidate = function(onSubmit2) {
        return function(validate$prime) {
          return function(validators) {
            return function(v) {
              if (v instanceof Submit2) {
                return discard4(onSubmit2(v.value0))(function() {
                  return pure13(new Just(v.value1));
                });
              }
              ;
              if (v instanceof Validate) {
                return pure13(new Just(v.value1(validate$prime(v.value0)(validators))));
              }
              ;
              return pure13(Nothing.value);
            };
          };
        };
      };
      formless = function(dictMonadEffect) {
        var liftEffect11 = liftEffect(monadEffectHalogenM(dictMonadEffect));
        return function(dictMkFieldStates) {
          var mkFieldStates2 = mkFieldStates(dictMkFieldStates);
          return function(dictMkFieldActions) {
            var mkFieldActions2 = mkFieldActions(dictMkFieldActions);
            return function(dictMkFieldResults) {
              var mkFieldResults2 = mkFieldResults(dictMkFieldResults);
              return function(dictMkFieldOutputs) {
                var mkFieldOutputs2 = mkFieldOutputs(dictMkFieldOutputs);
                return function(dictMkConfig) {
                  var mkConfig2 = mkConfig(dictMkConfig);
                  return function(providedConfig) {
                    return function(initialForm) {
                      return function(component7) {
                        var setFieldResult = function(v) {
                          return function(object2) {
                            var field = unsafeIndex2(object2)(v.type);
                            return insert4(v.type)({
                              result: new Just(v.value),
                              initialValue: field.initialValue,
                              value: field.value
                            })(object2);
                          };
                        };
                        var modifyField = function(v) {
                          return function(object2) {
                            var field = unsafeIndex2(object2)(v.type);
                            return insert4(v.type)(v.value(field))(object2);
                          };
                        };
                        var initialState = function(input3) {
                          var initialFullConfig = mkConfig2(providedConfig);
                          var initialFormState = {
                            submitCount: 0,
                            errorCount: 0,
                            allTouched: false
                          };
                          var initialFormActions = {
                            setFields: function($280) {
                              return initialFullConfig.liftAction(SetForm.create($280));
                            },
                            reset: initialFullConfig.liftAction(ResetForm.value),
                            setConfig: function($281) {
                              return initialFullConfig.liftAction(SetFormConfig.create($281));
                            },
                            submit: initialFullConfig.liftAction(new SubmitForm(Nothing.value)),
                            handleSubmit: function($282) {
                              return initialFullConfig.liftAction(SubmitForm.create(Just.create($282)));
                            }
                          };
                          var initialFieldStates = mkFieldStates2(initialForm);
                          var initialFieldActions = mkFieldActions2(initialFullConfig.liftAction)(initialFieldStates);
                          var initialConfig = $$delete4($$Proxy.value)(initialFullConfig);
                          return {
                            input: input3,
                            fieldObject: initialFieldStates,
                            fieldActions: initialFieldActions,
                            formState: initialFormState,
                            formActions: initialFormActions,
                            formConfig: initialConfig
                          };
                        };
                        var getKeys = function($283) {
                          return coerce4(keys($283));
                        };
                        var getField3 = function(v) {
                          return function(object2) {
                            var field = unsafeIndex2(object2)(v);
                            return {
                              type: v,
                              value: field.value
                            };
                          };
                        };
                        var fieldsKey = function($284) {
                          return coerce4($284.type);
                        };
                        var mkFieldRep = function(variant) {
                          return function(value17) {
                            return {
                              type: coerce4(fieldsKey(variant)),
                              value: value17
                            };
                          };
                        };
                        var countErrors = fold4(function(acc) {
                          return function(v) {
                            return function(v1) {
                              if (v1.result instanceof Just && v1.result.value0 instanceof Left) {
                                return acc + 1 | 0;
                              }
                              ;
                              return acc;
                            };
                          };
                        })(0);
                        var allTouched = fold4(function(acc) {
                          return function(v) {
                            return function(v1) {
                              if (v1.result instanceof Just) {
                                return acc && true;
                              }
                              ;
                              return false;
                            };
                          };
                        })(true);
                        var runValidation = function(fieldKey) {
                          return bind9(bindFlipped6(function() {
                            var $285 = request2($$Proxy.value)(unit);
                            var $286 = getField3(fieldKey);
                            return function($287) {
                              return $285(Validate.create($286($287)));
                            };
                          }())(gets2(function(v) {
                            return v.fieldObject;
                          })))(function(mbResult) {
                            return for_1(mbResult)(function(resultVariant) {
                              return modify_5(function(state3) {
                                var fieldObject = setFieldResult(resultVariant)(state3.fieldObject);
                                var $199 = {};
                                for (var $200 in state3) {
                                  if ({}.hasOwnProperty.call(state3, $200)) {
                                    $199[$200] = state3[$200];
                                  }
                                  ;
                                }
                                ;
                                $199.fieldObject = fieldObject;
                                $199.formState = function() {
                                  var $196 = {};
                                  for (var $197 in state3.formState) {
                                    if ({}.hasOwnProperty.call(state3.formState, $197)) {
                                      $196[$197] = state3["formState"][$197];
                                    }
                                    ;
                                  }
                                  ;
                                  $196.errorCount = countErrors(fieldObject);
                                  $196.allTouched = allTouched(fieldObject);
                                  return $196;
                                }();
                                return $199;
                              });
                            });
                          });
                        };
                        var runFormAction = function(action2) {
                          return handleAction2(new HandleForm(new Eval2(action2)));
                        };
                        var handleAction2 = function(v) {
                          if (v instanceof Initialize3) {
                            return bind9(get4)(function(v1) {
                              return when$prime1(v1.formConfig.validateOnMount)(function(v2) {
                                return for_22(getKeys(v1.fieldObject))(runValidation);
                              });
                            });
                          }
                          ;
                          if (v instanceof Receive3) {
                            return bind9(get4)(function(v1) {
                              return when$prime1(!unsafeRefEq(v1.input)(v.value0))(function(v2) {
                                return modify_5(function(v3) {
                                  var $207 = {};
                                  for (var $208 in v3) {
                                    if ({}.hasOwnProperty.call(v3, $208)) {
                                      $207[$208] = v3[$208];
                                    }
                                    ;
                                  }
                                  ;
                                  $207.input = v.value0;
                                  return $207;
                                });
                              });
                            });
                          }
                          ;
                          if (v instanceof HandleForm && v.value0 instanceof Raise2) {
                            return raise(v.value0.value0);
                          }
                          ;
                          if (v instanceof HandleForm && v.value0 instanceof Eval2) {
                            if (v.value0.value0 instanceof SubmitForm) {
                              return discard4(for_1(v.value0.value0.value0)(function(event) {
                                return liftEffect11(preventDefault(event));
                              }))(function() {
                                return discard4(bind9(get4)(function(v1) {
                                  return for_22(getKeys(v1.fieldObject))(runValidation);
                                }))(function() {
                                  return bind9(get4)(function(v1) {
                                    return discard4(modify_5(function(state3) {
                                      var $221 = {};
                                      for (var $222 in state3) {
                                        if ({}.hasOwnProperty.call(state3, $222)) {
                                          $221[$222] = state3[$222];
                                        }
                                        ;
                                      }
                                      ;
                                      $221.formState = function() {
                                        var $218 = {};
                                        for (var $219 in state3.formState) {
                                          if ({}.hasOwnProperty.call(state3.formState, $219)) {
                                            $218[$219] = state3["formState"][$219];
                                          }
                                          ;
                                        }
                                        ;
                                        $218.submitCount = state3.formState.submitCount + 1 | 0;
                                        return $218;
                                      }();
                                      return $221;
                                    }))(function() {
                                      return for_1(mkFieldResults2(v1.fieldObject))(function(results) {
                                        var v2 = mkFieldOutputs2(results);
                                        if (v2 instanceof Nothing) {
                                          return tell3($$Proxy.value)(unit)(SubmitAttempt.create(results));
                                        }
                                        ;
                                        if (v2 instanceof Just) {
                                          return tell3($$Proxy.value)(unit)(Submit2.create(v2.value0));
                                        }
                                        ;
                                        throw new Error("Failed pattern match at Formless (line 429, column 75 - line 431, column 64): " + [v2.constructor.name]);
                                      });
                                    });
                                  });
                                });
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof SetForm) {
                              return modify_5(function(state3) {
                                var $228 = {};
                                for (var $229 in state3) {
                                  if ({}.hasOwnProperty.call(state3, $229)) {
                                    $228[$229] = state3[$229];
                                  }
                                  ;
                                }
                                ;
                                $228.fieldObject = v.value0.value0.value0;
                                return $228;
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof SetFormConfig) {
                              return modify_5(function(state3) {
                                var $232 = {};
                                for (var $233 in state3) {
                                  if ({}.hasOwnProperty.call(state3, $233)) {
                                    $232[$233] = state3[$233];
                                  }
                                  ;
                                }
                                ;
                                $232.formConfig = v.value0.value0.value0;
                                return $232;
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof ResetForm) {
                              var reset2 = function(field) {
                                var $236 = {};
                                for (var $237 in field) {
                                  if ({}.hasOwnProperty.call(field, $237)) {
                                    $236[$237] = field[$237];
                                  }
                                  ;
                                }
                                ;
                                $236.value = field.initialValue;
                                $236.result = Nothing.value;
                                return $236;
                              };
                              return discard4(modify_5(function(state3) {
                                var $239 = {};
                                for (var $240 in state3) {
                                  if ({}.hasOwnProperty.call(state3, $240)) {
                                    $239[$240] = state3[$240];
                                  }
                                  ;
                                }
                                ;
                                $239.fieldObject = map111(reset2)(state3.fieldObject);
                                $239.formState = {
                                  submitCount: 0,
                                  errorCount: 0,
                                  allTouched: false
                                };
                                return $239;
                              }))(function() {
                                return tell3($$Proxy.value)(unit)(Reset.create);
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof ChangeField) {
                              return bind9(get4)(function(v1) {
                                var modify8 = mkFieldRep(v.value0.value0.value0)(function(v2) {
                                  return {
                                    value: v.value0.value0.value1,
                                    initialValue: v2.initialValue,
                                    result: v2.result
                                  };
                                });
                                return discard4(modify_5(function(state3) {
                                  var $243 = {};
                                  for (var $244 in state3) {
                                    if ({}.hasOwnProperty.call(state3, $244)) {
                                      $243[$244] = state3[$244];
                                    }
                                    ;
                                  }
                                  ;
                                  $243.fieldObject = modifyField(modify8)(state3.fieldObject);
                                  return $243;
                                }))(function() {
                                  return when$prime1(v1.formConfig.validateOnChange)(function(v2) {
                                    return runFormAction(new ValidateField(v.value0.value0.value0));
                                  });
                                });
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof BlurField) {
                              return bind9(get4)(function(v1) {
                                return when$prime1(v1.formConfig.validateOnBlur)(function(v2) {
                                  return runFormAction(new ValidateField(v.value0.value0.value0));
                                });
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof ModifyField) {
                              return bind9(get4)(function(v1) {
                                var modify8 = mkFieldRep(v.value0.value0.value0)(v.value0.value0.value1);
                                return discard4(modify_5(function(state3) {
                                  var $254 = {};
                                  for (var $255 in state3) {
                                    if ({}.hasOwnProperty.call(state3, $255)) {
                                      $254[$255] = state3[$255];
                                    }
                                    ;
                                  }
                                  ;
                                  $254.fieldObject = modifyField(modify8)(state3.fieldObject);
                                  return $254;
                                }))(function() {
                                  return when$prime1(v1.formConfig.validateOnModify)(function(v2) {
                                    return runFormAction(new ValidateField(v.value0.value0.value0));
                                  });
                                });
                              });
                            }
                            ;
                            if (v.value0.value0 instanceof ValidateField) {
                              return runValidation(fieldsKey(v.value0.value0.value0));
                            }
                            ;
                            if (v.value0.value0 instanceof ResetField) {
                              var reset2 = function(field) {
                                return {
                                  value: field.initialValue,
                                  result: Nothing.value,
                                  initialValue: field.initialValue
                                };
                              };
                              var modify7 = mkFieldRep(v.value0.value0.value0)(reset2);
                              return modify_5(function(state3) {
                                var $261 = {};
                                for (var $262 in state3) {
                                  if ({}.hasOwnProperty.call(state3, $262)) {
                                    $261[$262] = state3[$262];
                                  }
                                  ;
                                }
                                ;
                                $261.fieldObject = modifyField(modify7)(state3.fieldObject);
                                return $261;
                              });
                            }
                            ;
                            throw new Error("Failed pattern match at Formless (line 421, column 33 - line 473, column 89): " + [v.value0.value0.constructor.name]);
                          }
                          ;
                          throw new Error("Failed pattern match at Formless (line 407, column 18 - line 473, column 89): " + [v.constructor.name]);
                        };
                        return mkComponent({
                          initialState,
                          render: function(state3) {
                            var context = {
                              input: state3.input,
                              fields: state3.fieldObject,
                              actions: state3.fieldActions,
                              formState: state3.formState,
                              formActions: state3.formActions
                            };
                            return slot2($$Proxy.value)(unit)(component7)(context)(HandleForm.create);
                          },
                          "eval": mkEval({
                            initialize: new Just(Initialize3.value),
                            receive: function($288) {
                              return Just.create(Receive3.create($288));
                            },
                            finalize: Nothing.value,
                            handleAction: handleAction2,
                            handleQuery: function() {
                              var $289 = query3($$Proxy.value)(unit);
                              return function($290) {
                                return $289(Query2.create($290));
                              };
                            }()
                          })
                        });
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
      $$eval = function($291) {
        return raise(Eval2.create($291));
      };
      defaultConfig = {
        validateOnBlur: true,
        validateOnChange: false,
        validateOnModify: false,
        validateOnMount: false
      };
      mkConfig1 = function(dictDefaults) {
        var defaults2 = defaults(dictDefaults);
        return {
          mkConfig: function(provided) {
            return defaults2(defaultConfig)(provided);
          },
          Defaults0: function() {
            return dictDefaults;
          }
        };
      };
    }
  });

  // output/App.Page.Register.Component/index.js
  var lmap5, pure11, put3, emailIsSymbol, mapRecordWithIndexCons2, constMapping2, passwordIsSymbol, mapRecordWithIndexCons1, mkFieldStates12, mkFieldActions12, hfoldlRecordWithIndex2, foldlRecordCons2, foldlRecordCons1, mkFieldResults12, mkFieldOutputs12, mkConfig12, mempty5, identity19, validate3, component4;
  var init_App_Page_Register3 = __esm({
    "output/App.Page.Register.Component/index.js"() {
      init_App_Data3();
      init_App_Page_Register();
      init_App_Page_Register2();
      init_Control4();
      init_Control2();
      init_Control_Monad_State();
      init_ConvertableOptions();
      init_Data23();
      init_Data20();
      init_Data19();
      init_Data14();
      init_Formless();
      init_Halogen3();
      init_Halogen_Query2();
      init_Heterogeneous();
      init_Heterogeneous2();
      init_Type2();
      init_Undefined();
      lmap5 = /* @__PURE__ */ lmap(bifunctorEither);
      pure11 = /* @__PURE__ */ pure(applicativeEither);
      put3 = /* @__PURE__ */ put(monadStateHalogenM);
      emailIsSymbol = {
        reflectSymbol: function() {
          return "email";
        }
      };
      mapRecordWithIndexCons2 = /* @__PURE__ */ mapRecordWithIndexCons(emailIsSymbol);
      constMapping2 = /* @__PURE__ */ constMapping(mappingMkFieldStateFieldS);
      passwordIsSymbol = {
        reflectSymbol: function() {
          return "password";
        }
      };
      mapRecordWithIndexCons1 = /* @__PURE__ */ mapRecordWithIndexCons(passwordIsSymbol);
      mkFieldStates12 = /* @__PURE__ */ mkFieldStates1(/* @__PURE__ */ hmapRecord()(/* @__PURE__ */ mapRecordWithIndexCons2(constMapping2)(/* @__PURE__ */ mapRecordWithIndexCons1(constMapping2)(mapRecordWithIndexNil)()())()()));
      mkFieldActions12 = /* @__PURE__ */ mkFieldActions1(/* @__PURE__ */ hmapWithIndexRecord()(/* @__PURE__ */ mapRecordWithIndexCons2(/* @__PURE__ */ mappingWithIndexMkFieldAc(emailIsSymbol)(refl)())(/* @__PURE__ */ mapRecordWithIndexCons1(/* @__PURE__ */ mappingWithIndexMkFieldAc(passwordIsSymbol)(refl)())(mapRecordWithIndexNil)()())()()));
      hfoldlRecordWithIndex2 = /* @__PURE__ */ hfoldlRecordWithIndex();
      foldlRecordCons2 = /* @__PURE__ */ foldlRecordCons(emailIsSymbol)();
      foldlRecordCons1 = /* @__PURE__ */ foldlRecordCons(passwordIsSymbol)();
      mkFieldResults12 = /* @__PURE__ */ mkFieldResults1(/* @__PURE__ */ hfoldlRecordWithIndex2(/* @__PURE__ */ foldlRecordCons2(/* @__PURE__ */ foldingWithIndexMkFieldRe(emailIsSymbol)(refl)()())(/* @__PURE__ */ foldlRecordCons1(/* @__PURE__ */ foldingWithIndexMkFieldRe(passwordIsSymbol)(refl)()())(foldlRecordNil))));
      mkFieldOutputs12 = /* @__PURE__ */ mkFieldOutputs1(/* @__PURE__ */ hfoldlRecordWithIndex2(/* @__PURE__ */ foldlRecordCons2(/* @__PURE__ */ foldingWithIndexMkFieldOu(emailIsSymbol)(refl)()())(/* @__PURE__ */ foldlRecordCons1(/* @__PURE__ */ foldingWithIndexMkFieldOu(passwordIsSymbol)(refl)()())(foldlRecordNil))));
      mkConfig12 = /* @__PURE__ */ mkConfig1(/* @__PURE__ */ defaultsRecord()());
      mempty5 = /* @__PURE__ */ mempty(/* @__PURE__ */ monoidRecord()(/* @__PURE__ */ monoidRecordCons(emailIsSymbol)(monoidString)()(/* @__PURE__ */ monoidRecordCons(passwordIsSymbol)(monoidString)()(monoidRecordNil))));
      identity19 = /* @__PURE__ */ identity(categoryFn);
      validate3 = /* @__PURE__ */ validate2()()()();
      component4 = function(dictMonadAff) {
        var validation3 = {
          email: function() {
            var $102 = lmap5($$Error2);
            return function($103) {
              return $102(parse(Email($103)));
            };
          }(),
          password: pure11
        };
        var handleAction2 = function(v) {
          if (v instanceof Receive2) {
            return put3(v.value0);
          }
          ;
          if (v instanceof Eval) {
            return $$eval(v.value0);
          }
          ;
          throw new Error("Failed pattern match at App.Page.Register.Component (line 35, column 3 - line 35, column 54): " + [v.constructor.name]);
        };
        return formless(dictMonadAff.MonadEffect0())(mkFieldStates12)(mkFieldActions12)(mkFieldResults12)(mkFieldOutputs12)(mkConfig12)({
          liftAction: Eval.create
        })(mempty5)(mkComponent({
          initialState: identity19,
          render: render2,
          "eval": mkEval({
            handleAction: handleAction2,
            handleQuery: handleSubmitValidate(undefined2)(validate3)(validation3),
            receive: function($104) {
              return Just.create(Receive2.create($104));
            },
            initialize: defaultEval.initialize,
            finalize: defaultEval.finalize
          })
        }));
      };
    }
  });

  // output/Halogen.Store.Connect/index.js
  var bind10, $$void7, map34, innerIsSymbol2, slot3, discard5, map112, modify_6, gets3, unless3, pure14, query4, Initialize4, Receive4, Update, Raise3, subscribe3, connect;
  var init_Halogen_Store3 = __esm({
    "output/Halogen.Store.Connect/index.js"() {
      init_Control4();
      init_Control5();
      init_Control_Monad_State();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data3();
      init_Halogen3();
      init_Halogen5();
      init_Halogen_HTML();
      init_Halogen_Query2();
      init_Halogen_Store2();
      init_Halogen();
      init_Type();
      init_Unsafe2();
      bind10 = /* @__PURE__ */ bind(bindHalogenM);
      $$void7 = /* @__PURE__ */ $$void(functorHalogenM);
      map34 = /* @__PURE__ */ map(functorEmitter);
      innerIsSymbol2 = {
        reflectSymbol: function() {
          return "inner";
        }
      };
      slot3 = /* @__PURE__ */ slot()(innerIsSymbol2)(ordUnit);
      discard5 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
      map112 = /* @__PURE__ */ map(functorHalogenM);
      modify_6 = /* @__PURE__ */ modify_2(monadStateHalogenM);
      gets3 = /* @__PURE__ */ gets(monadStateHalogenM);
      unless3 = /* @__PURE__ */ unless(applicativeHalogenM);
      pure14 = /* @__PURE__ */ pure(applicativeHalogenM);
      query4 = /* @__PURE__ */ query()(innerIsSymbol2)(ordUnit);
      Initialize4 = /* @__PURE__ */ function() {
        function Initialize6() {
        }
        ;
        Initialize6.value = new Initialize6();
        return Initialize6;
      }();
      Receive4 = /* @__PURE__ */ function() {
        function Receive6(value0) {
          this.value0 = value0;
        }
        ;
        Receive6.create = function(value0) {
          return new Receive6(value0);
        };
        return Receive6;
      }();
      Update = /* @__PURE__ */ function() {
        function Update2(value0) {
          this.value0 = value0;
        }
        ;
        Update2.create = function(value0) {
          return new Update2(value0);
        };
        return Update2;
      }();
      Raise3 = /* @__PURE__ */ function() {
        function Raise4(value0) {
          this.value0 = value0;
        }
        ;
        Raise4.create = function(value0) {
          return new Raise4(value0);
        };
        return Raise4;
      }();
      subscribe3 = function(dictMonadStore) {
        var emitSelected2 = emitSelected(monadStoreHalogenM(dictMonadStore));
        return function(selector) {
          return function(action2) {
            return bind10(emitSelected2(selector))(function(emitter) {
              return $$void7(subscribe2(map34(action2)(emitter)));
            });
          };
        };
      };
      connect = function(dictMonadEffect) {
        return function(dictMonadStore) {
          var subscribe1 = subscribe3(dictMonadStore);
          var getStore3 = getStore(monadStoreHalogenM(dictMonadStore));
          return function(v) {
            return function(component7) {
              var renderInner = function(input3) {
                return function(context) {
                  return slot3($$Proxy.value)(unit)(component7)({
                    input: input3,
                    context
                  })(Raise3.create);
                };
              };
              var render3 = function(state3) {
                if (state3.context instanceof Just) {
                  return renderInner(state3.input)(state3.context.value0);
                }
                ;
                return text("");
              };
              var initialState = function(input3) {
                return {
                  context: Nothing.value,
                  initialized: false,
                  input: input3
                };
              };
              var handleAction2 = function(v1) {
                if (v1 instanceof Initialize4) {
                  return discard5(subscribe1(v)(Update.create))(function() {
                    return bind10(map112(v.select)(getStore3))(function(context) {
                      return modify_6(function(v2) {
                        var $39 = {};
                        for (var $40 in v2) {
                          if ({}.hasOwnProperty.call(v2, $40)) {
                            $39[$40] = v2[$40];
                          }
                          ;
                        }
                        ;
                        $39.context = new Just(context);
                        return $39;
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof Receive4) {
                  return bind10(gets3(function(v2) {
                    return v2.input;
                  }))(function(oldInput) {
                    return unless3(unsafeRefEq(oldInput)(v1.value0))(modify_6(function(v2) {
                      var $42 = {};
                      for (var $43 in v2) {
                        if ({}.hasOwnProperty.call(v2, $43)) {
                          $42[$43] = v2[$43];
                        }
                        ;
                      }
                      ;
                      $42.input = v1.value0;
                      return $42;
                    }));
                  });
                }
                ;
                if (v1 instanceof Update) {
                  return bind10(gets3(function(v2) {
                    return v2.context;
                  }))(function(v2) {
                    if (v2 instanceof Just && unsafeRefEq(v2.value0)(v1.value0)) {
                      return pure14(unit);
                    }
                    ;
                    return modify_6(function(v3) {
                      var $48 = {};
                      for (var $49 in v3) {
                        if ({}.hasOwnProperty.call(v3, $49)) {
                          $48[$49] = v3[$49];
                        }
                        ;
                      }
                      ;
                      $48.context = new Just(v1.value0);
                      return $48;
                    });
                  });
                }
                ;
                if (v1 instanceof Raise3) {
                  return raise(v1.value0);
                }
                ;
                throw new Error("Failed pattern match at Halogen.Store.Connect (line 74, column 18 - line 91, column 21): " + [v1.constructor.name]);
              };
              return mkComponent({
                initialState,
                render: render3,
                "eval": mkEval({
                  handleAction: handleAction2,
                  handleQuery: query4($$Proxy.value)(unit),
                  initialize: new Just(Initialize4.value),
                  finalize: Nothing.value,
                  receive: function($53) {
                    return Just.create(Receive4.create($53));
                  }
                })
              });
            };
          };
        };
      };
    }
  });

  // output/Data.Semiring.Free/index.js
  var init_Data_Semiring = __esm({
    "output/Data.Semiring.Free/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data15();
      init_Data13();
      init_Data16();
      init_Data29();
    }
  });

  // output/Data.String.NonEmpty.Internal/index.js
  var init_Data_String_NonEmpty = __esm({
    "output/Data.String.NonEmpty.Internal/index.js"() {
      init_Control5();
      init_Data9();
      init_Data25();
      init_Data19();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
      init_Data_String2();
      init_Data_String3();
      init_Data5();
    }
  });

  // output/Data.Validation.Semiring/index.js
  var init_Data_Validation2 = __esm({
    "output/Data.Validation.Semiring/index.js"() {
      init_Control4();
      init_Control3();
      init_Data23();
      init_Data20();
      init_Data9();
      init_Data2();
      init_Data4();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data6();
      init_Data16();
    }
  });

  // output/Routing.Match.Error/index.js
  var init_Routing_Match = __esm({
    "output/Routing.Match.Error/index.js"() {
    }
  });

  // output/Routing.Types/index.js
  var init_Routing2 = __esm({
    "output/Routing.Types/index.js"() {
      init_Data9();
      init_Data_Map();
      init_Data15();
      init_Data11();
    }
  });

  // output/Routing.Match/index.js
  var init_Routing3 = __esm({
    "output/Routing.Match/index.js"() {
      init_Control7();
      init_Control4();
      init_Control5();
      init_Control2();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data43();
      init_Data34();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data24();
      init_Data42();
      init_Data15();
      init_Data6();
      init_Data_Semiring();
      init_Data_String_NonEmpty();
      init_Data22();
      init_Data3();
      init_Data_Validation2();
      init_Routing_Match();
      init_Routing2();
    }
  });

  // output/Routing.Parser/index.js
  var init_Routing4 = __esm({
    "output/Routing.Parser/index.js"() {
      init_Control13();
      init_Control3();
      init_Control5();
      init_Data40();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data15();
      init_Data13();
      init_Data_String4();
      init_Data_String3();
      init_Data29();
      init_Data22();
      init_Routing2();
    }
  });

  // output/Routing/index.js
  var init_Routing5 = __esm({
    "output/Routing/index.js"() {
      init_Data19();
      init_JSURI();
      init_Routing3();
      init_Routing4();
    }
  });

  // output/Web.HTML.Event.HashChangeEvent.EventTypes/index.js
  var hashchange;
  var init_Web_HTML_Event_HashChangeEvent = __esm({
    "output/Web.HTML.Event.HashChangeEvent.EventTypes/index.js"() {
      hashchange = "hashchange";
    }
  });

  // output/Routing.Hash/index.js
  var bind11, map35, bindFlipped7, join3, apply4, pure15, voidRight2, setHash2, getHash, foldHashes, matchesWith;
  var init_Routing6 = __esm({
    "output/Routing.Hash/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data_String2();
      init_Effect();
      init_Effect2();
      init_Routing5();
      init_Web_Event();
      init_Web2();
      init_Web_HTML_Event_HashChangeEvent();
      init_Web_HTML67();
      init_Web_HTML69();
      init_Routing5();
      bind11 = /* @__PURE__ */ bind(bindEffect);
      map35 = /* @__PURE__ */ map(functorEffect);
      bindFlipped7 = /* @__PURE__ */ bindFlipped(bindEffect);
      join3 = /* @__PURE__ */ join(bindEffect);
      apply4 = /* @__PURE__ */ apply(applyEffect);
      pure15 = /* @__PURE__ */ pure(applicativeEffect);
      voidRight2 = /* @__PURE__ */ voidRight(functorEffect);
      setHash2 = function(h) {
        return bind11(bind11(windowImpl)(location))(setHash(h));
      };
      getHash = /* @__PURE__ */ bind11(/* @__PURE__ */ bind11(windowImpl)(location))(/* @__PURE__ */ function() {
        var $16 = map35(function() {
          var $18 = fromMaybe("");
          var $19 = stripPrefix("#");
          return function($20) {
            return $18($19($20));
          };
        }());
        return function($17) {
          return $16(hash3($17));
        };
      }());
      foldHashes = function(cb) {
        return function(init4) {
          return function __do4() {
            var ref2 = bindFlipped7($$new)(bindFlipped7(init4)(getHash))();
            var win = map35(toEventTarget)(windowImpl)();
            var listener = eventListener(function(v) {
              return bindFlipped7(flip(write)(ref2))(join3(apply4(map35(cb)(read(ref2)))(getHash)));
            })();
            addEventListener2(hashchange)(listener)(false)(win)();
            return removeEventListener2(hashchange)(listener)(false)(win);
          };
        };
      };
      matchesWith = function(dictFoldable) {
        var indexl2 = indexl(dictFoldable);
        return function(parser) {
          return function(cb) {
            var go2 = function(a2) {
              var $21 = maybe(pure15(a2))(function(b2) {
                return voidRight2(new Just(b2))(cb(a2)(b2));
              });
              var $22 = indexl2(0);
              return function($23) {
                return $21($22(parser($23)));
              };
            };
            return foldHashes(go2)(go2(Nothing.value));
          };
        };
      };
    }
  });

  // output/App.Component.Root/index.js
  var slot_3, slot_1, slot_22, slot_32, slot_4, bind14, get5, discard6, show8, credentialsIsSymbol, emailIsSymbol2, show15, show23, when4, notEq2, pure16, modify_7, map36, selectEq2, Navigate, Initialize5, Receive5, component5;
  var init_App_Component = __esm({
    "output/App.Component.Root/index.js"() {
      init_App_Capability2();
      init_App_Capability3();
      init_App_Capability();
      init_App_Data2();
      init_App_Data3();
      init_App_Data();
      init_App_Data4();
      init_App_Page();
      init_App_Page2();
      init_App_Page3();
      init_App_Page_Register3();
      init_Control4();
      init_Control5();
      init_Control_Monad_State();
      init_Data();
      init_Data20();
      init_Data9();
      init_Data4();
      init_Data19();
      init_Data15();
      init_Data16();
      init_Data3();
      init_Effect4();
      init_Halogen3();
      init_Halogen5();
      init_Halogen_HTML();
      init_Halogen_HTML3();
      init_Halogen_Query2();
      init_Halogen_Store3();
      init_Halogen_Store();
      init_Routing();
      init_Routing6();
      init_Type();
      init_Undefined();
      slot_3 = /* @__PURE__ */ slot_();
      slot_1 = /* @__PURE__ */ slot_3({
        reflectSymbol: function() {
          return "home";
        }
      })(ordUnit);
      slot_22 = /* @__PURE__ */ slot_3({
        reflectSymbol: function() {
          return "login";
        }
      })(ordUnit);
      slot_32 = /* @__PURE__ */ slot_3({
        reflectSymbol: function() {
          return "register";
        }
      })(ordUnit);
      slot_4 = /* @__PURE__ */ slot_3({
        reflectSymbol: function() {
          return "file";
        }
      })(ordUnit);
      bind14 = /* @__PURE__ */ bind(bindHalogenM);
      get5 = /* @__PURE__ */ get(monadStateHalogenM);
      discard6 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
      show8 = /* @__PURE__ */ show(/* @__PURE__ */ showMaybe(showRoute));
      credentialsIsSymbol = {
        reflectSymbol: function() {
          return "credentials";
        }
      };
      emailIsSymbol2 = {
        reflectSymbol: function() {
          return "email";
        }
      };
      show15 = /* @__PURE__ */ show(/* @__PURE__ */ showMaybe(/* @__PURE__ */ showRecord()()(/* @__PURE__ */ showRecordFieldsCons(credentialsIsSymbol)(/* @__PURE__ */ showRecordFieldsConsNil(emailIsSymbol2)(showEmail))(showCredentials))));
      show23 = /* @__PURE__ */ show(showRoute);
      when4 = /* @__PURE__ */ when(applicativeHalogenM);
      notEq2 = /* @__PURE__ */ notEq(/* @__PURE__ */ eqMaybe(eqRoute));
      pure16 = /* @__PURE__ */ pure(applicativeHalogenM);
      modify_7 = /* @__PURE__ */ modify_2(monadStateHalogenM);
      map36 = /* @__PURE__ */ map(functorHalogenM);
      selectEq2 = /* @__PURE__ */ selectEq(/* @__PURE__ */ eqMaybe(/* @__PURE__ */ eqRec()(/* @__PURE__ */ eqRowCons(/* @__PURE__ */ eqRowCons(eqRowNil)()(emailIsSymbol2)(eqEmail))()(credentialsIsSymbol)(eqCredentials))));
      Navigate = /* @__PURE__ */ function() {
        function Navigate2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        Navigate2.create = function(value0) {
          return function(value1) {
            return new Navigate2(value0, value1);
          };
        };
        return Navigate2;
      }();
      Initialize5 = /* @__PURE__ */ function() {
        function Initialize6() {
        }
        ;
        Initialize6.value = new Initialize6();
        return Initialize6;
      }();
      Receive5 = /* @__PURE__ */ function() {
        function Receive6(value0) {
          this.value0 = value0;
        }
        ;
        Receive6.create = function(value0) {
          return new Receive6(value0);
        };
        return Receive6;
      }();
      component5 = function(dictMonadAff) {
        var component1 = component4(dictMonadAff);
        var MonadEffect0 = dictMonadAff.MonadEffect0();
        var liftEffect11 = liftEffect(monadEffectHalogenM(MonadEffect0));
        var connect2 = connect(MonadEffect0);
        return function(dictMonadStore) {
          var component22 = component2(dictMonadStore)(dictMonadAff);
          var component32 = component3(dictMonadStore)(dictMonadAff);
          var component42 = component(dictMonadStore)(dictMonadAff);
          var connect1 = connect2(dictMonadStore);
          return function(dictNow) {
            var nowHalogenM2 = nowHalogenM(dictNow);
            return function(dictLogMessages) {
              var component52 = component42(dictLogMessages)(dictNow);
              var log4 = log2(logMessagesHalogenM(dictLogMessages))(nowHalogenM2);
              return function(dictNavigate) {
                var component62 = component32(dictNavigate)(dictLogMessages)(dictNow);
                var navigate2 = navigate(navigateHalogenM(dictNavigate));
                var render3 = function(v) {
                  if (v.route instanceof Just) {
                    if (v.route.value0 instanceof Home) {
                      return slot_1($$Proxy.value)(unit)(component22)(unit);
                    }
                    ;
                    if (v.route.value0 instanceof Login) {
                      return slot_22($$Proxy.value)(unit)(component62)({
                        redirect: true
                      });
                    }
                    ;
                    if (v.route.value0 instanceof Register) {
                      return slot_32($$Proxy.value)(unit)(component1)(unit);
                    }
                    ;
                    if (v.route.value0 instanceof File2) {
                      return slot_4($$Proxy.value)(unit)(component52)(unit);
                    }
                    ;
                    if (v.route.value0 instanceof EmailConfirmation) {
                      return undefined2;
                    }
                    ;
                    throw new Error("Failed pattern match at App.Component.Root (line 119, column 5 - line 124, column 39): " + [v.route.value0.constructor.name]);
                  }
                  ;
                  return div_([text("Oh no! That page wasn't found.")]);
                };
                var handleQuery = function(v) {
                  return bind14(get5)(function(v1) {
                    return discard6(log4(Debug.value)("App.Component.Router,line 88: route:" + (show8(v1.route) + (", user:" + (show15(v1.currentUser) + (", destination:" + show23(v.value0)))))))(function() {
                      return discard6(when4(notEq2(v1.route)(new Just(v.value0)))(function() {
                        if (v.value0 instanceof Login) {
                          if (isJust(v1.currentUser)) {
                            return pure16(unit);
                          }
                          ;
                          if (otherwise) {
                            return modify_7(function(v2) {
                              var $100 = {};
                              for (var $101 in v2) {
                                if ({}.hasOwnProperty.call(v2, $101)) {
                                  $100[$101] = v2[$101];
                                }
                                ;
                              }
                              ;
                              $100.route = new Just(v.value0);
                              return $100;
                            });
                          }
                          ;
                        }
                        ;
                        if (v.value0 instanceof Register) {
                          if (isJust(v1.currentUser)) {
                            return pure16(unit);
                          }
                          ;
                          if (otherwise) {
                            return modify_7(function(v2) {
                              var $103 = {};
                              for (var $104 in v2) {
                                if ({}.hasOwnProperty.call(v2, $104)) {
                                  $103[$104] = v2[$104];
                                }
                                ;
                              }
                              ;
                              $103.route = new Just(v.value0);
                              return $103;
                            });
                          }
                          ;
                        }
                        ;
                        if (v.value0 instanceof EmailConfirmation) {
                          if (isJust(v1.currentUser)) {
                            return pure16(unit);
                          }
                          ;
                          if (otherwise) {
                            return modify_7(function(v2) {
                              var $106 = {};
                              for (var $107 in v2) {
                                if ({}.hasOwnProperty.call(v2, $107)) {
                                  $106[$107] = v2[$107];
                                }
                                ;
                              }
                              ;
                              $106.route = new Just(v.value0);
                              return $106;
                            });
                          }
                          ;
                        }
                        ;
                        return modify_7(function(v2) {
                          var $110 = {};
                          for (var $111 in v2) {
                            if ({}.hasOwnProperty.call(v2, $111)) {
                              $110[$111] = v2[$111];
                            }
                            ;
                          }
                          ;
                          $110.route = new Just(v.value0);
                          return $110;
                        });
                      }()))(function() {
                        return pure16(new Just(v.value1));
                      });
                    });
                  });
                };
                var handleAction2 = function(v) {
                  if (v instanceof Initialize5) {
                    return bind14(map36(function() {
                      var $125 = parse2(routeCodec);
                      return function($126) {
                        return hush($125($126));
                      };
                    }())(liftEffect11(getHash)))(function(initialRoute) {
                      return navigate2(fromMaybe(Home.value)(initialRoute));
                    });
                  }
                  ;
                  if (v instanceof Receive5) {
                    return modify_7(function(v1) {
                      var $118 = {};
                      for (var $119 in v1) {
                        if ({}.hasOwnProperty.call(v1, $119)) {
                          $118[$119] = v1[$119];
                        }
                        ;
                      }
                      ;
                      $118.currentUser = v.value0.context;
                      return $118;
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at App.Component.Root (line 82, column 3 - line 82, column 75): " + [v.constructor.name]);
                };
                return connect1(selectEq2(function(v) {
                  return v.currentUser;
                }))(mkComponent({
                  initialState: function(v) {
                    return {
                      route: Nothing.value,
                      currentUser: v.context
                    };
                  },
                  render: render3,
                  "eval": mkEval({
                    handleAction: handleAction2,
                    handleQuery,
                    receive: function($127) {
                      return Just.create(Receive5.create($127));
                    },
                    initialize: new Just(Initialize5.value),
                    finalize: defaultEval.finalize
                  })
                }));
              };
            };
          };
        };
      };
    }
  });

  // output/Data.MediaType.Common/index.js
  var applicationJSON, applicationFormURLEncoded;
  var init_Data_MediaType = __esm({
    "output/Data.MediaType.Common/index.js"() {
      applicationJSON = "application/json";
      applicationFormURLEncoded = "application/x-www-form-urlencoded";
    }
  });

  // output/Affjax.RequestBody/index.js
  var ArrayView, Blob2, Document, $$String, FormData, FormURLEncoded, Json, toMediaType;
  var init_Affjax = __esm({
    "output/Affjax.RequestBody/index.js"() {
      init_Data19();
      init_Data_MediaType();
      ArrayView = /* @__PURE__ */ function() {
        function ArrayView2(value0) {
          this.value0 = value0;
        }
        ;
        ArrayView2.create = function(value0) {
          return new ArrayView2(value0);
        };
        return ArrayView2;
      }();
      Blob2 = /* @__PURE__ */ function() {
        function Blob4(value0) {
          this.value0 = value0;
        }
        ;
        Blob4.create = function(value0) {
          return new Blob4(value0);
        };
        return Blob4;
      }();
      Document = /* @__PURE__ */ function() {
        function Document3(value0) {
          this.value0 = value0;
        }
        ;
        Document3.create = function(value0) {
          return new Document3(value0);
        };
        return Document3;
      }();
      $$String = /* @__PURE__ */ function() {
        function $$String3(value0) {
          this.value0 = value0;
        }
        ;
        $$String3.create = function(value0) {
          return new $$String3(value0);
        };
        return $$String3;
      }();
      FormData = /* @__PURE__ */ function() {
        function FormData2(value0) {
          this.value0 = value0;
        }
        ;
        FormData2.create = function(value0) {
          return new FormData2(value0);
        };
        return FormData2;
      }();
      FormURLEncoded = /* @__PURE__ */ function() {
        function FormURLEncoded2(value0) {
          this.value0 = value0;
        }
        ;
        FormURLEncoded2.create = function(value0) {
          return new FormURLEncoded2(value0);
        };
        return FormURLEncoded2;
      }();
      Json = /* @__PURE__ */ function() {
        function Json3(value0) {
          this.value0 = value0;
        }
        ;
        Json3.create = function(value0) {
          return new Json3(value0);
        };
        return Json3;
      }();
      toMediaType = function(v) {
        if (v instanceof FormURLEncoded) {
          return new Just(applicationFormURLEncoded);
        }
        ;
        if (v instanceof Json) {
          return new Just(applicationJSON);
        }
        ;
        return Nothing.value;
      };
    }
  });

  // output/Affjax.ResponseFormat/index.js
  var identity20, $$ArrayBuffer, Blob3, Document2, Json2, $$String2, Ignore, toResponseType, toMediaType2, json, ignore;
  var init_Affjax2 = __esm({
    "output/Affjax.ResponseFormat/index.js"() {
      init_Control2();
      init_Data19();
      init_Data_MediaType();
      identity20 = /* @__PURE__ */ identity(categoryFn);
      $$ArrayBuffer = /* @__PURE__ */ function() {
        function $$ArrayBuffer2(value0) {
          this.value0 = value0;
        }
        ;
        $$ArrayBuffer2.create = function(value0) {
          return new $$ArrayBuffer2(value0);
        };
        return $$ArrayBuffer2;
      }();
      Blob3 = /* @__PURE__ */ function() {
        function Blob4(value0) {
          this.value0 = value0;
        }
        ;
        Blob4.create = function(value0) {
          return new Blob4(value0);
        };
        return Blob4;
      }();
      Document2 = /* @__PURE__ */ function() {
        function Document3(value0) {
          this.value0 = value0;
        }
        ;
        Document3.create = function(value0) {
          return new Document3(value0);
        };
        return Document3;
      }();
      Json2 = /* @__PURE__ */ function() {
        function Json3(value0) {
          this.value0 = value0;
        }
        ;
        Json3.create = function(value0) {
          return new Json3(value0);
        };
        return Json3;
      }();
      $$String2 = /* @__PURE__ */ function() {
        function $$String3(value0) {
          this.value0 = value0;
        }
        ;
        $$String3.create = function(value0) {
          return new $$String3(value0);
        };
        return $$String3;
      }();
      Ignore = /* @__PURE__ */ function() {
        function Ignore2(value0) {
          this.value0 = value0;
        }
        ;
        Ignore2.create = function(value0) {
          return new Ignore2(value0);
        };
        return Ignore2;
      }();
      toResponseType = function(v) {
        if (v instanceof $$ArrayBuffer) {
          return "arraybuffer";
        }
        ;
        if (v instanceof Blob3) {
          return "blob";
        }
        ;
        if (v instanceof Document2) {
          return "document";
        }
        ;
        if (v instanceof Json2) {
          return "text";
        }
        ;
        if (v instanceof $$String2) {
          return "text";
        }
        ;
        if (v instanceof Ignore) {
          return "";
        }
        ;
        throw new Error("Failed pattern match at Affjax.ResponseFormat (line 44, column 3 - line 50, column 19): " + [v.constructor.name]);
      };
      toMediaType2 = function(v) {
        if (v instanceof Json2) {
          return new Just(applicationJSON);
        }
        ;
        return Nothing.value;
      };
      json = /* @__PURE__ */ function() {
        return new Json2(identity20);
      }();
      ignore = /* @__PURE__ */ function() {
        return new Ignore(identity20);
      }();
    }
  });

  // output/Affjax.Web/foreign.js
  var driver;
  var init_foreign129 = __esm({
    "output/Affjax.Web/foreign.js"() {
      driver = {
        newXHR: function() {
          return new XMLHttpRequest();
        },
        fixupUrl: function(url) {
          return url || "/";
        }
      };
    }
  });

  // output/Affjax/foreign.js
  function _ajax(platformSpecificDriver, timeoutErrorMessageIdent, requestFailedMessageIdent, mkHeader, options2) {
    return function(errback, callback) {
      var xhr = platformSpecificDriver.newXHR();
      var fixedUrl = platformSpecificDriver.fixupUrl(options2.url, xhr);
      xhr.open(options2.method || "GET", fixedUrl, true, options2.username, options2.password);
      if (options2.headers) {
        try {
          for (var i2 = 0, header2; (header2 = options2.headers[i2]) != null; i2++) {
            xhr.setRequestHeader(header2.field, header2.value);
          }
        } catch (e) {
          errback(e);
        }
      }
      var onerror = function(msgIdent) {
        return function() {
          errback(new Error(msgIdent));
        };
      };
      xhr.onerror = onerror(requestFailedMessageIdent);
      xhr.ontimeout = onerror(timeoutErrorMessageIdent);
      xhr.onload = function() {
        callback({
          status: xhr.status,
          statusText: xhr.statusText,
          headers: xhr.getAllResponseHeaders().split("\r\n").filter(function(header3) {
            return header3.length > 0;
          }).map(function(header3) {
            var i3 = header3.indexOf(":");
            return mkHeader(header3.substring(0, i3))(header3.substring(i3 + 2));
          }),
          body: xhr.response
        });
      };
      xhr.responseType = options2.responseType;
      xhr.withCredentials = options2.withCredentials;
      xhr.timeout = options2.timeout;
      xhr.send(options2.content);
      return function(error4, cancelErrback, cancelCallback) {
        try {
          xhr.abort();
        } catch (e) {
          return cancelErrback(e);
        }
        return cancelCallback();
      };
    };
  }
  var init_foreign130 = __esm({
    "output/Affjax/foreign.js"() {
    }
  });

  // output/Affjax.RequestHeader/index.js
  var unwrap11, Accept, ContentType, RequestHeader, value16, name15;
  var init_Affjax3 = __esm({
    "output/Affjax.RequestHeader/index.js"() {
      init_Data9();
      init_Data51();
      init_Data24();
      init_Data15();
      init_Data11();
      init_Data16();
      unwrap11 = /* @__PURE__ */ unwrap();
      Accept = /* @__PURE__ */ function() {
        function Accept2(value0) {
          this.value0 = value0;
        }
        ;
        Accept2.create = function(value0) {
          return new Accept2(value0);
        };
        return Accept2;
      }();
      ContentType = /* @__PURE__ */ function() {
        function ContentType2(value0) {
          this.value0 = value0;
        }
        ;
        ContentType2.create = function(value0) {
          return new ContentType2(value0);
        };
        return ContentType2;
      }();
      RequestHeader = /* @__PURE__ */ function() {
        function RequestHeader2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        RequestHeader2.create = function(value0) {
          return function(value1) {
            return new RequestHeader2(value0, value1);
          };
        };
        return RequestHeader2;
      }();
      value16 = function(v) {
        if (v instanceof Accept) {
          return unwrap11(v.value0);
        }
        ;
        if (v instanceof ContentType) {
          return unwrap11(v.value0);
        }
        ;
        if (v instanceof RequestHeader) {
          return v.value1;
        }
        ;
        throw new Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [v.constructor.name]);
      };
      name15 = function(v) {
        if (v instanceof Accept) {
          return "Accept";
        }
        ;
        if (v instanceof ContentType) {
          return "Content-Type";
        }
        ;
        if (v instanceof RequestHeader) {
          return v.value0;
        }
        ;
        throw new Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [v.constructor.name]);
      };
    }
  });

  // output/Affjax.ResponseHeader/index.js
  var ResponseHeader;
  var init_Affjax4 = __esm({
    "output/Affjax.ResponseHeader/index.js"() {
      init_Data15();
      init_Data11();
      init_Data16();
      ResponseHeader = /* @__PURE__ */ function() {
        function ResponseHeader2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        ResponseHeader2.create = function(value0) {
          return function(value1) {
            return new ResponseHeader2(value0, value1);
          };
        };
        return ResponseHeader2;
      }();
    }
  });

  // output/Data.Argonaut.Parser/foreign.js
  function _jsonParser(fail4, succ2, s) {
    try {
      return succ2(JSON.parse(s));
    } catch (e) {
      return fail4(e.message);
    }
  }
  var init_foreign131 = __esm({
    "output/Data.Argonaut.Parser/foreign.js"() {
    }
  });

  // output/Data.Argonaut.Parser/index.js
  var jsonParser;
  var init_Data_Argonaut2 = __esm({
    "output/Data.Argonaut.Parser/index.js"() {
      init_foreign131();
      init_Data20();
      jsonParser = function(j) {
        return _jsonParser(Left.create, Right.create, j);
      };
    }
  });

  // output/Data.FormURLEncoded/index.js
  var apply5, map37, traverse4, toArray3, encode2;
  var init_Data56 = __esm({
    "output/Data.FormURLEncoded/index.js"() {
      init_Control4();
      init_Control3();
      init_Data9();
      init_Data4();
      init_Data19();
      init_Data14();
      init_Data15();
      init_Data13();
      init_Data16();
      init_Data_String3();
      init_Data29();
      init_Data22();
      init_JSURI();
      apply5 = /* @__PURE__ */ apply(applyMaybe);
      map37 = /* @__PURE__ */ map(functorMaybe);
      traverse4 = /* @__PURE__ */ traverse(traversableArray)(applicativeMaybe);
      toArray3 = function(v) {
        return v;
      };
      encode2 = /* @__PURE__ */ function() {
        var encodePart = function(v) {
          if (v.value1 instanceof Nothing) {
            return encodeFormURLComponent(v.value0);
          }
          ;
          if (v.value1 instanceof Just) {
            return apply5(map37(function(key) {
              return function(val) {
                return key + ("=" + val);
              };
            })(encodeFormURLComponent(v.value0)))(encodeFormURLComponent(v.value1.value0));
          }
          ;
          throw new Error("Failed pattern match at Data.FormURLEncoded (line 37, column 16 - line 39, column 114): " + [v.constructor.name]);
        };
        var $37 = map37(joinWith("&"));
        var $38 = traverse4(encodePart);
        return function($39) {
          return $37($38(toArray3($39)));
        };
      }();
    }
  });

  // output/Data.HTTP.Method/index.js
  var OPTIONS, GET2, HEAD, POST2, PUT, DELETE, TRACE, CONNECT, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK, UNLOCK, PATCH, unCustomMethod, showMethod, print7;
  var init_Data_HTTP = __esm({
    "output/Data.HTTP.Method/index.js"() {
      init_Data20();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data_String3();
      OPTIONS = /* @__PURE__ */ function() {
        function OPTIONS2() {
        }
        ;
        OPTIONS2.value = new OPTIONS2();
        return OPTIONS2;
      }();
      GET2 = /* @__PURE__ */ function() {
        function GET3() {
        }
        ;
        GET3.value = new GET3();
        return GET3;
      }();
      HEAD = /* @__PURE__ */ function() {
        function HEAD2() {
        }
        ;
        HEAD2.value = new HEAD2();
        return HEAD2;
      }();
      POST2 = /* @__PURE__ */ function() {
        function POST3() {
        }
        ;
        POST3.value = new POST3();
        return POST3;
      }();
      PUT = /* @__PURE__ */ function() {
        function PUT2() {
        }
        ;
        PUT2.value = new PUT2();
        return PUT2;
      }();
      DELETE = /* @__PURE__ */ function() {
        function DELETE2() {
        }
        ;
        DELETE2.value = new DELETE2();
        return DELETE2;
      }();
      TRACE = /* @__PURE__ */ function() {
        function TRACE2() {
        }
        ;
        TRACE2.value = new TRACE2();
        return TRACE2;
      }();
      CONNECT = /* @__PURE__ */ function() {
        function CONNECT2() {
        }
        ;
        CONNECT2.value = new CONNECT2();
        return CONNECT2;
      }();
      PROPFIND = /* @__PURE__ */ function() {
        function PROPFIND2() {
        }
        ;
        PROPFIND2.value = new PROPFIND2();
        return PROPFIND2;
      }();
      PROPPATCH = /* @__PURE__ */ function() {
        function PROPPATCH2() {
        }
        ;
        PROPPATCH2.value = new PROPPATCH2();
        return PROPPATCH2;
      }();
      MKCOL = /* @__PURE__ */ function() {
        function MKCOL2() {
        }
        ;
        MKCOL2.value = new MKCOL2();
        return MKCOL2;
      }();
      COPY = /* @__PURE__ */ function() {
        function COPY2() {
        }
        ;
        COPY2.value = new COPY2();
        return COPY2;
      }();
      MOVE = /* @__PURE__ */ function() {
        function MOVE2() {
        }
        ;
        MOVE2.value = new MOVE2();
        return MOVE2;
      }();
      LOCK = /* @__PURE__ */ function() {
        function LOCK2() {
        }
        ;
        LOCK2.value = new LOCK2();
        return LOCK2;
      }();
      UNLOCK = /* @__PURE__ */ function() {
        function UNLOCK2() {
        }
        ;
        UNLOCK2.value = new UNLOCK2();
        return UNLOCK2;
      }();
      PATCH = /* @__PURE__ */ function() {
        function PATCH2() {
        }
        ;
        PATCH2.value = new PATCH2();
        return PATCH2;
      }();
      unCustomMethod = function(v) {
        return v;
      };
      showMethod = {
        show: function(v) {
          if (v instanceof OPTIONS) {
            return "OPTIONS";
          }
          ;
          if (v instanceof GET2) {
            return "GET";
          }
          ;
          if (v instanceof HEAD) {
            return "HEAD";
          }
          ;
          if (v instanceof POST2) {
            return "POST";
          }
          ;
          if (v instanceof PUT) {
            return "PUT";
          }
          ;
          if (v instanceof DELETE) {
            return "DELETE";
          }
          ;
          if (v instanceof TRACE) {
            return "TRACE";
          }
          ;
          if (v instanceof CONNECT) {
            return "CONNECT";
          }
          ;
          if (v instanceof PROPFIND) {
            return "PROPFIND";
          }
          ;
          if (v instanceof PROPPATCH) {
            return "PROPPATCH";
          }
          ;
          if (v instanceof MKCOL) {
            return "MKCOL";
          }
          ;
          if (v instanceof COPY) {
            return "COPY";
          }
          ;
          if (v instanceof MOVE) {
            return "MOVE";
          }
          ;
          if (v instanceof LOCK) {
            return "LOCK";
          }
          ;
          if (v instanceof UNLOCK) {
            return "UNLOCK";
          }
          ;
          if (v instanceof PATCH) {
            return "PATCH";
          }
          ;
          throw new Error("Failed pattern match at Data.HTTP.Method (line 43, column 1 - line 59, column 23): " + [v.constructor.name]);
        }
      };
      print7 = /* @__PURE__ */ either(/* @__PURE__ */ show(showMethod))(unCustomMethod);
    }
  });

  // output/Affjax/index.js
  var pure17, fail3, unsafeReadTagged2, alt8, composeKleisliFlipped3, map38, any3, eq4, bindFlipped8, map113, mapFlipped3, $$try6, pure18, RequestContentError, ResponseBodyError, TimeoutError, RequestFailedError, XHROtherError, request3, defaultRequest, post;
  var init_Affjax5 = __esm({
    "output/Affjax/index.js"() {
      init_foreign130();
      init_Affjax();
      init_Affjax3();
      init_Affjax2();
      init_Affjax4();
      init_Control7();
      init_Control4();
      init_Control5();
      init_Control_Monad_Error();
      init_Control_Monad3();
      init_Control_Monad_Except();
      init_Data_Argonaut();
      init_Data_Argonaut2();
      init_Data40();
      init_Data20();
      init_Data9();
      init_Data25();
      init_Data56();
      init_Data2();
      init_Data4();
      init_Data_HTTP();
      init_Data21();
      init_Data26();
      init_Data_List3();
      init_Data_List();
      init_Data19();
      init_Data52();
      init_Data3();
      init_Effect6();
      init_Effect_Aff2();
      init_Effect3();
      init_Foreign2();
      pure17 = /* @__PURE__ */ pure(/* @__PURE__ */ applicativeExceptT(monadIdentity));
      fail3 = /* @__PURE__ */ fail2(monadIdentity);
      unsafeReadTagged2 = /* @__PURE__ */ unsafeReadTagged(monadIdentity);
      alt8 = /* @__PURE__ */ alt(/* @__PURE__ */ altExceptT(semigroupNonEmptyList)(monadIdentity));
      composeKleisliFlipped3 = /* @__PURE__ */ composeKleisliFlipped(/* @__PURE__ */ bindExceptT(monadIdentity));
      map38 = /* @__PURE__ */ map(functorMaybe);
      any3 = /* @__PURE__ */ any(foldableArray)(heytingAlgebraBoolean);
      eq4 = /* @__PURE__ */ eq(eqString);
      bindFlipped8 = /* @__PURE__ */ bindFlipped(bindMaybe);
      map113 = /* @__PURE__ */ map(functorArray);
      mapFlipped3 = /* @__PURE__ */ mapFlipped(functorAff);
      $$try6 = /* @__PURE__ */ $$try(monadErrorAff);
      pure18 = /* @__PURE__ */ pure(applicativeAff);
      RequestContentError = /* @__PURE__ */ function() {
        function RequestContentError2(value0) {
          this.value0 = value0;
        }
        ;
        RequestContentError2.create = function(value0) {
          return new RequestContentError2(value0);
        };
        return RequestContentError2;
      }();
      ResponseBodyError = /* @__PURE__ */ function() {
        function ResponseBodyError2(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
        }
        ;
        ResponseBodyError2.create = function(value0) {
          return function(value1) {
            return new ResponseBodyError2(value0, value1);
          };
        };
        return ResponseBodyError2;
      }();
      TimeoutError = /* @__PURE__ */ function() {
        function TimeoutError2() {
        }
        ;
        TimeoutError2.value = new TimeoutError2();
        return TimeoutError2;
      }();
      RequestFailedError = /* @__PURE__ */ function() {
        function RequestFailedError2() {
        }
        ;
        RequestFailedError2.value = new RequestFailedError2();
        return RequestFailedError2;
      }();
      XHROtherError = /* @__PURE__ */ function() {
        function XHROtherError2(value0) {
          this.value0 = value0;
        }
        ;
        XHROtherError2.create = function(value0) {
          return new XHROtherError2(value0);
        };
        return XHROtherError2;
      }();
      request3 = function(driver2) {
        return function(req) {
          var parseJSON = function(v2) {
            if (v2 === "") {
              return pure17(jsonEmptyObject);
            }
            ;
            return either(function($74) {
              return fail3(ForeignError.create($74));
            })(pure17)(jsonParser(v2));
          };
          var fromResponse = function() {
            if (req.responseFormat instanceof $$ArrayBuffer) {
              return unsafeReadTagged2("ArrayBuffer");
            }
            ;
            if (req.responseFormat instanceof Blob3) {
              return unsafeReadTagged2("Blob");
            }
            ;
            if (req.responseFormat instanceof Document2) {
              return function(x) {
                return alt8(unsafeReadTagged2("Document")(x))(alt8(unsafeReadTagged2("XMLDocument")(x))(unsafeReadTagged2("HTMLDocument")(x)));
              };
            }
            ;
            if (req.responseFormat instanceof Json2) {
              return composeKleisliFlipped3(function($75) {
                return req.responseFormat.value0(parseJSON($75));
              })(unsafeReadTagged2("String"));
            }
            ;
            if (req.responseFormat instanceof $$String2) {
              return unsafeReadTagged2("String");
            }
            ;
            if (req.responseFormat instanceof Ignore) {
              return $$const(req.responseFormat.value0(pure17(unit)));
            }
            ;
            throw new Error("Failed pattern match at Affjax (line 274, column 18 - line 283, column 57): " + [req.responseFormat.constructor.name]);
          }();
          var extractContent = function(v2) {
            if (v2 instanceof ArrayView) {
              return new Right(v2.value0(unsafeToForeign));
            }
            ;
            if (v2 instanceof Blob2) {
              return new Right(unsafeToForeign(v2.value0));
            }
            ;
            if (v2 instanceof Document) {
              return new Right(unsafeToForeign(v2.value0));
            }
            ;
            if (v2 instanceof $$String) {
              return new Right(unsafeToForeign(v2.value0));
            }
            ;
            if (v2 instanceof FormData) {
              return new Right(unsafeToForeign(v2.value0));
            }
            ;
            if (v2 instanceof FormURLEncoded) {
              return note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(map38(unsafeToForeign)(encode2(v2.value0)));
            }
            ;
            if (v2 instanceof Json) {
              return new Right(unsafeToForeign(stringify(v2.value0)));
            }
            ;
            throw new Error("Failed pattern match at Affjax (line 235, column 20 - line 250, column 69): " + [v2.constructor.name]);
          };
          var addHeader = function(mh) {
            return function(hs) {
              if (mh instanceof Just && !any3(on(eq4)(name15)(mh.value0))(hs)) {
                return snoc4(hs)(mh.value0);
              }
              ;
              return hs;
            };
          };
          var headers = function(reqContent) {
            return addHeader(map38(ContentType.create)(bindFlipped8(toMediaType)(reqContent)))(addHeader(map38(Accept.create)(toMediaType2(req.responseFormat)))(req.headers));
          };
          var ajaxRequest = function(v2) {
            return {
              method: print7(req.method),
              url: req.url,
              headers: map113(function(h) {
                return {
                  field: name15(h),
                  value: value16(h)
                };
              })(headers(req.content)),
              content: v2,
              responseType: toResponseType(req.responseFormat),
              username: toNullable(req.username),
              password: toNullable(req.password),
              withCredentials: req.withCredentials,
              timeout: fromMaybe(0)(map38(function(v1) {
                return v1;
              })(req.timeout))
            };
          };
          var send = function(content3) {
            return mapFlipped3($$try6(fromEffectFnAff(_ajax(driver2, "AffjaxTimeoutErrorMessageIdent", "AffjaxRequestFailedMessageIdent", ResponseHeader.create, ajaxRequest(content3)))))(function(v2) {
              if (v2 instanceof Right) {
                var v1 = runExcept(fromResponse(v2.value0.body));
                if (v1 instanceof Left) {
                  return new Left(new ResponseBodyError(head(v1.value0), v2.value0));
                }
                ;
                if (v1 instanceof Right) {
                  return new Right({
                    body: v1.value0,
                    headers: v2.value0.headers,
                    status: v2.value0.status,
                    statusText: v2.value0.statusText
                  });
                }
                ;
                throw new Error("Failed pattern match at Affjax (line 209, column 9 - line 211, column 52): " + [v1.constructor.name]);
              }
              ;
              if (v2 instanceof Left) {
                return new Left(function() {
                  var message3 = message(v2.value0);
                  var $61 = message3 === "AffjaxTimeoutErrorMessageIdent";
                  if ($61) {
                    return TimeoutError.value;
                  }
                  ;
                  var $62 = message3 === "AffjaxRequestFailedMessageIdent";
                  if ($62) {
                    return RequestFailedError.value;
                  }
                  ;
                  return new XHROtherError(v2.value0);
                }());
              }
              ;
              throw new Error("Failed pattern match at Affjax (line 207, column 144 - line 219, column 28): " + [v2.constructor.name]);
            });
          };
          if (req.content instanceof Nothing) {
            return send(toNullable(Nothing.value));
          }
          ;
          if (req.content instanceof Just) {
            var v = extractContent(req.content.value0);
            if (v instanceof Right) {
              return send(toNullable(new Just(v.value0)));
            }
            ;
            if (v instanceof Left) {
              return pure18(new Left(new RequestContentError(v.value0)));
            }
            ;
            throw new Error("Failed pattern match at Affjax (line 199, column 7 - line 203, column 48): " + [v.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Affjax (line 195, column 3 - line 203, column 48): " + [req.content.constructor.name]);
        };
      };
      defaultRequest = /* @__PURE__ */ function() {
        return {
          method: new Left(GET2.value),
          url: "/",
          headers: [],
          content: Nothing.value,
          username: Nothing.value,
          password: Nothing.value,
          withCredentials: false,
          responseFormat: ignore,
          timeout: Nothing.value
        };
      }();
      post = function(driver2) {
        return function(rf) {
          return function(u2) {
            return function(c) {
              return request3(driver2)({
                method: new Left(POST2.value),
                url: u2,
                headers: defaultRequest.headers,
                content: c,
                username: defaultRequest.username,
                password: defaultRequest.password,
                withCredentials: defaultRequest.withCredentials,
                responseFormat: rf,
                timeout: defaultRequest.timeout
              });
            };
          };
        };
      };
    }
  });

  // output/Affjax.Web/index.js
  var post2;
  var init_Affjax6 = __esm({
    "output/Affjax.Web/index.js"() {
      init_foreign129();
      init_Affjax5();
      init_foreign129();
      init_Affjax5();
      post2 = /* @__PURE__ */ post(driver);
    }
  });

  // output/Data.Argonaut.Decode.Error/index.js
  var init_Data_Argonaut_Decode = __esm({
    "output/Data.Argonaut.Decode.Error/index.js"() {
      init_Data_Argonaut();
      init_Data9();
      init_Data_Generic();
      init_Data15();
      init_Data11();
      init_Data16();
    }
  });

  // output/Data.Set/index.js
  var init_Data57 = __esm({
    "output/Data.Set/index.js"() {
      init_Control4();
      init_Control5();
      init_Control2();
      init_Control_Monad_Rec();
      init_Control_Monad_ST2();
      init_Data40();
      init_Data_Array();
      init_Data9();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data15();
      init_Data11();
      init_Data16();
      init_Data32();
      init_Data3();
    }
  });

  // output/Data.Argonaut.Decode.Decoders/index.js
  var init_Data_Argonaut_Decode2 = __esm({
    "output/Data.Argonaut.Decode.Decoders/index.js"() {
      init_Control4();
      init_Control3();
      init_Control5();
      init_Data_Argonaut();
      init_Data_Argonaut_Decode();
      init_Data40();
      init_Data_Array2();
      init_Data_Array_NonEmpty();
      init_Data23();
      init_Data();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data26();
      init_Data43();
      init_Data34();
      init_Data_List3();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data33();
      init_Data57();
      init_Data_String4();
      init_Data_String_NonEmpty();
      init_Data29();
      init_Data30();
      init_Data22();
      init_Data3();
      init_Foreign();
    }
  });

  // output/Data.Argonaut.Decode.Class/index.js
  var init_Data_Argonaut_Decode3 = __esm({
    "output/Data.Argonaut.Decode.Class/index.js"() {
      init_Control5();
      init_Data_Argonaut();
      init_Data_Argonaut_Decode2();
      init_Data_Argonaut_Decode();
      init_Data23();
      init_Data20();
      init_Data4();
      init_Data19();
      init_Data5();
      init_Foreign();
      init_Record2();
      init_Type();
    }
  });

  // output/Data.Argonaut.Decode.Combinators/index.js
  var init_Data_Argonaut_Decode4 = __esm({
    "output/Data.Argonaut.Decode.Combinators/index.js"() {
      init_Data_Argonaut_Decode3();
      init_Data_Argonaut_Decode2();
      init_Data20();
      init_Data4();
      init_Data19();
    }
  });

  // output/Data.Argonaut.Encode.Encoders/index.js
  var init_Data_Argonaut_Encode = __esm({
    "output/Data.Argonaut.Encode.Encoders/index.js"() {
      init_Data_Argonaut();
      init_Data40();
      init_Data_Array2();
      init_Data20();
      init_Data2();
      init_Data4();
      init_Data43();
      init_Data34();
      init_Data_List3();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data57();
      init_Data_String4();
      init_Data_String2();
      init_Data_String_NonEmpty();
      init_Data22();
      init_Data32();
      init_Data12();
      init_Foreign();
    }
  });

  // output/Data.Argonaut.Encode.Class/index.js
  var init_Data_Argonaut_Encode2 = __esm({
    "output/Data.Argonaut.Encode.Class/index.js"() {
      init_Control2();
      init_Data_Argonaut();
      init_Data_Argonaut_Encode();
      init_Data5();
      init_Foreign();
      init_Record2();
      init_Type();
    }
  });

  // output/App.Data.Config/index.js
  var Prod;
  var init_App_Data5 = __esm({
    "output/App.Data.Config/index.js"() {
      init_Control4();
      init_Control5();
      init_Data_Argonaut_Decode3();
      init_Data_Argonaut_Decode4();
      init_Data_Argonaut_Decode();
      init_Data_Argonaut_Encode2();
      init_Data20();
      init_Data19();
      init_Data24();
      init_Data11();
      Prod = /* @__PURE__ */ function() {
        function Prod2() {
        }
        ;
        Prod2.value = new Prod2();
        return Prod2;
      }();
    }
  });

  // output/Effect.Now/foreign.js
  function now2() {
    return Date.now();
  }
  var init_foreign132 = __esm({
    "output/Effect.Now/foreign.js"() {
    }
  });

  // output/Effect.Now/index.js
  var map39, nowTime2, nowDateTime2, nowDate2;
  var init_Effect9 = __esm({
    "output/Effect.Now/index.js"() {
      init_foreign132();
      init_Data46();
      init_Data_DateTime();
      init_Data4();
      init_Effect();
      init_foreign132();
      map39 = /* @__PURE__ */ map(functorEffect);
      nowTime2 = /* @__PURE__ */ map39(function($2) {
        return time(toDateTime($2));
      })(now2);
      nowDateTime2 = /* @__PURE__ */ map39(toDateTime)(now2);
      nowDate2 = /* @__PURE__ */ map39(function($3) {
        return date(toDateTime($3));
      })(now2);
    }
  });

  // output/AppM/index.js
  var $runtime_lazy12, runStoreT2, coerce5, pure19, runAppM, monadStoreAppM, updateStore2, getStore2, monadEffectAppM, liftEffect5, monadAppM, nowAppM, monadAffAppM, liftAff3, makeRequest2, functorAppM, $$void8, bindAppM, discard7, bind15, $lazy_navigateAppM, navigateAppM, applicativeAppM, pure110, logMessagesAppM;
  var init_AppM = __esm({
    "output/AppM/index.js"() {
      init_Affjax();
      init_Affjax2();
      init_Affjax6();
      init_App_Api();
      init_App_Api2();
      init_App_Capability3();
      init_App_Data5();
      init_App_Data();
      init_App_Data4();
      init_Control4();
      init_Control5();
      init_Data_Function();
      init_Data4();
      init_Data19();
      init_Data22();
      init_Data3();
      init_Effect6();
      init_Effect_Aff();
      init_Effect4();
      init_Effect9();
      init_Halogen_Store2();
      init_Routing();
      init_Routing6();
      init_Safe();
      init_Store();
      $runtime_lazy12 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      runStoreT2 = /* @__PURE__ */ runStoreT(monadAff);
      coerce5 = /* @__PURE__ */ coerce();
      pure19 = /* @__PURE__ */ pure(applicativeMaybe);
      runAppM = function(store) {
        var $39 = runStoreT2(store)(reduce);
        return function($40) {
          return $39(coerce5($40));
        };
      };
      monadStoreAppM = /* @__PURE__ */ monadStoreStoreT(monadEffectAff);
      updateStore2 = /* @__PURE__ */ updateStore(monadStoreAppM);
      getStore2 = /* @__PURE__ */ getStore(monadStoreAppM);
      monadEffectAppM = /* @__PURE__ */ monadEffectStoreT(monadEffectAff);
      liftEffect5 = /* @__PURE__ */ liftEffect(monadEffectAppM);
      monadAppM = /* @__PURE__ */ monadStoreT(monadAff);
      nowAppM = {
        now: /* @__PURE__ */ liftEffect5(now2),
        nowDate: /* @__PURE__ */ liftEffect5(nowDate2),
        nowTime: /* @__PURE__ */ liftEffect5(nowTime2),
        nowDateTime: /* @__PURE__ */ liftEffect5(nowDateTime2),
        Monad0: function() {
          return monadAppM;
        }
      };
      monadAffAppM = /* @__PURE__ */ monadAffStoreT(monadAffAff);
      liftAff3 = /* @__PURE__ */ liftAff(monadAffAppM);
      makeRequest2 = /* @__PURE__ */ makeRequest(monadAffAppM);
      functorAppM = /* @__PURE__ */ functorStoreT(functorAff);
      $$void8 = /* @__PURE__ */ $$void(functorAppM);
      bindAppM = /* @__PURE__ */ bindStoreT(bindAff);
      discard7 = /* @__PURE__ */ discard(discardUnit)(bindAppM);
      bind15 = /* @__PURE__ */ bind(bindAppM);
      $lazy_navigateAppM = /* @__PURE__ */ $runtime_lazy12("navigateAppM", "AppM", function() {
        return {
          navigate: function() {
            var $41 = print(routeCodec);
            return function($42) {
              return liftEffect5(setHash2($41($42)));
            };
          }(),
          logout: discard7(liftEffect5(removeToken))(function() {
            return discard7(updateStore2(LogoutUser.value))(function() {
              return navigate($lazy_navigateAppM(0))(Home.value);
            });
          }),
          Monad0: function() {
            return monadAppM;
          }
        };
      });
      navigateAppM = /* @__PURE__ */ $lazy_navigateAppM(121);
      applicativeAppM = /* @__PURE__ */ applicativeStoreT(applicativeAff);
      pure110 = /* @__PURE__ */ pure(applicativeAppM);
      logMessagesAppM = {
        logMessage: function(log4) {
          return bind15(getStore2)(function(v) {
            var v1 = reason(log4);
            if (v.config.logLevel instanceof Prod && v1 instanceof Debug) {
              return pure110(unit);
            }
            ;
            var url_msg = v.config.telegramHost + (v.config.telegramBot + "/sendMessage");
            var body2 = new FormURLEncoded([new Tuple("chat_id", pure19(v.config.telegramChat)), new Tuple("text", pure19("`" + (message2(log4) + "`"))), new Tuple("parse_mode", pure19("markdown"))]);
            return discard7($$void8(liftAff3(post2(json)(url_msg)(pure19(body2)))))(function() {
              return bind15(liftEffect5(constructFrontendLog(v.config.build, message2(log4))))(function(log1) {
                return $$void8(makeRequest2(v.config.url)(Nothing.value)(mkFrontApi)(runFn2(putFrontendLog)(log1)));
              });
            });
          });
        },
        Monad0: function() {
          return monadAppM;
        }
      };
    }
  });

  // output/Halogen.Aff.Util/index.js
  var bind16, liftEffect6, bindFlipped9, composeKleisliFlipped4, pure20, bindFlipped1, pure111, map40, discard8, throwError3, selectElement, runHalogenAff, awaitLoad, awaitBody;
  var init_Halogen_Aff = __esm({
    "output/Halogen.Aff.Util/index.js"() {
      init_Control4();
      init_Control5();
      init_Control_Monad_Error();
      init_Data20();
      init_Data2();
      init_Data4();
      init_Data19();
      init_Data3();
      init_Effect();
      init_Effect6();
      init_Effect4();
      init_Effect3();
      init_Web_DOM();
      init_Web_Event();
      init_Web2();
      init_Web_HTML_Event();
      init_Web_HTML17();
      init_Web_HTML_HTMLDocument();
      init_Web_HTML4();
      init_Web_HTML69();
      bind16 = /* @__PURE__ */ bind(bindAff);
      liftEffect6 = /* @__PURE__ */ liftEffect(monadEffectAff);
      bindFlipped9 = /* @__PURE__ */ bindFlipped(bindEffect);
      composeKleisliFlipped4 = /* @__PURE__ */ composeKleisliFlipped(bindEffect);
      pure20 = /* @__PURE__ */ pure(applicativeAff);
      bindFlipped1 = /* @__PURE__ */ bindFlipped(bindMaybe);
      pure111 = /* @__PURE__ */ pure(applicativeEffect);
      map40 = /* @__PURE__ */ map(functorEffect);
      discard8 = /* @__PURE__ */ discard(discardUnit);
      throwError3 = /* @__PURE__ */ throwError(monadThrowAff);
      selectElement = function(query5) {
        return bind16(liftEffect6(bindFlipped9(composeKleisliFlipped4(function() {
          var $16 = querySelector(query5);
          return function($17) {
            return $16(toParentNode($17));
          };
        }())(document))(windowImpl)))(function(mel) {
          return pure20(bindFlipped1(fromElement)(mel));
        });
      };
      runHalogenAff = /* @__PURE__ */ runAff_(/* @__PURE__ */ either(throwException)(/* @__PURE__ */ $$const(/* @__PURE__ */ pure111(unit))));
      awaitLoad = /* @__PURE__ */ makeAff(function(callback) {
        return function __do4() {
          var rs = bindFlipped9(readyState2)(bindFlipped9(document)(windowImpl))();
          if (rs instanceof Loading) {
            var et = map40(toEventTarget)(windowImpl)();
            var listener = eventListener(function(v) {
              return callback(new Right(unit));
            })();
            addEventListener2(domcontentloaded)(listener)(false)(et)();
            return effectCanceler(removeEventListener2(domcontentloaded)(listener)(false)(et));
          }
          ;
          callback(new Right(unit))();
          return nonCanceler;
        };
      });
      awaitBody = /* @__PURE__ */ discard8(bindAff)(awaitLoad)(function() {
        return bind16(selectElement("body"))(function(body2) {
          return maybe(throwError3(error("Could not find body")))(pure20)(body2);
        });
      });
    }
  });

  // output/Halogen/index.js
  var init_Halogen6 = __esm({
    "output/Halogen/index.js"() {
      init_Data37();
      init_Halogen3();
      init_Halogen_Data2();
      init_Halogen5();
      init_Halogen_HTML();
      init_Halogen4();
      init_Data37();
      init_Halogen3();
      init_Halogen_HTML();
      init_Halogen4();
    }
  });

  // output/Halogen.Aff.Driver.State/index.js
  var unRenderStateX, unDriverStateX, renderStateX_, mkRenderStateX, renderStateX, mkDriverStateXRef, mapDriverState, initDriverState;
  var init_Halogen_Aff_Driver = __esm({
    "output/Halogen.Aff.Driver.State/index.js"() {
      init_Data25();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Effect2();
      init_Halogen_Data2();
      init_Unsafe();
      unRenderStateX = unsafeCoerce2;
      unDriverStateX = unsafeCoerce2;
      renderStateX_ = function(dictApplicative) {
        var traverse_7 = traverse_(dictApplicative)(foldableMaybe);
        return function(f) {
          return unDriverStateX(function(st) {
            return traverse_7(f)(st.rendering);
          });
        };
      };
      mkRenderStateX = unsafeCoerce2;
      renderStateX = function(dictFunctor) {
        return function(f) {
          return unDriverStateX(function(st) {
            return mkRenderStateX(f(st.rendering));
          });
        };
      };
      mkDriverStateXRef = unsafeCoerce2;
      mapDriverState = function(f) {
        return function(v) {
          return f(v);
        };
      };
      initDriverState = function(component7) {
        return function(input3) {
          return function(handler3) {
            return function(lchs) {
              return function __do4() {
                var selfRef = $$new({})();
                var childrenIn = $$new(empty5)();
                var childrenOut = $$new(empty5)();
                var handlerRef = $$new(handler3)();
                var pendingQueries = $$new(new Just(Nil.value))();
                var pendingOuts = $$new(new Just(Nil.value))();
                var pendingHandlers = $$new(Nothing.value)();
                var fresh2 = $$new(1)();
                var subscriptions = $$new(new Just(empty4))();
                var forks = $$new(empty4)();
                var ds = {
                  component: component7,
                  state: component7.initialState(input3),
                  refs: empty4,
                  children: empty5,
                  childrenIn,
                  childrenOut,
                  selfRef,
                  handlerRef,
                  pendingQueries,
                  pendingOuts,
                  pendingHandlers,
                  rendering: Nothing.value,
                  fresh: fresh2,
                  subscriptions,
                  forks,
                  lifecycleHandlers: lchs
                };
                write(ds)(selfRef)();
                return mkDriverStateXRef(selfRef);
              };
            };
          };
        };
      };
    }
  });

  // output/Halogen.Aff.Driver.Eval/index.js
  var traverse_4, bindFlipped10, lookup9, bind17, liftEffect7, discard9, discard12, traverse_12, traverse_22, fork3, parSequence_2, pure21, map41, parallel2, map114, sequential2, map210, insert9, retractFreeAp2, $$delete6, unlessM3, insert12, traverse_32, lookup12, lookup22, foldFree2, alter2, unsubscribe3, queueOrRun, handleLifecycle, handleAff, fresh, evalQ, evalM, evalF;
  var init_Halogen_Aff_Driver2 = __esm({
    "output/Halogen.Aff.Driver.Eval/index.js"() {
      init_Control4();
      init_Control_Applicative();
      init_Control5();
      init_Control6();
      init_Control_Monad_Fork();
      init_Control_Monad();
      init_Control12();
      init_Control_Parallel();
      init_Data();
      init_Data54();
      init_Data20();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data15();
      init_Data3();
      init_Effect();
      init_Effect6();
      init_Effect4();
      init_Effect3();
      init_Effect2();
      init_Halogen_Aff_Driver();
      init_Halogen_Query();
      init_Halogen_Query2();
      init_Halogen_Query4();
      init_Halogen_Query3();
      init_Halogen();
      init_Unsafe2();
      traverse_4 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
      bindFlipped10 = /* @__PURE__ */ bindFlipped(bindMaybe);
      lookup9 = /* @__PURE__ */ lookup2(ordSubscriptionId);
      bind17 = /* @__PURE__ */ bind(bindAff);
      liftEffect7 = /* @__PURE__ */ liftEffect(monadEffectAff);
      discard9 = /* @__PURE__ */ discard(discardUnit);
      discard12 = /* @__PURE__ */ discard9(bindAff);
      traverse_12 = /* @__PURE__ */ traverse_(applicativeAff);
      traverse_22 = /* @__PURE__ */ traverse_12(foldableList);
      fork3 = /* @__PURE__ */ fork(monadForkAff);
      parSequence_2 = /* @__PURE__ */ parSequence_(parallelAff)(foldableList);
      pure21 = /* @__PURE__ */ pure(applicativeAff);
      map41 = /* @__PURE__ */ map(functorCoyoneda);
      parallel2 = /* @__PURE__ */ parallel(parallelAff);
      map114 = /* @__PURE__ */ map(functorAff);
      sequential2 = /* @__PURE__ */ sequential(parallelAff);
      map210 = /* @__PURE__ */ map(functorMaybe);
      insert9 = /* @__PURE__ */ insert(ordSubscriptionId);
      retractFreeAp2 = /* @__PURE__ */ retractFreeAp(applicativeParAff);
      $$delete6 = /* @__PURE__ */ $$delete(ordForkId);
      unlessM3 = /* @__PURE__ */ unlessM(monadEffect);
      insert12 = /* @__PURE__ */ insert(ordForkId);
      traverse_32 = /* @__PURE__ */ traverse_12(foldableMaybe);
      lookup12 = /* @__PURE__ */ lookup2(ordForkId);
      lookup22 = /* @__PURE__ */ lookup2(ordString);
      foldFree2 = /* @__PURE__ */ foldFree(monadRecAff);
      alter2 = /* @__PURE__ */ alter(ordString);
      unsubscribe3 = function(sid) {
        return function(ref2) {
          return function __do4() {
            var v = read(ref2)();
            var subs = read(v.subscriptions)();
            return traverse_4(unsubscribe)(bindFlipped10(lookup9(sid))(subs))();
          };
        };
      };
      queueOrRun = function(ref2) {
        return function(au) {
          return bind17(liftEffect7(read(ref2)))(function(v) {
            if (v instanceof Nothing) {
              return au;
            }
            ;
            if (v instanceof Just) {
              return liftEffect7(write(new Just(new Cons(au, v.value0)))(ref2));
            }
            ;
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 188, column 33 - line 190, column 57): " + [v.constructor.name]);
          });
        };
      };
      handleLifecycle = function(lchs) {
        return function(f) {
          return discard12(liftEffect7(write({
            initializers: Nil.value,
            finalizers: Nil.value
          })(lchs)))(function() {
            return bind17(liftEffect7(f))(function(result) {
              return bind17(liftEffect7(read(lchs)))(function(v) {
                return discard12(traverse_22(fork3)(v.finalizers))(function() {
                  return discard12(parSequence_2(v.initializers))(function() {
                    return pure21(result);
                  });
                });
              });
            });
          });
        };
      };
      handleAff = /* @__PURE__ */ runAff_(/* @__PURE__ */ either(throwException)(/* @__PURE__ */ $$const(/* @__PURE__ */ pure(applicativeEffect)(unit))));
      fresh = function(f) {
        return function(ref2) {
          return bind17(liftEffect7(read(ref2)))(function(v) {
            return liftEffect7(modify$prime(function(i2) {
              return {
                state: i2 + 1 | 0,
                value: f(i2)
              };
            })(v.fresh));
          });
        };
      };
      evalQ = function(render3) {
        return function(ref2) {
          return function(q2) {
            return bind17(liftEffect7(read(ref2)))(function(v) {
              return evalM(render3)(ref2)(v["component"]["eval"](new Query(map41(Just.create)(liftCoyoneda(q2)), $$const(Nothing.value))));
            });
          };
        };
      };
      evalM = function(render3) {
        return function(initRef) {
          return function(v) {
            var evalChildQuery = function(ref2) {
              return function(cqb) {
                return bind17(liftEffect7(read(ref2)))(function(v1) {
                  return unChildQueryBox(function(v2) {
                    var evalChild = function(v3) {
                      return parallel2(bind17(liftEffect7(read(v3)))(function(dsx) {
                        return unDriverStateX(function(ds) {
                          return evalQ(render3)(ds.selfRef)(v2.value1);
                        })(dsx);
                      }));
                    };
                    return map114(v2.value2)(sequential2(v2.value0(applicativeParAff)(evalChild)(v1.children)));
                  })(cqb);
                });
              };
            };
            var go2 = function(ref2) {
              return function(v1) {
                if (v1 instanceof State) {
                  return bind17(liftEffect7(read(ref2)))(function(v2) {
                    var v3 = v1.value0(v2.state);
                    if (unsafeRefEq(v2.state)(v3.value1)) {
                      return pure21(v3.value0);
                    }
                    ;
                    if (otherwise) {
                      return discard12(liftEffect7(write({
                        component: v2.component,
                        state: v3.value1,
                        refs: v2.refs,
                        children: v2.children,
                        childrenIn: v2.childrenIn,
                        childrenOut: v2.childrenOut,
                        selfRef: v2.selfRef,
                        handlerRef: v2.handlerRef,
                        pendingQueries: v2.pendingQueries,
                        pendingOuts: v2.pendingOuts,
                        pendingHandlers: v2.pendingHandlers,
                        rendering: v2.rendering,
                        fresh: v2.fresh,
                        subscriptions: v2.subscriptions,
                        forks: v2.forks,
                        lifecycleHandlers: v2.lifecycleHandlers
                      })(ref2)))(function() {
                        return discard12(handleLifecycle(v2.lifecycleHandlers)(render3(v2.lifecycleHandlers)(ref2)))(function() {
                          return pure21(v3.value0);
                        });
                      });
                    }
                    ;
                    throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [v3.constructor.name]);
                  });
                }
                ;
                if (v1 instanceof Subscribe) {
                  return bind17(fresh(SubscriptionId)(ref2))(function(sid) {
                    return bind17(liftEffect7(subscribe(v1.value0(sid))(function(act) {
                      return handleAff(evalF(render3)(ref2)(new Action(act)));
                    })))(function(finalize) {
                      return bind17(liftEffect7(read(ref2)))(function(v2) {
                        return discard12(liftEffect7(modify_(map210(insert9(sid)(finalize)))(v2.subscriptions)))(function() {
                          return pure21(v1.value1(sid));
                        });
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof Unsubscribe) {
                  return discard12(liftEffect7(unsubscribe3(v1.value0)(ref2)))(function() {
                    return pure21(v1.value1);
                  });
                }
                ;
                if (v1 instanceof Lift2) {
                  return v1.value0;
                }
                ;
                if (v1 instanceof ChildQuery2) {
                  return evalChildQuery(ref2)(v1.value0);
                }
                ;
                if (v1 instanceof Raise) {
                  return bind17(liftEffect7(read(ref2)))(function(v2) {
                    return bind17(liftEffect7(read(v2.handlerRef)))(function(handler3) {
                      return discard12(queueOrRun(v2.pendingOuts)(handler3(v1.value0)))(function() {
                        return pure21(v1.value1);
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof Par) {
                  return sequential2(retractFreeAp2(hoistFreeAp(function() {
                    var $118 = evalM(render3)(ref2);
                    return function($119) {
                      return parallel2($118($119));
                    };
                  }())(v1.value0)));
                }
                ;
                if (v1 instanceof Fork) {
                  return bind17(fresh(ForkId)(ref2))(function(fid) {
                    return bind17(liftEffect7(read(ref2)))(function(v2) {
                      return bind17(liftEffect7($$new(false)))(function(doneRef) {
                        return bind17(fork3($$finally(liftEffect7(function __do4() {
                          modify_($$delete6(fid))(v2.forks)();
                          return write(true)(doneRef)();
                        }))(evalM(render3)(ref2)(v1.value0))))(function(fiber) {
                          return discard12(liftEffect7(unlessM3(read(doneRef))(modify_(insert12(fid)(fiber))(v2.forks))))(function() {
                            return pure21(v1.value1(fid));
                          });
                        });
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof Join) {
                  return bind17(liftEffect7(read(ref2)))(function(v2) {
                    return bind17(liftEffect7(read(v2.forks)))(function(forkMap) {
                      return discard12(traverse_32(joinFiber)(lookup12(v1.value0)(forkMap)))(function() {
                        return pure21(v1.value1);
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof Kill) {
                  return bind17(liftEffect7(read(ref2)))(function(v2) {
                    return bind17(liftEffect7(read(v2.forks)))(function(forkMap) {
                      return discard12(traverse_32(killFiber(error("Cancelled")))(lookup12(v1.value0)(forkMap)))(function() {
                        return pure21(v1.value1);
                      });
                    });
                  });
                }
                ;
                if (v1 instanceof GetRef) {
                  return bind17(liftEffect7(read(ref2)))(function(v2) {
                    return pure21(v1.value1(lookup22(v1.value0)(v2.refs)));
                  });
                }
                ;
                throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 139, column 33): " + [v1.constructor.name]);
              };
            };
            return foldFree2(go2(initRef))(v);
          };
        };
      };
      evalF = function(render3) {
        return function(ref2) {
          return function(v) {
            if (v instanceof RefUpdate) {
              return liftEffect7(flip(modify_)(ref2)(mapDriverState(function(st) {
                return {
                  component: st.component,
                  state: st.state,
                  refs: alter2($$const(v.value1))(v.value0)(st.refs),
                  children: st.children,
                  childrenIn: st.childrenIn,
                  childrenOut: st.childrenOut,
                  selfRef: st.selfRef,
                  handlerRef: st.handlerRef,
                  pendingQueries: st.pendingQueries,
                  pendingOuts: st.pendingOuts,
                  pendingHandlers: st.pendingHandlers,
                  rendering: st.rendering,
                  fresh: st.fresh,
                  subscriptions: st.subscriptions,
                  forks: st.forks,
                  lifecycleHandlers: st.lifecycleHandlers
                };
              })));
            }
            ;
            if (v instanceof Action) {
              return bind17(liftEffect7(read(ref2)))(function(v1) {
                return evalM(render3)(ref2)(v1["component"]["eval"](new Action2(v.value0, unit)));
              });
            }
            ;
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [v.constructor.name]);
          };
        };
      };
    }
  });

  // output/Halogen.Aff.Driver/index.js
  var bind18, discard10, for_3, traverse_5, fork4, bindFlipped11, traverse_13, traverse_23, traverse_33, discard22, parSequence_3, liftEffect8, pure23, map42, pure112, when5, renderStateX2, $$void9, foreachSlot2, renderStateX_2, tailRecM3, voidLeft4, bind19, liftEffect1, newLifecycleHandlers, handlePending, cleanupSubscriptionsAndForks, runUI;
  var init_Halogen_Aff2 = __esm({
    "output/Halogen.Aff.Driver/index.js"() {
      init_Control4();
      init_Control5();
      init_Control_Monad_Fork();
      init_Control_Monad_Rec();
      init_Control12();
      init_Data25();
      init_Data2();
      init_Data4();
      init_Data34();
      init_Data_List();
      init_Data_Map();
      init_Data19();
      init_Data3();
      init_Effect();
      init_Effect6();
      init_Effect4();
      init_Effect8();
      init_Effect3();
      init_Effect2();
      init_Halogen6();
      init_Halogen_Aff_Driver2();
      init_Halogen_Aff_Driver();
      init_Halogen3();
      init_Halogen_Data2();
      init_Halogen_Query4();
      init_Halogen_Query3();
      init_Halogen();
      bind18 = /* @__PURE__ */ bind(bindEffect);
      discard10 = /* @__PURE__ */ discard(discardUnit);
      for_3 = /* @__PURE__ */ for_(applicativeEffect)(foldableMaybe);
      traverse_5 = /* @__PURE__ */ traverse_(applicativeAff)(foldableList);
      fork4 = /* @__PURE__ */ fork(monadForkAff);
      bindFlipped11 = /* @__PURE__ */ bindFlipped(bindEffect);
      traverse_13 = /* @__PURE__ */ traverse_(applicativeEffect);
      traverse_23 = /* @__PURE__ */ traverse_13(foldableMaybe);
      traverse_33 = /* @__PURE__ */ traverse_13(foldableMap);
      discard22 = /* @__PURE__ */ discard10(bindAff);
      parSequence_3 = /* @__PURE__ */ parSequence_(parallelAff)(foldableList);
      liftEffect8 = /* @__PURE__ */ liftEffect(monadEffectAff);
      pure23 = /* @__PURE__ */ pure(applicativeEffect);
      map42 = /* @__PURE__ */ map(functorEffect);
      pure112 = /* @__PURE__ */ pure(applicativeAff);
      when5 = /* @__PURE__ */ when(applicativeEffect);
      renderStateX2 = /* @__PURE__ */ renderStateX(functorEffect);
      $$void9 = /* @__PURE__ */ $$void(functorAff);
      foreachSlot2 = /* @__PURE__ */ foreachSlot(applicativeEffect);
      renderStateX_2 = /* @__PURE__ */ renderStateX_(applicativeEffect);
      tailRecM3 = /* @__PURE__ */ tailRecM(monadRecEffect);
      voidLeft4 = /* @__PURE__ */ voidLeft(functorEffect);
      bind19 = /* @__PURE__ */ bind(bindAff);
      liftEffect1 = /* @__PURE__ */ liftEffect(monadEffectEffect);
      newLifecycleHandlers = /* @__PURE__ */ function() {
        return $$new({
          initializers: Nil.value,
          finalizers: Nil.value
        });
      }();
      handlePending = function(ref2) {
        return function __do4() {
          var queue = read(ref2)();
          write(Nothing.value)(ref2)();
          return for_3(queue)(function() {
            var $58 = traverse_5(fork4);
            return function($59) {
              return handleAff($58(reverse($59)));
            };
          }())();
        };
      };
      cleanupSubscriptionsAndForks = function(v) {
        return function __do4() {
          bindFlipped11(traverse_23(traverse_33(unsubscribe)))(read(v.subscriptions))();
          write(Nothing.value)(v.subscriptions)();
          bindFlipped11(traverse_33(function() {
            var $60 = killFiber(error("finalized"));
            return function($61) {
              return handleAff($60($61));
            };
          }()))(read(v.forks))();
          return write(empty4)(v.forks)();
        };
      };
      runUI = function(renderSpec2) {
        return function(component7) {
          return function(i2) {
            var squashChildInitializers = function(lchs) {
              return function(preInits) {
                return unDriverStateX(function(st) {
                  var parentInitializer = evalM(render3)(st.selfRef)(st["component"]["eval"](new Initialize(unit)));
                  return modify_(function(handlers) {
                    return {
                      initializers: new Cons(discard22(parSequence_3(reverse(handlers.initializers)))(function() {
                        return discard22(parentInitializer)(function() {
                          return liftEffect8(function __do4() {
                            handlePending(st.pendingQueries)();
                            return handlePending(st.pendingOuts)();
                          });
                        });
                      }), preInits),
                      finalizers: handlers.finalizers
                    };
                  })(lchs);
                });
              };
            };
            var runComponent = function(lchs) {
              return function(handler3) {
                return function(j) {
                  return unComponent(function(c) {
                    return function __do4() {
                      var lchs$prime = newLifecycleHandlers();
                      var $$var2 = initDriverState(c)(j)(handler3)(lchs$prime)();
                      var pre2 = read(lchs)();
                      write({
                        initializers: Nil.value,
                        finalizers: pre2.finalizers
                      })(lchs)();
                      bindFlipped11(unDriverStateX(function() {
                        var $62 = render3(lchs);
                        return function($63) {
                          return $62(function(v) {
                            return v.selfRef;
                          }($63));
                        };
                      }()))(read($$var2))();
                      bindFlipped11(squashChildInitializers(lchs)(pre2.initializers))(read($$var2))();
                      return $$var2;
                    };
                  });
                };
              };
            };
            var renderChild = function(lchs) {
              return function(handler3) {
                return function(childrenInRef) {
                  return function(childrenOutRef) {
                    return unComponentSlot(function(slot4) {
                      return function __do4() {
                        var childrenIn = map42(slot4.pop)(read(childrenInRef))();
                        var $$var2 = function() {
                          if (childrenIn instanceof Just) {
                            write(childrenIn.value0.value1)(childrenInRef)();
                            var dsx = read(childrenIn.value0.value0)();
                            unDriverStateX(function(st) {
                              return function __do5() {
                                flip(write)(st.handlerRef)(function() {
                                  var $64 = maybe(pure112(unit))(handler3);
                                  return function($65) {
                                    return $64(slot4.output($65));
                                  };
                                }())();
                                return handleAff(evalM(render3)(st.selfRef)(st["component"]["eval"](new Receive(slot4.input, unit))))();
                              };
                            })(dsx)();
                            return childrenIn.value0.value0;
                          }
                          ;
                          if (childrenIn instanceof Nothing) {
                            return runComponent(lchs)(function() {
                              var $66 = maybe(pure112(unit))(handler3);
                              return function($67) {
                                return $66(slot4.output($67));
                              };
                            }())(slot4.input)(slot4.component)();
                          }
                          ;
                          throw new Error("Failed pattern match at Halogen.Aff.Driver (line 213, column 14 - line 222, column 98): " + [childrenIn.constructor.name]);
                        }();
                        var isDuplicate = map42(function($68) {
                          return isJust(slot4.get($68));
                        })(read(childrenOutRef))();
                        when5(isDuplicate)(warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                        modify_(slot4.set($$var2))(childrenOutRef)();
                        return bind18(read($$var2))(renderStateX2(function(v) {
                          if (v instanceof Nothing) {
                            return $$throw("Halogen internal error: child was not initialized in renderChild");
                          }
                          ;
                          if (v instanceof Just) {
                            return pure23(renderSpec2.renderChild(v.value0));
                          }
                          ;
                          throw new Error("Failed pattern match at Halogen.Aff.Driver (line 227, column 37 - line 229, column 50): " + [v.constructor.name]);
                        }))();
                      };
                    });
                  };
                };
              };
            };
            var render3 = function(lchs) {
              return function($$var2) {
                return function __do4() {
                  var v = read($$var2)();
                  var shouldProcessHandlers = map42(isNothing)(read(v.pendingHandlers))();
                  when5(shouldProcessHandlers)(write(new Just(Nil.value))(v.pendingHandlers))();
                  write(empty5)(v.childrenOut)();
                  write(v.children)(v.childrenIn)();
                  var handler3 = function() {
                    var $69 = queueOrRun(v.pendingHandlers);
                    var $70 = evalF(render3)(v.selfRef);
                    return function($71) {
                      return $69($$void9($70($71)));
                    };
                  }();
                  var childHandler = function() {
                    var $72 = queueOrRun(v.pendingQueries);
                    return function($73) {
                      return $72(handler3(Action.create($73)));
                    };
                  }();
                  var rendering = renderSpec2.render(function($74) {
                    return handleAff(handler3($74));
                  })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
                  var children2 = read(v.childrenOut)();
                  var childrenIn = read(v.childrenIn)();
                  foreachSlot2(childrenIn)(function(v1) {
                    return function __do5() {
                      var childDS = read(v1)();
                      renderStateX_2(renderSpec2.removeChild)(childDS)();
                      return finalize(lchs)(childDS)();
                    };
                  })();
                  flip(modify_)(v.selfRef)(mapDriverState(function(ds$prime) {
                    return {
                      component: ds$prime.component,
                      state: ds$prime.state,
                      refs: ds$prime.refs,
                      children: children2,
                      childrenIn: ds$prime.childrenIn,
                      childrenOut: ds$prime.childrenOut,
                      selfRef: ds$prime.selfRef,
                      handlerRef: ds$prime.handlerRef,
                      pendingQueries: ds$prime.pendingQueries,
                      pendingOuts: ds$prime.pendingOuts,
                      pendingHandlers: ds$prime.pendingHandlers,
                      rendering: new Just(rendering),
                      fresh: ds$prime.fresh,
                      subscriptions: ds$prime.subscriptions,
                      forks: ds$prime.forks,
                      lifecycleHandlers: ds$prime.lifecycleHandlers
                    };
                  }))();
                  return when5(shouldProcessHandlers)(flip(tailRecM3)(unit)(function(v1) {
                    return function __do5() {
                      var handlers = read(v.pendingHandlers)();
                      write(new Just(Nil.value))(v.pendingHandlers)();
                      traverse_23(function() {
                        var $75 = traverse_5(fork4);
                        return function($76) {
                          return handleAff($75(reverse($76)));
                        };
                      }())(handlers)();
                      var mmore = read(v.pendingHandlers)();
                      var $51 = maybe(false)($$null)(mmore);
                      if ($51) {
                        return voidLeft4(write(Nothing.value)(v.pendingHandlers))(new Done(unit))();
                      }
                      ;
                      return new Loop(unit);
                    };
                  }))();
                };
              };
            };
            var finalize = function(lchs) {
              return unDriverStateX(function(st) {
                return function __do4() {
                  cleanupSubscriptionsAndForks(st)();
                  var f = evalM(render3)(st.selfRef)(st["component"]["eval"](new Finalize(unit)));
                  modify_(function(handlers) {
                    return {
                      initializers: handlers.initializers,
                      finalizers: new Cons(f, handlers.finalizers)
                    };
                  })(lchs)();
                  return foreachSlot2(st.children)(function(v) {
                    return function __do5() {
                      var dsx = read(v)();
                      return finalize(lchs)(dsx)();
                    };
                  })();
                };
              });
            };
            var evalDriver = function(disposed) {
              return function(ref2) {
                return function(q2) {
                  return bind19(liftEffect8(read(disposed)))(function(v) {
                    if (v) {
                      return pure112(Nothing.value);
                    }
                    ;
                    return evalQ(render3)(ref2)(q2);
                  });
                };
              };
            };
            var dispose = function(disposed) {
              return function(lchs) {
                return function(dsx) {
                  return handleLifecycle(lchs)(function __do4() {
                    var v = read(disposed)();
                    if (v) {
                      return unit;
                    }
                    ;
                    write(true)(disposed)();
                    finalize(lchs)(dsx)();
                    return unDriverStateX(function(v1) {
                      return function __do5() {
                        var v2 = liftEffect1(read(v1.selfRef))();
                        return for_3(v2.rendering)(renderSpec2.dispose)();
                      };
                    })(dsx)();
                  });
                };
              };
            };
            return bind19(liftEffect8(newLifecycleHandlers))(function(lchs) {
              return bind19(liftEffect8($$new(false)))(function(disposed) {
                return handleLifecycle(lchs)(function __do4() {
                  var sio = create();
                  var dsx = bindFlipped11(read)(runComponent(lchs)(function() {
                    var $77 = notify(sio.listener);
                    return function($78) {
                      return liftEffect8($77($78));
                    };
                  }())(i2)(component7))();
                  return unDriverStateX(function(st) {
                    return pure23({
                      query: evalDriver(disposed)(st.selfRef),
                      messages: sio.emitter,
                      dispose: dispose(disposed)(lchs)(dsx)
                    });
                  })(dsx)();
                });
              });
            });
          };
        };
      };
    }
  });

  // output/Web.DOM.Node/foreign.js
  function insertBefore(node1) {
    return function(node2) {
      return function(parent2) {
        return function() {
          parent2.insertBefore(node1, node2);
        };
      };
    };
  }
  function appendChild(node) {
    return function(parent2) {
      return function() {
        parent2.appendChild(node);
      };
    };
  }
  function removeChild2(node) {
    return function(parent2) {
      return function() {
        parent2.removeChild(node);
      };
    };
  }
  var getEffProp2, baseURI, _ownerDocument, _parentNode, _parentElement, childNodes, _firstChild, _lastChild, _previousSibling, _nextSibling, _nodeValue, textContent;
  var init_foreign133 = __esm({
    "output/Web.DOM.Node/foreign.js"() {
      getEffProp2 = function(name16) {
        return function(node) {
          return function() {
            return node[name16];
          };
        };
      };
      baseURI = getEffProp2("baseURI");
      _ownerDocument = getEffProp2("ownerDocument");
      _parentNode = getEffProp2("parentNode");
      _parentElement = getEffProp2("parentElement");
      childNodes = getEffProp2("childNodes");
      _firstChild = getEffProp2("firstChild");
      _lastChild = getEffProp2("lastChild");
      _previousSibling = getEffProp2("previousSibling");
      _nextSibling = getEffProp2("nextSibling");
      _nodeValue = getEffProp2("nodeValue");
      textContent = getEffProp2("textContent");
    }
  });

  // output/Web.DOM.NodeType/index.js
  var init_Web_DOM4 = __esm({
    "output/Web.DOM.NodeType/index.js"() {
      init_Data41();
      init_Data19();
      init_Data15();
    }
  });

  // output/Web.DOM.Node/index.js
  var map43, parentNode2, nextSibling;
  var init_Web_DOM5 = __esm({
    "output/Web.DOM.Node/index.js"() {
      init_foreign133();
      init_Data41();
      init_Data4();
      init_Data19();
      init_Data52();
      init_Effect();
      init_Unsafe();
      init_Web_DOM4();
      init_Web_Internal();
      init_foreign133();
      map43 = /* @__PURE__ */ map(functorEffect);
      parentNode2 = /* @__PURE__ */ function() {
        var $6 = map43(toMaybe);
        return function($7) {
          return $6(_parentNode($7));
        };
      }();
      nextSibling = /* @__PURE__ */ function() {
        var $15 = map43(toMaybe);
        return function($16) {
          return $15(_nextSibling($16));
        };
      }();
    }
  });

  // output/Halogen.VDom.Driver/index.js
  var $runtime_lazy13, $$void10, pure24, traverse_6, unwrap12, when6, not2, identity21, bind110, liftEffect9, map44, bindFlipped12, substInParent, removeChild3, mkSpec, renderSpec, runUI2;
  var init_Halogen_VDom6 = __esm({
    "output/Halogen.VDom.Driver/index.js"() {
      init_Control4();
      init_Control5();
      init_Control2();
      init_Data25();
      init_Data4();
      init_Data21();
      init_Data19();
      init_Data24();
      init_Data3();
      init_Effect();
      init_Effect6();
      init_Effect4();
      init_Effect2();
      init_Halogen_Aff2();
      init_Halogen_Aff_Driver();
      init_Halogen3();
      init_Halogen_VDom4();
      init_Halogen_VDom_DOM();
      init_Halogen_VDom();
      init_Halogen_VDom5();
      init_Unsafe2();
      init_Web_DOM5();
      init_Web2();
      init_Web_HTML17();
      init_Web_HTML4();
      init_Web_HTML69();
      $runtime_lazy13 = function(name16, moduleName, init4) {
        var state3 = 0;
        var val;
        return function(lineNumber) {
          if (state3 === 2)
            return val;
          if (state3 === 1)
            throw new ReferenceError(name16 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
          state3 = 1;
          val = init4();
          state3 = 2;
          return val;
        };
      };
      $$void10 = /* @__PURE__ */ $$void(functorEffect);
      pure24 = /* @__PURE__ */ pure(applicativeEffect);
      traverse_6 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
      unwrap12 = /* @__PURE__ */ unwrap();
      when6 = /* @__PURE__ */ when(applicativeEffect);
      not2 = /* @__PURE__ */ not(/* @__PURE__ */ heytingAlgebraFunction(/* @__PURE__ */ heytingAlgebraFunction(heytingAlgebraBoolean)));
      identity21 = /* @__PURE__ */ identity(categoryFn);
      bind110 = /* @__PURE__ */ bind(bindAff);
      liftEffect9 = /* @__PURE__ */ liftEffect(monadEffectAff);
      map44 = /* @__PURE__ */ map(functorEffect);
      bindFlipped12 = /* @__PURE__ */ bindFlipped(bindEffect);
      substInParent = function(v) {
        return function(v1) {
          return function(v2) {
            if (v1 instanceof Just && v2 instanceof Just) {
              return $$void10(insertBefore(v)(v1.value0)(v2.value0));
            }
            ;
            if (v1 instanceof Nothing && v2 instanceof Just) {
              return $$void10(appendChild(v)(v2.value0));
            }
            ;
            return pure24(unit);
          };
        };
      };
      removeChild3 = function(v) {
        return function __do4() {
          var npn = parentNode2(v.node)();
          return traverse_6(function(pn) {
            return removeChild2(v.node)(pn);
          })(npn)();
        };
      };
      mkSpec = function(handler3) {
        return function(renderChildRef) {
          return function(document2) {
            var getNode = unRenderStateX(function(v) {
              return v.node;
            });
            var done = function(st) {
              if (st instanceof Just) {
                return halt(st.value0);
              }
              ;
              return unit;
            };
            var buildWidget2 = function(spec) {
              var buildThunk2 = buildThunk(unwrap12)(spec);
              var $lazy_patch = $runtime_lazy13("patch", "Halogen.VDom.Driver", function() {
                return function(st, slot4) {
                  if (st instanceof Just) {
                    if (slot4 instanceof ComponentSlot) {
                      halt(st.value0);
                      return $lazy_renderComponentSlot(100)(slot4.value0);
                    }
                    ;
                    if (slot4 instanceof ThunkSlot) {
                      var step$prime = step2(st.value0, slot4.value0);
                      return mkStep(new Step(extract2(step$prime), new Just(step$prime), $lazy_patch(103), done));
                    }
                    ;
                    throw new Error("Failed pattern match at Halogen.VDom.Driver (line 97, column 22 - line 103, column 79): " + [slot4.constructor.name]);
                  }
                  ;
                  return $lazy_render(104)(slot4);
                };
              });
              var $lazy_render = $runtime_lazy13("render", "Halogen.VDom.Driver", function() {
                return function(slot4) {
                  if (slot4 instanceof ComponentSlot) {
                    return $lazy_renderComponentSlot(86)(slot4.value0);
                  }
                  ;
                  if (slot4 instanceof ThunkSlot) {
                    var step4 = buildThunk2(slot4.value0);
                    return mkStep(new Step(extract2(step4), new Just(step4), $lazy_patch(89), done));
                  }
                  ;
                  throw new Error("Failed pattern match at Halogen.VDom.Driver (line 84, column 7 - line 89, column 75): " + [slot4.constructor.name]);
                };
              });
              var $lazy_renderComponentSlot = $runtime_lazy13("renderComponentSlot", "Halogen.VDom.Driver", function() {
                return function(cs) {
                  var renderChild = read(renderChildRef)();
                  var rsx = renderChild(cs)();
                  var node = getNode(rsx);
                  return mkStep(new Step(node, Nothing.value, $lazy_patch(117), done));
                };
              });
              var patch2 = $lazy_patch(91);
              var render3 = $lazy_render(82);
              var renderComponentSlot = $lazy_renderComponentSlot(109);
              return render3;
            };
            var buildAttributes = buildProp(handler3);
            return {
              buildWidget: buildWidget2,
              buildAttributes,
              document: document2
            };
          };
        };
      };
      renderSpec = function(document2) {
        return function(container) {
          var render3 = function(handler3) {
            return function(child) {
              return function(v) {
                return function(v1) {
                  if (v1 instanceof Nothing) {
                    return function __do4() {
                      var renderChildRef = $$new(child)();
                      var spec = mkSpec(handler3)(renderChildRef)(document2);
                      var machine = buildVDom(spec)(v);
                      var node = extract2(machine);
                      $$void10(appendChild(node)(toNode2(container)))();
                      return {
                        machine,
                        node,
                        renderChildRef
                      };
                    };
                  }
                  ;
                  if (v1 instanceof Just) {
                    return function __do4() {
                      write(child)(v1.value0.renderChildRef)();
                      var parent2 = parentNode2(v1.value0.node)();
                      var nextSib = nextSibling(v1.value0.node)();
                      var machine$prime = step2(v1.value0.machine, v);
                      var newNode = extract2(machine$prime);
                      when6(not2(unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent2))();
                      return {
                        machine: machine$prime,
                        node: newNode,
                        renderChildRef: v1.value0.renderChildRef
                      };
                    };
                  }
                  ;
                  throw new Error("Failed pattern match at Halogen.VDom.Driver (line 157, column 5 - line 173, column 80): " + [v1.constructor.name]);
                };
              };
            };
          };
          return {
            render: render3,
            renderChild: identity21,
            removeChild: removeChild3,
            dispose: removeChild3
          };
        };
      };
      runUI2 = function(component7) {
        return function(i2) {
          return function(element3) {
            return bind110(liftEffect9(map44(toDocument)(bindFlipped12(document)(windowImpl))))(function(document2) {
              return runUI(renderSpec(document2)(element3))(component7)(i2);
            });
          };
        };
      };
    }
  });

  // output/Main/index.js
  var $$for3, bind20, liftEffect10, component6, $$void11, matchesWith2, when7, notEq3, loadUser, main2;
  var init_Main = __esm({
    "output/Main/index.js"() {
      init_App_Component();
      init_App_Data4();
      init_AppM();
      init_Control4();
      init_Control5();
      init_Data9();
      init_Data25();
      init_Data4();
      init_Data19();
      init_Data29();
      init_Data3();
      init_Effect();
      init_Effect6();
      init_Effect4();
      init_Halogen_Aff();
      init_Halogen4();
      init_Halogen_VDom6();
      init_Routing();
      init_Routing6();
      init_Store();
      init_Undefined();
      $$for3 = /* @__PURE__ */ $$for(applicativeAff)(traversableMaybe);
      bind20 = /* @__PURE__ */ bind(bindAff);
      liftEffect10 = /* @__PURE__ */ liftEffect(monadEffectAff);
      component6 = /* @__PURE__ */ component5(monadAffAppM)(monadStoreAppM)(nowAppM)(logMessagesAppM)(navigateAppM);
      $$void11 = /* @__PURE__ */ $$void(functorAff);
      matchesWith2 = /* @__PURE__ */ matchesWith(foldableEither);
      when7 = /* @__PURE__ */ when(applicativeEffect);
      notEq3 = /* @__PURE__ */ notEq(/* @__PURE__ */ eqMaybe(eqRoute));
      loadUser = function(token) {
        return $$for3(token)(function(v) {
          return undefined2;
        });
      };
      main2 = function(config) {
        return runHalogenAff(bind20(awaitBody)(function(body2) {
          return bind20(bind20(liftEffect10(readToken))(loadUser))(function(v) {
            var initialStore = {
              config,
              currentUser: v
            };
            return bind20(runAppM(initialStore)(component6))(function(rootComponent) {
              return bind20(runUI2(rootComponent)(unit)(body2))(function(halogenIO) {
                return $$void11(liftEffect10(matchesWith2(parse2(routeCodec))(function(old) {
                  return function($$new2) {
                    return when7(notEq3(old)(new Just($$new2)))(launchAff_($$void11(halogenIO.query(mkTell(Navigate.create($$new2))))));
                  };
                })));
              });
            });
          });
        }));
      };
    }
  });

  // config.json
  var config_default;
  var init_config = __esm({
    "config.json"() {
      config_default = {
        url: "http://127.0.0.1:12000",
        emailDomain: "gmail.com",
        logLevel: "dev",
        telegramBot: "bot2096396660:AAFgPJkIGmBOgbWuzvyejPJJo7-HpFgr2CY",
        telegramChat: "-934720023",
        telegramHost: "https://api.telegram.org/",
        build: "a683fa7289615a2e768d3fe7a80de6fd923d696d4c57989e4dd7a02edd81e53a",
        wsUrl: "ws://127.0.1:12000"
      };
    }
  });

  // index.js
  var require_frontend = __commonJS({
    "index.js"(exports, module) {
      init_Main();
      init_config();
      function main3() {
        main2(config_default)();
      }
      if (module.hot) {
        module.hot.accept(function() {
          console.log("Reloaded, running main again");
          main3();
        });
      }
      console.log("Starting app");
      main3();
    }
  });
  require_frontend();
})();
