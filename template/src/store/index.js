/* eslint-disable import/first */
require('es6-promise').polyfill()

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const defaultState = {
}

/* eslint-disable no-underscore-dangle, no-undef */
const inBrowser = typeof window !== 'undefined'
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {
}

const actions = {
}

const getters = {
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

export default store
