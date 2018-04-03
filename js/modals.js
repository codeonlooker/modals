document.querySelector('#openModal').addEventListener('click', function () {
			document.querySelector('.main').style.opacity = 0;
			document.querySelector('.main').style.display = 'none';
			document.querySelector('.pageGridArea').style.backgroundColor = '#e0eeee';
			document.querySelector('.modals').style.opacity = 1;
		});
		document.querySelector('.closeModal').addEventListener('click', function () {
			document.querySelector('.main').style.opacity = 1;
			document.querySelector('.modals').style.opacity = 0;
			document.querySelector('.main').style.display = 'block';
			document.querySelector('.pageGridArea').style.backgroundColor = '#fff';
		});