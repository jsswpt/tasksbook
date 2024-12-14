import { Autocomplete, TextField } from '@mui/material'
import { useGate, useUnit } from 'effector-react'

import {
  $optionsList,
  $searchValue,
  gate,
  handleSearchValueChange,
  handleSubimt,
} from '../model'
import { Template } from './template'

export const Component = () => {
  const [optionsList, searchValue] = useUnit([$optionsList, $searchValue])

  useGate(gate)

  const formattedOptions = (optionsList ?? []).map(({ id }) => ({
    id,
    label: id,
  }))

  return (
    <Template>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubimt()
        }}
      >
        <Autocomplete
          options={formattedOptions}
          onChange={(_, value) => handleSearchValueChange(value?.label ?? '')}
          renderInput={(props) => (
            <TextField
              {...props}
              value={searchValue}
              onChange={(e) => handleSearchValueChange(e.target.value)}
              placeholder="Поиск по категориям"
              fullWidth
              size="small"
            />
          )}
        />
      </form>
    </Template>
  )
}
