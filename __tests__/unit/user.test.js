const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('Should encrypt user password', async () => {
        const user = await User.create({
            name: 'Luan',
            email: 'luanyata@gmail.com',
            password: '123456'
        })

        expect(await bcrypt.compare('123456', user.password_hash)).toBe(true)
    })
})