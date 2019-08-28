<template>
  <div class="author_main">
    <div class="author_analysis">
      <div class="l_a_left">
        <h2 class="bluesize">
          <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
          <span>作者分析</span>
        </h2>
        <div>文章内容</div>
      </div>
      <div class="l_a_right">
        <div>
          <div>
            <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
          </div>
          <div>
            <span>998716</span>
            <span>合作作者数</span>
          </div>
        </div>
      </div>
    </div>
    <div class="author_list">
      <h2 class="bluesize">主要作者</h2>
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
.author_list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      authorlist: []
    };
  },
  created() {
    this.getauthorlist();
  },
  methods: {
    goarticle(id) {
      this.$router.push({
        path: `authordetails?${id}`
      });
    },
    async getauthorlist() {
      const res = await this.$http.get(`authorshow`);
      this.authorlist = res.data;
    }
  }
};
</script>
