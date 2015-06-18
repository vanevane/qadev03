$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();
});

function initMenu() {
    $('#menu ul').hide();
    //$('#menu ul').children('.current').parent().show();
    //$('#menu ul:first').show();
    $('#menu li a').click(
        function() {
            var checkElement = $(this).next();
            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#menu ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
                return false;
            }
        }
    );


    /*var last=$.cookie('activeAccordionGroup');
    if (last!=null) {
        //remove default collapse settings
        $("#accordion2 .collapse").removeClass('in');
        //show the last visible group
        $("#"+last).collapse("show");
    }*/



}
$(document).ready(function() {initMenu();});

//$("#accordion2").bind('shown', function() {
//    var active=$("#accordion2 .in").attr('id');
//    $.cookie('activeAccordionGroup', active)
//});
