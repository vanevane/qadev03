function createMenu(){

    var st = "";
    //st += '<link href="css/simple-sidebar.css" rel="stylesheet">';
    st += "<script src='js/lib/sidebar_menu.js'></script>";
    //st += '<script src="js/lib/jquery-2.1.4.min.js"></script>';
    st += "<script src='js/lib/bootstrap.min.js'></script>";
    st += "<ul class='sidebar-nav nav-pills nav-stacked'id='menu'>";
    st += '<li >';
    st += '<input type="hidden" id="identifier" value="home:item1"/>';
    st += '<a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Session 1</a>';
    st += '<ul class="nav-pills nav-stacked" style="list-style-type:none;">';
    st += '<li ><a href="./task1.html">Task 1</a></li>';
    st += '<li><a href="#">Task 2</a></li>';
    st += '</ul>';
    st += '</li>';
    st += '</ul>';

    $("#sidebar-wrapper").html(st);
}





function addHeader()
{
    var st = "";
    //st += '<link href="css/simple-sidebar.css" rel="stylesheet">';
    st += "<script src='js/lib/sidebar_menu.js'></script>";
    //st += '<script src="js/lib/jquery-2.1.4.min.js"></script>';
    st += "<script src='js/lib/bootstrap.min.js'></script>";
    st += "<ul class='sidebar-nav nav-pills nav-stacked'id='menu'>";
    st += '<li >';
    st += '<input type="hidden" id="identifier" value="home:item1"/>';
    st += '<a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Session 1</a>';
    st += '<ul class="nav-pills nav-stacked" style="list-style-type:none;">';
    st += '<li ><a href="./task1.html">Task 1</a></li>';
    st += '<li><a href="#">Task 2</a></li>';
    st += '</ul>';
    st += '</li>';
    st += '</ul>';

    //st += '';


    var el=document.getElementById("sidebar-wrapper");
    if (el) {
        el.innerHTML=st;
    }
}

//$(document).ready(function() {addHeader();});

//$(document).ready(function() {createMenu();});