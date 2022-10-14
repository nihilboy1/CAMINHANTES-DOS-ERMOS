interface SelectInputProps {
  data: {
    id: number
    name: string
    unavailable: boolean
  }[]
}

export function SelectInput({ data }: SelectInputProps) {
  return (
    <div>
      <label htmlFor="transporte" className="font-semibold">
        Meio de transporte
      </label>

      <select name="transporte" id="transporte">
        {data.map(option => {
          return <option value={option.name}>{option.name}</option>
        })}
      </select>
    </div>
  )
}
