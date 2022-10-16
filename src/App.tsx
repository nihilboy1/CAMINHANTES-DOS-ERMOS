import { useState } from 'react'
import { Header } from './components/Header'
import { SelectInput } from './components/Inputs/SelectInput'
import {
  difficultTerrainOptions,
  isUsingVehicleOptions,
  marchIntensityOptions,
  overloadOptions,
  transportOptions,
  vehicleWeightOptions
} from './data/data'
import * as S from './styles/App'

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

  function calculateTravelTime() {
    const speed = 6.7
    const kmToPause = 0
    const MinutesPauseTime = 0

    if (transport === 'A pé') {
      const speed = 6.7
      const kmToPause = 0
      const MinutesPauseTime = 0
    } else if (transport === 'Cavalo') {
      const speed = 24.2
      const kmToPause = 40
      const MinutesPauseTime = 60
    } else if (transport === 'Boi') {
      const speed = 12.2
      const kmToPause = 60
      const MinutesPauseTime = 60
    } else if (transport === 'Camelo') {
      const speed = 13.2
      const kmToPause = 100
      const MinutesPauseTime = 45
    } else {
      return
    }

    const hoursToArrive = distance / speed

    console.log(hoursToArrive)
  }

  calculateTravelTime()
  return (
    <S.Container>
      <Header />
      <S.Form>
        <SelectInput id='transport' />
      </S.Form>
    </S.Container>
  )
}
