function booksFilter (...Books){
    const uBooks = Books.filter(book => book.toLowerCase().includes('у'))
    const otherBooks = Books.filter(book => !book.toLowerCase().includes('y'))

    console.log('book u', uBooks)
    console.log('Книги без буквы У', otherBooks )
}
booksFilter('Война и мир','Гордость и предупреждение','Тёмное начало','Узорный покров','Внучка','Гранатовый браслет','Мастер маргарита','Чистый код','Уничтожить королество','Женская логика')

//Задача 3
const users = [
    {name: 'Ayana', age: 16},
    {name: 'Ermek', age: 22},
    {name: 'Abdulaziz', age: 7},
    {name: 'Aziz', age: 12},
    {name: 'Liya', age: 35},
    {name: 'Beko', age: 20},
    {name: 'Aidana', age: 97},
    {name: 'Atay', age: 47},

]
const youngUsers = users.reduce((young, users) =>(users.age < young.age ? users : young))
const oldUsers = users.reduce((old, users) =>(users.age > old.age ? users : old))
const between = oldUsers.age - youngUsers.age
console.log(`Пользователь ${oldUsers.name} старше ${youngUsers.name} на ${between} лет`)