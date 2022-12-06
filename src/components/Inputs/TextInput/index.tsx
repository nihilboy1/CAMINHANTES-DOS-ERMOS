import { Tooltip, useMediaQuery } from '@chakra-ui/react'
import * as S from './styles'

interface InputProps {
  id: string
  name: string
  titleMessage: string
  topDistance: string
  specificFunction: (value: number) => void
  specificValue: number
  limitValue: number
}

export function TextInput({
  id,
  name,
  titleMessage,
  topDistance,
  specificFunction,
  specificValue,
  limitValue
}: InputProps) {
  const [isSmallerThan1080] = useMediaQuery('(max-width: 1080px)')

  return (
    <Tooltip
      label={titleMessage}
      placement={isSmallerThan1080 ? 'top' : 'right'}
      bg="white"
      p={8}
      maxW={700}
      ml={10}
      borderRadius={8}
      fontStyle="italic"
    >
      <S.InputContainer topDistance={topDistance}>
        <S.LabelInput
          htmlFor={id}
          value={specificValue}
          limitValue={limitValue}
        >
          {name}
        </S.LabelInput>

        <S.TextInputComponent
          min={1}
          maxLength={5}
          id={id}
          value={specificValue}
          limitValue={limitValue}
          placeholder="Informe"
          onChange={e => specificFunction(Number(e.target.value))}
          onKeyPress={e => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault()
            }
          }}
          required
        />
      </S.InputContainer>
    </Tooltip>
  )
}
