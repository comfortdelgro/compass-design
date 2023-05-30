import Inspect from '@comfortdelgro/compass-icons/react/inspect'
import {Button, Dropdown, MultipleDropdown} from '@comfortdelgro/react-compass'
import {yupResolver} from '@hookform/resolvers/yup'
import {Fragment} from 'react'
import {Controller, useForm} from 'react-hook-form'
import * as yup from 'yup'
interface Inputs {
  gender: string
  nationality: string
  skill: string
  hobbies: string[]
}
export const DropdownsForm: React.FC = () => {
  const inputsScheme = yup.object().shape({
    gender: yup.string().defined().required(),
    nationality: yup.string().required(),
    skill: yup.string().required(),
    hobbies: yup.array(yup.string().required()).min(1).required(),
  })

  const {control, handleSubmit, formState, setValue} = useForm<Inputs>({
    resolver: yupResolver(inputsScheme),
    defaultValues: {},
    reValidateMode: 'onChange',
  })

  const handleValid = (data: Inputs) => {
    console.log(data)
  }

  return (
    <form
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
                selectedKey={field.value}
                isRequired
                onSelectionChange={(key) => {
                  //   setIndividualInfoFieldValue('fullNameTitle', key)
                  setValue('gender', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
              >
                <Dropdown.Item key='male'>Male</Dropdown.Item>
                <Dropdown.Item key='female'>Female</Dropdown.Item>
              </Dropdown.Select>
            </Fragment>
          )
        }}
      />
      <Controller
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
                onCountryChange={(key) =>
                  setValue('nationality', String(key), {shouldValidate: true})
                }
                isErrored={Boolean(fieldState.error)}
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
                selectedKey={field.value}
                isRequired
                onSelectionChange={(key) => {
                  //   setIndividualInfoFieldValue('fullNameTitle', key)
                  setValue('skill', String(key), {shouldValidate: true})
                }}
                isErrored={Boolean(fieldState.error)}
                icon={<Inspect />}
              >
                <Dropdown.Item key='html'>HTML</Dropdown.Item>
                <Dropdown.Item key='css'>CSS</Dropdown.Item>
                <Dropdown.Item key='Javascript'>Javascript</Dropdown.Item>
                <Dropdown.Item key='SQL'>SQL</Dropdown.Item>
                <Dropdown.Item key='NoSQL'>NoSQL</Dropdown.Item>
                <Dropdown.Item key='Azure'>Azure</Dropdown.Item>
                <Dropdown.Item key='AWS'>AWS</Dropdown.Item>
              </Dropdown.ComboBox>
            </Fragment>
          )
        }}
      />
      <Controller
        control={control}
        name='hobbies'
        render={({field, fieldState}) => {
          return (
            <Fragment>
              <MultipleDropdown
                label={'Hobbies'}
                // selectionMode='multiple'
                placeholder='Select'
                selectedKeys={field.value}
                onSelectionChange={(keys) => {
                  setValue(
                    'hobbies',
                    [...keys].map((item) => String(item)),
                    {shouldValidate: true},
                  )
                }}
                isRequired
                isErrored={Boolean(fieldState.error)}
              >
                <MultipleDropdown.Item key='dancing'>
                  Dancing
                </MultipleDropdown.Item>
                <MultipleDropdown.Item key='coffee'>
                  Coffee
                </MultipleDropdown.Item>
                <MultipleDropdown.Item key='badminton'>
                  Badminton
                </MultipleDropdown.Item>
                <MultipleDropdown.Item key='movies'>
                  Movies
                </MultipleDropdown.Item>
                <MultipleDropdown.Item key='fooball'>
                  Fooball
                </MultipleDropdown.Item>
              </MultipleDropdown>
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
