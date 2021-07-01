const navigation = document.getElementById('container-md')
const logo = document.getElementById('logo')

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navigation.style.padding = "5px 10px";
    }

    else {
        navigation.style.padding = "2px 10px";
    }

} 