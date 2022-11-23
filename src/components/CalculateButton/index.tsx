import * as S from './styles'

interface calculateButtonProps {
  calculateTravelTime: () => void
  topDistance: string
}

export function CalculateButton({ calculateTravelTime, topDistance }: calculateButtonProps) {
  return (
    <S.CalculateButton topDistance={topDistance} onClick={calculateTravelTime}>
      Calcular
    </S.CalculateButton>
  )
}
