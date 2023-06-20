const user = {
    username : "suraj",
    price : 999,
  
    welcomeMessage: function() {
      console.log(`${this.username} , welcome to website`);// This keyword is use when you are talking about current context
      // console.log(this);
    }
  }
  
  // user.welcomeMessage()
  // user.username = "sam"
  // user.welcomeMessage()
  
  // console.log(this);
  
  // function chai(){
  //   let username = "suraj"
  //   console.log(this.username);
  // }
  // chai()
  
  // const chai = function() {
  //   let username = "suraj"
  //   console.log(this.username);
  // }
  
  // chai()
  
  // const chai = () => {
  //   let username = "suraj"
  //   console.log(this);
  // }
  
  // chai()
  
  // const addTwo = (num1, num2) => { //Explecitly arrow function.
  //   return num1 + num2
  // }
  
  // console.log(addTwo(3, 4))
  
  // const addTwo = (num1, num2) => num1 + num2 // Implecit arrow function
  
  // console.log(addTwo(3, 4))
  
  // const addTwo = (num1, num2) => ({username: "hitesh"})
  // console.log(addTwo(3, 4))  