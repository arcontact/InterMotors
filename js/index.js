var app = {
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.deviceReady, false);
		document.addEventListener("menubutton", this.doMenu, false);
		//document.addEventListener("online", this.deviceOnline, false);
	},
	deviceReady: function() {
		//alert('device ready');
    },
	doMenu: function() {
		//alert('menu clicked');
    }
};
$(document).on("mobileinit",function() {
	$.mobile.pageLoadErrorMessage = 'Treści w przygotowaniu...';
	$.mobile.phonegapNavigationEnabled = true;
});