import { Category } from "../category"

test("Dever criar uma nova categoria", ()=> {
    const expectName = "Top 10"
    const expectDescription = "Os melhores de 2023"
    const category = Category.create({name: "Top 10", description: "Os melhores de 2023", isActive:false})
    expect(expectName).toBe(category.name)
    expect(expectDescription).toBe(category.description)
    expect(category.isActive).toBeTruthy()
})

test("Dever criar uma nova categoria e desativar a categoria", ()=> {
    const expectName = "Top 10"
    const expectDescription = "Os melhores de 2023"
    const category = Category.create({name: "Top 10", description: "Os melhores de 2023", isActive:true})
    category.deActivete()
    expect(category.isActive).toBeFalsy()
})

test("Dever criar uma nova categoria e ativar a categoria", ()=> {
    const expectName = "Top 10"
    const expectDescription = "Os melhores de 2023"
    const category = Category.create({name: "Top 10", description: "Os melhores de 2023", isActive:true})
    category.activete()
    expect(category.isActive).toBeTruthy()
})