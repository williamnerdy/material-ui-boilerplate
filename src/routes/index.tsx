import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loading from 'components/Loading'
import HomePage from 'pages/Home'
import { HOME_PAGE } from 'constants/urls'

const Routes = () => (
  <Switch>
    <Route path={HOME_PAGE} exact>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </Route>
  </Switch>
)

export default Routes
