// item = { id, name, price, category, quantity }

const createInventory = () => {
    const inventory = new Map();
     function add(id, item) {
        if (!inventory.has(id)) {
            inventory.set(id, item);
        } else {
            throw new Error('Item already exists');
        }
    }

    function addItem(id, name, price, category, quantity) {
        const item = { name, price, category, quantity };
        add(id, item);
     }

    function setQuantity(id, quantity) {
        if (inventory.has(id)) {
            const item = inventory.get(id);
            item.quantity = quantity;
            inventory.set(id, item);
        } else {
            throw new Error('Item not found');
        }
    }
    function addQuantity(id, quantity) {
        if (inventory.has(id)) {
            const item = inventory.get(id);
            item.quantity += quantity;
            inventory.set(id, item);
        } else {
            throw new Error('Item not found');
        }
    }

    function remove(id) {
        if (inventory.has(id)) {
            inventory.delete(id);
        } else {
            throw new Error('Item not found');
        }
    }

    function searchWithCategory(category) {
        return Array.from(inventory.values()).filter(item => item.category === category);
    }

    function get() { // -> array
        return [...inventory.values()].sort((a, b) => a.price - b.price);
    }
    return {
        addItem,
        setQuantity,
        addQuantity,
        remove,
        searchWithCategory,
        get
    }
}

// testing

const inventory = createInventory();
inventory.addItem(1, 'item1', 100, 'category1', 10);
inventory.addItem(2, 'item2', 200, 'category2', 20);
inventory.addItem(3, 'item3', 300, 'category1', 30);
inventory.addItem(4, 'item4', 400, 'category2', 40);
inventory.addItem(5, 'item5', 70, 'category3', 50);

inventory.setQuantity(1, 20);

inventory.remove(2);
console.log("Búsqueda por categoria: Categoría 1");
console.log(inventory.searchWithCategory('category1'));
console.log("Búsqueda total ordenada por precio");
console.log(inventory.get());

console.log("Añadir 1000 unidades al item 1");
inventory.addQuantity(1, 1000);
console.log(inventory.get());
