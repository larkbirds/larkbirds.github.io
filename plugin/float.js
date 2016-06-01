;
(function($) {
	var mode;
	var p = {
		title: "TITLE",
		content: "BODY CONTENT",
		debug: false,
		width: 900,
		height: 600,
		callback: null
	};

	function init(q) {
		var setting = $.extend(p, q);

		if (setting.debug) {
			console.log(setting);
		}

		mode = document.createElement("div");
		mode.className = "mode";
		var width = document.body.scrollWidth;
		mode.style.width = width + "px";
		var height = document.body.scrollHeight;
		mode.style.height = height + "px";

		var closeBtn = document.createElement("span");
		closeBtn.className = "modeClose";
		closeBtn.innerHTML = "X";
		closeBtn.onclick = function() {
			mode.style.display = "none";
			document.body.removeChild(mode);
		};
		closeBtn.onmouseover = function() {
			this.style.textDecoration = "underline";
		};
		closeBtn.onmouseout = function() {
			this.style.textDecoration = "none";
		};
		var modeTitle = document.createElement("div");
		modeTitle.className = "modeTitle";
		modeTitle.innerHTML = setting.title;

		var modeBody = document.createElement("div");
		modeBody.className = "modeBody";
		modeBody.style.height = setting.height + "px";
		modeBody.style.width = setting.width + "px";
		modeBody.innerHTML = setting.content;


		var modeOut = document.createElement("div");
		modeOut.className = "modeOut";
		modeOut.style.width = setting.width + "px";
		modeOut.appendChild(closeBtn);
		modeOut.appendChild(modeTitle);
		modeOut.appendChild(modeBody);

		mode.appendChild(modeOut);

		if (setting.debug) {
			console.log(mode);
		}

		return mode;
	}

	$.modeShow = function(q) {
		var setting = $.extend(p, q);
		mode = document.body.appendChild(init(setting));
		if (setting.callback) {
			setting.callback.call();
		}
		return mode;
	};

	$.modeHide = function(mode) {
		document.body.removeChild(mode);
	};
	$.modeVersion = function() {
		alert("author : JACK");
	};
	$.modeName = function() {
		alert("mode");
	};

})(jQuery);