// @ts-check
const { test, expect } = require('@playwright/test');

test('Get users', async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.page).toBe(2);
    expect(responseBody.data[0].id).toBe(7);
    expect(responseBody.data[0].email).toBeTruthy();
    expect(responseBody.data[0].first_name).toEqual('Michael');
    expect(responseBody.data[0].last_name).toBe('Lawson');
});

test('Create user', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
    {
        data:{
            'name': 'Enrique',
            'job': 'QA Automation Engineer'
        },
        headers:{
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(201);
    expect(responseBody.name).toBe('Enrique');
    expect(responseBody.job).toBe('QA Automation Engineer');
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.createdAt).toBeTruthy();
});

test('Update user', async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/2',
    {
        data: {
            'name': 'Enrique',
            'job': 'Engineer'
        },
        headers:{
            'Accept': 'application/json'
        }
    });
    console.log(await response.json());
    const responseBody = JSON.parse(await response.text());
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe('Enrique');
    expect(responseBody.job).toBe('Engineer');
    expect(responseBody.updatedAt).toBeTruthy();
});

test('Delete user', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/3');
    console.log(await response);
    expect(response.status()).toBe(204);
});