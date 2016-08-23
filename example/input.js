class Simple {}

class Example extends Simple{
  
  constructor(){
    super();
    this.greeting = 'Hello'
  }
  
  greet(){
    console.log(this.greeting)
  }
  
  render(){
    setTimeout(this.greet, 0)
  }
}

const example = new Example()

example.render() // logs out 'Hello', in vanilla js it would log out undefined