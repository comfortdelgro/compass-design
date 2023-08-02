import Inspect from '@comfortdelgro/compass-icons/react/inspect'
import {
  Button,
  Dropdown,
  MultipleDropdown,
  TextField,
} from '@comfortdelgro/react-compass'
import {yupResolver} from '@hookform/resolvers/yup'
import {PersonInfo, useCreatePersonStore} from 'hooks/useDropdownsForm'
import {Fragment, useEffect, useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import * as yup from 'yup'
export const DropdownsForm: React.FC = () => {
  const inputsScheme = yup.object().shape({
    gender: yup.string().required(),
    nationality: yup.string().required(),
    skill: yup.string().required(),
    drinks: yup.array(yup.string().required()).min(1).required(),
    animal: yup.string().required(),
    phoneCode: yup.string().required(),
    phoneNumber: yup.string().required(),
  })

  const {personInfo, setPersonInfoFieldValue, setPersonInfoValue} =
    useCreatePersonStore()

  const {control, handleSubmit, formState, setValue} = useForm<PersonInfo>({
    resolver: yupResolver(inputsScheme),
    defaultValues: {...personInfo},
    reValidateMode: 'onChange',
  })

  const handleValid = (data: PersonInfo) => {
    console.log(data)

    setPersonInfoValue(data)
  }
  const [drinksList, setDrinksList] = useState([])
  const [currentDrinksList, setCurrentDrinksList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail&i=gin',
      )
      const json = await response.json()
      return json
    }
    fetchData().then((res) => {
      setDrinksList(res.drinks)
      setCurrentDrinksList(res.drinks.slice(0, 10))
    })
  }, [])

  const handleLoadMore = () => {
    // const newItems = drinksList.slice(
    //   currentDrinksList.length - 1,
    //   currentDrinksList.length + 9,
    // )
    // if (newItems.length) {
    //   setCurrentDrinksList((prev) => [...prev, ...newItems])
    // }
  }
  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleValid)}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
    >
      <Controller
        control={control}
        name='gender'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <Dropdown.Select
                label='Gender'
                placeholder='Select'
                value={field.value}
                isRequired
                onValueChange={(key) => {
                  setPersonInfoFieldValue('gender', String(key))
                  setValue('gender', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
                description={'Gender'}
              >
                <Dropdown.Item value='male'>Male</Dropdown.Item>
                <Dropdown.Item value='female'>Female</Dropdown.Item>
              </Dropdown.Select>
            </Fragment>
          )
        }}
      />
      {/* <Controller
        control={control}
        name='nationality'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <Dropdown.Flag
                isRequired
                label='List of country'
                placeholder='Choose a country'
                selectedKey={field.value}
                onSelectionChange={(key) => {
                  setPersonInfoFieldValue('nationality', String(key))
                  setValue('nationality', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
              />
            </Fragment>
          )
        }}
      /> */}

      {/* <Controller
        control={control}
        name='phoneCode'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <Dropdown.Flag
                isRequired
                flagKeyType={'country-code'}
                label='List of phone code'
                placeholder='Choose a country'
                selectedKey={field.value}
                onCountryChange={(key) => {
                  setPersonInfoFieldValue('phoneCode', String(key))
                  setValue('phoneCode', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
              />
            </Fragment>
          )
        }}
      /> */}
      <Controller
        control={control}
        name='phoneNumber'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <TextField
                isRequired
                label='Phone Number'
                placeholder='Enter your phone'
                isErrored={Boolean(fieldState.error)}
                value={field.value}
                onChange={(value) => {
                  setPersonInfoFieldValue('phoneNumber', String(value))
                  setValue('phoneNumber', String(value), {shouldValidate: true})
                }}
              />
            </Fragment>
          )
        }}
      />

      <Controller
        control={control}
        name='skill'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <Dropdown.ComboBox
                label={'Skills'}
                placeholder='Select'
                value={field.value}
                isRequired
                onValueChange={(key) => {
                  setPersonInfoFieldValue('skill', String(key))
                  setValue('skill', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
                icon={<Inspect />}
              >
                <Dropdown.Item value='html'>HTML</Dropdown.Item>
                <Dropdown.Item value='css'>CSS</Dropdown.Item>
                <Dropdown.Item value='Javascript'>Javascript</Dropdown.Item>
                <Dropdown.Item value='SQL'>SQL</Dropdown.Item>
                <Dropdown.Item value='NoSQL'>NoSQL</Dropdown.Item>
                <Dropdown.Item value='Azure'>Azure</Dropdown.Item>
                <Dropdown.Item value='AWS'>AWS</Dropdown.Item>
              </Dropdown.ComboBox>
            </Fragment>
          )
        }}
      />
      <Controller
        control={control}
        name='drinks'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <MultipleDropdown
                label={'Drinks'}
                placeholder='Select'
                values={field.value}
                onValuesChange={(keys) => {
                  const keysValue = [...keys].map((item) => String(item))
                  setPersonInfoFieldValue('drinks', keysValue)
                  setValue('drinks', keysValue, {shouldValidate: true})
                }}
                isRequired
                isErrored={Boolean(fieldState.error)}
                onLoadMore={handleLoadMore}
              >
                {currentDrinksList.map((item: any) => {
                  return (
                    <MultipleDropdown.Item
                      key={String(item.strDrink)}
                      value={String(item.strDrink)}
                    >
                      {item.strDrink}
                    </MultipleDropdown.Item>
                  )
                })}
              </MultipleDropdown>
            </Fragment>
          )
        }}
      />
      <Controller
        control={control}
        name='animal'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <Dropdown.ComboBox
                label='Favorite Animal'
                placeholder='Choose an animal'
                value={field.value}
                onValueChange={(key) => {
                  setPersonInfoFieldValue('animal', String(key))
                  setValue('animal', String(key), {shouldValidate: true})
                }}
                isRequired
                isErrored={Boolean(fieldState.error)}
              >
                <Dropdown.Section title='Birds'>
                  <Dropdown.Item value='red panda'>Eagle</Dropdown.Item>
                  <Dropdown.Item value='cat'>Pigeon</Dropdown.Item>
                  <Dropdown.Item value='dog'>Parrot</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title='Mammal'>
                  <Dropdown.Item value='aardvark'>Bear</Dropdown.Item>
                  <Dropdown.Item value='kangaroo'>Lion</Dropdown.Item>
                  <Dropdown.Item value='snake'>Whale</Dropdown.Item>
                </Dropdown.Section>
              </Dropdown.ComboBox>
            </Fragment>
          )
        }}
      />

      <Button
        variant='secondary'
        type='submit'
        disabled={formState.isSubmitting}
        css={{marginTop: '2em', width: 200, margin: 'auto'}}
      >
        Submit
      </Button>
    </form>
  )
}
