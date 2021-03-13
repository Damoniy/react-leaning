function timer(){
    this.time = 0;

    setInterval(() => {
        this.time++;
        console.log(this.time)
    }, 1000)
}

new timer