import * as S from './styles'

interface Props {
  travelResult: string
  topDistance: string
}

export function ResultBox({ travelResult, topDistance }: Props) {
  return (
    <>
      {travelResult != '*' ? (
        <S.ResultBox topDistance={topDistance}>
          <div>
            <p>O tempo necessário para essa a viagem será de:</p>
            <span>{travelResult}</span>
          </div>
        </S.ResultBox>
      ) : (
        <S.ResultBox topDistance={topDistance}>
          <div>
            <span>Altere as variaveis para calcular a viagem</span>
          </div>
        </S.ResultBox>
      )}
    </>
  )
}
