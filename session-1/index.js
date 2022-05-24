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

    Add(Temperature){

        let converted

        switch (this.scale) {
            case TemperatureScale.Celsius:
                converted = Temperature.ToCelsius;
                break;
            case TemperatureScale.Kelvin:
                converted = Temperature.ToKelvin;
                break;
            case TemperatureScale.Fahrenheit:
                converted = Temperature.ToFahrenheit;
                break;
            default:
                break;
        }

        return this.number + converted.number
    }

    Substract(Temperature){

    }

    MultiplyBy(Temperature){

    }

    DivideBy(Temperature){

    }

    ToFahrenheit(){
        if (this.scale = TemperatureScale.Celsius) {
            const fahrenheit = ((this.number * (9/5)) + 32)
            const temp = new Temperature(fahrenheit, TemperatureScale.Fahrenheit)

            return temp
        } else if(this.scale = TemperatureScale.Kelvin){
            const fahrenheit = (this.number - 273.15) * 9/5 + 32
            const temp = new Temperature(fahrenheit, TemperatureScale.Fahrenheit)

            return temp
        } else {
            return new Temperature(this.number, this.scale)
        }
    }

    ToCelsius(){
        if (this.scale = TemperatureScale.Fahrenheit) {
            const celsius = (this.number  - 32) * 5/9
            const temp = new Temperature(celsius, TemperatureScale.Celsius)

            return temp
        } else if(this.scale = TemperatureScale.Kelvin){
            const celsius = this.number - 273.15
            const temp = new Temperature(celsius, TemperatureScale.Celsius)

            return temp
        } else {
            return new Temperature(this.number, this.scale)
        }
    }

    ToKelvin(){
        if (this.scale = TemperatureScale.Celsius) {
            const kelvin = this.number + 273.15
            const temp = new Temperature(kelvin, TemperatureScale.Kelvin)

            return temp
        } else if(this.scale = TemperatureScale.Fahrenheit){
            const kelvin = (this.number - 32) * 5/9 + 273.15
            const temp = new Temperature(kelvin, TemperatureScale.Kelvin)

            return temp
        } else {
            return new Temperature(this.number, this.scale)
        }
    }

    ToString(){

    }

}

exports.modules = Temperature, TemperatureScale