const {Temperature, TemperatureScale} = require('./index')

const temp1 = new Temperature(10, TemperatureScale.Celsius)
const temp2 = new Temperature(20, TemperatureScale.Fahrenheit)

test('Add two temperatures', ()=>{
    expect(temp1.Add(temp2)).toStrictEqual(new Temperature(4.6, TemperatureScale.Celsius))
})

test('Substract two temperatures', ()=>{
    expect(temp1.Substract(temp2)).toStrictEqual(new Temperature(-16.6, TemperatureScale.Celsius))
})

test('Multiply two temperatures', ()=>{
    expect(temp1.MultiplyBy(temp2)).toStrictEqual(new Temperature(-66, TemperatureScale.Celsius))
})

test('Divide two temperatures', ()=>{
    expect(temp1.DivideBy(temp2)).toStrictEqual(new Temperature(-1.5, TemperatureScale.Celsius))
})

test('Convert temperature to Celsius', ()=>{
    expect(temp2.ToCelsius()).toStrictEqual(new Temperature(-6.6, TemperatureScale.Celsius))
})

test('Convert temperature to kelvin', ()=>{
    expect(temp1.Tokelvin()).toStrictEqual(new Temperature(283.15, TemperatureScale.Celsius))
})

test('Convert temperature to Fahrenheit', ()=>{
    expect(temp1.ToFahrenheit()).toStrictEqual(new Temperature(50, TemperatureScale.Celsius))
})

test('Convert temperature to string', ()=>{
    expect(temp1.ToString()).toStrictEqual('10C')
})