function openTab(evt, tabName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tablinks
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default to the first tab
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName("tablinks")[0].click();
});
