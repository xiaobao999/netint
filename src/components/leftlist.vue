<template>
  <div>
    <h2 class="bluesize" v-if="(state=='theme')">
      <span class="iconfont iconsousuoshouyeqietuzhuti"></span>
      <span>主题</span>
    </h2>
    <h2 class="bluesize" v-if="(state=='author')">
      <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
      <span>作者</span>
    </h2>
    <h2 class="bluesize" v-if="(state=='publication')">
      <span class="iconfont iconsousuoshouyeqietuchubanshe"></span>
      <span>出版物</span>
    </h2>
    <h2 class="bluesize" v-if="(state=='mechanism')">
      <span class="iconfont iconsousuoshouyeqietujigou"></span>
      <span>机构</span>
    </h2>
    <ul class="module_label">
      <li v-for="(item,i) in le_d" :key="i" @click="passname(item.name)">
        <el-checkbox v-model="item.checked"></el-checkbox>
        <div class="details">
          <div>
            <span>{{item.name}}</span>
            <span>{{item.num}}</span>
          </div>
          <el-progress :percentage="item.Percentage" :show-text="false"></el-progress>
        </div>
      </li>
      <li>
        <el-button type="info" @click="le_d_more">{{morbtn}}</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftList",
  props: [],
  data() {
    return {
      state: "",
      checked1: "",
      morbtn: "加载更多",
      le_d: ""
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    passname(n) {
      this.$emit("msgname", n);
    },
    async getdata() {
      const res = await this.$http.get("leftlist");
      if (res.status == 200) {
        const { data } = res;
        //publication  author  theme  mechanism
        this.state = "theme";
        this.le_d = data.le_d;
      }
    },
    le_d_more() {
      if (this.morbtn == "加载更多") {
        this.morbtn = "收起";
        this.le_d = [
          { name: "张三", num: "4.8万", checked: "", Percentage: 60 },
          { name: "李四", num: "4.8万", checked: "", Percentage: 20 },
          { name: "张三", num: "4.8万", checked: "", Percentage: 80 },
          { name: "张三", num: "4.8万", checked: "", Percentage: 60 },
          { name: "李四", num: "4.8万", checked: "", Percentage: 20 },
          { name: "张三", num: "4.8万", checked: "", Percentage: 80 }
        ];
      } else {
        this.morbtn = "加载更多";
        this.le_d = [
          { name: "张三", num: "4.8万", checked: "", Percentage: 60 },
          { name: "李四", num: "4.8万", checked: "", Percentage: 20 },
          { name: "张三", num: "4.8万", checked: "", Percentage: 80 }
        ];
      }
    }
  }
};
</script>
<style lang="less">
.bluesize {
  font-size: 20px;
  color: #0e6f90;
}
.iconshijianbiaoyangshitubiao {
  font-size: 24px;
}
.left {
  .iconfont {
    font-size: 28px;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #f46d11 !important;
    border-color: #f46d11 !important;
  }
  .el-checkbox__inner {
    width: 20px;
    height: 20px;
  }
  .el-checkbox__inner::after {
    height: 12px;
    left: 7px;
  }
}
.module_label {
  li {
    display: flex;
    width: 100%;
    .details {
      width: 100%;
      div:nth-child(1) {
        margin-bottom: 10px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
    .el-button {
      width: 100%;
      background-color: #e2e2e2 !important;
      color: #2475a0 !important;
      height: 36px;
      padding: 0;
      border-radius: 0;
    }
  }
}
.el-button--info {
  border-color: none !important;
}
.el-progress-bar__inner {
  background-color: #007398 !important;
}
</style>