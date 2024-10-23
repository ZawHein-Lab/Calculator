
    // if(name){
    //     localStorage.setItem("page",name)
    // }
    const loadPage = (name) => {
        $("#mainContent").load(`${name}.html`,(response,status,xhr)=>{
           if(status === "success")
           {
            localStorage.setItem("page",name)
           }
        })
        
    };