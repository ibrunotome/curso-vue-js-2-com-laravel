<template>
    <center>
        <ul class="pagination">
            <li v-for="n in parseInt(total)" class="waves-effect" :class="{ active: n === active }">
                <a href="" @click.prevent="navigate(n)">{{ n }}</a>
            </li>
        </ul>
        <p>Exibindo {{ active }} de {{ total }}, de {{ totalRegistries }}.</p>
    </center>
</template>

<script>
    export default {
        name: 'pagination',
        props: [
            'totalPerPage',
            'resource'
        ],
        data: function () {
            return {
                active: 1
            }
        },
        computed: {
            banks() {
                return this.$store.state.bank.bankList;
            },
            total() {
                return this.banks.last_page || 1
            },
            totalRegistries() {
                return this.banks.total || 1
            }
        },
        methods: {
            navigate: function (n) {
                this.active = n
            }
        },
        created() {
            this.$store.dispatch(this.resource, this.totalPerPage)
        }
    }
</script>

