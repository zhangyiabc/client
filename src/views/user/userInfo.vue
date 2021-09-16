<template>
  <div class="user-info">
    <div class="user-container">
      <el-descriptions
        title="垂直带边框列表"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="邮箱">18100000000</el-descriptions-item>

        <el-descriptions-item label="头像" :span="2"
          >苏州市</el-descriptions-item
        >
        <el-descriptions-item label="性别">
          <el-tag size="small">男</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <div class="user-book">
        我的文章
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user-container {
  width: 80%;
  margin: 0 auto;
}
</style>
