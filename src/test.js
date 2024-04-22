const request = require('supertest');
const users = require('../models/users'); // adjust the path to your users model
const jwt = require('jsonwebtoken');

jest.mock('../models/users');

describe('Test the userVerify function', () => {
    it('should return a user without the password field', async () => {
        const mockUser = {_id: '123', username: 'testuser', password: 'testpass'};
        const mockToken = jwt.sign({ id: mockUser._id }, 'your_secret_key'); // replace 'your_secret_key' with your actual secret key

        users.findById.mockResolvedValue(mockUser);

        const userVerify = await users.findById(mockToken.id,{password:0});

        expect(userVerify).toEqual({_id: '123', username: 'testuser'});
        expect(userVerify.password).toBeUndefined();
    });
});