$(document).ready(function(){
    // console.log("HI")
    let selectedIndex = undefined;
    const getCurrentFormattedDate = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed, so +1
        let day = ("0" + date.getDate()).slice(-2);
        let hour = ("0" + date.getHours()).slice(-2); // 24-hour format
        let minute = ("0" + date.getMinutes()).slice(-2);
        let ampm = hour >= 12 ? 'PM' : 'AM';  // Determine AM/PM
        hour = hour % 12;  // Convert to 12-hour format
        hour = hour ? hour : 12;  // If hour is 0 (midnight), set it to 12
        // Format to display: YYYY-MM-DD HH:MM AM/PM
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + " " + ampm;
    }
    const data = [{
        title: "My Note",
        note: "i did do notebook in thadingyut fullmoon day",
        dateTime: getCurrentFormattedDate()
    },
    {
        title: "FullMoonDay",
        note: "i did the todo list",
        dateTime: getCurrentFormattedDate()
    } ];
    
    //modal box input
    let titleInput = $("#titleInput")
    let noteInput = $("#noteInput")
    // let dateInput = $("#dateInput");
    var saveBtn = $("#saveBtn");
    // accept card from jquery add data
    let cardRow = $("#cardRow");

    const createNote = (item,index) =>{
        let card = $("<div>",{class: "card col-lg-4 col-md-6 col-sm-12 mt-3"})

        let cardBody = $("<div>",{class:"card-body"})

        let alignDiv = $("<div>",{class:"d-flex align-items-center justify-content-between"})
        let cardTitle = $("<h4>",{class:"card-title"}).text(item.title)
        let cardText = $("<p>",{class: "card-text"}).text(item.note)

        let btnDiv = $("<div>")
        let delBtn = $("<button>",{class: "btn btn-light"})
        let delIcon = $("<i>",{class:"fa-solid fa-trash-can"})
        delBtn.on("click",()=>delFun(index))
        let readBtn = $("<button>",{class: "btn btn-light"})
        let readIcon = $("<i>",{class:"fa-brands fa-readme"})
        readBtn.on("click",()=>readFun(index))
        let editBtn = $("<button>",{class: "btn btn-light"})
        let editIcon = $("<i>",{class:"fa-solid fa-pen-to-square"}) 
        editBtn.on("click",()=>editFun(index))
        // let cardRow =$("<div>",{class: "justify-content-evenly"})
        let cardFooter = $("<div>",{class:"card-footer"})
        let spanDate = $("<span>").text(item.dateTime)
        // let cardContainer = $("#cardContainer")
        delBtn.append(delIcon)
        btnDiv.append(delBtn)

        readBtn.append(readIcon)
        btnDiv.append(readBtn)

        editBtn.append(editIcon)
        btnDiv.append(editBtn)

        alignDiv.append(cardTitle)
        alignDiv.append(btnDiv)

        cardBody.append(alignDiv)
        cardBody.append(cardText)

        cardFooter.append(spanDate)

        card.append(cardBody)
        card.append(cardFooter)

        cardRow.append(card)
        // cardContainer.append(cardRow)
    }
    const editFun = (index) =>{
        $("#myModal").modal('show')
        $('#titleInput').val(data[index].title)
        $("#noteInput").val(data[index].note)
        selectedIndex = index;
    }
    const delFun= (index) => {
        cardRow.html("")
        data.splice(index,1)
        showAllNote();
    }

    const readFun = (index) =>{
        // console.log(data[index].dateTime);
        $('#modalBody').append(data[index].note)
        $("#modalTitle").append(data[index].title)
        $("#modalFooter").append(data[index].dateTime)
        // console.log(data[index].dateTime);
        $("#readModal").modal('show')
        $("#btnClose").on("click",()=>{ 
            $("#modalBody").html("")
            $("#modalTitle").html("")
            $("#modalFooter").html("")
        })
    }

    $("#saveBtn").on("click",()=>{
        if(selectedIndex === undefined){
            data.push({title: titleInput.val(), note: noteInput.val(),dateTime: getCurrentFormattedDate() })
            $("#titleInput").val("")
            $("#noteInput").val("")
            $("#myModal").hide()
            cardRow.html("")
            
            } else{
                data[selectedIndex].title = titleInput.val();
                data[selectedIndex].note = noteInput.val();
                data[selectedIndex].dateTime = getCurrentFormattedDate()
                $("#titleInput").val("")
                $("#noteInput").val("")
                $("#myModal").hide()
                cardRow.html("")
                selectedIndex = undefined;
            } 
// console.log(formattedDate)
         showAllNote()
     })

   const showAllNote= ()=>{
        data.forEach((item,index)=>{
            createNote(item,index);
           })
    }

showAllNote();
})