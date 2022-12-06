import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { SelectInput } from './components/Inputs/SelectInput'
import { TextInput } from './components/Inputs/TextInput'
import { ResultBox } from './components/ResultBox'
import {
  difficultTerrainOptions,
  loadWeightOptions,
  marchIntensityOptions,
  OptionsProps,
  transportOptions,
  transportOptionsProps
} from './data/data'
import * as S from './styles/App'

export function App() {
  const [transport, setTransport] = useState<transportOptionsProps>(
    transportOptions[0]
  )
  const [loadWeight, setLoadWeight] = useState<OptionsProps>(
    loadWeightOptions[0]
  )
  const [marchIntensity, setMarchIntensity] = useState<OptionsProps>(
    marchIntensityOptions[0]
  )
  const [difficultTerrain, setDifficultTerrain] = useState<OptionsProps>(
    difficultTerrainOptions[0]
  )
  const [distance, setDistance] = useState<number>(0)
  const [travelResult, setTravelResult] = useState('')

  function calculateTravelTime() {
    const time = distance / transport.kmh
    let secondsTime = time * 3600

    if (loadWeight.id != 1) {
      if (loadWeight.id == 2) {
        const loadWeightPlusTime = (secondsTime * 15) / 100
        secondsTime = secondsTime + loadWeightPlusTime
        console.log('Aplicada a penalidade de SOBRECARGA')
      } else if (loadWeight.id == 3) {
        const loadWeightLessTime = (secondsTime * 15) / 100
        secondsTime = secondsTime - loadWeightLessTime
        console.log('Aplicado o bônus de CARGA LEVE')
      }
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
        ? `${Math.round(secondsTime)} segundo`
        : Math.round(secondsTime) > 1
        ? `${Math.round(secondsTime)} segundos`
        : ''
    } `

    setTravelResult(secondsTime != 0 ? result : '*')
    console.log(
      '----------------------------------------------------------------'
    )
  }

  useEffect(() => {
    calculateTravelTime()
  }, [transport, loadWeight, marchIntensity, distance, difficultTerrain])

  return (
    <S.Container>
      <Header />
      <S.Form>
        <TextInput
          name="Distância: "
          id="distance"
          titleMessage="Informe um valor em km, entre 1 e 99999"
          specificFunction={setDistance}
          specificValue={distance}
          topDistance="6.5"
          limitValue={9999}
        />
        <SelectInput
          id="loadWeight"
          name="Qual o peso da carga? "
          data={loadWeightOptions}
          specificFunction={setLoadWeight}
          titleMessage={
            loadWeight.name === 'Normal'
              ? 'Carga normal não gera bonus nem penalidade ao tempo de duração da viagem'
              : loadWeight.name === 'Pesada'
              ? 'Sobrecarga aumenta o tempo de duração da viagem em 15%'
              : 'Carga leve reduz o tempo de duração da viagem de 15%'
          }
          topDistance="9.5"
        />
        <SelectInput
          id="marchIntensity"
          name="Intensidade da marcha: "
          data={marchIntensityOptions}
          specificFunction={setMarchIntensity}
          titleMessage={
            marchIntensity.name === 'Normal'
              ? 'A marcha Normal, não o tempo de duração da viagem'
              : 'A marcha Forçada reduz a duração da viagem em 25% | É recomendado que depois da quarta hora de locomoção, e de hora em hora após isso, todos os membros do grupo (ou os animais que os estiverem carregando) realizem um teste de resistencia de constituição CD12, com uma falha resultando num nivel de exaustão adquirido. Além disso, os membros do grupo recebem penalidade de -5 em testes de percepção durante todo o trajeto.'
          }
          topDistance="12.5"
        />

        <SelectInput
          id="transport"
          name="Meio de transporte: "
          data={transportOptions}
          specificFunction={setTransport}
          titleMessage={
            transport.name === 'A pé'
              ? `Com essa escolha, a velocidade de locomoção média é de 5,7km/h`
              : transport.name === 'Cavalo'
              ? 'Com essa escolha, a velocidade de locomoção média é de 22,2km/h, com pausas de 1h a cada 40km'
              : transport.name === 'Boi'
              ? 'Com essa escolha, a velocidade de locomoção média é de 11,2km/h, com pausas de 1h a cada 65km'
              : transport.name === 'Camelo'
              ? 'Com essa escolha, a velocidade de locomoção média é de 12,7km/h, com pausas de 45min a cada 100km'
              : transport.name === 'V/T puxado por cavalos'
              ? 'Com essa escolha, a velocidade de locomoção média é de 15,6km/h, com pausas de 60min a cada 100km | (V/T = Veículo de tração)'
              : transport.name === 'V/T puxado por bois'
              ? 'Com essa escolha, a velocidade de locomoção média é de 7,9km/h, com pausas de 60min a cada 100km | (V/T = Veículo de tração)'
              : transport.name === 'V/T puxado por camelos'
              ? 'Com essa escolha, a velocidade de locomoção média é de 8,9km/h, com pausas de 60min a cada 100km | (V/T = Veículo de tração)'
              : ''
          }
          topDistance="15.5"
        />
        <SelectInput
          id="difficultTerrain"
          name="Trecho em terreno dificil: "
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
          topDistance="18.5"
        />
      </S.Form>
      {travelResult && (
        <ResultBox topDistance="26" travelResult={travelResult} />
      )}
    </S.Container>
  )
}
