define({ 

  //Type your controller code here 
  onNavigate:function(){
    /* this.view.rating.onSelection(
    function(){
      alert("hello");
    });*/
    /*this.view.rating.onSelection=function(){
      alert("hello");
    }*/
  },
  onRatingDone:function(rating){
    alert("rating:"+rating);
  },
  setEventListener:function(){
    if(kony.os.deviceInfo().name=='iPhone'){
      this.view.rating.onSelection=function(rating){
        alert("hello:"+rating);
      }
    }else if(kony.os.deviceInfo().name=="android"){
      this.view.ratingBar.onRatingChange=function(rating){
        alert("rating: "+rating);
      }
    }

  },
  rateIt:function(){
    if(kony.os.deviceInfo().name=="iPhone"){
     this.view.rating.rating=4; 
    }else if(kony.os.deviceInfo().name=="android"){
      this.view.ratingBar.numStars=4;
    }
    
  },
  onRatingDoneAndroid:function(rating){
    alert("rating:"+rating);
  }

});