$(function () {

    //轮播图倒计时
    function f1() {
        var future=new Date("2019,3.9");
        var future_num=future.getTime();
        var today=new Date();
        var today_num=today.getTime();
        var cha=future_num - today_num;
        var day=Math.floor(cha/1000/60/60/24);
        var hours=Math.floor(cha/1000/60/60%24);
        var minutes=Math.floor(cha/1000/60%60);
        var seconds=Math.floor(cha/1000%60);
        if(cha>0){
            document.getElementById("time").innerHTML="申请时间剩余："+day+"天"+hours+"时"+minutes+"分"+seconds+"秒";
        }
    }
    setInterval(f1,1000);



    //自动切换
    var time;
    var w=$(".hot_ul li").outerWidth(true);
    console.log();

    time=setInterval(change,2000);
    function change() {
        $(".hot_ul").animate({"marginLeft":-w},1000,function () {
            $(this).css("margin-left",0);
            $(".hot_ul li").slice(0,1).appendTo($(this))
        });
    }

    $(".hot_ul li").hover(function () {
        clearInterval(time);
    },function () {
        time=setInterval(change,2000)
    });


    //点击切换
    var finish=true;
     $("#hot_outer_img2").on("click",function () {
          if(finish){
              clearInterval(time);
              finish=false;
              $(".hot_ul").animate({"marginLeft":-w},1000,function () {
                  $(".hot_ul").css("marginLeft",0);
                  $(".hot_ul li").slice(0,1).appendTo($(".hot_ul"));
                  time=setInterval(change,2000);
                  finish=true;
              })
          }

         });

     var status=true;
     $("#hot_outer_img1").on("click",function () {
         if(status){
             clearInterval(time);
             status=false;
             $(".hot_ul").css("marginLeft",-w);
             $(".hot_ul li").slice(-1).prependTo( $(".hot_ul"));
             $(".hot_ul").animate({"marginLeft":0},1000,function () {
                 time=setInterval(change,2000);
                 status=true;
             });
         }
         });




    $('#inp_').on('focus',function () {
        $(this).css('border','none');
    });
    $('#inp_').on('blur',function () {
        $(this).css('border','1px solid red');
    });
    $('#img_').on('click',function () {
        $(this).hide();
        $('#inp_').fadeIn(500);
    });




    $(".click_").on("click",function () {
        $("#click_img1").toggle();
        $("#click_img2").toggle();
        $(this).find("span").html("正在加载...");
        setTimeout(change,2000);
        function change() {
            $.ajax({
                url:"../json/jiguo1.json",
                dataType:"json",
                success:function (data) {
                    var lis=doT.template($("#dot_3").text());
                    $(".find_").append(lis(data));
                    $("#click_img1").toggle();
                    $("#click_img2").toggle();
                    $(".click_>span").html("点击加载更多")
                }
            })
        }

    });
















});