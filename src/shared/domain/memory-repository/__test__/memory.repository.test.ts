import { extend } from "lodash";
import { MemoryRepository } from "../memory.reposotory";
import { Entity } from "../../entity";
import { Uuid } from "../../value-objects/uuid.vo";

class StubEntity extends Entity {
    entityId?: Uuid
    name?: string
    isActive?: boolean

    constructor(name: string, isActive: boolean){
        super()
        this.entityId || new Uuid()
        this.name = name
        this.isActive = isActive
    }

    getUuid(): Uuid {
        return this.entityId || new Uuid()
    }
}

class StubMemoryRepository extends MemoryRepository<StubEntity, Uuid> {
    constructor(){
        super()
    }
}

describe("Deve testar repositorio em memoria", ()=> {
    let repo: StubMemoryRepository
    
    beforeEach(() => {
        repo = new StubMemoryRepository()
    })

    test("Deve validar um insersão de um item", async ()=> {
        const entity = new StubEntity("teste1", true)
        await repo.insert(entity)
        expect(repo.items.length).toBe(1)
    })    
})
