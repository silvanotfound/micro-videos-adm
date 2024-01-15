import { ValueObject } from "../value-object";

class ValueObjectImplementation extends ValueObject {
    constructor(readonly valeu: string){
        super()
    }
}

class ValueObjectImplementationComplex extends ValueObject {
    constructor(readonly valeu1: string, readonly value2: number, readonly valeu3: boolean){
        super()
    }
}

test("deve criar dois objeto de valor igual", ()=> {
    const valueObject1 = new ValueObjectImplementation("teste")
    const valueObject2 = new ValueObjectImplementation("teste")
    expect(valueObject1.isEquals(valueObject2)).toBe(true)

    const valueObjectComplex1 = new ValueObjectImplementationComplex("teste 1", 12, true)
    const valueObjectComplex2 = new ValueObjectImplementationComplex("teste 1", 12, true)
    expect(valueObjectComplex1.isEquals(valueObjectComplex2)).toBe(true)    
})

test("deve criar dois objeto de valor diferentes", ()=> {
    const valueObject1 = new ValueObjectImplementation("teste")
    const valueObject2 = new ValueObjectImplementation("teste2")
    expect(valueObject1.isEquals(valueObject2)).toBe(false)

    const valueObjectComplex1 = new ValueObjectImplementationComplex("teste 1", 12, true)
    const valueObjectComplex2 = new ValueObjectImplementationComplex("teste 1", 12, false)
    expect(valueObjectComplex1.isEquals(valueObjectComplex2)).toBe(false)        
})