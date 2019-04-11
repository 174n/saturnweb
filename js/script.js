function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight'));

    if($(window).width()>767 && $(window).width()<1025){
        $('.blog_item').each(function(){
            oneHeight($(this).find('.blog_item_cell:not(.blog_item_img_phone)'));
        })
    }else{
        $('.blog_item').find('.blog_item_cell').removeAttr('style');
    }

    $(window).resize(function(){
        if($(window).width()>767 && $(window).width()<1025){
            $('.blog_item').each(function(){
                oneHeight($(this).find('.blog_item_cell:not(.blog_item_img_phone)'));
            })
        }else{
            $('.blog_item').find('.blog_item_cell').removeAttr('style');
        }

    });
}

$(document).ready(function(){

	$('.tarifs-list').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

	$('.works-list').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});
	$('.review-list').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1
	});

	if ($(window).width() < 1024){
		$('.mbox').each(function(){
			$(this).addClass('hidden');
		})
	}

	$(".popup").fancybox();

	$(function($){
        $.mask.definitions['~']='[+-]';    
        $('input[type=tel]').mask("+7(999) 999-9999");
    });

	oneHeightItems();

	// $('.offer-left').click(function(e){
	// 	if ($(this).attr('data-text') == 'text1'){
	// 		$('.offer-desc-wrap1').show();
	// 		$('.offer-desc-wrap2').hide();
	// 	}
	// 	if ($(this).attr('data-text') == 'text2'){
	// 		$('.offer-desc-wrap2').show();
	// 		$('.offer-desc-wrap1').hide();
	// 	}
	// });

	

	$(".work-link a").fancybox({
		wrapCSS:"popimage",
	});

	$('.link-more, .tarif-title, .tarif-price, .tarif-list').click(function(e){
		$('.tarifs-text-wrap').hide();
    $('.tarifs-text-wrap'+$(this).attr('data-text')).show();
		$('body,html').animate({
             scrollTop: $('.tarifs-body').offset().top + 400}, 1000);
         //return false;
                e.preventDefault();

	});



	$(".get_tel").each(function(){
    var it = $(this);
    it.validate({   
        rules: {                                        
            phone: { required: true }                                     
        },
        messages: {        
      
        },
        errorPlacement: function(error, element) {

        },
        submitHandler: function(form) {
			var thisForm = $(form);
			$.ajax({
				type: "POST",
				url: thisForm.attr("action"),
				data: thisForm.serialize(), 
				success: function(data) {
					$(this).find("input").val("");
					$.fancybox({ 
						href: '#thanks'                 
					});
					 setTimeout(function() {
						$.fancybox.close();
					}, 3000);
					$(".get_tel").trigger("reset");
				}
			});
			return false;
				
        },
        success: function() {

        },
        highlight: function(element, errorClass) {
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');            
        }
        })
    })

});