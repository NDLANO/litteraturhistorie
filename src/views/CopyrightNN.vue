<template lang="pug">
.lo_fullOverlay
  .lo_fullContainer
    .lo_pageTopBar
      ButtonBackArrow
      .pageTopBar_firstItem Opphavsrett
    
    .page.page_copyright
      PageBanner(:src="bannerImageLink")
      .page_content
        h1 Opphavsrett
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate commodo bibendum. Proin laoreet consequat ipsum, eget sagittis enim vulputate placerat. Aenean quis faucibus nibh. Morbi vitae lorem rhoncus, porttitor neque quis, dapibus nisl. Sed luctus blandit egestas. Etiam et enim ut justo fringilla efficitur. Aliquam nec aliquam neque.
        p Donec accumsan tristique justo ac tempor. Morbi eget elit ligula. Nunc turpis ligula, euismod ac orci id, aliquet dignissim justo. Donec vehicula, leo at luctus dignissim, turpis mi placerat ipsum, at posuere mi libero sed ligula. Nulla enim est, aliquam scelerisque imperdiet semper, imperdiet vitae orci. Cras consequat, justo id tristique condimentum, nibh sapien mattis lorem, ac elementum lacus nisl vitae nulla. Nulla consequat nisi quis iaculis bibendum. Cras imperdiet ligula arcu, eu consectetur lacus elementum ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia imperdiet faucibus. Nam ac justo dignissim lorem blandit rutrum. Proin sit amet orci ultricies sapien tempus tristique. Curabitur et ullamcorper neque, quis dapibus metus. Sed at nulla sed eros eleifend cursus eget vitae dui. Vestibulum sit amet tincidunt sapien. Nulla hendrerit, massa quis pellentesque luctus, enim eros venenatis neque, sed vulputate nibh turpis in ligula.
        p Aliquam gravida dui a nibh rutrum, ac facilisis est volutpat. Quisque ultrices, eros a aliquet porta, augue elit bibendum risus, id vestibulum erat nisi vitae nulla. Nulla fermentum nulla a est dignissim, sit amet euismod lacus venenatis. Quisque ultricies blandit commodo. Phasellus vehicula mattis tincidunt. Curabitur lacinia, turpis eu ullamcorper dignissim, orci augue pharetra massa, vitae ultricies dui sem non justo. Pellentesque vitae est eget quam vehicula pretium. Etiam magna dolor, varius nec leo at, hendrerit accumsan lectus. Suspendisse a eleifend augue. Morbi efficitur semper congue. Sed pulvinar elit eget magna feugiat pulvinar. Sed a luctus tortor. Nulla sed lectus lectus. Sed iaculis mi tempor magna tincidunt semper. In et eleifend mauris, non elementum purus. Nullam et interdum arcu.
        p Morbi non vulputate tellus, ac ullamcorper dolor. Nunc scelerisque augue eget sem ultrices mollis. Vestibulum laoreet enim sed arcu ultrices pretium. Integer sodales, sem eu cursus porttitor, odio urna pulvinar velit, id dignissim odio diam sit amet nibh. Nullam ut tortor tempus libero tempus pulvinar. In in placerat urna, eget eleifend est. Phasellus rutrum neque ut purus sodales, eu condimentum nulla vehicula.
        p Integer bibendum arcu vitae vestibulum euismod. Quisque ut risus ac urna ultrices convallis at sit amet mauris. Pellentesque interdum dapibus odio. Aenean at sollicitudin augue. Nunc consectetur pulvinar porttitor. Duis nulla augue, feugiat id blandit porttitor, iaculis quis turpis. Integer non varius purus. Nunc consectetur ac neque et efficitur.
        
        slot
        
        button.btn_back(@click="$router.push(`/${globalVars.langCode}`)")
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          div {{ $t("general.pageBookBackButton")}}
        
</template>

<script>
import ButtonBackArrow from "@/components/ButtonBackArrow";

export default {
  name: "CopyrightNN",
  components: {
    ButtonBackArrow,
  },
  inject: ["globalVars"],
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
