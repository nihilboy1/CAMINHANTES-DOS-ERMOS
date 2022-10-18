import { transportOptionsProps } from '../../../data/data'
import * as S from './styles'
interface SelectInputProps {
  data: transportOptionsProps[]
  id: string
  name: string
  titleMessage: string
  tiny?: boolean
  topDistance: string
  specificFunction: (value: transportOptionsProps) => void
  specificValue: string
}

export function SelectInput({
  data,
  id,
  name,
  titleMessage,
  tiny = false,
  topDistance,
  specificFunction,
  specificValue
}: SelectInputProps) {
  return (
    <S.InputContainer tiny={tiny} topDistance={topDistance}>
      <S.LabelInput tiny={tiny} htmlFor={id}>
        {name}
      </S.LabelInput>

      <S.SelectInput
        title={titleMessage}
        tiny={tiny}
        name={id}
        id={id}
        onChange={e => specificFunction(JSON.parse(e.target.value))}
        value={specificValue}
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
  )
}
