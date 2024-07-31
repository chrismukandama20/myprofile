let x =document.querySelector('#project');
       let Btn =document.querySelector('#Btn');
       let Btn2 =document.querySelector('#Btn2');
       let y = 1;
 
     function btn(){
       
       if(y === 1){
        y += 1;
        x.style.left = '-300px';
        Btn2.style["opacity"] = '1';
        Btn2.style["cursor"] = 'pointer';
       }else if(y === 2){
        y += 1;
        x.style.left = '-600px';
       }else if(y === 3){
        y += 1;
        x.style.left = '-900px';
       }else if(y === 4){
        y += 1;
        x.style.left = '-1200px';
      }else if(y === 5){
        y += 1;
        x.style.left = '-1500px';
      }else if(y === 6){
        y += 1;
        x.style.left = '-1800px';
      }else if(y === 7){
        y += 1;
        x.style.left = '-2200px';
      }else if(y === 8){
        y += 1;
        x.style.left = '-2300px';
        Btn.style["opacity"] = '0.5';
        Btn.style["cursor"] = 'default';
        console.log(y);
      }
     }
     
     
     function btn2(){
      
      console.log(y);
       if(y === 10){
        y -= 1;
        x.style.left = '-2500px';
        Btn.style["opacity"] = '1';
        Btn.style["cursor"] = 'pointer';
       }else if(y === 9){
        y -= 1;
        x.style.left = '-2200px';
       }else if(y === 8){
        y -= 1;
        x.style.left = '-1800px';
       }else if(y === 7){
        y -= 1;
        x.style.left = '-1500px';
       }else if(y === 6){
        y -= 1;
        x.style.left = '-1200px';
       }else if(y === 5){
        y -= 1;
        x.style.left = '-900px';
       }else if(y === 4){
        y -= 1;
        x.style.left = '-600px';
       }else if(y === 3){
        y--;
        x.style.left = '-300px';
       }else if(y === 2){
        y--;
        x.style.left = '-1px';
        Btn2.style["opacity"] = '0.5';
        Btn2.style["cursor"] = 'default';
       }else if(y === 1){
        x.style.left = '-1px';
        
       }
     
     }
     let increement = 11;
    //E-COMMERCE SITES CODES
     function play(){
        let x = document.getElementById('E-commerce');
        let btn2= document.getElementById('button2');
        let btn1= document.getElementById('button1');
        x.style.animationPlayState = 'running';
          btn2.style.color = 'red';
          btn1.style.color = 'white';
        x.style.animation = 'rotation 20s infinite';
        x.classList.remove('') ;
        if(x.style.animationPlayState === 'paused'){
          
        }
        
     }
     
     function paused(){
      let x = document.getElementById('E-commerce');
      let btn2= document.getElementById('button2');
     let btn1= document.getElementById('button1');
     x.style.animation = 'rotation 20s infinite';
      x.style.animationPlayState = 'paused'; 
      btn1.style.color = 'red';
      btn2.style.color = 'white';
     }

     function Services(){
       let element = document.getElementById('services');
       element.scrollIntoView({behavior: 'smooth'});
     }

     function Pricing(){
      let element = document.getElementById('pricing');
      element.scrollIntoView({behavior: 'smooth'});
    }

    function Aboutus(){
      let element = document.getElementById('section1');
      element.scrollIntoView({behavior: 'smooth'});
    }
    function Contact(){
      let element = document.querySelector('.top');
      element.scrollIntoView({behavior: 'smooth'});
    }
     
     function forwards(){
      let x = document.getElementById('E-commerce');
      
      x.style.animation = 'none';
      if(increement <= 151 && increement >= 11){
        increement += 10;
        x.style.marginLeft = `-${increement}vw`;
        console.log(increement);
      }  
      
     }
      
    function backwards(){
     
      let x = document.getElementById('E-commerce');
      if(increement === 161){
        increement -= 10;
        x.style.marginLeft = `-${151}vw`;
      }else if(increement === 151){
        increement -= 10;
        x.style.marginLeft = `-${141}vw`;
      }else if(increement === 141){
        increement -= 10;
        x.style.marginLeft = `-${131}vw`;
      }else if(increement === 131){
        increement -= 10;
        x.style.marginLeft = `-${121}vw`;
      }else if(increement === 121){
        increement -= 10;
        x.style.marginLeft = `-${111}vw`;
      }else if(increement === 111){
        increement -= 10;
        x.style.marginLeft = `-${101}vw`;
      }else if(increement === 101){
        increement -= 10;
        x.style.marginLeft = `-${91}vw`;
      }else if(increement === 91){
        increement -= 10;
        x.style.marginLeft = `-${81}vw`;
      }else if(increement === 81){
        increement -= 10;
        x.style.marginLeft = `-${71}vw`;
      }else if(increement === 71){
        increement -= 10;
        x.style.marginLeft = `-${61}vw`;
      }else if(increement === 61){
        increement -= 10;
        x.style.marginLeft = `-${51}vw`;
      }else if(increement === 51){
        increement -= 10;
        x.style.marginLeft = `-${41}vw`;
      }else if(increement === 41){
        increement -= 10;
        x.style.marginLeft = `-${31}vw`;
      }else if(increement === 31){
        increement -= 10;
        x.style.marginLeft = `-${21}vw`;
      }else if(increement === 21){
        increement -= 10;
        x.style.marginLeft = `${0}vw`;
      }
      console.log(increement);
    }

    //Regular Sites Codes
     function play2(){
      let x = document.getElementById('Regular-site');
      let btn2= document.getElementById('button6');
      let btn1= document.getElementById('button5');
      x.style.animation = 'rotation3 15s infinite';
      btn2.style.color = 'red';
      btn1.style.color = 'white';
      if(x.style.animationPlayState === 'paused'){
        x.style.animationPlayState = 'running';
        
      }
      
     
   }

   function paused2(){
    let x = document.getElementById('Regular-site');
    let btn2= document.getElementById('button6');
   let btn1= document.getElementById('button5');
    x.style.animationPlayState = 'paused'; 
    btn1.style.color = 'red';
    btn2.style.color = 'white';
   }

   let increement2 = 11;
   function forwards2(){
    let x = document.getElementById('Regular-site');
    
    x.style.animation = 'none';
    if(increement2 <= 151 && increement2 >= 11){
      increement2 += 10;
      x.style.marginLeft = `-${increement2}vw`;
      console.log(increement2);
    }  
    
   }
    
  function backwards2(){
   
    let x = document.getElementById('Regular-site');
    if(increement2 === 161){
      increement2 -= 10;
      x.style.marginLeft = `-${151}vw`;
    }else if(increement2 === 151){
      increement2 -= 10;
      x.style.marginLeft = `-${141}vw`;
    }else if(increement2 === 141){
      increement2 -= 10;
      x.style.marginLeft = `-${131}vw`;
    }else if(increement2 === 131){
      increement2 -= 10;
      x.style.marginLeft = `-${121}vw`;
    }else if(increement2 === 121){
      increement2 -= 10;
      x.style.marginLeft = `-${111}vw`;
    }else if(increement2 === 111){
      increement2 -= 10;
      x.style.marginLeft = `-${101}vw`;
    }else if(increement2 === 101){
      increement2 -= 10;
      x.style.marginLeft = `-${91}vw`;
    }else if(increement2 === 91){
      increement2 -= 10;
      x.style.marginLeft = `-${81}vw`;
    }else if(increement2 === 81){
      increement2 -= 10;
      x.style.marginLeft = `-${71}vw`;
    }else if(increement2 === 71){
      increement2 -= 10;
      x.style.marginLeft = `-${61}vw`;
    }else if(increement2 === 61){
      increement2 -= 10;
      x.style.marginLeft = `-${51}vw`;
    }else if(increement2 === 51){
      increement2 -= 10;
      x.style.marginLeft = `-${41}vw`;
    }else if(increement2 === 41){
      increement2 -= 10
      x.style.marginLeft = `-${31}vw`;
    }else if(increement2 === 31){
      increement2 -= 10;
      x.style.marginLeft = `-${21}vw`;
    }else if(increement2 === 21){
      increement2 -= 10;
      x.style.marginLeft = `${0}vw`;
    }
    console.log(increement2);
  }


  function headerScroll(){
    let tophearder = document.getElementById('Top-bar') ;
    tophearder.style.borderBottom = 'solid 1px';
  }

  function Nav(){
    let navbar = document.getElementById("navigation");
    let icon = document.getElementById("icon");
    let icon2 = document.getElementById("icon2");
    navbar.style.left = "0";
    icon.style.display = "none";
    icon2.style.display = "block";
    
  }
  function Close(){
    let navbar = document.getElementById("navigation");
    let icon = document.getElementById("icon");
    let icon2 = document.getElementById("icon2");
    navbar.style.left = "-390px";
    icon.style.display = "block";
    icon2.style.display = "none";
  }

  (function(){
    document.addEventListener('scroll', console.log('hi'))
  })()