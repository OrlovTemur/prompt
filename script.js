
// задача-1 //

// let name = "Alex"
// let money = 10000
// let account = 7777
// let a = prompt("Как вас зовут?")

// if(a == name) {
//     let askAcc = prompt("Номер счета?") 
//     if(askAcc == account){
//         let askNal = prompt("Сколько обналичить?")
//         if(askNal <= money) {
//             let total = alert(`Всё отлично, у вас осталось ${money - askNal}`)
//         } else alert("Не достаточно средств")
//     } else alert("Пользователь не найден")

// } else alert("Пользователь не найден")

// задача-2 //

let name = prompt('Введите своё имя')
if (name.charAt().toUpperCase() === "A"){
    let yearsOld = prompt('Укажите ваш возраст')
    if(yearsOld >= 20 && yearsOld <= 40) {
        let balance = prompt('Ваш баланс')
        if(balance >= 100) {
            let quantity = prompt('Количество людей')
            if(quantity <= 8) {
                let total = alert('Проходите')
            } else alert('вход запрещен')
        } else alert('вход запрещен')
    } else alert('вход запрещен')
} else alert('вход запрещен')
