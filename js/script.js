$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('#myTimeline').albeTimeline(data);
  $('#myTimeline .panel').eq(4).addClass('highlighted');
});

var data = [
	{
		time: '2017-10-04',
		body: [{
			tag: 'h2',
			content: "We're live drawing NOW! One hour only!"
		},
		{
			tag: 'p',
			content: 'Watch us on YouTube NOW!'
		}],
	},
	{
		time: '2017-10-06',
		body: [{
			tag: 'h2',
			content: "WE DID IT! THE FIRST CYANIDE & HAPPINESS VIDEO GAME IS HAPPENING!"
		},
		{
			tag: 'p',
			content: 'Thanks to EVERYONE who helped make our first video game a reality! This is amazing, we couldn\'t be happier.<br><br>Over the next few weeks, we\'ll be sending everyone an invite... <u class="nowrap">Read more</u>'
		}],
	},
	{
		time: '2017-10-03',
		body: [
		{
			tag: 'h2',
			content: 'Shark Dad Sidequest Unlocked! MORE Voice Actors! We’re ALMOST to a PS4 release!'
		},
		{
			tag: 'p',
			content: 'Holy guacamole that’s a whole lotta good stuff!<br>Not only did you just give us a full sidequest involving everyone’s favorite rad dad shark, Shark Dad, but we’re <b>less... <u class="nowrap">Read more</u></b>'
		}],
	},
	{
		time: '2017-10-03',
		body: [
		{
			tag: 'h2',
			content: 'Live draw with the makers of C&amp;H tomorrow at 7pm CST!!!'
		},
		{
			tag: 'p',
			content: 'We only have <b>three days left</b>&nbsp;of our campaign, so we wanted to do something special for you. We\'re often asked where we get our ideas, and now you\'ve got... <u class="nowrap">Read more</u>'
		}],
	},
	{
		time: '2017-10-02',
		body: [
		{
			tag: 'h2',
			content: 'October 02 2017'
		},
		{
			tag: 'p',
			content: 'Successfully raised <span class="money">$575,377</span> with 14,971 backers'
		}]
	},{
		time: '2017-09-19',
		body: [
		{
			tag: 'h2',
			content: 'ANOTHER STRETCH GOAL REACHED! Localization unlocked!'
		},
		{
			tag: 'p',
			content: 'Now the game will be translated into German, French, and Spanish! Hooray!&nbsp;'
		},
		{
			tag: 'p',
			content: 'But our work isn’t done. Here’s the list of the next stretch goal targets we have:&nbsp;'
		},
		{
			tag: 'p',
			content: '$450k OSX... <u class="nowrap">Read more</u>'
		}]
	}
];