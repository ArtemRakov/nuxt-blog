<template>
  <div class="admin-post-page">
    <section class="update-form">
       <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>


<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },

  data() {
    return {
      loadedPost: {
        author: 'Artem',
        title: 'My awesome Post',
        content: 'Super Amazing, thanks',
        thumbnailLink: 'https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Top-Tech-Trends.jpg'
      }
    }
  }

}
</script>


<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>


