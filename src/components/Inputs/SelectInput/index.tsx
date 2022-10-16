import * as S from './styles'
interface SelectInputProps {
  data?: {
    id: number
    name: string
  }[]
  id: string
  name: string
  textInputMaxLength?: number
  numberInputMaxValue?: number
  titleMessage: string
  tiny?: boolean
  topDistance: string
  specificStringFunction?: (value: string) => void
  specificStringValue?: string
}

export function SelectInput({
  data,
  id,
  name,
  numberInputMaxValue,
  titleMessage,
  tiny = false,
  topDistance,
  specificStringFunction,
  specificStringValue
}: SelectInputProps) {
  return (
    <S.InputContainer tiny={tiny} topDistance={topDistance}>
      <S.LabelInput
        max={numberInputMaxValue}
        tiny={tiny}
        type="select"
        htmlFor={id}
        className="font-semibold"
      >
        {name}
      </S.LabelInput>

      <S.SelectInput
        title={titleMessage}
        tiny={tiny}
        name={id}
        id={id}
        onChange={e =>
          specificStringFunction && specificStringFunction(e.target.value)
        }
        value={specificStringValue}
      >
        {data?.map(option => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          )
        })}
      </S.SelectInput>
    </S.InputContainer>
  )
}
