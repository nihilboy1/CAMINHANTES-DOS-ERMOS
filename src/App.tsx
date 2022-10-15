import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import * as S from './styles/App'

const transportOptions = [
  { id: 1, name: 'A pé' },
  { id: 2, name: 'Cavalo' },
  { id: 3, name: 'Boi' }
]
const overloadOptions = [
  { id: 1, name: 'Não' },
  { id: 2, name: 'Sim' }
]
const marchIntensityOptions = [
  { id: 1, name: 'Leve' },
  { id: 2, name: 'Normal' },
  { id: 3, name: 'Pesada' }
]
const difficultTerrainOptions = [
  { id: 1, name: 'Nada' },
  { id: 2, name: 'Um pouco' },
  { id: 3, name: 'A metade' },
  { id: 4, name: 'A maior parte' },
  { id: 5, name: 'Todo o trajeto' }
]

const isUsingVehicleOptions = [
  { id: 1, name: 'Não' },
  { id: 2, name: 'Sim' }
]

const vehicleWeightOptions = [
  { id: 1, name: 'Leve' },
  { id: 2, name: 'Normal' },
  { id: 3, name: 'Pesado' }
]

export function App() {
  const [transport, setTransport] = useState<string>(transportOptions[0].name)
  const [overload, setOverload] = useState<string>(overloadOptions[0].name)
  const [marchIntensity, setMarchIntensity] = useState<string>(
    marchIntensityOptions[0].name
  )
  const [difficultTerrain, setDifficultTerrain] = useState<string>(
    difficultTerrainOptions[0].name
  )
  const [isUsingVehicle, setIsUsingVehicle] = useState<string>(
    isUsingVehicleOptions[0].name
  )
  const [vehicleWeight, setVehicleWeight] = useState<string>(
    vehicleWeightOptions[0].name
  )
  return (
    <S.Container>
      <Header />
      <S.Form>
        <Input
          id="distance"
          name="Distância: "
          type="text"
          textInputMaxLength={4}
          numberInputMaxValue={9999}
          titleMessage="Informe um valor em km, entre 1 e 9999"
        />
        <Input
          stateStringChange={setTransport}
          stateStringValue={transport}
          data={transportOptions}
          type={'select'}
          id={'transport'}
          name="Meio de transporte: "
          titleMessage="Selecione o meio de transporte ou animal de tração"
        />
        <Input
          stateStringChange={setOverload}
          stateStringValue={overload}
          data={overloadOptions}
          type={'select'}
          id={'overload'}
          name="Aplica-se sobrecarga? "
          titleMessage="Marcar que 'Sim', aumenta em 15% o tempo de duração da viagem. (Para quando o grupo quiser transportar o corpo de um gigante morto ou algo do tipo... "
        />
        <Input
          id="dailyMarch"
          name="Horas de marcha diária: "
          type="number"
          textInputMaxLength={2}
          numberInputMaxValue={24}
          titleMessage=""
        />
        <Input
          stateStringChange={setMarchIntensity}
          stateStringValue={marchIntensity}
          data={marchIntensityOptions}
          type={'select'}
          id={'marchIntensity'}
          name="Intensidade da marcha: "
          titleMessage=""
        />
        <Input
          id="adventurersAmount"
          name="Quantidade de aventureiros: "
          type="number"
          textInputMaxLength={2}
          numberInputMaxValue={12}
          titleMessage="O ministério da saude adverte: Não é saudável mestrar para mais de 12 pessoas..."
        />

        <Input
          stateStringChange={setDifficultTerrain}
          stateStringValue={difficultTerrain}
          data={difficultTerrainOptions}
          type={'select'}
          id={'difficultTerrain'}
          name="Quanto da viagem será feita em terreno difícil? "
          titleMessage=""
        />

        {transport !== 'A pé' && (
          <S.vehicleContainer>
            <Input
              stateStringChange={setIsUsingVehicle}
              stateStringValue={isUsingVehicle}
              data={isUsingVehicleOptions}
              type={'select'}
              id={'vehicle'}
              name="Usando algum veiculo de tração? "
              titleMessage=""
            />
            {isUsingVehicle === 'Sim' && (
              <>
                <Input
                  stateStringChange={setVehicleWeight}
                  stateStringValue={vehicleWeight}
                  tiny={true}
                  data={vehicleWeightOptions}
                  type={'select'}
                  id={'vehicleWeight'}
                  name="Qual o peso desse veículo? "
                  titleMessage=""
                />
                <Input
                  tiny={true}
                  id="animalsAmount"
                  name="Quantos animais o puxam? "
                  type="number"
                  textInputMaxLength={2}
                  numberInputMaxValue={2}
                  titleMessage=""
                />
              </>
            )}
          </S.vehicleContainer>
        )}
      </S.Form>
    </S.Container>
  )
}
