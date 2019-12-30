<template>

	<image class="avatar" :src="( '../../../images/faces/' + item.data )" style="width:25px; height:25px; margin:0 0 2px 0; float:left;"></image>

</template>

<script>
    export default {
    		name: "emoji",
    		props: ["item"]
    	}
</script>
