function time() {
	var jikoku = document.getElementById("jikoku_now");
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hh = now.getHours();
	var mm = ("0" + now.getMinutes()).slice(-2);
	var ss = ("0" + now.getSeconds()).slice(-2);
	var ampm = (hh < 12) ? "午前" + hh : "午後" + (hh - 12);
	jikoku.innerHTML = year + "年" + month + "月" + date + "日" + ampm + "時" + mm + "分" + ss + "秒";
	
	var sale;
};

window.onload = function() {
	time();
	setInterval('time()', 30);
};
