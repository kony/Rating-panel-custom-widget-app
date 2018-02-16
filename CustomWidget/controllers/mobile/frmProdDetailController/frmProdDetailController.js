define({ 

 //Type your controller code here 
  index:null,
  onNavigate:function(index){
    if(index===null||index===undefined){
      return;
    }
    
    if(kony.store.getItem("IS_FRESH_LAUNCH")===true){
      this.view.flxBtnActivate.setVisibility(true);
      this.view.flxRatingContainer.setVisibility(false);
    }
    var product=productList[index];
    this.index=index;
    if(product!==undefined){
     // this.view.headerTitleLabel.text=product.prodName;
      this.view.imgProd.src=product.prodImg;
      this.view.lblProdName.text=product.prodName;
      this.view.lblProdDesc.text=product.lblDescription;
      this.view.lblexpectedDelivery.text="20th Dec 2017";
      this.view.lblActualDelivery.text="20th Dec 2017";
      //var self=this;
      //alert(kony.os.deviceInfo().name);
      if(kony.os.deviceInfo().name=='iPhone'){
        this.view.rating.rating=product.rating;
      }else if(kony.os.deviceInfo().name=="android"){
        this.view.ratingBar.numStars=product.rating;
      }
    }
  },
  setEventListener:function(){
    kony.store.setItem("IS_FRESH_LAUNCH", false);
    this.view.flxBtnActivate.setVisibility(false);
    this.view.flxRatingContainer.setVisibility(true);
    var self=this;
    var product=productList[self.index];
    if(kony.os.deviceInfo().name=='iPhone'){
      this.view.rating.rating=product.rating;
      this.view.rating.onSelection=function(rating){
        //alert("hello:"+rating);
        productList[self.index].rating=rating;
      }
    }else if(kony.os.deviceInfo().name=="android"){
      this.view.ratingBar.numStars=product.rating;
      this.view.ratingBar.onRatingChange=function(rating){
        //alert("rating: "+rating);
        productList[self.index].rating=rating;
      }
    }
  }

 });