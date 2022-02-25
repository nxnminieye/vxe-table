(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1ebe82"],{a9e3:function(e,n,t){"use strict";var r=t("83ab"),a=t("da84"),o=t("e330"),i=t("94ca"),s=t("6eeb"),c=t("1a2d"),d=t("7156"),l=t("3a9b"),u=t("d9b5"),m=t("c04e"),p=t("d039"),b=t("241c").f,f=t("06cf").f,g=t("9bf2").f,h=t("408a"),T=t("58a8").trim,O="Number",j=a[O],x=j.prototype,v=a.TypeError,N=o("".slice),y=o("".charCodeAt),k=function(e){var n=m(e,"number");return"bigint"==typeof n?n:I(n)},I=function(e){var n,t,r,a,o,i,s,c,d=m(e,"number");if(u(d))throw v("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=T(d),n=y(d,0),43===n||45===n){if(t=y(d,2),88===t||120===t)return NaN}else if(48===n){switch(y(d,1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+d}for(o=N(d,2),i=o.length,s=0;s<i;s++)if(c=y(o,s),c<48||c>a)return NaN;return parseInt(o,r)}return+d};if(i(O,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var S,E=function(e){var n=arguments.length<1?0:j(k(e)),t=this;return l(x,t)&&p((function(){h(t)}))?d(Object(n),t,E):n},z=r?b(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;z.length>M;M++)c(j,S=z[M])&&!c(E,S)&&g(E,S,f(j,S));E.prototype=x,x.constructor=E,s(a,O,E)}},ede6:function(e,n,t){"use strict";t.r(n);var r=t("7a23"),a={class:"tip"},o=Object(r["l"])(" 通过表尾来实现合计功能"),i=Object(r["j"])("br",null,null,-1),s={class:"red"},c=Object(r["l"])("（注："),d=Object(r["l"])(" 表尾的数据都是自行生成的，该示例仅供参考）"),l={class:"demo-code"},u=Object(r["l"])("      "),m=Object(r["l"])("\r\n      "),p=Object(r["l"])("\r\n    ");function b(e,n,t,b,f,g){var h=Object(r["L"])("table-api-link"),T=Object(r["L"])("vxe-grid"),O=Object(r["L"])("pre-code");return Object(r["D"])(),Object(r["i"])("div",null,[Object(r["j"])("p",a,[o,i,Object(r["j"])("span",s,[c,Object(r["m"])(h,{prop:"footer-method"}),d])]),Object(r["m"])(T,Object(r["w"])(Object(r["p"])(e.gridOptions)),null,16),Object(r["j"])("p",l,Object(r["O"])(e.$t("app.body.button.showCode")),1),Object(r["j"])("pre",null,[u,Object(r["m"])(O,{class:"xml"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[0]),1)]})),_:1}),m,Object(r["m"])(O,{class:"typescript"},{default:Object(r["V"])((function(){return[Object(r["l"])(Object(r["O"])(e.demoCodes[1]),1)]})),_:1}),p])])}t("d3b7"),t("159b"),t("a9e3"),t("d81d"),t("caad");var f=Object(r["n"])({setup:function(){var e=function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},n=function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},t=Object(r["H"])({border:!0,stripe:!0,showFooter:!0,height:400,exportConfig:{},columnConfig:{resizable:!0},toolbarConfig:{export:!0,zoom:!0},columns:[{type:"seq",width:60},{field:"name",title:"app.body.label.name"},{field:"sex",title:"app.body.label.sex"},{field:"age",title:"Age",sortable:!0},{field:"rate",title:"Rate"}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,rate:6,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,rate:5,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,rate:4,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,rate:1,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,rate:5,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,rate:2,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,rate:7,address:"Shenzhen"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,rate:5,address:"Shenzhen"}],footerMethod:function(t){var r=t.columns,a=t.data;return[r.map((function(e,t){return 0===t?"和值":["age","rate"].includes(e.property)?n(a,e.property):""})),r.map((function(n,t){return 0===t?"平均":["age","rate"].includes(n.property)?e(a,n.property):""}))]}});return{gridOptions:t,demoCodes:['\n        <vxe-grid v-bind="gridOptions"></vxe-grid>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeGridProps } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const gridOptions = reactive<VxeGridProps>({\n              border: true,\n              stripe: true,\n              showFooter: true,\n              height: 400,\n              exportConfig: {},\n              columnConfig: {\n                resizable: true\n              },\n              toolbarConfig: {\n                export: true,\n                zoom: true\n              },\n              columns: [\n                { type: 'seq', width: 60 },\n                { field: 'name', title: 'app.body.label.name' },\n                { field: 'sex', title: 'app.body.label.sex' },\n                { field: 'age', title: 'Age', sortable: true },\n                { field: 'rate', title: 'Rate' }\n              ],\n              data: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, rate: 6, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, rate: 5, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, rate: 4, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, rate: 1, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, rate: 5, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, rate: 2, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, rate: 7, address: 'Shenzhen' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, rate: 5, address: 'Shenzhen' }\n              ],\n              footerMethod ({ columns, data }) {\n                return [\n                  columns.map((column, columnIndex) => {\n                    if (columnIndex === 0) {\n                      return '和值'\n                    }\n                    if (['age', 'rate'].includes(column.property)) {\n                      return sumNum(data, column.property)\n                    }\n                    return ''\n                  }),\n                  columns.map((column, columnIndex) => {\n                    if (columnIndex === 0) {\n                      return '平均'\n                    }\n                    if (['age', 'rate'].includes(column.property)) {\n                      return meanNum(data, column.property)\n                    }\n                    return ''\n                  })\n                ]\n              }\n            })\n\n            return {\n              gridOptions\n              ]\n            }\n          }\n        })\n        "]}}}),g=t("6b0d"),h=t.n(g);const T=h()(f,[["render",b]]);n["default"]=T}}]);