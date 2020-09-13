function openNav(width) {
  document.getElementById("filterBy").style.width = width;
  if (document.getElementById("filterBy").style.width == "0px" ||
    document.getElementById("filterBy").style.width == 0) {
    document.getElementById("filterBy").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  } else {
    document.getElementById("filterBy").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}