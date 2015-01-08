/**
 * Created by sien on 2015/1/8 0008.
 */
$(function(){
    var count=$(".ab_nav_year li").length;
    var count_ww=count*115;
    $(".ab_nav_year").css({
        width: count_ww,
    });

    $(".ab_nav_dd_list li").hover(function(){
        $(this).find(".ddli_month").addClass("ddli_month_hover");
    },function(){
        $(this).find(".ddli_month").removeClass("ddli_month_hover");
    })
})