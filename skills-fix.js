const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
        // avoid forEach
        for(let i = 0; i < this.skills.length; i++) {
            console.log(`${this.name} knows ${this.skills[i]}`)
        }
    }
}

developer.details()