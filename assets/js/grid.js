$(document).ready(function(){
    function removeAllSidebarToggleClasses(){
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-md-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
    }




    $('#sidebar-toggle-hide').click(function(){
        $('#sidebar').fadeOut(300);
        // $('#main-body').animate({width:"100%"},300);
        setTimeout(function(){
            removeAllSidebarToggleClasses();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');
        },200)
    })

    $('#sidebar-toggle-show').click(function(){
        $('#sidebar').fadeIn(300);
        setTimeout(function(){
            removeAllSidebarToggleClasses();
            $('#sidebar-toggle-show').addClass('d-none');
            $('#sidebar-toggle-hide').removeClass('d-none');
        },200)
    })

    $('#menu-toggle').click(function(){
        $('#body-header').toggle(300);
    })

    $('#search-toggle').click(function(){
        $('#search-area').removeClass('d-none');
        // $('#search-input').animate({width:'14rem'},500);
        $('#search-area').addClass('d-md-inline');
        $('#search-toggle').removeClass('d-md-inline');
        $('#search-toggle').addClass('d-none');
    })

    $('#search-area-hide').click(function(){
        $('#search-area').removeClass('d-md-inline');
        $('#search-area').addClass('d-none');
        $('#search-toggle').removeClass('d-none');
        $('#search-toggle').addClass('d-md-inline');

    })

    $('#header-notification-toggle').click(function(){
        $('#header-notification').fadeToggle();   
    })

    $('#header-comment-toggle').click(function(){
        $('#header-comment').fadeToggle();   
    })

    $('#profile-angle-down').click(function(){
        $('#profile-menu').fadeToggle();   
    })

    $('.sidebar-group-link').click(function(){
      
        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
  
  
        $(this).addClass('sidebar-group-link-active');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
  
  
  
     });

  
})
$('#full-screen').click(function(){
    toggleFullScreen();
 });

 function toggleFullScreen()
 {
    if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)){
       if(document.documentElement.requestFullscreen){
          document.documentElement.requestFullscreen();
       }
       else if(document.documentElement.mozRequestFullscreen){
          document.documentElement.mozRequestFullscreen();
       }
       else if(document.documentElement.webkitRequestFullscreen){
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
       }
       $('#screen-compress').removeClass('d-none');
       $('#screen-expand').addClass('d-none');
    }
    else{
       if(document.cancelFullScreen)
       {
          document.cancelFullScreen();
       }
       else if(document.mozCancelFullScreen)
       {
          document.mozCancelFullScreen();
       }
       else if(document.webkitCancelFullScreen)
       {
          document.webkitCancelFullScreen();
       }
       $('#screen-compress').addClass('d-none');
       $('#screen-expand').removeClass('d-none');
    }
 }