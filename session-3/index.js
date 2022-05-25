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

    }

    ToFahrenheit(){

    }

    ToCelsius(){

    }

    Add(Temperature){

    }

    Substract(Temperature){
        
    }

    MultiplyBy(Temperature){
        
    }

    DivideBy(Temperature){
        
    }

    ToString(){
        return `${this.number} ${this.scale}`
    }
}