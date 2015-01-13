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

    var $ab_nav_year=$(".ab_nav_year");
    var $ab_nav_year_liww=$(".ab_nav_year li:eq(0)").width();
    var $yearPrev=$(".yearPrev");
    var $yrefNext=$(".yrefNext");
//    alert($ab_nav_year_liww);
    var dir;
    var num=0;
    $yearPrev.click(function(){
        dir=true;
        if(dir){
            num=num+1;
            position=$ab_nav_year_liww*1*num;
            if(position>($ab_nav_year.children().length-9)*$ab_nav_year_liww){
                num=num-1;
                return false;
            }
            $ab_nav_year.css({
                "margin-left":-position
            })
        }
    })
    $yrefNext.click(function(){
        dir=false;
        if(!dir){
            num=num-1;
            position=$ab_nav_year_liww*1*num;
            if(position<0){
                num=0;
                return false;
            }
            $ab_nav_year.css({
                "margin-left":-position
            })
        }
    })
})