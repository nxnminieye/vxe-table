(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74817e0e"],{a9e3:function(e,n,t){"use strict";var a=t("83ab"),o=t("da84"),r=t("e330"),s=t("94ca"),l=t("6eeb"),i=t("1a2d"),m=t("7156"),d=t("3a9b"),c=t("d9b5"),u=t("c04e"),f=t("d039"),p=t("241c").f,x=t("06cf").f,g=t("9bf2").f,h=t("408a"),v=t("58a8").trim,b="Number",T=o[b],_=T.prototype,N=o.TypeError,I=r("".slice),w=r("".charCodeAt),M=function(e){var n=u(e,"number");return"bigint"==typeof n?n:k(n)},k=function(e){var n,t,a,o,r,s,l,i,m=u(e,"number");if(c(m))throw N("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=v(m),n=w(m,0),43===n||45===n){if(t=w(m,2),88===t||120===t)return NaN}else if(48===n){switch(w(m,1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+m}for(r=I(m,2),s=r.length,l=0;l<s;l++)if(i=w(r,l),i<48||i>o)return NaN;return parseInt(r,a)}return+m};if(s(b,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var D,y=function(e){var n=arguments.length<1?0:T(M(e)),t=this;return d(_,t)&&f((function(){h(t)}))?m(Object(n),t,y):n},C=a?p(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;C.length>E;E++)i(T,D=C[E])&&!i(y,D)&&g(y,D,x(T,D));y.prototype=_,_.constructor=y,l(o,b,y)}},f95c:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v(" 表尾合并行或列，通过 "),t("table-api-link",{attrs:{prop:"merge-footer-items"}}),e._v(" 临时合并，或者自定义 "),t("table-api-link",{attrs:{prop:"footer-span-method"}}),e._v(" 合并方法"),t("br"),t("span",{staticClass:"red"},[e._v("（注："),t("table-api-link",{attrs:{prop:"footer-span-method"}}),e._v(" ，不能用于虚拟滚动、树形结构、展开行、固定列，合并的逻辑都是自行实现的，该示例仅供参考）")],1)],1),t("vxe-table",{attrs:{border:"","show-footer":"",height:"400","merge-footer-items":e.mergeFooterItems,"footer-method":e.footerMethod,data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"role",title:"Role",sortable:""}}),t("vxe-column",{attrs:{field:"rate",title:"Rate","footer-align":"center"}}),t("vxe-column",{attrs:{field:"age",title:"Age","footer-align":"center"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("合并列")]),t("vxe-table",{attrs:{border:"","show-footer":"",height:"400","footer-span-method":e.footerColspanMethod,"footer-method":e.footerMethod,data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"role",title:"Role",sortable:""}}),t("vxe-column",{attrs:{field:"rate",title:"Rate","footer-align":"center"}}),t("vxe-column",{attrs:{field:"age",title:"Age","footer-align":"center"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")],1),t("p",{staticClass:"tip"},[e._v("合并行")]),t("vxe-table",{attrs:{border:"","show-footer":"",height:"400","footer-span-method":e.footerRowspanMethod,"footer-method":e.footerMethod,data:e.tableData}},[t("vxe-column",{attrs:{type:"seq",width:"60"}}),t("vxe-column",{attrs:{field:"name",title:"Name",sortable:""}}),t("vxe-column",{attrs:{field:"role",title:"Role",sortable:""}}),t("vxe-column",{attrs:{field:"rate",title:"Rate","footer-align":"center"}}),t("vxe-column",{attrs:{field:"age",title:"Age","footer-align":"center"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")],1)],1)},o=[],r=(t("d3b7"),t("159b"),t("a9e3"),t("d81d"),t("caad"),{data:function(){return{tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"Man",age:35,address:"test abc"}],mergeFooterItems:[{row:0,col:1,rowspan:1,colspan:3}],demoCodes:['\n        <vxe-table\n          border\n          show-footer\n          height="400"\n          :merge-footer-items="mergeFooterItems"\n          :footer-method="footerMethod"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="role" title="Role" sortable></vxe-column>\n          <vxe-column field="rate" title="Rate" footer-align="center"></vxe-column>\n          <vxe-column field="age" title="Age" footer-align="center"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              mergeFooterItems: [\n                { row: 0, col: 1, rowspan: 1, colspan: 3 }\n              ],\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.meanNum(data, 'age')\n                  }\n                  if (['name'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  if (['content'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  return null\n                }),\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, 'age')\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          show-footer\n          height="400"\n          :footer-span-method="footerColspanMethod"\n          :footer-method="footerMethod"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="role" title="Role" sortable></vxe-column>\n          <vxe-column field="rate" title="Rate" footer-align="center"></vxe-column>\n          <vxe-column field="age" title="Age" footer-align="center"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.meanNum(data, 'age')\n                  }\n                  if (['name'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  if (['content'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  return null\n                }),\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, 'age')\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            },\n            footerColspanMethod ({ _columnIndex }) {\n              if ($rowIndex === 0) {\n                if (_columnIndex === 1) {\n                  return {\n                    rowspan: 1,\n                    colspan: 2\n                  }\n                } else if (_columnIndex === 2) {\n                  return {\n                    rowspan: 0,\n                    colspan: 0\n                  }\n                }\n              }\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          show-footer\n          height="400"\n          :footer-span-method="footerRowspanMethod"\n          :footer-method="footerMethod"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" sortable></vxe-column>\n          <vxe-column field="role" title="Role" sortable></vxe-column>\n          <vxe-column field="rate" title="Rate" footer-align="center"></vxe-column>\n          <vxe-column field="age" title="Age" footer-align="center"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            meanNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              const footerData = [\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.meanNum(data, 'age')\n                  }\n                  if (['name'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  if (['content'].includes(column.property)) {\n                    return '合并了'\n                  }\n                  return null\n                }),\n                columns.map((column, _columnIndex) => {\n                  if (_columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return this.sumNum(data, 'age')\n                  }\n                  return null\n                })\n              ]\n              return footerData\n            },\n            footerRowspanMethod ({ _rowIndex, _columnIndex }) {\n              if (_rowIndex === 0) {\n                if (_columnIndex === 1) {\n                  return { rowspan: 2, colspan: 1 }\n                }\n              } else if (_rowIndex === 1) {\n                if (_columnIndex === 1) {\n                  return { rowspan: 0, colspan: 0 }\n                }\n              }\n            }\n          }\n        }\n        "]}},methods:{meanNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t/e.length},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},footerMethod:function(e){var n=this,t=e.columns,a=e.data,o=[t.map((function(e,t){return 0===t?"平均":["age","rate"].includes(e.property)?n.meanNum(a,"age"):["name"].includes(e.property)||["content"].includes(e.property)?"合并了":null})),t.map((function(e,t){return 0===t?"和值":["age","rate"].includes(e.property)?n.sumNum(a,"age"):null}))];return o},footerColspanMethod:function(e){var n=e.$rowIndex,t=e._columnIndex;if(0===n){if(1===t)return{rowspan:1,colspan:2};if(2===t)return{rowspan:0,colspan:0}}},footerRowspanMethod:function(e){var n=e._rowIndex,t=e._columnIndex;if(0===n){if(1===t)return{rowspan:2,colspan:1}}else if(1===n&&1===t)return{rowspan:0,colspan:0}}}}),s=r,l=t("2877"),i=Object(l["a"])(s,a,o,!1,null,null,null);n["default"]=i.exports}}]);