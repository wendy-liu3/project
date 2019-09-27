window.onload=function(){
    imgLocation("container","box")
}

//有瑕疵
function imgLocation(parent,content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth/imgWidth)
    cparent.style.cssText = "width:"+imgWidth*num+"px;margin: 0 auto";

    var BoxHeightArr=[];
    for(var i = 0;i<ccontent.length;i++){
        if(i<num){
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        }else{
            var minheight = Math.min.apply(null,BoxHeightArr);
            var minIndex = getminheightLocation(BoxHeightArr,minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight+"px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}
function getminheightLocation(BoxHeightArr,minHeight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i] == minHeight){
            return i;
        }
    }

}
function getChildElement(parent,content) {
    var contentArr=[];
    var allcontent = parent.getElementsByTagName("*");
    for(var i = 0; i<allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}