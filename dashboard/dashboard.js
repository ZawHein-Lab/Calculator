$(document).ready(function () {
  $(".nav-link").on("click", (e) => {
    let currentElement = $(e.currentTarget);
    // console.log(currentElement);
    let dataName = currentElement.attr("data-name");
    if(dataName){
        loadPage(dataName);
    }
  });
  
(()=>{
    let page = localStorage.getItem("page")
    console.log(page)
    if(page){
        loadPage(page)
        // localStorage.removeItem(page)
    } else{
        
        loadPage("home")
    }
  })()

});
