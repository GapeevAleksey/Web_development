function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
	// === TABS =====================================================

	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsParent = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach((item) => {
			// item.style.display = 'none';
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('activeClass');
		});
	}
	function showTabContent(i = 0) {
		// tabsContent[i].style.display = 'block';
		tabsContent[i].classList.remove('hide', 'fade');
		tabsContent[i].classList.add('show', 'fade');

		tabs[i].classList.add('activeClass');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item, index) => {
				if (item == target) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});
}

export default tabs;
