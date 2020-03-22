<template>
    <div>
        <!-- <img id="logo" alt="Vue logo" src="../assets/triplagolf.gif"> -->
        <img id='logo' src='../assets/triplagolf.gif' >
        <b-overlay :show="show" rounded="sm">
            <div id='button-group'>
                <b-button class="bbtn" v-b-modal.modal-1> Liity Triplagolffiin </b-button>
                <b-button class="bbtn" v-b-modal.modal-2> Uusi peli </b-button>
                <b-button class="bbtn"> Oma Profiili </b-button>
                <b-button class="bbtn"> Asetukset </b-button>
            </div>
        </b-overlay>

        <b-modal centered  id="modal-1" title="Triplagolf 2020" hide-footer>
            <div class=" d-block text-center"> 
                <p class="my-4">Valitse näistä:</p>
                <b-button class="bbtn"> Seuraa tilannetta </b-button>
                <b-button class="bbtn"> Luo oma ryhmä </b-button>
            </div>
        </b-modal>
        <b-modal centered  id="modal-2" title="Uusi peli?">
            <p class="my-4">Luo uusi peli? Tämä ei poista triplagolffia.</p>
        </b-modal>
        
    </div>
</template>

<script>
export default {
    name: 'startmenu',
    data() {
        return {
            show: false
      }
    }
    // props: {
    //     states: Object
    // },
    // methods: {
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    background-color: #333333;
    opacity:0.5;
}
.bbtn {
    margin-top: 20px;
    width: 60%;
    padding: 2%;
}

h4{
    margin: 20px 0 0;
}
#logo {
  width: 100%;
}
</style>

