const { profileList } = require('../data/db')

const user = {
	salary(user) {
	    return user.real_salary
	},
	profile(user) {
	    const result = profileList.filter(p => {
	        return p.id == user.profile_id
	    })
	    return result[0]
	}
}

module.exports = { ...user }