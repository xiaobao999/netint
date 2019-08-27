<template>
  <div class="article_main">
    <div class="article_analysis">
      <div class="l_a_left">
        <el-card class="box-card">
          <div class="card_title">
            <h2 class="bluesize">
              <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
              <span>作者</span>
            </h2>
            <span>原文下载</span>
          </div>
          <div class="article">
            <p>{{articlcontent}}</p>
          </div>
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="详细信息" name="first">
              <div id="myChart1" :style="{width: '100%', height: '200px'}"></div>
            </el-tab-pane>
            <el-tab-pane label="相关关系" name="second">
              <div id="myChart2" :style="{width: '100%', height: '200px'}"></div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
      <div class="l_a_right">
        <div>
          <div>
            <span class="iconfont iconwenxianxiaotubiao"></span>
          </div>
          <div>
            <span>998716</span>
            <span>文章数</span>
          </div>
        </div>
        <div>
          <div>
            <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
          </div>
          <div>
            <span>998716</span>
            <span>合作作者数</span>
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
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
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
            <left-list @msgname="getmsg"></left-list>
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
            <my-card :val="val"></my-card>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="less">
.article_main {
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
.iconsousuoshouyeqietuzuozhe {
  font-size: 30px;
}
.iconshijianbiaoyangshitubiao {
  display: inline-block;
  margin-right: 10px;
  font-size: 20px;
}
.bluesize {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #0e6f90;
}
.article_analysis,
.article_list {
  background-color: #fff;
  padding: 20px;
  padding-top: 0;
  .el-tabs--top {
    margin-top: 0;
  }
}
.article_list {
  flex: 1;
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
    .center {
      flex: 4;
    }
    .left {
      flex: 1;
    }
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
      articlcontent: "",
      valueselect: "",
      activeName1: "first",
      activeName2: "first",
      value1: "",
      value2: "",
      command: "排序方式",
      val: ""
    };
  },
  mounted() {
    this.drawLine1();
  },
  methods: {
    handleClick(tab) {
      var that = this;
      if (tab.index == 1) {
        setTimeout(function() {
          that.drawLine2();
        }, 300);
      }
    },
    handleCommand(command) {
      this.command = command;
    },
    getmsg(val) {
      this.val = val;
    },
    drawLine2() {
      let myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        tooltip: {},
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 30,
            roam: false,
            label: {
              position: "top",
              color: "#666",
              show: true,
              textStyle: {
                fontSize: 20
              }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 25
                }
              }
            },
            data: [
              {
                name: "作者",
                x: 400,
                y: 320,
                itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#B1ACEE" // 0% 处的颜色
                      }
                    ]
                  },
                  borderColor: "#7D39C0",
                  borderWidth: "3"
                }
              },
              {
                name: "出版物",
                x: 600,
                y: 340,
                itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#F4B886" // 0% 处的颜色
                      }
                    ]
                  },
                  borderColor: "#EA7503",
                  borderWidth: "3"
                }
              },
              {
                name: "主题词",
                x: 700,
                y: 370,
                itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#81CB80" // 0% 处的颜色
                      }
                    ]
                  },
                  borderColor: "#009E2C",
                  borderWidth: "3"
                }
              },
              {
                name: "机构",
                x: 400,
                y: 400,
                itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#99A2A7" // 0% 处的颜色
                      }
                    ]
                  },
                  borderColor: "#8A9392",
                  borderWidth: "3"
                }
              },
              {
                name: "文献",
                x: 0,
                y: 350,
                itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#7FBACA" // 0% 处的颜色
                      }
                    ]
                  },
                  borderColor: "#007697",
                  borderWidth: "3"
                }
              }
            ],
            // links: [],
            links: [
              {
                source: "文献",
                target: "作者",
                label: {
                  show: true,
                  formatter: "协同",
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              {
                source: "文献",
                target: "出版物",
                label: {
                  show: true,
                  formatter: "协同",
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              {
                source: "文献",
                target: "主题词",
                label: {
                  show: true,
                  formatter: "协同",
                  textStyle: {
                    fontSize: 18
                  }
                }
              },
              {
                source: "文献",
                target: "机构",
                label: {
                  show: true,
                  formatter: "协同",
                  textStyle: {
                    fontSize: 18
                  }
                }
              }
            ]
          }
        ]
      });
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
    goarticle() {
      this.$router.push({
        name: "authordetails"
      });
    },
    goarticledetails() {
      this.$router.push({
        name: "articledetails"
      });
    },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          x: "left",
          data: ["文章数", "被引用数"]
        },
        yAxis: [
          {
            type: "value"
          }
        ],
        xAxis: [
          {
            type: "category",
            data: ["2007年", "2009年", "2011年", "2013年", "2015年", "2017年"]
          }
        ],
        series: [
          {
            name: "文章数",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                label: { show: true, position: "insideRight" },
                color: function() {
                  var colorList = ["#ef8338"];
                  return colorList;
                }
              }
            },
            data: [320, 302, 301, 334, 390, 330]
          },
          {
            name: "被引用数",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                label: { show: true, position: "insideRight" },
                color: function() {
                  var colorList = ["#ddd"];
                  return colorList;
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230]
          }
        ]
      };
      myChart1.setOption(option);
    }
  }
};
</script>
