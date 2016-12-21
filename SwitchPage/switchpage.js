/**
 * Created by Administrator on 2016/12/21.
 */
$(function () {
     var contents=new Array;

    $(".switch_bar a").each(function (index, element) {
        contents[index]=element;
        console.log(element)
        $(this).mouseenter(function () {

            $(".switch_bar a:eq("+index+")").css({borderBottomColor:"transparent",background:"#ffffff"});
            $(".switch_bar a").not(".switch_bar a:eq("+index+")").css({borderBottomColor:"#333333",background:"#eee"});
            $(".content:eq("+index+")").css("display","block");
            $(".content").not(".content:eq("+index+")").css("display","none");
        });

    });

});