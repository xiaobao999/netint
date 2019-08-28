<template>
  <div class="author_main">
    <div class="author_analysis">
      <div class="l_a_left">
        <h2 class="bluesize" v-if="state=='author'">
          <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
          <span>作者分析</span>
        </h2>
        <h2 class="bluesize" v-if="state=='theme'">
          <span class="iconfont iconsousuoshouyeqietuzhuti"></span>
          <span>主题分析</span>
        </h2>
        <h2 class="bluesize" v-if="state=='publication'">
          <span class="iconfont iconsousuoshouyeqietuchubanshe"></span>
          <span>出版物分析</span>
        </h2>
        <h2 class="bluesize" v-if="state=='mechanism'">
          <span class="iconfont iconsousuoshouyeqietujigou"></span>
          <span>机构分析</span>
        </h2>
        <div>{{msg}}</div>
      </div>
      <div class="l_a_right">
        <div>
          <div>
            <span class="iconfont iconsousuoshouyeqietuzuozhe" v-if="state=='author'"></span>
            <span class="iconfont iconsousuoshouyeqietuzhuti" v-if="state=='theme'"></span>
            <span class="iconfont iconsousuoshouyeqietuchubanshe" v-if="state=='publication'"></span>
            <span class="iconfont iconsousuoshouyeqietujigou" v-if="state=='mechanism'"></span>
          </div>
          <div>
            <span>{{Total}}</span>
            <span v-if="state=='author'">合作作者总数</span>
            <span v-if="state=='theme'">热门主题总数</span>
            <span v-if="state=='publication'">出版物总数</span>
            <span v-if="state=='mechanism'">机构总数</span>
          </div>
        </div>
      </div>
    </div>
    <div class="author_list">
      <h2 class="bluesize" v-if="state=='author'">主要作者</h2>
      <h2 class="bluesize" v-if="state=='theme'">热门主题</h2>
      <h2 class="bluesize" v-if="state=='publication'">主要出版物</h2>
      <h2 class="bluesize" v-if="state=='mechanism'">主要机构</h2>
      <ul>
        <li
          v-for="(item,i) in authorlist"
          :key="i"
          @click="goarticle(item.id)"
        >{{i+1}} . {{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
.author_main {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
.bluesize {
  font-size: 20px;
  color: #0e6f90;
  .iconfont {
    font-size: 30px;
  }
}
.author_analysis,
.author_list {
  background-color: #fff;
  padding: 40px;
  margin-bottom: 10px;
  li:hover {
    color: #ef8338;
    cursor: pointer;
  }
}
.author_analysis {
  display: flex;
  .l_a_left {
    flex: 3;
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
      font-size: 50px !important;
    }
  }
}
.author_list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      overflow: hidden;
      height: 25px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      Total: "",
      msg: "",
      state: "",
      authorlist: []
    };
  },
  created() {
    this.getUrl();
  },
  methods: {
    async getUrl() {
      const Url = this.$route.name;
      this.state = Url;
      const res = await this.$http.get(`${Url}`);
      this.authorlist = res.data.list;
      this.msg = res.data.msg;
      this.Total = res.data.Total;
      console.log(res.data);
    },
    goarticle(id) {
      this.$router.push({
        path: `authordetails?${id}`
      });
    }
  }
};
</script>
