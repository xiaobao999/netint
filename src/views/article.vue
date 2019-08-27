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
            <div>
              <h2 class="bluesize">
                <span class="iconfont iconsousuoshouyeqietuzhuti"></span>
                <span>主题</span>
              </h2>
              <ul class="module_label">
                <li v-for="(item,i) in le_d" :key="i">
                  <el-checkbox v-model="checked1"></el-checkbox>
                  <div class="details">
                    <div>
                      <span>{{item.name}}</span>
                      <span>{{item.num}}</span>
                    </div>
                    <el-progress :percentage="80" :show-text="false"></el-progress>
                  </div>
                </li>
                <li>
                  <el-button type="info" @click="le_d_more">加载更多</el-button>
                </li>
              </ul>
            </div>
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
                  <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                  <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                  <el-dropdown-item command="双皮奶">双皮奶</el-dropdown-item>
                  <el-dropdown-item command="蚵仔煎">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <el-card class="box-card">
              <div class="card_title">
                <h2 class="bluesize">
                  <span class="iconfont iconwenxianxiaotubiao"></span>
                  <span>文章标题</span>
                </h2>
                <span>原文下载</span>
              </div>
              <ul class="writer">
                <li v-for="(item,i) in writerlist" :key="i" @click="goarticle">{{item}}</li>
                <li @click="writermore">+5</li>
              </ul>
              <ul class="mechanism">
                <li v-for="(item,i) in mechanismlist" :key="i" @click="goarticle">{{item}}</li>
                <li @click="mechanismmore">+5</li>
              </ul>
              <ul class="mechanism">
                <li v-for="(item,i) in keywordlist" :key="i" @click="goarticledetails">
                  <el-tag type="info">{{item}}</el-tag>
                </li>
                <li>
                  <el-tag type="info" @click="keywordlistmmore">更多</el-tag>
                </li>
              </ul>
              <div class="article">
                <p>{{articlcontent}}</p>
              </div>
              <div class="card_bottom">
                <div>
                  <span>年份：</span>
                  <span>2019</span>
                  <span style="margin-left:20px;">被引用量：</span>
                  <span>2020</span>
                </div>
                <div>出版物文本</div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="less">
.article_main {
  background-color: #f6f6f6;
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
      le_d: [
        { name: "张三", num: "4.8万" },
        { name: "李四", num: "4.8万" },
        { name: "张三", num: "4.8万" }
      ],
      valueselect: "",
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: false,
      activeName: "first",
      value1: "",
      value2: "",
      command: "排序方式",
      writerlist: ["张三", "李四", "王五"],
      mechanismlist: ["甲", "乙", "丙", "丁"],
      keywordlist: ["关键字啊", "关键字"],
      articlcontent:
        "Abstract 2273: Serum choline, methionine, betaine, dimethylglycine, and trimethylamine-N-oxide in relation to pancreatic cancer risk in two nested case-control studies in Asian populations",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleClick() {},
    handleCommand(command) {
      this.command = command;
    },
    le_d_more() {
      this.le_d = [
        { name: "张三", num: "4.8万" },
        { name: "李四", num: "4.8万" },
        { name: "张三", num: "4.8万" },
        { name: "张三", num: "4.8万" },
        { name: "李四", num: "4.8万" },
        { name: "张三", num: "4.8万" }
      ];
    },
    writermore() {
      for (let i = 0; i < 5; i++) {
        this.writerlist.push("王五");
      }
    },
    mechanismmore() {
      for (let i = 0; i < 5; i++) {
        this.mechanismlist.push("戊");
      }
    },
    keywordlistmmore() {
      for (let i = 0; i < 5; i++) {
        this.keywordlist.push("更多的关键字");
      }
    },
    goarticle() {
      this.$router.push({
        name: "authordetails"
      });
    },
    goarticledetails() {
      this.$router.push({
        name: "articledetails"
      });
    }
  }
};
</script>
