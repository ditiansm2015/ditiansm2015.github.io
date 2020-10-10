var i = 3;
var k = 0;
var myVar1, myVar2, myVar3, myVar4;
var flag1 = 0;
var pre = 0;
var disp = 0;


function redr(x) {
    switch (x) {
        case 1:
            window.open("http://www.github.com/ditiansm2015", '_blank'); //GIT profile
            break;
        case 2:
            window.open("http://www.linkedin.com/in/sudhanshu-mishra-885231117", '_blank'); //Linkdien address
            break;
        case 3:
            window.open("http://www.facebook.com/profile.php?id=100010244341069", '_blank'); //Fb address
            break;
        case 4:
            window.open("res/resume.pdf", '_blank'); //Fb address
            break;
        default:
            break;

    }
}

$(document).ready(function() {
    $("#img2").click(function() {
        disp = 1;
        document.getElementById("bdy").setAttribute("style", "overflow-y:hidden;");
    });
});

$(document).ready(function() {
    $("#img1").click(function() {
        disp = 0;
        document.getElementById("bdy").setAttribute("style", "overflow-y:auto;");
    });
});

$(document).ready(function() {
    $("#img1").click(function() {
        $("#d2").fadeOut('slow');
        $("#d21").removeClass("slide");
    });
});

$(document).ready(function() {
    $("#img2").click(function() {
        $('.navbar-collapse').collapse('hide');
        $("#d2").fadeIn('slow');
        $("#d21").addClass("slide");
    });
});

$(document).ready(function() {
    $(".nav li").click(function() {
        if (disp != 1) {
            $('.nav li').removeClass("active");
            $(this).addClass("active");
        }
    });
});

function hid(x, y) {

    if (y != pre) {
        pre = y;
        flag1 = 0;
        myVar2 = setTimeout(function(d) {

            switch (d) {
                case 1:
                    document.getElementById("d1").style.display = "block";
                    //document.getElementById("d7").style.display = "none";
                    document.getElementById("d8").style.display = "none";
                    document.getElementById("d9").style.display = "none";
                    document.getElementById("d10").style.display = "none";
                    break;

                case 8:
                    document.getElementById("d8").style.display = "block";
                    // document.getElementById("d7").style.display = "none";
                    document.getElementById("d1").style.display = "none";
                    document.getElementById("d9").style.display = "none";
                    document.getElementById("d10").style.display = "none";
                    break;
                case 9:
                    document.getElementById("d9").style.display = "block";
                    // document.getElementById("d7").style.display = "none";
                    document.getElementById("d8").style.display = "none";
                    document.getElementById("d1").style.display = "none";
                    document.getElementById("d10").style.display = "none";
                    break;
                case 10:
                    document.getElementById("d10").style.display = "block";
                    //document.getElementById("d7").style.display = "none";
                    document.getElementById("d8").style.display = "none";
                    document.getElementById("d9").style.display = "none";
                    document.getElementById("d1").style.display = "none";
                    break;
                default:
                    document.getElementById("d1").style.display = "block";
                    //document.getElementById("d7").style.display = "none";
                    document.getElementById("d8").style.display = "none";
                    document.getElementById("d9").style.display = "none";
                    document.getElementById("d10").style.display = "none";
                    break;

            }

        }, 1100, x);
        clearImmediate(myVar2);
    } else {
        flag1 = 1;
    }
}


$(document).ready(function() {
    $(".roll").click(function() {

        if (flag1 != 1) {
            $('.navbar-collapse').collapse('hide');

            if (k == 0) {
                document.getElementById("d3").style.display = "block";
                document.getElementById("d4").style.display = "block";
                document.getElementById("d5").style.display = "block";
                document.getElementById("d6").style.display = "block";
                k = 1;
            }

            //myVar3 = setTimeout(setPos, 00);
            myVar1 = setInterval(mleft, 200);
            setPos();
            //myVar3 = setTimeout(setPos, 1100);
        }
    });
});


function mleft() {
    if (i > 6)
        clearInterval(myVar1);
    else {
        d = "#d" + i;
        $(d).animate({ left: "-100%" }, 1100);

        //document.getElementById("h1").innerHTML = i;
        ++i;
    }

}


function setPos() {
    i = 3;

    document.getElementById("d3").style.left = "100%";
    document.getElementById("d4").style.left = "100%";
    document.getElementById("d5").style.left = "100%";
    document.getElementById("d6").style.left = "100%";

    //clearImmediate(myVar3);
    //clearInterval(myVar1);
    //clearInterval(myVar2);
}


$(document).ready(function() {
    $("#b2, #b3, #b4").click(function() {
        myVar4 = setTimeout(change, 1000);

    });
});

function change() {
    $("#d11").removeClass("slide");
    clearTimeout(myVar4);
}

$(document).ready(function() {
    $("#b1").click(function() {
        $("#d11").addClass("slide");
    });
});

$(document).ready(function() {
    $("#close1").click(function() {
        document.getElementById("scr1").style.display = "none";
        document.getElementById("bdy").setAttribute("style", "overflow-y:auto;");
    });
});

/*
function view(x) {

    if (x % 2 == 0)
        document.getElementById("scr3").setAttribute("style", "position:absolute;top:10%;");
    else
        document.getElementById("scr3").setAttribute("style", "position:absolute;top:18%;");

    d = "res/" + x + ".png";
    document.getElementById("scr4").src = d;
    document.getElementById("scr1").style.display = "block";
    document.getElementById("bdy").setAttribute("style", "overflow-y:hidden;");
}
*/

function rem() {
    document.getElementById("dm").setAttribute("style", "display:none;");
}