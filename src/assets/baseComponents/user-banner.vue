<template>
  <div class="user">
    <div class="avatar">
      <img :src="user.avatar" alt="user header">
    </div>
    <h1 class="name">
      {{user.name}}
    </h1>
    <div class="info">
      <div class="desc" v-show="!editDesc">
        {{user.desc}}
        <span class="edit-btn">
          (<a @click="editDesc = true">编辑</a>)
        </span>
      </div>
      <div class="edit-desc" v-show="editDesc">
        <input type="text" v-model="user.desc">
        <input type="submit" value="提交" @click="updateUserDesc">
        <input type="button" value="取消" @click="cancelUpdateUserDesc">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user-banner',
    props: {
      user: {
        type: Object,
        default() {
          return {
            name: '默认用户',
            avatar: 'https://img3.doubanio.com/icon/ul84565043-2.jpg',
            desc: '默认描述'
          }
        }
      }
    },
    data() {
      return {
        editDesc: false
      }
    },
    methods: {
      updateUserDesc() {
        this.editDesc = false
      },
      cancelUpdateUserDesc() {
        this.editDesc = false
      }
    }
  }
</script>

<style scoped lang="less">
  .user {
    &:after {
      content: ' ';
      clear: both;
      display: block;
    }
    .avatar {
      width: 48px;
      height: 48px;
      overflow: hidden;
      float: left;
      margin: 0 12px 18px 0;
      img {
        width: 48px;
      }
    }
    .name {
      padding: 0 0 4px 0;
      font-size: 26px;
      color: #494949;
      line-height: 1.1;
    }
    .desc {
      color: #666;
    }
  }
</style>