<template>
  <div style="height:100%;" >
    <div style="height:50px;" class="appCenterTop" >
     aaaaaa
  </div>
  </div>
</template>

<script>
  import { getUserMenu } from '@/api/login'
  const calendarTypeOptions = [
    { key: 'CN', display_name: 'China' },
    { key: 'US', display_name: 'USA' },
    { key: 'JP', display_name: 'Japan' },
    { key: 'EU', display_name: 'Eurozone' }
  ]
  export default {
    data() {
      return {
        list: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          title: undefined,
          type: undefined
        },
        importanceOptions: [1, 2, 3],
        calendarTypeOptions,
        sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
        statusOptions: ['published', 'draft', 'deleted']
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getUserMenu().then(response => {
          this.list = response.menuList
          this.listLoading = false
        })
      },
      addT() {
        this.$router.push({ path: 'tableAdd' })
      }
    }
  }
</script>
