const inquirer = require("inquirer");
const Questions = require('../lib/questions.js')

jest.mock('inquirer');

describe('Questions', () => {
    describe('Getting square', () => {
         it('Should return circle for shapeText', async () => {
             const questions = new Questions();
             expect.assertions(2);
             let logoText = 'abc';
             let textColor = 'white';
             let shape = 'square';
             let shapeColor = 'blue';
             inquirer.prompt = jest.fn().mockResolvedValue({
                 logoText: logoText,
                 textColor: textColor,
                 shape: shape,
                 shapeColor: shapeColor,
             });
             await 
             expect(questions.inquirerQuestions()).resolves.toEqual({
                 logoText: logoText,
                 textColor: textColor,
                 shape: shape,
                 shapeColor: shapeColor,
             });
             expect(shape).toBe('square');
         });
     });
 });
 