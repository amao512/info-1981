$(document).ready(function(){
	$('.latest_press').click(function(){
		$(this).removeClass('non_press').addClass('press');
		$('.testimonials_press').removeClass('press').addClass('non_press');
		$('.post_press').removeClass('press').addClass('non_press');

		$('.second_hold').fadeOut(500).css('display','none');
		$('.third_hold').fadeOut(500).css('display','none');
		$('.first_hold').fadeIn(500).css('display','grid');

	})

	$('.testimonials_press').click(function(){
		$(this).removeClass('non_press').addClass('press');
		$('.latest_press').removeClass('press').addClass('non_press');
		$('.post_press').removeClass('press').addClass('non_press');

		$('.first_hold').fadeOut(500).css('display', 'none');
		$('.third_hold').fadeOut(500).css('display','none');
		$('.second_hold').fadeIn(500).css('display', 'grid');
	})

	$('.post_press').click(function(){
		$(this).removeClass('non_press').addClass('press');
		$('.latest_press').removeClass('press').addClass('non_press');
		$('.testimonials_press').removeClass('press').addClass('non_press');

		$('.first_hold').fadeOut(500).css('display', 'none');
		$('.second_hold').fadeOut(500).css('display', 'none');
		$('.third_hold').fadeIn(500).css('display', 'grid');
	})

	// Arrows
	$('.next_holder').click(function(){
		$('.latest_press').removeClass('press').addClass('non_press');
		$('.testimonials_press').removeClass('press').addClass('non_press');
		$('.post_press').removeClass('press').addClass('non_press');


		const currentHolder = $('.holders.grid');
		const currentIndexHolders = $('.holders.grid').index();
		const nextIndexHolders = currentIndexHolders + 1;
		const nextHolders = $('.holders').eq(nextIndexHolders);
		currentHolder.fadeOut(0);
		currentHolder.removeClass('grid');

		if(nextIndexHolders == ($('.holders:last').index() + 1)){
			$('.holders').eq(0).fadeIn(500);
			$('.holders').eq(0).addClass('grid');
		}else{
			nextHolders.fadeIn(500);
			nextHolders.addClass('grid');
		}

	})

	$('.prev_holder').click(function(){
		const currentHolder = $('.holders.grid');
		const currentIndexHolders = $('.holders.grid').index();
		const prevIndexHolders = currentIndexHolders - 1;
		const prevHolders = $('.holders').eq(prevIndexHolders);

		currentHolder.fadeOut(0);
		currentHolder.removeClass('grid');
		prevHolders.fadeIn(500);
		prevHolders.addClass('grid');
	})

	//------------------------------------------
	$('.hide_menu_right').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('hide_menu_active');
		// $(this).css('position','fixed');
		$('.hide_menu').toggleClass('open_right_menu');
	})

	//-------- WorkPage.html ------------------------

	$('.control_print').click(function(){
		$(this).removeClass('wp_control').addClass('wp_active_control');
		$('.control_interactive').removeClass('wp_active_control').addClass('wp_control');
		$('.control_video').removeClass('wp_active_control').addClass('wp_control');
		// ----- .pointer_links --------------------
		$('.print_link').removeClass('pointer_link').addClass('active_pointer_link');
		$('.interactive_link').removeClass('active_pointer_link').addClass('pointer_link');
		$('.video_link').removeClass('active_pointer_link').addClass('pointer_link');
	})

	$('.control_interactive').click(function(){
		$(this).removeClass('wp_control').addClass('wp_active_control');
		$('.control_print').removeClass('wp_active_control').addClass('wp_control');
		$('.control_video').removeClass('wp_active_control').addClass('wp_control');
		// ----- .pointer_links --------------------
		$('.interactive_link').removeClass('pointer_link').addClass('active_pointer_link');
		$('.print_link').removeClass('active_pointer_link').addClass('pointer_link');
		$('.video_link').removeClass('active_pointer_link').addClass('pointer_link');
	})

	$('.control_video').click(function(){
		$(this).removeClass('wp_control').addClass('wp_active_control');
		$('.control_interactive').removeClass('wp_active_control').addClass('wp_control');
		$('.control_print').removeClass('wp_active_control').addClass('wp_control');
		// ----- .pointer_links --------------------
		$('.video_link').removeClass('pointer_link').addClass('active_pointer_link');
		$('.interactive_link').removeClass('active_pointer_link').addClass('pointer_link');
		$('.print_link').removeClass('active_pointer_link').addClass('pointer_link');
	})

	// .wp_post_moving --------------------
	$('.wp_next_move').click(function(){
		const currentSpan = $('.num_moving.active_num');
		const indexCurrentSpan = $('.num_moving.active_num').index();
		const nextIndexSpan = indexCurrentSpan + 1;
		const nextSpan = $('.num_moving').eq(nextIndexSpan);
		currentSpan.removeClass('active_num');

		if(nextIndexSpan == ($('.num_moving:last').index() + 1)){
			$('.num_moving').eq(0).fadeIn(500);
			$('.num_moving').eq(0).addClass('active_num');
		}else{
			nextSpan.fadeIn(500);
			nextSpan.addClass('active_num');
		}

	})

	$('.wp_prev_move').click(function(){
		const currentSpan = $('.num_moving.active_num');
		const indexCurrentSpan = $('.num_moving.active_num').index();
		const prevIndexSpan = indexCurrentSpan - 1;
		const prevSpan = $('.num_moving').eq(prevIndexSpan);

		currentSpan.removeClass('active_num');
		prevSpan.fadeIn(500);
		prevSpan.addClass('active_num');
	})

	//-------------- WP_itemDetail.html ----------------------------
	// .buttons_group .right_bar_group --------------
	// 1
	$('.first_cross').click(function(){
		$('.first_block').css('display', 'none');
	});
	// 2
	$('.second_cross').click(function(){
		$('.second_block').css('display', 'none');
	});
	// 3
	$('.third_cross').click(function(){
		$('.third_block').css('display', 'none');
	});
	// 4
	$('.fourth_cross').click(function(){
		$('.fourth_block').css('display', 'none');
	});
	// 5
	$('.fifth_cross').click(function(){
		$('.fifth_block').css('display', 'none');
	});
	// 6
	$('.sixth_cross').click(function(){
		$('.sixth_block').css('display', 'none');
	});
	// 7
	$('.seventh_cross').click(function(){
		$('.seventh_block').css('display', 'none');
	});
	// 8
	$('.eight_cross').click(function(){
		$('.eight_block').css('display', 'none');
	});
	// 9
	$('.nine_cross').click(function(){
		$('.nine_block').css('display', 'none');
	});
	// 10
	$('.ten_cross').click(function(){
		$('.ten_block').css('display', 'none');
	});
	// 11
	$('.eleven_cross').click(function(){
		$('.eleven_block').css('display', 'none');
	});
	// 12
	$('.twelve_cross').click(function(){
		$('.twelve_block').css('display', 'none');
	});

	// ------------------------- BlogPage_itemDetail.html --------------------
	// .addRemove_buttons .btn_block --------------
	// 1
	$('.BP_first_cross').click(function(){
		$('.first_BP_btn').css('display', 'none');
	});
	// 2
	$('.BP_second_cross').click(function(){
		$('.second_BP_btn').css('display', 'none');
	});
	// 3
	$('.BP_third_cross').click(function(){
		$('.third_BP_btn').css('display', 'none');
	});
	// 4
	$('.BP_fourth_cross').click(function(){
		$('.fourth_BP_btn').css('display', 'none');
	});
	// 5
	$('.BP_fifth_cross').click(function(){
		$('.fifth_BP_btn').css('display', 'none');
	});

	// Replied comment function 
	$('.opening_replied').click(function(){
		$(this).css('display', 'none');
		$('.closing_replied').css('display', 'block');
		$('.replied__comment').css('display', 'block').preventDefault;
	})
	$('.closing_replied').click(function(){
		$(this).css('display', 'none');
		$('.opening_replied').css('display', 'block');
		$('.replied__comment').css('display', 'none').preventDefault;
	})

	// ----------- ContactPage.html ------------------------
	$('.Atlanta_non_active').click(function(){
		$(this).toggleClass('active_city');
		$('.NY_non_active').removeClass('active_city');
		$('.London_non_active').removeClass('active_city');
		$('.Tokyo_non_active').removeClass('active_city');
	})

	$('.NY_non_active').click(function(){
		$(this).toggleClass('active_city');
		$('.Atlanta_non_active').removeClass('active_city');
		$('.London_non_active').removeClass('active_city');
		$('.Tokyo_non_active').removeClass('active_city');
	})
	$('.London_non_active').click(function(){
		$(this).toggleClass('active_city');
		$('.NY_non_active').removeClass('active_city');
		$('.Atlanta_non_active').removeClass('active_city');
		$('.Tokyo_non_active').removeClass('active_city');
	})
	$('.Tokyo_non_active').click(function(){
		$(this).toggleClass('active_city');
		$('.NY_non_active').removeClass('active_city');
		$('.London_non_active').removeClass('active_city');
		$('.Atlanta_non_active').removeClass('active_city');
	})


});