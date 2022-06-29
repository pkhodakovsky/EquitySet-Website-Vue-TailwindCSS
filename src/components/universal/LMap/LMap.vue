<template>
  <div class="l-map">
    <l-map ref="leaf" :style="`height: ${height}`" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer } from 'vue2-leaflet';

export default {
  name: 'Home',
  props: {
    height: { type: String, default: '290px' },
  },
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      zoom: 12,
      center: [37.750893125767696, -122.48841403066477],
    };
  }
}
</script>
