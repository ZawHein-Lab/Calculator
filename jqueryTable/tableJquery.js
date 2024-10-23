$(() => {
let addBtn = $("#addBtn");
let name = $("#name");
let eng = $("#eng");
let myan = $("#myan");
let selectedIndex = undefined
var data = [{
    name: "Hein",
    eng: 64,
    myan: 45
},{
    name: "Zaw",
    eng: 68,
    myan: 39
}]
const addDataRow=(item,index)=>{
        let tr = $("<tr>")
        let td1 = $("<td>").text(item.name)
        let td2 = $("<td>").text(item.myan)
        let td3 = $("<td>").text(item.eng)
        var engMark = parseInt(item.eng);
        var myanMark = parseInt(item.myan);
        let td4 = $("<td>").text(engMark + myanMark)
        let td5= $("<td>")

        let td7 = $("<td>")
        if(engMark < 40 || myanMark < 40){
            td7.text("Fail")
        } else (
            td7.text("Pass")
        )
        calculateGrade( myanMark,td5)

        let td6 = $("<td>")
        calculateGrade(engMark,td6)

        let td8 = $("<td>")
        let deleteIcon = $("<i>",{class:"fa-solid fa-trash-can fs-5"})
        td8.on("click",()=> delFun(index))

        let td9 = $("<td>")
        let editIcon = $("<i>",{class:"fa-solid fa-pen-to-square fs-5" })
        td9.on("click",()=>editFun(index))

        td8.append(deleteIcon)
        td9.append(editIcon)

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td7)
        tr.append(td4)
        tr.append(td5);
        tr.append(td6)
        tr.append(td8)
        tr.append(td9)
        $("#tbody").append(tr)
}
const editFun=(index)=>{
    // console.log(data[index].name)
    selectedIndex = index
    name.val(data[index].name)
    myan.val(data[index].myan)
    eng.val(data[index].eng)
}
const delFun=(index)=>{
    data.splice(index,1)
    showDataRow()
}
const calculateGrade=(subject,td)=>{
    switch(true){
        case (subject <= 20):
            td.text("E")
            break;
        case (subject <= 40):
            td.text("D")
            break;
        case (subject <= 60):
            td.text("C")
            break;        
        case (subject <= 80):
            td.text("B")
            break;
        case (subject <= 100):
            td.text("A")
            break;  
        default: 
            td.text("Invalid Mark") 
    }
}
const showDataRow = () => {
    $("#tbody").html("")
  data.forEach((item,index) =>{
    addDataRow(item,index);
  })
}

addBtn.on("click",function(){
    
    $("#tbody").html("")
    if(eng.val() != "" && myan.val() != "" && name.val() != "" && myan.val() < 100 && eng.val() < 100){
        $("#engMessageNone").css("display", "none")
        $("#engMessage").css("display", "none")
        $("#myanMessageNone").css("display", "none")
        $("#myanMessage").css("display", "none")
        $("#message").css("display", "none")
        if(selectedIndex === undefined){
        data.push({name: name.val(),eng: eng.val(), myan: myan.val()})
        } else{
            data[selectedIndex].name = name.val()
            data[selectedIndex].eng = eng.val()
            data[selectedIndex].myan =myan.val()
            eng.val("")
            myan.val("")
            name.val("")
            showDataRow()
            selectedIndex = undefined

        }
        eng.val("")
        myan.val("")
        name.val("")
        }

    else{
            var value  = name.val();
            if(value == "")
            {
                $("#message").css("display", "block")
                name.val('')
            } else
            if(value != ""){
                $("#message").css("display", "none")
            }
            var value1  = eng.val();
            let messageEng = $("#engMessage")
            let errorMessageEng = $("#engMessageNone")

            var value2  = myan.val();
            let messageMyan = $("#myanMessage")
            let errorMessageMyan = $("#myanMessageNone")

           const checkValidate= (subjectValue,message,errorMessage,sub)=>{
                    
                    if(subjectValue == ""){
                        $(message).css("display", "none")
                        $(errorMessage).css("display", "block")
                    } 
                    if(subjectValue != ""){
                        $(message).css("display", "none")
                        $(errorMessage).css("display", "none")
                    } 
                    if(subjectValue < 0 || subjectValue > 100 )
                    {
                        $(message).css("display", "block")
                        $(errorMessage).css("display", "none")
                    sub.val('')
                    }
            }
                checkValidate(value1,messageEng,errorMessageEng,eng)
                checkValidate(value2,messageMyan,errorMessageMyan,myan)

            // var value2  = myan.val();
            // if(value2 == ""){
            //     $("#myanMessage").css("display", "none")
            //     $("#myanMessageNone").css("display", "block")
            // } 
            // if(value2 != ""){
            //     $("#myanMessageNone").css("display", "none")
            //     $("#myanMessage").css("display", "none")
            // } 
            // if(value2 < 0 || value2 > 100)
            // {
            //     $("#myanMessageNone").css("display", "none")
            //     $("#myanMessage").css("display", "block")
            //     myan.val('')
            // }
        }
   showDataRow()
})

showDataRow()
  });