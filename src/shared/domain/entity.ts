import { Uuid } from "./value-objects/uuid.vo";

export abstract class Entity {
    abstract getUuid(): Uuid
}