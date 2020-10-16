function selectEl(query) {
	return document.querySelector(query);
}
function selectEls(query) {
	return document.querySelectorAll(query);
}
function updateState(e) {
	var state = e.state;
	alert("State: " + state);
}
function changeState(id, page) {
	history.pushState({ pageId: id }, "Page | Rowsej's Website", page);
}
window.onload = function() {
	selectEls("a button").forEach(btn => {
		btn.onclick = function(e) {
			alert("Clicked: " + e.target.innerHTML);
			var page = btn.parentNode.href;
			changeState(page.replace(".html", ""), page);
			e.preventDefault();
		};
	});
	window.onpopstate = updateState;
};
