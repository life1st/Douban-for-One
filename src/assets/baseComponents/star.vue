<template>
  <ul class="star-list" v-if="action.type === 'grey'">
    <li v-for="i in ratingPoint.personal" :key="i" class="star">★</li>
  </ul>
  <span v-else-if="action.type === 'gold'">
    <ul class="star-list">
      <li v-for="i in totalPoint" :key="i" class="star-gold" :class="starType(i)"></li>
    </ul>
    <span class="num" v-if="action.showNum">
      {{ratingPoint.people}}
    </span>
  </span>
</template>

<script>
  export default {
    name: 'star',
    props: {
      totalPoint: {
        type: Number,
        default() {
          return 5
        }
      },
      ratingPoint: {
        type: Object,
        default() {
          return {
            people: 8,
            personal: 5
          }
        }
      },
      action: {
        type: Object,
        default() {
          return {
            type: 'grey',
            showNum: false
          }
        }
      }
    },
    methods: {
      starType(i) {
        let point = this.ratingPoint.people / 2

        if (i < Math.floor(point)) {
          return 'gold'
        } else if (i === Math.floor(point)) {
          if (point % 1 === 0) {
            return 'gold'
          } else {
            return 'half'
          }
        } else {
          return 'null'
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .star-list {
    display: inline-flex;
    flex-direction: row;
    margin-right: 4px;
    .star {
      font-size: 14px;
    }
    .star-gold {
      width: 11px;
      height: 11px;
      &.gold {
        background: url("../img/star/gold-all-sm.png") center no-repeat;
        background-size: 11px 11px;
      }
      &.half {
        background: url("../img/star/gold-half-sm.png") center no-repeat;
        background-size: 11px 11px;
      }
      &.null {
        background: url("../img/star/gold-null-sm.png") center no-repeat;
        background-size: 11px 11px;
      }
    }
  }
  .num {
    color: #e09015;
    font-size: 14px;
  }
</style>