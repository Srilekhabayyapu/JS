console.log("external file")
let parent_ele=document.createElement("div");
document.body.appendChild(parent_ele);

let heading_ele=document.createElement("h1");
heading_ele.innerHTML="heading";

let paragraph_ele=document.createElement("p");
paragraph_ele.innerHTML="paragraph";

let add_button_ele=document.createElement("button");
add_button_ele.innerHTML="click";

let remove_button_ele=document.createElement("button");
remove_button_ele.innerHTML="click";

add_button_ele.onclick=function()
{
    console.log("button is clicked")
    heading_ele.style.color="red";
    heading_ele.style.backgroundColor="black"; 
    heading_ele.style.fontsize="10px";
    paragraph_ele.style.fontsize="10px";
    paragraph_ele.style.color="green";
    paragraph_ele.style.backgroundColor="blue";

};
remove_button_ele.onclick=function(){
   console.log("button is clicked")
   heading_ele.remove();
   paragraph_ele.remove();

}

parent_ele.appendChild(heading_ele);
parent_ele.appendChild(paragraph_ele);
parent_ele.appendChild(add_button_ele);
parent_ele.appendChild(remove_button_ele);