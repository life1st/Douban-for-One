<template>
  <div class="subject">
    <div class="content">
      <h1>
        <span class="name">{{subject.name}}</span>
        <span class="year">({{subject.year}})</span>
      </h1>
      <div class="article">
        <div class="info">
          <div class="avatar">
            <img :src="subject.img" alt="海报">
          </div>
          <ul class="detail">
            <li v-for="(val, key) in subject.details" :key="key">
              <span class="type">{{key}}</span>:
              <span class="text" v-for="(item, i) in val" :key="i"><span href="#">{{item}}</span> <i v-if="val.length > 1">/ </i></span>
            </li>
          </ul>
          <div class="public-rating">
            评分
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'subject',
    props: {
      subject: {
        type: Object,
        default() {
          return {
            name: '于特岛青年 Til ungdommen ',
            year: 2012,
            img: ' ',
            details: {
              '导演': ['Kari Anne Moe'],
              '编剧': ['Kari Anne Moe'],
              '主演': ['Henrik Wangberg', 'Sana El Morabit', ' Johanne Butenschøn Lindheim |', 'See full cast and crew'],
              'type': ['纪录片'],
              '官方网站': ['http://braveheartsthemovie.com'],
              '制片国家/地区': ['挪威 Norway'],
              '语言': ['挪威语 Norwegian'],
              '上映日期': ['2012-08-31(挪威)'],
              '片长': ['118分钟'],
              '又名': ['Bravehearts'],
              'IMDb链接': ['tt2235428']
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/verb.less";

  .subject {
    width: @base-content-width;
    margin: 0 auto;
    font: 12px Arial, Helvetica, sans-serif;
    h1 {
      margin-bottom: 15px;
    }
    .year {
      color: #888;
    }
    .article {
      .info {
        display: flex;
        .avatar {
          width: 135px;
          height: 200px;
          margin: 3px 15px 0 0;
          overflow: hidden;
          img {
            display: inline-block;
            height: 190px;
            border-right: 1px solid #A29FA2;
          }
        }
      }
      .detail {
        width: 333px;
        font-size: 13px;
        line-height: 1.62;
        color: #666;
        .text {
          color: #111;
        }
      }
      .public-rating {
        height: 171px;

        padding-left: 15px;
        border-left: 1px solid #eaeaea;
      }
    }
  }

</style>