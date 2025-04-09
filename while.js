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
      while (price <= 300) { // Loop through prices starting from 200
        if (price % 20== 0) { // Check if the price is odd
          console.log(price, "USD is a reasonable price");
        }
        price++;
      }
    }
    
    