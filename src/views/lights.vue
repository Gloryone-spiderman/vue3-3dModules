<template>
  <div id="info" style="height: 700px;">
  </div>
</template>

<script>
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib";

export default {
  name: "lights",
  data () {
  return{
    scene: null,
    stats: null,
    renderer: null,
    camera: null
  }
  },
  methods: {
    init() {

      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.setAnimationLoop( this.animation );
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      document.body.appendChild( this.renderer.domElement );

      this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
      this.camera.position.set( 0, 5, - 15 );

      this.scene = new THREE.Scene();

      RectAreaLightUniformsLib.init();

      const rectLight1 = new THREE.RectAreaLight( 0xff0000, 5, 4, 10 );
      rectLight1.position.set( - 5, 5, 5 );
      this.scene.add( rectLight1 );

      const rectLight2 = new THREE.RectAreaLight( 0x00ff00, 5, 4, 10 );
      rectLight2.position.set( 0, 5, 5 );
      this.scene.add( rectLight2 );

      const rectLight3 = new THREE.RectAreaLight( 0x0000ff, 5, 4, 10 );
      rectLight3.position.set( 5, 5, 5 );
      this.scene.add( rectLight3 );

      this.scene.add( new RectAreaLightHelper( rectLight1 ) );
      this.scene.add( new RectAreaLightHelper( rectLight2 ) );
      this.scene.add( new RectAreaLightHelper( rectLight3 ) );

      const geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
      const matStdFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.1, metalness: 0 } );
      const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
      this.scene.add( mshStdFloor );

      const geoKnot = new THREE.TorusKnotGeometry( 1.5, 0.5, 200, 16 );
      const matKnot = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0 } );
      const meshKnot = new THREE.Mesh( geoKnot, matKnot );
      meshKnot.name = 'meshKnot';
      meshKnot.position.set( 0, 5, 0 );
      this.scene.add( meshKnot );

      const controls = new OrbitControls( this.camera, this.renderer.domElement );
      controls.target.copy( meshKnot.position );
      controls.update();

      //

      window.addEventListener( 'resize', this.onWindowResize );

      this.stats = new Stats();
      let tag = document.getElementById('info')
      tag.appendChild( this.stats.dom );

    },
    animation( time ) {

      const mesh = this.scene.getObjectByName( 'meshKnot' );
      mesh.rotation.y = time / 1000;

      this.renderer.render( this.scene, this.camera );

      this.stats.update();

    },
    onWindowResize() {

      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.camera.aspect = ( window.innerWidth / window.innerHeight );
      this.camera.updateProjectionMatrix();

    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped>

</style>
