class Simple {
  greet(){
    console.log(this.greeting)
  }
}

class Example extends Simple {
  
  constructor(){
    super()
    this.greeting = 'Hello'
  }
  
  render(){
    setTimeout(this.greet, 0)
  }
}

const example = new Example()

example.render() // logs out 'Hello', in vanilla js it would log out undefined