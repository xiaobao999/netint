<template>
  <div class="article_main">
    <div class="article_analysis">
      <div class="l_a_left">
        <my-card></my-card>
      </div>
      <div class="l_a_right">
        <div>
          <div>
            <span class="iconfont iconwenxianxiaotubiao"></span>
          </div>
          <div>
            <span>998716</span>
            <span>参考文献</span>
          </div>
        </div>
        <div>
          <div>
            <span class="iconfont iconyinhaoyangshitubiao"></span>
          </div>
          <div>
            <span>998716</span>
            <span>被引用数</span>
          </div>
        </div>
      </div>
    </div>
    <div class="article_list">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="参考文献" name="first">
          <div class="left">
            <h2 class="bluesize">
              <span class="iconfont iconshijianbiaoyangshitubiao"></span>
              <span>时间</span>
            </h2>
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </div>
            <!-- 左侧信息详情模块 -->
            <left-list @msgname="getmsg" v-for="(item,i) in leftlist" :key="i" :state="item"></left-list>
          </div>
          <!-- 中间详情 -->
          <div class="center" style="width:1000px;">
            <div class="title">
              <span>共10000条相关结果</span>
              <el-dropdown @command="handleCommand" trigger="click">
                <span class="el-dropdown-link">
                  {{command}}
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="时间">时间</el-dropdown-item>
                  <el-dropdown-item command="引用量">引用量</el-dropdown-item>
                  <el-dropdown-item command="阅读量">阅读量</el-dropdown-item>
                  <el-dropdown-item command="作者数">作者数</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <my-card :val="val" v-for="(item,i) in cardlist" :key="i"></my-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="less">
.article_main {
  background-color: #f6f6f6;
  display: block !important;
  height: 100%;
}
.bluesize {
  font-size: 20px;
  color: #0e6f90;
}
.article_analysis,
.article_list {
  background-color: #fff;
  padding: 20px;
}
.article_analysis {
  display: flex;
  .l_a_left {
    flex: 3;
    .el-card.is-always-shadow {
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .el-card {
      border: none;
    }
    .card_title {
      padding-bottom: 15px;
      border-bottom-color: #e3e3e3;
    }
  }
  .l_a_right {
    padding-left: 50px;
    border-left: 1px solid #c8c8c8;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > div {
      display: flex;
      margin: 25px;
      div:nth-child(2) {
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span:nth-child(2) {
          font-size: 20px;
        }
      }
    }
    .iconfont {
      color: #ef8338;
      padding: 0 15px;
    }
    .iconwenxianxiaotubiao {
      font-size: 36px;
    }
    .iconsousuoshouyeqietuzuozhe {
      font-size: 50px;
      padding: 0 8px;
    }
    .iconyinhaoyangshitubiao {
      font-size: 32px;
    }
  }
}
.article_list {
  .el-tab-pane {
    display: flex;
    justify-content: space-between;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.title {
  margin: 30px 0;
}
</style>
<script>
export default {
  data() {
    return {
      leftlist: ["author", "theme"],
      valueselect: "",
      cardlist: [1, 2],
      activeName: "first",
      value1: "",
      value2: "",
      command: "请选择",
      val: ""
    };
  },
  mounted() {},
  methods: {
    getmsg(val) {
      this.val = val;
    },
    handleClick() {},
    handleCommand(command) {
      this.command = command;
    },
    async getdata() {
      const res = await this.$http.get("articledetails");
      if (res.status == 200) {
        const { data } = res;
        this.leftlist = data.leftlist;
        this.wordlist = data.wordlist;
      }
    }
  }
};
</script>
