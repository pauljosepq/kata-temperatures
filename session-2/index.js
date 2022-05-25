const TemperatureScale = {
    Celsius: 'C',
    Fahrenheit: 'F',
    Kelvin: 'K'
}

class Temperature {
    constructor(number, scale){
        this.number = number,
        this.scale = scale
    }

    ToFahrenheit(){
        switch (this.scale) {
            case TemperatureScale.Celsius:
                const formula = (this.number * 9/5) + 32
                return new Temperature(Number((Math.round(formula * 10)/10).toFixed(1)), TemperatureScale.Fahrenheit)
            case TemperatureScale.Kelvin:
                const formula2 = (this.number - 273.15) * 9/5 + 32
                return new Temperature(Number((Math.round(formula2 * 10)/10).toFixed(1)), TemperatureScale.Fahrenheit)
            default:
                return new Temperature(this.number, this.scale)
        }
    }

    ToCelsius(){
        switch (this.scale) {
            case TemperatureScale.Fahrenheit:
                const formula = (this.number - 32) * 5/9
                return new Temperature(Number((Math.round(formula * 10)/10).toFixed(1)), TemperatureScale.Celsius)
            case TemperatureScale.Kelvin:
                const formula2 = (this.number - 273.15)
                return new Temperature(Number((Math.round(formula2 * 10)/10).toFixed(1)), TemperatureScale.Celsius)
            default:
                return new Temperature(this.number, this.scale)
        }
    }

    ToKelvin(){
        switch (this.scale) {
            case TemperatureScale.Celsius:
                const formula = (this.number + 273.15)
                return new Temperature(Number((Math.round(formula * 10)/10).toFixed(1)), TemperatureScale.Kelvin)
            case TemperatureScale.Fahrenheit:
                const formula2 = (this.number - 32) * 5/9 + 273.15
                return new Temperature(Number((Math.round(formula2 * 10)/10).toFixed(1)), TemperatureScale.Kelvin)
            default:
                return new Temperature(this.number, this.scale)
        }
    }

    Add(Temperature){
        let tempConverted;

        switch (this.scale) {
            case TemperatureScale.Celsius:
                tempConverted = Temperature.ToCelsius()
                break;
            case TemperatureScale.Kelvin:
                tempConverted = Temperature.ToKelvin()
                break;
            case TemperatureScale.Fahrenheit:
                tempConverted = Temperature.ToFahrenheit()
                break;
            default:
                break;
        }
        tempConverted.number = Number((Math.round(this.number * 10)/10).toFixed(1)) + Number((Math.round(tempConverted.number * 10)/10).toFixed(1))

        return tempConverted

    }

    Substract(Temperature){
        let tempConverted;

        switch (this.scale) {
            case TemperatureScale.Celsius:
                tempConverted = Temperature.ToCelsius()
                break;
            case TemperatureScale.Kelvin:
                tempConverted = Temperature.ToKelvin()
                break;
            case TemperatureScale.Fahrenheit:
                tempConverted = Temperature.ToFahrenheit()
                break;
            default:
                break;
        }
        tempConverted.number = Number((Math.round(this.number * 10)/10).toFixed(1)) - Number((Math.round(tempConverted.number * 10)/10).toFixed(1))
        
        return tempConverted
    }

    MultiplyBy(Temperature){
        let tempConverted;

        switch (this.scale) {
            case TemperatureScale.Celsius:
                tempConverted = Temperature.ToCelsius()
                break;
            case TemperatureScale.Kelvin:
                tempConverted = Temperature.ToKelvin()
                break;
            case TemperatureScale.Fahrenheit:
                tempConverted = Temperature.ToFahrenheit()
                break;
            default:
                break;
        }
        tempConverted.number = Number((Math.round(this.number * 10)/10).toFixed(1)) * Number((Math.round(tempConverted.number * 10)/10).toFixed(1))

        return tempConverted
    }

    DivideBy(Temperature){
        let tempConverted;

        switch (this.scale) {
            case TemperatureScale.Celsius:
                tempConverted = Temperature.ToCelsius()
                break;
            case TemperatureScale.Kelvin:
                tempConverted = Temperature.ToKelvin()
                break;
            case TemperatureScale.Fahrenheit:
                tempConverted = Temperature.ToFahrenheit()
                break;
            default:
                break;
        }
        tempConverted.number = (Number((Math.round(this.number * 10)/10).toFixed(1)) / Number((Math.round(tempConverted.number * 10)/10).toFixed(1)))
        tempConverted.number = Number((Math.round(tempConverted.number * 10)/10).toFixed(1))
        return tempConverted
    }

    ToString(){
        return `${Number((Math.round(this.number * 10)/10).toFixed(1))}${this.scale}`
    }


}

const temp1 = new Temperature(10, TemperatureScale.Celsius)
const temp2 = new Temperature(20, TemperatureScale.Fahrenheit)

temp1.Add(temp2)

module.exports = {
    Temperature,
    TemperatureScale
}