function theTemperature(temC) {
    this.temC = temC;
    this.getTemC = function () {
        return this.temC;
    }
    this.getConvertF = function () {
        return temC*1.8 + 32;
    }
    this.getConvertK = function () {
        return temC + 273.15;
    }
}
let temperature = new theTemperature(25);
let temperatureC = temperature.getTemC();
let convertF = temperature.getConvertF();
let convertK = temperature.getConvertK();
alert(temperatureC + " do C tuong ung " + convertF + " do F và "+convertK+ " do K");