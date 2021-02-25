const userList = [
    {
        id: 1,
        name: 'Jhon Doe',
        email: 'jhondoe@fake.com',
        age: 30,
        real_salary: 1000.03,
        vip: true,
        profile_id: 1,
        status: 'ACTIVE'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@fake.com',
        age: 28,
        real_salary: 2400.10,
        vip: true,
        profile_id: 1,
        status: 'INACTIVE'
    },
    {
        id: 3,
        name: 'Maria',
        email: 'maria@fake.com',
        age: 36,
        real_salary: 8020.11,
        vip: false,
        profile_id: 2,
        status: 'BLOCKED'
    }
]

const profileList = [
    {
        id: 1,
        name: 'common'
    },
    {
        id: 2,
        name: 'admin'
    }
]

module.exports = { userList, profileList }