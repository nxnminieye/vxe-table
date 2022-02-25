(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22b935"],{f00e:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l={class:"tip"},d=Object(a["l"])(" 树表格的懒加载，通过配置 "),o=Object(a["l"])("."),i=Object(a["l"])(" 和 "),r=Object(a["l"])("={"),c=Object(a["l"])(", "),s=Object(a["l"])("} 加载方法来开启树形懒加载"),u=Object(a["j"])("br",null,null,-1),m=Object(a["l"])(" 当启用懒加载后，必须通过 "),b=Object(a["l"])(" 属性来标识是否存在子节点，从而控制该节点是否允许被点击"),p=Object(a["j"])("br",null,null,-1),f=Object(a["j"])("span",{class:"red"},"（注：懒加载启用后一次只允许异步加载一层根节点）",-1),j=Object(a["l"])("切换第二行展开"),O=Object(a["l"])("设置第二、四行展开"),h=Object(a["l"])("展开所有"),x=Object(a["l"])("关闭所有"),v={class:"demo-code"},y=Object(a["l"])("      "),T=Object(a["l"])("\r\n      "),C=Object(a["l"])("\r\n    "),w={class:"tip"},z=Object(a["l"])("通过设置 "),g=Object(a["l"])(" 属性默认展开指定节点"),I={class:"demo-code"},k=Object(a["l"])("      "),D=Object(a["l"])("\r\n      "),V=Object(a["l"])("\r\n    ");function F(e,t,n,F,_,M){var $=Object(a["L"])("table-api-link"),E=Object(a["L"])("vxe-button"),P=Object(a["L"])("vxe-toolbar"),q=Object(a["L"])("vxe-column"),L=Object(a["L"])("vxe-table"),K=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("p",l,[d,Object(a["m"])($,{prop:"row-config"}),o,Object(a["m"])($,{prop:"keyField"}),i,Object(a["m"])($,{prop:"tree-config"}),r,Object(a["m"])($,{prop:"lazy"}),c,Object(a["m"])($,{prop:"loadMethod"}),s,u,m,Object(a["m"])($,{prop:"hasChild"}),b,p,f]),Object(a["m"])(P,null,{buttons:Object(a["V"])((function(){return[Object(a["m"])(E,{onClick:t[0]||(t[0]=function(t){return e.$refs.xTree.toggleTreeExpand(e.demo1.tableData[1])})},{default:Object(a["V"])((function(){return[j]})),_:1}),Object(a["m"])(E,{onClick:t[1]||(t[1]=function(t){return e.$refs.xTree.setTreeExpand([e.demo1.tableData[1],e.demo1.tableData[3]],!0)})},{default:Object(a["V"])((function(){return[O]})),_:1}),Object(a["m"])(E,{onClick:t[2]||(t[2]=function(t){return e.$refs.xTree.setAllTreeExpand(!0)})},{default:Object(a["V"])((function(){return[h]})),_:1}),Object(a["m"])(E,{onClick:t[3]||(t[3]=function(t){return e.$refs.xTree.clearTreeExpand()})},{default:Object(a["V"])((function(){return[x]})),_:1})]})),_:1}),Object(a["m"])(L,{border:"",ref:"xTree","row-config":{keyField:"id"},"column-config":{resizable:!0},"tree-config":{transform:!0,rowField:"id",parentField:"parentId",lazy:!0,hasChild:"hasChild",loadMethod:e.loadChildrenMethod},data:e.demo1.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(q,{type:"seq",width:"60"}),Object(a["m"])(q,{field:"name",title:"Name",width:"400","tree-node":""}),Object(a["m"])(q,{field:"size",title:"Size"}),Object(a["m"])(q,{field:"type",title:"Type"}),Object(a["m"])(q,{field:"date",title:"Date"})]})),_:1},8,["tree-config","data"]),Object(a["j"])("p",v,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[y,Object(a["m"])(K,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),T,Object(a["m"])(K,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),C]),Object(a["j"])("p",w,[z,Object(a["m"])($,{prop:"expandRowKeys"}),g]),Object(a["m"])(L,{border:"","row-config":{keyField:"id"},"column-config":{resizable:!0},loading:e.demo2.loading,"checkbox-config":{labelField:"name"},"tree-config":e.demo2.tableTree,data:e.demo2.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(q,{type:"checkbox",title:"Name",width:"400","tree-node":""}),Object(a["m"])(q,{field:"size",title:"Size"}),Object(a["m"])(q,{field:"type",title:"Type"}),Object(a["m"])(q,{field:"date",title:"Date"})]})),_:1},8,["loading","tree-config","data"]),Object(a["j"])("p",I,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[k,Object(a["m"])(K,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[2]),1)]})),_:1}),D,Object(a["m"])(K,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[3]),1)]})),_:1}),V])])}n("d3b7"),n("b0c0");var _=Object(a["n"])({setup:function(){var e=Object(a["H"])({tableData:[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0},{id:23666,parentId:null,name:"Test23",type:"mp4",size:null,date:"2021-01-02",hasChild:!0},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}]}),t=function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var n=[{id:t.id+1e5,parentId:t.id,name:t.name+"Test45",type:"mp4",size:null,date:"2021-10-03",hasChild:!0},{id:t.id+15e4,parentId:t.id,name:t.name+"Test56",type:"mp3",size:null,date:"2021-07-09",hasChild:!1}];e(n)}),500)}))},n=Object(a["H"])({loading:!1,tableTree:{lazy:!0,transform:!0,hasChild:"hasChild",expandRowKeys:[],iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o",loadMethod:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var n=[{id:t.id+1e5,parentId:t.id,name:t.name+"Test45",type:"mp4",size:null,date:"2021-10-03",hasChild:!0},{id:t.id+15e4,parentId:t.id,name:t.name+"Test56",type:"mp3",size:null,date:"2021-07-09",hasChild:!1}];e(n)}),500)}))}},tableData:[]});return n.loading=!0,setTimeout((function(){n.loading=!1,n.tableTree.expandRowKeys=[10050,23666],n.tableData=[{id:1e4,parentId:null,name:"test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:10050,parentId:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0},{id:23666,parentId:null,name:"Test23",type:"mp4",size:null,date:"2021-01-02",hasChild:!0},{id:24555,parentId:null,name:"test abc9",type:"avi",size:224,date:"2020-10-01"}]}),300),{demo1:e,loadChildrenMethod:t,demo2:n,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="$refs.xTree.toggleTreeExpand(demo1.tableData[1])">切换第二行展开</vxe-button>\n            <vxe-button @click="$refs.xTree.setTreeExpand([demo1.tableData[1], demo1.tableData[3]], true)">设置第二、四行展开</vxe-button>\n            <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTree"\n          :row-config="{keyField: \'id\'}"\n          :column-config="{resizable: true}"\n          :tree-config="{transform: true, rowField: \'id\', parentField: \'parentId\', lazy: true, hasChild: \'hasChild\', loadMethod: loadChildrenMethod}"\n          :data="demo1.tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name" width="400" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },\n                { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: null, date: '2021-01-02', hasChild: true },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n              ] as any[]\n            })\n\n            const loadChildrenMethod = ({ row }: any) => {\n              // 异步加载子节点\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const childs = [\n                    { id: row.id + 100000, parentId: row.id, name: row.name + 'Test45', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },\n                    { id: row.id + 150000, parentId: row.id, name: row.name + 'Test56', type: 'mp3', size: null, date: '2021-07-09', hasChild: false }\n                  ]\n                  resolve(childs)\n                }, 500)\n              })\n            }\n\n            return {\n              demo1,\n              loadChildrenMethod\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          :row-config="{keyField: \'id\'}"\n          :column-config="{resizable: true}"\n          :loading="demo2.loading"\n          :checkbox-config="{labelField: \'name\'}"\n          :tree-config="demo2.tableTree"\n          :data="demo2.tableData">\n          <vxe-column type="checkbox" title="Name" width="400" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo2 = reactive({\n              loading: false,\n              tableTree: {\n                lazy: true,\n                transform: true,\n                hasChild: 'hasChild',\n                expandRowKeys: [],\n                iconOpen: 'fa fa-minus-square-o',\n                iconClose: 'fa fa-plus-square-o',\n                loadMethod ({ row }) {\n                  // 异步加载子节点\n                  return new Promise(resolve => {\n                    setTimeout(() => {\n                      const childs = [\n                        { id: row.id + 100000, parentId: row.id, name: row.name + 'Test45', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },\n                        { id: row.id + 150000, parentId: row.id, name: row.name + 'Test56', type: 'mp3', size: null, date: '2021-07-09', hasChild: false }\n                      ]\n                      resolve(childs)\n                    }, 500)\n                  })\n                }\n              } as VxeTablePropTypes.TreeConfig,\n              tableData: [] as any[]\n            })\n\n            demo2.loading = true\n            setTimeout(() => {\n              demo2.loading = false\n              // 默认展开的节点必须在数据初始化之前赋值且只会执行一次\n              demo2.tableTree.expandRowKeys = [10050, 23666]\n              demo2.tableData = [\n                { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },\n                { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: null, date: '2021-01-02', hasChild: true },\n                { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }\n              ]\n            }, 300)\n\n            return {\n              demo2\n            }\n          }\n        })\n        "]}}}),M=n("6b0d"),$=n.n(M);const E=$()(_,[["render",F]]);t["default"]=E}}]);