$(function () {

    //验证手机号
    //获取焦点
    $(".phone>input").on("focus",function () {
        $(this).next().html("(请输入以13、15、18开头的手机号)")
    });

    //失去焦点
    var res1;
    $(".phone>input").on("blur",function () {
        var reg = /^1[358]\d{9}$/;
        var val=$(this).val();
        if(val==""){
            $(this).next().html("(手机号不能为空)");
            res1=false
        }else{
            if(!reg.test(val)){
                $(this).next().html("(手机号有误)");
                res1=false;
            }else{
                $(this).next().html("(手机号正确)");
                res1=true
            }
        }
    });

    //验证码倒计时
    var num=5;
    var time;
    var status=true;
    $("#btn").on("click",function (e) {
        e.preventDefault();
        if(status){
            status=false;
            $("#btn>span").html("("+num+")");
            time=setInterval(change,1000);
            function change() {
                num--;
                $("#btn>span").html("("+num+")");
                if(num<=0){
                    clearInterval(time);
                    status=true;
                    num=5;
                    $("#btn>span").html("");
                }
            }
        }

    });


    //验证账号
    //获取焦点
    $(".name>input").on("focus",function () {
        $(this).next().html("(请输入2-5位的汉字)")
    });

    //失去焦点
    var res4;
    $(".name>input").on("blur",function () {
        var reg = /^[\u4e00-\u9fa5]{2,5}$/;
        var val=$(this).val();
        if(val==""){
            $(this).next().html("(账号不能为空)");
            res4=false
        }else{
            if(!reg.test(val)){
                $(this).next().html("(账号有误)");
                res4=false;
            }else{
                $(this).next().html("(账号正确)");
                res4=true
            }
        }
    });



    //验证密码
    //获取焦点
    $(".psd>input").on("focus",function () {
        $(this).next().html("(请输入6到10位的数字)")
    });

    //失去焦点
    var res2;
    $(".psd>input").on("blur",function () {
        var reg = /^\d{6,10}$/;
        var val=$(this).val();
        if(val==""){
            $(this).next().html("(密码不能为空)");
            res2=false
        }else{
            if(!reg.test(val)){
                $(this).next().html("(密码格式不对)");
                res2=false
            }else{
                $(this).next().html("(密码设置成功)");
                res2=true
            }
        }
    });

    //验证重复密码
    //获取焦点
    $(".psd_>input").on("focus",function () {
        $(this).next().html("(请确认密码)")
    });

    //失去焦点
    var res3;
    $(".psd_>input").on("blur",function () {
        var psd= $(".psd>input").val();
        var re_psd=$(".psd_>input").val();
        if(re_psd==""){
            $(this).next().html("(确认密码不能为空)");
            res3=false;
        }else{
            if(psd==re_psd){
                $(this).next().html("(密码一致)");
                res3=true;
            }else{
                $(this).next().html("(密码不一致)");
                res3=false;
            }
        }
    });

    $(".btn").on("click",function (e) {
        var oEvent=e||event;
        oEvent.preventDefault();
        if(res1 && res2 && res3 && res4){
            alert("注册成功");
            window.location.href="../html/index.html";
        }else{
            alert("注册失败")
        }
    })




});