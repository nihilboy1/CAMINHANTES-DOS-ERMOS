import * as S from './styles'

interface InputProps {
  id: string
  name: string
  titleMessage: string
  tiny?: boolean
  topDistance: string
  specificFunction: (value: number) => void
  specificValue: number
  limitValue: number
}

export function TextInput({
  id,
  name,
  titleMessage,
  tiny = false,
  topDistance,
  specificFunction,
  specificValue,
  limitValue
}: InputProps) {
  return (
    <S.InputContainer topDistance={topDistance}>
      <S.LabelInput
        tiny={tiny}
        htmlFor={id}
        value={specificValue}
        limitValue={limitValue}
      >
        {name}
      </S.LabelInput>

      <S.TextInputComponent
        min={1}
        maxLength={5}
        tiny={tiny}
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
        title={titleMessage}
      />
    </S.InputContainer>
  )
}
