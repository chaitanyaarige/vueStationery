export default ({
  namespaced: true,
  state: {
    stationery: [
      {
        id:1,
        prod_code: "SC_DOM-001",
        prod_name: 'Domyos Scale 15cm',
        manufacturer: 'Kangaroo',
        pre_gst: 12,
        post_gst: 0,
        qty: 10,
        unit_price: 12
      },
      {
        id:2,
        prod_code: "SC_DOM-002",
        prod_name: 'Domyos Scale 30cm',
        manufacturer: 'Kangaroo',
        pre_gst: 12,
        post_gst: 0,
        qty: 10,
        unit_price: 24
      }
    ]
  },
  getters: {
    stationery: state => state.stationery,
  },
  actions: {

  },
  mutations: {
    editStationery(state, data) {
      let uniqueId = state.stationery.findIndex(item => item.id === data.id)
      state.stationery[uniqueId].prod_code = data.prod_code
      state.stationery[uniqueId].prod_name = data.prod_name
      state.stationery[uniqueId].manufacturer = data.manufacturer
      state.stationery[uniqueId].pre_gst = data.pre_gst
      state.stationery[uniqueId].unit_price = data.unit_price
      state.stationery[uniqueId].qty = data.qty
      state.stationery[uniqueId].post_gst = data.post_gst
    },
    addStationery(state, data) {
      state.stationery.push(data)
    },
    deleteStationery(state, data) {
      let uniqueId = state.stationery.findIndex(item => item.id === data.id)
      state.stationery.splice(uniqueId,1)
    }
  }
})