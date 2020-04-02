import moment from 'moment'

export default (Vue) => {
    Vue.filter('formatDate', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
        return moment(dataStr).format(pattern)
    })
}
