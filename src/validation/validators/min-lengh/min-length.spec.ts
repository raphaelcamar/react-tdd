import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length'

describe('MinLengthValidation', () => {
  test('Should return error i value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)

    const error = sut.validate('123')

    expect(error).toEqual(new InvalidFieldError())
  })
})
