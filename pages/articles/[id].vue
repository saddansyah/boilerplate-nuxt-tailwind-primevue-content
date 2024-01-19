<template>
    <h4 class="font-bold">{{ route.path }}</h4>
    <pre>{{ data }}</pre>
    <article class="prose container">
        <ContentDoc>
            <template #empty>
                <h1>Document is empty</h1>
            </template>
        </ContentDoc>
    </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = useAsyncData(`${route.path}`, () => queryContent(route.path).findOne());
</script>