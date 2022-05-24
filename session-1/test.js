
const temp1 = new Temperature(5, TemperatureScale.Celsius)
const temp2 = new Temperature(6, TemperatureScale.Kelvin)

test('Add two temperatures', () => {
    expect(temp1.Add(temp2)).toBe({number: -272.15, scale: TemperatureScale.Celsius})
})

test('Substract two temperatures', () => {
    expect(temp2.Susbtract(temp1)).toBe({number: 284.15, scale: TemperatureScale.Kelvin})
})

test('Multiply two temperatures', () => {
    expect(temp1.MultiplyBy(temp2)).toBe({number: -1335.75, scale: TemperatureScale.Celsius})
})

test('Divide two temperatures', () => {
    expect(temp1.DivideBy(temp2)).toBe({number: -0.02, scale: TemperatureScale.Celsius})
})

test('Convert to Fahrenheit', () => {
    expect(temp1.toFahrenheit()).toBe({number: 41, scale: TemperatureScale.Fahrenheit})
})

test('Convert to Celsius', () => {
    expect(temp2.toCelsius()).toBe({number: -267.15, scale: TemperatureScale.Celsius})
})

test('Convert to Kelvin', () => {
    expect(temp1.toKelvin()).toBe({number: 278.15, scale: TemperatureScale.Kelvin})
})

test('Convert to String', () => {
    expect(temp1.toString()).toBe('5C')
})