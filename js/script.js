$(function() {
  $("a[href='#home']").click(function() {
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
  $('#myTimeline .panel').eq(1).addClass('highlighted');
  $('#myTimeline .panel').eq(0).addClass('highlighted-ed');
  $('#aboutUs').load('about.html');
});

var data = [
	{
		time: '2017-03-01',
		body: [{
			tag: 'h2',
			content: "Ý tưởng hình thành"
		},
		{
			tag: 'p',
			content: 'Với mong muốn tạo sự khác biệt cho các hoạt động từ thiện, ý tưởng về một cộng đồng từ thiện vững mạnh, kết nối và hiệu quả được hình thành.'
		}],
	},
	{
		time: '2017-04-01',
		body: [{
			tag: 'h2',
			content: "Connecting Soul – cái tên nói lên tất cả"
		},
		{
			tag: 'p',
			content: 'Gồm 12 thành viên đến từ các background khác nhau nhưng cùng chung 1 hoài bão, Connecting Souls ra đời với sứ mệnh thổi 1 luồng gió mới trong cộng đồng từ thiện tại Việt Nam, thông qua việc kết nối các tổ chức từ thiện và các bên liên quan; cung cấp các dịch vụ hỗ trợ như thẩm định (Verification Service) và tư vấn (Consulting Service); đảm bảo tính minh bạch (Transparency), tính tương tác (Connectivity) và tính chuyển đổi (Transformation).'
		}],
	},
	{
		time: '2017-09-01',
		body: [
		{
			tag: 'h2',
			content: 'Hoàn thành xuất sắc thử thách đầu tiên - Swiss Innovation Challenge Vietnam 2017'
		},
		{
			tag: 'p',
			content: 'Dự án Connecting Souls chính thức là 1 trong 25 dự án chung cuộc xuất sắc nhất trong cuộc thi Swiss Innovation Challenge về tính thực tiễn, tầm ảnh hưởng và có ích cho cộng đồng.<br>Đôi nét về Swiss Innovation Challenge:<br>SIC Việt Nam 2017 là cuộc thi kết hợp nhằm tìm ra ý tưởng, các dự án đang ở giai đoạn khởi nghiệp và các doanh nghiệp đã thành lập và vận hành. Ban tổ chức sẽ hướng dẫn và hỗ trợ ứng viên trong qua trình cuộc thi diễn ra để dự án đạt đến mức độ hoàn thiện cao hơn. Cuộc thi kéo dài trong 9 tháng với các giải thưởng hấp dẫn, cung cấp các khóa đào tạo, tư vấn, huấn luyện về tinh thần khởi nghiệp và cải tiến, các sự kiện tiếp cận và kết nối cộng đồng khởi nghiệp và sáng tạo. Xem thêm tại <a href="http://www.swisschallenge.org">http://www.swisschallenge.org</a></b>'
		}],
	},
	{
		time: '2017-12-01',
		body: [
		{
			tag: 'h2',
			content: 'Souliee.vn - Cổng thông tin chính thức của Connecting Souls ra đời'
		},
		{
			tag: 'p',
			content: 'Souliee.vn – nền tảng platform giúp các tổ chức từ thiện, mạnh thường quân và tình nguyện viên tương tác với nhau, hỗ trợ và phát triển một cộng đồng từ thiện Việt Nam hiệu quả và vững mạnh.'
		}],
	},
	{
		time: '2018-01-22',
		body: [
		{
			tag: 'h2',
			content: 'Spread the Good - Our very first event is coming soonnnn…..'
		},
		{
			tag: 'p',
			content: 'Bí mật sẽ được bật mí tại event ra mắt của Souliee – Spread the Good. Theo dõi chúng tôi tại Fanpage (insert FB Fanpage) để biết thêm chi tiết!!!'
		}]
	}
];