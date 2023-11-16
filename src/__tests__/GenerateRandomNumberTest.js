import GenerateRandomIndex from '../components/scripts/GenerateRandomIndex'

describe('GenerateRandomIndex', () => {
  it('should generate an index within the expected range', () => {
    const marketsArray = [1, 2, 3, 4, 5]
    const generatedIndex = GenerateRandomIndex(marketsArray)
    expect(generatedIndex).toBeGreaterThanOrEqual(0)
    expect(generatedIndex).toBeLessThan(marketsArray.length)
  })

  it('should allow accessing array elements using the generated index', () => {
    const marketsArray = ['apple', 'banana', 'orange', 'grape']
    const generatedIndex = GenerateRandomIndex(marketsArray)
    const fruit = marketsArray[generatedIndex]
    expect(marketsArray).toContain(fruit)
  })
})
