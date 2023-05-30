LA.init({id:"3EnOBv3EmqJa1KgJ",ck:"3EnOBv3EmqJa1KgJ"});

$(function () {
	var status = $.cookie('status');
	if ((status === undefined || status === null || status !== 'true') && window.location.host !== '127.0.0.1:4000') {
		window.location.href = 'https://planes.eu.org/';
	}
});