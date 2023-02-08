function F() {
    function f1() {
    $('.i1').css({"opacity" : "1"})
}
setTimeout( f1 , 1000 )
f1()

function f2() {
    $('.i2').css({"opacity" : "1"})
    $('.i1').css({"opacity" : "0"})
}
setTimeout( f2 , 2000 )

function f3() {
    $('.i3').css({"opacity" : "1"})
    $('.i2').css({"opacity" : "0"})
}
setTimeout( f3 , 3000 )

function f4() {
    $('.i4').css({"opacity" : "1"})
    $('.i3').css({"opacity" : "0"})
}
setTimeout( f4 , 4000 )

function f5() {
    $('.i5').css({"opacity" : "1"})
    $('.i4').css({"opacity" : "0"})
}
setTimeout( f5 , 5000 )

function f6() {
    $('.i6').css({"opacity" : "1"})
    $('.i5').css({"opacity" : "0"})
}
setTimeout( f6 , 6000 )

}
setInterval( F , 3000 )
