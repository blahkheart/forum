<template>
    <span :title="timestamp | userFriendlyDate">
        {{timestamp | userFriendlyDateRelative}}
    </span>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        timestamp: {
            required: true,
            type: Number
        }
    },
    filters: {
        userFriendlyDate (date) {
            return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
        },
        userFriendlyDateRelative (date) {
            return moment.unix(date).fromNow()
        }
    }
}
</script>