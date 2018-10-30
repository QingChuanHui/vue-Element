<template>
  <el-row class="panel-group" :gutter="40">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel' @click="handleSetLineChartData('billCountList')">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="iconfont icon-dingdan card-panel-icon" ></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日订单数量</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="report.billCount" :duration="2600"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('billMoneyList')">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="iconfont icon-qian card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日订单金额</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="report.billMoney" :duration="3000"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('needDealBillCountList')">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="iconfont icon-dingdan card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日待处理订单</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="report.needDealBillCount" :duration="3200"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('baseClientCompanyCountList')">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <i class="iconfont icon-jinrudianpu card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">今日新增门店</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="report.baseClientCompanyCount" :duration="3600"></count-to>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
import { getClientDayReport } from '@/api/components/PanelGroup/index'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      report: ''
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.load()
    })
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    },
    load() {
      getClientDayReport().then(response => {
        this.report = response.new
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 12px 0 0 12px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 50px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
