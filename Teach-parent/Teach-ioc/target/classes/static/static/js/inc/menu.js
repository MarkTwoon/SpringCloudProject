var old_menu = '';
var old_cell = '';
function menuclick(submenu, cellbar) {
	if (old_menu != submenu) {
		if (old_menu != '') {
			old_menu.style.display = 'none';
			//old_cell.src = '../img/left.gif';
		}
		submenu.style.display = 'block';

		old_menu = submenu;
		old_cell = cellbar;
	} else {
		submenu.style.display = 'none';
		// cellbar.src='../img/left.gif';
		old_menu = '';
		old_cell = '';
	}
}

// cellbar.src='../img/left1.gif';
