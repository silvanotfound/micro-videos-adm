import { Entity } from "../entity";
import { Repository } from "../repository";
import { Uuid } from "../value-objects/uuid.vo";

export abstract class MemoryRepository<E extends Entity, entityId extends Uuid> implements Repository<E, entityId> {
    items: E[] = []
    
    async insert(entity: E): Promise<void> {
        this.items.push(entity)
    }

    async update(entity: E): Promise<void> {
        const index = this.items.indexOf(entity, 0)
        this.items.splice(index, 1, entity)
    }

    async delete(entity: E): Promise<void> {
        const index = this.items.indexOf(entity, 0)
        this.items.splice(index, 1)
    }

    async findById(id: entityId): Promise<E| undefined> {
        return this.items.find((element)=> element.getUuid() === id)
    }

    async findAll(): Promise<E[]> {
        return this.items
    }
}