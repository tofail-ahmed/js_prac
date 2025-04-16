const teachers=[
      {
            name:"Moshiul",
            course:"Adv ML"
      },
      {
            name:"Kawsar",
            course:"NLP"
      },
      {
            name:"KD",
            course:"CV"
      }
]

// console.log(teachers.map(teacher => (teacher.name+ teacher.course)));

{
      const person={
            name:"Rahul",
            prof:"athlete",
            country:"India",
            favOpp:["BD","Aus","SL"]
      }
      // console.log(person["country"])
}

{
      const person={
            name:"Sayem",
            prof:"Private job at MNC",
            address:{
                  dist:"Ctg",
                  PS:"Pahartali",
                  vill:"Nowapara",
                 
                  contact:{
                        email:"atofail50@gmail.com",
                        tel:"012839",
                  }
            }
 
      }

      // console.log(person.address)
}

{
      const player={
            name:"Shakib",
            age:37,
            sport:"cricket",
            team:"BD",
            address:{
                  country:"USA",
                  email:"shakib@yahoo.com"
            }

      }
      const keysOfPlayer=Object.keys(player)
      const valuesOfPlayer=Object.values(player)
      // console.log(keysOfPlayer)
      // console.log(valuesOfPlayer)
      // console.log(keysOfPlayer.includes("name"))
      if("name" in player){
            // console.log("player consist of runs")
      }else{
            // console.log("player doesnot consist of runs")
      }


      if(player.hasOwnProperty("runs")){
            // console.log("yes")
      }else{
            // console.log("nope")
      }
      // console.log(Object.entries(player))

      for(const key in player){
            const value=player[key]
            // console.log(key,value)
      }
}