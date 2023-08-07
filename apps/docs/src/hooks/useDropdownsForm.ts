import {create} from 'zustand'
export interface PersonInfo {
  gender: string
  nationality: string
  skill: string
  drinks: string[]
  animal: string
  phoneCode: string
  phoneNumber: string
}
interface ICreatePersonInfoStore {
  personInfo: PersonInfo | {}
  personInfoErrorState: any

  setPersonInfoFieldValue<TField extends keyof PersonInfo = keyof PersonInfo>(
    field: TField,
    value: PersonInfo[TField],
  ): void
  setPersonInfoValue(value: PersonInfo): void

  setPersonInfoErrorState(field: string, message: string | undefined): void

  clearResponse(): void
}
const personInfoStore = () => {
  const storageName = 'create-person-info'
  return create<ICreatePersonInfoStore>()((set, get) => {
    return {
      personInfo: {},
      personInfoErrorState: {},
      setPersonInfoFieldValue(field, value) {
        const {personInfo} = get()
        set({
          personInfo: {
            ...personInfo,
            [field]: value,
          },
        })
      },
      setPersonInfoValue(value) {
        set({
          personInfo: value,
        })
      },
      setPersonInfoErrorState(field: string, message: string) {
        const {personInfoErrorState} = get()
        set({
          personInfoErrorState: {
            ...personInfoErrorState,
            [field]: message,
          },
        })
      },
      clearResponse: () =>
        set({
          personInfo: undefined,
        }),
    }
  })
}

export const useCreatePersonStore = personInfoStore()
