let parent_ele=document.createElement("div")
document.body.appendChild(parent_ele)

let heading_ele=document.createElement("h1")
heading_ele.innerHTML="heading"

let para_ele=document.createElement("p")
para_ele.textContent="paragraph"

let add_button_ele=document.createElement("button")
add_button_ele.innerHTML="click me"
add_button_ele.onclick=function(){
    console.log("button is clicked")
}
parent_ele.append(heading_ele,para_ele,add_button_ele)
//let remove_button_ele=document.createElement("button")
//remove_button_ele.textContent="Remove"