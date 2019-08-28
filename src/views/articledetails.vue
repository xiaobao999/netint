<template>
  <div class="search_main_content">
    <el-tabs v-model="activeName1" @tab-click="handleClick">
      <el-tab-pane label="文献相关" name="first">
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
        <div class="center">
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
          <el-pagination background layout="prev, pager, next" :total="300"></el-pagination>
        </div>
        <div class="right">
          <h2 class="bluesize" style=" text-align: center;">热门话题</h2>
          <div class="right_word">
            <el-tag type="info" v-for="(item,i) in wordlist" :key="i">{{item}}</el-tag>
          </div>
          <right-list :val="val"></right-list>
        </div>
      </el-tab-pane>
      <el-tab-pane label="作者相关" name="second"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftlist: [],
      wordlist: [],
      cardlist: [1, 2, 3, 4, 5],
      activeName1: "first",
      input: "",
      select: "文献",
      value1: "",
      value2: "",
      command: "请选择",
      val: ""
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    handleCommand(command) {
      this.command = command;
    },
    handleClick() {},
    getmsg(val) {
      this.val = val;
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
<style lang="less">
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #0e6f90 !important;
  color: #fff !important;
}
.el-pager li.active {
  color: #0e6f90 !important;
  cursor: default;
}
.number:hover {
  color: #0e6f90 !important;
}
// 模块

.el-tabs {
  width: 100%;
}
.el-tab-pane {
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 1;
}

//左侧信息详情模块

// 中间部分
.center {
  flex: 2;
  margin: 0 20px;
  .box-card {
    margin-bottom: 20px;
  }
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 15px;
  margin-bottom: 20px;
  h2 {
    margin: 0;
    font-size: 20px;
  }
}

.right {
  flex: 1;
  .right_word {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    .el-tag {
      margin-right: 10px;
    }
  }
}
</style>

