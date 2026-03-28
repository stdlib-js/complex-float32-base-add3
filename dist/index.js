"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var C=x(function(J,y){
var t=require('@stdlib/number-float64-base-to-float32/dist'),B=require('@stdlib/complex-float32-ctor/dist'),g=require('@stdlib/complex-float32-real/dist'),m=require('@stdlib/complex-float32-imag/dist');function D(e,r,i){var a=t(g(e)+t(g(r)+g(i))),n=t(m(e)+t(m(r)+m(i)));return new B(a,n)}y.exports=D
});var b=x(function(K,R){
var q=require('@stdlib/number-float64-base-to-float32/dist');function E(e,r,i,a,n,v,s,c,u){return s[u]=q(e+q(i+n)),s[u+c]=q(r+q(a+v)),s}R.exports=E
});var j=x(function(L,h){
var d=require('@stdlib/number-float64-base-to-float32/dist');function F(e,r,i,a,n,v,s,c,u,p,A,w){return p[w]=d(e[i]+d(a[v]+s[u])),p[w+A]=d(e[i+r]+d(a[v+n]+s[u+c])),p}h.exports=F
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=C(),G=b(),H=j();k(l,"assign",G);k(l,"strided",H);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
