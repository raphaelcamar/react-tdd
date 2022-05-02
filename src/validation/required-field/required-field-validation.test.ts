import { RequiredFieldError } from '../errors/required-field-error'
import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.internet.email())

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
