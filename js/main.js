(function(){
    console.log("初始化");

    getMenu();
})();

function getMenu(){
    const menuDom = document.getElementById("menu_all");
    let htmlStr = "";
    for(let i =0;i<menuJson.length;i++){
        htmlStr+=" <h2>"+menuJson[i].title+"</h2>";
        for(let j=0;j<menuJson[i].list.length;j++){
            htmlStr+=" <h4>"+menuJson[i].list[j].title+"</h4>";
            for(let k=0;k<exampleJson.length;k++){
                if(exampleJson[k].parent == menuJson[i].list[j].title){
                    htmlStr+="<li><a href='"+exampleJson[k].url+"' target='_blank'>"+exampleJson[k].title+"</a></li>";
                }
            }
        }
    }
    menuDom.innerHTML = htmlStr;
}

