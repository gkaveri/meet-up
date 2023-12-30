import React from 'react'

const RegisterContxext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})
export default RegisterContxext
