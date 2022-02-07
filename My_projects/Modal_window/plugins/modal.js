function _createModal(options) {
	const DEFAULT_WIGTH = '600px';
	const modal = document.createElement('div');
	modal.classList.add('vmodal');
	modal.insertAdjacentHTML(
		'afterbegin',
		`<div class="modal-overlay">
      <div class="modal-window" style="width: ${options.width || DEFAULT_WIGTH};">
        <div class="modal-header">
          <span class="modal-title">${options.title || 'The title is not defined!'}</span>
         ${options.closable ? `<span class="modal-close">&times</span>` : ''}
        </div>
       <div class="modal-body">
         ${options.content || ''}
        </div>
        <div class="modal-footer">
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>`
	);
	// options.closable && modal.querySelector('.modal-close').classList.add('show');

	document.body.appendChild(modal);

	return modal;
}

$.modal = function (options) {
	const $modal = _createModal(options);
	const ANIMATION_SPEED = 200;
	let closing = false;
	const modal = {
		open() {
			if (!closing) {
				$modal.classList.remove('hide');
				$modal.classList.add('open');
			}
		},
		close() {
			closing = true;
			$modal.classList.remove('open');
			$modal.classList.add('hide');
			setTimeout(() => {
				$modal.classList.remove('hide');
				closing = false;
			}, ANIMATION_SPEED);
		},
	};

	const listener = (e) => {
		if (
			e.target.classList.contains('modal-close') ||
			e.target.classList.contains('modal-overlay')
		) {
			modal.close();
		}
	};

	$modal.addEventListener('click', listener);

	return Object.assign(modal, {
		destroy() {
			$modal.outerHTML = '';
			$modal.removeEventListener('click', listener);
		},
	});
};
