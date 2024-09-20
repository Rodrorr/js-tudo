let post=document.querySelector(".post")
let title=document.querySelector(".title")
let caption=document.querySelector(".caption")
let btn=document.querySelector(".btn")

let arr=[]

btn.addEventListener("click", ()=>{
    if(!title.value){
        alert("write somthing")
    }else{

        arr.push({
            title:title.value,
            caption:caption.value
        })
        title.value=""
        caption.value=""
        post.innerHTML=""
        display()
    }


    // console.log(title.value,caption.value);
    
})
// -------btn end--------------


function display(){
    arr.map(item=> {

        post.innerHTML+=`<div class="posttwo">
                <div>
                    <h2>${item.title}</h2>
                    <p>${item.caption}</p>
                    <button class="Edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`
        
    })
    
    let deletebtn=document.querySelectorAll(".delete")
    let convertdeletebtn=Array.from(deletebtn)
    
    
    convertdeletebtn.map((alldelete,index)=>{
        alldelete.addEventListener("click",()=>{
            arr.splice(index,1);
            post.innerHTML=""
            display()
        })

    })
    
}