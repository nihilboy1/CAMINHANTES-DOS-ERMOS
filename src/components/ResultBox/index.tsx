import * as S from './styles'

interface ResultBoxProps {
  travelResult: string
  topDistance: string
}

export function ResultBox({ travelResult, topDistance }: ResultBoxProps) {
  return (
    <S.ResultBox topDistance={topDistance}>
      <p>{travelResult}</p>
    </S.ResultBox>
  )
}
