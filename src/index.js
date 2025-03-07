const backpackFullOfAmmo = [
    { name: 'bullets', quantity: 10, priceEa: 0.5 },
    { name: 'Shotgun Shells', quantity: 4, priceEa: 0.5 },
    { name: 'Rockets', quantity: 1, priceEa: 0.5 },
    { name: 'energy cell units', quantity: 20, priceEa: 0.2 },
]

const tableRows = backpackFullOfAmmo.map((ammo) => {
    return `<tr>
        <td>${ammo.name}</td>
        <td>${ammo.quantity}</td>
        <td>${ammo.priceEa}</td>
       </tr>`
})
.join('\n') 

console.log(tableRows)

const cell = { items: 'energy cell', quantity: 20, priceEa: 0.2}
const clip = { items: 'ammo clip', quantity: 5, priceEa: 0.5}
const rocket = { items: 'box of rocket', quantity: 5, priceEa: 25.0}
const shells = { items: 'box of shells', quantity: 8, priceEa: 1.0}

const calcOrderCost = (order) =>  order.quantity * order.priceEa 
 
const numbers = [1,2,3,4,5]

const doubleNumber = numbers.map((numbers) => numbers * 2)

console.log(doubleNumber)