module.exports = Everytime

Date.prototype.addHours = function(h, m){
    this.setHours(this.getHours() + h, this.getMinutes() + m);
    return this;
}

function Everytime(args) {
    var localDate = new Date();
    console.log(localDate.addHours(5, 30));
}
