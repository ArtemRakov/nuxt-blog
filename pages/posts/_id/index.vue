<template>
  <div class="single-post-page">
    <section class="post">
        <h1 class="post-title">  {{ loadedPost.title }} </h1>
        <div class="post-details">
          <div class="post-detail"> Last updated on  {{ loadedPost.updatedDate }} </div>
          <div class="post-detail"> Written by {{ loadedPost.author}} </div>
        </div>
        <p class="post-content"> Content of the post </p>
    </section>

    <section class="post-feedback">
        <p>Let me know what you thing about the post, send a mail to <a href="mailito:feedback@feedbback.com"> feedback@feedbback.com </a></p>
    </section>
  </div>
</template>


<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: { id: '1', title: "First Post (ID: " + context.route.params.id + ")", author: 'Artem', updatedDate: new Date(), contect: 'Dummy text', previewText: 'Amazing post', thumbnail: 'https://www.dreamhost.com/blog/wp-content/uploads/2016/08/DreamHost-Top-Tech-Trends.jpg' }
        })
      }, 1000);
    })
    .then(data => {
      return data
    })
    .catch(e => {
      context.error(new Error())
    })
   
  }
}
</script>


<style scoped>
.single-post-page {
padding: 30px;
text-align: center;
box-sizing: border-box;
}

.post {
width: 100%;
}


.post-title {
margin: 0;
}

.post-details {
padding: 10px;
box-sizing: border-box;
border-bottom: 3px solid #ccc;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}


.post-detail {
color: rgb(88, 88, 88);
margin: 0 10px;
}

.post-feedback a {
color: red;
text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
color: salmon;
}
 
</style>

