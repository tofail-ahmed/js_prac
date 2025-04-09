{
      let age = 0;
      while (age < 30) {
        if (age < 20) {
          console.log(age, "is a teenage");
        } else {
          console.log(age, "is not teenage anymore");
        }
        age++; // increment age to avoid infinite loop
      }
    }
    