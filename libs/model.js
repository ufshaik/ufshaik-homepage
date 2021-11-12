import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true },
  mixer
){
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      gltf =>{
        const obj = gltf.scene
        obj.name = 'dvt'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        mixer = new THREE.AnimationMixer(obj);
        mixer.clipAction(gltf.animations[0]).play();
        scene.add(obj);

        obj.traverse(function (node){
          if(node.isMesh) {
            node.castShadow = castShadow
            node.receiveShadow = receiveShadow
          }
        })

        scene.add(obj)
        resolve([obj, mixer])
      },
      undefined,
      function(error){
        reject(error)
      }
    )
  })
}