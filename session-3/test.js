const {Temperature, TemperatureScale} = require('./index')

const temp = new Temperature(7, TemperatureScale.Celsius)
const temp2 = new Temperature(40, TemperatureScale.Fahrenheit)

test('Add two temperatures', ()=>{
    expect(temp.Add(temp2)).toStrictEqual(new Temperature(11.4, TemperatureScale.Celsius))
})

test('Substract two temperatures', ()=>{
    expect(temp.Substract(temp2)).toStrictEqual(new Temperature(2.6, TemperatureScale.Celsius))
})

test('Multiply two temperatures', ()=>{
    expect(temp.MultiplyBy(temp2)).toStrictEqual(new Temperature(30.8, TemperatureScale.Celsius))
})

test('Divide two temperatures', ()=>{
    expect(temp.DivideBy(temp2)).toStrictEqual(new Temperature(1.6, TemperatureScale.Celsius))
})

test('Convert to Kelvin', ()=>{
    expect(temp.ToKelvin()).toStrictEqual(new Temperature(280.2, TemperatureScale.Kelvin))
})

test('Convert to Fahrenheit', ()=>{
    expect(temp.ToFahrenheit()).toStrictEqual(new Temperature(44.6, TemperatureScale.Fahrenheit))
})

test('Convert to Celsius', ()=>{
    expect(temp2.ToCelsius()).toStrictEqual(new Temperature(4.4, TemperatureScale.Celsius))
})

test('Temperature to string', ()=>{
    expect(temp.ToString()).toStrictEqual('7 C')
})