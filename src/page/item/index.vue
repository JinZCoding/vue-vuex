<template>
    <div class="home_container">
        <itemCon fatherComponent='item'></itemCon>
    </div>
</template>

<script>
//引入模板
import itemCon from '../../components/itemContainer'

export default {
  name: "home",
  components: {
    itemCon
  }
};
</script>
<style lang="less">
body {
  background-image: url(../../images/1-1.jpg);
  // padding-top: 1.2rem;
}
</style>
