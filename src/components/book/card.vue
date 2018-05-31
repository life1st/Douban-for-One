<template>
  <div class="subject-card">
    <div class="pic">
      <a :href="subjectLink">
        <img :src="subject.img" :alt="subject.type">
      </a>
    </div>
    <div class="content">
      <div class="title">
        <a :href="subjectLink">{{subject.name}}</a>
        <star :action="action" :ratingPoint="subject.rating"></star>
      </div>
      <div class="desc">
        {{subject.summary | cut}}
      </div>
      <ul class="info">
        <li v-for="(item,index) in subject.info" :key="index">
          {{item[0]}}:{{item[1]}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import star from '../../assets/baseComponents/star'
  export default {
    name: 'subjectCard',
    props: {
      subject: {
        type: Object,
        default() {
          return {
            type: 'movie',
            id: '000000',
            name: '测试名称‎ (2014)',
            rating: 8.2,
            desc: 'bababababababababababababa...',
            info: [
              ['导演', '** --- ++'],
              ['主演', '** ---- ++'],
              ['类型', '剧情']
            ],
            img: 'https://img3.doubanio.com/view/status/small/public/17AluJ.webp'
          }
        }
      }
    },
    data() {
      return {
        action: {
          type: 'gold',
          showNum: true
        },
      }
    },
    filters: {
      cut(text) {
        if (text &&text.length > 50) {
          return text.slice(0, 50) + '...'
        } else {
          return text
        }
      }
    },
    computed: {
      subjectLink() {
        let baseUrl = {
          'movie': 'https://movie.douban.com/book/',
          'book': 'https://book.douban.com/book/'
        }

        return `${baseUrl[this.subject.type]}${this.subject.id}/`
      }
    },
    components: {
      star
    }
  }
</script>

<style scoped lang="less">
  .subject-card {
    background-color: #f9f9f9;
    padding: 16px 20px;
    line-height: 1.62;
    .pic {
      float: right;
      width: 75px;
      height: 100px;
      background-color: #fff;
    }
    .content {
      width: 419px;
      .title {
        font-size: 15px;
        margin-bottom: 4px;
      }
      .desc {
      }
      .info {
        margin-top: 4px;
        padding-left: 7px;
        position: relative;
        color: #555;
        font-size: 13px;
        &::before {
          content: '';
          height: 90%;
          border-left: 2px solid #ddd;
          position: absolute;
          top: 2px;
          left: 0;
        }
      }
    }
  }
</style>