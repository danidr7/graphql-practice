const { userList, profileList } = require('../data/db')

const query = {
    hello() {
        return 'Hello world!'
    },
    timeNow(){
        return new Date()
    },
    loggedUser(){
        return {
            id: 1,
            name: 'Jhon Doe',
            email: 'jhondoe@fake.com',
            age: 30,
            real_salary: 1000.03,
            vip: true
        }
    },
    featuredProduct(){
        return {
            name: 'Watcher',
            price: 200.00,
            discountPercentage: 10
        }
    },
    numbers(){
        return [1,2,3,4,5]
    },
    users(){
        return userList
    },
    user(_, { id }){
        const result = userList.filter(u => {
            return u.id == id 
        })
        return result[0]
    },
    profiles(){
        return profileList
    },
    profile(_, { id }){
        const result = profileList.filter(p => {
            return p.id === id
        })
        return result[0]
    }
}

module.exports = { ...query }