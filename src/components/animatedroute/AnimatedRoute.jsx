import {React, Suspense, lazy } from "react";
import { Routes, Route, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion";
// pages
import Home from '../../pages/Home'

const Mat = lazy( () => import("../../pages/Materials science/Mat") )
const Cad = lazy( () => import("../../pages/CAD/Cad") )
const Web = lazy( () => import("../../pages/Web dev/Web") )
const Gra = lazy( () => import("../../pages/Graphics design/Gra") )
const Bus = lazy( () => import("../../pages/Business/Bus") )
const Misc = lazy( () => import("../../pages/Misc/Misc") )





const Animatedroute = () => {

  const location = useLocation();
  return (
    
    <>
   <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>

          <Route index element={<Home />} />

          

            <Route index element={<Mat />} />

            <Route path="mat" element={
              <Suspense fallback='Loading...'>

            <Mat/>

            </Suspense>
            } 
            />

          <Route index element={<Web />} />

          <Route path="web" element={
            <Suspense fallback='Loading...'>

          <Web/>

          </Suspense>
          } 
          />

          <Route index element={<Cad />} />

          <Route path="cad" element={
            <Suspense fallback='Loading...'>

          <Cad/>

          </Suspense>
          } 
          />


          
          <Route index element={<Gra />} />

          <Route path="gra" element={
            <Suspense fallback='Loading...'>

          <Gra/>

          </Suspense>
          } 
          />

            <Route path="bus" element={
              <Suspense fallback='Loading...'>

            <Bus/>

            </Suspense>
            } 
            />

            <Route path="misc" element={
                <Suspense fallback='Loading...'>

              <Misc/>

              </Suspense>
              } 
              />
          

      
        </Routes>
    </AnimatePresence>
    </>
  )
}

export default Animatedroute
