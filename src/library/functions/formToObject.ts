/*
//Examples
formToObject(document.querySelector('#form'));
// { email: 'test@email.com', name: 'Test Name' }
 */
export const formToObject = (form: any) =>
    Array.from(new FormData(form)).reduce(
        (acc, [key, value]) => ({
            ...acc,
            [key]: value
        }),
        {}
    );