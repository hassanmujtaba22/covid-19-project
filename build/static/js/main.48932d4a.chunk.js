(this["webpackJsonpcovid-19-tracker-bootcamp"]=this["webpackJsonpcovid-19-tracker-bootcamp"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2yuny",card:"Cards_card__27UXz",infected:"Cards_infected__4tgG6",recovered:"Cards_recovered__2kz8h",deaths:"Cards_deaths__25oUN"}},206:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(72),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(73),d=a(74),p=a(83),m=a(82),f=a(31),v=a(44),h=a(32),b=a.n(h),y="https://covid19.mathdro.id/api",E=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r,n,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=y,t&&(a="".concat(y,"/countries/").concat(t)),e.prev=2,e.next=5,b.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,u=n.deaths,l=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(y,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=a(76),_=a.n(x),k=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,i=Object(r.useState)({}),d=Object(f.a)(i,2),p=d[0],m=d[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=a?n.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,b=p[0]?n.a.createElement(v.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.recovered})),label:"Recovered",color:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return n.a.createElement("div",{className:_.a.container},u?h:b)},O=a(227),j=a(226),w=a(77),S=a.n(w),D=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),c=Object(f.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,C();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(O.a,{className:S.a.formControl},n.a.createElement(j.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},n.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return n.a.createElement("option",{key:t,value:e},e)}))))},N=a(223),I=a(228),U=a(224),A=a(225),B=a(33),V=a.n(B),z=a(34),G=a.n(z),J=a(13),R=a.n(J),T=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?n.a.createElement("div",{className:R.a.container},n.a.createElement(N.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:G()(R.a.card,R.a.infected)},n.a.createElement(U.a,null,n.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Infected"),n.a.createElement(A.a,{variant:"h5",component:"h2"},n.a.createElement(V.a,{start:0,end:a.value,duration:2.75,separator:","})),n.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(A.a,{color:"textSecondary",variant:"body2",component:"p"},"Number of active cases of COVID-19."))),n.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:G()(R.a.card,R.a.recovered)},n.a.createElement(U.a,null,n.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(A.a,{variant:"h5",component:"h2"},n.a.createElement(V.a,{start:0,end:r.value,duration:2.75,separator:","})),n.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(A.a,{color:"textSecondary",variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),n.a.createElement(N.a,{item:!0,xs:12,md:3,component:I.a,className:G()(R.a.card,R.a.deaths)},n.a.createElement(U.a,null,n.a.createElement(A.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(A.a,{variant:"h5",component:"h2"},n.a.createElement(V.a,{start:0,end:c.value,duration:2.75,separator:","})),n.a.createElement(A.a,{color:"textSecondary"},new Date(o).toDateString()),n.a.createElement(A.a,{color:"textSecondary",variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},L=a(46),M=a.n(L),P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:M.a.container},n.a.createElement("h2",null,"COVID-19 Tracker App"),n.a.createElement(D,{handleCountryChange:this.handleCountryChange}),n.a.createElement(T,{data:t}),n.a.createElement(k,{data:t,country:a})),n.a.createElement("p",{className:M.a.Copyright},"All Copyright \xa9 reserved to ",n.a.createElement("strong",null,"Hassan Mujtaba"),"."))}}]),a}(n.a.Component);o.a.render(n.a.createElement(P,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__T9L5j",Copyright:"App_Copyright__3UzTi"}},76:function(e,t,a){e.exports={container:"Chart_container__BYJ5Z"}},77:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__klGll"}},86:function(e,t,a){e.exports=a(206)}},[[86,1,2]]]);
//# sourceMappingURL=main.48932d4a.chunk.js.map