import type { FC } from 'react'
import { useContactFormStore } from '@store/useContactFormStore'

const ContactMeForm: FC = () => {
  const formState = useContactFormStore((state) => state)

  const sendEmail = () => {
    const { form } = formState
    if (!form.email || !form.email || form.message) return

    const mailtoLink = `mailto:${form.email}?subject=${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="w-full flex justify-center items-center px-5 md:px-0">
      <form action="" className="flex flex-col max-w-[400px] w-full mt-16">
        <label htmlFor="name" className="text-snippets text-secondary mb-3">
          _name:
        </label>
        <input
          type="text"
          id="name"
          className="bg-primary-dark rounded-md p-2 border-2 border-lines outline-none mb-7 focus:border-secondary text-secondary text-snippets"
          onChange={(event) => formState.changeName(event.target.value)}
        />
        <label htmlFor="email" className="text-snippets text-secondary mb-3">
          _email:
        </label>
        <input
          type="text"
          id="email"
          className="bg-primary-dark rounded-md p-2 border-2 border-lines outline-none mb-7 focus:border-secondary text-secondary text-snippets"
          onChange={(event) => formState.changeEmail(event.target.value)}
        />
        <label htmlFor="message" className="text-snippets text-secondary mb-3">
          _message:
        </label>
        <textarea
          id="name"
          className="bg-primary-dark rounded-md p-2 border-2 border-lines outline-none mb-7 focus:border-secondary text-secondary text-snippets"
          onChange={(event) => formState.changeMessage(event.target.value)}
          rows={7}
        />
        <button
          onClick={sendEmail}
          className="bg-lines hover:bg-button-hover transition-colors text-white text-small-letter py-2 px-3 rounded-md w-fit"
        >
          submit-message
        </button>
      </form>
    </div>
  )
}

export default ContactMeForm
