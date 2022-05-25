const TemperatureScale = {
    Kelvin: 'K',
    Fahrenheit: 'F',
    Celsius: 'C'
}

class Temperature {
    constructor(number, scale){
        this.number = number,
        this.scale = scale
    }

    ToKelvin(){
        switch (this.scale) {
            case TemperatureScale.Celsius:
                let temp = this.number + 273.15
                return new Temperature(Number(Math.round(temp*10)/10), TemperatureScale.Kelvin)

            case TemperatureScale.Fahrenheit:
                let temp2 = (this.number - 32) * 5/9 + 273.15
                return new Temperature(Number(Math.round(temp2*10)/10), TemperatureScale.Kelvin)

            default:
                return new Temperature(this.number, this.scale)
        }
    }

    ToFahrenheit(){
        switch (this.scale) {
            case TemperatureScale.Celsius:
                let temp = (this.number * 9/5) + 32
                return new Temperature(Number(Math.round(temp*10)/10), TemperatureScale.Fahrenheit)

            case TemperatureScale.Kelvin:
                let temp2 = (this.number - 273.15) * 9/5 + 32
                return new Temperature(Number(Math.round(temp2*10)/10), TemperatureScale.Fahrenheit)

            default:
                return new Temperature(this.number, this.scale)
        }
    }

    ToCelsius(){
        switch (this.scale) {
            case TemperatureScale.Kelvin:
                let temp = this.number - 273.15
                return new Temperature(Number(Math.round(temp*10)/10), TemperatureScale.Celsius)

            case TemperatureScale.Fahrenheit:
                let temp2 = (this.number - 32) * 5/9
                return new Temperature(Number(Math.round(temp2*10)/10), TemperatureScale.Celsius)

            default:
                return new Temperature(this.number, this.scale)
        }
    }

    Add(Temperature){
        let temp;
        switch (this.scale) {
            case TemperatureScale.Celsius:
                temp = Temperature.ToCelsius()
                break;
            case TemperatureScale.Fahrenheit:
                temp = Temperature.ToFahrenheit()
                break;
            case TemperatureScale.Kelvin:
                temp = Temperature.ToKelvin()
                break;
            default:
                break;
        }

        temp.number += this.number
        temp.number = Number(Math.round(temp.number*10)/10)
        return temp;
    }

    Substract(Temperature){
        let temp;
        switch (this.scale) {
            case TemperatureScale.Celsius:
                temp = Temperature.ToCelsius()
                break;
            case TemperatureScale.Fahrenheit:
                temp = Temperature.ToFahrenheit()
                break;
            case TemperatureScale.Kelvin:
                temp = Temperature.ToKelvin()
                break;
            default:
                break;
        }

        temp.number = this.number - temp.number
        temp.number = Number(Math.round(temp.number*10)/10)
        return temp;
    }

    MultiplyBy(Temperature){
        let temp;
        switch (this.scale) {
            case TemperatureScale.Celsius:
                temp = Temperature.ToCelsius()
                break;
            case TemperatureScale.Fahrenheit:
                temp = Temperature.ToFahrenheit()
                break;
            case TemperatureScale.Kelvin:
                temp = Temperature.ToKelvin()
                break;
            default:
                break;
        }

        temp.number *= this.number
        temp.number = Number(Math.round(temp.number*10)/10)
        return temp;
    }

    DivideBy(Temperature){
        let temp;
        switch (this.scale) {
            case TemperatureScale.Celsius:
                temp = Temperature.ToCelsius()
                break;
            case TemperatureScale.Fahrenheit:
                temp = Temperature.ToFahrenheit()
                break;
            case TemperatureScale.Kelvin:
                temp = Temperature.ToKelvin()
                break;
            default:
                break;
        }

        temp.number = this.number / temp.number
        temp.number = Number(Math.round(temp.number*10)/10)
        return temp;
    }

    ToString(){
        return `${this.number} ${this.scale}`
    }
}

module.exports = {
    Temperature,
    TemperatureScale
}