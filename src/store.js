import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        game: {
            gameStatus: "None",
            data: null
        }     
        //loginState: 'logged out',
        //screenState: 'loginScreen',
        //gameState: 'empty'
        //MainTitle: 'TriplaGolf App',
        //gameSettings: {maxOverPar:7, points:[5, 4, 3, 2, 1]},
        //TempGameSettings: {maxOverPar:7}
        //game: new Game("empty"),  //Yksi ladattu peli, päivitys pilveen/pilvestä
        //database: new Database, //Kaikki data kaikista peleistä ja pelaajista
        //myTeam: new MyTeam //Pidetään kirjaa ketä on tässä pelissä mukana (vektori pelaajien nimistä)  
    },
    getters: {
        user(state){
            return state.user
        },
        game(state) {
            return state.game
        }
    },
    mutations: {
        updateUser (state, { user }) {
            Vue.set(state, 'user', user)
          },
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        },
        // Aseta "Loaded" arvoon kun peli on ladattu
        SET_GAME_STATUS(state, value) {
            state.game.gameStatus = value;
          },
        // Pelin osallistujat, tiimit, lajit, asetukset
        SET_GAME(state, data) {
            state.game.data = data;
          }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            }
            else {
                commit("SET_USER", null);
            }
        },
        fetchGame({commit}, game) {
            commit("SET_GAME_STATUS", game !== null);
            if (game) {
                commit("SET_GAME", {
                    name: 'PelinNimiTähän'
                });
            }
            else {
                commit("SET_GAME", null);
            }
        }
    }
})

export default store