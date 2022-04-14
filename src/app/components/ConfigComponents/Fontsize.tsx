import { useEffect, useRef } from 'react'
import { useEditorContext } from '../../context/EditorContext'

const Fontsize: React.FC = (): JSX.Element => {
  const { options, setOptions } = useEditorContext()

  const FontSizes = useRef<Array<number>>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ])

  const handleChangeFontSize = (e: any): void => {
    const size: number = parseInt(e.target.value, 10)
    console.log(typeof size)
    setOptions({
      ...options,
      optionsConfig: { ...options.optionsConfig, fontSize: size },
    })
  }

  return (
    <div className="config--option-container">
      <div className="option--title">Font size</div>
      <div className="config--option-item">
        <select className="options" onChange={handleChangeFontSize}>
          <option selected>Choose Font Size</option>
          {FontSizes.current.map((size: number, index: number) => (
            <option key={index} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Fontsize
