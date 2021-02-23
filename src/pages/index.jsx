import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../Components/LoadingPage';
import ApiProvider from '../Context/Api';
import PoiProvider from '../Context/Poi';
import SwitchProvider from '../Context/Switches';

const LoadComponents = (name) => {
  return lazy(() => import(`./Components/${name}`));
};

const Homepage = LoadComponents('Home');
const WelcomeDataPage = LoadComponents('Welcome');
const ChartsPage = LoadComponents('Charts');
const PoiPage = LoadComponents('Geo');

const Pages = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<Loading />}>
            <Homepage />
          </Suspense>
        </Route>

        <Route exact path="/data">
          <Suspense fallback={<Loading />}>
            <WelcomeDataPage />
          </Suspense>
        </Route>

        <Route exact path="/charts">
          <ApiProvider>
            <SwitchProvider>
              <Suspense fallback={<Loading />}>
                <ChartsPage />
              </Suspense>
            </SwitchProvider>
          </ApiProvider>
        </Route>

        <Route exact path="/locations">
          <PoiProvider>
            <Suspense fallback={<Loading />}>
              <PoiPage />
            </Suspense>
          </PoiProvider>
        </Route>
      </Switch>
    </>
  );
};

export default Pages;
