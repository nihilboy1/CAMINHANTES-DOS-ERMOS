import { Tooltip, useMediaQuery } from '@chakra-ui/react'
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
  const [isSmallerThan1080] = useMediaQuery('(max-width: 1080px)')

  return (
    <Tooltip
      label={titleMessage}
      placement={isSmallerThan1080 ? 'top' : 'right'}
      bg="white"
      p={6}
      maxW={isSmallerThan1080 ? 350 : 700}
      ml={10}
      borderRadius={8}
      fontStyle="italic"
    >
      <S.InputContainer topDistance={topDistance}>
        <S.LabelInput htmlFor={id}>{name}</S.LabelInput>

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
      </S.InputContainer>
    </Tooltip>
  )
}
