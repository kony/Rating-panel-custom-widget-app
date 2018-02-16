define({ 

  //Type your controller code here 
  onNavigate:function(){
    var segArray=[];
    var segObj={};
    var j;
    for(var i=0;i<productList.length;i++){
      segObj={};
      segObj["productImg"]=productList[i].prodImg;
      segObj["lblProdName"]=productList[i].prodName;
      segObj["lblDescription"]=productList[i].lblDescription;
      for(j=0;j<productList[i].rating;j++){
        segObj["img"+(j+1)]={"src":"konymp_pl_star_active.png"};
      }
      for(;j<5;j++){
        segObj["img"+(j+1)]={"src":"konymp_pl_star_inactive.png"};
      }
      segObj["lblCost"]=productList[i].cost;
      segObj["lblStock"]=productList[i].stock;
      segObj["productOne"]=productList[i].productOne
      segObj["productTwo"]=productList[i].productTwo;
      segObj["productThree"]=productList[i].productThree;
      segArray.push(segObj);
    }
    this.view.segTemp.removeAll();
    this.view.segTemp.addAll(segArray);
  },
  onRowClick:function(){
     var index=this.view.segTemp.selectedRowIndex[1];
    //alert(parseInt(index));
    index=""+index;
    var navOnj=new kony.mvc.Navigation("frmProdDetail");
    try{
      navOnj.navigate(index);
    }catch(excp){
      alert("excp: "+excp);
    }
    //alert(productList[index]);
    
  }

});