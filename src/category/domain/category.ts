import { Entity } from "../../shared/domain/entity"
import { Uuid } from "../../shared/domain/value-objects/uuid.vo"

export type CategoryCreateProps = {
    name: string,
    description?: string,
    isActive?: boolean
}

export type CategoryConstructorProps = {
    id?: Uuid,
    name: string,
    description?: string,
    isActive?: boolean,
    createAt?: Date
}

export class Category extends Entity{

    id: Uuid
    name: string
    description: string
    isActive: boolean
    createAt: Date

    constructor(prop: CategoryConstructorProps){
        super()
        this.id = prop.id || new Uuid()
        this.name = prop.name
        this.description = prop.description || ""
        this.isActive = prop.isActive || true
        this.createAt = prop.createAt ||  new Date()
    }

    getUuid(): Uuid {
        return this.id
    }

    static create(prop: CategoryCreateProps): Category{
            return new Category(prop)
    }

    activete() {
        this.isActive = true
    }

    deActivete() {
        this.isActive = false
    }
}