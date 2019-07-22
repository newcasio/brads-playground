const sum = require('./sum');
// import sum from './sum.js'

describe('example tests', ()=>{



    //use .toBe for exact equality
    test ('adds 1+2 to equal 3', ()=>{
        expect (sum(1,2)).toBe(3)
    })
    
    //use .toEqual to compare objects
    test('object assisgnemtn', ()=>{
        let obj = {one: 'A'};
        obj.two = 'B';
        expect (obj).toEqual({one:'A', two:'B'})
    })
    
    test('another object comparison', ()=>{
        let a = {name: 'Brad', age: 11};
        let b = {name:'Brad', age: 11};
        expect (b).toEqual(a)
    })
    
    test('array test comparison',()=>{
        let a = [1,2];
        let b = [1,2,3];
        a.push(3);
        expect (a).toEqual(b);
    })
    
    
    //callback

})
