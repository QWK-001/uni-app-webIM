<template>

	<audio :src="item.msg.url" controls autoplay></audio>

</template>

<script>
    export default {
    		name: "audio-diy",
    		props: ["item"]
    	}
</script>
