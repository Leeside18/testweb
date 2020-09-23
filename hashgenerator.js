$(function() {
	GV.uiManager.initialize();
});


var UIManager = function() {
	this.inputTextArea = null;
	this.outputTextArea = null;
	this.executeButton = null;
};

UIManager.prototype.initialize = function() {
	this.inputTextArea = $('#input');
	this.outputTextArea = $('#output');
	this.executeButton = $('#execute');
	
	var uiManager = this;
	this.executeButton.click(function() {
		uiManager.execute();
	});
};

UIManager.prototype.execute = function() {
	var value = $('input[name="algorithm"]:checked').val();
	
	if(value == null) {
		value = $(':hidden[name="algorithm"]').val();
	}
	
	var hash = "";
	if (value == "md5") {
		hash = CryptoJS.MD5(this.inputTextArea.val());
	} else if(value == "sha1") {
		hash = CryptoJS.SHA1(this.inputTextArea.val());
	} else if(value == "sha256") {
		hash = CryptoJS.SHA256(this.inputTextArea.val());
	} else if(value == "sha512") {
		hash = CryptoJS.SHA512(this.inputTextArea.val());
	} else if(value == "sha3") {
		hash = CryptoJS.SHA3(this.inputTextArea.val());
	} else if(value == "sha3_384") {
		hash = CryptoJS.SHA3(this.inputTextArea.val(), { outputLength: 384 });
	} else if(value == "sha3_256") {
		hash = CryptoJS.SHA3(this.inputTextArea.val(), { outputLength: 256 });
	} else if(value == "sha3_224") {
		hash = CryptoJS.SHA3(this.inputTextArea.val(), { outputLength: 224 });
	}
	
	var output = hash.toString(CryptoJS.enc.Hex);
	var alphabetCase = $('input[name="case"]:checked').val();
	if(alphabetCase == "lower") {
		output = output.toLowerCase();
	} else if(alphabetCase == "upper") {
		output = output.toUpperCase();
	}
	this.outputTextArea.val(output);
};

var GV = {
	uiManager : new UIManager(),
};

