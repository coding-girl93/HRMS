/**
 * Created by Administrator on 2016/4/2.
 */
//获取树形结构列表数据
function getTree() {
    var tree = [
        {
            text: "Parent 1",
            nodes: [
                {
                    text: "Child 1",
                    nodes: [
                        {
                            text: "Grandchild 1"
                        },
                        {
                            text: "Grandchild 2"
                        }
                    ]
                },
                {
                    text: "Child 2"
                }
            ]
        },
        {
            text: "Parent 2"
        },
        {
            text: "Parent 3"
        },
        {
            text: "Parent 4"
        },
        {
            text: "Parent 5"
        }
    ];
    return tree;
}

//初始化树形结构列表
$('#tree').treeview({
    data: getTree(),
    backColor: 'green'
});

//最后一次触发节点Id
var lastSelectedNodeId = null;
//最后一次触发时间
var lastSelectTime = null;

//自定义业务方法
function customBusiness(data){
    alert("双击获得节点名字： "+data.text);
}

function clickNode(event, data) {
    if (lastSelectedNodeId && lastSelectTime) {
        var time = new Date().getTime();
        var t = time - lastSelectTime;
        if (lastSelectedNodeId == data.nodeId && t < 300) {
            customBusiness(data);
        }
    }
    lastSelectedNodeId = data.nodeId;
    lastSelectTime = new Date().getTime();
}

//自定义双击事件
function customDblClickFun(){
    //节点选中时触发
    $('#tree').on('nodeSelected', function(event, data) {
        clickNode(event, data)
    });
    //节点取消选中时触发
    $('#tree').on('nodeUnselected', function(event, data) {
        clickNode(event, data)
    });
}
$('#tree').dblclick( function () { alert("Hello World!"); });
$(document).ready(function() {
    $('#personal').click(function(){
        $('#tree').treeview({
            data: getTree()
        });
    });
});
