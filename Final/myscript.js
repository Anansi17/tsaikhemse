

function scrollWin() {
  window.scrollBy(0, 3000);
}
function submitClick(){
  //var r = document.getElementById("input1");
  //var r2 = document.getElementById("input2");
  //var r3 = document.getElementById("input3");
 //var r4 = document.getElementById("input4");
// r.value = "";
 //r2.value = "";
 //r3.value = "";
 // r4.value = "";


  var x = document.getElementById("scs");
  var y = document.getElementById("thnk");
  

if (x.style.display === "flex") {

 


} else {
x.style.display = "flex"
y.style.display = "block";
document.getElementById("usrform").style.display="none";
}

}
function burgerClick(){
  document.getElementById("hidden").style.backgroundColor="#e8f0f3";
  document.getElementById("hlogo").src="media/logo.jpg";
  var o = document.getElementById("idform");
  if (o.style.display === "block") {
    o.style.display = "none";
    document.getElementById("drpList").style.display="block";
    document.getElementById("hide").style.display="none";
    document.getElementById("hide").style.opacity="1";
  }
    
  var x = document.getElementById("drpList");
  
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
     
      
    }

    var y = document.getElementById("hide");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
 
    var z = document.getElementById("hide2");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
    var w = document.getElementById("hide3");
    if (w.style.display === "none") {
      w.style.display = "block";
    } else {
      w.style.display = "none";
    }
 
    var u = document.getElementById("hide4");
    if (u.style.display === "none") {
      u.style.display = "block";
    } else {
      u.style.display = "none";
    }
  }
