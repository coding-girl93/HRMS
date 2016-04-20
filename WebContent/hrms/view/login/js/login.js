/**
 * Created by Administrator on 2016/3/31.
 */
$(function(){

    $("#login").click(function(){
        /*获取用户名*/
        var name= $('#name').val();
        /*获取密码*/
        var password =$('#password').val();

        var result = isNotEmpty(name,password);
        if(result){
            /*请求后台*/
            isExit(name,password);
        }else{
            $('#empty').css('display','block');
        }
    });
});

//判断是否为空
function isNotEmpty(name,password){
    if(!name||!password){
        return false;
    }else{
        return true;
    }
}
//判断用户是否存在
function isExit(name,password){
    var loginer={'name':name,'password':password};
//    $.ajax({//此方法只适合get方法不适用post
//    	type:'get',
//        url:'/HRMS/User/addUser.action',
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        data: {name:"dsds"},
//        success: function(data) {
//            //返回的数据用data.d获取内容
//            alert('22');
//        },
//        error: function(err) {
//            alert('error');
//        }
//    });
    
    $.post("/HRMS/Login/validate.action",{'name':name,'password':password},function(data)
      {
       alert("dsd");
      })
}