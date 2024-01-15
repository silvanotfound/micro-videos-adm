import { InvalidUuidError, Uuid } from "../uuid.vo"

test("Deve validar um UUID inválid", ()=> {
    expect(() => {
        new Uuid('kjahfkjahfkahkdhfkja')
    }).toThrow(new InvalidUuidError("Invalid uuid"))
})

test("Deve criar um uuid valido", ()=> {
    const expectUuid = new Uuid()
    expect(expectUuid).toBeDefined()
})