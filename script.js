window.onerror = (e) => alert(e);
function selectEl(query) {
	return document.querySelector(query);
}
function selectEls(query) {
	return document.querySelectorAll(query);
}
function updateState(e) {
	alert("State changed");
	var state = e.state;
	alert("State: " + state);
}
function changeState(id, page) {
	history.pushState({ pageId: id }, "Page | Rowsej's Website", page);
	document.title = "Page | Rowsej's Website";
	alert("Changed state!");
}
window.onload = () => {
	selectEls("a button").forEach(btn => {
		btn.onclick = function(e) {
			var page = btn.parentNode.href;
			alert("Clicked: " + page);
			changeState(page.replace(".html", ""), page);
			e.preventDefault();
		};
	});
	//window.onpopstate = updateState;
	window.addEventListener("popstate", e => {
		alert("Changed state");
		alert("me debugging this code, me be smhing");
		alert(e);
	});
};
window.addEventListener("popstate", updateState);
