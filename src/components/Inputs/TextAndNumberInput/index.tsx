import { ChangeEvent, useState } from 'react'
import * as S from "../styles"

interface InputProps {
  data?: {
    id: number
    name: string
  }[]
  type: string
  id: string
  name: string
  textInputMaxLength?: number
  numberInputMaxValue?: number
  titleMessage: string
  tiny?: boolean
  topDistance: string
  specificStringFunction?: (value: string) => void
  specificNumberFunction?: (value: number) => void
  specificStringValue?: string
  specifictNumberValue?: number
}

export function Input({
  data,
  type,
  id,
  name,
  textInputMaxLength,
  numberInputMaxValue,
  titleMessage,
  tiny = false,
  topDistance,
  specificStringFunction,
  specificStringValue,
  specificNumberFunction,
  specifictNumberValue
}: InputProps) {
  const [genericInputValue, setGenericInputValue] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const result = event.target.value.replace(/\D/g, '')
    setGenericInputValue(result)
    specificNumberFunction && specificNumberFunction(Number(result))
  }

  return (
    <S.InputContainer tiny={tiny} topDistance={topDistance}>
      <S.LabelInput
        max={numberInputMaxValue}
        value={specifictNumberValue}
        tiny={tiny}
        type={type}
        htmlFor={id}
        className="font-semibold"
      >
        {name}
      </S.LabelInput>

      <S.TextAndNumberInput
        min={1}
        max={numberInputMaxValue}
        maxLength={textInputMaxLength}
        tiny={tiny}
        type={type}
        id={id}
        value={String(specifictNumberValue)}
        placeholder="Informe"
        onChange={handleChange}
        required
        title={titleMessage}
      />
    </S.InputContainer>
  )
}
