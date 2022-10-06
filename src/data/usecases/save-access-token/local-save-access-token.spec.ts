import { SetStorageMock } from '@/data/test/mock-storage'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageSpy: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageSpy = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageSpy)

  return {
    sut,
    setStorageSpy
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call setStorage with correct value', async () => {
    const { setStorageSpy, sut } = makeSut()
    const accessToken = faker.random.uuid()

    await sut.save(accessToken)

    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })

  test('Should throw if SetStorage throws', async () => {
    const { setStorageSpy, sut } = makeSut()
    jest.spyOn(setStorageSpy, 'set').mockRejectedValueOnce(new Error())

    const promise = sut.save(faker.random.uuid())

    await expect(promise).rejects.toThrow(new Error())
  })
})
