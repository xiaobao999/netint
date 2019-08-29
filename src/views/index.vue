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
      valueselect: ""
    };
  },
  methods: {
    // getUrl() {
    //   const Url = this.$route.hash;
    //   this.input = Url;
    //   console.log(this.$route);
    // },
    gohome() {
      this.$router.push({
        path: `/`
      });
    }
  },
  watch: {
    async $route() {
      const path = this.$route.path;
      if (path == "/leveltow") {
        const Url = this.$route.hash;
        let str = Url.slice(1);
        str = str.split("=");
        //console.log(str);
        this.state = str[0];
        const res = await this.$http.get(`${str[0]}`);
        if (res.status == 200) {
          const list = res.data.list;
          const obj = list.find(function(item) {
            if (item.id == str[1]) {
              return item;
            }
          });
          this.input = obj.name;
        }
      }
      if (
        path == "/literature" ||
        path == "/author" ||
        path == "/theme" ||
        path == "/mechanism" ||
        path == "/publication" ||
        path == "/visualization"
      ) {
        this.input = "";
      }
      if (path == "/levelthree") {
        const Url = this.$route.hash;
        let str = Url.slice(1);
        this.input = str;
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

