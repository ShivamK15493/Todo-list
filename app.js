let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){

    if(inp.value == ""){
        list.remove();
    }
   
    let list = document.createElement("li");
    list.classList.add("lis");
    list.innerText= inp.value;

    let del = document.createElement("button");
    del.innerText="Delete";
    inp.value="";

    ul.appendChild(list);
    list.appendChild(del);

    
});

ul.addEventListener("click", function(event){

    // console.log(event.target);
    // console.dir(event.target);

    if(event.target.nodeName == "BUTTON"){

        let list = event.target.parentElement;
        list.remove();
        console.log("delete")
    }
    
})



    