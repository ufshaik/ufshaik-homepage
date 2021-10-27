import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCircle(x){
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const PaintDvt = () =>{
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)

  return(
    <Box ref={refContainer} className={"paint-dvt"} m={"auto"}
         at={['-20px', '-60px', '-120px']}
         mb={["-40px", "-140px", "-200px"]}
         w={[280, 480, 640]}
         h={[280, 480, 640]}
         position={"relative"}
    >
      { loading && (
        <Spinner size={"xl"} position={"absolute"} left={"50%"}
                 top={"50%"} ml={"calc(0px - var(--spinner-size) / 2 )"} mt={"calc(0px - var(--spinner-size)"} />
      )}
      Dragon Vs Troll !!
    </Box>
  )
}

export default PaintDvt