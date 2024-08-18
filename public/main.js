const top_menu = document.getElementById('wr-top-menu');
const top_menu_icon = document.getElementById('wr-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(top_menu_icon.contains(e.target)){
        // Click to top_menu_icon
        top_menu.classList.toggle('hidden');
        top_menu.classList.toggle('wr-top-menu-expanded');
    }else{
        // Click outside from top_menu_icon
        if(top_menu.classList.contains('wr-top-menu-expanded')){
            top_menu.classList.remove('wr-top-menu-expanded');
            top_menu.classList.add('hidden');
        }
    }
});