function burgerClick2(){
    
  var o = document.getElementById("idform");
  if (o.style.display === "block") {
    o.style.display = "none";
    document.getElementById("drpList").style.display="block";
    document.getElementById("hide").style.display="none";
    document.getElementById("hide").style.opacity="1";
  } 
  
  
  
  var x = document.getElementById("drpList");
    
    if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
       
        
      }

      var y = document.getElementById("hide");
      
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
   
      var z = document.getElementById("hide2");
      if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
      var w = document.getElementById("hide3");
      if (w.style.display === "none") {
        w.style.display = "block";
      } else {
        w.style.display = "none";
      }
   
      var u = document.getElementById("hide4");
      if (u.style.display === "none") {
        u.style.display = "block";
      } else {
        u.style.display = "none";
      }
      var p = document.getElementById("hide5");
      if (p.style.display === "none") {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }

      
      var r = document.getElementById("hide6");
      if (r.style.display === "none") {
        r.style.display = "block";
      } else {
        r.style.display = "none";
      }
      var l = document.getElementById("hide7");
      if (l.style.display === "none") {
        l.style.display = "block";
      } else {
        l.style.display = "none";
      }
      
     
      
}
function burgerClick3(){
  var o = document.getElementById("idform");
  if (o.style.display === "block") {
    o.style.display = "none";
    document.getElementById("drpList").style.display="block";
    document.getElementById("hide").style.display="none";
  }
    
  var x = document.getElementById("drpList");
  
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
     
      
    }

    var y = document.getElementById("hide");
    if (y.style.display === "none") {
      y.style.display = "flex";
    } else {
      y.style.display = "none";
    }
 
    var z = document.getElementById("hide2");
    if (z.style.display === "none") {
      z.style.display = "flex";
    } else {
      z.style.display = "none";
    }

   
    
}
function bookClick(){
  
  var x = document.getElementById("idform");
  var i = document.getElementById("scs");
      var t = document.getElementById("thnk");
      i.style.display = "none";
        t.style.display = "none";
        document.getElementById("usrform").style.display="flex";
    
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("hide").style.opacity="1";
        document.getElementById("hide2").style.display="block";
        document.getElementById("hide3").style.display="block";
        document.getElementById("hide4").style.display="flex";
        document.getElementById("hidden").style.overflowX="scroll";
        document.getElementById("hidden").style.overflowY="scroll";
        document.getElementById("hidden").style.backgroundColor="#e8f0f3";
        document.getElementById("hlogo").src="media/logo.jpg";
      } else {
        x.style.display = "block";
        document.getElementById("hide").style.opacity="0.03";
        document.getElementById("hide2").style.display="none";
        document.getElementById("hide3").style.display="none";
        document.getElementById("hide4").style.display="none";
        document.getElementById("hidden").style.overflowX="hidden";
        document.getElementById("hidden").style.overflowY="hidden";
        document.getElementById("hidden").style.backgroundColor="#ffffff";
        document.getElementById("hlogo").src="media/logo2.jpg";
       
       
        
      }
    }
    function bookClick2(){

      var i = document.getElementById("scs");
      var t = document.getElementById("thnk");
      i.style.display = "none";
        t.style.display = "none";
        document.getElementById("usrform").style.display="flex";

      var x = document.getElementById("idform");
       
        if (x.style.display === "block") {
            x.style.display = "none";
            document.getElementById("hide").style.opacity="1";
            document.getElementById("hide2").style.display="block";
            document.getElementById("hide3").style.display="flex";
            document.getElementById("hide4").style.display="flex";
            document.getElementById("hidden").style.overflowX="scroll";
            document.getElementById("hidden").style.overflowY="scroll";
            
          } else {
            x.style.display = "block";
            document.getElementById("hide").style.opacity="0.03";
            document.getElementById("hide2").style.display="none";
            document.getElementById("hide3").style.display="none";
            document.getElementById("hide4").style.display="none";
            document.getElementById("hidden").style.overflowX="hidden";
            document.getElementById("hidden").style.overflowY="hidden";
           
           
           
            
          }
        }
      
      function bookClick3(){
        var i = document.getElementById("scs");
      var t = document.getElementById("thnk");
      i.style.display = "none";
        t.style.display = "none";
        document.getElementById("usrform").style.display="flex";

      var x = document.getElementById("idform");
        var x = document.getElementById("idform");
          
          if (x.style.display === "block") {
              x.style.display = "none";
           
              document.getElementById("hide").style.display="flex";
              document.getElementById("hide2").style.display="flex";  
              document.getElementById("hidden").style.overflowX="scroll";
              document.getElementById("hidden").style.overflowY="scroll";
              
            } else {
              x.style.display = "block";
              
              document.getElementById("hide").style.display="none";
              document.getElementById("hide2").style.display="none";
              document.getElementById("hidden").style.overflowX="hidden";
              document.getElementById("hidden").style.overflowY="hidden";

             
             
              
            }

          }
          function bookClick4(){
            var i = document.getElementById("scs");
      var t = document.getElementById("thnk");
      i.style.display = "none";
        t.style.display = "none";
        document.getElementById("usrform").style.display="flex";
            var x = document.getElementById("idform");
              
              if (x.style.display === "block") {
                  x.style.display = "none";
               
                  document.getElementById("drpList").style.display="block";
                  
                 
                  
                } else {
                  x.style.display = "block";
                  document.getElementById("hide").style.display="block";
                  document.getElementById("hide").style.opacity="0.03";
                  document.getElementById("drpList").style.display="none";
                 
    
                 
                 
                  
                }
              }

              function bookClick5(){
                var i = document.getElementById("scs");
          var t = document.getElementById("thnk");
          i.style.display = "none";
            t.style.display = "none";
            document.getElementById("usrform").style.display="flex";
                var x = document.getElementById("idform");
                  
                  if (x.style.display === "block") {
                      x.style.display = "none";
                   
                      document.getElementById("drpList").style.display="block";
                     
                     
                      
                    } else {
                      x.style.display = "block";
                      document.getElementById("hidden").style.backgroundColor="#ffffff";
                      document.getElementById("hlogo").src="media/logo2.jpg";
              
                      document.getElementById("hide").style.opacity="0.03";
                      document.getElementById("drpList").style.display="none";
                      document.getElementById("idform").style.display="block";
                     
        
                     
                     
                      
                    }
                  }

                  function bookClick6(){
                    var i = document.getElementById("scs");
              var t = document.getElementById("thnk");
              i.style.display = "none";
                t.style.display = "none";
                document.getElementById("usrform").style.display="flex";
                    var x = document.getElementById("idform");
                      
                      if (x.style.display === "block") {
                          x.style.display = "none";
                       
                          document.getElementById("drpList").style.display="block";
                         
                         
                          
                        } else {
                          x.style.display = "block";
                          
                  
                         
                          document.getElementById("drpList").style.display="none";
                          document.getElementById("idform").style.display="block";
                        }

                      }
                      var r = document.getElementById("input1");
                      var r2 = document.getElementById("input2");
                      var r3 = document.getElementById("input3");
                      var r4 = document.getElementById("input4");
                   
                      document.getElementById("sbmt").onclick = handleSubmitClick;
                      
                      function canSubmitClick() {
                          return !(r.value == "" || r2.value == "" || r3.value == "" || r4.value == "")
                      }
                      
                      function handleSubmitClick(e) {
                          if( !canSubmitClick() ) {
                              return;
                          }
                      
                          submitClick(e);
                      }