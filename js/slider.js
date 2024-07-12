let count =1;
document.getElementById("#block-1").addEventListener("wheel", event =>{
    if(event.deltaY>0){
        event.target.scrollBy(1800,0)
    }else{
        event.target.scrollBy(-1800,0)
    }
});
