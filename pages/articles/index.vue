<template>
    <h1>List of articles</h1>
    <article v-for="article in articles">
        {{ article.title }}
    </article>
    <pre>{{ articles }}</pre>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: articles } = useAsyncData(`${route.path}`, () => queryContent('articles').sort({ _id: -1 }).find());
</script>