import moment from 'moment'
import { useState } from 'react'
import { CalculateButton } from './components/CalculateButton'
import { Header } from './components/Header'
import { SelectInput } from './components/Inputs/SelectInput'
import { TextInput } from './components/Inputs/TextInput'
import { ResultBox } from './components/ResultBox'
import {
  difficultTerrainOptions,
  isUsingVehicleOptions,
  marchIntensityOptions,
  moreThan8AdventurersOptions,
  OptionsProps,
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
  const [overload, setOverload] = useState<OptionsProps>(overloadOptions[0])
  const [moreThanEight, setMoreThanEight] = useState<OptionsProps>(
    moreThan8AdventurersOptions[0]
  )

  const [marchIntensity, setMarchIntensity] = useState<OptionsProps>(
    marchIntensityOptions[0]
  )
  const [difficultTerrain, setDifficultTerrain] = useState<OptionsProps>(
    difficultTerrainOptions[0]
  )
  const [isUsingVehicle, setIsUsingVehicle] = useState<OptionsProps>(
    isUsingVehicleOptions[0]
  )
  const [vehicleWeight, setVehicleWeight] = useState<OptionsProps>(
    vehicleWeightOptions[0]
  )
  const [distance, setDistance] = useState<number>(1)
  const [dailyMarch, setDailyMarch] = useState<number>(1)
  const [animalsAmount, setAnimalsAmount] = useState<number>(1)
  const [travelResult, setTravelResult] = useState('')

  function calculateTravelTime() {
    const time = distance / transport.kmh
    const secondsDailyMarch = dailyMarch * 3600
    let secondsTime = time * 3600
    if (secondsTime > secondsDailyMarch) {
      console.log('Excedeu o tempo de marcha diário')
    }
    if (overload.id === 2) {
      const overloadPlusTime = (secondsTime * 15) / 100
      secondsTime = secondsTime + overloadPlusTime
      console.log('Sobrecarga está sendo aplicada')
    }

    if (moreThanEight.id === 2) {
      const overloadPlusTime = (secondsTime * 15) / 100
      secondsTime = secondsTime + overloadPlusTime
      console.log('Mais de 8 membros no grupo')
    }
    const result = moment
      .unix(secondsTime)
      .utc()
      .format('H [horas,] m [minutos e] s [segundos]')

    setTravelResult(result)
  }

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
          titleMessage={
            overload.name === 'Sim'
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
          titleMessage={
            marchIntensity.name === 'Normal'
              ? 'A marcha "Normal", não gera bonus nem penalidades ao tempo de duração da viagem'
              : 'A marcha "Forçada" reduz a duração da viagem em 25%, mas depois a quarta hora de locomoção, e de hora em hora após isso, todos os membros do grupo (ou os animais que os estiverem carregando) devem realizar um teste de resistencia de constituição CD12, com uma falha resultando num nivel de exaustão adquirido. Além disso, os membros do grupo recebem penalidade de -5 em testes de percepção durante todo o trajeto.'
          }
          topDistance="17.5"
        />
        <SelectInput
          id="overload"
          name="O Grupo tem mais de 8 membros? "
          data={moreThan8AdventurersOptions}
          specificFunction={setMoreThanEight}
          titleMessage={
            moreThanEight.name === 'Sim'
              ? 'Um grupo com mais de 8 membros tem a duração da viagem aumentada em 15%'
              : 'Um grupo com menos de 8 membros não sofre nenhuma penalidade de movimentação'
          }
          topDistance="20.5"
        />

        <SelectInput
          id="difficultTerrain"
          name="Quanto da viagem será feita em terreno difícil? "
          data={difficultTerrainOptions}
          specificFunction={setDifficultTerrain}
          titleMessage=""
          topDistance="23.5"
        />
        {transport.name !== 'A pé' && (
          <S.vehicleContainer>
            <SelectInput
              id="vehicle"
              name="Usando algum veiculo de tração? "
              data={isUsingVehicleOptions}
              specificFunction={setIsUsingVehicle}
              titleMessage=""
              topDistance="26.5"
            />
            {isUsingVehicle.name === 'Sim' && (
              <>
                <SelectInput
                  tiny
                  id={'vehicleWeight'}
                  name="Qual o peso/tamanho desse veículo? "
                  data={vehicleWeightOptions}
                  specificFunction={setVehicleWeight}
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
                    vehicleWeight.name === 'Leve/Pequeno'
                      ? 2
                      : vehicleWeight.name === 'Normal'
                      ? 4
                      : 6
                  }
                />
              </>
            )}
          </S.vehicleContainer>
        )}
      </S.Form>
      <CalculateButton
        topDistance="37"
        calculateTravelTime={calculateTravelTime}
      />
      {travelResult && (
        <ResultBox topDistance="37.5" travelResult={travelResult} />
      )}
    </S.Container>
  )
}
