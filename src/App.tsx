import { useState } from 'react'
import { Header } from './components/Header'
import { SelectInput } from './components/Inputs/SelectInput'
import { TextInput } from './components/Inputs/TextInput'
import {
  difficultTerrainOptions,
  isUsingVehicleOptions,
  marchIntensityOptions,
  overloadOptions,
  transportOptions,
  transportOptionsProps,
  vehicleWeightOptions
} from './data/data'
import * as S from './styles/App'

export function App() {
  const [transport, setTransport] = useState<transportOptionsProps>(
    transportOptions[0]
  )
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

  function calculateTravelTime() {
    let speed = 6.7
    let kmToPause = 0
    let MinutesPauseTime = 0

    const hoursToArrive = distance / speed

    console.log(hoursToArrive)
  }

  calculateTravelTime()
  return (
    <S.Container>
      <Header />
      <S.Form>
        <TextInput
          name="Distância: "
          id="distance"
          titleMessage="Informe um valor em km, entre 1 e 9999"
          specificFunction={setDistance}
          specificValue={distance}
          topDistance="5.2"
          limitValue={9999}
        />
        <SelectInput
          id="transport"
          name="Meio de transporte: "
          data={transportOptions}
          specificFunction={setTransport}
          specificValue={transport.name}
          titleMessage={
            transport.name === 'A pé'
              ? `Com essa escolha, a velocidade de locomoção média de 6,7km/h`
              : transport.name === 'Cavalo'
              ? 'Com essa escolha, a velocidade de locomoção média de 24,2km/h, com pausas de 1h a cada 40km'
              : transport.name === 'Boi'
              ? 'Com essa escolha, a velocidade de locomoção média de 12,2km/h, com pausas de 1h a cada 65km'
              : transport.name === 'Camelo'
              ? 'Com essa escolha, a velocidade de locomoção média de 13,2km/h, com pausas de 45min a cada 100km'
              : ''
          }
          topDistance="8.5"
        />
        <SelectInput
          id="overload"
          name="Aplica-se sobrecarga? "
          data={overloadOptions}
          specificFunction={setOverload}
          specificValue={overload}
          titleMessage={
            overload === 'Sim'
              ? 'Sobrecarga aumenta o tempo de duração da viagem em 15%'
              : 'Carga normal não gera bonus nem penalidade ao tempo de duração da viagem'
          }
          topDistance="11.5"
        />
        <TextInput
          id="dailyMarch"
          name="Horas de marcha diária: "
          titleMessage=""
          specificFunction={setDailyMarch}
          specificValue={dailyMarch}
          topDistance="14.5"
          limitValue={24}
        />
        <SelectInput
          id="marchIntensity"
          name="Intensidade da marcha: "
          data={marchIntensityOptions}
          specificFunction={setMarchIntensity}
          specificValue={marchIntensity}
          titleMessage={
            marchIntensity === 'Normal'
              ? 'A marcha "Normal", não gera bonus nem penalidades ao tempo de duração da viagem'
              : 'A marcha "Forçada" reduz a duração da viagem em 25%, mas depois a quarta hora de locomoção, e de hora em hora após isso, todos os membros do grupo (ou os animais que os estiverem carregando) devem realizar um teste de resistencia de constituição CD12, com uma falha resultando num nivel de exaustão adquirido. Além disso, os membros do grupo recebem penalidade de -5 em testes de percepção durante todo o trajeto.'
          }
          topDistance="17.5"
        />
        <TextInput
          id="adventurersAmount"
          name="Quantidade de aventureiros: "
          titleMessage="Acima de 8 membros, o tempo de duração de viagem aumenta em 10%"
          specificFunction={setAdventurersAmount}
          specificValue={adventurersAmount}
          topDistance="20.5"
          limitValue={12}
        />
        <SelectInput
          id="difficultTerrain"
          name="Quanto da viagem será feita em terreno difícil? "
          data={marchIntensityOptions}
          specificFunction={setDifficultTerrain}
          specificValue={difficultTerrain}
          titleMessage=""
          topDistance="23.5"
        />
        {transport !== 'A pé' && (
          <S.vehicleContainer>
            <SelectInput
              id="vehicle"
              name="Usando algum veiculo de tração? "
              data={isUsingVehicleOptions}
              specificFunction={setIsUsingVehicle}
              specificValue={isUsingVehicle}
              titleMessage=""
              topDistance="26.5"
            />
            {isUsingVehicle === 'Sim' && (
              <>
                <SelectInput
                  tiny
                  id={'vehicleWeight'}
                  name="Qual o peso/tamanho desse veículo? "
                  data={vehicleWeightOptions}
                  specificFunction={setVehicleWeight}
                  specificValue={vehicleWeight}
                  titleMessage=""
                  topDistance="29.5"
                />
                <TextInput
                  tiny
                  id="animalsAmount"
                  name="Quantos animais o puxam? "
                  titleMessage=""
                  specificFunction={setAnimalsAmount}
                  specificValue={animalsAmount}
                  topDistance="32"
                  limitValue={
                    vehicleWeight === 'Leve/Pequeno'
                      ? 2
                      : vehicleWeight === 'Normal'
                      ? 4
                      : 6
                  }
                />
              </>
            )}
          </S.vehicleContainer>
        )}
      </S.Form>
    </S.Container>
  )
}
