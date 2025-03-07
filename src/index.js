const backpackFullOfAmmo = []

const cell = { items: 'energy cell', quantity: 20, priceEa: 0.2}
const clip = { items: 'ammo clip', quantity: 5, priceEa: 0.5}
const rocket = { items: 'box of rocket', quantity: 5, priceEa: 25.0}
const shells = { items: 'box of shells', quantity: 8, priceEa: 1.0}

const calcOrderCost = (order) =>  order.quantity * order.priceEa 
