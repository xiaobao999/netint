<template>
  <el-card class="box-card">
    <div slot="header" class="righthead">
      <div>
        <span class="iconfont iconsousuoshouyeqietuzuozhe"></span>
        <span>{{name}}</span>
      </div>
      <span>{{mechanism}}</span>
    </div>
    <div>{{introduce}}</div>
    <div>{{Sbjcontent}}</div>
    <span v-for="(item,index) in publication" :key="index">{{item}}</span>
  </el-card>
</template>
<script>
export default {
  name: "RightList",
  props: ["val"],
  data() {
    return {
      name: "",
      mechanism: "",
      introduce: "",
      Sbjcontent: "",
      publication: []
    };
  },
  created() {
    this.getdata();
    this.getprop();
  },
  methods: {
    async getdata() {
      const res = await this.$http.get("rightlist1");
      if (res.status == 200) {
        const { data } = res;
        this.name = data.name;
        this.mechanism = data.mechanism;
        this.introduce = data.introduce;
        this.Sbjcontent = data.Sbjcontent;
        this.publication = data.publication;
      }
    },
    getprop() {
      console.log(this.val);
      // console.log(this)
    }
  },
  watch: {
    async val() {
      const res = await this.$http.get("rightlist2");
      if (res.status == 200) {
        const { data } = res;
        this.name = data.name;
        this.mechanism = data.mechanism;
        this.introduce = data.introduce;
        this.Sbjcontent = data.Sbjcontent;
        this.publication = data.publication;
      }
    }
  }
};
</script>
<style lang="less">
.box-card {
  margin-bottom: 20px;
}
.el-card__header,
.el-card__body {
  padding: 10px;
  div {
    color: #939393;
    font-size: 14px;
  }
  > span {
    color: #939393;
    font-size: 14px;
  }
}
.righthead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    .iconfont {
      color: #0e6f90;
    }
  }
}
</style>