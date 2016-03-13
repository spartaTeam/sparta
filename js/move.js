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

//zan
var zan = document.getElementsByClassName('zan')[0];
var zan_click = function(){
    // console.log(typeof zan);
    // console.log(img);
    // e.preventDefault();
    var img = document.getElementById('icon');
    var count = zan.getElementsByTagName('span')[0];
    var left = document.getElementById('icon').offsetLeft + 50;
    console.log(img.offsetLeft);
    var top = document.getElementById('icon').offsetTop - 15;
    console.log(img.offsetTop);
    zan.innerHTML += '<div id="add_num" class="float"><b>+1<\/b><\/div>';
    remove_click();
    var add_num = document.getElementById('add_num');
    add_num.style.position = 'absolute';
    add_num.style.color = '#C30';
    add_num.style.left = left + 'px';
    add_num.style.top = top + 'px';
    zan.getElementsByTagName('span')[0].innerHTML = parseInt(count.innerHTML) + 1;
    var timer = setTimeout(function(){
          add_num.parentNode.removeChild(add_num);
          add_click();
    },300);

  }
  /*stop dbclick*/
  var remove_click = function(){
    zan.removeEventListener('click',zan_click);
    /*detach*/
    if(window.addEventListener) {
        zan.removeEventListener('click',zan_click);
    }else if(window.attachEvent) {
         zan.detachEvent('onclick',zan_click);
    }else {
         zan.onclick = null;
    }
  }
  var add_click = function(){
    if(window.addEventListener) {
        zan.addEventListener('click',zan_click);
    }else if(window.attachEvent) {
        zan.attachEvent('onclick',zan_click);
    }else {
         zan.onclick = zan_click;
    }
}

add_click(); 


window.onload = function() { move();};
window.onresize = function() { move(); };
   


