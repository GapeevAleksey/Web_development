function forms() {
	//=== ФОРМА ДЛЯ ОТПРАВКИ ДАННЫХ ============================================================================

	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'Loading',
		success: 'Ok!',
		failure: 'Fail',
	};

	forms.forEach((item) => {
		bindPostData(item);
	});

	//=== ФУНКЦИЯ ДЛЯ ОТПРАВКИ ФОРМЫ ============================================================================

	const postData = async (url, data) => {
		const resultPostData = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: data,
		});
		return await resultPostData.json();
	};

	//=== ОТПРАВКА ФОРМЫ ============================================================================

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.insertAdjacentElement('afterend', statusMessage);

			// request.setRequestHeader('Content-type', 'application/json');

			const formData = new FormData(form);

			const object = JSON.stringify(Object.fromEntries(formData.entries()));

			// const object = {};
			// formData.forEach((item, key) => {
			// 	object[key] = item;
			// });
			// console.log(object);

			postData('http://localhost:3000/requests', object)
				.then((data) => {
					console.log(data);
					showThanksModal(message.success);

					statusMessage.remove();
				})
				.catch(() => {
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});

			// request.addEventListener('load', () => {
			// 	if (request.status == 200) {
			// 		console.log(request.response);
			// 		showThanksModal(message.success);
			// 		form.reset();
			// 		statusMessage.remove();
			// 	} else {
			// 		showThanksModal(message.failure);
			// 	}
			// });
		});
	}
}

module.exports = forms;
