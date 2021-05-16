import PhoneAPI from './../../PhoneAPI'

const state = {
  bankAmont: '0',
  iban: '0'
}

const getters = {
  bankAmont: ({ bankAmont }) => bankAmont,
  iban: ({ iban }) => iban
}

const actions = {
  sendpara ({ state }, { id, amount }) {
    PhoneAPI.callEvent('gcphone:bankTransfer', {id, amount})
  }
}

const mutations = {
  SET_BANK_AMONT (state, bankAmont) {
    state.bankAmont = bankAmont
  },
  SET_IBAN (state, iban) {
    state.iban = iban
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

