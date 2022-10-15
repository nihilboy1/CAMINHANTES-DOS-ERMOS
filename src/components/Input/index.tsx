import { ChangeEvent, useState } from 'react'
import * as S from './styles'
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
  stateStringChange?: (value: string) => void
  stateStringValue?: string
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
  stateStringChange,
  stateStringValue
}: InputProps) {
  const [genericInputValue, setGenericInputValue] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const result = event.target.value.replace(/\D/g, '')
    setGenericInputValue(result)
  }

  return (
    <S.InputContainer tiny={tiny}>
      <S.LabelInput
        max={numberInputMaxValue}
        value={genericInputValue}
        tiny={tiny}
        type={type}
        htmlFor={id}
        className="font-semibold"
      >
        {name}
      </S.LabelInput>

      {type === 'select' ? (
        <S.SelectInput
          title={titleMessage}
          tiny={tiny}
          name={id}
          id={id}
          onChange={e => stateStringChange && stateStringChange(e.target.value)}
          value={stateStringValue}
        >
          {data?.map(option => {
            return (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            )
          })}
        </S.SelectInput>
      ) : (
        <>
          <S.GenericInput
            min={1}
            max={numberInputMaxValue}
            maxLength={textInputMaxLength}
            tiny={tiny}
            type={type}
            id={id}
            value={genericInputValue}
            placeholder="Informe"
            onChange={handleChange}
            required
            title={titleMessage}
          />
        </>
      )}
    </S.InputContainer>
  )
}
