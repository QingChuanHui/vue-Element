<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData"></panel-group>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart></raddar-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 5}">
        <todo-list></todo-list>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 5}">
        <box-card></box-card>
      </el-col>
    </el-row> -->

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import { getWeekReport } from '@/api/components/admin/index'
import { parseTime } from '@/utils'
export default {
  name: 'dashboard-admin',
  components: {
    // GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  mounted: function() {
    this.load()
  },
  data() {
    return {
      dataList: {},
      lineChartData: {}
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.setData(this.dataList[type], type)
    },
    load() {
      getWeekReport().then(response => {
        this.dataList = response.new
        this.setData(response.new.billCountList, 'billCountList')
      })
    },
    setData(data, type) {
      var text = ''
      var countList = []
      if (type === 'billCountList') {
        text = '近七日订单数量'
        countList = data.map((item) => {
          return item.billCount
        })
      } else if (type === 'billMoneyList') {
        text = '近七日订单金额'
        countList = data.map((item) => {
          return item.billMoney
        })
      } else if (type === 'carOwnerCountList') {
        text = '近七日新增车主'
        countList = data.map((item) => {
          return item.carOwnerCount
        })
      } else if (type === 'baseClientCountList') {
        text = '近七日新增企业'
        countList = data.map((item) => {
          return item.baseClientCount
        })
      }
      const dateList = data.map((item) => {
        return parseTime(item.Date, '{m}-{d}')
      })
      this.lineChartData = { countList: countList, dateList: dateList, type: text }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
