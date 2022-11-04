export interface transportOptionsProps {
  id: number
  name: string
  kmh: number
  kmToPause: number
  minutesPauseTime: number
}

export interface OptionsProps {
  id: number
  name: string
}

export const transportOptions = [
  { id: 1, name: 'A pé', kmh: 6.7, kmToPause: 50, minutesPauseTime: 30 },
  { id: 2, name: 'Cavalo', kmh: 24.2, kmToPause: 40, minutesPauseTime: 60 },
  { id: 3, name: 'Boi', kmh: 12.2, kmToPause: 65, minutesPauseTime: 60 },
  { id: 4, name: 'Camelo', kmh: 13.7, kmToPause: 100, minutesPauseTime: 45 }
]

export const overloadOptions = [
  { id: 1, name: 'Não' },
  { id: 2, name: 'Sim' }
]
export const marchIntensityOptions = [
  { id: 1, name: 'Normal' },
  { id: 2, name: 'Forçada' }
]
export const difficultTerrainOptions = [
  { id: 1, name: 'Nada' },
  { id: 2, name: 'Pequena parte' },
  { id: 3, name: 'A metade' },
  { id: 4, name: 'A maior parte' },
  { id: 5, name: 'Todo o trajeto' }
]

export const isUsingVehicleOptions = [
  { id: 1, name: 'Não' },
  { id: 2, name: 'Sim' }
]

export const vehicleWeightOptions = [
  { id: 1, name: 'Leve/Pequeno' },
  { id: 2, name: 'Normal' },
  { id: 3, name: 'Pesado/Grande' }
]
