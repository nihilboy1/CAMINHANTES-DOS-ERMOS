import { useEffect, useState } from 'react'
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
  const [moreThanEightAdverturers, setMoreThanEight] = useState<OptionsProps>(
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
  const [distance, setDistance] = useState<number>(0)
  const [animalsAmount, setAnimalsAmount] = useState<number>(1)
  const [travelResult, setTravelResult] = useState('')

  function calculateTravelTime() {
    const time = distance / transport.kmh
    let secondsTime = time * 3600

    if (overload.id === 2) {
      const overloadPlusTime = (secondsTime * 15) / 100
      secondsTime = secondsTime + overloadPlusTime
      console.log('Aplicada a penalidade de SOBRECARGA')
    }

    if (moreThanEightAdverturers.id === 2) {
      const moreThanEightAdverturersPlusTime = (secondsTime * 15) / 100
      secondsTime = secondsTime + moreThanEightAdverturersPlusTime
      console.log('Aplicada a penalidade de QUANTIDADE DE AVENTUREIROS')
    }

    if (marchIntensity.id == 2) {
      const marchIntensityLessTime = (secondsTime * 25) / 100
      secondsTime = secondsTime - marchIntensityLessTime
      console.log('Aplicado o bônus de MARCHA FORÇADA')
    }

    if (difficultTerrain.id != 1) {
      if (difficultTerrain.id == 2) {
        const difficultTerrainPlusTime = (secondsTime * 20) / 100
        secondsTime = secondsTime + difficultTerrainPlusTime
        console.log('Aplicada a penalidade de 20% para TERRENO DIFICIL')
      } else if (difficultTerrain.id == 3) {
        const difficultTerrainPlusTime = (secondsTime * 40) / 100
        secondsTime = secondsTime + difficultTerrainPlusTime
        console.log('Aplicada a penalidade de 40% para TERRENO DIFICIL')
      } else if (difficultTerrain.id == 4) {
        const difficultTerrainPlusTime = (secondsTime * 60) / 100
        secondsTime = secondsTime + difficultTerrainPlusTime
        console.log('Aplicada a penalidade de 60% para TERRENO DIFICIL')
      } else if (difficultTerrain.id == 5) {
        const difficultTerrainPlusTime = (secondsTime * 80) / 100
        secondsTime = secondsTime + difficultTerrainPlusTime
        console.log('Aplicada a penalidade de 80% para TERRENO DIFICIL')
      }
    }

    var days = Math.floor(secondsTime / (3600 * 24))
    secondsTime -= days * 3600 * 24
    var hrs = Math.floor(secondsTime / 3600)
    secondsTime -= hrs * 3600
    var mnts = Math.floor(secondsTime / 60)
    secondsTime -= mnts * 60
    const result = `${
      days == 1 ? `${days} dia,` : days > 1 ? `${days} dias,` : ''
    }  ${hrs == 1 ? `${hrs} hora,` : hrs > 1 ? `${hrs} horas,` : ''}  ${
      mnts == 1 ? `${mnts} minuto,` : mnts > 1 ? `${mnts} minutos,` : ''
    } ${
      Math.round(secondsTime) == 1
        ? `${Math.round(secondsTime)} segundo,`
        : Math.round(secondsTime) > 1
        ? `${Math.round(secondsTime)} segundos,`
        : ''
    } `

    setTravelResult(secondsTime != 0 ? result : '*')
  }

  useEffect(() => {
    calculateTravelTime()
  }, [
    transport,
    overload,
    moreThanEightAdverturers,
    marchIntensity,
    distance,
    difficultTerrain
  ])

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
          topDistance="6.5"
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
          topDistance="9.5"
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
          topDistance="12.5"
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
          topDistance="15.5"
        />
        <SelectInput
          id="moreThanEightAdverturers"
          name="O Grupo tem mais de 8 membros? "
          data={moreThan8AdventurersOptions}
          specificFunction={setMoreThanEight}
          titleMessage={
            moreThanEightAdverturers.name === 'Sim'
              ? 'Um grupo com mais de 8 membros tem a duração da viagem aumentada em 15%'
              : 'Um grupo com menos de 8 membros não sofre nenhuma penalidade de movimentação'
          }
          topDistance="18.5"
        />

        <SelectInput
          id="difficultTerrain"
          name="Quanto da viagem será feita em terreno difícil? "
          data={difficultTerrainOptions}
          specificFunction={setDifficultTerrain}
          titleMessage={
            difficultTerrain.name === 'Nada'
              ? 'A duração da viagem não será efetada por esta condição'
              : difficultTerrain.name === 'Pequena parte'
              ? 'A duração da viagem aumenta em 20%'
              : difficultTerrain.name === 'A metade'
              ? 'A duração da viagem aumentaa em 40%'
              : difficultTerrain.name === 'A maior parte'
              ? 'A duração da viagem aumenta em 60%'
              : 'A duração da viagem aumenta em 80%'
          }
          topDistance="21.5"
        />
        {transport.name !== 'A pé' && (
          <S.vehicleContainer>
            <SelectInput
              id="vehicle"
              name="Usando algum veiculo de tração? "
              data={isUsingVehicleOptions}
              specificFunction={setIsUsingVehicle}
              titleMessage=""
              topDistance="24.5"
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
                  topDistance="27.5"
                />
                <TextInput
                  tiny
                  id="animalsAmount"
                  name="Quantos animais o puxam? "
                  titleMessage=""
                  specificFunction={setAnimalsAmount}
                  specificValue={animalsAmount}
                  topDistance="30.5"
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
      {travelResult && (
        <ResultBox topDistance="34" travelResult={travelResult} />
      )}
    </S.Container>
  )
}
