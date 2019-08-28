<template>
  <div class="literature_main">
    <div class="literature_analysis">
      <div class="l_a_left">
        <h2 class="bluesize">
          <span class="iconfont iconwenxianxiaotubiao"></span>
          <span>文献分析</span>
        </h2>
        <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
      </div>
      <div class="l_a_right">
        <div>
          <div>
            <span class="iconfont iconwenxianxiaotubiao"></span>
          </div>
          <div>
            <span>998716</span>
            <span>文献总数</span>
          </div>
        </div>
        <div>
          <div>
            <span class="iconfont iconyinhaoyangshitubiao"></span>
          </div>
          <div>
            <span>998716</span>
            <span>参考文献</span>
          </div>
        </div>
      </div>
    </div>
    <div class="literature_total">
      <div class="literature_total_title">
        <b class="bluesize">文献总数</b>
        <span>共{{ count }}条相关结果</span>
      </div>
      <div class="literature_total_show">
        <div class="literature_total_color">
          <!-- <div style="flex:{{}}"></div> -->
          <div v-for="(item,i) in proportion" :key="i" :style="{flex:item}"></div>
          <!-- <div></div>
          <div></div>
          <div></div>
          <div></div>-->
        </div>
        <div class="literature_total_publication">
          <div>
            <i></i>
            <div>
              <div>预定</div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <div>书章</div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <div>会议</div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <div>其他</div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <div>专利</div>
              <div>20%</div>
            </div>
          </div>
          <div>
            <i></i>
            <div>
              <div>期刊</div>
              <div>20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="literature_details">
      <li>
        <h2 class="bluesize">主要作者</h2>
        <dl>
          <dd
            v-for="(item,i) in topauthors"
            :key="i"
            @click="goarticle('author',item.id)"
          >{{item.name}}</dd>
        </dl>
      </li>
      <li>
        <h2 class="bluesize">主要机构</h2>
        <dl>
          <dd
            v-for="(item,i) in topinstitutions"
            :key="i"
            @click="goarticle('theme',item.id)"
          >{{item.name}}</dd>
        </dl>
      </li>
      <li>
        <h2 class="bluesize">重要主题</h2>
        <dl>
          <dd
            v-for="(item,i) in topjournals"
            :key="i"
            @click="goarticle('publication',item.id)"
          >{{item.name}}</dd>
        </dl>
      </li>
      <li>
        <h2 class="bluesize">主要文献</h2>
        <dl>
          <dd
            v-for="(item,i) in topconferences"
            :key="i"
            @click="goarticle('mechanism',item.id)"
          >{{item.name}}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.literature_main {
  background-color: #f6f6f6;
  width: 80%;
  margin: 0 auto;
}
.iconwenxianxiaotubiao {
  font-size: 22px;
}
.bluesize {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #0e6f90;
}
.literature_analysis,
.literature_total {
  background-color: #fff;
  padding: 40px;
  margin-bottom: 10px;
}
.literature_analysis {
  display: flex;
  .l_a_left {
    flex: 3;
    display: flex;
    flex-direction: column;
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
.literature_total {
  .literature_total_title,
  .literature_total_publication {
    display: flex;
    justify-content: space-between;
  }
  .literature_total_show {
    .literature_total_color {
      margin: 30px 0;
      height: 30px;
      width: 100%;
      display: flex;
      div:nth-child(1) {
        background-color: #017398;
      }
      div:nth-child(2) {
        background-color: #348fae;
      }
      div:nth-child(3) {
        background-color: #7fbaca;
      }
      div:nth-child(4) {
        background-color: #f6b68a;
      }
      div:nth-child(5) {
        background-color: #f16b12;
      }
      div:nth-child(6) {
        background-color: #6f6f6f;
      }
    }
    .literature_total_publication {
      justify-content: start;
      div {
        flex: 1;
        display: flex;
        align-items: top;
        flex-wrap: wrap;
        i {
          margin: 3px 10px 0 0;
          width: 16px;
          height: 16px;
        }
        div {
          display: flex;
          flex-direction: column;
        }
      }
      div:nth-child(1) {
        i {
          background-color: #017398;
        }
      }
      div:nth-child(2) {
        i {
          background-color: #348fae;
        }
      }
      div:nth-child(3) {
        i {
          background-color: #7fbaca;
        }
      }
      div:nth-child(4) {
        i {
          background-color: #f6b68a;
        }
      }
      div:nth-child(5) {
        i {
          background-color: #f16b12;
        }
      }
      div:nth-child(6) {
        i {
          background-color: #6f6f6f;
        }
      }
    }
  }
}
.literature_details {
  display: flex;
  justify-content: space-between;
}
.literature_details li {
  padding: 25px 40px;
  background-color: #fff;
  width: 25%;
  margin-right: 10px;
}
.literature_details li:nth-last-child(1) {
  margin-right: 0;
}
.literature_details dd {
  margin: 15px 0;
}
.literature_details dd:hover {
  color: #ef8338;
  cursor: pointer;
}
</style>
<script>
export default {
  created() {
    this.getdata();
  },
  data() {
    return {
      ulList: [],
      count: 0,
      proportion: [],
      topauthors: [],
      topinstitutions: [],
      topjournals: [],
      topconferences: []
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    async getdata() {
      const res = await this.$http.get("chubanwu");
      if (res.status == 200) {
        this.proportion = res.data.baifenbi;
        let arr = [];
        for (let i = 0, l = res.data.baifenbi.length; i < l; i++) {
          arr.push(res.data.baifenbi[i].count);
        }
        this.proportion = arr;
        this.topauthors = res.data.topauthors;
        this.topinstitutions = res.data.topinstitutions;
        this.topconferences = res.data.topconferences;
        this.topjournals = res.data.topjournals;
        this.count = res.data.count;
      }
    },
    //传ID，自己获取点的是什么状态
    goarticle(state, id) {
      this.$router.push({
        path: `/leveltow#${state}=${id}`
      });
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          boundaryGap: false,
          type: "category",
          data: [
            1800,
            1810,
            1820,
            1830,
            1840,
            1850,
            1860,
            1870,
            1880,
            1890,
            1900,
            1910,
            1920,
            1930,
            1940,
            1950,
            1960,
            1970,
            1980,
            1990,
            2000,
            2010
          ]
        },
        yAxis: {
          splitLine: {
            show: false
          },
          type: "value"
        },
        series: [
          {
            data: [
              220,
              182,
              191,
              234,
              290,
              330,
              310,
              123,
              442,
              321,
              90,
              149,
              210,
              122,
              133,
              334,
              198,
              123,
              125,
              220,
              123,
              125,
              220
            ],
            areaStyle: {},
            type: "line",
            smooth: true,
            color: ["#0e6f90"],
            symbolSize: 2
          }
        ]
      });
      this.$http.get("http://localhost:53000/course").then(res => {
        const data = res.data;
        myChart.setOption({
          xAxis: [
            {
              data: [
                data[1].id,
                1810,
                1820,
                1830,
                1840,
                1850,
                1860,
                1870,
                1880,
                1890,
                1900,
                1910,
                1920,
                1930,
                1940,
                1950,
                1960,
                1970,
                1980,
                1990,
                2000,
                2010
              ]
            }
          ]
        });
      });
    }
  }
};
</script>




