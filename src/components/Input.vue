<template>
  <input type="text">
</template>

<script lang="ts">
import { Options, Pro, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  type: string = 'text'

}
</script>