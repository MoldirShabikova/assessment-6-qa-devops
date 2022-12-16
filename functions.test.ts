const {shuffleArray} = require('./utils')

const test1 =[1,2,3,4,5,6]
const test2 = ['js', 'react', 'ruby']
const test3 = []

describe('shuffleArray should', () => {
    test('return an array', ()=>{
        let result = shuffleArray(test1)
        expect(Array.isArray(result)).toBe(true)
        let result2 = shuffleArray(test2)
        expect(Array.isArray(result2)).toBe(true)
        let result3 = shuffleArray(test2)
        expect(Array.isArray(result3)).toBe(true)
        
    })
    test('return an array of the same length as the input', ()=>{
        expect(shuffleArray(test1)).toHaveLength((test1).length)
        expect(shuffleArray(test2)).toHaveLength((test2).length)
        expect(shuffleArray(test3)).toHaveLength((test3).length)
    })
})