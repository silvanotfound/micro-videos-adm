import { isEqual } from "lodash"

export abstract class ValueObject {
    public isEquals(vo: this) : boolean {
        if(vo === null || vo === undefined) {
            return false
        }
        return isEqual(vo, this)
    }
}