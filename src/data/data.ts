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
  { id: 1, name: 'A pé', kmh: 5.7, kmToPause: 50, minutesPauseTime: 30 },
  { id: 2, name: 'Cavalo', kmh: 22.2, kmToPause: 40, minutesPauseTime: 60 },
  { id: 3, name: 'Boi', kmh: 11.2, kmToPause: 65, minutesPauseTime: 60 },
  { id: 4, name: 'Camelo', kmh: 12.7, kmToPause: 100, minutesPauseTime: 45 },

  {
    id: 4,
    name: 'V/T puxado por cavalos',
    kmh: 15.6,
    kmToPause: 100,
    minutesPauseTime: 60
  },
  {
    id: 4,
    name: 'V/T puxado por bois',
    kmh: 7.9,
    kmToPause: 100,
    minutesPauseTime: 60
  },
  {
    id: 4,
    name: 'V/T puxado por camelos',
    kmh: 8.9,
    kmToPause: 100,
    minutesPauseTime: 60
  }
]

export const loadWeightOptions = [
  { id: 1, name: 'Normal' },
  { id: 2, name: 'Pesada' },
  { id: 3, name: 'Leve' }
]

export const moreThan8AdventurersOptions = [
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
