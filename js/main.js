// 按下回到頂端按鈕時回到頂端
// click
// animate 動畫 fadein
// scrollTop 元素的上方
// jqready tab
$(document).ready(function () {
    $('#back-to-top').click(function (e) { 
        $('html,body').animate({scrollTop:0},1000);
        
    });
    // window 視窗
    // scroll 捲動
    $(window).scroll(function () { 
        // 輸出訊息至控制台
        // console.log('捲動中...');
        // scrollTop() 元素的上方位置
        // console.log($(window).scrollTop());

        // 如果螢幕高度 >=230 就顯示按鈕 否則就隱藏按鈕
        if ($(window).scrollTop()>=230) {
            $('#back-to-top').fadeIn(500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // --連結捲動到標題
    $('.nav-link').click(function (e) { 
        // 取得點選連結的屬性 href 內容
        var link = $(this).attr('href');
        console.log(link);
        // 取得目標標題的上方
        var top = $(link).offset().top;
        console.log(top);
        // 取得目標的速度
        // 字串 string
        var speed =$(this).attr('data-speed');
        console.log(speed);
        // 將字串轉整數
        $('html,body').animate({scrollTop:top},parseInt(speed));
    });
});