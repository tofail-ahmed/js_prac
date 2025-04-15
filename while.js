{
      let age = 0;
      while (age <= 30) {
        if (age <= 19) {
      //     console.log(age, "years old is a teenage");
        } else {
      //     console.log(age, "years old is not teenage anymore");
        }
        age++; // increment age to avoid infinite loop
      }
    }

    {
      let price = 200;
      while (price <= 300) {
        // Loop through prices starting from 200
        if (price % 20 == 0) {
          // Check if the price is odd
          //     console.log(price, "USD is a reasonable price");
        }
        price++;
      }
    }

    {
      let num = 1;
      while (num <= 10) {
        // console.log("I will practice programming daily 3hrs----",num)
        num++;
      }
    }

    {
      let num = 1;
      while (num <= 20) {
        // console.log(num)
        num++;
      }
    }
    {
      let num = 1;
      while (num <= 10) {
        // console.log(`3*${num}=${num*3}`)
        num++;
      }
    }

    {
      let num = 10;
      while (num <= 50) {
        if (num % 2 == 0) {
          // console.log(`${num}/2=${num / 2}`);
        }else{
          // console.log(num)
        }
        num++;
      }
    }


    {
      let num=0;
      while(num<=10){
        // console.log(num)
        
num++
      }
    
    }
    {
      let num=0
      let sum=0;
      while(num<=10){
        // console.log(sum)
        sum=num+sum
        num++
      }
    }

    {
      for(let num=1;num<=9;num++){
        // console.log(num)
      }
    }

    {
      let sum=0;
      for(let i=1;i<=10;i++){
        // console.log(sum)

        sum=sum+i
      }
      // console.log(sum)

    }

{
  let evenSum=0
  let oddSum=0
  for(let i=1;i<=20;i++){
    if(i%2==0){
      evenSum=i+evenSum
      // console.log(i, "is an even")
    }else{
      oddSum=i+oddSum
      // console.log(i,"is an odd")
    }
  }
  // console.log("evenSum",evenSum)
  // console.log("oddSum",oddSum)
}

{
  for(let i=1;i<=30;i++){
    if(i%3==0&&i%5==0){
      // console.log(i)
    }
  }
}

{
  for(let i=1;i<=100;i++){
  
    if(i==50){
     continue
    }
    // console.log(i)
  }
}

{
  for(let i=1;i<=30;i++){
   

    if(i>15){
      break
    }
    // console.log(i)
  }
}

{
  for(let i=1;i<=40;i++){
    if(i%7!=0){
      // console.log(i)
    }
  }
}

{
  for(let i=1;i<=30;i++){
    
    if(i==12){
      continue
    }
    // console.log(i) 
  }
}

{
  let i=91;
  while(i<=120){
    if(i%10==0){
      break
    }
   
    console.log(i)
    i++
  }
}