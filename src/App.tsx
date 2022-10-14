import { Header } from './components/Header'
import { SelectInput } from './components/SelectInput'
import * as S from './styles/App'

const transportOptions = [
  { id: 1, name: 'A pé', unavailable: false },
  { id: 2, name: 'Cavalo', unavailable: false },
  { id: 3, name: 'Boi', unavailable: false }
]


export function App() {
  return (
    <S.Container>
      <Header />
      <SelectInput data={transportOptions}/>
    </S.Container>
  )
}
