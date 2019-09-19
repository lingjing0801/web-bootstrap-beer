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
        console.log('捲動中...')
    });
});