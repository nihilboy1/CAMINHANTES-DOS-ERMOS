import { Tooltip } from '@chakra-ui/react'
import { OptionsProps } from '../../../data/data'

import * as S from './styles'
interface SelectInputProps {
  data: OptionsProps[]
  id: string
  name: string
  titleMessage: string
  topDistance: string
  specificFunction: (value: any) => void
}

export function SelectInput({
  data,
  id,
  name,
  titleMessage,
  topDistance,
  specificFunction
}: SelectInputProps) {
  return (
    <S.InputContainer topDistance={topDistance}>
      <S.LabelInput htmlFor={id}>{name}</S.LabelInput>

      <Tooltip
        label={titleMessage}
        placement="right"
        bg="white"
        p={8}
        maxW={700}
        ml={10}
        borderRadius={8}
        fontStyle="italic"
      >
        <S.SelectInput
          name={id}
          id={id}
          onChange={e => specificFunction(JSON.parse(e.target.value))}
        >
          {data.map(option => {
            return (
              <option key={option.name} value={JSON.stringify(option)}>
                {option.name}
              </option>
            )
          })}
        </S.SelectInput>
      </Tooltip>
    </S.InputContainer>
  )
}
