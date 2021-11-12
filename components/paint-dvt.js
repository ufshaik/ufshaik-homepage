import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

const PaintDvt = () =>{
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(0, 0.3, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback( () =>{
    const {current: container } = refContainer
    if (container && renderer){
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect( () =>{
    const { current: container } = refContainer
    if (container && !renderer){
      let mixer; // Gets updated on return from gltf model
      let clock = new THREE.Clock();
      const scW = container.clientWidth
      const scH = container.clientHeight
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const camera = new THREE.PerspectiveCamera( 4, scW / scH, 0.1, 1000 );
      camera.position.set(0, 0, 10)
      camera.position.copy( initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.4 );
      hemiLight.position.set( 0, 20, 0 );
      scene.add( hemiLight );

      const dirLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
      dirLight.position.set( - 3, 10, - 10 );
      scene.add( dirLight );

      const ambientLight = new THREE.AmbientLight(0xcccccc,0.5)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)


      loadGLTFModel(scene, '/Pathfinder_1k.glb', {
        receiveShadow: true,
        castShadow: true
      }).then( (obj) =>{
        mixer = obj[1] // assign returned mixer as a local variable
        animate()
        setLoading(false)
      })

      let req = null

      const animate = () => {
          if ( mixer ) mixer.update( clock.getDelta() );
          req = requestAnimationFrame(animate)
          controls.update()
          renderer.render(scene, camera)
      }
      return ( ) =>{
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect( () => {
    window.addEventListener('resize', handleWindowResize, false)
    return () =>{
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return(
    <Box ref={refContainer} className={"paint-dvt"} m={"auto"}
         at={['-20px', '-60px', '-120px']}
         mb={["-40px", "-140px", "-200px"]}
         w={[280, 480, 640]}
         h={[280, 480, 640]}
         position={"relative"}
    >
      { loading && (
        <Spinner
          size={"xl"}
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          ml={"calc(0px - var(--spinner-size) / 2 )"}
          mt={"calc(0px - var(--spinner-size)"} />
      )}
    </Box>
  )
}

export default PaintDvt