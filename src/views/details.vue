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
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- 左侧信息详情模块 -->
          <left-list @msgname="getmsg" v-for="(item,i) in leftlist" :key="i" :state="item"></left-list>
        </div>
        <!-- 中间详情 -->
        <div class="center">
          <div class="title">
            <span>共{{cardlist.length}}条相关结果</span>
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
      <el-tab-pane label="作者相关" name="second" class="author-related">
        <div class="left">
          <h2 class="bluesize">
            <span class="iconfont iconshijianbiaoyangshitubiao"></span>
            <span>时间</span>
          </h2>
          <div class="block">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- 左侧信息详情模块 -->
          <left-list @msgname="getmsg" v-for="(item,i) in leftlist" :key="i" :state="item"></left-list>
        </div>
        <div class="center">
          <div class="title">
            <span>共{{rightlist.length}}条相关结果</span>
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
          <right-list :val="val" v-for="(item,i) in rightlist" :key="i"></right-list>
          <el-pagination background layout="prev, pager, next" :total="300"></el-pagination>
        </div>
      </el-tab-pane>
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
      rightlist: [1, 2],
      activeName1: "first",
      input: "",
      select: "文献",
      command: "请选择",
      val: "",
      options: [
        {
          value: "2019",
          label: "2019年"
        },
        {
          value: "2018",
          label: "2018年"
        },
        {
          value: "2017",
          label: "2017年"
        },
        {
          value: "2016",
          label: "2016年"
        },
        {
          value: "2015",
          label: "2015年"
        }
      ],
      value: ""
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
.block {
  .el-select {
    width: 100%;
  }
}
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
.author-related {
  display: flex;
  .left {
    flex: 1;
  }
  .center {
    flex: 3;
  }
}
</style>

