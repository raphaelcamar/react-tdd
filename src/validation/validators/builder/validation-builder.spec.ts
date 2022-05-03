import { EmailValidation } from '@/validation/validators/email/email-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field/required-field-validation'
import { MinLengthValidation } from '../min-lengh/min-length'
import { ValidationBuilder } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validations = ValidationBuilder.field('any_field').required().build()

    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const validations = ValidationBuilder.field('any_field').email().build()

    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Should return MinLengthValidation', () => {
    const validations = ValidationBuilder.field('any_field').min(5).build()

    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
