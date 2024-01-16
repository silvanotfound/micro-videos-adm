import { Entity } from "./entity"
import { ValueObject } from "./value-object"

export interface Repository<E extends Entity, entityId extends ValueObject> {
    insert(entity: E): Promise<void>
    update(entity: E): Promise<void>
    delete(entity: E): Promise<void>
    findById(id: entityId): Promise<E | undefined>
    findAll(): Promise<E[]>
}