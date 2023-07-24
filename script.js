var temp=0;
function clicking(v){
    if(v=="p"){
        temp=temp-1;
        if(temp<=1){
            temp=1;
        }
    }
    else if(v=="n"){
        temp=temp+1;
        if(temp>=1){
            temp=10;
        }
    }
    else{
        temp=v;
    }
    v=temp;
    if(v===1){
        document.getElementById("pre").style.visibility="hidden";
        document.getElementById("pre").style.width="0px";
        document.getElementById("first").style.visibility="hidden";
        document.getElementById("first").style.width="0px";
    }
    else{
        document.getElementById("pre").style.visibility="visible";
        document.getElementById("pre").style.width="100%";
        document.getElementById("first").style.visibility="visible";
        document.getElementById("first").style.width="100%";
    }
    
    var k=(v-1)*5;
    var req=new XMLHttpRequest();
    req.open("GET","https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json");
    req.send();
    req.onload=function(){
        var res=JSON.parse(req.response);
        setvalues(k,res);
    }
}
function setvalues(n,result){
    for(var i=n;i<n+5;i++){
        if(i%5===0){
            document.getElementById("ID1").innerHTML=result[i].id;
            document.getElementById("NAME1").innerHTML=result[i].name;
            document.getElementById("EMAIL1").innerHTML=result[i].email.toLowerCase();
        }
        if(i%5===1){
            document.getElementById("ID2").innerHTML=result[i].id;
            document.getElementById("NAME2").innerHTML=result[i].name;
            document.getElementById("EMAIL2").innerHTML=result[i].email.toLowerCase();
        }
        if(i%5===2){
            document.getElementById("ID3").innerHTML=result[i].id;
            document.getElementById("NAME3").innerHTML=result[i].name;
            document.getElementById("EMAIL3").innerHTML=result[i].email.toLowerCase();
        }
        if(i%5===3){
            document.getElementById("ID4").innerHTML=result[i].id;
            document.getElementById("NAME4").innerHTML=result[i].name;
            document.getElementById("EMAIL4").innerHTML=result[i].email.toLowerCase();
        }
        if(i%5===4){
            document.getElementById("ID5").innerHTML=result[i].id;
            document.getElementById("NAME5").innerHTML=result[i].name;
            document.getElementById("EMAIL5").innerHTML=result[i].email.toLowerCase();
        }
        if(i%5===5){
            document.getElementById("ID6").innerHTML=result[i].id;
            document.getElementById("NAME6").innerHTML=result[i].name;
            document.getElementById("EMAIL6").innerHTML=result[i].email.toLowerCase();
        }
        
    }
}