function ServiceStorage(opt) {
	try {
	    if (localStorage.getItem) {
	        this.Storage = localStorage;
	    }
	} catch(e) {
	   this.Storage = {};
	   console.log('El navegador no soporta Storage!!!');
	    
	}

   	this.domainname = window.location.hostname;
   	this.doc = $(document);

   	$.extend(this, opt);
}
/*sessionStorage*/
ServiceStorage.prototype.setSession = function (key, value) {
	window.sessionStorage.setItem(key, JSON.stringify(value));
};

ServiceStorage.prototype.getSession = function (key) {
	return JSON.parse(window.sessionStorage.getItem(key));
};

ServiceStorage.prototype.removeSession = function (key) {
	window.sessionStorage.removeItem(key);
};

ServiceStorage.prototype.clearSession = function (key) {
	window.sessionStorage.clear();
};

ServiceStorage.prototype.setLocalAutoSave = function (key,control) {
	setInterval(function() {
    	window.sessionStorage.setItem(key, JSON.stringify(document.getElementById(control).value));
	}, 1000*60);
};

/*localStorage*/
ServiceStorage.prototype.setLocal = function (key, value) {
	window.localStorage[this.domainname].setItem(key, JSON.stringify(value));
};

ServiceStorage.prototype.getLocal = function (key) {
	return JSON.parse(window.localStorage[this.domainname].getItem(key));
};

ServiceStorage.prototype.removeLocal = function (key) {
	window.localStorage[this.domainname].removeItem(key);
};

ServiceStorage.prototype.clearLocal = function (key) {
	window.localStorage[this.domainname].clear();
};

/*cache*/
ServiceStorage.prototype.setCache = function (data) {
	this.doc.data("cache", data);
};

ServiceStorage.prototype.getCache = function (data) {
	return this.doc.data("cache");
};
