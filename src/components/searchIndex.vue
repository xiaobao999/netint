<template>
  <div class="main">
    <div class="logo">
      <img src="../assets/搜索页大logo.png" />
      <div style="margin-top: 15px;width:800px; border:2px solid #007398;">
        <el-input placeholder="请输入内容" v-model="input" class="input_with_select">
          <el-button slot="append" icon="el-icon-search" @click="articledetails"></el-button>
        </el-input>
      </div>
      <div class="search_history">
        <span>搜索历史:</span>
        <ul>
          <li>记录1</li>
          <li>记录2</li>
          <li>记录3</li>
          <li>记录4</li>
          <li>记录5</li>
        </ul>
      </div>
    </div>

    <ul class="bottom">
      <li @click="literature">
        <div>
          <span class="iconfont iconsousuoshouyeqietuwenxian"></span>
        </div>
        <h3>文献</h3>
        <span>20,045,213</span>
      </li>
      <li @click="author('author')">
        <div>
          <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
        </div>
        <h3>作者</h3>
        <span>19,045,213</span>
      </li>
      <li @click="author('theme')">
        <div>
          <span class="iconfont iconsousuoshouyeqietuzhuti"></span>
        </div>
        <h3>主题</h3>
        <span>25,213</span>
      </li>
      <li @click="author('publication')">
        <div>
          <span class="iconfont iconsousuoshouyeqietuchubanshe"></span>
        </div>
        <h3>出版物</h3>
        <span>225,213</span>
      </li>
      <li @click="author('mechanism')">
        <div>
          <span class="iconfont iconsousuoshouyeqietujigou"></span>
        </div>
        <h3>机构</h3>
        <span>23,025,213</span>
      </li>
      <li @click="visualization">
        <div>
          <span class="iconfont iconsousuoshouyeqietukeshihuazhanshi"></span>
        </div>
        <h3>可视化展示</h3>
        <span>5,213</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: "1"
    };
  },
  methods: {
    visualization() {
      this.$router.push({
        name: "visualization"
      });
    },
    author(n) {
      this.$router.push({
        path: n
      });
    },
    literature() {
      this.$router.push({
        name: "literature"
      });
    },
    articledetails() {
      //console.log(this.input);
      this.$router.push({
        path: `details#${this.input}`
      });
    }
  }
};
</script>
<style lang="less">
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo {
  text-align: center;
  img {
    margin-top: 150px;
  }
  .el-select .el-input {
    width: 80px;
    color: #007398;
  }
  input {
    height: 50px;
    line-height: 50px;
  }
  .input_with_select .el-input-group__prepend {
    background-color: #fff;
  }
  .input_with_select {
    height: 50px;
  }
  .el-input-group--append .el-input__inner,
  .el-input-group__prepend,
  .el-input-group--prepend .el-input__inner,
  .el-input-group__append {
    border-radius: 0px;
  }
  .el-input__inner {
    border: none;
  }
  .el-input-group__append {
    background-color: #e9711b;
    i {
      font-size: 20px;
      color: #fff;
    }
  }
}
.el-select-dropdown {
  .el-select-dropdown__item.selected {
    color: #007398;
    font-weight: 700;
  }
}
.search_history {
  text-align: left;
  margin: 15px 20px;
  display: flex;
  span {
    width: 80px;
    color: #343436;
  }
  ul {
    width: 100%;
    display: flex;
    li {
      padding-left: 15px;
      width: 20%;
      flex: 1;
    }
  }
}
.bottom {
  display: flex;
  height: 220px;
  align-items: flex-end;
  justify-content: center;
}

.bottom li {
  width: 190px;
  height: 190px;
  margin: 0 5px;
  list-style: none;
  text-align: center;
  background-color: #f3f3f3;
}

.bottom li div:nth-child(1) {
  width: 45px;
  height: 45px;
  margin: 40px auto 0;
  background-color: #007398;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom h3 {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.bottom .iconfont {
  font-size: 32px;
  color: #fff;
}

.bottom li:hover {
  border-top: 3px solid #007398;
  height: 220px;
  transition: all 0.5s ease-in-out;
}

.bottom li:hover div {
  transform-origin: center center;
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
}

.bottom li:hover span {
  transform-origin: center center;
  transform: rotate(-45deg);
  transition: all 0.5s ease-in-out;
}
</style>


