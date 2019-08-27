<template>
  <el-card class="box-card">
    <div class="card_title">
      <h2 class="bluesize">
        <span>{{msg}}</span>
      </h2>
      <span>原文下载</span>
    </div>
    <ul class="writer">
      <li v-for="(item,i) in writerlist" :key="i" @click="goarticle">{{item}}</li>
      <li @click="writermore">{{morewrite}}</li>
    </ul>
    <ul class="mechanism">
      <li v-for="(item,i) in mechanismlist" :key="i" @click="goarticle">{{item}}</li>
      <li @click="mechanismmore">{{moremechanism}}</li>
    </ul>
    <ul class="mechanism">
      <li v-for="(item,i) in keywordlist" :key="i" @click="goarticledetails">
        <el-tag type="info">{{item}}</el-tag>
      </li>
      <li>
        <el-tag type="info" @click="keywordlistmmore">{{morekeyword}}</el-tag>
      </li>
    </ul>
    <div class="article">
      <p>{{articlcontent}}</p>
    </div>
    <div class="card_bottom">
      <div>
        <span>年份：</span>
        <span>{{years}}</span>
        <span style="margin-left:20px;">被引用量：</span>
        <span>{{cited}}</span>
      </div>
      <div>出版物文本</div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "MyCard",
  props: ["val"],
  data() {
    return {
      msg: "",
      morewrite: "",
      moremechanism: "",
      morekeyword: "",
      writerlist: [],
      mechanismlist: [],
      keywordlist: [],
      years: "",
      cited: "",
      articlcontent: ""
    };
  },
  created() {
    this.getdata();
  },
  watch: {
    async val() {
      const res = await this.$http.get("articlelist2");
      if (res.status == 200) {
        const { data } = res;
        //console.log(data);
        //publication  author  theme  mechanism
        this.msg = data.msg;
        this.years = data.years;
        this.cited = data.cited;
        this.articlcontent = data.articlcontent;
        this.writerlist = data.writerlist;
        this.keywordlist = data.keywordlist;
        this.mechanismlist = data.mechanismlist;
        this.morewrite = data.morewrite;
        this.moremechanism = data.moremechanism;
        this.morekeyword = data.morekeyword;
      }
    }
  },
  methods: {
    async getdata() {
      const res = await this.$http.get("articlelist1");
      if (res.status == 200) {
        const { data } = res;
        //console.log(data);
        //publication  author  theme  mechanism
        this.msg = data.msg;
        this.years = data.years;
        this.cited = data.cited;
        this.articlcontent = data.articlcontent;
        this.writerlist = data.writerlist;
        this.keywordlist = data.keywordlist;
        this.mechanismlist = data.mechanismlist;
        this.morewrite = data.morewrite;
        this.moremechanism = data.moremechanism;
        this.morekeyword = data.morekeyword;
      }
    },
    //判断作者  ，机构  ，关键字  长度截取长度事件实现展开隐藏功能
    writermore() {
      if (this.morewrite != "收起") {
        this.morewrite = "收起";
        for (let i = 0; i < 5; i++) {
          this.writerlist.push("王五");
        }
      } else {
        this.morewrite = "+5";
        this.writerlist.splice(5);
      }
    },
    mechanismmore() {
      if (this.moremechanism != "收起") {
        this.moremechanism = "收起";
        for (let i = 0; i < 5; i++) {
          this.mechanismlist.push("戊");
        }
      } else {
        this.moremechanism = "+5";
        this.mechanismlist.splice(5);
      }
    },
    keywordlistmmore() {
      if (this.morekeyword != "收起") {
        this.morekeyword = "收起";
        for (let i = 0; i < 5; i++) {
          this.keywordlist.push("更多的关键字");
        }
      } else {
        this.morekeyword = "更多";
        this.keywordlist.splice(5);
      }
    },
    goarticledetails() {
      this.$router.push({
        name: "articledetails"
      });
    },
    goarticle() {
      this.$router.push({
        name: "authordetails"
      });
    }
  }
};
</script>
<style lang="less">
.box-card {
  .article {
    color: #3f3f3f;
  }
  .writer li,
  .mechanism li {
    margin-right: 20px;
    color: #666;
  }
  .writer li:hover,
  .mechanism li:hover {
    color: #f46d11;
    cursor: pointer;
  }
  .writer,
  .mechanism,
  .key_word {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    li {
      margin-right: 10px;
    }
    .el-tag {
      margin-bottom: 10px;
      background-color: #eeeeee;
      border: none;
      border-radius: 0;
      color: #454545;
    }
    .el-tag:hover {
      color: #f46d11;
    }
  }
}
.card_bottom {
  font-size: 14px;
  color: #7a7a7a;
  display: flex;
  justify-content: space-between;
}
</style>