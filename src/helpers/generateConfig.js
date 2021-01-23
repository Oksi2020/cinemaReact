import uniqid from 'uniqid';

export const generateConfig = ( count ) => {
    const arr = Array.from({length:count}, (item, index) => {
    let type, seatsCount;
    let number = index+1;
    let rowID = uniqid();
    let price = 75;
    if(index <2) {
        type = 'econom';
        price -= 15;
        seatsCount = 18
    } else if(index+1 === count) {
        type = 'premium';
        price += 25;
        seatsCount = 22;
    } else {
        type = 'classic';
        seatsCount = 20;
    }
    
    return({
        id: rowID,
        number: number,
        type: type,
        seats: Array.from({length: seatsCount}, ( item, index )=>{
            return({
            id: uniqid(),
            price: price,
            number: index+1,
            row: number,
            rowID: rowID,
            active: false,
            bought: false}) 
        })})
    });
    return arr;
}