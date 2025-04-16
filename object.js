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


{
      const book={
            name:"javascript marhaba",
            author:"Jhankar Mahbub",
            price:580,
            pages:448
      }

      for(const key in book){
            const value=book[key]
            // console.log(key,value)
      }
      // console.log(Object.keys(book))
      // console.log(Object.values(book))
      // console.log(Object.entries(book))
}

{
      const article={
            title:"js dhamaka",
            category:"programming"
      }
      const articleKeys=Object.keys(article)
// console.log(articleKeys.includes("title"))
for (const key in article){
      const value=article[key]
      // console.log(key, value)
}
}

{
      const phone={
            brand:"samsung",
            model:"galaxy s21",
            price:85000
      }
      const keys=Object.keys(phone)
      // console.log(keys)
      for(const key of keys){
            // console.log(key)
      }
}

{
      const numbers={
            a:10,
            b:20,
            c:30,
            d:40
      }
      const values=Object.values(numbers)
      const sum=(values.reduce((a,c)=>a+c,0))
      // console.log(sum)
}
{
      const building={
            floors:10,
            address:{
                  street:"main road",
                  city:"Dhaka"
            },
            type:"Commercial"
      }
      const keys=Object.keys(building)
      const values=Object.values(building)
      for(const index in keys){
            console.log(keys[index])
      }
      for(const index in values){
            console.log(values[index])
      }
}