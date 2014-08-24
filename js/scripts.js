$(function(){

    function sizePetal(size, opacity){
        var myTransform = 'rotateX(' + size + 'deg)';
        $('.thing').css({ webkitTransform: myTransform, mozTransform: myTransform, msTransform: myTransform, transform: myTransform, opacity: opacity });
    };

    function rollingFlower(){
        var myRotate = 'rotateZ(1000deg)';
        $('#pageWrapper').css({ webkitTransform: myRotate, mozTransform: myRotate, msTransform: myRotate, transform: myRotate });
    };

    function changeColor(oldColor, newColor){
        $('.thing').removeClass(oldColor).addClass(newColor);
    };

    function rotateRightByZ(angle, extraTransform, opacity){
        var deg = angle;
        for (var i = 1; i <= 12; i++) {
            var $thing = $('.thing:nth-of-type' + '(' + i + ')');
            var myTransform = 'rotateZ' + '(' + deg + 'deg)' + extraTransform;
            $thing.css({ webkitTransform: myTransform, mozTransform: myTransform, msTransform: myTransform, transform: myTransform });
            deg = deg + 30;
            if (opacity != undefined){
                $thing.css({ opacity: opacity });
            }
        }
    };

    function rotateLeftByZ(step, extraTransform){
        var deg = 0;
        for (var i = 1; i <= 12; i++) {
            var $thing = $('.thing:nth-of-type' + '(' + i + ')');
            var myTransform = 'rotateZ' + '(' + deg + 'deg)' + extraTransform;

            $thing.css({ webkitTransform: myTransform, mozTransform: myTransform, msTransform: myTransform, transform: myTransform });
            deg = deg - step;
        }
    };

    function resetAnimation(){
        var myTransform = 'rotateZ(0deg) rotateX(0deg) rotateY(0deg)';
        $('.thing').css({ webkitTransform: myTransform, mozTransform: myTransform, msTransform: myTransform, transform: myTransform, opacity: '0'});
        $('.thing').removeClass('ukrainian');
        $('#pageWrapper').css({ webkitTransform: 'rotateZ(0deg)', mozTransform: 'rotateZ(0deg)', msTransform: 'rotateZ(0deg)', transform: 'rotateZ(0deg)' });
    };


    function crazyFlower(){
        rotateRightByZ(30, '', '0.8');
        setTimeout(function(){ rotateLeftByZ(30, '');                               }, 1000);
        setTimeout(function(){ rotateLeftByZ(60, 'rotateX(80deg)');                 }, 2000);
        setTimeout(function(){ changeColor('', 'blue');                             }, 2500);
        setTimeout(function(){ rotateLeftByZ(90, 'rotateX(280deg)');                }, 3000);
        setTimeout(function(){ rotateRightByZ(30, '', '0.8');                       }, 4000);
        setTimeout(function(){ changeColor('blue', 'green');                        }, 5000);
        setTimeout(function(){ sizePetal(-70, 0);                                   }, 5000);
        setTimeout(function(){ sizePetal(0, 0.8);                                   }, 6000);
        setTimeout(function(){ rotateRightByZ(30, '', '0.8');                       }, 6000);
        setTimeout(function(){ rollingFlower();                                     }, 6000);
        setTimeout(function(){ changeColor('green', 'purple');                      }, 7000);
        setTimeout(function(){ changeColor('purple', 'yellow');                     }, 8000);
        setTimeout(function(){ rotateLeftByZ(60, 'rotateX(80deg)');                 }, 8000);
        setTimeout(function(){ rotateRightByZ(30, '', '0.8');                       }, 9000);
        setTimeout(function(){ rotateRightByZ(0, 'rotateX(180deg) rotateY(180deg)') }, 9000);
        setTimeout(function(){ rotateRightByZ(0, 'rotateX(0deg) rotateY(0deg)')     }, 10000);
        setTimeout(function(){ changeColor('yellow', 'ukrainian');                  }, 10000);
        setTimeout(function(){ rotateRightByZ(0, 'rotateX(180deg) rotateY(360deg)') }, 11000);
        setTimeout(function(){ resetAnimation();                                    }, 12000);
    };

    crazyFlower();
    setInterval(crazyFlower, 13000);

});
