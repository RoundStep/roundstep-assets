// LINK OPENER
function OpenLink(getlink) {
    window.open(getlink); 
}

// DARK MODE
function DarkEnabler() {
    document.getElementsByTagName('body')[0].style = "background-color: black";

    localStorage.setItem('mode', '1');
}

function ThemeSwitch() {
    if (checkMode == '0') {
        DarkEnabler();
        document.location.reload(true);
    } else {
        localStorage.setItem('mode', '0');
        document.location.reload(true);
    }
}

let checkMode = localStorage.getItem('mode');
if (checkMode == '1') {
  DarkEnabler();
}


// OTHER

$('.block-menu').html(`<input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
    <span></span>
    </label>`);