<template>
  <div class="search_main">
    <div class="nav">
      <div>
        <ul class="logo">
          <li @click="gohome">
            <span class="iconfont iconlogo"></span>
          </li>
        </ul>
        <div class="search_head">
          <el-input placeholder="请输入内容" v-model="input" class="input_with_select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="文献" value="1"></el-option>
              <el-option label="作者" value="2"></el-option>
              <el-option label="机构" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <ul class="user">
          <li>
            <a href="#">
              <span class="iconfont iconyonghu"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="iconfont icontuichu"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: "文献",
      value1: "",
      value2: "",
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: false,
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
      ],
      valueselect: ""
    };
  },
  methods: {
    gohome() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style lang="less">
.bluesize {
  font-size: 20px;
  color: #0e6f90;
}
.search_main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nav {
  width: 100%;
  height: 60px;
  background-color: #007398;
}
.nav .iconfont {
  font-size: 20px;
  color: #fff;
}
.nav > div {
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin: 0 auto;
  line-height: 60px;
}
.logo {
  li {
    span:hover {
      color: #f46d11;
    }
  }
  li:hover {
    cursor: pointer;
  }
}
.search_head {
  width: 800px;
  .el-select .el-input {
    width: 100px;
    color: #007398;
  }
  .input_with_select .el-input-group__prepend {
    background-color: #fff;
    border: none;
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
    background-color: #fff;
    i {
      font-size: 20px;
      color: #017398;
    }
  }
}
.nav ul {
  display: flex;
}
.user {
  li {
    margin-left: 15px;
  }
}
.search_main_content {
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .left,
  .center,
  .right {
    height: 100%;
  }
}
.footer {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e7e7e7;
}
</style>

