(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Hjv0:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return w}));var a=e("q1tI"),r=e.n(a),i=(e("i8i4"),e("VphZ")),c=(e("bwSX"),r.a.createElement),o=function(t){return isNaN(t)?"N/A":t.toLocaleString("en")},l=i.e(".1%"),u=["- >30%","- 10-30%","- <10%","Neutral","+ <10%","+ 10-30%","+ >30%"],d=0,s=350,f=44+d,p=18,g=0,h=16+d,m=0,v=s/64,y="Expected Revenue Change";function x(t,n){t.each((function(){for(var t,e=i.n(this),a=e.text().split(/\s+/).reverse(),r=[],c=0,o=e.attr("x"),l=e.attr("y"),u=e.text(null).append("tspan").attr("x",o).attr("y",l).attr("dy","0em");t=a.pop();)r.push(t),u.text(r.join(" ")),u.node().getComputedTextLength()>n&&(r.pop(),u.text(r.join(" ")),r=[t],i.n(this).attr("y",l-2),u=e.append("tspan").attr("x",o).attr("y",l).attr("dy",1.1*++c+0+"em").text(t))}))}function w(t){var n=30,e=10,r=0,w=50,k=25*t.data.length+n+r;return Object(a.useEffect)((function(){var a=i.j().domain(t.data.map((function(t){return t.name}))).range([n,k-r]).padding(.08),c=i.k().range([w,550-e]),b=i.o().keys(u).offset(i.p)(t.data).map((function(t){return t.forEach((function(n){return n.key=t.key})),t})),j=i.l().domain(u).range(i.m[u.length]).unknown("#ccc"),A=i.n("#svg").attr("width",550).attr("height",k).style("display","auto");A.attr("viewBox",[0,0,550,k]).style("overflow","visible"),A.append("g").selectAll("g").data(b).enter().append("g").attr("fill",(function(t){return j(t.key)})).selectAll("rect").data((function(t){return t})).join("rect").attr("x",(function(t){return c(t[0])})).attr("y",(function(t){return a(t.data.name)})).attr("width",(function(t){return c(t[1])-c(t[0])})).attr("height",a.bandwidth()).append("title").text((function(t){return"".concat(t.data.name," ").concat(t.key,"\n            ").concat(l(t[1]-t[0])," (").concat(o(t.data[t.key]),")")})),A.append("g").call((function(t){return t.attr("transform","translate(0,".concat(n,")")).call(i.d(c).ticks(5.5,"%")).call((function(t){return t.selectAll(".domain").remove()}))})),A.append("g").call((function(t){return t.attr("transform","translate(".concat(w,",0)")).call(i.c(a).tickSizeOuter(0)).call((function(t){return t.selectAll(".domain").remove()}))})).selectAll(".tick text").call(x,200);var N,E=i.k().domain([-1,j.range().length-1]).rangeRound([m,s-g]),S=j.domain(),z=i.n("#legend").attr("width",s).attr("height",f).attr("viewBox",[0,0,s,f]).style("overflow","visible").style("display","auto"),B=void 0===N?function(t){return t}:"string"===typeof N?i.e(N):N;z.append("g").selectAll("rect").data(j.range()).join("rect").attr("x",(function(t,n){return E(n-1)})).attr("y",p).attr("width",(function(t,n){return E(n)-E(n-1)})).attr("height",f-p-h).attr("fill",(function(t){return t}));var C=i.i(S.length);N=function(t){return B(S[t],t)},z.append("g").attr("transform","translate(-27, ".concat(f-h,")")).call(i.b(E).ticks(v,"string"===typeof N?N:void 0).tickFormat("function"===typeof N?N:void 0).tickSize(d).tickValues(C)).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.append("text").attr("x",m+27).attr("y",p+h-f-6).attr("text-anchor","start").text(y)}))})),c("div",null,c("svg",{className:"f",id:"legend",width:s,height:f})," ",c("br",null),c("svg",{className:"horizontalBarChart",id:"svg",width:550,height:k}))}}}]);