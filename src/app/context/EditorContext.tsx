import { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface EditorOptions {
  optionsConfig: {
    fontSize: number
    minimap: {
      enabled: boolean
    }
    wordWrap: 'on' | 'off' | 'wordWrapColumn' | 'bounded'
  }
  theme: 'vs' | 'vs-dark' | 'hc-black'
}

const context = createContext<any>(null)

export const useEditorContext = () => useContext(context)

export const EditorContext: React.FC<Props> = ({ children }): JSX.Element => {
  const [options, setOptions] = useState<EditorOptions>({
    optionsConfig: {
      fontSize: 20,
      minimap: {
        enabled: false,
      },
      wordWrap: 'off',
    },
    theme: 'vs-dark',
  })
  return (
    <context.Provider value={{ options, setOptions }}>
      {children}
    </context.Provider>
  )
}
