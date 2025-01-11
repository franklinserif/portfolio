import type { ContactFormStore } from '@interfaces/contactForm'
import { create } from 'zustand'

interface State {
  form: ContactFormStore
  changeName: (name: string) => void
  changeEmail: (email: string) => void
  changeMessage: (message: string) => void
}

const INITAL_STATE = {
  name: '',
  email: '',
  message: '',
}

export const useContactFormStore = create<State>()((set) => ({
  form: { ...INITAL_STATE },
  changeEmail: (email) => {
    set((state) => ({ ...state, form: { ...state.form, email } }))
  },
  changeName: (name) => {
    set((state) => ({ ...state, form: { ...state.form, name } }))
  },
  changeMessage: (message) => {
    set((state) => ({ ...state, form: { ...state.form, message } }))
  },
}))
