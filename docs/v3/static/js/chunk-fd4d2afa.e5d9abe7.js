(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd4d2afa"],{"1a62":function(t,e,n){},2638:function(t,e,n){"use strict";function o(){return o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)}var s=["attrs","props","domProps"],a=["class","style","directives"],r=["on","nativeOn"],i=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==s.indexOf(n))t[n]=o({},t[n],e[n]);else if(-1!==a.indexOf(n)){var i=t[n]instanceof Array?t[n]:[t[n]],d=e[n]instanceof Array?e[n]:[e[n]];t[n]=i.concat(d)}else if(-1!==r.indexOf(n))for(var c in e[n])if(t[n][c]){var u=t[n][c]instanceof Array?t[n][c]:[t[n][c]],f=e[n][c]instanceof Array?e[n][c]:[e[n][c]];t[n][c]=u.concat(f)}else t[n][c]=e[n][c];else if("hook"==n)for(var p in e[n])t[n][p]=t[n][p]?l(t[n][p],e[n][p]):e[n][p];else t[n]=e[n];else t[n]=e[n];return t}),{})},l=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=i},"93bd":function(t,e,n){"use strict";n("1a62")},c890:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"tip"},[t._v(" 使用自定义模板渲染，通过 "),n("table-column-api-link",{attrs:{prop:"slots"}}),t._v(" 属性编写 "),n("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX",target:"_blank"}},[t._v("JSX")]),t._v(" 模板或 "),n("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM",target:"_blank"}},[t._v("VNode")]),n("br")],1),n("vxe-grid",{ref:"xGrid",staticClass:"my-grid88",attrs:{border:"",resizable:"","show-overflow":"",height:"400",loading:t.loading,"toolbar-config":t.tableToolbar,columns:t.tableColumn,"edit-config":{trigger:"click",mode:"cell"}},scopedSlots:t._u([{key:"name_header",fn:function(){return[n("div",{staticClass:"first-col"},[n("div",{staticClass:"first-col-top"},[t._v("名称")]),n("div",{staticClass:"first-col-bottom"},[t._v("类型")])])]},proxy:!0},{key:"default_name",fn:function(e){var o=e.row,s=e.column;return[n("span",{staticStyle:{color:"red"}},[t._v(t._s(o.name))]),t._v(", "),n("button",{on:{click:function(e){return t.showDetailEvent(o,s)}}},[t._v("弹框")])]}}])}),n("vxe-modal",{attrs:{title:"查看详情",width:"800",height:"400",resize:""},scopedSlots:t._u([{key:"default",fn:function(){return[t.selectRow?n("div",{domProps:{innerHTML:t._s(t.selectRow.address)}}):t._e()]},proxy:!0}]),model:{value:t.showDetails,callback:function(e){t.showDetails=e},expression:"showDetails"}}),n("p",{staticClass:"demo-code"},[t._v(t._s(t.$t("app.body.button.showCode")))]),n("pre",[t._v("    "),n("pre-code",{staticClass:"xml"},[t._v(t._s(t.demoCodes[0]))]),t._v("\n    "),n("pre-code",{staticClass:"javascript"},[t._v(t._s(t.demoCodes[1]))]),t._v("\n    "),n("pre-code",{staticClass:"css"},[t._v(t._s(t.demoCodes[2]))]),t._v("\n  ")],1)],1)},s=[],a=n("2638"),r=n.n(a),i=(n("d81d"),n("d3b7"),n("a388")),l=n.n(i),d={data:function(){var t=this,e=this.$createElement;return{loading:!1,showDetails:!1,selectRow:null,tableColumn:[{type:"seq",width:50},{field:"name",title:"Name",width:200,resizable:!1,slots:{header:"name_header",default:"default_name"}},{field:"sex",title:"Sex",showHeaderOverflow:!0,filters:[{data:""}],filterMethod:this.filterSexMethod,editRender:{},slots:{default:function(t){var n=t.row;return[e("a",{class:"link",attrs:{href:"https://x-extends.github.io/vxe-table/"}},["我是超链接：",n.sex])]},header:function(n){var o=n.column;return[e("span",[e("i",["@"]),e("span",{style:"color: red;",on:{click:t.headerClickEvent}},[o.title])])]},filter:function(n){var o=n.column,s=n.$panel;return o.filters.map((function(n){return e("input",r()([{on:{input:[function(e){e.target.composing||t.$set(n,"data",e.target.value)},function(e){return t.changeFilterEvent(e,n,s)}]},attrs:{type:"type"},domProps:{value:n.data}},{directives:[{name:"model",value:n.data,modifiers:{}}]}]))}))},edit:function(n){var o=n.row;return[e("input",r()([{on:{input:function(e){e.target.composing||t.$set(o,"sex",e.target.value)}},attrs:{type:"text"},domProps:{value:o.sex}},{directives:[{name:"model",value:o.sex,modifiers:{}}]}]))]}}},{field:"address",title:"Address",slots:{default:function(n){var o=n.row;return[e("span",{style:"color: blue",on:{click:function(){return t.addressClickEvent(o)}}},[o.address])]}}},{field:"html2",title:"Html片段",slots:{default:function(t){var n=t.row;return[e("span",{domProps:{innerHTML:n.html2}})]}}},{field:"img1",title:"图片路径",slots:{default:function(t){var n=t.row;return[n.img1?e("img",{attrs:{src:n.img1},style:"height: 40px;"}):e("span",["无"])]}}}],tableToolbar:{custom:!0,slots:{buttons:function(){return[e("button",["按钮"]),e("input",{attrs:{type:"text"}}),e("vxe-button",["按钮1"]),e("vxe-button",["按钮2"])]}}},demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          show-overflow\n          class="my-grid88"\n          ref="xGrid"\n          height="400"\n          :loading="loading"\n          :toolbar-config="tableToolbar"\n          :columns="tableColumn"\n          :edit-config="{trigger: \'click\', mode: \'cell\'}">\n          <template #name_header>\n            <div class="first-col">\n              <div class="first-col-top">名称</div>\n              <div class="first-col-bottom">类型</div>\n            </div>\n          </template>\n\n          <template #default_name="{ row, column }">\n            <span style="color: red;">{{ row.name }}</span>,\n            <button @click="showDetailEvent(row, column)">弹框</button>\n          </template>\n        </vxe-grid>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>\n          <template #default>\n            <div v-if="selectRow" v-html="selectRow.address"></div>\n          </template>\n        </vxe-modal>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              loading: false,\n              showDetails: false,\n              selectRow: null,\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name', width: 200, resizable: false, slots: { header: 'name_header', default: 'default_name' } },\n                {\n                  field: 'sex',\n                  title: 'Sex',\n                  showHeaderOverflow: true,\n                  filters: [{ data: '' }],\n                  filterMethod: this.filterSexMethod,\n                  editRender: {},\n                  slots: {\n                    default: ({ row, column }) => {\n                      return [\n                        <a class=\"link\" href=\"https://x-extends.github.io/vxe-table/\">我是超链接：{ row.sex }</a>\n                      ]\n                    },\n                    header: ({ column }) => {\n                      return [\n                        <span>\n                          <i>@</i>\n                          <span style=\"color: red;\" onClick={ this.headerClickEvent }>{ column.title }</span>\n                        </span>\n                      ]\n                    },\n                    filter: ({ column, $panel }) => {\n                      return column.filters.map(option => {\n                        return <input type=\"type\" v-model={ option.data } onInput={ evnt => this.changeFilterEvent(evnt, option, $panel) }/>\n                      })\n                    },\n                    edit: ({ row }) => {\n                      return [\n                        <input type=\"text\" v-model={ row.sex } />\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'address',\n                  title: 'Address',\n                  slots: {\n                    default: ({ row }) => {\n                      return [\n                        <span style=\"color: blue\" onClick={ () => this.addressClickEvent(row) }>{ row.address }</span>\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'html2',\n                  title: 'Html片段',\n                  slots: {\n                    default: ({ row }, h) => {\n                      return [\n                        <span domPropsInnerHTML={ row.html2 }></span>\n                      ]\n                    }\n                  }\n                },\n                {\n                  field: 'img1',\n                  title: '图片路径',\n                  slots: {\n                    default: ({ row }, h) => {\n                      return [\n                        row.img1 ? <img src={ row.img1 } style=\"width: 100px;\"/> : <span>无</span>\n                      ]\n                    }\n                  }\n                }\n              ],\n              tableToolbar: {\n                custom: true,\n                slots: {\n                  buttons: () => {\n                    return [\n                      <button>按钮</button>,\n                      <input type=\"text\"/>,\n                      <vxe-button>按钮1</vxe-button>,\n                      <vxe-button>按钮2</vxe-button>\n                    ]\n                  }\n                }\n              },\n              tableData: []\n            }\n          },\n          created () {\n            this.loading = true\n            setTimeout(() => {\n              this.mockList(400).then(data => {\n                // 使用函数式加载\n                if (this.$refs.xGrid) {\n                  this.$refs.xGrid.loadData(data)\n                }\n                this.loading = false\n              })\n            }, 500)\n          },\n          methods: {\n            mockList (size) {\n              return new Promise(resolve => {\n                const list = []\n                for (let index = 0; index < size; index++) {\n                  list.push({\n                    name: `名称${index}`,\n                    sex: '0',\n                    num: 123,\n                    age: 18,\n                    num2: 234,\n                    rate: 3,\n                    img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif',\n                    html2: `<span style=\"color:red\">HTML标签${index}</span>`,\n                    address: `test abc系列${index}`\n                  })\n                }\n                resolve(list)\n              })\n            },\n            showDetailEvent (row) {\n              this.selectRow = row\n              this.showDetails = true\n            },\n            headerClickEvent (evnt) {\n              VXETable.modal.alert('头部点击事件')\n            },\n            addressClickEvent (row) {\n              VXETable.modal.alert(`address点击事件：${row.address}`)\n            },\n            filterSexMethod ({ option, row }) {\n              return row.sex === option.data\n            },\n            changeFilterEvent (evnt, option, $panel) {\n              $panel.changeOption(evnt, !!option.data, option)\n            }\n          }\n        }\n        ",'\n        .my-grid88 .first-col {\n          position: relative;\n          height: 20px;\n        }\n        .my-grid88 .first-col:before {\n          content: "";\n          position: absolute;\n          left: -14px;\n          top: 10px;\n          width: 204px;\n          height: 1px;\n          transform: rotate(13deg);\n          background-color: #e8eaec;\n        }\n        .my-grid88 .first-col .first-col-top {\n          position: absolute;\n          right: 4px;\n          top: -10px;\n        }\n        .my-grid88 .first-col .first-col-bottom {\n          position: absolute;\n          left: 4px;\n          bottom: -10px;\n        }\n        ']}},created:function(){var t=this;this.loading=!0,setTimeout((function(){t.mockList(400).then((function(e){t.$refs.xGrid&&t.$refs.xGrid.loadData(e),t.loading=!1}))}),500)},methods:{mockList:function(t){return new Promise((function(e){for(var n=[],o=0;o<t;o++)n.push({name:"名称".concat(o),sex:"0",num:123,age:18,num2:234,rate:3,img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif",html2:'<span style="color:red">HTML标签'.concat(o,"</span>"),address:"test abc系列".concat(o)});e(n)}))},showDetailEvent:function(t){this.selectRow=t,this.showDetails=!0},headerClickEvent:function(){l.a.modal.alert("头部点击事件")},addressClickEvent:function(t){l.a.modal.alert("address点击事件：".concat(t.address))},filterSexMethod:function(t){var e=t.option,n=t.row;return n.sex===e.data},changeFilterEvent:function(t,e,n){n.changeOption(t,!!e.data,e)}}},c=d,u=(n("93bd"),n("2877")),f=Object(u["a"])(c,o,s,!1,null,"38481779",null);e["default"]=f.exports}}]);