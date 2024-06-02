<script setup>
import { RouterLink } from 'vue-router';
defineProps(['post'])
</script>
<template>
  <RouterLink :to="'/post/' + post.id" class="post_component">
    <div class="img">
      <img :src="post.image" alt="" />
    </div>

    <div>
      <h4 class="title">{{ post.title }}</h4>
      <span class="desc">{{ post.content }}</span>
      <div class="post__footer">
        <span class="comments">
          <svg width="15px" height="15px" viewBox="0 0 32 32" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="black">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>comment-5</title>
              <desc>Created with Sketch Beta.</desc>
              <defs> </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -255.000000)"
                  fill="black">
                  <path
                    d="M390,277 C390,278.463 388.473,280 387,280 L379,280 L376,284 L373,280 L365,280 C363.527,280 362,278.463 362,277 L362,260 C362,258.537 363.527,257 365,257 L387,257 C388.473,257 390,258.537 390,260 L390,277 L390,277 Z M386.667,255 L365.333,255 C362.388,255 360,257.371 360,260.297 L360,277.187 C360,280.111 362.055,282 365,282 L371.639,282 L376,287.001 L380.361,282 L387,282 C389.945,282 392,280.111 392,277.187 L392,260.297 C392,257.371 389.612,255 386.667,255 L386.667,255 Z"
                    id="comment-5" sketch:type="MSShapeGroup"> </path>
                </g>
              </g>
            </g>
          </svg>
          <span>{{ post.comments.length }}</span>
        </span>
        <span class="date"> {{ post.created_at }}</span>
      </div>

    </div>

  </RouterLink>
</template>

<style scoped>
.post_component {
  border-radius: 5px;
  overflow: hidden;
  background-color: #f2ddbe;
  transition: 0.5s all;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1480px;
  width: 100%;
  & .post__footer{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1em;
    gap: 20px;
    & .comments{
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .img {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(10px);
      z-index: 0;
    }

    img {
      max-width: 1480px;
      max-height: 800px;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
  }


  &>div {
    padding: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .date {
    text-align: right;
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    max-height: 40px;
    max-width: 1450px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .desc {
    font-size: 15px;
    max-width: 1450px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    box-shadow: 0px 0px 1px black;
  }
}
</style>
