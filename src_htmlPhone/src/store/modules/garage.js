const state = {
  vehicles: []
}

const getters = {
  vehicles: (state) => state.vehicles
}

const actions = {
  setVehicles ({ commit }, vehicles) {
    commit('SET_VEHICLES', vehicles)
  },
  resetVehicles ({ commit }) {
    commit('SET_VEHICLES', [])
  }
}

const mutations = {
  SET_VEHICLES (state, vehicles) {
    state.vehicles = vehicles
  },
  ADD_VEHICLE (state, vehicle) {
    state.messages.push(vehicle)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

if (process.env.NODE_ENV !== 'production') {
  state.vehicles = [
    {plate: 'ABC 124', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 125', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 126', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 127', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 177', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 128', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 129', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 120', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 121', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 122', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 123', garageId: 'Würfelpark', model: 'BMWI8', state: 1},
    {plate: 'ABC 111', garageId: 'Würfelpark', model: 'BMWI8', state: 1}
  ]
}
