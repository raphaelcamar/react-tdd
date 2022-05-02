import { RequiredFieldError } from '../errors/required-field-error'
import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
