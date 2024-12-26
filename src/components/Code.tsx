import type { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  code: string
}

const Code: FC<Props> = ({ code }) => {
  return (
    <div className="rounded-lg border border-lines bg-primary-dark mt-3 px-4 pb-3">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          background: 'transparent',
          fontSize: '13px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
