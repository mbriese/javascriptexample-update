let Follow = function() {

}

Follow.prototype.cleanUp() {

}

Follow.prototype.validate() {

}

Follow.prototype.create = function() {
   return new Promise((resolve, reject) => {
       this.cleanUp()
       this.validate()
   })
}

module.exports = Follow