

var margin = 40; //这里设置间距

var ul = document.getElementById('box');
var li = ul.getElementsByTagName('li');
var li_W = li[0].offsetWidth + margin;
function move() { 
    var h = []; 
    var n = 5; 
    for (var i = 0; i < li.length; i++) { 
        var li_H = li[i].offsetHeight; 
        if (i < n) { 
            h[i] = li_H; 
            li[i].style.top = 0 + 'px';
            li[i].style.left = i * li_W + 'px';
        }
    }
}

window.onload = function() { move(); };

window.onresize = function() { move(); };
