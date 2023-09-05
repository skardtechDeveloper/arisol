
$(window).scroll(function(){  

	 if ($(this).scrollTop() > 40) {

		$('#navbar_top').addClass("fixed-top");

		// add padding top to show content behind navbar

		$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
		$('#mySidenav').css('top','82px');
		$('.overlay-body').css('top','82px');

	  }else{

		$('#navbar_top').removeClass("fixed-top");

		 // remove padding top from body

		$('body').css('padding-top', '0');
			$('#mySidenav').css('top','130px');
		$('.overlay-body').css('top','130px');

	  }   

});
	
// Counter

	$('.counter-count').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now)+"+");
			}
		});
	});
//   bottomtotop

	var btn = $('#buttontotop');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});
	

	

	// button success

	$(document).ready(() => {
		let $button = $('button[type="submit"]');

		$button.on('click', function () {
			var $this = $(this);
			if ($this.hasClass('active') || $this.hasClass('success')) {
				return false;
			}
			$this.addClass('active');
			setTimeout(() => {
				$this.addClass('loader');
			}, 125);
			setTimeout(() => {
				$this.removeClass('loader active');
				$this.text('Submitted Succesfully!');
				$this.addClass('success animated pulse');
			}, 2000);
			setTimeout(() => {
				$this.text('SUBMIT NOW');
				$this.removeClass('success animated pulse');
				$this.blur();
			}, 5000);
		});
	});
	// ANIMATIONS 
			
    jQuery('.mobile-button').click(function(){
       jQuery(this).toggleClass('active');
       jQuery('#mySidenav').toggleClass('mactive');
       jQuery('#mySidenav').addClass('deactive');
       jQuery('.overlay-body').toggleClass('oactive');
       
    });
    jQuery('#dropdown01').click(function(){
       jQuery('.porto .dropdown-menu').toggleClass('sview');
       
    });
    jQuery('#dropdown02').click(function(){
       jQuery('.port2 .dropdown-menu').toggleClass('s1view');
       jQuery('.port2 .dropdown-menu').addClass('sviewoff');
       
    });
    AOS.init();
		
	
		
	
	
