(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-132a4295"],{"4df4":function(e,t,n){"use strict";var a=n("da84"),o=n("0366"),r=n("c65b"),l=n("7b0b"),i=n("9bdd"),d=n("e95a"),s=n("68ee"),u=n("07fa"),c=n("8418"),f=n("9a1f"),p=n("35a1"),b=a.Array;e.exports=function(e){var t=l(e),n=s(this),a=arguments.length,m=a>1?arguments[1]:void 0,h=void 0!==m;h&&(m=o(m,a>2?arguments[2]:void 0));var v,g,x,y,w,_,C=p(t),A=0;if(!C||this==b&&d(C))for(v=u(t),g=n?new this(v):b(v);v>A;A++)_=h?m(t[A],A):t[A],c(g,A,_);else for(y=f(t,C),w=y.next,g=n?new this:[];!(x=r(w,y)).done;A++)_=h?i(y,m,[x.value,A],!0):x.value,c(g,A,_);return g.length=A,g}},"9bdd":function(e,t,n){var a=n("825a"),o=n("2a62");e.exports=function(e,t,n,r){try{return r?t(a(n)[0],n[1]):t(n)}catch(l){o(e,"throw",l)}}},a630:function(e,t,n){var a=n("23e7"),o=n("4df4"),r=n("1c7e"),l=!r((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:l},{from:o})},c2d0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 通过表尾来实现合计功能"),n("br"),n("span",{staticClass:"red"},[e._v("（注："),n("table-api-link",{attrs:{prop:"footer-method"}}),e._v(" 表尾的数据都是自行生成的，该示例仅供参考）")],1)]),n("vxe-grid",{attrs:{border:"",stripe:"",resizable:"","show-footer":"",height:"500","export-config":{},"toolbar-config":e.tableToolbar,"footer-method":e.footerMethod,columns:e.tableColumn,data:e.tableData}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")])],1)},o=[],r=(n("fb6a"),n("d3b7"),n("159b"),n("a630"),n("3ca3"),n("d81d"),n("caad"),n("c695")),l=n.n(r),i=n("f4e8"),d=n.n(i),s={data:function(){return{tableColumn:[{type:"seq",width:60},{field:"name",title:"app.body.label.name"},{field:"sex",title:"app.body.label.sex"},{field:"age",title:"Age",sortable:!0},{field:"rate",title:"Rate"}],tableToolbar:{export:!0,zoom:!0},tableData:[],demoCodes:['\n        <vxe-grid\n          border\n          stripe\n          resizable\n          show-footer\n          height="500"\n          :export-config="{}"\n          :toolbar-config="tableToolbar"\n          :footer-method="footerMethod"\n          :columns="tableColumn"\n          :data="tableData"></vxe-grid>\n        ',"\n        export default {\n          data () {\n            return {\n              tableColumn: [\n                { type: 'seq', width: 60 },\n                { field: 'name', title: 'app.body.label.name' },\n                { field: 'sex', title: 'app.body.label.sex' },\n                { field: 'age', title: 'Age', sortable: true },\n                { field: 'rate', title: 'Rate' }\n              ],\n              tableToolbar: {\n                export: true,\n                zoom: true\n              },\n              tableData: []\n            }\n          },\n          created () {\n            this.tableData = window.MOCK_DATA_LIST.slice(0, 15)\n          },\n          methods: {\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return XEUtils.sum(data, column.property)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return XEUtils.mean(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        "]}},created:function(){this.tableData=window.MOCK_DATA_LIST.slice(0,15)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){d.a.highlightBlock(e)}))},methods:{footerMethod:function(e){var t=e.columns,n=e.data;return[t.map((function(e,t){return 0===t?"和值":["age","rate"].includes(e.property)?l.a.sum(n,e.property):null})),t.map((function(e,t){return 0===t?"平均":["age","rate"].includes(e.property)?l.a.mean(n,e.property):null}))]}}},u=s,c=n("2877"),f=Object(c["a"])(u,a,o,!1,null,null,null);t["default"]=f.exports}}]);