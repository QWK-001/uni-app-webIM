<template>

	<video :src="item.msg.data" controls autoplay></video>

</template>

<script>
    export default {
    		name: "video-diy",
    		props: ["item"]
    	}
</script>
