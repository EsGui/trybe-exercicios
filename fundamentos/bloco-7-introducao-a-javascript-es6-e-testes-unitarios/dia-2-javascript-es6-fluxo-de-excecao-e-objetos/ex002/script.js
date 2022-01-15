/* 
1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

    Note que o parâmetro da função já está sendo passado na chamada da função.

2 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
    
    Modifique o nome da pessoa compradora.
    Modifique o valor total da compra para R$ 50,00.

*/

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    andress: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25, 
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entraga para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.andress.street} Nº: ${order.andress.number}, AP: ${order.andress.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
    order.order.delivery.deliveryPerson = "Luiz Silva",
    order.payment = "50",
    console.log(`Olá ${order.order.delivery.deliveryPerson} o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${order.payment},00`)
}

orderModifier(order);