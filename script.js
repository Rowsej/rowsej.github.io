window.onerror = (e) => alert(e);
function selectEl(query) {
	return document.querySelector(query);
}
function selectEls(query) {
	return document.querySelectorAll(query);
}
function updateState(e) {
	var state = e.state;
	selectEl("#main").innerHTML = "Page: " + state.pageId;
}
function changeState(id, page) {
	var state = { pageId: id };
	history.pushState(state, "Page | Rowsej's Website", page);
	document.title = "Page | Rowsej's Website";
	updateState({ state: state });
}
window.onload = () => {
	selectEls("a button").forEach(btn => {
		btn.onclick = function(e) {
			var page = btn.parentNode.href;
			alert("Clicked: " + page);
			changeState(page, page);
			e.preventDefault();
		};
	});
	//window.onpopstate = updateState;
};
window.addEventListener("popstate", updateState);
