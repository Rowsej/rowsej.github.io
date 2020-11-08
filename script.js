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
function changeState(id, title, page) {
	var state = { pageId: id };
	history.pushState(state, `${title} | Rowsej's Website`, page);
	document.title = "Page | Rowsej's Website";
	updateState({ state: state });
}
window.onload = () => {
	changeState("/home", "Home", "");
	selectEls("a button").forEach(btn => {
		btn.onclick = function(e) {
			var page = btn.parentNode.dataset.page_id;
			var title = btn.innerHTML;
			alert("Clicked: " + page);
			changeState(page, title, page);
			e.preventDefault();
		};
	});
	//window.onpopstate = updateState;
};
window.addEventListener("popstate", updateState);
