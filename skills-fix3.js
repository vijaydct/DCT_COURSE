const developer = {
    name: 'anil',
    skills: ['js', 'react', 'node'],
    details: function () {
       this.skills.forEach(function(skill){
           console.log(`${this.name} knows ${skill}`);
       }.bind(this))
    }
}

developer.details() 