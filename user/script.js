//Dark Mode Change
function darkMode() {
    var element = document.body;
    var modeIcon = document.getElementById('modeIcon');
    element.classList.toggle("dark-mode");
    if(modeIcon.classList.contains("fa-sun-o")){
        modeIcon.classList.add("fa-moon-o")
        modeIcon.classList.remove("fa-sun-o");
      }
      else{
        modeIcon.classList.add("fa-sun-o")
        modeIcon.classList.remove("fa-moon-o");
      }
 }