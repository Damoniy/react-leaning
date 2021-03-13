const dog = {
    talk: "Au au au!",
    speak(){
        console.log(this.talk)
    }
}

dog.speak()

const dogSpeak = dog.speak.bind(dog)
dogSpeak()