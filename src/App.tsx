import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import * as S from './styles/App'

const transportOptions = [
  { id: 1, name: 'A pé' },
  { id: 2, name: 'Cavalo' },
  { id: 3, name: 'Boi' },
  { id: 4, name: 'Camelo' }
]
const overloadOptions = [
  { id: 1, name: 'Não' },
  { id: 2, name: 'Sim' }
]
const marchIntensityOptions = [
  { id: 1, name: 'Normal' },
  { id: 2, name: 'Forçada' }
]
const difficultTerrainOptions = [
  { id: 1, name: 'Nada' },
  { id: 2, name: 'Pequena parte' },
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
  const [distance, setDistance] = useState<number>(1)
  const [dailyMarch, setDailyMarch] = useState<number>(1)
  const [adventurersAmount, setAdventurersAmount] = useState<number>(1)
  const [animalsAmount, setAnimalsAmount] = useState<number>(1)
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
          specificFunction={setDistance}
        />
        <Input
          stateStringChange={setTransport}
          stateStringValue={transport}
          data={transportOptions}
          type={'select'}
          id={'transport'}
          name="Meio de transporte: "
          titleMessage={
            transport === 'A pé'
              ? `Velocidade de locomoção média de 6,7km/h`
              : transport === 'Cavalo'
              ? 'Velocidade de locomoção média de 24,2km/h, com pausas de 1h a cada 40km'
              : transport === 'Boi'
              ? 'Velocidade de locomoção média de 12,2km/h, com pausas de 1h a cada 65km'
              : transport === 'Camelo'
              ? 'Velocidade de locomoção média de 13,2km/h, com pausas de 45min a cada 100km'
              : ''
          }
        />
        <Input
          stateStringChange={setOverload}
          stateStringValue={overload}
          data={overloadOptions}
          type={'select'}
          id={'overload'}
          name="Aplica-se sobrecarga? "
          titleMessage={
            overload === 'Sim'
              ? 'Sobrecarga aumenta o tempo de duração da viagem em 15%'
              : 'Carga normal não gera bonus nem penalidade ao tempo de duração da viagem'
          }
        />
        <Input
          id="dailyMarch"
          name="Horas de marcha diária: "
          type="number"
          textInputMaxLength={2}
          numberInputMaxValue={24}
          titleMessage=""
          specificFunction={setDailyMarch}
        />
        <Input
          stateStringChange={setMarchIntensity}
          stateStringValue={marchIntensity}
          data={marchIntensityOptions}
          type={'select'}
          id={'marchIntensity'}
          name="Intensidade da marcha: "
          titleMessage={
            marchIntensity === 'Normal'
              ? 'A marcha "Normal", não gera bonus nem penalidades ao tempo de duração da viagem'
              : 'A marcha "Forçada" reduz a duração da viagem em 25%, mas depois a quarta hora de locomoção, e de hora em hora após isso, todos os membros do grupo (ou os animais que os estiverem carregando) devem realizar um teste de resistencia de constituição CD12, com uma falha resultando num nivel de exaustão adquirido. Além disso, os membros do grupo recebem penalidade de -5 em testes de percepção durante todo o trajeto.'
          }
        />
        <Input
          id="adventurersAmount"
          name="Quantidade de aventureiros: "
          type="number"
          textInputMaxLength={2}
          numberInputMaxValue={12}
          titleMessage="Acima de 8 membros, o tempo de duração de viagem aumenta em 10%"
          specificFunction={setAdventurersAmount}
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
                  specificFunction={setAnimalsAmount}
                />
              </>
            )}
          </S.vehicleContainer>
        )}
      </S.Form>
    </S.Container>
  )
}
