import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Anton, Campana, Nanita, Peces, Tutaina } from '../pages/Sings';
import { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven } from '../pages/Steps'
import { DayOne, DayTwo, DayThree, DayFour, DayFive, DaySix, DaySeven, DayEigth, DayNine } from '../pages/Days';
import Home from '../pages/Home';
import Layout from './Layout';

const Container = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stepone' element={<StepOne />} />
          <Route path='/steptwo' element={<StepTwo />} />
          <Route path='/stepthree' element={<StepThree />} />
          <Route path='/stepfour' element={<StepFour />} />
          <Route path='/stepfive' element={<StepFive />} />
          <Route path='/stepsix' element={<StepSix />} />
          <Route path='/stepseven' element={<StepSeven />} />
          <Route path='/anton' element={<Anton />} />
          <Route path='/tutaina' element={<Tutaina />} />
          <Route path='/nanita' element={<Nanita />} />
          <Route path='/campana' element={<Campana />} />
          <Route path='/peces' element={<Peces />} />
          <Route path='/dayone' element={<DayOne />} />
          <Route path='/daytwo' element={<DayTwo />} />
          <Route path='/daythree' element={<DayThree />} />
          <Route path='/dayfour' element={<DayFour />} />
          <Route path='/dayfive' element={<DayFive />} />
          <Route path='/daysix' element={<DaySix />} />
          <Route path='/dayseven' element={<DaySeven />} />
          <Route path='/dayeight' element={<DayEigth />} />
          <Route path='/daynine' element={<DayNine />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Container;