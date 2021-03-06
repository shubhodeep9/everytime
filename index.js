module.exports = Everytime

Date.prototype.addHours = function(h, m){
    this.setHours(this.getHours() + h, this.getMinutes() + m)
    return this
}

function Everytime() {
    if(!(this instanceof Everytime)) return new Everytime()
    this.time = new Date()
    // data members to be initialised as needed.
}

Everytime.prototype.getTime = function(longitude, formatted) {
    if(!longitude) longitude = 0
    if(!formatted && typeof formatted != 'boolean') formatted = false
    
    // calculate the difference in time
    // ALGO: timediff(in hrs) = (longitude * 4) / 60
    timediff = longitude/15

    // Lets get timediff in hours and minutes separately
    formattedTime = this._decimalToTime(timediff)

    output = this.time.addHours(formattedTime.hour, formattedTime.minute)
    if(formatted) return output.toUTCString()
    return output
}

Everytime.prototype._decimalToTime = function(decimal) {
    var formattedTime = {
                            hour    : 0,
                            minute  : 0
                        }
     
    formattedTime.hour = parseInt(decimal)
    formattedTime.minute = parseInt((decimal - formattedTime.hour) * 60)
    return formattedTime
}