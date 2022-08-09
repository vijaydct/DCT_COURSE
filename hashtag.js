function fakeBinary(str){
    let binary;
    let sum ='';
    for(let i=0; i<str.length; i++){
      if(str[i]>5){
        binary='1';
      } else {
        binary='0';
      }
      
      sum+=binary; 
    }
    
    return sum;
  }
  undefined
  fakeBinary('123567');
  "000011"
  
  ​