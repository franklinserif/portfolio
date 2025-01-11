import { type FC } from 'react'
import { useContactFormStore } from 'src/store/useContactFormStore'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const ContactMeAside: FC = () => {
  const form = useContactFormStore((state) => state.form)

  const formCode = `
    const button = document.querySelector ( '#sendBtn' );


    const message = {
      name : "${form.name}" ,
      email : "${form.email}" ,
      message : "${form.message}" ,
      date: "Sat Jan 11 2025"
    }


    button.addEventListener ( 'click' ), () => {
      form.send ( message );
    })
  `

  return (
    <aside className="p-5">
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={atomOneDark}
        customStyle={{
          background: 'transparent',
          fontSize: '15px',
          overflow: 'hidden',
        }}
      >
        {formCode}
      </SyntaxHighlighter>
    </aside>
  )
}

export default ContactMeAside
